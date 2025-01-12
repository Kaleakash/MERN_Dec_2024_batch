import Child4 from "./Child4";

function Child3(props) {

    return(
        <div>
            <h3>Child3 Component <u>{props.fname}</u></h3>
            <Child4 />
        </div>
    )
}

export default Child3;