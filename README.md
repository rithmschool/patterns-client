# patterns-client

React frontend for Patterns App

## General Structure

Like all React apps, this one is split into Components. 

* The app's topmost Component is rendered in `index.js`, and it's called `App` (defined in `App.js`)
* The root route (`'/'`) takes the user to the Login page and prompts them to log in with Google
* The activities route (`'/activities'`) takes the user to the `Activity > Detail > Default page`
* The assets route (`'/assets'`) takes the user to the page to view one asset (shows two sidebars)

## Behaviors

* When a user is created, they have one activity by default with three stages (`Research`, `Apply`, `Follow Up`)
* The user can browse all companies
* The user can add & edit `Company` assets with a modal element

## To Do

* The left and right sidebars are not connected to the backend yet
