import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';

const NonProfitsComment = ({ feedbacks, title }) => {
    return (
        <div className="flex justify-center p-4 flex-wrap">
            {feedbacks && feedbacks.length > 0 ? (
                feedbacks.map((feedback, index) => (
                    <div key={index} className="max-w-xs w-full rounded-3xl shadow-lg mt-4 p-4 bg-gradient-to-b from-[#A7CCD9] to-[#6FA7BA] relative">
                        <h2 className="text-lg font-bold w-full  mb-2">{title}</h2> {/* Renderizando o título */}
                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <img
                                    src="https://via.placeholder.com/100"
                                    alt={feedback.personName}
                                    className="rounded-full w-10 h-10 object-cover border-2 border-white shadow-sm"
                                />
                            </div>

                            <div className="ml-3 max-w-40 text-left flex-grow">
                                <h3 className="text-sm font-semibold truncate">{feedback.personName}</h3>
                                <p className="text-sm mb-1 italic truncate overflow-hidden whitespace-nowrap">{feedback.feedback}</p>
                            </div>
                        </div>

                      
                        <div className="flex justify-center mt-2">
                            <button className="bg-[#13485A] text-xs text-white px-3 py-1 rounded-lg flex items-center justify-center">
                                Mais detalhes
                                <FaChevronRight className="ml-2" />
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-sm text-gray-600">Nenhum feedback disponível.</p>
            )}
        </div>
    );
};

export default NonProfitsComment;
