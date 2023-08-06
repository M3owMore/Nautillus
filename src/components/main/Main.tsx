import Header from "../Header";
import Body from "./Body";
import Footer from "../Footer";
import { useState, useEffect } from "react";

const  Main = (props:any) => {
  /*const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    window.onload = () => setLoading(false)
  }, []);
  */
    return (
      <div>
        {/*loading ? <Loading/> : ""*/}
        {/*<Snowfall style={{ position: "fixed", top: "0px", left:"0px", zIndex:"1000"}} snowflakeCount={50}/>*/}
        <Header app={props.app} scroll = {true} fixed={true}/>
        <Body app={props.app}/>
        <Footer/>
      </div>
    );
  }
  
  export default Main;