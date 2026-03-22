import type { Card, CardStatus } from '@/shared/types'
import { useBoardStore } from '../store/boardStore'

interface CardProps {
    card: Card
}

const ACCENT: Record<CardStatus, string> = {
    'todo': 'border-l-blue-400',
    'in-progress': 'border-l-amber-400',
    'done': 'border-l-green-500',
}

const NEXT_STATUS: Record<CardStatus, CardStatus | null> = {
    'todo': 'in-progress',
    'in-progress': 'done',
    'done': null,
}

export function CardItem({ card }: CardProps) {
    const { moveCard, deleteCard } = useBoardStore()
    const next = NEXT_STATUS[card.status]
    const isDone = card.status === 'done'

    return (
        <div className={`bg-white rounded-lg border border-gray-100 border-1-4 ${ACCENT[card.status]} p-3 shadow-sm`}>
            <p className={`text-sm font-medium ${isDone ? 'line-through text-gray-400' : 'text-gray-700'}`}>
              {card.title}
            </p>
            <div className="flex gap-2 mt-2">
                {next && (
                    <button
                      onClick={() => moveCard(card.id, next)}
                      className="text-xs text-blue-500 hover:text-blue-700"
                      >
                        Avancer →
                    </button>
                )}
                <button
                  onClick={() => deleteCard(card.id)}
                  className="text-xs text-red-400 hover:text-red-600 ml-auto"
                  >
                    Supprimer
                  </button>
            </div>
        </div>
    )
}