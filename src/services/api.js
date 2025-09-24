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
            return response.json()
        } catch (error) {
            alert('Erro ao cadastrar receita')
            throw error
        }
    }
}

export default api