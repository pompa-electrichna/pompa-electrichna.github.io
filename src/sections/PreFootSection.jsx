import { ContactForm } from "../components/ContactForm";
import { Image } from "../components/Image";

const formTitle = 'Замовити зараз';

export const PreFootSection = () => {
    return (
        <section className="max-w-[1200px] w-full">
            <div className="flex gap-16 items-center justify-center w-full border-[1px] rounded-xl p-6 shadow-lg">
                <Image name="logo1" className="w-[400px] aspect-square rounded-xl" />
                <ContactForm
                    title={formTitle}
                />
            </div>
        </section>
    )
}