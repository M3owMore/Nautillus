import parse from 'html-react-parser';

const Info = (props:any) => {
    return (
        <div className={'h-full' + ((props.fixed === true) ? 'w-1/2' : ' w-full')}>
            <div className='flex flex-col items-center justify-center h-full w-full p-2 overflow-y-scroll'>
                <div className='h-full'>
                    {parse(props.courseText)}
                </div>
            </div>
        </div>
    );
  }
  
  export default Info;