CONFIGURE FRONTEND
- in front folder run "npm init" to install all dependencies
- run "npm run serve" to launch the server on port 3000

CONFIGURE BACKEND
- in back folder run "npm init" to install all the dependencies
- add an .env file to link with a mysql database with DB_HOST = your localhost, DB_USER = your user, DB_NAME = the name of your database, DB_PASSWORD = your password, and PORT = the port you want to use, considering that the frontend is on port 3000, don't use this one, 3001 is perfect
- on your database create a table called Users with an autoincremented id, and as columns username, email, password, phone, job, website, github, linkedin, file
- create a table called Uploads with an incremented id and then as columns title, descripton, file, author, token, authorpicture
- create a table called Comments with as column an incremented id, author, comment and token
- run "nodemon index" to launch the server on port 3001

commmand sql to use to create tables
- CREATE SCHEMA groupomania;
- CREATE TABLE groupomania.Users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(45) NOT NULL,
  email VARCHAR(45) NOT NULL,
  password VARCHAR(200) NOT NULL,
  phone VARCHAR(45) NOT NULL,
  job VARCHAR(45) NOT NULL,
  website VARCHAR(45) NOT NULL,
  github VARCHAR(45) NOT NULL,
  linkedin VARCHAR(45) NOT NULL,
  file VARCHAR(45) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE INDEX email_UNIQUE (email ASC) VISIBLE);

- CREATE TABLE groupomania.Uploads (
  idUploads INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(45) NOT NULL,
  description VARCHAR(1000) NOT NULL,
  file VARCHAR(45) NOT NULL,
  author VARCHAR(45) NOT NULL,
  token VARCHAR(500) NOT NULL,
  picture VARCHAR(45) NOT NULL,
  PRIMARY KEY (idUploads));

- CREATE TABLE groupomania.Comments (
  idComments INT NOT NULL AUTO_INCREMENT,
  author VARCHAR(45) NOT NULL,
  comment VARCHAR(45) NOT NULL,
  token VARCHAR(500) NOT NULL,
  PRIMARY KEY (idComments));
