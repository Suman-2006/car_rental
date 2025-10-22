# Car Rental App

A full-stack car rental web application that allows users to browse, book, and pay for cars online. Built using **React.js**, **Node.js**, **Express**, and **MongoDB**.

---

## Features

### User Features:
- Browse available cars and featured cars on the homepage.
- View car details with descriptions, rent price, and availability status.
- Book a car by selecting rental dates.
- Make payments through a simulated payment form.
- Responsive UI for mobile and desktop devices.
- User authentication (Sign In / Sign Up).

### Admin / Backend Features:
- Add, update, and manage cars.
- Maintain featured and regular car listings.
- REST API endpoints for cars:
  - `GET /cars` - List all cars
  - `GET /cars/:id` - Get car by ID
  - `POST /cars` - Add a new car
  - `PUT /cars/:id` - Update a car
- MongoDB database integration.

### UI Features:
- Bootstrap 5 for responsive and modern UI.
- Card layout for featured and available cars.
- Alerts and status messages for bookings and payments.

---

## Tech Stack

- **Frontend:** React.js, Bootstrap, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ODM)
- **Routing:** React Router
- **State Management:** React useState & useEffect

---

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Suman-2006/car_rental.git


2. Navigate to backend and install dependencies:
```bash
cd backend
npm install


3. Start backend server:
```bash
npm run dev


4. Navigate to frontend and install dependencies:
```bash
cd ../frontend
npm install


5. Start frontend server:
```bash
npm start


6. Open http://localhost:3000 in your browser.


7. Folder Structure
CarRental/
├── backend/            # Node.js + Express backend
│   ├── models/         # Mongoose models
│   ├── routes/         # API routes
│   └── controllers/    # Controller functions
├── frontend/           # React frontend
│   ├── src/
│   │   ├── assets/     # Car images and placeholders
│   │   ├── components/ # Navbar, CarCard, LogoutButton, etc.
│   │   ├── pages/      # CarList, BookCar, Payment, Checkout
│   │   └── App.js
└── README.md


Author
Suman Raju K
GitHub: https://github.com/Suman-2006
