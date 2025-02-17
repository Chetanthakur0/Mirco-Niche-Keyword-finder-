async function searchKeywords() {
    const keyword = document.getElementById('keywordInput').value;
    const response = await fetch(`https://api.example.com/search?keyword=${keyword}`);
    const data = await response.json();
    displayResults(data);
}

function displayResults(data) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    data.forEach(item => {
        const p = document.createElement('p');
        p.textContent = `Keyword: ${item.keyword}, Volume: ${item.volume}, Difficulty: ${item.difficulty}`;
        resultsDiv.appendChild(p);
    });
}
