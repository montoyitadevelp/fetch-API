const url = import.meta.env.VITE_API_URL;
const key = import.meta.env.VITE_API_HALO_KEY;

export const getfetchCampaings = async () => {

  const res = await fetch(url, {
    headers: {
      "Ocp-Apim-Subscription-key": key,
    },
  });
  const json = await res.json();

  return json;
};
