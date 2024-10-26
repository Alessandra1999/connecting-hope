import React from 'react';
import { Navbar } from "../../components/navbar";
import firstHeroImage from "../../../assets/images/home/first-image.jpg";
import secondImage from '../../../assets/images/home/second-image.png'
import thirdHeroImage from "../../../assets/images/home/three-image.png";
import fourthHeroImage from "../../../assets/images/home/four-image.png";
import mainHeroImage from "../../../assets/images/home/main-hero.jpg";
import peoplesWithHeart from "../../../assets/images/home/peoples-with-heart.png";
import { FaMagnifyingGlass } from "react-icons/fa6";

// import { CampaignsCard } from "../../components/campaigns-card";
import NonProfitsCard from "../../components/campaigns-card/NonProfitsCard";
import NonProfitsComment from "../../components/campaigns-card/NonProfitsComment";

export function Home() {

  const campaignsMock = [
    {
      title: "Abrace uma Vida",
      description: "Uma campanha voltada para fornecer apoio emocional e material a crianças em situação de vulnerabilidade. Junte-se a nós e faça a diferença!",
      imageUrl: "https://i.pinimg.com/736x/62/55/d1/6255d1a111d6fbbb06a396cbdd3079d4.jpg",
      countOfLikes: 12,
      expiresIn: "15/11/2024",
      feedbacks: [
        {
          personName: "Marcos",
          feedback: "Participar dessa campanha foi uma experiência incrível! Saber que estou ajudando crianças a terem um futuro melhor não tem preço."
        },
      ]
    },
    {
      title: "Caminho para o Futuro",
      description: "Iniciativa que promove a educação de jovens carentes, oferecendo cursos de capacitação e bolsas de estudo. Junte-se a essa transformação.",
      imageUrl: "https://i.pinimg.com/736x/62/55/d1/6255d1a111d6fbbb06a396cbdd3079d4.jpg",
      countOfLikes: 8,
      expiresIn: "20/11/2024",
      feedbacks: [
        {
          personName: "Beatriz",
          feedback: "Essa ONG me deu a oportunidade de apoiar a educação de jovens e o impacto tem sido emocionante. Todos deveriam participar!"
        },
      ]
    },
    {
      title: "Sorrisos no Horizonte",
      description: "Campanha para levar atendimento odontológico gratuito a comunidades carentes. Ajude a devolver sorrisos e autoestima para quem mais precisa.",
      userPictureUrl: "https://github.com/davifrt.png",
      countOfLikes: 45,
      expiresIn: "05/01/2024",
      feedbacks: [
        {
          personName: "Lucas",
          feedback: "Ver o sorriso no rosto das crianças após o atendimento foi indescritível. A campanha realmente faz a diferença na vida das pessoas."
        },
      ]
    },
    {
      title: "Esperança em Movimento",
      description: "A campanha busca levar alimentos e suprimentos a comunidades afetadas por desastres naturais. Sua ajuda pode salvar vidas!",
      userPictureUrl: "https://github.com/davifrt.png",
      countOfLikes: 30,
      expiresIn: "30/12/2024",
      feedbacks: [
        {
          personName: "Sofia",
          feedback: "A equipe dessa ONG é extremamente dedicada e eficiente. Saber que minha contribuição chegou a quem mais precisava me enche de orgulho."
        }
      ]
    },
  ];


  return (
    <div className="w-full h-full bg-gradient-to-b from-primary-light-250 to-primary-light-400 text-xs">
      <Navbar />

      <div>
        <div className="relative max-h-screen h-full">
          <div className="max-w-[26vw] w-full h-[22vh] md:max-w-[24vw] md:h-[28vh] lg:max-w-[24vw] lg:h-[30vh] xl:max-w-[14vw] xl:h-[36vh] absolute top-0 left-5 lg:left-12">
            <img
              className="w-full h-full object-cover rounded-b-3xl"
              src={firstHeroImage}
              alt="Pessoas organizando caixas com itens para doação"
            />
          </div>

          <div className="max-w-[25vh] w-full h-[14vh] md:max-w-95 md:h-[18vh] lg:max-w-[26vw] lg:h-[22vh] xl:max-w-[21vw] xl:h-[24vh] absolute top-5 right-0 lg:top-12">
            <img
              className="w-full h-full object-cover rounded-l-3xl"
              src={secondImage}
              alt="Pessoas fazendo doações de alimentos"
            />
          </div>
        </div>

        <div className="flex flex-col h-max-without-navbar items-center justify-center bg-gradient-to-bl from-primary-light-200 from-60% to-primary-light-550 text-primary-light-750 dark:text-white px-4 lg:px-4">
          <div className="max-w-32 max-h-32 md:max-w-48 md:max-h-48 lg:max-w-64 lg:max-h-64 xl:max-w-80 xl:max-h-80 w-full h-full rounded-full">
            <img
              src={mainHeroImage}
              className="w-full h-full object-cover rounded-full"
              alt="Mãos em círculo umas sobre as outras, demonstrando união"
            />
          </div>

          <div className="max-w-72 max-h-8 w-full h-full mt-6 px-2 flex items-center justify-center rounded-full border border-primary-750 md:max-h-10 md:max-w-sm lg:max-h-12 lg:max-w-xl xl:max-h-14">
            <input
              type="text"
              placeholder="Encontre ONGs por nome ou categoria"
              className="w-[100%] h-full p-2 bg-transparent rounded-full placeholder:text-primary-light-750 focus:outline-none md:text-base lg:text-lg xl:text-xl"
            />

            <button className="p-2 md:p-3 lg:p-4 xl:p-5">
              <FaMagnifyingGlass className="text-base md:text-lg lg:text-2xl xl:text-3xl" />
            </button>
          </div>

          <div className="max-w-[82vw] w-full mt-4 text-center lg:max-w-sm lg:max-w-lg xl:max-w-2xl lg:mt-10">
            <div className="text-xs font-medium md:text-sm lg:text-lg xl:text-xl lg:text-center ">
              <p>
                Encontre as ONGs que fazem a diferença em sua comunidade ou em áreas de interesse específicas.
                <span className="block mt-3 lg:inline">
                  Use a nossa ferramenta de pesquisa para descobrir organizações que atuam em setores como educação,
                </span>
                <span className="block mb-10 lg:inline">
                  saúde, meio ambiente, assistência social, entre outros.
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="relative h-full">
          <div className="max-w-[25vh] w-full h-[14vh] md:max-w-90 md:h-[18vh] lg:max-w-[26vw] lg:h-[22vh] xl:max-w-[21vw] xl:h-[24vh] absolute bottom-5 left-0 lg:bottom-12">
            <img
              className="w-full h-full object-cover rounded-r-3xl"
              src={thirdHeroImage}
              alt="Pessoas organizando caixas com itens para doação"
            />
          </div>

          <div className="max-w-[26vw] w-full h-[22vh] md:max-w-[24vw] md:h-[28vh] lg:max-w-[24vw] lg:h-[30vh] xl:max-w-[16vw] xl:h-[36vh] absolute bottom-0 right-4 lg:right-10">
            <img
              className="w-full h-full object-cover rounded-t-3xl"
              src={fourthHeroImage}
              alt="Pessoas organizando caixas com itens para doação"
            />
          </div>
        </div>
      </div>


      <div className="max-w-5xl p-6 mx-auto flex flex-col lg:flex-row items-center justify-center gap-1 lg:gap-6">
        <img
          className="max-h-[18vh] lg:max-h-[20vh] lg:w-2/2"
          src={peoplesWithHeart}
          alt="Pessoas segurando um pequeno coração da cor branco"
        />

        <div className="text-center lg:text-left lg:w-2/2">
          <h2 className="font-bold text-2xl lg:text-5xl">Campanhas Em Destaque</h2>
          <div className="max-w-full lg:max-w-3xl mt-3">
            <p className="text-sm font-medium lg:text-2xl">
              Confira as campanhas mais relevantes do momento e saiba como você pode
              contribuir para causas que fazem a diferença!
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto py-8 rounded-2xl bg-gradient-to-br from-white to-primary-light-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-start gap-2">
        {campaignsMock.map((campaignData, index) => (
          <div key={index} className="flex flex-col items-center">
            <NonProfitsCard campaign={campaignData} />
            <NonProfitsComment feedbacks={campaignData.feedbacks} userPictureUrl={campaignData.userPictureUrl} title={campaignData.title} />
          </div>
        ))}
      </div>

    </div>
  );
}
