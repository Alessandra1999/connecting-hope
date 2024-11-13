export const BASE_URL = 'http://localhost:3306'; // veririfcar qual a porta correta

import axios from "axios";

const API_URL = "http://localhost:8080"; //verificar

export const createPaymentIntent = async (amount, paymentMethodType) => {
    const amountInCents = Math.round(amount * 100.0);
    console.log("amountInCents, paymentMethodType:", amountInCents, paymentMethodType);
  try {
      const response = await axios.post(`${API_URL}/donations/create-payment-intent`, {
          amountInCents, // Converte para centavos
          paymentMethodType
      });
      console.log("response.data:" ,response.data)
      return response.data; // Retorna o client_secret
  } catch (error) {
      console.error("Erro ao criar Payment Intent:", error);
      throw error;
  }
};