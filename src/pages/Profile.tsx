import { useEffect, useState } from "react";
import { getPlayerStats, getPlayerStatsPost } from "../api/service";

interface PlayerStats {
  season: string;
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
  ftPercent: number;
  ftAttempts: number;
  personalFouls: number;
  steals: number;
  blocks: number;
  totalRb: number;
  offensiveRb: number;
  defensiveRb: number;
  assists: number;
  points: number;
}

interface PlayerStatsPost {
  season: string;
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
  ftPercent: number;
  ftAttempts: number;
  personalFouls: number;
  steals: number;
  blocks: number;
  totalRb: number;
  offensiveRb: number;
  defensiveRb: number;
  assists: number;
  points: number;
}

const Profile = () => {
  const [stats, setStats] = useState<PlayerStats[]>([]);
  const [statspost, setStatsPost] = useState<PlayerStatsPost[]>([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getPlayerStats("Kobe Bryant");
        setStats(data);
      } catch (error) {
        console.error("Error fetching player stats:", error);
      }
    };

    fetchStats();
  }, []);

  useEffect(() => {
    const fetchStatsPost = async () => {
      try {
        const datapost = await getPlayerStatsPost("Kobe Bryant");
        setStatsPost(datapost);
        console.log(datapost);
      } catch (error) {
        console.error("Error fetching player stats:", error);
      }
    };

    fetchStatsPost();
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
                  {stats.map((item, index) => (
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
                  {statspost.map((item, index) => (
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
        </div>
      </section>
    </>
  );
};

export default Profile;
