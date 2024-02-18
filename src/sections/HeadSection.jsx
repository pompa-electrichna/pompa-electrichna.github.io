import { ContactForm } from "../components/ContactForm"
import { Image } from "../components/Image"

export const HeadSection = ({
    l=() => {}
}) => {
    return (
        <section>
            <Image
                className='absolute top-0 h-full w-full object-cover z-[-1]'
                name='background'
            />
            <div className="flex md:flex-col gap-4 items-center justify-between w-full max-w-[900px]">
                <Image name="logo1" className="w-[400px] md:w-full md:max-w-[400px] aspect-square rounded-xl" />
                <ContactForm
                    l={l}
                    title={l('formTitle')}
                />
            </div>
        </section>
    )
}