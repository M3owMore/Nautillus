const CMD = (props:any) => {
    return (
        <div className="p-2 my-1 bg-gray-900 text-zinc-200 font-thin rounded-xl">
            {"ㅤ>ㅤ"}{props.children}
        </div>
    );
}

  export default CMD;