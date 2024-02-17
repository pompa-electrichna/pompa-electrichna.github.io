export const AppLayout = ({
    children
}) => {
    return (
        <main className="flex flex-col items-center w-screen max-w-screen overflow-x-hidden">
            {children}
        </main>
    )
}