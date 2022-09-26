const staticCacheName = 'akitQr-static-cache-v1';
const assets = [
    '/',
    'index.html',
    'script.js',
    'media.css',
    'style.css',
    'image/YMC-2051-8515/YMC-2051-8515.jpg',
    'image/traffic-lights/1.jpg',
    'image/solar-tracker/1.jpg',
    'image/oscilloscope/1.jpg',
    'image/transistor-rectifier/1.jpg',
    'image/transistor-rectifier/formula1.png',
    'image/transistor-rectifier/scheme1.png',
    'image/transistor-rectifier/scheme2.png',
    'YMC-2051-8515/YMC-2051-8515.html',
    'solar-tracker/solar-tracker.html',
    'traffic-lights/traffic-lights.html',
    'oscilloscope/oscilloscope.html',
    'transistor-rectifier/transistor-rectifier.html',
    'vendor/js/jquery-3.3.1.slim.min.js',
    'vendor/css/bootstrap.min.css',
    'vendor/js/popper.min.js',
    'vendor/js/bootstrap.min.js',
];

self.addEventListener('install', evt => {
    evt.waitUntil(
        caches.open(staticCacheName).then((cache) => {
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