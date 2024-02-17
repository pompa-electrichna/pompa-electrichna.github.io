export const InfoLabel = ({
    text=''
}) => {
    return (
        <section className="max-w-[1600px] mx-auto">
            <h2 className="mx-auto px-6 py-2 bg-gradient-to-r from-cyan-100 to-sky-200 rounded-xl text-center">
                {text}
            </h2>
        </section>
    )
}