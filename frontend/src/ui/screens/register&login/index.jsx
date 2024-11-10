import React, { useState } from "react";
import { DesktopScreen } from "./DesktopScreen";
import { MobileScreen } from "./MobileScreen";
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer/footer";

export function InitialScreen() {
    const [isUserFormOpen, setUserFormOpen] = useState(false);
    const [isLoginFormOpen, setLoginFormOpen] = useState(true);
    const [isRecoveryPasswordOpen, setRecoveryPasswordFormOpen] = useState(false);
    const [isOngFormOpen, setOngFormOpen] = useState(false);

    const openUserForm = () => {
        setUserFormOpen(true);
        setLoginFormOpen(false);
        setRecoveryPasswordFormOpen(false);
        setOngFormOpen(false);
    };

    const openOngForm = () => {
        setOngFormOpen(true);
        setUserFormOpen(false);
        setLoginFormOpen(false);
        setRecoveryPasswordFormOpen(false);
    };

    const openLoginForm = () => {
        setLoginFormOpen(true);
        setUserFormOpen(false);
        setRecoveryPasswordFormOpen(false);
        setOngFormOpen(false);
    };

    const openRecoveryForm = () => {
        setRecoveryPasswordFormOpen(true);
        setLoginFormOpen(false);
        setUserFormOpen(false);
        setOngFormOpen(false);
    };

    const closeForms = () => {
        setUserFormOpen(false);
        setLoginFormOpen(false);
        setRecoveryPasswordFormOpen(false);
        setOngFormOpen(false);
    };

    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-primary-light-250 to-primary-light-400 dark:bg-gradient-to-b dark:from-primary-dark-250 dark:to-primary-dark-400 flex flex-col overflow-hidden">
            <Navbar />
            
            {/* Contêiner central para os formulários */}
            <div className="flex items-center justify-center mt-24 lg:mt-10">
                {/* Renderização Condicional de Mobile ou Desktop */}
                <MobileScreen
                    isLoginFormOpen={isLoginFormOpen}
                    isUserFormOpen={isUserFormOpen}
                    isOngFormOpen={isOngFormOpen}
                    isRecoveryPasswordOpen={isRecoveryPasswordOpen}
                    openUserForm={openUserForm}
                    openLoginForm={openLoginForm}
                    openOngForm={openOngForm}
                    openRecoveryForm={openRecoveryForm}
                    closeForms={closeForms}
                />

                <DesktopScreen
                    isLoginFormOpen={isLoginFormOpen}
                    isUserFormOpen={isUserFormOpen}
                    isOngFormOpen={isOngFormOpen}
                    isRecoveryPasswordOpen={isRecoveryPasswordOpen}
                    openUserForm={openUserForm}
                    openLoginForm={openLoginForm}
                    openOngForm={openOngForm}
                    openRecoveryForm={openRecoveryForm}
                    closeForms={closeForms}
                />
            </div>
            <Footer />
        </div>
    );
}