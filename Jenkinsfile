pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'git pull origin main'
        echo 'Pipeline pulled'
        sh 'node exercise.js'
      }
    }

  }
}