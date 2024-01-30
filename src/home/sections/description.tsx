import { useState } from "react"
import useInterval from "../../utils/interval"

const greeting = ["","ㅇ","아","안","안ㄴ","안녀","안녕","안녕ㅎ","안녕하","안녕핫","안녕하세","안녕하셍","안녕하세요","안녕하세요!"]


const Description = () => {
    const [landingGreeting, setLandingGreeting] = useState("")
    const [greetingCount, setGreetingCount] = useState(0)
    const [flag, setFlag] = useState(1)

    useInterval(() => {
        if (greetingCount >= greeting.length) {
            setTimeout(() => {
                setFlag(-1)
            }, 3000)
        }
        else if (greetingCount <= -1) {
            setTimeout(() => {
                setFlag(1)
            }, 1000)
        }
        else {
            setLandingGreeting(() => { return greeting[greetingCount] })
        }
        setGreetingCount((prev) => { return prev + flag });
    }, 200)

    return (
        <>
            <p className="text-2xl">
                {landingGreeting}
            </p>
        </>
    )
}

export default Description
