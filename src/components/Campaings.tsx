import { useCampaingStore } from "../store/useCampaingStore";
import { Type, type InfoCampaing as InfoType } from "../types.d";
import {
  IconArrowBigLeftFilled,
  IconArrowBigRightFilled,
} from "@tabler/icons-react";

const InfoCampaings = ({ info }: { info: InfoType }) => {
  return (
    <>
      <div className="card max-w-sm shadow-xl">
        <figure>
          <img src={info.imageUrl} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {info.name}
            <div
              className={`${
                info.type === Type.BlueTeam
                  ? "badge-accent badge-outline"
                  : "badge-primary badge-outline"
              } badge `}
            >
              {info.type}
            </div>
          </h2>
          <p>{info.description}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">
              Mission {info.missionNumber}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Campaings = () => {
  const campaings = useCampaingStore((state) => state.campaings);
  const currentCampaing = useCampaingStore((state) => state.currentCampaing);
  const nextArrow = useCampaingStore((state) => state.goNextCampaing);
  const previousArrow = useCampaingStore((state) => state.goPreviousCampaing);
  const campaingsInfo = campaings[currentCampaing]; //Recuperando todas las campañas y la actual
  const reset = useCampaingStore((state) => state.reset);

  return (
    <>
      <button
        onClick={previousArrow}
        className="hover:cursor-pointer pr-[1rem] pt-[5rem]"
      >
        <IconArrowBigLeftFilled />
      </button>

      <div className="flex flex-col gap-[1rem]">
        <button
          className="btn btn-outline btn-secondary normal-case"
          onClick={() => reset()}
        >
          Back
        </button>
        <h1 className="text-center text-5xl font-bold">Campaings</h1>
        {currentCampaing + 1} / {campaings.length}
        <InfoCampaings info={campaingsInfo} />
      </div>

      <button onClick={nextArrow} className="hover:cursor-pointer pl-[1rem] pt-[5rem]">
        <IconArrowBigRightFilled />
      </button>
    </>
  );
};
