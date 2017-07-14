# patterns-client

React frontend for Patterns App

## Getting Started
```
fork repo (https://github.com/rithmschool/patterns-client)
$ git clone https://github.com/[YOUR_REPOSITORY]/patterns-client.git
$ cd patterns-client
$ npm install
$ touch .env
```

### Add to .env file
```
REACT_APP_UPLOADCARE_PUBLIC_KEY=* 
(verify what * is with your team)
```

### Starting the Frontend Server
```
open a terminal
	$ npm start
```

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

## Route and Component Map
App.js

* Route ‘/’
	* Component: Login
* Route ‘/auth/google/callback’
	* Component: Auth
* Route ‘/activities’
	* Component: Main
		* Component: Modal (toggle)
		* Component: Sidebar Left (static right now will have to change)
			* Component: UserProfile
			* Component: ActivitySideBox (multiple)
		* Component: Content
			* Component: TopNav
			* Component: Header
				* Route - exact - ‘/activities’
					* Component: HeaderActivityIndex
				* Route - exact - ‘/activities/:activities’
					* Component: HeaderActivityShow
			* Component: InnerContent
				* Route ‘/activities/browse’
					* Component: BrowseContainer
						* Component: Company (multiple)
				* Route - exact - ‘/activities’
					* Component: ActivitiesDashboard
						* Component: Activities (multiple)
				* Route - exact - ‘/activities/:activities’
					* Component: ActivityContainer
						* Component: BrowseCompanies
						* Component: StageContainer(given DnD context)
							* Component: SmartStage(multiple) (Target context)
								* Component: Stage (multiple)
									* Component: SmartStageAsset(Drag context, Target context)
										* Component: StageAsset

* Route ‘/assets’
	* Component: Asset
		* Component: Modal (toggle)
		* Component: Sidebar Left (static right now will have to change)
			* Component: UserProfile
			* Component: ActivitySideBox (multiple)
		* Component: SmallerContent
			* Component: TopNav
			* Component: Header
				* Route - exact - ‘/assets/companies’
					* Component: HeaderCompanyIndex
				* Route - exact - ‘/assets/companies/:company’
					* Component: HeaderCompanyShow
			* Component: InnerContent
				* Route ‘/assets/companies’
					* Component: BrowseContainer
						* Component: Company (multiple)
				* Route - exact - ‘/assets/companies/:company’
					* Component: CompanyInfoContainer
						* Component: CompanyDetail (multiple)
			* Component: Sidebar Right (static right now will have to change)
