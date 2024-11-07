import React, { useState } from 'react';
import UserForm from '../../components/registers-forms/UserForm';
import LoginForm from '../../components/registers-forms/LoginForm';

export function InitialScreen() {
    const [isUserFormOpen, setUserFormOpen] = useState(false);
    const [isLoginFormOpen, setLoginFormOpen] = useState(true);

    const openUserForm = () => {
        setUserFormOpen(true);
        setLoginFormOpen(false);
    };

    const openLoginForm = () => {
        setLoginFormOpen(true);
        setUserFormOpen(false);
    };

    const closeForms = () => {
        setUserFormOpen(false);
        setLoginFormOpen(false);
    };

    return (
        <div className="w-full h-screen bg-gradient-to-b from-primary-light-250 to-primary-light-400 flex items-center justify-center text-xs">
            
            {/* Retângulos coloridos visíveis apenas em telas grandes */}
            <div className="hidden lg:flex p-8 max-w-6xl space-x-10 relative">
                <div
                    className={`grid grid-cols-2 gap-8 rounded-xl shadow-xl p-8 transition-transform duration-700 ease-in-out ${
                        isLoginFormOpen ? 'translate-x-40' : isUserFormOpen ? '-translate-x-96' : ''
                    }`}
                >
                    <div className="w-[10vw] h-[25vh] bg-red-700 rounded-xl"></div>
                    <div className="w-[10vw] h-[25vh] bg-yellow-700 rounded-3xl"></div>
                    <div className="w-[10vw] h-[25vh] bg-blue-400 rounded-xl"></div>
                    <div className="w-[10vw] h-[25vh] bg-green-400 rounded-xl"></div>
                </div>
            </div>

            {/* Formulários com Transição de Animação para Mobile */}
            <div className="lg:hidden w-full h-full flex items-center justify-center relative">
                
                {/* Login Form com Transição Vertical no Mobile */}
                <div
                    className={`absolute top-0 left-0 w-full h-full flex items-center justify-center transition-all transform duration-500 ease-in-out ${
                        isLoginFormOpen ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-full opacity-0 pointer-events-none'
                    }`}
                >
                    <LoginForm isOpen={isLoginFormOpen} onClose={closeForms} openUserForm={openUserForm} />
                </div>

                {/* User Form com Transição Vertical no Mobile */}
                <div
                    className={`absolute top-0 left-0 w-full h-full flex items-center justify-center transition-all transform duration-500 ease-in-out ${
                        isUserFormOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-full opacity-0 pointer-events-none'
                    }`}
                >
                    <UserForm isOpen={isUserFormOpen} onClose={closeForms} openLoginForm={openLoginForm} />
                </div>
            </div>

            {/* Login Form com Transição Horizontal para Desktop */}
            <div
                className={`absolute top-0 left-0 w-full h-full hidden lg:flex items-center justify-center transition-all transform duration-500 ease-in-out ${
                    isLoginFormOpen ? '-translate-x-80 opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                }`}
            >
                <LoginForm isOpen={isLoginFormOpen} onClose={closeForms} openUserForm={openUserForm} />
            </div>

            {/* User Form com Transição Horizontal para Desktop */}
            <div
                className={`absolute top-0 left-0 w-full h-full hidden lg:flex items-center justify-center transition-all transform duration-500 ease-in-out ${
                    isUserFormOpen ? 'translate-x-20 opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                }`}
            >
                <UserForm isOpen={isUserFormOpen} onClose={closeForms} openLoginForm={openLoginForm} />
            </div>
        </div>
    );
}
