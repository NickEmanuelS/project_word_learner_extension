chrome.action.onClicked.addListener((tab) => {
    if (tab.url) {
      fetch('http://127.0.0.1:8000/api/crawl_and_save_words/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE3MDkzODc3LCJpYXQiOjE3MTcwNzU4NzcsImp0aSI6IjVmMjRiNzA3ZDM4MTQ5MWI4NTA4NDg0YWFhZTYzOGMwIiwidXNlcl9pZCI6MSwiZW1haWwiOiJuaWNvQGdtYWlsLmNvbSIsIm5hbWUiOiJOaWNvbGFzIEVtYW51ZWwiLCJ1c2VybmFtZSI6Im5pY29fZW1hbnVlbCJ9.WfN9YimGBqPr6JdAzc52s8q0ag8Bv8LRnrtKjo76GB4'
        },
        body: JSON.stringify({ url: tab.url })
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Erro:', error));
    }
  });
  