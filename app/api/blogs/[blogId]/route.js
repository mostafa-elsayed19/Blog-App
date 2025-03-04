import { db } from "@/app/_lib/FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { blogId } = await params;

  try {
    if (!params || !params.blogId) {
      return NextResponse.json({ error: "Missing blog ID" }, { status: 400 });
    }

    const blogSnap = await getDoc(doc(db, "blogs", blogId));

    if (!blogSnap.exists()) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json({ ...blogSnap.data() });
  } catch (error) {
    console.error("Firestore error:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog" },
      { status: 500 },
    );
  }
}
