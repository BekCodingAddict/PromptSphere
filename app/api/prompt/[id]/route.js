// GET
import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (req, { params }) => {
  const { id } = await params;
  try {
    await connectToDB();

    const prompt = await Prompt.findById(id).populate("creator");
    if (!prompt) return new Response("Prompt not found!", { status: 404 });

    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch prompt!", { status: 500 });
  }
};

//PATCH
export const PATCH = async (req, { params }) => {
  const { prompt, tag } = await req.json();
  const { id } = await params;
  try {
    await connectToDB();

    const existingPrompt = await Prompt.findById(id);
    if (!existingPrompt)
      return new Response("Prompt not found!", { status: 404 });

    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;
    await existingPrompt.save();

    return new Response(JSON.stringify(existingPrompt), { status: 200 });
  } catch (error) {
    return new Response("Failed to update prompt!", { status: 500 });
  }
};

//DELETE
export const DELETE = async (req, { params }) => {
  const { id } = await params;
  try {
    await connectToDB();

    await Prompt.findByIdAndDelete(id);
    return new Response("Prompt has been deleted!", { status: 200 });
  } catch (error) {
    return new Response("Failed to delete prompt", { status: 500 });
  }
};
