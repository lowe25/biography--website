import Card from "../components/Card";

const About = () => {
  return (
    <>
      <section>
        <div className="h-screen">
          <img
            className="w-full h-full object-cover"
            src="/img/about-banner.jpg"
            alt="Lakers V Kings"
          />
        </div>
        <div className="bg-[#000]">
          <div className="max-width p-[30px]">
            <span className="text">
              Kobe Bryant, in full Kobe Bean Bryant, (born August 23, 1978,
              Philadelphia, Pennsylvania, U.S.—died January 26, 2020, Calabasas,
              California), American professional basketball player, who helped
              lead the Los Angeles Lakers of the National Basketball Association
              (NBA) to five championships (2000–02 and 2009–10).
            </span>
            <div className="mt-[20px] flex gap-[20px] max-md:flex-col">
              <span className="text">
                Bryant’s father, Joe (“Jelly Bean”) Bryant, was a professional
                basketball player who spent eight seasons in the NBA and eight
                more playing in Italy, where Bryant went to school. When his
                family returned to the United States, Bryant played basketball
                at Lower Merion High School in Ardmore, Pennsylvania, where he
                received several national Player of the Year awards and broke
                the southeastern Pennsylvania scoring record set by Wilt
                Chamberlain with 2,883 points. Bryant opted to forgo college and
                declared himself eligible for the NBA draft when he graduated
                from high school. The Charlotte Hornets chose him with the 13th
                pick of the 1996 draft. He was traded to the Lakers shortly
                thereafter and became the second youngest NBA player in history
                when the 1996–97 season opened. He quickly proved his merit with
                the Lakers and was selected for the NBA All-Star Game in just
                his second season, becoming the youngest All-Star.
              </span>
              <img
                src="/img/kb-highschool.jpg"
                className="w-[380px] h-[280px] max-md:w-[100%] max-md:h-[auto]"
                alt="Kobe Bryant Layup"
              />
            </div>
            <div className="mt-[10px]">
              <span className="text">
                Bryant was forced to share the role of the Lakers’ star player
                with his popular and talented teammate Shaquille O’Neal. The two
                had an uneasy relationship, but they found success under the
                leadership of Phil Jackson, who became coach of the Lakers in
                1999. Bryant, a shooting guard, and O’Neal, a centre, meshed
                into a remarkably effective combination, and, by the time Bryant
                was 23, the Lakers had won three consecutive NBA championships.
              </span>
            </div>
            <div className="mt-[15px] grid gap-[20px] grid-cols-3 max-md:grid-cols-1">
              <img
                src="/img/champ1.jpg"
                className="col-img-2"
                alt="2000 NBA Champions"
              />
              <img
                src="/img/champ2.jpg"
                className="col-img-2"
                alt="2001 NBA Champions"
              />
              <img
                src="/img/champ3.jpg"
                className="col-img-2"
                alt="2002 NBA Champions"
              />
            </div>
            <div className="mt-[15px] flex gap-[20px]">
              <span className="text">
                Bryant led the league in scoring during the 2005–06 and 2006–07
                seasons, and in 2008 he was named the league’s MVP for the first
                time in his career. Bryant won his fourth NBA title in 2009, and
                he was named the finals MVP after averaging a stellar 32.4
                points per game in the series. He led the Lakers to their third
                straight Western Conference championship in 2009–10, and he was
                once more named NBA finals MVP after the Lakers defeated the
                Boston Celtics in a seven-game series. On April 13, 2016, Bryant
                dazzled a sold-out crowd at the Staples Center and fans
                everywhere in the last game of his career, scoring 60 points and
                leading the Lakers to a win against the Utah Jazz. It was
                Bryant’s sixth 60-point game of his career.
              </span>
            </div>
            <div className="mt-[15px] grid gap-[20px] grid-cols-2 max-md:grid-cols-1">
              <img
                src="/img/kb-champ5.jpg"
                className="col-img-3"
                alt="Kobe Bryant Layup"
              />
              <img
                src="/img/2010-champ1.jpg"
                className="col-img-3"
                alt="Kobe Bryant Layup"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#000]">
        <div className="max-width p-[30px]">
          <span className="block text-center mb-[20px] text-[3rem] text-[#fff]">
            Career Timeline
          </span>
          <div className="h-full">
            <div className="relative wrap overflow-hidden h-full">
              <div className="border-2-2 absolute border-opacity-20 border-[#fff] h-full border left-[50%]"></div>
              <Card
                text="Out of High School was Drafted 13th Overall By the Charlottte Hornets. Traded to the L.A Lakers"
                date="June 26, 1996"
                imgSrc="/img/draft-day.jpg"
                bgColor="#FDB927"
                isReversed={false}
              />

              <Card
                text="1st NBA Championship after beating the indiana pacers in six games in the 2000 NBA Finals."
                date="June 7, 2000"
                imgSrc="/img/champ1.jpg"
                bgColor="#552583"
                isReversed={true}
              />

              <Card
                text="After a historic 15-1 in the 2001 NBA Post Season Lakers won their 2nd championship in Philidelphia aftter defeating the sixers in five games. "
                date="June 15, 2001"
                imgSrc="/img/champ2.jpg"
                bgColor="#FDB927"
                isReversed={false}
              />

              <Card
                text="After posting another 15-1 in the Post Season The Lakers won their 3rd championship in New Jersey in 4 Games."
                date="June 12, 2002"
                imgSrc="/img/champ3.jpg"
                bgColor="#552583"
                isReversed={true}
              />

              <Card
                data-aos="fade-right"
                text="Historic 81 Point game and First Scoring Title "
                date="January 22, 2006"
                imgSrc="/img/careerhigh-scoring.jpg"
                bgColor="#FDB927"
                isReversed={false}
              />

              <Card
                text="5th Finals Apperance and First MVP"
                date="June 17, 2008"
                imgSrc="/img/mvp 1.jpg"
                bgColor="#552583"
                isReversed={true}
              />

              <Card
                text="6th Finals apperance and 4th Championship Win"
                date="June 14, 2009"
                imgSrc="/img/kb-champ4.jpg"
                bgColor="#FDB927"
                isReversed={false}
              />

              <Card
                text="7th Finals apperance and 5th Championship Win"
                date="June 17, 2010"
                imgSrc="/img/kb-champ5.jpg"
                bgColor="#552583"
                isReversed={true}
              />

              <Card
                text="Passes Michael Jordan on All Time Scoring List"
                date="December 14, 2014"
                imgSrc="/img/leadingscorer.jpg"
                bgColor="#FDB927"
                isReversed={false}
              />

              <Card
                text="Memorable last game"
                date="April 13, 2016"
                imgSrc="/img/lastgame.jpg"
                bgColor="#552583"
                isReversed={true}
              />

              <Card
                text="Naismith Memorial Hall of Fame Introduction "
                date="May 15, 2021"
                imgSrc="/img/hof.jpg"
                bgColor="#FDB927"
                isReversed={false}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
