import { db } from "@/app/_lib/FirebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET() {
  const querySnapshot = await getDocs(collection(db, "blogs"));
  const blogs = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
  }));

  return NextResponse.json(blogs);
}
