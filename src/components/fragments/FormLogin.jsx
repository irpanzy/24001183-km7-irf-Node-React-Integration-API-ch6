import Button from "../elements/button/Button"
import { InputForm } from "../elements/input/Index"

export const FormLogin = () => {
    return (
        <div>
            <form>
                <InputForm Label={"email"} type={"text"} placeholder={"example@gmail.com"} name={"email"} />
                <InputForm Label={"password"} type={"password"} placeholder={"password"} name={"********"} />
                <Button children={"Login"} />
            </form>
        </div>
    )
}