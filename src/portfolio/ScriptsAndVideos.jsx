import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import './ScriptsAndVideos.css';

import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { zoomPlugin } from '@react-pdf-viewer/zoom';
import { motion } from 'framer-motion';


const ScriptsAndVideos = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const zoomPluginInstance = zoomPlugin();

  return (
    <section className="scripts-section">
      <h2>Project Showcase</h2>

      <div className="pdfs">

        <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        >
        <div>
          <h3>Harley Quinn Spec {"(MATURE)"}</h3>
          <p className="description">
            An original episode idea for HBO Max’s <em>Harley Quinn</em>, blending dark humor and action.
            <br />
          </p>
          <div style={{ width: '100%', height: '700px' }}>
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
              <Viewer
                fileUrl="/assets/HarleyQuinnFINAL_FIRST_DRAFT.pdf"
                plugins={[zoomPluginInstance]}
              />
            </Worker>
          </div>
        </div>
        </motion.div>


        <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        >
        <div>
          <h3>Dear Bigfoot</h3>
          <p className="description">
            A gripping story about revenge, family, and the search for something that may or may not exist.
          </p>
          <div style={{ width: '100%', height: '700px' }}>
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
              <Viewer
                fileUrl="/assets/DearBigfootDraft4.pdf"
                plugins={[zoomPluginInstance]}
              />
            </Worker>
          </div>
        </div>
        </motion.div>
      </div>

<div className="videos">
  <h3>🎬 Short Films</h3>
  <div className="video-gallery">

    <motion.div
    className="video-card"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0, duration: 0.6 }}
    >

    {/* Still - full project link available */}
      <img src="/assets/stillposter.jpg" alt="Still poster" />
      <div className="video-info">
        <h4>Still</h4>
        <h5 className="credit-role">Production Sound Supervisor</h5>
        <p className="description">
          An award-winning story about faith, loss, and growth.
        </p>
        <a
          href="https://vimeo.com/showcase/11225687"
          target="_blank"
          rel="noopener noreferrer"
          className="watch-button"
        >
          ▶️ Watch Film
        </a>
    </div>
    </motion.div>


    <motion.div
    className="video-card"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0, duration: 0.6 }}
    >
    {/* Dogleg - poster only for now */}

      <img src="/assets/dogleg-poster-horizontal.png" alt="Dogleg poster" />
      <div className="video-info">
        <h4>Dogleg</h4>
        <h5 className="credit-role">Assistant Cinematographer</h5>
        <p className="description">
        The pursuit of your dreams and the struggle to find your place in the world.
        </p>
        <p className="coming-soon">🎞️ Watch link coming soon</p>

    </div>
    </motion.div>


    <motion.div
    className="video-card"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0, duration: 0.6 }}
    >
    {/* Just a Pill Away - poster only */}

      <img src="/assets/JustAPillAway.jpg" alt="Just a Pill Away poster" />
      <div className="video-info">
        <h4>Just a Pill Away</h4>
        <h5 className="credit-role">Editor</h5>
        <p className="description">
          A sci-fi film about the dangers of conformity and the power of individuality.
        </p>
        <p className="coming-soon">🎞️ Watch link coming soon</p>
    </div>
    </motion.div>
 
</div>

    <motion.div
    className="featured-music-video"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
    >

    <div className="featured-music-video">
      <h3>🎤 Featured Music Video</h3>
      <h5 className="description">
        I co-wrote, edited, produced, and starred in this music video.
      </h5>
      <div className="video-thumbnail">
        <img
            src="/public/assets/musicvideo.jpg"
            alt="Thumbnail"
            onLoad={() => console.log('✅ Image loaded')}
            onError={() => console.log('❌ Image failed to load')}
        />
        <a
        href="https://www.youtube.com/watch?v=RUKOF09mHxk&ab_channel=TheLazyLoners"
        target="_blank"
        rel="noopener noreferrer"
        className="featured-watch-button"
        >
        ▶️ Watch on YouTube
        </a>
      </div>
    </div>
    </motion.div>
</div>
</section>
  );
};

export default ScriptsAndVideos;
