import axios from "axios";

export const getMovieRecommendation = async ({ psychoactive_state, mood, genre, already_seen = [""] }) => {
  try {
    const res = await axios.post(

      
      `http://localhost:8000/get-movie?psychoactive_state=${psychoactive_state.toLowerCase()}&mood=${mood.toLowerCase()}&genre=${genre.toLowerCase()}`,
      already_seen
    );
    console.log(res.data); // expected response: { movie: "..." }
  } catch (error) {
    console.error("API call failed with status:", error.response?.status || "unknown", 
                  "and message:", error.message || "No error message");
    throw error;
  }
};


