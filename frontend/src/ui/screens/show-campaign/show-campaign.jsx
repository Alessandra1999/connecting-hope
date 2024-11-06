import { Button } from '@material-tailwind/react';

import { ProgressBar, CarouselDefault } from '../../components';
// import { NonProfitsCard } from '../../components/campaigns-card/NonProfitsCard';
import { CampaignsCard } from '../../components';

import Img04 from '../../../assets/images/ImgForCarousel/Img04.png';
import Img05 from '../../../assets/images/ImgForCarousel/Img05.png';
import Img06 from '../../../assets/images/ImgForCarousel/Img06.png';
import Img07 from '../../../assets/images/ImgForCarousel/Img07.png';

export function ShowCampaign() {
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
      <div className="flex justify-center pt-4 font-black text-2xl text-primary-dark-500">
        FESTIVAL DA ADOÇÃO
      </div>

      <CarouselDefault images={images} />

      <div className="w-full px-16">
        <Button className="w-full bg-primary-light-700 font-bold text-2xl">
          DOE AGORA
        </Button>
      </div>

      <div className="w-full px-16 py-4">
        <div className="w-full rounded-lg bg-primary-light-400 pt-6 px-4">
          <ProgressBar progress={20} totalBars={20} />
          <div className="py-4 font-bold text-sm text-primary-dark-750">
            {'Arrecadado: '}
          </div>
          <div className="font-bold text-3xl text-center text-primary-dark-750">
            {' R$ XX.XXX,XX '}
          </div>
          <div className="py-4 font-bold text-sm text-primary-dark-500">
            {' Meta: '}
          </div>
          <div className="font-bold text-3xl text-center text-primary-dark-500">
            {' R$ XX.XXX,XX '}
          </div>
        </div>
      </div>

      <div className="w-full px-16 h-14">
        <div className="w-full rounded-lg bg-primary-light-400 p-4 px-10">
          <div className="font-semibold pb-2 text-sm text-primary-dark-750">
            {' Compartilhe essa campanha '}
          </div>
          <div className="h-8 py-1 font-semibold text-sm text-center bg-white rounded-md text-primary-dark-750">
            {' http://linkdacampanha.com.br '}
          </div>
        </div>
      </div>
      <div className="px-16 pt-14 mr-96">
        <div className="bg-primary-light-200 rounded-t-xl p-3">
          <div className="font-medium text-center">{'Sobre'}</div>
        </div>
      </div>
      <div className="px-16">
        <div className="bg-primary-light-200 text-justify rounded-lg p-6">
          <div className="font-medium pb-2">
            {
              'Mussum Ipsum, cacilds vidis litro abertis.  Interagi no mé, cursus quis, vehicula ac nisi. Si num tem leite então bota uma pinga aí cumpadi! Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Ô gente finis, pode baixar uma ampolis que hoje é sexta-feris! '
            }
          </div>
          <div className="font-medium">
            {
              'Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Quem num gosta di mim que vai caçá sua turmis! Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.'
            }
          </div>
        </div>
      </div>

      <div>
        <CampaignsCard />
      </div>
    </div>
  );
}
