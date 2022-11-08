import findNeighbourSlides from "./findNeighbourSlides";
import { faPlus, faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Slide(props) {
    
  return (
    <div className={props.slideClass}>
        <div className="slide-image main-section">
            <img src={props.image} alt="" />
        </div>
        <article className="slide-description main-section">
            <p>
                {props.description}
            </p> 
        </article>
        <div className="slide-title main-section">
            <h1>{props.title}</h1>
            <h1>
                <FontAwesomeIcon icon={faPlus} />
            </h1>
        </div>
        <div className="slide-navigation main-section">
            <button className="slide-arrow-left" onClick={() => 
                props.onClick(
                    findNeighbourSlides({direction: "left", number: props.slideNumber, length: props.slidesNumber}),
                    " left"
                )}
            >
                <FontAwesomeIcon icon={faArrowLeftLong} />
            </button>
            <button className="slide-arrow-right" onClick={() =>
                props.onClick(
                    findNeighbourSlides({direction: "right", number: props.slideNumber, length: props.slidesNumber}),
                    " right"
                )}
            >
                <FontAwesomeIcon icon={faArrowLeftLong} />
            </button>
        </div>
    </div>
  )
}
