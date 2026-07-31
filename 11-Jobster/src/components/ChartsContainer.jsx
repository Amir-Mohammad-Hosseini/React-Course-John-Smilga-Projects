import { useState } from "react"
import Wrapper from "../assets/wrappers/ChartsContainer"
import BarChart from "./BarChart"
import AreaChart from "./AreaChart"

const ChartsContainer = ({data}) => {
    const [isBarChart , setIsBarChart] = useState(true)

    const handleChangeChartType = () => {
        setIsBarChart((prevStatus) => !prevStatus)
    }
  return (
    <Wrapper>
        <h4>Monthly Applications</h4>
        <button type="button" onClick={handleChangeChartType}>
            {
                isBarChart ? "Area Chart" : "Bar Chart"
            }
        </button>
        {
            isBarChart ? <BarChart data={data} /> : <AreaChart data={data} />
        }
    </Wrapper>
  )
}

export default ChartsContainer