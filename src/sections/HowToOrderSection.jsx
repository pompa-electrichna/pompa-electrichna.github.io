import { OrderCard } from "../components/OrderCard"

const cards = [
    {
        title: 'Заявка',
        text: 'Залишаєте заявку на нашому сайті'
    },
    {
        title: 'Дзвінок',
        text: 'Менеджер уточнює деталі замовлення'
    },
    {
        title: 'Відправка',
        text: 'Доставляємо Новою Поштою протягом 1-3 днів'
    },
    {
        title: 'Оплата',
        text: 'Оплачуєте при отриманні на відділенні'
    },
]

export const HowToOrderSection = () => {
    return (
        <section className="grid grid-cols-2 gap-4 mx-auto max-w-[1600px] pt-1">
            {cards.map(({title, text}, index) => (
                <OrderCard
                    name={`order${index + 1}`}
                    text={text}
                    title={title}
                />
            ))}
        </section>
    )
}