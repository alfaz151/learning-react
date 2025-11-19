import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client"

let timer;

const App = () => {
    
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [miliseconds, setMiliseconds] = useState(0);

    const startTimer = () => {

        if (timer) return;

        timer = setInterval(() => {
            setMiliseconds((ms) => {
                if(ms + 10 >= 1000) {
                    setSeconds((sec) => sec + 1)
                    return 0;
                }
                return ms + 10;
            })
        }, 10);
    };

    const stopTimer = () => { 
        if (timer) clearInterval(timer);
        timer = null;
    };

    // useEffect(() => {
    //     setSeconds(miliseconds / 1000)
    // }, [miliseconds]);

    useEffect(() => {
        setMinutes(seconds / 60)
    }, [seconds]);

    useEffect(() => {
        setHours(minutes / 60)
    }, [minutes])

    return (
        <>
            <div className="container">
                <div className="timer-container">
                    <h1 className="hours">{Math.floor(hours)}</h1>
                    <h1 className="minutes">{Math.floor(minutes)}</h1>
                    <h1 className="seconds">{Math.floor(seconds)}</h1>
                    <h1 className="seconds">{Math.floor(miliseconds / 10)}</h1>
                </div>
                <div className="timer-button">
                    <div>
                        <button onClick={startTimer}>Start</button>
                    </div>
                    <div>
                        <button onClick={stopTimer}>Stop</button>
                    </div>
                    <div>
                        <button onClick={() => {
                            stopTimer();
                            setMiliseconds(0);
                            setSeconds(0);
                        }}>Reset</button>
                    </div>
                </div>
            </div>
        </>
    )
}

const root = createRoot(document.getElementById('root'));
root.render(<App />)

