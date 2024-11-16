import React from "react";
import { FaCamera, FaUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createUser } from "../../../api/api";

const registerFormSchema = z.object({
  nameUser: z.string(),
  emailUser: z.string().email(),
  passwordUser: z.string().min(8),
  addressUser: z.string(),
});

const UserForm = ({ openLoginForm }) => {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      nameUser: "",
      emailUser: "",
      photoUser: "",
      passwordUser: "",
      addressUser: "",
    },
  });

  async function onUserRegisterFormSubmit(data) {
    try {
        const user = await createUser(data)
        toast.success("Usuário criado com sucesso!")
    } catch(error) {
        toast.error("Ocorreu algum erro, verifique os dados e tente novamente")
        console.log(error)
    }
  }

  return (
    <div
      className="flex flex-col items-center p-6 rounded-3xl shadow-2xl max-w-[86vw] sm:max-w-sm overflow-y-auto mx-auto my-8 sm:my-10 mb-10"
      style={{
        background:
          "linear-gradient(to bottom right, rgba(86, 105, 129, 0.8) 60%, rgba(203, 218, 213, 0.1) 90%)",
      }}
    >
      <form onSubmit={handleSubmit(onUserRegisterFormSubmit)}>
        <div className="relative">
          <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center text-4xl mb-4">
            <FaUser />
          </div>
          <button className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md">
            <FaCamera className="text-[#1E1E1E]" />
          </button>
        </div>

        <div className="w-full text-left space-y-4 text-[#1E1E1E]">
          <div>
            <label className="block text-sm font-semibold dark:text-white">
              Nome:
            </label>
            <input
              required
              type="text"
              placeholder="Nome Fantasia"
              className="w-full p-3 rounded-xl hover:bg-gray-300 bg-white"
              {...register("nameUser")}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold dark:text-white">
              End.:
            </label>
            <textarea
              required
              placeholder="Rua da invenção, nº NN, bairro Jardim, cidade Paixão"
              className="w-full p-3 rounded-xl hover:bg-gray-300 bg-white"
              {...register("addressUser")}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold dark:text-white">
              E-mail:
            </label>
            <input
              required
              type="email"
              placeholder="batata@gmail.com"
              className="w-full p-3 rounded-xl hover:bg-gray-300 bg-white"
              {...register("emailUser")}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold dark:text-white">
              Senha:
            </label>
            <input
              required
              type="password"
              placeholder="********"
              className="w-full p-3 rounded-xl hover:bg-gray-300 bg-white"
              {...register("passwordUser")}
            />
          </div>
        </div>

        <div className="flex items-center mt-4">
          <input type="checkbox" className="mr-2" />
          <span className="text-sm font-bold text-[#1E1E1E] dark:text-white">
            Concordo com os{" "}
            <a href="/terms-of-use" className="underline">
              Termos de Uso
            </a>{" "}
            e as{" "}
            <a href="/privacy-policy" className="underline">
              Políticas de Privacidade
            </a>
          </span>
        </div>

        <div className="flex w-full space-x-4">
          <button
            onClick={openLoginForm}
            className="w-full mt-4 py-3 bg-white hover:bg-gray-300 text-[#34344E] rounded-xl font-semibold"
          >
            Entrar
          </button>

          <button type="submit" className="w-full mt-4 py-3 bg-[#13485A] hover:bg-[#0d313d] text-[#fff] rounded-xl font-semibold">
            Registre-se
          </button>
        </div>

        <div className="flex w-full items-center my-4">
          <hr className="w-full border-[#1E1E1E] dark:border-white" />
          <span className="px-2 text-[#1E1E1E] font-semibold dark:text-white">
            OU
          </span>
          <hr className="w-full border-[#1E1E1E] dark:border-white" />
        </div>

        <div className="relative w-full">
          <button className="flex items-center justify-center w-full hover:bg-gray-300 py-3 bg-white rounded-xl font-semibold">
            <FcGoogle className="absolute left-4 w-6 h-6" />
            <span>Continue com o Google</span>
          </button>
        </div>
        <ToastContainer position="top-right" autoClose={3000} />
      </form>
    </div>
  );
};

export default UserForm;
