const staticCacheName = 'site-static-v1';
const assets = [
    '/',
    'main.html',
    'script.js',
    'media.css',
    'style.css',
    'image/YMC-2051-8515/YMC-2051-8515.jpg',
    'image/Сфетофоры/Светофоры.jpg',
    'image/Солнечный-трекер/солнечный-трекер.jpg',
    'image/Осциллограф/осциллограф.jpg',
    'image/Выпрямитель/Выпрямитель.jpg',
    'image/Выпрямитель/formula1.png',
    'image/Выпрямитель/scheme1.png',
    'image/Выпрямитель/scheme2.png',
    'YMC-2051-8515/YMC-2051-8515.html',
    'Солнечный-трекер/Солнечный-трекер.html',
    //'Сфетофоры/Светофоры.html',
    //'Осциллограф/Осциллограф.html',
    //'Выпрямитель/Выпрямитель.html',
];

self.addEventListener('install', evt => {
    evt.waitUntil(
        caches.open(staticCacheName).then((cache) => {
            console.log('caching shell assets', cache);
            cache.addAll(assets);
        })
    );
});

self.addEventListener('activate', evt => {
    evt.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys
                .filter(key => key !== staticCacheName)
                .map(key => caches.delete(key))
            );
        })
    );
});

self.addEventListener('fetch', evt => {
    console.log(caches, evt.request)
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request);
        })
    );
});