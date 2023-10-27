import { useEffect, useState } from "react"
import { PuffLoader  } from "react-spinners";
import axios from "axios";
import parse from 'html-react-parser';
import {useParams} from "react-router-dom";
import {BsArrowRight, BsArrowLeft} from "react-icons/bs"


const Blogs = (props:any) => {
    const [blogs, setBlogs]:any = useState(null)
    const [spinner, setSpinner] = useState(false)
    const [page, setPage] = useState(1)
    
    let { name } = useParams();

    useEffect(() => {
        async function fetchBlog() {
            setSpinner(true)
            await axios.get(props.app.backendURL + `api/blog/?page=${page}`)
                .then((res) => {
                    if(res.data.results){
                        if(res.data.results.length > 0){
                            setBlogs(res.data)
                        }
                    }
                })
                .catch(() => {

                });
            setSpinner(false)
        };
        
        fetchBlog();
    }, [page]);

    return (

        <div className="w-full flex flex-col items-center justify-center p-2">
            {(spinner) 
            ? 
                <div className="absolute top-20 left-0 right-0 bottom-0 flex justify-center items-center">
                    <PuffLoader color="rgb(180, 210, 115)"size={128}/> 
                </div>
            : 
            blogs !== null ? 
            <>

                {blogs.results.map((blog:any, i:number) => <Blog key={i} blog={blog}/>)}
                <div className="w-full flex items-center justify-center">
                    <button onClick={() => {if(page > 1){setPage(page - 1)}}} className='text-black  p-1.5 text-xl rounded-md bg-secondary hover:bg-opacity-50 duration-200'><BsArrowLeft/></button>
                    <button onClick={() => {if(page < blogs.count){setPage(page + 1)}}} className='text-black  p-1.5 text-xl rounded-md bg-secondary hover:bg-opacity-50 duration-200'><BsArrowRight/></button>
                </div>
                
            </>
            : null}
        </div>
    )
}

const Blog = (props:any) => {
    return (
        <div className="w-32 h-32">
            <h1 className="text-xl text-secondary font-alkSanet">{props.blog.title}</h1>
        </div>
    )
}

export default Blogs