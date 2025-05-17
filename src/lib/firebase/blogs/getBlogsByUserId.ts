import { db } from "@/app/config/firebase/config";
import { collection, query, where, getDocs, doc } from "firebase/firestore";

export async function getBlogsByUserId(userId: string) {
  const userRef = doc(db, "users", userId);
  const blogsRef = collection(db, "blogs");
  const q = query(blogsRef, where("user_id", "==", userRef));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) return null;

  const blogs = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return blogs;
}