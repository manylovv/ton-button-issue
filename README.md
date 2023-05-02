# Connect wallet issue

I use react-router-dom and @ton-connect/ui-react and they don't seem to work well together.


Let's say we have the 'Connect wallet' button on the '/' route, and we also have a /about route with some content. 

When using the `<Link />` component provided by the react-router-dom package, if we move from '/' to '/about' and then back to '/' (using `<Link />` or the back arrow in the browser), the 'Connect wallet' button just disappears.

It's easier to understand this issue with by using a real app, so you can follow steps below to replicate it locally.

To replicate the issue you need to **clone this repo locally** and run these commands: 

```bash
npm install
npm run dev
```

Then follow these steps:
1. Open `localhost:5173` in your browser
2. Click the 'Go to about page' link
3. Go back to the home page by cliking 'Go to home page' link (you can also use browser history back arrow)
4. You can see that 'Connect wallet' button just disappears.
