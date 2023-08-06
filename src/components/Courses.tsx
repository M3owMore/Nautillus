import Header from "./Header";
import Footer from "./Footer"
import useWindowDimensions from '../js/useWindowDimensions';
import { useState, useEffect } from "react";
import axios from "axios";

const CourseBox = (props:any) => {
    return (
        <div className="bg-neutral-900 rounded-2xl m-4">
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
    const { width } = useWindowDimensions();

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(props.app.backendURL + "api/courses/")
            setCourses(res.data)
        }
        getData()
    }, [])

    return (
        <div className="flex flex-col w-screen h-screen items-stretch">
            <Header scroll={false} fixed={false} app={props.app}/>
            <div className={"grid" + (
                (width <= 550) ? " grid-cols-1" : ((width <= 800) ? " grid-cols-2" : " grid-cols-3"))
            }>
                {courses.map((object:any, i:any) => <CourseBox obj={object} key={i}/>)}
                
            </div>
            <br/>
            <Footer/>
        </div>
    );
  }
  
  export default Courses;