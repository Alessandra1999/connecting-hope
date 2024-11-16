import LoginForm from "../../components/registers-forms/LoginForm";
import OngForm from "../../components/registers-forms/OngForm";
import { RecoveryPasswordForm } from "../../components/registers-forms/RecoveryPasswordForm";
import UserForm from "../../components/registers-forms/UserForm";

export const DesktopScreen = ({ isLoginFormOpen, isUserFormOpen, isOngFormOpen, isRecoveryPasswordOpen, openUserForm, openLoginForm, openOngForm, openRecoveryForm, closeForms }) => (
    <div className="hidden lg:flex w-full max-w-6xl min-h-screen flex items-center justify-center relative">
        <div className="lg:flex lg:p-6 lg:max-w-6xl">
            <div
                className={`grid grid-cols-2 gap-8 rounded-xl shadow-xl p-8 transition-transform duration-700 ease-in-out 
                    ${isLoginFormOpen ? 'translate-x-40' : isUserFormOpen ? '-translate-x-80' : isOngFormOpen ? '-translate-x-80' : isRecoveryPasswordOpen ? 'translate-x-40' : ''
                    }`}
            >
                <div className="w-[10vw] h-[25vh] rounded-xl bg-radial-light dark:bg-radial-dark"></div>
                <div className="w-[10vw] h-[25vh] rounded-3xl bg-radial-light dark:bg-radial-dark"></div>
                <div className="w-[10vw] h-[25vh] rounded-xl bg-radial-light dark:bg-radial-dark"></div>
                <div className="w-[10vw] h-[25vh] rounded-xl bg-radial-light dark:bg-radial-dark"></div>
            </div>
        </div>

        {/* Login Form com Transição Horizontal para Desktop */}
        <div
            className={`absolute top-0 left-10 w-full h-full hidden lg:flex items-center justify-center transition-all transform duration-500 ease-in-out 
                ${isLoginFormOpen ? '-translate-x-80 opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                }`}
        >
            <LoginForm isOpen={isLoginFormOpen} onClose={closeForms} openUserForm={openUserForm} openRecoveryPassword={openRecoveryForm} openOngForm={openOngForm} />
        </div>

        {/* User Form com Transição Horizontal para Desktop */}
        <div
            className={`absolute top-0 left-0 w-full h-full hidden lg:flex items-center justify-center transition-all transform duration-500 ease-in-out 
                ${isUserFormOpen ? 'translate-x-36 opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                }`}
        >
            <UserForm isOpen={isUserFormOpen} onClose={closeForms} openLoginForm={openLoginForm} />
        </div>

        {/* Ong Form com Transição Horizontal para Desktop */}
        <div
            className={`absolute top-0 left-0 w-full h-full hidden lg:flex items-center justify-center transition-all transform duration-500 ease-in-out 
                ${isOngFormOpen ? 'translate-x-36 opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                }`}
        >
            <OngForm isOpen={isOngFormOpen} onClose={closeForms} openLoginForm={openLoginForm} />
        </div>

        {/* Recovery Form com Transição Horizontal para Desktop */}
        <div
            className={`absolute top-0 left-12 w-full h-full hidden lg:flex items-center justify-center transition-all transform duration-500 ease-in-out 
                ${isRecoveryPasswordOpen ? '-translate-x-80 opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                }`}
        >
            <RecoveryPasswordForm isOpen={isRecoveryPasswordOpen} onClose={closeForms} openLoginForm={openLoginForm} openUserForm={openUserForm} />
        </div>
    </div>
);