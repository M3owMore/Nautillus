const Price = (props) => {


    return (
        <div className="bg-neutral-900 p-2 m-4 w-72 h-4/5 rounded-xl">
            <p className="text-main text-3xl m-3">{props.obj.name}</p>
            {props.obj.title ? <p className="text-main text-xl ml-6">{props.obj.title}</p> : ""}
            <p className="text-main text-3xl m-3">{props.obj.price}</p>
            {props.obj.title ? <p className="text-main text-md m-3">{props.app.langJson.words[props.app.lang].PTD}{"  "} {props.obj.PTD}</p> : ""}
            <ul className="text-main list-disc ml-4">
                {props.obj.features.map((object, i) => (<li key={i} className="text-main text-md text-left ml-4 m-2">{object}</li>))}
            </ul>
        </div>
    );
  }
  
  export default Price;