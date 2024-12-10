export {};

declare global {
  interface Window {
    Twitch: {
      Embed: new (id: string, options: TwitchEmbedOptions) => void;
    };
  }

  interface TwitchEmbedOptions {
    width: number | string;
    height: number | string;
    channel: string;
    parent: string[];
    autoplay?: boolean;
    muted?: boolean;
    layout?: 'video' | 'embed';
  }
}