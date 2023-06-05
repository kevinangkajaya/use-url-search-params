# Introduction
- Template to create a new react template library.
- To create a new library manually, refer to https://github.com/kevinangkajaya/package-react-test.

# How to Create New Library from this template
- Download this git package to local directory. Use direct download, or if you cloned it, remember to remove the existing .git folder as it needs to be reinitialized to a new repository.
- Create a new repository on github.
- Open the folder on a code editor, such as Visual Studio code.
- Initialize your folder with git. Run the command given in the instruction on github.
    - `git init`
    - `git add .`
    - `git commit -m "first commit"`
    - `git branch -M main`
    - `git remote add origin git@github.com:YOUR_GIT_USERNAME/YOUR_GIT_PROJECT_NAME.git`
    - `git push -u origin main`
- Run `npm install`.
- Run `npm run test` to check the validity of the program.
- Check if storybook can be run with `npm run storybook`.
- Change data based on the requirements:
    - Change the README.md based on your requirement. Add at least:
        - Introduction/description of the package,
        - How to use it (npm install PATH and how to use on code).
    - Go to package.json. Replace "name" to `@YOUR_GITHUB_USERNAME/PACKAGE_NAME`
    - Change "repository.url" to `https://github.com/YOUR_GITHUB_USERNAME/PACKAGE_NAME`
- Go to src/components. Remove "Button" directory and add your desired new components. 
- Install required npm libraries as needed, as peer dependencies. Note that there are libraries that require some cautions:
    - Take care when using libraries that require Global CSS, as they cannot be used on NextJS pages directly. E.g. bootstrap. Bootstrap requires you to have "import 'bootstrap/dist/css/bootstrap.min.css'" line, but you shouldn't add it to the source files. Instead, add bootstrap as peer dependency and let users add the line themselves on their projects. For storybook, you can add the line to the storybook files directly.
- Inside your new directory, add *.stories.tsx and *.test.tsx as needed.
- Replace export on index.ts as required.
- Git commit and push.
- Before publishing, make sure you already have NPM account and .npmrc is already set up correctly. This file should be put on user folder (NOT project folder). You need to replace YOUR_PERSONAL_ACCESS_TOKEN with personal token (with publish permission) from npmjs. Format of .npmrc:
    ```
    registry=https://registry.npmjs.org/
    //registry.npmjs.org/:_authToken=YOUR_PERSONAL_ACCESS_TOKEN
    ```
- To publish your project:
    - Run `npm run rollup`. If not successful, check error messages and fix accordingly.
    - Run `npm version [major/minor/patch]`.
    - Run `npm publish`.

# Template for React library: (You can delete this line and above) 
# React Template Library
### Introduction
A template for react library.

### Installing as a package
`npm install @YOUR_GITHUB_USERNAME/{name_of_the_package}`

### Usage
```
import { Library } from "@YOUR_GITHUB_USERNAME/{name_of_the_package}"

return(
    <Library testing={"This is for testing"} doYouUnderstand={true} />
)
```

### Props 
| Name | Value | Default | Description  |
| ------------- | ------------- | --- | -----|
| testing | string | "" | Define what is this testing parameter for  |
| doYouUnderstand | bool | false | Do you understand what is it for? |

### Return Value
JSX Component/bool/string