# Simple forum app

Simple JavaScript forum application which allows users to view forum posts/sign up and create/reply to posts.

## Table of contents  

- [Tech stack](#tech-stack)  
  - [Frontend](#frontend)  
  - [API](#api)  
  - [Database](#database)
    - [Example table structure](#example-table-structure)
- [Project setup](#project-setup)
- [Storybook](#storybook)
- [Docker](#docker)
- [Deployment](#deployment)
- [Todo](#todo)

## Tech stack

### Frontend

- React (bootstrapped with create-react-app)
- Typescript
- Storybook
- ChakraUI
- Docker

### API

- Express
- Node.js
- Typescript
- Sequelize
- Docker

### Database

Uses an AWS RDS MySQL database to store data.

#### Example table structure

| Post | User |  
| ---- | ---- |  
| id   | id    |  
| userId | username |
| parentPostId | dateJoined |
| createdDate | displayName |
| updatedDate | password |
| postTitle | profilePicture |
| postContent |

## Project setup

Clone repository using below command:

`git clone https://github.com/Cameron216/forum-app.git`

Then run below command in root directory to install dependencies for both the frontend and api:

`npm run setup`

Both frontend and api can be started on their respective ports by running the `npm run dev` command.

## Storybook

The frontend project uses the Storybook design system package to produce a UI for building, managing and inspecting components.

This UI can be open by running the below in the project root:

`npm run storybook`

## Docker

Both the frontend and api have a Dockerfile for generating images and running containers which are setup to be able to work locally within the containers.

There is also a docker-compose file for managing, creating and removing the containers and volumes which includes a container for the Storybook ui.

You can create the images and spin up the 3 containers by running the below command:

`docker compose up -d`

To tear down the containers you can run:

`docker compose down`

## Deployment

Todo

## Todo

- [x]  Connect frontend to backend
- [ ]  Setup storybook for component ui library
  - [x]  Install storybook
  - [ ]  Setup storybook folder structure
  - [ ]  Add any storybook addons required
- [x]  What to use for styling ui (I don’t mind)
  - [x] Install Chakra UI
  - [x] Set up Chakra UI with Storybook
- [ ]  Build out frontend
  - [ ]  Pages
    - [ ]  Login/logout
    - [ ]  Account page
    - [ ]  Posts page
    - [ ]  Post page
  - [ ]  Functionality
    - [ ]  Allow user to login and out and have session token generated for a specified time which is used for auth pages and passed in api calls
    - [ ]  Account page that allows user to update details
      - [ ]  Email
      - [ ]  Username/display name
      - [ ]  Profile image
      - [ ]  About
      - [ ]  Password
    - [ ]  A page where all forum posts can be viewed that’s paginated
    - [ ]  An individual post page that will show post details and all replies
    - [ ]  Rich text editor for adding posts
    - [ ]  Allow user to edit posts and save
- [ ]  Build out backend
  - [ ]  Authentication with frontend
  - [x]  User endpoints
    - [x]  Get user by id
    - [x]  Get all users
    - [x]  Create user
    - [x]  Update user
    - [x]  Delete user
  - [x]  Post endpoints
    - [x]  Save post
    - [x]  Edit post
    - [x]  Get all posts
    - [x]  Get post
    - [x]  Delete post
- [x]  Setup database
  - [x]  Create RDS MySQL db in AWS
  - [x]  Create database table layout
  - [x]  Connect api to db
- [ ]  Setup authentication
  - [ ]  Credentials between db and api
  - [ ]  Auth between api and frontend
    - [ ]  What to use for auth?
      - [ ]  Jwt?
      - [ ]  Basic token generation?
      - [ ]  Some then else?
      - [ ]  What is used in the industry currently?
- [ ]  Setup env files for both frontend and backend
- [ ]  Setup pre-commit hooks for linting project
- [x]  Add content to readme file
  - [x]  Project details
  - [x]  How to clone and start the project

### Optional features

- [ ]  Add testing
  - [ ]  Unit testing
    - [ ]  React testing lib for frontend with jest
    - [ ]  Jest for backend - any other lib needed or just jest?
  - [ ]  Integration testing & end to end testing
    - [ ]  Use cypress
- [ ]  Setup ci/cd pipeline
  - [x]  Use Github actions
  - [ ]  Deploy to AWS ECS/ECR or Netlify
- [ ]  Try chromatic out for visual snapshot testing review?
- [x]  Create error logging for the api using Winston package
- [ ]  Add docker
  - [x]  Create dockerfile
  - [x]  Setup containers
  - [x]  Setup docker compose
  - [ ]  Try deploying somewhere
