Getting up and Running:

- Clone this repository locally
- In the root directory of this repository, run `yarn` or `npm install`
- After that, run `yarn dev` (or `npm run dev`) to start the proxy server and build the front-end (Note: it will watch for changes in `/src` and recompile for you).

Instructions:

- The goal of this project is to update this basic web app to display some basic information about the countries of the world. The data for your page will be coming from the JSONs on http://country.io/data/, but will be accessible to you at `/api/[name of file]`, so for example, `/api/names` will return this file: http://country.io/names.json.
- You're welcome to use external libraries, but the goal of this assignment is to see your coding skills so use them sparingly. The vast majority of these features can be built using no libraries at all.
- Features to Add:
  - Add a list to the page containing the names of all the countries return by `/api/names`.
  - Updating the value of the `continent` select will filter your list to just the countries that exist on that continent.
  - Add a dropdown with an option for each country. Selecting a country in the dropdown will remove the list of all countries and list the specific country's information:
    1. Full Name
    2. Continent
    3. Three-letter ISO Code
    4. Capital Name
    5. Phone Code
    6. Three-letter Currency Code
    7. Currency Symbol, if avaible, in the `currencies.js` file
    8. Image of the country's flag (use https://www.countryflags.io/ for the image), if available
    9. Link to Wikipedia article (assume wikipedia url is based off country name in `/api/names`)
  - In the list of all country names, clicking on an individual country's name will also remove the list of all countries and list the specific country's information
  - Render a loading state while data is being fetched from the API

Extra Credit:

- Add pagination to the list of all countries. Each page should contain 20 items and users should be able to, at least, move one page forward and backward at any one time.
- Styling: make it look nice
- Separate the list of countries and the details of an individual country into two separate pages. The list view should be accessible at http://localhost:3000/ and the details view should be accessible at http://localhost:3000/[two letter code of the country], e.g. http://localhost:3000/us for the United States.

How to Turn it In:

- Push a completed assignment to a new repository on something like Github
- Send a link to the repository. If you would like to keep the repository private, give @cgatling access to the repository.
