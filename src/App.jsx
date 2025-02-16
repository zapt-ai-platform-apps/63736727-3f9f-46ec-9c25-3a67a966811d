import React from 'react';
import LockerRegistrationForm from './components/LockerRegistrationForm';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center justify-center p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Welcome to New App</h1>
        <p className="text-lg">Register your locker and enjoy our awesome services</p>
      </header>
      <main className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <LockerRegistrationForm />
      </main>
      <footer className="mt-8">
        <a
          href="https://www.zapt.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-300 no-underline cursor-pointer"
        >
          Made on ZAPT
        </a>
      </footer>
    </div>
  );
}