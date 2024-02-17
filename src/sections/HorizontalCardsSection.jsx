import { SmallCard } from "../components/SmallCard"

const cards = [
    {
        name: 'logo2',
        label: 'Активується одним натисканням'
    },
    {
        name: 'sizes',
        label: 'Підходить до будь-яких бутилів'
    },
    {
        name: 'battery',
        label: 'Ефективний акумулятор'
    }
]

export const HorizontalCardsSection = () => {
    return (
        <section className="grid grid-cols-3 gap-6 mx-auto max-w-[1600px]">
            {cards.map(({label, name}) => (
                <SmallCard
                    key={`head-card-${name}`}
                    label={label}
                    name={name}
                />
            ))}
        </section>
    )
}