import Journey from "./Journey"
import Database from "../Data"

export default function Journeys() {
    const data = Database.map((item)=>{
        return(
            <Journey
                item={item}
            />
        )
    })

    return (
        <div className="journeys">
            {data}
        </div>
    )
} 