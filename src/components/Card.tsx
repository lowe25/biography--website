interface Card {
  text: string;
  date: string;
  imgSrc: string;
  bgColor: string;
  isReversed?: boolean;
}

const Card = ({ text, date, imgSrc, bgColor, isReversed = false }: Card) => {
  return (
    <div
      className={`mb-8 flex justify-end gap-[60px] items-center w-full ${
        isReversed ? "flex-row-reverse left-timeline" : "right-timeline"
      }`}
    >
      <div
        className="rounded-lg shadow-xl w-6/13  px-6 py-4"
        style={{ backgroundColor: bgColor }}
      >
        <span className="text-[1.6rem] max-md:text-[14px]">{date}</span>
        <p className="text">{text}</p>
        <img className="mt-[15px] card-img" src={imgSrc} alt="" />
      </div>
    </div>
  );
};

export default Card;
