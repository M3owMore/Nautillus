import { Link } from "react-router-dom";

const LNK = (props:any) => {
    return (
            <a  href={props.to} className="text-secondary link-underline-2  text-md">
                {props.children}
            </a>
    );
}

  export default LNK;