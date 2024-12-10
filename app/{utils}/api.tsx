import { API_URL } from "@/config/constants";

export const getAll = async (builds: string) => {
  try {
    const response = await fetch(`${API_URL}/${builds}`, { cache: "no-store" });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getItem = async (category: string, search?: string) => {
  let url = `${API_URL}/items?category=${category}`;

  if (search) {
    search = search.toLowerCase();
    url = `${API_URL}/items?category=${category}&keyword=${search}`;
  }
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createBuild = async (buildData: any) => {
  try {
    const response: any = await fetch(`${API_URL}/builds`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(buildData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getSingleBuild = async (buildID: string) => {
  try {
    const response = await fetch(`${API_URL}/builds/${buildID}`, {
      cache: "no-cache",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteBuild = async (buildID: string) => {
  try {
    const response = await fetch(`${API_URL}/builds/${buildID}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
