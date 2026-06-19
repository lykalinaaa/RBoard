import * as React from 'react';
import MainPage from '@/Pages/MainPage/ui/MainPage';
import Auth from '@/Pages/Auth/ui/Auth';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProfileLayout from "@/Pages/ProfileLayout/ProfileLayout.tsx";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/auth" element={<Auth />} />
          <Route path={'/profile'} element={<ProfileLayout />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;