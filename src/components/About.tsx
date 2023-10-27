

const About = (props:any) => {
  return (
    <div className="flex flex-col items-center justify-center pt-4">
        <h1 className="text-2xl text-secondary font-alkSanet">Founders:</h1>
        <div className="w-full max-w-3xl p-4 gap-8 flex flex-col tablet:flex-row items-center justify-center">
            <div className="w-full max-w-sm bg-bg-2 shadow-green-950 tablet:hover:scale-125 tablet:hover:shadow-secondary duration-200 shadow-md rounded-md text-main p-4 flex gap-4">
              <img className="rounded-full w-16 h-16" src="/creators/sikha.jpg"/>
              <div className="flex flex-col items-start justify-center">
                <p>Saba Sikharulidze</p>
                <p className="text-xs text-secondary font-alkSanet">Back-end Developer</p>
              </div>
            </div>

            <div className="w-full max-w-sm bg-bg-2 shadow-green-950 tablet:hover:scale-125 tablet:hover:shadow-secondary duration-200 shadow-md rounded-md text-main p-4 flex gap-4">
              <img className="rounded-full w-16 h-16" src="/creators/cup.jpg"/>
              <div className="flex flex-col items-start justify-center">
                <p>Toko Tskhadiashvili</p>
                <p className="text-xs text-secondary font-alkSanet">Cyber Security Specialist</p>
              </div>
            </div>

            <div className="w-full max-w-sm bg-bg-2 shadow-green-950 tablet:hover:scale-125 tablet:hover:shadow-secondary duration-300 shadow-md rounded-md text-main p-4 flex gap-4">
              <img className="rounded-full w-16 h-16" src="/creators/crig.jpg"/>
              <div className="flex flex-col items-start justify-center">
                <p>Tengo Lomidze</p>
                <p className="text-xs text-secondary font-alkSanet">Front-end Developer</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default About