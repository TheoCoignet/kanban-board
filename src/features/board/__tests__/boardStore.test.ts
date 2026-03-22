import { act, renderHook } from '@testing-library/react'
import { useBoardStore } from '../store/boardStore'

beforeEach(() => {
    useBoardStore.setState({ cards: [] })
})

describe('boardStore', () => {
    it('ajoute une carte avec le bon statut', () => {
        const { result } = renderHook(() => useBoardStore())

        act(() => {
            result.current.addCard('Nouvelle tâche', 'todo')
        })

        expect(result.current.cards).toHaveLength(1)
        expect(result.current.cards[0].status).toBe('todo')
        expect(result.current.cards[0].title).toBe('Nouvelle tâche')
    })

    it('déplace une carte vers in-progress', () => {
        const { result } = renderHook(() => useBoardStore())

        act(() => result.current.addCard('Ma tâche', 'todo'))
        const id = result.current.cards[0].id

        act(() => result.current.moveCard(id, 'in-progress'))

        expect(result.current.cards[0].status).toBe('in-progress')
    })

    it('supprime une carte', () => {
        const { result } = renderHook(() => useBoardStore())

        act(() => result.current.addCard('A supprimer', 'todo'))
        const id = result.current.cards[0].id

        act(() => result.current.deleteCard(id))

        expect(result.current.cards).toHaveLength(0)
    })
})