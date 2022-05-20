/*
  THIS FILE WAS DEVELOPED BY MEHMET GUDUK
  © 2022 COPYRIGHT, LICENSED WITH GPL-3.0 LICENSE, AUTHOR IS MEHMET GUDUK
  https://github.com/mehmetguduk
*/

export default function Journey(props) {
    return (
        <div className="journey">
            <img className="journey-image" src={props.item.image} alt="Taken during the trip"/>
            <div className="journey-content">
                <div className="journey-location">
                    <span className="journey-country"><i class="fa fa-map-marker" aria-hidden="true"></i> {props.item.location}</span>
                    <a className="journey-maps" href={props.item.googlemapslink} target="_blank" rel="noreferrer">View on Google Maps</a>
                </div>
                <div className="journey-text">
                    <h3 className="journey-title">{props.item.title}</h3>
                    <p className="journey-description">{props.item.description}</p>
                </div>
            </div>
        </div>
    )
} 


