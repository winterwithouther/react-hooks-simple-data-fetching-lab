import React, { useEffect, useState } from "react"
import { isElement } from "react-dom/test-utils";

function App() {
    const [image, setImage] = useState({});
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {
            setImage(data);
            setLoaded(true)
        })
    }, [])

    if (!loaded) {
        return (
            <h3>
                Loading...
            </h3>
        )
    }

    return (
        <img src={image.message} alt="A Random Dog">

        </img>
    )
}

export default App