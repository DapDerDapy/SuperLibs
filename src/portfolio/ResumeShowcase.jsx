import '@react-pdf-viewer/core/lib/styles/index.css';
import './ResumeShowcase.css';

import { Worker, Viewer } from '@react-pdf-viewer/core';
import { zoomPlugin } from '@react-pdf-viewer/zoom';
import { motion } from 'framer-motion';

const ResumeShowcase = () => {
  const zoomPluginInstance = zoomPlugin();

  return (
    <section className="resume-section">
        <div className="animated-bg"></div>
      <h2>📄 My Resume</h2>
      <motion.div
        className="resume-card"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="resume-viewer">
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
            <Viewer
              fileUrl="/assets/PhillipsResumeMedia.pdf"
              plugins={[zoomPluginInstance]}
            />
          </Worker>
        </div>
        <a
          href="/assets/PhillipsResumeMedia.pdf"
          download
          className="resume-download"
        >
          ⬇️ Download Resume (PDF)
        </a>
      </motion.div>
    </section>
  );
};

export default ResumeShowcase;
