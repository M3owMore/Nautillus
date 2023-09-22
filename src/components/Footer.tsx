import icon from "../img/icon.webp"
import {FaDiscord} from "react-icons/fa"
import {BsFacebook, BsTwitter, BsGithub} from "react-icons/bs"
import { Link } from "react-router-dom"

const  Footer = () => {
    return (
    <>
    <div className="h-4"></div>
    <div className="h-4"></div>
      <div className="mb-8 text-main flex items-center justify-around max-phone:flex-col max-lg:flex-row " >
        <div className="text-main flex items-center flex-col">
            <div className="flex items-center justify-start flex-col p-4">
                <Link to={"/"} className="text-main  hover:scale-125 duration-300">
                    <div className="flex justify-center items-center">
                        <img className="w-12 m-2" src={icon} alt="icon"/>
                        <p className="text-2xl  m-2">Nautillus</p>
                     </div>
                </Link>
                <p>© 2022 Nautillus</p>
            </div>
            <div className="flex justify-center items-center flex-row p-4">
                <button className="text-main hover:text-secondary text-3xl hover:scale-125 duration-200"><BsFacebook className="m-2"/></button>
                <button className="text-main hover:text-secondary text-3xl hover:scale-125 duration-200"><BsTwitter className="m-2"/></button>
                <button className="text-main hover:text-secondary text-3xl hover:scale-125 duration-200"><BsGithub className="m-2"/></button>
                <button className="text-main hover:text-secondary text-3xl hover:scale-125 duration-200"><FaDiscord className="m-2"/></button>
            </div>
        </div>

        <div className="text-main flex items-center justify-center flex-col h-full">
            <p className=" text-2xl m-4">Company</p>
            <Link to={"/about"} className="text-main hover:text-secondary hover:scale-125 duration-300 link-underline-2"><p>About Us</p></Link>
            <Link to={"/contact"} className="text-main hover:text-secondary hover:scale-125 duration-300 link-underline-2"><p>Contact Us</p></Link>
            <button className="text-main hover:text-secondary hover:scale-125 duration-300 link-underline-2"><p>News</p></button>
        </div>
      </div>
    </>
    );
  }
  
  export default Footer;