function About(props) {
    const { name, age, address } = props;
    return (
        <div>Hello {name}, My {age} is and i live in {address}</div>
    )
}

export default About;
