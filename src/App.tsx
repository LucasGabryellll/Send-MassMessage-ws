import React from 'react';

import AuthProvider from './context/auth';
import { AppRouter } from './routes';

function App() {
  return (
    <div className="h-[100%] md:w-full">
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </div>
  );
}

export default App;
