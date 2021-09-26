# morden website by react
In order to really move forward with any React application beyond just the individual component level, you need an outer layer that provides styles to help you layout your site. But contrary to what others would have you believe, it's not to hard to use some basic CSS and a few React Component packages to help us achieve some basic levels of responsiveness in an application.
A lot of the time you will want the freedom of not being tied to a framework like Bootstrap or Material, you want to roll your own, but you also don't want to reinvent the wheel. In this tutorial we will use Flexbox, some basic media queries to create breakpoints determining how to render our layout.

I have a KendoReact Menu component that I know I want to use. It will need to switch between vertical and horizontal modes in order for me to use it the way that I envision. For mobile, I want my menu component to render horizontal (left to right) at the top of the page, like a top-nav menu bar, but on Tablet and desktop, I would like the menu to be vertical (top to bottom) along the left side of the page.

Initially, we will start with just one breakpoint and later in the tutorial add another. I'm going to start with an already setup StackBlitz demo, just so I don't have to go over any of the React setup. We want to focus just on building our application, not on setting it up. If you want to follow along by coding, you can fork this initial StackBlitz demo, otherwise just read along knowing that you can grab any StackBlitz example I provide throughout the course (there are four of them) to play with the code. Each StackBlitz demo will contain the end product of all of the steps we have talked about up until that point.


# Technology use
  * HTML
  * CSS
  * Bootstrap
  * JavaScript
  * React
# live side Link

This is  [my project](https://muslim-developer-41c72c.netlify.app/).

## JSON data 

In the project directory I use Fake JSON data.here the folder is [fake Data](fakeData.json)
