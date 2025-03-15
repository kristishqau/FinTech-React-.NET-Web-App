# FinTech Dashboard Frontend

## Overview

FinTech Dashboard Project has a React-based designed frontend to display financial data in a clean, responsive, and user-friendly manner. It allows users to explore company profiles, view financial statements, and analyze key financial ratios with a modern, intuitive interface.

This part of the project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Features

- **Responsive Design**: Optimized for both desktop and mobile devices using Tailwind CSS.
- **Dynamic Data Rendering**: Display financial data like income statements, cash flow statements, and balance sheets dynamically.
- **Interactive Graphs**: Visualize financial data with interactive charts.
- **Modern UI/UX**: Sleek yellow-themed design for better aesthetics and usability.
- **Navigation**: Organized navigation with a sidebar and top navbar.

## Project Structure

Here's an overview of the project folder structure:

.\
├── node_modules/           # Installed dependencies\
├── public/                 # Public assets\
├── src/                    # Source code\
│   ├── components/         # Reusable components (Navbar, Sidebar, etc.)\
│   ├── pages/              # Main application pages\
│   ├── helpers/            # Utility functions\
│   ├── App.tsx             # Main application entry\
│   ├── index.tsx           # Application rendering\
│   └── hooks/              # Stores Custom Hooks\
├── .env                    # Environment variables where API Key is found\
├── package.json            # Project dependencies and scripts\
├── tailwind.config.js      # Tailwind CSS configuration\
└── tsconfig.json           # TypeScript configuration

## Technologies Used

- **React**: Core framework for building the user interface.
- **React Router**: Handles navigation between different views and pages.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **TypeScript**: Adds type safety to JavaScript for better code quality.
- **Recharts**: For building interactive data visualizations.
- **React Hooks**: Manages state and side effects (e.g., `useState`, `useEffect`).

## Prerequisites

Before running the project, ensure that you have the following installed:

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/kristishqau/FinTech-React-.NET-Web-App.git
   cd frontend

2. Install dependencies:

   ```bash
   npm install

3. Start the development server:

   ```bash
   npm start

4. Open the project in your browser:

   ```bash
   http://localhost:3000

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
