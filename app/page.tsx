'use client';

import { useState } from 'react';
import BinCard from './components/BinCard';
import Calendar from './components/Calendar';
import { getNextCollection, binCollections } from './data/binCollections';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'overview' | 'calendar'>('overview');
  const nextCollection = getNextCollection();
  
  const getUpcomingCollections = () => {
    const today = new Date();
    const todayStr = today.toISOString().split('T')[0];
    return binCollections
      .filter(collection => collection.date >= todayStr)
      .slice(0, 5);
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

        {/* Next Collection Alert */}
        {nextCollection && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Next Collection
            </h2>
            <BinCard collection={nextCollection} isNext={true} />
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="flex mb-6 bg-white rounded-lg p-1 shadow-sm max-w-md mx-auto">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
              activeTab === 'overview'
                ? 'bg-green-500 text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('calendar')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
              activeTab === 'calendar'
                ? 'bg-green-500 text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Calendar
          </button>
        </div>

        {/* Content */}
        {activeTab === 'overview' ? (
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Upcoming Collections
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {upcomingCollections.map((collection, index) => (
                <BinCard 
                  key={collection.date} 
                  collection={collection}
                  isNext={index === 0}
                />
              ))}
            </div>

            {/* Important Notes */}
            <div className="mt-12 card bg-yellow-50 border-yellow-200">
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
        ) : (
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Collection Calendar
            </h2>
            <Calendar />
          </div>
        )}
      </div>
    </div>
  );
} 