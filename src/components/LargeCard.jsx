import joinClassNames from "../helpers/joinClassNames"
import { Image } from "./Image"

export const LargeCard = ({
    name='',
    title='',
    text='',
    className='',
}) => {
    return (
        <div className={joinClassNames(
            'flex md:flex-col items-center gap-8 border-b-[1px] px-2 pb-8',
            className
        )}>
            <Image
                className="max-w-[400px] md:w-full rounded-xl"
                name={name}
            />
            <div className="flex flex-col justify-center gap-4 mb-auto">
                <h2>
                    {title}
                </h2>
                <h4>
                    {text}
                </h4>
                <Image
                    className="max-w-[120px] mx-auto mt-4"
                    name="blueLine"
                />
            </div>
        </div>
    )
}