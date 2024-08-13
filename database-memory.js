import { randomUUID } from "node:crypto"

export class DatabaseMemory {
#livros = new Map()
    
    create(livro) {
        const livroId = randomUUID()

        this.#livros.set(livroId, livro)
    }

    list() {
        return Array.from(this.#livros.entries()).map((livroArray) =>{
            const id = livroArray[0]
            const data = livroArray [1]

            return {
                id,
                ...data, 
            }
        })

    }
    


update(id, livro) {
    this.#livros.set(id, livro)
}
delete(id) {
    this.#livros.delete(id)
}

}