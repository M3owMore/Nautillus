import Header from "./Header"
import prises from "../prices.json"
import Price from "./Prices";
import Footer from "./Footer";
import useWindowDimensions from '../js/useWindowDimensions';

const Pricing = (props:any) => {
    const { width } = useWindowDimensions();

    return (
        <div className="">
            <Header scroll={false} fixed={false} app={props.app}/>
            <p className="text-main text-4xl text-center mt-16">{props.app.langJson.words[props.app.lang].userLevels}</p>
            <div className={"flex justify-center items-center" + 
                ((width <= 800) ? " flex-col" : "flex-row")}>
                {prises[props.app.lang].userLevels.map((object, i) => <Price key={i} app={props.app} obj={object}/>)}
            </div>

            <p className="text-main text-4xl text-center mt-16">{props.app.langJson.words[props.app.lang].labs}</p>
            <div className={" flex justify-center items-center" + 
                ((width <= 800) ? " flex-col" : "flex-row")}>
                {prises[props.app.lang].labs.map((object, i) => <Price key={i} app={props.app} obj={object}/>)}
            </div>

            {/*<p className="text-main text-4xl text-center mt-16">{props.app.langJson.words[props.app.lang].mentors}</p>
            <div className={" flex justify-center items-center" + 
                ((width <= 800) ? " flex-col" : "flex-row")}>
                {prises[props.app.lang].mentors.map((object, i) => <Price key={i} app={props.app} obj={object}/>)}
            </div>*/}
            
            <Footer/>
        </div>
    );
  }
  
  export default Pricing;