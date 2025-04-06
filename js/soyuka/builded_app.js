let runPhp = ""
class PHP {
  static buffer = [];
  static runPhp = null;
  static version = '';
  static async loadPhp(version = "7.4.31") {
    //const { ccall, FS } = await import(`./php-web/builded_app/demo_jolitypo/php-web.mjs`).then(module => module.default({
    const { ccall, FS } = await import(`./php-web/builded_app/php-web.mjs`).then(module => module.default({
      print(data) {
        if (!data) { return; }
        if (PHP.buffer.length) { PHP.buffer.push("\n"); }
        PHP.buffer.push(data);
      },
    }));
    // Expose wasm filesystem
    window.FS = FS;
    // Debug in console-log: phpversion()
    PHP.version = ccall("phpw_exec", "string", ["string"], ["phpversion();"]); console.log("PHP wasm %s loaded.", PHP.version);
    // Run php file..
    PHP.runPhp = ( php_file_path ) => ccall("phpw", null, ["string"], [php_file_path]);
    return PHP.runPhp;
  }
}

document.addEventListener("DOMContentLoaded", async() => {
  // Load CORS if available
  if (typeof check_isolated === 'function') check_isolated();
  // Define dom elements to re-use
  const outputDiv = document.getElementById('output');
  const phpVersionSelect = document.getElementById('phpVersion');
  const useCustomCode = document.getElementById('useCustomCode');
  const customCodeContainer = document.getElementById('customCodeContainer');
  const runBtn = document.querySelector('#runDemo');
  // Define vars to re-use
  const php_file_path = "/app/src/index.php";
  const monaco_settings = {
    //value: `<?php\n\n// Include composer file if available...\n@include_once __DIR__ . '/vendor/autoload.php';\n\n// Display PHP information\necho __FILE__;\nphpinfo();\n\n?>`,
    value: `<?php

// Include composer file if available...
@include_once __DIR__ . '/vendor/autoload.php';
try { $person = Faker\\Factory::create('fr_FR'); printf('Bonjour, %s ! Vous êtes de la ville: %s.', $person->name, $person->city ); } catch (Throwable $t) { printf('⚠️ %s',$t->getMessage()); }

// Display PHP information
echo "<hr/>"; echo __FILE__;
phpinfo();

?> `,
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
  // Require Monaco Editor and when loaded...
  require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs' }});
  require(['vs/editor/editor.main'], async function() {
    // Global methods
    window.reloadMonacoContent = (click_bool=1) => {
      // Delete old file
      window.FS.unlink( php_file_path );
      // Create new file with editor content
      window.FS.writeFile( php_file_path, editor.getModel().getValue() );
      // Trigger runphp() from btn
      if(click_bool) runBtn.click(); 
    }
    // Initialize Monaco Editor
    const editor = monaco.editor.create(customCodeContainer, monaco_settings);
    // Display / Hide text-editor
    useCustomCode.addEventListener('change', () => {
      customCodeContainer.style.display = useCustomCode.checked ? 'block' : 'none';
      if (useCustomCode.checked) { editor.layout(); }
    });
    // Load Wasm Module...
    outputDiv.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Chargement de Wasmer et SoyukaPHP...';
    runPhp = await PHP.loadPhp( phpVersionSelect.value.split('/').pop() ); // window.runPhp = 
    outputDiv.innerHTML = 'Prêt à exécuter PHP !';
    // Reload new Wasm module
    phpVersionSelect.addEventListener('change', async () => {
      outputDiv.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Chargement de la nouvelle version...';
      PHP.runPhp = null;
      runPhp = await PHP.loadPhp( phpVersionSelect.value.split('/').pop() ); //window.runPhp = 
      outputDiv.innerHTML = 'Prêt à exécuter PHP !';
    });
    // Execute php-code (keyboard shortcut - "save action")
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 's') { e.preventDefault(); runBtn.click(); }
    });
    // Update php-code (realtime on monaco-editor)
    editor.getModel().onDidChangeContent((v) => {  
      window.reloadMonacoContent(); 
    });
    // Execute php-code (click button)
    runBtn.addEventListener('click', async() => {
      const outputDiv = document.getElementById('output');
      const useCustomCode = document.getElementById('useCustomCode');
      let bufferOutput = null;
      PHP.buffer = [];
      // Reload index.php file if override with monaco (no click -> avoid click loop)
      if (useCustomCode.checked) { window.reloadMonacoContent(0); }
      // Execute index.php
      runPhp(php_file_path);
      bufferOutput = PHP.buffer.join("");
      // Display
      outputDiv.innerHTML = bufferOutput;
    });
  });
});