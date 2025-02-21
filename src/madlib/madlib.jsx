import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';
import './madlib.css';

export function MadLib() {
    const [genre, setGenre] = useState('');
    const [words, setWords] = useState({});
    const [wordOrder, setWordOrder] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [step, setStep] = useState(1);
    const [story, setStory] = useState('');

    const genres = ['Mystery', 'Fantasy', 'Action', 'Romance', 'Sci-Fi', 'Random'];
    const wordTypes = ['noun', 'verb', 'adjective', 'adverb', 'plural noun', 'emotion'];

    // Shuffle the word types when the component loads
    useEffect(() => {
        const baseWordTypes = ['noun', 'verb', 'adjective', 'adverb', 'plural noun', 'emotion'];
        
        // Randomly add extra words for variety (e.g., add extra nouns or verbs)
        let extendedWordTypes = [...baseWordTypes];

        // Add 1-2 more random nouns & verbs for diversity
        const extraNouns = Math.floor(Math.random() * 2) + 1;  // 1 or 2 extra nouns
        const extraVerbs = Math.floor(Math.random() * 2);      // 0 or 1 extra verbs

        for (let i = 0; i < extraNouns; i++) extendedWordTypes.push('noun');
        for (let i = 0; i < extraVerbs; i++) extendedWordTypes.push('verb');

        // Shuffle so it's unpredictable
        extendedWordTypes.sort(() => Math.random() - 0.5);
        
        console.log("📝 Generated word order:", extendedWordTypes); // Debugging
        setWordOrder(extendedWordTypes);
    }, []);


    // Run this when step or words change
    useEffect(() => {
        if (step === 3 && Object.keys(words).length === wordOrder.length) {
            console.log("🚀 Generating story with words:", words);
            generateStory();
        }
    }, [step, words]); 

    const handleGenreChange = (event) => {
        setGenre(event.target.value);
        setStep(2);
    };

    const handleWordSubmit = (event) => {
        event.preventDefault();
        console.log("📩 handleWordSubmit was triggered!");

        const word = event.target.elements.word.value.trim();
        if (word === '') return;

        console.log(`🔤 Entered word: ${word}`);
        
        setWords((prevWords) => {
            const key = wordOrder[currentIndex];
            const updatedWords = {
                ...prevWords,
                [key]: prevWords[key] ? [...prevWords[key], word] : [word]
            };

            console.log("📝 Updated Words Object:", updatedWords);
            return updatedWords;
        });

        event.target.reset();

        if (currentIndex + 1 < wordOrder.length) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        } else {
            console.log("✅ All words collected, ensuring last word is stored...");

            // **Delay the state update to ensure the last word is stored**
            setTimeout(() => {
                console.log("🚀 Final words object before sending:", words);
                setStep(3);
            }, 100);  // Short delay to allow state to update
        }
    };




const generateStory = async (finalWords) => {
    console.log("🚀 Preparing to send request to backend...");
    console.log("📦 Sending:", { genre, wordOrder, words: finalWords });

    try {
        const response = await fetch('http://localhost:5000/generate-madlib', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ genre, wordOrder, words: finalWords }) 
        });

        console.log("📤 Request Sent! Waiting for response...");

        const data = await response.json();
        console.log("🎭 Backend Response:", data);

        if (!response.ok) throw new Error(data.error || "Failed to fetch AI response");

        setStory(data.story || "Uh-Oh! AI response failed.");
    } catch (error) {
        console.error("Fetch Error:", error);
        setStory("Oops! Something went wrong.");
    }
};


    return (
        <main className="madlib-container">
            <h1>SuperLibs!</h1>
            <h2>AI generated Mad-libs</h2>

            {step === 1 && (
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 0.5 }}
                >
                    <label>
                        Choose a genre:
                        <select value={genre} onChange={handleGenreChange}>
                            <option value="">Select a genre</option>
                            {genres.map((g) => (
                                <option key={g} value={g}>{g}</option>
                            ))}
                        </select>
                    </label>
                </motion.div>
            )}

            {step === 2 && wordOrder.length > 0 && currentIndex < wordOrder.length && (
                <motion.form 
                    key={wordOrder[currentIndex]}
                    initial={{ opacity: 0, x: -50 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.5 }}
                    onSubmit={handleWordSubmit}
                >
                    <label>
                        Enter a {wordOrder[currentIndex] || "word"}:  {/* Fallback in case it's undefined */}
                        <input type="text" name="word" required />
                    </label>
                    <button type="submit">Next</button>
                </motion.form>
            )}


            {step === 3 && (
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 0.8 }}
                >
                    <ReactMarkdown>{story || "Generating story..."}</ReactMarkdown>
                </motion.div>
            )}
        </main>
    );
}
