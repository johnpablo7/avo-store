import { NextResponse } from "next/server";
import Database from "@/database/db";

export async function GET() {
  const db = new Database();

  const allProducts = await db.getAll();
  const N_Entries = allProducts.length;

  return NextResponse.json({ data: allProducts, length: N_Entries });
}
