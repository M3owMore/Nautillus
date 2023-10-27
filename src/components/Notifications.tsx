import { useState, useEffect } from "react"
import axios from "axios"
const Notification = (props:any) => {
    return (
        <div className="p-1 flex flex-col items-start justify-start w-full bg-bg-3 bg-opacity-90 rounded-md">
            <p className="text-secondary text-sm">{props.not.title}</p>
            <p className="text-main font-thin text-xs">{props.not.content}</p>
        </div>
    )
}

const Notifications = (props:any) => {
    const [notifications, setNotifications]:any = useState(null)

    useEffect(() => {
        axios.get(props.app.backendURL + "api/user/notifications/",  {headers: {Authorization: 'Bearer ' + props.app.cookies.get('access')}})
            .then((res:any) => {
                setNotifications(res.data)
            })
    }, [])

    return (
        <>
            {props.nots ? 
                <div className="p-2 overflow-y-auto nots-appear fixed tablet:absolute flex items-center justify-start flex-col rounded-xl z-20 gap-2 top-24 tablet:top-10 left-8 right-8 tablet:left-auto tablet:right-auto  tablet:w-64  h-96 bg-bg-4 bg-opacity-90">
                    <div className="w-full">
                        {notifications.map((not:any, i:number) => <Notification key={i} not={not} />)}
                    </div>
                </div>
            : null}
        </>
    )
}

export default Notifications