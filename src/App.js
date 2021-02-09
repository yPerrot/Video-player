// import logo from './logo.svg';
import './App.css';
import ReactWebMediaPlayer from 'react-web-media-player';

function App() {
  return (
    <ReactWebMediaPlayer
      title="My own video player"
      video="https://ia801406.us.archive.org/32/items/Route_66_-_an_American_badDream/Route_66_-_an_American_badDream_512kb.mp4"
    />
  );
}

export default App;
