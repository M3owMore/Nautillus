import parse from 'html-react-parser';

const Info = (props:any) => {
    return (
        <div className='flex flex-col  h-full w-full overflow-y-scroll p-6 overflow-visible'>
            <div className=''>
                {parse(props.courseText)}
            </div>
        </div>
    );
  }
  
  export default Info;