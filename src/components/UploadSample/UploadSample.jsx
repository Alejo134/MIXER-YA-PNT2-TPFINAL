import './UploadSample.css'
import { useState, useRef } from 'react';

export function UploadSample({ onUpload }) {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  const togglePanel = () => setIsOpen(!isOpen);

  const handleUpload = () => {
    if (title && file) {
      onUpload({ title, file });
      setIsOpen(false);
      setTitle('');
      setFile(null);
    } else {
      alert('Completa ambos campos.');
    }
  };

  return (
    <div className="upload-wrapper">
      <i className="bi bi-upload upload-icon" onClick={togglePanel}></i>

      {isOpen && (
        <div className="upload-modal">
          <h3>Subir Audio</h3>
          <input
            type="text"
            placeholder="Título del audio"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="file"
            accept=".mp3"
            ref={fileInputRef}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <button onClick={handleUpload}>Subir</button>
        </div>
      )}
    </div>
  );
}
