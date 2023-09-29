import { useCampaingStore } from "../store/useCampaingStore";
import Halo from "../assets/Halo5.png";
export const Start = () => {
  const fetchCampaings = useCampaingStore((state) => state.fetchCampaings);

  const handleStart = () => {
    fetchCampaings();
  };

  return (
    <>
      <div className="flex flex-col items-center gap-[5rem]">
        <img width={200} height={1000} src={Halo} />
        <button
          className="btn btn-outline btn-success normal-case text-lg"
          onClick={handleStart}
        >
          <h1>Let's start with the Campaings of Halo 5</h1>
        </button>
      </div>
    </>
  );
};
