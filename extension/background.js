chrome.action.onClicked.addListener((tab) => {
    if (tab.url) {
      fetch('http://127.0.0.1:8000/api/crawl_and_save_words/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE3MTEyNjUxLCJpYXQiOjE3MTcwOTQ2NTEsImp0aSI6IjA2MDZiMjYwZTQ2YjRmZjA4ZmRiZmIwZmZmYzA2NjQ4IiwidXNlcl9pZCI6MSwiZW1haWwiOiJuaWNvQGdtYWlsLmNvbSIsIm5hbWUiOiJOaWNvbGFzIEVtYW51ZWwiLCJ1c2VybmFtZSI6Im5pY29fZW1hbnVlbCJ9.o-M6VKzI2l7KiwdSRwpVry3tO4MMS38ln1SwIyXVMfo'
        },
        body: JSON.stringify({ url: tab.url })
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Erro:', error));
    }
  });
  