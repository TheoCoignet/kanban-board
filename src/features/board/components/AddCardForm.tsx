"use client"

import { useState } from 'react'
import { useBoardStore } from '../store/boardStore'
import type { CardStatus } from '@/shared/types'

interface AddCardFormProps {
    status: CardStatus
}

export function AddCardForm({ status }: AddCardFormProps) {
    const [title, setTitle] = useState('')
    const [open, setOpen] = useState(false)
    const addCard = useBoardStore((s) => s.addCard)

    const handleSubmit = () => {
      // Ignore les titres vides ou composés uniquement d'espaces
        if (!title.trim()) return
        addCard(title.trim(), status)
        // Réinitialisation du formulaire après soumission
        setTitle('')
        setOpen(false)
    }

    // Etat fermé - simple bouton d'invitation
    if (!open) return (
        <button
          onClick={() => setOpen(true)}
          className="w-full text-sm text-gray-400 hover:text-gray-600 mt-2 py-1"
        >
          + Ajouter une carte
        </button>
    )

    // Etat ouvert - champ de saisie avec validation clavier et boutons
    return (
        <div className="mt-2 flex flex-col gap-2">
            <input
              autoFocus
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
              placeholder="Titre de la tâche..."
              className="w-full text-sm border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <div className="flex gap-2">
                <button
                  onClick={handleSubmit}
                  className="text-sm bg-blue-500 text-white px-3 py-1.5 rounded-md hover:bg-blue-600"
                  >
                    Ajouter
                  </button>
                  <button
                    onClick={() => { setOpen(false); setTitle('') }}
                    className="text-sm text-gray-400 hover:text-gray-600"
                    >
                     Annuler
                    </button>
              </div>
        </div>
    )
}