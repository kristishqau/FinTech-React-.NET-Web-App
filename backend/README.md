# FinTech Dashboard Backend

## Overview
This is the backend API for the FinTech Dashboard project. It is built using **.NET Web API** and will handle requests from the frontend application, providing financial data and managing stock-related information.

## Prerequisites
Make sure you have the following installed:

- [.NET SDK](https://dotnet.microsoft.com/download)
- [Visual Studio Code](https://code.visualstudio.com/) or [Visual Studio](https://visualstudio.microsoft.com/)
- [Postman](https://www.postman.com/) (for testing API endpoints)

## Setup Instructions

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/FinTech-React-.NET-Web-App.git
   cd FinTech-React-.NET-Web-App/backend
   ```

2. Restore dependencies:
   ```sh
   dotnet restore
   ```

3. Run the project:
   ```sh
   dotnet run
   ```

4. The API will start at:
   ```sh
   http://localhost:5000
   ```
   Or if using HTTPS:
   ```sh
   https://localhost:5001
   ```

## Project Structure
```
backend/
│-- Controllers/     # API Controllers
│-- Models/          # Data models
│-- Services/        # Business logic
│-- Data/            # Database context
│-- appsettings.json # Configuration file
│-- Program.cs       # Entry point
```

## API Endpoints
| Method | Endpoint              | Description               |
|--------|-----------------------|---------------------------|
| GET    | `/api/stocks`         | Get all stock data        |
| GET    | `/api/stocks/{id}`    | Get stock by ID           |
| POST   | `/api/stocks`         | Add a new stock           |
| PUT    | `/api/stocks/{id}`    | Update stock info         |
| DELETE | `/api/stocks/{id}`    | Delete a stock            |

## Environment Variables

Create an `.env` file and add the following:
```sh
CONNECTION_STRING=your-database-connection-string
API_KEY=your-api-key
```

## Building and Running in Production
To publish the backend API, run:
```sh
dotnet publish -c Release -o ./publish
```
Then, deploy the contents of the `publish` directory to your preferred hosting environment.