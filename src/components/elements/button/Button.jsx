function Button(props) {
    const { children = 'click me', onSelect = ()=>{} } = props;

    return (
        <li>
            <button onClick={onSelect} >{children}</button>
        </li>
    )
}

export default Button;
