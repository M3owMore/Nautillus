
const Friend = (props) => {
    return ( 
        <div className='w-full h-12 flex flex-row bg-zinc-900 my-1 p-1 text-main hover:bg-zinc-800 rounded-lg'
            onClick={() => {
                props.setName(props._name)
                if(props.setIsChat != null){
                    props.setIsChat(true)
                }
            }}
        >
            <img src={props._img} className="w-10 h-10 rounded-full" alt="friend"/>
            <div className='w-full h-full flex flex-col justify-center p-1 items-start pl-3'>
                <p className="">{props._name}</p>
                <p className="text-xs">{props._lastMassage.substring(0,10) + " ..."}</p>
            </div> 
        </div>
    );
}
 
export default Friend;