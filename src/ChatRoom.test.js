import { render, waitForElement } from '@testing-library/react';
import { ChatRoom } from './ChatRoom';


beforeEach(() => {
	jest.spyOn(global, 'fetch').mockImplementation(() => {
		return Promise.resolve({
			status: 200,
			json: () => {
				return Promise.resolve([
                    {
                      when: "1580742794",
                      name: "Alice",
                      message: `Hi, I'm Alice!`
                    },
                  ])
			}
		})
	})
})

afterEach(() =>{
	fetch.mockClear();
});

// test("backend is called", () => {
// 	render(<ChatRoom />);
// 	expect(global.fetch).toHaveBeenCalledTimes(1);
// 	expect(global.fetch).toHaveBeenCalledWith('wss://imr3-react.herokuapp.com');
// })

test("renders without crashing", () => {
	const div = document.createElement("div");
	render(<ChatRoom />, div);
});

test("does not contains chat room after initial render", () => {
	const { container } = render(<ChatRoom />);
	const chatRoom = container.querySelector(`[class="chat-room-container"]`);
	expect(chatRoom).toBeInTheDocument();
});

test("contains chat room after async fetch", async () => {
	const { container } = render(<ChatRoom />);
	const chatRoom = await waitForElement(() => container.querySelector(`[class="chat-room-container"]`));
	expect(chatRoom).toBeInTheDocument();
});

