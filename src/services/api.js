const ENDPOINT = 'http://localhost:3000/receitas'

const api = {
    async buscarReceitas() {
        try {
            const response = await fetch(ENDPOINT)
            return response.json()
        } catch (error) {
            alert('Erro ao buscar receitas')
            throw error
        }
    },

    async cadastrarReceita(receita) {
        try {
            const response = await fetch(ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(receita)
            })

            if (response.ok) {
                return await response.json();
            } else {
                alert("Erro ao cadastrar receita");
                throw new Error("Erro na requisição: " + response.status);
            }

        } catch (error) {
            alert('Erro ao cadastrar receita')
            throw error
        }
    },

    async filtrarReceitas(palavra) {
        const palavraEmMinusculo = palavra.toLowerCase()
        try {
            const receitas = await this.buscarReceitas()
            const receitasEncontradas = receitas.filter((receita) => {
                return receita.nome.toLowerCase().includes(palavraEmMinusculo)
            })
            return receitasEncontradas
        } catch (error) {
            alert('Erro ao buscar receita')
            throw error;
            
        }
    }
}

export default api