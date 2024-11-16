import { Carousel, Typography, Button } from "@material-tailwind/react";
import Background from "../../../assets/images/generics/sliderBackground.png";
import BoxOfFood from "../../../assets/images/sliderHome/boxOfFood.jpg";
import Medicine from "../../../assets/images/sliderHome/medicine.jpg";
import PeopleSharing from "../../../assets/images/sliderHome/peopleSharing.jpg";

export function SliderHome() {
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
                  className="bg-gradient-to-b from-primary-light-250 to-primary-light-400 font-normal text-primary-light-750 dark:from-primary-dark-250 dark:to-primary-dark-500 dark:text-white"
                  size="md"
                >
                  Cadastre uma ONG
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src={BoxOfFood}
            alt="Caixa em cima de uma mesa com comidas variadas dentro e em sua volta"
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
                Doe e faça parte da mudança que você quer ver no mundo.
              </Typography>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src={Medicine}
            alt="Uma pessoa entregando uma caixa com remédios para outra pessoa"
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
                Ajude a semear amor, solidariedade e transformação. Doe agora!
              </Typography>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src={PeopleSharing}
            alt="Caixa de comida sendro entregue de uma pessoa para outra"
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
                Solidariedade é a única riqueza que cresce quando compartilhada.
                Vamos juntos?
              </Typography>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
