# Notes App

A simple Node.js and Express application for practicing Jenkins CI/CD and Docker.

## Features

- Add a note using `POST /notes`
- View all notes using `GET /notes`
- Basic automated tests using Node.js test runner and Supertest

## Run locally

Install Node.js, open a terminal in this folder, and run:

```bash
npm install
npm start
```

Open `http://localhost:3000/notes`.

To add a note, send a POST request to `http://localhost:3000/notes` with JSON:

```json
{
  "note": "Study Jenkins"
}
```

## Run tests

```bash
npm test
```

## Build and run with Docker

```bash
docker build -t notes-app .
docker run -d --name notes-app -p 3000:3000 notes-app
```

Open `http://localhost:3000/notes`.

## Jenkins

The included `Jenkinsfile` installs dependencies, runs tests, builds a Docker image, and deploys the container. Configure a Jenkins Pipeline job to use this repository's `Jenkinsfile`.

The Jenkins Windows service must be able to access Node.js, npm, Git (if checking out from GitHub), and the Docker Desktop engine.
