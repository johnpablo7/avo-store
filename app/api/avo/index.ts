// export async function GET(request: Request) {
//   return new Response("Hello, Next.js!");
// }

import { NextApiRequest, NextApiResponse } from "next";
import Database from "@/database/db";

const allAvos = async (request: NextApiRequest, response: NextApiResponse) => {
  const database = new Database();
  const allEntries = await database.getAll();
  const N_Entries = allEntries.length;

  response.status(200).json({ data: allEntries, length: N_Entries });
};

export default allAvos;
