import axios from "axios";

export const client =
    axios.create({
        baseURL: process.env.NEXT_PUBLIC_BASEURL,
        headers: {
            "Content-Type": "application/json"
        },
    })
