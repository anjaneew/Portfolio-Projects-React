# Sri Lankan Radio Streaming App

A modern web application for streaming live Sri Lankan radio stations with an intuitive interface and real-time audio controls.

## Overview
This application provides seamless access to popular Sri Lankan radio stations through a clean, responsive web interface. Users can switch between stations, control volume, and enjoy uninterrupted streaming with built-in error handling and loading states.

## Features

* Live Streaming: Real-time audio streaming from 8+ Sri Lankan radio stations
* Dynamic Channel Selection: Easy-to-use dropdown interface for station switching
* Volume Controls: Dedicated buttons for precise volume adjustment
* Error Handling: Graceful fallbacks when streams are unavailable
* Loading States: Visual feedback during stream initialization
* Responsive Design: Optimized for desktop and mobile devices
* Accessibility: ARIA labels and semantic HTML for screen reader support

## Tech Stack

Frontend Framework: React 18 with TypeScript
Build Tool: Vite
Styling: CSS Modules
Icons: React Icons
Audio: HTML5 Audio API


## Project Architecture

```
src/
├── components/
│   ├── MyApp.tsx
│   ├── MyApp.css
│   ├── Radio/
│   │   ├── Radio.tsx
│   │   ├── Radio.module.css
│   │   └── Data.ts
│   └── Footer/
│       ├── Footer.tsx
│       └── Footer.module.css
├── App.tsx
└── main.tsx
```


## Known Issues

* Some radio streams may be temporarily unavailable due to server maintenance
* Stream quality depends on internet connection speed
* Audio may experience buffering on slower connections


## Contact
Anjanee S. Wijewardana

GitHub: @anjaneew
LinkedIn: anjaneew
Email: anjaneew@gmail.com

## Acknowledgments

Radio streaming URLs provided by respective station operators
Station logos are property of their respective owners
Built with React and Vite

⭐ If you find this project useful, please consider giving it a star!