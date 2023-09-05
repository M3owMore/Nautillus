const Img = (props:any) => {
    return (
        <div className="w-full flex items-center justify-center">
           <img src={props.src} className="max-w-lg w-full rounded-lg"/>
        </div>
    );
}

  export default Img;