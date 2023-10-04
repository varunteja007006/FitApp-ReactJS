# FitApp 💪
This app is encourages users to add their daily fitness routine.

Built using MERN Stack - MongoDB, Express JS, React JS, Node JS
-------------------------------------------------------------------------------------------------------------------------------

Use Nodemon package globally for refresh of changes.
# npm install nodemon
-nodemon server.js -> saved in scripts of package.json as 'dev'
-npm run dev (Runs the backend)

--------------------------------------------------------------------------------------------------------------------------------

# npm install dotenv
1. create a file with format '.env' at path as 'backend/.env'
2. File should contain
    PORT=XXXX
    MONGO_URI = mongodb+srv://xxxxx:xxxxxxxxx@mernstack.yzzbe4o.mongodb.net/?retryWrites=true&w=majority
    SECRET = xxxxxxxxxxxxxxxxxxxxxxxx

-------------------------------------------------------------------------------------------------------------------------------

# Mongo DB setup:
Create account > create database > Choose the plan, cloud provider, give cluster name.

* Security 
    1. Give username and password
    2. Network access setup the IP address

* Go to Database tab
    1. click 'connect' > click 'connect your application' > get the connection string

-------------------------------------------------------------------------------------------------------------------------------

* If CORS error occurs in frontend/package.json add proxy.
    "proxy": "http://localhost:4000"

-------------------------------------------------------------------------------------------------------------------------------

# Understanding Bootstrap
Please refer the link given here,
https://react-bootstrap.github.io/getting-started/introduction/

-------------------------------------------------------------------------------------------------------------------------------

# To format Date
we use datefns package 
npm i date-fns

-------------------------------------------------------------------------------------------------------------------------------

# Project explanation by The Net Ninja 🥷
For more info check out The Net Ninja - https://www.youtube.com/watch?v=98BzS5Oz5E4&list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE
