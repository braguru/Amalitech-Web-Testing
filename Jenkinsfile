pipeline{
    agent any
    tools {
        nodejs "node20"
    }
    stages{
        stage("SonarQube Analysis"){
            steps {
                withSonarQubeEnv('SonarQube') {
                script {
                    def scannerHome = tool 'SonarScanner';
                    sh "${scannerHome}/bin/sonar-scanner"
                    }
                }
            }
            
        }
    }
    post{
        always{
            echo "========always========"
        }
        success{
            echo "========pipeline executed successfully ========"
        }
        failure{
            echo "========pipeline execution failed========"
        }
    }
}