import { LargeCard } from "../components/LargeCard"

const cards = [
    {
        name: 'complect',
        title: 'vcardTitle1',
        text: 'vcardText1',
    },
    {
        name: 'assemble',
        title: 'vcardTitle2',
        text: 'vcardText2',
    },
    {
        name: 'morshinska',
        title: 'vcardTitle3',
        text: 'vcardText3',
    },
]

export const VerticalCardsSection = ({
    l=() => {}
}) => {
    return (
        <section className="grid grid-cols-1 gap-8 pb-0 max-w-[1600px]">
            {cards.map(({name, title, text}) => (
                <LargeCard
                    key={`large-card-${name}`}
                    name={name}
                    title={l(title)}
                    text={l(text)}
                />
            ))}
        </section>
    )
}