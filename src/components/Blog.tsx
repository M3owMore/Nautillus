import { useEffect, useState } from "react"
import { PuffLoader  } from "react-spinners";
import axios from "axios";
import parse from 'html-react-parser';
import {useParams} from "react-router-dom";


const Blog = (props:any) => {
    const [blog, setBlog]:any = useState(null)
    const [spinner, setSpinner] = useState(false)
    let { name } = useParams();

    useEffect(() => {
        async function fetchBlog() {
            setSpinner(true)
            await axios.get(props.app.backendURL + "api/blog/" + name)
                .then((res) => {
                        setBlog(res.data)
                })
                .catch(() => {

                });
            setSpinner(false)
        };
        
        fetchBlog();
    }, []);

    return (

        <div className="w-full flex items-center justify-center p-2">
            {(spinner) 
            ? 
                <div className="absolute top-20 left-0 right-0 bottom-0 flex justify-center items-center">
                    <PuffLoader color="rgb(180, 210, 115)"size={128}/> 
                </div>
            : 
            blog !== null ? 
                <div className="w-full max-w-2xl flex flex-col justify-center">
                    <h1 className="text-2xl text-secondary font-alkSanet text-center">{blog.title}</h1>
                    <br/>
                    {parse(blog.content)}
                </div>
            : null}
        </div>
    )
}

export default Blog