async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function displayCustomers() {
  const output = document.getElementById('output');
  const customers = await fetchData('http://localhost:3000/customers');

  let html = '<ul>';
  for (const customer of customers) {
    html += `<li><a href="http://localhost:3000/customers/${customer.id}">${customer.name} (${customer.email})</a></li>`;
  }
  html += '</ul>';

  output.innerHTML = html;
}

displayCustomers();
