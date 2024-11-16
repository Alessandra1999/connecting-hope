import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';

const NonProfitsComment = ({ feedbacks, title, userPictureUrl }) => {
    return (
        <div className="flex justify-center p-4 flex-wrap">
            {feedbacks && feedbacks.length > 0 ? (
                feedbacks.map((feedback, index) => (
                    <div key={index} className="max-w-xs w-full rounded-3xl shadow-lg mt-4 p-4 bg-gradient-to-b from-primary-light-300 to-primary-light-500 dark:bg-gradient-to-b dark:from-[#566981] dark:to-[#3A4A5F relative">
                        <h2 className="text-lg font-bold dark:text-white line-clamp-2 mb-2">{title}</h2> 
                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <img
                                    src={userPictureUrl}
                                    alt={feedback.personName}
                                    className="rounded-full w-10 h-10 object-cover shadow-sm"
                                />
                            </div>

                            <div className="ml-3 text-left flex-grow dark:text-white">
                                <h3 className="text-sm font-semibold line-clamp-2">{feedback.personName}</h3>
                                <p className="text-sm mb-1 italic max-w-max line-clamp-3">{feedback.feedback}</p>
                            </div>
                        </div>

                      
                        <div className="flex justify-center mt-2">
                            <button className="bg-primary-light-700 dark:bg-primary-dark-700 text-xs text-white px-3 py-1 rounded-lg flex items-center justify-center">
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
