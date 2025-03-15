# FinTech Dashboard

FinTech Dashboard is a modern, responsive web application designed for exploring and analyzing financial data. It provides users with real-time insights into company profiles, income statements, balance sheets, cash flow statements, and historical dividends. The application features interactive charts, dynamic data rendering, and seamless navigation for a smooth user experience.

## Features

### Frontend
- **Responsive Design**: Optimized for desktop and mobile devices using Tailwind CSS.
- **Dynamic Data Rendering**: Fetches and displays financial data dynamically.
- **Interactive Graphs**: Uses Recharts for financial data visualization.
- **Modern UI/UX**: Clean and intuitive design for easy navigation.
- **Efficient State Management**: React Hooks for handling state and side effects.

### Backend
- **RESTful API**: Developed using .NET Web API to serve financial data.
- **Database Integration**: Manages financial records and user interactions.
- **Secure API Endpoints**: Implements authentication and request validation.
- **Scalability**: Built for handling large volumes of financial data efficiently.

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
- **React**: JavaScript library for building UI components.
- **TypeScript**: Adds type safety and enhances code quality.
- **Tailwind CSS**: Utility-first CSS framework for responsive design.
- **React Router**: Manages navigation between views.
- **Recharts**: For interactive data visualizations.

### Backend
- **.NET Web API**: Provides RESTful endpoints for financial data.
- **Entity Framework Core**: Manages database interactions.
- **SQL Server / SSMS**: Stores financial and user data.
- **Authentication & Security**: Protects API endpoints with proper authentication.

## Prerequisites

Before running the project, ensure you have installed:
- **Node.js** (v14 or higher) for the frontend
- **.NET SDK** (latest version) for the backend
- **SQL Server/SSMS** for data storage

## Installation and Setup

### Clone the repository
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

## How to Use

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
