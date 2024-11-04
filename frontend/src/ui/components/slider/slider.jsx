import { Carousel, Typography, Button } from "@material-tailwind/react";
import Background from "../../../assets/images/generics/sliderBackground.png";
import Alessandra from "../../../assets/images/profiles/Alessandra.png";
import Davi from "../../../assets/images/profiles/Davi.png";
import Fernanda from "../../../assets/images/profiles/Fernanda.png";
import Gabriel from "../../../assets/images/profiles/Gabriel.png";
import Guilherme from "../../../assets/images/profiles/Guilherme.png";
import Israel from "../../../assets/images/profiles/Israel.png";
import Linkedin from "../../../assets/images/icons/linkedin.png";
import Github from "../../../assets/images/icons/github.png";
import Java from "../../../assets/images/icons/java.png";
import Maven from "../../../assets/images/icons/maven.png";
import Spring from "../../../assets/images/icons/spring.png";
import MySql from "../../../assets/images/icons/mysql.png";
import Node from "../../../assets/images/icons/node.png";
import React from "../../../assets/images/icons/react.png";
import JavaScript from "../../../assets/images/icons/js.png";
import Html from "../../../assets/images/icons/html.png";
import Css from "../../../assets/images/icons/css.png";
import Tailwind from "../../../assets/images/icons/tailwind.png";

const profiles = [
  {
    picture: Alessandra,
    name: "Alessandra Bombardi",
    description:
      "Aluna do curso Dev Full Stack Jr da +PraTi, cursando o 5º semestre de Análise e Desenvolvimento de Sistemas, apaixonada por gatos e café preto!",
    linkedin: "https://www.linkedin.com/in/alessandra-bombardi/",
    github: "https://github.com/Alessandra1999",
  },
  {
    picture: Davi,
    name: "Davi Amom",
    description:
      "Desenvolvedor Full Stack na RevoluTI e estudante de Engenharia de Software. Apaixonado por música e programação.",
    linkedin: "https://www.linkedin.com/in/daviamom/",
    github: "https://github.com/DaviFrt",
  },
  {
    picture: Fernanda,
    name: "Fernanda Akemi",
    description:
      "Arquiteta de formação, apaixonada por tecnologia, café e boas visitas a museus. Aluna do curso Dev Full Stack Jr. da +PraTi e cursando Sistemas de Informação.",
    linkedin: "https://www.linkedin.com/in/akemicomette/",
    github: "https://github.com/akemicomette",
  },
  {
    picture: Gabriel,
    name: "Gabriel Vitti",
    description:
      "Desenvolvedor backend na Petrobrás e engenheiro de automação. Amante de café, pessoas e mangás coreanos :)",
    linkedin: "https://www.linkedin.com/in/gabriel-vitti-marques/",
    github: "https://github.com/v1tti",
  },
  {
    picture: Guilherme,
    name: "Guilherme Machado",
    description:
      "Desenvolvedor Front-end, apaixonado por puzzles, RPGs de mesa e por uma boa limonada, um dos poucos alunos paulistas do curso Dev Full Stack Jr. da +PraTi.",
    linkedin: "https://www.linkedin.com/in/guibmachado/",
    github: "https://github.com/Gui-Machado",
  },
  {
    picture: Israel,
    name: "Israel Santos",
    description:
      "Opa, eu sou o Israel, desenvolvedor Full Stack e apaixonado por programação. No meu tempo livre, gosto de codar por hobby, sempre com uma xícara de café ao lado para acompanhar. ☕",
    linkedin: "https://www.linkedin.com/in/israelsantoss/",
    github: "https://github.com/IsraelDev560",
  },
];

function Slider() {
  return (
    <div className="h-[43.75rem] flex w-screen max-w-full">
      <Carousel
        autoplay={true}
        loop={true}
        transition={{ duration: 2 }}
        navigation={false}
        className="h-full"
      >
        <div className="relative h-full w-full">
          <img
            src={Background}
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/30">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                className="mb-4 text-4xl md:text-6xl lg:text-8xl font-sans font-bold tracking-tighter stroke-black drop-shadow-md text-primary-light-50"
              >
                CONNECTING HOPE
              </Typography>
              <Typography
                variant="lead"
                className="mb-12 opacity-80 font-sans font-normal text-2xl md:text-3xl lg:text-4xl text-primary-light-50"
              >
                Conectando esperança, transformando o mundo
              </Typography>
              <div className="flex justify-center gap-2">
                <Button
                  className="bg-gradient-to-b from-primary-light-250 to-primary-light-400 font-normal text-primary-light-750 dark:from-primary-dark-250 dark:to-primary-dark-500"
                  size="md"
                >
                  Cadastre uma ONG
                </Button>
              </div>
            </div>
          </div>
        </div>
        {profiles.map(({ picture, name, description, linkedin, github }) => (
          <div className="relative h-full w-full bg-gradient-to-l from-primary-light-350 from-47% to-primary-light-650 dark:from-primary-dark-650 from-47% dark:to-primary-dark-750">
            <div className="absolute inset-0 flex flex-col md:flex-row h-full w-full items-center justify-evenly">
              <img
                src={picture}
                className="w-1/2 lg:w-1/5 md:w-1/3 lg:ml-14 md:ml-12"
              ></img>
              <div className="flex flex-col items-center gap-7 lg:mr-14 md:mr-10">
                <h1 className="text-3xl md:text-5xl lg:text-6xl tracking-tighter font-sans font-bold text-primary-light-750 dark:text-primary-dark-50">
                  {name}
                </h1>
                <p className="text-1xl md:text-2xl lg:text-3xl xl:max-w-screen-2xl max-w-80 text-center text-primary-light-750 dark:text-primary-dark-50">
                  {description}
                </p>
                <div className="flex justify-center w-full md:justify-center md:gap-8 mb-7">
                  <a href={linkedin}>
                    <img src={Linkedin} className="w-3/4"></img>
                  </a>
                  <a href={github}>
                    <img src={Github} className="w-3/4"></img>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="relative h-full w-full bg-gradient-to-l from-primary-light-350 from-47% to-primary-light-650 dark:from-primary-dark-650 from-47% dark:to-primary-dark-750">
          <div className="absolute inset-0 flex flex-col md:flex-row h-full w-full items-center justify-evenly">
            <div className="flex flex-col items-center gap-9 mx-7">
              <h1 className="text-3xl md:text-5xl lg:text-6xl tracking-tighter font-sans font-bold text-primary-light-750 dark:text-primary-dark-50">
                Tecnologias Utilizadas
              </h1>
              <div className="flex justify-center w-1/6 md:w-1/3 lg:w-full xl:w-full md:justify-center md:gap-8">
                <img src={Java}></img>
                <img src={Maven}></img>
                <img src={Spring}></img>
                <img src={MySql}></img>
                <img src={Node}></img>
              </div>
              <div className="flex justify-center w-1/6 md:w-1/3 lg:w-full xl:w-full md:justify-center md:gap-8">
                <img src={React}></img>
                <img src={JavaScript}></img>
                <img src={Html}></img>
                <img src={Css}></img>
                <img src={Tailwind}></img>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Slider;
