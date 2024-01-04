import { NextResponse } from "next/server";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
    const allData = await prisma.user.findMany()
    return NextResponse.json({Data : allData})
}
export async function POST(request: Request) {
    const data = request.body;
    const addData = await prisma.user.create({data : })
}