import NavBut from "./NavBut";
import useWindowDimensions from '../../js/useWindowDimensions';
import { FaUser,FaUserFriends } from 'react-icons/fa';
import { HiUserGroup, HiAcademicCap } from 'react-icons/hi';
import { RiComputerFill } from 'react-icons/ri';

const Nav = (props) => {
    const width = useWindowDimensions().width;

    return (
        <div className={'flex flex-col w-full'}>
            <div className='py-1'>
                {props.app.user.isUser ?
                    <>
                        <NavBut text="Home" to="/user/home" icon={<RiComputerFill className='text-xl ml-2'/>} show={width > 700}/>
                        <NavBut text="User" to={'/users?user='+props.app.user.name} icon={<FaUser className='text-xl ml-2'/>} show={width > 700}/>
                        <NavBut text="Friends" to="/user/friends" icon={<FaUserFriends className='text-xl ml-2'/>} show={width > 700}/>
                        <NavBut text="Groups" to="/user/groups" icon={<HiUserGroup className='text-xl ml-2'/>} show={width > 700}/>
                    </>
                    :
                    <></>
                }
                <div className='mx-4 my-2 h-0.5 w-4/6'></div>

                <NavBut text="Courses" to="/courses" icon={<HiAcademicCap className='text-xl ml-2'/>} show={width > 700}/>
                {/*<NavBut text="Labs" to="/" icon={<BsServer className='text-xl'/>} show={width > 700}/>*/}

                <div className='mx-4 my-2 h-0.5 w-4/6'></div>

                <NavBut text="Pricing" to="/pricing" icon={<FaUserFriends className='text-xl ml-2'/>} show={width > 700}/>
                <NavBut text="Contact" to="/contact" icon={<HiUserGroup className='text-xl ml-2'/>} show={width > 700}/>
            </div>
        </div>
    );
  }

  export default Nav;
