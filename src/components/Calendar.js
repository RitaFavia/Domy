import React, { useState } from 'react';

const Calendar = ({ memories, onDayClick }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  // Get current year and month
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  
  // Get days in month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  
  // Get first day of month (0 = Sunday, 1 = Monday, etc.)
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  
  // Month names for display
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  // Day names for display
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  // Navigate to previous month
  const prevMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
  };
  
  // Navigate to next month
  const nextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
  };
  
  // Navigate to previous year
  const prevYear = () => {
    setCurrentDate(new Date(currentYear - 1, currentMonth, 1));
  };
  
  // Navigate to next year
  const nextYear = () => {
    setCurrentDate(new Date(currentYear + 1, currentMonth, 1));
  };
  
  // Check if a day has a memory
  const hasMemory = (day) => {
    const dateString = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return memories[dateString] !== undefined;
  };
  
  // Handle day click
  const handleDayClick = (day) => {
    const dateString = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    onDayClick(dateString);
  };
  
  // Generate calendar grid
  const renderCalendarDays = () => {
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(
        <div key={`empty-${i}`} className="h-10 md:h-14 flex items-center justify-center text-gray-400"></div>
      );
    }
    
    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const hasMemoryForDay = hasMemory(day);
      days.push(
        <div 
          key={day} 
          onClick={() => handleDayClick(day)}
          className={`h-10 md:h-14 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 rounded-full relative ${
            hasMemoryForDay ? 'font-bold' : ''
          }`}
        >
          <span>{day}</span>
          {hasMemoryForDay && (
            <div className="absolute bottom-1 w-1.5 h-1.5 bg-primary rounded-full"></div>
          )}
        </div>
      );
    }
    
    return days;
  };
  
  return (
    <div className="bg-white rounded-lg shadow p-4 md:p-6 fade-in">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <button 
            onClick={prevYear}
            className="p-1 mr-1 rounded-full hover:bg-gray-200"
            aria-label="Previous Year"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={prevMonth}
            className="p-1 rounded-full hover:bg-gray-200"
            aria-label="Previous Month"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>
        
        <h2 className="text-xl font-bold text-gray-800">
          {monthNames[currentMonth]} {currentYear}
        </h2>
        
        <div className="flex items-center">
          <button 
            onClick={nextMonth}
            className="p-1 rounded-full hover:bg-gray-200"
            aria-label="Next Month"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <button 
            onClick={nextYear}
            className="p-1 ml-1 rounded-full hover:bg-gray-200"
            aria-label="Next Year"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-1">
        {/* Day names */}
        {dayNames.map(day => (
          <div key={day} className="h-8 flex items-center justify-center font-medium text-gray-500">
            {day}
          </div>
        ))}
        
        {/* Calendar days */}
        {renderCalendarDays()}
      </div>
    </div>
  );
};

export default Calendar;