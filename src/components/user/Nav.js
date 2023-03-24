import NavBut from "./NavBut";
import useWindowDimensions from '../../js/useWindowDimensions';
import { FaUser,FaUserFriends } from 'react-icons/fa';
import { HiUserGroup, HiAcademicCap } from 'react-icons/hi';
import { RiComputerFill } from 'react-icons/ri';
import { BsServer } from 'react-icons/bs';

const Nav = (props) => {
    const { height, width } = useWindowDimensions();

    return (
        <div className={'h-full flex flex-col ' + ((width > 700) ? " w-32" : " w-12")}>
            <div className='p-1'>
                <NavBut text="Home" icon={<RiComputerFill className='text-xl'/>} show={width > 700}/>
                <NavBut text="User" icon={<FaUser className='text-xl'/>} show={width > 700}/>
                <NavBut text="Friends" icon={<FaUserFriends className='text-xl'/>} show={width > 700}/>
                <NavBut text="Groups" icon={<HiUserGroup className='text-xl'/>} show={width > 700}/>
                <div className='mx-4 my-2 h-0.5 w-4/6'></div>
                <NavBut text="Courses" icon={<HiAcademicCap className='text-xl'/>} show={width > 700}/>
                <NavBut text="Labs" icon={<BsServer className='text-xl'/>} show={width > 700}/>
            </div>
        </div>
    );
  }

  export default Nav;
