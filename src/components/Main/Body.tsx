import Section from "./Section"
import Banner from "./Banner"
import Ad from "./Ad"

const Body = () => {
  return (
    <div className="max-w-6xl w-full">
        <Banner/>
        <Section name="NEW"/>
        <Section name="POPULAR"/>
        <Ad/>
        <Section name="SALE"/>
        <Ad/>
        <Section name=""/>
    </div>
  )
}

export default Body