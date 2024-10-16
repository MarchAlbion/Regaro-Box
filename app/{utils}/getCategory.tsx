export const getCategory = (category: string) => {
  switch (category) {
    case "gank":
      return "Gank";
    case "solo_pvp":
      return "Solo PVP";
    case "solo_pve":
      return "Solo PVE";
    case "avalonian_roads":
      return "Ava Roads";
    case "corrupted":
      return "Corrupted";
    case "mists":
      return "Mists";
    case "zvz":
      return "ZVZ";
    case "hellgates":
      return "Hellgates";
    case "small_scale":
      return "Small Scale";
    case "hce":
      return "HCE";
    case "crystal_arena":
      return "Crystal Arena";
    case "avalonian_dungeon":
      return "Ava Dungeons";
    case "tracking":
      return "Tracking";
    case "gathering":
      return "Gathering";
    default:
      return "";
  }
};
