import { useEffect, useState } from "react";
import regSeason from "../data/regSeason.json";
import postSeason from "../data/playoffs.json";

interface StatItem {
  season: number;
  team: string;
  games: number;
  gamesStarted: number;
  minutesPg: number;
  fieldGoals: number;
  fieldAttempts: number;
  fieldPercent: number;
  threeFg: number;
  threeAttempts: number;
  threePercent: number;
  twoFg: number;
  twoAttempts: number;
  twoPercent: number;
  ft: number;
  ftAttempts: number;
  ftPercent: number;
  personalFouls: number;
  steals: number;
  blocks: number;
  offensiveRb: number;
  defensiveRb: number;
  totalRb: number;
  assists: number;
  points: number;
}

const Profile = () => {
  const [regStats, setregStats] = useState<StatItem[]>([]);
  const [postStats, setpostStats] = useState<StatItem[]>([]);

  useEffect(() => {
    const mappedData = regSeason.players.map((item) => ({
      season: item.season,
      team: item.team,
      games: item.games,
      gamesStarted: item.gamesStarted,
      minutesPg: item.minutesPg,
      fieldGoals: item.fieldGoals,
      fieldAttempts: item.fieldAttempts,
      fieldPercent: item.fieldPercent,
      threeFg: item.threeFg,
      threeAttempts: item.threeAttempts,
      threePercent: item.threePercent,
      twoFg: item.twoFg,
      twoAttempts: item.twoAttempts,
      twoPercent: item.twoPercent,
      ft: item.ft,
      ftAttempts: item.ftAttempts,
      ftPercent: item.ftPercent,
      personalFouls: item.personalFouls,
      steals: item.steals,
      blocks: item.blocks,
      offensiveRb: item.offensiveRb,
      defensiveRb: item.defensiveRb,
      totalRb: item.totalRb,
      assists: item.assists,
      points: item.points,
    }));

    setregStats(mappedData);
  }, []);

  useEffect(() => {
    const mappedData1 = postSeason.players.map((item1) => ({
      season: item1.season,
      team: item1.team,
      games: item1.games,
      gamesStarted: item1.gamesStarted,
      minutesPg: item1.minutesPg,
      fieldGoals: item1.fieldGoals,
      fieldAttempts: item1.fieldAttempts,
      fieldPercent: item1.fieldPercent,
      threeFg: item1.threeFg,
      threeAttempts: item1.threeAttempts,
      threePercent: item1.threePercent,
      twoFg: item1.twoFg,
      twoAttempts: item1.twoAttempts,
      twoPercent: item1.twoPercent,
      ft: item1.ft,
      ftAttempts: item1.ftAttempts,
      ftPercent: item1.ftPercent,
      personalFouls: item1.personalFouls,
      steals: item1.steals,
      blocks: item1.blocks,
      offensiveRb: item1.offensiveRb,
      defensiveRb: item1.defensiveRb,
      totalRb: item1.totalRb,
      assists: item1.assists,
      points: item1.points,
    }));

    setpostStats(mappedData1);
  }, []);

  return (
    <>
      <section className="bg-[#000]">
        <div className="max-width p-[30px]">
          <div className="pt-[20px] grid grid-cols-1 md:grid-cols-2 gap-[15px]">
            <div className="p-[20px] border-2 border-[#fff] text-[#fff] w-full">
              <h2 className="text-[3rem]">Personal Information:</h2>
              <div className="flex flex-col gap-[10px]">
                <span className="text-[1.8rem]">Born: August 23, 1978</span>
                <span className="text-[1.8rem]">Died: January 20, 2020</span>
                <span className="text-[1.8rem]">Height: 6ft 6in (198cm)</span>
                <span className="text-[1.8rem]">Weight: 212lb (96kg)</span>
              </div>
            </div>

            <div className="p-[20px] border-2 border-[#fff] text-[#fff] w-full">
              <h2 className="text-[3rem]">Career Information:</h2>
              <div className="flex flex-col gap-[10px]">
                <span className="text-[1.8rem]">Nationality: American</span>
                <span className="text-[1.8rem]">
                  School: Lower Merion Highschool
                </span>
                <span className="text-[1.8rem]">
                  Draft: 1996 R1/P13 By Charlotte Hornets
                </span>
                <span className="text-[1.8rem]">Position: Shooting Guard</span>
                <span className="text-[1.8rem]">
                  Number: 8 (1997-2006), 24 (2007-2016)
                </span>
                <span className="text-[1.8rem]">Career: 1997-2016</span>
              </div>
            </div>

            <div className="p-[20px] border-2 border-[#fff] text-[#fff] w-full md:col-span-2">
              <div className="flex gap-[20px] max-md:flex-col">
                <div>
                  <h2 className="block text-left text-[3rem]">
                    Career Achievements
                  </h2>
                  <div className="flex gap-[15px] max-md:flex-col">
                    <div className="flex flex-col">
                      <span className="text-[1.8rem]">
                        5x NBA Champion (2000, 2001, 2002, 2009, 2010)
                      </span>
                      <span className="text-[1.8rem]">
                        2x NBA Finals MVP (2009, 2010)
                      </span>
                      <span className="text-[1.8rem]">
                        4x NBA Allstar Game MVP(2002, 2007, 2009, 2011)
                      </span>
                      <span className="text-[1.8rem]">
                        2x NBA Scoring Champion(2006, 2007)
                      </span>
                      <span className="text-[1.8rem]">
                        2x Olympic Gold Medalist(2008, 2012)
                      </span>
                      <span className="text-[1.8rem]">
                        1x Slamdunk Champion(1997)
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[1.8rem]">
                        2x Olympic Gold Medalist(2008, 2012)
                      </span>
                      <span className="text-[1.8rem]">
                        1x Slamdunk Champion(1997)
                      </span>
                      <span className="text-[1.8rem]">
                        18x NBA Allstar (1998, 2000-2016)
                      </span>
                      <span className="text-[1.8rem]">15x All NBA</span>
                      <span className="text-[1.8rem]">
                        12x NBA All Defensive
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="block text-left text-[3rem]">Career Highs</h2>
                  <div className="flex gap-[15px]">
                    <div className="flex flex-col">
                      <span className="text-[1.8rem]">
                        Points: 81 - January 22, 2006
                      </span>
                      <span className="text-[1.8rem]">
                        Assist:17 - January 24, 2010
                      </span>
                      <span className="text-[1.8rem]">
                        Rebounds:16 - January 17, 2015
                      </span>
                      <span className="text-[1.8rem]">
                        Block:5 - Febuary 13, 2006
                      </span>
                      <span className="text-[1.8rem]">
                        Steals:7 - December 11, 1999
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-width pl-[30px] pr-[30px] pb-[30px]">
          <h2 className="block text-center text-[3rem] text-[#fff]">
            NBA Statistics
          </h2>
          <div>
            <span className="text">Regular Season:</span>
            <div className="w-full overflow-x-auto xl:overflow-x-hidden">
              <table className="mt-[15px] min-w-[1200px] border-collapse text-[1.6rem] text-[#fff] xl:min-w-full ">
                <thead>
                  <tr>
                    <th className="border border-gray-300 text-left px-4 py-2">
                      Year
                    </th>
                    <th className="border border-gray-300 text-left px-4 py-2">
                      Team
                    </th>
                    <th className="border border-gray-300 text-left px-4 py-2 ">
                      GP
                    </th>
                    <th className="border border-gray-300 text-left px-4 py-2">
                      GS
                    </th>
                    <th className="border border-gray-300 text-left px-4 py-2">
                      MPG
                    </th>
                    <th className="border border-gray-300 text-left px-4 py-2">
                      FG
                    </th>
                    <th className="border border-gray-300 text-left px-4 py-2">
                      FGA
                    </th>
                    <th className="border border-gray-300 text-left px-4 py-2">
                      FG%
                    </th>
                    <th className="border border-gray-300 text-left px-4 py-2">
                      3P
                    </th>
                    <th className="border border-gray-300 text-left px-4 py-2">
                      3PA
                    </th>
                    <th className="border border-gray-300 text-left px-4 py-2">
                      3P%
                    </th>
                    <th className="border border-gray-300 text-left px-4 py-2">
                      2P
                    </th>
                    <th className="border border-gray-300 text-left px-4 py-2">
                      2PA
                    </th>
                    <th className="border border-gray-300 text-left px-4 py-2">
                      2P%
                    </th>
                    <th className="border border-gray-300 text-left px-4 py-2">
                      FT
                    </th>
                    <th className="border border-gray-300 text-left px-4 py-2">
                      FTA
                    </th>
                    <th className="border border-gray-300 text-left px-4 py-2">
                      FT%
                    </th>
                    <th className="border border-gray-300 text-left px-4 py-2">
                      PF
                    </th>
                    <th className="border border-gray-300 text-left px-4 py-2">
                      STL
                    </th>
                    <th className="border border-gray-300 text-left px-4 py-2">
                      BLK
                    </th>
                    <th className="border border-gray-300 text-left px-4 py-2">
                      ORB
                    </th>
                    <th className="border border-gray-300 text-left px-4 py-2">
                      DRB
                    </th>
                    <th className="border border-gray-300 text-left px-4 py-2">
                      REB
                    </th>
                    <th className="border border-gray-300 text-left px-4 py-2">
                      AST
                    </th>
                    <th className="border border-gray-300 text-left px-4 py-2">
                      PTS
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {regStats.map((item, index) => (
                    <tr key={index}>
                      <td className="border border-gray-300 px-4 py-2">
                        {item.season}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item.team}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item.games}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item.gamesStarted}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item.minutesPg}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item.fieldGoals}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item.fieldAttempts}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item.fieldPercent}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item.threeFg}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item.threeAttempts}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item.threePercent}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item.twoFg}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item.twoAttempts}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item.twoPercent}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item.ft}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item.ftAttempts}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item.ftPercent}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item.personalFouls}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item.steals}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item.blocks}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item.offensiveRb}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item.defensiveRb}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item.totalRb}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item.assists}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item.points}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-[20px]">
            <span className="text">Playoffs:</span>
            <div className="w-full overflow-x-auto xl:overflow-x-hidden">
              <table className="mt-[15px] w-full border-collapse text-[1.6rem] text-[#fff]">
                <thead>
                  <tr>
                    <th className="border border-gray-300 text-left px-4 py-2">
                      Year
                    </th>
                    <th className="border border-gray-300 text-left px-4 py-2">
                      Team
                    </th>
                    <th className="border border-gray-300 text-left px-4 py-2 ">
                      GP
                    </th>
                    <th className="border border-gray-300 text-left px-4 py-2">
                      GS
                    </th>
                    <th className="border border-gray-300 text-left px-4 py-2">
                      MPG
                    </th>
                    <th className="border border-gray-300 text-left px-4 py-2">
                      FG
                    </th>
                    <th className="border border-gray-300 text-left px-4 py-2">
                      FGA
                    </th>
                    <th className="border border-gray-300 text-left px-4 py-2">
                      FG%
                    </th>
                    <th className="border border-gray-300 text-left px-4 py-2">
                      3P
                    </th>
                    <th className="border border-gray-300 text-left px-4 py-2">
                      3PA
                    </th>
                    <th className="border border-gray-300 text-left px-4 py-2">
                      3P%
                    </th>
                    <th className="border border-gray-300 text-left px-4 py-2">
                      2P
                    </th>
                    <th className="border border-gray-300 text-left px-4 py-2">
                      2PA
                    </th>
                    <th className="border border-gray-300 text-left px-4 py-2">
                      2P%
                    </th>
                    <th className="border border-gray-300 text-left px-4 py-2">
                      FT
                    </th>
                    <th className="border border-gray-300 text-left px-4 py-2">
                      FTA
                    </th>
                    <th className="border border-gray-300 text-left px-4 py-2">
                      FT%
                    </th>
                    <th className="border border-gray-300 text-left px-4 py-2">
                      PF
                    </th>
                    <th className="border border-gray-300 text-left px-4 py-2">
                      STL
                    </th>
                    <th className="border border-gray-300 text-left px-4 py-2">
                      BLK
                    </th>
                    <th className="border border-gray-300 text-left px-4 py-2">
                      ORB
                    </th>
                    <th className="border border-gray-300 text-left px-4 py-2">
                      DRB
                    </th>
                    <th className="border border-gray-300 text-left px-4 py-2">
                      REB
                    </th>
                    <th className="border border-gray-300 text-left px-4 py-2">
                      AST
                    </th>
                    <th className="border border-gray-300 text-left px-4 py-2">
                      PTS
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {postStats.map((item1, index) => (
                    <tr key={index}>
                      <td className="border border-gray-300 px-4 py-2">
                        {item1.season}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item1.team}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item1.games}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item1.gamesStarted}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item1.minutesPg}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item1.fieldGoals}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item1.fieldAttempts}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item1.fieldPercent}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item1.threeFg}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item1.threeAttempts}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item1.threePercent}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item1.twoFg}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item1.twoAttempts}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item1.twoPercent}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item1.ft}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item1.ftAttempts}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item1.ftPercent}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item1.personalFouls}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item1.steals}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item1.blocks}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item1.offensiveRb}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item1.defensiveRb}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item1.totalRb}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item1.assists}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item1.points}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
