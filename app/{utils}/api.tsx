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
