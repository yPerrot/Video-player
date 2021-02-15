import { render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  jest.spyOn(global, 'fetch').mockImplementation(() => {
      return Promise.resolve({
          status: 200,
          json: () => {
              return Promise.resolve([
                {
                  Film : {
                    file_url : "https://ia801406.us.archive.org/32/items/Route_66_-_an_American_badDream/Route_66_-_an_American_badDream_512kb.mp4",
                    title : "Title",
                    synopsis_url : "https://wiki.creativecommons.org/wiki/Route_66_-_An_American_(bad)_Dream"
                  },
                  Chapters: [
                    {
                      pos: "0",
                      title: "Start"
                    },
                  ],
                  Waypoints:[
                    {
                      lat:"32.42",
                      lng:"-90.13",
                      label:"Place 1",
                      timestamp:"45"
                    },
                  ],
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
                }
              ])
          }
      })
  })
})

afterAll(() =>{
  fetch.mockClear();
});

test("backend is called", () => {
  render(<App />);
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith('https://imr3-react.herokuapp.com/backend');
})

test("renders without crashing", () => {
  const div = document.createElement("div");
  render(<App />, div);
});
