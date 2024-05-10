function searchGoogle() {
    const query = document.getElementById('search-query').value;
    const apiKey = 'AIzaSyDxCu_Zz8KcgrDQ46mvTKFXooiCnPKQvgg';
    const customSearchEngineId = 'AIzaSyBsTK_pI0vZFjZZR8BdXrvbnFyHXopoSJQ';
    const url = `https://www.googleapis.com/customsearch/v1?q=${query}&key=${apiKey}&cx=${customSearchEngineId}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayResults(data);
        })
        .catch(error => {
            console.error('Error fetching search results:', error);
        });
}

function displayResults(data) {
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';

    if (data.items) {
        data.items.forEach(item => {
            const resultItem = document.createElement('div');
            resultItem.innerHTML = `<h3><a href="${item.link}">${item.title}</a></h3>
                                    <p>${item.snippet}</p>`;
            resultsContainer.appendChild(resultItem);
        });
    } else {
        resultsContainer.innerHTML = '<p>No results found.</p>';
    }
}
