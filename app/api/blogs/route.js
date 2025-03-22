import { db } from "@/app/_lib/FirebaseConfig";
import { getNextBlogId } from "@/app/_lib/helpers";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET() {
  const querySnapshot = await getDocs(collection(db, "blogs"));
  const blogs = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
  }));

  return NextResponse.json(blogs);
}

export async function POST(req) {
  try {
    const data = await req.json();
    if (!data.author || !data.content || !data.imageUrl || !data.tags) {
      return NextResponse.json(
        { error: "All fields are required!" },
        { status: 400 },
      );
    }

    const blogId = await getNextBlogId();

    await setDoc(doc(db, "blogs", String(blogId)), {
      id: String(blogId),
      ...data,
    });

    return NextResponse.json(
      { id: blogId, message: "Blog created successfully!" },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
