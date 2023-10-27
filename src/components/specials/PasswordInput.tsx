import {useState} from "react"
import {BsFillEyeFill, BsFillEyeSlashFill} from "react-icons/bs"

const PasswordInput = (props:any) => {

    const [hidden, setHidden] = useState(true)

    return (
        <div className="relative w-full">
            <input
                ref={props.Ref}
                type={hidden ? "password" : "text"}
                name={props.Name}
                className="block border-2 border-transparent focus:border-secondary focus:outline-none outline-none focus:shadow-none duration-200 w-full px-4 py-2 mt-2 text-white bg-bg-3 rounded-md"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center h-full">
                <button type="button" onClick={() => setHidden(!hidden)} className="text-main hover:text-secondary text-xl duration-200">
                    {hidden ? <BsFillEyeSlashFill/> : <BsFillEyeFill/>}
                </button>
            </div>
        </div>
    )
}

export default PasswordInput