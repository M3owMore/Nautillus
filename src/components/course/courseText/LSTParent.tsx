const LSTParent = (props:any) => {
    return (
        <ol className="list-decimal ml-6">
            {props.children}
        </ol>
    );
}

  export default LSTParent;