import { useState } from "react";
import "./NavbarWithStyling.css";
import About from "../about/About";
import Button from "../elements/button/Button";

const NavbarWithStyling = ({ menu, name, age, address }) => {
    const [biodata, setBiodata] = useState({});

    function handleClick(name) {
        console.log(`clicked ${name}`);
        setBiodata({ ...biodata, name: name, age: age, address: address });
    }

    return (
        <>
            <div className="navbar">
                <header></header>
                <h1 className="title">FSW 2 - {name}</h1>
                <ul className="list">
                    <li className="item">
                        <a href="#" className="link">
                            Home
                        </a>
                    </li>
                    {menu &&
                        menu.map((item, index) => (
                            <li key={index} className="item">
                                <a href="#" className="link">
                                    {item}
                                </a>
                            </li>
                        ))}
                    <li className="item">
                        <a href="#" className="link">
                            Logout
                        </a>
                    </li>
                    <Button onSelect={() => handleClick(name)}>Click me</Button>
                </ul>
            </div>
            <div>
                <About name={biodata.name} age={biodata.age} address={biodata.address} />
            </div>
        </>
    );
};

export default NavbarWithStyling;
