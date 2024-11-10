import React, { useState } from "react";
import { FaCamera, FaUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const OngForm = ({ openLoginForm }) => {
    const [profileImage, setProfileImage] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageURL = URL.createObjectURL(file); // Cria um URL temporário para a imagem
            setProfileImage(imageURL); // Armazena o URL da imagem no estado
        }
    };

    return (
        <div className="flex flex-col items-center p-4 sm:p-6 rounded-3xl shadow-2xl max-w-[86vw] sm:max-w-sm overflow-y-auto mx-auto my-8 sm:my-10 mb-10"
            style={{
                
                background: "linear-gradient(to bottom right, rgba(86, 105, 129, 0.8) 60%, rgba(203, 218, 213, 0.1) 90%)"
            }}
        >
            <div className="relative mb-4">
                <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center text-4xl overflow-hidden">
                    {profileImage ? (
                        <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                    ) : (
                        <FaUser />
                    )}
                </div>
                <button className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md">
                    <FaCamera className="text-[#1E1E1E]" />
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                </button>
            </div>

            <div className="w-full text-left space-y-4 text-[#1E1E1E]">
                <div>
                    <label className="block text-sm font-semibold dark:text-white">ONG:</label>
                    <input
                        type="text"
                        placeholder="Nome Fantasia"
                        className="w-full p-3 rounded-xl hover:bg-gray-300 bg-white"
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold dark:text-white">CNPJ:</label>
                    <input
                        type="text"
                        placeholder="XX. XXX. XXX/0001-XX"
                        className="w-full p-3 rounded-xl hover:bg-gray-300 bg-white"
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold dark:text-white">End.:</label>
                    <textarea
                        placeholder="Rua da invenção, nº NN, bairro Jardim, cidade Paixão"
                        className="w-full p-3 rounded-xl hover:bg-gray-300 bg-white"
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold dark:text-white">E-mail:</label>
                    <input
                        type="email"
                        placeholder="batata@gmail.com"
                        className="w-full p-3 rounded-xl hover:bg-gray-300 bg-white"
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold dark:text-white">Senha:</label>
                    <input
                        type="password"
                        placeholder="********"
                        className="w-full p-3 rounded-xl hover:bg-gray-300 bg-white"
                    />
                </div>
            </div>

            <div className="flex items-center mt-4 text-xs sm:text-sm">
                <input type="checkbox" className="mr-2" />
                <span className="text-[#1E1E1E] dark:text-white font-bold">
                    Concordo com os <a href="#" className="underline">Termos de Uso</a> e as <a href="#" className="underline">Políticas de Privacidade</a>
                </span>
            </div>

            <div className="flex w-full space-x-4 mt-4">
                <button onClick={openLoginForm} className="w-full py-3 bg-white hover:bg-gray-300 text-[#34344E] rounded-xl font-semibold">
                    Entrar
                </button>
                <button className="w-full py-3 bg-[#13485A] hover:bg-[#0d313d] text-white rounded-xl font-semibold">
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

export default OngForm;
