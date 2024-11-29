/* groovylint-disable LineLength, NestedBlockDepth */
pipeline {
    agent any
    tools {
        nodejs 'node20'
    }
    stages {
        stage('Inatalling dependencies') {
            steps {
                script {
                    echo 'Installing dependencies...'
                    sh 'npm i'
                }
            }
        }
        
        stage('Lint, Format, and Test') {
            steps {
                script {
                    try {
                        // Linting
                        echo 'Running linting...'
                        sh "npm run lint --filter='[{{ github.event_name == 'pull_request' && '...[origin/develop]' || '...[HEAD^]' }}]'"
                        echo 'Linting completed successfully.'

                        // Formatting
                        echo 'Running formatting...'
                        sh "npm run format --filter='[{{ github.event_name == 'pull_request' && '...[origin/develop]' || '...[HEAD^]' }}]'"
                        echo 'Formatting completed successfully.'

                        // Testing
                        echo 'Running tests...'
                        sh "npm run test --filter='[{{ github.event_name == 'pull_request' && '...[origin/develop]' || '...[HEAD^]' }}]'"
                        echo 'Tests completed successfully.'
                    } catch (e) {
                        error 'One or more steps failed.'
                        error "Error: ${e.message}"
                    }
                }
            }
        }

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    script {
                        def scannerHome = tool 'SonarScanner'
                        sh "${scannerHome}/bin/sonar-scanner"
                    }
                }
            }
        }
         stage('Prepare Environment'){
            steps{
                 withCredentials([file(credentialsId: 'amalitech-website-env', variable: 'ENV_FILE')]){
                 // Copy the env file to both repositories
                     sh"""
                     cp $ENV_FILE ./apps/cms-studio/.env
                     cp $ENV_FILE ./apps/storybook/.env
                     cp $ENV_FILE ./apps/web/.env
                     """
                }
            }
        }
        stage('Build') {
            steps {
                script {
                    try {
                        echo 'Running build...'
                        sh 'npm run build'
                        echo 'Build completed successfully.'
                    } catch (e) {
                        error 'Build failed.'
                        error "Error: ${e.message}"
                    }
                }
            }
        }
    }
    post {
        always {
            script {
                echo 'Cleaning workspace...'
                cleanWs()
            }
            echo '========Pipeline completed ===========😊'
        }
        success {
            echo '========Pipeline executed successfully ========👌'
        }
        failure {
            echo '========Pipeline execution failed========😒'
        }
    }
}
