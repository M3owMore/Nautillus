import Header from "./Header";
import { useState, useEffect } from "react";
import axios from 'axios';

const  Activation = (props:any) => {
    const [activated, setActivated] = useState(false)

    useEffect(() => {
        async function fetchData() {
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            let _uid = urlParams.get("uid");
            let _token = urlParams.get("token");

            const res = await axios.post(props.app.backendURL + "/url", {uid: _uid, token: _token});

            if(res.status == 204){
                setActivated(true)
            }
            else{
                setActivated(false)
            }
        };
        
        fetchData();
    }, []);
    return (
        <>
            <Header scroll = {false} fixed={true} app={props.app}/>
            <div className="relative flex items-center justify-center min-h-screen overflow-hidden text-main">
                {activated 
                ? 
                    <p className="text-4xl text-center my-2">Your account has been activated successfully</p>
                :
                    <p className="text-4xl text-center my-2">Your account can't be activated</p>
                }
            </div>
        </>
    );
  }
  
  export default Activation;