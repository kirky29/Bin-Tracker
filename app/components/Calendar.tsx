'use client';

import { useState } from 'react';
import { getCollectionsForMonth, getCollectionForDate, getBinTypeClass, BinCollection } from '../data/binCollections';

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  
  const collections = getCollectionsForMonth(year, month);
  
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month, 0).getDate();
  };
  
  const getFirstDayOfMonth = (year: number, month: number) => {
    const firstDay = new Date(year, month - 1, 1).getDay();
    return firstDay === 0 ? 6 : firstDay - 1; // Make Monday = 0
  };
  
  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    if (direction === 'prev') {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setCurrentDate(newDate);
  };
  
  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const days = [];
    
    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day opacity-30"></div>);
    }
    
    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
      const collection = getCollectionForDate(dateStr);
      const isToday = dateStr === new Date().toISOString().split('T')[0];
      
      days.push(
        <div
          key={day}
          className={`calendar-day ${collection ? getBinTypeClass(collection.type) : 'bg-gray-100'} ${
            isToday ? 'ring-2 ring-yellow-400' : ''
          }`}
          title={collection ? `${collection.displayName} - ${dateStr}` : dateStr}
        >
          <span className={isToday ? 'font-bold' : ''}>{day}</span>
          {collection && (
            <div className="text-xs mt-1 opacity-90 font-semibold">
              {collection.type === 'domestic' ? 'BLACK' : 
               collection.type === 'recycling' ? 'BLUE' :
               collection.type === 'paper' ? 'PURPLE' : 'NONE'}
            </div>
          )}
        </div>
      );
    }
    
    return days;
  };
  
  return (
    <div className="card">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          {monthNames[month - 1]} {year}
        </h2>
        <div className="flex space-x-2">
          <button
            onClick={() => navigateMonth('prev')}
            className="btn btn-primary px-3 py-2 text-sm"
          >
            ←
          </button>
          <button
            onClick={() => navigateMonth('next')}
            className="btn btn-primary px-3 py-2 text-sm"
          >
            →
          </button>
        </div>
      </div>
      
      <div className="calendar-grid">
        {dayNames.map(day => (
          <div key={day} className="calendar-header">
            {day}
          </div>
        ))}
        {renderCalendarDays()}
      </div>
      
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 rounded bin-domestic"></div>
          <span>General Waste (Black)</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 rounded bin-recycling"></div>
          <span>Recycling (Blue)</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 rounded bin-paper"></div>
          <span>Cardboard (Purple)</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 rounded bin-no-collection"></div>
          <span>No Collection</span>
        </div>
      </div>
    </div>
  );
} 