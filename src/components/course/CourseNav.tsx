import { useState, useEffect } from "react";
import axios from "axios";


export const Button = (props:any) => {
  return (
    <button onClick={() => props.setPage(props.i + 1)} className={"text-sm text-left p-1.5 font-light bg-opacity-20 hover:bg-white hover:bg-opacity-10 duration-200 w-full rounded-sm text-main" + (props.opened ? " bg-white" : "" )}>
      {props.children}
    </button>
  )
}



const CourseNav = (props:any) => {

  const [lessons, setLessons]:any = useState(null)

  useEffect(() => {
    async function fetchData() {

        await axios.get(props.app.backendURL + "api/user/courses/lessons/" + props.name, {headers: {Authorization: 'Bearer ' + props.app.cookies.get('access')}})
            .then((res) => {
                if(res.data){
                  setLessons(res.data)
                }
            })
            .catch(() => {

            });
    };
    
    fetchData();
}, []);
  return (
    <div className={"left-0 top-20 bottom-0 w-56 tablet:w-96 bg-bg-2 z-10 bg-opacity-75 backdrop-blur-sm duration-300" + (props.isNav ? " translate-x-0" : props.width <= 800 ? " -translate-x-full" : null ) + (props.width <= 800 ? " fixed" : " h-full")}>
      <div className="overflow-y-auto h-full w-full">
        <div className="gap-2 p-2">
          {lessons !== null ? lessons.map((lesson:any, i:number) => <Button opened={props.page === i + 1} setPage={props.setPage} i={i} key={i}>{lesson.title.replace(props.name + " ", "")}</Button>) : null}
          
        </div>
      </div>
    </div>
    
  )
}

export default CourseNav