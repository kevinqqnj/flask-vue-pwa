importScripts("/precache-manifest.8674ac23ff5cf0b02b7540eff0913289.js", "https://storage.googleapis.com/workbox-cdn/releases/3.3.1/workbox-sw.js");

if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);

    workbox.core.setCacheNameDetails({ prefix: "flask-vue-pwa" });

    /**
     * The workboxSW.precacheAndRoute() method efficiently caches and responds to
     * requests for URLs in the manifest.
     * See https://goo.gl/S9QRab
     */
    self.__precacheManifest = [
        { 'url': '/pages/offline.html' },
        { 'url': '/pages/404.html' },
    ].concat(self.__precacheManifest || []);
    workbox.precaching.suppressWarnings();
    workbox.precaching.precacheAndRoute(self.__precacheManifest, {});


    workbox.routing.registerRoute(
        /(.*)articles(.*)\.(?:png|gif|jpg)/,
        workbox.strategies.cacheFirst({
            cacheName: 'images-cache',
            plugins: [
                new workbox.expiration.Plugin({
                    maxEntries: 50,
                    maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
                })
            ]
        })
    );

    // workbox.routing.registerRoute(/(.*)article(.*)\.html/, args => {
    //     return articleHandler.handle(args).then(response => {
    //         if (!response) {
    //             return caches.match('pages/offline.html');
    //         } else if (response.status === 404) {
    //             return caches.match('pages/404.html');
    //         }
    //         return response;
    //     });
    // });

    const articleHandler = workbox.strategies.networkFirst({
        cacheName: 'articles-cache',
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 50,
            })
        ]
    });

    workbox.routing.registerRoute(/article\/(.*)/, args => {
        return articleHandler.handle(args).then(response => {
            if (!response) {
                return caches.match('pages/offline.html');
            } else if (response.status === 404) {
                return caches.match('pages/404.html');
            }
            return response;
        });
    });

    const postHandler = workbox.strategies.cacheFirst({
        cacheName: 'posts-cache',
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 50,
            })
        ]
    });

    workbox.routing.registerRoute(/post\/.(.*)/, args => {
        console.log('test');
        return postHandler.handle(args).then(response => {
                if (response.status === 404) {
                    return caches.match('pages/404.html');
                }
                return response;
            })
            .catch(function() {
                return caches.match('pages/offline.html');
            });
    });

} else {
    console.log(`Boo! Workbox didn't load 😬`);
}


