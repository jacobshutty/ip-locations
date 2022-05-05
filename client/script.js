const sampleIps = [
  '76.80.158.104',
  '173.181.16.0',
  '196.1.56.0',
  '103.130.232.0',
  '74.142.90.148',
  '66.26.105.168',
  '36.225.44.0',
  '2.8.100.0',
];

async function handleSearch(e) {
  e.preventDefault();

  const ip = document.querySelector('#ip').value;

  const data = await fetch(`/search?ip=${ip}`).then((d) => d.json());
  const lat = document.querySelector('#lat');
  const long = document.querySelector('#long');
  if (data.latitude && data.longitude) {
    lat.innerHTML = `Latitude: ${data.latitude}˚`;
    long.innerHTML = `Longitude: ${data.longitude}˚`;
  } else {
    lat.innerHTML = 'Invalid IP';
    long.innerHTML = '';
  }
}

function searchRandomIp() {
  const ip = sampleIps[Math.floor(Math.random() * (sampleIps.length - 1))];
  document.querySelector('#ip').value = ip;
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#ip-form');
  form.addEventListener('submit', handleSearch);

  const randomIpButton = document.querySelector('#random-ip');
  randomIpButton.addEventListener('click', searchRandomIp);
});
