import React from "react"
import {render} from "@testing-library/react"
import {KeyWords, ListKeyWords} from "./ListKeyWords"

Keywords: [
    {
        pos: "0",
        data: [
            {
                title:"Mot clef 1",
                url:"url de la page"
            },
        ]
    },
    ]

test("ListKeyWords renders withou crashing", () => {
    const props = {
        items:  [{
            pos: "0",
            data: [{
                    title:"Mot clef 1",
                    url:"url de la page"
            }]
        }],
    }
    render(<ListKeyWords {...props}/>)
})

test("KeyWords renders without crashing", () => {
    const props = {
        pos: 0,
        data: [{
                title:"Mot clef 1",
                url:"url de la page"
        }]
    }
    render(<KeyWords {...props}/>)
})