import axios from "axios";

export const BASE_URL = "http://localhost:3306"; // veririfcar qual a porta correta

const API_URL = "http://localhost:8080"; //verificar

export const createPaymentIntent = async (amount, paymentMethodType, connectedAccountId) => {
  const amountInCents = Math.round(amount * 100);
  console.log(
    "amountInCents, paymentMethodType, connectedAccountId:",
    amountInCents,
    paymentMethodType,
    connectedAccountId
  );
  try {
    const response = await axios.post(
      `${API_URL}/donations/create-payment-intent`,
      {
        amountInCents,
        connectedAccountId,
        paymentMethodTypes: paymentMethodType ? [paymentMethodType] : [],
      }
    );
    console.log("response.data:", response.data);
    return response.data; // Retorna o client_secret
  } catch (error) {
    console.error("Erro ao criar Payment Intent:", error);
    throw error;
  }
};

export const createConnectedAccount = async (email) => {
  try {
    const response = await axios.post(
      `${API_URL}/create-connected-account`,
      null,
      {
        params: {
          email: email, // Passando o email como parâmetro
        },
      }
    );
    console.log("Conta conectada criada:", response.data);
    return response.data; // Retorna os dados da conta conectada (incluindo accountId)
  } catch (error) {
    console.error("Erro ao criar conta conectada:", error);
    throw error;
  }
};

export const createAccountLink = async (accountId) => {
  try {
    const response = await axios.post(`${API_URL}/create-account-link`, null, {
      params: {
        accountId: accountId, // Passando o accountId como parâmetro
      },
    });
    console.log("Link de configuração criado:", response.data);
    return response.data; // Retorna a URL do link de configuração
  } catch (error) {
    console.error("Erro ao criar link de configuração da conta:", error);
    throw error;
  }
};
