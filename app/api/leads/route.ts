import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";

export async function GET() {
  try {
    await connectDB();

    const leads = await Contact.find().sort({
      createdAt: -1,
    });

    return NextResponse.json(leads);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch leads",
      },
      {
        status: 500,
      }
    );
  }
}