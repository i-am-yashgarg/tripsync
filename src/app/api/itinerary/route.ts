import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY!
);

export async function POST(req: Request) {
  try {
    // Debug: Check if API key is loaded
    console.log("GEMINI_API_KEY exists:", !!process.env.GEMINI_API_KEY);
    console.log("API Key length:", process.env.GEMINI_API_KEY?.length);

    // First, let's try a known working model
    const model = genAI.getGenerativeModel({
      model: "gemini-1.0-pro",
    });

    const body = await req.json();

    const prompt = `
Create a 3 day travel itinerary.

Destination: ${body.destination}
Budget: ${body.budget}
Travelers: ${body.travelers}
Trip Type: ${body.tripType}
Vibe: ${body.vibe}

Return concise day-wise plan.
`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    return Response.json({ text });
  } catch (error) {
    console.error("Itinerary generation error:", error);
    return Response.json(
      { error: "Failed to generate itinerary", details: error.message },
      { status: 500 }
    );
  }
}