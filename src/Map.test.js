import React from "react"
import {render} from "@testing-library/react"
import { Map } from "./Map"

test("Map renders withou crashing", () => {
    const props = {
        waypoints: [{
            lat:"32.42",
            lng:"-90.13",
            label:"Place 1",
            timestamp:"45"
        }],
        onClick: ()=>{}
    }
    render(<Map {...props}/>)
})
