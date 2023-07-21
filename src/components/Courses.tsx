import Header from "./Header";
import courses from "../courses.json"
import CourseBox from "./CourseBox";
import Footer from "./Footer"
import useWindowDimensions from '../js/useWindowDimensions';


const Courses = (props:any) => {
    const { width } = useWindowDimensions();

    return (
        <div className="flex flex-col w-screen h-screen items-stretch">
            <Header scroll={false} fixed={false} app={props.app}/>
            <div className={"grid" + (
                (width <= 550) ? " grid-cols-1" : ((width <= 800) ? " grid-cols-2" : " grid-cols-3"))
            }>
                {courses[props.app.lang].map((object, i) => <CourseBox obj={object} key={i}/>)}
            </div>
            <br/>
            <Footer/>
        </div>
    );
  }
  
  export default Courses;