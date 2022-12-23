// Add an event listener for the 'install' event
self.addEventListener('install', event => {
    // Perform some tasks to set up the service worker

    // Finish the installation process
    event.waitUntil(self.skipWaiting());
});

// Add an event listener for the 'activate' event
self.addEventListener('activate', event => {
    // Perform some tasks to activate the service worker

    // Finish the activation process
    event.waitUntil(self.clients.claim());
});

// Add an event listener for the 'fetch' event
self.addEventListener('fetch', event => {
    // Check if the request is for an image
    if (event.request.url.endsWith('.jpg')) {
        // Get the image from the cache
        event.respondWith(caches.match(event.request));
    } else {
        // Forward the request to the network
        event.respondWith(fetch(event.request));
    }
});

