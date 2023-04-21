import { Link } from "react-router-dom";

const NavBut = (props) => {

    return (
        <Link to={props.to}>
            <div className='text-main bg-transparent  py-2 rounded-lg flex flex-row justify-start items-center hover:bg-black duration-300'>
                {props.icon}
                <p className='text-lg ml-3'>{props.text}</p>
            </div>
        </Link>
    );
  }

  export default NavBut;