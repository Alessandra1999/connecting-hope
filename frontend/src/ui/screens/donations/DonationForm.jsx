import { useState } from "react";
import { Button } from "@material-tailwind/react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createPaymentIntent } from "../../../api/apiService";

export function DonationForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [amount, setAmount] = useState("");
  const [paymentMethodType, setPaymentMethodType] = useState("pix");
  const [pixLink, setPixLink] = useState(null); // Para PIX
  const [boletoLink, setBoletoLink] = useState(null); // Para boleto

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      toast.error("Por favor, insira um valor válido para doação.");
      return;
    }

    try {
      const { clientSecret, nextActionUrl } = await createPaymentIntent(
        amount,
        paymentMethodType
      );

      if (paymentMethodType === "card") {
        const cardElement = elements.getElement(CardElement);
        const { paymentIntent, error } = await stripe.confirmCardPayment(
          clientSecret,
          { payment_method: { card: cardElement } }
        );

        if (error) {
          console.error(error.message);
          toast.error(error.message);
        } else if (paymentIntent.status === "succeeded") {
          toast.success("Doação realizada com sucesso!");
        }
      } else if (paymentMethodType === "pix") {
        setPixLink(nextActionUrl); // Configura o link para QR Code do PIX
      } else if (paymentMethodType === "boleto") {
        setBoletoLink(nextActionUrl); // Configura o link para boleto
      }
    } catch (error) {
      toast.error("Erro ao processar o pagamento. Tente novamente.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col max-w-full items-center bg-gradient-to-b from-primary-light-250 to-primary-light-400 dark:from-primary-dark-250 dark:to-primary-dark-500">
      <form
        onSubmit={handleSubmit}
        className="h-auto w-4/5 flex flex-col items-center justify-center text-center mt-8 bg-primary-light-450 dark:bg-primary-dark-150 border-opacity-75 border-primary-dark-650 border-8 gap-8 rounded-3xl"
      >
        <div className="mx-auto rounded-lg text-primary-light-750 dark:text-primary-dark-50 w-auto text-center font-bold text-5xl mt-4 mb-6">
          Faça sua Doação
        </div>
        <label className="text-2xl font-sans font-bold text-primary-light-750 dark:text-primary-dark-50">
          Valor:
          <input
            className="w-1/3 ml-4 font-normal rounded-md text-center text-primary-light-750 bg-primary-light-100"
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="R$0,00"
            required
          />
        </label>

        <label className="text-2xl flex flex-col font-sans font-bold text-primary-light-750 dark:text-primary-dark-50">
          Método de Pagamento:
          <select
            className="w-auto mt-2 font-normal text-primary-light-750 rounded-md bg-primary-light-100"
            value={paymentMethodType}
            onChange={(e) => setPaymentMethodType(e.target.value)}
          >
            <option value="card">Cartão de Crédito/Débito</option>
            <option value="pix">PIX</option>
            <option value="boleto">Boleto</option>
          </select>
        </label>

        {paymentMethodType === "card" && (
          <div className="mb-8 p-2 w-2/3 bg-primary-light-100 border border-gray-300 rounded-md">
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#32325d",
                    "::placeholder": { color: "#a0aec0" },
                  },
                  invalid: { color: "#fa755a" },
                },
              }}
            />
          </div>
        )}

        {paymentMethodType === "pix" && pixLink && (
          <div>
            <p>Escaneie o QR Code para completar o pagamento:</p>
            <img src={pixLink} alt="QR Code para pagamento com PIX" />
          </div>
        )}

        {paymentMethodType === "boleto" && boletoLink && (
          <div>
            <a href={boletoLink} target="_blank" rel="noopener noreferrer">
              Clique aqui para visualizar o boleto
            </a>
          </div>
        )}

        <Button
          className="w-1/3 md:w-1/6 text-md md:text-lg justify-center bg-primary-light-700 dark:bg-primary-dark-700 text-primary-light-50 font-bold"
          type="submit"
          disabled={!stripe}
        >
          Doar
        </Button>
        <ToastContainer position="top-right" autoClose={3000} />
      </form>
    </div>
  );
}
