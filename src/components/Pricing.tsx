import prises from "../prices.json"
import Footer from "./Footer";

const Price = (props:any) => {


    return (
        <div className="bg-bg-2 p-2 m-4 w-72 h-4/5 rounded-xl">
            <p className="text-main text-3xl m-3 font-bpgESM">{props.obj.name}</p>
            {props.obj.title ? <p className="text-main text-xl ml-6">{props.obj.title}</p> : ""}
            <p className=" text-3xl m-3 text-secondary">{props.obj.price}</p>
            {props.obj.title ? <p className="text-main text-md m-3">{props.app.langJson.words[props.app.lang].PTD}{"  "} {props.obj.PTD}</p> : ""}
            <ul className="text-main list-disc ml-4">
                {props.obj.features.map((object:any, i:any) => (<li key={i} className="text-main text-md text-left ml-4 m-2">{object}</li>))}
            </ul>
        </div>
    );
  }
  
const Pricing = (props:any) => {

    return (
        <>
            <div className="">
                <p className="text-secondary text-4xl text-center mt-16 font-alkSanet">{props.app.langJson.words[props.app.lang].userLevels}</p>
                <div className="flex justify-center items-center flex-col tablet:flex-row">
                    {prises[props.app.lang].userLevels.map((object, i) => <Price key={i} app={props.app} obj={object}/>)}
                </div>

                <p className="text-secondary text-4xl text-center mt-16 font-alkSanet">{props.app.langJson.words[props.app.lang].labs}</p>
                <div className=" flex justify-center items-center flex-col tablet:flex-row">
                    {prises[props.app.lang].labs.map((object, i) => <Price key={i} app={props.app} obj={object}/>)}
                </div>

                {/*<p className="text-main text-4xl text-center mt-16">{props.app.langJson.words[props.app.lang].mentors}</p>
                <div className={" flex justify-center items-center" + 
                    ((width <= 800) ? " flex-col" : "flex-row")}>
                    {prises[props.app.lang].mentors.map((object, i) => <Price key={i} app={props.app} obj={object}/>)}
                </div>*/}
            </div>
            <Footer/>
        </>
    );
  }
  
  export default Pricing;