import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./Footer";
const CourseBox = (props:any) => {
    return (
        <div onClick={() => {window.location.href = `/courses/info?course=${props.obj.title}`}} className="bg-neutral-900 rounded-2xl m-4">
            <p className="text-main text-2xl text-center m-4">{props.obj.title}</p>
            <p className="text-main text-xl text-center m-2">Level: {props.obj.level}</p>
            <p className="text-main text-md text-center m-2">{props.obj.description}</p>
            <ul className="text-main list-disc ml-4">
                {props.obj.topics.split("$").map((object:any, i:any) => (<li key={i} className="text-main text-md text-left ml-4 m-2">{object}</li>))}
            </ul>
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
            <div className="flex flex-col w-screen h-screen items-stretch">
                <div className="grid grid-cols-1 phone:grid-cols-2 tablet:grid-cols-3">
                    {courses.map((object:any, i:any) => <CourseBox obj={object} key={i}/>)}
                </div>
                <br/>
            </div>
            <Footer/>
        </>
    );
  }
  
  export default Courses;