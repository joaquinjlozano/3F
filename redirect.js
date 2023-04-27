const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.statusCode = 200;
  domain_original = req.host.split(':')[0];
  domain_redirect = domain_original;
  //tld = domain.split('.')[domain.split('.').length-1];
  if(domain_original.endsWith('tresdefebrero.gov.ar')){
    domain_redirect = domain_original.replace('tresdefebrero.gov.ar', 'tresdefebrero.gob.ar');
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('  <!DOCTYPE html>');
  res.write(' <html lang="es">');
  res.write('<head>');
  res.write('<meta charset="UTF-8">');
  //res.write('<meta http-equiv="refresh" content="10; url=https://' + domain_redirect + '">');
  res.write('<title>3F - Transición a tresdefebrero.gob.ar</title>');
  res.write('<link rel="stylesheet" href="estilos.css">');
  res.write('<<script type="text/javascript" src="countdown.js"></script>');
  res.write('</head>');
  res.write('<body>');
  res.write('<div class="contenedor">');
  res.write('<div class="aviso">');
  res.write('<h1>¡Atención!</h1>');
  res.write('<p>');
  //res.write(JSON.stringify(req.headers));
  res.write(domain_redirect);
  res.write('</p>');
  res.write('<p>Estamos camino a dejar de usar los nombres de dominio tresdefebrero.go<strong>v</strong>.ar<p>');
  res.write('<p>Redirigiendo a ' + domain_redirect + ' en <span id="seconds">10</span> ...</p>');
  res.write('<a id="link_redirect" href="http://' + domain_redirect + '" class="boton">Ir ahora</a>');
  res.write('</div>');
  res.write('<div class="imagen">');
  res.write('<img src="3f.png" alt="Imagen relevante">');
  res.write('</div>');
  res.write('</div>');
  res.write('</body>');
  res.end('</html>');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
