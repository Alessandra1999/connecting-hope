import { useMemo } from 'react';
import { Button } from '@material-tailwind/react';
import {
  CarouselDefault,
  InfoTextCards,
  NonprofitsKnowMore,
} from '../../components';
import { useCampaigns } from '../../../hooks';

import { CampaignProgressCard, CampaignShare } from './components';
import { useParams } from 'react-router-dom';

export function ShowCampaign() {
  const { campaignId } = useParams();
  const { campaigns } = useCampaigns();

  const campaign = useMemo(() => {
    if (!campaigns) {
      return null;
    }

    return campaigns.find(({ id }) => id === Number(campaignId));
  }, [campaigns]);

  const campaignLink = `http://localhost:5173/campaign/${campaignId}`;
  const campaignContent = useMemo(() => {
    if (!campaign) {
      return [];
    }

    return [
      {
        label: 'Sobre',
        body: campaign.description,
      },
    ];
  }, [campaign]);

  if (!campaign) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Button variant="outlined" loading={true}>
          Loading...
        </Button>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-gradient-to-b from-primary-light-250 to-primary-light-400 lg:flex-auto dark:from-primary-dark-250 dark:to-primary-dark-500">
      <div className="xl:max-w-screen-2xl xl:mx-auto px-16 py-10 flex-col flex gap-10">
        <div className="flex justify-center font-black text-2xl xl:text-4xl xl:justify-start text-primary-dark-500 dark:text-white">
          {campaign.name}
        </div>
        <div className="flex xl:flex-row flex-col gap-10">
          <div className="xl:w-2/3">
            <CarouselDefault images={[{ img: campaign.image }]} />
          </div>
          <div className="xl:w-1/3">
            <CampaignProgressCard campaign={campaign} />
          </div>
        </div>
        <div className="w-full">
          <CampaignShare campaignLink={campaignLink} />
        </div>
        <div className="flex xl:flex-row flex-col gap-10">
          <div className="xl:w-2/3">
            <InfoTextCards content={campaignContent} />
          </div>
          <div className="xl:w-1/3">
            <NonprofitsKnowMore />
          </div>
        </div>
      </div>
    </div>
  );
}
