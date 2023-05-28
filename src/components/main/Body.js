import { TypeAnimation } from 'react-type-animation';
import useWindowDimensions from '../../js/useWindowDimensions';
import { Link } from "react-router-dom";
import { GiWhiteBook, GiMeshNetwork } from 'react-icons/gi';
import { BsAlarm } from 'react-icons/bs';
import { BiDesktop, BiMedal } from 'react-icons/bi';
import { RiVirusLine } from 'react-icons/ri';
import { SiHackthebox } from 'react-icons/si';

const  Body = (props) => {
    const { width } = useWindowDimensions();

    return (
      <>
        <div className="flex flex-col justify-center items-center w-screen text-main h-screen  p-0 m-0">
          <TypeAnimation
            sequence={[
              '',
              250,
              props.app.langJson.words[props.app.lang].animatedTitle1,
              500, 
              props.app.langJson.words[props.app.lang].animatedTitle2, 
              500,
              props.app.langJson.words[props.app.lang].animatedTitle3,
              2000
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            className = "text-5xl text-center my-2"
          />
          <p className="text-2xl my-2 text-center p-2">{props.app.langJson.words[props.app.lang].description}</p>
          <div className=' w-screen h-32'></div>
          
          <div className='flex flex-row justify-start items-center'>
            <Link to="/signin"><button className="bg-main text-black py-3 px-6 rounded-md font-bold m-4 hover:bg-zinc-300 duration-200">{props.app.langJson.words[props.app.lang].signIn}</button></Link>
            <Link to="/signup"><button className="bg-main text-black py-3 px-6 rounded-md font-bold m-4 hover:bg-zinc-300 duration-200">{props.app.langJson.words[props.app.lang].signUp}</button></Link>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-screen text-main h-screen p-0 m-0">
          <p className="text-4xl text-center my-2">{props.app.langJson.words[props.app.lang].whatNautilusIncludes}</p>

          <div className='flex flex-row'>
            <div className='flex flex-col justify-center items-center'>
              <div className="flex flex-col justify-center text-main p-4 bg-neutral-900 rounded-2xl m-3">
                <p className="text-2xl text-left mb-4 flex flex-row"><GiWhiteBook className='mr-2 text-main text-3xl'/>{props.app.langJson.words[props.app.lang].Includes1Name}</p>
                <p className="text-xl text-left w-64">{props.app.langJson.words[props.app.lang].Includes1Description}</p>
              </div>
              <div className="flex flex-col justify-center text-main p-4 bg-neutral-900 rounded-2xl m-3">
                <p className="text-2xl text-left mb-4 flex flex-row"><BsAlarm className='mr-2 text-main text-3xl'/>{props.app.langJson.words[props.app.lang].Includes3Name}</p>
                <p className="text-xl text-left w-64">{props.app.langJson.words[props.app.lang].Includes3Description}</p>
              </div>
              { (width < 700) ?
                (<>
                  <div className="flex flex-col justify-center text-main p-4 bg-neutral-900 rounded-2xl m-3">
                    <p className="text-2xl text-left mb-4 w-64 flex flex-row"><BiDesktop className='mr-2 text-main text-3xl'/>{props.app.langJson.words[props.app.lang].Includes2Name}</p>
                    <p className="text-xl text-left w-64">{props.app.langJson.words[props.app.lang].Includes2Description}</p>
                  </div>
                  <br/>
                  <Link to="/courses"><button className="bg-main text-black py-3 px-10 rounded-md font-bold">{props.app.langJson.words[props.app.lang].checkCourses}</button></Link>
                  </>) : ""
              }
            </div>
            { (width >= 700) ?
            (<div className='flex flex-col justify-center items-center'>
              <div className="flex flex-col justify-center text-main p-4 bg-neutral-900 rounded-2xl m-4">
                <p className="text-2xl text-left my-4 w-64 flex flex-row"><BiDesktop className='mr-2 text-main text-3xl'/> {props.app.langJson.words[props.app.lang].Includes2Name}</p>
                <p className="text-xl text-left w-64">{props.app.langJson.words[props.app.lang].Includes2Description}</p>
              </div>
              <br/>
              <Link to="/courses"><button className="bg-main text-black py-3 px-10 rounded-md font-bold hover:bg-zinc-300 duration-200">{props.app.langJson.words[props.app.lang].checkCourses}</button></Link>
            </div>) : ""
          }
          </div>

        </div>
        <div className=' w-screen h-52'></div>
        {(props.app.lang === 2) ? <div className=' w-screen h-64'></div> : ""}

        <div className="flex flex-col justify-center items-center w-screen text-main h-screen p-0 m-0">
          <p className="text-4xl text-center my-2">{props.app.langJson.words[props.app.lang].howCostumerCanGrow}</p>

          <div className='flex flex-row'>
            {(width >= 700) ?
            (<div className='flex flex-col justify-center items-center'>
              <div className="flex flex-col justify-center text-main p-4 bg-neutral-900 rounded-2xl m-4">
                <p className="text-2xl text-left my-4 w-64 flex flex-row"><GiMeshNetwork className='mr-2 text-main text-5xl'/> {props.app.langJson.words[props.app.lang].Costumer2Name}</p>
                <p className="text-xl text-left w-64">{props.app.langJson.words[props.app.lang].Costumer2Description}</p>
              </div>
            </div>) : ""}
            <div className='flex flex-col justify-center items-center'>
              <div className="flex flex-col justify-center text-main p-4 bg-neutral-900 rounded-2xl m-3">
                <p className="text-2xl text-left mb-4 w-64 flex flex-row"><BiMedal className='mr-2 text-main text-4xl'/> {props.app.langJson.words[props.app.lang].Costumer1Name}</p>
                <p className="text-xl text-left w-64">{props.app.langJson.words[props.app.lang].Costumer1Description}</p>
              </div>
              <div className="flex flex-col justify-center text-main p-4 bg-neutral-900 rounded-2xl m-3">
                <p className="text-2xl text-left w-64 flex flex-row"><RiVirusLine className='mr-2 text-main text-5xl'/>{props.app.langJson.words[props.app.lang].Costumer3Name}</p>
                <p className="text-xl text-left w-64">{props.app.langJson.words[props.app.lang].Costumer3Description}</p>
              </div>
              { (width < 700) ?
                (<>
                  <div className="flex flex-col justify-center text-main p-4 bg-neutral-900 rounded-2xl m-3">
                    <p className="text-2xl text-left mb-4 w-64 flex flex-row"><GiMeshNetwork className='mr-2 text-main text-5xl'/>{props.app.langJson.words[props.app.lang].Costumer2Name}</p>
                    <p className="text-xl text-left w-64">{props.app.langJson.words[props.app.lang].Costumer2Description}</p>
                  </div>
                </>) : ""
              }
            </div>
          </div>
        </div>

        {(props.app.lang === 2) ? <div className=' w-screen h-32'></div> : ""}

        <div className=' w-screen h-64'></div>

        <div className="flex flex-col justify-center items-center w-screen text-main h-screen p-0 m-0">
          <p className="text-4xl text-center my-2">{props.app.langJson.words[props.app.lang].questions}</p>

          <div className='flex flex-row'>
            {(width >= 700) ?
            (<div className='flex flex-col justify-center items-center'>
              <div className="flex flex-col justify-center text-main p-4 bg-neutral-900 rounded-2xl m-3">
                <p className="text-2xl text-left w-64 flex flex-row"><SiHackthebox className='mr-2 text-main text-4xl'/>{props.app.langJson.words[props.app.lang].questions2Name}</p>
                <p className="text-xl text-left w-64">{props.app.langJson.words[props.app.lang].questions2Description}</p>
              </div> 
              <button className="bg-main text-black py-3 px-10 rounded-md font-bold m-6 hover:bg-zinc-300 duration-200">{props.app.langJson.words[props.app.lang].moreQuestions}</button>
            </div>) : ""}
            <div className='flex flex-col justify-center items-center'>

              <div className="flex flex-col justify-center text-main p-4 bg-neutral-900 rounded-2xl m-3">
                <p className="text-2xl text-left mb-4 w-64 flex flex-row"><SiHackthebox className='mr-2 text-main text-4xl'/>{props.app.langJson.words[props.app.lang].questions1Name}</p>
                <p className="text-xl text-left w-64">{props.app.langJson.words[props.app.lang].questions1Description}</p>
              </div>

              <div className="flex flex-col justify-center text-main p-4 bg-neutral-900 rounded-2xl m-3">
                  <p className="text-2xl text-left mb-4 w-64 flex flex-row"><SiHackthebox className='mr-2 text-main text-4xl'/>{props.app.langJson.words[props.app.lang].questions3Name}</p>
                  <p className="text-xl text-left w-64">{props.app.langJson.words[props.app.lang].questions3Description}</p>
              </div>
              
              { (width < 700) ?
                (<>
                  <div className="flex flex-col justify-center text-main p-4 bg-neutral-900 rounded-2xl m-3">
                    <p className="text-2xl text-left w-64 flex flex-row"><SiHackthebox className='mr-2 text-main text-4xl'/>{props.app.langJson.words[props.app.lang].questions2Name}</p>
                    <p className="text-xl text-left w-64">{props.app.langJson.words[props.app.lang].questions2Description}</p>
                  </div> 
                  <button className="bg-main text-black py-3 px-10 rounded-md font-bold m-6 hover:bg-zinc-300 duration-200">{props.app.langJson.words[props.app.lang].moreQuestions}</button>
                </>) : ""
              }
            </div>
          </div>
        </div>

        {(props.app.lang === 2) ? <div className=' w-screen h-32'></div> : ""}

        <div className=' w-screen h-52'></div>

        {/*
        <div className='text-main'>
          <p className="text-4xl text-center my-2">{props.app.langJson.words[props.app.lang].news}</p>
          <ScrollContainer className="scroll-container flex flex-row w-screen" horizontal={true}>
            {news.map((object, i) => (
              <div key={i} className="flex flex-col items-start justify-evenly text-main p-3 bg-neutral-900 rounded-2xl m-3">
                    <p className="text-xl text-left">{news[i].name}</p>
                    <ul className="text-main list-disc">
                      {news[i].text.map((object, j) => (<li key={j} className="text-main text-md text-left ml-4 m-2">{object}</li>))}
                    </ul>
                    <p className="text-sm text-left mt-2">{news[i].time}</p>
              </div> 
            ))}
          </ScrollContainer>
        </div>
            */}
      </>
    );
  }
  
  export default Body;