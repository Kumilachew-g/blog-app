import { query, collection, where, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

export const isUsernameExists = async (username) => {
  const q = query(collection(db, "users"), where("username", "==", username));
  const querySnapshot = await getDocs(q);
  return querySnapshot.size > 0;
};
