const LST = (props:any) => {
    return (
        <ol className="list-decimal m-1 p-2 px-6 bg-bg-3 bg-opacity-50 rounded-lg">
            {props.children}
        </ol>
    );
}

  export default LST;