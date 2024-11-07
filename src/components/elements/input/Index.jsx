import { Input } from "./Input"
import { Label } from "./Label"

export const InputForm = ({Label, name, type, placeholder}) => {
    return (
        <>
        <Label htmlFor={name}>{Label}</Label>
        <Input type={type} placeholder={placeholder} name={name} />
        </>
    )
}