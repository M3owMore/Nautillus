import Info from "./Info";
import Console from "./Console";
import Switch from "react-switch";
import { useState, useEffect } from "react";
import useWindowDimensions from '../../js/useWindowDimensions';
import axios from 'axios';
import { PuffLoader  } from "react-spinners";


const Course = (props:any) => {




    const [checked, setChecked] = useState(false);
    const handleChange = (nextChecked:any) => {
      setChecked(nextChecked);
    };
    const { width } = useWindowDimensions();

    let courseName:any = "";
    const [spinner, setSpinner] = useState(false)
    const [courseText, setCourseText] = useState("")

    useEffect(() => {
        if(props.app.user.canUseApp === -1){
            window.location.href = "/signin"
        }
    }, [props.app.user])

    useEffect(() => {
        async function fetchData() {
            setSpinner(true)
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            courseName = urlParams.get("course");

            await axios.get(props.app.backendURL + "api/user/courses/" + courseName, {headers: {Authorization: 'Bearer ' + props.app.cookies.get('access')}})
                .then((res) => {
                    if(res.data.description){
                        setCourseText(res.data.description)
                    }
                })
                .catch(() => {

                });
            setSpinner(false)

            
        };
        
        fetchData();
    }, []);

    

    return (
        <>

            {(spinner) 
            ? 
                <div className="absolute top-20 left-0 right-0 bottom-0 flex justify-center items-center"><
                    PuffLoader color="rgb(180, 210, 115)"size={128}/> 
                </div>
            : 

            (courseText === "") 
            ? 

            <div className="absolute top-20 left-0 right-0 bottom-0 flex justify-center items-center">
                <p className="text-red-500 font-alkSanet text-4xl text-center">This course doesn't exist or you can't access it.</p>
            </div>
            
            :
                <div>
                    {(width <= 800) ?
                    <>
                        <div className="flex flex-col w-screen h-screen">
                            {checked ? <Console fixed={false}/> : <Info fixed={false} courseText={courseText}/>}
                        </div>    
                        <Switch className="fixed switch"
                            onChange={handleChange}
                            checked={checked}
                            uncheckedIcon={false}
                            checkedIcon={false}
                        />
                    </>
                    :
                    <>
                        <div className="flex flex-row w-1/2 h-screen">
                            <Info fixed={true} courseText={courseText}/>
                        </div>    
                        <Console fixed={true}/>
                    </>}
                </div>
            }          
        </>                   
    );
  }
  
  export default Course;