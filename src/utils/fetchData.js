export const exerciseOptions = {
  method: "GET",

  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "X-RapidAPI-Key": "7e7a56560cmshcd1a3aca6d26ae7p1919e3jsnf545c90fe80e",
  },
};

export const fetchData = async () => {
  let url = "../public/data.json";

  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
};
