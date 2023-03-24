import icon from "../img/icon.png"
import {FaDiscord} from "react-icons/fa"
import {BsFacebook, BsTwitter, BsGithub} from "react-icons/bs"

const  Footer = () => {
    return (
    <>
    <div className="h-4"></div>
    <div className="h-4"></div>
      <div className="text-main flex items-center justify-around max-phone:flex-col max-lg:flex-row " >
        <div className="text-main flex items-center flex-col">
            <div className="flex items-center justify-start flex-col p-4">
                <div className="flex justify-center items-center">
                    <img className="w-12 m-2" src={icon} alt="icon"/>
                    <p className="text-2xl  m-2">Nautillus</p>
                </div>
                <p>© 2022 Nautillus</p>
            </div>
            <div className="flex justify-center items-center flex-row p-4">
                <BsFacebook className="text-3xl transition-all  hover:text-main m-2"/>
                <BsTwitter className="text-3xl transition-all  hover:text-main m-2"/>
                <BsGithub className="text-3xl transition-all  hover:text-main m-2"/>
                <FaDiscord className="text-3xl transition-all  hover:text-main m-2"/>
            </div>
        </div>

        <div className="text-main flex items-center justify-center flex-col h-full">
            <p className=" text-2xl m-4">Company</p>
            <p>About Us</p>
            <p>Constact Us</p>
            <p>News</p>
        </div>
      </div>
    </>
    );
  }
  
  export default Footer;