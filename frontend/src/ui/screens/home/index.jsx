import { Navbar } from "../../components/navbar";

import firstHeroImage from "../../../assets/images/home/first-image.jpg";
import secondHeroImage from "../../../assets/images/home/second-image.jpg";
import thirdHeroImage from "../../../assets/images/home/third-image.jpg";
import fourthHeroImage from "../../../assets/images/home/fourth-image.jpg";
import mainHeroImage from "../../../assets/images/home/main-hero.jpg";
import peoplesWithHeart from "../../../assets/images/home/peoples-with-heart.png";
import { FaMagnifyingGlass } from "react-icons/fa6";

import { CampaignsCard } from "../../components/campaigns-card";

export function Home() {
  const campaignsMock = [
    {
      title: "Campanha X",
      description: "Descrição campanha X",
      imageUrl:
        "https://i.pinimg.com/736x/62/55/d1/6255d1a111d6fbbb06a396cbdd3079d4.jpg",
      countOfLikes: 5,
      expiresIn: "10/11/2024",
    },
    {
      title: "Campanha Y",
      description: "Descrição campanha Y",
      imageUrl:
        "https://i.pinimg.com/736x/62/55/d1/6255d1a111d6fbbb06a396cbdd3079d4.jpg",
      countOfLikes: 2,
      expiresIn: "10/11/2024",
    },
    {
      title: "Campanha W",
      description: "Descrição campanha W",
      userPictureUrl: "https://github.com/davifrt.png",
      countOfLikes: 100,
    },
    {
      title: "Campanha W",
      description: "Descrição campanha W",
      userPictureUrl: "https://github.com/davifrt.png",
      countOfLikes: 100,
    },
  ];

  return (
    <div className="w-full h-full bg-gradient-to-b from-primary-light-250 to-primary-light-400 text-xs">
      <Navbar />

      <div>
        <div className="max-h-screen h-full relative">
          {/* <div className="max-w-60 w-full h-[60vh] ml-32 rounded-xl"> */}
          <div className="max-w-24 w-full h-[22vh] absolute top-0 left-8 rounded-xl">
            <img
              className="w-full h-full object-cover rounded-b-xl"
              src={firstHeroImage}
              alt="Pessoas organizando caixas com itens para doação"
            />
          </div>

          <div className="max-w-[25vh] w-full h-24 absolute top-2 right-0 rounded-xl">
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

        <div className="max-w-72 max-h-8 w-full h-full mt-6 px-2 flex items-center justify-center rounded-full bg-gradient-to-r from-primary-light-250 to-primary-light-450 border border-primary-light-750">
          <input
            type="text"
            placeholder="Encontre ONGs por nome ou categoria"
            className="w-[100%] h-full p-2 bg-transparent rounded-full placeholder:text-primary-light-750 focus:outline-none"
          />

          <button>
            <FaMagnifyingGlass size={16} />
          </button>
        </div>

        <div className="max-w-72 w-full mt-4 text-center text-[10px]">
          <p className="font-bold">
            Encontre as ONGs que fazem a diferença em sua comunidade ou em áreas
            de interesse específicas.
          </p>

          <p className="mt-2 font-bold">
            Use a nossa ferramenta de pesquisa para descobrir <br />{" "}
            organizações que atuam em setores como educação,
            <br /> saúde, meio ambiente, assistência social, entre outros.
          </p>
        </div>
      </div>
      <div className="h-full">
        <div className="max-w-[22vh] w-full h-20 absolute bottom-10 left-0 rounded-xl">
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

      <div className="max-w-72 mx-auto py-5 flex flex-col items-center justify-center">
        <img
          className="max-h-20"
          src={peoplesWithHeart}
          alt="Pessoas segurando um pequeno coração da cor branco"
        />

        <h2 className="font-bold text-xl">Campanhas Em Destaque</h2>
        <p className="font-medium text-center">
          Confira as campanhas mais relevantes do momento e saiba como você pode
          contribuir para causas que fazem a diferença!
        </p>
      </div>

      <div className="mx-auto py-8 rounded-2xl bg-gradient-to-br from-white to-primary-light-100 grid grid-cols-2 items-center justify-center justify-items-center gap-3">
        {campaignsMock.map((campaignData) => (
          <>
            <CampaignsCard campaign={campaignData} />
          </>
        ))}
      </div>
    </div>
  );
}
