import React from "react";
import Logo from "../../../assets/images/home/LOGO.png";
import peoplesWithHeart from "../../../assets/images/home/peoples-with-heart.png";
import { MdVerified } from "react-icons/md";
import OngForm from "../../components/registers-forms/OngForm";
import One from "../../../assets/images/home/svgs/1.svg";
import Two from "../../../assets/images/home/svgs/2.svg";
import Three from "../../../assets/images/home/svgs/3.svg";
import Four from "../../../assets/images/home/svgs/4.svg";
import Five from "../../../assets/images/home/svgs/5.svg";
import Six from "../../../assets/images/home/svgs/6.svg";
import { useNavigate } from "react-router-dom";

const items = [
  {
    title: "Preencha o formulário",
    description: "A criação da sua ONG começa no formulário desta página.",
  },
  {
    title: "Complete as informações",
    description:
      "Descreva a sua ONG - essa é a parte onde você contará a sua história.",
  },
  {
    title: "Compartilhe",
    description:
      "Divulgue em suas redes, todos os dias, e peça que seus amigos e familiares também compartilhem em suas redes e grupos.",
  },
];

const reasons = [
  {
    icon: One,
    title: "Visibilidade e Alcance",
    description:
      "No Connecting Hope, sua ONG terá acesso a uma rede global de pessoas interessadas em fazer a diferença. A plataforma ajuda a conectar sua causa com voluntários, doadores e parceiros em potencial, ampliando o alcance e o impacto das suas iniciativas sociais.",
  },
  {
    icon: Two,
    title: "Facilidade para Mobilizar Recursos",
    description:
      "Com um sistema intuitivo, você pode criar campanhas de arrecadação e receber apoio financeiro de forma rápida e segura. O Connecting Hope facilita a conexão entre sua ONG e pessoas dispostas a contribuir com doações para fazer sua missão crescer.",
  },
  {
    icon: Three,
    title: "Apoio e Conexões Estratégicas",
    description:
      "Além de visibilidade, o Connecting Hope oferece uma comunidade de outras ONGs, organizações e especialistas, permitindo que você troque experiências, forme parcerias estratégicas e tenha acesso a recursos que fortalecem seu projeto.",
  },
  {
    icon: Four,
    title: "Foco em Causas Importantes",
    description:
      "Se a sua ONG atua em áreas como educação, saúde, meio ambiente ou assistência social, o Connecting Hope tem um público engajado nessas causas. Isso garante que você estará conectado a pessoas que compartilham do mesmo propósito e que realmente querem ajudar.",
  },
  {
    icon: Five,
    title: "Impacto Social Real",
    description:
      "Criar sua ONG no Connecting Hope não é apenas uma formalidade, é uma oportunidade de causar um impacto real na sociedade. Ao conectar sua organização com pessoas e recursos certos, a plataforma acelera o crescimento e a sustentabilidade da sua causa, ajudando você a transformar mais vidas.",
  },
  {
    icon: Six,
    title: "Transparência e Confiança para Doadores e Voluntários",
    description:
      "Se a sua ONG atua em áreas como educação, saúde, meio ambiente ou assistência social, o Connecting Hope tem um público engajado nessas causas. Isso garante que você estará conectado a pessoas que compartilham do mesmo propósito e que realmente querem ajudar.",
  },
];

export const HomeNotLogged = () => {
  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };

  const navigateAbout = () => {
    navigate("about");
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-gradient-to-b from-primary-light-250 to-primary-light-400 dark:from-primary-dark-250 dark:to-primary-dark-500 text-xs">
      <div className="p-5">
        <img src={Logo} width={100} alt="Logo" className="dark:invert" />
      </div>
      <div className="flex lg:w-2/3 flex-col items-center text-center justify-center dark:text-white w-full max-w-7xl mx-auto p-2 lg:flex-row lg:items-start lg:text-left">
        <div>
          <h2
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}
            className="font-extrabold text-5xl lg:text-6xl xl:text-7xl mb-1 p-1 drop-shadow-lg"
          >
            CONNECTING HOPE
          </h2>
          <div className="max-w-2xl">
            <p className="mb-5 text-lg lg:text p-2">
              Aqui no Connecting Hope, acreditamos que pequenas ações podem
              gerar grandes mudanças. Desenvolvido por alunos da MaisPraTi,
              nosso site foi criado para conectar ONGs e doadores de forma
              simples e acessível, com foco especial nas iniciativas de apoio às
              comunidades afetadas pelo recente desastre no Rio Grande do Sul.
              Nossa missão é facilitar o encontro entre quem precisa de ajuda e
              quem deseja contribuir, promovendo a solidariedade e o impacto
              positivo. Juntos, podemos transformar vidas e reconstruir o
              futuro.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={navigateAbout}
                className="px-3 py-2 text-sm mx-5 text-[#fff] bg-[#757575] rounded-lg hover:bg-[#504F4FFF]"
              >
                Quero saber mais
              </button>
              <button
                onClick={navigateLogin}
                className="px-3 py-2 text-sm mx-5 text-[#fff] bg-primary-light-700 dark:bg-primary-dark-700 rounded-lg hover:bg-teal-800 dark:hover:bg-purple-900"
              >
                Cadastre-se
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-5xl p-6 mx-auto flex flex-col lg:flex-row items-center justify-center gap-1 lg:gap-6">
          <img
            className="max-h-[42vh] lg:max-h-[30vh] lg:w-2/2"
            src={peoplesWithHeart}
            alt="Pessoas segurando um pequeno coração da cor branco"
          />
        </div>
      </div>
      <div className="flex lg:w-2/3 flex-col mt-10 items-start rounded-xl p-10 text-center space-y-10 justify-center w-full h-full bg-gradient-to-r from-[#E5F8FF] to-[#13485A] dark:bg-gradient-to-r dark:from-[#3F77C0] dark:to-[#171B4D] lg:flex-row lg:justify-between lg:space-y-0">
        <div className="lg:w-1/2 text-left mt-5 space-y-10 max-w-[87vw]">
          <h2
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}
            className="font-bold text-[#13485A] dark:text-white text-5xl mt-5 p-1"
          >
            Como criar a sua ONG online
          </h2>
          <p className="mt-5 mb-5 p-2 text-lg dark:text-white">
            Crie sua ONG em menos de 5 minutos e compartilhe com sua rede em
            etapas simples para começar a receber doações.
          </p>

          <div className="flex flex-col items-start space-y-8 dark:text-white">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex items-center text-left space-x-3 w-full lg:mt-36"
              >
                <MdVerified className="w-[4vw] h-[4vh] lg:w-[3vw] lg:h-[3vh]" />
                <div className="flex-1">
                  <span className="font-bold text-base">{item.title}</span>
                  <p className="text-base ">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start text-left md:items-center md:text-center md:justify-center lg:w-1/2 lg:mr-0 max-w-md mx-auto space-y-4">
          <OngForm />
        </div>
      </div>
      <div className="flex mt-9 flex-col text-center mx-auto dark:text-white">
        <h2
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}
          className="font-bold text-5xl mb-8 mx-auto max-w-4xl p-4"
        >
          6 Motivos para escolher o Connecting Hope
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl place-items-center mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex flex-col max-w-xs items-center text-center"
            >
              <img
                src={reason.icon}
                alt={reason.title}
                className="w-10 h-10 mb-2 dark:invert"
              />
              <h2 className="font-bold mb-2 mx-5 text-lg">{reason.title}</h2>
              <p className="text-base mx-5">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={navigateLogin}
        className="mt-10 px-3 py-2 mb-10 text-sm text-[#fff] bg-primary-light-700 dark:bg-primary-dark-700 rounded-lg hover:bg-teal-800"
      >
        Cadastre uma ONG
      </button>
    </div>
  );
};
