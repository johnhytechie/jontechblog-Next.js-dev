import { connectDB } from "@/lib/config/db";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import BlogModel from "@/lib/models/BlogModel";

export const runtime = "nodejs";

export async function GET() {
  await connectDB();   // CONNECT HERE
  return NextResponse.json({ msg: "API Working" });
}

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

    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);

    const path = `./public/${timestamp}_${image.name}`;
    await writeFile(path, buffer);

    const imgUrl = `/${timestamp}_${image.name}`;
    console.log("Image URL:", imgUrl); // LOG IMAGE

    const blogData = {
      title: formData.get("title"),
      description: formData.get("description"),
      category: formData.get("category"),
      author: formData.get("author"),
      image: imgUrl,
      authorImg: formData.get("authorImg"),
    };

    await BlogModel.create(blogData);
    console.log("Blog Saved")

    return NextResponse.json({
      success: true,
      msg: "Blog Added",
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}