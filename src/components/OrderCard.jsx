import { Image } from "./Image"
import { Line } from "./Line"

export const OrderCard = ({
    title='',
    text='',
    name='',
    className='',
}) => {
    return (
        <div className="p-4 flex flex-col gap-3 border-[1px] rounded-xl">
            <div className="flex justify-between w-full">
                <h3>
                    {title}
                </h3>
                <Image
                    name={name}
                />
            </div>
            <Line />
            <h4>
                {text}
            </h4>
        </div>
    )
}