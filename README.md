# ng2ol3
> A combination of <b>Angular2 & OpenLayers3</b> using <i>TypeScript, RxJS & SCSS (Bourbon) </i> for creating customizable, modern web maps

## Install
[Node.js with npm](https://nodejs.org/en/download/) is required. The minimum version of Node.js is 4.x.x, the minimum version of npm is 3.x.x. You can check the versions with the following commands: ```node -v``` and ```npm -v```. It is possible that the Node.js is the correct version but npm is only v2.x.x (this can happen if you use the current LTS installer). In this case install <b>npm3</b> like this: ```npm install npm3``` and from now on <b>use npm3 instead of npm</b> (e.g. if you see ```npm install```, type ```npm3 install``` instead).

Run ```npm install``` and ```npm run typings install``` to download all dependencies.

As a text editor I recommend the free [Visual Studio Code](https://www.visualstudio.com/en-us/products/code-vs.aspx). (Angular2 is developed with it!)

## Live example
An online example can be viewed [here](http://188.166.116.137/ng2ol3).

## Usage
1. If you wish to see the built-in demos or modify the source files, simply run ```npm start``` to load the demo page on ```localhost:3000```. This starts Node.js and watches for file changes until you shut it down. For example, if you change a .ts, .scss or .html file, Node.js instantly translates .ts into .js, .scss into .css, and the page is reloaded by itself.
2. If you would like to use ng2ol3 as an npm library in your Angular2 project, you can also do that since [ng2ol3 is on npm](https://www.npmjs.com/package/ng2ol3) as well. A simple example can be found in the ```ng2ol3-examples.zip``` file. All you have to do is unpack it somewhere on your machine, and run ```npm install``` and then ```npm start```.

## Present & Future
This is just a basic demo with two examples: simple demo and sidebar demo. In the near future I intend to add/extend other widgets such as header, layertree, featureinfo panel, printing etc. RxJS is not yet implemented. More examples will arrive as soon as the project becomes smarter.
Ng2ol3 has recently been updated to work with Angular2 RC6.

<img src="assets/img/screenshots/demo_20160908.png" width="100%">

## Author
```ng2ol3``` was created by [Gergely Padányi-Gulyás](http://www.gpadanyig.com)

<img src="assets/img/logo/favicon-96x96.png">
