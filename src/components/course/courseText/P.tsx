const P = (props:any) => {
    return (
        <div className="text-main w-full font-light tracking-wide px-2">
            {"ㅤ"}{props.children}
        </div>
    );
}

  export default P;