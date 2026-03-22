// Les différents statuts possibles d'une carte - type union littéral pour garantir
// l'exhaustivité des cas à la compilation
export type CardStatus = 'todo' | 'in-progress' | 'done'

// Carte représentant une tâche individuelle sur le board
export interface Card {
    id: string
    title: string 
    description?: string
    status: CardStatus
    createdAt: Date
}

// Colonne regroupant les cartes partageant le même statut
export interface Column {
    id: CardStatus
    title: string 
    cards: Card[]
}

// Board principal contenant toutes les colonnes
export interface Board {
    id: string 
    title: string 
    columns: Column[]
}