import Button from "../elements/button/Button"
import { InputForm } from "../elements/input/Index"

export const FormRegister = () => {
    return (
        <form>
            <InputForm Label={"fullname"} type={"text"} placeholder={"Inserty your name here"} name={"fullname"} />
            <InputForm Label={"email"} type={"text"} placeholder={"example@gmail.com"} name={"email"} />
            <InputForm Label={"password"} type={"password"} placeholder={"password"} name={"password"} />
            <InputForm Label={"********"} type={"password"} placeholder={"password"} name={"********"} />
            <Button children={"Register"} />
        </form>
    )
}