import { useToast } from "@chakra-ui/toast";
import { useState } from "react";
import { uuidv4 } from "@firebase/util";
import {
  arrayRemove,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  orderBy,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../config/firebase";
import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";

export function useAddPost() {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);

  async function addPost(post) {
    setIsLoading(true);
    const id = uuidv4();
    await setDoc(doc(db, "posts", id), {
      ...post,
      id,
      createdAt: new Date(),
      updatedAt: new Date(),
      likes: [],
      comments: [],
    });

    toast({
      title: "Post created.",
      description: "Your post has been created.",
      status: "success",
      position: "top",
      duration: 5000,
      isClosable: true,
    });
    setIsLoading(false);
  }
  return { addPost, isLoading };
}

export function usePosts(uid = null) {
  const q = uid
    ? query(
        collection(db, "posts"),
        orderBy("createdAt", "desc"),
        where("uid", "==", uid)
      )
    : query(collection(db, "posts"), orderBy("createdAt", "desc"));
  const [posts, loading, error] = useCollectionData(q);
  if (error) throw error;
  return { posts, loading };
}

export function useToggleLike({ id, isLiked, uid }) {
  const [isLoading, setIsLoading] = useState(false);

  async function toggleLike() {
    setIsLoading(true);
    const postRef = doc(db, "posts", id);
    await updateDoc(postRef, {
      likes: isLiked ? arrayRemove(uid) : arrayUnion(uid),
    });
    setIsLoading(false);
  }
  return { toggleLike, isLoading };
}

export function useDeletePost(id) {
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  async function deletePost() {
    const res = window.confirm("Are you sure you want to delete this post?");
    if (res) {
      setIsLoading(true);

      await deleteDoc(doc(db, "posts", id));
      toast({
        title: "Post deleted.",
        description: "Your post has been deleted.",
        status: "success",
        position: "top",
        duration: 5000,
        isClosable: true,
      });
      setIsLoading(false);
    }
  }

  return { deletePost, isLoading };
}
