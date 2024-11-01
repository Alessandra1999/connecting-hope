import { Button } from '@material-tailwind/react';
import { Progress } from '@material-tailwind/react';

import { CarouselDefault } from '../../components/carousel/carousel';
import Img04 from '../../../assets/ImgForCarousel/Img04.png';
import Img05 from '../../../assets/ImgForCarousel/Img05.png';
import Img06 from '../../../assets/ImgForCarousel/Img06.png';
import Img07 from '../../../assets/ImgForCarousel/Img07.png';

export function ShowCampaing() {
  const images = [
    {
      img: Img04,
      alt: 'cachorro olhando para a câmera',
    },
    {
      img: Img05,
      alt: 'cachorro encarando a câmera',
    },
    {
      img: Img06,
      alt: 'cachorros atrás de uma grade olhando para a direita',
    },
    {
      img: Img07,
      alt: 'cachorro sorrindo e recebendo carinho na cabeça',
    },
  ];
  return (
    <div className="w-full h-screen bg-gradient-to-b from-primary-light-250 to-primary-light-400">
      <div>
        <div className="flex justify-center pt-4 font-black text-2xl text-primary-dark-500">
          FESTIVAL DA ADOÇÃO
        </div>
      </div>
      <CarouselDefault images={images} />

      <div className="w-full px-16">
        <Button className="w-full bg-primary-light-700 font-bold text-2xl">
          DOE AGORA
        </Button>
      </div>

      <div className="w-full px-16 my-4 ">
        <Progress value={50} className="h-10 "></Progress>
      </div>
    </div>
  );
}
