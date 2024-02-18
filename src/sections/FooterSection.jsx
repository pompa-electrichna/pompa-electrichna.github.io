const infos = [
    'info1'
]

export const FooterSection = ({
    l=() => {}
}) => {
    return (
        <section className="w-full bg-gradient-to-t from-sky-950 to-transparent min-h-[80px]">
            <div className="flex gap-4 justify-center w-full p-4 max-w-[1600px]">
                {infos.map((info) => (
                    <h3 key={info} className="text-white">
                        {l(info)}
                    </h3>
                ))}
            </div>
        </section>
    )
}