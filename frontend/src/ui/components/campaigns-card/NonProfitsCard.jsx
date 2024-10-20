import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';

const NonProfitsCard = ({ campaign }) => {
    return (
        <div className="flex justify-center p-1">
            <div className="max-w-xs w-full rounded-3xl shadow-lg mt-10 p-4 bg-gradient-to-b from-[#A7CCD9] to-[#6FA7BA] relative">
                
                <div className="flex justify-center mb-4">
                    <img
                        src="https://via.placeholder.com/500x500"
                        alt={campaign.title}
                        className="rounded-3xl w-full h-auto object-cover"
                    />
                </div>

                <div className="flex justify-between items-start">
                    {/* Título e descrição */}
                    <div className="max-w-24 text-left mb-4 w-1/2 pr-2"> {/* Ajuste na largura e adicione padding à direita */}
                        <h2 className="text-sm font-semibold mb-1">{campaign.title}</h2>
                        <p className="text-sm mb-1 italic">{campaign.description}</p>
                    </div>

                    {/* Contagem de likes e data */}
                    <div className="flex flex-col items-end text-right w-1/2 pl-2"> {/* Ajuste na largura e adicione padding à esquerda */}
                        <div className="flex items-center mb-1">
                            <span className="text-sm font-bold">{campaign.countOfLikes}</span>
                            <FaHeart className="ml-2 text-xs" />
                        </div>

                        <p className="whitespace-nowrap text-sm">Expira em: {campaign.expiresIn}</p>

                        <button className="bg-[#13485A] text-sm text-white px-3 py-1 rounded-lg flex items-center justify-center mt-2">
                            Saiba mais
                            <FaChevronRight className="ml-2" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NonProfitsCard;
