import axios from "axios";

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

//Criar Usuário
export const createUser = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/users`, data);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    throw error;
  }
}

//Login
export const userLogin = async (data) => {
  try {
    console.log("data", data)
    const response = await axios.post(`${API_URL}/login`, data);
    console.log("response.data", response.data)
    return response.data;
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    throw error;
  }
}

export const loginWithGoogle = async (googleToken) => {
  try {
    const response = await axios.post(`${API_URL}/auth/google`, { token: googleToken});

    if (response.data.token) {
      localStorage.setItem('authToken', response.data.token);
    }

    return response;
  } catch (error) {
    console.error("Erro ao fazer login com o Google:", error);
    throw error; 
  }
}