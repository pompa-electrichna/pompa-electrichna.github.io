import joinClassNames from "../helpers/joinClassNames";

export const Button = ({
    label = "",
    onClick = () => {},
    disabled = false,
    type = "button",
    className = '',
}) => {
    return (
        <button
            className={joinClassNames(
                'w-full bg-black rounded-lg text-white py-3 px-6',
                className
            )}
            onClick={(e) => {
                e.preventDefault();
                onClick();
            }}
            type={type}
            disabled={disabled}
        >
            {label}
        </button>
    )
}