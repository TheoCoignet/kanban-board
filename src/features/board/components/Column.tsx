"use client"

import type { CardStatus } from '@/shared/types'
import { useBoardStore } from '../store/boardStore'
import { CardItem } from './Card'
import { AddCardForm } from './AddCardForm'

interface ColumnProps {
    id: CardStatus
    title: string
}

const STYLES: Record<CardStatus, { dot: string; badge: string; border: string}> = {
    'todo': { dot: 'bg-blue-400', badge: 'bg-blue-50 text-blue-800 border-blue-200', border: 'border-t-blue-400' },
    'in-progress': { dot: 'bg-blue-400', badge: 'bg-blue-50 text-blue-800 border-amber-200', border: 'border-t-amber-400' },
    'done':  { dot: 'bg-blue-400', badge: 'bg-blue-50 text-blue-800 border-green-200', border: 'border-t-green-400' },
}

export function Column({ id, title }: ColumnProps) {
    const cards = useBoardStore((s) =>
      s.cards).filter((c) => c.status === id)
    const s = STYLES[id]
    

    return (
        <div className={'bg-white rounded-xl border border-gray-200 border-t-4 ${s.border} overflow-hidden'}>
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
                <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${s.dot}`} />
                    <span className="text-sm font-medium text-gray-700">{title}</span>
                </div>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${s.badge}`}>
                    {cards.length}
                </span>
            </div>
            <div className="p-3 flex flex-col gap-2">
                {cards.map((card) => (
                    <CardItem key={card.id} card={card} />
                ))}
                <AddCardForm status={id} />
            </div>
        </div>
    )
}