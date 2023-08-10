import Info from "./Info";
import Console from "./Console";
import Switch from "react-switch";
import { useState, useEffect } from "react";
import useWindowDimensions from '../../js/useWindowDimensions';
import axios from 'axios';


const Course = (props:any) => {




    const [checked, setChecked] = useState(false);
    const handleChange = (nextChecked:any) => {
      setChecked(nextChecked);
    };
    const { width } = useWindowDimensions();

    let courseName:any = "";
    const [courseText, setCourseText] =useState("")

    useEffect(() => {
        async function fetchData() {
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            courseName = urlParams.get("course");

            const res = await axios.get(props.app.backendURL + "api/user/courses/" + courseName, {headers: {Authorization: 'Bearer ' + props.app.cookies.get('access')}});

            setCourseText(res.data.main_text)
        };
        
        fetchData();
    }, []);

    

    return (
        <>
            {(courseText === "") 

            ? 

            <div className="w-screen h-screen flex justify-center items-center">
                <p className="text-main text-6xl text-center">This course doesn't exist</p>
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