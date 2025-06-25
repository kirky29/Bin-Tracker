# 🗑️ Bin Tracker

A modern, mobile-first web application to track bin collection days for East Lindsey District Council.

## Features

- **Next Collection Alert**: Shows your upcoming bin collection with countdown
- **Interactive Calendar**: Monthly view with color-coded collection types
- **Mobile-First Design**: Optimized for all device sizes
- **Collection Types**: 
  - 🗑️ Domestic Waste (Black bins)
  - ♻️ Recycling (Blue bins)  
  - 📄 Paper and Card (Purple bins)
  - 🚫 No Collection days

## Technology Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Custom CSS** - Mobile-first responsive design
- **Vercel** - Deployment platform

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/kirky29/Bin-Tracker.git
cd Bin-Tracker
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

## Deployment to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with each push to main branch

## Council Information

This app is specifically designed for **East Lindsey District Council** collection schedules.

### Important Collection Rules

- ⏰ Bins must be out by **5:30 AM** on collection day
- 🎄 Christmas collections may be on different dates
- ❄️ Extreme weather may affect collections
- 📞 Contact: **01507 601111**
- 🌐 Website: [e-lindsey.gov.uk/waste](https://www.e-lindsey.gov.uk/waste)

## Data Updates

The collection schedule is stored in `app/data/binCollections.ts`. Update this file when you receive your new annual collection calendar from the council.

## License

MIT License - feel free to adapt for other councils or use cases.

---

Built with ❤️ for better bin collection tracking! 