import { FaRegHeart } from 'react-icons/fa6';

export function CampaignsCard({ campaign }) {
  return (
    <div className="max-w-40 w-full p-2 rounded-2xl bg-gradient-to-b from-primary-light-300 to-primary-light-500">
      {campaign.imageUrl && (
        <img
          className="rounded-2xl"
          src={campaign.imageUrl}
          alt={campaign.title}
        />
      )}

      <div className="mt-2 flex items-center justify-between">
        <h3 className="font-semibold">{campaign.title}</h3>

        <div className="flex items-center justify-center gap-2">
          <p className="font-semibold">{campaign.countOfLikes}</p>

          <button>
            <FaRegHeart size={12} />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <p className="italic text-[6px]">{campaign.description}</p>
        <div>
          <p>Expira em: {campaign.expiresIn}</p>
          <button>Saiba mais</button>
        </div>
      </div>
    </div>
  );
}
