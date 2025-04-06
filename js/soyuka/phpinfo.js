let runPhp = ""
class PHP {
  static buffer = [];
  static runPhp = null;
  static version = '';
  static async loadPhp(version = "7.4.31") {
    if (PHP.runPhp) {
      return PHP.runPhp;
    }

    const { ccall } = await import(`./php-web/${version}/php-web.mjs`).then(module => module.default({
      print(data) {
        if (!data) {
          return;
        }

        if (PHP.buffer.length) {
          PHP.buffer.push("\n");
        }
        PHP.buffer.push(data);
      },
    }));

    PHP.version = ccall("phpw_exec", "string", ["string"], ["phpversion();"]),
    console.log("PHP wasm %s loaded.", PHP.version);
    PHP.runPhp = (code) => ccall("phpw_run", null, ["string"], ["?>" + code]);
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
  const monaco_settings = {
    value: `<?php\n\n// Display PHP information\nphpinfo();\n\n?>`,
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
  // Initialize Monaco Editor
  require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs' }});
  require(['vs/editor/editor.main'], async function() {
    const editor = monaco.editor.create(customCodeContainer, monaco_settings);
    // Display / Hide text-editor
    useCustomCode.addEventListener('change', () => {
      customCodeContainer.style.display = useCustomCode.checked ? 'block' : 'none';
      if (useCustomCode.checked) {
        editor.layout();
      }
    });
    // Load Wasm Module...
    outputDiv.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Chargement de Wasmer et SoyukaPHP...';
    runPhp = await PHP.loadPhp(phpVersionSelect.value.split('/').pop());
    outputDiv.innerHTML = 'Prêt à exécuter PHP !';
    // Reload new Wasm module
    phpVersionSelect.addEventListener('change', async () => {
      outputDiv.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Chargement de la nouvelle version...';
      PHP.runPhp = null;
      runPhp = await PHP.loadPhp(phpVersionSelect.value.split('/').pop());
      outputDiv.innerHTML = 'Prêt à exécuter PHP !';
    });
    // Execute php-code (keyboard shortcut - "save action")
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 's') { e.preventDefault(); runBtn.click(); }
    });
    // Execute php-code (realtime on monaco-editor)
    editor.getModel().onDidChangeContent((v) => { runBtn.click(); });
    // Execute php-code (click button)
    runBtn.addEventListener('click', async() => {
      const outputDiv = document.getElementById('output');
      const useCustomCode = document.getElementById('useCustomCode');
      let bufferOutput = null;
      PHP.buffer = [];
      const phpCode = useCustomCode.checked ? editor.getValue() : '<?php phpinfo(); ?>';
      runPhp(phpCode);
      bufferOutput = PHP.buffer.join("");
      outputDiv.innerHTML = bufferOutput;
    });
  });
});