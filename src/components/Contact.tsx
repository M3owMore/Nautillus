import Header from './Header'
import {AiOutlineMail} from "react-icons/ai"
import {BsFacebook, BsDiscord} from "react-icons/bs"


const Contact = (props:any) => {
  return (
    <div className='flex flex-col justify-center items-center h-screen w-full'>
        <Header scroll={false} fixed={false} app={props.app}/>
        <div className='h-full w-full flex flex-col items-center justify-center text-main'>
            <h1 className='text-6xl text-center'>Get in Touch</h1>
            <p className='text-2xl text-center mt-2 mb-6'>Is it feedback, question, partnership? We are all ears!</p>
            <div className='flex flex-col items-center justify-center w-full p-4 gap-4'>
                <div className='max-w-xl w-full h-20 rounded-lg flex items-center justify-center gap-4 bg-zinc-900'>
                    <AiOutlineMail className="text-3xl"/>
                    <p className='text-center text-xl'>contact@nautillus.com</p>
                </div>
                <div className='max-w-xl w-full h-20 rounded-lg flex items-center justify-center gap-4 bg-zinc-900'>
                    <BsFacebook className="text-3xl"/>
                    <p className='text-center text-xl'>Facebook</p>
                </div>
                <div className='max-w-xl w-full h-20 rounded-lg flex items-center justify-center gap-4 bg-zinc-900'>
                    <BsDiscord className="text-3xl"/>
                    <p className='text-center text-xl'>Discord</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact