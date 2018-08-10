---
title: Firebase Hosting Summary
date: "2018-08-09T22:16:32.169Z"
---

1. Easily deploy and host your site's static assets (HTML, CSS, JavaScript, etc) with our production-grade hosting service. All of your content is served over HTTPS and backed by a global CDN.
2. Key capabilities: served over a secure connection; fast content delivery; rapid deployment; one-click rollbacks.
3. Implementation path: install the Firebase CLI (npm install -g firebase-tools); access your Firebase projects (firebase login); initialize your site (firebase init); deploy your site (firebase deploy).
4. Manage and rollback deploys: From your project's Hosting page, you can see a full history of your deploys. To rollback to a previous deploy, hover over its entry in the list, click the overflow menu icon, then click Rollback.
5. Connect a Custom Domain: Firebase Hosting can connect to your own custom domains, like example.com or myrealtimeapp.example.com. Firebase Hosting provisions an SSL certificate for your domain and serves your content over a global CDN.
6. Serve Dynamic Content with Cloud Functions: Firebase Hosting allows you to use Cloud Functions to perform server-side processing. This means that you can support dynamic generation of content for your Firebase Hosting site. Examples: serve dynamic content (/blog/<id-for-blog-post></id-for-blog-post>); prerender your single-page apps to improve SEO; keep your web app lightweight.
7. Customize Hosting Behavior: custom 404/Not Found page, redirects, rewrites, headers, hosting priorities.
8. Reserved URLs: Firebase Hosting reserves URLs in your site beginning with /__. This reserved namespace makes it easier to use other Firebase features together with Firebase Hosting. These reserved URLs are available when deployed and while running firebase serve locally.

## Further Reading

- [Firebase Hosting Guides](https://firebase.google.com/docs/hosting/)
- [Firebase CLI Reference](https://firebase.google.com/docs/cli/)
- [Firebase Console](https://console.firebase.google.com/)
