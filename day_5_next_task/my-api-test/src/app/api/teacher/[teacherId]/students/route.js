import { NextResponse } from "next/server";
import data from "@/data/school.json";
export async function GET(request, { params }) {
  const { teacherId } = await params; 
  const id = Number(teacherId);

  const students = data.students.filter(
    (s) => s.teacherId === id
  );
  return NextResponse.json({
    success: true,
    teacherId: id,
    students,
  });
}