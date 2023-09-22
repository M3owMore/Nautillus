import parse from 'html-react-parser';
import {PiListFill} from "react-icons/pi"
import {BsArrowRight, BsArrowLeft} from "react-icons/bs"
import {MdOutlineClose} from "react-icons/md"
import Test from './courseText/Test';

const Info = (props:any) => {
    return (
        <div className={'w-full flex h-full overflow-y-scroll overflow-visible ' + (props.bool ? null : " hidden ")}>
            <div className='flex flex-col  items-center  w-full p-4'>
                <div className='flex items-center justify-between w-full my-4'>
                    <button onClick={props.handlePreviousPage} className='text-black  p-1.5 text-xl rounded-md bg-secondary hover:bg-opacity-50 duration-200'><BsArrowLeft/></button>


                    <img src={`/courses/icons/${props.name}.webp`} className='h-10  tablet:hover:scale-125 duration-300'/>

                    <button onClick={() => props.setIsNav(!props.isNav)} className='block tablet:hidden'>
                        {!props.isNav ? <PiListFill className="text-secondary text-4xl"/> : <MdOutlineClose className="text-secondary text-4xl"/>}
                    </button>
                </div>
                
                {/*parse(props.courseText)*/}
                <Test/>

                <button onClick={props.handleNextPage} className='text-black my-16  p-1.5 text-xl rounded-md bg-secondary hover:bg-opacity-50 duration-200'><BsArrowRight/></button>
                <button className='p-1.5 opacity-0'></button>
            </div>
            {(props.isCourse && props.width > 800) ? <div className="w-44 h-full"></div> : null}
        </div>
    );
  }
  
  export default Info;