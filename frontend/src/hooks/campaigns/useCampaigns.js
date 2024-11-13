import { BASE_URL } from '../../api/apiService';
import { useEffect, useState } from 'react';

export function useCampaigns() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    getCampaigns().then((data) => setCampaigns(data));
  });

  async function getCampaignsByUser(userId) {}

  async function getCampaigns() {}

  async function getCampaign({ campaignId }) {
    // remove comment when the BE is available
    // const url = `${BASE_URL}/nonProfitsCampaigns/${campaignId}`;
    // const campaign = await fetch(url);

    const campaign = {
      id: '123',
      name: 'FESTIVAL DA ADOÇÃO',
      description:
        'Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi. Si num tem leite então bota uma pinga aí cumpadi! Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Ô gente finis, pode baixar uma ampolis que hoje é sexta-feris! Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Quem num gosta di mim que vai caçá sua turmis! Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl',
      image:
        'https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRvZyUyMGFkb3B0aW9ufGVufDB8fDB8fHww',
      fundsGoal: 20000,
      fundsCurrent: 11589,
      nonProfitsId: '456',
    };

    return campaign;
  }

  return {
    getCampaign,
    getCampaignsByUser,
    campaigns,
  };
}
