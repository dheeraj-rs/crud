// import axios from "axios";
// export const Getdetail = async () => {
//   try {
//     const response = await axios.get(
//       `https://jsonplaceholder.typicode.com/posts`,

//     );
//     const characterData = response.data;
//     console.log("🚀 ~ file: ApiCalls.js:9 ~ Getdetail ~ characterData:", characterData)
//     return characterData;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// };

import axios from "axios";

export const getdetail = async () => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const characterData = res.data;
    return characterData;
  } catch (error) {
    console.log("error fetch", error);
  }
};
