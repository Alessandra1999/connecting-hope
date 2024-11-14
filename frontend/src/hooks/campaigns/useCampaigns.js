import { httpGet } from '../../api';
import { useEffect, useState } from 'react';

export function useCampaigns() {
  const [campaigns, setCampaigns] = useState();

  useEffect(() => {
    getCampaigns().then((content) => setCampaigns(content));
  }, []);

  async function getCampaigns() {
    const { content } = await httpGet('/nonProfitsCampaigns');
    return content;
  }

  return {
    campaigns,
  };
}
