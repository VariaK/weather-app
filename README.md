# Weather Forecasting Dashboard

## 📝 Project Description

A modern, responsive weather forecasting dashboard that retrieves and displays a 5-day weather forecast. The application connects directly to a secure Azure Web API to fetch live meteorological data, showing key metrics such as temperatures in both Celsius and Fahrenheit, daily weather summaries, and corresponding weather icons.

The frontend is built with high-quality visual aesthetics, featuring a dark-themed glassmorphic user interface, smooth micro-animations on interactive elements, and robust reactive states to handle loading processes and network errors gracefully.

---

## 🅰️ Angular Version

This application is built using **Angular v21.2.0** (compatible with Angular 20/21 standards). It leverages modern framework features, including:
- **Standalone Components**: Modular architecture without the overhead of traditional NgModules.
- **Signals-Driven State Management**: Utilizes `signal<T>` for lightweight, reactive tracking of forecast data, loading states, and error alerts.
- **Modern Control Flow**: Uses native `@if`, `@else if`, `@else`, `@for`, and `@empty` block syntax for optimized DOM rendering.

---
## Features:
- **Live Weekly Forecast Grid**: Visual presentation of daily forecast details including dynamic weather emojis, temperature in Celsius/Fahrenheit, and weather summaries.
- **Total Forecast Records Counter**: Real-time display showing the count of loaded forecast records (e.g., `Total Forecast Records: 5`).
- **Graceful State Management**: Visual feedback with interactive loading spinners, error alerts, and a dynamic **Retry Connection** mechanism if API calls fail.
- **High-End Glassmorphism Styling**: Backdrop filters, gradient borders, subtle glows, and scale/rotation animations when hovering over cards.

---

## 🛠️ Installation Steps

Follow these instructions to set up and run the application locally:

### 📋 Prerequisites
Ensure you have the following installed:
- **Node.js** (v18.x or newer recommended)
- **npm** (v9.x or newer)

### ⚙️ Steps
1. **Clone the repository:**
   ```bash
   git clone https://github.com/VariaK/weather-app.git
   cd weather-app
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run start
   ```

4. **Open the application:**
   Navigate to `http://localhost:4200` in your web browser.

5. **Run the Vitest unit tests:**
   ```bash
   npm run test
   ```

---

## 🌐 Deployment URL

The application is configured to deploy via CI/CD workflows:
- **Production Deployment URL** 
