fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((result) => {
        result.forEach(post => {
            let p = document.createElement('p');
            p.innerHTML = `${post.id}<br>${post.title}<br>${post.body}`
            document.body.append(p);
        })
    });