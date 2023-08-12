import Header from "../Header"
import Body from "./Body"
import Footer from "../Footer"

const Main = () => {
  return (
    <div className="flex flex-col items-center">
        <Header/>
        <Body/>
        <Footer/>
    </div>
  )
}

export default Main