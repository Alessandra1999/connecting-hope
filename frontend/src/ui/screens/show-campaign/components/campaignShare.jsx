import { IconButton } from '@material-tailwind/react';
import { FaRegCopy } from 'react-icons/fa6';

export function CampaignShare({ campaignLink }) {
  return (
    <div className="w-full rounded-lg bg-primary-light-400 p-4 pb-4 px-4 drop-shadow-md xl:pb-6 dark:bg-primary-dark-500 dark:bg-opacity-75">
      <div className="font-semibold pb-2 text-sm text-primary-dark-750 xl:text-xl text-center dark:text-white">
        {' Compartilhe essa campanha '}
      </div>
      <div className="h-8 p-1 xl:p-2 text-sm bg-white rounded-md text-primary-dark-750 flex justify-between xl:h-12 xl:text-lg overflow-hidden gap-2 items-center dark:bg-primary-light-400 dark:bg-opacity-30 dark:text-white">
        <span className="font-semibold pl-1 text-ellipsis overflow-hidden h-min">
          {campaignLink}
        </span>
        <IconButton
          className="h-6 w-6 rounded-sm bg-white text-primary-dark-750 xl:h-9 xl:w-10 dark:bg-primary-light-400 dark:bg-opacity-35"
          onClick={() => {
            navigator.clipboard.writeText(campaignLink);
          }}
        >
          <FaRegCopy className="size-5" />
        </IconButton>
      </div>
    </div>
  );
}
