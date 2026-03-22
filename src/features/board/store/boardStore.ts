import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Card, CardStatus } from '@/shared/types'

// Défini les actions disponibles sur le store
interface BoardState {
    cards: Card[]
    addCard: (title: string, status: CardStatus) => void
    moveCard: (id: string, status: CardStatus) => void
    deleteCard: (id: string) => void
}

export const useBoardStore = create<BoardState>()(
    persist(
        (set) => ({
            cards: [],

            // Crée une nouvelle carte avec un ID unique généré nativement
            addCard: (title, status) =>
                set((state) => ({
                    cards: [
                        ...state.cards,
                        {
                            id: crypto.randomUUID(),
                            title,
                            status,
                            createdAt: new Date(),
                        },
                    ],
                })),
            
            // Met à jour uniquement le statut de la carte ciblée
            moveCard: (id, status) =>
                set((state) => ({
                    cards: state.cards.map((card) =>
                      card.id === id ? { ...card, status } : card
                ),
                })),
                // Filtre la carte supprimée sans transformer le tableau original
                deleteCard: (id) =>
                    set((state) => ({
                        cards: state.cards.filter((card) => card.id !== id),
                    })),
        }),
        { name: 'kanban-storage' }
    )
)