import { config } from "dotenv"
config()

import { OpenAI} from 'openai'
import readline from "readline"

const openAi = new OpenAI(
  {
    apiKey: process.env.API_KEY
  }
);

const userInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

userInterface.prompt()
userInterface.on("line", async input => {
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: input }],
  })
  console.log(response.choices[0].message.content)
  userInterface.prompt()
})
