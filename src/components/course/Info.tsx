import parse from 'html-react-parser';
import {PiListFill} from "react-icons/pi"
import {BsArrowRight, BsArrowLeft} from "react-icons/bs"
import {MdOutlineClose} from "react-icons/md"
const Info = (props:any) => {
    return (
        <div className='flex flex-col  h-full w-full overflow-y-scroll px-6 overflow-visible'>
            <div className='flex flex-col  items-center  w-full'>
                <div className='flex items-center justify-between tablet:justify-start w-full'>
                    <button className='text-black  p-1.5 text-xl rounded-md bg-secondary hover:bg-opacity-50 duration-200'><BsArrowLeft/></button>

                    <button onClick={() => props.setIsNav(!props.isNav)} className='block tablet:hidden'>
                        {!props.isNav ? <PiListFill className="text-secondary text-4xl"/> : <MdOutlineClose className="text-secondary text-4xl"/>}
                    </button>
                </div>
                
                {parse(props.courseText)}
                <button className='text-black my-16 p-1.5 text-xl rounded-md bg-secondary hover:bg-opacity-50 duration-200'><BsArrowRight/></button>
            </div>
        </div>
    );
  }
  
  export default Info;