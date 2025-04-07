> Webd:3012

# Coding Assignment 14: Portfolio Website

## Project Setup

Update CRA:

    npm install -g create-react-app

Initialize react project with typescript:

    npx create-react-app@latest my-app --template typescript

## Building the Portfolio Site

Create Navigation bar in `App.tsx` and `App.css`:

  - **logo**
  - **aligning items with flex**
  - **hover styling**

Import component library:

     npm install github:cmustapha155/webd-3012-assignment-13#main

- Note that the names of the library's remote repository (webd-3012-assignment-13), local folder linked to the repo (ui-garden-build-checks), and the name of the library as defined in the package.json file (ui-garden-f) are not the same
- after installing the library, its name is used to refer to it in code

❌ Error on the import statement to import a component to my portfolio site:

    Cannot find module 'ui-garden-f' or its corresponding type declarations.

- I checked that everything was installed properly, the library is present in node_modules, the library's package file is properly configured...
- **`dist`** folder was not committed to the remote library repo, as it was in `.gitignore`
- ✅ removed `dist` from the .gitignore file and pushed it to the remote repository, then reinstalled the library

Using the HeroImage:

    import { HeroImage } from 'ui-garden-f';

## Containerizing the Application

### Create Production Build

Create a production build (similar to storybook-static):

    npm run build

### Dockerfile

## How to Get the Application Running at `localhost:5575`

