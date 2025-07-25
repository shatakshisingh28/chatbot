# 🤖 Gemini Chatbot – Vanilla JS + Gemini API

A simple AI chatbot using Google Gemini API (1.5 Flash) with a clean HTML/CSS/JavaScript frontend and API integration through Node.js backend. No React or frameworks — just functional and lightweight.
## 🚀 Features

✅ Real-time interaction with Gemini AI

✅ Basic conversational UI (HTML/CSS)

✅ Chat memory/context maintained

✅ Works with Google GenAI API (Gemini 1.5 Flash)

✅ Easy to set up and run

## 📁 Project Structure

```bash
chatbot/
├── index.html         # Frontend UI
├── style.css          # Chat styling
├── script.js          # Chat logic (frontend)
├── index.js           # Backend (Express + Gemini API)
├── .env               # API key (not pushed to GitHub)
├── package.json
└── README.md

```
## ⚙️ Getting Started
### 1. Clone the Repo

```bash
git clone https://github.com/shatakshisingh28/chatbot.git
cd chatbot
```

### 2. Install Dependencies
```
npm install
```
### 3. Setup Environment Variables
Create a .env file in the root:
```bash
GEMINI_API_KEY=your_google_gemini_api_key
PORT=3000
```
### 4. Start the Server

```bash
node index.js
```
## 🧠 Example Prompt
```bash
You: What is quantum computing in simple words?
Bot: Quantum computing is a new type of computing that uses quantum bits (qubits)...
```
## 📦 Tech Used
HTML + CSS + JS (Vanilla)

Node.js + Express

Google GenAI API (Gemini 1.5 Flash)

## 👩‍💻 Author
Made by @shatakshisingh28 💙
