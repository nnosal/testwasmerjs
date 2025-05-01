        // ##############################
        //  1. LOAD: MONACO: CODE-EDITOR
        // ##############################
        require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs' }});
        require(['vs/editor/editor.main'], async function() {
            const useCustomCode = document.getElementById('useCustomCode');
            const customCodeContainer = document.getElementById('customCodeContainer');
            const runBtn = document.querySelector('#runDemo');
            const monaco_settings = {
                value: `<?php\n\n//var_dump(scandir('/'));\n\n// Display PHP information\nphpinfo();\n\n?>`,
                language: 'php',
                theme: 'vs-dark',
                automaticLayout: true,
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                fontSize: 14,
                lineNumbers: 'on',
                roundedSelection: false,
                scrollbar: {
                vertical: 'visible',
                horizontal: 'visible',
                useShadows: false,
                verticalScrollbarSize: 10,
                horizontalScrollbarSize: 10
                }
            };
            // Create monaco editor
            window.editor = monaco.editor.create(customCodeContainer, monaco_settings);
            window.editor_refresh = () => window.editor && (
                window.editor.layout(), // adjust layout
                window.editor.setValue(window.editor.getValue()) // trigger change
            );
            // Display / Hide text-editor
            useCustomCode.addEventListener('change', () => {
                customCodeContainer.style.display = useCustomCode.checked ? 'block' : 'none';
                if (useCustomCode.checked) editor_refresh();
            });
            runBtn.addEventListener('click', () => { editor_refresh(); });
        });
        // ###############################
        //  2. LOAD: SEANMORRIS: PHP-WASM
        // ###############################
        import { runPhpTags, PhpWeb } from 'https://cdn.jsdelivr.net/npm/php-wasm/PhpWeb.mjs';
        /*
        import { PhpCgiWorker } from 'https://cdn.jsdelivr.net/npm/php-cgi-wasm@0.0.9-alpha-32/PhpCgiWorker.mjs';
        // Spawn the PHP-CGI binary
        const phpCgi = new PhpCgiWorker({
            prefix:  '/php-wasm',
            docroot: '/persist/www',
            types: {
                jpg:  'image/jpeg',
                jpeg: 'image/jpeg',
                gif:  'image/gif',
                png:  'image/png',
                svg:  'image/svg+xml',
            }
        }); //['install','activate','fetch','message'].forEach(event => self.addEventListener(event, (e) => phpCgi.handleInstallEvent(event) ) );
        self.addEventListener('install',  event => phpCgi.handleInstallEvent(event));
        self.addEventListener('activate', event => phpCgi.handleActivateEvent(event));
        self.addEventListener('fetch',    event => phpCgi.handleFetchEvent(event));
        self.addEventListener('message',  event => phpCgi.handleMessageEvent(event));
        */
        //phpCgi.handleFetchEvent({request: new Request('https://www.mathieuweb.fr/calendrier/test_php.php')})
        //console.log(response);
        //document.getElementById('output').textContent = responseBody;

        // Sample 1: Simple script-php-tag
        //runPhpTags(document); //const phpNode = doc.querySelector('script[type="text/php8"]'); runPhpScriptTag(phpNode);
        
        // Sample 2: Advanced use
        const files = [
            { name: 'icudt72l.dat', parent: '/', url: 'https://unpkg.com/php-wasm-intl/icudt72l.dat' }
        ];
        ( window.phpIO = {input: '', output: '', error: ''}, window.php = new PhpWeb({
            // Custom params here...
            //sharedLibs: [await import('https://unpkg.com/php-wasm-phar')],
            //files
            //persist: {mountPath: '/persist'}
        }));
        //php.addEventListener('output', (e) => { phpResult += e.detail; });
        Object.keys(phpIO).forEach(event => php.addEventListener(event, (e) => { phpIO[event] += e.detail; }) );
        // Fonction d'exécution et d'affichage des résultats
        const runPhpCode = (code) => {
            // Force clean js buffer at each execution
            phpIO = {input: '', output: '', error: ''};
            return new Promise((resolve, reject) => {
                //php.inputString('This is a string of data provided on STDIN.');
                php.run(code)
                    .then(exitCode => resolve())
                    .catch(error => reject(error))
                    .finally(() => {
                        // Clean buffer
                        php.flush();
                        // Afficher le résultat dans un élément
                        document.getElementById('output').innerHTML = phpIO.output;
                    });
            });
        };

    php.addEventListener('ready', async () => {
        // Test 1
        phpIO.output = "Loading...";
        let code = '<?php echo "Hello World ! (from PHP)"; ?>';
        //let code = "<?php echo file_get_contents('php://stdin'); ?>";
        await runPhpCode(code);  // Exécution du premier code
        
        // Test 2    
        //let code2 = '<?php echo "B"; ?>';
        //await runPhpCode(code2); // Exécution du deuxième code
        //phpIO.output = "✅ Executed";

        // Allow override with code-editor
        editor.getModel().onDidChangeContent((v) => { runPhpCode(editor.getValue()); });
    });
