import { React, useState } from "react";
import { Button } from "@chakra-ui/react";
import Cookies from 'js-cookie';

export function Test() {
    const [data, setData] = useState('');
    let u;

    function get() {
        fetch('data')
            .then(res => res.json())
            .then(rus => setData(rus));
    }

    return (
        <>
            <div>
                <h1>{data}</h1>
                <h1>cookie: {u}</h1>
                <Button onClick={get}>Get</Button>
            </div>
        </>
    )
}