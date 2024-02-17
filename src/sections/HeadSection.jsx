import { ContactForm } from "../components/ContactForm"
import { Image } from "../components/Image"

const formTitle = 'Помпа електрична';

export const HeadSection = () => {
    return (
        <section>
            <Image
                className='absolute top-0 h-full w-full object-cover z-[-1]'
                name='background'
            />
            <div className="flex gap-4 items-center justify-between w-full max-w-[900px]">
                <Image name="logo1" className="w-[400px] aspect-square rounded-xl" />
                <ContactForm
                    title={formTitle}
                />
            </div>
        </section>
    )
}