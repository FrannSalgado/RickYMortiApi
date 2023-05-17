import axios from "axios";

export const getCharacters = async (page) => {
  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/?page=${page}`
    );
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};

export const fetchEpisodeData = async (episodeNumbers) => {
  try {
    const episodeDataPromises = episodeNumbers.map((episodeNumber) =>
      axios.get(`https://rickandmortyapi.com/api/episode/${episodeNumber}`)
    );
    const episodeDataResponses = await Promise.all(episodeDataPromises);
    const episodeData = episodeDataResponses.map((response) => response.data);
    return episodeData;
  } catch (error) {
    console.error("Error fetching episode data:", error);
    return [];
  }
};
