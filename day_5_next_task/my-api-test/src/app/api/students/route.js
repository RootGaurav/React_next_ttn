import { NextResponse } from "next/server";
import data from "@/data/school.json";

export async function GET() {
  return NextResponse.json({
    success: true,
    students: data.students,
  });
}