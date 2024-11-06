import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import imageCard from '../../../assets/images/home/imageCard.png'

const NonProfitsCard = ({ campaign }) => {
    return (
        <div className="flex justify-center p-1">
            <div className="w-full max-w-xs sm:max-w-sm rounded-3xl shadow-lg mt-10 p-4 bg-gradient-to-b from-primary-light-300 to-primary-light-500 relative">
                <div className="flex justify-center mb-4">
                    <img
                        src={imageCard}
                        alt={campaign.title}
                        className="rounded-3xl w-full h-auto object-cover"
                    />
                </div>

                <div className="flex justify-between items-start">
                    <div className="text-left mb-1 w-2/2 pr-2">
                        <h2 className="text-sm font-semibold mb-1 line-clamp-1">{campaign.title}</h2>
                        <p className="text-sm line-clamp-3">{campaign.description}</p>
                    </div>

                    <div className="flex flex-col items-end text-right w-1/2 pl-2">
                        <div className="flex items-center mb-1">
                            <span className="text-sm font-bold">{campaign.countOfLikes}</span>
                            <FaHeart className="ml-2 text-xs" />
                        </div>

                        <p className="whitespace-nowrap text-sm">Expira em: {campaign.expiresIn}</p>

                        <button className="bg-primary-light-700 text-xs text-white px-3 py-1 rounded-lg flex items-center justify-center mt-2">
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