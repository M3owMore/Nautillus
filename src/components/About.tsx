

const About = (props:any) => {
  return (
    <div className="flex flex-col items-center justify-center pt-4">
        <h1 className="text-2xl text-secondary font-alkSanet">Founders:</h1>
        <div className="w-full max-w-3xl p-4 gap-8 flex flex-col tablet:flex-row items-center justify-center">
            <div className="w-full max-w-sm bg-bg-2 shadow-green-950 tablet:hover:scale-125 tablet:hover:shadow-secondary duration-200 shadow-md rounded-md text-main p-4 flex gap-4">
              <img className="rounded-full w-16 h-16" src="https://scontent.ftbs5-2.fna.fbcdn.net/v/t1.6435-9/87044092_2595760794045210_5852340613831196672_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ivRNgITSGxAAX8_NPxV&_nc_oc=AQkrMybk8dDSWi8jKR8R_aTg3FqOg2WRVb2UhnYH8aEVIqkvCVWEdrqShcadCCe2sGU&_nc_ht=scontent.ftbs5-2.fna&oh=00_AfDA7CBYHyBLIZcfPV16imxK3b0eAX7lQTHSM4mqRfFzvA&oe=6528F669"/>
              <div className="flex flex-col items-start justify-center">
                <p>Saba Sikharulidze</p>
                <p className="text-xs text-secondary font-alkSanet">Back-end Developer</p>
              </div>
            </div>

            <div className="w-full max-w-sm bg-bg-2 shadow-green-950 tablet:hover:scale-125 tablet:hover:shadow-secondary duration-200 shadow-md rounded-md text-main p-4 flex gap-4">
              <img className="rounded-full w-16 h-16" src="https://scontent.ftbs5-3.fna.fbcdn.net/v/t39.30808-6/374700266_3695170424102631_8359074219208546012_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=pt_CADpY8p0AX-tMqYt&_nc_ht=scontent.ftbs5-3.fna&oh=00_AfChSHmG89OdEoYgvy9byk3xpE2gi_676Uz7gv3Ab0r7wQ&oe=650673A3"/>
              <div className="flex flex-col items-start justify-center">
                <p>Toko Tskhadiashvili</p>
                <p className="text-xs text-secondary font-alkSanet">Cyber Security Specialist</p>
              </div>
            </div>

            <div className="w-full max-w-sm bg-bg-2 shadow-green-950 tablet:hover:scale-125 tablet:hover:shadow-secondary duration-300 shadow-md rounded-md text-main p-4 flex gap-4">
              <img className="rounded-full w-16 h-16" src="https://scontent.ftbs5-2.fna.fbcdn.net/v/t39.30808-1/274788180_715964123143554_6212616105763158771_n.jpg?stp=dst-jpg_p160x160&_nc_cat=110&ccb=1-7&_nc_sid=fe8171&_nc_ohc=-9N2wiWcPkAAX8lGSyS&_nc_ht=scontent.ftbs5-2.fna&oh=00_AfDYNq9aeMSDz9aCDQOz_X-brXG601EYsWqbB6YesZ8G9A&oe=6506189F"/>
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