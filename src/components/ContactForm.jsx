import { toast } from "react-toastify";
import joinClassNames from "../helpers/joinClassNames";
import useField from "../hooks/useField"
import { MailService } from "../services/MailService";
import { Button } from "./Button";
import { useState } from "react";

export const ContactForm = ({
    l=() => {},
    title=''
}) => {
    const [isSubmitted, updateSubmitted] = useState(false);

    const { 
        Field: NameField, 
        isValid: isName, 
        value: name, 
        wasFocused: focusedName
    } = useField({
        name: "name", 
        placeholder: l('namePlaceholder')
    });
    
    const { 
        Field: NumberField, 
        isValid: isNumber, 
        value: number, 
        wasFocused: focusedNumber 
    } = useField({
        name: "number",
        placeholder: l('numberPlaceholder')
    });

    const onSubmit = () => {
        updateSubmitted(true);

        MailService.sendRequest({
            name,
            number
        })
        .then(() => {
            toast.success(l('successMessage'));
        })
        .catch(() => {
            toast.error(l('errorMessage'));
        })
        .finally(() => {
            updateSubmitted(false);
        });
    }

    return (
        <form className="flex flex-col gap-2 max-w-[450px] md:max-w-full">
            <h3>
                {title}
            </h3>
            <h4 className="mb-6">
                {l('subTitle')}
            </h4>
            {NameField}
            <div className={joinClassNames(
                'text-red-400',
                (!focusedName || isName) && 'hidden'
            )}>
                {l('requiredError')}
            </div>
            {NumberField}
            <div className={joinClassNames(
                'text-red-400 mb-2',
                (!focusedNumber || isNumber) && 'hidden'
            )}>
                {l('requiredError')}
            </div>
            <Button
                label={l('submitLabel')}
                onClick={onSubmit}
                type="submit"
                disabled={(!isName || !isNumber) || isSubmitted}
            />
        </form>
    )
}