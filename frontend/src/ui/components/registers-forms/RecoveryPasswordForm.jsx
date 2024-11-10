import React, { useState } from "react";
import { FaCamera, FaUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export const RecoveryPasswordForm = ({ isOpen, onClose, openLoginForm, openUserForm }) => {
    const [isPassword, seIsPassword] = useState('');

    return (
        <div className="flex flex-col items-center p-6 rounded-3xl shadow-2xl w-full max-w-[86vw] sm:max-w-sm mx-auto"
            style={{
                background: "linear-gradient(to bottom right, rgba(86, 105, 129, 0.8) 60%, rgba(203, 218, 213, 0.1) 90%)"
            }}
        >
            <div className="w-full text-left space-y-4 text-[#1E1E1E] dark:text-white">
                <p className="block text-2xl font-semibold">
                    Recuperação de senha
                </p>

                <div>
                    <label className="block text-sm font-semibold">Email:</label>
                    <input
                        type="text"
                        placeholder="Nome Fantasia"
                        className="w-full p-3 rounded-xl hover:bg-gray-300 bg-white"
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold">Senha:</label>
                    <input
                        type="password"
                        value={isPassword}
                        placeholder="********"
                        className="w-full p-3 rounded-xl hover:bg-gray-300 bg-white"
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold">Confirma sua senha:</label>
                    <input
                        type="password"
                        value={isPassword}
                        placeholder="********"
                        className="w-full p-3 rounded-xl hover:bg-gray-300 bg-white"
                    />
                </div>
            </div>

            <button className="w-full mt-4 py-3 bg-[#13485A] hover:bg-[#0d313d] text-[#fff] rounded-xl font-semibold">
                Enviar por email
            </button>

            <div className="flex w-full space-x-4">
                <button onClick={openLoginForm} className="w-full mt-4 py-3 bg-white hover:bg-gray-300 text-[#34344E] rounded-xl font-semibold">
                    Entrar
                </button>

                <button onClick={openUserForm} className="w-full mt-4 py-3 bg-[#13485A] hover:bg-[#0d313d] text-[#fff] rounded-xl font-semibold">
                    Registre-se
                </button>
            </div>

            <div className="flex w-full items-center my-4">
                <hr className="w-full border-[#1E1E1E] dark:border-white" />
                <span className="px-2 text-[#1E1E1E] font-semibold dark:text-white">OU</span>
                <hr className="w-full border-[#1E1E1E] dark:border-white" />
            </div>

            <div className="relative w-full">
                <button className="flex items-center justify-center w-full hover:bg-gray-300 py-3 bg-white rounded-xl font-semibold">
                    <FcGoogle className="absolute left-4 w-6 h-6" />
                    <span>Continue com o Google</span>
                </button>
            </div>
        </div>
    );
};