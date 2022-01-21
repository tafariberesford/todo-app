import React from 'react'
import ReactHook from './components/ReactHook';
import Navbar from './components/Navbar/Navbar';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Hello</h1>
      <ReactHook />
    </div>
  );
}
