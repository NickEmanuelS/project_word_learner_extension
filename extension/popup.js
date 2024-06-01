document.getElementById('sendUrl').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    let activeTab = tabs[0];
    if (activeTab.url) {
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      if (username && password) {
        const url = 'http://127.0.0.1:8000/api/token/';
        const data = {
          username: username,
          password: password
        };

        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
          if (data.access) {
            const token = data.access;

            fetch('http://127.0.0.1:8000/api/crawl_and_save_words/', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
              },
              body: JSON.stringify({ url: activeTab.url })
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Erro:', error));
          } else {
            console.error('Erro ao obter o token:', data);
          }
        })
        .catch(error => console.error('Erro ao fazer a solicitação de token:', error));
      } else {
        console.error('Por favor, insira o nome de usuário e senha.');
      }
    }
  });
});
