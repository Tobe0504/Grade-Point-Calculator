import React from "react"

const GpDisplay = (props) =>{


    return (
        <div>
            {props.gpData < 1.50 ? <h2>Your Grade Point is <span style = {{color: "red"}}>{props.gpData}</span> </h2> 
            : <h2>Your Grade Point is <span style = {{color : "green"}}>{props.gpData}</span> </h2>}
        </div>
    )
}

export default GpDisplay