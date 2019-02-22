# Keep Ahead

## Description
A small web app designed to assist users in donating food to the homeless. The app allows a user, when approached by a homeless person, to donate an amount of money of their choosing to a local eatery. The venue then receives a notification of the donation and the amount. Attached to each donation is the name of the recipient and a passphrase decided on by the donator, these allow the venue to identify the recipient and offer them the amount donated in food or drink.

## Dependancies

```
Javascript - base Language.
Node - Javascript framework.
Javascript React - Library for Javascript.
Jest - Testing framework for Javascript & React.
Enzyme - Front end testing framework for React.
ESLint - Javascript/React Linter.
Coffee - A hot brown liquid known for its life giving benefits
Alex's Calves - The definition of defined and unerring moral support

```

## Installation
1. Clone or download this repo.
    - i.  If needed please go to this link to view the back end RAILS API :   https://github.com/AlinaGoaga/SocialProject_Rails
2. Run ``` npm install ``` to install dependancies.
3. Run ``` npm start ``` to open the page in your browser.

## Testing
- Testing has been carried out with Jest to test all small units of code and ensure our functions function as predicted.
- Test coverage currently reports as :
- Tests are run in the console via the ``` npm test ``` command.
- Test Coverage can be viewed by running ``` npm test -- --coverage ```
    - This will generate a test coverage file you will have to ** gitigignore **
    - You can use this file to view an HTML output of our test coverage.
    - To see HTML displays of coverage run ```open coverage/lcov-report/[filename you wish to see coverage for]```


## Approach

Our approach to this task was two pronged. Our team of 6 split into 2 teams of 3, one to work on the backend rails API linked above and one team to work on the repo presented here.

We worked with React for the first time and as such our initial branch, called POC(proof of concept) was not fully test driven but a spike into new code ideas and implementations that resulted in a working proof of concept, we could get react to communicate with a rails controlled database.

Moving from the POC we decided on our Minimal Viable Product. And worked towards this over the first two day sprint.

Following Agile methodologies we enacted twice daily stand ups, complimented by small daily retro's and larger more in depth retros at the end of each sprint.

Our code approach was to follow a good BDD/TDD cycle as much as we could, which while difficult with the new tech we managed to maintain the standard of high test coverage and test driven coding throughout.

## Components & their responsibilities

The app consists of < 4 > components each responsible for a small part of the app.
  - showvenues
  - displayVenue
  - donation
  - donationsForm

### showvenues

  - Responsible for rendering the list of all venues currently in the database.
  - Renders each venue with its name and address
  - The render relates to the state of showvenues, the state named *showvenue* is a boolean defaulting to false, when false the render displays the list of venues.
  - Once the button is clicked to view a venue the state switches to false, the setState function then re-renders the div showing only the next component.

## displayVenue

  - Is given the list of all venues and the id of the button clicked when it is called.
  - Renders the correct venue by comparing the button ID passed with the the Index of the venue in the array.
  - Once the *showvenue* state equates to true it uses the above to render the venue.
  - Responsible for showing the selected venue, displaying its full details and rendering as button to select the venue to donate.
  - It again uses a state *showConfirmation* to control when the donation form renders.

## donation

- Is passed the venue object of the selected venue when called.
- It uses this object to match it via the ID to its corresponding database entry on the rails API.
- It uses the above information to render the donation form to get the donation details, it then handles the form the submission to the API to ensure data is persisted. The donation should appear in an array property of the venue object on the rails side (see Rails side ReadMe for more details).

## donationsForm

- A form which takes the donation amount, recepient name and passphrase and feeds it back to the donation component to send the data to the rails API.
