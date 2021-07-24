'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js": "ca6918c3c0ad5c334452a0a6bb461340",
"index.html": "7b78864d1de7728338db5ef7f5eeb2d7",
"/": "7b78864d1de7728338db5ef7f5eeb2d7",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/NOTICES": "bcc49520519b4b83a407ed468803ccff",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/f5/517eb23ab1921c657d26ab4caab6d6b094165d": "f4c9d21f3afd926a6525539af340183b",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/f4/97b700e898e74a7ed220fb3371d16cae4aed4a": "070a57562356522054103026678408c1",
".git/objects/f6/386fc6472b0a5c9a7d5bcc3cd2c7db7408c915": "e508f8b0d913a8565b1018252c16525c",
".git/objects/24/18bc9dee33d26ecb1720a0c0a3b131948ca92c": "fe61320384783f37202ebf87387fa03b",
".git/objects/e4/a14143c58989145a9b9fc6001cdbaf40c2f84d": "27a49ad722e9a624e67594a50f843ba9",
".git/objects/0c/c6af67c09e059a72205601f03921c5c1c132d5": "63232695d0bfe8ff7351d80607a58045",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/d1/e3889c4b94968e87d3dd56ce9e328573bd32eb": "65720ec76a32b551d2b1a161246719dc",
".git/objects/01/f9671e8db5eadda1202e969a544246636f8eb9": "e53993d81c8bd200f3dbc9f386c6c81e",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/59/f73a73c1a5f400179dcd048eb8f5cba235da05": "710bc308faf1b75ad3a8adcff4997920",
".git/objects/f9/d2085d3f960ca805d95db050c84a62c14f637b": "b3ffc14ad98d0671bd233da009216912",
".git/objects/0a/0856fcc700faec4b524692acad8f53e9cc327f": "b34c2b29776bbae52b2547e27fe1318f",
".git/objects/0a/8b8859457f4aa863977f6c8ea1121cc787cdfd": "7555e573d87c75948e981ff55c7e487d",
".git/objects/db/ea423c250951429e5595910ed57dca6e36a42e": "bd1cf837cb9935eae8be77487dfe60f8",
".git/objects/56/cb34b7f8bb9dfda46cb113ab3ed7677518d641": "e428c355ab4ee88e955cdd6288a897d4",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/47/7d9fb9fec4ecd8560ec7ead6f5e332d9495d0a": "e9427ba5614b0c1227c154c1a07930cb",
".git/objects/52/cab4c55e73ddf391f5ee376214d68a339032a7": "82f81f5b6a8935085d9cb5faa69d0ec1",
".git/objects/33/fc75f0205197e3ab91ade6fa2abed4cca72840": "ddd7d782138478264f6a5efc0ed34fee",
".git/objects/86/12d0bc5731cace7aff251452f62a074ba6575f": "843141c1d218d39a758684032bf33926",
".git/objects/61/c638f30cf22f9921413e4bdf73310ce1c9b1a0": "e58d71585dc15216daa9d61c87c45d48",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/8a7e5226f602a20586bc13e592dcb042deeac7": "d772bc39ba5f686996a35d50be88967a",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/71/feb3358d7828717628fd036dbe5b9aa6a1d5a0": "bc6d0193d5525c9711c2187f1e44953f",
".git/objects/2b/4388eed3215bc2f1ff6ef4936dfaf535016194": "23f846c0eef6997233d446d5e7b2c262",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ba/d0ef87b92a45a4b9f6f6ecf869d68db2241330": "654ccf4f7191677c92331ef2c5931703",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/index": "3d75eef5a264e079f4aa9ba9acead22f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/COMMIT_EDITMSG": "6b0f9395f858408a4a4e15ef5f31ecc0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/config": "005bc318331cf467534fe2f85ea1d554",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/logs/HEAD": "ffa5e9cfdc7d95a5b762b79b60d1b584",
".git/logs/refs/heads/main": "ffa5e9cfdc7d95a5b762b79b60d1b584",
".git/logs/refs/remotes/origin/main": "c1f064b46448aeaf79de71b30cfaccf8",
".git/refs/heads/main": "7982cb1bc9e777532ee67d7b55469f67",
".git/refs/remotes/origin/main": "7982cb1bc9e777532ee67d7b55469f67",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"version.json": "a71150126b87f393cdbb3b6fbeea653a",
"manifest.json": "6245891fd2790fed04ff2e792e23d291"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
