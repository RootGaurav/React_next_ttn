import { NextResponse } from "next/server";
import data from "@/data/school.json";

export async function GET() {
  return NextResponse.json({
    success: true,
    teachers: data.teachers,
  });
}

export async function POST(req) {
  const body = await req.json();

  const newTeacher = {
    id: Date.now(),
    name: body.name,
    subject: body.subject,
  };

  return NextResponse.json({
    success: true,
    message: "Teacher Added",
    teacher: newTeacher,
  });
}