
export const Button = (props:any) => {
  return (
    <button className="text-sm text-left p-1.5 font-light hover:bg-white hover:bg-opacity-10 duration-200 w-full rounded-sm text-main">
      {props.children}
    </button>
  )
}



const CourseNav = (props:any) => {

  return (
    <div className={"left-0 top-20 bottom-0 w-56 tablet:w-96 bg-bg-2 z-10 bg-opacity-75 backdrop-blur-sm duration-300" + (props.isNav ? " translate-x-0" : props.width <= 800 ? " -translate-x-full" : null ) + (props.width <= 800 ? " fixed" : " h-full")}>
      <div className="overflow-y-auto h-full w-full">
        <div className="gap-2 p-2">
          <Button>Introduction</Button>
          <Button>C++ code</Button>
          <Button>Variables</Button>
          <Button>Operators </Button>
          <Button>Libraries </Button>
          <Button>If/else</Button>
          <Button>Loops</Button>
          <Button>Input and Output</Button>
          <Button>Functions</Button>
          <Button>Function Parameters</Button>
          <Button>Switch</Button>
          <Button>Pointers</Button>
          <Button>Comments</Button>
          <Button>Constants</Button>
          <Button>Namespaces</Button>
          <Button>Constants</Button>
          <Button>Compiling</Button>
          <Button>Array</Button>
          <Button>File input</Button>
          <Button>File output</Button>
          <Button>Preprocessor Directives</Button>
          <Button>typedef</Button>
          <Button>Templates</Button>
          <Button>Unsigned Numbers</Button>
          <Button>Threads</Button>
          <Button>Terminal Parameters</Button>
          <Button>Enumerations</Button>
        </div>
      </div>
    </div>
    
  )
}

export default CourseNav