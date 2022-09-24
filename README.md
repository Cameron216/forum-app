# Simple forum app

## Tech stack

### Frontend

- React
- Typescript
- Storybook
- ChakraUI

### API

- Express
- Node.js
- Typescript
- MySQL

## DB tables

| Post | User |  
| ---- | ---- |  
| Id   | Id    |  
| UserId | username |
| parentPostId | dateJoined |
| createdDate | displayName |
| updatedDate | password |
| postTitle | profilePicture |
| postContent |

## ToDo

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
  - [ ]  Authentication with frontend and db
  - [ ]  Account endpoints
    - [ ]  Get user by username/email
    - [ ]  Update user details (separate endpoint for each field?)
    - [ ]  Save post
    - [ ]  Edit post
    - [ ]  Get posts
    - [ ]  Paginate response (send x records at a time)
    - [ ]  Get post by id
- [ ]  Setup database
  - [x]  Create RDS MySQL db in AWS
  - [ ]  Create database table layout
  - [ ]  Connect api to db
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
- [ ]  Add content to readme file
  - [ ]  Project details
  - [ ]  How to clone and start the project etc

### Optional features

- [ ]  Add testing
  - [ ]  Unit testing
    - [ ]  React testing lib for frontend with jest
    - [ ]  Jest for backend - any other lib needed or just jest?
  - [ ]  Integration testing & end to end testing
    - [ ]  Use cypress
- [ ]  Setup ci/cd pipeline
  - [ ]  Circle ci for pipeline?
  - [ ]  Where to deploy too? Probably don’t need to? Unless wanna try somewhere free?
- [ ]  Try chromatic out for visual snapshot testing review?
- [ ]  Creating error logging for the site
  - [ ]  Store error logs in a mongodb database?
  - [ ]  Or just store in a file
- [ ]  Add docker
  - [ ]  Create dockerfile
  - [ ]  Setup containers
  - [ ]  Setup docker compose
  - [ ]  Try deploying somewhere?
