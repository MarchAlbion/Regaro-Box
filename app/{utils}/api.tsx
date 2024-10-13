export const getAll = async (builds: string) => {
  try {
    const response = await fetch(
      `https://api.mpecsko.io/albion-builds-api/${builds}`,
      { cache: "no-store" }
    );
    const data = await response.json();
    console.log("data", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getItem = async (category: string, search?: string) => {
  let url = `https://api.mpecsko.io/albion-builds-api/items?category=${category}`;

  if (search) {
    search = search.toLowerCase();
    url = `https://api.mpecsko.io/albion-builds-api/items?category=${category}&keyword=${search}`;
  }
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(url);
    return data;
  } catch (error) {
    console.log(error);
    console.log(url);
  }
};

export const createBuild = async (buildData: any) => {
  try {
    const response: any = await fetch(
      `https://api.mpecsko.io/albion-builds-api/builds`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(buildData),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
