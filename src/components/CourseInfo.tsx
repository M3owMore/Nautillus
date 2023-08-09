import Header from "./Header";
import Footer from "./Footer"
import { useState, useEffect } from "react";
import axios from "axios";

const CourseInfo = (props:any) => {
    const [course, setCourse]:any = useState(null)
    let courseName:any = "";

    useEffect(() => {
        async function fetchData() {
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            courseName = urlParams.get("course");

            const res = await axios.get(props.app.backendURL + "api/courses/view/" + courseName);

            setCourse(res.data)
        };
        
        fetchData();
    }, []);
  return (
    <div className="flex flex-col w-screen h-screen items-stretch">
        <Header scroll={false} fixed={false} app={props.app}/>
        <br/>
        <div className="flex flex-col items-center justify-center h-screen gap-2">
            {course !== null 
            ?
              <>
                <h1 className="text-main text-5xl text-center">{course.title}</h1>
                <p className="text-zinc-400 text-xl text-center">Level: {course.level}</p>
                <p className="text-main text-2xl text-center m-1">{course.description}</p>
                <ul className="text-main list-disc ml-4">
                    {course.topics.split("$").map((object:any, i:any) => (<li key={i} className="text-main text-md text-left ml-4 m-2">{object}</li>))}
                </ul>
                <p className="text-zinc-400 text-sm text-center m-1"><span className="text-main font-bold text-3xl">10$</span>/month</p>
                <button className="bg-main text-black text-2xl font-bold py-1 px-6 rounded-md m-4 hover:bg-zinc-300 duration-200">Buy</button>
              </>
            : null
            }
            
        </div>
        <Footer/>
    </div>
  )
}

export default CourseInfo