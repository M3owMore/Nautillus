import {AiOutlineShoppingCart, AiOutlineSearch, AiFillPhone,} from "react-icons/ai"
import { useState, useEffect } from "react";



const Header = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScroll(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="w-full p-2 bg-green-600 text-zinc-300 justify-between items-center flex">
        <div className="flex gap-2">
          <AiFillPhone className="text-2xl"/>
          <p className="font-bold">+995 555 55 55</p>
        </div>
        <div className="flex gap-2">
          <p className="font-bold">Open: </p>
          <p className="font-bold">09:00 - 20:30</p>
        </div>
      </div>

      <nav className={'w-full h-16 backdrop-blur-md z-10 bg-white bg-opacity-70 p-3 px-3 md:px-8 flex flex-row items-center justify-between duration-500 ' + (scroll > 100 ? "fixed top-0" : null)}>
        <div className="flex items-center justify-center h-full">
          <img src="./logo.png" className="h-full"/>
          <form className="max-w-md w-screen px-4 hidden md:block">
                <div className="relative">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-800 left-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full py-1.5 pl-12 pr-4 text-gray-600 border rounded-md outline-none placeholder:text-gray-600 bg-gray-50 focus:bg-white focus:text-gray-800"
                    />
                </div>
          </form>
        </div>
        
        <div className="flex items-center justify-center gap-2">
          <AiOutlineSearch className="block sm:hidden text-gray-800 text-3xl ml-4"/>
          
          <AiOutlineShoppingCart className="text-gray-800 text-3xl"/>
          <p className="text-gray-800 text-xl  font-bold">0 $</p>
        </div>
      </nav>
 
      
    </>
  )
}

export default Header