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

            const res = await axios.post(props.app.backendURL + "api/user/auth/users/activation/", {uid: _uid, token: _token});

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
            <div className="absolute top-20 bottom-0 left-0 right-0 flex items-center justify-center overflow-hidden text-main">
                {activated 
                ? 
                    <p className="text-4xl text-center my-2 text-secondary font-alkSanet">Your account has been activated successfully</p>
                :
                    <p className="text-4xl text-center my-2 text-red-500 font-alkSanet">Your account can't be activated</p>
                }
            </div>
        </>
    );
  }
  
  export default Activation;