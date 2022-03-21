# Veritone Interview Coding Challenge
This app serves as my completed Veritone interview challenge
## Installing and running
The app is standalone and does not require any database connections or upstream service calls. It is based in Node, and persists data to a local file using node-persist in leiu of spinning up a separate database instance.

### Requirements
- A modern version of Node (I used 17.7.1)
- Write access to local files in the git repo (if you cloned the repo, you have this)
- A browser

### To install
```
git clone git@github.com:retsoksirhc/veritone-interview.git
cd veritone-interview
npm install
```

### To run
```
npm start
```

### To access the UI
Open your browser to http://localhost:3000/ and explore the application

## Performance
Since the server doesn't connect to an external database, GraphQL calls to the node server on a local machine are nearly instant. There is a loading overlay that appears after 10ms have passed, but it doesn't show unless you throttle the network connection down via the browser's devtools.

In order to see the loading overlay, change your network speed to Fast 3g. The overlay will now show when adding, editing, deleting, or refetching the list of items.

I also used source maps in the webpack config during development, but have turned them off to help control bundle size, so that throttling to fast 3g doesn't make it take a long time for the bundle to load.

## Other considerations
The JS bundle itself is a little bigger than I'd like for this simple of an application, but I think Apollo Client is the biggest contributor to it. I opted to keep Apollo Client in the bundle even though it's a little bloated, because it solves 2 issues with 1 module. I needed both a way to connect to my GraphQL server, and a way to manage app state. Apollo Client provides both of these simultaniously.

For the Loading Overlay, there's a little bit of weird behavior when Apollo Client moves between doing a mutation and the refetching the query to get the list items. The overlay itself unmounts, since it gets rendered from the modal, and then another instance mounts from the list view. For the purposes of this challenge, I thought that was acceptable. In a real production app scenario, I'd either a) Use direct apollo cache manipulation with the data returns from the mutations to negate the need to refetch or b) raise the loading state up to the list container so any subcomponent could set it, thereby making only 1 instance of the overlay required.

For the quantity input on the Add Item form, I threw out a guess that the max amount of items needed would be less than 100, but this is easily configurable via a constant. I didn't think the placeholder made much sense, since there will always be some number of items that are needed (otherwise we wouldn't add them to the list), so I defaulted to 1 instead. I used the standard browser select element (in my experience users prefer to see controls they're used to, so using the standard browser/device controls generally work better), but I did style the form field to match what was on the Figma mocks.

For mobile device views, I had to set some min-widths to get the elements to not look bunched. I also decided to get rid of the mismatched left and right margins around the whole list on smaller screens, as it looked a little weird when the right edge was close to the edge of the window but the left wasn't. For below 800px, I just centered the list instead. In a real life scenario, I'd call it out to the designer and suggest centering at the lower breakpoint, but leave the decision ultimately up to them.