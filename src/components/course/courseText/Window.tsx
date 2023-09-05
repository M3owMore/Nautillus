const Window = (props:any) => {
    return (
        <div className=" text-main w-full max-w-2xl rounded-lg  text-md">
            {props.children}
        </div>
    );
}

  export default Window;