import React from "react"
import {render} from "@testing-library/react"
import { VideoPlayer } from "./VideoPlayer"

test("VideoPlayer renders withou crashing", () => {
    const data = {
        Film : {
            file_url : "https://ia801406.us.archive.org/32/items/Route_66_-_an_American_badDream/Route_66_-_an_American_badDream_512kb.mp4",
            title : "Title",
            synopsis_url : "https://wiki.creativecommons.org/wiki/Route_66_-_An_American_(bad)_Dream"
        },
        Chapters: [],
        Waypoints:[],
        Keywords: [],
    }

    const props = {
        url: "url",
        data: data,
    }
    render(<VideoPlayer {...props}/>)
})
