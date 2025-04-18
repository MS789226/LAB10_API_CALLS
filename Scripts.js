function

fetchDataWithFetch() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(data => {
            document.getElementById('dataDisplay').innerHTML = `<h3>${data.title}</h3><p>${data.body}</p>`;
        })
        .catch(error => {
            document.getElementById('message').innerText = `Fetch Error: ${error.message}`;
        });
}

function 

fetchDataWithXHR() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/2');
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            const data = JSON.parse(xhr.responseText);
            document.getElementById('dataDisplay').innerHTML = `<h3>${data.title}</h3><p>${data.body}</p>`;
        } else {
            document.getElementById('message').innerText = `XHR Error: ${xhr.statusText}`;
        }
    };
    xhr.onerror = function() {
        document.getElementById('message').innerText = 'Network Error';
    };
    xhr.send();
}

function
createPost(event) {
    event.preventDefault();
    const title = document.getElementById('postTitle').value;
    const body = document.getElementById('postBody').value;

    fetch('https://jsonplaceholder.typicode.com)

        
