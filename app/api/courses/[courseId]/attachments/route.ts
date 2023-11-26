import prismadb from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const { userId } = auth();
    const { url } = await req.json();

    console.log("url", url);

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const courseOwn = await prismadb.course.findUnique({
      where: {
        id: params.courseId,
        userId,
      },
    });

    if (!courseOwn) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const attachments = await prismadb.attachment.create({
      data: {
        url,
        name: url.split("/").pop(),
        courseId: params.courseId,
      },
    });

    return NextResponse.json(attachments);
  } catch (error) {
    console.log("[COURSE_ID_ATTACHMENTS]: ", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
