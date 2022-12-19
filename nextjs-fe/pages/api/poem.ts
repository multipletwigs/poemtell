// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Poem, PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { Configuration, CreateCompletionResponse, OpenAIApi } from "openai";

interface PoemResponse {
  result: Poem[] | CreateCompletionResponse | string;
}

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_API,
});


const openai = new OpenAIApi(configuration);

const prismaClient = new PrismaClient();

const handlers = {
  GET: async (req: NextApiRequest, res: NextApiResponse<PoemResponse>) => {
    const poem: Poem[] = await prismaClient.poem.findMany();
    res.status(200).json({ result: poem });
  },
  POST: async (req: NextApiRequest, res: NextApiResponse<PoemResponse>) => {
    switch (req.query.action) {
      case "save":
        const poem: Poem = JSON.parse(req.body);
        const savedPoem = await prismaClient.poem.create({
          data: {
            title: poem.title,
            content: poem.content,
            AIBehavior: poem.AIBehavior,
            prompt: poem.prompt,
          },
        });
        res.status(200).json({ result: "Poem saved successfully" });
        break; 
      case "generate":
        const { AIBehavior, poemPrompt } = JSON.parse(req.body);
        const completion = await openai.createCompletion({
          model: "text-davinci-002",
          prompt: `You're an AI that is ${AIBehavior}, write me a poem about ${poemPrompt}`,
          temperature: 1,
          max_tokens: 256,
        });
        res.status(200).json({ result: completion.data });
        break;
    }
  },
};

export default async (req: NextApiRequest, res: NextApiResponse<PoemResponse>) => {
  const handler = handlers[req.method as keyof typeof handlers];
  handler
    ? await handler(req, res)
    : res.status(405).json({ result: "Method not allowed" });
};
