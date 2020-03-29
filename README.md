# Drag and drop componenent -- Angular Material

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.5.

This is a demonstration how to instal Angular material into your project

* Firstly, follow the indication explain here [Angular material - getting start](https://material.angular.io/guide/getting-started) or use this commande in your terminal

```bash
ng add @angular/material
```

* Then, choose the component that you wana use (example : [Drag and drop](https://material.angular.io/cdk/drag-drop/api))

* To display this component you need to import the DragDropModule that you want to display by adding the following lines to your app.module.ts file.:

```bash
import {DragDropModule} from '@angular/cdk/drag-drop';
…
@NgModule ({....
  imports: [...,
  DragDropModule,
…]
})
```

* Finally, look at the example of the component to know how to create the interface component [Drag and drop - examples](https://material.angular.io/cdk/drag-drop/examples)

## Clone the repository

If you want clone a copy of the repository :

```bash
git clone https://github.com/githubjeremy/draganddropproject.git
```

And run this commande to install node_module :

```bash
npm install
```

## Bootstrap

You have the possibility to install bootstrap and all dependences that you want :
```bash
npm install bootstrap@versionnumber --save
```
After running the previous commande add this follow line in the styles of angular.json :
```bash
"styles": [
    "node_modules/bootstrap/dist/css/bootstrap.css",
    "src/styles.scss"
],
```

## Development server

Run `ng serve` for a dev server.
```bash
ng serve --o
```
Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component.
```bash
ng g c componentName
```
You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project.
```bash
ng build
```
The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
```bash
ng test
```

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
```bash
ng e2e
```

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
```bash
ng help
```