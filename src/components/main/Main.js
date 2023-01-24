import Header from "../Header";
import Body from "./Body";
import Footer from "../Footer";
import Loading from "../Loading";
import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import Snowfall from 'react-snowfall'

const  Main = (props) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    window.onload = () => setLoading(false)
  }, []);

    return (
      <div>
        {/*loading ? <Loading/> : ""*/}
        <Snowfall style={{ position: "fixed", top: "0px", left:"0px", zIndex:"1000"}} snowflakeCount={50}/>
        <Header app={props.app} scroll = {true} fixed={true}/>
        <Body app={props.app}/>
        <Footer app={props.app}/>
      </div>
    );
  }
  
  export default Main;