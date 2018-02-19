pipeline {
  agent any
  stages {
    stage('Build') {
      parallel {
        stage('Build A') {
          steps {
            sh 'echo "Build A"'
          }
        }
        stage('Build B') {
          steps {
            sh 'echo "Build B"'
          }
        }
      }
    }
    stage('Testing') {
      parallel {
        stage('Test A') {
          steps {
            sh 'echo "Test A"'
          }
        }
        stage('Test B') {
          steps {
            sh 'echo "Test B"'
          }
        }
      }
    }
  }
}