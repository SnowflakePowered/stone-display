"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","08e001c2cdffd92ab68496cdfda62995"],["static/css/main.f06f825f.css","4e88280212e48b30e5b244db16d6db23"],["static/js/main.90eb1d97.js","8e4900a9bf8714b21c0150cf78830a9c"],["static/media/roboto-latin-100.3b8bb203.svg","3b8bb2030a46cdcf1bf4d739702d1bb9"],["static/media/roboto-latin-100.654cb4d3.woff","654cb4d3907ce76ae06546007e658318"],["static/media/roboto-latin-100.8ce59883.woff2","8ce598834dcde808ae5a52930d2f198c"],["static/media/roboto-latin-100.e2085b49.eot","e2085b4924b30d8b80f9b81597543d6a"],["static/media/roboto-latin-100italic.42de8983.woff","42de89835eafdcf69210bb254061b4e9"],["static/media/roboto-latin-100italic.4bec22c5.svg","4bec22c5d731c1ab60d99a1a07348250"],["static/media/roboto-latin-100italic.acee0ea9.woff2","acee0ea9a8fefc488c5ba3f0cea449c2"],["static/media/roboto-latin-100italic.fafacae6.eot","fafacae60c9b5a39505cf2307cac81d1"],["static/media/roboto-latin-300.16ddb154.woff2","16ddb1541046ada9b90cacf4adec839a"],["static/media/roboto-latin-300.1edaa6e5.svg","1edaa6e50c2302bf0221d252e1caebb4"],["static/media/roboto-latin-300.c3547b2e.eot","c3547b2ec6f5eb324b44d8a0c6b2dd31"],["static/media/roboto-latin-300.ecce92d0.woff","ecce92d0b0ff17197f29e7db6397bf0a"],["static/media/roboto-latin-300italic.290e6a6c.svg","290e6a6c01f4703f351415432980aa2f"],["static/media/roboto-latin-300italic.2f1aacc1.eot","2f1aacc1587e8f78a21079f754850cc8"],["static/media/roboto-latin-300italic.3ddb7482.woff2","3ddb74822e003b3b41232aa6e64d656b"],["static/media/roboto-latin-300italic.4d08daeb.woff","4d08daebc07fbef23449c61e4ba59fed"],["static/media/roboto-latin-400.16e1d930.woff","16e1d930cf13fb7a956372044b6d02d0"],["static/media/roboto-latin-400.3d3a5358.svg","3d3a53586bd78d1069ae4b89a3b9aa98"],["static/media/roboto-latin-400.7e367be0.woff2","7e367be02cd17a96d513ab74846bafb3"],["static/media/roboto-latin-400.9f916e33.eot","9f916e330c478bbfa2a0dd6614042046"],["static/media/roboto-latin-400italic.13fb9544.svg","13fb9544bc459a2351bbcf844f5763d8"],["static/media/roboto-latin-400italic.16a42151.eot","16a42151226d9c09e44340821c0e2f16"],["static/media/roboto-latin-400italic.1e65e7e4.woff","1e65e7e4eaaa9cda89cdf3860e41a401"],["static/media/roboto-latin-400italic.984ae378.woff2","984ae3788bccf682cc5eaaf9398a41ef"],["static/media/roboto-latin-500.2a52a20f.eot","2a52a20f9a56010ec5d985abe9bebcc9"],["static/media/roboto-latin-500.57af64fc.woff","57af64fc644194101c1593abea164433"],["static/media/roboto-latin-500.bb474f16.woff2","bb474f16c9f76f522d656d66aa4a220e"],["static/media/roboto-latin-500.f1d811cd.svg","f1d811cdfaea49c969500d4bbe52251b"],["static/media/roboto-latin-500italic.084d5c43.svg","084d5c434250ba4b6aaa634908eb4b15"],["static/media/roboto-latin-500italic.9e7beee5.woff2","9e7beee5510fcd9cbc4dd37f2c721f14"],["static/media/roboto-latin-500italic.b670694b.woff","b670694ba39f55b5ab9b6022eb09d9ef"],["static/media/roboto-latin-500italic.e50328c0.eot","e50328c08c4a180a683e2dfe9c5cb7ed"],["static/media/roboto-latin-700.0d7e71f2.woff2","0d7e71f2b5cc1ddab837f72e1fe52f3f"],["static/media/roboto-latin-700.128879da.eot","128879da78c6c8eb4e2c07fa3732cea7"],["static/media/roboto-latin-700.525d5b45.woff","525d5b452809b3172a2a34e26d9db546"],["static/media/roboto-latin-700.7f57c4c0.svg","7f57c4c0f3b44acbe338d7ff6d6ee5b1"],["static/media/roboto-latin-700italic.7394ca9f.woff2","7394ca9f8315fedfec68ab850157122b"],["static/media/roboto-latin-700italic.96166ad6.eot","96166ad6756842b4f7389f7486b02181"],["static/media/roboto-latin-700italic.ad0e74fc.woff","ad0e74fca35d6766929fd91189a201ef"],["static/media/roboto-latin-700italic.bf39ef96.svg","bf39ef96a254805657605c016263db25"],["static/media/roboto-latin-900.355550fa.eot","355550fa89b82ad35ae1c66af10d798b"],["static/media/roboto-latin-900.de984c02.woff","de984c02ef9e756eceb2afbb2257425a"],["static/media/roboto-latin-900.e43f0ef2.svg","e43f0ef2eed55dc9e390c5032255e6f4"],["static/media/roboto-latin-900.f4e8dc59.woff2","f4e8dc5995b7b64c394f30df27a83612"],["static/media/roboto-latin-900italic.258ac030.svg","258ac0302f36811f0c9e2230ce8d3f78"],["static/media/roboto-latin-900italic.3b9590e0.woff","3b9590e03f8940b592cce06bac81eaeb"],["static/media/roboto-latin-900italic.4faec832.woff2","4faec832c91a7732ce67680e1492238e"],["static/media/roboto-latin-900italic.822eba9c.eot","822eba9c24e79985a0c0f9135787a470"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var i=new URL(e);return c&&i.pathname.match(c)||(i.search+=(i.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),i.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),i=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),i]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);a=urlsToCacheKeys.has(t);a||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});