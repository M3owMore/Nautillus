import Info from "./Info";
import Test from "./courseText/Test";
import CourseNav from "./CourseNav";
import Editor from "./Editor";

import ReactSwitch from "react-switch";
import {useParams} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import { PuffLoader  } from "react-spinners";
import useWindowDimensions from "../../js/useWindowDimensions";

const Course = (props:any) => {
    const {width} = useWindowDimensions()



    const [checked, setChecked] = useState(false);
    const handleChange = (nextChecked:any) => {
      setChecked(nextChecked);
    };


    let { name } = useParams();
    const [spinner, setSpinner] = useState(false)
    const [courseText, setCourseText] = useState("")
    const [isNav, setIsNav] = useState(false)
    const [isCourse, setIsCourse] = useState(true)

    useEffect(() => {
        if(props.app.user.canUseApp === -1){
            window.location.href = "/signin"
        }
    }, [props.app.user])

    useEffect(() => {
        async function fetchData() {
            setSpinner(true)

            await axios.get(props.app.backendURL + "api/user/courses/" + name, {headers: {Authorization: 'Bearer ' + props.app.cookies.get('access')}})
                .then((res) => {
                    if(res.data.description){
                        setCourseText(res.data.main_text)
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
                <div className="absolute top-20 left-0 right-0 bottom-0 flex justify-center items-center">
                    <PuffLoader color="rgb(180, 210, 115)"size={128}/> 
                </div>
            : 

            (courseText === "") 
            ? 

            <div className="absolute top-20 left-0 right-0 bottom-0 flex justify-center items-center">
                <p className="text-red-500 font-alkSanet text-4xl text-center">This course doesn't exist or you can't access it.</p>
            </div>
            
            :
                <div className="absolute overflow-visible  -z-10 top-20 left-0 right-0 bottom-0 flex flex-row items-center justify-center">
                    {width < 800 ? 
                    <div className="flex absolute z-10 bottom-5 left-5">
                        <ReactSwitch height={20} width={40} uncheckedIcon={false} checkedIcon={false}  onChange={() => {setIsCourse(!isCourse)}} checked={!isCourse}/>
                    </div>
                    : null}
                    <CourseNav app={props.app} isNav={isNav} width={width}/>
                    {width > 800 || isCourse ? <Info courseText={courseText} app={props.app} isNav={isNav} setIsNav={setIsNav}/> : null}
                    {width > 800 ? <Editor app={props.app}/> : isCourse ? null : <Editor app={props.app}/>}
                </div>
            }          
        </>                   
    );
  }
  
  export default Course;