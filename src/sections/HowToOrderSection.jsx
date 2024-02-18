import { OrderCard } from "../components/OrderCard"

const cards = [
    {
        title: 'htoTitle1',
        text: 'htoText1'
    },
    {
        title: 'htoTitle2',
        text: 'htoText2'
    },
    {
        title: 'htoTitle3',
        text: 'htoText3'
    },
    {
        title: 'htoTitle4',
        text: 'htoText4'
    },
]

export const HowToOrderSection = ({
    l=() => {}
}) => {
    return (
        <section className="grid grid-cols-2 md:flex md:flex-col gap-4 mx-auto max-w-[1600px] pt-1">
            {cards.map(({title, text}, index) => (
                <OrderCard
                    key={`order${index + 1}`}
                    name={`order${index + 1}`}
                    title={l(title)}
                    text={l(text)}
                />
            ))}
        </section>
    )
}