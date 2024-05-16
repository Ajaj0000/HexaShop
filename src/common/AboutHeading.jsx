import React from "react";

function AboutHeading(props) {

    return (
        <>
            <div className="team">
                <div className="team-lite">
                    <h1>{props.Heading}</h1>
                    <span>{props.span}</span>
                </div>
            </div>
        </>
    )
}

export { AboutHeading }