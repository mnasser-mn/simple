import axios from "axios";
const BASE_URL = "https://skills-api-zeta.vercel.app/";

export const getJobs = async ({ query, cursor, limit }: any) => {
  try {
    console.log(typeof query);
    let response = query
      ? await axios.get(`${BASE_URL}jobs/search?query=${query}`)
      : await axios.get(
          `${BASE_URL}?cursor=${cursor || 0}&limit=${limit || 12}`
        );

    if (response.data) {
      const normalizedResponse = normalizeResponse(response.data.data.jobs);
      console.log(normalizedResponse);

      return {
        payload: {
          entity: normalizedResponse,
          meta: { ...response.data.data.meta },
        },
        type: "JOB_LIST",
      };
    }
  } catch (e: any) {
      console.log(e)
    if (e?.response?.status === 404 && query)

      return {
        type: "ERROR",
        payload: "No results for this query!",
      };
  }
return {
    type: "ERROR",
    payload: "Please try again!",
  };
};

export const getSkill = async (uuid: string) => {
  const { data } = await axios.get(`${BASE_URL}skill/${uuid}`);

  const normalizedResponse = normalizeResponse([{ ...data.data.skill }]);
  return {
    payload: {
      entity: normalizedResponse,
    },
    type: "SKILL_LIST",
  };
};

const normalizeResponse = (data: any) => {
  const byId = data.reduce((prev: any, current: any) => {
    const instance = { ...current };
    return {
      ...prev,
      [current.id]: {
        ...instance,
      },
    };
  }, {});
  const allIds = data.map((item: any) => item.id);
  return {
    byId,
    allIds,
  };
};
