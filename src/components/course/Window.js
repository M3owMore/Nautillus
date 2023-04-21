const Window = (props) => {
    return (
        <div className="p-2 bg-neutral-900 rounded-lg">
            {props.children}
        </div>
    );
}

  export default Window;