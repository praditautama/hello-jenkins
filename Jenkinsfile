pipeline {
  agent node
  
  // Clean workspace before doing anything
  deleteDir()
  
  stages {
    stage('Clone') {
      steps {
        checkout scm
      }
    }
    stage('Build') {
      steps {
        sh "echo 'shell scripts to build project...'"
      }
    }
    stage ('Tests') {
        parallel 'static': {
          steps {
            sh "echo 'shell scripts to run static tests...'"
          }
        },
        'unit': {
          steps {
            sh "echo 'shell scripts to run unit tests...'"
          }   
        },
        'integration': {
          steps {
            sh "echo 'shell scripts to run integration tests...'"
          }        
        }
    }
    stage('Deploy') {
      steps {
        sh "echo 'shell scripts to deploy to server...'"
      }
    }
    stage('Test') {
      parallel {
        stage('Integration') {
          steps {
            sh 'echo \'shell scripts to run integration tests...\''
          }
        }
        stage('Static') {
          steps {
            sh 'echo \'shell scripts to run static tests...\''
          }
        }
        stage('Unit') {
          steps {
            sh 'echo \'shell scripts to run unit tests...\''
          }
        }
      }
    }
    stage('Deploy') {
      steps {
        sh 'echo \'shell scripts to deploy...\''
      }
    }
  }
}
