import {AiOutlineMail} from "react-icons/ai"
import {BsFacebook, BsDiscord} from "react-icons/bs"
import Footer from "./Footer"

const Contact = () => {
  return (
    <>    
        <div className='flex flex-col justify-center items-center h-screen w-full'>
            <div className='h-full w-full flex flex-col items-center justify-center text-main'>
                <h1 className='text-6xl text-center font-alkSanet'>Get in Touch</h1>
                <p className='text-2xl text-center mt-2 mb-6 font-bpgESM'>Is it feedback, question, partnership? We are all ears!</p>
                <div className='flex flex-col items-center justify-center w-full p-4 gap-4'>
                    <div className='max-w-xl w-full h-20 rounded-lg flex items-center justify-center gap-4 bg-bg-2'>
                        <AiOutlineMail className="text-3xl"/>
                        <p className='text-center text-xl'>contact@nautillus.com</p>
                    </div>
                    <div className='max-w-xl w-full h-20 rounded-lg flex items-center justify-center gap-4 bg-bg-2'>
                        <BsFacebook className="text-3xl"/>
                        <p className='text-center text-xl'>Facebook</p>
                    </div>
                    <div className='max-w-xl w-full h-20 rounded-lg flex items-center justify-center gap-4 bg-bg-2'>
                        <BsDiscord className="text-3xl"/>
                        <p className='text-center text-xl'>Discord</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Contact