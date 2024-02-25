export default () => { 
    return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <script type="module">import { injectIntoGlobalHook } from "/@react-refresh";
    injectIntoGlobalHook(window);
    window.$RefreshReg$ = () => {};
    window.$RefreshSig$ = () => (type) => type;</script>
    
        <script type="module" src="/@vite/client"></script>
    
        <meta charset="UTF-8" />
        <link rel="icon" type="image/x-icon" href="/src/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>MarketPlace Products</title>
      </head>
    <body>
      <div id="root">Welcome to "MarketPlace Products" Dress Store Application!</div>
    </body>
    </html>` 
}