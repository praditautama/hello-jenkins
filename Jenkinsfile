pipeline {
  agent any
  stages {
    stage('Clone') {
      steps {
        sh 'echo \'shell scripts to build project...\''
      }
    }
    stage('Build') {
      steps {
        sh 'echo \'shell scripts to build project...\''
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
