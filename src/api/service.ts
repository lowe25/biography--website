import regSeason from "../data/regSeason.json";
import postSeason from "../data/playoffs.json";

export const getPlayerStats = async (playerName: string) => {
  const players = regSeason.players;
  const filtered = players.filter((p) =>
    p.playerName.toLowerCase().includes(playerName.toLowerCase())
  );

  return filtered;
};

export const getPlayerpost = async (playerName: string) => {
  const players = postSeason.players;
  const filtered = players.filter((p) =>
    p.playerName.toLowerCase().includes(playerName.toLowerCase())
  );

  return filtered;
};
