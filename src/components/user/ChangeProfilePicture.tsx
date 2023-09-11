import { useEffect, useState } from "react"
import axios from "axios"
import { PuffLoader  } from "react-spinners";

const ProfileImg = (props:any) => {
  return (
    <button onClick={() => {props.setImg(`/userImages/${props.i}.webp`); props.setId(props.i)}}>
      <img src={`/userImages/${props.i}.webp`} className={"w-20 h-20 m-2 rounded-full duration-200 border-2 border-transparent " + (props.img === `/userImages/${props.i}.webp` ? " border-secondary" : null)}/>
    </button>
  )
}

const ChangeProfilePicture = (props:any) => {

  const [img, setImg] = useState(props.app.user.img)
  const [id, setId] = useState(false)
  const [spinner, setSpinner] = useState(false)

  // relocate if not logined
  useEffect(() => {
    if(props.app.user.canUseApp === -1){
        window.location.href = "/signin"
    }
  }, [props.app.user])

  useEffect(() => {
    setImg(props.app.user.img)
  }, [props.app.user])

  function onChangeProfilePicture(){
    setSpinner(true)

    axios.post(props.app.backendURL + "api/user/change-pfp/", {pfp_number: id}, {headers: {Authorization: 'Bearer ' + props.app.cookies.get('access')}})
    .then(() => {
        window.location.pathname = "/"
    })
}

  return (
    <>
    {spinner ?  
          <div className="absolute top-20 left-0 right-0 bottom-0 flex flex-col justify-center items-center  overflow-hidden">
              
              <PuffLoader 
                  color="rgb(180, 210, 115)"
                  size={128}
              />
          </div>
      :
        <div className="w-full flex flex-col justify-center items-center">
          <div className="w-full max-w-4xl flex flex-col justify-center items-center p-2">
            <div className="w-full flex gap-3 items-center justify-start">
              <img src={img} className="w-24 h-24 rounded-full"/>
              <p className="text-main font-bpgESM text-2xl">{props.app.user.isUser ? props.app.user.name.split("").map((char:string, i:number) => <span className="tablet:hover:text-4xl tablet:hover:text-secondary duration-200 " key={i}>{char}</span>) : null}</p>
            </div>

            <br/>
            <br/>

            <div>
              {[...Array(23)].map((obj:any, i:number) => <ProfileImg img={img} setImg={setImg} setId={setId} key={i} i={i}/>)}
            </div>

            <br/>

            <button onClick={onChangeProfilePicture}
                className="px-4 py-2 tracking-wide text-black transition-colors duration-200 transform bg-white hover:bg-secondary rounded-md"
            >
                    
                Apply
            </button>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

          </div>
        </div>
      }
    </>
  )
}

export default ChangeProfilePicture