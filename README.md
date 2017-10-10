# patterns-client

React frontend for Tradecraft Patterns App

## Getting Started
fork repo (https://github.com/rithmschool/patterns-client)

```bash
git clone https://github.com/[YOUR_REPOSITORY]/patterns-client.git
cd patterns-client
npm install
touch .env
```

### Add to .env file
```
REACT_APP_UPLOADCARE_PUBLIC_KEY=* 
```
(verify what * is with your team)

### Starting the Webpack Development Server
```bash
npm start
```

## General Structure

This app follows atomic design principles for React components based on [ARc (Atomic React)](https://github.com/diegohaz/arc).

Redux is used, and all React components utilizing Redux state belong in the `containers` folder.

[Storybook](https://storybook.js.org/) is used for designing components.

[styled-components](https://github.com/styled-components/styled-components) are preferred over external CSS.
