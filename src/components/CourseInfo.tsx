import Footer from "./Footer"
import { useState, useEffect } from "react";
import axios from "axios";
import {
  useParams
} from "react-router-dom";
import { Link } from "react-router-dom";

const CourseInfo = (props:any) => {
    const [course, setCourse]:any = useState(null)
    let { name } = useParams();

    const product = {
      clientId: "AWKbqXDKcVY3rG5A2tSFC9RH6ahhVAWHd69vBcQxSTcvFyT2f69dP46D_8TzYkKal5MlCHyUmLxQ8vmY",
      dataClientToken: "sandbox_9qwz52sn_pvbgkywfz82pv229",
      currency: "USD",
      intent: "capture",
    };



  useEffect(() => {
      async function fetchData() {
          const res = await axios.post(props.app.backendURL + "api/courses/view/" + name, {user_name: props.app.user.isUser ? props.app.user.name : null });

          setCourse(res.data)
      };
      
      fetchData();
  }, [props.app.user]);

 const onPay = () => {
  axios.post(props.app.backendURL + "api/user/paypal/create_payment/", {title: course.data.title}, {headers: {Authorization: 'Bearer ' + props.app.cookies.get('access')}})
    .then((res) => {
      window.open(res.data.link);
    })
}

  return (
    <div className="flex flex-col items-center justify-center p-4">
      {course !== null 
      ?
          <div className="relative flex flex-col p-6 rounded-2xl w-full max-w-xl" >
              <div className="absolute -z-10 top-0 bottom-0 left-0 right-0 bg-cover bg-center blur-sm opacity-20" style={{backgroundImage: `url(/courses/${course.data.title}.webp)`}}></div>
              
              <h1 className="text-secondary font-alkSanet font-bold text-5xl text-center">{course.data.title}</h1>
              <p className="text-main  text-lg text-left">What's in this Lesson?</p>
              <ul className="text-zinc-200 list-disc ml-4 m-1">
                  {course.data.topics.split("$").map((object:any, i:any) => (<li key={i} className="text-xs text-left ml-4 m-2">{object}</li>))}
              </ul>
              <br/>
              {course.data.big_description.split("\n").map((text:string, i:number) => <p key={i} className="text-main font-thin text-xs text-left m-1">{"ㅤ"}{text}</p>)}
              <p className="text-white text-lg text-center ">Level: <span className="text-secondary">{course.data.level}</span></p>
              
              <p className="text-zinc-400 text-sm text-center  mt-6"><span className="text-main font-bold text-3xl">{course.data.price}$</span></p>
              <div className="p-6 flex items-center w-full justify-center">
                  
                {props.app.user.isUser ? course.error ? <p className="text-red-400 text-lg font-thin">{course.error}</p> : <button onClick={onPay} className="bg-yellow-300 hover:bg-yellow-500 duration-200 rounded-lg py-2 px-4 font-semibold flex gap-2 items-center">Pay with <img src="/paypal.png" className="h-6"/></button> : <Link to="/signin"><button className="bg-main hover:bg-secondary duration-200 text-sm text-black py-1.5 px-3 rounded-md font-bold">Sign in to buy</button></Link>}
              </div>
          </div>
        : null
        }
        <Footer/>
    </div>
  )
}

export default CourseInfo