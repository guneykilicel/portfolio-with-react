import { useState } from "react";

const MobileMenu = () => {

    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
    };

    return (
        <>
            <div onClick={(e) => {
                handleToggle(!isActive)
            }} 
            className={`${isActive ? "" : "bg-white"} space-y-1 md:hidden cursor-pointer z-20`}>
                <div className="w-6 h-0.5 bg-black" />
                <div className="w-6 h-0.5 bg-black" />
                <div className="w-6 h-0.5 bg-black" />
            </div>
            <ul className={`${isActive ? "hidden" : ""} bg-indigo-900 absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-white text-center`}>
                <li>
                    <a href="#">homepage</a>
                </li>
                <li>
                    <a href="#">about me</a>
                </li>
                <li>
                    <a href="#">services</a>
                </li>
                <li>
                    <a href="#">works</a>
                </li>
                <li>
                    <a href="#">contact</a>
                </li>
            </ul>
        </>
    )
}
export default MobileMenu