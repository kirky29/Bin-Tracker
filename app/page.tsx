'use client';

import { useState } from 'react';
import BinCard from './components/BinCard';
import Calendar from './components/Calendar';
import { getNextCollection, binCollections } from './data/binCollections';

export default function Home() {
  const [showCalendar, setShowCalendar] = useState(false);
  const nextCollection = getNextCollection();
  
  const getUpcomingCollections = () => {
    const today = new Date();
    const todayStr = today.toISOString().split('T')[0];
    return binCollections
      .filter(collection => collection.date >= todayStr)
      .slice(1, 4); // Skip the first one (next collection) and show next 3
  };

  const upcomingCollections = getUpcomingCollections();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50">
      <div className="container py-6 max-w-4xl">
        {/* Header */}
        <header className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-4">
            <span className="text-2xl">🗑️</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Bin Collection Tracker
          </h1>
          <p className="text-gray-600 max-w-md mx-auto">
            Your East Lindsey District Council collection schedule at a glance
          </p>
        </header>

        {/* Hero Section - Next Collection */}
        {nextCollection && (
          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Next Collection
              </h2>
              <p className="text-gray-500 text-sm">Don't forget to put your bin out the night before</p>
            </div>
            
            {/* Hero collection card */}
            <div className="max-w-md mx-auto">
              <BinCard collection={nextCollection} isNext={true} />
            </div>
          </div>
        )}

        {/* Calendar Toggle Button */}
        <div className="text-center mb-10">
          <button
            onClick={() => setShowCalendar(!showCalendar)}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-white border-2 border-blue-200 text-blue-700 rounded-lg font-medium hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 shadow-sm"
          >
            <span className="text-lg">📅</span>
            <span>{showCalendar ? 'Hide Calendar' : 'View Full Calendar'}</span>
          </button>
        </div>

        {/* Calendar Section (collapsible) */}
        {showCalendar && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Collection Calendar
            </h2>
            <Calendar />
          </div>
        )}

        {/* Next Few Collections (simplified) */}
        {!showCalendar && upcomingCollections.length > 0 && (
          <div className="mb-10">
            <h3 className="text-lg font-semibold text-gray-700 mb-6 text-center">
              Coming Up Next
            </h3>
            <div className="space-y-3 max-w-lg mx-auto">
              {upcomingCollections.map((collection) => (
                <div key={collection.date} className="transform hover:scale-[1.02] transition-transform duration-200">
                  <BinCard 
                    collection={collection}
                    isNext={false}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Important Notes */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 max-w-2xl mx-auto">
          <h3 className="text-lg font-semibold text-gray-800 mb-5 flex items-center">
            <span className="text-blue-600 mr-2">ℹ️</span>
            Important Reminders
          </h3>
          <div className="space-y-4 text-sm text-gray-700">
            <div className="flex items-start space-x-3 p-3 bg-white rounded-lg shadow-sm">
              <span className="text-lg mt-0.5">⏰</span>
              <div>
                <p className="font-medium">Collection Time</p>
                <p>Bins out by 5:30 AM on collection day</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 bg-white rounded-lg shadow-sm">
              <span className="text-lg mt-0.5">🎄</span>
              <div>
                <p className="font-medium">Holiday Collections</p>
                <p>Christmas schedules may vary - check calendar for updates</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 bg-white rounded-lg shadow-sm">
              <span className="text-lg mt-0.5">📞</span>
              <div>
                <p className="font-medium">Need Help?</p>
                <p>Call <a href="tel:01507601111" className="text-blue-600 hover:underline font-medium">01507 601111</a> or visit <a href="https://www.e-lindsey.gov.uk/waste" className="text-blue-600 hover:underline font-medium" target="_blank" rel="noopener noreferrer">council website</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 