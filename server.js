// Dependency-free static file server for Railway. No patient data is collected server-side.
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const PORT = Number(process.env.PORT || 3000);
const root = __dirname;
const mime = {'.html':'text/html; charset=utf-8','.ico':'image/x-icon','.svg':'image/svg+xml','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8'};
http.createServer((req,res)=>{
  const url = new URL(req.url, 'http://localhost');
  if (url.pathname === '/health') {res.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'});return res.end('OK');}
  if (url.pathname !== '/' && url.pathname !== '/index.html') {res.writeHead(404);return res.end('Not found');}
  const file = path.join(root,'index.html');
  res.writeHead(200, {'Content-Type':mime['.html'], 'X-Content-Type-Options':'nosniff', 'Referrer-Policy':'no-referrer', 'Cache-Control':'no-cache'});
  fs.createReadStream(file).on('error',()=>res.destroy()).pipe(res);
}).listen(PORT,'0.0.0.0',()=>console.log(`HealthOne listening on 0.0.0.0:${PORT}`));
