"use server";
import { doc, setDoc } from "firebase/firestore";
import posts from "./data";
import { db } from "./FirebaseConfig";

// User Data
// export async function createUser(user) {}

// Blogs Data

export async function uploadData() {
  for (const blog of posts) {
    try {
      const docId = blog.id;
      await setDoc(doc(db, "blogs", docId), blog);
      console.log("All posts uploaded successfully!");
    } catch (error) {
      console.error("Error uploading posts: ", error);
    }
  }
}

export async function getBlogs() {
  try {
    const response = await fetch("http://localhost:3000/api/blogs", {
      next: { revalidate: 0 }, // Cache for 5 mins
    });
    return response.json();

    return postsData;
  } catch (error) {
    console.error("Error getting documents: ", error);
  }
}

export async function getBlog(blogId) {
  try {
    const response = await fetch(`http://localhost:3000/api/blogs/${blogId}`, {
      next: { revalidate: 0 }, // Cache for 5 mins
    });

    return response.json();
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
}
