import Footer from "./Footer"
import { useState, useEffect } from "react";
import axios from "axios";
import {
  useParams
} from "react-router-dom";

const CourseInfo = (props:any) => {
    const [course, setCourse]:any = useState(null)
    let { name } = useParams();

    useEffect(() => {
        async function fetchData() {
            const res = await axios.get(props.app.backendURL + "api/courses/view/" + name);

            setCourse(res.data)
        };
        
        fetchData();
    }, []);
  return (
    <div className="flex flex-col items-center justify-center p-4">
      {course !== null 
      ?
          <div className="relative flex flex-col p-6 rounded-2xl w-full max-w-xl" >
              <div className="absolute -z-10 top-0 bottom-0 left-0 right-0 bg-cover bg-center blur-sm opacity-20" style={{backgroundImage: `url(/courses/${course.title}.webp)`}}></div>
              
              <h1 className="text-secondary font-alkSanet font-bold text-5xl text-center">{course.title}</h1>
              <p className="text-main text-md text-center m-1">{course.description}</p>
              <ul className="text-zinc-200 list-disc ml-4 m-2">
                  {course.topics.split("$").map((object:any, i:any) => (<li key={i} className="text-md text-left ml-4 m-2">{object}</li>))}
              </ul>
              <p className="text-white text-md text-center ">Level: <span className="text-secondary">{course.level}</span></p>
              <p className="text-zinc-400 text-sm text-center  mt-12"><span className="text-main font-bold text-3xl">10$</span>/month</p>
              <button className="bg-main text-black text-2xl font-bold py-1 px-6 rounded-md m-4 hover:bg-secondary duration-200">Buy</button>
          </div>
        : null
        }
        <Footer/>
    </div>
  )
}

export default CourseInfo