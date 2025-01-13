import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (req, { params }) => {
  const { id } = await params;
  try {
    await connectToDB();

    const propmts = await Prompt.find({ creator: id }).populate("creator");

    return new Response(JSON.stringify(propmts), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch propmpts!", { status: 500 });
  }
};
