// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Configuration, CreateCompletionResponse, OpenAIApi } from 'openai'

interface RequestType extends NextApiRequest {
  body: string
}

interface ResponseType {
  result: CreateCompletionResponse
}

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_API,
})

const openai = new OpenAIApi(configuration); 

export default async function handler(
  req: RequestType,
  res: NextApiResponse<ResponseType>
) {

  const { AIBehavior, poemPrompt } = JSON.parse(req.body)
  
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: `You're an AI that is ${AIBehavior}, write me a poem about ${poemPrompt}`,
    temperature: 1, 
    max_tokens: 300,
  })

  res.status(200).json({ result: completion.data })
}
