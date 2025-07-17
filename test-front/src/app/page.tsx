"use client"
import {useEffect, useState} from "react";

export default function Home() {

    const [apiUrl, setApiUrl] = useState<string | null>(null);

    const [msg, setMsg] = useState<string>()

    const fetchData = async (lang: "kr" | "en") => {
        fetch(apiUrl + `/greeting?lang=${lang}`)
            .then(res => res.text())
            .then(data => setMsg(data));
    }
    useEffect(() => {
        fetch('/api/config')
            .then(res => res.json())
            .then(data => setApiUrl(data.apiUrl))
            .catch(error =>
                console.error("Failed to fetch config:", error));
    }, []);


    return (
        <div>
            <h1>Hello</h1>
            <select name="lang" id="" onChange={(e) => {
                if (e.target.value === "en" || e.target.value === "kr") {
                    fetchData(e.target.value);
                }
            }}>

                <option value="">Select one</option>
                <option value="kr">kr</option>
                <option value="en">en</option>
            </select>
            {
                msg && <h1>{msg}</h1>
            }
        </div>
    )
        ;
}
