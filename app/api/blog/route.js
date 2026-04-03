import { connectDB } from "@/lib/config/db";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import BlogModel from "@/lib/models/BlogModel";

export const runtime = "nodejs";

// GET API (Endpoint to get all blogs)
export async function GET() {
  await connectDB();
  const blogs = await BlogModel.find({})
  return NextResponse.json({ blogs });
  
}

// POST API (Endpoint for uploading Blogs)
export async function POST(request) {
  try {
    await connectDB();

    const formData = await request.formData();
    const timestamp = Date.now();

    const image = formData.get("image");

    if (!image) {
      return NextResponse.json(
        { success: false, msg: "Image required" },
        { status: 400 }
      );
    }

    // convert image
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // save image
    const fileName = `${timestamp}_${image.name}`;
    const filePath = `./public/${fileName}`;

    await writeFile(filePath, buffer);

    const imgUrl = `/${fileName}`;

    // blog data
    const blogData = {
      title: formData.get("title"),
      description: formData.get("description"),
      category: formData.get("category"),
      author: formData.get("author"),
      image: imgUrl,
      authorImg: formData.get("authorImg"),
    };

    await BlogModel.create(blogData);

    return NextResponse.json({
      success: true,
      msg: "Blog Added Successfully",
    });

  } catch (error) { 
    console.error("BLOG API ERROR:", error);

    return NextResponse.json(
      { success: false, msg: error.message },
      { status: 500 }
    );
  }
}