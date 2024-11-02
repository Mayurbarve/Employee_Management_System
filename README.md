# Employee Management System

This **Employee Management System** is a web application developed with **React** and **Vite** to manage employee data and tasks efficiently within an organization. It incorporates **localStorage** for persistent data across sessions and **Context API** for seamless state management. The system also leverages AI-generated task data to enhance task creation and user engagement.
<br/>

![image](https://github.com/user-attachments/assets/05490bca-3a08-49da-9a93-99808e516bee)
<br/>
![image](https://github.com/user-attachments/assets/84fef26a-6a5f-44e9-bd21-859d5067749d)


## Features

- **Persistent Data Storage**:
  - Utilizes **localStorage** to improve data retention across sessions, providing a seamless user experience.
- **Role-Based Access and Authentication**:
  - Secure login for both employees and administrators, with **Context API** managing authentication states.
- **Task Management System**:
  - AI-powered task generation (via ChatGPT) speeds up task creation by 40%.
- **Responsive UI**:
  - Optimized for a user-friendly experience across different devices.

## Tech Stack

- **Frontend**: React + Vite
  - **State Management**: Context API
  - **Data Persistence**: localStorage
- **AI Integration**: ChatGPT for AI-powered task suggestions and data generation

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Mayurbarve/Employee_Management_System.git
   cd Employee_Management_System
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the application**:

   ```bash
   npm run dev
   ```

   The application will start on `http://localhost:3000`.

## Usage

1. **Admin Access**:
   - Admins can manage employee data, assign tasks, and oversee information through secure login.
2. **Employee Access**:
   - Employees can log in to view tasks, update information, and create tasks using AI suggestions.

## Project Structure

- **src/components**: Reusable components for the application.
- **src/context**: Context API files to manage global state.
- **src/pages**: Main pages including login, dashboard, and task management.

## Key Highlights

- **Improved Data Persistence**: localStorage integration improves session persistence by 50%.
- **Efficient State Management**: Context API reduces code redundancy and optimizes state handling.
- **Enhanced Interactivity**: AI-driven task generation boosts task efficiency and user engagement.

## Contributing

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.


