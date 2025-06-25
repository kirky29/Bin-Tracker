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
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container py-8">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            🗑️ Bin Tracker
          </h1>
          <p className="text-lg text-gray-600">
            East Lindsey District Council Collection Schedule
          </p>
        </header>

        {/* Hero Section - Next Collection */}
        {nextCollection && (
          <div className="mb-12">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Next Bin Collection
              </h2>
              <p className="text-gray-600">Your upcoming collection at a glance</p>
            </div>
            
            {/* Make the next collection card much larger and more prominent */}
            <div className="max-w-lg mx-auto">
              <BinCard collection={nextCollection} isNext={true} />
            </div>
          </div>
        )}

        {/* Calendar Toggle Button */}
        <div className="text-center mb-8">
          <button
            onClick={() => setShowCalendar(!showCalendar)}
            className="btn btn-primary inline-flex items-center space-x-2"
          >
            <span>📅</span>
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
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
              Coming Up Next
            </h2>
            <div className="grid gap-3 max-w-2xl mx-auto">
              {upcomingCollections.map((collection) => (
                <BinCard 
                  key={collection.date} 
                  collection={collection}
                  isNext={false}
                />
              ))}
            </div>
          </div>
        )}

        {/* Important Notes */}
        <div className="mt-12 card bg-yellow-50 border-yellow-200 max-w-4xl mx-auto">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">
            📋 Important Collection Information
          </h3>
          <ul className="space-y-2 text-sm text-yellow-700">
            <li className="flex items-start space-x-2">
              <span>⏰</span>
              <span>Bins must be presented by 5:30 a.m. on your collection day</span>
            </li>
            <li className="flex items-start space-x-2">
              <span>🎄</span>
              <span>Please check your collections over Christmas - you may have waste collected before or after your scheduled day</span>
            </li>
            <li className="flex items-start space-x-2">
              <span>❄️</span>
              <span>During extreme weather, bins may not be collected. Leave them at your property boundary for collection when safe</span>
            </li>
            <li className="flex items-start space-x-2">
              <span>📞</span>
              <span>Contact: <a href="tel:01507601111" className="underline">01507 601111</a> or visit <a href="https://www.e-lindsey.gov.uk/waste" className="underline" target="_blank" rel="noopener noreferrer">e-lindsey.gov.uk/waste</a></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
} 