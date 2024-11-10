import { Button, IconButton } from '@material-tailwind/react';
import { FaRegCopy } from 'react-icons/fa6';
import {
  ProgressBar,
  CarouselDefault,
  InfoTextCards,
  NonprofitsKnowMore,
} from '../../components';
import { useCampaigns } from '../../../hooks';
import { useEffect, useState, useMemo } from 'react';

export function ShowCampaign({ campaignId }) {
  const { getCampaign } = useCampaigns();
  const [campaign, setCampaign] = useState(null);

  const campaignLink = `http://localhost:5173/campaign/${campaignId}`;
  const { campaignProgress, campaignContent } = useMemo(() => {
    if (!campaign) {
      return {};
    }

    const progress = Math.floor(
      (campaign.fundsCurrent * 100) / campaign.fundsGoal
    );

    const content = [
      {
        label: 'Sobre',
        body: campaign.description,
      },
    ];

    return {
      campaignProgress: progress,
      campaignContent: content,
    };
  }, [campaign]);

  useEffect(() => {
    getCampaign({ campaignId }).then((data) => setCampaign(data));
  }, [campaignId, getCampaign]);

  function getFormattedCurrency(value) {
    return value.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    });
  }

  if (!campaign) {
    return (
      <Button variant="outlined" loading={true}>
        Loading
      </Button>
    );
  }

  return (
    <div className="w-full h-full bg-gradient-to-b from-primary-light-250 to-primary-light-400">
      <div className="flex justify-center pt-4 font-black text-2xl md:text-2xl lg:text-4xl justify-left text-primary-dark-500">
        {campaign.name}
      </div>
      <CarouselDefault images={[{ img: campaign.image }]} />
      <div className="w-full px-16">
        <Button className="w-full bg-primary-light-700 font-bold text-2xl">
          DOE AGORA
        </Button>
      </div>
      <div className="w-full px-16 py-4">
        <div className="w-full rounded-lg bg-primary-light-400 py-6 px-4 drop-shadow-md">
          <ProgressBar progress={campaignProgress} totalBars={20} />
          <div className="py-4 font-bold text-sm text-primary-dark-750">
            {'Arrecadado: '}
          </div>
          <div className="font-bold text-3xl text-center text-primary-dark-750">
            {getFormattedCurrency(campaign.fundsCurrent)}
          </div>
          <div className="py-4 font-bold text-sm text-primary-dark-500">
            {' Meta: '}
          </div>
          <div className="font-bold text-3xl text-center text-primary-dark-500">
            {getFormattedCurrency(campaign.fundsGoal)}
          </div>
        </div>
      </div>
      <div className="w-full px-16">
        <div className="w-full rounded-lg bg-primary-light-400 p-4 pb-4 px-10 drop-shadow-md">
          <div className="font-semibold pb-2 text-sm text-primary-dark-750">
            {' Compartilhe essa campanha '}
          </div>
          <div className="h-8 p-1 text-sm bg-white rounded-md text-primary-dark-750 flex justify-between ">
            <span className="font-semibold pl-1">{campaignLink}</span>
            <IconButton
              className="h-6 w-6 rounded-sm bg-white text-primary-dark-750"
              onClick={() => {
                navigator.clipboard.writeText(campaignLink);
              }}
            >
              <FaRegCopy className="size-5" />
            </IconButton>
          </div>
        </div>
      </div>
      <InfoTextCards content={campaignContent} />
      <NonprofitsKnowMore />
    </div>
  );
}
