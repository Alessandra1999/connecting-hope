import React, { useState } from "react";
import { DesktopScreen } from "./DesktopScreen";
import { MobileScreen } from "./MobileScreen";
import Logo from "../../../assets/images/home/LOGO.png";
import { Footer } from "../../components/footer/footer";
import { Switcher } from "../../../utils";

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
    <div className="w-full min-h-screen bg-gradient-to-b from-primary-light-250 to-primary-light-400 dark:from-primary-dark-250 dark:to-primary-dark-500 flex flex-col overflow-hidden">
      <div className="p-5 flex flex-row justify-between">
        <img src={Logo} width={100} alt="Logo" className="dark:invert" />
        <Switcher />
      </div>

      {/* Contêiner central para os formulários */}
      <div className="flex items-center justify-center mt-10">
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
    </div>
  );
}
