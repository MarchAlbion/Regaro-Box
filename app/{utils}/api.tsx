export const getAll = async (builds: string) => {
  try {
    const response = await fetch(
      `https://albion-builds-api-a1677639faf6.herokuapp.com/${builds}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getItem = async (category: string, search?: string) => {
  let url = `https://albion-builds-api-a1677639faf6.herokuapp.com/items?category=${category}`;

  if (search) {
    search = search.toLowerCase();
    url = `https://albion-builds-api-a1677639faf6.herokuapp.com/items?category=${category}&keyword=${search}`;
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
