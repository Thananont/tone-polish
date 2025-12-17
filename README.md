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
