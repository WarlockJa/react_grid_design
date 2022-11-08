import { useState } from "react";
import data from "./SlidesData.json";
import Slide from "./Slide";
import findNeigbourSlides from "./findNeighbourSlides";

export default function Slides() {
  const [SlideNumber, setSlideNumber] = useState(0);
  const [SlideClass, setSlideClass] = useState("main-section-slide");
  const SlidesData = data.slides.map(a => a);

  function delay(time) {
    return new Promise(resolve =>  setTimeout(resolve, time));
  }

  // sent to children to change parent's state
  const ChangeSlide = async (slideNumber, direction) => {
    setSlideClass("main-section-slide" + direction);
    await delay(800);
    setSlideNumber(slideNumber);
    setSlideClass("main-section-slide");
  }

  const leftSlide = findNeigbourSlides({direction: "left", number: SlideNumber, length: SlidesData.length})
  const rightSlide = findNeigbourSlides({direction: "right", number: SlideNumber, length: SlidesData.length})

  return (
    <>
        <Slide 
            image={SlidesData[leftSlide].image}
            description={SlidesData[leftSlide].description}
            title={SlidesData[leftSlide].title}
            slideNumber={leftSlide}
            slidesNumber={SlidesData.length}
            slideClass={SlideClass + " previousSlide"}
        />
        <Slide 
            image={SlidesData[SlideNumber].image}
            description={SlidesData[SlideNumber].description}
            title={SlidesData[SlideNumber].title}
            onClick={ChangeSlide}
            slideNumber={SlideNumber}
            slidesNumber={SlidesData.length}
            slideClass={SlideClass}
        />
        <Slide 
            image={SlidesData[rightSlide].image}
            description={SlidesData[rightSlide].description}
            title={SlidesData[rightSlide].title}
            slideNumber={rightSlide}
            slidesNumber={SlidesData.length}
            slideClass={SlideClass + " nextSlide"}
        />
    </>
  )
}
