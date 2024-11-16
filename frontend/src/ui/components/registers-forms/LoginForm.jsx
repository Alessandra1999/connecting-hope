import React from "react";
import { FaCamera, FaUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { userLogin } from "../../../api/apiService";
import { useNavigate } from "react-router-dom";

const loginFormSchema = z.object({
  emailUser: z.string().email(),
  passwordUser: z.string().min(8),
});

const LoginForm = ({
  openUserForm,
  openRecoveryPassword,
  openOngForm,
  onLogin,
}) => {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      emailUser: "",
      passwordUser: "",
    },
  });
  const navigate = useNavigate()

  function handleLogin (data) {
    try {
      onLogin(data);
    } catch(error) {
      console.log(error)
    }

  }

  return (
    <div
      className="flex flex-col items-center p-6 rounded-3xl shadow-2xl w-full max-w-[86vw] sm:max-w-sm mx-auto mb-10 mt-5"
      style={{
        background:
          "linear-gradient(to bottom right, rgba(86, 105, 129, 0.8) 60%, rgba(203, 218, 213, 0.1) 90%)",
      }}
    >
      <form onSubmit={handleSubmit(handleLogin)}>
        <div className="relative">
          <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center text-4xl mb-4">
            <FaUser />
          </div>
        </div>

        <div className="relative w-full max-w-[90vw] md:max-w-[60vw] lg:max-w-[30vw] mx-auto">
          <button className="flex items-center justify-center w-full hover:bg-gray-300 py-3 md:py-4 bg-white rounded-xl font-semibold text-sm md:text-base lg:text-sm">
            <FcGoogle className="absolute left-4 md:left-6 w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
            <span>Continue com o Google</span>
          </button>
        </div>

        <div className="flex w-full items-center my-4">
          <hr className="w-full border-[#1E1E1E] dark:border-white" />
          <span className="px-2 text-[#1E1E1E] font-semibold dark:text-white">
            OU
          </span>
          <hr className="w-full border-[#1E1E1E] dark:border-white" />
        </div>

        <div className="w-full text-left space-y-4 text-[#1E1E1E]">
          <div>
            <label className="block text-sm font-semibold dark:text-white">
              E-mail:
            </label>
            <input
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
              type="password"
              placeholder="********"
              className="w-full p-3 rounded-xl hover:bg-gray-300 bg-white"
              {...register("passwordUser")}
            />
          </div>
        </div>

        <div className="flex items-center mt-4">
          <button
            onClick={openRecoveryPassword}
            className="text-sm font-bold dark:text-white text-[#1E1E1E]"
          >
            Esqueceu sua senha?
          </button>
        </div>

        <div className="flex w-full space-x-4">
          <button
            type="submit"
            className="w-full mt-4 py-3 bg-white hover:bg-gray-300 text-[#34344E] rounded-xl font-semibold"
          >
            Entrar
          </button>
        </div>

        <div className="flex items-center mt-4">
          <button
            onClick={openUserForm}
            className="text-sm font-bold dark:text-white text-[#1E1E1E]"
          >
            Não tem uma conta?
            <a href="#" className="underline">
              {" "}
              CADASTRE-SE
            </a>
          </button>
          <button
            onClick={openOngForm}
            className="text-sm font-bold dark:text-white text-[#1E1E1E]"
          >
            Deseja criar uma ONG?
            <a href="#" className="underline">
              {" "}
              CADASTRE-SE
            </a>
          </button>
        </div>
        <ToastContainer position="top-right" autoClose={3000} />
      </form>
    </div>
  );
};

export default LoginForm;
