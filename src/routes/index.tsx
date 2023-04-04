import React from 'react';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { Home } from '../pages/Home';
import { SendContact } from '../pages/SendContact';
import { SendImage } from '../pages/SendImage';

export function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<Home />} />

        <Route path="/message/massText" element={<SendContact />} />

        <Route path="/message/massImage" element={<SendImage />} />
      </Routes>
    </Router>
  );
}