---
title: Gatsby Summary
date: "2018-08-09T22:17:32.169Z"
---

1. Gatsby is a blazing-fast static site generator for React.
2. React’s component architecture simplifies building large websites by encouraging modularity, reusability, and clear abstractions. React has a large ecosystem of open source components, tutorials, and tooling that can be used seamlessly for building sites with Gatsby. Gatsby is built to behave almost exactly like a normal React application.
3. The Gatsby CLI tool lets you install “starters”. These are boilerplate Gatsby sites maintained by the community.
4. Gatsby has a large and growing set of plugins. Plugins are Node.js packages that implement Gatsby APIs. They enable you to easily solve common website build problems e.g. setup Sass, add markdown support, process images, etc.
5. Gatsby follows the PRPL architectural pattern. Gatsby sites render a static HTML version of the initial route and then load the code bundle for the page. Then immediately starts pre-caching resources for pages linked to from the initial route. When a user clicks on a link, Gatsby creates the new page on demand on the client.
6. There are many options for loading data into React components. One of the most popular and powerful of these is a technology called GraphQL. GraphQL is a query language (the QL part of its name). Gatsby uses GraphQL to enable page and layout components to declare what data they and their sub-components need. Then, Gatsby makes that data available in the browser when needed by your components.
