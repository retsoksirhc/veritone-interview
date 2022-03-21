# Veritone Interview Coding Challenge
This app serves as my completed Veritone interview challenge
## Installing and running
The app is standalone and does not require any database connections or upstream service calls. It is based in Node, and persists data to a local file using node-persist in leiu of spinning up a separate database instance.

### Requirements
- A modern version of Node (I used 17.7.1)
- Write access to local files in the git repo (if you cloned the repo, you have this)
- A browser

### To install
```
git clone git@github.com:retsoksirhc/veritone-interview.git
cd veritone-interview
npm install
```

### To run
```
npm start
```

### To access the UI
Open your browser to http://localhost:3000/ and explore the application