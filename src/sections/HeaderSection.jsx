import { useState } from "react"
import OutSideClick from "../helpers/OutsideClick";
import locales from "../constants/locales";

export const HeaderSection = ({
    setLocale=() => {},
    locale={key: 'ua'},
}) => {
    const [isOpened, updateOpened] = useState(false);

    return (
        <header>
            <div className="flex justify-between px-4 py-2 max-w-[1600px] mx-auto">
                <div></div>
                <div className="relative flex justify-center">
                    <OutSideClick
                        onClick={() => updateOpened(false)}
                        isOpen={isOpened}
                    >
                        <button 
                            className="text-white px-4 py-2 flex items-center justify-center rounded-lg text-xl uppercase border-[1px] border-transparent hover:border-slate-100"
                            onClick={() => updateOpened((state) => !state)}
                        >
                            {locale.key}
                        </button>
                        {isOpened && (
                            <div className="absolute right-0 top-14 z-[20] w-[80px] bg-white rounded-lg shadow-xl py-1 px-2 flex flex-col gap-2">
                                {Object.values(locales).map(locale => (
                                    <button
                                        className="text-xl border-b-[1px] border-slate-300 hover:bg-sky-200 rounded-tr-xl rounded-tl-xl px-1 py-1"
                                        key={`lng${locale.key}`}
                                        onClick={(() => {
                                            updateOpened(false);
                                            setLocale(locale.key);
                                        })}
                                    >
                                        {locale.key}
                                    </button>
                                ))}
                            </div>
                        )}
                    </OutSideClick>
                </div>
            </div>
        </header>
    )
}