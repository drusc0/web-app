# PersonalWeb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Deploy

Included in the root folder of the project is the `firebase.json` that should allow for a quick deployment. In case of some issues, you can initiate the firebase project following the tutorial in [scotch.io](https://scotch.io/tutorials/deploying-an-angular-cli-app-to-production-with-firebase). 

This project has been deployed using firebase. Run `firebase deploy` to deploy the new code.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## FAQ
### Running into some issues?

#### Permissions
A frequent problem when installing angular (you will need angular/cli) is the permissions to set the package in the /usr/local/ folder. We don't want to make this something you can only run with sudo, so we allow the current user (hopefully yourself) to write. The following command should help:
```
sudo chown -R $USER /usr/local/lib/node_modules
```

**Note:**: taken from this [site](https://flaviocopes.com/npm-fix-missing-write-access-error/) 

#### Building issues
While running `ng build`, there was an issue with the statement `Job name "..getProjectMetadata" does not exist.
` and this is related to the build devkit. You can check this stackoverflow [ticket](https://stackoverflow.com/questions/59447679/an-unhandled-exception-occurred-job-name-getprojectmetadata-does-not-exist).
```
npm i @angular-devkit/build-angular
```

**Note:** the upgrade did not work for this project, so I downgraded to the version state as an alternative in the tic, `npm i @angular-devkit/build-angular@0.803.24`.