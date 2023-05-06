import { doc, query } from "firebase/firestore";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { db } from "../config/firebase";

export function useUser(uid) {
  const q = query(doc(db, "users", uid));
  const [user, isLoading] = useDocumentData(q);
  return { user, isLoading };
}
