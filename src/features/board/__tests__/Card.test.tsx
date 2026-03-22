import { render, screen } from '@testing-library/react'
import { CardItem } from '../components/Card'

const mockCard = {
    id: '1',
    title: "Tâche test",
    status: 'todo' as const,
    createdAt: new Date(),
}

describe('Carditem', () => {
    it("affiche le titre de la carte", () => {
        render(<CardItem card={mockCard} />)
        expect(screen.getByText('Tâche test')).toBeInTheDocument()
    })
})