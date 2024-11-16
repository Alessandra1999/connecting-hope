import React, { useEffect } from "react";
import LoginForm from "../../components/registers-forms/LoginForm";
import UserForm from "../../components/registers-forms/UserForm";
import OngForm from "../../components/registers-forms/OngForm";
import { RecoveryPasswordForm } from "../../components/registers-forms/RecoveryPasswordForm";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../../api/apiService";

export const MobileScreen = ({
  isLoginFormOpen,
  isUserFormOpen,
  isOngFormOpen,
  isRecoveryPasswordOpen,
  openUserForm,
  openLoginForm,
  openOngForm,
  openRecoveryForm,
  closeForms,
}) => {
  // Efeito para rolar para o topo sempre que um conteúdo diferente é exibido
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Rolagem suave para o topo
    });
  }, [isLoginFormOpen, isUserFormOpen, isOngFormOpen, isRecoveryPasswordOpen]);

  const navigate = useNavigate();

  const handleLogin = async (data) => {
    try {
      const user = await userLogin(data);

      // if (user && user.authenticated) {
      //   console.log("Usuário logado com sucesso");
      //   navigate("/home"); 
      // } else {
      //   // Se as credenciais estiverem incorretas
      //   console.log("Credenciais inválidas");
      //   toast.error("Usuário não encontrado ou credenciais incorretas");
      // }
    } catch (error) {
      console.error("Erro ao tentar logar", error);
     // toast.error("Ocorreu um erro ao fazer o login. Tente novamente.");
    }
  };

  return (
    <div className="lg:hidden w-full h-full flex items-center justify-center bg-transparent">
      {/* Renderiza o formulário de Login se isLoginFormOpen for true */}
      {isLoginFormOpen && (
        <div className="flex items-center justify-center animate-fadeIn">
          <LoginForm
            isOpen={isLoginFormOpen}
            onClose={closeForms}
            openUserForm={openUserForm}
            openRecoveryPassword={openRecoveryForm}
            openOngForm={openOngForm}
            onLogin={handleLogin}
          />
        </div>
      )}

      {/* Renderiza o formulário de User se isUserFormOpen for true */}
      {isUserFormOpen && (
        <div className="flex items-center justify-center animate-fadeIn">
          <UserForm
            isOpen={isUserFormOpen}
            onClose={closeForms}
            openLoginForm={openLoginForm}
          />
        </div>
      )}

      {/* Renderiza o formulário de Ong se isOngFormOpen for true */}
      {isOngFormOpen && (
        <div className="flex items-center justify-center animate-fadeIn">
          <OngForm
            isOpen={isOngFormOpen}
            onClose={closeForms}
            openLoginForm={openLoginForm}
          />
        </div>
      )}

      {/* Renderiza o formulário de Recovery se isRecoveryPasswordOpen for true */}
      {isRecoveryPasswordOpen && (
        <div className="flex items-center justify-center animate-fadeIn">
          <RecoveryPasswordForm
            isOpen={isRecoveryPasswordOpen}
            onClose={closeForms}
            openLoginForm={openLoginForm}
            openUserForm={openUserForm}
          />
        </div>
      )}
    </div>
  );
};
