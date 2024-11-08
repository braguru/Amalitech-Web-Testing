/* groovylint-disable LineLength, NestedBlockDepth */
pipeline {
    agent any
    tools {
        nodejs 'node20'
    }
    stages {
        stage('Lint') {
            steps {
                script {
                    sh 'npm install'
                    try {
                        echo 'Running linting...'
                        sh "npm run lint --filter='[{{ github.event_name == 'pull_request' && '...[origin/main]' || '...[HEAD^]' }}]'"
                        echo 'Linting completed successfully.'
                    } catch (e) {
                        echo 'Linting failed.'
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
                        sh "npm run format --filter='[{{ github.event_name == 'pull_request' && '...[origin/main]' || '...[HEAD^]' }}]'"
                        echo 'Formatting completed successfully.'
                        } catch (e) {
                        echo 'Formatting failed.'
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
                        sh "npm run test --filter='[{{ github.event_name == 'pull_request' && '...[origin/main]' || '...[HEAD^]' }}]'"
                        echo 'Tests completed successfully.'
                    } catch (e) {
                        echo 'Testing failed.'
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
    }
    post {
        always {
            echo '========Pipeline completed ==========='
        }
        success {
            echo '========Pipeline executed successfully ========'
        }
        failure {
            echo '========Pipeline execution failed========'
        }
    }
}
