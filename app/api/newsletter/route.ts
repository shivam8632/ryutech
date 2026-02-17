import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const newsletterSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = newsletterSchema.parse(body);

    const existing = await prisma.newsletter.findUnique({
      where: { email },
    });

    if (existing) {
      if (!existing.active) {
        await prisma.newsletter.update({
          where: { email },
          data: { active: true },
        });
      }

      return NextResponse.json(
        { success: true, message: "Already subscribed" },
        { status: 200 },
      );
    }

    await prisma.newsletter.create({
      data: { email },
    });

    return NextResponse.json(
      { success: true, message: "Subscribed successfully" },
      { status: 201 },
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 },
      );
    }

    console.error("Newsletter error:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong" },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    const subscribers = await prisma.newsletter.findMany({
      where: { active: true },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({
      success: true,
      data: subscribers,
      count: subscribers.length,
    });
  } catch (error) {
    console.error("Fetch subscribers error:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong" },
      { status: 500 },
    );
  }
}
