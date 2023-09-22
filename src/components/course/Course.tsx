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
    const [page, setPage] = useState(1);

    const handleChange = (nextChecked:any) => {
      setChecked(nextChecked);
    };


    let { name } = useParams();
    const [spinner, setSpinner] = useState(false)
    const [course, setCourse]:any = useState(null)
    const [isNav, setIsNav] = useState(false)
    const [isCourse, setIsCourse] = useState(true)

    const handlePreviousPage = () => {
        if(page > 1){
            setPage(page - 1)
        }
    }

    const handleNextPage = () => {
        if(page < course.count){
            setPage(page + 1)
        }
    }
    useEffect(() => {
        if(props.app.user.canUseApp === -1){
            window.location.href = "/signin"
        }
    }, [props.app.user])

    useEffect(() => {
        async function fetchData() {
            setSpinner(true)

            await axios.get(props.app.backendURL + "api/user/courses/" + name + `/?page=${page}`, {headers: {Authorization: 'Bearer ' + props.app.cookies.get('access')}})
                .then((res) => {
                    if(res.data.results){
                        if(res.data.results.length > 0){
                            setCourse(res.data)
                        }
                    }
                })
                .catch(() => {

                });
            setSpinner(false)
        };
        
        fetchData();
    }, [page]);



    return (
        <>

            {(spinner) 
            ? 
                <div className="absolute top-20 left-0 right-0 bottom-0 flex justify-center items-center">
                    <PuffLoader color="rgb(180, 210, 115)"size={128}/> 
                </div>
            : 

                (course === null) 
                ? 

                    <div className="absolute top-20 left-0 right-0 bottom-0 flex justify-center items-center">
                        <p className="text-red-500 font-alkSanet text-4xl text-center">This course doesn't exist or you can't access it.</p>
                    </div>
                
                :
                    <div className="absolute -z-10 top-20 left-0 right-0 bottom-0 flex flex-row items-center justify-center">
                        
                        <div className="flex absolute z-10 bottom-5 left-5 tablet:right-5 tablet:left-auto">
                            <ReactSwitch height={20} width={40} uncheckedIcon={false} checkedIcon={false}  onChange={() => {setIsCourse(!isCourse)}} checked={!isCourse}/>
                        </div>

                        <CourseNav page={page} name={name} setPage={setPage} app={props.app} isNav={isNav} width={width}/>
                        <Info bool={width > 800 || isCourse} isCourse={isCourse} width={width}  name={name} handlePreviousPage={handlePreviousPage} handleNextPage={handleNextPage} courseText={course.results[0].main_text} app={props.app} isNav={isNav} setIsNav={setIsNav}/>
                        <Editor bool={!isCourse} name={name} isCourse={isCourse} width={width} code={course.results[0].code} app={props.app}/>
                        
                    </div>
                }          
        </>                   
    );
  }
  
  export default Course;