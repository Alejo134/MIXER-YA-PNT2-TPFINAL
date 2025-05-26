import { useState } from 'react';
import './sidebar.css';
import { SampleBar } from '../Sample/sample.jsx';

export const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="sample-wrapper">
      <button onClick={toggleSidebar} className="sidebar-toggle-button">
        {sidebarOpen ? '←' : '→'}
      </button>
      <div className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header"> 
          SAMPLES
        </div>
        <div className="sidebar-content">
          <SampleBar />
        </div>
      </div>
    </div>
  );
};

