import { Link } from 'react-router-dom';

const Footer = () => {
  return(
    <footer className="p-[20px] bg-[#000]">
      <div className="max-width flex gap-[40px] justify-between items-center max-md:flex-col max-md:gap-[20px]">
        <div>
          <img className="w-[49px] h-[49px]" src="/img/footer/kb-logo.png" alt="Kobe Logo" />
        </div>
        <ul className="flex gap-[40px] max-md:gap-[20px]">
          <li>
            <Link className="text-[1.8rem] text-[#fff]" to="/">Home</Link>
          </li>
          <li>
            <Link className="text-[1.8rem] text-[#fff]" to="/about">About</Link>
          </li>
          <li>
            <Link className="text-[1.8rem] text-[#fff]" to="/profile">Profle</Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;