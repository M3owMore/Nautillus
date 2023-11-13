import { TypeAnimation } from 'react-type-animation';
import { Link } from "react-router-dom";
import { GiWhiteBook, GiMeshNetwork } from 'react-icons/gi';
import { BsAlarm } from 'react-icons/bs';
import { BiDesktop, BiMedal } from 'react-icons/bi';
import { RiVirusLine } from 'react-icons/ri';
import { SiHackthebox } from 'react-icons/si';

import { BoxAnim } from '../specials/Animations';



const  Body = (props:any) => {
  

    return (
      <>
        {/* <div className='absolute top-0 bottom-0 left-0 right-0 pointer-events-none bg-center  bg-cover blur-sm opacity-20  -z-10' style={{backgroundImage: `url("./banner.webp")`}}></div> */}
        <div className="flex flex-col justify-center items-center w-screen text-main min-h-screen gap-4">
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
            className = "text-6xl text-center p-1 text-secondary font-bpgESM"
          />

          <p className="text-2xl font-alkSanet text-center p-2">
            {[...props.app.langJson.words[props.app.lang].description].map((char:string, i:number) => 
              <span className='tablet:hover:text-4xl tablet:hover:text-secondary duration-100' key={i}>{char}</span>
            )}
          </p>

          <div className=' w-screen h-16'></div>
          
          <div className='flex flex-row justify-start items-center'>
            <Link to="/signin"><button className="bg-main text-black py-3 px-6 rounded-md font-bold m-4 hover:bg-secondary duration-200">{props.app.langJson.words[props.app.lang].signIn}</button></Link>
            <Link to="/signup"><button className="bg-main text-black py-3 px-6 rounded-md font-bold m-4 hover:bg-secondary duration-200">{props.app.langJson.words[props.app.lang].signUp}</button></Link>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-screen text-main gap-2">
          <BoxAnim><p className="text-4xl text-center w-full px-6 font-bpgESM text-secondary">{props.app.langJson.words[props.app.lang].whatNautilusIncludes}</p></BoxAnim>

          <div className='flex flex-col  tablet:flex-row gap-6'>
            <div className='flex flex-col justify-center items-center gap-6'>
              <BoxAnim>
                <div className="flex flex-col justify-center text-main p-4 w-full bg-bg-2 rounded-2xl gap-2 hover:scale-105 duration-200">
                  <p className="text-2xl text-left font-bpgESM mb-4 flex flex-row"><GiWhiteBook className='mr-2  text-secondary text-4xl'/><span className='w-full'>{props.app.langJson.words[props.app.lang].Includes1Name}</span></p>
                  <p className="text-lg text-left w-64">{props.app.langJson.words[props.app.lang].Includes1Description}</p>
                </div>
              </BoxAnim>
              <BoxAnim>
                <div className="flex flex-col justify-center text-main p-4 w-full bg-bg-2 rounded-2xl gap-2 hover:scale-105 duration-200">
                  <p className="text-2xl text-left font-bpgESM mb-4 flex flex-row"><BsAlarm className='mr-2  text-secondary text-4xl'/><span className='w-full'>{props.app.langJson.words[props.app.lang].Includes3Name}</span></p>
                  <p className="text-lg text-left w-64">{props.app.langJson.words[props.app.lang].Includes3Description}</p>
                </div>
              </BoxAnim> 
            </div>

            <div className='flex flex-col justify-center items-center'>
              <BoxAnim>
                <div className="flex flex-col justify-center text-main p-4 w-full bg-bg-2 rounded-2xl gap-2 hover:scale-105 duration-200">
                  <p className="text-2xl text-left font-bpgESM mb-4 w-64 flex flex-row"><BiDesktop className='mr-2  text-secondary text-4xl'/><span className='w-full'>{props.app.langJson.words[props.app.lang].Includes2Name}</span></p>
                  <p className="text-lg text-left w-64">{props.app.langJson.words[props.app.lang].Includes2Description}</p>
                </div>
              </BoxAnim>
              <br/>
              <BoxAnim><Link to="/courses"><button className="bg-main text-black py-3 px-6 rounded-md font-bold m-4 hover:bg-secondary duration-200">{props.app.langJson.words[props.app.lang].checkCourses}</button></Link></BoxAnim>
            </div>
          </div>

        </div>

        <div className=' w-screen h-52'></div>

        <div className="flex flex-col justify-center items-center w-screen text-main gap-2">
          <BoxAnim><p className="text-4xl text-center w-full px-6 font-bpgESM text-secondary"><span className='w-full'>{props.app.langJson.words[props.app.lang].howCostumerCanGrow}</span></p></BoxAnim>

          <div className='flex flex-col tablet:flex-row gap-6'>
           <div className='flex flex-col justify-center items-center'>
                <BoxAnim>
                  <div className="flex flex-col justify-center text-main p-4 w-full bg-bg-2 rounded-2xl gap-2 hover:scale-105 duration-200">
                    <p className="text-2xl text-left font-bpgESM my-4 w-64 flex flex-row"><GiMeshNetwork className='mr-2  text-secondary text-5xl'/> <span className='w-full'>{props.app.langJson.words[props.app.lang].Costumer2Name}</span></p>
                    <p className="text-lg text-left w-64">{props.app.langJson.words[props.app.lang].Costumer2Description}</p>
                  </div>
                </BoxAnim>
            </div>
            <div className='flex flex-col justify-center items-center gap-6'>
                <BoxAnim>
                  <div className="flex flex-col justify-center text-main p-4 w-full bg-bg-2 rounded-2xl gap-2 hover:scale-105 duration-200">
                    <p className="text-2xl text-left font-bpgESM mb-4 w-64 flex flex-row"><BiMedal className='mr-2  text-secondary text-5xl'/> <span className='w-full'>{props.app.langJson.words[props.app.lang].Costumer1Name}</span></p>
                    <p className="text-lg text-left w-64">{props.app.langJson.words[props.app.lang].Costumer1Description}</p>
                  </div>
                </BoxAnim>

                <BoxAnim>
                  <div className="flex flex-col justify-center text-main p-4 w-full bg-bg-2 rounded-2xl gap-2 hover:scale-105 duration-200">
                    <p className="text-2xl text-left font-bpgESM w-64 flex flex-row"><RiVirusLine className='mr-2  text-secondary text-5xl'/><span className='w-full'>{props.app.langJson.words[props.app.lang].Costumer3Name}</span></p>
                    <p className="text-lg text-left w-64">{props.app.langJson.words[props.app.lang].Costumer3Description}</p>
                  </div> 
                </BoxAnim>
            </div>
          </div>
        </div>

        {(props.app.lang === 2) ? <div className=' w-screen h-32'></div> : ""}

        <div className=' w-screen h-64'></div>

        <div className="flex flex-col justify-center items-center w-screen text-main gap-2">
          <BoxAnim><p className="text-4xl text-center w-full px-6  font-bpgESM text-secondary">{props.app.langJson.words[props.app.lang].questions}</p></BoxAnim>

          <div className='flex flex-col tablet:flex-row gap-6'>
            <div className='flex flex-col justify-center items-center'>
              <BoxAnim>
                <div className="flex flex-col justify-center text-main p-4 w-full bg-bg-2 rounded-2xl gap-2 hover:scale-105 duration-200">
                  <p className="text-2xl text-left font-bpgESM w-64 flex flex-row"><SiHackthebox className='mr-2  text-secondary text-4xl'/><span className='w-full'>{props.app.langJson.words[props.app.lang].questions2Name}</span></p>
                  <p className="text-lg text-left w-64">{props.app.langJson.words[props.app.lang].questions2Description}</p>
                </div> 
              </BoxAnim>
              {/* <BoxAnim><button className="bg-main hidden tablet:block text-xl text-black py-3 px-8 rounded-md font-bold m-6 hover:bg-secondary duration-200"><span className='w-full'>{props.app.langJson.words[props.app.lang].moreQuestions}</span></button></BoxAnim> */}
            </div>
            <div className='flex flex-col justify-center items-center gap-6'>
              <BoxAnim>
                <div className="flex flex-col justify-center text-main p-4 w-full bg-bg-2 rounded-2xl gap-2 hover:scale-105 duration-200">
                  <p className="text-2xl text-left font-bpgESM mb-4 w-64 flex flex-row"><SiHackthebox className='mr-2  text-secondary text-4xl'/><span className='w-full'>{props.app.langJson.words[props.app.lang].questions1Name}</span></p>
                  <p className="text-lg text-left w-64">{props.app.langJson.words[props.app.lang].questions1Description}</p>
                </div>
              </BoxAnim>

              <BoxAnim>
              <div className="flex flex-col justify-center text-main p-4 w-full bg-bg-2 rounded-2xl gap-2 hover:scale-105 duration-200">
                  <p className="text-2xl text-left font-bpgESM mb-4 w-64 flex flex-row"><SiHackthebox className='mr-2  text-secondary text-4xl'/><span className='w-full'>{props.app.langJson.words[props.app.lang].questions3Name}</span></p>
                  <p className="text-lg text-left w-64">{props.app.langJson.words[props.app.lang].questions3Description}</p>
              </div>
              </BoxAnim>

              {/* <BoxAnim><button className="bg-main block tablet:hidden text-xl text-black py-3 px-8 rounded-md font-bold m-6 hover:bg-secondary duration-200"><span className='w-full'>{props.app.langJson.words[props.app.lang].moreQuestions}</span></button></BoxAnim> */}
              
              
            

          
            </div>
          </div>
        </div>


        <div className=' w-screen h-32'></div>

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