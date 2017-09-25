# shared
Repository with shared components, services and diretives, for Angular 4 Projects.

## Using with npm
`npm install portal-shared`
### Importing: ###
`import { FooterModule } from 'portal-shared';`

## Using with git submodule
`git submodule add git://github.com/pedlop/shared.git portal-shared`
* That will create a directory 'portal-shared', into the root of your project;
### Importing: ###
* Put all the path, like:
`import { FooterModule } from '../../../../portal-shared';`
#### For import with just the name of directory: ####
 * Put this directory into **node_modules**
* The path will be:
`import { FooterModule } from 'portal-shared';`
