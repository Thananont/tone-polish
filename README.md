# Tone Polish

A full-stack web application that rewrites user drafts to sound Professional, Empathetic, or Concise using AI.

## Project Structure

```
tone-polish/
├── backend/          # Spring Boot application
└── frontend/         # React application
```

## Getting Started

### Prerequisites

- Java 17 or higher
- Maven 3.6+
- Node.js 18+ and npm/yarn

### Backend Setup

```bash
cd backend
mvn clean install
mvn spring-boot:run
```

The backend will start on `http://localhost:8080`

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will start on `http://localhost:5173`

### Run Frontend Test

```bash
cd frontend
npm test
```

## API Endpoint

### POST `/api/polish`

Polishes text according to the selected tone.

**Request Body:**

```json
{
  "originalText": "string",
  "tone": "Professional" | "Empathetic" | "Concise"
}
```

**Response Body:**

```json
{
  "polishedText": "string"
}
```

## AI Transcript

Utilized Gemini to help engineer a prompt with a template used to setup the application's core functionality and structure.

### The setup prompt used in Cursor.

```bash
Project: Tone Polish
Description: A full-stack web application that rewrites user drafts to sound Professional, Empathetic, or Concise using AI.

You are an expert Full Stack Developer. I need you to scaffold and generate code for a project called "Tone Polish".

### Tech Stack
1. **Frontend:** React (Vite), TypeScript, StyleSheet, Axios.
2. **Backend:** Java 17+, Spring Boot 3, Maven.
3. **AI Integration:** Create a service that mocks the response of calling OpenAI API.

### Functional Requirements
1. **User Interface:**
   - A text area for the user to input their draft.
   - A selection mechanism (dropdown or radio buttons) to choose the desired tone: "Professional", "Empathetic", or "Concise".
   - A "Refine" button to submit the request.
   - A read-only text area to display the polished result.

2. **Backend API:**
   - Create a REST Controller.
   - Endpoint: POST `/api/polish`
   - Request Body: JSON `{ "originalText": "string", "tone": "string" }`
   - Response Body: JSON `{ "polishedText": "string" }`
   - The Service layer should construct a prompt based on the selected tone and the text, then (mock or implement) a call to an AI provider. *For now, implement a mock response or a placeholder for the OpenAI API call.*

### Project Structure
Please generate the code in a monolithic repo structure:
- `/backend`: The Spring Boot application.
- `/frontend`: The React application.

### Implementation Steps
1. Initialize the Spring Boot project with `spring-boot-starter-web` and `lombok`.
2. Create the `PolishingRequest` and `PolishingResponse` DTOs.
3. Create the `PolishingService` (interface and implementation).
4. Create the `PolishingController` with CORS enabled (allow localhost:5173).
5. Initialize the React app with Vite.
6. Create a clean, modern UI using StyleSheet centered on the screen.
7. Connect the Frontend to the Backend using Axios.

Please generate the file structure and the necessary code files to get this running.
```
