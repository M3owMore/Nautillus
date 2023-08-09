import Body from "./Body";
import Footer from "../Footer";

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
        <Body app={props.app}/>
        <Footer/>
      </div>
    );
  }
  
  export default Main;