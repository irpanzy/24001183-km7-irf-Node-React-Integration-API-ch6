export const NewButton = ({ children, handlerAction }) => {

    return (
        <div>
            <button onClick={handlerAction}>{children}</button>
        </div>
    )
}
