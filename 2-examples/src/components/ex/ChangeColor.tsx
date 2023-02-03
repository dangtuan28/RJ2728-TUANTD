import React, { useState } from 'react'

type Props = {}

function ChangeColor(props: Props) {
    const [colorState, setColorState] = useState<string>("red");
    const handleChangeRed = () => {
        console.log("red");
        setColorState("red")
    };
    const handleChangeBlue = () => setColorState("blue");

    return (
        <>
            <div style={{ color: colorState }}>ChangeColor</div>
            <button onClick={handleChangeRed} disabled={colorState === "red"}>Red</button>
            <button onClick={handleChangeBlue} disabled={colorState !== "red"}>Blue</button>
        </>
    );
}
export default ChangeColor;