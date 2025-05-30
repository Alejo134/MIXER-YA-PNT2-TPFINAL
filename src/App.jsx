import './App.css'
import { Sidebar } from './components/Sidebar/sidebar.jsx'
import { Mixer } from './components/Mixer/mixer.jsx'
import { UploadSample } from './components/UploadSample/UploadSample.jsx'
import { SamplesProvider } from './hooks/useSamples.jsx'

function App() {

  const handleUpload = ({ title, file }) => {
    console.log('Título:', title);
    console.log('Archivo:', file);
    // HandleUpload se encarga de manejar los archivos
    // Analizar -> URL.createObjectURL
  };

  return (
    <> 
    <SamplesProvider>
      <Sidebar />        
      <Mixer />        
      <UploadSample onUpload={handleUpload} />
    </SamplesProvider>
    </>
  )
}

export default App
