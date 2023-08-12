import {AiFillCamera, AiOutlineLeft, AiOutlineRight} from "react-icons/ai"
import {BsHeadphones} from "react-icons/bs"
import {PiTelevisionSimpleBold, PiComputerTowerBold} from "react-icons/pi"
import {GiSmartphone, GiComputerFan} from "react-icons/gi"
import {FaGamepad} from "react-icons/fa"
import {MdComputer} from "react-icons/md"

import {useState} from "react"

const Banner = () => {
    const images = [
        {
            img: "./banner1.png",
            link: ""
        },
        {
            img: "./banner2.webp",
            link: ""
        },
        {
            img: "./banner3.webp",
            link: ""
        }
    ]
    
    const [i, setI] = useState(0)

    const nextImg = () => {
        if(i >= images.length - 1){
            setI(0)
            return
        }
        setI(i + 1)
    }
    const previousImg = () => {
        if(i <= 0){
            setI(images.length - 1)
            return
        }
        setI(i - 1)
    }

    return (
        <div className="w-full md:p-2 md:py-8 flex  justify-center bg-white gap-4">
            <div className=" w-72 flex-col items-center justify-around p-2 hidden md:flex border-[1px] border-zinc-100 shadow-2xl rounded-md">
            <div className="flex gap-1 w-full h-full  items-center justify-start border-b-[1px] border-zinc-100 text-zinc-600 p-2">
                <GiSmartphone className="text-md"/>
                <p className="text-sm">Smart Phones</p>
            </div>
            <div className="flex gap-1 w-full h-full  items-center justify-start border-b-[1px] border-zinc-100 text-zinc-600 p-2">
                <BsHeadphones className="text-md"/>
                <p className="text-sm">Tablets</p>
            </div>
            <div className="flex gap-1 w-full h-full  items-center justify-start border-b-[1px] border-zinc-100 text-zinc-600 p-2">
                <MdComputer className="text-md"/>
                <p className="text-sm">Leptops</p>
            </div>
            <div className="flex gap-1 w-full h-full  items-center justify-start border-b-[1px] border-zinc-100 text-zinc-600 p-2">
                <PiTelevisionSimpleBold className="text-md"/>
                <p className="text-sm">TV</p>
            </div>
            <div className="flex gap-1 w-full h-full  items-center justify-start border-b-[1px] border-zinc-100 text-zinc-600 p-2">
                <AiFillCamera className="text-md"/>
                <p className="text-sm">Cameras</p>
            </div>
            <div className="flex gap-1 w-full h-full  items-center justify-start border-b-[1px] border-zinc-100 text-zinc-600 p-2">
                <BsHeadphones className="text-md"/>
                <p className="text-sm">accessories</p>
            </div>
            <div className="flex gap-1 w-full h-full  items-center justify-start border-b-[1px] border-zinc-100 text-zinc-600 p-2">
                <PiComputerTowerBold className="text-md"/>
                <p className="text-sm">PC</p>
            </div>
            <div className="flex gap-1 w-full h-full  items-center justify-start border-b-[1px] border-zinc-100 text-zinc-600 p-2">
                <GiComputerFan className="text-md"/>
                <p className="text-sm">PC Parts</p>
            </div>
            <div className="flex gap-1 w-full h-full  items-center justify-start  text-zinc-600 p-2">
                <FaGamepad className="text-md"/>
                <p className="text-sm">Gaming</p>
            </div>

            </div>
            <div className="relative w-full max-w-4xl h-[400px] ">
            <img src={images[i].img} className="md:rounded-3xl w-full h-full object-cover" alt="banner"/>
            <div className="absolute w-full flex justify-between px-4 top-1/2 -translate-y-1/2">
                <button onClick={previousImg} className="p-1 bg-white bg-opacity-80 rounded-full">
                    <AiOutlineLeft className="text-2xl text-black"/>
                </button>
                <button onClick={nextImg} className="p-1 bg-white bg-opacity-80 rounded-full">
                    <AiOutlineRight className="text-2xl text-black"/>
                </button>
            </div>
            </div>
            
        </div>
    )
}

export default Banner