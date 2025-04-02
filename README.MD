# TestWasmerJS - POC WasmerJS + Github Pages

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-blue.svg)](https://nnosal.github.io/testwasmerjs/)

POC très rapide démontrant l'exécution de modules Wasm dans le navigateur via Wasmer-JS SDK, sans backend ni build complexe.

## A Propos

1. Le projet utilise "[wasmer](https://github.com/wasmerio/wasmer)", qui dispose d'un registre de wasm prêt à l'emploi (https://wasmer.io/products/registry).
2. J'utilise la partie SDK JS: https://docs.wasmer.io/sdk/wasmer-js qui est la plus intéréssante car on peux la packager dans n'importe quel page html, même sur github pages.
3. J'ai configuré vite mais il n'est pas nécessaire, l'idée est de montrer simplement qu'il n'y pas besoin de compilation moderne (typescript, webpack, etc) ni de déploiement spécifique pour utiliser du WASM. 

## Pourquoi?

Cela fait près de 10 ans que le [WASM](https://en.wikipedia.org/wiki/WebAssembly) est en cours de développement, mais ce n'est que récemment que nous avons des applications plus matures pour être utiliser dans les navigateurs web. Son usage viendra compléter la containerisation qui succède à la virtualisation. Offrant dans le futur d'avantage de facilité pour prévisualiser dans son navigateur une maquette, une snapshot, ou même disposé d'une interface de gestion découplée directement depuis le dépot Github (d'où ce POC).

## 🧩 Démos disponibles

| Demo | Statut | Lien Wasmer |
| --- | --- | --- |
| PHP | ✅ Fonctionnel | [wasmer.io/php/php](https://wasmer.io/php/php) |
| Python | ✅ Fonctionnel | [wasmer.io/python/python](https://wasmer.io/python/python) |
| WordPress | ⚠️ Limité | [wasmer.io/wasmer-examples/php-wasmer-starter](https://wasmer.io/wasmer-examples/php-wasmer-starter) |

## 🌟 Fonctionnalités clés

- 🚀 **Zéro configuration / compilation** - Fonctionne avec du HTML/JS pur.
- 📦 **Dépendances incluses** - Wasmer-JS embarqué localement.
- 🔥 **3 démos intégrées** :
  - PHP (via WASM)
  - Python (via WASM)
  - WordPress (limité par la configuration réseau)
- 🌐 **Testable immédiatement (via GitHub Pages)** - grâce à "Github Actions" + le workaround "[coi-serviceworker](https://github.com/gzuidhof/coi-serviceworker)" afin de permettre la compliance CORS nécessaire pour executer Wasmer.

## 🛠 Test: développement (optionnel)

> Utilise [bun.sh](https://bun.sh) pour remplacer npm et [mise.jdx.dev](https://mise.jdx.dev/) pour setup l'environement.

0. Installer les outils et dépendances Node : `mise install && mise r install`
1. Avec Vite (recommandé) : `mise r vite`
2. Avec Caddy (alternative): `mise r caddy`
3. ( Exemple dist-build sans rollup: `bun run build` )

### 🚀 Test: Production

Le projet est pré-configuré pour GitHub Pages. Un workflow s'occupe d'installer les dépendances et publier le rendu statique : [https://github.com/nnosal/testwasmerjs](https://github.com/nnosal/testwasmerjs)

## ⚠️ Limitations connues

1. **WordPress** nécessite l'option `--net` qui n'est pas encore disponible dans Wasmer-JS ([issue #4406](https://github.com/wasmerio/wasmer/issues/4406)). 
   - Pour tester WordPress en local, il faut encore utiliser la CLI Wasmer : `wasmer run wasmer-examples/php-wasmer-starter --net`.
2. La version CDN via unpkg "[https://unpkg.com/@wasmer/sdk@0.9.0/dist/index.mjs](https://unpkg.com/@wasmer/sdk@0.9.0/dist/index.mjs)" peut causer des timeouts Cloudflare d'où l'import via npm.
3. Testé non fonctionnel sur Firefox de mon côté, tout les moteurs Webkit sont OK.

## 📜 Licence

MIT License - Nicolas NOSAL - 2025


