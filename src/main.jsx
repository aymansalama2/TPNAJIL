import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import NAJILTP from './components/NAJILTP/NAJILTP.jsx'
import TP from './components/1/TP.jsx'
import TP2 from './components/2/TP2.jsx'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <NAJILTP articles={[
 { nom: 'Article 1', quantite: 20, prix: 200, annule: false },
 { nom: 'Article 2', quantite: 15, prix: 150, annule: false },
 { nom: 'Article 3', quantite: 25, prix: 300, annule: false },
]} /> */}
<TP articles={[
 { nom: 'Article 1', quantite: 20, prix: 200, annule: false },
 { nom: 'Article 2', quantite: 15, prix: 150, annule: false },
 { nom: 'Article 3', quantite: 25, prix: 300, annule: false },
]} />
{/* <TP2/> */}
  </React.StrictMode>,
)
