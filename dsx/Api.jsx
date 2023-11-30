
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
