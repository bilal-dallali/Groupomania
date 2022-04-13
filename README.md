CONFIGURE FRONTEND
- in front folder run "npm init" to install all dependencies
- run "npm run serve" to launch the server on port 3000

CONFIGURE BACKEND
- in back folder run "npm init" to install all the dependencies
- add an .env file to link with a mysql database with DB_HOST = your localhost, DB_USER = your user, DB_NAME = the name of your database and DB_PASSWORD = your password
- on your database create a table called Users with an autoincremented id, and as columns username, email, password, phone, job, website, github, linkedin, file
- create a table called Uploads with an incremented id and then as columns title, descripton, file, author, token, authorpicture
- create a table called Comments with as column an incremented id, author, comment and token
- run "nodemon index" to launch the server on port 3001