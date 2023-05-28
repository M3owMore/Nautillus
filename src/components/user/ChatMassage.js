const ChatMassage = (props) => {


    return ( 
        <div className={'w-full flex flex-row items-end text-main ' + (props.massages.name === props.app.user.name ? "justify-end" : "justify-start")}>
            {!(props.massages.name === props.app.user.name) ? <img src={props.img} className="w-8 rounded-full mr-4" alt="user"/> : <></>}
            <div className="mt-4">
                <p className=" text-xs text-center">{props.massages.name}</p>
                {props.massages.massages.map((msg, i) => 
                    <div key={i} className="rounded-lg bg-zinc-900 p-0.5 mt-2">
                        <p className="mx-4 my-1">{msg}</p>
                    </div>
                )}
            </div>
            {(props.massages.name === props.app.user.name) ? <img src={props.app.user.img} className="w-8 rounded-full ml-4" alt="user"/> : <></>}
        </div>
    );
}
 
export default ChatMassage;