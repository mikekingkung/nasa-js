
https://images-api.nasa.gov/search?q=moon

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## A static version of the application was built initially.

It can be seen by navigating to the following URL:
i.e pasting the following in your browser
Accessing depends on where you clone the repository
You will have to change the URL appropriately
D:\Documents\react\nasa-js\src\static\index.html

NB You will also have to change to URLs in the html files in the static directories

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `Application Description`
Welcome to the Learn Space application. The application makes use of the NASA Video and Image API. The application allows keyword searches. Results are limited to 10-50 currently per search. It is also possible to save links and review them on the user details page.

The URL for the API being used is:
[https://api.nasa.gov/](https://api.nasa.gov/)

To see if the API is working you can paste the following URL into your browser. You should see data being returned.

[https://images-api.nasa.gov/search?q=moon](https://images-api.nasa.gov/search?q=moon)

The specific API and how to use is is defined here:
[https://images.nasa.gov/docs/images.nasa.gov_api_docs.pdf](https://images.nasa.gov/docs/images.nasa.gov_api_docs.pdf)

### `Copyright & Credits`
This application makes use of the NASA Open API for images. Content is displayed under Nasa Copyright. Users are signed in as Guest and can update the guest log in details.

### `Prequisites`
The following should be present to run the application
*	Java 8 - java version "1.8.0_101"
*	Git - Git git version 2.29.2.windows.2
*	Maven -  v 3.3.9
*	Npm 6.14.9
*	Node v14.15.1

### `Git Repositories`

### `ES6 / React JS`
[https://github.com/mikekingkung/nasa-js.git](https://github.com/mikekingkung/nasa-js.git)

### `Java Spring Boot`
[https://github.com/mikekingkung/NASA_REST.git](https://github.com/mikekingkung/NASA_REST.git)

### Clone from github as follows
git clone https://github.com/mikekingkung/nasa-js.git

and

git clone https://github.com/mikekingkung/NASA_REST.git

NB It is necessary to run the spring boot application for the react js application to work.


### `How to start the Spring boot application` 
*	cd to the location of the local git repository where the pom.xml file is located
*	mvn spring-boot:run

You should see the application start in the console logs with 
‘Started ConsumingRestApplication’


### `How to start the react js application`
*	cd to the location of the package.json file
*	npm i
*	npm run start

### `API to Spring boot application - REST endpoints`

Get Requests
* localhost:8080/getstaticimage/{image}
* localhost:8080/getimages/{searchterm}/{processinglimit}
* localhost:8080/users/getuser/{id}
* localhost:8080/users/getbyusername/{userName}
* localhost:8080/users/getlinksbyusername/{userName}

Post Requests
* localhost:8080/users /register  (body contains User object as post request)
* localhost:8080/users/saveuserlinks (body contains UserLinks object as post request)


### `KeyCloak`

KeyCloak is documented here:
[https://www.keycloak.org/documentation](https://www.keycloak.org/documentation)


Go to [https://www.keycloak.org/downloads](https://www.keycloak.org/downloads) and download the Distribution powered by the Wildfly zip

* Use the cmd command to open a windows cli
* cd c:/
* mkdir keycloak
* copy "c:\Users\Mike King\Downloads\keycloak-12.0.4.zip" c:\keycloak
or do the above steps through file explorer.
* Open File explorer, navigate to the c:\keycloak directory,
* Right click the zip file and extract all

NB The port offset is because the spring boot application is running using port 8080 on localhost.

### `To run keycloak`
* cd c:\keycloak\keycloak-12.0.4\keycloak-12.0.4\bin
* standalone.bat -Djboss.socket.binding.port-offset=100

### `Setting up an admin account:`
* Goto the following URL:
* http://localhost:8180/auth/
* create an admin user on the left hand side
with
* username: admin
* password: password


* Click on the administration console
Or goto the following url:
[http://localhost:8180/auth/admin](http://localhost:8180/auth/admin)

### `Create a realm`
A realm in Keycloak is the equivalent of a tenant. It allows creating isolated groups of applications and users. By default there is a single realm in Keycloak called master. This is dedicated to manage Keycloak and should not be used for your own applications.
Let’s create our first realm.
*	Open the Keycloak Admin Console. http://localhost:8180/auth/admin
*	Hover the mouse over the dropdown in the top-left corner where it says Master, then click on Add realm
*	Fill in the form with the following values:
*	Name: myrealm
*	Click Create
* You should have now added the realm myrealm

### `Adding a user`
* Select user on the left hand links and Add a user to myrealm
* Fill in the following details
* UserName: Mike
* First Name: Mike
* Last Name: King
* Remaining fields leave default values
* Hit Save

### `Set up Password`
* Select the CREDENTIALS tab
* set the password
* Mike
* password

### `Add a client:`
* Select Client on the Left Hand Panel
* Root URL: http://localhost:3000
* Valid Redirect URLs: http://localhost:3000/*
* Admin URL: http://localhost:3000
* Web Origins: http://localhost:3000

* Leave all other parameters as default values.
* Hit Save

* Now select the secured link in the application.
* You should now be asked to change your password. 
* Once you have changed it, you are authenticated. Stop the react-js application with ctrl-c.
* Clear cookies from your browser
* Re-run it without stopping the keycloak server. i.e npm run start 
*Once you have done this, you should now be able to use these login credentials when clicking on the secured page link to see the content of the secured page.
* Username: Mike
* Password: <the new password you input when asked to change it>


### `Testing`
In order run jest tests
* npm run test

### `Material UI`
A number of material-ui components have been used in this application, as I need to get more familiar with using them.

These should be installed when you do npm install (npm i)


