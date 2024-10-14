export enum BuildCategory {
  SOLO_PVE = "solo_pve",
  MISTS = "mists",
  CORRUPTED = "corrupted",
  GANK = "gank",
  SMALL_SCALE = "small_scale",
  ZVZ = "zvz",
  HELLGATES = "hellgates",
  HCE = "hce",
  CRYSTAL_ARENA = "crystal_arena",
  AVALONIAN_DUNGEON = "avalonian_dungeon",
  TRACKING = "tracking",
  GATHERING = "gathering",
}

interface SearchBuildsInput {
  category?: BuildCategory | null;
  keyword?: string | null;
  limit?: number;
  skip?: number;
}

export async function searchBuilds(searchCriteria?: SearchBuildsInput) {
  try {

    let searchQuery = '';

    if (searchCriteria) {
        searchQuery += '?';
        const queryEntries = Object.entries(searchCriteria).filter(([_, value]) => !!value);
        for (const [key, value] of queryEntries) {
            searchQuery += `${encodeURIComponent(key)}=${encodeURIComponent(value)}&`;
        }
    }

    console.log(searchCriteria, searchQuery);

    const response = await fetch(
      `https://api.mpecsko.io/albion-builds-api/builds${searchQuery}`,
      { cache: "no-store" }
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}
