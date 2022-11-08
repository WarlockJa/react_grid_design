export default function findNeigbourSlides (props) {
    return props.direction === "left"
        ? props.number > 0 ? props.number - 1 : props.length - 1
        : props.number < props.length - 1 ? props.number + 1 : 0
}
