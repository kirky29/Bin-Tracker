export type BinType = 'domestic' | 'recycling' | 'paper' | 'no-collection';

export interface BinCollection {
  date: string; // YYYY-MM-DD format
  type: BinType;
  displayName: string;
  color: string;
}

// Collection data extracted from East Lindsey District Council PDF calendar
export const binCollections: BinCollection[] = [
  // April 2025
  { date: '2025-04-03', type: 'domestic', displayName: 'General Waste (Black Bin)', color: '#000000' },
  { date: '2025-04-10', type: 'paper', displayName: 'Cardboard (Purple Bin)', color: '#7c3aed' },
  { date: '2025-04-17', type: 'domestic', displayName: 'General Waste (Black Bin)', color: '#000000' },
  { date: '2025-04-24', type: 'recycling', displayName: 'Recycling (Blue Bin)', color: '#2563eb' },

  // May 2025
  { date: '2025-05-01', type: 'domestic', displayName: 'General Waste (Black Bin)', color: '#000000' },
  { date: '2025-05-08', type: 'paper', displayName: 'Cardboard (Purple Bin)', color: '#7c3aed' },
  { date: '2025-05-15', type: 'domestic', displayName: 'General Waste (Black Bin)', color: '#000000' },
  { date: '2025-05-22', type: 'recycling', displayName: 'Recycling (Blue Bin)', color: '#2563eb' },
  { date: '2025-05-29', type: 'domestic', displayName: 'General Waste (Black Bin)', color: '#000000' },

  // June 2025
  { date: '2025-06-05', type: 'domestic', displayName: 'General Waste (Black Bin)', color: '#000000' },
  { date: '2025-06-12', type: 'domestic', displayName: 'General Waste (Black Bin)', color: '#000000' },
  { date: '2025-06-19', type: 'recycling', displayName: 'Recycling (Blue Bin)', color: '#2563eb' },
  { date: '2025-06-26', type: 'domestic', displayName: 'General Waste (Black Bin)', color: '#000000' },

  // July 2025
  { date: '2025-07-03', type: 'domestic', displayName: 'General Waste (Black Bin)', color: '#000000' },
  { date: '2025-07-10', type: 'domestic', displayName: 'General Waste (Black Bin)', color: '#000000' },
  { date: '2025-07-17', type: 'domestic', displayName: 'General Waste (Black Bin)', color: '#000000' },
  { date: '2025-07-24', type: 'domestic', displayName: 'General Waste (Black Bin)', color: '#000000' },
  { date: '2025-07-31', type: 'domestic', displayName: 'General Waste (Black Bin)', color: '#000000' },

  // August 2025
  { date: '2025-08-07', type: 'domestic', displayName: 'General Waste (Black Bin)', color: '#000000' },
  { date: '2025-08-14', type: 'domestic', displayName: 'General Waste (Black Bin)', color: '#000000' },
  { date: '2025-08-21', type: 'domestic', displayName: 'General Waste (Black Bin)', color: '#000000' },
  { date: '2025-08-28', type: 'domestic', displayName: 'General Waste (Black Bin)', color: '#000000' },

  // September 2025
  { date: '2025-09-04', type: 'domestic', displayName: 'General Waste (Black Bin)', color: '#000000' },
  { date: '2025-09-11', type: 'domestic', displayName: 'General Waste (Black Bin)', color: '#000000' },
  { date: '2025-09-18', type: 'domestic', displayName: 'General Waste (Black Bin)', color: '#000000' },
  { date: '2025-09-25', type: 'paper', displayName: 'Cardboard (Purple Bin)', color: '#7c3aed' },

  // October 2025
  { date: '2025-10-02', type: 'domestic', displayName: 'General Waste (Black Bin)', color: '#000000' },
  { date: '2025-10-09', type: 'domestic', displayName: 'General Waste (Black Bin)', color: '#000000' },
  { date: '2025-10-16', type: 'domestic', displayName: 'General Waste (Black Bin)', color: '#000000' },
  { date: '2025-10-23', type: 'paper', displayName: 'Cardboard (Purple Bin)', color: '#7c3aed' },
  { date: '2025-10-30', type: 'domestic', displayName: 'General Waste (Black Bin)', color: '#000000' },

  // November 2025
  { date: '2025-11-06', type: 'recycling', displayName: 'Recycling (Blue Bin)', color: '#2563eb' },
  { date: '2025-11-13', type: 'domestic', displayName: 'General Waste (Black Bin)', color: '#000000' },
  { date: '2025-11-20', type: 'domestic', displayName: 'General Waste (Black Bin)', color: '#000000' },
  { date: '2025-11-27', type: 'domestic', displayName: 'General Waste (Black Bin)', color: '#000000' },

  // December 2025
  { date: '2025-12-04', type: 'domestic', displayName: 'General Waste (Black Bin)', color: '#000000' },
  { date: '2025-12-11', type: 'domestic', displayName: 'General Waste (Black Bin)', color: '#000000' },
  { date: '2025-12-18', type: 'domestic', displayName: 'General Waste (Black Bin)', color: '#000000' },
  { date: '2025-12-25', type: 'no-collection', displayName: 'No Collection (Christmas Day)', color: '#dc2626' }, // Christmas Day
  { date: '2025-12-29', type: 'domestic', displayName: 'General Waste (Black Bin)', color: '#000000' }, // Alternative Christmas collection

  // January 2026
  { date: '2026-01-01', type: 'no-collection', displayName: 'No Collection (New Year)', color: '#dc2626' }, // New Year's Day
  { date: '2026-01-03', type: 'domestic', displayName: 'General Waste (Black Bin)', color: '#000000' }, // Alternative New Year collection
  { date: '2026-01-08', type: 'domestic', displayName: 'General Waste (Black Bin)', color: '#000000' },
  { date: '2026-01-15', type: 'domestic', displayName: 'General Waste (Black Bin)', color: '#000000' },
  { date: '2026-01-22', type: 'domestic', displayName: 'General Waste (Black Bin)', color: '#000000' },
  { date: '2026-01-29', type: 'domestic', displayName: 'General Waste (Black Bin)', color: '#000000' },

  // February 2026
  { date: '2026-02-05', type: 'paper', displayName: 'Cardboard (Purple Bin)', color: '#7c3aed' },
  { date: '2026-02-12', type: 'domestic', displayName: 'General Waste (Black Bin)', color: '#000000' },
  { date: '2026-02-19', type: 'domestic', displayName: 'General Waste (Black Bin)', color: '#000000' },
  { date: '2026-02-26', type: 'domestic', displayName: 'General Waste (Black Bin)', color: '#000000' },

  // March 2026
  { date: '2026-03-05', type: 'paper', displayName: 'Cardboard (Purple Bin)', color: '#7c3aed' },
  { date: '2026-03-12', type: 'domestic', displayName: 'General Waste (Black Bin)', color: '#000000' },
  { date: '2026-03-19', type: 'domestic', displayName: 'General Waste (Black Bin)', color: '#000000' },
  { date: '2026-03-26', type: 'domestic', displayName: 'General Waste (Black Bin)', color: '#000000' },
];

export const getBinTypeClass = (type: BinType): string => {
  switch (type) {
    case 'domestic':
      return 'bin-domestic';
    case 'recycling':
      return 'bin-recycling';
    case 'paper':
      return 'bin-paper';
    case 'no-collection':
      return 'bin-no-collection';
    default:
      return 'bin-domestic';
  }
};

export const getNextCollection = (): BinCollection | null => {
  const today = new Date();
  const todayStr = today.toISOString().split('T')[0];
  
  const futureCollections = binCollections.filter(collection => collection.date >= todayStr);
  return futureCollections.length > 0 ? futureCollections[0] : null;
};

export const getCollectionsForMonth = (year: number, month: number): BinCollection[] => {
  const monthStr = `${year}-${month < 10 ? '0' + month : month}`;
  return binCollections.filter(collection => collection.date.startsWith(monthStr));
};

export const getCollectionForDate = (date: string): BinCollection | null => {
  return binCollections.find(collection => collection.date === date) || null;
}; 