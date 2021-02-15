import React from "react"
import {render} from "@testing-library/react"
import {Chapter, ListChapter} from "./ListChapter"

test("ListChapter renders withou crashing", () => {
    const props = {
        items: [{
            pos: "0",
            title: "Start"
        }],
        onClick: ()=>{}
    }
    render(<ListChapter {...props}/>)
})

test("Chapter renders without crashing", () => {
    const props = {
        time: 1,
        title: "title",
        onClick: ()=>{},
        index: 1,
    }
    render(<Chapter {...props}/>)
})