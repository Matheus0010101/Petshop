const form = document.getElementById('clienteForm');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
       
      const name = document.getElementById('name').value;
      const phone = document.getElementById('phone').value;
      const adress = document.getElementById('adress').value;
      const password = document.getElementById('password').value;

      const response = await fetch('http://localhost:3030/usuario/cadastrar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, adress, password })
      });

      const result = await response.json();

      if (result.success) {
        alert(result.message);
        window.location.href = "clientes.html";
      } else {
        alert(alert.message);
      }
});

const form_pets = document.getElementById('animalForm');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
       
      const name = document.getElementById('name').value;
      const age = document.getElementById('age').value;
      const type = document.getElementById('type').value;
      const owner = document.getElementById('owner').value;

      const response = await fetch('http://localhost:3030/pets/cadastrar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, age, type, owner })
      });

      const result = await response.json();

      if (result.success) {
        alert(result.message);
        window.location.href = "animais.html";
      } else {
        alert(alert.message);
      }
});