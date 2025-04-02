/*! coi-serviceworker v0.1.7 - Guido Zuidhof and contributors, licensed under MIT */
// Library for avoid CORS issue with GH Pages (!require no subfolder) 
// URL: https://github.com/gzuidhof/coi-serviceworker

// Minified version (working)
let coepCredentialless=!1;if(typeof window==='undefined'){self.addEventListener("install",()=>self.skipWaiting());self.addEventListener("activate",(event)=>event.waitUntil(self.clients.claim()));self.addEventListener("message",(ev)=>{if(!ev.data){return}else if(ev.data.type==="deregister"){self.registration.unregister().then(()=>{return self.clients.matchAll()}).then(clients=>{clients.forEach((client)=>client.navigate(client.url))})}else if(ev.data.type==="coepCredentialless"){coepCredentialless=ev.data.value}});self.addEventListener("fetch",function(event){const r=event.request;if(r.cache==="only-if-cached"&&r.mode!=="same-origin"){return}
const request=(coepCredentialless&&r.mode==="no-cors")?new Request(r,{credentials:"omit",}):r;event.respondWith(fetch(request).then((response)=>{if(response.status===0){return response}
const newHeaders=new Headers(response.headers);newHeaders.set("Cross-Origin-Embedder-Policy",coepCredentialless?"credentialless":"require-corp");if(!coepCredentialless){newHeaders.set("Cross-Origin-Resource-Policy","cross-origin")}
newHeaders.set("Cross-Origin-Opener-Policy","same-origin");return new Response(response.body,{status:response.status,statusText:response.statusText,headers:newHeaders,})}).catch((e)=>console.error(e)))})}else{(()=>{const coi={shouldRegister:()=>!0,shouldDeregister:()=>!1,coepCredentialless:()=>!(window.chrome||window.netscape),doReload:()=>window.location.reload(),quiet:!1,...window.coi};const n=navigator;if(n.serviceWorker&&n.serviceWorker.controller){n.serviceWorker.controller.postMessage({type:"coepCredentialless",value:coi.coepCredentialless(),});if(coi.shouldDeregister()){n.serviceWorker.controller.postMessage({type:"deregister"})}}
if(window.crossOriginIsolated!==!1||!coi.shouldRegister())return;if(!window.isSecureContext){!coi.quiet&&console.log("COOP/COEP Service Worker not registered, a secure context is required.");return}
if(n.serviceWorker){n.serviceWorker.register(window.document.currentScript.src).then((registration)=>{!coi.quiet&&console.log("COOP/COEP Service Worker registered",registration.scope);registration.addEventListener("updatefound",()=>{!coi.quiet&&console.log("Reloading page to make use of updated COOP/COEP Service Worker.");coi.doReload()});if(registration.active&&!n.serviceWorker.controller){!coi.quiet&&console.log("Reloading page to make use of COOP/COEP Service Worker.");coi.doReload()}},(err)=>{!coi.quiet&&console.error("COOP/COEP Service Worker failed to register:",err)})}})()}

// Check in DOM
function check_isolated(){
    const el = document.createElement("div")
    el.innerHTML = `Cross origin isolated: ${window.crossOriginIsolated ? "✅" : "❌"}`
    document.body.append(el);
}
document.addEventListener("DOMContentLoaded", () => { check_isolated(); });