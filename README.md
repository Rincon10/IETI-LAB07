
# CodeLab

## Part 1: PWA

1. Run your application ( npm start )
2. Open ***localhost:3000*** and then go to the ***Lighthouse*** Tab
3. leave the configuration as the next image shows:
   <img align="center" src="assets/Config%20browser.PNG">
5. Click on ***Generate report*** and wait for the browser to create the report.
6. Let's create a new ***Service Worker*** to address the install issue
7. Create a file called ***worker.js*** inside the ***public*** folder of your project
8. Add the following code ( Don't pay much atention to it for now, this code will install and update whenever is required a Service Worker for your application to cache resources, for it to have a similar behaviour as native apps ):
	```js
	/* eslint-disable no-restricted-globals */

	var  CACHE_NAME = 'pwa-task-planner';
	// Update this array to your defined routes
	var  urlsToCache = [
		'/',
	];
	
	// Install a service worker
	self.addEventListener('install', event  => {
	// Perform install steps
		event.waitUntil(
			caches.open(CACHE_NAME)
			.then(function(cache) {
				console.log('Opened cache');
				return  cache.addAll(urlsToCache);
			})
		);
	});  

	// Cache and return requests
	self.addEventListener('fetch', event  => {
		event.respondWith(
			caches.match(event.request)
			.then(function(response) {
				// Cache hit - return response
				if (response) {
					return  response;
				}
				return  fetch(event.request);
				}
			)
		);
	});  

	// Update a service worker
	self.addEventListener('activate', event  => {
		var  cacheWhitelist = ['pwa-task-planner'];
		event.waitUntil(
			caches.keys().then(cacheNames  => {
				return  Promise.all(
					cacheNames.map(cacheName  => {
						if (cacheWhitelist.indexOf(cacheName) === -1) {
							return  caches.delete(cacheName);
						}
					})
				);
			})
		);
	});
	````
8. Add the following script to your index.html, to check if the browser supports service workers ( if not it won't be installed ):
	```html
	<body>
		<noscript>You need to enable JavaScript to run this app.</noscript>
		<div  id="root"></div>
			<script>
				if ('serviceWorker'  in  navigator) {
					window.addEventListener('load', function() {
						navigator.serviceWorker.register('worker.js').then(function(registration) 			{
						console.log('Worker registration successful', registration.scope);
					}, function(err) {
						console.log('Worker registration failed', err);
					}).catch(function(err) {
						console.log(err);
					});
					});
					} else {
						console.log('Service Worker is not supported by browser.');
					}
			</script>
	</body>
	```
9. Create a file inside src called ***serviceWorkerRegistration.js*** with the same content as the repo has  ( Code is not relevant for now, the only thing that matter for now is that theres a function implemented to register your service worker and configure cache )
10. Update your *src/index.js*, add at the end of the file ***serviceWorker.register()***. also import it as ***import  *  as  serviceWorker  from  './serviceWorkerRegistration'***
11. Reload your application, run *npm start* again
12. Run a LightHouse report, now your app should be able to be installed on a mobile


## Part 2: State Management
1. 

