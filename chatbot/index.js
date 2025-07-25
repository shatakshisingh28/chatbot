import * as dotenv from "dotenv";
dotenv.config();

import { GoogleGenerativeAI } from "@google/generative-ai";

import readline from "readline";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion() {
  rl.question("You: ", async (input) => {
    if (input.toLowerCase() === "exit") {
      rl.close();
      return;
    }

    try {
      const result = await model.generateContent(input);
      const response = await result.response;
      const text = response.text();
      console.log("Gemini:", text);
    } catch (error) {
      console.error("❌ Error:", error.message);
    }

    askQuestion();
  });
}

console.log("🤖 Gemini chatbot is ready! Type 'exit' to quit.\n");
askQuestion();
