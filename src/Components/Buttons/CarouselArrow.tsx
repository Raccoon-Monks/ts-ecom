export default function CarouselArrow (props:any){
    return (
        <>
            <button onClick = {props.onClick}>{props.orientation}</button>
        </>
    )
}