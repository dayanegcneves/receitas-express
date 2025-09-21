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
    }
}

export default api