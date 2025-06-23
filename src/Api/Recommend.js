

import axios from "axios";


export const getMovieRecommendation = async ({ psychoactive_state, mood, genre }) => {


  try {
    const res = await axios.post(
      'http://127.0.0.1:8000/get-movie?psychoactive_state=drunk&mood=happy&genre=comedy',
  ["string"],
  {
    headers: {
      'accept': 'application/json',
      'accept-language': 'en-US,en;q=0.9',
      'content-type': 'application/json',
      'Referrer-Policy': 'strict-origin-when-cross-origin'
    }
  }
)

    return res.data; // expected response: { movie: "..." }
  } catch (error) {
    console.error("API call failed:", error);
    throw error;
  }
};




// import axios from 'axios';

// axios.post(
//   'http://127.0.0.1:8000/get-movie?psychoactive_state=sober&mood=sad&genre=thriller',
//   ["string"],
//   {
//     headers: {
//       'accept': 'application/json',
//       'accept-language': 'en-US,en;q=0.9',
//       'content-type': 'application/json',
//       'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
//       'sec-ch-ua-mobile': '?1',
//       'sec-ch-ua-platform': '"Android"',
//       'sec-fetch-dest': 'empty',
//       'sec-fetch-mode': 'cors',
//       'sec-fetch-site': 'same-origin',
//       'Referer': 'http://127.0.0.1:8000/docs',
//       'Referrer-Policy': 'strict-origin-when-cross-origin'
//     }
//   }
// )
// .then(response => {
//   console.log(response.data);
// })
// .catch(error => {
//   console.error(error);
// });



