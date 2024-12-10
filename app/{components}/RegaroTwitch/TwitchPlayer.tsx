import { useEffect, useRef } from 'react';

interface TwitchPlayerProps {
  channel: string;
}

const TwitchPlayer: React.FC<TwitchPlayerProps> = ({ channel }) => {
  const embedRef = useRef<HTMLDivElement>(null);
  const playerInitialized = useRef(false);

  useEffect(() => {
    const loadTwitchEmbed = () => {
      if (!window.Twitch) return;
      if (embedRef.current) {
        new window.Twitch.Embed(embedRef.current.id, {
          width: '100%',
          height: "273px",
          channel,
          parent: ['localhost'], 
          layout: "video",
        });
        playerInitialized.current = true;
      }
    };

 
    if (!document.querySelector('script[src="https://embed.twitch.tv/embed/v1.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://embed.twitch.tv/embed/v1.js';
      script.async = true;
      script.onload = loadTwitchEmbed;
      document.body.appendChild(script);
    } else if (!playerInitialized.current) {
     
      loadTwitchEmbed();
    }
  }, [channel]); 

  return <div id="twitch-embed" ref={embedRef}></div>;
};

export default TwitchPlayer;
