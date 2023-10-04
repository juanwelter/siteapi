<script>
function getRandomAdvice() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            document.getElementById('adviceText').textContent = data.slip.advice;
        })
        .catch(error => {
            console.error('Erro ao buscar conselho aleatório:', error);
        })
}

function searchAdvice() 
    const query = document.getElementById('searchInput').value;
    if (query) {
        fetch(`https://api.adviceslip.com/advice/search/${encodeURIComponent(query)}`)
            .then(response => response.json())
            .then(data => {
                const recentAdviceList = document.getElementById('recentAdviceList');
                recentAdviceList.innerHTML = '';

                if (data.slips && data.slips.length > 0) {
                    data.slips.forEach(slip => {
                        const li = document.createElement('li');
                        li.textContent = slip.advice;
                        recentAdviceList.appendChild(li);
                    });
                    document.getElementById('adviceText').textContent = 'Resultados da pesquisa:';
                } else {
                    document.getElementById('adviceText').textContent = 'Nenhum conselho encontrado.';
                }
            })
            .catch(error => {
                console.error('Erro ao buscar conselho:', error);
            })
    }


getRandomAdvice();
</script>

