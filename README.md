** This is an ammendment of the angular-seed [README.md][README.md] **

# The Wallet App

Even though it is a fairly entry level application with regards to implemented features, 
best practices of trade and approach have been used as though it would get real world use. 

## Getting Started

To get you started you can simply clone the walletapp repository and install the dependencies:

### Prerequisites

A number of node.js tools are used to initialize and test the app. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone Wallet App

Clone the walletapp repository using [git][git]:

```
git clone https://github.com/cksanders/walletapp.git
cd walletapp
```

### Install Dependencies

There is a preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files

### Run the Application

Wallet App is preconfigured with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/app/index.html`.

## Testing

There are two kinds of tests in the walletapp application: Unit tests and End to End tests.

### Running Unit Tests

The easiest way to run the unit tests is to use the supplied npm script:

```
npm test
```

### End to end testing

The easiest way to run the end-to-end tests is to use the supplied npm script:

```
npm start
```

In addition, since Protractor is built upon WebDriver we need to install this.  The walletapp
project comes with a predefined script to do this:

```
npm run update-webdriver
```

Once you have ensured that the development web server hosting our application is up and running
and WebDriver is updated, you can run the end-to-end tests using the supplied npm script:

```
npm run protractor
```

## Updating Angular

You can update the tool dependencies by running:

```
npm update
```

You can update the Angular dependencies by running:

```
bower update
```


### Running the App during Development

The walletapp project comes preconfigured with a local development webserver.  It is a node.js
tool called [http-server][http-server].  You can start this webserver with `npm start` but you may choose to
install the tool globally:

```
sudo npm install -g http-server
```

Then you can start your own development web server to serve static files from a folder by
running:

```
http-server -a localhost -p 8000
```

Alternatively, you can choose to configure your own webserver, such as apache or nginx. Just
configure your server to serve the files under the `app/` directory.

## References

For more information on AngularJS please check out http://angularjs.org/

[README.md]: https://github.com/angular/angular-seed/blob/master/README.md
[angular-seed]: https://github.com/angular/angular-seed/
[git]: http://git-scm.com/
[bower]: http://bower.io
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[protractor]: https://github.com/angular/protractor
[jasmine]: http://jasmine.github.io
[karma]: http://karma-runner.github.io
[travis]: https://travis-ci.org/
[http-server]: https://github.com/nodeapps/http-server
