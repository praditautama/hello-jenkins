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
    stage ('Build') {
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
  }
}
