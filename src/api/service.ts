import axios from "axios";

const BASE_URL = "http://rest.nbaapi.com/api";

export const getPlayerStats = async (playerName: string) => {
  const response = await axios.get(`${BASE_URL}/PlayerDataTotals/query`, {
    params: {
      playerName,
      sortBy: "PlayerName",
      ascending: true,
      pageNumber: 1,
      pageSize: 30,
    },
  });
  return response.data;
};

export const getPlayerStatsPost = async (playerName: string) => {
  const response = await axios.get(
    `${BASE_URL}/PlayerDataTotalsPlayoffs/query`,
    {
      params: {
        playerName,
        sortBy: "PlayerName",
        ascending: true,
        pageNumber: 1,
        pageSize: 30,
      },
    }
  );
  return response.data;
};
