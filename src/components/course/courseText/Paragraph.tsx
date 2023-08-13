const Paragraph = (props:any) => {
    return (
        <div className="text-main w-full flex font-light tracking-wide px-2">
            {"ㅤ"}{props.children}
        </div>
    );
}

  export default Paragraph;