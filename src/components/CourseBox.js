const CourseBox = (props) => {
    return (
        <div className="bg-neutral-900 rounded-2xl m-4">
            <p className="text-main text-2xl text-center m-4">{props.obj.name}</p>
            <p className="text-main text-xl text-center m-2">Level: {props.obj.level}</p>
            <ul className="text-main list-disc ml-4">
                {props.obj.text.map((object, i) => (<li key={i} className="text-main text-md text-left ml-4 m-2">{object}</li>))}
            </ul>
        </div>
    );
  }
  
  export default CourseBox;