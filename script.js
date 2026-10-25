const ipElement = document.getElementById('server-ip');
document.getElementById('copy-ip').addEventListener('click', async () => {
  const ip = ipElement.textContent.trim();
  if (ip.includes('PENDIENTE')) {
    alert('La IP del servidor todavía no está configurada.');
    return;
  }
  try {
    await navigator.clipboard.writeText(ip);
    document.getElementById('copy-ip').textContent = '¡IP copiada!';
    setTimeout(() => document.getElementById('copy-ip').textContent = 'Copiar IP', 1600);
  } catch {
    alert('No se pudo copiar automáticamente. IP: ' + ip);
  }
});
document.getElementById('year').textContent = new Date().getFullYear();
