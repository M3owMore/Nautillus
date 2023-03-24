import { Outlet, Link } from "react-router-dom";

const LNK = (props) => {
    return (
            <Link to={props.to} className="text-main text-sm underline">
                {props.children}
            </Link>
    );
}

  export default LNK;