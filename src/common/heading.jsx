import React from "react";

function Heading(props) {
    return (
        <>
            <div className="heading">
                <div className="head-lite">
                    <h1>{props.head}</h1>
                    <p>{props.detail}</p>
                </div>
            </div>
        </>
    )
}
export { Heading }