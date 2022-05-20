/*
  THIS FILE WAS DEVELOPED BY MEHMET GUDUK
  © 2022 COPYRIGHT, LICENSED WITH GPL-3.0 LICENSE, AUTHOR IS MEHMET GUDUK
  https://github.com/mehmetguduk
*/

import Journey from "./Journey"
import Database from "../Data"

export default function Journeys() {
    const data = Database.map((item) => {
        return (<Journey item={item} />)
    })

    return (
        <div className="journeys">
            {data}
        </div>
    )
} 