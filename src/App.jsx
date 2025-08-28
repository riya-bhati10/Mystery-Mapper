import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Entry from './components/EntryPage';
import Home from './components/home';
import Explore from './components/explore';
import PlacesPage from './components/places';
import PlaceDetails from './components/placeDetails'; 
import HauntedPage from './components/hauntedPlace';
import AboutPage from './components/about';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Entry />} />
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/places" element={<PlacesPage />} />
        <Route path="/place/:id" element={<PlaceDetails />} />
        <Route path="/haunted" element={<HauntedPage />} />
        <Route path="/about" element={<AboutPage />} />

      </Routes>
    </Router>
  );
}

export default App;
