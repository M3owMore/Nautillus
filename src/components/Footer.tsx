import {BsFacebook, BsYoutube, BsInstagram, BsTiktok} from "react-icons/bs"
import {AiFillPhone, AiOutlineMail} from "react-icons/ai"
import {MdLocationOn} from "react-icons/md"

const Footer = () => {
  return (
    <footer className='w-full flex flex-col items-center py-8 mt-8'>
        <div className="max-w-6xl w-full grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="w-full">
                <h2 className="text-zinc-600 p-2 border-b-2 border-green-600 mb-2">Navigation</h2>
                <p className="text-zinc-500 p-1.5 text-xs flex gap-2 items-center">About us</p>
                <p className="text-zinc-500 p-1.5 text-xs flex gap-2 items-center">Terms and Conditions</p>
            </div>
            <div className="w-full">
                <h2 className="text-zinc-600 p-2 border-b-2 border-green-600">Payments</h2>
                <p className="text-zinc-500 p-1.5 text-xs flex gap-2 items-center">Payment methods</p>
                <p className="text-zinc-500 p-1.5 text-xs flex gap-2 items-center">Guarantee</p>
                <p className="text-zinc-500 p-1.5 text-xs flex gap-2 items-center">Installment</p>
            </div>
            <div className="w-full">
                <h2 className="text-zinc-600 p-2 border-b-2 border-green-600">Follow</h2>
                <p className="text-zinc-500 p-1.5 text-xs flex gap-2 items-center"><BsFacebook className="text-2xl rounded-lg p-1 text-white bg-green-600"/> Facebook</p>
                <p className="text-zinc-500 p-1.5 text-xs flex gap-2 items-center"><BsYoutube className="text-2xl rounded-lg p-1 text-white bg-green-600"/> Youtube</p>
                <p className="text-zinc-500 p-1.5 text-xs flex gap-2 items-center"><BsInstagram className="text-2xl rounded-lg p-1 text-white bg-green-600"/> Intagram</p>
                <p className="text-zinc-500 p-1.5 text-xs flex gap-2 items-center"><BsTiktok className="text-2xl rounded-lg p-1 text-white bg-green-600"/> Tik-Tok</p>
            </div>
            <div className="w-full">
                <h2 className="text-zinc-600 p-2 border-b-2 border-green-600">Contact</h2>
                <p className="text-zinc-500 p-1.5 text-xs flex gap-2 items-center"><AiOutlineMail className="text-2xl rounded-lg p-1 text-white bg-green-600"/> Info@gtech.ge</p>
                <p className="text-zinc-500 p-1.5 text-xs flex gap-2 items-center"><AiFillPhone className="text-2xl rounded-lg p-1 text-white bg-green-600"/> +995 555 55 55 55</p>
                <p className="text-zinc-500 p-1.5 text-xs flex gap-2 items-center"><MdLocationOn className="text-2xl rounded-lg p-1 text-white bg-green-600"/> branches</p>
            </div>
        </div>
        <div className="max-w-6xl w-full flex justify-between items-center h-12">
            <h2 className="text-zinc-600">Copyright © 2023 G-Tech. All rights reserved.</h2>
            <img src="./logo.png" className="h-full"/>
        </div>
    </footer>
  )
}

export default Footer