import React from "react";
import { FaCamera, FaUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const OngForm = () => {
    return (
        <div className="flex flex-col items-center p-6 rounded-3xl shadow-2xl max-w-sm mx-auto mt-10 mb-10"
            style={{
                background: "linear-gradient(to bottom right, rgba(86, 105, 129, 0.8) 60%, rgba(203, 218, 213, 0.1) 90%)"
            }}
        >

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
                    <label className="block text-sm font-semibold">ONG:</label>
                    <input
                        type="text"
                        placeholder="Nome Fantasia"
                        className="w-full p-3 rounded-xl bg-white"
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold">CNPJ:</label>
                    <input
                        type="text"
                        placeholder="XX. XXX. XXX/0001-XX"
                        className="w-full p-3 rounded-xl bg-white"
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold">End.:</label>
                    <textarea
                        placeholder="Rua da invenção, nº NN, bairro Jardim, cidade Paixão"
                        className="w-full p-3 rounded-xl bg-white"
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold">E-mail:</label>
                    <input
                        type="email"
                        placeholder="batata@gmail.com"
                        className="w-full p-3 rounded-xl bg-white"
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold">Senha:</label>
                    <input
                        type="password"
                        placeholder="********"
                        className="w-full p-3 rounded-xl bg-white"
                    />
                </div>
            </div>


            <div className="flex items-center mt-4">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm font-bold text-[#1E1E1E]">
                    Concordo com os <a href="#" className="underline">Termos de Uso</a> e as <a href="#" className="underline">Políticas de Privacidade</a>
                </span>
            </div>


            <button className="w-full mt-4 py-3 bg-white text-[#34344E] rounded-xl font-semibold">
                Salvar
            </button>


            <div className="flex w-full items-center my-4">
                <hr className="w-full color-white-900" />
                <span className="px-2 text-[#1E1E1E] font-semibold">OU</span>
                <hr className="w-full border-black-900" />
            </div>

            <div className="relative w-full">
                <button className="flex items-center justify-center w-full py-3 bg-white rounded-xl font-semibold">
                    <FcGoogle className="absolute left-4 w-6 h-6" />
                    <span>Continue com o Google</span>
                </button>
            </div>

        </div>
    );
};

export default OngForm;
