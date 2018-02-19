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
    stage('Deploy To DevID') {
      steps {
        sh 'echo \'shell scripts to deploy...\''
      }
    }
    stage('Functional Testing') {
      parallel {
        stage('Frontend') {
          steps {
            sh 'echo \'shell scripts to run frontend tests...\''
          }
        }
        stage('Backend APIs') {
          steps {
            sh 'echo \'shell scripts to run API tests...\''
          }
        }
      }
    }
    stage('Deploy to Production') {
      steps {
        sh 'echo \'shell scripts to deploy...\''
      }
    }
  }
}
