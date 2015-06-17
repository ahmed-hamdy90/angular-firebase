[part 1](http://code.tutsplus.com/tutorials/creating-a-web-app-from-scratch-using-angularjs-and-firebase--cms-22391) :

Clone the [angular-seed](https://github.com/angular/angular-seed)
```
git clone https://github.com/angular/angular-seed.git
```
Run commands:
```
npm install
bower install
```
To download node packages and Front-end components for project

First Remove ```view1``` and ```view2``` modules into project Then Replace them with two new modules authentication and dashboard

authentication module responsible for authentication logic [sign in - registration] and dashboard module responsible for home screen for users after they sign-in into App

write the declaration for myApp Module in app.js file and write Configuration for myApp Module into config.js file

Using bower we will install bootstrap, angularfire and firebase modules (use angularfire and firebase modules instead of include them as script into index.html file)       
