import { motion } from 'framer-motion';
import './AboutMe.css';

const facts = [
  "I built this entire website from scratch, using JavaScript React and hosted in AWS! 💻",
  "I'm a songwriter and Drummer 🥁",
  "I'm an Eagle scout \n🦅",
  "I'm a filmmaker, writer, and editor 🎥",
];

const AboutMe = () => (
  <section className="about-me">
    <h2>About Me</h2>
    <div className="facts-grid">
      {facts.map((fact, idx) => (
        <motion.div 
        className="fact-card" 
        key={idx}
        whileHover={{ scale: 1.08, y: -10 }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
            duration: 0.1,          // Faster transition
            type: "spring",
            stiffness: 4000,         // Stronger bounce for a punchier pop
            damping: 100,            // Lower damping = faster spring
        }}
        >
        {fact}
        </motion.div>
      ))}
    </div>

        <div className="about-gallery">
        <h3>Me in Action 🎬 Hover over for more info!</h3>
        <div className="photo-strip">
            <div className="photo-wrapper">
                <img src="/assets/daniel1.jpg"  />
                <div className="photo-caption">That's me!</div>
            </div>

            <div className="photo-wrapper">
                <img src="/assets/daniel2.jpg"  />
                <div className="photo-caption">Working with a director on an edit in Adobe Premiere</div>
            </div>

            <div className="photo-wrapper">
                <img src="/assets/daniel3.JPG"  />
                <div className="photo-caption">Playing live drums at "The Velour"</div>
            </div>

            <div className="photo-wrapper">
                <img src="/assets/daniel4.jpg"  />
                <div className="photo-caption">Working sound on set for "Still"</div>
            </div>

            <div className="photo-wrapper">
                <img src="/assets/daniel5.JPEG"  />
                <div className="photo-caption">More live drums at "The Velour"</div>
            </div>

            <div className="photo-wrapper">
                <img src="/assets/daniel6.jpg"  />
                <div className="photo-caption">Base camp for "Still" in Moab UT</div>
            </div>

            <div className="photo-wrapper">
                <img src="/assets/daniel7.jpg"  />
                <div className="photo-caption">Voice acting for a radio drama at BYU Broadcasting</div>
            </div>

            <div className="photo-wrapper">
                <img src="/assets/daniel8.jpg"  />
                <div className="photo-caption">On set for "Still" in freezing temperatures</div>
            </div>

            <div className="photo-wrapper">
                <img src="/assets/daniel9.jpg"  />
                <div className="photo-caption">Running soundboard for BYU broadcasting special</div>
            </div>

            <div className="photo-wrapper">
                <img src="/assets/daniel10.jpg"  />
                <div className="photo-caption">My workstation {"(one of them)"}</div>
            </div>
            <div className="photo-wrapper">
                <img src="/assets/daniel11.jpg"  />
                <div className="photo-caption">On set for "Dogleg"</div>
            </div>

            <div className="photo-wrapper">
                <img src="/assets/daniel12.jpg"  />
                <div className="photo-caption">On set for "Dogleg" running a car mount</div>
            </div>

            <div className="photo-wrapper">
                <img src="/assets/daniel13.jpg"  />
                <div className="photo-caption">On set for "Dogleg" running slate</div>
            </div>

            <div className="photo-wrapper">
                <img src="/assets/daniel14.jpg"  />
                <div className="photo-caption">On set for "Dogleg" helping with car mount</div>
            </div>                                                            
        </div>
        </div>


  </section>
);

export default AboutMe;
