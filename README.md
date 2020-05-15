# Simple MEAN Stack Application

  ###### Demonstrating simple angular application with Students management
  
  #### Tested and written environment
  
    Mongo version - 4.2.6
    Express JS version - 4
    Angular version - 9
    Node version - 13.3

How to set up to run this project.

   1. INSTALL LATEST NODE JS
        > [Nodejs download center](https://nodejs.org/en/download/)    
   2. INSTALL ANGULAR
        > npm i -g @angular/cli
   3. INSTALL EXPRESS JS generator
        > npm install -g express-generator        
   4. INSTALL MONGO DB AND SETUP 
        > [tutorial point instructions](https://www.tutorialspoint.com/mongodb/mongodb_environment.htm)
 
### Configure and Connect MongoDB
  
     Open MongoDB shell on your server by typing below command on command prompt:
     > mongo
     
     Switch to the database admin
     > use admin
     
     Create the root user
     > db.createUser({user:"admin", pwd:”admin@admin", roles:[{role:"root", db:"admin"}]})
     
     Exit from the MongoDB shell.
     > exit

     Connect MongoDB Again
     > mongo -u admin -p admin@admin --authenticationDatabase admin
    
     You can see the mongo connecting. Check the databases using the following
     command:
     
     > show dbs
     > use admin
     > db.createUser({user:"pec-admin", pwd:"admin@pec", roles:[{role:" ​ readWrite " ​ ,
     db:"pec"}]})
     > exit

### Download or clone this application
   [download git if you want](https://git-scm.com/downloads)
  ##### if git is already installed on your system
   > git clone https://github.com/shadowhijackers/mean-stack.git
    
### RUN Application
    go to your downloaded folder.

#### SETUP ANGULAR PROJECT
   > run the following commands
    
    1. cd angular-crud
    2. npm i

##### SETUP EXPRESS JS PROJECT
   > run the following commands
    
    1. cd crud-api
    2. npm i

#### RUN ANGULAR PROJECT
   > run the following commands
    
    1. cd angular-crud
    2. ng serve --open

##### RUN EXPRESS JS PROJECT
   > run the following commands
    
    1. cd crud-api
    2. npm run start   
    
###### To see this application on browser. open your browser and enter localhost:4200/

###### To see stored data on your db run following commands on your cmd prompt 
     
     mongo -u admin -p admin@admin --authenticationDatabase admin 
     
     'Now run following in mongo shells'
       
     > use pec
     > db.students.find({}).pretty();

