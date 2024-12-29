
## Overview
This project demonstrates the implementation of a full-stack application using React for the frontend and MSW (Mock Service Worker) for API simulation. The project is containerized using Docker and orchestrated with Docker Compose.

---

## Part 1: Frontend Implementation

### Key Features
- Displayed a grid of five cards using static JSON data.
- Arranged cards in a 3-2 grid layout.
- Showed a loading spinner for each image while it loads.
- Implemented drag-and-drop functionality to reorder cards.
- Clicking a card displays its image in a fullscreen overlay; pressing ESC closes the overlay.

---

## Part 2: Mock API with MSW

### Key Features
- MSW was used to mock API responses for development.
- Data is stored in `localStorage` to persist across page reloads.
- Created endpoints for fetching and adding card data:
  - **GET `/api/cards`**: Fetches cards from `localStorage`.
  - **POST `/api/cards`**: Adds a new card to `localStorage` and updates the list.

---

## Part 3: API Integration

### Key Features
- Frontend fetches card data from the mock API.
- Periodic saving of changes to the API every 5 seconds if changes are detected.

---

## Part 4: Deployment with Docker

### Key Features
- The application is containerized and run as a microservice.
- Docker Compose orchestrates the services, making setup simple.

### Implementation
1. **Dockerfile**:
   - Built the React app using a multi-stage build process.
   - Served the app with Nginx for efficient static file delivery.

2. **Docker Compose**:
   - Orchestrates the frontend service.
   - Port mapping (`3000:80`) enables access to the app locally.

3. **How to Run**:
   - Build and start the app using:
     ```bash
     docker compose up --build
     ```
   - Access the app at [http://localhost:3000](http://localhost:3000).

---

## Thought Process
1. **Simplicity**:
   - Kept the implementation straightforward by solving one task at a time.
   - Used MSW to simplify backend setup during development.

2. **Scalability**:
   - The architecture can be easily extended to include a real backend and database.

3. **Best Practices**:
   - Used React Hooks for state management.
   - Employed Docker for consistent development and deployment environments.

---

## How to Run the Application
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd zaniawebapp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the application with Docker Compose:
   ```bash
   docker compose up --build
   ```

4. Access the app at [http://localhost:3000](http://localhost:3000).

