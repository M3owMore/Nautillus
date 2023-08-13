const Window = (props:any) => {
    return (
        <div className="p-2 text-main w-full max-w-2xl rounded-lg">
            {props.children}
        </div>
    );
}

  export default Window;