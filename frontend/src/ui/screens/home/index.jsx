import React from 'react';
import { Navbar } from "../../components/navbar";
import firstHeroImage from "../../../assets/images/home/first-image.jpg";
import secondHeroImage from "../../../assets/images/home/second-image.jpg";
import thirdHeroImage from "../../../assets/images/home/third-image.jpg";
import fourthHeroImage from "../../../assets/images/home/fourth-image.jpg";
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
        <div className="max-h-screen h-full relative">
          <div className="max-w-24 w-full h-[24vh] absolute top-0 left-5 rounded-xl">
            <img
              className="w-full h-full object-cover rounded-b-xl"
              src={firstHeroImage}
              alt="Pessoas organizando caixas com itens para doação"
            />
          </div>

          <div className="max-w-[25vh] w-full h-24 absolute top-5 right-0 rounded-xl">
            <img
              className="w-full h-full object-cover rounded-l-xl"
              src={secondHeroImage}
              alt="Pessoas fazendo doações de alimentos"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col h-max-without-navbar items-center justify-center bg-gradient-to-bl from-primary-light-200 from-60% to-primary-light-550 text-primary-light-750 dark:text-white">
        <div className="max-w-32 max-h-32 w-full h-full rounded-full">
          <img
            src={mainHeroImage}
            className="w-full h-full object-cover rounded-full"
            alt="Mãos em círculo umas sobre as outras, demonstrando união"
          />
        </div>

        <div className="max-w-72 max-h-8 w-full h-full mt-6 px-2 flex items-center justify-center rounded-full border border-primary-750">
          <input
            type="text"
            placeholder="Encontre ONGs por nome ou categoria"
            className="w-[100%] h-full p-2 bg-transparent rounded-full placeholder:text-primary-light-750 focus:outline-none"
          />

          <button>
            <FaMagnifyingGlass size={16} />
          </button>
        </div>

        <div className="max-w-80 w-full mt-4 text-center text-[10px]">
          <p className="text-xs font-medium">
            Encontre as ONGs que fazem a diferença em sua comunidade ou em áreas
            de interesse específicas.
          </p>

          <p className="text-xs mt-2 font-medium">
            Use a nossa ferramenta de pesquisa para descobrir <br />{" "}
            organizações que atuam em setores como educação,
            <br /> saúde, meio ambiente, assistência social, entre outros.
          </p>
        </div>
      </div>
      <div className="h-full">
        <div className="max-w-[22vh] w-full h-24 absolute bottom-10 left-0 rounded-xl">
          <img
            className="w-full h-full object-cover rounded-r-xl"
            src={thirdHeroImage}
            alt="Pessoas organizando caixas com itens para doação"
          />
        </div>

        <div className="max-w-24 w-full h-[20vh] absolute bottom-0 right-4 rounded-xl">
          <img
            className="w-full h-full object-cover rounded-t-xl"
            src={fourthHeroImage}
            alt="Pessoas organizando caixas com itens para doação"
          />
        </div>
      </div>

      <div className="max-w-74 mx-auto py-5 flex flex-col items-center justify-center">
        <img
          className="max-h-[16vh]"
          src={peoplesWithHeart}
          alt="Pessoas segurando um pequeno coração da cor branco"
        />

        <h2 className="font-bold text-2xl">Campanhas Em Destaque</h2>
        <div className="max-w-72">
          <p className="text-xs font-medium text-center mt-3">
            Confira as campanhas mais relevantes do momento e saiba como você pode
            contribuir para causas que fazem a diferença!
          </p>
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
