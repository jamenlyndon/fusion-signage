# Fusion Signage (code test)
Hello and welcome to my code test submission for the position as a Senior Frontend Developer with Fusion Signage!
<br>
- [View the role on Seek](https://www.seek.com.au/job/86418322)
- [View the test specification](https://github.com/jamenlyndon/fusion-signage/tree/main/brief)

As the purpose of this is to showcase my skills as a developer and designer, everything included in this project was created from scratch.
<br><br>
If you'd like to see some more examples of my work, please take a look at my online portfolio:<br>
https://jamenlyndon.com/


## Design
Here is the supporting Figma design:
<br>
- [View the design in Figma](https://www.figma.com/design/uSMK4aHxZGFn7Qqolsj4Fe/Fusion-Signage--Coding-Test-?node-id=0-1&m=dev&t=wo1HE52lBxcbcxyQ-1)
- [View a PDF export](https://jamenlyndon.com/_other/fusion-signage/design.pdf)

This Figma design uses [variables](https://github.com/jamenlyndon/fusion-signage/blob/main/app/scss/partials/_variables.scss) and [core components](https://github.com/jamenlyndon/fusion-signage/tree/main/app/components/core), which are also setup in this repository.
<br>
Colours and typography were referenced from the [Fusion Signage](https://fusionsignage.com.au/) website.


## Tech stack
Here's the tech stack I built this with:
- [Next.js](https://nextjs.org/)
- [SASS](https://sass-lang.com/) / [CSS Modules](https://nextjs.org/docs/app/getting-started/css#css-modules)
- [Jest](https://jestjs.io/) / [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

In addition to the above, code linting has also been included in this project. The linting includes the following standard tools (with custom configurations):
- [ESLint](https://eslint.org/)
- [ESLint Stylistic](https://eslint.style/)
- [Stylelint](https://stylelint.io/)


## Codebase overview
To better understand where everything is and what it does, take a look at the below info:
```javascript
app/
  layout.tsx // The entry point for the app
  page.tsx // The main demo page
  style.module.scss // The SASS for the demo page

  // API
  api/savePowerTimers/route.ts // The "savePowerTimers" endpoint

  // Components
  components/
    core/ // The core components
      button/
      forms/
        checkbox/
        timePicker/
        toggle/
      snackbar/
      typography/
        h1/
        text/
    editPowerScheduleTimers/ // The main "edit power schedule timers" component

  // Fonts
  fonts/

  // SASS
  scss/
    style.scss // The app's main SASS
    partials/ // Partial SASS files which can be dynamically included
      _fonts.scss
      _global.scss
      _mixins.scss
      _variables.scss
```


## API
The [Save Power Timers endpoint](https://github.com/jamenlyndon/fusion-signage/blob/main/app/api/savePowerTimers/route.ts) contains the function `savePowerTimers` provided in the brief.

Please note -<br>
This function has been modified slightly (sorry I know the brief said explicitly not to do this). It's only had minor code added for reasonable testing purposes and to fix typescript errors that otherwise would have persisted. Feel free to remove the test code from this function / replace it entirely!


## Automated testing
Automated testing has been included in this project. To run these tests, use `pnpm run test` in your development console.
<br><br>
The main [Edit Power Schedule Timers component](https://github.com/jamenlyndon/fusion-signage/tree/main/app/components/editPowerScheduleTimers)  tests the rendering, form validation and API submission.
<br>
The [core components](https://github.com/jamenlyndon/fusion-signage/tree/main/app/components/core) simply test their basic props.
<br><br>
I would love to take this testing a little further, but as this is only a coding test I think what's there should suffice for now.



## Installation
### Requirements
1. Install [Git](https://git-scm.com/)
2. Install [Node.js](https://nodejs.org/)
2. Install [pnpm](https://pnpm.io/)


### Setup instructions
1. Clone the Git repository
```javascript
git clone https://github.com/jamenlyndon/fusion-signage.git
```
2. Install the dependencies
```javascript
pnpm install
```

3. Start the server
```javascript
pnpm run start
```

4. Open `http://localhost:3000` in your browser to view the app

5. (Optional) You can also use the following commands for development purposes
```javascript
// Watch for typescript errors and start the server
pnpm run watch

// Build for deployment
pnpm run build

// Run the automated testing
pnpm run test

// Run the linting
pnpm run lint
```
