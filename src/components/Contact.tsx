import {AiOutlineMail} from "react-icons/ai"
import {BsFacebook, BsDiscord} from "react-icons/bs"
import Footer from "./Footer"
import { BoxAnim } from "./specials/Animations"

const Contact = (props:any) => {
  return (
    <>    
        <div className='flex flex-col justify-center items-center h-screen w-full p-4'>
            <div className='h-full w-full flex flex-col items-center justify-center text-main'>
                <BoxAnim offset={0}><h1 className='text-secondary text-5xl text-center font-alkSanet'>{props.app.langJson.words[props.app.lang].getInTouch}</h1></BoxAnim>
                <BoxAnim offset={100}><p className='text-xl text-center mt-2 mb-6 font-bpgESM'>{props.app.langJson.words[props.app.lang].contactText}</p></BoxAnim>
                <div className='flex flex-col items-center justify-center w-full p-4 gap-4'>
                    <BoxAnim offset={200} className="w-full max-w-xl ">
                        <div className='w-full h-20 rounded-lg flex items-center justify-center gap-4 bg-bg-2'>
                            <AiOutlineMail className="text-3xl"/>
                            <p className='text-center text-xl'>contact@nautillus.com</p>
                        </div>
                    </BoxAnim>
                    <BoxAnim offset={300} className="w-full max-w-xl ">
                        <div className='w-full h-20 rounded-lg flex items-center justify-center gap-4 bg-bg-2'>
                            <BsFacebook className="text-3xl"/>
                            <p className='text-center text-xl'>Facebook</p>
                        </div>
                     </BoxAnim>   
                     <BoxAnim offset={400} className="w-full max-w-xl ">
                        <div className='w-full h-20 rounded-lg flex items-center justify-center gap-4 bg-bg-2'>
                            <BsDiscord className="text-3xl"/>
                            <p className='text-center text-xl'>Discord</p>
                        </div>
                    </BoxAnim>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Contact