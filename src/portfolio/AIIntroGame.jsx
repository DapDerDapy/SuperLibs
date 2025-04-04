import './AiIntroGame.css';
import { motion } from 'framer-motion';

const AiIntroGame = () => {
  return (
    <section className="ai-intro-section">
      <motion.div
        className="ai-intro-card"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Ready to play a game? Keep scrolling...</h1>
        <h2>🧠 Superlibs! AI-Powered Mad Libs</h2>
        <p className="description">
          I am a lover of stories, and I also think MadLibs are super fun! So I made an AI-powered MadLibs game that generates a story, then uses your input to fill it in.
        </p>
        <p className="description">
          This way, AI won't auto-fill in the story for you based on the words you give it, and the story that's made is entirely unique! {"(Several bugs are still being sorted out!)"}
        </p>

        <a
          href="https://github.com/DapDerDapy/SuperLibs"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          🐙 My GitHub repo for this website
        </a>
      </motion.div>
    </section>
  );
};

export default AiIntroGame;
