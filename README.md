# FinTech Dashboard

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Installation and Setup](#installation-and-setup)
- [Usage](#usage)
- [Contributions](#contributions)
- [License](#license)

---

## Overview
FinTech Dashboard is a financial analytics platform that empowers users to uncover deep insights from complex financial data. With a fully responsive design, this application delivers seamless navigation and dynamic visualizations, enabling you to review detailed company profiles, comprehensive income statements, balance sheets, cash flow reports, and historical dividend trends. Whether you're an investor, analyst, or financial enthusiast, FinTech Dashboard transforms raw data into actionable intelligence through its intuitive interface and interactive charts.

The project is divided into two main components, each with its own detailed README outlining setup instructions, functionality, and usage: 
- **Frontend:** Built with React, TypeScript, and Tailwind CSS, providing a clean and interactive UI.
- **Backend:** Developed using .NET Web API to handle financial data retrieval and business logic.

---

## Features
### Frontend
- Responsive and user-friendly design.
- Dynamic data rendering with real-time financial updates.
- Interactive financial charts and visualizations.
- Efficient state management using React Hooks.
- Integrated search functionality for company exploration.

### Backend
- RESTful API endpoints for financial data retrieval.
- Secure and efficient handling of API requests.
- Integration with financial data providers.
- Optimized for scalability and performance.

---

## Project Structure

```
FinTech-Dashboard/
├── backend/  # .NET Web API for financial data
│   ├── Controllers/  # API endpoints
│   ├── Models/  # Data models
│   ├── Services/  # Business logic
│   ├── appsettings.json  # Configuration file
│   └── Program.cs  # Main entry point
│
├── frontend/  # React-based frontend
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/  # Main application views
│   │   ├── hooks/  # Custom React hooks
│   │   ├── App.tsx  # Main React component
│   │   ├── index.tsx  # Entry point for React app
│   ├── package.json  # Frontend dependencies
│   ├── tailwind.config.js  # Tailwind CSS configuration
│   └── tsconfig.json  # TypeScript configuration
│
└── README.md  # Project documentation
```

## Technologies Used

### Frontend
- **React**
- **TypeScript**
- **Tailwind CSS**
- **React Router**
- **Recharts**
- **Axios**

### Backend
- **.NET Web API**
- **Entity Framework Core**
- **SSMS / SQL Server**
- **Swagger** for API documentation

---

## Installation and Setup

### Prerequisites
Ensure you have the following installed:
- **Node.js** (for frontend development)
- **.NET SDK** (for backend development)
- **SSMS / SQL Server** (for database management)

### Clone the Repository
```sh
git clone https://github.com/kristishqau/FinTech-React-.NET-Web-App.git
cd FinTech-React-.NET-Web-App
```

### Setup Frontend
```sh
cd frontend
npm install
npm start
```
Open `http://localhost:3000` in your browser.

### Setup Backend
```sh
cd backend
dotnet restore
dotnet run
```
The backend will be running at `http://localhost:5000` (or `https://localhost:5001` for HTTPS).

## Usage

1. **Search for Companies**: Use the search bar to find company profiles.
2. **View Financial Statements**: Navigate through income statements, balance sheets, and cash flow reports.
3. **Analyze Historical Data**: Interactive charts display stock trends and financial health.
4. **Bookmark Stocks**: Save favorite stocks for quick access.

## Contributions

Contributions are welcome! Follow these steps:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

## License

This project is licensed under the MIT License.
