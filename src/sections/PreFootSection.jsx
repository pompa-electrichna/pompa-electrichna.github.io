import { ContactForm } from "../components/ContactForm";
import { Image } from "../components/Image";

export const PreFootSection = ({
    l=() => {}
}) => { 
    return (
        <section className="max-w-[1200px] w-full">
            <div className="flex md:flex-col gap-16 items-center justify-center w-full border-[1px] rounded-xl p-6 md:p-3 shadow-lg">
                <Image name="logo1" className="w-[400px] md:w-full md:max-w-[400px] aspect-square rounded-xl" />
                <ContactForm
                    l={l}
                    title={l('formTitle2')}
                />
            </div>
        </section>
    )
}