import joinClassNames from "../helpers/joinClassNames";
import useField from "../hooks/useField"
import { MailService } from "../services/MailService";
import { Button } from "./Button";

const subTitle = 'Електричний насос для дому, офісу, дачі.\n Незамінна річ на кожен день.';
const submitLabel = 'Замовити';

const requiredError = 'Поле має бути заповненим (3-50 символів).';

const namePlaceholder = `Ваше ім'я`;
const numberPlaceholder = `Ваш номер`;

export const ContactForm = ({
    title=''
}) => {
    const { 
        Field: NameField, 
        isValid: isName, 
        value: name, 
        wasFocused: focusedName
    } = useField({
        name: "name", 
        placeholder: namePlaceholder
    });
    
    const { 
        Field: NumberField, 
        isValid: isNumber, 
        value: number, 
        wasFocused: focusedNumber 
    } = useField({
        name: "number",
        placeholder: numberPlaceholder
    });

    const onSubmit = () => {
        MailService.sendRequest({
            name,
            number
        });
    }

    return (
        <form className="flex flex-col gap-2 max-w-[450px]">
            <h3>
                {title}
            </h3>
            <h4 className="mb-6">
                {subTitle}
            </h4>
            {NameField}
            <div className={joinClassNames(
                'text-red-400',
                (!focusedName || isName) && 'hidden'
            )}>
                {requiredError}
            </div>
            {NumberField}
            <div className={joinClassNames(
                'text-red-400 mb-2',
                (!focusedNumber || isNumber) && 'hidden'
            )}>
                {requiredError}
            </div>
            <Button
                label={submitLabel}
                onClick={onSubmit}
                type="submit"
                disabled={!isName || !isNumber}
            />
        </form>
    )
}