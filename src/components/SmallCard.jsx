import joinClassNames from "../helpers/joinClassNames"
import { Image } from "./Image"

export const SmallCard = ({
    name='',
    className='',
    label=''
}) => {
    return (
        <div className={joinClassNames(
            'p-4 shadow-lg rounded-xl bg-cyan-100',
            className
        )}>
            <Image
                className="w-[250px] aspect-square mb-4 mx-auto rounded-xl"
                name={name}
            />
            <h4 className="text-center">
                {label}
            </h4>
        </div>
    )
}