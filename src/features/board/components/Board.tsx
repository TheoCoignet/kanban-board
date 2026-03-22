"use client"

import { useStore } from 'zustand'
import { useBoardStore } from '../store/boardStore'
import { Column } from './Column'
import type { CardStatus } from '@/shared/types'

const COLUMNS: { id: CardStatus; title: string }[] = [
    { id: 'todo', title: 'A faire'},
    { id: 'in-progress', title: 'En cours'},
    { id: 'done', title: 'Terminé'},
]

export function Board() {
    const hydrated = useStore(useBoardStore, (s) => s !== undefined)
    const cards = useBoardStore((s) => s.cards)

    if (!hydrated) return null

    const total = cards.length
    const inProgress = cards.filter((c) => c.status === 'in-progress').length

    return (
        <div className="min-h-screen p-8">
            <div className="max-w-5xl mx-auto">

                <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-violet-500 flex items-center justify-center">
                            <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                                <rect x="1" y="1" width="6" height="9" rx="1.5" fill="white" opacity="0.9" />
                                <rect x="9" y="1" width="6" height="5" rx="1.5" fill="white" opacity="0.9" />
                                <rect x="9" y="8" width="6" height="7" rx="1.5" fill="white" opacity="0.5" />
                            </svg>
                        </div>
                        <div>
                            <h1 className="text-lg font-semibold text-gray-800">Mon Kanban</h1>
                            <p className="text-xs text-gray-400">Sprint en cours</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div className="bg-white border border-gray-200 rounded-lg px-3 py-1.5 text-xs text-gray-500">
                            <span className="font-medium text-gray-700">{total}</span> tâches
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg px-3 py-1.5 text-xs text-gray-500">
                            <span className="font-medium text-gray-700">{inProgress}</span> tâches
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    {COLUMNS.map((col) => (
                        <Column key={col.id} id={col.id} title={col.title} />
                    ))}
                </div>

            </div>
        </div>
    )
}