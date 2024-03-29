import { SmallCard } from "../components/SmallCard"

const cards = [
    {
        name: 'logo2',
        label: 'labelLogo'
    },
    {
        name: 'sizes',
        label: 'labelSizes'
    },
    {
        name: 'battery',
        label: 'labelBattery'
    }
]

export const HorizontalCardsSection = ({
    l=() => {}
}) => {

    return (
        <section className="grid grid-cols-3 md:flex md:flex-col gap-6 mx-auto max-w-[1600px]">
            {cards.map(({label, name}) => (
                <SmallCard
                    key={`head-card-${name}`}
                    label={l(label)}
                    name={name}
                />
            ))}
        </section>
    )
}