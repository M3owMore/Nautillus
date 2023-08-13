const CMD = (props:any) => {
    return (
        <div className="p-2 bg-bg-3 text-main rounded-2xl font-bpgESM my-1">
            {" > "}{props.children}
        </div>
    );
}

  export default CMD;