pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        echo 'Pipeline pulled and you should see output'
      }
    }

    stage('Test') {
      steps {
        build 'git_job'
      }
    }

  }
}