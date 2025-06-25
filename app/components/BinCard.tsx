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
    <div className={`card ${binTypeClass} ${isNext ? 'next-collection relative z-10' : ''}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <span className="text-3xl">{getIcon(collection.type)}</span>
          </div>
          <div className="min-w-0 flex-1">
            <h3 className={`font-semibold ${isNext ? 'text-lg' : 'text-base'} truncate`}>
              {collection.displayName}
            </h3>
            <p className={`text-sm opacity-90 ${isNext ? 'mt-1' : ''}`}>
              {formatDate(collection.date)}
            </p>
          </div>
        </div>
        {isNext && (
          <div className="text-right flex-shrink-0 ml-4">
            <div className="text-2xl font-bold leading-tight">
              {daysUntil === 0 ? 'Today!' : daysUntil === 1 ? 'Tomorrow' : `${daysUntil} days`}
            </div>
            <div className="text-xs opacity-90 mt-1">
              {daysUntil === 0 ? 'Collection day' : 'until collection'}
            </div>
          </div>
        )}
      </div>
      
      {isNext && (
        <div className="mt-4 pt-4 border-t border-white/20">
          <div className="flex items-center justify-center space-x-2 text-sm opacity-95 bg-black/10 rounded-lg py-2 px-3">
            <span>⏰</span>
            <span className="font-medium">Bins out by 5:30 AM</span>
          </div>
        </div>
      )}
    </div>
  );
} 