import useWindowDimensions from '../../js/useWindowDimensions';
import { FaUser, FaUserFriends } from 'react-icons/fa';
import { HiUserGroup, HiAcademicCap } from 'react-icons/hi';
import { RiComputerFill } from 'react-icons/ri';
import { BiSolidMessageSquare } from 'react-icons/bi';
import {AiOutlineInfo} from "react-icons/ai"
import { Link } from "react-router-dom";

const NavBut = (props:any) => {

    return (
        <Link to={props.to}>
            <div className='text-main bg-transparent  py-2 rounded-lg flex flex-row justify-start items-center hover:bg-white hover:text-secondary hover:bg-opacity-20 duration-300'>
                {props.icon}
                <p className='text-lg ml-3'>{props.text}</p>
            </div>
        </Link>
    );
  }


const Nav = (props:any) => {
    const width = useWindowDimensions().width;

    return (
        <div className={'flex flex-col w-full'}>
            <div className='py-1'>
                {props.app.user.isUser ?
                    <>
                        <NavBut text={props.app.langJson.words[props.app.lang].home} to="/" icon={<RiComputerFill className='text-xl ml-2'/>} show={width > 700}/>
                        <NavBut text={props.app.langJson.words[props.app.lang].user} to={'/users?user='+props.app.user.name} icon={<FaUser className='text-xl ml-2'/>} show={width > 700}/>
                        <NavBut text={props.app.langJson.words[props.app.lang].messages} to="/user/messages" icon={<BiSolidMessageSquare className='text-xl ml-2'/>} show={width > 700}/>
                        {/*<NavBut text="Groups" to="/user/groups" icon={<HiUserGroup className='text-xl ml-2'/>} show={width > 700}/>*/}
                        {/* <NavBut text={props.app.langJson.words[props.app.lang].my + " " + props.app.langJson.words[props.app.lang].courses} to="/user/courses" icon={<HiAcademicCap className='text-xl ml-2'/>} show={width > 700}/> */}
                        <div className='mx-4 my-2 h-0.5 w-4/6'></div>
                    </>
                    :
                    <></>
                }
                

                <NavBut text={props.app.langJson.words[props.app.lang].courses} to="/courses" icon={<HiAcademicCap className='text-xl ml-2'/>} show={width > 700}/>
                {/*<NavBut text="Labs" to="/" icon={<BsServer className='text-xl'/>} show={width > 700}/>*/}


                {/*<NavBut text="Pricing" to="/pricing" icon={<FaUserFriends className='text-xl ml-2'/>} show={width > 700}/>*/}
                <NavBut text={props.app.langJson.words[props.app.lang].about} to="/about" icon={<AiOutlineInfo className='text-xl ml-2'/>} show={width > 700}/>
                <NavBut text={props.app.langJson.words[props.app.lang].contact} to="/contact" icon={<HiUserGroup className='text-xl ml-2'/>} show={width > 700}/>
            </div>
        </div>
    );
  }

  export default Nav;
