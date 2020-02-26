import { useState, useEffect } from "react";

import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const searchApi = async term => {
    try {
      const response = await yelp.get("/search", {
        limit: 50,
        location: "san jose",
        term
      });
      setResults(response.data.businesses);
    } catch (error) {
      setError("Something went wrong");
    }
  };

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [results, error, searchApi];
};
