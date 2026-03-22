import { useBoardStore } from '../store/boardStore'
import type { CardStatus } from '@/shared/types'

export function useBoard() {
    const cards = useBoardStore((s) => s.cards)
    const addCard = useBoardStore((s) => s.addCard)
    const moveCard = useBoardStore((s) => s.moveCard)
    const deleteCard = useBoardStore((s) => s.deleteCard)

    const getCardsByStatus = (status: CardStatus) =>
        cards.filter((c) => c.status === status)

    const totalCards = cards.length
    const inProgress = getCardsByStatus('in-progress').length

    return { cards, addCard, moveCard, deleteCard, getCardsByStatus, totalCards, inProgress }
}