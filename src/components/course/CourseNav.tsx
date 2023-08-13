
export const Button = (props:any) => {
  return (
    <button className="text-sm text-left p-1.5 font-light hover:bg-white hover:bg-opacity-10 duration-200 w-full rounded-sm text-main">
      {props.children}
    </button>
  )
}



const CourseNav = () => {

  return (
    <div className="h-full w-96 flex flex-col border-r-2 border-white  border-opacity-5 overflow-y-auto">
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
  )
}

export default CourseNav