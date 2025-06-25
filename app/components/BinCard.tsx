'use client';

import { BinCollection, getBinTypeClass } from '../data/binCollections';

interface BinCardProps {
  collection: BinCollection;
  isNext?: boolean;
}

export default function BinCard({ collection, isNext = false }: BinCardProps) {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-GB', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getDaysUntil = (dateStr: string) => {
    const today = new Date();
    const collectionDate = new Date(dateStr);
    const diffTime = collectionDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const daysUntil = getDaysUntil(collection.date);
  const binTypeClass = getBinTypeClass(collection.type);

  const getIcon = (type: string) => {
    switch (type) {
      case 'domestic':
        return '🗑️';
      case 'recycling':
        return '♻️';
      case 'paper':
        return '📄';
      case 'no-collection':
        return '🚫';
      default:
        return '🗑️';
    }
  };

  return (
    <div className={`card ${binTypeClass} ${isNext ? 'next-collection' : ''}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">{getIcon(collection.type)}</span>
          <div>
            <h3 className="text-lg font-semibold">{collection.displayName}</h3>
            <p className="text-sm opacity-90">{formatDate(collection.date)}</p>
          </div>
        </div>
        {isNext && (
          <div className="text-right">
            <div className="text-2xl font-bold">
              {daysUntil === 0 ? 'Today!' : daysUntil === 1 ? 'Tomorrow' : `${daysUntil} days`}
            </div>
            <div className="text-sm opacity-90">
              {daysUntil === 0 ? 'Collection day' : 'until collection'}
            </div>
          </div>
        )}
      </div>
      
      {isNext && (
        <div className="border-t border-white/20 pt-4 mt-4">
          <div className="flex items-center space-x-2 text-sm opacity-90">
            <span>⏰</span>
            <span>Remember: Bins out by 5:30 AM</span>
          </div>
        </div>
      )}
    </div>
  );
} 