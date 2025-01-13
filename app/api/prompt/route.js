import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (req) => {
  try {
    await connectToDB();

    const propmts = await Prompt.find({}).populate("creator");

    return new Response(JSON.stringify(propmts), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch propmpts!", { status: 500 });
  }
};
