const NavBut = (props) => {

    return (
        <div className='text-main px-1 py-2 rounded-lg flex flex-row justify-start items-center hover:bg-neutral-900'>
            {props.icon}
            {props.show ? <p className='text-lg mx-3'>{props.text}</p> : <></>}
        </div>
    );
  }

  export default NavBut;