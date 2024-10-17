import Slider from "../../components/slider/slider";
import Charity from "../../../assets/images/generics/charity.png";

function About() {
  return (
    <div className="min-h-screen flex flex-col w-screen bg-gradient-to-b from-primary-light-250 to-primary-light-400">
      <div className="w-full">
        <Slider />
      </div>
      <div className="flex flex-col items-center gap-7 w-full md:flex-row 2xl:justify-evenly">
        <div className="flex">
          <img src={Charity}></img>
        </div>

        <div className="max-w-[38.5rem] py-9 lg:mr-20 flex flex-col items-center">
          <div className="relative">
            <div className="max-w-7 max-h-7 w-full h-full bg-primary-light-600 absolute bottom-0 -left-2 rounded-full z-0 md:max-w-12 md:max-h-12" />
            <h2 className="text-4xl md:text-6xl lg:text-7xl tracking-tighter font-sans font-bold text-center text-primary-light-750 relative z-10">
              Sobre nós
            </h2>
          </div>
          <div className="flex flex-col text-center gap-5 mt-8">
            <p className="text-1xl md:text-2xl lg:text-2xl xl:max-w-screen-2xl max-w-80 text-center  text-primary-light-750">
              Somos um grupo de estudantes apaixonados por usar a tecnologia
              para criar um impacto positivo no mundo. Nosso objetivo é
              transformar a maneira como as pessoas fazem doações, tornando o
              processo mais simples, transparente e envolvente.
            </p>

            <h3 className="text-2xl md:text-3xl lg:text-5xl tracking-tighter font-sans font-bold text-center text-primary-light-750">
              O que fazemos?
            </h3>
            <p className="text-1xl md:text-2xl lg:text-2xl xl:max-w-screen-2xl max-w-80 text-center  text-primary-light-750">
              Desenvolvemos uma plataforma intuitiva e segura para facilitar o
              processo de doação. Com um design amigável e funcionalidades
              inovadoras, nosso site permite que qualquer pessoa possa
              contribuir para causas que fazem a diferença com apenas alguns
              cliques.
            </p>

            <h3 className="text-2xl md:text-3xl lg:text-5xl tracking-tighter font-sans font-bold text-center text-primary-light-750">
              Por que fazemos isso?
            </h3>
            <p className="text-1xl md:text-2xl lg:text-2xl xl:max-w-screen-2xl max-w-80 text-center  text-primary-light-750">
              Nossa motivação vem da crença de que a colaboração e a
              solidariedade são as chaves para enfrentar os desafios globais. Ao
              simplificar e melhorar o processo de doação, queremos ajudar a
              construir uma comunidade mais unida e solidária, onde cada
              contribuição faz a diferença e cada gesto de generosidade é
              valorizado.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
