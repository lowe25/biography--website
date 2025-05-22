const Profile = () => {
  return (
    <>
      <section className="bg-[#000] flex items-center justify-center min-h-screen">
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
      </section>
    </>
  );
};

export default Profile;
