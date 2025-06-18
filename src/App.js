import React, { useState } from 'react';
import Calendar from './components/Calendar';
import MemoryView from './components/MemoryView';
import memories from './data/memories';

function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedMemory, setSelectedMemory] = useState(null);
  
  // Handle day click from calendar
  const handleDayClick = (date) => {
    if (memories[date]) {
      setSelectedDate(date);
      setSelectedMemory(memories[date]);
    }
  };
  
  // Close memory view
  const handleCloseMemory = () => {
    setSelectedDate(null);
    setSelectedMemory(null);
  };
  
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-primary text-white p-4 shadow-md">
        <div className="container mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold">Memory Diary</h1>
          <p className="text-sm md:text-base opacity-80">A timeline of our shared moments</p>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto p-4 md:p-6">
        <div className="max-w-3xl mx-auto">
          <Calendar memories={memories} onDayClick={handleDayClick} />
          
          {/* Instructions */}
          <div className="mt-6 bg-white rounded-lg shadow p-4 md:p-6">
            <h2 className="text-lg font-semibold mb-2 text-gray-800">How to use</h2>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Navigate between months and years using the arrows</li>
              <li>Days with memories are marked with a dot</li>
              <li>Click on a day to view the memory</li>
            </ul>
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-800 text-white p-4 text-center text-sm">
        <p>Created with ❤️ | Memory Diary &copy; {new Date().getFullYear()}</p>
      </footer>
      
      {/* Memory View Modal */}
      {selectedMemory && (
        <MemoryView 
          memory={selectedMemory} 
          date={selectedDate} 
          onClose={handleCloseMemory} 
        />
      )}
    </div>
  );
}

export default App;