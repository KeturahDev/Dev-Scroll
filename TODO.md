# MVP Product To Dos

this is like a braindump page for getting oriented in how this project is going to come together

reminder of behavior list

- As a user, when I first land on the webpage, I see the dashboard with minimial nav at the top.
- The dashboard is made up of a default list of recommended external links to browse through
- The bottom has a faux add button that directs user to signing in
- minimal nav is at top, linking to About, Sign Up/Sign in, Send Feedback
- As a signed in user, Edit Dashboard link is available. Links to Edit page
- In Edit page, the default links are deletable
- In Edit page, the Add Link button opens up component with an input of the link.
- _STRETCH GOAL: Add Link section displays preview of the inputted link. Customize preview options available on expansion._
- On save directs user back to home page, the updated dashboard.

### Dashsboard: Component and Content

- Visual of external links
  - MVP: preview links
  - AUTHENTICATED: if user's link doesnt have an available preview, allow users to generate thiir own "pretty link previews"
  - resources:
    - https://andrejgajdos.com/how-to-create-a-link-preview/
    - https://socialsharepreview.com/browser-extensions
- collect the default resources
- need a POC for editing preview

### Nav

- minimal
- links to About, Sign In/Sign up
- link to submitting feedback and FAQ
  - whats the point
  - how to add links
  - how to customize link previews
  - (stretch goal: how to customize link layout)

### About

- Demo video of how to use dashboard
- Blurb about what the product is and how to use it
- Demo video of how to preview added links
- collapsable Step by steps of adding links, customizing them, (stretch goal: and customizing their location)
- Button to signing up
- acknowledgment of it being a personal app done by me.

### Saved Links

- Define Schema Shape
- Define how this would be saved in database
- Default links dont need to be relational to user data, available without user data
-

# Tech Considerations

- confirm font family
  - considerations:
    - VSCode's code editor font family
- confirm component library
  - things to consider:
    - Customizability
    - Typography personalization ease
    - Card

### Brainstorm Questions:

- What type of database would be best, SQL or NoSQL?

  - https://www.coursera.org/articles/nosql-vs-sql
  - I personally really like schemas for keeping things predictable, especially for front end implementation. _Maybe this is availble superficially for NoSQL_
  - NoSQL seems like the best option for if I expect to make changes to how I store user link data
  - _Q: Is it possible to do multiple tables for non relational databases? How would they relate to eachother?_

- What should I consider when choosing the database?

  - The shape of the data Im saving

- How do I save the formation of the users links on their dashboard if I want to allow them to personalize the layout in a complicated grid formation?
  - define data values for every square of col/row of the grid of the dashboard (is that crazy? that seems crazy to me.)
  - ^ wouldn't actually be that crazy if I went with NoSQL. If I wanted to add complex directions for the layout of the links for some users, it wouldn't need to be predefined for all users, just the ones that select it
  -
- How do I save customized previews for links?
  - need to complete POC for how this would be coded and captured in the FE
  -

### Data/Schema Playground:

data to capture:

- user login info (excripted of course)
- user links
- user link preview data
- _stretch goal:_ link positioning
- tags for links?

user tables needed?
primary default links captured in database
