const IMG = (props:any) => {
    return (
        <div className="w-full flex items-center justify-center my-2">
           <img src={props.src} className="w-full rounded-lg" alt={props.src}/>
        </div>
    );
}

  export default IMG;