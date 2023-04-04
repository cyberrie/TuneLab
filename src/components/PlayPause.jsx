import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

// pass state props
const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) =>
  //if is playing we want to show pause button
  isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle onClick={handlePause} size={35} className="text-gray-300" />
  ) : (
    // otherwise show play button
    <FaPlayCircle onClick={handlePlay} size={35} className="text-gray-300" />
  );

export default PlayPause;
