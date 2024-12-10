import TwitchPlayer from "./TwitchPlayer";
const StreamerPage = () => {
  const streamerName = "ArreatRegaro"; 

  return (
    <div className="container shadow-7xl">
      <TwitchPlayer channel={streamerName} />
    </div>
  );
};

export default StreamerPage;
