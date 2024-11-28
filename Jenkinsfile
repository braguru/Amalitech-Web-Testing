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
        stage('Lint') {
            steps {
                script {
                    try {
                        echo 'Running linting...'
                        sh "npm run lint --filter='[{{ github.event_name == 'pull_request' && '...[origin/develop]' || '...[HEAD^]' }}]'"
                        echo 'Linting completed successfully.'
                    } catch (e) {
                        error 'Linting failed.'
                        error "Error: ${e.message}"
                    }
                }
            }
        }
        stage('Format') {
            steps {
                script {
                    try {
                        echo 'Running formatting...'
                        sh "npm run format --filter='[{{ github.event_name == 'pull_request' && '...[origin/develop]' || '...[HEAD^]' }}]'"
                        echo 'Formatting completed successfully.'
                        } catch (e) {
                        error 'Formatting failed.'
                        error "Error: ${e.message}"
                    }
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    try {
                        echo 'Running tests...'
                        sh "npm run test --filter='[{{ github.event_name == 'pull_request' && '...[origin/develop]' || '...[HEAD^]' }}]'"
                        echo 'Tests completed successfully.'
                    } catch (e) {
                        error 'Testing failed.'
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
