import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./Footer";

const CourseBox = (props:any) => {
    
    return (
        <div onClick={() => {window.location.href = `/courses/info/${props.obj.title}`}} style={{animationDelay: `${props.i*75}ms`,}} className="zoom-appear-courses relative rounded-2xl m-4 hover:scale-105 hover:bg-bg-3 duration-200 cursor-pointer">
            <div className="absolute -z-10 top-0 bottom-0 left-0 right-0 bg-cover bg-center blur-sm opacity-20" style={{backgroundImage: `url(/courses/${props.obj.title}.webp)`}}></div>
            <p className="text-secondary text-3xl text-center m-4 font-alkSanet font-bold">{props.obj.title}</p>
            <p className="text-main text-md text-center m-2">{props.app.langJson.words[props.app.lang].level}: <span className=" font-bpgESM font-bold">{props.app.lang == 0 ? props.obj.level : props.obj.level_geo}</span></p>
            <p className="text-main text-sm text-center m-2">{props.app.lang == 0 ? props.obj.description : props.obj.description_geo}</p>
        </div>
    );
  }

const Courses = (props:any) => {
    const [courses, setCourses]:any = useState([])
    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(props.app.backendURL + "api/courses/")
            setCourses(res.data)
        }
        getData()
    }, [])

    return (
        <>
            <div className="flex flex-col w-screen min-h-screen items-stretch p-4">
                <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3">
                    {courses.map((object:any, i:any) => <CourseBox app={props.app} obj={object} key={i} i={i}/>)}
                </div>
                <br/>
            </div>
            <Footer/>
        </>
    );
  }
  
  export default Courses;