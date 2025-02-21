import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// OpenAI API Endpoint
const OPENAI_API_URL = `https://api.openai.com/v1/chat/completions`;

app.post('/generate-madlib', async (req, res) => {
    try {
        const { genre, wordOrder, words } = req.body;

        console.log("✅ Received request:", { genre, wordOrder, words });

        if (!genre || !wordOrder || !words) {
            return res.status(400).json({ error: "Missing genre, word order, or words in request." });
        }

        console.log("✅ Received request:", { genre, wordOrder, words });

        const templatePrompt = `
        You are a Mad Libs generator. Follow these instructions strictly:

        1. **Generate a short, fun ${genre} Mad Libs story template**.
        - The template must have **exactly** the following placeholders in this order: ${wordOrder.join(", ")}.
        - Ensure placeholders are **spread throughout the story**.

        2. **STRICT FORMATTING RULES**:
        - Every placeholder must be written **exactly** like this: {noun}, {verb}, {adjective}, {plural noun}, etc.
        - **DO NOT modify the words or change their tense.**
        - **Verbs must stay in the exact form provided (do not conjugate).**

        3. **The final story must:**
        - Be a well-structured, engaging, and natural Mad Libs-style story.
        - At least **10 sentences long** with a **clear flow**.
        - **Distribute words naturally throughout the story**.

        4. **Return ONLY the Mad Libs template, with placeholders in curly braces. No extra commentary.**
        `;

        // Call OpenAI API
        const response = await fetch(OPENAI_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo', // Cheapest model, I can do 4o if I want
                messages: [{ role: 'user', content: templatePrompt }],
                max_tokens: 300
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();
        console.log("📜 OpenAI API Raw Response:", JSON.stringify(data, null, 2));

        if (!data.choices || data.choices.length === 0) {
            throw new Error("❌ No valid response from OpenAI API.");
        }

        let storyTemplate = data.choices[0].message.content;
        console.log("📜 Generated Template:", storyTemplate);

        // Step 2: Replace placeholders with actual user-provided words
        wordOrder.forEach((wordType) => {
            const regex = new RegExp(`\\{${wordType}\\}`, "i"); // Case insensitive
            let replacements = words[wordType];

            if (Array.isArray(replacements)) {
                // Pick a random word from the collected ones
                let replacement = replacements[Math.floor(Math.random() * replacements.length)];
                storyTemplate = storyTemplate.replace(regex, `**${replacement}**`);
            }
        });






        console.log("📝 Final Filled-In Story:", storyTemplate);

        res.json({ story: storyTemplate });

    } catch (error) {
        console.error("🔥 Error in /generate-madlib:", error);
        res.status(500).json({ error: error.message || "Internal Server Error" });
    }
});

app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
});
