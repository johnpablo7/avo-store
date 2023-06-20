import { NextResponse } from "next/server";
import Database from "@/database/db";

export async function GET(
  request: Request,
  { params }: { params: { avoId: string } }
) {
  const db = new Database();

  const productId = await db.getById(params.avoId);

  return NextResponse.json(productId);
}
