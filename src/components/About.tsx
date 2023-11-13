import { BoxAnim } from "./specials/Animations"

const About = (props:any) => {
  return (
    <div className="flex flex-col items-center justify-center pt-4">
      <div className="max-w-3xl w-full flex flex-col items-center justify-center px-4">
          <BoxAnim offset={100}><h1 className="text-2xl text-secondary font-alkSanet">{props.app.langJson.words[props.app.lang].founders}:</h1></BoxAnim>
          <div className="w-full gap-4 flex flex-col tablet:flex-row items-center justify-center mt-2">
              <BoxAnim offset={150} className="w-full">
                <div className="w-full bg-bg-2 tablet:hover:scale-105 tablet:hover:border-secondary duration-300 border-2 border-transparent rounded-md text-main p-4 flex justify-center tablet:justify-start gap-4">
                  <img className="rounded-full w-16 h-16" src="/creators/sikha.jpg"/>
                  <div className="flex flex-col items-start justify-center">
                    <p>Saba Sikharulidze</p>
                    <p className="text-xs text-secondary font-alkSanet">Back-end Developer</p>
                  </div>
                </div>
              </BoxAnim>

              <BoxAnim offset={200} className="w-full">
                <div className="w-full bg-bg-2 tablet:hover:scale-105 tablet:hover:border-secondary duration-300 border-2 border-transparent rounded-md text-main p-4 flex justify-center tablet:justify-start gap-4">
                  <img className="rounded-full w-16 h-16" src="/creators/cup.jpg"/>
                  <div className="flex flex-col items-start justify-center">
                    <p>Toko Tskhadiashvili</p>
                    <p className="text-xs text-secondary font-alkSanet">Cyber Security Specialist</p>
                  </div>
                </div>
              </BoxAnim>

              <BoxAnim offset={250} className="w-full">
                <div className="w-full bg-bg-2 tablet:hover:scale-105 tablet:hover:border-secondary duration-300 border-2 border-transparent rounded-md text-main p-4 flex justify-center tablet:justify-start gap-4">
                  <img className="rounded-full w-16 h-16" src="/creators/crig.jpg"/>
                  <div className="flex flex-col items-start justify-center">
                    <p>Tengo Lomidze</p>
                    <p className="text-xs text-secondary font-alkSanet">Front-end Developer</p>
                  </div>
                </div>
              </BoxAnim>
          </div>

          <br/>

          <BoxAnim offset={300}>
            <div className="w-full shadow-transparent tablet:hover:scale-105  duration-300  shadow-md px-4 py-2 bg-bg-2 rounded-md flex flex-col items-center justify-center ">
              <BoxAnim offset={350}><h1 className="text-2xl text-secondary  font-alkSanet">{props.app.langJson.words[props.app.lang].about}:</h1></BoxAnim>
              <div className="w-full flex flex-col items-center justify-center text-main text-sm font-arialGeo gap-2 mt-2">
                <BoxAnim offset={400}><p>ㅤㅤ{props.app.langJson.words[props.app.lang].aboutUsText1}</p></BoxAnim>
                <BoxAnim offset={450}><p>ㅤㅤ{props.app.langJson.words[props.app.lang].aboutUsText2}</p></BoxAnim>
                <BoxAnim offset={500}><p>ㅤㅤ{props.app.langJson.words[props.app.lang].aboutUsText3}</p></BoxAnim>
              </div>
            </div>
          </BoxAnim>
        </div>
    </div>
  )
}

export default About