import Cast from "../elements/Cast"
import Details from "../elements/Details"
import RecoSimilist from "../elements/RecoSimilist"
import Header2 from "../Header2"

const Content = () => {

  return (
    <div className="overflow-hidden">
        <Header2/>
        <Details/>
        <Cast/>
        <RecoSimilist/>

    </div>
  )
}
export default Content