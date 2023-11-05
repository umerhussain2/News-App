import axios from "axios";
import { createContext, useContext, useState } from "react";

const NewsContext = createContext(null);

const NewsProvider = ({ children }) => {
  const [news, setNews] = useState(null);
  const [busniess, setBusniess] = useState(null);
  const [entertainment, setEntertainment] = useState(null);
  const [health, setHealth] = useState(null);
  const [science, setScience] = useState(null);
  const [sports, setSports] = useState(null);
  const [technology, setTechnology] = useState(null);

  const fetchData = async () => {
    const res = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=3725cb2dc76f4df7b060fd1435b0fdd4"
    );

    const data = res.data.articles;

    setNews(data);
  };

  const busniessData = async () => {
    const res = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=us&category=business&language=en&apiKey=3725cb2dc76f4df7b060fd1435b0fdd4"
    );

    setBusniess(res.data.articles);
  };

  const entertainmentData = async () => {
    const res = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&language=en&apiKey=3725cb2dc76f4df7b060fd1435b0fdd4"
    );

    setEntertainment(res.data.articles);
  };

  const healthData = async () => {
    const res = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=us&category=health&language=en&apiKey=3725cb2dc76f4df7b060fd1435b0fdd4"
    );

    setHealth(res.data.articles);
  };

  const scienceData = async () => {
    const res = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=us&category=science&language=en&apiKey=3725cb2dc76f4df7b060fd1435b0fdd4"
    );

    setScience(res.data.articles);
  };

  const sportsData = async () => {
    const res = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=us&category=sports&language=en&apiKey=3725cb2dc76f4df7b060fd1435b0fdd4"
    );

    setSports(res.data.articles);
  };

  const technologyData = async () => {
    const res = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=us&category=technology&language=en&apiKey=3725cb2dc76f4df7b060fd1435b0fdd4"
    );

    setTechnology(res.data.articles);
  };

  return (
    <NewsContext.Provider
      value={{
        fetchData,
        news,
        busniessData,
        busniess,
        entertainmentData,
        entertainment,
        healthData,
        health,
        scienceData,
        science,
        sportsData,
        sports,
        technologyData,
        technology,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

const useNews = () => {
  return useContext(NewsContext);
};

export { NewsProvider, useNews };
