# Spark
An online dating single-page web application made with Ruby on Rails/Angular/PostgreSQL. Inspired by match.com. created from start to finish in a 5 day sprint.

## Authors
  * [Mick Johnson](https://github.com/mickajohnson)
  * [Michael Mitchell](https://github.com/mikeybags)
  * [Curtis Wulfsohn](https://github.com/cwulfsohn)
  
## Technologies
  * Ruby 
  * Rails
  * AngularJS
  * PostgreSQL
  * AngularUI
  * JavaScript
  * JQuery
  
## Demo
* [AWS Deployed Demo Site](http://spark-dating.herokuapp.com/)

## Dependencies
NPM Dependencies
  ```
    'angular'
    'angular-resource'
    'angular-route'
    'angular-cookies'
    'angular-bootstrap'
    'ng-file-upload'
    'ng-infinite-scroll'
  ```
Ruby Gems
  ```
    gem 'zip-codes'
    gem 'angular-ui-bootstrap-rails', '~> 2.4'
    gem 'rails', '~> 5.0.2'
    gem 'pg', '~> 0.18'
    gem 'puma', '~> 3.0'
    gem 'sass-rails', '~> 5.0'
    gem 'uglifier', '>= 1.3.0'
    gem 'jquery-rails'
    gem 'jbuilder', '~> 2.5'
    gem 'redis', '~> 3.0'
    gem 'bcrypt', '~> 3.1.7'
    gem 'zip-codes'
    gem 'npm-rails'
    gem 'bootstrap-sass', '~> 3.3.7'
    gem 'autoprefixer-rails'
    gem 'angular_rails_csrf'
    gem 'hirb'
    gem 'paperclip'
  ```
## To Run Project Locally
  * Clone the project
  ```
    git clone https://github.com/mikeybags/spark.git
  ```
  * If running Vagrant (virtual environment), make sure file is in vagrant shared folder
    * Start vagrant
    ``` 
      vagrant up
      vagrant ssh
    ```
  * Run Server
  ```
    rails s -b 0.0.0.0
  ```
  * Open localhost:3000 on your browser to view the app
