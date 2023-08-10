import { SyncLoader } from "react-spinners";

const Loading = () => {
    return (
      <div className="flex fixed justify-center items-center bg-bg top-0 left-0 w-screen h-screen z-50">
        <SyncLoader
        color="rgba(255, 255, 255, 1)"
        size={32}
        />
      </div>
    );
  }
  
  export default Loading;