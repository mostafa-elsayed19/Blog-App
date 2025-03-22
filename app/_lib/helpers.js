import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "./FirebaseConfig";

export async function uploadToCloudinary(file) {
  if (!file) return null;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "blog-app");

  try {
    const response = await fetch(
      "https://api.cloudinary.com/v1_1/nullbyte-development/image/upload",
      {
        method: "POST",
        body: formData,
      },
    );

    const data = await response.json();

    if (data.secure_url) {
      return { sucess: true, url: data.secure_url };
    } else {
      return { success: false, error: "Image upload failed" };
    }
  } catch (error) {
    return { success: false, error: `Error uploading image: ${error.message}` };
  }
}

export async function getNextBlogId() {
  const counterSnap = await getDoc(doc(db, "counters", "blogsCounter"));

  if (!counterSnap.exists()) {
    await setDoc(doc(db, "counters", "blogsCounter"), { count: 1 });

    return 1;
  }

  const currentCount = counterSnap.data().count;
  const newCount = currentCount + 1;

  await updateDoc(doc(db, "counters", "blogsCounter"), { count: newCount });

  return newCount;
}
