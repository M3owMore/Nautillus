const P = (props:any) => {
    return (
        <div className="text-main w-full text-sm  font-light tracking-wide px-2 m-1">
            {"ㅤ"}{props.children}
        </div>
    );
}

  export default P;