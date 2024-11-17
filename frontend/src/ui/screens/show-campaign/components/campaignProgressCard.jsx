import { Button } from '@material-tailwind/react';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProgressBar } from '../../../components';

export function CampaignProgressCard({ campaign }) {
  const campaignProgress = useMemo(() => {
    if (!campaign) {
      return {};
    }

    return Math.floor((campaign.fundsCurrent * 100) / campaign.fundsGoal);
  }, [campaign]);

  function getFormattedCurrency(value) {
    return value.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    });
  }

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/donation-form")
  }

  return (
    <div className="h-full flex flex-col gap-4">
      <div className=" w-full">
        <Button className="w-full bg-primary-light-700 dark:bg-primary-dark-700 font-bold text-2xl"
        onClick={handleNavigate}>
          DOE AGORA
        </Button>
      </div>
      <div className="h-full w-full">
        <div className="h-full w-full rounded-lg bg-primary-light-400 py-6 px-4 drop-shadow-md dark:bg-primary-dark-500 dark:bg-opacity-75">
          <ProgressBar progress={campaignProgress} totalBars={20} />
          <div className="py-4 font-bold text-sm text-primary-dark-750 dark:text-white">
            {'Arrecadado: '}
          </div>
          <div className="font-bold text-3xl text-center text-primary-dark-750 dark:text-white">
            {getFormattedCurrency(campaign.fundsCurrent)}
          </div>
          <div className="py-4 font-bold text-sm text-primary-dark-500 dark:text-primary-light-550">
            {' Meta: '}
          </div>
          <div className="font-bold text-3xl text-center text-primary-dark-500 dark:text-primary-light-550">
            {getFormattedCurrency(campaign.fundsGoal)}
          </div>
        </div>
      </div>
    </div>
  );
}
