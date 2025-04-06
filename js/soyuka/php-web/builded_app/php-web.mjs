var createPhpModule = (() => {
  var _scriptDir = import.meta.url;
  
  return (
function(createPhpModule = {})  {

// include: shell.js
// The Module object: Our interface to the outside world. We import
// and export values on it. There are various ways Module can be used:
// 1. Not defined. We create it here
// 2. A function parameter, function(Module) { ..generated code.. }
// 3. pre-run appended it, var Module = {}; ..generated code..
// 4. External script tag defines var Module.
// We need to check if Module already exists (e.g. case 3 above).
// Substitution will be replaced with actual code on later stage of the build,
// this way Closure Compiler will not mangle it (e.g. case 4. above).
// Note that if you want to run closure, and also to use Module
// after the generated code, you will need to define   var Module = {};
// before the code. Then that object will be used in the code, and you
// can continue to use Module afterwards as well.
var Module = typeof createPhpModule != 'undefined' ? createPhpModule : {};

// Set up the promise that indicates the Module is initialized
var readyPromiseResolve, readyPromiseReject;
Module['ready'] = new Promise(function(resolve, reject) {
  readyPromiseResolve = resolve;
  readyPromiseReject = reject;
});

// --pre-jses are emitted after the Module integration code, so that they can

  var Module = typeof createPhpModule !== 'undefined' ? createPhpModule : {};

  if (!Module.expectedDataFileDownloads) {
    Module.expectedDataFileDownloads = 0;
  }

  Module.expectedDataFileDownloads++;
  (function() {
    // Do not attempt to redownload the virtual filesystem data when in a pthread or a Wasm Worker context.
    if (Module['ENVIRONMENT_IS_PTHREAD'] || Module['$ww']) return;
    var loadPackage = function(metadata) {

      var PACKAGE_PATH = '';
      if (typeof window === 'object') {
        PACKAGE_PATH = window['encodeURIComponent'](window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf('/')) + '/');
      } else if (typeof process === 'undefined' && typeof location !== 'undefined') {
        // web worker
        PACKAGE_PATH = encodeURIComponent(location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf('/')) + '/');
      }
      var PACKAGE_NAME = 'build/php-web.data';
      var REMOTE_PACKAGE_BASE = 'js/soyuka/php-web/builded_app/php-web.data';
      if (typeof Module['locateFilePackage'] === 'function' && !Module['locateFile']) {
        Module['locateFile'] = Module['locateFilePackage'];
        err('warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)');
      }
      var REMOTE_PACKAGE_NAME = Module['locateFile'] ? Module['locateFile'](REMOTE_PACKAGE_BASE, '') : REMOTE_PACKAGE_BASE;
var REMOTE_PACKAGE_SIZE = metadata['remote_package_size'];

      function fetchRemotePackage(packageName, packageSize, callback, errback) {
        
        var xhr = new XMLHttpRequest();
        xhr.open('GET', packageName, true);
        xhr.responseType = 'arraybuffer';
        xhr.onprogress = function(event) {
          var url = packageName;
          var size = packageSize;
          if (event.total) size = event.total;
          if (event.loaded) {
            if (!xhr.addedTotal) {
              xhr.addedTotal = true;
              if (!Module.dataFileDownloads) Module.dataFileDownloads = {};
              Module.dataFileDownloads[url] = {
                loaded: event.loaded,
                total: size
              };
            } else {
              Module.dataFileDownloads[url].loaded = event.loaded;
            }
            var total = 0;
            var loaded = 0;
            var num = 0;
            for (var download in Module.dataFileDownloads) {
            var data = Module.dataFileDownloads[download];
              total += data.total;
              loaded += data.loaded;
              num++;
            }
            total = Math.ceil(total * Module.expectedDataFileDownloads/num);
            if (Module['setStatus']) Module['setStatus']('Downloading data... (' + loaded + '/' + total + ')');
          } else if (!Module.dataFileDownloads) {
            if (Module['setStatus']) Module['setStatus']('Downloading data...');
          }
        };
        xhr.onerror = function(event) {
          throw new Error("NetworkError for: " + packageName);
        }
        xhr.onload = function(event) {
          if (xhr.status == 200 || xhr.status == 304 || xhr.status == 206 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
            var packageData = xhr.response;
            callback(packageData);
          } else {
            throw new Error(xhr.statusText + " : " + xhr.responseURL);
          }
        };
        xhr.send(null);
      };

      function handleError(error) {
        console.error('package error:', error);
      };

    function runWithFS() {

      function assert(check, msg) {
        if (!check) throw msg + new Error().stack;
      }
Module['FS_createPath']("/", "app", true, true);
Module['FS_createPath']("/app", "src", true, true);
Module['FS_createPath']("/app/src", "vendor", true, true);
Module['FS_createPath']("/app/src/vendor", "composer", true, true);
Module['FS_createPath']("/app/src/vendor", "fakerphp", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp", "faker", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker", "src", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src", "Faker", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker", "Calculator", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker", "Container", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker", "Core", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker", "Extension", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker", "Guesser", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker", "ORM", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/ORM", "CakePHP", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/ORM", "Doctrine", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/ORM", "Mandango", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/ORM", "Propel", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/ORM", "Propel2", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/ORM", "Spot", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker", "Provider", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "ar_EG", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "ar_JO", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "ar_SA", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "at_AT", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "bg_BG", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "bn_BD", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "cs_CZ", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "da_DK", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "de_AT", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "de_CH", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "de_DE", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "el_CY", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "el_GR", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "en_AU", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "en_CA", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "en_GB", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "en_HK", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "en_IN", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "en_NG", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "en_NZ", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "en_PH", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "en_SG", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "en_UG", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "en_US", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "en_ZA", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "es_AR", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "es_ES", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "es_PE", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "es_VE", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "et_EE", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "fa_IR", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "fi_FI", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "fr_BE", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "fr_CA", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "fr_CH", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "fr_FR", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "he_IL", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "hr_HR", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "hu_HU", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "hy_AM", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "id_ID", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "is_IS", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "it_CH", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "it_IT", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "ja_JP", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "ka_GE", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "kk_KZ", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "ko_KR", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "lt_LT", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "lv_LV", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "me_ME", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "mn_MN", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "ms_MY", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "nb_NO", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "ne_NP", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "nl_BE", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "nl_NL", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "pl_PL", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "pt_BR", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "pt_PT", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "ro_MD", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "ro_RO", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "ru_RU", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "sk_SK", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "sl_SI", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "sr_Cyrl_RS", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "sr_Latn_RS", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "sr_RS", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "sv_SE", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "th_TH", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "tr_TR", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "uk_UA", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "vi_VN", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "zh_CN", true, true);
Module['FS_createPath']("/app/src/vendor/fakerphp/faker/src/Faker/Provider", "zh_TW", true, true);
Module['FS_createPath']("/app/src/vendor", "psr", true, true);
Module['FS_createPath']("/app/src/vendor/psr", "container", true, true);
Module['FS_createPath']("/app/src/vendor/psr/container", "src", true, true);
Module['FS_createPath']("/app/src/vendor", "symfony", true, true);
Module['FS_createPath']("/app/src/vendor/symfony", "deprecation-contracts", true, true);

        var PACKAGE_UUID = metadata['package_uuid'];
        var indexedDB;
        if (typeof window === 'object') {
          indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
        } else if (typeof location !== 'undefined') {
          // worker
          indexedDB = self.indexedDB;
        } else {
          throw 'using IndexedDB to cache data can only be done on a web page or in a web worker';
        }
        var IDB_RO = "readonly";
        var IDB_RW = "readwrite";
        var DB_NAME = "EM_PRELOAD_CACHE";
        var DB_VERSION = 1;
        var METADATA_STORE_NAME = 'METADATA';
        var PACKAGE_STORE_NAME = 'PACKAGES';
        function openDatabase(callback, errback) {
          try {
            var openRequest = indexedDB.open(DB_NAME, DB_VERSION);
          } catch (e) {
            return errback(e);
          }
          openRequest.onupgradeneeded = function(event) {
            var db = /** @type {IDBDatabase} */ (event.target.result);

            if (db.objectStoreNames.contains(PACKAGE_STORE_NAME)) {
              db.deleteObjectStore(PACKAGE_STORE_NAME);
            }
            var packages = db.createObjectStore(PACKAGE_STORE_NAME);

            if (db.objectStoreNames.contains(METADATA_STORE_NAME)) {
              db.deleteObjectStore(METADATA_STORE_NAME);
            }
            var metadata = db.createObjectStore(METADATA_STORE_NAME);
          };
          openRequest.onsuccess = function(event) {
            var db = /** @type {IDBDatabase} */ (event.target.result);
            callback(db);
          };
          openRequest.onerror = function(error) {
            errback(error);
          };
        };

        // This is needed as chromium has a limit on per-entry files in IndexedDB
        // https://cs.chromium.org/chromium/src/content/renderer/indexed_db/webidbdatabase_impl.cc?type=cs&sq=package:chromium&g=0&l=177
        // https://cs.chromium.org/chromium/src/out/Debug/gen/third_party/blink/public/mojom/indexeddb/indexeddb.mojom.h?type=cs&sq=package:chromium&g=0&l=60
        // We set the chunk size to 64MB to stay well-below the limit
        var CHUNK_SIZE = 64 * 1024 * 1024;

        function cacheRemotePackage(
          db,
          packageName,
          packageData,
          packageMeta,
          callback,
          errback
        ) {
          var transactionPackages = db.transaction([PACKAGE_STORE_NAME], IDB_RW);
          var packages = transactionPackages.objectStore(PACKAGE_STORE_NAME);
          var chunkSliceStart = 0;
          var nextChunkSliceStart = 0;
          var chunkCount = Math.ceil(packageData.byteLength / CHUNK_SIZE);
          var finishedChunks = 0;
          for (var chunkId = 0; chunkId < chunkCount; chunkId++) {
            nextChunkSliceStart += CHUNK_SIZE;
            var putPackageRequest = packages.put(
              packageData.slice(chunkSliceStart, nextChunkSliceStart),
              'package/' + packageName + '/' + chunkId
            );
            chunkSliceStart = nextChunkSliceStart;
            putPackageRequest.onsuccess = function(event) {
              finishedChunks++;
              if (finishedChunks == chunkCount) {
                var transaction_metadata = db.transaction(
                  [METADATA_STORE_NAME],
                  IDB_RW
                );
                var metadata = transaction_metadata.objectStore(METADATA_STORE_NAME);
                var putMetadataRequest = metadata.put(
                  {
                    'uuid': packageMeta.uuid,
                    'chunkCount': chunkCount
                  },
                  'metadata/' + packageName
                );
                putMetadataRequest.onsuccess = function(event) {
                  callback(packageData);
                };
                putMetadataRequest.onerror = function(error) {
                  errback(error);
                };
              }
            };
            putPackageRequest.onerror = function(error) {
              errback(error);
            };
          }
        }

        /* Check if there's a cached package, and if so whether it's the latest available */
        function checkCachedPackage(db, packageName, callback, errback) {
          var transaction = db.transaction([METADATA_STORE_NAME], IDB_RO);
          var metadata = transaction.objectStore(METADATA_STORE_NAME);
          var getRequest = metadata.get('metadata/' + packageName);
          getRequest.onsuccess = function(event) {
            var result = event.target.result;
            if (!result) {
              return callback(false, null);
            } else {
              return callback(PACKAGE_UUID === result['uuid'], result);
            }
          };
          getRequest.onerror = function(error) {
            errback(error);
          };
        }

        function fetchCachedPackage(db, packageName, metadata, callback, errback) {
          var transaction = db.transaction([PACKAGE_STORE_NAME], IDB_RO);
          var packages = transaction.objectStore(PACKAGE_STORE_NAME);

          var chunksDone = 0;
          var totalSize = 0;
          var chunkCount = metadata['chunkCount'];
          var chunks = new Array(chunkCount);

          for (var chunkId = 0; chunkId < chunkCount; chunkId++) {
            var getRequest = packages.get('package/' + packageName + '/' + chunkId);
            getRequest.onsuccess = function(event) {
              // If there's only 1 chunk, there's nothing to concatenate it with so we can just return it now
              if (chunkCount == 1) {
                callback(event.target.result);
              } else {
                chunksDone++;
                totalSize += event.target.result.byteLength;
                chunks.push(event.target.result);
                if (chunksDone == chunkCount) {
                  if (chunksDone == 1) {
                    callback(event.target.result);
                  } else {
                    var tempTyped = new Uint8Array(totalSize);
                    var byteOffset = 0;
                    for (var chunkId in chunks) {
                      var buffer = chunks[chunkId];
                      tempTyped.set(new Uint8Array(buffer), byteOffset);
                      byteOffset += buffer.byteLength;
                      buffer = undefined;
                    }
                    chunks = undefined;
                    callback(tempTyped.buffer);
                    tempTyped = undefined;
                  }
                }
              }
            };
            getRequest.onerror = function(error) {
              errback(error);
            };
          }
        }

      function processPackageData(arrayBuffer) {
        assert(arrayBuffer, 'Loading data file failed.');
        assert(arrayBuffer.constructor.name === ArrayBuffer.name, 'bad input to processPackageData');
        var byteArray = new Uint8Array(arrayBuffer);
        var curr;
        var compressedData = {"data":null,"cachedOffset":7167047,"cachedIndexes":[-1,-1],"cachedChunks":[null,null],"offsets":[0,1374,2809,3570,4404,5319,6268,7277,8396,9208,10351,11318,12382,13038,13930,14932,15993,16868,17876,18848,19906,20831,21719,22541,23683,24506,25765,26897,28160,29315,30476,31520,32558,33536,34421,35686,36721,37569,38556,39576,40425,41301,42202,43016,43816,44424,45139,45899,46714,47510,48471,49414,50367,51435,52688,53748,54850,55853,56675,57350,58221,58901,59454,60248,61265,62472,63467,64505,65409,66374,67173,67889,68538,69211,69932,70855,72136,73366,74296,74998,76113,76959,77447,78123,78826,79744,80801,81764,82786,83665,84429,85164,86277,87474,88525,89433,90305,91394,92399,92864,93902,94716,95789,96835,97898,98433,99468,100273,101376,102408,103381,104373,105257,106327,107400,108170,109059,109939,110946,111991,113047,114081,115093,116288,117302,118650,119521,120594,121688,122840,124028,124836,125744,126597,127569,128758,129308,129817,130818,131638,132464,133212,133782,134517,135350,136183,136989,137934,138868,139825,140843,141881,142694,143377,143952,144738,146041,147166,148517,149453,150347,151417,152508,153385,154209,155014,155892,157012,158284,159489,160517,161700,162784,164074,165389,166608,167838,169015,169895,170724,171478,172561,173547,174639,175340,176241,176753,177314,178394,179293,180318,181313,182353,183005,183915,184738,185971,186986,188086,189254,190416,191373,192297,193359,194282,195398,196573,197770,198929,200081,201349,202756,204140,205569,206986,208460,209885,211335,212771,214142,215419,216670,217830,219002,219870,220878,221799,222895,223953,224909,226026,227237,228354,229418,230507,231624,233086,234389,235709,237228,238701,239933,241314,242674,244155,245525,246988,248444,249783,251181,252602,253957,255374,256795,258221,259622,260815,262261,263693,265044,266334,267656,269005,270343,271598,272898,274280,275615,276909,278267,279694,281119,282412,283722,285090,286404,287701,289048,290421,291768,293142,294402,295699,296965,298313,299681,301100,302426,303730,305052,306384,307741,309035,310437,311862,313265,314648,316051,317354,318752,320138,321540,322856,324283,325593,326838,328303,329774,331163,332569,333896,335326,336755,338177,339609,341035,342475,343908,345379,346886,348376,349864,351151,352468,353795,354900,356068,357051,358010,358977,359984,361028,362142,363310,364347,365319,366426,367406,368556,369762,370879,372035,373013,374443,375776,377185,378642,380134,381404,382783,384169,385646,387014,388508,389894,391224,392662,394045,395463,396853,398308,399724,401129,402340,403743,405151,406465,407785,409032,410447,411730,413001,414251,415603,416904,418199,419571,420983,422355,423620,424984,426356,427626,428996,430334,431687,433068,434413,435681,436962,438289,439614,441036,442410,443731,445026,446343,447711,449007,450279,451743,453165,454582,455964,457364,458660,460035,461426,462840,464235,465686,466856,468142,469618,471056,472455,473906,475245,476684,478092,479481,480895,482328,483786,485226,486731,488256,489726,491208,492380,493293,494263,495319,496393,497412,498424,499410,500466,501551,502615,503685,504743,505807,506942,508091,509221,510240,511098,511955,512816,513674,514567,515353,516378,517702,519093,520464,521864,522792,523889,525001,526045,527343,528601,529776,530943,532201,533412,534562,535567,536500,537418,538348,539310,540276,541248,542379,543254,544920,546589,548218,549846,551596,553347,555059,556776,558535,560362,562147,563900,565547,567325,569140,570977,572645,574413,576211,577962,579694,581465,583187,584947,586656,588413,590252,592081,593949,595652,597444,599147,600961,602792,604618,606448,608268,610122,611858,613603,615440,617321,619193,621026,622773,624549,626341,628137,629903,631703,633522,635320,637138,638940,640724,642558,644269,646074,647852,649677,651379,653144,654945,656749,658546,660397,662234,664093,665919,667788,669446,671231,672967,674622,676409,678101,679766,681384,683103,684867,686493,688170,689912,691655,693457,695286,697077,698848,700607,702222,703872,705645,707414,709209,710971,712797,714607,716377,718154,719868,721628,723494,725217,726980,728770,730525,732258,733996,735748,737593,739447,741239,743046,744875,746656,748426,750233,752032,753836,755643,757427,759283,761122,762989,764821,766667,768483,770309,772050,773846,775636,777409,779211,781009,782830,784658,786456,788250,790036,791727,793570,795384,797182,799027,800844,802669,804510,806341,808151,809903,811641,813384,815113,816896,818711,820564,822319,824132,825983,827720,829455,831226,833014,834848,836621,838295,840114,841849,843569,845278,847129,848966,850745,852484,854306,856125,857877,859749,861569,863411,865253,867073,868878,870751,872583,874361,876154,877933,879703,881486,883309,885108,886930,888770,890619,892417,894197,895965,897662,899442,901262,902991,904713,906472,908207,909910,911693,913404,915173,916865,918638,920406,922197,924001,925834,927644,929385,931184,932984,934680,936424,938267,940003,941670,943434,945159,946909,948703,950508,952319,954083,955827,957622,959414,961208,962971,964732,966483,968090,969798,971464,973308,975072,976901,978662,980498,982311,984008,985789,987509,989346,991016,992758,994020,995298,996569,997845,999191,1000646,1002080,1002823,1003555,1004602,1005626,1006938,1008178,1009480,1010799,1011967,1013263,1014572,1015806,1017188,1018558,1019952,1021334,1022408,1023474,1024848,1026178,1027375,1028574,1029601,1031017,1032483,1033722,1035167,1036158,1037228,1038509,1039847,1041150,1042243,1043734,1045390,1047065,1048774,1050504,1052228,1053999,1055735,1057444,1059187,1060868,1062586,1064236,1065889,1067612,1069332,1071037,1072747,1074445,1076178,1077914,1079629,1081376,1083102,1084793,1086506,1088234,1089923,1091593,1093324,1095046,1096728,1098415,1100136,1101846,1103558,1105274,1106962,1108634,1110337,1112042,1113755,1115502,1117182,1118834,1120507,1122212,1123928,1125638,1127332,1129033,1130761,1132447,1134126,1135859,1137277,1138557,1139988,1141323,1142615,1144197,1145651,1147077,1148570,1150072,1151440,1152839,1154225,1155622,1157036,1158436,1159829,1160877,1162086,1163198,1164343,1165487,1166755,1168104,1169317,1170663,1171884,1173093,1174345,1175179,1176175,1177806,1179506,1181182,1182899,1184607,1186371,1188100,1189856,1191584,1193317,1195004,1196694,1198379,1200062,1201819,1203513,1205221,1206913,1208617,1210358,1212032,1213771,1215481,1217208,1218933,1220625,1222327,1224023,1225690,1227385,1229091,1230815,1232519,1234250,1235964,1237707,1239407,1241096,1242765,1244440,1246128,1247860,1249592,1251250,1252911,1254651,1256351,1258067,1259775,1261490,1263184,1264888,1266581,1268265,1269976,1271388,1272680,1273995,1275367,1276748,1278256,1279693,1281096,1282625,1283894,1285090,1286320,1287601,1288731,1289960,1291088,1292298,1293516,1294691,1295996,1297295,1298606,1299895,1301152,1302458,1303727,1304929,1305949,1307129,1308059,1309197,1310322,1311522,1312736,1313914,1315126,1316241,1317392,1318549,1319724,1320913,1322103,1323287,1324321,1325452,1326609,1327805,1328683,1329748,1330455,1331185,1332629,1334086,1335407,1336852,1338298,1339711,1341161,1342588,1343973,1345420,1346845,1348229,1349637,1351111,1352536,1353997,1355405,1356794,1358247,1359688,1361120,1362551,1363925,1365333,1366803,1368168,1369583,1370981,1372428,1373860,1375297,1376724,1378159,1379533,1380935,1382293,1383649,1385019,1386477,1387848,1389272,1390671,1392038,1393468,1394787,1396145,1397579,1398964,1400440,1401795,1403137,1404506,1405925,1407307,1408682,1410024,1411409,1412773,1414197,1415462,1416913,1418270,1419681,1421139,1422566,1423982,1425376,1426781,1428204,1429673,1430991,1432354,1433880,1435305,1436691,1438091,1439496,1440874,1442242,1443712,1445070,1446506,1447836,1449165,1450631,1452082,1453473,1454836,1456234,1457646,1459135,1460536,1461969,1463331,1464759,1466217,1467653,1469131,1470485,1471939,1473374,1474841,1476285,1477694,1479160,1480582,1482049,1483453,1484886,1486261,1487605,1489073,1490392,1491742,1493186,1494644,1495978,1497427,1498850,1500146,1501525,1502909,1504261,1505599,1506953,1508326,1509703,1511121,1512501,1513826,1515297,1516756,1518173,1519544,1520907,1522343,1523779,1525206,1526632,1528053,1529434,1530848,1532280,1533652,1535013,1536389,1537809,1539206,1540655,1542125,1543545,1544970,1546361,1547734,1549150,1550576,1551971,1553378,1554825,1556248,1557540,1558896,1560280,1561741,1563197,1564573,1565973,1567362,1568786,1570172,1571578,1572861,1574237,1575688,1577088,1578493,1579947,1581372,1582830,1584263,1585654,1587076,1588455,1589882,1591338,1592786,1594214,1595676,1597084,1598437,1599836,1601174,1602600,1603908,1605288,1606805,1608178,1609604,1611017,1612376,1613844,1615218,1616706,1618042,1619428,1620870,1622285,1623755,1625110,1626497,1627832,1629202,1630611,1632029,1633376,1634741,1636115,1637506,1638986,1640447,1641795,1643152,1644575,1645927,1647384,1648857,1650313,1651754,1653166,1654617,1655997,1657477,1658946,1660455,1661875,1663274,1664685,1666138,1667544,1668938,1670409,1671802,1673222,1674623,1676103,1677583,1678958,1680387,1681841,1683324,1684790,1686235,1687668,1689067,1690469,1692018,1693416,1694869,1696301,1697574,1698771,1699989,1701398,1702957,1704255,1705696,1707154,1708422,1709351,1710542,1711560,1712827,1714398,1715972,1717519,1718887,1720296,1721340,1722528,1723675,1725040,1726374,1727772,1728827,1729858,1730746,1731058,1731690,1732436,1733738,1735169,1736559,1737455,1738465,1739808,1741121,1742395,1743672,1744937,1746087,1747508,1748883,1750049,1751312,1752212,1752828,1753768,1754689,1755823,1757217,1758663,1760043,1761439,1762822,1764198,1765531,1766924,1768296,1769687,1771074,1772472,1773634,1774186,1775302,1776319,1777417,1778231,1779238,1780499,1781435,1782750,1784051,1785309,1786556,1787752,1788991,1790295,1791723,1793001,1794095,1795419,1796823,1798239,1799405,1800600,1801682,1802823,1804049,1805168,1806402,1807522,1808728,1809895,1811036,1812250,1813469,1814656,1815982,1816823,1818061,1819233,1820461,1821684,1822896,1824092,1825352,1826561,1827691,1828826,1830030,1831144,1832241,1833459,1834690,1836029,1837412,1838799,1839578,1840557,1842175,1843823,1845514,1847142,1848785,1850405,1852075,1853737,1855391,1857031,1858701,1860387,1862032,1863649,1865154,1866872,1868543,1870184,1871862,1873500,1875169,1876808,1878438,1880004,1881585,1883158,1884730,1886308,1887988,1889611,1891246,1892945,1894583,1896219,1897806,1899398,1900913,1902483,1904095,1905690,1907238,1908912,1910597,1912176,1913798,1915444,1917104,1918731,1920386,1921965,1923583,1925131,1926697,1928280,1929905,1931376,1932762,1934368,1935969,1937439,1939114,1940703,1942344,1943870,1945470,1947135,1948700,1950297,1951979,1953579,1955152,1956613,1957918,1959325,1960643,1961958,1963483,1964944,1966346,1967885,1969421,1970625,1971567,1972608,1973952,1975300,1976647,1978159,1979601,1981042,1982090,1982875,1984007,1985143,1986487,1987870,1989339,1990283,1991588,1992879,1994195,1995498,1996432,1997782,1999174,2000150,2001229,2002574,2003954,2005396,2006543,2007614,2008902,2010205,2011490,2012779,2014063,2015266,2016769,2018498,2020204,2021957,2023656,2025397,2027132,2028899,2030617,2032380,2034101,2035851,2037598,2039315,2041046,2042794,2044510,2046268,2047935,2049604,2051316,2053002,2054697,2056413,2058096,2059862,2061567,2063352,2065056,2066783,2068494,2070240,2072000,2073709,2075416,2077143,2078896,2080583,2082297,2084080,2085801,2087518,2089257,2091002,2092745,2094483,2096259,2097981,2099730,2101489,2103234,2105001,2106704,2108438,2110171,2111912,2113637,2115341,2117032,2118754,2120421,2122141,2123838,2125596,2127319,2129041,2130778,2132522,2134230,2135911,2137629,2139293,2141025,2142731,2144416,2146084,2147821,2149485,2151174,2152907,2154603,2156313,2158047,2159755,2161530,2163285,2165026,2166699,2168425,2170045,2171768,2173540,2175219,2176890,2178560,2180284,2181957,2183697,2185397,2187103,2188805,2190508,2192235,2193988,2195683,2197429,2199099,2200820,2202540,2204234,2205950,2207653,2209370,2211060,2212813,2214580,2216295,2218005,2219697,2221377,2223118,2224859,2226556,2228225,2229951,2231700,2233407,2235123,2236840,2238582,2240303,2242043,2243699,2245417,2247118,2248832,2250513,2252221,2253922,2255596,2257179,2258905,2260662,2262390,2264123,2265801,2267531,2269275,2270260,2271572,2272992,2274388,2275764,2276712,2278021,2279327,2280629,2281921,2283139,2284040,2285126,2286104,2287459,2288683,2289957,2291203,2292478,2293614,2294952,2296144,2297218,2298273,2298976,2300089,2301461,2302362,2303433,2304537,2305618,2306674,2307738,2308866,2309888,2310924,2312026,2313050,2314105,2315237,2316166,2317311,2318506,2319678,2320889,2322078,2323128,2324504,2325965,2327463,2328848,2330303,2331758,2333191,2334673,2336114,2337598,2339097,2340545,2342011,2343473,2344895,2346384,2347869,2349282,2350729,2352120,2353520,2354901,2356343,2357767,2359255,2360696,2362092,2363546,2364963,2366390,2367843,2369288,2370650,2372131,2373535,2375006,2376453,2377900,2379409,2380888,2382376,2383799,2385192,2386631,2388110,2389553,2390985,2392460,2393909,2395327,2396748,2398184,2399573,2401022,2402438,2403838,2405279,2406654,2408070,2409565,2411007,2412505,2413948,2415449,2416931,2418329,2419776,2421232,2422693,2424060,2425270,2426573,2427970,2428972,2430240,2431494,2432638,2433804,2434954,2436158,2437446,2438460,2439150,2440555,2441780,2443186,2444537,2445883,2447218,2448356,2449020,2450400,2451814,2453347,2454960,2456676,2458343,2460013,2461682,2462888,2464517,2466253,2467908,2469562,2471241,2472958,2474657,2476300,2477958,2479503,2481162,2482776,2484373,2486069,2487783,2489472,2491112,2492801,2494464,2496158,2497911,2499463,2501202,2502890,2504525,2506197,2507850,2509515,2511178,2512811,2514502,2516147,2517898,2519578,2521310,2522946,2524583,2526287,2527951,2529588,2531293,2532973,2534701,2536392,2537713,2539030,2540318,2541699,2543129,2544647,2546048,2547507,2549009,2550507,2551635,2552527,2553946,2555292,2556677,2558042,2558982,2560273,2561733,2563014,2564099,2565363,2566809,2567787,2568797,2569980,2571011,2572009,2573038,2574302,2575276,2576623,2578018,2579426,2580704,2581442,2582239,2583517,2585296,2586983,2588736,2590534,2592289,2594019,2595772,2597518,2599326,2601056,2602768,2604519,2606268,2608032,2609775,2611523,2613230,2614993,2616760,2618513,2620287,2621991,2623733,2625432,2627191,2628890,2630645,2632415,2634130,2635855,2637635,2639402,2641160,2642896,2644656,2646410,2648147,2649907,2651696,2653436,2655185,2656931,2658632,2660372,2662134,2663874,2665610,2667368,2669069,2670859,2672597,2674350,2676096,2677807,2679609,2681369,2683098,2684857,2686604,2688343,2690091,2691816,2693566,2695333,2697089,2698815,2700535,2702275,2704027,2705783,2707542,2709305,2711055,2712832,2714623,2716392,2718170,2719933,2721698,2723431,2725223,2726972,2728740,2730497,2732281,2734059,2735799,2737591,2739316,2741097,2742865,2744623,2746346,2748123,2749850,2751574,2753355,2755127,2756872,2758601,2760361,2762126,2763899,2765685,2767453,2769193,2770941,2772705,2774435,2776191,2777948,2779734,2781482,2783231,2784985,2786713,2788491,2790242,2791990,2793744,2795506,2797283,2799060,2800817,2802566,2804316,2806032,2807789,2809547,2811357,2813122,2814933,2816684,2818413,2820166,2821943,2823673,2825414,2827204,2829002,2830767,2832548,2834286,2835995,2837688,2839412,2841166,2842892,2844666,2846415,2848195,2849968,2851722,2853532,2855337,2857082,2858826,2860564,2862290,2864004,2865753,2867505,2869218,2870971,2872738,2874502,2876205,2877944,2879661,2881437,2883213,2884973,2886729,2888547,2890297,2892061,2893793,2895553,2897318,2899070,2900897,2902657,2904435,2906223,2907950,2909723,2911467,2913215,2914957,2916676,2918431,2920177,2921916,2923687,2925448,2927172,2928936,2930697,2932477,2934227,2935940,2937686,2939466,2941211,2942956,2944697,2946460,2948254,2950015,2951784,2953504,2955276,2957041,2958819,2960606,2962372,2964157,2965945,2967681,2969480,2971255,2973022,2974761,2976518,2978305,2980066,2981852,2983627,2985441,2987237,2988994,2990776,2992556,2994312,2996067,2997845,2999584,3001353,3003125,3004873,3006654,3008416,3010184,3011954,3013695,3015437,3017226,3018989,3020744,3022504,3024264,3026003,3027785,3029495,3031278,3033064,3034833,3036565,3038320,3040077,3041826,3043585,3045292,3047006,3048768,3050544,3052308,3054040,3055787,3057511,3059277,3060993,3062767,3064503,3066293,3068103,3069845,3071633,3073386,3075154,3076925,3078657,3080454,3082200,3083977,3085783,3087522,3089292,3091013,3092715,3094467,3096220,3097992,3099780,3101579,3103354,3105153,3106914,3108662,3110422,3112131,3113835,3115585,3117346,3119128,3120892,3122637,3124404,3126198,3127925,3129718,3131493,3133246,3135025,3136841,3138605,3140355,3142115,3143885,3145679,3147430,3149207,3150975,3152705,3154475,3156214,3157970,3159729,3161539,3163275,3165002,3166777,3168567,3170305,3172085,3173840,3175640,3177422,3179197,3180988,3182732,3184499,3186007,3187290,3188667,3189979,3191349,3192862,3194353,3195746,3197291,3198830,3199876,3200887,3202005,3203148,3204116,3205150,3206193,3207297,3208377,3209487,3210718,3211887,3212827,3213798,3214855,3215877,3216911,3217922,3218918,3219895,3220884,3221875,3222831,3223818,3224771,3225902,3227139,3228284,3229393,3230803,3232226,3233508,3234772,3235577,3237052,3238391,3239846,3241146,3242092,3243329,3244598,3246262,3248009,3249746,3251516,3253289,3255103,3256834,3258656,3260382,3262197,3263953,3265657,3267374,3269141,3270943,3272685,3274451,3276198,3277980,3279718,3281466,3283283,3285075,3286888,3288594,3290360,3292106,3293953,3295763,3297560,3299265,3301042,3302861,3304630,3306381,3308118,3309916,3311645,3313351,3315087,3316808,3318547,3320279,3322099,3323810,3325526,3327279,3329079,3330743,3332462,3334179,3335952,3337698,3339460,3341240,3342982,3344722,3346529,3348304,3350078,3351874,3353634,3355406,3357084,3358733,3360488,3362159,3363866,3365609,3367435,3369193,3371031,3372722,3374453,3376239,3378043,3379796,3381533,3383287,3385112,3386908,3388651,3390431,3392271,3394051,3395779,3397548,3399234,3400940,3402743,3404489,3406244,3408024,3409744,3411509,3413297,3415063,3416821,3418572,3420299,3422080,3423767,3425478,3427209,3429011,3430833,3432650,3434447,3436171,3437881,3439595,3441287,3443054,3444798,3446527,3448283,3450045,3451726,3453470,3455199,3456941,3458702,3460402,3462011,3463711,3465467,3467195,3468853,3470588,3472345,3474140,3475982,3477776,3479573,3481331,3483093,3484901,3486579,3488329,3490110,3491902,3493585,3495307,3497066,3498837,3500623,3502405,3504082,3505786,3507494,3509248,3511004,3512782,3514635,3516416,3518248,3520067,3521781,3523518,3525339,3527185,3528977,3530672,3532368,3534036,3535772,3537544,3539360,3541148,3542933,3544473,3545746,3546994,3547719,3548721,3549825,3550968,3552083,3553251,3554342,3555430,3556540,3557683,3559052,3560387,3561650,3562861,3564104,3565347,3566413,3567521,3568944,3569872,3571086,3572321,3573646,3574984,3576333,3577440,3578534,3579627,3580750,3581865,3583214,3584597,3585710,3586425,3587500,3588445,3589483,3590608,3591731,3592776,3593891,3595001,3596081,3597186,3598192,3599324,3600512,3601638,3602819,3603930,3605007,3606196,3607416,3608573,3609695,3610795,3612025,3613114,3614476,3615701,3616591,3617977,3619294,3620617,3621924,3623045,3624506,3625940,3627195,3628454,3629771,3631102,3632179,3633324,3634676,3635951,3637242,3638765,3640501,3642192,3643917,3645649,3647400,3649136,3650849,3652568,3654250,3656001,3657760,3659505,3661232,3662927,3664625,3666332,3668019,3669735,3671455,3673206,3674872,3676598,3678298,3680001,3681764,3683527,3685197,3686940,3688685,3690393,3692118,3693820,3695579,3697299,3699068,3700787,3702147,3703458,3704745,3706149,3707600,3709109,3710525,3711977,3713470,3714757,3715979,3717294,3718157,3719283,3720412,3721590,3722785,3723704,3725160,3726486,3727863,3729295,3730692,3732082,3733448,3734863,3736247,3737751,3739220,3740664,3742008,3743506,3744908,3746282,3747691,3749143,3750484,3751812,3753253,3754736,3756201,3757676,3759181,3760637,3762014,3763446,3764824,3766190,3767661,3769081,3770506,3771936,3773335,3774752,3776117,3777566,3778953,3780359,3781810,3783289,3784603,3785926,3787385,3788772,3790152,3791575,3792951,3794297,3795720,3797151,3798591,3799991,3801322,3802671,3803968,3805348,3806609,3807941,3809397,3810743,3812089,3813426,3814682,3816079,3817439,3818805,3820184,3821501,3822839,3824187,3825336,3826338,3827306,3828305,3829286,3830200,3831278,3831925,3832803,3833637,3834702,3835870,3836943,3837923,3838780,3839696,3840852,3842006,3843167,3844367,3845616,3846834,3848033,3849215,3850420,3851623,3852821,3853974,3855097,3856326,3857508,3858711,3859783,3861013,3862184,3863394,3864590,3865762,3866916,3868002,3869050,3870217,3871417,3872659,3873796,3874902,3876045,3877283,3878415,3879542,3880698,3881883,3883062,3884279,3885491,3886664,3887864,3889012,3890241,3891380,3892546,3893765,3894899,3896007,3897208,3898361,3899597,3900818,3902041,3903250,3904329,3905444,3906535,3907699,3908840,3909935,3911111,3912300,3913424,3914589,3915794,3916952,3918128,3919313,3920431,3921553,3922636,3923760,3924903,3926130,3927305,3928447,3929557,3930767,3931941,3933129,3934257,3935424,3936607,3937779,3938997,3940173,3941368,3942564,3943658,3944833,3946024,3947219,3948432,3949658,3950828,3951996,3953238,3954426,3955607,3956772,3957953,3959161,3960315,3961518,3962697,3963875,3965077,3966262,3967368,3968505,3969659,3970857,3971922,3973120,3974313,3975469,3976676,3977801,3978990,3980145,3981361,3982547,3983730,3984936,3986194,3987385,3988613,3989724,3990886,3992059,3993222,3994358,3995522,3996715,3997890,3998977,4000185,4001443,4002622,4003747,4004961,4006131,4007217,4008407,4009565,4010791,4012038,4013200,4014272,4015455,4016674,4017885,4019071,4020228,4021409,4022609,4023750,4024865,4026018,4027122,4028291,4029501,4030709,4031939,4033135,4034322,4035487,4036582,4037702,4038876,4040065,4041186,4042393,4043517,4044688,4045872,4047065,4048187,4049322,4050512,4051753,4052918,4054063,4055263,4056516,4057664,4058870,4060024,4061224,4062394,4063588,4064800,4065770,4066847,4067961,4068858,4069934,4071114,4072427,4073794,4075149,4076597,4078023,4079371,4080815,4082228,4083679,4085221,4086722,4088197,4089633,4091072,4092336,4093528,4094926,4096360,4097934,4099346,4100755,4101948,4103322,4104566,4105571,4106886,4107972,4109279,4110563,4111906,4113391,4114932,4116367,4118004,4119624,4121156,4122645,4123974,4125490,4127019,4128533,4130007,4131578,4133166,4134736,4136290,4137791,4139299,4140836,4142399,4143913,4145447,4146952,4148480,4150051,4151606,4153116,4154630,4156202,4157775,4159387,4160884,4162448,4164048,4165624,4167110,4168624,4170122,4171683,4173137,4174665,4176266,4177856,4179396,4180826,4182355,4183938,4185499,4187097,4188629,4190193,4191706,4193137,4194718,4196297,4197828,4199462,4200925,4202453,4203923,4205431,4207026,4208538,4209932,4211442,4212881,4214359,4215821,4217208,4218675,4220157,4221691,4223256,4224810,4226376,4227879,4229354,4230815,4232422,4233971,4235610,4237154,4238689,4240189,4241686,4243166,4244617,4246152,4247701,4249304,4250840,4252345,4253912,4255504,4256985,4258488,4260047,4261524,4263074,4264643,4266258,4267828,4269446,4271004,4272537,4274099,4275645,4277174,4278711,4280205,4281720,4283235,4284695,4286174,4287661,4289126,4290626,4292211,4293747,4295191,4296763,4298265,4299790,4301214,4302499,4303912,4305406,4306949,4308453,4310007,4311582,4313200,4314764,4316325,4317878,4319433,4320877,4322326,4323879,4325421,4326881,4328385,4329890,4331442,4332923,4334464,4336002,4337466,4338982,4340447,4341837,4343139,4343760,4344521,4345544,4346654,4347763,4348881,4349980,4351047,4352213,4353360,4354468,4355568,4356698,4357840,4358919,4359956,4361155,4362480,4363736,4364775,4365914,4366984,4368041,4369096,4370167,4371284,4372384,4373556,4374603,4375718,4376736,4377799,4378766,4379892,4380961,4381979,4383063,4384100,4385131,4386120,4387146,4388219,4389257,4390246,4391333,4392347,4393589,4394804,4396013,4397224,4398505,4399829,4401144,4402477,4403806,4405149,4406497,4407790,4408921,4410122,4411299,4412452,4413633,4414773,4415911,4416900,4417802,4418745,4419658,4420607,4421498,4422411,4423395,4424300,4425190,4426150,4427190,4428387,4429598,4430838,4431859,4432589,4433998,4434957,4435891,4437045,4438105,4439221,4440348,4441542,4442967,4443573,4444440,4445459,4446781,4448125,4449503,4450869,4452160,4453400,4454570,4455529,4456332,4457241,4458359,4459298,4460076,4460553,4461298,4462505,4463694,4464900,4466054,4467211,4468386,4469592,4470664,4471844,4473032,4474207,4475404,4476585,4477675,4478877,4480018,4481144,4482298,4483449,4484574,4485729,4486895,4487747,4488981,4490114,4491390,4492643,4493845,4494368,4494967,4496196,4496976,4497597,4498600,4499905,4501251,4502599,4504042,4505478,4506206,4507384,4508491,4509729,4510924,4512148,4513316,4514493,4515670,4516901,4518120,4519311,4520503,4521749,4523069,4524123,4525281,4526486,4527721,4528906,4530127,4531352,4532580,4533799,4534989,4536223,4537464,4538704,4539988,4541228,4542370,4543756,4545059,4546442,4547752,4549170,4550588,4551697,4552568,4553493,4554461,4555318,4556125,4557455,4558718,4560028,4561222,4562701,4564098,4565503,4566649,4567978,4569307,4570705,4571917,4573512,4575177,4576861,4578591,4580295,4581992,4583713,4585432,4587188,4588908,4590633,4592239,4593941,4595621,4597253,4598932,4600615,4602282,4603942,4605635,4607351,4609061,4610791,4612466,4614106,4615779,4617446,4619110,4620729,4622320,4624016,4625723,4627380,4629060,4630747,4632418,4634074,4635723,4637408,4639058,4640718,4642323,4644065,4645767,4647387,4649026,4650640,4652321,4653905,4655613,4657295,4658958,4660661,4662309,4664006,4665729,4667383,4669021,4670683,4672336,4673934,4675595,4677291,4678921,4680512,4682150,4683808,4685499,4687145,4688725,4690434,4692132,4693672,4695302,4696971,4698643,4700228,4701837,4703474,4705141,4706814,4708428,4710044,4711621,4713223,4714768,4716448,4718121,4719819,4721474,4723000,4724624,4726182,4727735,4729448,4731098,4732788,4734472,4736241,4737957,4739685,4741280,4742873,4744575,4746242,4747874,4749457,4751071,4752792,4754476,4756075,4757687,4759275,4760791,4762494,4764173,4765809,4767466,4769152,4770879,4772505,4774066,4775727,4777344,4778989,4780502,4782140,4783813,4785527,4787134,4788795,4790347,4792056,4793728,4795377,4797034,4798678,4800353,4802044,4803701,4805353,4807020,4808614,4810197,4811765,4813449,4815100,4816772,4818408,4820023,4821641,4823254,4824935,4826536,4828135,4829714,4831246,4832820,4834314,4835992,4837648,4839313,4840985,4842706,4844329,4845971,4847571,4849252,4850901,4852570,4854262,4855961,4857643,4859288,4860946,4862627,4864309,4865985,4867688,4869401,4870981,4872573,4874143,4875846,4877458,4879132,4880775,4882408,4884020,4885759,4887438,4889094,4890784,4892470,4894185,4895821,4897329,4898969,4900521,4902168,4903810,4905413,4907165,4908891,4910430,4912104,4913750,4915433,4917099,4918784,4920442,4922020,4923739,4925440,4927151,4928760,4930431,4932056,4933704,4935234,4936897,4938570,4940213,4941875,4943570,4945203,4946812,4948460,4950098,4951769,4953411,4955061,4956697,4958417,4960063,4961731,4963390,4964833,4966480,4968214,4969875,4971475,4973111,4974738,4976348,4977971,4979633,4981316,4982925,4984590,4986202,4987762,4989391,4991002,4992735,4994352,4996017,4997526,4999212,5000791,5002441,5004105,5005660,5007231,5008845,5010595,5012277,5013965,5015611,5017293,5018953,5020529,5022180,5023776,5025325,5026965,5028547,5030207,5031826,5033509,5035143,5036771,5038425,5040074,5041754,5043393,5045066,5046759,5048453,5050103,5051658,5053331,5054986,5056667,5058312,5059969,5061567,5063235,5064933,5066630,5068244,5069919,5071600,5073222,5074933,5076641,5078251,5079900,5081418,5083079,5084782,5086509,5088067,5089663,5091376,5093060,5094745,5096333,5097933,5099570,5101218,5102857,5104422,5106048,5107743,5109422,5111138,5112801,5114438,5116092,5117743,5119439,5121105,5122751,5124360,5125924,5127515,5129110,5130608,5132065,5133569,5135074,5136662,5138289,5139853,5141458,5143103,5144764,5146419,5148080,5149713,5151407,5153103,5154717,5156408,5158090,5159764,5161436,5163069,5164748,5166398,5168069,5169661,5171354,5173072,5174740,5176401,5178073,5179691,5181229,5182834,5184417,5186067,5187753,5189433,5191116,5192782,5194336,5195981,5197569,5199210,5200843,5202433,5204067,5205774,5207274,5208796,5210525,5212191,5213820,5215457,5217060,5218705,5220310,5221944,5223587,5225208,5226854,5228547,5230227,5231850,5233558,5235154,5236801,5238396,5240062,5241761,5243397,5245100,5246725,5248360,5250103,5251759,5253358,5254943,5256582,5258250,5259891,5261433,5262969,5264671,5266358,5267936,5269653,5271406,5273049,5274663,5276198,5277812,5279458,5281088,5282752,5284354,5286013,5287618,5289180,5290869,5292545,5294207,5295910,5297549,5299240,5300857,5302495,5304186,5305851,5307497,5309174,5310857,5312463,5314150,5315905,5317565,5319217,5320942,5322590,5324148,5325855,5327511,5329133,5330780,5332448,5334031,5335680,5337324,5338936,5340567,5342307,5344021,5345417,5347124,5348778,5350506,5352205,5353898,5355558,5357227,5358931,5360603,5362219,5363927,5365389,5367022,5368740,5370436,5372121,5373685,5375334,5376945,5378529,5380181,5381796,5383409,5384797,5386158,5387451,5388714,5389987,5391236,5392497,5393706,5394998,5396284,5397545,5398724,5399969,5401202,5402447,5403742,5404997,5406263,5407695,5409097,5410230,5411566,5412821,5414106,5415442,5416741,5417973,5419291,5420549,5421779,5423019,5424402,5425628,5426596,5427838,5429179,5430488,5431806,5433098,5434387,5435697,5437062,5438644,5439971,5441345,5442303,5443330,5444962,5446597,5448296,5449942,5451602,5453316,5454981,5456627,5458233,5459825,5461507,5463153,5464820,5466506,5468167,5469846,5471538,5473222,5474846,5476604,5478296,5480003,5481662,5483392,5485124,5486855,5488505,5490210,5491875,5493582,5495264,5496979,5498639,5500314,5502054,5503766,5505509,5507182,5508860,5510576,5512228,5513846,5515545,5517216,5518942,5520573,5522273,5523933,5525615,5527340,5529029,5530729,5532423,5534157,5535834,5537506,5539211,5540907,5542601,5544303,5545933,5547593,5549286,5550963,5552669,5554343,5555922,5557601,5559307,5560968,5562645,5564388,5566093,5567752,5569473,5571190,5572850,5574489,5576155,5577884,5579553,5581276,5582958,5584595,5586277,5587974,5589603,5591213,5592848,5594482,5596176,5597855,5599552,5601258,5603023,5604692,5606421,5608096,5609783,5611272,5612666,5614167,5615559,5616895,5618123,5619389,5620648,5621897,5623119,5624085,5625088,5625861,5626682,5627471,5628274,5629116,5629929,5630850,5631778,5632907,5633858,5634862,5635859,5637201,5638305,5639330,5640473,5641528,5643073,5644880,5646694,5648528,5650340,5652097,5653913,5655719,5657520,5659307,5661092,5662847,5664595,5666339,5668099,5669881,5671710,5673511,5675315,5677133,5678946,5680758,5682530,5684331,5686137,5687928,5689727,5691472,5693212,5694974,5696776,5698574,5700307,5702109,5703908,5705671,5707491,5709272,5711081,5712858,5714692,5716502,5718229,5719963,5721705,5723494,5725283,5727116,5728921,5730735,5732534,5734291,5736022,5737753,5739556,5741336,5743126,5744887,5746708,5748543,5750370,5752143,5753978,5755803,5757618,5759399,5761167,5762916,5764730,5766561,5768341,5770069,5771831,5773638,5775403,5777172,5778899,5780649,5782447,5784193,5785954,5787668,5789448,5791217,5792993,5794785,5796595,5798351,5800104,5801899,5803425,5805030,5806592,5808103,5809667,5811104,5812626,5813977,5815189,5816067,5817079,5818206,5819045,5820000,5821302,5822582,5823897,5825074,5825943,5826820,5828473,5830257,5832025,5833810,5835492,5837174,5838897,5840653,5842364,5844145,5845877,5847624,5849398,5851163,5852905,5854642,5856379,5858084,5859771,5861512,5863245,5865006,5866710,5868450,5870148,5871861,5873580,5875331,5876983,5878728,5880439,5882119,5883807,5885506,5887235,5888947,5890649,5892372,5894142,5895873,5897581,5899248,5901016,5902750,5904514,5906187,5907944,5909645,5911347,5913079,5914810,5916609,5918195,5919918,5921662,5923399,5925062,5926802,5928491,5930233,5931965,5933659,5935374,5937124,5938793,5940549,5942253,5943957,5945350,5946622,5947965,5949331,5950707,5952261,5953725,5955150,5956648,5957938,5959405,5960729,5962094,5963121,5963947,5965325,5966685,5967689,5969093,5970508,5971383,5972477,5973654,5974890,5976175,5977525,5978795,5979972,5981644,5983321,5985026,5986712,5988397,5990086,5991645,5993317,5994986,5996658,5998403,6000042,6001749,6003376,6005041,6006725,6008415,6009997,6011658,6013369,6014976,6016608,6018192,6019790,6021440,6023145,6024829,6026554,6028278,6029958,6031682,6033171,6034912,6036559,6038296,6039967,6041679,6043404,6045097,6046802,6048473,6050132,6051777,6053462,6055135,6056845,6058389,6060055,6061666,6063265,6064985,6066513,6068161,6069557,6071000,6072419,6073691,6074886,6076131,6077554,6079123,6080410,6081852,6083303,6084706,6086116,6087553,6088998,6089782,6090923,6092092,6093418,6094712,6096061,6097316,6098507,6099585,6100581,6101984,6103540,6105104,6106719,6108221,6109742,6111282,6112833,6114418,6115977,6117546,6118789,6120027,6121260,6122337,6123175,6124419,6125671,6126931,6128120,6129335,6130717,6131910,6133023,6134115,6134962,6135703,6136555,6137451,6138322,6139219,6140067,6140999,6141873,6142716,6143530,6144391,6145244,6146102,6147032,6148286,6149530,6150635,6151733,6152836,6153632,6155083,6156542,6158051,6159540,6161072,6162576,6164020,6165522,6167022,6168501,6170038,6171486,6172929,6174452,6175977,6177463,6178949,6180422,6181940,6183455,6184903,6186328,6187731,6189267,6190798,6192290,6193719,6195275,6196695,6198168,6199658,6201176,6202686,6204162,6205637,6207099,6208585,6209942,6211337,6212695,6214054,6215444,6216887,6218332,6219722,6221221,6222698,6224081,6225570,6226838,6228251,6229692,6231152,6232526,6234018,6235532,6236893,6238279,6239783,6241278,6242742,6244260,6245786,6247204,6248508,6249965,6251427,6252952,6254489,6255988,6257377,6258833,6260325,6261849,6263382,6264869,6266272,6267755,6269194,6270612,6271994,6273460,6274931,6276394,6277864,6279395,6280885,6282347,6283783,6285230,6286634,6288040,6289523,6291015,6292520,6294002,6295511,6296983,6298488,6299946,6301461,6302941,6304358,6305831,6307216,6308741,6310269,6311710,6313125,6314586,6316018,6317516,6319047,6320488,6321920,6323396,6324852,6326301,6327729,6329129,6330556,6332064,6333529,6335026,6336467,6337948,6339332,6340811,6342182,6343623,6345062,6346441,6347902,6349367,6350916,6352397,6353527,6354848,6356270,6357644,6359028,6360484,6361993,6363496,6365019,6366550,6368037,6369489,6370992,6372496,6373978,6375488,6377017,6378506,6380024,6381509,6382949,6384294,6385767,6387286,6388694,6390071,6391574,6393033,6394505,6395921,6397375,6398848,6400295,6401805,6403267,6404744,6406207,6407718,6409144,6410589,6412120,6413551,6415081,6416638,6418038,6419479,6420909,6422184,6423368,6424584,6425991,6427557,6428850,6430290,6431650,6432789,6434001,6435119,6436333,6437427,6438606,6439801,6440994,6442140,6443352,6444569,6445743,6446911,6448118,6449324,6450497,6451702,6452932,6453921,6455084,6456359,6457660,6459060,6460389,6461870,6463357,6464648,6465668,6467088,6468390,6469725,6471035,6472008,6473467,6474791,6476160,6477496,6478403,6479724,6481030,6482294,6483595,6484701,6486006,6487177,6488457,6489672,6490614,6491572,6492470,6493391,6494283,6495234,6496174,6497158,6498051,6498954,6500042,6500982,6501936,6502832,6503751,6504641,6505593,6506535,6507517,6508415,6509323,6510411,6511235,6512016,6512812,6513609,6514404,6515255,6516014,6516836,6517669,6518403,6519253,6520076,6520835,6521595,6522446,6523354,6524460,6525916,6527285,6528613,6529852,6531033,6532193,6533361,6534504,6535675,6536907,6538077,6539268,6540383,6541542,6542646,6543679,6544559,6545483,6546412,6547357,6548253,6549178,6550130,6551029,6551944,6552866,6553900,6555194,6556415,6557633,6558948,6560170,6561175,6562106,6563093,6564114,6565104,6566076,6567200,6568162,6569109,6570086,6571096,6571893,6572650,6573447,6574248,6575038,6575890,6576669,6577454,6578253,6579029,6579862,6580657,6581477,6582230,6583091,6583966,6585207,6586431,6587746,6589033,6590274,6591575,6592856,6594148,6595418,6596660,6597945,6599206,6600474,6601856,6602985,6603945,6604865,6605801,6606893,6607947,6609170,6610394,6611718,6612963,6614271,6615446,6616415,6617520,6618516,6619505,6620538,6621541,6622478,6623460,6624514,6625710,6626855,6628033,6629113,6630105,6631309,6632287,6633177,6634138,6635122,6636183,6637097,6638009,6638959,6640104,6641325,6642512,6643904,6645133,6646283,6647508,6648905,6650278,6651649,6652812,6653957,6655292,6656366,6657106,6657560,6658459,6659377,6660339,6661272,6662131,6663399,6664599,6665811,6667017,6668259,6669461,6670573,6671523,6672536,6673861,6675403,6676944,6678447,6679934,6681427,6682966,6684425,6685938,6687394,6688933,6690418,6691937,6693405,6694951,6696499,6697987,6699511,6701035,6702482,6704046,6705550,6707068,6708589,6710132,6711561,6712996,6714502,6716018,6717521,6719010,6720548,6721997,6723504,6724978,6726476,6727879,6729287,6730795,6732315,6733767,6735132,6736581,6738065,6739572,6741093,6742608,6744141,6745619,6747062,6748607,6750088,6751600,6753135,6754639,6756141,6757613,6759084,6760560,6762016,6763471,6764918,6766388,6767802,6769260,6770706,6772180,6773647,6775104,6776565,6778053,6779538,6780959,6782415,6783891,6785269,6786630,6788115,6789588,6791086,6792530,6793930,6795489,6796962,6798392,6799833,6801312,6802670,6804195,6805707,6807238,6808697,6810153,6811560,6813013,6814457,6815879,6817268,6818735,6820205,6821683,6823196,6824676,6826139,6827623,6829174,6830656,6832149,6833689,6835113,6836609,6838086,6839565,6841086,6842595,6844100,6845594,6847092,6848609,6850151,6851686,6853216,6854691,6856194,6857672,6859196,6860670,6862093,6863483,6864978,6866469,6867966,6869449,6870920,6872358,6873899,6875403,6876835,6878335,6879835,6881288,6882827,6884311,6885767,6887186,6888648,6890153,6891678,6893176,6894674,6896230,6897770,6899273,6900773,6902230,6903645,6905038,6906567,6908092,6909622,6911115,6912589,6913990,6915489,6916980,6918444,6919916,6921396,6922916,6924441,6925947,6927583,6929024,6930455,6931853,6933115,6934309,6935586,6937038,6938650,6939957,6941409,6942674,6943224,6944665,6946021,6947108,6948154,6949417,6950643,6951865,6953138,6954328,6955460,6956807,6958198,6959425,6960713,6961955,6963429,6964851,6966319,6967818,6969011,6970033,6971412,6972780,6974090,6975235,6976651,6978045,6979452,6980617,6981790,6982926,6984267,6985654,6986693,6987930,6989160,6990648,6992000,6993382,6994739,6995688,6996503,6997808,6999144,7000398,7001575,7003379,7005186,7006943,7008710,7010539,7012272,7013946,7015539,7017246,7019026,7020730,7022360,7024047,7025806,7027544,7029309,7031014,7032798,7034538,7036259,7038048,7039837,7041600,7043379,7045176,7046930,7048645,7050370,7052077,7053859,7055652,7057427,7059166,7060918,7062639,7064364,7066101,7067870,7069583,7071343,7073080,7074777,7076528,7078161,7079816,7081564,7083242,7084991,7086707,7088422,7090239,7091989,7093699,7095390,7097077,7098763,7100446,7102272,7104098,7105895,7107660,7109441,7111146,7112926,7114657,7116329,7118043,7119806,7121538,7123213,7124892,7126511,7128220,7129980,7131747,7133448,7135188,7136864,7138601,7140265,7142050,7143766,7145461,7147189,7148924,7150692,7152460,7154074,7155837,7157509,7159246,7161009,7162109,7163099,7164297,7165612,7166827],"sizes":[1374,1435,761,834,915,949,1009,1119,812,1143,967,1064,656,892,1002,1061,875,1008,972,1058,925,888,822,1142,823,1259,1132,1263,1155,1161,1044,1038,978,885,1265,1035,848,987,1020,849,876,901,814,800,608,715,760,815,796,961,943,953,1068,1253,1060,1102,1003,822,675,871,680,553,794,1017,1207,995,1038,904,965,799,716,649,673,721,923,1281,1230,930,702,1115,846,488,676,703,918,1057,963,1022,879,764,735,1113,1197,1051,908,872,1089,1005,465,1038,814,1073,1046,1063,535,1035,805,1103,1032,973,992,884,1070,1073,770,889,880,1007,1045,1056,1034,1012,1195,1014,1348,871,1073,1094,1152,1188,808,908,853,972,1189,550,509,1001,820,826,748,570,735,833,833,806,945,934,957,1018,1038,813,683,575,786,1303,1125,1351,936,894,1070,1091,877,824,805,878,1120,1272,1205,1028,1183,1084,1290,1315,1219,1230,1177,880,829,754,1083,986,1092,701,901,512,561,1080,899,1025,995,1040,652,910,823,1233,1015,1100,1168,1162,957,924,1062,923,1116,1175,1197,1159,1152,1268,1407,1384,1429,1417,1474,1425,1450,1436,1371,1277,1251,1160,1172,868,1008,921,1096,1058,956,1117,1211,1117,1064,1089,1117,1462,1303,1320,1519,1473,1232,1381,1360,1481,1370,1463,1456,1339,1398,1421,1355,1417,1421,1426,1401,1193,1446,1432,1351,1290,1322,1349,1338,1255,1300,1382,1335,1294,1358,1427,1425,1293,1310,1368,1314,1297,1347,1373,1347,1374,1260,1297,1266,1348,1368,1419,1326,1304,1322,1332,1357,1294,1402,1425,1403,1383,1403,1303,1398,1386,1402,1316,1427,1310,1245,1465,1471,1389,1406,1327,1430,1429,1422,1432,1426,1440,1433,1471,1507,1490,1488,1287,1317,1327,1105,1168,983,959,967,1007,1044,1114,1168,1037,972,1107,980,1150,1206,1117,1156,978,1430,1333,1409,1457,1492,1270,1379,1386,1477,1368,1494,1386,1330,1438,1383,1418,1390,1455,1416,1405,1211,1403,1408,1314,1320,1247,1415,1283,1271,1250,1352,1301,1295,1372,1412,1372,1265,1364,1372,1270,1370,1338,1353,1381,1345,1268,1281,1327,1325,1422,1374,1321,1295,1317,1368,1296,1272,1464,1422,1417,1382,1400,1296,1375,1391,1414,1395,1451,1170,1286,1476,1438,1399,1451,1339,1439,1408,1389,1414,1433,1458,1440,1505,1525,1470,1482,1172,913,970,1056,1074,1019,1012,986,1056,1085,1064,1070,1058,1064,1135,1149,1130,1019,858,857,861,858,893,786,1025,1324,1391,1371,1400,928,1097,1112,1044,1298,1258,1175,1167,1258,1211,1150,1005,933,918,930,962,966,972,1131,875,1666,1669,1629,1628,1750,1751,1712,1717,1759,1827,1785,1753,1647,1778,1815,1837,1668,1768,1798,1751,1732,1771,1722,1760,1709,1757,1839,1829,1868,1703,1792,1703,1814,1831,1826,1830,1820,1854,1736,1745,1837,1881,1872,1833,1747,1776,1792,1796,1766,1800,1819,1798,1818,1802,1784,1834,1711,1805,1778,1825,1702,1765,1801,1804,1797,1851,1837,1859,1826,1869,1658,1785,1736,1655,1787,1692,1665,1618,1719,1764,1626,1677,1742,1743,1802,1829,1791,1771,1759,1615,1650,1773,1769,1795,1762,1826,1810,1770,1777,1714,1760,1866,1723,1763,1790,1755,1733,1738,1752,1845,1854,1792,1807,1829,1781,1770,1807,1799,1804,1807,1784,1856,1839,1867,1832,1846,1816,1826,1741,1796,1790,1773,1802,1798,1821,1828,1798,1794,1786,1691,1843,1814,1798,1845,1817,1825,1841,1831,1810,1752,1738,1743,1729,1783,1815,1853,1755,1813,1851,1737,1735,1771,1788,1834,1773,1674,1819,1735,1720,1709,1851,1837,1779,1739,1822,1819,1752,1872,1820,1842,1842,1820,1805,1873,1832,1778,1793,1779,1770,1783,1823,1799,1822,1840,1849,1798,1780,1768,1697,1780,1820,1729,1722,1759,1735,1703,1783,1711,1769,1692,1773,1768,1791,1804,1833,1810,1741,1799,1800,1696,1744,1843,1736,1667,1764,1725,1750,1794,1805,1811,1764,1744,1795,1792,1794,1763,1761,1751,1607,1708,1666,1844,1764,1829,1761,1836,1813,1697,1781,1720,1837,1670,1742,1262,1278,1271,1276,1346,1455,1434,743,732,1047,1024,1312,1240,1302,1319,1168,1296,1309,1234,1382,1370,1394,1382,1074,1066,1374,1330,1197,1199,1027,1416,1466,1239,1445,991,1070,1281,1338,1303,1093,1491,1656,1675,1709,1730,1724,1771,1736,1709,1743,1681,1718,1650,1653,1723,1720,1705,1710,1698,1733,1736,1715,1747,1726,1691,1713,1728,1689,1670,1731,1722,1682,1687,1721,1710,1712,1716,1688,1672,1703,1705,1713,1747,1680,1652,1673,1705,1716,1710,1694,1701,1728,1686,1679,1733,1418,1280,1431,1335,1292,1582,1454,1426,1493,1502,1368,1399,1386,1397,1414,1400,1393,1048,1209,1112,1145,1144,1268,1349,1213,1346,1221,1209,1252,834,996,1631,1700,1676,1717,1708,1764,1729,1756,1728,1733,1687,1690,1685,1683,1757,1694,1708,1692,1704,1741,1674,1739,1710,1727,1725,1692,1702,1696,1667,1695,1706,1724,1704,1731,1714,1743,1700,1689,1669,1675,1688,1732,1732,1658,1661,1740,1700,1716,1708,1715,1694,1704,1693,1684,1711,1412,1292,1315,1372,1381,1508,1437,1403,1529,1269,1196,1230,1281,1130,1229,1128,1210,1218,1175,1305,1299,1311,1289,1257,1306,1269,1202,1020,1180,930,1138,1125,1200,1214,1178,1212,1115,1151,1157,1175,1189,1190,1184,1034,1131,1157,1196,878,1065,707,730,1444,1457,1321,1445,1446,1413,1450,1427,1385,1447,1425,1384,1408,1474,1425,1461,1408,1389,1453,1441,1432,1431,1374,1408,1470,1365,1415,1398,1447,1432,1437,1427,1435,1374,1402,1358,1356,1370,1458,1371,1424,1399,1367,1430,1319,1358,1434,1385,1476,1355,1342,1369,1419,1382,1375,1342,1385,1364,1424,1265,1451,1357,1411,1458,1427,1416,1394,1405,1423,1469,1318,1363,1526,1425,1386,1400,1405,1378,1368,1470,1358,1436,1330,1329,1466,1451,1391,1363,1398,1412,1489,1401,1433,1362,1428,1458,1436,1478,1354,1454,1435,1467,1444,1409,1466,1422,1467,1404,1433,1375,1344,1468,1319,1350,1444,1458,1334,1449,1423,1296,1379,1384,1352,1338,1354,1373,1377,1418,1380,1325,1471,1459,1417,1371,1363,1436,1436,1427,1426,1421,1381,1414,1432,1372,1361,1376,1420,1397,1449,1470,1420,1425,1391,1373,1416,1426,1395,1407,1447,1423,1292,1356,1384,1461,1456,1376,1400,1389,1424,1386,1406,1283,1376,1451,1400,1405,1454,1425,1458,1433,1391,1422,1379,1427,1456,1448,1428,1462,1408,1353,1399,1338,1426,1308,1380,1517,1373,1426,1413,1359,1468,1374,1488,1336,1386,1442,1415,1470,1355,1387,1335,1370,1409,1418,1347,1365,1374,1391,1480,1461,1348,1357,1423,1352,1457,1473,1456,1441,1412,1451,1380,1480,1469,1509,1420,1399,1411,1453,1406,1394,1471,1393,1420,1401,1480,1480,1375,1429,1454,1483,1466,1445,1433,1399,1402,1549,1398,1453,1432,1273,1197,1218,1409,1559,1298,1441,1458,1268,929,1191,1018,1267,1571,1574,1547,1368,1409,1044,1188,1147,1365,1334,1398,1055,1031,888,312,632,746,1302,1431,1390,896,1010,1343,1313,1274,1277,1265,1150,1421,1375,1166,1263,900,616,940,921,1134,1394,1446,1380,1396,1383,1376,1333,1393,1372,1391,1387,1398,1162,552,1116,1017,1098,814,1007,1261,936,1315,1301,1258,1247,1196,1239,1304,1428,1278,1094,1324,1404,1416,1166,1195,1082,1141,1226,1119,1234,1120,1206,1167,1141,1214,1219,1187,1326,841,1238,1172,1228,1223,1212,1196,1260,1209,1130,1135,1204,1114,1097,1218,1231,1339,1383,1387,779,979,1618,1648,1691,1628,1643,1620,1670,1662,1654,1640,1670,1686,1645,1617,1505,1718,1671,1641,1678,1638,1669,1639,1630,1566,1581,1573,1572,1578,1680,1623,1635,1699,1638,1636,1587,1592,1515,1570,1612,1595,1548,1674,1685,1579,1622,1646,1660,1627,1655,1579,1618,1548,1566,1583,1625,1471,1386,1606,1601,1470,1675,1589,1641,1526,1600,1665,1565,1597,1682,1600,1573,1461,1305,1407,1318,1315,1525,1461,1402,1539,1536,1204,942,1041,1344,1348,1347,1512,1442,1441,1048,785,1132,1136,1344,1383,1469,944,1305,1291,1316,1303,934,1350,1392,976,1079,1345,1380,1442,1147,1071,1288,1303,1285,1289,1284,1203,1503,1729,1706,1753,1699,1741,1735,1767,1718,1763,1721,1750,1747,1717,1731,1748,1716,1758,1667,1669,1712,1686,1695,1716,1683,1766,1705,1785,1704,1727,1711,1746,1760,1709,1707,1727,1753,1687,1714,1783,1721,1717,1739,1745,1743,1738,1776,1722,1749,1759,1745,1767,1703,1734,1733,1741,1725,1704,1691,1722,1667,1720,1697,1758,1723,1722,1737,1744,1708,1681,1718,1664,1732,1706,1685,1668,1737,1664,1689,1733,1696,1710,1734,1708,1775,1755,1741,1673,1726,1620,1723,1772,1679,1671,1670,1724,1673,1740,1700,1706,1702,1703,1727,1753,1695,1746,1670,1721,1720,1694,1716,1703,1717,1690,1753,1767,1715,1710,1692,1680,1741,1741,1697,1669,1726,1749,1707,1716,1717,1742,1721,1740,1656,1718,1701,1714,1681,1708,1701,1674,1583,1726,1757,1728,1733,1678,1730,1744,985,1312,1420,1396,1376,948,1309,1306,1302,1292,1218,901,1086,978,1355,1224,1274,1246,1275,1136,1338,1192,1074,1055,703,1113,1372,901,1071,1104,1081,1056,1064,1128,1022,1036,1102,1024,1055,1132,929,1145,1195,1172,1211,1189,1050,1376,1461,1498,1385,1455,1455,1433,1482,1441,1484,1499,1448,1466,1462,1422,1489,1485,1413,1447,1391,1400,1381,1442,1424,1488,1441,1396,1454,1417,1427,1453,1445,1362,1481,1404,1471,1447,1447,1509,1479,1488,1423,1393,1439,1479,1443,1432,1475,1449,1418,1421,1436,1389,1449,1416,1400,1441,1375,1416,1495,1442,1498,1443,1501,1482,1398,1447,1456,1461,1367,1210,1303,1397,1002,1268,1254,1144,1166,1150,1204,1288,1014,690,1405,1225,1406,1351,1346,1335,1138,664,1380,1414,1533,1613,1716,1667,1670,1669,1206,1629,1736,1655,1654,1679,1717,1699,1643,1658,1545,1659,1614,1597,1696,1714,1689,1640,1689,1663,1694,1753,1552,1739,1688,1635,1672,1653,1665,1663,1633,1691,1645,1751,1680,1732,1636,1637,1704,1664,1637,1705,1680,1728,1691,1321,1317,1288,1381,1430,1518,1401,1459,1502,1498,1128,892,1419,1346,1385,1365,940,1291,1460,1281,1085,1264,1446,978,1010,1183,1031,998,1029,1264,974,1347,1395,1408,1278,738,797,1278,1779,1687,1753,1798,1755,1730,1753,1746,1808,1730,1712,1751,1749,1764,1743,1748,1707,1763,1767,1753,1774,1704,1742,1699,1759,1699,1755,1770,1715,1725,1780,1767,1758,1736,1760,1754,1737,1760,1789,1740,1749,1746,1701,1740,1762,1740,1736,1758,1701,1790,1738,1753,1746,1711,1802,1760,1729,1759,1747,1739,1748,1725,1750,1767,1756,1726,1720,1740,1752,1756,1759,1763,1750,1777,1791,1769,1778,1763,1765,1733,1792,1749,1768,1757,1784,1778,1740,1792,1725,1781,1768,1758,1723,1777,1727,1724,1781,1772,1745,1729,1760,1765,1773,1786,1768,1740,1748,1764,1730,1756,1757,1786,1748,1749,1754,1728,1778,1751,1748,1754,1762,1777,1777,1757,1749,1750,1716,1757,1758,1810,1765,1811,1751,1729,1753,1777,1730,1741,1790,1798,1765,1781,1738,1709,1693,1724,1754,1726,1774,1749,1780,1773,1754,1810,1805,1745,1744,1738,1726,1714,1749,1752,1713,1753,1767,1764,1703,1739,1717,1776,1776,1760,1756,1818,1750,1764,1732,1760,1765,1752,1827,1760,1778,1788,1727,1773,1744,1748,1742,1719,1755,1746,1739,1771,1761,1724,1764,1761,1780,1750,1713,1746,1780,1745,1745,1741,1763,1794,1761,1769,1720,1772,1765,1778,1787,1766,1785,1788,1736,1799,1775,1767,1739,1757,1787,1761,1786,1775,1814,1796,1757,1782,1780,1756,1755,1778,1739,1769,1772,1748,1781,1762,1768,1770,1741,1742,1789,1763,1755,1760,1760,1739,1782,1710,1783,1786,1769,1732,1755,1757,1749,1759,1707,1714,1762,1776,1764,1732,1747,1724,1766,1716,1774,1736,1790,1810,1742,1788,1753,1768,1771,1732,1797,1746,1777,1806,1739,1770,1721,1702,1752,1753,1772,1788,1799,1775,1799,1761,1748,1760,1709,1704,1750,1761,1782,1764,1745,1767,1794,1727,1793,1775,1753,1779,1816,1764,1750,1760,1770,1794,1751,1777,1768,1730,1770,1739,1756,1759,1810,1736,1727,1775,1790,1738,1780,1755,1800,1782,1775,1791,1744,1767,1508,1283,1377,1312,1370,1513,1491,1393,1545,1539,1046,1011,1118,1143,968,1034,1043,1104,1080,1110,1231,1169,940,971,1057,1022,1034,1011,996,977,989,991,956,987,953,1131,1237,1145,1109,1410,1423,1282,1264,805,1475,1339,1455,1300,946,1237,1269,1664,1747,1737,1770,1773,1814,1731,1822,1726,1815,1756,1704,1717,1767,1802,1742,1766,1747,1782,1738,1748,1817,1792,1813,1706,1766,1746,1847,1810,1797,1705,1777,1819,1769,1751,1737,1798,1729,1706,1736,1721,1739,1732,1820,1711,1716,1753,1800,1664,1719,1717,1773,1746,1762,1780,1742,1740,1807,1775,1774,1796,1760,1772,1678,1649,1755,1671,1707,1743,1826,1758,1838,1691,1731,1786,1804,1753,1737,1754,1825,1796,1743,1780,1840,1780,1728,1769,1686,1706,1803,1746,1755,1780,1720,1765,1788,1766,1758,1751,1727,1781,1687,1711,1731,1802,1822,1817,1797,1724,1710,1714,1692,1767,1744,1729,1756,1762,1681,1744,1729,1742,1761,1700,1609,1700,1756,1728,1658,1735,1757,1795,1842,1794,1797,1758,1762,1808,1678,1750,1781,1792,1683,1722,1759,1771,1786,1782,1677,1704,1708,1754,1756,1778,1853,1781,1832,1819,1714,1737,1821,1846,1792,1695,1696,1668,1736,1772,1816,1788,1785,1540,1273,1248,725,1002,1104,1143,1115,1168,1091,1088,1110,1143,1369,1335,1263,1211,1243,1243,1066,1108,1423,928,1214,1235,1325,1338,1349,1107,1094,1093,1123,1115,1349,1383,1113,715,1075,945,1038,1125,1123,1045,1115,1110,1080,1105,1006,1132,1188,1126,1181,1111,1077,1189,1220,1157,1122,1100,1230,1089,1362,1225,890,1386,1317,1323,1307,1121,1461,1434,1255,1259,1317,1331,1077,1145,1352,1275,1291,1523,1736,1691,1725,1732,1751,1736,1713,1719,1682,1751,1759,1745,1727,1695,1698,1707,1687,1716,1720,1751,1666,1726,1700,1703,1763,1763,1670,1743,1745,1708,1725,1702,1759,1720,1769,1719,1360,1311,1287,1404,1451,1509,1416,1452,1493,1287,1222,1315,863,1126,1129,1178,1195,919,1456,1326,1377,1432,1397,1390,1366,1415,1384,1504,1469,1444,1344,1498,1402,1374,1409,1452,1341,1328,1441,1483,1465,1475,1505,1456,1377,1432,1378,1366,1471,1420,1425,1430,1399,1417,1365,1449,1387,1406,1451,1479,1314,1323,1459,1387,1380,1423,1376,1346,1423,1431,1440,1400,1331,1349,1297,1380,1261,1332,1456,1346,1346,1337,1256,1397,1360,1366,1379,1317,1338,1348,1149,1002,968,999,981,914,1078,647,878,834,1065,1168,1073,980,857,916,1156,1154,1161,1200,1249,1218,1199,1182,1205,1203,1198,1153,1123,1229,1182,1203,1072,1230,1171,1210,1196,1172,1154,1086,1048,1167,1200,1242,1137,1106,1143,1238,1132,1127,1156,1185,1179,1217,1212,1173,1200,1148,1229,1139,1166,1219,1134,1108,1201,1153,1236,1221,1223,1209,1079,1115,1091,1164,1141,1095,1176,1189,1124,1165,1205,1158,1176,1185,1118,1122,1083,1124,1143,1227,1175,1142,1110,1210,1174,1188,1128,1167,1183,1172,1218,1176,1195,1196,1094,1175,1191,1195,1213,1226,1170,1168,1242,1188,1181,1165,1181,1208,1154,1203,1179,1178,1202,1185,1106,1137,1154,1198,1065,1198,1193,1156,1207,1125,1189,1155,1216,1186,1183,1206,1258,1191,1228,1111,1162,1173,1163,1136,1164,1193,1175,1087,1208,1258,1179,1125,1214,1170,1086,1190,1158,1226,1247,1162,1072,1183,1219,1211,1186,1157,1181,1200,1141,1115,1153,1104,1169,1210,1208,1230,1196,1187,1165,1095,1120,1174,1189,1121,1207,1124,1171,1184,1193,1122,1135,1190,1241,1165,1145,1200,1253,1148,1206,1154,1200,1170,1194,1212,970,1077,1114,897,1076,1180,1313,1367,1355,1448,1426,1348,1444,1413,1451,1542,1501,1475,1436,1439,1264,1192,1398,1434,1574,1412,1409,1193,1374,1244,1005,1315,1086,1307,1284,1343,1485,1541,1435,1637,1620,1532,1489,1329,1516,1529,1514,1474,1571,1588,1570,1554,1501,1508,1537,1563,1514,1534,1505,1528,1571,1555,1510,1514,1572,1573,1612,1497,1564,1600,1576,1486,1514,1498,1561,1454,1528,1601,1590,1540,1430,1529,1583,1561,1598,1532,1564,1513,1431,1581,1579,1531,1634,1463,1528,1470,1508,1595,1512,1394,1510,1439,1478,1462,1387,1467,1482,1534,1565,1554,1566,1503,1475,1461,1607,1549,1639,1544,1535,1500,1497,1480,1451,1535,1549,1603,1536,1505,1567,1592,1481,1503,1559,1477,1550,1569,1615,1570,1618,1558,1533,1562,1546,1529,1537,1494,1515,1515,1460,1479,1487,1465,1500,1585,1536,1444,1572,1502,1525,1424,1285,1413,1494,1543,1504,1554,1575,1618,1564,1561,1553,1555,1444,1449,1553,1542,1460,1504,1505,1552,1481,1541,1538,1464,1516,1465,1390,1302,621,761,1023,1110,1109,1118,1099,1067,1166,1147,1108,1100,1130,1142,1079,1037,1199,1325,1256,1039,1139,1070,1057,1055,1071,1117,1100,1172,1047,1115,1018,1063,967,1126,1069,1018,1084,1037,1031,989,1026,1073,1038,989,1087,1014,1242,1215,1209,1211,1281,1324,1315,1333,1329,1343,1348,1293,1131,1201,1177,1153,1181,1140,1138,989,902,943,913,949,891,913,984,905,890,960,1040,1197,1211,1240,1021,730,1409,959,934,1154,1060,1116,1127,1194,1425,606,867,1019,1322,1344,1378,1366,1291,1240,1170,959,803,909,1118,939,778,477,745,1207,1189,1206,1154,1157,1175,1206,1072,1180,1188,1175,1197,1181,1090,1202,1141,1126,1154,1151,1125,1155,1166,852,1234,1133,1276,1253,1202,523,599,1229,780,621,1003,1305,1346,1348,1443,1436,728,1178,1107,1238,1195,1224,1168,1177,1177,1231,1219,1191,1192,1246,1320,1054,1158,1205,1235,1185,1221,1225,1228,1219,1190,1234,1241,1240,1284,1240,1142,1386,1303,1383,1310,1418,1418,1109,871,925,968,857,807,1330,1263,1310,1194,1479,1397,1405,1146,1329,1329,1398,1212,1595,1665,1684,1730,1704,1697,1721,1719,1756,1720,1725,1606,1702,1680,1632,1679,1683,1667,1660,1693,1716,1710,1730,1675,1640,1673,1667,1664,1619,1591,1696,1707,1657,1680,1687,1671,1656,1649,1685,1650,1660,1605,1742,1702,1620,1639,1614,1681,1584,1708,1682,1663,1703,1648,1697,1723,1654,1638,1662,1653,1598,1661,1696,1630,1591,1638,1658,1691,1646,1580,1709,1698,1540,1630,1669,1672,1585,1609,1637,1667,1673,1614,1616,1577,1602,1545,1680,1673,1698,1655,1526,1624,1558,1553,1713,1650,1690,1684,1769,1716,1728,1595,1593,1702,1667,1632,1583,1614,1721,1684,1599,1612,1588,1516,1703,1679,1636,1657,1686,1727,1626,1561,1661,1617,1645,1513,1638,1673,1714,1607,1661,1552,1709,1672,1649,1657,1644,1675,1691,1657,1652,1667,1594,1583,1568,1684,1651,1672,1636,1615,1618,1613,1681,1601,1599,1579,1532,1574,1494,1678,1656,1665,1672,1721,1623,1642,1600,1681,1649,1669,1692,1699,1682,1645,1658,1681,1682,1676,1703,1713,1580,1592,1570,1703,1612,1674,1643,1633,1612,1739,1679,1656,1690,1686,1715,1636,1508,1640,1552,1647,1642,1603,1752,1726,1539,1674,1646,1683,1666,1685,1658,1578,1719,1701,1711,1609,1671,1625,1648,1530,1663,1673,1643,1662,1695,1633,1609,1648,1638,1671,1642,1650,1636,1720,1646,1668,1659,1443,1647,1734,1661,1600,1636,1627,1610,1623,1662,1683,1609,1665,1612,1560,1629,1611,1733,1617,1665,1509,1686,1579,1650,1664,1555,1571,1614,1750,1682,1688,1646,1682,1660,1576,1651,1596,1549,1640,1582,1660,1619,1683,1634,1628,1654,1649,1680,1639,1673,1693,1694,1650,1555,1673,1655,1681,1645,1657,1598,1668,1698,1697,1614,1675,1681,1622,1711,1708,1610,1649,1518,1661,1703,1727,1558,1596,1713,1684,1685,1588,1600,1637,1648,1639,1565,1626,1695,1679,1716,1663,1637,1654,1651,1696,1666,1646,1609,1564,1591,1595,1498,1457,1504,1505,1588,1627,1564,1605,1645,1661,1655,1661,1633,1694,1696,1614,1691,1682,1674,1672,1633,1679,1650,1671,1592,1693,1718,1668,1661,1672,1618,1538,1605,1583,1650,1686,1680,1683,1666,1554,1645,1588,1641,1633,1590,1634,1707,1500,1522,1729,1666,1629,1637,1603,1645,1605,1634,1643,1621,1646,1693,1680,1623,1708,1596,1647,1595,1666,1699,1636,1703,1625,1635,1743,1656,1599,1585,1639,1668,1641,1542,1536,1702,1687,1578,1717,1753,1643,1614,1535,1614,1646,1630,1664,1602,1659,1605,1562,1689,1676,1662,1703,1639,1691,1617,1638,1691,1665,1646,1677,1683,1606,1687,1755,1660,1652,1725,1648,1558,1707,1656,1622,1647,1668,1583,1649,1644,1612,1631,1740,1714,1396,1707,1654,1728,1699,1693,1660,1669,1704,1672,1616,1708,1462,1633,1718,1696,1685,1564,1649,1611,1584,1652,1615,1613,1388,1361,1293,1263,1273,1249,1261,1209,1292,1286,1261,1179,1245,1233,1245,1295,1255,1266,1432,1402,1133,1336,1255,1285,1336,1299,1232,1318,1258,1230,1240,1383,1226,968,1242,1341,1309,1318,1292,1289,1310,1365,1582,1327,1374,958,1027,1632,1635,1699,1646,1660,1714,1665,1646,1606,1592,1682,1646,1667,1686,1661,1679,1692,1684,1624,1758,1692,1707,1659,1730,1732,1731,1650,1705,1665,1707,1682,1715,1660,1675,1740,1712,1743,1673,1678,1716,1652,1618,1699,1671,1726,1631,1700,1660,1682,1725,1689,1700,1694,1734,1677,1672,1705,1696,1694,1702,1630,1660,1693,1677,1706,1674,1579,1679,1706,1661,1677,1743,1705,1659,1721,1717,1660,1639,1666,1729,1669,1723,1682,1637,1682,1697,1629,1610,1635,1634,1694,1679,1697,1706,1765,1669,1729,1675,1687,1489,1394,1501,1392,1336,1228,1266,1259,1249,1222,966,1003,773,821,789,803,842,813,921,928,1129,951,1004,997,1342,1104,1025,1143,1055,1545,1807,1814,1834,1812,1757,1816,1806,1801,1787,1785,1755,1748,1744,1760,1782,1829,1801,1804,1818,1813,1812,1772,1801,1806,1791,1799,1745,1740,1762,1802,1798,1733,1802,1799,1763,1820,1781,1809,1777,1834,1810,1727,1734,1742,1789,1789,1833,1805,1814,1799,1757,1731,1731,1803,1780,1790,1761,1821,1835,1827,1773,1835,1825,1815,1781,1768,1749,1814,1831,1780,1728,1762,1807,1765,1769,1727,1750,1798,1746,1761,1714,1780,1769,1776,1792,1810,1756,1753,1795,1526,1605,1562,1511,1564,1437,1522,1351,1212,878,1012,1127,839,955,1302,1280,1315,1177,869,877,1653,1784,1768,1785,1682,1682,1723,1756,1711,1781,1732,1747,1774,1765,1742,1737,1737,1705,1687,1741,1733,1761,1704,1740,1698,1713,1719,1751,1652,1745,1711,1680,1688,1699,1729,1712,1702,1723,1770,1731,1708,1667,1768,1734,1764,1673,1757,1701,1702,1732,1731,1799,1586,1723,1744,1737,1663,1740,1689,1742,1732,1694,1715,1750,1669,1756,1704,1704,1393,1272,1343,1366,1376,1554,1464,1425,1498,1290,1467,1324,1365,1027,826,1378,1360,1004,1404,1415,875,1094,1177,1236,1285,1350,1270,1177,1672,1677,1705,1686,1685,1689,1559,1672,1669,1672,1745,1639,1707,1627,1665,1684,1690,1582,1661,1711,1607,1632,1584,1598,1650,1705,1684,1725,1724,1680,1724,1489,1741,1647,1737,1671,1712,1725,1693,1705,1671,1659,1645,1685,1673,1710,1544,1666,1611,1599,1720,1528,1648,1396,1443,1419,1272,1195,1245,1423,1569,1287,1442,1451,1403,1410,1437,1445,784,1141,1169,1326,1294,1349,1255,1191,1078,996,1403,1556,1564,1615,1502,1521,1540,1551,1585,1559,1569,1243,1238,1233,1077,838,1244,1252,1260,1189,1215,1382,1193,1113,1092,847,741,852,896,871,897,848,932,874,843,814,861,853,858,930,1254,1244,1105,1098,1103,796,1451,1459,1509,1489,1532,1504,1444,1502,1500,1479,1537,1448,1443,1523,1525,1486,1486,1473,1518,1515,1448,1425,1403,1536,1531,1492,1429,1556,1420,1473,1490,1518,1510,1476,1475,1462,1486,1357,1395,1358,1359,1390,1443,1445,1390,1499,1477,1383,1489,1268,1413,1441,1460,1374,1492,1514,1361,1386,1504,1495,1464,1518,1526,1418,1304,1457,1462,1525,1537,1499,1389,1456,1492,1524,1533,1487,1403,1483,1439,1418,1382,1466,1471,1463,1470,1531,1490,1462,1436,1447,1404,1406,1483,1492,1505,1482,1509,1472,1505,1458,1515,1480,1417,1473,1385,1525,1528,1441,1415,1461,1432,1498,1531,1441,1432,1476,1456,1449,1428,1400,1427,1508,1465,1497,1441,1481,1384,1479,1371,1441,1439,1379,1461,1465,1549,1481,1130,1321,1422,1374,1384,1456,1509,1503,1523,1531,1487,1452,1503,1504,1482,1510,1529,1489,1518,1485,1440,1345,1473,1519,1408,1377,1503,1459,1472,1416,1454,1473,1447,1510,1462,1477,1463,1511,1426,1445,1531,1431,1530,1557,1400,1441,1430,1275,1184,1216,1407,1566,1293,1440,1360,1139,1212,1118,1214,1094,1179,1195,1193,1146,1212,1217,1174,1168,1207,1206,1173,1205,1230,989,1163,1275,1301,1400,1329,1481,1487,1291,1020,1420,1302,1335,1310,973,1459,1324,1369,1336,907,1321,1306,1264,1301,1106,1305,1171,1280,1215,942,958,898,921,892,951,940,984,893,903,1088,940,954,896,919,890,952,942,982,898,908,1088,824,781,796,797,795,851,759,822,833,734,850,823,759,760,851,908,1106,1456,1369,1328,1239,1181,1160,1168,1143,1171,1232,1170,1191,1115,1159,1104,1033,880,924,929,945,896,925,952,899,915,922,1034,1294,1221,1218,1315,1222,1005,931,987,1021,990,972,1124,962,947,977,1010,797,757,797,801,790,852,779,785,799,776,833,795,820,753,861,875,1241,1224,1315,1287,1241,1301,1281,1292,1270,1242,1285,1261,1268,1382,1129,960,920,936,1092,1054,1223,1224,1324,1245,1308,1175,969,1105,996,989,1033,1003,937,982,1054,1196,1145,1178,1080,992,1204,978,890,961,984,1061,914,912,950,1145,1221,1187,1392,1229,1150,1225,1397,1373,1371,1163,1145,1335,1074,740,454,899,918,962,933,859,1268,1200,1212,1206,1242,1202,1112,950,1013,1325,1542,1541,1503,1487,1493,1539,1459,1513,1456,1539,1485,1519,1468,1546,1548,1488,1524,1524,1447,1564,1504,1518,1521,1543,1429,1435,1506,1516,1503,1489,1538,1449,1507,1474,1498,1403,1408,1508,1520,1452,1365,1449,1484,1507,1521,1515,1533,1478,1443,1545,1481,1512,1535,1504,1502,1472,1471,1476,1456,1455,1447,1470,1414,1458,1446,1474,1467,1457,1461,1488,1485,1421,1456,1476,1378,1361,1485,1473,1498,1444,1400,1559,1473,1430,1441,1479,1358,1525,1512,1531,1459,1456,1407,1453,1444,1422,1389,1467,1470,1478,1513,1480,1463,1484,1551,1482,1493,1540,1424,1496,1477,1479,1521,1509,1505,1494,1498,1517,1542,1535,1530,1475,1503,1478,1524,1474,1423,1390,1495,1491,1497,1483,1471,1438,1541,1504,1432,1500,1500,1453,1539,1484,1456,1419,1462,1505,1525,1498,1498,1556,1540,1503,1500,1457,1415,1393,1529,1525,1530,1493,1474,1401,1499,1491,1464,1472,1480,1520,1525,1506,1636,1441,1431,1398,1262,1194,1277,1452,1612,1307,1452,1265,550,1441,1356,1087,1046,1263,1226,1222,1273,1190,1132,1347,1391,1227,1288,1242,1474,1422,1468,1499,1193,1022,1379,1368,1310,1145,1416,1394,1407,1165,1173,1136,1341,1387,1039,1237,1230,1488,1352,1382,1357,949,815,1305,1336,1254,1177,1804,1807,1757,1767,1829,1733,1674,1593,1707,1780,1704,1630,1687,1759,1738,1765,1705,1784,1740,1721,1789,1789,1763,1779,1797,1754,1715,1725,1707,1782,1793,1775,1739,1752,1721,1725,1737,1769,1713,1760,1737,1697,1751,1633,1655,1748,1678,1749,1716,1715,1817,1750,1710,1691,1687,1686,1683,1826,1826,1797,1765,1781,1705,1780,1731,1672,1714,1763,1732,1675,1679,1619,1709,1760,1767,1701,1740,1676,1737,1664,1785,1716,1695,1728,1735,1768,1768,1614,1763,1672,1737,1763,1100,990,1198,1315,1215,220],"successes":[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]}
;
            compressedData['data'] = byteArray;
            assert(typeof Module['LZ4'] === 'object', 'LZ4 not present - was your app build with -sLZ4?');
            Module['LZ4'].loadPackage({ 'metadata': metadata, 'compressedData': compressedData }, false);
            Module['removeRunDependency']('datafile_build/php-web.data');
      };
      Module['addRunDependency']('datafile_build/php-web.data');

      if (!Module.preloadResults) Module.preloadResults = {};

        function preloadFallback(error) {
          console.error(error);
          console.error('falling back to default preload behavior');
          fetchRemotePackage(REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE, processPackageData, handleError);
        };

        openDatabase(
          function(db) {
            checkCachedPackage(db, PACKAGE_PATH + PACKAGE_NAME,
              function(useCached, metadata) {
                Module.preloadResults[PACKAGE_NAME] = {fromCache: useCached};
                if (useCached) {
                  fetchCachedPackage(db, PACKAGE_PATH + PACKAGE_NAME, metadata, processPackageData, preloadFallback);
                } else {
                  fetchRemotePackage(REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE,
                    function(packageData) {
                      cacheRemotePackage(db, PACKAGE_PATH + PACKAGE_NAME, packageData, {uuid:PACKAGE_UUID}, processPackageData,
                        function(error) {
                          console.error(error);
                          processPackageData(packageData);
                        });
                    }
                  , preloadFallback);
                }
              }
            , preloadFallback);
          }
        , preloadFallback);

        if (Module['setStatus']) Module['setStatus']('Downloading...');

    }
    if (Module['calledRun']) {
      runWithFS();
    } else {
      if (!Module['preRun']) Module['preRun'] = [];
      Module["preRun"].push(runWithFS); // FS is not initialized yet, wait for it
    }

    }
    loadPackage({"files": [{"filename": "/app/README.MD", "start": 0, "end": 65}, {"filename": "/app/src/index.php", "start": 65, "end": 1607}, {"filename": "/app/src/vendor/autoload.php", "start": 1607, "end": 2378}, {"filename": "/app/src/vendor/composer/ClassLoader.php", "start": 2378, "end": 18906}, {"filename": "/app/src/vendor/composer/InstalledVersions.php", "start": 18906, "end": 33975}, {"filename": "/app/src/vendor/composer/autoload_classmap.php", "start": 33975, "end": 34197}, {"filename": "/app/src/vendor/composer/autoload_files.php", "start": 34197, "end": 34433}, {"filename": "/app/src/vendor/composer/autoload_namespaces.php", "start": 34433, "end": 34572}, {"filename": "/app/src/vendor/composer/autoload_psr4.php", "start": 34572, "end": 34839}, {"filename": "/app/src/vendor/composer/autoload_real.php", "start": 34839, "end": 36511}, {"filename": "/app/src/vendor/composer/autoload_static.php", "start": 36511, "end": 37924}, {"filename": "/app/src/vendor/composer/installed.json", "start": 37924, "end": 45151}, {"filename": "/app/src/vendor/composer/installed.php", "start": 45151, "end": 46950}, {"filename": "/app/src/vendor/composer/platform_check.php", "start": 46950, "end": 47875}, {"filename": "/app/src/vendor/fakerphp/faker/rector-migrate.php", "start": 47875, "end": 51628}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Calculator/Ean.php", "start": 51628, "end": 52758}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Calculator/Iban.php", "start": 52758, "end": 54372}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Calculator/Inn.php", "start": 54372, "end": 55629}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Calculator/Isbn.php", "start": 55629, "end": 57177}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Calculator/Luhn.php", "start": 57177, "end": 58815}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Calculator/TCNo.php", "start": 58815, "end": 59967}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/ChanceGenerator.php", "start": 59967, "end": 61393}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Container/Container.php", "start": 61393, "end": 65143}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Container/ContainerBuilder.php", "start": 65143, "end": 67016}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Container/ContainerException.php", "start": 67016, "end": 67316}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Container/ContainerInterface.php", "start": 67316, "end": 67480}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Container/NotInContainerException.php", "start": 67480, "end": 67783}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Core/Barcode.php", "start": 67783, "end": 69051}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Core/Blood.php", "start": 69051, "end": 69869}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Core/Color.php", "start": 69869, "end": 75224}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Core/Coordinates.php", "start": 75224, "end": 77353}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Core/DateTime.php", "start": 77353, "end": 83658}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Core/File.php", "start": 83658, "end": 107367}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Core/Number.php", "start": 107367, "end": 109325}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Core/Uuid.php", "start": 109325, "end": 111385}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Core/Version.php", "start": 111385, "end": 113497}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/DefaultGenerator.php", "start": 113497, "end": 114521}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Documentor.php", "start": 114521, "end": 116931}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Extension/AddressExtension.php", "start": 116931, "end": 117693}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Extension/BarcodeExtension.php", "start": 117693, "end": 118537}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Extension/BloodExtension.php", "start": 118537, "end": 119064}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Extension/ColorExtension.php", "start": 119064, "end": 120197}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Extension/CompanyExtension.php", "start": 120197, "end": 120583}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Extension/CountryExtension.php", "start": 120583, "end": 120841}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Extension/DateTimeExtension.php", "start": 120841, "end": 130107}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Extension/Extension.php", "start": 130107, "end": 130357}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Extension/ExtensionNotFound.php", "start": 130357, "end": 130567}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Extension/FileExtension.php", "start": 130567, "end": 131114}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Extension/GeneratorAwareExtension.php", "start": 131114, "end": 131603}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Extension/GeneratorAwareExtensionTrait.php", "start": 131603, "end": 132081}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Extension/Helper.php", "start": 132081, "end": 135301}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Extension/NumberExtension.php", "start": 135301, "end": 136692}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Extension/PersonExtension.php", "start": 136692, "end": 137814}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Extension/PhoneNumberExtension.php", "start": 137814, "end": 138179}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Extension/UuidExtension.php", "start": 138179, "end": 138519}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Extension/VersionExtension.php", "start": 138519, "end": 139146}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Factory.php", "start": 139146, "end": 141189}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Generator.php", "start": 141189, "end": 164233}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Guesser/Name.php", "start": 164233, "end": 169598}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/ORM/CakePHP/ColumnTypeGuesser.php", "start": 169598, "end": 171819}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/ORM/CakePHP/EntityPopulator.php", "start": 171819, "end": 176417}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/ORM/CakePHP/Populator.php", "start": 176417, "end": 178935}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/ORM/Doctrine/ColumnTypeGuesser.php", "start": 178935, "end": 181623}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/ORM/Doctrine/EntityPopulator.php", "start": 181623, "end": 188996}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/ORM/Doctrine/Populator.php", "start": 188996, "end": 192572}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/ORM/Doctrine/backward-compatibility.php", "start": 192572, "end": 192978}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/ORM/Mandango/ColumnTypeGuesser.php", "start": 192978, "end": 194345}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/ORM/Mandango/EntityPopulator.php", "start": 194345, "end": 197642}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/ORM/Mandango/Populator.php", "start": 197642, "end": 199553}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/ORM/Propel/ColumnTypeGuesser.php", "start": 199553, "end": 203086}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/ORM/Propel/EntityPopulator.php", "start": 203086, "end": 208799}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/ORM/Propel/Populator.php", "start": 208799, "end": 211568}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/ORM/Propel2/ColumnTypeGuesser.php", "start": 211568, "end": 215082}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/ORM/Propel2/EntityPopulator.php", "start": 215082, "end": 220904}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/ORM/Propel2/Populator.php", "start": 220904, "end": 223787}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/ORM/Spot/ColumnTypeGuesser.php", "start": 223787, "end": 226067}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/ORM/Spot/EntityPopulator.php", "start": 226067, "end": 231148}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/ORM/Spot/Populator.php", "start": 231148, "end": 233734}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/Address.php", "start": 233734, "end": 237306}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/Barcode.php", "start": 237306, "end": 239548}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/Base.php", "start": 239548, "end": 262280}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/Biased.php", "start": 262280, "end": 264116}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/Color.php", "start": 264116, "end": 268865}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/Company.php", "start": 268865, "end": 269766}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/DateTime.php", "start": 269766, "end": 282152}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/File.php", "start": 282152, "end": 307859}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/HtmlLorem.php", "start": 307859, "end": 318082}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/Image.php", "start": 318082, "end": 324222}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/Internet.php", "start": 324222, "end": 341802}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/Lorem.php", "start": 341802, "end": 349686}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/Medical.php", "start": 349686, "end": 350334}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/Miscellaneous.php", "start": 350334, "end": 363860}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/Payment.php", "start": 363860, "end": 374527}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/Person.php", "start": 374527, "end": 377838}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/PhoneNumber.php", "start": 377838, "end": 384440}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/Text.php", "start": 384440, "end": 391248}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/UserAgent.php", "start": 391248, "end": 399910}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/Uuid.php", "start": 399910, "end": 401729}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ar_EG/Address.php", "start": 401729, "end": 411908}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ar_EG/Color.php", "start": 411908, "end": 413627}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ar_EG/Company.php", "start": 413627, "end": 415958}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ar_EG/Internet.php", "start": 415958, "end": 417897}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ar_EG/Payment.php", "start": 417897, "end": 418221}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ar_EG/Person.php", "start": 418221, "end": 429248}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ar_EG/Text.php", "start": 429248, "end": 448847}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ar_JO/Address.php", "start": 448847, "end": 458772}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ar_JO/Company.php", "start": 458772, "end": 460514}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ar_JO/Internet.php", "start": 460514, "end": 462125}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ar_JO/Person.php", "start": 462125, "end": 481489}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ar_JO/Text.php", "start": 481489, "end": 657699}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ar_SA/Address.php", "start": 657699, "end": 668813}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ar_SA/Color.php", "start": 668813, "end": 680626}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ar_SA/Company.php", "start": 680626, "end": 682629}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ar_SA/Internet.php", "start": 682629, "end": 684240}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ar_SA/Payment.php", "start": 684240, "end": 684922}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ar_SA/Person.php", "start": 684922, "end": 700251}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ar_SA/Text.php", "start": 700251, "end": 876461}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/at_AT/Payment.php", "start": 876461, "end": 876694}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/bg_BG/Internet.php", "start": 876694, "end": 877002}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/bg_BG/Payment.php", "start": 877002, "end": 878400}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/bg_BG/Person.php", "start": 878400, "end": 911255}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/bg_BG/PhoneNumber.php", "start": 911255, "end": 911676}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/bn_BD/Address.php", "start": 911676, "end": 924607}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/bn_BD/Company.php", "start": 924607, "end": 925204}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/bn_BD/Person.php", "start": 925204, "end": 926661}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/bn_BD/PhoneNumber.php", "start": 926661, "end": 926924}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/bn_BD/Utils.php", "start": 926924, "end": 927224}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/cs_CZ/Address.php", "start": 927224, "end": 936470}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/cs_CZ/Company.php", "start": 936470, "end": 940058}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/cs_CZ/DateTime.php", "start": 940058, "end": 941795}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/cs_CZ/Internet.php", "start": 941795, "end": 942112}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/cs_CZ/Payment.php", "start": 942112, "end": 942794}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/cs_CZ/Person.php", "start": 942794, "end": 976619}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/cs_CZ/PhoneNumber.php", "start": 976619, "end": 976881}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/cs_CZ/Text.php", "start": 976881, "end": 1495748}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/da_DK/Address.php", "start": 1495748, "end": 1511935}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/da_DK/Company.php", "start": 1511935, "end": 1513802}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/da_DK/Internet.php", "start": 1513802, "end": 1514412}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/da_DK/Payment.php", "start": 1514412, "end": 1515094}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/da_DK/Person.php", "start": 1515094, "end": 1531391}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/da_DK/PhoneNumber.php", "start": 1531391, "end": 1531731}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/de_AT/Address.php", "start": 1531731, "end": 1542800}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/de_AT/Company.php", "start": 1542800, "end": 1543113}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/de_AT/Internet.php", "start": 1543113, "end": 1543375}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/de_AT/Payment.php", "start": 1543375, "end": 1544685}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/de_AT/Person.php", "start": 1544685, "end": 1556085}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/de_AT/PhoneNumber.php", "start": 1556085, "end": 1556540}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/de_AT/Text.php", "start": 1556540, "end": 1556630}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/de_CH/Address.php", "start": 1556630, "end": 1567162}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/de_CH/Company.php", "start": 1567162, "end": 1567493}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/de_CH/Internet.php", "start": 1567493, "end": 1567874}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/de_CH/Payment.php", "start": 1567874, "end": 1568556}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/de_CH/Person.php", "start": 1568556, "end": 1576490}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/de_CH/PhoneNumber.php", "start": 1576490, "end": 1577458}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/de_CH/Text.php", "start": 1577458, "end": 1709050}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/de_DE/Address.php", "start": 1709050, "end": 1724965}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/de_DE/Company.php", "start": 1724965, "end": 1726314}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/de_DE/Internet.php", "start": 1726314, "end": 1726983}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/de_DE/Payment.php", "start": 1726983, "end": 1730020}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/de_DE/Person.php", "start": 1730020, "end": 1748175}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/de_DE/PhoneNumber.php", "start": 1748175, "end": 1752993}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/de_DE/Text.php", "start": 1752993, "end": 1884585}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/el_CY/Address.php", "start": 1884585, "end": 1888686}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/el_CY/Company.php", "start": 1888686, "end": 1889047}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/el_CY/Internet.php", "start": 1889047, "end": 1889395}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/el_CY/Payment.php", "start": 1889395, "end": 1890903}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/el_CY/Person.php", "start": 1890903, "end": 1902936}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/el_CY/PhoneNumber.php", "start": 1902936, "end": 1903556}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/el_GR/Address.php", "start": 1903556, "end": 1921960}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/el_GR/Company.php", "start": 1921960, "end": 1924191}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/el_GR/Payment.php", "start": 1924191, "end": 1924873}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/el_GR/Person.php", "start": 1924873, "end": 1959420}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/el_GR/PhoneNumber.php", "start": 1959420, "end": 1970026}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/el_GR/Text.php", "start": 1970026, "end": 2515683}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/en_AU/Address.php", "start": 2515683, "end": 2520370}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/en_AU/Internet.php", "start": 2520370, "end": 2520692}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/en_AU/PhoneNumber.php", "start": 2520692, "end": 2522105}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/en_CA/Address.php", "start": 2522105, "end": 2523959}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/en_CA/PhoneNumber.php", "start": 2523959, "end": 2524345}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/en_GB/Address.php", "start": 2524345, "end": 2539672}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/en_GB/Company.php", "start": 2539672, "end": 2543218}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/en_GB/Internet.php", "start": 2543218, "end": 2543550}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/en_GB/Payment.php", "start": 2543550, "end": 2544232}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/en_GB/Person.php", "start": 2544232, "end": 2549954}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/en_GB/PhoneNumber.php", "start": 2549954, "end": 2550981}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/en_HK/Address.php", "start": 2550981, "end": 2560840}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/en_HK/Internet.php", "start": 2560840, "end": 2561234}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/en_HK/PhoneNumber.php", "start": 2561234, "end": 2562271}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/en_IN/Address.php", "start": 2562271, "end": 2570500}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/en_IN/Internet.php", "start": 2570500, "end": 2570830}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/en_IN/Person.php", "start": 2570830, "end": 2582791}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/en_IN/PhoneNumber.php", "start": 2582791, "end": 2583550}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/en_NG/Address.php", "start": 2583550, "end": 2589033}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/en_NG/Internet.php", "start": 2589033, "end": 2589235}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/en_NG/Person.php", "start": 2589235, "end": 2593465}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/en_NG/PhoneNumber.php", "start": 2593465, "end": 2596714}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/en_NZ/Address.php", "start": 2596714, "end": 2598945}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/en_NZ/Internet.php", "start": 2598945, "end": 2599392}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/en_NZ/PhoneNumber.php", "start": 2599392, "end": 2601556}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/en_PH/Address.php", "start": 2601556, "end": 2628941}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/en_PH/PhoneNumber.php", "start": 2628941, "end": 2632023}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/en_SG/Address.php", "start": 2632023, "end": 2635802}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/en_SG/Person.php", "start": 2635802, "end": 2638093}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/en_SG/PhoneNumber.php", "start": 2638093, "end": 2640873}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/en_UG/Address.php", "start": 2640873, "end": 2644775}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/en_UG/Internet.php", "start": 2644775, "end": 2645113}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/en_UG/Person.php", "start": 2645113, "end": 2656151}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/en_UG/PhoneNumber.php", "start": 2656151, "end": 2656488}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/en_US/Address.php", "start": 2656488, "end": 2665431}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/en_US/Company.php", "start": 2665431, "end": 2703380}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/en_US/Payment.php", "start": 2703380, "end": 2704536}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/en_US/Person.php", "start": 2704536, "end": 2741765}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/en_US/PhoneNumber.php", "start": 2741765, "end": 2746224}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/en_US/Text.php", "start": 2746224, "end": 2911586}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/en_ZA/Address.php", "start": 2911586, "end": 2915966}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/en_ZA/Company.php", "start": 2915966, "end": 2916651}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/en_ZA/Internet.php", "start": 2916651, "end": 2917533}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/en_ZA/Person.php", "start": 2917533, "end": 2932104}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/en_ZA/PhoneNumber.php", "start": 2932104, "end": 2934971}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/es_AR/Address.php", "start": 2934971, "end": 2937525}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/es_AR/Company.php", "start": 2937525, "end": 2945456}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/es_AR/Person.php", "start": 2945456, "end": 2956357}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/es_AR/PhoneNumber.php", "start": 2956357, "end": 2957352}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/es_ES/Address.php", "start": 2957352, "end": 2963511}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/es_ES/Color.php", "start": 2963511, "end": 2963923}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/es_ES/Company.php", "start": 2963923, "end": 2972454}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/es_ES/Internet.php", "start": 2972454, "end": 2972822}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/es_ES/Payment.php", "start": 2972822, "end": 2974085}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/es_ES/Person.php", "start": 2974085, "end": 2987633}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/es_ES/PhoneNumber.php", "start": 2987633, "end": 2988674}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/es_ES/Text.php", "start": 2988674, "end": 3291173}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/es_PE/Address.php", "start": 3291173, "end": 3293268}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/es_PE/Company.php", "start": 3293268, "end": 3301833}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/es_PE/Person.php", "start": 3301833, "end": 3312617}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/es_PE/PhoneNumber.php", "start": 3312617, "end": 3312938}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/es_VE/Address.php", "start": 3312938, "end": 3315457}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/es_VE/Company.php", "start": 3315457, "end": 3316786}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/es_VE/Internet.php", "start": 3316786, "end": 3317158}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/es_VE/Person.php", "start": 3317158, "end": 3330834}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/es_VE/PhoneNumber.php", "start": 3330834, "end": 3331477}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/et_EE/Person.php", "start": 3331477, "end": 3338527}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/fa_IR/Address.php", "start": 3338527, "end": 3341556}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/fa_IR/Company.php", "start": 3341556, "end": 3343245}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/fa_IR/Internet.php", "start": 3343245, "end": 3347292}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/fa_IR/Person.php", "start": 3347292, "end": 3384407}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/fa_IR/PhoneNumber.php", "start": 3384407, "end": 3386746}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/fa_IR/Text.php", "start": 3386746, "end": 3528203}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/fi_FI/Address.php", "start": 3528203, "end": 3533106}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/fi_FI/Company.php", "start": 3533106, "end": 3537413}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/fi_FI/Internet.php", "start": 3537413, "end": 3537722}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/fi_FI/Payment.php", "start": 3537722, "end": 3538404}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/fi_FI/Person.php", "start": 3538404, "end": 3555124}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/fi_FI/PhoneNumber.php", "start": 3555124, "end": 3557466}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/fr_BE/Address.php", "start": 3557466, "end": 3560569}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/fr_BE/Color.php", "start": 3560569, "end": 3560661}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/fr_BE/Company.php", "start": 3560661, "end": 3561022}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/fr_BE/Internet.php", "start": 3561022, "end": 3561269}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/fr_BE/Payment.php", "start": 3561269, "end": 3562580}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/fr_BE/Person.php", "start": 3562580, "end": 3567451}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/fr_BE/PhoneNumber.php", "start": 3567451, "end": 3567857}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/fr_CA/Address.php", "start": 3567857, "end": 3572680}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/fr_CA/Color.php", "start": 3572680, "end": 3572772}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/fr_CA/Company.php", "start": 3572772, "end": 3572868}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/fr_CA/Person.php", "start": 3572868, "end": 3578117}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/fr_CA/Text.php", "start": 3578117, "end": 3700943}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/fr_CH/Address.php", "start": 3700943, "end": 3705869}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/fr_CH/Color.php", "start": 3705869, "end": 3705961}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/fr_CH/Company.php", "start": 3705961, "end": 3706313}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/fr_CH/Internet.php", "start": 3706313, "end": 3706631}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/fr_CH/Payment.php", "start": 3706631, "end": 3707313}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/fr_CH/Person.php", "start": 3707313, "end": 3715410}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/fr_CH/PhoneNumber.php", "start": 3715410, "end": 3716307}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/fr_CH/Text.php", "start": 3716307, "end": 3716397}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/fr_FR/Address.php", "start": 3716397, "end": 3725934}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/fr_FR/Color.php", "start": 3725934, "end": 3729167}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/fr_FR/Company.php", "start": 3729167, "end": 3742464}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/fr_FR/Internet.php", "start": 3742464, "end": 3742852}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/fr_FR/Payment.php", "start": 3742852, "end": 3744350}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/fr_FR/Person.php", "start": 3744350, "end": 3754499}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/fr_FR/PhoneNumber.php", "start": 3754499, "end": 3759279}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/fr_FR/Text.php", "start": 3759279, "end": 4480533}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/he_IL/Address.php", "start": 4480533, "end": 4505858}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/he_IL/Company.php", "start": 4505858, "end": 4506234}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/he_IL/Payment.php", "start": 4506234, "end": 4506916}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/he_IL/Person.php", "start": 4506916, "end": 4535374}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/he_IL/PhoneNumber.php", "start": 4535374, "end": 4535632}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/hr_HR/Address.php", "start": 4535632, "end": 4544440}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/hr_HR/Company.php", "start": 4544440, "end": 4545146}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/hr_HR/Payment.php", "start": 4545146, "end": 4545828}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/hr_HR/Person.php", "start": 4545828, "end": 4548730}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/hr_HR/PhoneNumber.php", "start": 4548730, "end": 4549009}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/hu_HU/Address.php", "start": 4549009, "end": 4557475}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/hu_HU/Company.php", "start": 4557475, "end": 4557763}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/hu_HU/Payment.php", "start": 4557763, "end": 4558445}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/hu_HU/Person.php", "start": 4558445, "end": 4564910}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/hu_HU/PhoneNumber.php", "start": 4564910, "end": 4565177}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/hu_HU/Text.php", "start": 4565177, "end": 4913795}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/hy_AM/Address.php", "start": 4913795, "end": 4920523}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/hy_AM/Color.php", "start": 4920523, "end": 4920901}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/hy_AM/Company.php", "start": 4920901, "end": 4922161}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/hy_AM/Internet.php", "start": 4922161, "end": 4922471}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/hy_AM/Person.php", "start": 4922471, "end": 4937971}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/hy_AM/PhoneNumber.php", "start": 4937971, "end": 4938815}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/id_ID/Address.php", "start": 4938815, "end": 4952743}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/id_ID/Color.php", "start": 4952743, "end": 4955579}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/id_ID/Company.php", "start": 4955579, "end": 4958364}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/id_ID/Internet.php", "start": 4958364, "end": 4958976}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/id_ID/Person.php", "start": 4958976, "end": 4978292}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/id_ID/PhoneNumber.php", "start": 4978292, "end": 4979677}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/is_IS/Address.php", "start": 4979677, "end": 4988217}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/is_IS/Company.php", "start": 4988217, "end": 4989689}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/is_IS/Internet.php", "start": 4989689, "end": 4990120}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/is_IS/Payment.php", "start": 4990120, "end": 4990802}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/is_IS/Person.php", "start": 4990802, "end": 5038479}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/is_IS/PhoneNumber.php", "start": 5038479, "end": 5038795}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/it_CH/Address.php", "start": 5038795, "end": 5043488}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/it_CH/Company.php", "start": 5043488, "end": 5043819}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/it_CH/Internet.php", "start": 5043819, "end": 5044137}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/it_CH/Payment.php", "start": 5044137, "end": 5044819}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/it_CH/Person.php", "start": 5044819, "end": 5052508}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/it_CH/PhoneNumber.php", "start": 5052508, "end": 5053405}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/it_CH/Text.php", "start": 5053405, "end": 5053495}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/it_IT/Address.php", "start": 5053495, "end": 5061034}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/it_IT/Company.php", "start": 5061034, "end": 5067419}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/it_IT/Internet.php", "start": 5067419, "end": 5067714}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/it_IT/Payment.php", "start": 5067714, "end": 5068396}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/it_IT/Person.php", "start": 5068396, "end": 5076707}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/it_IT/PhoneNumber.php", "start": 5076707, "end": 5077280}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/it_IT/Text.php", "start": 5077280, "end": 5171378}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ja_JP/Address.php", "start": 5171378, "end": 5179867}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ja_JP/Company.php", "start": 5179867, "end": 5180231}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ja_JP/Internet.php", "start": 5180231, "end": 5183168}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ja_JP/Person.php", "start": 5183168, "end": 5188934}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ja_JP/PhoneNumber.php", "start": 5188934, "end": 5189364}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ja_JP/Text.php", "start": 5189364, "end": 5338275}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ka_GE/Address.php", "start": 5338275, "end": 5353268}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ka_GE/Color.php", "start": 5353268, "end": 5354362}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ka_GE/Company.php", "start": 5354362, "end": 5356560}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ka_GE/DateTime.php", "start": 5356560, "end": 5357988}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ka_GE/Internet.php", "start": 5357988, "end": 5358413}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ka_GE/Payment.php", "start": 5358413, "end": 5360693}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ka_GE/Person.php", "start": 5360693, "end": 5370789}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ka_GE/PhoneNumber.php", "start": 5370789, "end": 5371055}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ka_GE/Text.php", "start": 5371055, "end": 5761891}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/kk_KZ/Address.php", "start": 5761891, "end": 5764498}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/kk_KZ/Color.php", "start": 5764498, "end": 5764892}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/kk_KZ/Company.php", "start": 5764892, "end": 5767402}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/kk_KZ/Internet.php", "start": 5767402, "end": 5767653}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/kk_KZ/Payment.php", "start": 5767653, "end": 5768612}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/kk_KZ/Person.php", "start": 5768612, "end": 5775786}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/kk_KZ/PhoneNumber.php", "start": 5775786, "end": 5776121}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/kk_KZ/Text.php", "start": 5776121, "end": 5817843}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ko_KR/Address.php", "start": 5817843, "end": 5824742}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ko_KR/Company.php", "start": 5824742, "end": 5825698}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ko_KR/Internet.php", "start": 5825698, "end": 5830532}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ko_KR/Person.php", "start": 5830532, "end": 5834953}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ko_KR/PhoneNumber.php", "start": 5834953, "end": 5835996}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ko_KR/Text.php", "start": 5835996, "end": 6142589}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/lt_LT/Address.php", "start": 6142589, "end": 6151983}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/lt_LT/Company.php", "start": 6151983, "end": 6152418}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/lt_LT/Internet.php", "start": 6152418, "end": 6152951}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/lt_LT/Payment.php", "start": 6152951, "end": 6153633}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/lt_LT/Person.php", "start": 6153633, "end": 6181909}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/lt_LT/PhoneNumber.php", "start": 6181909, "end": 6182251}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/lv_LV/Address.php", "start": 6182251, "end": 6187650}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/lv_LV/Color.php", "start": 6187650, "end": 6188196}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/lv_LV/Internet.php", "start": 6188196, "end": 6188489}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/lv_LV/Payment.php", "start": 6188489, "end": 6189171}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/lv_LV/Person.php", "start": 6189171, "end": 6250524}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/lv_LV/PhoneNumber.php", "start": 6250524, "end": 6250819}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/me_ME/Address.php", "start": 6250819, "end": 6262659}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/me_ME/Company.php", "start": 6262659, "end": 6265485}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/me_ME/Payment.php", "start": 6265485, "end": 6266165}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/me_ME/Person.php", "start": 6266165, "end": 6305228}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/me_ME/PhoneNumber.php", "start": 6305228, "end": 6305506}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/mn_MN/Person.php", "start": 6305506, "end": 6313062}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/mn_MN/PhoneNumber.php", "start": 6313062, "end": 6313279}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ms_MY/Address.php", "start": 6313279, "end": 6340044}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ms_MY/Company.php", "start": 6340044, "end": 6354264}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ms_MY/Miscellaneous.php", "start": 6354264, "end": 6358941}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ms_MY/Payment.php", "start": 6358941, "end": 6366353}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ms_MY/Person.php", "start": 6366353, "end": 6434166}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ms_MY/PhoneNumber.php", "start": 6434166, "end": 6440090}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/nb_NO/Address.php", "start": 6440090, "end": 6452654}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/nb_NO/Company.php", "start": 6452654, "end": 6481509}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/nb_NO/Payment.php", "start": 6481509, "end": 6482191}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/nb_NO/Person.php", "start": 6482191, "end": 6512933}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/nb_NO/PhoneNumber.php", "start": 6512933, "end": 6513780}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ne_NP/Address.php", "start": 6513780, "end": 6528589}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ne_NP/Internet.php", "start": 6528589, "end": 6529637}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ne_NP/Payment.php", "start": 6529637, "end": 6536994}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ne_NP/Person.php", "start": 6536994, "end": 6545433}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ne_NP/PhoneNumber.php", "start": 6545433, "end": 6545792}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/nl_BE/Address.php", "start": 6545792, "end": 6553992}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/nl_BE/Company.php", "start": 6553992, "end": 6554330}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/nl_BE/Internet.php", "start": 6554330, "end": 6554603}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/nl_BE/Payment.php", "start": 6554603, "end": 6556132}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/nl_BE/Person.php", "start": 6556132, "end": 6562300}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/nl_BE/PhoneNumber.php", "start": 6562300, "end": 6562706}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/nl_BE/Text.php", "start": 6562706, "end": 7572686}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/nl_NL/Address.php", "start": 7572686, "end": 7614730}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/nl_NL/Color.php", "start": 7614730, "end": 7616706}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/nl_NL/Company.php", "start": 7616706, "end": 7640127}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/nl_NL/Internet.php", "start": 7640127, "end": 7640394}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/nl_NL/Payment.php", "start": 7640394, "end": 7641076}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/nl_NL/Person.php", "start": 7641076, "end": 7668331}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/nl_NL/PhoneNumber.php", "start": 7668331, "end": 7669204}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/nl_NL/Text.php", "start": 7669204, "end": 7873214}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/pl_PL/Address.php", "start": 7873214, "end": 7889358}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/pl_PL/Color.php", "start": 7889358, "end": 7892095}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/pl_PL/Company.php", "start": 7892095, "end": 7894513}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/pl_PL/Internet.php", "start": 7894513, "end": 7894864}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/pl_PL/LicensePlate.php", "start": 7894864, "end": 7914180}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/pl_PL/Payment.php", "start": 7914180, "end": 7920383}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/pl_PL/Person.php", "start": 7920383, "end": 7931200}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/pl_PL/PhoneNumber.php", "start": 7931200, "end": 7931574}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/pl_PL/Text.php", "start": 7931574, "end": 8129748}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/pt_BR/Address.php", "start": 8129748, "end": 8136097}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/pt_BR/Company.php", "start": 8136097, "end": 8137051}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/pt_BR/Internet.php", "start": 8137051, "end": 8137373}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/pt_BR/Payment.php", "start": 8137373, "end": 8141834}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/pt_BR/Person.php", "start": 8141834, "end": 8152354}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/pt_BR/PhoneNumber.php", "start": 8152354, "end": 8157105}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/pt_BR/Text.php", "start": 8157105, "end": 8315350}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/pt_BR/check_digit.php", "start": 8315350, "end": 8316312}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/pt_PT/Address.php", "start": 8316312, "end": 8323349}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/pt_PT/Company.php", "start": 8323349, "end": 8323786}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/pt_PT/Internet.php", "start": 8323786, "end": 8324070}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/pt_PT/Payment.php", "start": 8324070, "end": 8324752}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/pt_PT/Person.php", "start": 8324752, "end": 8331433}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/pt_PT/PhoneNumber.php", "start": 8331433, "end": 8332551}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ro_MD/Address.php", "start": 8332551, "end": 8339523}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ro_MD/Payment.php", "start": 8339523, "end": 8340205}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ro_MD/Person.php", "start": 8340205, "end": 8351902}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ro_MD/PhoneNumber.php", "start": 8351902, "end": 8352694}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ro_MD/Text.php", "start": 8352694, "end": 8483424}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ro_RO/Address.php", "start": 8483424, "end": 8494794}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ro_RO/Payment.php", "start": 8494794, "end": 8495476}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ro_RO/Person.php", "start": 8495476, "end": 8512727}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ro_RO/PhoneNumber.php", "start": 8512727, "end": 8514471}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ro_RO/Text.php", "start": 8514471, "end": 8535140}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ru_RU/Address.php", "start": 8535140, "end": 8546190}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ru_RU/Color.php", "start": 8546190, "end": 8548139}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ru_RU/Company.php", "start": 8548139, "end": 8562823}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ru_RU/Internet.php", "start": 8562823, "end": 8563158}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ru_RU/Payment.php", "start": 8563158, "end": 8595214}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ru_RU/Person.php", "start": 8595214, "end": 8607920}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ru_RU/PhoneNumber.php", "start": 8607920, "end": 8608194}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/ru_RU/Text.php", "start": 8608194, "end": 8997542}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/sk_SK/Address.php", "start": 8997542, "end": 9046628}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/sk_SK/Company.php", "start": 9046628, "end": 9053602}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/sk_SK/Internet.php", "start": 9053602, "end": 9053924}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/sk_SK/Payment.php", "start": 9053924, "end": 9054606}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/sk_SK/Person.php", "start": 9054606, "end": 9066326}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/sk_SK/PhoneNumber.php", "start": 9066326, "end": 9066617}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/sl_SI/Address.php", "start": 9066617, "end": 9074707}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/sl_SI/Company.php", "start": 9074707, "end": 9075091}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/sl_SI/Internet.php", "start": 9075091, "end": 9075405}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/sl_SI/Payment.php", "start": 9075405, "end": 9076087}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/sl_SI/Person.php", "start": 9076087, "end": 9085270}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/sl_SI/PhoneNumber.php", "start": 9085270, "end": 9085635}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/sr_Cyrl_RS/Address.php", "start": 9085635, "end": 9093516}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/sr_Cyrl_RS/Payment.php", "start": 9093516, "end": 9094203}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/sr_Cyrl_RS/Person.php", "start": 9094203, "end": 9173872}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/sr_Latn_RS/Address.php", "start": 9173872, "end": 9179116}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/sr_Latn_RS/Payment.php", "start": 9179116, "end": 9179803}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/sr_Latn_RS/Person.php", "start": 9179803, "end": 9230027}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/sr_RS/Address.php", "start": 9230027, "end": 9237903}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/sr_RS/Payment.php", "start": 9237903, "end": 9238585}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/sr_RS/Person.php", "start": 9238585, "end": 9296313}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/sv_SE/Address.php", "start": 9296313, "end": 9327243}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/sv_SE/Company.php", "start": 9327243, "end": 9328308}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/sv_SE/Municipality.php", "start": 9328308, "end": 9334477}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/sv_SE/Payment.php", "start": 9334477, "end": 9335159}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/sv_SE/Person.php", "start": 9335159, "end": 9349992}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/sv_SE/PhoneNumber.php", "start": 9349992, "end": 9351498}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/th_TH/Address.php", "start": 9351498, "end": 9377203}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/th_TH/Color.php", "start": 9377203, "end": 9377989}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/th_TH/Company.php", "start": 9377989, "end": 9379753}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/th_TH/Internet.php", "start": 9379753, "end": 9379952}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/th_TH/Payment.php", "start": 9379952, "end": 9382221}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/th_TH/Person.php", "start": 9382221, "end": 9400605}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/th_TH/PhoneNumber.php", "start": 9400605, "end": 9401707}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/tr_TR/Address.php", "start": 9401707, "end": 9405429}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/tr_TR/Color.php", "start": 9405429, "end": 9409217}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/tr_TR/Company.php", "start": 9409217, "end": 9416122}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/tr_TR/DateTime.php", "start": 9416122, "end": 9417381}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/tr_TR/Internet.php", "start": 9417381, "end": 9417753}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/tr_TR/Payment.php", "start": 9417753, "end": 9418435}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/tr_TR/Person.php", "start": 9418435, "end": 9424964}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/tr_TR/PhoneNumber.php", "start": 9424964, "end": 9429646}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/uk_UA/Address.php", "start": 9429646, "end": 9439966}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/uk_UA/Color.php", "start": 9439966, "end": 9441858}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/uk_UA/Company.php", "start": 9441858, "end": 9448275}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/uk_UA/Internet.php", "start": 9448275, "end": 9448553}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/uk_UA/Payment.php", "start": 9448553, "end": 9451365}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/uk_UA/Person.php", "start": 9451365, "end": 9456560}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/uk_UA/PhoneNumber.php", "start": 9456560, "end": 9458423}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/uk_UA/Text.php", "start": 9458423, "end": 9830728}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/vi_VN/Address.php", "start": 9830728, "end": 9839485}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/vi_VN/Color.php", "start": 9839485, "end": 9840746}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/vi_VN/Internet.php", "start": 9840746, "end": 9841079}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/vi_VN/Person.php", "start": 9841079, "end": 9852230}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/vi_VN/PhoneNumber.php", "start": 9852230, "end": 9853913}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/zh_CN/Address.php", "start": 9853913, "end": 9861103}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/zh_CN/Color.php", "start": 9861103, "end": 9865061}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/zh_CN/Company.php", "start": 9865061, "end": 9874656}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/zh_CN/DateTime.php", "start": 9874656, "end": 9875941}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/zh_CN/Internet.php", "start": 9875941, "end": 9876618}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/zh_CN/Payment.php", "start": 9876618, "end": 9877584}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/zh_CN/Person.php", "start": 9877584, "end": 9882723}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/zh_CN/PhoneNumber.php", "start": 9882723, "end": 9883516}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/zh_TW/Address.php", "start": 9883516, "end": 9903266}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/zh_TW/Color.php", "start": 9903266, "end": 9907223}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/zh_TW/Company.php", "start": 9907223, "end": 9917197}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/zh_TW/DateTime.php", "start": 9917197, "end": 9918482}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/zh_TW/Internet.php", "start": 9918482, "end": 9919122}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/zh_TW/Payment.php", "start": 9919122, "end": 9919611}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/zh_TW/Person.php", "start": 9919611, "end": 9927861}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/zh_TW/PhoneNumber.php", "start": 9927861, "end": 9928242}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/Provider/zh_TW/Text.php", "start": 9928242, "end": 10119887}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/UniqueGenerator.php", "start": 10119887, "end": 10122223}, {"filename": "/app/src/vendor/fakerphp/faker/src/Faker/ValidGenerator.php", "start": 10122223, "end": 10124353}, {"filename": "/app/src/vendor/fakerphp/faker/src/autoload.php", "start": 10124353, "end": 10125236}, {"filename": "/app/src/vendor/psr/container/src/ContainerExceptionInterface.php", "start": 10125236, "end": 10125420}, {"filename": "/app/src/vendor/psr/container/src/ContainerInterface.php", "start": 10125420, "end": 10126466}, {"filename": "/app/src/vendor/psr/container/src/NotFoundExceptionInterface.php", "start": 10126466, "end": 10126624}, {"filename": "/app/src/vendor/symfony/deprecation-contracts/function.php", "start": 10126624, "end": 10127638}], "remote_package_size": 7171143, "package_uuid": "sha256-d23c970f27971c29d1f40eab979cdd84f602e78d5bf51a91e81abd7cbf48ffe2"});

  })();
// refer to Module (if they choose; they can also define Module)


// Sometimes an existing Module object exists with properties
// meant to overwrite the default module functionality. Here
// we collect those properties and reapply _after_ we configure
// the current environment's defaults to avoid having to be so
// defensive during initialization.
var moduleOverrides = Object.assign({}, Module);

var arguments_ = [];
var thisProgram = './this.program';
var quit_ = (status, toThrow) => {
  throw toThrow;
};

// Determine the runtime environment we are in. You can customize this by
// setting the ENVIRONMENT setting at compile time (see settings.js).

var ENVIRONMENT_IS_WEB = true;
var ENVIRONMENT_IS_WORKER = false;
var ENVIRONMENT_IS_NODE = false;
var ENVIRONMENT_IS_SHELL = false;

// `/` should be present at the end if `scriptDirectory` is not empty
var scriptDirectory = '';
function locateFile(path) {
  if (Module['locateFile']) {
    return Module['locateFile'](path, scriptDirectory);
  }
  return scriptDirectory + path;
}

// Hooks that are implemented differently in different runtime environments.
var read_,
    readAsync,
    readBinary,
    setWindowTitle;

// Note that this includes Node.js workers when relevant (pthreads is enabled).
// Node.js workers are detected as a combination of ENVIRONMENT_IS_WORKER and
// ENVIRONMENT_IS_NODE.
if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  if (ENVIRONMENT_IS_WORKER) { // Check worker, not web, since window could be polyfilled
    scriptDirectory = self.location.href;
  } else if (typeof document != 'undefined' && document.currentScript) { // web
    scriptDirectory = document.currentScript.src;
  }
  // When MODULARIZE, this JS may be executed later, after document.currentScript
  // is gone, so we saved it, and we use it here instead of any other info.
  if (_scriptDir) {
    scriptDirectory = _scriptDir;
  }
  // blob urls look like blob:http://site.com/etc/etc and we cannot infer anything from them.
  // otherwise, slice off the final part of the url to find the script directory.
  // if scriptDirectory does not contain a slash, lastIndexOf will return -1,
  // and scriptDirectory will correctly be replaced with an empty string.
  // If scriptDirectory contains a query (starting with ?) or a fragment (starting with #),
  // they are removed because they could contain a slash.
  if (scriptDirectory.indexOf('blob:') !== 0) {
    scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf('/')+1);
  } else {
    scriptDirectory = '';
  }

  // Differentiate the Web Worker from the Node Worker case, as reading must
  // be done differently.
  {
// include: web_or_worker_shell_read.js
read_ = (url) => {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, false);
      xhr.send(null);
      return xhr.responseText;
  }

  if (ENVIRONMENT_IS_WORKER) {
    readBinary = (url) => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.responseType = 'arraybuffer';
        xhr.send(null);
        return new Uint8Array(/** @type{!ArrayBuffer} */(xhr.response));
    };
  }

  readAsync = (url, onload, onerror) => {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = () => {
      if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
        onload(xhr.response);
        return;
      }
      onerror();
    };
    xhr.onerror = onerror;
    xhr.send(null);
  }

// end include: web_or_worker_shell_read.js
  }

  setWindowTitle = (title) => document.title = title;
} else
{
}

var out = Module['print'] || console.log.bind(console);
var err = Module['printErr'] || console.warn.bind(console);

// Merge back in the overrides
Object.assign(Module, moduleOverrides);
// Free the object hierarchy contained in the overrides, this lets the GC
// reclaim data used e.g. in memoryInitializerRequest, which is a large typed array.
moduleOverrides = null;

// Emit code to handle expected values on the Module object. This applies Module.x
// to the proper local x. This has two benefits: first, we only emit it if it is
// expected to arrive, and second, by using a local everywhere else that can be
// minified.

if (Module['arguments']) arguments_ = Module['arguments'];

if (Module['thisProgram']) thisProgram = Module['thisProgram'];

if (Module['quit']) quit_ = Module['quit'];

// perform assertions in shell.js after we set up out() and err(), as otherwise if an assertion fails it cannot print the message


// end include: shell.js
// include: preamble.js
// === Preamble library stuff ===

// Documentation for the public APIs defined in this file must be updated in:
//    site/source/docs/api_reference/preamble.js.rst
// A prebuilt local version of the documentation is available at:
//    site/build/text/docs/api_reference/preamble.js.txt
// You can also build docs locally as HTML or other formats in site/
// An online HTML version (which may be of a different version of Emscripten)
//    is up at http://kripken.github.io/emscripten-site/docs/api_reference/preamble.js.html

var wasmBinary;
if (Module['wasmBinary']) wasmBinary = Module['wasmBinary'];
var noExitRuntime = Module['noExitRuntime'] || true;

if (typeof WebAssembly != 'object') {
  abort('no native wasm support detected');
}

// Wasm globals

var wasmMemory;

//========================================
// Runtime essentials
//========================================

// whether we are quitting the application. no code should run after this.
// set in exit() and abort()
var ABORT = false;

// set by exit() and abort().  Passed to 'onExit' handler.
// NOTE: This is also used as the process return code code in shell environments
// but only when noExitRuntime is false.
var EXITSTATUS;

/** @type {function(*, string=)} */
function assert(condition, text) {
  if (!condition) {
    // This build was created without ASSERTIONS defined.  `assert()` should not
    // ever be called in this configuration but in case there are callers in
    // the wild leave this simple abort() implemenation here for now.
    abort(text);
  }
}

// Memory management

var HEAP,
/** @type {!Int8Array} */
  HEAP8,
/** @type {!Uint8Array} */
  HEAPU8,
/** @type {!Int16Array} */
  HEAP16,
/** @type {!Uint16Array} */
  HEAPU16,
/** @type {!Int32Array} */
  HEAP32,
/** @type {!Uint32Array} */
  HEAPU32,
/** @type {!Float32Array} */
  HEAPF32,
/** @type {!Float64Array} */
  HEAPF64;

function updateMemoryViews() {
  var b = wasmMemory.buffer;
  Module['HEAP8'] = HEAP8 = new Int8Array(b);
  Module['HEAP16'] = HEAP16 = new Int16Array(b);
  Module['HEAP32'] = HEAP32 = new Int32Array(b);
  Module['HEAPU8'] = HEAPU8 = new Uint8Array(b);
  Module['HEAPU16'] = HEAPU16 = new Uint16Array(b);
  Module['HEAPU32'] = HEAPU32 = new Uint32Array(b);
  Module['HEAPF32'] = HEAPF32 = new Float32Array(b);
  Module['HEAPF64'] = HEAPF64 = new Float64Array(b);
}

// include: runtime_init_table.js
// In regular non-RELOCATABLE mode the table is exported
// from the wasm module and this will be assigned once
// the exports are available.
var wasmTable;

// end include: runtime_init_table.js
// include: runtime_stack_check.js
// end include: runtime_stack_check.js
// include: runtime_assertions.js
// end include: runtime_assertions.js
var __ATPRERUN__  = []; // functions called before the runtime is initialized
var __ATINIT__    = []; // functions called during startup
var __ATEXIT__    = []; // functions called during shutdown
var __ATPOSTRUN__ = []; // functions called after the main() is called

var runtimeInitialized = false;

var runtimeKeepaliveCounter = 0;

function keepRuntimeAlive() {
  return noExitRuntime || runtimeKeepaliveCounter > 0;
}

function preRun() {
  if (Module['preRun']) {
    if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];
    while (Module['preRun'].length) {
      addOnPreRun(Module['preRun'].shift());
    }
  }
  callRuntimeCallbacks(__ATPRERUN__);
}

function initRuntime() {
  runtimeInitialized = true;

  
if (!Module["noFSInit"] && !FS.init.initialized)
  FS.init();
FS.ignorePermissions = false;

TTY.init();
SOCKFS.root = FS.mount(SOCKFS, {}, null);
PIPEFS.root = FS.mount(PIPEFS, {}, null);
  callRuntimeCallbacks(__ATINIT__);
}

function postRun() {

  if (Module['postRun']) {
    if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];
    while (Module['postRun'].length) {
      addOnPostRun(Module['postRun'].shift());
    }
  }

  callRuntimeCallbacks(__ATPOSTRUN__);
}

function addOnPreRun(cb) {
  __ATPRERUN__.unshift(cb);
}

function addOnInit(cb) {
  __ATINIT__.unshift(cb);
}

function addOnExit(cb) {
}

function addOnPostRun(cb) {
  __ATPOSTRUN__.unshift(cb);
}

// include: runtime_math.js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/fround

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc

// end include: runtime_math.js
// A counter of dependencies for calling run(). If we need to
// do asynchronous work before running, increment this and
// decrement it. Incrementing must happen in a place like
// Module.preRun (used by emcc to add file preloading).
// Note that you can add dependencies in preRun, even though
// it happens right before run - run will be postponed until
// the dependencies are met.
var runDependencies = 0;
var runDependencyWatcher = null;
var dependenciesFulfilled = null; // overridden to take different actions when all run dependencies are fulfilled

function getUniqueRunDependency(id) {
  return id;
}

function addRunDependency(id) {
  runDependencies++;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

}

function removeRunDependency(id) {
  runDependencies--;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

  if (runDependencies == 0) {
    if (runDependencyWatcher !== null) {
      clearInterval(runDependencyWatcher);
      runDependencyWatcher = null;
    }
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback(); // can add another dependenciesFulfilled
    }
  }
}

/** @param {string|number=} what */
function abort(what) {
  if (Module['onAbort']) {
    Module['onAbort'](what);
  }

  what = 'Aborted(' + what + ')';
  // TODO(sbc): Should we remove printing and leave it up to whoever
  // catches the exception?
  err(what);

  ABORT = true;
  EXITSTATUS = 1;

  what += '. Build with -sASSERTIONS for more info.';

  // Use a wasm runtime error, because a JS error might be seen as a foreign
  // exception, which means we'd run destructors on it. We need the error to
  // simply make the program stop.
  // FIXME This approach does not work in Wasm EH because it currently does not assume
  // all RuntimeErrors are from traps; it decides whether a RuntimeError is from
  // a trap or not based on a hidden field within the object. So at the moment
  // we don't have a way of throwing a wasm trap from JS. TODO Make a JS API that
  // allows this in the wasm spec.

  // Suppress closure compiler warning here. Closure compiler's builtin extern
  // defintion for WebAssembly.RuntimeError claims it takes no arguments even
  // though it can.
  // TODO(https://github.com/google/closure-compiler/pull/3913): Remove if/when upstream closure gets fixed.
  /** @suppress {checkTypes} */
  var e = new WebAssembly.RuntimeError(what);

  readyPromiseReject(e);
  // Throw the error whether or not MODULARIZE is set because abort is used
  // in code paths apart from instantiation where an exception is expected
  // to be thrown when abort is called.
  throw e;
}

// include: memoryprofiler.js
// end include: memoryprofiler.js
// include: URIUtils.js
// Prefix of data URIs emitted by SINGLE_FILE and related options.
var dataURIPrefix = 'data:application/octet-stream;base64,';

// Indicates whether filename is a base64 data URI.
function isDataURI(filename) {
  // Prefix of data URIs emitted by SINGLE_FILE and related options.
  return filename.startsWith(dataURIPrefix);
}

// Indicates whether filename is delivered via file protocol (as opposed to http/https)
function isFileURI(filename) {
  return filename.startsWith('file://');
}

// end include: URIUtils.js
// include: runtime_exceptions.js
// end include: runtime_exceptions.js
var wasmBinaryFile;
if (Module['locateFile']) {
  wasmBinaryFile = 'php-web.wasm';
  if (!isDataURI(wasmBinaryFile)) {
    wasmBinaryFile = locateFile(wasmBinaryFile);
  }
} else {
  // Use bundler-friendly `new URL(..., import.meta.url)` pattern; works in browsers too.
  let version = document.getElementById('phpVersion').value.split('/').pop();
  wasmBinaryFile = new URL('../'+version+'/php-web.wasm', import.meta.url).href;
}

function getBinary(file) {
  try {
    if (file == wasmBinaryFile && wasmBinary) {
      return new Uint8Array(wasmBinary);
    }
    if (readBinary) {
      return readBinary(file);
    }
    throw "both async and sync fetching of the wasm failed";
  }
  catch (err) {
    abort(err);
  }
}

function getBinaryPromise(binaryFile) {
  // If we don't have the binary yet, try to load it asynchronously.
  // Fetch has some additional restrictions over XHR, like it can't be used on a file:// url.
  // See https://github.com/github/fetch/pull/92#issuecomment-140665932
  // Cordova or Electron apps are typically loaded from a file:// url.
  // So use fetch if it is available and the url is not a file, otherwise fall back to XHR.
  if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
    if (typeof fetch == 'function'
    ) {
      return fetch(binaryFile, { credentials: 'same-origin' }).then(function(response) {
        if (!response['ok']) {
          throw "failed to load wasm binary file at '" + binaryFile + "'";
        }
        return response['arrayBuffer']();
      }).catch(function () {
          return getBinary(binaryFile);
      });
    }
  }

  // Otherwise, getBinary should be able to get it synchronously
  return Promise.resolve().then(function() { return getBinary(binaryFile); });
}

function instantiateArrayBuffer(binaryFile, imports, receiver) {
  return getBinaryPromise(binaryFile).then(function(binary) {
    return WebAssembly.instantiate(binary, imports);
  }).then(function (instance) {
    return instance;
  }).then(receiver, function(reason) {
    err('failed to asynchronously prepare wasm: ' + reason);

    abort(reason);
  });
}

function instantiateAsync(binary, binaryFile, imports, callback) {
  if (!binary &&
      typeof WebAssembly.instantiateStreaming == 'function' &&
      !isDataURI(binaryFile) &&
      typeof fetch == 'function') {
    return fetch(binaryFile, { credentials: 'same-origin' }).then(function(response) {
      // Suppress closure warning here since the upstream definition for
      // instantiateStreaming only allows Promise<Repsponse> rather than
      // an actual Response.
      // TODO(https://github.com/google/closure-compiler/pull/3913): Remove if/when upstream closure is fixed.
      /** @suppress {checkTypes} */
      var result = WebAssembly.instantiateStreaming(response, imports);

      return result.then(
        callback,
        function(reason) {
          // We expect the most common failure cause to be a bad MIME type for the binary,
          // in which case falling back to ArrayBuffer instantiation should work.
          err('wasm streaming compile failed: ' + reason);
          err('falling back to ArrayBuffer instantiation');
          return instantiateArrayBuffer(binaryFile, imports, callback);
        });
    });
  } else {
    return instantiateArrayBuffer(binaryFile, imports, callback);
  }
}

// Create the wasm instance.
// Receives the wasm imports, returns the exports.
function createWasm() {
  // prepare imports
  var info = {
    'env': wasmImports,
    'wasi_snapshot_preview1': wasmImports,
  };
  // Load the wasm module and create an instance of using native support in the JS engine.
  // handle a generated wasm instance, receiving its exports and
  // performing other necessary setup
  /** @param {WebAssembly.Module=} module*/
  function receiveInstance(instance, module) {
    var exports = instance.exports;

    Module['asm'] = exports;

    wasmMemory = Module['asm']['memory'];
    updateMemoryViews();

    wasmTable = Module['asm']['__indirect_function_table'];

    addOnInit(Module['asm']['__wasm_call_ctors']);

    removeRunDependency('wasm-instantiate');

    return exports;
  }
  // wait for the pthread pool (if any)
  addRunDependency('wasm-instantiate');

  // Prefer streaming instantiation if available.
  function receiveInstantiationResult(result) {
    // 'result' is a ResultObject object which has both the module and instance.
    // receiveInstance() will swap in the exports (to Module.asm) so they can be called
    // TODO: Due to Closure regression https://github.com/google/closure-compiler/issues/3193, the above line no longer optimizes out down to the following line.
    // When the regression is fixed, can restore the above PTHREADS-enabled path.
    receiveInstance(result['instance']);
  }

  // User shell pages can write their own Module.instantiateWasm = function(imports, successCallback) callback
  // to manually instantiate the Wasm module themselves. This allows pages to
  // run the instantiation parallel to any other async startup actions they are
  // performing.
  // Also pthreads and wasm workers initialize the wasm instance through this
  // path.
  if (Module['instantiateWasm']) {

    try {
      return Module['instantiateWasm'](info, receiveInstance);
    } catch(e) {
      err('Module.instantiateWasm callback failed with error: ' + e);
        // If instantiation fails, reject the module ready promise.
        readyPromiseReject(e);
    }
  }

  // If instantiation fails, reject the module ready promise.
  instantiateAsync(wasmBinary, wasmBinaryFile, info, receiveInstantiationResult).catch(readyPromiseReject);
  return {}; // no exports yet; we'll fill them in later
}

// Globals used by JS i64 conversions (see makeSetValue)
var tempDouble;
var tempI64;

// include: runtime_debug.js
// end include: runtime_debug.js
// === Body ===


// end include: preamble.js

  /** @constructor */
  function ExitStatus(status) {
      this.name = 'ExitStatus';
      this.message = 'Program terminated with exit(' + status + ')';
      this.status = status;
    }

  function callRuntimeCallbacks(callbacks) {
      while (callbacks.length > 0) {
        // Pass the module as the first argument.
        callbacks.shift()(Module);
      }
    }

  
    /**
     * @param {number} ptr
     * @param {string} type
     */
  function getValue(ptr, type = 'i8') {
    if (type.endsWith('*')) type = '*';
    switch (type) {
      case 'i1': return HEAP8[((ptr)>>0)];
      case 'i8': return HEAP8[((ptr)>>0)];
      case 'i16': return HEAP16[((ptr)>>1)];
      case 'i32': return HEAP32[((ptr)>>2)];
      case 'i64': return HEAP32[((ptr)>>2)];
      case 'float': return HEAPF32[((ptr)>>2)];
      case 'double': return HEAPF64[((ptr)>>3)];
      case '*': return HEAPU32[((ptr)>>2)];
      default: abort('invalid type for getValue: ' + type);
    }
  }

  
    /**
     * @param {number} ptr
     * @param {number} value
     * @param {string} type
     */
  function setValue(ptr, value, type = 'i8') {
    if (type.endsWith('*')) type = '*';
    switch (type) {
      case 'i1': HEAP8[((ptr)>>0)] = value; break;
      case 'i8': HEAP8[((ptr)>>0)] = value; break;
      case 'i16': HEAP16[((ptr)>>1)] = value; break;
      case 'i32': HEAP32[((ptr)>>2)] = value; break;
      case 'i64': (tempI64 = [value>>>0,(tempDouble=value,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((ptr)>>2)] = tempI64[0],HEAP32[(((ptr)+(4))>>2)] = tempI64[1]); break;
      case 'float': HEAPF32[((ptr)>>2)] = value; break;
      case 'double': HEAPF64[((ptr)>>3)] = value; break;
      case '*': HEAPU32[((ptr)>>2)] = value; break;
      default: abort('invalid type for setValue: ' + type);
    }
  }

  var UTF8Decoder = typeof TextDecoder != 'undefined' ? new TextDecoder('utf8') : undefined;
  
    /**
     * Given a pointer 'idx' to a null-terminated UTF8-encoded string in the given
     * array that contains uint8 values, returns a copy of that string as a
     * Javascript String object.
     * heapOrArray is either a regular array, or a JavaScript typed array view.
     * @param {number} idx
     * @param {number=} maxBytesToRead
     * @return {string}
     */
  function UTF8ArrayToString(heapOrArray, idx, maxBytesToRead) {
      var endIdx = idx + maxBytesToRead;
      var endPtr = idx;
      // TextDecoder needs to know the byte length in advance, it doesn't stop on
      // null terminator by itself.  Also, use the length info to avoid running tiny
      // strings through TextDecoder, since .subarray() allocates garbage.
      // (As a tiny code save trick, compare endPtr against endIdx using a negation,
      // so that undefined means Infinity)
      while (heapOrArray[endPtr] && !(endPtr >= endIdx)) ++endPtr;
  
      if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
        return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
      }
      var str = '';
      // If building with TextDecoder, we have already computed the string length
      // above, so test loop end condition against that
      while (idx < endPtr) {
        // For UTF8 byte structure, see:
        // http://en.wikipedia.org/wiki/UTF-8#Description
        // https://www.ietf.org/rfc/rfc2279.txt
        // https://tools.ietf.org/html/rfc3629
        var u0 = heapOrArray[idx++];
        if (!(u0 & 0x80)) { str += String.fromCharCode(u0); continue; }
        var u1 = heapOrArray[idx++] & 63;
        if ((u0 & 0xE0) == 0xC0) { str += String.fromCharCode(((u0 & 31) << 6) | u1); continue; }
        var u2 = heapOrArray[idx++] & 63;
        if ((u0 & 0xF0) == 0xE0) {
          u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
        } else {
          u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (heapOrArray[idx++] & 63);
        }
  
        if (u0 < 0x10000) {
          str += String.fromCharCode(u0);
        } else {
          var ch = u0 - 0x10000;
          str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
        }
      }
      return str;
    }
  
  
    /**
     * Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the
     * emscripten HEAP, returns a copy of that string as a Javascript String object.
     *
     * @param {number} ptr
     * @param {number=} maxBytesToRead - An optional length that specifies the
     *   maximum number of bytes to read. You can omit this parameter to scan the
     *   string until the first   byte. If maxBytesToRead is passed, and the string
     *   at [ptr, ptr+maxBytesToReadr[ contains a null byte in the middle, then the
     *   string will cut short at that byte index (i.e. maxBytesToRead will not
     *   produce a string of exact length [ptr, ptr+maxBytesToRead[) N.B. mixing
     *   frequent uses of UTF8ToString() with and without maxBytesToRead may throw
     *   JS JIT optimizations off, so it is worth to consider consistently using one
     * @return {string}
     */
  function UTF8ToString(ptr, maxBytesToRead) {
      return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : '';
    }
  function ___assert_fail(condition, filename, line, func) {
      abort('Assertion failed: ' + UTF8ToString(condition) + ', at: ' + [filename ? UTF8ToString(filename) : 'unknown filename', line, func ? UTF8ToString(func) : 'unknown function']);
    }

  var wasmTableMirror = [];
  
  function getWasmTableEntry(funcPtr) {
      var func = wasmTableMirror[funcPtr];
      if (!func) {
        if (funcPtr >= wasmTableMirror.length) wasmTableMirror.length = funcPtr + 1;
        wasmTableMirror[funcPtr] = func = wasmTable.get(funcPtr);
      }
      return func;
    }
  function ___call_sighandler(fp, sig) {
      getWasmTableEntry(fp)(sig);
    }

  var dlopenMissingError =  'To use dlopen, you need enable dynamic linking, see https://github.com/emscripten-core/emscripten/wiki/Linking';
  function ___dlsym(handle, symbol) {
      abort(dlopenMissingError);
    }

  var PATH = {isAbs:(path) => path.charAt(0) === '/',splitPath:(filename) => {
        var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return splitPathRe.exec(filename).slice(1);
      },normalizeArray:(parts, allowAboveRoot) => {
        // if the path tries to go above the root, `up` ends up > 0
        var up = 0;
        for (var i = parts.length - 1; i >= 0; i--) {
          var last = parts[i];
          if (last === '.') {
            parts.splice(i, 1);
          } else if (last === '..') {
            parts.splice(i, 1);
            up++;
          } else if (up) {
            parts.splice(i, 1);
            up--;
          }
        }
        // if the path is allowed to go above the root, restore leading ..s
        if (allowAboveRoot) {
          for (; up; up--) {
            parts.unshift('..');
          }
        }
        return parts;
      },normalize:(path) => {
        var isAbsolute = PATH.isAbs(path),
            trailingSlash = path.substr(-1) === '/';
        // Normalize the path
        path = PATH.normalizeArray(path.split('/').filter((p) => !!p), !isAbsolute).join('/');
        if (!path && !isAbsolute) {
          path = '.';
        }
        if (path && trailingSlash) {
          path += '/';
        }
        return (isAbsolute ? '/' : '') + path;
      },dirname:(path) => {
        var result = PATH.splitPath(path),
            root = result[0],
            dir = result[1];
        if (!root && !dir) {
          // No dirname whatsoever
          return '.';
        }
        if (dir) {
          // It has a dirname, strip trailing slash
          dir = dir.substr(0, dir.length - 1);
        }
        return root + dir;
      },basename:(path) => {
        // EMSCRIPTEN return '/'' for '/', not an empty string
        if (path === '/') return '/';
        path = PATH.normalize(path);
        path = path.replace(/\/$/, "");
        var lastSlash = path.lastIndexOf('/');
        if (lastSlash === -1) return path;
        return path.substr(lastSlash+1);
      },join:function() {
        var paths = Array.prototype.slice.call(arguments);
        return PATH.normalize(paths.join('/'));
      },join2:(l, r) => {
        return PATH.normalize(l + '/' + r);
      }};
  
  function initRandomFill() {
      if (typeof crypto == 'object' && typeof crypto['getRandomValues'] == 'function') {
        // for modern web browsers
        return (view) => crypto.getRandomValues(view);
      } else
      // we couldn't find a proper implementation, as Math.random() is not suitable for /dev/random, see emscripten-core/emscripten/pull/7096
      abort("initRandomDevice");
    }
  function randomFill(view) {
      // Lazily init on the first invocation.
      return (randomFill = initRandomFill())(view);
    }
  
  
  
  var PATH_FS = {resolve:function() {
        var resolvedPath = '',
          resolvedAbsolute = false;
        for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
          var path = (i >= 0) ? arguments[i] : FS.cwd();
          // Skip empty and invalid entries
          if (typeof path != 'string') {
            throw new TypeError('Arguments to path.resolve must be strings');
          } else if (!path) {
            return ''; // an invalid portion invalidates the whole thing
          }
          resolvedPath = path + '/' + resolvedPath;
          resolvedAbsolute = PATH.isAbs(path);
        }
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        resolvedPath = PATH.normalizeArray(resolvedPath.split('/').filter((p) => !!p), !resolvedAbsolute).join('/');
        return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
      },relative:(from, to) => {
        from = PATH_FS.resolve(from).substr(1);
        to = PATH_FS.resolve(to).substr(1);
        function trim(arr) {
          var start = 0;
          for (; start < arr.length; start++) {
            if (arr[start] !== '') break;
          }
          var end = arr.length - 1;
          for (; end >= 0; end--) {
            if (arr[end] !== '') break;
          }
          if (start > end) return [];
          return arr.slice(start, end - start + 1);
        }
        var fromParts = trim(from.split('/'));
        var toParts = trim(to.split('/'));
        var length = Math.min(fromParts.length, toParts.length);
        var samePartsLength = length;
        for (var i = 0; i < length; i++) {
          if (fromParts[i] !== toParts[i]) {
            samePartsLength = i;
            break;
          }
        }
        var outputParts = [];
        for (var i = samePartsLength; i < fromParts.length; i++) {
          outputParts.push('..');
        }
        outputParts = outputParts.concat(toParts.slice(samePartsLength));
        return outputParts.join('/');
      }};
  
  
  function lengthBytesUTF8(str) {
      var len = 0;
      for (var i = 0; i < str.length; ++i) {
        // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code
        // unit, not a Unicode code point of the character! So decode
        // UTF16->UTF32->UTF8.
        // See http://unicode.org/faq/utf_bom.html#utf16-3
        var c = str.charCodeAt(i); // possibly a lead surrogate
        if (c <= 0x7F) {
          len++;
        } else if (c <= 0x7FF) {
          len += 2;
        } else if (c >= 0xD800 && c <= 0xDFFF) {
          len += 4; ++i;
        } else {
          len += 3;
        }
      }
      return len;
    }
  
  function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
      // Parameter maxBytesToWrite is not optional. Negative values, 0, null,
      // undefined and false each don't write out any bytes.
      if (!(maxBytesToWrite > 0))
        return 0;
  
      var startIdx = outIdx;
      var endIdx = outIdx + maxBytesToWrite - 1; // -1 for string null terminator.
      for (var i = 0; i < str.length; ++i) {
        // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code
        // unit, not a Unicode code point of the character! So decode
        // UTF16->UTF32->UTF8.
        // See http://unicode.org/faq/utf_bom.html#utf16-3
        // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description
        // and https://www.ietf.org/rfc/rfc2279.txt
        // and https://tools.ietf.org/html/rfc3629
        var u = str.charCodeAt(i); // possibly a lead surrogate
        if (u >= 0xD800 && u <= 0xDFFF) {
          var u1 = str.charCodeAt(++i);
          u = 0x10000 + ((u & 0x3FF) << 10) | (u1 & 0x3FF);
        }
        if (u <= 0x7F) {
          if (outIdx >= endIdx) break;
          heap[outIdx++] = u;
        } else if (u <= 0x7FF) {
          if (outIdx + 1 >= endIdx) break;
          heap[outIdx++] = 0xC0 | (u >> 6);
          heap[outIdx++] = 0x80 | (u & 63);
        } else if (u <= 0xFFFF) {
          if (outIdx + 2 >= endIdx) break;
          heap[outIdx++] = 0xE0 | (u >> 12);
          heap[outIdx++] = 0x80 | ((u >> 6) & 63);
          heap[outIdx++] = 0x80 | (u & 63);
        } else {
          if (outIdx + 3 >= endIdx) break;
          heap[outIdx++] = 0xF0 | (u >> 18);
          heap[outIdx++] = 0x80 | ((u >> 12) & 63);
          heap[outIdx++] = 0x80 | ((u >> 6) & 63);
          heap[outIdx++] = 0x80 | (u & 63);
        }
      }
      // Null-terminate the pointer to the buffer.
      heap[outIdx] = 0;
      return outIdx - startIdx;
    }
  /** @type {function(string, boolean=, number=)} */
  function intArrayFromString(stringy, dontAddNull, length) {
    var len = length > 0 ? length : lengthBytesUTF8(stringy)+1;
    var u8array = new Array(len);
    var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
    if (dontAddNull) u8array.length = numBytesWritten;
    return u8array;
  }
  var TTY = {ttys:[],init:function () {
        // https://github.com/emscripten-core/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // currently, FS.init does not distinguish if process.stdin is a file or TTY
        //   // device, it always assumes it's a TTY device. because of this, we're forcing
        //   // process.stdin to UTF8 encoding to at least make stdin reading compatible
        //   // with text files until FS.init can be refactored.
        //   process.stdin.setEncoding('utf8');
        // }
      },shutdown:function() {
        // https://github.com/emscripten-core/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // inolen: any idea as to why node -e 'process.stdin.read()' wouldn't exit immediately (with process.stdin being a tty)?
        //   // isaacs: because now it's reading from the stream, you've expressed interest in it, so that read() kicks off a _read() which creates a ReadReq operation
        //   // inolen: I thought read() in that case was a synchronous operation that just grabbed some amount of buffered data if it exists?
        //   // isaacs: it is. but it also triggers a _read() call, which calls readStart() on the handle
        //   // isaacs: do process.stdin.pause() and i'd think it'd probably close the pending call
        //   process.stdin.pause();
        // }
      },register:function(dev, ops) {
        TTY.ttys[dev] = { input: [], output: [], ops: ops };
        FS.registerDevice(dev, TTY.stream_ops);
      },stream_ops:{open:function(stream) {
          var tty = TTY.ttys[stream.node.rdev];
          if (!tty) {
            throw new FS.ErrnoError(43);
          }
          stream.tty = tty;
          stream.seekable = false;
        },close:function(stream) {
          // flush any pending line data
          stream.tty.ops.fsync(stream.tty);
        },fsync:function(stream) {
          stream.tty.ops.fsync(stream.tty);
        },read:function(stream, buffer, offset, length, pos /* ignored */) {
          if (!stream.tty || !stream.tty.ops.get_char) {
            throw new FS.ErrnoError(60);
          }
          var bytesRead = 0;
          for (var i = 0; i < length; i++) {
            var result;
            try {
              result = stream.tty.ops.get_char(stream.tty);
            } catch (e) {
              throw new FS.ErrnoError(29);
            }
            if (result === undefined && bytesRead === 0) {
              throw new FS.ErrnoError(6);
            }
            if (result === null || result === undefined) break;
            bytesRead++;
            buffer[offset+i] = result;
          }
          if (bytesRead) {
            stream.node.timestamp = Date.now();
          }
          return bytesRead;
        },write:function(stream, buffer, offset, length, pos) {
          if (!stream.tty || !stream.tty.ops.put_char) {
            throw new FS.ErrnoError(60);
          }
          try {
            for (var i = 0; i < length; i++) {
              stream.tty.ops.put_char(stream.tty, buffer[offset+i]);
            }
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
          if (length) {
            stream.node.timestamp = Date.now();
          }
          return i;
        }},default_tty_ops:{get_char:function(tty) {
          if (!tty.input.length) {
            var result = null;
            if (typeof window != 'undefined' &&
              typeof window.prompt == 'function') {
              // Browser.
              result = window.prompt('Input: ');  // returns null on cancel
              if (result !== null) {
                result += '\n';
              }
            } else if (typeof readline == 'function') {
              // Command line.
              result = readline();
              if (result !== null) {
                result += '\n';
              }
            }
            if (!result) {
              return null;
            }
            tty.input = intArrayFromString(result, true);
          }
          return tty.input.shift();
        },put_char:function(tty, val) {
          if (val === null || val === 10) {
            out(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          } else {
            if (val != 0) tty.output.push(val); // val == 0 would cut text output off in the middle.
          }
        },fsync:function(tty) {
          if (tty.output && tty.output.length > 0) {
            out(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          }
        }},default_tty1_ops:{put_char:function(tty, val) {
          if (val === null || val === 10) {
            err(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          } else {
            if (val != 0) tty.output.push(val);
          }
        },fsync:function(tty) {
          if (tty.output && tty.output.length > 0) {
            err(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          }
        }}};
  
  
  function zeroMemory(address, size) {
      HEAPU8.fill(0, address, address + size);
      return address;
    }
  
  function alignMemory(size, alignment) {
      return Math.ceil(size / alignment) * alignment;
    }
  function mmapAlloc(size) {
      size = alignMemory(size, 65536);
      var ptr = _emscripten_builtin_memalign(65536, size);
      if (!ptr) return 0;
      return zeroMemory(ptr, size);
    }
  var MEMFS = {ops_table:null,mount:function(mount) {
        return MEMFS.createNode(null, '/', 16384 | 511 /* 0777 */, 0);
      },createNode:function(parent, name, mode, dev) {
        if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
          // no supported
          throw new FS.ErrnoError(63);
        }
        if (!MEMFS.ops_table) {
          MEMFS.ops_table = {
            dir: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
                lookup: MEMFS.node_ops.lookup,
                mknod: MEMFS.node_ops.mknod,
                rename: MEMFS.node_ops.rename,
                unlink: MEMFS.node_ops.unlink,
                rmdir: MEMFS.node_ops.rmdir,
                readdir: MEMFS.node_ops.readdir,
                symlink: MEMFS.node_ops.symlink
              },
              stream: {
                llseek: MEMFS.stream_ops.llseek
              }
            },
            file: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr
              },
              stream: {
                llseek: MEMFS.stream_ops.llseek,
                read: MEMFS.stream_ops.read,
                write: MEMFS.stream_ops.write,
                allocate: MEMFS.stream_ops.allocate,
                mmap: MEMFS.stream_ops.mmap,
                msync: MEMFS.stream_ops.msync
              }
            },
            link: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
                readlink: MEMFS.node_ops.readlink
              },
              stream: {}
            },
            chrdev: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr
              },
              stream: FS.chrdev_stream_ops
            }
          };
        }
        var node = FS.createNode(parent, name, mode, dev);
        if (FS.isDir(node.mode)) {
          node.node_ops = MEMFS.ops_table.dir.node;
          node.stream_ops = MEMFS.ops_table.dir.stream;
          node.contents = {};
        } else if (FS.isFile(node.mode)) {
          node.node_ops = MEMFS.ops_table.file.node;
          node.stream_ops = MEMFS.ops_table.file.stream;
          node.usedBytes = 0; // The actual number of bytes used in the typed array, as opposed to contents.length which gives the whole capacity.
          // When the byte data of the file is populated, this will point to either a typed array, or a normal JS array. Typed arrays are preferred
          // for performance, and used by default. However, typed arrays are not resizable like normal JS arrays are, so there is a small disk size
          // penalty involved for appending file writes that continuously grow a file similar to std::vector capacity vs used -scheme.
          node.contents = null; 
        } else if (FS.isLink(node.mode)) {
          node.node_ops = MEMFS.ops_table.link.node;
          node.stream_ops = MEMFS.ops_table.link.stream;
        } else if (FS.isChrdev(node.mode)) {
          node.node_ops = MEMFS.ops_table.chrdev.node;
          node.stream_ops = MEMFS.ops_table.chrdev.stream;
        }
        node.timestamp = Date.now();
        // add the new node to the parent
        if (parent) {
          parent.contents[name] = node;
          parent.timestamp = node.timestamp;
        }
        return node;
      },getFileDataAsTypedArray:function(node) {
        if (!node.contents) return new Uint8Array(0);
        if (node.contents.subarray) return node.contents.subarray(0, node.usedBytes); // Make sure to not return excess unused bytes.
        return new Uint8Array(node.contents);
      },expandFileStorage:function(node, newCapacity) {
        var prevCapacity = node.contents ? node.contents.length : 0;
        if (prevCapacity >= newCapacity) return; // No need to expand, the storage was already large enough.
        // Don't expand strictly to the given requested limit if it's only a very small increase, but instead geometrically grow capacity.
        // For small filesizes (<1MB), perform size*2 geometric increase, but for large sizes, do a much more conservative size*1.125 increase to
        // avoid overshooting the allocation cap by a very large margin.
        var CAPACITY_DOUBLING_MAX = 1024 * 1024;
        newCapacity = Math.max(newCapacity, (prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2.0 : 1.125)) >>> 0);
        if (prevCapacity != 0) newCapacity = Math.max(newCapacity, 256); // At minimum allocate 256b for each file when expanding.
        var oldContents = node.contents;
        node.contents = new Uint8Array(newCapacity); // Allocate new storage.
        if (node.usedBytes > 0) node.contents.set(oldContents.subarray(0, node.usedBytes), 0); // Copy old data over to the new storage.
      },resizeFileStorage:function(node, newSize) {
        if (node.usedBytes == newSize) return;
        if (newSize == 0) {
          node.contents = null; // Fully decommit when requesting a resize to zero.
          node.usedBytes = 0;
        } else {
          var oldContents = node.contents;
          node.contents = new Uint8Array(newSize); // Allocate new storage.
          if (oldContents) {
            node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes))); // Copy old data over to the new storage.
          }
          node.usedBytes = newSize;
        }
      },node_ops:{getattr:function(node) {
          var attr = {};
          // device numbers reuse inode numbers.
          attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
          attr.ino = node.id;
          attr.mode = node.mode;
          attr.nlink = 1;
          attr.uid = 0;
          attr.gid = 0;
          attr.rdev = node.rdev;
          if (FS.isDir(node.mode)) {
            attr.size = 4096;
          } else if (FS.isFile(node.mode)) {
            attr.size = node.usedBytes;
          } else if (FS.isLink(node.mode)) {
            attr.size = node.link.length;
          } else {
            attr.size = 0;
          }
          attr.atime = new Date(node.timestamp);
          attr.mtime = new Date(node.timestamp);
          attr.ctime = new Date(node.timestamp);
          // NOTE: In our implementation, st_blocks = Math.ceil(st_size/st_blksize),
          //       but this is not required by the standard.
          attr.blksize = 4096;
          attr.blocks = Math.ceil(attr.size / attr.blksize);
          return attr;
        },setattr:function(node, attr) {
          if (attr.mode !== undefined) {
            node.mode = attr.mode;
          }
          if (attr.timestamp !== undefined) {
            node.timestamp = attr.timestamp;
          }
          if (attr.size !== undefined) {
            MEMFS.resizeFileStorage(node, attr.size);
          }
        },lookup:function(parent, name) {
          throw FS.genericErrors[44];
        },mknod:function(parent, name, mode, dev) {
          return MEMFS.createNode(parent, name, mode, dev);
        },rename:function(old_node, new_dir, new_name) {
          // if we're overwriting a directory at new_name, make sure it's empty.
          if (FS.isDir(old_node.mode)) {
            var new_node;
            try {
              new_node = FS.lookupNode(new_dir, new_name);
            } catch (e) {
            }
            if (new_node) {
              for (var i in new_node.contents) {
                throw new FS.ErrnoError(55);
              }
            }
          }
          // do the internal rewiring
          delete old_node.parent.contents[old_node.name];
          old_node.parent.timestamp = Date.now()
          old_node.name = new_name;
          new_dir.contents[new_name] = old_node;
          new_dir.timestamp = old_node.parent.timestamp;
          old_node.parent = new_dir;
        },unlink:function(parent, name) {
          delete parent.contents[name];
          parent.timestamp = Date.now();
        },rmdir:function(parent, name) {
          var node = FS.lookupNode(parent, name);
          for (var i in node.contents) {
            throw new FS.ErrnoError(55);
          }
          delete parent.contents[name];
          parent.timestamp = Date.now();
        },readdir:function(node) {
          var entries = ['.', '..'];
          for (var key in node.contents) {
            if (!node.contents.hasOwnProperty(key)) {
              continue;
            }
            entries.push(key);
          }
          return entries;
        },symlink:function(parent, newname, oldpath) {
          var node = MEMFS.createNode(parent, newname, 511 /* 0777 */ | 40960, 0);
          node.link = oldpath;
          return node;
        },readlink:function(node) {
          if (!FS.isLink(node.mode)) {
            throw new FS.ErrnoError(28);
          }
          return node.link;
        }},stream_ops:{read:function(stream, buffer, offset, length, position) {
          var contents = stream.node.contents;
          if (position >= stream.node.usedBytes) return 0;
          var size = Math.min(stream.node.usedBytes - position, length);
          if (size > 8 && contents.subarray) { // non-trivial, and typed array
            buffer.set(contents.subarray(position, position + size), offset);
          } else {
            for (var i = 0; i < size; i++) buffer[offset + i] = contents[position + i];
          }
          return size;
        },write:function(stream, buffer, offset, length, position, canOwn) {
          // If the buffer is located in main memory (HEAP), and if
          // memory can grow, we can't hold on to references of the
          // memory buffer, as they may get invalidated. That means we
          // need to do copy its contents.
          if (buffer.buffer === HEAP8.buffer) {
            canOwn = false;
          }
  
          if (!length) return 0;
          var node = stream.node;
          node.timestamp = Date.now();
  
          if (buffer.subarray && (!node.contents || node.contents.subarray)) { // This write is from a typed array to a typed array?
            if (canOwn) {
              node.contents = buffer.subarray(offset, offset + length);
              node.usedBytes = length;
              return length;
            } else if (node.usedBytes === 0 && position === 0) { // If this is a simple first write to an empty file, do a fast set since we don't need to care about old data.
              node.contents = buffer.slice(offset, offset + length);
              node.usedBytes = length;
              return length;
            } else if (position + length <= node.usedBytes) { // Writing to an already allocated and used subrange of the file?
              node.contents.set(buffer.subarray(offset, offset + length), position);
              return length;
            }
          }
  
          // Appending to an existing file and we need to reallocate, or source data did not come as a typed array.
          MEMFS.expandFileStorage(node, position+length);
          if (node.contents.subarray && buffer.subarray) {
            // Use typed array write which is available.
            node.contents.set(buffer.subarray(offset, offset + length), position);
          } else {
            for (var i = 0; i < length; i++) {
             node.contents[position + i] = buffer[offset + i]; // Or fall back to manual write if not.
            }
          }
          node.usedBytes = Math.max(node.usedBytes, position + length);
          return length;
        },llseek:function(stream, offset, whence) {
          var position = offset;
          if (whence === 1) {
            position += stream.position;
          } else if (whence === 2) {
            if (FS.isFile(stream.node.mode)) {
              position += stream.node.usedBytes;
            }
          }
          if (position < 0) {
            throw new FS.ErrnoError(28);
          }
          return position;
        },allocate:function(stream, offset, length) {
          MEMFS.expandFileStorage(stream.node, offset + length);
          stream.node.usedBytes = Math.max(stream.node.usedBytes, offset + length);
        },mmap:function(stream, length, position, prot, flags) {
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(43);
          }
          var ptr;
          var allocated;
          var contents = stream.node.contents;
          // Only make a new copy when MAP_PRIVATE is specified.
          if (!(flags & 2) && contents.buffer === HEAP8.buffer) {
            // We can't emulate MAP_SHARED when the file is not backed by the
            // buffer we're mapping to (e.g. the HEAP buffer).
            allocated = false;
            ptr = contents.byteOffset;
          } else {
            // Try to avoid unnecessary slices.
            if (position > 0 || position + length < contents.length) {
              if (contents.subarray) {
                contents = contents.subarray(position, position + length);
              } else {
                contents = Array.prototype.slice.call(contents, position, position + length);
              }
            }
            allocated = true;
            ptr = mmapAlloc(length);
            if (!ptr) {
              throw new FS.ErrnoError(48);
            }
            HEAP8.set(contents, ptr);
          }
          return { ptr: ptr, allocated: allocated };
        },msync:function(stream, buffer, offset, length, mmapFlags) {
          MEMFS.stream_ops.write(stream, buffer, 0, length, offset, false);
          // should we check if bytesWritten and length are the same?
          return 0;
        }}};
  
  /** @param {boolean=} noRunDep */
  function asyncLoad(url, onload, onerror, noRunDep) {
      var dep = !noRunDep ? getUniqueRunDependency('al ' + url) : '';
      readAsync(url, (arrayBuffer) => {
        assert(arrayBuffer, 'Loading data file "' + url + '" failed (no arrayBuffer).');
        onload(new Uint8Array(arrayBuffer));
        if (dep) removeRunDependency(dep);
      }, (event) => {
        if (onerror) {
          onerror();
        } else {
          throw 'Loading data file "' + url + '" failed.';
        }
      });
      if (dep) addRunDependency(dep);
    }
  
  
  
  
  
  
  var IDBFS = {dbs:{},indexedDB:() => {
        if (typeof indexedDB != 'undefined') return indexedDB;
        var ret = null;
        if (typeof window == 'object') ret = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
        assert(ret, 'IDBFS used, but indexedDB not supported');
        return ret;
      },DB_VERSION:21,DB_STORE_NAME:"FILE_DATA",mount:function(mount) {
        // reuse all of the core MEMFS functionality
        return MEMFS.mount.apply(null, arguments);
      },syncfs:(mount, populate, callback) => {
        IDBFS.getLocalSet(mount, (err, local) => {
          if (err) return callback(err);
  
          IDBFS.getRemoteSet(mount, (err, remote) => {
            if (err) return callback(err);
  
            var src = populate ? remote : local;
            var dst = populate ? local : remote;
  
            IDBFS.reconcile(src, dst, callback);
          });
        });
      },quit:() => {
        Object.values(IDBFS.dbs).forEach((value) => value.close());
        IDBFS.dbs = {};
      },getDB:(name, callback) => {
        // check the cache first
        var db = IDBFS.dbs[name];
        if (db) {
          return callback(null, db);
        }
  
        var req;
        try {
          req = IDBFS.indexedDB().open(name, IDBFS.DB_VERSION);
        } catch (e) {
          return callback(e);
        }
        if (!req) {
          return callback("Unable to connect to IndexedDB");
        }
        req.onupgradeneeded = (e) => {
          var db = /** @type {IDBDatabase} */ (e.target.result);
          var transaction = e.target.transaction;
  
          var fileStore;
  
          if (db.objectStoreNames.contains(IDBFS.DB_STORE_NAME)) {
            fileStore = transaction.objectStore(IDBFS.DB_STORE_NAME);
          } else {
            fileStore = db.createObjectStore(IDBFS.DB_STORE_NAME);
          }
  
          if (!fileStore.indexNames.contains('timestamp')) {
            fileStore.createIndex('timestamp', 'timestamp', { unique: false });
          }
        };
        req.onsuccess = () => {
          db = /** @type {IDBDatabase} */ (req.result);
  
          // add to the cache
          IDBFS.dbs[name] = db;
          callback(null, db);
        };
        req.onerror = (e) => {
          callback(this.error);
          e.preventDefault();
        };
      },getLocalSet:(mount, callback) => {
        var entries = {};
  
        function isRealDir(p) {
          return p !== '.' && p !== '..';
        };
        function toAbsolute(root) {
          return (p) => {
            return PATH.join2(root, p);
          }
        };
  
        var check = FS.readdir(mount.mountpoint).filter(isRealDir).map(toAbsolute(mount.mountpoint));
  
        while (check.length) {
          var path = check.pop();
          var stat;
  
          try {
            stat = FS.stat(path);
          } catch (e) {
            return callback(e);
          }
  
          if (FS.isDir(stat.mode)) {
            check.push.apply(check, FS.readdir(path).filter(isRealDir).map(toAbsolute(path)));
          }
  
          entries[path] = { 'timestamp': stat.mtime };
        }
  
        return callback(null, { type: 'local', entries: entries });
      },getRemoteSet:(mount, callback) => {
        var entries = {};
  
        IDBFS.getDB(mount.mountpoint, (err, db) => {
          if (err) return callback(err);
  
          try {
            var transaction = db.transaction([IDBFS.DB_STORE_NAME], 'readonly');
            transaction.onerror = (e) => {
              callback(this.error);
              e.preventDefault();
            };
  
            var store = transaction.objectStore(IDBFS.DB_STORE_NAME);
            var index = store.index('timestamp');
  
            index.openKeyCursor().onsuccess = (event) => {
              var cursor = event.target.result;
  
              if (!cursor) {
                return callback(null, { type: 'remote', db: db, entries: entries });
              }
  
              entries[cursor.primaryKey] = { 'timestamp': cursor.key };
  
              cursor.continue();
            };
          } catch (e) {
            return callback(e);
          }
        });
      },loadLocalEntry:(path, callback) => {
        var stat, node;
  
        try {
          var lookup = FS.lookupPath(path);
          node = lookup.node;
          stat = FS.stat(path);
        } catch (e) {
          return callback(e);
        }
  
        if (FS.isDir(stat.mode)) {
          return callback(null, { 'timestamp': stat.mtime, 'mode': stat.mode });
        } else if (FS.isFile(stat.mode)) {
          // Performance consideration: storing a normal JavaScript array to a IndexedDB is much slower than storing a typed array.
          // Therefore always convert the file contents to a typed array first before writing the data to IndexedDB.
          node.contents = MEMFS.getFileDataAsTypedArray(node);
          return callback(null, { 'timestamp': stat.mtime, 'mode': stat.mode, 'contents': node.contents });
        } else {
          return callback(new Error('node type not supported'));
        }
      },storeLocalEntry:(path, entry, callback) => {
        try {
          if (FS.isDir(entry['mode'])) {
            FS.mkdirTree(path, entry['mode']);
          } else if (FS.isFile(entry['mode'])) {
            FS.writeFile(path, entry['contents'], { canOwn: true });
          } else {
            return callback(new Error('node type not supported'));
          }
  
          FS.chmod(path, entry['mode']);
          FS.utime(path, entry['timestamp'], entry['timestamp']);
        } catch (e) {
          return callback(e);
        }
  
        callback(null);
      },removeLocalEntry:(path, callback) => {
        try {
          var stat = FS.stat(path);
  
          if (FS.isDir(stat.mode)) {
            FS.rmdir(path);
          } else if (FS.isFile(stat.mode)) {
            FS.unlink(path);
          }
        } catch (e) {
          return callback(e);
        }
  
        callback(null);
      },loadRemoteEntry:(store, path, callback) => {
        var req = store.get(path);
        req.onsuccess = (event) => { callback(null, event.target.result); };
        req.onerror = (e) => {
          callback(this.error);
          e.preventDefault();
        };
      },storeRemoteEntry:(store, path, entry, callback) => {
        try {
          var req = store.put(entry, path);
        } catch (e) {
          callback(e);
          return;
        }
        req.onsuccess = () => { callback(null); };
        req.onerror = (e) => {
          callback(this.error);
          e.preventDefault();
        };
      },removeRemoteEntry:(store, path, callback) => {
        var req = store.delete(path);
        req.onsuccess = () => { callback(null); };
        req.onerror = (e) => {
          callback(this.error);
          e.preventDefault();
        };
      },reconcile:(src, dst, callback) => {
        var total = 0;
  
        var create = [];
        Object.keys(src.entries).forEach(function (key) {
          var e = src.entries[key];
          var e2 = dst.entries[key];
          if (!e2 || e['timestamp'].getTime() != e2['timestamp'].getTime()) {
            create.push(key);
            total++;
          }
        });
  
        var remove = [];
        Object.keys(dst.entries).forEach(function (key) {
          if (!src.entries[key]) {
            remove.push(key);
            total++;
          }
        });
  
        if (!total) {
          return callback(null);
        }
  
        var errored = false;
        var db = src.type === 'remote' ? src.db : dst.db;
        var transaction = db.transaction([IDBFS.DB_STORE_NAME], 'readwrite');
        var store = transaction.objectStore(IDBFS.DB_STORE_NAME);
  
        function done(err) {
          if (err && !errored) {
            errored = true;
            return callback(err);
          }
        };
  
        transaction.onerror = (e) => {
          done(this.error);
          e.preventDefault();
        };
  
        transaction.oncomplete = (e) => {
          if (!errored) {
            callback(null);
          }
        };
  
        // sort paths in ascending order so directory entries are created
        // before the files inside them
        create.sort().forEach((path) => {
          if (dst.type === 'local') {
            IDBFS.loadRemoteEntry(store, path, (err, entry) => {
              if (err) return done(err);
              IDBFS.storeLocalEntry(path, entry, done);
            });
          } else {
            IDBFS.loadLocalEntry(path, (err, entry) => {
              if (err) return done(err);
              IDBFS.storeRemoteEntry(store, path, entry, done);
            });
          }
        });
  
        // sort paths in descending order so files are deleted before their
        // parent directories
        remove.sort().reverse().forEach((path) => {
          if (dst.type === 'local') {
            IDBFS.removeLocalEntry(path, done);
          } else {
            IDBFS.removeRemoteEntry(store, path, done);
          }
        });
      }};
  
  var LZ4 = {DIR_MODE:16895,FILE_MODE:33279,CHUNK_SIZE:-1,codec:null,init:function() {
        if (LZ4.codec) return;
        LZ4.codec = (function() {
          /*
  MiniLZ4: Minimal LZ4 block decoding and encoding.
  
  based off of node-lz4, https://github.com/pierrec/node-lz4
  
  ====
  Copyright (c) 2012 Pierre Curto
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
  ====
  
  changes have the same license
  */
  
  var MiniLZ4 = (function() {
  
  var exports = {};
  
  /**
   * Decode a block. Assumptions: input contains all sequences of a 
   * chunk, output is large enough to receive the decoded data.
   * If the output buffer is too small, an error will be thrown.
   * If the returned value is negative, an error occured at the returned offset.
   *
   * @param {ArrayBufferView} input input data
   * @param {ArrayBufferView} output output data
   * @param {number=} sIdx
   * @param {number=} eIdx
   * @return {number} number of decoded bytes
   * @private
   */
  exports.uncompress = function (input, output, sIdx, eIdx) {
  	sIdx = sIdx || 0
  	eIdx = eIdx || (input.length - sIdx)
  	// Process each sequence in the incoming data
  	for (var i = sIdx, n = eIdx, j = 0; i < n;) {
  		var token = input[i++]
  
  		// Literals
  		var literals_length = (token >> 4)
  		if (literals_length > 0) {
  			// length of literals
  			var l = literals_length + 240
  			while (l === 255) {
  				l = input[i++]
  				literals_length += l
  			}
  
  			// Copy the literals
  			var end = i + literals_length
  			while (i < end) output[j++] = input[i++]
  
  			// End of buffer?
  			if (i === n) return j
  		}
  
  		// Match copy
  		// 2 bytes offset (little endian)
  		var offset = input[i++] | (input[i++] << 8)
  
  		// XXX 0 is an invalid offset value
  		if (offset === 0) return j
  		if (offset > j) return -(i-2)
  
  		// length of match copy
  		var match_length = (token & 0xf)
  		var l = match_length + 240
  		while (l === 255) {
  			l = input[i++]
  			match_length += l
  		}
  
  		// Copy the match
  		var pos = j - offset // position of the match copy in the current output
  		var end = j + match_length + 4 // minmatch = 4
  		while (j < end) output[j++] = output[pos++]
  	}
  
  	return j
  }
  
  var
  	maxInputSize	= 0x7E000000
  ,	minMatch		= 4
  // uint32() optimization
  ,	hashLog			= 16
  ,	hashShift		= (minMatch * 8) - hashLog
  ,	hashSize		= 1 << hashLog
  
  ,	copyLength		= 8
  ,	lastLiterals	= 5
  ,	mfLimit			= copyLength + minMatch
  ,	skipStrength	= 6
  
  ,	mlBits  		= 4
  ,	mlMask  		= (1 << mlBits) - 1
  ,	runBits 		= 8 - mlBits
  ,	runMask 		= (1 << runBits) - 1
  
  ,	hasher 			= /* XXX uint32( */ 2654435761 /* ) */
  
  assert(hashShift === 16);
  var hashTable = new Int16Array(1<<16);
  var empty = new Int16Array(hashTable.length);
  
  // CompressBound returns the maximum length of a lz4 block, given it's uncompressed length
  exports.compressBound = function (isize) {
  	return isize > maxInputSize
  		? 0
  		: (isize + (isize/255) + 16) | 0
  }
  
  /** @param {number=} sIdx
  	@param {number=} eIdx */
  exports.compress = function (src, dst, sIdx, eIdx) {
  	hashTable.set(empty);
  	return compressBlock(src, dst, 0, sIdx || 0, eIdx || dst.length)
  }
  
  function compressBlock (src, dst, pos, sIdx, eIdx) {
  	// XXX var Hash = uint32() // Reusable unsigned 32 bits integer
  	var dpos = sIdx
  	var dlen = eIdx - sIdx
  	var anchor = 0
  
  	if (src.length >= maxInputSize) throw new Error("input too large")
  
  	// Minimum of input bytes for compression (LZ4 specs)
  	if (src.length > mfLimit) {
  		var n = exports.compressBound(src.length)
  		if ( dlen < n ) throw Error("output too small: " + dlen + " < " + n)
  
  		var 
  			step  = 1
  		,	findMatchAttempts = (1 << skipStrength) + 3
  		// Keep last few bytes incompressible (LZ4 specs):
  		// last 5 bytes must be literals
  		,	srcLength = src.length - mfLimit
  
  		while (pos + minMatch < srcLength) {
  			// Find a match
  			// min match of 4 bytes aka sequence
  			var sequenceLowBits = src[pos+1]<<8 | src[pos]
  			var sequenceHighBits = src[pos+3]<<8 | src[pos+2]
  			// compute hash for the current sequence
  			var hash = Math.imul(sequenceLowBits | (sequenceHighBits << 16), hasher) >>> hashShift;
  			/* XXX Hash.fromBits(sequenceLowBits, sequenceHighBits)
  							.multiply(hasher)
  							.shiftr(hashShift)
  							.toNumber() */
  			// get the position of the sequence matching the hash
  			// NB. since 2 different sequences may have the same hash
  			// it is double-checked below
  			// do -1 to distinguish between initialized and uninitialized values
  			var ref = hashTable[hash] - 1
  			// save position of current sequence in hash table
  			hashTable[hash] = pos + 1
  
  			// first reference or within 64k limit or current sequence !== hashed one: no match
  			if ( ref < 0 ||
  				((pos - ref) >>> 16) > 0 ||
  				(
  					((src[ref+3]<<8 | src[ref+2]) != sequenceHighBits) ||
  					((src[ref+1]<<8 | src[ref]) != sequenceLowBits )
  				)
  			) {
  				// increase step if nothing found within limit
  				step = findMatchAttempts++ >> skipStrength
  				pos += step
  				continue
  			}
  
  			findMatchAttempts = (1 << skipStrength) + 3
  
  			// got a match
  			var literals_length = pos - anchor
  			var offset = pos - ref
  
  			// minMatch already verified
  			pos += minMatch
  			ref += minMatch
  
  			// move to the end of the match (>=minMatch)
  			var match_length = pos
  			while (pos < srcLength && src[pos] == src[ref]) {
  				pos++
  				ref++
  			}
  
  			// match length
  			match_length = pos - match_length
  
  			// token
  			var token = match_length < mlMask ? match_length : mlMask
  
  			// encode literals length
  			if (literals_length >= runMask) {
  				// add match length to the token
  				dst[dpos++] = (runMask << mlBits) + token
  				for (var len = literals_length - runMask; len > 254; len -= 255) {
  					dst[dpos++] = 255
  				}
  				dst[dpos++] = len
  			} else {
  				// add match length to the token
  				dst[dpos++] = (literals_length << mlBits) + token
  			}
  
  			// write literals
  			for (var i = 0; i < literals_length; i++) {
  				dst[dpos++] = src[anchor+i]
  			}
  
  			// encode offset
  			dst[dpos++] = offset
  			dst[dpos++] = (offset >> 8)
  
  			// encode match length
  			if (match_length >= mlMask) {
  				match_length -= mlMask
  				while (match_length >= 255) {
  					match_length -= 255
  					dst[dpos++] = 255
  				}
  
  				dst[dpos++] = match_length
  			}
  
  			anchor = pos
  		}
  	}
  
  	// cannot compress input
  	if (anchor == 0) return 0
  
  	// Write last literals
  	// encode literals length
  	literals_length = src.length - anchor
  	if (literals_length >= runMask) {
  		// add match length to the token
  		dst[dpos++] = (runMask << mlBits)
  		for (var ln = literals_length - runMask; ln > 254; ln -= 255) {
  			dst[dpos++] = 255
  		}
  		dst[dpos++] = ln
  	} else {
  		// add match length to the token
  		dst[dpos++] = (literals_length << mlBits)
  	}
  
  	// write literals
  	pos = anchor
  	while (pos < src.length) {
  		dst[dpos++] = src[pos++]
  	}
  
  	return dpos
  }
  
  exports.CHUNK_SIZE = 2048; // musl libc does readaheads of 1024 bytes, so a multiple of that is a good idea
  
  exports.compressPackage = function(data, verify) {
    if (verify) {
      var temp = new Uint8Array(exports.CHUNK_SIZE);
    }
    // compress the data in chunks
    assert(data instanceof ArrayBuffer);
    data = new Uint8Array(data);
    console.log('compressing package of size ' + data.length);
    var compressedChunks = [];
    var successes = [];
    var offset = 0;
    var total = 0;
    while (offset < data.length) {
      var chunk = data.subarray(offset, offset + exports.CHUNK_SIZE);
      //console.log('compress a chunk ' + [offset, total, data.length]);
      offset += exports.CHUNK_SIZE;
      var bound = exports.compressBound(chunk.length);
      var compressed = new Uint8Array(bound);
      var compressedSize = exports.compress(chunk, compressed);
      if (compressedSize > 0) {
        assert(compressedSize <= bound);
        compressed = compressed.subarray(0, compressedSize);
        compressedChunks.push(compressed);
        total += compressedSize;
        successes.push(1);
        if (verify) {
          var back = exports.uncompress(compressed, temp);
          assert(back === chunk.length, [back, chunk.length]);
          for (var i = 0; i < chunk.length; i++) {
            assert(chunk[i] === temp[i]);
          }
        }
      } else {
        assert(compressedSize === 0);
        // failure to compress :(
        compressedChunks.push(chunk);
        total += chunk.length; // last chunk may not be the full exports.CHUNK_SIZE size
        successes.push(0);
      }
    }
    data = null; // XXX null out pack['data'] too?
    var compressedData = {
      'data': new Uint8Array(total + exports.CHUNK_SIZE*2), // store all the compressed data, plus room for two cached decompressed chunk, in one fast array
      'cachedOffset': total,
      'cachedIndexes': [-1, -1], // cache last two blocks, so that reading 1,2,3 + preloading another block won't trigger decompress thrashing
      'cachedChunks': [null, null],
      'offsets': [], // chunk# => start in compressed data
      'sizes': [],
      'successes': successes, // 1 if chunk is compressed
    };
    offset = 0;
    for (var i = 0; i < compressedChunks.length; i++) {
      compressedData['data'].set(compressedChunks[i], offset);
      compressedData['offsets'][i] = offset;
      compressedData['sizes'][i] = compressedChunks[i].length
      offset += compressedChunks[i].length;
    }
    console.log('compressed package into ' + [compressedData['data'].length]);
    assert(offset === total);
    return compressedData;
  };
  
  assert(exports.CHUNK_SIZE < (1 << 15)); // we use 16-bit ints as the type of the hash table, chunk size must be smaller
  
  return exports;
  
  })();
  
  ;
          return MiniLZ4;
        })();
        LZ4.CHUNK_SIZE = LZ4.codec.CHUNK_SIZE;
      },loadPackage:function (pack, preloadPlugin) {
        LZ4.init();
        var compressedData = pack['compressedData'];
        if (!compressedData) compressedData = LZ4.codec.compressPackage(pack['data']);
        assert(compressedData['cachedIndexes'].length === compressedData['cachedChunks'].length);
        for (var i = 0; i < compressedData['cachedIndexes'].length; i++) {
          compressedData['cachedIndexes'][i] = -1;
          compressedData['cachedChunks'][i] = compressedData['data'].subarray(compressedData['cachedOffset'] + i*LZ4.CHUNK_SIZE,
                                                                        compressedData['cachedOffset'] + (i+1)*LZ4.CHUNK_SIZE);
          assert(compressedData['cachedChunks'][i].length === LZ4.CHUNK_SIZE);
        }
        pack['metadata'].files.forEach(function(file) {
          var dir = PATH.dirname(file.filename);
          var name = PATH.basename(file.filename);
          FS.createPath('', dir, true, true);
          var parent = FS.analyzePath(dir).object;
          LZ4.createNode(parent, name, LZ4.FILE_MODE, 0, {
            compressedData: compressedData,
            start: file.start,
            end: file.end,
          });
        });
        // Preload files if necessary. This code is largely similar to
        // createPreloadedFile in library_fs.js. However, a main difference here
        // is that we only decompress the file if it can be preloaded.
        // Abstracting out the common parts seems to be more effort than it is
        // worth.
        if (preloadPlugin) {
          Browser.init();
          pack['metadata'].files.forEach(function(file) {
            var handled = false;
            var fullname = file.filename;
            Module['preloadPlugins'].forEach(function(plugin) {
              if (handled) return;
              if (plugin['canHandle'](fullname)) {
                var dep = getUniqueRunDependency('fp ' + fullname);
                addRunDependency(dep);
                var finish = function() {
                  removeRunDependency(dep);
                }
                var byteArray = FS.readFile(fullname);
                plugin['handle'](byteArray, fullname, finish, finish);
                handled = true;
              }
            });
          });
        }
      },createNode:function (parent, name, mode, dev, contents, mtime) {
        var node = FS.createNode(parent, name, mode);
        node.mode = mode;
        node.node_ops = LZ4.node_ops;
        node.stream_ops = LZ4.stream_ops;
        node.timestamp = (mtime || new Date).getTime();
        assert(LZ4.FILE_MODE !== LZ4.DIR_MODE);
        if (mode === LZ4.FILE_MODE) {
          node.size = contents.end - contents.start;
          node.contents = contents;
        } else {
          node.size = 4096;
          node.contents = {};
        }
        if (parent) {
          parent.contents[name] = node;
        }
        return node;
      },node_ops:{getattr:function(node) {
          return {
            dev: 1,
            ino: node.id,
            mode: node.mode,
            nlink: 1,
            uid: 0,
            gid: 0,
            rdev: undefined,
            size: node.size,
            atime: new Date(node.timestamp),
            mtime: new Date(node.timestamp),
            ctime: new Date(node.timestamp),
            blksize: 4096,
            blocks: Math.ceil(node.size / 4096),
          };
        },setattr:function(node, attr) {
          if (attr.mode !== undefined) {
            node.mode = attr.mode;
          }
          if (attr.timestamp !== undefined) {
            node.timestamp = attr.timestamp;
          }
        },lookup:function(parent, name) {
          throw new FS.ErrnoError(44);
        },mknod:function (parent, name, mode, dev) {
          throw new FS.ErrnoError(63);
        },rename:function (oldNode, newDir, newName) {
          throw new FS.ErrnoError(63);
        },unlink:function(parent, name) {
          throw new FS.ErrnoError(63);
        },rmdir:function(parent, name) {
          throw new FS.ErrnoError(63);
        },readdir:function(node) {
          throw new FS.ErrnoError(63);
        },symlink:function(parent, newName, oldPath) {
          throw new FS.ErrnoError(63);
        }},stream_ops:{read:function (stream, buffer, offset, length, position) {
          //out('LZ4 read ' + [offset, length, position]);
          length = Math.min(length, stream.node.size - position);
          if (length <= 0) return 0;
          var contents = stream.node.contents;
          var compressedData = contents.compressedData;
          var written = 0;
          while (written < length) {
            var start = contents.start + position + written; // start index in uncompressed data
            var desired = length - written;
            //out('current read: ' + ['start', start, 'desired', desired]);
            var chunkIndex = Math.floor(start / LZ4.CHUNK_SIZE);
            var compressedStart = compressedData['offsets'][chunkIndex];
            var compressedSize = compressedData['sizes'][chunkIndex];
            var currChunk;
            if (compressedData['successes'][chunkIndex]) {
              var found = compressedData['cachedIndexes'].indexOf(chunkIndex);
              if (found >= 0) {
                currChunk = compressedData['cachedChunks'][found];
              } else {
                // decompress the chunk
                compressedData['cachedIndexes'].pop();
                compressedData['cachedIndexes'].unshift(chunkIndex);
                currChunk = compressedData['cachedChunks'].pop();
                compressedData['cachedChunks'].unshift(currChunk);
                if (compressedData['debug']) {
                  out('decompressing chunk ' + chunkIndex);
                  Module['decompressedChunks'] = (Module['decompressedChunks'] || 0) + 1;
                }
                var compressed = compressedData['data'].subarray(compressedStart, compressedStart + compressedSize);
                //var t = Date.now();
                var originalSize = LZ4.codec.uncompress(compressed, currChunk);
                //out('decompress time: ' + (Date.now() - t));
                if (chunkIndex < compressedData['successes'].length-1) assert(originalSize === LZ4.CHUNK_SIZE); // all but the last chunk must be full-size
              }
            } else {
              // uncompressed
              currChunk = compressedData['data'].subarray(compressedStart, compressedStart + LZ4.CHUNK_SIZE);
            }
            var startInChunk = start % LZ4.CHUNK_SIZE;
            var endInChunk = Math.min(startInChunk + desired, LZ4.CHUNK_SIZE);
            buffer.set(currChunk.subarray(startInChunk, endInChunk), offset + written);
            var currWritten = endInChunk - startInChunk;
            written += currWritten;
          }
          return written;
        },write:function (stream, buffer, offset, length, position) {
          throw new FS.ErrnoError(29);
        },llseek:function (stream, offset, whence) {
          var position = offset;
          if (whence === 1) {
            position += stream.position;
          } else if (whence === 2) {
            if (FS.isFile(stream.node.mode)) {
              position += stream.node.size;
            }
          }
          if (position < 0) {
            throw new FS.ErrnoError(28);
          }
          return position;
        }}};
  var FS = {root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:false,ignorePermissions:true,ErrnoError:null,genericErrors:{},filesystems:null,syncFSRequests:0,lookupPath:(path, opts = {}) => {
        path = PATH_FS.resolve(path);
  
        if (!path) return { path: '', node: null };
  
        var defaults = {
          follow_mount: true,
          recurse_count: 0
        };
        opts = Object.assign(defaults, opts)
  
        if (opts.recurse_count > 8) {  // max recursive lookup of 8
          throw new FS.ErrnoError(32);
        }
  
        // split the absolute path
        var parts = path.split('/').filter((p) => !!p);
  
        // start at the root
        var current = FS.root;
        var current_path = '/';
  
        for (var i = 0; i < parts.length; i++) {
          var islast = (i === parts.length-1);
          if (islast && opts.parent) {
            // stop resolving
            break;
          }
  
          current = FS.lookupNode(current, parts[i]);
          current_path = PATH.join2(current_path, parts[i]);
  
          // jump to the mount's root node if this is a mountpoint
          if (FS.isMountpoint(current)) {
            if (!islast || (islast && opts.follow_mount)) {
              current = current.mounted.root;
            }
          }
  
          // by default, lookupPath will not follow a symlink if it is the final path component.
          // setting opts.follow = true will override this behavior.
          if (!islast || opts.follow) {
            var count = 0;
            while (FS.isLink(current.mode)) {
              var link = FS.readlink(current_path);
              current_path = PATH_FS.resolve(PATH.dirname(current_path), link);
  
              var lookup = FS.lookupPath(current_path, { recurse_count: opts.recurse_count + 1 });
              current = lookup.node;
  
              if (count++ > 40) {  // limit max consecutive symlinks to 40 (SYMLOOP_MAX).
                throw new FS.ErrnoError(32);
              }
            }
          }
        }
  
        return { path: current_path, node: current };
      },getPath:(node) => {
        var path;
        while (true) {
          if (FS.isRoot(node)) {
            var mount = node.mount.mountpoint;
            if (!path) return mount;
            return mount[mount.length-1] !== '/' ? mount + '/' + path : mount + path;
          }
          path = path ? node.name + '/' + path : node.name;
          node = node.parent;
        }
      },hashName:(parentid, name) => {
        var hash = 0;
  
        for (var i = 0; i < name.length; i++) {
          hash = ((hash << 5) - hash + name.charCodeAt(i)) | 0;
        }
        return ((parentid + hash) >>> 0) % FS.nameTable.length;
      },hashAddNode:(node) => {
        var hash = FS.hashName(node.parent.id, node.name);
        node.name_next = FS.nameTable[hash];
        FS.nameTable[hash] = node;
      },hashRemoveNode:(node) => {
        var hash = FS.hashName(node.parent.id, node.name);
        if (FS.nameTable[hash] === node) {
          FS.nameTable[hash] = node.name_next;
        } else {
          var current = FS.nameTable[hash];
          while (current) {
            if (current.name_next === node) {
              current.name_next = node.name_next;
              break;
            }
            current = current.name_next;
          }
        }
      },lookupNode:(parent, name) => {
        var errCode = FS.mayLookup(parent);
        if (errCode) {
          throw new FS.ErrnoError(errCode, parent);
        }
        var hash = FS.hashName(parent.id, name);
        for (var node = FS.nameTable[hash]; node; node = node.name_next) {
          var nodeName = node.name;
          if (node.parent.id === parent.id && nodeName === name) {
            return node;
          }
        }
        // if we failed to find it in the cache, call into the VFS
        return FS.lookup(parent, name);
      },createNode:(parent, name, mode, rdev) => {
        var node = new FS.FSNode(parent, name, mode, rdev);
  
        FS.hashAddNode(node);
  
        return node;
      },destroyNode:(node) => {
        FS.hashRemoveNode(node);
      },isRoot:(node) => {
        return node === node.parent;
      },isMountpoint:(node) => {
        return !!node.mounted;
      },isFile:(mode) => {
        return (mode & 61440) === 32768;
      },isDir:(mode) => {
        return (mode & 61440) === 16384;
      },isLink:(mode) => {
        return (mode & 61440) === 40960;
      },isChrdev:(mode) => {
        return (mode & 61440) === 8192;
      },isBlkdev:(mode) => {
        return (mode & 61440) === 24576;
      },isFIFO:(mode) => {
        return (mode & 61440) === 4096;
      },isSocket:(mode) => {
        return (mode & 49152) === 49152;
      },flagModes:{"r":0,"r+":2,"w":577,"w+":578,"a":1089,"a+":1090},modeStringToFlags:(str) => {
        var flags = FS.flagModes[str];
        if (typeof flags == 'undefined') {
          throw new Error('Unknown file open mode: ' + str);
        }
        return flags;
      },flagsToPermissionString:(flag) => {
        var perms = ['r', 'w', 'rw'][flag & 3];
        if ((flag & 512)) {
          perms += 'w';
        }
        return perms;
      },nodePermissions:(node, perms) => {
        if (FS.ignorePermissions) {
          return 0;
        }
        // return 0 if any user, group or owner bits are set.
        if (perms.includes('r') && !(node.mode & 292)) {
          return 2;
        } else if (perms.includes('w') && !(node.mode & 146)) {
          return 2;
        } else if (perms.includes('x') && !(node.mode & 73)) {
          return 2;
        }
        return 0;
      },mayLookup:(dir) => {
        var errCode = FS.nodePermissions(dir, 'x');
        if (errCode) return errCode;
        if (!dir.node_ops.lookup) return 2;
        return 0;
      },mayCreate:(dir, name) => {
        try {
          var node = FS.lookupNode(dir, name);
          return 20;
        } catch (e) {
        }
        return FS.nodePermissions(dir, 'wx');
      },mayDelete:(dir, name, isdir) => {
        var node;
        try {
          node = FS.lookupNode(dir, name);
        } catch (e) {
          return e.errno;
        }
        var errCode = FS.nodePermissions(dir, 'wx');
        if (errCode) {
          return errCode;
        }
        if (isdir) {
          if (!FS.isDir(node.mode)) {
            return 54;
          }
          if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
            return 10;
          }
        } else {
          if (FS.isDir(node.mode)) {
            return 31;
          }
        }
        return 0;
      },mayOpen:(node, flags) => {
        if (!node) {
          return 44;
        }
        if (FS.isLink(node.mode)) {
          return 32;
        } else if (FS.isDir(node.mode)) {
          if (FS.flagsToPermissionString(flags) !== 'r' || // opening for write
              (flags & 512)) { // TODO: check for O_SEARCH? (== search for dir only)
            return 31;
          }
        }
        return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
      },MAX_OPEN_FDS:4096,nextfd:(fd_start = 0, fd_end = FS.MAX_OPEN_FDS) => {
        for (var fd = fd_start; fd <= fd_end; fd++) {
          if (!FS.streams[fd]) {
            return fd;
          }
        }
        throw new FS.ErrnoError(33);
      },getStream:(fd) => FS.streams[fd],createStream:(stream, fd_start, fd_end) => {
        if (!FS.FSStream) {
          FS.FSStream = /** @constructor */ function() {
            this.shared = { };
          };
          FS.FSStream.prototype = {};
          Object.defineProperties(FS.FSStream.prototype, {
            object: {
              /** @this {FS.FSStream} */
              get: function() { return this.node; },
              /** @this {FS.FSStream} */
              set: function(val) { this.node = val; }
            },
            isRead: {
              /** @this {FS.FSStream} */
              get: function() { return (this.flags & 2097155) !== 1; }
            },
            isWrite: {
              /** @this {FS.FSStream} */
              get: function() { return (this.flags & 2097155) !== 0; }
            },
            isAppend: {
              /** @this {FS.FSStream} */
              get: function() { return (this.flags & 1024); }
            },
            flags: {
              /** @this {FS.FSStream} */
              get: function() { return this.shared.flags; },
              /** @this {FS.FSStream} */
              set: function(val) { this.shared.flags = val; },
            },
            position : {
              /** @this {FS.FSStream} */
              get: function() { return this.shared.position; },
              /** @this {FS.FSStream} */
              set: function(val) { this.shared.position = val; },
            },
          });
        }
        // clone it, so we can return an instance of FSStream
        stream = Object.assign(new FS.FSStream(), stream);
        var fd = FS.nextfd(fd_start, fd_end);
        stream.fd = fd;
        FS.streams[fd] = stream;
        return stream;
      },closeStream:(fd) => {
        FS.streams[fd] = null;
      },chrdev_stream_ops:{open:(stream) => {
          var device = FS.getDevice(stream.node.rdev);
          // override node's stream ops with the device's
          stream.stream_ops = device.stream_ops;
          // forward the open call
          if (stream.stream_ops.open) {
            stream.stream_ops.open(stream);
          }
        },llseek:() => {
          throw new FS.ErrnoError(70);
        }},major:(dev) => ((dev) >> 8),minor:(dev) => ((dev) & 0xff),makedev:(ma, mi) => ((ma) << 8 | (mi)),registerDevice:(dev, ops) => {
        FS.devices[dev] = { stream_ops: ops };
      },getDevice:(dev) => FS.devices[dev],getMounts:(mount) => {
        var mounts = [];
        var check = [mount];
  
        while (check.length) {
          var m = check.pop();
  
          mounts.push(m);
  
          check.push.apply(check, m.mounts);
        }
  
        return mounts;
      },syncfs:(populate, callback) => {
        if (typeof populate == 'function') {
          callback = populate;
          populate = false;
        }
  
        FS.syncFSRequests++;
  
        if (FS.syncFSRequests > 1) {
          err('warning: ' + FS.syncFSRequests + ' FS.syncfs operations in flight at once, probably just doing extra work');
        }
  
        var mounts = FS.getMounts(FS.root.mount);
        var completed = 0;
  
        function doCallback(errCode) {
          FS.syncFSRequests--;
          return callback(errCode);
        }
  
        function done(errCode) {
          if (errCode) {
            if (!done.errored) {
              done.errored = true;
              return doCallback(errCode);
            }
            return;
          }
          if (++completed >= mounts.length) {
            doCallback(null);
          }
        };
  
        // sync all mounts
        mounts.forEach((mount) => {
          if (!mount.type.syncfs) {
            return done(null);
          }
          mount.type.syncfs(mount, populate, done);
        });
      },mount:(type, opts, mountpoint) => {
        var root = mountpoint === '/';
        var pseudo = !mountpoint;
        var node;
  
        if (root && FS.root) {
          throw new FS.ErrnoError(10);
        } else if (!root && !pseudo) {
          var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
  
          mountpoint = lookup.path;  // use the absolute path
          node = lookup.node;
  
          if (FS.isMountpoint(node)) {
            throw new FS.ErrnoError(10);
          }
  
          if (!FS.isDir(node.mode)) {
            throw new FS.ErrnoError(54);
          }
        }
  
        var mount = {
          type: type,
          opts: opts,
          mountpoint: mountpoint,
          mounts: []
        };
  
        // create a root node for the fs
        var mountRoot = type.mount(mount);
        mountRoot.mount = mount;
        mount.root = mountRoot;
  
        if (root) {
          FS.root = mountRoot;
        } else if (node) {
          // set as a mountpoint
          node.mounted = mount;
  
          // add the new mount to the current mount's children
          if (node.mount) {
            node.mount.mounts.push(mount);
          }
        }
  
        return mountRoot;
      },unmount:(mountpoint) => {
        var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
  
        if (!FS.isMountpoint(lookup.node)) {
          throw new FS.ErrnoError(28);
        }
  
        // destroy the nodes for this mount, and all its child mounts
        var node = lookup.node;
        var mount = node.mounted;
        var mounts = FS.getMounts(mount);
  
        Object.keys(FS.nameTable).forEach((hash) => {
          var current = FS.nameTable[hash];
  
          while (current) {
            var next = current.name_next;
  
            if (mounts.includes(current.mount)) {
              FS.destroyNode(current);
            }
  
            current = next;
          }
        });
  
        // no longer a mountpoint
        node.mounted = null;
  
        // remove this mount from the child mounts
        var idx = node.mount.mounts.indexOf(mount);
        node.mount.mounts.splice(idx, 1);
      },lookup:(parent, name) => {
        return parent.node_ops.lookup(parent, name);
      },mknod:(path, mode, dev) => {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        if (!name || name === '.' || name === '..') {
          throw new FS.ErrnoError(28);
        }
        var errCode = FS.mayCreate(parent, name);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.mknod) {
          throw new FS.ErrnoError(63);
        }
        return parent.node_ops.mknod(parent, name, mode, dev);
      },create:(path, mode) => {
        mode = mode !== undefined ? mode : 438 /* 0666 */;
        mode &= 4095;
        mode |= 32768;
        return FS.mknod(path, mode, 0);
      },mkdir:(path, mode) => {
        mode = mode !== undefined ? mode : 511 /* 0777 */;
        mode &= 511 | 512;
        mode |= 16384;
        return FS.mknod(path, mode, 0);
      },mkdirTree:(path, mode) => {
        var dirs = path.split('/');
        var d = '';
        for (var i = 0; i < dirs.length; ++i) {
          if (!dirs[i]) continue;
          d += '/' + dirs[i];
          try {
            FS.mkdir(d, mode);
          } catch(e) {
            if (e.errno != 20) throw e;
          }
        }
      },mkdev:(path, mode, dev) => {
        if (typeof dev == 'undefined') {
          dev = mode;
          mode = 438 /* 0666 */;
        }
        mode |= 8192;
        return FS.mknod(path, mode, dev);
      },symlink:(oldpath, newpath) => {
        if (!PATH_FS.resolve(oldpath)) {
          throw new FS.ErrnoError(44);
        }
        var lookup = FS.lookupPath(newpath, { parent: true });
        var parent = lookup.node;
        if (!parent) {
          throw new FS.ErrnoError(44);
        }
        var newname = PATH.basename(newpath);
        var errCode = FS.mayCreate(parent, newname);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.symlink) {
          throw new FS.ErrnoError(63);
        }
        return parent.node_ops.symlink(parent, newname, oldpath);
      },rename:(old_path, new_path) => {
        var old_dirname = PATH.dirname(old_path);
        var new_dirname = PATH.dirname(new_path);
        var old_name = PATH.basename(old_path);
        var new_name = PATH.basename(new_path);
        // parents must exist
        var lookup, old_dir, new_dir;
  
        // let the errors from non existant directories percolate up
        lookup = FS.lookupPath(old_path, { parent: true });
        old_dir = lookup.node;
        lookup = FS.lookupPath(new_path, { parent: true });
        new_dir = lookup.node;
  
        if (!old_dir || !new_dir) throw new FS.ErrnoError(44);
        // need to be part of the same mount
        if (old_dir.mount !== new_dir.mount) {
          throw new FS.ErrnoError(75);
        }
        // source must exist
        var old_node = FS.lookupNode(old_dir, old_name);
        // old path should not be an ancestor of the new path
        var relative = PATH_FS.relative(old_path, new_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(28);
        }
        // new path should not be an ancestor of the old path
        relative = PATH_FS.relative(new_path, old_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(55);
        }
        // see if the new path already exists
        var new_node;
        try {
          new_node = FS.lookupNode(new_dir, new_name);
        } catch (e) {
          // not fatal
        }
        // early out if nothing needs to change
        if (old_node === new_node) {
          return;
        }
        // we'll need to delete the old entry
        var isdir = FS.isDir(old_node.mode);
        var errCode = FS.mayDelete(old_dir, old_name, isdir);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        // need delete permissions if we'll be overwriting.
        // need create permissions if new doesn't already exist.
        errCode = new_node ?
          FS.mayDelete(new_dir, new_name, isdir) :
          FS.mayCreate(new_dir, new_name);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!old_dir.node_ops.rename) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(old_node) || (new_node && FS.isMountpoint(new_node))) {
          throw new FS.ErrnoError(10);
        }
        // if we are going to change the parent, check write permissions
        if (new_dir !== old_dir) {
          errCode = FS.nodePermissions(old_dir, 'w');
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
        }
        // remove the node from the lookup hash
        FS.hashRemoveNode(old_node);
        // do the underlying fs rename
        try {
          old_dir.node_ops.rename(old_node, new_dir, new_name);
        } catch (e) {
          throw e;
        } finally {
          // add the node back to the hash (in case node_ops.rename
          // changed its name)
          FS.hashAddNode(old_node);
        }
      },rmdir:(path) => {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var errCode = FS.mayDelete(parent, name, true);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.rmdir) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(10);
        }
        parent.node_ops.rmdir(parent, name);
        FS.destroyNode(node);
      },readdir:(path) => {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        if (!node.node_ops.readdir) {
          throw new FS.ErrnoError(54);
        }
        return node.node_ops.readdir(node);
      },unlink:(path) => {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        if (!parent) {
          throw new FS.ErrnoError(44);
        }
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var errCode = FS.mayDelete(parent, name, false);
        if (errCode) {
          // According to POSIX, we should map EISDIR to EPERM, but
          // we instead do what Linux does (and we must, as we use
          // the musl linux libc).
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.unlink) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(10);
        }
        parent.node_ops.unlink(parent, name);
        FS.destroyNode(node);
      },readlink:(path) => {
        var lookup = FS.lookupPath(path);
        var link = lookup.node;
        if (!link) {
          throw new FS.ErrnoError(44);
        }
        if (!link.node_ops.readlink) {
          throw new FS.ErrnoError(28);
        }
        return PATH_FS.resolve(FS.getPath(link.parent), link.node_ops.readlink(link));
      },stat:(path, dontFollow) => {
        var lookup = FS.lookupPath(path, { follow: !dontFollow });
        var node = lookup.node;
        if (!node) {
          throw new FS.ErrnoError(44);
        }
        if (!node.node_ops.getattr) {
          throw new FS.ErrnoError(63);
        }
        return node.node_ops.getattr(node);
      },lstat:(path) => {
        return FS.stat(path, true);
      },chmod:(path, mode, dontFollow) => {
        var node;
        if (typeof path == 'string') {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        node.node_ops.setattr(node, {
          mode: (mode & 4095) | (node.mode & ~4095),
          timestamp: Date.now()
        });
      },lchmod:(path, mode) => {
        FS.chmod(path, mode, true);
      },fchmod:(fd, mode) => {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        FS.chmod(stream.node, mode);
      },chown:(path, uid, gid, dontFollow) => {
        var node;
        if (typeof path == 'string') {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        node.node_ops.setattr(node, {
          timestamp: Date.now()
          // we ignore the uid / gid for now
        });
      },lchown:(path, uid, gid) => {
        FS.chown(path, uid, gid, true);
      },fchown:(fd, uid, gid) => {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        FS.chown(stream.node, uid, gid);
      },truncate:(path, len) => {
        if (len < 0) {
          throw new FS.ErrnoError(28);
        }
        var node;
        if (typeof path == 'string') {
          var lookup = FS.lookupPath(path, { follow: true });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isDir(node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!FS.isFile(node.mode)) {
          throw new FS.ErrnoError(28);
        }
        var errCode = FS.nodePermissions(node, 'w');
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        node.node_ops.setattr(node, {
          size: len,
          timestamp: Date.now()
        });
      },ftruncate:(fd, len) => {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(28);
        }
        FS.truncate(stream.node, len);
      },utime:(path, atime, mtime) => {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        node.node_ops.setattr(node, {
          timestamp: Math.max(atime, mtime)
        });
      },open:(path, flags, mode) => {
        if (path === "") {
          throw new FS.ErrnoError(44);
        }
        flags = typeof flags == 'string' ? FS.modeStringToFlags(flags) : flags;
        mode = typeof mode == 'undefined' ? 438 /* 0666 */ : mode;
        if ((flags & 64)) {
          mode = (mode & 4095) | 32768;
        } else {
          mode = 0;
        }
        var node;
        if (typeof path == 'object') {
          node = path;
        } else {
          path = PATH.normalize(path);
          try {
            var lookup = FS.lookupPath(path, {
              follow: !(flags & 131072)
            });
            node = lookup.node;
          } catch (e) {
            // ignore
          }
        }
        // perhaps we need to create the node
        var created = false;
        if ((flags & 64)) {
          if (node) {
            // if O_CREAT and O_EXCL are set, error out if the node already exists
            if ((flags & 128)) {
              throw new FS.ErrnoError(20);
            }
          } else {
            // node doesn't exist, try to create it
            node = FS.mknod(path, mode, 0);
            created = true;
          }
        }
        if (!node) {
          throw new FS.ErrnoError(44);
        }
        // can't truncate a device
        if (FS.isChrdev(node.mode)) {
          flags &= ~512;
        }
        // if asked only for a directory, then this must be one
        if ((flags & 65536) && !FS.isDir(node.mode)) {
          throw new FS.ErrnoError(54);
        }
        // check permissions, if this is not a file we just created now (it is ok to
        // create and write to a file with read-only permissions; it is read-only
        // for later use)
        if (!created) {
          var errCode = FS.mayOpen(node, flags);
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
        }
        // do truncation if necessary
        if ((flags & 512) && !created) {
          FS.truncate(node, 0);
        }
        // we've already handled these, don't pass down to the underlying vfs
        flags &= ~(128 | 512 | 131072);
  
        // register the stream with the filesystem
        var stream = FS.createStream({
          node: node,
          path: FS.getPath(node),  // we want the absolute path to the node
          flags: flags,
          seekable: true,
          position: 0,
          stream_ops: node.stream_ops,
          // used by the file family libc calls (fopen, fwrite, ferror, etc.)
          ungotten: [],
          error: false
        });
        // call the new stream's open function
        if (stream.stream_ops.open) {
          stream.stream_ops.open(stream);
        }
        if (Module['logReadFiles'] && !(flags & 1)) {
          if (!FS.readFiles) FS.readFiles = {};
          if (!(path in FS.readFiles)) {
            FS.readFiles[path] = 1;
          }
        }
        return stream;
      },close:(stream) => {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (stream.getdents) stream.getdents = null; // free readdir state
        try {
          if (stream.stream_ops.close) {
            stream.stream_ops.close(stream);
          }
        } catch (e) {
          throw e;
        } finally {
          FS.closeStream(stream.fd);
        }
        stream.fd = null;
      },isClosed:(stream) => {
        return stream.fd === null;
      },llseek:(stream, offset, whence) => {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (!stream.seekable || !stream.stream_ops.llseek) {
          throw new FS.ErrnoError(70);
        }
        if (whence != 0 && whence != 1 && whence != 2) {
          throw new FS.ErrnoError(28);
        }
        stream.position = stream.stream_ops.llseek(stream, offset, whence);
        stream.ungotten = [];
        return stream.position;
      },read:(stream, buffer, offset, length, position) => {
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(28);
        }
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(8);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!stream.stream_ops.read) {
          throw new FS.ErrnoError(28);
        }
        var seeking = typeof position != 'undefined';
        if (!seeking) {
          position = stream.position;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(70);
        }
        var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position);
        if (!seeking) stream.position += bytesRead;
        return bytesRead;
      },write:(stream, buffer, offset, length, position, canOwn) => {
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(28);
        }
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(8);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!stream.stream_ops.write) {
          throw new FS.ErrnoError(28);
        }
        if (stream.seekable && stream.flags & 1024) {
          // seek to the end before writing in append mode
          FS.llseek(stream, 0, 2);
        }
        var seeking = typeof position != 'undefined';
        if (!seeking) {
          position = stream.position;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(70);
        }
        var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn);
        if (!seeking) stream.position += bytesWritten;
        return bytesWritten;
      },allocate:(stream, offset, length) => {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (offset < 0 || length <= 0) {
          throw new FS.ErrnoError(28);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(8);
        }
        if (!FS.isFile(stream.node.mode) && !FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(43);
        }
        if (!stream.stream_ops.allocate) {
          throw new FS.ErrnoError(138);
        }
        stream.stream_ops.allocate(stream, offset, length);
      },mmap:(stream, length, position, prot, flags) => {
        // User requests writing to file (prot & PROT_WRITE != 0).
        // Checking if we have permissions to write to the file unless
        // MAP_PRIVATE flag is set. According to POSIX spec it is possible
        // to write to file opened in read-only mode with MAP_PRIVATE flag,
        // as all modifications will be visible only in the memory of
        // the current process.
        if ((prot & 2) !== 0
            && (flags & 2) === 0
            && (stream.flags & 2097155) !== 2) {
          throw new FS.ErrnoError(2);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(2);
        }
        if (!stream.stream_ops.mmap) {
          throw new FS.ErrnoError(43);
        }
        return stream.stream_ops.mmap(stream, length, position, prot, flags);
      },msync:(stream, buffer, offset, length, mmapFlags) => {
        if (!stream.stream_ops.msync) {
          return 0;
        }
        return stream.stream_ops.msync(stream, buffer, offset, length, mmapFlags);
      },munmap:(stream) => 0,ioctl:(stream, cmd, arg) => {
        if (!stream.stream_ops.ioctl) {
          throw new FS.ErrnoError(59);
        }
        return stream.stream_ops.ioctl(stream, cmd, arg);
      },readFile:(path, opts = {}) => {
        opts.flags = opts.flags || 0;
        opts.encoding = opts.encoding || 'binary';
        if (opts.encoding !== 'utf8' && opts.encoding !== 'binary') {
          throw new Error('Invalid encoding type "' + opts.encoding + '"');
        }
        var ret;
        var stream = FS.open(path, opts.flags);
        var stat = FS.stat(path);
        var length = stat.size;
        var buf = new Uint8Array(length);
        FS.read(stream, buf, 0, length, 0);
        if (opts.encoding === 'utf8') {
          ret = UTF8ArrayToString(buf, 0);
        } else if (opts.encoding === 'binary') {
          ret = buf;
        }
        FS.close(stream);
        return ret;
      },writeFile:(path, data, opts = {}) => {
        opts.flags = opts.flags || 577;
        var stream = FS.open(path, opts.flags, opts.mode);
        if (typeof data == 'string') {
          var buf = new Uint8Array(lengthBytesUTF8(data)+1);
          var actualNumBytes = stringToUTF8Array(data, buf, 0, buf.length);
          FS.write(stream, buf, 0, actualNumBytes, undefined, opts.canOwn);
        } else if (ArrayBuffer.isView(data)) {
          FS.write(stream, data, 0, data.byteLength, undefined, opts.canOwn);
        } else {
          throw new Error('Unsupported data type');
        }
        FS.close(stream);
      },cwd:() => FS.currentPath,chdir:(path) => {
        var lookup = FS.lookupPath(path, { follow: true });
        if (lookup.node === null) {
          throw new FS.ErrnoError(44);
        }
        if (!FS.isDir(lookup.node.mode)) {
          throw new FS.ErrnoError(54);
        }
        var errCode = FS.nodePermissions(lookup.node, 'x');
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        FS.currentPath = lookup.path;
      },createDefaultDirectories:() => {
        FS.mkdir('/tmp');
        FS.mkdir('/home');
        FS.mkdir('/home/web_user');
      },createDefaultDevices:() => {
        // create /dev
        FS.mkdir('/dev');
        // setup /dev/null
        FS.registerDevice(FS.makedev(1, 3), {
          read: () => 0,
          write: (stream, buffer, offset, length, pos) => length,
        });
        FS.mkdev('/dev/null', FS.makedev(1, 3));
        // setup /dev/tty and /dev/tty1
        // stderr needs to print output using err() rather than out()
        // so we register a second tty just for it.
        TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
        TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
        FS.mkdev('/dev/tty', FS.makedev(5, 0));
        FS.mkdev('/dev/tty1', FS.makedev(6, 0));
        // setup /dev/[u]random
        // use a buffer to avoid overhead of individual crypto calls per byte
        var randomBuffer = new Uint8Array(1024), randomLeft = 0;
        var randomByte = () => {
          if (randomLeft === 0) {
            randomLeft = randomFill(randomBuffer).byteLength;
          }
          return randomBuffer[--randomLeft];
        };
        FS.createDevice('/dev', 'random', randomByte);
        FS.createDevice('/dev', 'urandom', randomByte);
        // we're not going to emulate the actual shm device,
        // just create the tmp dirs that reside in it commonly
        FS.mkdir('/dev/shm');
        FS.mkdir('/dev/shm/tmp');
      },createSpecialDirectories:() => {
        // create /proc/self/fd which allows /proc/self/fd/6 => readlink gives the
        // name of the stream for fd 6 (see test_unistd_ttyname)
        FS.mkdir('/proc');
        var proc_self = FS.mkdir('/proc/self');
        FS.mkdir('/proc/self/fd');
        FS.mount({
          mount: () => {
            var node = FS.createNode(proc_self, 'fd', 16384 | 511 /* 0777 */, 73);
            node.node_ops = {
              lookup: (parent, name) => {
                var fd = +name;
                var stream = FS.getStream(fd);
                if (!stream) throw new FS.ErrnoError(8);
                var ret = {
                  parent: null,
                  mount: { mountpoint: 'fake' },
                  node_ops: { readlink: () => stream.path },
                };
                ret.parent = ret; // make it look like a simple root node
                return ret;
              }
            };
            return node;
          }
        }, {}, '/proc/self/fd');
      },createStandardStreams:() => {
        // TODO deprecate the old functionality of a single
        // input / output callback and that utilizes FS.createDevice
        // and instead require a unique set of stream ops
  
        // by default, we symlink the standard streams to the
        // default tty devices. however, if the standard streams
        // have been overwritten we create a unique device for
        // them instead.
        if (Module['stdin']) {
          FS.createDevice('/dev', 'stdin', Module['stdin']);
        } else {
          FS.symlink('/dev/tty', '/dev/stdin');
        }
        if (Module['stdout']) {
          FS.createDevice('/dev', 'stdout', null, Module['stdout']);
        } else {
          FS.symlink('/dev/tty', '/dev/stdout');
        }
        if (Module['stderr']) {
          FS.createDevice('/dev', 'stderr', null, Module['stderr']);
        } else {
          FS.symlink('/dev/tty1', '/dev/stderr');
        }
  
        // open default streams for the stdin, stdout and stderr devices
        var stdin = FS.open('/dev/stdin', 0);
        var stdout = FS.open('/dev/stdout', 1);
        var stderr = FS.open('/dev/stderr', 1);
      },ensureErrnoError:() => {
        if (FS.ErrnoError) return;
        FS.ErrnoError = /** @this{Object} */ function ErrnoError(errno, node) {
          // We set the `name` property to be able to identify `FS.ErrnoError`
          // - the `name` is a standard ECMA-262 property of error objects. Kind of good to have it anyway.
          // - when using PROXYFS, an error can come from an underlying FS
          // as different FS objects have their own FS.ErrnoError each,
          // the test `err instanceof FS.ErrnoError` won't detect an error coming from another filesystem, causing bugs.
          // we'll use the reliable test `err.name == "ErrnoError"` instead
          this.name = 'ErrnoError';
          this.node = node;
          this.setErrno = /** @this{Object} */ function(errno) {
            this.errno = errno;
          };
          this.setErrno(errno);
          this.message = 'FS error';
  
        };
        FS.ErrnoError.prototype = new Error();
        FS.ErrnoError.prototype.constructor = FS.ErrnoError;
        // Some errors may happen quite a bit, to avoid overhead we reuse them (and suffer a lack of stack info)
        [44].forEach((code) => {
          FS.genericErrors[code] = new FS.ErrnoError(code);
          FS.genericErrors[code].stack = '<generic error, no stack>';
        });
      },staticInit:() => {
        FS.ensureErrnoError();
  
        FS.nameTable = new Array(4096);
  
        FS.mount(MEMFS, {}, '/');
  
        FS.createDefaultDirectories();
        FS.createDefaultDevices();
        FS.createSpecialDirectories();
  
        FS.filesystems = {
          'MEMFS': MEMFS,
          'IDBFS': IDBFS,
        };
      },init:(input, output, error) => {
        FS.init.initialized = true;
  
        FS.ensureErrnoError();
  
        // Allow Module.stdin etc. to provide defaults, if none explicitly passed to us here
        Module['stdin'] = input || Module['stdin'];
        Module['stdout'] = output || Module['stdout'];
        Module['stderr'] = error || Module['stderr'];
  
        FS.createStandardStreams();
      },quit:() => {
        FS.init.initialized = false;
        // force-flush all streams, so we get musl std streams printed out
        // close all of our streams
        for (var i = 0; i < FS.streams.length; i++) {
          var stream = FS.streams[i];
          if (!stream) {
            continue;
          }
          FS.close(stream);
        }
      },getMode:(canRead, canWrite) => {
        var mode = 0;
        if (canRead) mode |= 292 | 73;
        if (canWrite) mode |= 146;
        return mode;
      },findObject:(path, dontResolveLastLink) => {
        var ret = FS.analyzePath(path, dontResolveLastLink);
        if (!ret.exists) {
          return null;
        }
        return ret.object;
      },analyzePath:(path, dontResolveLastLink) => {
        // operate from within the context of the symlink's target
        try {
          var lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          path = lookup.path;
        } catch (e) {
        }
        var ret = {
          isRoot: false, exists: false, error: 0, name: null, path: null, object: null,
          parentExists: false, parentPath: null, parentObject: null
        };
        try {
          var lookup = FS.lookupPath(path, { parent: true });
          ret.parentExists = true;
          ret.parentPath = lookup.path;
          ret.parentObject = lookup.node;
          ret.name = PATH.basename(path);
          lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          ret.exists = true;
          ret.path = lookup.path;
          ret.object = lookup.node;
          ret.name = lookup.node.name;
          ret.isRoot = lookup.path === '/';
        } catch (e) {
          ret.error = e.errno;
        };
        return ret;
      },createPath:(parent, path, canRead, canWrite) => {
        parent = typeof parent == 'string' ? parent : FS.getPath(parent);
        var parts = path.split('/').reverse();
        while (parts.length) {
          var part = parts.pop();
          if (!part) continue;
          var current = PATH.join2(parent, part);
          try {
            FS.mkdir(current);
          } catch (e) {
            // ignore EEXIST
          }
          parent = current;
        }
        return current;
      },createFile:(parent, name, properties, canRead, canWrite) => {
        var path = PATH.join2(typeof parent == 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(canRead, canWrite);
        return FS.create(path, mode);
      },createDataFile:(parent, name, data, canRead, canWrite, canOwn) => {
        var path = name;
        if (parent) {
          parent = typeof parent == 'string' ? parent : FS.getPath(parent);
          path = name ? PATH.join2(parent, name) : parent;
        }
        var mode = FS.getMode(canRead, canWrite);
        var node = FS.create(path, mode);
        if (data) {
          if (typeof data == 'string') {
            var arr = new Array(data.length);
            for (var i = 0, len = data.length; i < len; ++i) arr[i] = data.charCodeAt(i);
            data = arr;
          }
          // make sure we can write to the file
          FS.chmod(node, mode | 146);
          var stream = FS.open(node, 577);
          FS.write(stream, data, 0, data.length, 0, canOwn);
          FS.close(stream);
          FS.chmod(node, mode);
        }
        return node;
      },createDevice:(parent, name, input, output) => {
        var path = PATH.join2(typeof parent == 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(!!input, !!output);
        if (!FS.createDevice.major) FS.createDevice.major = 64;
        var dev = FS.makedev(FS.createDevice.major++, 0);
        // Create a fake device that a set of stream ops to emulate
        // the old behavior.
        FS.registerDevice(dev, {
          open: (stream) => {
            stream.seekable = false;
          },
          close: (stream) => {
            // flush any pending line data
            if (output && output.buffer && output.buffer.length) {
              output(10);
            }
          },
          read: (stream, buffer, offset, length, pos /* ignored */) => {
            var bytesRead = 0;
            for (var i = 0; i < length; i++) {
              var result;
              try {
                result = input();
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
              if (result === undefined && bytesRead === 0) {
                throw new FS.ErrnoError(6);
              }
              if (result === null || result === undefined) break;
              bytesRead++;
              buffer[offset+i] = result;
            }
            if (bytesRead) {
              stream.node.timestamp = Date.now();
            }
            return bytesRead;
          },
          write: (stream, buffer, offset, length, pos) => {
            for (var i = 0; i < length; i++) {
              try {
                output(buffer[offset+i]);
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
            }
            if (length) {
              stream.node.timestamp = Date.now();
            }
            return i;
          }
        });
        return FS.mkdev(path, mode, dev);
      },forceLoadFile:(obj) => {
        if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
        if (typeof XMLHttpRequest != 'undefined') {
          throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        } else if (read_) {
          // Command-line.
          try {
            // WARNING: Can't read binary files in V8's d8 or tracemonkey's js, as
            //          read() will try to parse UTF8.
            obj.contents = intArrayFromString(read_(obj.url), true);
            obj.usedBytes = obj.contents.length;
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
        } else {
          throw new Error('Cannot load without read() or XMLHttpRequest.');
        }
      },createLazyFile:(parent, name, url, canRead, canWrite) => {
        // Lazy chunked Uint8Array (implements get and length from Uint8Array). Actual getting is abstracted away for eventual reuse.
        /** @constructor */
        function LazyUint8Array() {
          this.lengthKnown = false;
          this.chunks = []; // Loaded chunks. Index is the chunk number
        }
        LazyUint8Array.prototype.get = /** @this{Object} */ function LazyUint8Array_get(idx) {
          if (idx > this.length-1 || idx < 0) {
            return undefined;
          }
          var chunkOffset = idx % this.chunkSize;
          var chunkNum = (idx / this.chunkSize)|0;
          return this.getter(chunkNum)[chunkOffset];
        };
        LazyUint8Array.prototype.setDataGetter = function LazyUint8Array_setDataGetter(getter) {
          this.getter = getter;
        };
        LazyUint8Array.prototype.cacheLength = function LazyUint8Array_cacheLength() {
          // Find length
          var xhr = new XMLHttpRequest();
          xhr.open('HEAD', url, false);
          xhr.send(null);
          if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
          var datalength = Number(xhr.getResponseHeader("Content-length"));
          var header;
          var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
          var usesGzip = (header = xhr.getResponseHeader("Content-Encoding")) && header === "gzip";
  
          var chunkSize = 1024*1024; // Chunk size in bytes
  
          if (!hasByteServing) chunkSize = datalength;
  
          // Function to get a range from the remote URL.
          var doXHR = (from, to) => {
            if (from > to) throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
            if (to > datalength-1) throw new Error("only " + datalength + " bytes available! programmer error!");
  
            // TODO: Use mozResponseArrayBuffer, responseStream, etc. if available.
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, false);
            if (datalength !== chunkSize) xhr.setRequestHeader("Range", "bytes=" + from + "-" + to);
  
            // Some hints to the browser that we want binary data.
            xhr.responseType = 'arraybuffer';
            if (xhr.overrideMimeType) {
              xhr.overrideMimeType('text/plain; charset=x-user-defined');
            }
  
            xhr.send(null);
            if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
            if (xhr.response !== undefined) {
              return new Uint8Array(/** @type{Array<number>} */(xhr.response || []));
            }
            return intArrayFromString(xhr.responseText || '', true);
          };
          var lazyArray = this;
          lazyArray.setDataGetter((chunkNum) => {
            var start = chunkNum * chunkSize;
            var end = (chunkNum+1) * chunkSize - 1; // including this byte
            end = Math.min(end, datalength-1); // if datalength-1 is selected, this is the last block
            if (typeof lazyArray.chunks[chunkNum] == 'undefined') {
              lazyArray.chunks[chunkNum] = doXHR(start, end);
            }
            if (typeof lazyArray.chunks[chunkNum] == 'undefined') throw new Error('doXHR failed!');
            return lazyArray.chunks[chunkNum];
          });
  
          if (usesGzip || !datalength) {
            // if the server uses gzip or doesn't supply the length, we have to download the whole file to get the (uncompressed) length
            chunkSize = datalength = 1; // this will force getter(0)/doXHR do download the whole file
            datalength = this.getter(0).length;
            chunkSize = datalength;
            out("LazyFiles on gzip forces download of the whole file when length is accessed");
          }
  
          this._length = datalength;
          this._chunkSize = chunkSize;
          this.lengthKnown = true;
        };
        if (typeof XMLHttpRequest != 'undefined') {
          if (!ENVIRONMENT_IS_WORKER) throw 'Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc';
          var lazyArray = new LazyUint8Array();
          Object.defineProperties(lazyArray, {
            length: {
              get: /** @this{Object} */ function() {
                if (!this.lengthKnown) {
                  this.cacheLength();
                }
                return this._length;
              }
            },
            chunkSize: {
              get: /** @this{Object} */ function() {
                if (!this.lengthKnown) {
                  this.cacheLength();
                }
                return this._chunkSize;
              }
            }
          });
  
          var properties = { isDevice: false, contents: lazyArray };
        } else {
          var properties = { isDevice: false, url: url };
        }
  
        var node = FS.createFile(parent, name, properties, canRead, canWrite);
        // This is a total hack, but I want to get this lazy file code out of the
        // core of MEMFS. If we want to keep this lazy file concept I feel it should
        // be its own thin LAZYFS proxying calls to MEMFS.
        if (properties.contents) {
          node.contents = properties.contents;
        } else if (properties.url) {
          node.contents = null;
          node.url = properties.url;
        }
        // Add a function that defers querying the file size until it is asked the first time.
        Object.defineProperties(node, {
          usedBytes: {
            get: /** @this {FSNode} */ function() { return this.contents.length; }
          }
        });
        // override each stream op with one that tries to force load the lazy file first
        var stream_ops = {};
        var keys = Object.keys(node.stream_ops);
        keys.forEach((key) => {
          var fn = node.stream_ops[key];
          stream_ops[key] = function forceLoadLazyFile() {
            FS.forceLoadFile(node);
            return fn.apply(null, arguments);
          };
        });
        function writeChunks(stream, buffer, offset, length, position) {
          var contents = stream.node.contents;
          if (position >= contents.length)
            return 0;
          var size = Math.min(contents.length - position, length);
          if (contents.slice) { // normal array
            for (var i = 0; i < size; i++) {
              buffer[offset + i] = contents[position + i];
            }
          } else {
            for (var i = 0; i < size; i++) { // LazyUint8Array from sync binary XHR
              buffer[offset + i] = contents.get(position + i);
            }
          }
          return size;
        }
        // use a custom read function
        stream_ops.read = (stream, buffer, offset, length, position) => {
          FS.forceLoadFile(node);
          return writeChunks(stream, buffer, offset, length, position)
        };
        // use a custom mmap function
        stream_ops.mmap = (stream, length, position, prot, flags) => {
          FS.forceLoadFile(node);
          var ptr = mmapAlloc(length);
          if (!ptr) {
            throw new FS.ErrnoError(48);
          }
          writeChunks(stream, HEAP8, ptr, length, position);
          return { ptr: ptr, allocated: true };
        };
        node.stream_ops = stream_ops;
        return node;
      },createPreloadedFile:(parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) => {
        // TODO we should allow people to just pass in a complete filename instead
        // of parent and name being that we just join them anyways
        var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;
        var dep = getUniqueRunDependency('cp ' + fullname); // might have several active requests for the same fullname
        function processData(byteArray) {
          function finish(byteArray) {
            if (preFinish) preFinish();
            if (!dontCreateFile) {
              FS.createDataFile(parent, name, byteArray, canRead, canWrite, canOwn);
            }
            if (onload) onload();
            removeRunDependency(dep);
          }
          if (Browser.handledByPreloadPlugin(byteArray, fullname, finish, () => {
            if (onerror) onerror();
            removeRunDependency(dep);
          })) {
            return;
          }
          finish(byteArray);
        }
        addRunDependency(dep);
        if (typeof url == 'string') {
          asyncLoad(url, (byteArray) => processData(byteArray), onerror);
        } else {
          processData(url);
        }
      }};
  
  var SYSCALLS = {DEFAULT_POLLMASK:5,calculateAt:function(dirfd, path, allowEmpty) {
        if (PATH.isAbs(path)) {
          return path;
        }
        // relative path
        var dir;
        if (dirfd === -100) {
          dir = FS.cwd();
        } else {
          var dirstream = SYSCALLS.getStreamFromFD(dirfd);
          dir = dirstream.path;
        }
        if (path.length == 0) {
          if (!allowEmpty) {
            throw new FS.ErrnoError(44);;
          }
          return dir;
        }
        return PATH.join2(dir, path);
      },doStat:function(func, path, buf) {
        try {
          var stat = func(path);
        } catch (e) {
          if (e && e.node && PATH.normalize(path) !== PATH.normalize(FS.getPath(e.node))) {
            // an error occurred while trying to look up the path; we should just report ENOTDIR
            return -54;
          }
          throw e;
        }
        HEAP32[((buf)>>2)] = stat.dev;
        HEAP32[(((buf)+(8))>>2)] = stat.ino;
        HEAP32[(((buf)+(12))>>2)] = stat.mode;
        HEAPU32[(((buf)+(16))>>2)] = stat.nlink;
        HEAP32[(((buf)+(20))>>2)] = stat.uid;
        HEAP32[(((buf)+(24))>>2)] = stat.gid;
        HEAP32[(((buf)+(28))>>2)] = stat.rdev;
        (tempI64 = [stat.size>>>0,(tempDouble=stat.size,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((buf)+(40))>>2)] = tempI64[0],HEAP32[(((buf)+(44))>>2)] = tempI64[1]);
        HEAP32[(((buf)+(48))>>2)] = 4096;
        HEAP32[(((buf)+(52))>>2)] = stat.blocks;
        var atime = stat.atime.getTime();
        var mtime = stat.mtime.getTime();
        var ctime = stat.ctime.getTime();
        (tempI64 = [Math.floor(atime / 1000)>>>0,(tempDouble=Math.floor(atime / 1000),(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((buf)+(56))>>2)] = tempI64[0],HEAP32[(((buf)+(60))>>2)] = tempI64[1]);
        HEAPU32[(((buf)+(64))>>2)] = (atime % 1000) * 1000;
        (tempI64 = [Math.floor(mtime / 1000)>>>0,(tempDouble=Math.floor(mtime / 1000),(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((buf)+(72))>>2)] = tempI64[0],HEAP32[(((buf)+(76))>>2)] = tempI64[1]);
        HEAPU32[(((buf)+(80))>>2)] = (mtime % 1000) * 1000;
        (tempI64 = [Math.floor(ctime / 1000)>>>0,(tempDouble=Math.floor(ctime / 1000),(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((buf)+(88))>>2)] = tempI64[0],HEAP32[(((buf)+(92))>>2)] = tempI64[1]);
        HEAPU32[(((buf)+(96))>>2)] = (ctime % 1000) * 1000;
        (tempI64 = [stat.ino>>>0,(tempDouble=stat.ino,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((buf)+(104))>>2)] = tempI64[0],HEAP32[(((buf)+(108))>>2)] = tempI64[1]);
        return 0;
      },doMsync:function(addr, stream, len, flags, offset) {
        if (!FS.isFile(stream.node.mode)) {
          throw new FS.ErrnoError(43);
        }
        if (flags & 2) {
          // MAP_PRIVATE calls need not to be synced back to underlying fs
          return 0;
        }
        var buffer = HEAPU8.slice(addr, addr + len);
        FS.msync(stream, buffer, offset, len, flags);
      },varargs:undefined,get:function() {
        SYSCALLS.varargs += 4;
        var ret = HEAP32[(((SYSCALLS.varargs)-(4))>>2)];
        return ret;
      },getStr:function(ptr) {
        var ret = UTF8ToString(ptr);
        return ret;
      },getStreamFromFD:function(fd) {
        var stream = FS.getStream(fd);
        if (!stream) throw new FS.ErrnoError(8);
        return stream;
      }};
  function ___syscall__newselect(nfds, readfds, writefds, exceptfds, timeout) {
  try {
  
      // readfds are supported,
      // writefds checks socket open status
      // exceptfds not supported
      // timeout is always 0 - fully async
  
      var total = 0;
  
      var srcReadLow = (readfds ? HEAP32[((readfds)>>2)] : 0),
          srcReadHigh = (readfds ? HEAP32[(((readfds)+(4))>>2)] : 0);
      var srcWriteLow = (writefds ? HEAP32[((writefds)>>2)] : 0),
          srcWriteHigh = (writefds ? HEAP32[(((writefds)+(4))>>2)] : 0);
      var srcExceptLow = (exceptfds ? HEAP32[((exceptfds)>>2)] : 0),
          srcExceptHigh = (exceptfds ? HEAP32[(((exceptfds)+(4))>>2)] : 0);
  
      var dstReadLow = 0,
          dstReadHigh = 0;
      var dstWriteLow = 0,
          dstWriteHigh = 0;
      var dstExceptLow = 0,
          dstExceptHigh = 0;
  
      var allLow = (readfds ? HEAP32[((readfds)>>2)] : 0) |
                   (writefds ? HEAP32[((writefds)>>2)] : 0) |
                   (exceptfds ? HEAP32[((exceptfds)>>2)] : 0);
      var allHigh = (readfds ? HEAP32[(((readfds)+(4))>>2)] : 0) |
                    (writefds ? HEAP32[(((writefds)+(4))>>2)] : 0) |
                    (exceptfds ? HEAP32[(((exceptfds)+(4))>>2)] : 0);
  
      var check = function(fd, low, high, val) {
        return (fd < 32 ? (low & val) : (high & val));
      };
  
      for (var fd = 0; fd < nfds; fd++) {
        var mask = 1 << (fd % 32);
        if (!(check(fd, allLow, allHigh, mask))) {
          continue;  // index isn't in the set
        }
  
        var stream = SYSCALLS.getStreamFromFD(fd);
  
        var flags = SYSCALLS.DEFAULT_POLLMASK;
  
        if (stream.stream_ops.poll) {
          flags = stream.stream_ops.poll(stream);
        }
  
        if ((flags & 1) && check(fd, srcReadLow, srcReadHigh, mask)) {
          fd < 32 ? (dstReadLow = dstReadLow | mask) : (dstReadHigh = dstReadHigh | mask);
          total++;
        }
        if ((flags & 4) && check(fd, srcWriteLow, srcWriteHigh, mask)) {
          fd < 32 ? (dstWriteLow = dstWriteLow | mask) : (dstWriteHigh = dstWriteHigh | mask);
          total++;
        }
        if ((flags & 2) && check(fd, srcExceptLow, srcExceptHigh, mask)) {
          fd < 32 ? (dstExceptLow = dstExceptLow | mask) : (dstExceptHigh = dstExceptHigh | mask);
          total++;
        }
      }
  
      if (readfds) {
        HEAP32[((readfds)>>2)] = dstReadLow;
        HEAP32[(((readfds)+(4))>>2)] = dstReadHigh;
      }
      if (writefds) {
        HEAP32[((writefds)>>2)] = dstWriteLow;
        HEAP32[(((writefds)+(4))>>2)] = dstWriteHigh;
      }
      if (exceptfds) {
        HEAP32[((exceptfds)>>2)] = dstExceptLow;
        HEAP32[(((exceptfds)+(4))>>2)] = dstExceptHigh;
      }
  
      return total;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  var SOCKFS = {mount:function(mount) {
        // If Module['websocket'] has already been defined (e.g. for configuring
        // the subprotocol/url) use that, if not initialise it to a new object.
        Module['websocket'] = (Module['websocket'] &&
                               ('object' === typeof Module['websocket'])) ? Module['websocket'] : {};
  
        // Add the Event registration mechanism to the exported websocket configuration
        // object so we can register network callbacks from native JavaScript too.
        // For more documentation see system/include/emscripten/emscripten.h
        Module['websocket']._callbacks = {};
        Module['websocket']['on'] = /** @this{Object} */ function(event, callback) {
          if ('function' === typeof callback) {
            this._callbacks[event] = callback;
          }
          return this;
        };
  
        Module['websocket'].emit = /** @this{Object} */ function(event, param) {
          if ('function' === typeof this._callbacks[event]) {
            this._callbacks[event].call(this, param);
          }
        };
  
        // If debug is enabled register simple default logging callbacks for each Event.
  
        return FS.createNode(null, '/', 16384 | 511 /* 0777 */, 0);
      },createSocket:function(family, type, protocol) {
        type &= ~526336; // Some applications may pass it; it makes no sense for a single process.
        var streaming = type == 1;
        if (streaming && protocol && protocol != 6) {
          throw new FS.ErrnoError(66); // if SOCK_STREAM, must be tcp or 0.
        }
  
        // create our internal socket structure
        var sock = {
          family: family,
          type: type,
          protocol: protocol,
          server: null,
          error: null, // Used in getsockopt for SOL_SOCKET/SO_ERROR test
          peers: {},
          pending: [],
          recv_queue: [],
          sock_ops: SOCKFS.websocket_sock_ops
        };
  
        // create the filesystem node to store the socket structure
        var name = SOCKFS.nextname();
        var node = FS.createNode(SOCKFS.root, name, 49152, 0);
        node.sock = sock;
  
        // and the wrapping stream that enables library functions such
        // as read and write to indirectly interact with the socket
        var stream = FS.createStream({
          path: name,
          node: node,
          flags: 2,
          seekable: false,
          stream_ops: SOCKFS.stream_ops
        });
  
        // map the new stream to the socket structure (sockets have a 1:1
        // relationship with a stream)
        sock.stream = stream;
  
        return sock;
      },getSocket:function(fd) {
        var stream = FS.getStream(fd);
        if (!stream || !FS.isSocket(stream.node.mode)) {
          return null;
        }
        return stream.node.sock;
      },stream_ops:{poll:function(stream) {
          var sock = stream.node.sock;
          return sock.sock_ops.poll(sock);
        },ioctl:function(stream, request, varargs) {
          var sock = stream.node.sock;
          return sock.sock_ops.ioctl(sock, request, varargs);
        },read:function(stream, buffer, offset, length, position /* ignored */) {
          var sock = stream.node.sock;
          var msg = sock.sock_ops.recvmsg(sock, length);
          if (!msg) {
            // socket is closed
            return 0;
          }
          buffer.set(msg.buffer, offset);
          return msg.buffer.length;
        },write:function(stream, buffer, offset, length, position /* ignored */) {
          var sock = stream.node.sock;
          return sock.sock_ops.sendmsg(sock, buffer, offset, length);
        },close:function(stream) {
          var sock = stream.node.sock;
          sock.sock_ops.close(sock);
        }},nextname:function() {
        if (!SOCKFS.nextname.current) {
          SOCKFS.nextname.current = 0;
        }
        return 'socket[' + (SOCKFS.nextname.current++) + ']';
      },websocket_sock_ops:{createPeer:function(sock, addr, port) {
          var ws;
  
          if (typeof addr == 'object') {
            ws = addr;
            addr = null;
            port = null;
          }
  
          if (ws) {
            // for sockets that've already connected (e.g. we're the server)
            // we can inspect the _socket property for the address
            if (ws._socket) {
              addr = ws._socket.remoteAddress;
              port = ws._socket.remotePort;
            }
            // if we're just now initializing a connection to the remote,
            // inspect the url property
            else {
              var result = /ws[s]?:\/\/([^:]+):(\d+)/.exec(ws.url);
              if (!result) {
                throw new Error('WebSocket URL must be in the format ws(s)://address:port');
              }
              addr = result[1];
              port = parseInt(result[2], 10);
            }
          } else {
            // create the actual websocket object and connect
            try {
              // runtimeConfig gets set to true if WebSocket runtime configuration is available.
              var runtimeConfig = (Module['websocket'] && ('object' === typeof Module['websocket']));
  
              // The default value is 'ws://' the replace is needed because the compiler replaces '//' comments with '#'
              // comments without checking context, so we'd end up with ws:#, the replace swaps the '#' for '//' again.
              var url = 'ws:#'.replace('#', '//');
  
              if (runtimeConfig) {
                if ('string' === typeof Module['websocket']['url']) {
                  url = Module['websocket']['url']; // Fetch runtime WebSocket URL config.
                }
              }
  
              if (url === 'ws://' || url === 'wss://') { // Is the supplied URL config just a prefix, if so complete it.
                var parts = addr.split('/');
                url = url + parts[0] + ":" + port + "/" + parts.slice(1).join('/');
              }
  
              // Make the WebSocket subprotocol (Sec-WebSocket-Protocol) default to binary if no configuration is set.
              var subProtocols = 'binary'; // The default value is 'binary'
  
              if (runtimeConfig) {
                if ('string' === typeof Module['websocket']['subprotocol']) {
                  subProtocols = Module['websocket']['subprotocol']; // Fetch runtime WebSocket subprotocol config.
                }
              }
  
              // The default WebSocket options
              var opts = undefined;
  
              if (subProtocols !== 'null') {
                // The regex trims the string (removes spaces at the beginning and end, then splits the string by
                // <any space>,<any space> into an Array. Whitespace removal is important for Websockify and ws.
                subProtocols = subProtocols.replace(/^ +| +$/g,"").split(/ *, */);
  
                opts = subProtocols;
              }
  
              // some webservers (azure) does not support subprotocol header
              if (runtimeConfig && null === Module['websocket']['subprotocol']) {
                subProtocols = 'null';
                opts = undefined;
              }
  
              // If node we use the ws library.
              var WebSocketConstructor;
              {
                WebSocketConstructor = WebSocket;
              }
              ws = new WebSocketConstructor(url, opts);
              ws.binaryType = 'arraybuffer';
            } catch (e) {
              throw new FS.ErrnoError(23);
            }
          }
  
          var peer = {
            addr: addr,
            port: port,
            socket: ws,
            dgram_send_queue: []
          };
  
          SOCKFS.websocket_sock_ops.addPeer(sock, peer);
          SOCKFS.websocket_sock_ops.handlePeerEvents(sock, peer);
  
          // if this is a bound dgram socket, send the port number first to allow
          // us to override the ephemeral port reported to us by remotePort on the
          // remote end.
          if (sock.type === 2 && typeof sock.sport != 'undefined') {
            peer.dgram_send_queue.push(new Uint8Array([
                255, 255, 255, 255,
                'p'.charCodeAt(0), 'o'.charCodeAt(0), 'r'.charCodeAt(0), 't'.charCodeAt(0),
                ((sock.sport & 0xff00) >> 8) , (sock.sport & 0xff)
            ]));
          }
  
          return peer;
        },getPeer:function(sock, addr, port) {
          return sock.peers[addr + ':' + port];
        },addPeer:function(sock, peer) {
          sock.peers[peer.addr + ':' + peer.port] = peer;
        },removePeer:function(sock, peer) {
          delete sock.peers[peer.addr + ':' + peer.port];
        },handlePeerEvents:function(sock, peer) {
          var first = true;
  
          var handleOpen = function () {
  
            Module['websocket'].emit('open', sock.stream.fd);
  
            try {
              var queued = peer.dgram_send_queue.shift();
              while (queued) {
                peer.socket.send(queued);
                queued = peer.dgram_send_queue.shift();
              }
            } catch (e) {
              // not much we can do here in the way of proper error handling as we've already
              // lied and said this data was sent. shut it down.
              peer.socket.close();
            }
          };
  
          function handleMessage(data) {
            if (typeof data == 'string') {
              var encoder = new TextEncoder(); // should be utf-8
              data = encoder.encode(data); // make a typed array from the string
            } else {
              assert(data.byteLength !== undefined); // must receive an ArrayBuffer
              if (data.byteLength == 0) {
                // An empty ArrayBuffer will emit a pseudo disconnect event
                // as recv/recvmsg will return zero which indicates that a socket
                // has performed a shutdown although the connection has not been disconnected yet.
                return;
              }
              data = new Uint8Array(data); // make a typed array view on the array buffer
            }
  
            // if this is the port message, override the peer's port with it
            var wasfirst = first;
            first = false;
            if (wasfirst &&
                data.length === 10 &&
                data[0] === 255 && data[1] === 255 && data[2] === 255 && data[3] === 255 &&
                data[4] === 'p'.charCodeAt(0) && data[5] === 'o'.charCodeAt(0) && data[6] === 'r'.charCodeAt(0) && data[7] === 't'.charCodeAt(0)) {
              // update the peer's port and it's key in the peer map
              var newport = ((data[8] << 8) | data[9]);
              SOCKFS.websocket_sock_ops.removePeer(sock, peer);
              peer.port = newport;
              SOCKFS.websocket_sock_ops.addPeer(sock, peer);
              return;
            }
  
            sock.recv_queue.push({ addr: peer.addr, port: peer.port, data: data });
            Module['websocket'].emit('message', sock.stream.fd);
          };
  
          if (ENVIRONMENT_IS_NODE) {
            peer.socket.on('open', handleOpen);
            peer.socket.on('message', function(data, isBinary) {
              if (!isBinary) {
                return;
              }
              handleMessage((new Uint8Array(data)).buffer); // copy from node Buffer -> ArrayBuffer
            });
            peer.socket.on('close', function() {
              Module['websocket'].emit('close', sock.stream.fd);
            });
            peer.socket.on('error', function(error) {
              // Although the ws library may pass errors that may be more descriptive than
              // ECONNREFUSED they are not necessarily the expected error code e.g.
              // ENOTFOUND on getaddrinfo seems to be node.js specific, so using ECONNREFUSED
              // is still probably the most useful thing to do.
              sock.error = 14; // Used in getsockopt for SOL_SOCKET/SO_ERROR test.
              Module['websocket'].emit('error', [sock.stream.fd, sock.error, 'ECONNREFUSED: Connection refused']);
              // don't throw
            });
          } else {
            peer.socket.onopen = handleOpen;
            peer.socket.onclose = function() {
              Module['websocket'].emit('close', sock.stream.fd);
            };
            peer.socket.onmessage = function peer_socket_onmessage(event) {
              handleMessage(event.data);
            };
            peer.socket.onerror = function(error) {
              // The WebSocket spec only allows a 'simple event' to be thrown on error,
              // so we only really know as much as ECONNREFUSED.
              sock.error = 14; // Used in getsockopt for SOL_SOCKET/SO_ERROR test.
              Module['websocket'].emit('error', [sock.stream.fd, sock.error, 'ECONNREFUSED: Connection refused']);
            };
          }
        },poll:function(sock) {
          if (sock.type === 1 && sock.server) {
            // listen sockets should only say they're available for reading
            // if there are pending clients.
            return sock.pending.length ? (64 | 1) : 0;
          }
  
          var mask = 0;
          var dest = sock.type === 1 ?  // we only care about the socket state for connection-based sockets
            SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport) :
            null;
  
          if (sock.recv_queue.length ||
              !dest ||  // connection-less sockets are always ready to read
              (dest && dest.socket.readyState === dest.socket.CLOSING) ||
              (dest && dest.socket.readyState === dest.socket.CLOSED)) {  // let recv return 0 once closed
            mask |= (64 | 1);
          }
  
          if (!dest ||  // connection-less sockets are always ready to write
              (dest && dest.socket.readyState === dest.socket.OPEN)) {
            mask |= 4;
          }
  
          if ((dest && dest.socket.readyState === dest.socket.CLOSING) ||
              (dest && dest.socket.readyState === dest.socket.CLOSED)) {
            mask |= 16;
          }
  
          return mask;
        },ioctl:function(sock, request, arg) {
          switch (request) {
            case 21531:
              var bytes = 0;
              if (sock.recv_queue.length) {
                bytes = sock.recv_queue[0].data.length;
              }
              HEAP32[((arg)>>2)] = bytes;
              return 0;
            default:
              return 28;
          }
        },close:function(sock) {
          // if we've spawned a listen server, close it
          if (sock.server) {
            try {
              sock.server.close();
            } catch (e) {
            }
            sock.server = null;
          }
          // close any peer connections
          var peers = Object.keys(sock.peers);
          for (var i = 0; i < peers.length; i++) {
            var peer = sock.peers[peers[i]];
            try {
              peer.socket.close();
            } catch (e) {
            }
            SOCKFS.websocket_sock_ops.removePeer(sock, peer);
          }
          return 0;
        },bind:function(sock, addr, port) {
          if (typeof sock.saddr != 'undefined' || typeof sock.sport != 'undefined') {
            throw new FS.ErrnoError(28);  // already bound
          }
          sock.saddr = addr;
          sock.sport = port;
          // in order to emulate dgram sockets, we need to launch a listen server when
          // binding on a connection-less socket
          // note: this is only required on the server side
          if (sock.type === 2) {
            // close the existing server if it exists
            if (sock.server) {
              sock.server.close();
              sock.server = null;
            }
            // swallow error operation not supported error that occurs when binding in the
            // browser where this isn't supported
            try {
              sock.sock_ops.listen(sock, 0);
            } catch (e) {
              if (!(e.name === 'ErrnoError')) throw e;
              if (e.errno !== 138) throw e;
            }
          }
        },connect:function(sock, addr, port) {
          if (sock.server) {
            throw new FS.ErrnoError(138);
          }
  
          // TODO autobind
          // if (!sock.addr && sock.type == 2) {
          // }
  
          // early out if we're already connected / in the middle of connecting
          if (typeof sock.daddr != 'undefined' && typeof sock.dport != 'undefined') {
            var dest = SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport);
            if (dest) {
              if (dest.socket.readyState === dest.socket.CONNECTING) {
                throw new FS.ErrnoError(7);
              } else {
                throw new FS.ErrnoError(30);
              }
            }
          }
  
          // add the socket to our peer list and set our
          // destination address / port to match
          var peer = SOCKFS.websocket_sock_ops.createPeer(sock, addr, port);
          sock.daddr = peer.addr;
          sock.dport = peer.port;
  
          // always "fail" in non-blocking mode
          throw new FS.ErrnoError(26);
        },listen:function(sock, backlog) {
          if (!ENVIRONMENT_IS_NODE) {
            throw new FS.ErrnoError(138);
          }
        },accept:function(listensock) {
          if (!listensock.server || !listensock.pending.length) {
            throw new FS.ErrnoError(28);
          }
          var newsock = listensock.pending.shift();
          newsock.stream.flags = listensock.stream.flags;
          return newsock;
        },getname:function(sock, peer) {
          var addr, port;
          if (peer) {
            if (sock.daddr === undefined || sock.dport === undefined) {
              throw new FS.ErrnoError(53);
            }
            addr = sock.daddr;
            port = sock.dport;
          } else {
            // TODO saddr and sport will be set for bind()'d UDP sockets, but what
            // should we be returning for TCP sockets that've been connect()'d?
            addr = sock.saddr || 0;
            port = sock.sport || 0;
          }
          return { addr: addr, port: port };
        },sendmsg:function(sock, buffer, offset, length, addr, port) {
          if (sock.type === 2) {
            // connection-less sockets will honor the message address,
            // and otherwise fall back to the bound destination address
            if (addr === undefined || port === undefined) {
              addr = sock.daddr;
              port = sock.dport;
            }
            // if there was no address to fall back to, error out
            if (addr === undefined || port === undefined) {
              throw new FS.ErrnoError(17);
            }
          } else {
            // connection-based sockets will only use the bound
            addr = sock.daddr;
            port = sock.dport;
          }
  
          // find the peer for the destination address
          var dest = SOCKFS.websocket_sock_ops.getPeer(sock, addr, port);
  
          // early out if not connected with a connection-based socket
          if (sock.type === 1) {
            if (!dest || dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
              throw new FS.ErrnoError(53);
            } else if (dest.socket.readyState === dest.socket.CONNECTING) {
              throw new FS.ErrnoError(6);
            }
          }
  
          // create a copy of the incoming data to send, as the WebSocket API
          // doesn't work entirely with an ArrayBufferView, it'll just send
          // the entire underlying buffer
          if (ArrayBuffer.isView(buffer)) {
            offset += buffer.byteOffset;
            buffer = buffer.buffer;
          }
  
          var data;
            data = buffer.slice(offset, offset + length);
  
          // if we're emulating a connection-less dgram socket and don't have
          // a cached connection, queue the buffer to send upon connect and
          // lie, saying the data was sent now.
          if (sock.type === 2) {
            if (!dest || dest.socket.readyState !== dest.socket.OPEN) {
              // if we're not connected, open a new connection
              if (!dest || dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
                dest = SOCKFS.websocket_sock_ops.createPeer(sock, addr, port);
              }
              dest.dgram_send_queue.push(data);
              return length;
            }
          }
  
          try {
            // send the actual data
            dest.socket.send(data);
            return length;
          } catch (e) {
            throw new FS.ErrnoError(28);
          }
        },recvmsg:function(sock, length) {
          // http://pubs.opengroup.org/onlinepubs/7908799/xns/recvmsg.html
          if (sock.type === 1 && sock.server) {
            // tcp servers should not be recv()'ing on the listen socket
            throw new FS.ErrnoError(53);
          }
  
          var queued = sock.recv_queue.shift();
          if (!queued) {
            if (sock.type === 1) {
              var dest = SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport);
  
              if (!dest) {
                // if we have a destination address but are not connected, error out
                throw new FS.ErrnoError(53);
              }
              if (dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
                // return null if the socket has closed
                return null;
              }
              // else, our socket is in a valid state but truly has nothing available
              throw new FS.ErrnoError(6);
            }
            throw new FS.ErrnoError(6);
          }
  
          // queued.data will be an ArrayBuffer if it's unadulterated, but if it's
          // requeued TCP data it'll be an ArrayBufferView
          var queuedLength = queued.data.byteLength || queued.data.length;
          var queuedOffset = queued.data.byteOffset || 0;
          var queuedBuffer = queued.data.buffer || queued.data;
          var bytesRead = Math.min(length, queuedLength);
          var res = {
            buffer: new Uint8Array(queuedBuffer, queuedOffset, bytesRead),
            addr: queued.addr,
            port: queued.port
          };
  
          // push back any unread data for TCP connections
          if (sock.type === 1 && bytesRead < queuedLength) {
            var bytesRemaining = queuedLength - bytesRead;
            queued.data = new Uint8Array(queuedBuffer, queuedOffset + bytesRead, bytesRemaining);
            sock.recv_queue.unshift(queued);
          }
  
          return res;
        }}};
  
  function getSocketFromFD(fd) {
      var socket = SOCKFS.getSocket(fd);
      if (!socket) throw new FS.ErrnoError(8);
      return socket;
    }
  
  function setErrNo(value) {
      HEAP32[((___errno_location())>>2)] = value;
      return value;
    }
  var Sockets = {BUFFER_SIZE:10240,MAX_BUFFER_SIZE:10485760,nextFd:1,fds:{},nextport:1,maxport:65535,peer:null,connections:{},portmap:{},localAddr:4261412874,addrPool:[33554442,50331658,67108874,83886090,100663306,117440522,134217738,150994954,167772170,184549386,201326602,218103818,234881034]};
  
  function inetPton4(str) {
      var b = str.split('.');
      for (var i = 0; i < 4; i++) {
        var tmp = Number(b[i]);
        if (isNaN(tmp)) return null;
        b[i] = tmp;
      }
      return (b[0] | (b[1] << 8) | (b[2] << 16) | (b[3] << 24)) >>> 0;
    }
  
  
  /** @suppress {checkTypes} */
  function jstoi_q(str) {
      return parseInt(str);
    }
  function inetPton6(str) {
      var words;
      var w, offset, z, i;
      /* http://home.deds.nl/~aeron/regex/ */
      var valid6regx = /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i
      var parts = [];
      if (!valid6regx.test(str)) {
        return null;
      }
      if (str === "::") {
        return [0, 0, 0, 0, 0, 0, 0, 0];
      }
      // Z placeholder to keep track of zeros when splitting the string on ":"
      if (str.startsWith("::")) {
        str = str.replace("::", "Z:"); // leading zeros case
      } else {
        str = str.replace("::", ":Z:");
      }
  
      if (str.indexOf(".") > 0) {
        // parse IPv4 embedded stress
        str = str.replace(new RegExp('[.]', 'g'), ":");
        words = str.split(":");
        words[words.length-4] = jstoi_q(words[words.length-4]) + jstoi_q(words[words.length-3])*256;
        words[words.length-3] = jstoi_q(words[words.length-2]) + jstoi_q(words[words.length-1])*256;
        words = words.slice(0, words.length-2);
      } else {
        words = str.split(":");
      }
  
      offset = 0; z = 0;
      for (w=0; w < words.length; w++) {
        if (typeof words[w] == 'string') {
          if (words[w] === 'Z') {
            // compressed zeros - write appropriate number of zero words
            for (z = 0; z < (8 - words.length+1); z++) {
              parts[w+z] = 0;
            }
            offset = z-1;
          } else {
            // parse hex to field to 16-bit value and write it in network byte-order
            parts[w+offset] = _htons(parseInt(words[w],16));
          }
        } else {
          // parsed IPv4 words
          parts[w+offset] = words[w];
        }
      }
      return [
        (parts[1] << 16) | parts[0],
        (parts[3] << 16) | parts[2],
        (parts[5] << 16) | parts[4],
        (parts[7] << 16) | parts[6]
      ];
    }
  
  /** @param {number=} addrlen */
  function writeSockaddr(sa, family, addr, port, addrlen) {
      switch (family) {
        case 2:
          addr = inetPton4(addr);
          zeroMemory(sa, 16);
          if (addrlen) {
            HEAP32[((addrlen)>>2)] = 16;
          }
          HEAP16[((sa)>>1)] = family;
          HEAP32[(((sa)+(4))>>2)] = addr;
          HEAP16[(((sa)+(2))>>1)] = _htons(port);
          break;
        case 10:
          addr = inetPton6(addr);
          zeroMemory(sa, 28);
          if (addrlen) {
            HEAP32[((addrlen)>>2)] = 28;
          }
          HEAP32[((sa)>>2)] = family;
          HEAP32[(((sa)+(8))>>2)] = addr[0];
          HEAP32[(((sa)+(12))>>2)] = addr[1];
          HEAP32[(((sa)+(16))>>2)] = addr[2];
          HEAP32[(((sa)+(20))>>2)] = addr[3];
          HEAP16[(((sa)+(2))>>1)] = _htons(port);
          break;
        default:
          return 5;
      }
      return 0;
    }
  
  
  var DNS = {address_map:{id:1,addrs:{},names:{}},lookup_name:function (name) {
        // If the name is already a valid ipv4 / ipv6 address, don't generate a fake one.
        var res = inetPton4(name);
        if (res !== null) {
          return name;
        }
        res = inetPton6(name);
        if (res !== null) {
          return name;
        }
  
        // See if this name is already mapped.
        var addr;
  
        if (DNS.address_map.addrs[name]) {
          addr = DNS.address_map.addrs[name];
        } else {
          var id = DNS.address_map.id++;
          assert(id < 65535, 'exceeded max address mappings of 65535');
  
          addr = '172.29.' + (id & 0xff) + '.' + (id & 0xff00);
  
          DNS.address_map.names[addr] = name;
          DNS.address_map.addrs[name] = addr;
        }
  
        return addr;
      },lookup_addr:function (addr) {
        if (DNS.address_map.names[addr]) {
          return DNS.address_map.names[addr];
        }
  
        return null;
      }};
  
  function ___syscall_accept4(fd, addr, addrlen, flags, d1, d2) {
  try {
  
      var sock = getSocketFromFD(fd);
      var newsock = sock.sock_ops.accept(sock);
      if (addr) {
        var errno = writeSockaddr(addr, newsock.family, DNS.lookup_name(newsock.daddr), newsock.dport, addrlen);
      }
      return newsock.stream.fd;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  
  
  function inetNtop4(addr) {
      return (addr & 0xff) + '.' + ((addr >> 8) & 0xff) + '.' + ((addr >> 16) & 0xff) + '.' + ((addr >> 24) & 0xff)
    }
  
  
  function inetNtop6(ints) {
      //  ref:  http://www.ietf.org/rfc/rfc2373.txt - section 2.5.4
      //  Format for IPv4 compatible and mapped  128-bit IPv6 Addresses
      //  128-bits are split into eight 16-bit words
      //  stored in network byte order (big-endian)
      //  |                80 bits               | 16 |      32 bits        |
      //  +-----------------------------------------------------------------+
      //  |               10 bytes               |  2 |      4 bytes        |
      //  +--------------------------------------+--------------------------+
      //  +               5 words                |  1 |      2 words        |
      //  +--------------------------------------+--------------------------+
      //  |0000..............................0000|0000|    IPv4 ADDRESS     | (compatible)
      //  +--------------------------------------+----+---------------------+
      //  |0000..............................0000|FFFF|    IPv4 ADDRESS     | (mapped)
      //  +--------------------------------------+----+---------------------+
      var str = "";
      var word = 0;
      var longest = 0;
      var lastzero = 0;
      var zstart = 0;
      var len = 0;
      var i = 0;
      var parts = [
        ints[0] & 0xffff,
        (ints[0] >> 16),
        ints[1] & 0xffff,
        (ints[1] >> 16),
        ints[2] & 0xffff,
        (ints[2] >> 16),
        ints[3] & 0xffff,
        (ints[3] >> 16)
      ];
  
      // Handle IPv4-compatible, IPv4-mapped, loopback and any/unspecified addresses
  
      var hasipv4 = true;
      var v4part = "";
      // check if the 10 high-order bytes are all zeros (first 5 words)
      for (i = 0; i < 5; i++) {
        if (parts[i] !== 0) { hasipv4 = false; break; }
      }
  
      if (hasipv4) {
        // low-order 32-bits store an IPv4 address (bytes 13 to 16) (last 2 words)
        v4part = inetNtop4(parts[6] | (parts[7] << 16));
        // IPv4-mapped IPv6 address if 16-bit value (bytes 11 and 12) == 0xFFFF (6th word)
        if (parts[5] === -1) {
          str = "::ffff:";
          str += v4part;
          return str;
        }
        // IPv4-compatible IPv6 address if 16-bit value (bytes 11 and 12) == 0x0000 (6th word)
        if (parts[5] === 0) {
          str = "::";
          //special case IPv6 addresses
          if (v4part === "0.0.0.0") v4part = ""; // any/unspecified address
          if (v4part === "0.0.0.1") v4part = "1";// loopback address
          str += v4part;
          return str;
        }
      }
  
      // Handle all other IPv6 addresses
  
      // first run to find the longest contiguous zero words
      for (word = 0; word < 8; word++) {
        if (parts[word] === 0) {
          if (word - lastzero > 1) {
            len = 0;
          }
          lastzero = word;
          len++;
        }
        if (len > longest) {
          longest = len;
          zstart = word - longest + 1;
        }
      }
  
      for (word = 0; word < 8; word++) {
        if (longest > 1) {
          // compress contiguous zeros - to produce "::"
          if (parts[word] === 0 && word >= zstart && word < (zstart + longest) ) {
            if (word === zstart) {
              str += ":";
              if (zstart === 0) str += ":"; //leading zeros case
            }
            continue;
          }
        }
        // converts 16-bit words from big-endian to little-endian before converting to hex string
        str += Number(_ntohs(parts[word] & 0xffff)).toString(16);
        str += word < 7 ? ":" : "";
      }
      return str;
    }
  
  function readSockaddr(sa, salen) {
      // family / port offsets are common to both sockaddr_in and sockaddr_in6
      var family = HEAP16[((sa)>>1)];
      var port = _ntohs(HEAPU16[(((sa)+(2))>>1)]);
      var addr;
  
      switch (family) {
        case 2:
          if (salen !== 16) {
            return { errno: 28 };
          }
          addr = HEAP32[(((sa)+(4))>>2)];
          addr = inetNtop4(addr);
          break;
        case 10:
          if (salen !== 28) {
            return { errno: 28 };
          }
          addr = [
            HEAP32[(((sa)+(8))>>2)],
            HEAP32[(((sa)+(12))>>2)],
            HEAP32[(((sa)+(16))>>2)],
            HEAP32[(((sa)+(20))>>2)]
          ];
          addr = inetNtop6(addr);
          break;
        default:
          return { errno: 5 };
      }
  
      return { family: family, addr: addr, port: port };
    }
  
  
  /** @param {boolean=} allowNull */
  function getSocketAddress(addrp, addrlen, allowNull) {
      if (allowNull && addrp === 0) return null;
      var info = readSockaddr(addrp, addrlen);
      if (info.errno) throw new FS.ErrnoError(info.errno);
      info.addr = DNS.lookup_addr(info.addr) || info.addr;
      return info;
    }
  
  function ___syscall_bind(fd, addr, addrlen, d1, d2, d3) {
  try {
  
      var sock = getSocketFromFD(fd);
      var info = getSocketAddress(addr, addrlen);
      sock.sock_ops.bind(sock, info.addr, info.port);
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  function ___syscall_chdir(path) {
  try {
  
      path = SYSCALLS.getStr(path);
      FS.chdir(path);
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  function ___syscall_chmod(path, mode) {
  try {
  
      path = SYSCALLS.getStr(path);
      FS.chmod(path, mode);
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  
  
  function ___syscall_connect(fd, addr, addrlen, d1, d2, d3) {
  try {
  
      var sock = getSocketFromFD(fd);
      var info = getSocketAddress(addr, addrlen);
      sock.sock_ops.connect(sock, info.addr, info.port);
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  function ___syscall_dup(fd) {
  try {
  
      var old = SYSCALLS.getStreamFromFD(fd);
      return FS.createStream(old, 0).fd;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  function ___syscall_faccessat(dirfd, path, amode, flags) {
  try {
  
      path = SYSCALLS.getStr(path);
      path = SYSCALLS.calculateAt(dirfd, path);
      if (amode & ~7) {
        // need a valid mode
        return -28;
      }
      var lookup = FS.lookupPath(path, { follow: true });
      var node = lookup.node;
      if (!node) {
        return -44;
      }
      var perms = '';
      if (amode & 4) perms += 'r';
      if (amode & 2) perms += 'w';
      if (amode & 1) perms += 'x';
      if (perms /* otherwise, they've just passed F_OK */ && FS.nodePermissions(node, perms)) {
        return -2;
      }
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  function ___syscall_fchmod(fd, mode) {
  try {
  
      FS.fchmod(fd, mode);
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  function ___syscall_fchown32(fd, owner, group) {
  try {
  
      FS.fchown(fd, owner, group);
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  function ___syscall_fchownat(dirfd, path, owner, group, flags) {
  try {
  
      path = SYSCALLS.getStr(path);
      var nofollow = flags & 256;
      flags = flags & (~256);
      path = SYSCALLS.calculateAt(dirfd, path);
      (nofollow ? FS.lchown : FS.chown)(path, owner, group);
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  
  function ___syscall_fcntl64(fd, cmd, varargs) {
  SYSCALLS.varargs = varargs;
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      switch (cmd) {
        case 0: {
          var arg = SYSCALLS.get();
          if (arg < 0) {
            return -28;
          }
          var newStream;
          newStream = FS.createStream(stream, arg);
          return newStream.fd;
        }
        case 1:
        case 2:
          return 0;  // FD_CLOEXEC makes no sense for a single process.
        case 3:
          return stream.flags;
        case 4: {
          var arg = SYSCALLS.get();
          stream.flags |= arg;
          return 0;
        }
        case 5:
        /* case 5: Currently in musl F_GETLK64 has same value as F_GETLK, so omitted to avoid duplicate case blocks. If that changes, uncomment this */ {
          
          var arg = SYSCALLS.get();
          var offset = 0;
          // We're always unlocked.
          HEAP16[(((arg)+(offset))>>1)] = 2;
          return 0;
        }
        case 6:
        case 7:
        /* case 6: Currently in musl F_SETLK64 has same value as F_SETLK, so omitted to avoid duplicate case blocks. If that changes, uncomment this */
        /* case 7: Currently in musl F_SETLKW64 has same value as F_SETLKW, so omitted to avoid duplicate case blocks. If that changes, uncomment this */
          
          
          return 0; // Pretend that the locking is successful.
        case 16:
        case 8:
          return -28; // These are for sockets. We don't have them fully implemented yet.
        case 9:
          // musl trusts getown return values, due to a bug where they must be, as they overlap with errors. just return -1 here, so fcntl() returns that, and we set errno ourselves.
          setErrNo(28);
          return -1;
        default: {
          return -28;
        }
      }
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  function ___syscall_fdatasync(fd) {
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      return 0; // we can't do anything synchronously; the in-memory FS is already synced to
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  function ___syscall_fstat64(fd, buf) {
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      return SYSCALLS.doStat(FS.stat, stream.path, buf);
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  function convertI32PairToI53Checked(lo, hi) {
      return ((hi + 0x200000) >>> 0 < 0x400001 - !!lo) ? (lo >>> 0) + hi * 4294967296 : NaN;
    }
  
  
  
  
  function ___syscall_ftruncate64(fd, length_low, length_high) {
  try {
  
      var length = convertI32PairToI53Checked(length_low, length_high); if (isNaN(length)) return -61;
      FS.ftruncate(fd, length);
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  
  function stringToUTF8(str, outPtr, maxBytesToWrite) {
      return stringToUTF8Array(str, HEAPU8,outPtr, maxBytesToWrite);
    }
  
  function ___syscall_getcwd(buf, size) {
  try {
  
      if (size === 0) return -28;
      var cwd = FS.cwd();
      var cwdLengthInBytes = lengthBytesUTF8(cwd) + 1;
      if (size < cwdLengthInBytes) return -68;
      stringToUTF8(cwd, buf, size);
      return cwdLengthInBytes;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  
  function ___syscall_getdents64(fd, dirp, count) {
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd)
      if (!stream.getdents) {
        stream.getdents = FS.readdir(stream.path);
      }
  
      var struct_size = 280;
      var pos = 0;
      var off = FS.llseek(stream, 0, 1);
  
      var idx = Math.floor(off / struct_size);
  
      while (idx < stream.getdents.length && pos + struct_size <= count) {
        var id;
        var type;
        var name = stream.getdents[idx];
        if (name === '.') {
          id = stream.node.id;
          type = 4; // DT_DIR
        }
        else if (name === '..') {
          var lookup = FS.lookupPath(stream.path, { parent: true });
          id = lookup.node.id;
          type = 4; // DT_DIR
        }
        else {
          var child = FS.lookupNode(stream.node, name);
          id = child.id;
          type = FS.isChrdev(child.mode) ? 2 :  // DT_CHR, character device.
                 FS.isDir(child.mode) ? 4 :     // DT_DIR, directory.
                 FS.isLink(child.mode) ? 10 :   // DT_LNK, symbolic link.
                 8;                             // DT_REG, regular file.
        }
        (tempI64 = [id>>>0,(tempDouble=id,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((dirp + pos)>>2)] = tempI64[0],HEAP32[(((dirp + pos)+(4))>>2)] = tempI64[1]);
        (tempI64 = [(idx + 1) * struct_size>>>0,(tempDouble=(idx + 1) * struct_size,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((dirp + pos)+(8))>>2)] = tempI64[0],HEAP32[(((dirp + pos)+(12))>>2)] = tempI64[1]);
        HEAP16[(((dirp + pos)+(16))>>1)] = 280;
        HEAP8[(((dirp + pos)+(18))>>0)] = type;
        stringToUTF8(name, dirp + pos + 19, 256);
        pos += struct_size;
        idx += 1;
      }
      FS.llseek(stream, idx * struct_size, 0);
      return pos;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  
  
  
  function ___syscall_getpeername(fd, addr, addrlen, d1, d2, d3) {
  try {
  
      var sock = getSocketFromFD(fd);
      if (!sock.daddr) {
        return -53; // The socket is not connected.
      }
      var errno = writeSockaddr(addr, sock.family, DNS.lookup_name(sock.daddr), sock.dport, addrlen);
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  
  
  
  function ___syscall_getsockname(fd, addr, addrlen, d1, d2, d3) {
  try {
  
      err("__syscall_getsockname " + fd);
      var sock = getSocketFromFD(fd);
      // TODO: sock.saddr should never be undefined, see TODO in websocket_sock_ops.getname
      var errno = writeSockaddr(addr, sock.family, DNS.lookup_name(sock.saddr || '0.0.0.0'), sock.sport, addrlen);
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  
  function ___syscall_getsockopt(fd, level, optname, optval, optlen, d1) {
  try {
  
      var sock = getSocketFromFD(fd);
      // Minimal getsockopt aimed at resolving https://github.com/emscripten-core/emscripten/issues/2211
      // so only supports SOL_SOCKET with SO_ERROR.
      if (level === 1) {
        if (optname === 4) {
          HEAP32[((optval)>>2)] = sock.error;
          HEAP32[((optlen)>>2)] = 4;
          sock.error = null; // Clear the error (The SO_ERROR option obtains and then clears this field).
          return 0;
        }
      }
      return -50; // The option is unknown at the level indicated.
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  function ___syscall_ioctl(fd, op, varargs) {
  SYSCALLS.varargs = varargs;
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      switch (op) {
        case 21509:
        case 21505: {
          if (!stream.tty) return -59;
          return 0;
        }
        case 21510:
        case 21511:
        case 21512:
        case 21506:
        case 21507:
        case 21508: {
          if (!stream.tty) return -59;
          return 0; // no-op, not actually adjusting terminal settings
        }
        case 21519: {
          if (!stream.tty) return -59;
          var argp = SYSCALLS.get();
          HEAP32[((argp)>>2)] = 0;
          return 0;
        }
        case 21520: {
          if (!stream.tty) return -59;
          return -28; // not supported
        }
        case 21531: {
          var argp = SYSCALLS.get();
          return FS.ioctl(stream, op, argp);
        }
        case 21523: {
          // TODO: in theory we should write to the winsize struct that gets
          // passed in, but for now musl doesn't read anything on it
          if (!stream.tty) return -59;
          return 0;
        }
        case 21524: {
          // TODO: technically, this ioctl call should change the window size.
          // but, since emscripten doesn't have any concept of a terminal window
          // yet, we'll just silently throw it away as we do TIOCGWINSZ
          if (!stream.tty) return -59;
          return 0;
        }
        default: return -28; // not supported
      }
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  
  function ___syscall_listen(fd, backlog) {
  try {
  
      var sock = getSocketFromFD(fd);
      sock.sock_ops.listen(sock, backlog);
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  function ___syscall_lstat64(path, buf) {
  try {
  
      path = SYSCALLS.getStr(path);
      return SYSCALLS.doStat(FS.lstat, path, buf);
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  function ___syscall_mkdirat(dirfd, path, mode) {
  try {
  
      path = SYSCALLS.getStr(path);
      path = SYSCALLS.calculateAt(dirfd, path);
      // remove a trailing slash, if one - /a/b/ has basename of '', but
      // we want to create b in the context of this function
      path = PATH.normalize(path);
      if (path[path.length-1] === '/') path = path.substr(0, path.length-1);
      FS.mkdir(path, mode, 0);
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  function ___syscall_newfstatat(dirfd, path, buf, flags) {
  try {
  
      path = SYSCALLS.getStr(path);
      var nofollow = flags & 256;
      var allowEmpty = flags & 4096;
      flags = flags & (~6400);
      path = SYSCALLS.calculateAt(dirfd, path, allowEmpty);
      return SYSCALLS.doStat(nofollow ? FS.lstat : FS.stat, path, buf);
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  function ___syscall_openat(dirfd, path, flags, varargs) {
  SYSCALLS.varargs = varargs;
  try {
  
      path = SYSCALLS.getStr(path);
      path = SYSCALLS.calculateAt(dirfd, path);
      var mode = varargs ? SYSCALLS.get() : 0;
      return FS.open(path, flags, mode).fd;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  var PIPEFS = {BUCKET_BUFFER_SIZE:8192,mount:function (mount) {
        // Do not pollute the real root directory or its child nodes with pipes
        // Looks like it is OK to create another pseudo-root node not linked to the FS.root hierarchy this way
        return FS.createNode(null, '/', 16384 | 511 /* 0777 */, 0);
      },createPipe:function () {
        var pipe = {
          buckets: [],
          // refcnt 2 because pipe has a read end and a write end. We need to be
          // able to read from the read end after write end is closed.
          refcnt : 2,
        };
  
        pipe.buckets.push({
          buffer: new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE),
          offset: 0,
          roffset: 0
        });
  
        var rName = PIPEFS.nextname();
        var wName = PIPEFS.nextname();
        var rNode = FS.createNode(PIPEFS.root, rName, 4096, 0);
        var wNode = FS.createNode(PIPEFS.root, wName, 4096, 0);
  
        rNode.pipe = pipe;
        wNode.pipe = pipe;
  
        var readableStream = FS.createStream({
          path: rName,
          node: rNode,
          flags: 0,
          seekable: false,
          stream_ops: PIPEFS.stream_ops
        });
        rNode.stream = readableStream;
  
        var writableStream = FS.createStream({
          path: wName,
          node: wNode,
          flags: 1,
          seekable: false,
          stream_ops: PIPEFS.stream_ops
        });
        wNode.stream = writableStream;
  
        return {
          readable_fd: readableStream.fd,
          writable_fd: writableStream.fd
        };
      },stream_ops:{poll:function (stream) {
          var pipe = stream.node.pipe;
  
          if ((stream.flags & 2097155) === 1) {
            return (256 | 4);
          }
          if (pipe.buckets.length > 0) {
            for (var i = 0; i < pipe.buckets.length; i++) {
              var bucket = pipe.buckets[i];
              if (bucket.offset - bucket.roffset > 0) {
                return (64 | 1);
              }
            }
          }
  
          return 0;
        },ioctl:function (stream, request, varargs) {
          return 28;
        },fsync:function (stream) {
          return 28;
        },read:function (stream, buffer, offset, length, position /* ignored */) {
          var pipe = stream.node.pipe;
          var currentLength = 0;
  
          for (var i = 0; i < pipe.buckets.length; i++) {
            var bucket = pipe.buckets[i];
            currentLength += bucket.offset - bucket.roffset;
          }
  
          assert(buffer instanceof ArrayBuffer || ArrayBuffer.isView(buffer));
          var data = buffer.subarray(offset, offset + length);
  
          if (length <= 0) {
            return 0;
          }
          if (currentLength == 0) {
            // Behave as if the read end is always non-blocking
            throw new FS.ErrnoError(6);
          }
          var toRead = Math.min(currentLength, length);
  
          var totalRead = toRead;
          var toRemove = 0;
  
          for (var i = 0; i < pipe.buckets.length; i++) {
            var currBucket = pipe.buckets[i];
            var bucketSize = currBucket.offset - currBucket.roffset;
  
            if (toRead <= bucketSize) {
              var tmpSlice = currBucket.buffer.subarray(currBucket.roffset, currBucket.offset);
              if (toRead < bucketSize) {
                tmpSlice = tmpSlice.subarray(0, toRead);
                currBucket.roffset += toRead;
              } else {
                toRemove++;
              }
              data.set(tmpSlice);
              break;
            } else {
              var tmpSlice = currBucket.buffer.subarray(currBucket.roffset, currBucket.offset);
              data.set(tmpSlice);
              data = data.subarray(tmpSlice.byteLength);
              toRead -= tmpSlice.byteLength;
              toRemove++;
            }
          }
  
          if (toRemove && toRemove == pipe.buckets.length) {
            // Do not generate excessive garbage in use cases such as
            // write several bytes, read everything, write several bytes, read everything...
            toRemove--;
            pipe.buckets[toRemove].offset = 0;
            pipe.buckets[toRemove].roffset = 0;
          }
  
          pipe.buckets.splice(0, toRemove);
  
          return totalRead;
        },write:function (stream, buffer, offset, length, position /* ignored */) {
          var pipe = stream.node.pipe;
  
          assert(buffer instanceof ArrayBuffer || ArrayBuffer.isView(buffer));
          var data = buffer.subarray(offset, offset + length);
  
          var dataLen = data.byteLength;
          if (dataLen <= 0) {
            return 0;
          }
  
          var currBucket = null;
  
          if (pipe.buckets.length == 0) {
            currBucket = {
              buffer: new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE),
              offset: 0,
              roffset: 0
            };
            pipe.buckets.push(currBucket);
          } else {
            currBucket = pipe.buckets[pipe.buckets.length - 1];
          }
  
          assert(currBucket.offset <= PIPEFS.BUCKET_BUFFER_SIZE);
  
          var freeBytesInCurrBuffer = PIPEFS.BUCKET_BUFFER_SIZE - currBucket.offset;
          if (freeBytesInCurrBuffer >= dataLen) {
            currBucket.buffer.set(data, currBucket.offset);
            currBucket.offset += dataLen;
            return dataLen;
          } else if (freeBytesInCurrBuffer > 0) {
            currBucket.buffer.set(data.subarray(0, freeBytesInCurrBuffer), currBucket.offset);
            currBucket.offset += freeBytesInCurrBuffer;
            data = data.subarray(freeBytesInCurrBuffer, data.byteLength);
          }
  
          var numBuckets = (data.byteLength / PIPEFS.BUCKET_BUFFER_SIZE) | 0;
          var remElements = data.byteLength % PIPEFS.BUCKET_BUFFER_SIZE;
  
          for (var i = 0; i < numBuckets; i++) {
            var newBucket = {
              buffer: new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE),
              offset: PIPEFS.BUCKET_BUFFER_SIZE,
              roffset: 0
            };
            pipe.buckets.push(newBucket);
            newBucket.buffer.set(data.subarray(0, PIPEFS.BUCKET_BUFFER_SIZE));
            data = data.subarray(PIPEFS.BUCKET_BUFFER_SIZE, data.byteLength);
          }
  
          if (remElements > 0) {
            var newBucket = {
              buffer: new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE),
              offset: data.byteLength,
              roffset: 0
            };
            pipe.buckets.push(newBucket);
            newBucket.buffer.set(data);
          }
  
          return dataLen;
        },close:function (stream) {
          var pipe = stream.node.pipe;
          pipe.refcnt--;
          if (pipe.refcnt === 0) {
            pipe.buckets = null;
          }
        }},nextname:function () {
        if (!PIPEFS.nextname.current) {
          PIPEFS.nextname.current = 0;
        }
        return 'pipe[' + (PIPEFS.nextname.current++) + ']';
      }};
  
  function ___syscall_pipe(fdPtr) {
  try {
  
      if (fdPtr == 0) {
        throw new FS.ErrnoError(21);
      }
  
      var res = PIPEFS.createPipe();
  
      HEAP32[((fdPtr)>>2)] = res.readable_fd;
      HEAP32[(((fdPtr)+(4))>>2)] = res.writable_fd;
  
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  function ___syscall_poll(fds, nfds, timeout) {
  try {
  
      var nonzero = 0;
      for (var i = 0; i < nfds; i++) {
        var pollfd = fds + 8 * i;
        var fd = HEAP32[((pollfd)>>2)];
        var events = HEAP16[(((pollfd)+(4))>>1)];
        var mask = 32;
        var stream = FS.getStream(fd);
        if (stream) {
          mask = SYSCALLS.DEFAULT_POLLMASK;
          if (stream.stream_ops.poll) {
            mask = stream.stream_ops.poll(stream);
          }
        }
        mask &= events | 8 | 16;
        if (mask) nonzero++;
        HEAP16[(((pollfd)+(6))>>1)] = mask;
      }
      return nonzero;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  
  
  function ___syscall_readlinkat(dirfd, path, buf, bufsize) {
  try {
  
      path = SYSCALLS.getStr(path);
      path = SYSCALLS.calculateAt(dirfd, path);
      if (bufsize <= 0) return -28;
      var ret = FS.readlink(path);
  
      var len = Math.min(bufsize, lengthBytesUTF8(ret));
      var endChar = HEAP8[buf+len];
      stringToUTF8(ret, buf, bufsize+1);
      // readlink is one of the rare functions that write out a C string, but does never append a null to the output buffer(!)
      // stringToUTF8() always appends a null byte, so restore the character under the null byte after the write.
      HEAP8[buf+len] = endChar;
      return len;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  
  
  
  function ___syscall_recvfrom(fd, buf, len, flags, addr, addrlen) {
  try {
  
      var sock = getSocketFromFD(fd);
      var msg = sock.sock_ops.recvmsg(sock, len);
      if (!msg) return 0; // socket is closed
      if (addr) {
        var errno = writeSockaddr(addr, sock.family, DNS.lookup_name(msg.addr), msg.port, addrlen);
      }
      HEAPU8.set(msg.buffer, buf);
      return msg.buffer.byteLength;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  function ___syscall_renameat(olddirfd, oldpath, newdirfd, newpath) {
  try {
  
      oldpath = SYSCALLS.getStr(oldpath);
      newpath = SYSCALLS.getStr(newpath);
      oldpath = SYSCALLS.calculateAt(olddirfd, oldpath);
      newpath = SYSCALLS.calculateAt(newdirfd, newpath);
      FS.rename(oldpath, newpath);
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  function ___syscall_rmdir(path) {
  try {
  
      path = SYSCALLS.getStr(path);
      FS.rmdir(path);
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  
  
  function ___syscall_sendto(fd, message, length, flags, addr, addr_len) {
  try {
  
      var sock = getSocketFromFD(fd);
      var dest = getSocketAddress(addr, addr_len, true);
      if (!dest) {
        // send, no address provided
        return FS.write(sock.stream, HEAP8,message, length);
      }
      // sendto an address
      return sock.sock_ops.sendmsg(sock, HEAP8,message, length, dest.addr, dest.port);
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  
  function ___syscall_socket(domain, type, protocol) {
  try {
  
      var sock = SOCKFS.createSocket(domain, type, protocol);
      return sock.stream.fd;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  function ___syscall_stat64(path, buf) {
  try {
  
      path = SYSCALLS.getStr(path);
      return SYSCALLS.doStat(FS.stat, path, buf);
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  function ___syscall_statfs64(path, size, buf) {
  try {
  
      path = SYSCALLS.getStr(path);
      // NOTE: None of the constants here are true. We're just returning safe and
      //       sane values.
      HEAP32[(((buf)+(4))>>2)] = 4096;
      HEAP32[(((buf)+(40))>>2)] = 4096;
      HEAP32[(((buf)+(8))>>2)] = 1000000;
      HEAP32[(((buf)+(12))>>2)] = 500000;
      HEAP32[(((buf)+(16))>>2)] = 500000;
      HEAP32[(((buf)+(20))>>2)] = FS.nextInode;
      HEAP32[(((buf)+(24))>>2)] = 1000000;
      HEAP32[(((buf)+(28))>>2)] = 42;
      HEAP32[(((buf)+(44))>>2)] = 2;  // ST_NOSUID
      HEAP32[(((buf)+(36))>>2)] = 255;
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  function ___syscall_symlink(target, linkpath) {
  try {
  
      target = SYSCALLS.getStr(target);
      linkpath = SYSCALLS.getStr(linkpath);
      FS.symlink(target, linkpath);
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  function ___syscall_unlinkat(dirfd, path, flags) {
  try {
  
      path = SYSCALLS.getStr(path);
      path = SYSCALLS.calculateAt(dirfd, path);
      if (flags === 0) {
        FS.unlink(path);
      } else if (flags === 512) {
        FS.rmdir(path);
      } else {
        abort('Invalid flags passed to unlinkat');
      }
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  function readI53FromI64(ptr) {
      return HEAPU32[ptr>>2] + HEAP32[ptr+4>>2] * 4294967296;
    }
  
  function ___syscall_utimensat(dirfd, path, times, flags) {
  try {
  
      path = SYSCALLS.getStr(path);
      path = SYSCALLS.calculateAt(dirfd, path, true);
      if (!times) {
        var atime = Date.now();
        var mtime = atime;
      } else {
        var seconds = readI53FromI64(times);
        var nanoseconds = HEAP32[(((times)+(8))>>2)];
        atime = (seconds*1000) + (nanoseconds/(1000*1000));
        times += 16;
        seconds = readI53FromI64(times);
        nanoseconds = HEAP32[(((times)+(8))>>2)];
        mtime = (seconds*1000) + (nanoseconds/(1000*1000));
      }
      FS.utime(path, atime, mtime);
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  var nowIsMonotonic = true;;
  function __emscripten_get_now_is_monotonic() {
      return nowIsMonotonic;
    }

  function __emscripten_throw_longjmp() {
      throw Infinity;
    }

  function __gmtime_js(time, tmPtr) {
      var date = new Date(readI53FromI64(time)*1000);
      HEAP32[((tmPtr)>>2)] = date.getUTCSeconds();
      HEAP32[(((tmPtr)+(4))>>2)] = date.getUTCMinutes();
      HEAP32[(((tmPtr)+(8))>>2)] = date.getUTCHours();
      HEAP32[(((tmPtr)+(12))>>2)] = date.getUTCDate();
      HEAP32[(((tmPtr)+(16))>>2)] = date.getUTCMonth();
      HEAP32[(((tmPtr)+(20))>>2)] = date.getUTCFullYear()-1900;
      HEAP32[(((tmPtr)+(24))>>2)] = date.getUTCDay();
      var start = Date.UTC(date.getUTCFullYear(), 0, 1, 0, 0, 0, 0);
      var yday = ((date.getTime() - start) / (1000 * 60 * 60 * 24))|0;
      HEAP32[(((tmPtr)+(28))>>2)] = yday;
    }

  
  function isLeapYear(year) {
        return year%4 === 0 && (year%100 !== 0 || year%400 === 0);
    }
  
  var MONTH_DAYS_LEAP_CUMULATIVE = [0,31,60,91,121,152,182,213,244,274,305,335];
  
  var MONTH_DAYS_REGULAR_CUMULATIVE = [0,31,59,90,120,151,181,212,243,273,304,334];
  function ydayFromDate(date) {
      var leap = isLeapYear(date.getFullYear());
      var monthDaysCumulative = (leap ? MONTH_DAYS_LEAP_CUMULATIVE : MONTH_DAYS_REGULAR_CUMULATIVE);
      var yday = monthDaysCumulative[date.getMonth()] + date.getDate() - 1; // -1 since it's days since Jan 1
  
      return yday;
    }
  function __localtime_js(time, tmPtr) {
      var date = new Date(readI53FromI64(time)*1000);
      HEAP32[((tmPtr)>>2)] = date.getSeconds();
      HEAP32[(((tmPtr)+(4))>>2)] = date.getMinutes();
      HEAP32[(((tmPtr)+(8))>>2)] = date.getHours();
      HEAP32[(((tmPtr)+(12))>>2)] = date.getDate();
      HEAP32[(((tmPtr)+(16))>>2)] = date.getMonth();
      HEAP32[(((tmPtr)+(20))>>2)] = date.getFullYear()-1900;
      HEAP32[(((tmPtr)+(24))>>2)] = date.getDay();
  
      var yday = ydayFromDate(date)|0;
      HEAP32[(((tmPtr)+(28))>>2)] = yday;
      HEAP32[(((tmPtr)+(36))>>2)] = -(date.getTimezoneOffset() * 60);
  
      // Attention: DST is in December in South, and some regions don't have DST at all.
      var start = new Date(date.getFullYear(), 0, 1);
      var summerOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
      var winterOffset = start.getTimezoneOffset();
      var dst = (summerOffset != winterOffset && date.getTimezoneOffset() == Math.min(winterOffset, summerOffset))|0;
      HEAP32[(((tmPtr)+(32))>>2)] = dst;
    }

  function __mktime_js(tmPtr) {
      var date = new Date(HEAP32[(((tmPtr)+(20))>>2)] + 1900,
                          HEAP32[(((tmPtr)+(16))>>2)],
                          HEAP32[(((tmPtr)+(12))>>2)],
                          HEAP32[(((tmPtr)+(8))>>2)],
                          HEAP32[(((tmPtr)+(4))>>2)],
                          HEAP32[((tmPtr)>>2)],
                          0);
  
      // There's an ambiguous hour when the time goes back; the tm_isdst field is
      // used to disambiguate it.  Date() basically guesses, so we fix it up if it
      // guessed wrong, or fill in tm_isdst with the guess if it's -1.
      var dst = HEAP32[(((tmPtr)+(32))>>2)];
      var guessedOffset = date.getTimezoneOffset();
      var start = new Date(date.getFullYear(), 0, 1);
      var summerOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
      var winterOffset = start.getTimezoneOffset();
      var dstOffset = Math.min(winterOffset, summerOffset); // DST is in December in South
      if (dst < 0) {
        // Attention: some regions don't have DST at all.
        HEAP32[(((tmPtr)+(32))>>2)] = Number(summerOffset != winterOffset && dstOffset == guessedOffset);
      } else if ((dst > 0) != (dstOffset == guessedOffset)) {
        var nonDstOffset = Math.max(winterOffset, summerOffset);
        var trueOffset = dst > 0 ? dstOffset : nonDstOffset;
        // Don't try setMinutes(date.getMinutes() + ...) -- it's messed up.
        date.setTime(date.getTime() + (trueOffset - guessedOffset)*60000);
      }
  
      HEAP32[(((tmPtr)+(24))>>2)] = date.getDay();
      var yday = ydayFromDate(date)|0;
      HEAP32[(((tmPtr)+(28))>>2)] = yday;
      // To match expected behavior, update fields from date
      HEAP32[((tmPtr)>>2)] = date.getSeconds();
      HEAP32[(((tmPtr)+(4))>>2)] = date.getMinutes();
      HEAP32[(((tmPtr)+(8))>>2)] = date.getHours();
      HEAP32[(((tmPtr)+(12))>>2)] = date.getDate();
      HEAP32[(((tmPtr)+(16))>>2)] = date.getMonth();
      HEAP32[(((tmPtr)+(20))>>2)] = date.getYear();
  
      return (date.getTime() / 1000)|0;
    }

  
  
  function __mmap_js(len, prot, flags, fd, off, allocated, addr) {
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      var res = FS.mmap(stream, len, off, prot, flags);
      var ptr = res.ptr;
      HEAP32[((allocated)>>2)] = res.allocated;
      HEAPU32[((addr)>>2)] = ptr;
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  
  
  function __munmap_js(addr, len, prot, flags, fd, offset) {
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      if (prot & 2) {
        SYSCALLS.doMsync(addr, stream, len, flags, offset);
      }
      FS.munmap(stream);
      // implicitly return 0
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  var timers = {};
  
  function handleException(e) {
      // Certain exception types we do not treat as errors since they are used for
      // internal control flow.
      // 1. ExitStatus, which is thrown by exit()
      // 2. "unwind", which is thrown by emscripten_unwind_to_js_event_loop() and others
      //    that wish to return to JS event loop.
      if (e instanceof ExitStatus || e == 'unwind') {
        return EXITSTATUS;
      }
      quit_(1, e);
    }
  
  
  function _proc_exit(code) {
      EXITSTATUS = code;
      if (!keepRuntimeAlive()) {
        if (Module['onExit']) Module['onExit'](code);
        ABORT = true;
      }
      quit_(code, new ExitStatus(code));
    }
  /** @suppress {duplicate } */
  /** @param {boolean|number=} implicit */
  function exitJS(status, implicit) {
      EXITSTATUS = status;
  
      _proc_exit(status);
    }
  var _exit = exitJS;
  
  function maybeExit() {
      if (!keepRuntimeAlive()) {
        try {
          _exit(EXITSTATUS);
        } catch (e) {
          handleException(e);
        }
      }
    }
  function callUserCallback(func) {
      if (ABORT) {
        return;
      }
      try {
        func();
        maybeExit();
      } catch (e) {
        handleException(e);
      }
    }
  
  
  var _emscripten_get_now;_emscripten_get_now = () => performance.now();
  ;
  function __setitimer_js(which, timeout_ms) {
      // First, clear any existing timer.
      if (timers[which]) {
        clearTimeout(timers[which].id);
        delete timers[which];
      }
  
      // A timeout of zero simply cancels the current timeout so we have nothing
      // more to do.
      if (!timeout_ms) return 0;
  
      var id = setTimeout(() => {
        delete timers[which];
        callUserCallback(() => __emscripten_timeout(which, _emscripten_get_now()));
      }, timeout_ms);
      timers[which] = { id: id, timeout_ms: timeout_ms };
      return 0;
    }

  
  function stringToNewUTF8(str) {
      var size = lengthBytesUTF8(str) + 1;
      var ret = _malloc(size);
      if (ret) stringToUTF8(str, ret, size);
      return ret;
    }
  function __tzset_js(timezone, daylight, tzname) {
      // TODO: Use (malleable) environment variables instead of system settings.
      var currentYear = new Date().getFullYear();
      var winter = new Date(currentYear, 0, 1);
      var summer = new Date(currentYear, 6, 1);
      var winterOffset = winter.getTimezoneOffset();
      var summerOffset = summer.getTimezoneOffset();
  
      // Local standard timezone offset. Local standard time is not adjusted for daylight savings.
      // This code uses the fact that getTimezoneOffset returns a greater value during Standard Time versus Daylight Saving Time (DST).
      // Thus it determines the expected output during Standard Time, and it compares whether the output of the given date the same (Standard) or less (DST).
      var stdTimezoneOffset = Math.max(winterOffset, summerOffset);
  
      // timezone is specified as seconds west of UTC ("The external variable
      // `timezone` shall be set to the difference, in seconds, between
      // Coordinated Universal Time (UTC) and local standard time."), the same
      // as returned by stdTimezoneOffset.
      // See http://pubs.opengroup.org/onlinepubs/009695399/functions/tzset.html
      HEAPU32[((timezone)>>2)] = stdTimezoneOffset * 60;
  
      HEAP32[((daylight)>>2)] = Number(winterOffset != summerOffset);
  
      function extractZone(date) {
        var match = date.toTimeString().match(/\(([A-Za-z ]+)\)$/);
        return match ? match[1] : "GMT";
      };
      var winterName = extractZone(winter);
      var summerName = extractZone(summer);
      var winterNamePtr = stringToNewUTF8(winterName);
      var summerNamePtr = stringToNewUTF8(summerName);
      if (summerOffset < winterOffset) {
        // Northern hemisphere
        HEAPU32[((tzname)>>2)] = winterNamePtr;
        HEAPU32[(((tzname)+(4))>>2)] = summerNamePtr;
      } else {
        HEAPU32[((tzname)>>2)] = summerNamePtr;
        HEAPU32[(((tzname)+(4))>>2)] = winterNamePtr;
      }
    }

  function _abort() {
      abort('');
    }

  function _dlopen(handle) {
      abort(dlopenMissingError);
    }

  function _emscripten_date_now() {
      return Date.now();
    }

  function getHeapMax() {
      // Stay one Wasm page short of 4GB: while e.g. Chrome is able to allocate
      // full 4GB Wasm memories, the size will wrap back to 0 bytes in Wasm side
      // for any code that deals with heap sizes, which would require special
      // casing all heap size related code to treat 0 specially.
      return 2147483648;
    }
  function _emscripten_get_heap_max() {
      return getHeapMax();
    }


  function _emscripten_memcpy_big(dest, src, num) {
      HEAPU8.copyWithin(dest, src, src + num);
    }

  
  function emscripten_realloc_buffer(size) {
      var b = wasmMemory.buffer;
      try {
        // round size grow request up to wasm page size (fixed 64KB per spec)
        wasmMemory.grow((size - b.byteLength + 65535) >>> 16); // .grow() takes a delta compared to the previous size
        updateMemoryViews();
        return 1 /*success*/;
      } catch(e) {
      }
      // implicit 0 return to save code size (caller will cast "undefined" into 0
      // anyhow)
    }
  function _emscripten_resize_heap(requestedSize) {
      var oldSize = HEAPU8.length;
      requestedSize = requestedSize >>> 0;
      // With multithreaded builds, races can happen (another thread might increase the size
      // in between), so return a failure, and let the caller retry.
  
      // Memory resize rules:
      // 1.  Always increase heap size to at least the requested size, rounded up
      //     to next page multiple.
      // 2a. If MEMORY_GROWTH_LINEAR_STEP == -1, excessively resize the heap
      //     geometrically: increase the heap size according to
      //     MEMORY_GROWTH_GEOMETRIC_STEP factor (default +20%), At most
      //     overreserve by MEMORY_GROWTH_GEOMETRIC_CAP bytes (default 96MB).
      // 2b. If MEMORY_GROWTH_LINEAR_STEP != -1, excessively resize the heap
      //     linearly: increase the heap size by at least
      //     MEMORY_GROWTH_LINEAR_STEP bytes.
      // 3.  Max size for the heap is capped at 2048MB-WASM_PAGE_SIZE, or by
      //     MAXIMUM_MEMORY, or by ASAN limit, depending on which is smallest
      // 4.  If we were unable to allocate as much memory, it may be due to
      //     over-eager decision to excessively reserve due to (3) above.
      //     Hence if an allocation fails, cut down on the amount of excess
      //     growth, in an attempt to succeed to perform a smaller allocation.
  
      // A limit is set for how much we can grow. We should not exceed that
      // (the wasm binary specifies it, so if we tried, we'd fail anyhow).
      var maxHeapSize = getHeapMax();
      if (requestedSize > maxHeapSize) {
        return false;
      }
  
      let alignUp = (x, multiple) => x + (multiple - x % multiple) % multiple;
  
      // Loop through potential heap size increases. If we attempt a too eager
      // reservation that fails, cut down on the attempted size and reserve a
      // smaller bump instead. (max 3 times, chosen somewhat arbitrarily)
      for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
        var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown); // ensure geometric growth
        // but limit overreserving (default to capping at +96MB overgrowth at most)
        overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296 );
  
        var newSize = Math.min(maxHeapSize, alignUp(Math.max(requestedSize, overGrownHeapSize), 65536));
  
        var replacement = emscripten_realloc_buffer(newSize);
        if (replacement) {
  
          return true;
        }
      }
      return false;
    }

  var ENV = {};
  
  function getExecutableName() {
      return thisProgram || './this.program';
    }
  function getEnvStrings() {
      if (!getEnvStrings.strings) {
        // Default values.
        // Browser language detection #8751
        var lang = ((typeof navigator == 'object' && navigator.languages && navigator.languages[0]) || 'C').replace('-', '_') + '.UTF-8';
        var env = {
          'USER': 'web_user',
          'LOGNAME': 'web_user',
          'PATH': '/',
          'PWD': '/',
          'HOME': '/home/web_user',
          'LANG': lang,
          '_': getExecutableName()
        };
        // Apply the user-provided values, if any.
        for (var x in ENV) {
          // x is a key in ENV; if ENV[x] is undefined, that means it was
          // explicitly set to be so. We allow user code to do that to
          // force variables with default values to remain unset.
          if (ENV[x] === undefined) delete env[x];
          else env[x] = ENV[x];
        }
        var strings = [];
        for (var x in env) {
          strings.push(x + '=' + env[x]);
        }
        getEnvStrings.strings = strings;
      }
      return getEnvStrings.strings;
    }
  
  function stringToAscii(str, buffer) {
      for (var i = 0; i < str.length; ++i) {
        HEAP8[((buffer++)>>0)] = str.charCodeAt(i);
      }
      // Null-terminate the string
      HEAP8[((buffer)>>0)] = 0;
    }
  
  function _environ_get(__environ, environ_buf) {
      var bufSize = 0;
      getEnvStrings().forEach(function(string, i) {
        var ptr = environ_buf + bufSize;
        HEAPU32[(((__environ)+(i*4))>>2)] = ptr;
        stringToAscii(string, ptr);
        bufSize += string.length + 1;
      });
      return 0;
    }

  
  function _environ_sizes_get(penviron_count, penviron_buf_size) {
      var strings = getEnvStrings();
      HEAPU32[((penviron_count)>>2)] = strings.length;
      var bufSize = 0;
      strings.forEach(function(string) {
        bufSize += string.length + 1;
      });
      HEAPU32[((penviron_buf_size)>>2)] = bufSize;
      return 0;
    }


  function _fd_close(fd) {
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      FS.close(stream);
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return e.errno;
  }
  }

  function _fd_fdstat_get(fd, pbuf) {
  try {
  
      var rightsBase = 0;
      var rightsInheriting = 0;
      var flags = 0;
      {
        var stream = SYSCALLS.getStreamFromFD(fd);
        // All character devices are terminals (other things a Linux system would
        // assume is a character device, like the mouse, we have special APIs for).
        var type = stream.tty ? 2 :
                   FS.isDir(stream.mode) ? 3 :
                   FS.isLink(stream.mode) ? 7 :
                   4;
      }
      HEAP8[((pbuf)>>0)] = type;
      HEAP16[(((pbuf)+(2))>>1)] = flags;
      (tempI64 = [rightsBase>>>0,(tempDouble=rightsBase,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((pbuf)+(8))>>2)] = tempI64[0],HEAP32[(((pbuf)+(12))>>2)] = tempI64[1]);
      (tempI64 = [rightsInheriting>>>0,(tempDouble=rightsInheriting,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((pbuf)+(16))>>2)] = tempI64[0],HEAP32[(((pbuf)+(20))>>2)] = tempI64[1]);
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return e.errno;
  }
  }

  /** @param {number=} offset */
  function doReadv(stream, iov, iovcnt, offset) {
      var ret = 0;
      for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAPU32[((iov)>>2)];
        var len = HEAPU32[(((iov)+(4))>>2)];
        iov += 8;
        var curr = FS.read(stream, HEAP8,ptr, len, offset);
        if (curr < 0) return -1;
        ret += curr;
        if (curr < len) break; // nothing more to read
        if (typeof offset !== 'undefined') {
          offset += curr;
        }
      }
      return ret;
    }
  
  function _fd_read(fd, iov, iovcnt, pnum) {
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      var num = doReadv(stream, iov, iovcnt);
      HEAPU32[((pnum)>>2)] = num;
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return e.errno;
  }
  }

  
  
  
  
  function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
  try {
  
      var offset = convertI32PairToI53Checked(offset_low, offset_high); if (isNaN(offset)) return 61;
      var stream = SYSCALLS.getStreamFromFD(fd);
      FS.llseek(stream, offset, whence);
      (tempI64 = [stream.position>>>0,(tempDouble=stream.position,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((newOffset)>>2)] = tempI64[0],HEAP32[(((newOffset)+(4))>>2)] = tempI64[1]);
      if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null; // reset readdir state
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return e.errno;
  }
  }

  function _fd_sync(fd) {
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      if (stream.stream_ops && stream.stream_ops.fsync) {
        return stream.stream_ops.fsync(stream);
      }
      return 0; // we can't do anything synchronously; the in-memory FS is already synced to
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return e.errno;
  }
  }

  /** @param {number=} offset */
  function doWritev(stream, iov, iovcnt, offset) {
      var ret = 0;
      for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAPU32[((iov)>>2)];
        var len = HEAPU32[(((iov)+(4))>>2)];
        iov += 8;
        var curr = FS.write(stream, HEAP8,ptr, len, offset);
        if (curr < 0) return -1;
        ret += curr;
        if (typeof offset !== 'undefined') {
          offset += curr;
        }
      }
      return ret;
    }
  
  function _fd_write(fd, iov, iovcnt, pnum) {
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      var num = doWritev(stream, iov, iovcnt);
      HEAPU32[((pnum)>>2)] = num;
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return e.errno;
  }
  }

  
  
  
  
  
  
  
  function _getaddrinfo(node, service, hint, out) {
      // Note getaddrinfo currently only returns a single addrinfo with ai_next defaulting to NULL. When NULL
      // hints are specified or ai_family set to AF_UNSPEC or ai_socktype or ai_protocol set to 0 then we
      // really should provide a linked list of suitable addrinfo values.
      var addrs = [];
      var canon = null;
      var addr = 0;
      var port = 0;
      var flags = 0;
      var family = 0;
      var type = 0;
      var proto = 0;
      var ai, last;
  
      function allocaddrinfo(family, type, proto, canon, addr, port) {
        var sa, salen, ai;
        var errno;
  
        salen = family === 10 ?
          28 :
          16;
        addr = family === 10 ?
          inetNtop6(addr) :
          inetNtop4(addr);
        sa = _malloc(salen);
        errno = writeSockaddr(sa, family, addr, port);
        assert(!errno);
  
        ai = _malloc(32);
        HEAP32[(((ai)+(4))>>2)] = family;
        HEAP32[(((ai)+(8))>>2)] = type;
        HEAP32[(((ai)+(12))>>2)] = proto;
        HEAP32[(((ai)+(24))>>2)] = canon;
        HEAPU32[(((ai)+(20))>>2)] = sa;
        if (family === 10) {
          HEAP32[(((ai)+(16))>>2)] = 28;
        } else {
          HEAP32[(((ai)+(16))>>2)] = 16;
        }
        HEAP32[(((ai)+(28))>>2)] = 0;
  
        return ai;
      }
  
      if (hint) {
        flags = HEAP32[((hint)>>2)];
        family = HEAP32[(((hint)+(4))>>2)];
        type = HEAP32[(((hint)+(8))>>2)];
        proto = HEAP32[(((hint)+(12))>>2)];
      }
      if (type && !proto) {
        proto = type === 2 ? 17 : 6;
      }
      if (!type && proto) {
        type = proto === 17 ? 2 : 1;
      }
  
      // If type or proto are set to zero in hints we should really be returning multiple addrinfo values, but for
      // now default to a TCP STREAM socket so we can at least return a sensible addrinfo given NULL hints.
      if (proto === 0) {
        proto = 6;
      }
      if (type === 0) {
        type = 1;
      }
  
      if (!node && !service) {
        return -2;
      }
      if (flags & ~(1|2|4|
          1024|8|16|32)) {
        return -1;
      }
      if (hint !== 0 && (HEAP32[((hint)>>2)] & 2) && !node) {
        return -1;
      }
      if (flags & 32) {
        // TODO
        return -2;
      }
      if (type !== 0 && type !== 1 && type !== 2) {
        return -7;
      }
      if (family !== 0 && family !== 2 && family !== 10) {
        return -6;
      }
  
      if (service) {
        service = UTF8ToString(service);
        port = parseInt(service, 10);
  
        if (isNaN(port)) {
          if (flags & 1024) {
            return -2;
          }
          // TODO support resolving well-known service names from:
          // http://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.txt
          return -8;
        }
      }
  
      if (!node) {
        if (family === 0) {
          family = 2;
        }
        if ((flags & 1) === 0) {
          if (family === 2) {
            addr = _htonl(2130706433);
          } else {
            addr = [0, 0, 0, 1];
          }
        }
        ai = allocaddrinfo(family, type, proto, null, addr, port);
        HEAPU32[((out)>>2)] = ai;
        return 0;
      }
  
      //
      // try as a numeric address
      //
      node = UTF8ToString(node);
      addr = inetPton4(node);
      if (addr !== null) {
        // incoming node is a valid ipv4 address
        if (family === 0 || family === 2) {
          family = 2;
        }
        else if (family === 10 && (flags & 8)) {
          addr = [0, 0, _htonl(0xffff), addr];
          family = 10;
        } else {
          return -2;
        }
      } else {
        addr = inetPton6(node);
        if (addr !== null) {
          // incoming node is a valid ipv6 address
          if (family === 0 || family === 10) {
            family = 10;
          } else {
            return -2;
          }
        }
      }
      if (addr != null) {
        ai = allocaddrinfo(family, type, proto, node, addr, port);
        HEAPU32[((out)>>2)] = ai;
        return 0;
      }
      if (flags & 4) {
        return -2;
      }
  
      //
      // try as a hostname
      //
      // resolve the hostname to a temporary fake address
      node = DNS.lookup_name(node);
      addr = inetPton4(node);
      if (family === 0) {
        family = 2;
      } else if (family === 10) {
        addr = [0, 0, _htonl(0xffff), addr];
      }
      ai = allocaddrinfo(family, type, proto, null, addr, port);
      HEAPU32[((out)>>2)] = ai;
      return 0;
    }

  /** @type {function(...*):?} */
  function _getcontext(
  ) {
  err('missing function: getcontext'); abort(-1);
  }

  /** @type {function(...*):?} */
  function _getdtablesize(
  ) {
  err('missing function: getdtablesize'); abort(-1);
  }

  
  
  
  function getHostByName(name) {
      // generate hostent
      var ret = _malloc(20); // XXX possibly leaked, as are others here
      var nameBuf = stringToNewUTF8(name);
      HEAPU32[((ret)>>2)] = nameBuf;
      var aliasesBuf = _malloc(4);
      HEAPU32[((aliasesBuf)>>2)] = 0;
      HEAPU32[(((ret)+(4))>>2)] = aliasesBuf;
      var afinet = 2;
      HEAP32[(((ret)+(8))>>2)] = afinet;
      HEAP32[(((ret)+(12))>>2)] = 4;
      var addrListBuf = _malloc(12);
      HEAPU32[((addrListBuf)>>2)] = addrListBuf+8;
      HEAPU32[(((addrListBuf)+(4))>>2)] = 0;
      HEAP32[(((addrListBuf)+(8))>>2)] = inetPton4(DNS.lookup_name(name));
      HEAPU32[(((ret)+(16))>>2)] = addrListBuf;
      return ret;
    }
  
  function _gethostbyname(name) {
      return getHostByName(UTF8ToString(name));
    }

  
  
  function _gethostbyname_r(name, ret, buf, buflen, out, err) {
      var data = _gethostbyname(name);
      _memcpy(ret, data, 20);
      _free(data);
      HEAP32[((err)>>2)] = 0;
      HEAPU32[((out)>>2)] = ret;
      return 0;
    }

  function _getloadavg(loadavg, nelem) {
      // int getloadavg(double loadavg[], int nelem);
      // http://linux.die.net/man/3/getloadavg
      var limit = Math.min(nelem, 3);
      var doubleSize = 8;
      for (var i = 0; i < limit; i++) {
        HEAPF64[(((loadavg)+(i * doubleSize))>>3)] = 0.1;
      }
      return limit;
    }

  
  
  
  function _getnameinfo(sa, salen, node, nodelen, serv, servlen, flags) {
      var info = readSockaddr(sa, salen);
      if (info.errno) {
        return -6;
      }
      var port = info.port;
      var addr = info.addr;
  
      var overflowed = false;
  
      if (node && nodelen) {
        var lookup;
        if ((flags & 1) || !(lookup = DNS.lookup_addr(addr))) {
          if (flags & 8) {
            return -2;
          }
        } else {
          addr = lookup;
        }
        var numBytesWrittenExclNull = stringToUTF8(addr, node, nodelen);
  
        if (numBytesWrittenExclNull+1 >= nodelen) {
          overflowed = true;
        }
      }
  
      if (serv && servlen) {
        port = '' + port;
        var numBytesWrittenExclNull = stringToUTF8(port, serv, servlen);
  
        if (numBytesWrittenExclNull+1 >= servlen) {
          overflowed = true;
        }
      }
  
      if (overflowed) {
        // Note: even when we overflow, getnameinfo() is specced to write out the truncated results.
        return -12;
      }
  
      return 0;
    }

  /** @type {function(...*):?} */
  function _makecontext(
  ) {
  err('missing function: makecontext'); abort(-1);
  }

  /** @type {function(...*):?} */
  function _posix_spawnp(
  ) {
  err('missing function: posix_spawnp'); abort(-1);
  }


  
  function arraySum(array, index) {
      var sum = 0;
      for (var i = 0; i <= index; sum += array[i++]) {
        // no-op
      }
      return sum;
    }
  
  
  var MONTH_DAYS_LEAP = [31,29,31,30,31,30,31,31,30,31,30,31];
  
  var MONTH_DAYS_REGULAR = [31,28,31,30,31,30,31,31,30,31,30,31];
  function addDays(date, days) {
      var newDate = new Date(date.getTime());
      while (days > 0) {
        var leap = isLeapYear(newDate.getFullYear());
        var currentMonth = newDate.getMonth();
        var daysInCurrentMonth = (leap ? MONTH_DAYS_LEAP : MONTH_DAYS_REGULAR)[currentMonth];
  
        if (days > daysInCurrentMonth-newDate.getDate()) {
          // we spill over to next month
          days -= (daysInCurrentMonth-newDate.getDate()+1);
          newDate.setDate(1);
          if (currentMonth < 11) {
            newDate.setMonth(currentMonth+1)
          } else {
            newDate.setMonth(0);
            newDate.setFullYear(newDate.getFullYear()+1);
          }
        } else {
          // we stay in current month
          newDate.setDate(newDate.getDate()+days);
          return newDate;
        }
      }
  
      return newDate;
    }
  
  
  
  
  function writeArrayToMemory(array, buffer) {
      HEAP8.set(array, buffer);
    }
  
  function _strftime(s, maxsize, format, tm) {
      // size_t strftime(char *restrict s, size_t maxsize, const char *restrict format, const struct tm *restrict timeptr);
      // http://pubs.opengroup.org/onlinepubs/009695399/functions/strftime.html
  
      var tm_zone = HEAP32[(((tm)+(40))>>2)];
  
      var date = {
        tm_sec: HEAP32[((tm)>>2)],
        tm_min: HEAP32[(((tm)+(4))>>2)],
        tm_hour: HEAP32[(((tm)+(8))>>2)],
        tm_mday: HEAP32[(((tm)+(12))>>2)],
        tm_mon: HEAP32[(((tm)+(16))>>2)],
        tm_year: HEAP32[(((tm)+(20))>>2)],
        tm_wday: HEAP32[(((tm)+(24))>>2)],
        tm_yday: HEAP32[(((tm)+(28))>>2)],
        tm_isdst: HEAP32[(((tm)+(32))>>2)],
        tm_gmtoff: HEAP32[(((tm)+(36))>>2)],
        tm_zone: tm_zone ? UTF8ToString(tm_zone) : ''
      };
  
      var pattern = UTF8ToString(format);
  
      // expand format
      var EXPANSION_RULES_1 = {
        '%c': '%a %b %d %H:%M:%S %Y',     // Replaced by the locale's appropriate date and time representation - e.g., Mon Aug  3 14:02:01 2013
        '%D': '%m/%d/%y',                 // Equivalent to %m / %d / %y
        '%F': '%Y-%m-%d',                 // Equivalent to %Y - %m - %d
        '%h': '%b',                       // Equivalent to %b
        '%r': '%I:%M:%S %p',              // Replaced by the time in a.m. and p.m. notation
        '%R': '%H:%M',                    // Replaced by the time in 24-hour notation
        '%T': '%H:%M:%S',                 // Replaced by the time
        '%x': '%m/%d/%y',                 // Replaced by the locale's appropriate date representation
        '%X': '%H:%M:%S',                 // Replaced by the locale's appropriate time representation
        // Modified Conversion Specifiers
        '%Ec': '%c',                      // Replaced by the locale's alternative appropriate date and time representation.
        '%EC': '%C',                      // Replaced by the name of the base year (period) in the locale's alternative representation.
        '%Ex': '%m/%d/%y',                // Replaced by the locale's alternative date representation.
        '%EX': '%H:%M:%S',                // Replaced by the locale's alternative time representation.
        '%Ey': '%y',                      // Replaced by the offset from %EC (year only) in the locale's alternative representation.
        '%EY': '%Y',                      // Replaced by the full alternative year representation.
        '%Od': '%d',                      // Replaced by the day of the month, using the locale's alternative numeric symbols, filled as needed with leading zeros if there is any alternative symbol for zero; otherwise, with leading <space> characters.
        '%Oe': '%e',                      // Replaced by the day of the month, using the locale's alternative numeric symbols, filled as needed with leading <space> characters.
        '%OH': '%H',                      // Replaced by the hour (24-hour clock) using the locale's alternative numeric symbols.
        '%OI': '%I',                      // Replaced by the hour (12-hour clock) using the locale's alternative numeric symbols.
        '%Om': '%m',                      // Replaced by the month using the locale's alternative numeric symbols.
        '%OM': '%M',                      // Replaced by the minutes using the locale's alternative numeric symbols.
        '%OS': '%S',                      // Replaced by the seconds using the locale's alternative numeric symbols.
        '%Ou': '%u',                      // Replaced by the weekday as a number in the locale's alternative representation (Monday=1).
        '%OU': '%U',                      // Replaced by the week number of the year (Sunday as the first day of the week, rules corresponding to %U ) using the locale's alternative numeric symbols.
        '%OV': '%V',                      // Replaced by the week number of the year (Monday as the first day of the week, rules corresponding to %V ) using the locale's alternative numeric symbols.
        '%Ow': '%w',                      // Replaced by the number of the weekday (Sunday=0) using the locale's alternative numeric symbols.
        '%OW': '%W',                      // Replaced by the week number of the year (Monday as the first day of the week) using the locale's alternative numeric symbols.
        '%Oy': '%y',                      // Replaced by the year (offset from %C ) using the locale's alternative numeric symbols.
      };
      for (var rule in EXPANSION_RULES_1) {
        pattern = pattern.replace(new RegExp(rule, 'g'), EXPANSION_RULES_1[rule]);
      }
  
      var WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
      function leadingSomething(value, digits, character) {
        var str = typeof value == 'number' ? value.toString() : (value || '');
        while (str.length < digits) {
          str = character[0]+str;
        }
        return str;
      }
  
      function leadingNulls(value, digits) {
        return leadingSomething(value, digits, '0');
      }
  
      function compareByDay(date1, date2) {
        function sgn(value) {
          return value < 0 ? -1 : (value > 0 ? 1 : 0);
        }
  
        var compare;
        if ((compare = sgn(date1.getFullYear()-date2.getFullYear())) === 0) {
          if ((compare = sgn(date1.getMonth()-date2.getMonth())) === 0) {
            compare = sgn(date1.getDate()-date2.getDate());
          }
        }
        return compare;
      }
  
      function getFirstWeekStartDate(janFourth) {
          switch (janFourth.getDay()) {
            case 0: // Sunday
              return new Date(janFourth.getFullYear()-1, 11, 29);
            case 1: // Monday
              return janFourth;
            case 2: // Tuesday
              return new Date(janFourth.getFullYear(), 0, 3);
            case 3: // Wednesday
              return new Date(janFourth.getFullYear(), 0, 2);
            case 4: // Thursday
              return new Date(janFourth.getFullYear(), 0, 1);
            case 5: // Friday
              return new Date(janFourth.getFullYear()-1, 11, 31);
            case 6: // Saturday
              return new Date(janFourth.getFullYear()-1, 11, 30);
          }
      }
  
      function getWeekBasedYear(date) {
          var thisDate = addDays(new Date(date.tm_year+1900, 0, 1), date.tm_yday);
  
          var janFourthThisYear = new Date(thisDate.getFullYear(), 0, 4);
          var janFourthNextYear = new Date(thisDate.getFullYear()+1, 0, 4);
  
          var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
          var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
  
          if (compareByDay(firstWeekStartThisYear, thisDate) <= 0) {
            // this date is after the start of the first week of this year
            if (compareByDay(firstWeekStartNextYear, thisDate) <= 0) {
              return thisDate.getFullYear()+1;
            }
            return thisDate.getFullYear();
          }
          return thisDate.getFullYear()-1;
      }
  
      var EXPANSION_RULES_2 = {
        '%a': function(date) {
          return WEEKDAYS[date.tm_wday].substring(0,3);
        },
        '%A': function(date) {
          return WEEKDAYS[date.tm_wday];
        },
        '%b': function(date) {
          return MONTHS[date.tm_mon].substring(0,3);
        },
        '%B': function(date) {
          return MONTHS[date.tm_mon];
        },
        '%C': function(date) {
          var year = date.tm_year+1900;
          return leadingNulls((year/100)|0,2);
        },
        '%d': function(date) {
          return leadingNulls(date.tm_mday, 2);
        },
        '%e': function(date) {
          return leadingSomething(date.tm_mday, 2, ' ');
        },
        '%g': function(date) {
          // %g, %G, and %V give values according to the ISO 8601:2000 standard week-based year.
          // In this system, weeks begin on a Monday and week 1 of the year is the week that includes
          // January 4th, which is also the week that includes the first Thursday of the year, and
          // is also the first week that contains at least four days in the year.
          // If the first Monday of January is the 2nd, 3rd, or 4th, the preceding days are part of
          // the last week of the preceding year; thus, for Saturday 2nd January 1999,
          // %G is replaced by 1998 and %V is replaced by 53. If December 29th, 30th,
          // or 31st is a Monday, it and any following days are part of week 1 of the following year.
          // Thus, for Tuesday 30th December 1997, %G is replaced by 1998 and %V is replaced by 01.
  
          return getWeekBasedYear(date).toString().substring(2);
        },
        '%G': function(date) {
          return getWeekBasedYear(date);
        },
        '%H': function(date) {
          return leadingNulls(date.tm_hour, 2);
        },
        '%I': function(date) {
          var twelveHour = date.tm_hour;
          if (twelveHour == 0) twelveHour = 12;
          else if (twelveHour > 12) twelveHour -= 12;
          return leadingNulls(twelveHour, 2);
        },
        '%j': function(date) {
          // Day of the year (001-366)
          return leadingNulls(date.tm_mday + arraySum(isLeapYear(date.tm_year+1900) ? MONTH_DAYS_LEAP : MONTH_DAYS_REGULAR, date.tm_mon-1), 3);
        },
        '%m': function(date) {
          return leadingNulls(date.tm_mon+1, 2);
        },
        '%M': function(date) {
          return leadingNulls(date.tm_min, 2);
        },
        '%n': function() {
          return '\n';
        },
        '%p': function(date) {
          if (date.tm_hour >= 0 && date.tm_hour < 12) {
            return 'AM';
          }
          return 'PM';
        },
        '%S': function(date) {
          return leadingNulls(date.tm_sec, 2);
        },
        '%t': function() {
          return '\t';
        },
        '%u': function(date) {
          return date.tm_wday || 7;
        },
        '%U': function(date) {
          var days = date.tm_yday + 7 - date.tm_wday;
          return leadingNulls(Math.floor(days / 7), 2);
        },
        '%V': function(date) {
          // Replaced by the week number of the year (Monday as the first day of the week)
          // as a decimal number [01,53]. If the week containing 1 January has four
          // or more days in the new year, then it is considered week 1.
          // Otherwise, it is the last week of the previous year, and the next week is week 1.
          // Both January 4th and the first Thursday of January are always in week 1. [ tm_year, tm_wday, tm_yday]
          var val = Math.floor((date.tm_yday + 7 - (date.tm_wday + 6) % 7 ) / 7);
          // If 1 Jan is just 1-3 days past Monday, the previous week
          // is also in this year.
          if ((date.tm_wday + 371 - date.tm_yday - 2) % 7 <= 2) {
            val++;
          }
          if (!val) {
            val = 52;
            // If 31 December of prev year a Thursday, or Friday of a
            // leap year, then the prev year has 53 weeks.
            var dec31 = (date.tm_wday + 7 - date.tm_yday - 1) % 7;
            if (dec31 == 4 || (dec31 == 5 && isLeapYear(date.tm_year%400-1))) {
              val++;
            }
          } else if (val == 53) {
            // If 1 January is not a Thursday, and not a Wednesday of a
            // leap year, then this year has only 52 weeks.
            var jan1 = (date.tm_wday + 371 - date.tm_yday) % 7;
            if (jan1 != 4 && (jan1 != 3 || !isLeapYear(date.tm_year)))
              val = 1;
          }
          return leadingNulls(val, 2);
        },
        '%w': function(date) {
          return date.tm_wday;
        },
        '%W': function(date) {
          var days = date.tm_yday + 7 - ((date.tm_wday + 6) % 7);
          return leadingNulls(Math.floor(days / 7), 2);
        },
        '%y': function(date) {
          // Replaced by the last two digits of the year as a decimal number [00,99]. [ tm_year]
          return (date.tm_year+1900).toString().substring(2);
        },
        '%Y': function(date) {
          // Replaced by the year as a decimal number (for example, 1997). [ tm_year]
          return date.tm_year+1900;
        },
        '%z': function(date) {
          // Replaced by the offset from UTC in the ISO 8601:2000 standard format ( +hhmm or -hhmm ).
          // For example, "-0430" means 4 hours 30 minutes behind UTC (west of Greenwich).
          var off = date.tm_gmtoff;
          var ahead = off >= 0;
          off = Math.abs(off) / 60;
          // convert from minutes into hhmm format (which means 60 minutes = 100 units)
          off = (off / 60)*100 + (off % 60);
          return (ahead ? '+' : '-') + String("0000" + off).slice(-4);
        },
        '%Z': function(date) {
          return date.tm_zone;
        },
        '%%': function() {
          return '%';
        }
      };
  
      // Replace %% with a pair of NULLs (which cannot occur in a C string), then
      // re-inject them after processing.
      pattern = pattern.replace(/%%/g, '\0\0')
      for (var rule in EXPANSION_RULES_2) {
        if (pattern.includes(rule)) {
          pattern = pattern.replace(new RegExp(rule, 'g'), EXPANSION_RULES_2[rule](date));
        }
      }
      pattern = pattern.replace(/\0\0/g, '%')
  
      var bytes = intArrayFromString(pattern, false);
      if (bytes.length > maxsize) {
        return 0;
      }
  
      writeArrayToMemory(bytes, s);
      return bytes.length-1;
    }

  
  
  
  
  
  
  
  function _strptime(buf, format, tm) {
      // char *strptime(const char *restrict buf, const char *restrict format, struct tm *restrict tm);
      // http://pubs.opengroup.org/onlinepubs/009695399/functions/strptime.html
      var pattern = UTF8ToString(format);
  
      // escape special characters
      // TODO: not sure we really need to escape all of these in JS regexps
      var SPECIAL_CHARS = '\\!@#$^&*()+=-[]/{}|:<>?,.';
      for (var i=0, ii=SPECIAL_CHARS.length; i<ii; ++i) {
        pattern = pattern.replace(new RegExp('\\'+SPECIAL_CHARS[i], 'g'), '\\'+SPECIAL_CHARS[i]);
      }
  
      // reduce number of matchers
      var EQUIVALENT_MATCHERS = {
        '%A':  '%a',
        '%B':  '%b',
        '%c':  '%a %b %d %H:%M:%S %Y',
        '%D':  '%m\\/%d\\/%y',
        '%e':  '%d',
        '%F':  '%Y-%m-%d',
        '%h':  '%b',
        '%R':  '%H\\:%M',
        '%r':  '%I\\:%M\\:%S\\s%p',
        '%T':  '%H\\:%M\\:%S',
        '%x':  '%m\\/%d\\/(?:%y|%Y)',
        '%X':  '%H\\:%M\\:%S'
      };
      for (var matcher in EQUIVALENT_MATCHERS) {
        pattern = pattern.replace(matcher, EQUIVALENT_MATCHERS[matcher]);
      }
  
      // TODO: take care of locale
  
      var DATE_PATTERNS = {
        /* weeday name */     '%a': '(?:Sun(?:day)?)|(?:Mon(?:day)?)|(?:Tue(?:sday)?)|(?:Wed(?:nesday)?)|(?:Thu(?:rsday)?)|(?:Fri(?:day)?)|(?:Sat(?:urday)?)',
        /* month name */      '%b': '(?:Jan(?:uary)?)|(?:Feb(?:ruary)?)|(?:Mar(?:ch)?)|(?:Apr(?:il)?)|May|(?:Jun(?:e)?)|(?:Jul(?:y)?)|(?:Aug(?:ust)?)|(?:Sep(?:tember)?)|(?:Oct(?:ober)?)|(?:Nov(?:ember)?)|(?:Dec(?:ember)?)',
        /* century */         '%C': '\\d\\d',
        /* day of month */    '%d': '0[1-9]|[1-9](?!\\d)|1\\d|2\\d|30|31',
        /* hour (24hr) */     '%H': '\\d(?!\\d)|[0,1]\\d|20|21|22|23',
        /* hour (12hr) */     '%I': '\\d(?!\\d)|0\\d|10|11|12',
        /* day of year */     '%j': '00[1-9]|0?[1-9](?!\\d)|0?[1-9]\\d(?!\\d)|[1,2]\\d\\d|3[0-6]\\d',
        /* month */           '%m': '0[1-9]|[1-9](?!\\d)|10|11|12',
        /* minutes */         '%M': '0\\d|\\d(?!\\d)|[1-5]\\d',
        /* whitespace */      '%n': '\\s',
        /* AM/PM */           '%p': 'AM|am|PM|pm|A\\.M\\.|a\\.m\\.|P\\.M\\.|p\\.m\\.',
        /* seconds */         '%S': '0\\d|\\d(?!\\d)|[1-5]\\d|60',
        /* week number */     '%U': '0\\d|\\d(?!\\d)|[1-4]\\d|50|51|52|53',
        /* week number */     '%W': '0\\d|\\d(?!\\d)|[1-4]\\d|50|51|52|53',
        /* weekday number */  '%w': '[0-6]',
        /* 2-digit year */    '%y': '\\d\\d',
        /* 4-digit year */    '%Y': '\\d\\d\\d\\d',
        /* % */               '%%': '%',
        /* whitespace */      '%t': '\\s',
      };
  
      var MONTH_NUMBERS = {JAN: 0, FEB: 1, MAR: 2, APR: 3, MAY: 4, JUN: 5, JUL: 6, AUG: 7, SEP: 8, OCT: 9, NOV: 10, DEC: 11};
      var DAY_NUMBERS_SUN_FIRST = {SUN: 0, MON: 1, TUE: 2, WED: 3, THU: 4, FRI: 5, SAT: 6};
      var DAY_NUMBERS_MON_FIRST = {MON: 0, TUE: 1, WED: 2, THU: 3, FRI: 4, SAT: 5, SUN: 6};
  
      for (var datePattern in DATE_PATTERNS) {
        pattern = pattern.replace(datePattern, '('+datePattern+DATE_PATTERNS[datePattern]+')');
      }
  
      // take care of capturing groups
      var capture = [];
      for (var i=pattern.indexOf('%'); i>=0; i=pattern.indexOf('%')) {
        capture.push(pattern[i+1]);
        pattern = pattern.replace(new RegExp('\\%'+pattern[i+1], 'g'), '');
      }
  
      var matches = new RegExp('^'+pattern, "i").exec(UTF8ToString(buf))
      // out(UTF8ToString(buf)+ ' is matched by '+((new RegExp('^'+pattern)).source)+' into: '+JSON.stringify(matches));
  
      function initDate() {
        function fixup(value, min, max) {
          return (typeof value != 'number' || isNaN(value)) ? min : (value>=min ? (value<=max ? value: max): min);
        };
        return {
          year: fixup(HEAP32[(((tm)+(20))>>2)] + 1900 , 1970, 9999),
          month: fixup(HEAP32[(((tm)+(16))>>2)], 0, 11),
          day: fixup(HEAP32[(((tm)+(12))>>2)], 1, 31),
          hour: fixup(HEAP32[(((tm)+(8))>>2)], 0, 23),
          min: fixup(HEAP32[(((tm)+(4))>>2)], 0, 59),
          sec: fixup(HEAP32[((tm)>>2)], 0, 59)
        };
      };
  
      if (matches) {
        var date = initDate();
        var value;
  
        var getMatch = (symbol) => {
          var pos = capture.indexOf(symbol);
          // check if symbol appears in regexp
          if (pos >= 0) {
            // return matched value or null (falsy!) for non-matches
            return matches[pos+1];
          }
          return;
        };
  
        // seconds
        if ((value=getMatch('S'))) {
          date.sec = jstoi_q(value);
        }
  
        // minutes
        if ((value=getMatch('M'))) {
          date.min = jstoi_q(value);
        }
  
        // hours
        if ((value=getMatch('H'))) {
          // 24h clock
          date.hour = jstoi_q(value);
        } else if ((value = getMatch('I'))) {
          // AM/PM clock
          var hour = jstoi_q(value);
          if ((value=getMatch('p'))) {
            hour += value.toUpperCase()[0] === 'P' ? 12 : 0;
          }
          date.hour = hour;
        }
  
        // year
        if ((value=getMatch('Y'))) {
          // parse from four-digit year
          date.year = jstoi_q(value);
        } else if ((value=getMatch('y'))) {
          // parse from two-digit year...
          var year = jstoi_q(value);
          if ((value=getMatch('C'))) {
            // ...and century
            year += jstoi_q(value)*100;
          } else {
            // ...and rule-of-thumb
            year += year<69 ? 2000 : 1900;
          }
          date.year = year;
        }
  
        // month
        if ((value=getMatch('m'))) {
          // parse from month number
          date.month = jstoi_q(value)-1;
        } else if ((value=getMatch('b'))) {
          // parse from month name
          date.month = MONTH_NUMBERS[value.substring(0,3).toUpperCase()] || 0;
          // TODO: derive month from day in year+year, week number+day of week+year
        }
  
        // day
        if ((value=getMatch('d'))) {
          // get day of month directly
          date.day = jstoi_q(value);
        } else if ((value=getMatch('j'))) {
          // get day of month from day of year ...
          var day = jstoi_q(value);
          var leapYear = isLeapYear(date.year);
          for (var month=0; month<12; ++month) {
            var daysUntilMonth = arraySum(leapYear ? MONTH_DAYS_LEAP : MONTH_DAYS_REGULAR, month-1);
            if (day<=daysUntilMonth+(leapYear ? MONTH_DAYS_LEAP : MONTH_DAYS_REGULAR)[month]) {
              date.day = day-daysUntilMonth;
            }
          }
        } else if ((value=getMatch('a'))) {
          // get day of month from weekday ...
          var weekDay = value.substring(0,3).toUpperCase();
          if ((value=getMatch('U'))) {
            // ... and week number (Sunday being first day of week)
            // Week number of the year (Sunday as the first day of the week) as a decimal number [00,53].
            // All days in a new year preceding the first Sunday are considered to be in week 0.
            var weekDayNumber = DAY_NUMBERS_SUN_FIRST[weekDay];
            var weekNumber = jstoi_q(value);
  
            // January 1st
            var janFirst = new Date(date.year, 0, 1);
            var endDate;
            if (janFirst.getDay() === 0) {
              // Jan 1st is a Sunday, and, hence in the 1st CW
              endDate = addDays(janFirst, weekDayNumber+7*(weekNumber-1));
            } else {
              // Jan 1st is not a Sunday, and, hence still in the 0th CW
              endDate = addDays(janFirst, 7-janFirst.getDay()+weekDayNumber+7*(weekNumber-1));
            }
            date.day = endDate.getDate();
            date.month = endDate.getMonth();
          } else if ((value=getMatch('W'))) {
            // ... and week number (Monday being first day of week)
            // Week number of the year (Monday as the first day of the week) as a decimal number [00,53].
            // All days in a new year preceding the first Monday are considered to be in week 0.
            var weekDayNumber = DAY_NUMBERS_MON_FIRST[weekDay];
            var weekNumber = jstoi_q(value);
  
            // January 1st
            var janFirst = new Date(date.year, 0, 1);
            var endDate;
            if (janFirst.getDay()===1) {
              // Jan 1st is a Monday, and, hence in the 1st CW
               endDate = addDays(janFirst, weekDayNumber+7*(weekNumber-1));
            } else {
              // Jan 1st is not a Monday, and, hence still in the 0th CW
              endDate = addDays(janFirst, 7-janFirst.getDay()+1+weekDayNumber+7*(weekNumber-1));
            }
  
            date.day = endDate.getDate();
            date.month = endDate.getMonth();
          }
        }
  
        /*
        tm_sec  int seconds after the minute  0-61*
        tm_min  int minutes after the hour  0-59
        tm_hour int hours since midnight  0-23
        tm_mday int day of the month  1-31
        tm_mon  int months since January  0-11
        tm_year int years since 1900
        tm_wday int days since Sunday 0-6
        tm_yday int days since January 1  0-365
        tm_isdst  int Daylight Saving Time flag
        */
  
        var fullDate = new Date(date.year, date.month, date.day, date.hour, date.min, date.sec, 0);
        HEAP32[((tm)>>2)] = fullDate.getSeconds();
        HEAP32[(((tm)+(4))>>2)] = fullDate.getMinutes();
        HEAP32[(((tm)+(8))>>2)] = fullDate.getHours();
        HEAP32[(((tm)+(12))>>2)] = fullDate.getDate();
        HEAP32[(((tm)+(16))>>2)] = fullDate.getMonth();
        HEAP32[(((tm)+(20))>>2)] = fullDate.getFullYear()-1900;
        HEAP32[(((tm)+(24))>>2)] = fullDate.getDay();
        HEAP32[(((tm)+(28))>>2)] = arraySum(isLeapYear(fullDate.getFullYear()) ? MONTH_DAYS_LEAP : MONTH_DAYS_REGULAR, fullDate.getMonth()-1)+fullDate.getDate()-1;
        HEAP32[(((tm)+(32))>>2)] = 0;
  
        // we need to convert the matched sequence into an integer array to take care of UTF-8 characters > 0x7F
        // TODO: not sure that intArrayFromString handles all unicode characters correctly
        return buf+intArrayFromString(matches[0]).length-1;
      }
  
      return 0;
    }

  /** @type {function(...*):?} */
  function _swapcontext(
  ) {
  err('missing function: swapcontext'); abort(-1);
  }



  function getCFunc(ident) {
      var func = Module['_' + ident]; // closure exported function
      return func;
    }
  
  
  
  function stringToUTF8OnStack(str) {
      var size = lengthBytesUTF8(str) + 1;
      var ret = stackAlloc(size);
      stringToUTF8(str, ret, size);
      return ret;
    }
  
  
    /**
     * @param {string|null=} returnType
     * @param {Array=} argTypes
     * @param {Arguments|Array=} args
     * @param {Object=} opts
     */
  function ccall(ident, returnType, argTypes, args, opts) {
      // For fast lookup of conversion functions
      var toC = {
        'string': (str) => {
          var ret = 0;
          if (str !== null && str !== undefined && str !== 0) { // null string
            // at most 4 bytes per UTF-8 code point, +1 for the trailing '\0'
            ret = stringToUTF8OnStack(str);
          }
          return ret;
        },
        'array': (arr) => {
          var ret = stackAlloc(arr.length);
          writeArrayToMemory(arr, ret);
          return ret;
        }
      };
  
      function convertReturnValue(ret) {
        if (returnType === 'string') {
          
          return UTF8ToString(ret);
        }
        if (returnType === 'boolean') return Boolean(ret);
        return ret;
      }
  
      var func = getCFunc(ident);
      var cArgs = [];
      var stack = 0;
      if (args) {
        for (var i = 0; i < args.length; i++) {
          var converter = toC[argTypes[i]];
          if (converter) {
            if (stack === 0) stack = stackSave();
            cArgs[i] = converter(args[i]);
          } else {
            cArgs[i] = args[i];
          }
        }
      }
      var ret = func.apply(null, cArgs);
      function onDone(ret) {
        if (stack !== 0) stackRestore(stack);
        return convertReturnValue(ret);
      }
  
      ret = onDone(ret);
      return ret;
    }





  var FSNode = /** @constructor */ function(parent, name, mode, rdev) {
    if (!parent) {
      parent = this;  // root node sets parent to itself
    }
    this.parent = parent;
    this.mount = parent.mount;
    this.mounted = null;
    this.id = FS.nextInode++;
    this.name = name;
    this.mode = mode;
    this.node_ops = {};
    this.stream_ops = {};
    this.rdev = rdev;
  };
  var readMode = 292/*292*/ | 73/*73*/;
  var writeMode = 146/*146*/;
  Object.defineProperties(FSNode.prototype, {
   read: {
    get: /** @this{FSNode} */function() {
     return (this.mode & readMode) === readMode;
    },
    set: /** @this{FSNode} */function(val) {
     val ? this.mode |= readMode : this.mode &= ~readMode;
    }
   },
   write: {
    get: /** @this{FSNode} */function() {
     return (this.mode & writeMode) === writeMode;
    },
    set: /** @this{FSNode} */function(val) {
     val ? this.mode |= writeMode : this.mode &= ~writeMode;
    }
   },
   isFolder: {
    get: /** @this{FSNode} */function() {
     return FS.isDir(this.mode);
    }
   },
   isDevice: {
    get: /** @this{FSNode} */function() {
     return FS.isChrdev(this.mode);
    }
   }
  });
  FS.FSNode = FSNode;
  FS.staticInit();Module["FS_createPath"] = FS.createPath;Module["FS_createDataFile"] = FS.createDataFile;Module["FS_createPreloadedFile"] = FS.createPreloadedFile;Module["FS_unlink"] = FS.unlink;Module["FS_createLazyFile"] = FS.createLazyFile;Module["FS_createDevice"] = FS.createDevice;;
// include: base64Utils.js
// Copied from https://github.com/strophe/strophejs/blob/e06d027/src/polyfills.js#L149

// This code was written by Tyler Akins and has been placed in the
// public domain.  It would be nice if you left this header intact.
// Base64 code from Tyler Akins -- http://rumkin.com

/**
 * Decodes a base64 string.
 * @param {string} input The string to decode.
 */
var decodeBase64 = typeof atob == 'function' ? atob : function (input) {
  var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

  var output = '';
  var chr1, chr2, chr3;
  var enc1, enc2, enc3, enc4;
  var i = 0;
  // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
  input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');
  do {
    enc1 = keyStr.indexOf(input.charAt(i++));
    enc2 = keyStr.indexOf(input.charAt(i++));
    enc3 = keyStr.indexOf(input.charAt(i++));
    enc4 = keyStr.indexOf(input.charAt(i++));

    chr1 = (enc1 << 2) | (enc2 >> 4);
    chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
    chr3 = ((enc3 & 3) << 6) | enc4;

    output = output + String.fromCharCode(chr1);

    if (enc3 !== 64) {
      output = output + String.fromCharCode(chr2);
    }
    if (enc4 !== 64) {
      output = output + String.fromCharCode(chr3);
    }
  } while (i < input.length);
  return output;
};

// Converts a string of base64 into a byte array.
// Throws error on invalid input.
function intArrayFromBase64(s) {

  try {
    var decoded = decodeBase64(s);
    var bytes = new Uint8Array(decoded.length);
    for (var i = 0 ; i < decoded.length ; ++i) {
      bytes[i] = decoded.charCodeAt(i);
    }
    return bytes;
  } catch (_) {
    throw new Error('Converting base64 string to bytes failed.');
  }
}

// If filename is a base64 data URI, parses and returns data (Buffer on node,
// Uint8Array otherwise). If filename is not a base64 data URI, returns undefined.
function tryParseAsDataURI(filename) {
  if (!isDataURI(filename)) {
    return;
  }

  return intArrayFromBase64(filename.slice(dataURIPrefix.length));
}


// end include: base64Utils.js
var wasmImports = {
  "__assert_fail": ___assert_fail,
  "__call_sighandler": ___call_sighandler,
  "__dlsym": ___dlsym,
  "__syscall__newselect": ___syscall__newselect,
  "__syscall_accept4": ___syscall_accept4,
  "__syscall_bind": ___syscall_bind,
  "__syscall_chdir": ___syscall_chdir,
  "__syscall_chmod": ___syscall_chmod,
  "__syscall_connect": ___syscall_connect,
  "__syscall_dup": ___syscall_dup,
  "__syscall_faccessat": ___syscall_faccessat,
  "__syscall_fchmod": ___syscall_fchmod,
  "__syscall_fchown32": ___syscall_fchown32,
  "__syscall_fchownat": ___syscall_fchownat,
  "__syscall_fcntl64": ___syscall_fcntl64,
  "__syscall_fdatasync": ___syscall_fdatasync,
  "__syscall_fstat64": ___syscall_fstat64,
  "__syscall_ftruncate64": ___syscall_ftruncate64,
  "__syscall_getcwd": ___syscall_getcwd,
  "__syscall_getdents64": ___syscall_getdents64,
  "__syscall_getpeername": ___syscall_getpeername,
  "__syscall_getsockname": ___syscall_getsockname,
  "__syscall_getsockopt": ___syscall_getsockopt,
  "__syscall_ioctl": ___syscall_ioctl,
  "__syscall_listen": ___syscall_listen,
  "__syscall_lstat64": ___syscall_lstat64,
  "__syscall_mkdirat": ___syscall_mkdirat,
  "__syscall_newfstatat": ___syscall_newfstatat,
  "__syscall_openat": ___syscall_openat,
  "__syscall_pipe": ___syscall_pipe,
  "__syscall_poll": ___syscall_poll,
  "__syscall_readlinkat": ___syscall_readlinkat,
  "__syscall_recvfrom": ___syscall_recvfrom,
  "__syscall_renameat": ___syscall_renameat,
  "__syscall_rmdir": ___syscall_rmdir,
  "__syscall_sendto": ___syscall_sendto,
  "__syscall_socket": ___syscall_socket,
  "__syscall_stat64": ___syscall_stat64,
  "__syscall_statfs64": ___syscall_statfs64,
  "__syscall_symlink": ___syscall_symlink,
  "__syscall_unlinkat": ___syscall_unlinkat,
  "__syscall_utimensat": ___syscall_utimensat,
  "_emscripten_get_now_is_monotonic": __emscripten_get_now_is_monotonic,
  "_emscripten_throw_longjmp": __emscripten_throw_longjmp,
  "_gmtime_js": __gmtime_js,
  "_localtime_js": __localtime_js,
  "_mktime_js": __mktime_js,
  "_mmap_js": __mmap_js,
  "_munmap_js": __munmap_js,
  "_setitimer_js": __setitimer_js,
  "_tzset_js": __tzset_js,
  "abort": _abort,
  "dlopen": _dlopen,
  "emscripten_date_now": _emscripten_date_now,
  "emscripten_get_heap_max": _emscripten_get_heap_max,
  "emscripten_get_now": _emscripten_get_now,
  "emscripten_memcpy_big": _emscripten_memcpy_big,
  "emscripten_resize_heap": _emscripten_resize_heap,
  "environ_get": _environ_get,
  "environ_sizes_get": _environ_sizes_get,
  "exit": _exit,
  "fd_close": _fd_close,
  "fd_fdstat_get": _fd_fdstat_get,
  "fd_read": _fd_read,
  "fd_seek": _fd_seek,
  "fd_sync": _fd_sync,
  "fd_write": _fd_write,
  "getaddrinfo": _getaddrinfo,
  "getcontext": _getcontext,
  "getdtablesize": _getdtablesize,
  "gethostbyname": _gethostbyname,
  "gethostbyname_r": _gethostbyname_r,
  "getloadavg": _getloadavg,
  "getnameinfo": _getnameinfo,
  "invoke_i": invoke_i,
  "invoke_ii": invoke_ii,
  "invoke_iii": invoke_iii,
  "invoke_iiii": invoke_iiii,
  "invoke_iiiii": invoke_iiiii,
  "invoke_iiiiii": invoke_iiiiii,
  "invoke_iiiiiii": invoke_iiiiiii,
  "invoke_iiiiiiiiii": invoke_iiiiiiiiii,
  "invoke_v": invoke_v,
  "invoke_vi": invoke_vi,
  "invoke_vii": invoke_vii,
  "invoke_viidii": invoke_viidii,
  "invoke_viii": invoke_viii,
  "invoke_viiii": invoke_viiii,
  "invoke_viiiii": invoke_viiiii,
  "invoke_viiiiii": invoke_viiiiii,
  "makecontext": _makecontext,
  "posix_spawnp": _posix_spawnp,
  "proc_exit": _proc_exit,
  "strftime": _strftime,
  "strptime": _strptime,
  "swapcontext": _swapcontext
};
var asm = createWasm();
/** @type {function(...*):?} */
var ___wasm_call_ctors = function() {
  return (___wasm_call_ctors = Module["asm"]["__wasm_call_ctors"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _phpw_flush = Module["_phpw_flush"] = function() {
  return (_phpw_flush = Module["_phpw_flush"] = Module["asm"]["phpw_flush"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _phpw_exec = Module["_phpw_exec"] = function() {
  return (_phpw_exec = Module["_phpw_exec"] = Module["asm"]["phpw_exec"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _malloc = function() {
  return (_malloc = Module["asm"]["malloc"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _setenv = Module["_setenv"] = function() {
  return (_setenv = Module["_setenv"] = Module["asm"]["setenv"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _php_embed_init = Module["_php_embed_init"] = function() {
  return (_php_embed_init = Module["_php_embed_init"] = Module["asm"]["php_embed_init"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _saveSetjmp = function() {
  return (_saveSetjmp = Module["asm"]["saveSetjmp"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _zend_eval_string = Module["_zend_eval_string"] = function() {
  return (_zend_eval_string = Module["_zend_eval_string"] = Module["asm"]["zend_eval_string"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _php_embed_shutdown = Module["_php_embed_shutdown"] = function() {
  return (_php_embed_shutdown = Module["_php_embed_shutdown"] = Module["asm"]["php_embed_shutdown"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _free = function() {
  return (_free = Module["asm"]["free"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _phpw_run = Module["_phpw_run"] = function() {
  return (_phpw_run = Module["_phpw_run"] = Module["asm"]["phpw_run"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _phpw = Module["_phpw"] = function() {
  return (_phpw = Module["_phpw"] = Module["asm"]["phpw"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _memcpy = function() {
  return (_memcpy = Module["asm"]["memcpy"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var ___errno_location = function() {
  return (___errno_location = Module["asm"]["__errno_location"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _chdir = Module["_chdir"] = function() {
  return (_chdir = Module["_chdir"] = Module["asm"]["chdir"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _htonl = function() {
  return (_htonl = Module["asm"]["htonl"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _ntohs = function() {
  return (_ntohs = Module["asm"]["ntohs"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _htons = function() {
  return (_htons = Module["asm"]["htons"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var ___dl_seterr = function() {
  return (___dl_seterr = Module["asm"]["__dl_seterr"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _emscripten_builtin_memalign = function() {
  return (_emscripten_builtin_memalign = Module["asm"]["emscripten_builtin_memalign"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __emscripten_timeout = function() {
  return (__emscripten_timeout = Module["asm"]["_emscripten_timeout"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _setThrew = function() {
  return (_setThrew = Module["asm"]["setThrew"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var stackSave = function() {
  return (stackSave = Module["asm"]["stackSave"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var stackRestore = function() {
  return (stackRestore = Module["asm"]["stackRestore"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var stackAlloc = function() {
  return (stackAlloc = Module["asm"]["stackAlloc"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiij = Module["dynCall_iiiij"] = function() {
  return (dynCall_iiiij = Module["dynCall_iiiij"] = Module["asm"]["dynCall_iiiij"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iij = Module["dynCall_iij"] = function() {
  return (dynCall_iij = Module["dynCall_iij"] = Module["asm"]["dynCall_iij"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iijii = Module["dynCall_iijii"] = function() {
  return (dynCall_iijii = Module["dynCall_iijii"] = Module["asm"]["dynCall_iijii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiji = Module["dynCall_iiji"] = function() {
  return (dynCall_iiji = Module["dynCall_iiji"] = Module["asm"]["dynCall_iiji"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiiiij = Module["dynCall_iiiiiij"] = function() {
  return (dynCall_iiiiiij = Module["dynCall_iiiiiij"] = Module["asm"]["dynCall_iiiiiij"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_vij = Module["dynCall_vij"] = function() {
  return (dynCall_vij = Module["dynCall_vij"] = Module["asm"]["dynCall_vij"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_ji = Module["dynCall_ji"] = function() {
  return (dynCall_ji = Module["dynCall_ji"] = Module["asm"]["dynCall_ji"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_jiji = Module["dynCall_jiji"] = function() {
  return (dynCall_jiji = Module["dynCall_jiji"] = Module["asm"]["dynCall_jiji"]).apply(null, arguments);
};


function invoke_iiii(index,a1,a2,a3) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1,a2,a3);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iii(index,a1,a2) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1,a2);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_vi(index,a1) {
  var sp = stackSave();
  try {
    getWasmTableEntry(index)(a1);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_v(index) {
  var sp = stackSave();
  try {
    getWasmTableEntry(index)();
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_vii(index,a1,a2) {
  var sp = stackSave();
  try {
    getWasmTableEntry(index)(a1,a2);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_ii(index,a1) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_i(index) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)();
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiii(index,a1,a2,a3,a4) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1,a2,a3,a4);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiii(index,a1,a2,a3,a4,a5) {
  var sp = stackSave();
  try {
    getWasmTableEntry(index)(a1,a2,a3,a4,a5);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viidii(index,a1,a2,a3,a4,a5) {
  var sp = stackSave();
  try {
    getWasmTableEntry(index)(a1,a2,a3,a4,a5);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiii(index,a1,a2,a3,a4,a5,a6) {
  var sp = stackSave();
  try {
    getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viii(index,a1,a2,a3) {
  var sp = stackSave();
  try {
    getWasmTableEntry(index)(a1,a2,a3);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiii(index,a1,a2,a3,a4) {
  var sp = stackSave();
  try {
    getWasmTableEntry(index)(a1,a2,a3,a4);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiiii(index,a1,a2,a3,a4,a5) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1,a2,a3,a4,a5);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiiiii(index,a1,a2,a3,a4,a5,a6) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}


// include: postamble.js
// === Auto-generated postamble setup entry stuff ===

Module["addRunDependency"] = addRunDependency;
Module["removeRunDependency"] = removeRunDependency;
Module["FS_createPath"] = FS.createPath;
Module["FS_createDataFile"] = FS.createDataFile;
Module["FS_createPreloadedFile"] = FS.createPreloadedFile;
Module["FS_createLazyFile"] = FS.createLazyFile;
Module["FS_createDevice"] = FS.createDevice;
Module["FS_unlink"] = FS.unlink;
Module["ccall"] = ccall;
Module["UTF8ToString"] = UTF8ToString;
Module["lengthBytesUTF8"] = lengthBytesUTF8;
Module["FS"] = FS;
Module["LZ4"] = LZ4;


var calledRun;

dependenciesFulfilled = function runCaller() {
  // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
  if (!calledRun) run();
  if (!calledRun) dependenciesFulfilled = runCaller; // try this again later, after new deps are fulfilled
};

function run() {

  if (runDependencies > 0) {
    return;
  }

  preRun();

  // a preRun added a dependency, run will be called later
  if (runDependencies > 0) {
    return;
  }

  function doRun() {
    // run may have just been called through dependencies being fulfilled just in this very frame,
    // or while the async setStatus time below was happening
    if (calledRun) return;
    calledRun = true;
    Module['calledRun'] = true;

    if (ABORT) return;

    initRuntime();

    readyPromiseResolve(Module);
    if (Module['onRuntimeInitialized']) Module['onRuntimeInitialized']();

    postRun();
  }

  if (Module['setStatus']) {
    Module['setStatus']('Running...');
    setTimeout(function() {
      setTimeout(function() {
        Module['setStatus']('');
      }, 1);
      doRun();
    }, 1);
  } else
  {
    doRun();
  }
}

if (Module['preInit']) {
  if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
  while (Module['preInit'].length > 0) {
    Module['preInit'].pop()();
  }
}

run();


// end include: postamble.js


  return createPhpModule.ready
}

);
})();
export default createPhpModule;