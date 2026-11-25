pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat '"C:\\Users\\dstha\\AppData\\Local\\Programs\\DockerDesktop\\resources\\bin\\docker.exe" build -t notes-app:%BUILD_NUMBER% .'
            }
        }

        stage('Deploy Container') {
            steps {
                bat '"C:\\Users\\dstha\\AppData\\Local\\Programs\\DockerDesktop\\resources\\bin\\docker.exe" rm -f notes-app 2>NUL || exit /b 0'
                bat '"C:\\Users\\dstha\\AppData\\Local\\Programs\\DockerDesktop\\resources\\bin\\docker.exe" run -d --name notes-app -p 3000:3000 notes-app:%BUILD_NUMBER%'
            }
        }
    }
}
