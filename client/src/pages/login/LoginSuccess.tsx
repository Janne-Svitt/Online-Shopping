import { FcApproval } from "react-icons/fc";
import { useEffect, useState } from "react";

const LoginSuccess = () => {
    const [timer, setTimer] = useState(5);

    useEffect(() => {
        const timerInterval = setInterval(() => {
            setTimer((prevTimer) => prevTimer - 1);
            console.log(timer);
        }, 1000);

        return () => {
            clearInterval(timerInterval);
        };
    }, [timer]);

    if (timer === 0) {
        window.location.assign("http://localhost:5173/");
    }

    return (
        <main style={{ marginTop: "140px" }}>
            <div style={{ margin: "auto", width: "80%" }}>
                <div
                    style={{
                        margin: "auto",
                        width: "50%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "50px",
                    }}
                >
                    <h2
                        style={{
                            margin: "auto",
                            width: "70%",
                            textAlign: "center",
                        }}
                    >
                        Account Successfully Created
                    </h2>
                    <FcApproval
                        style={{
                            margin: "auto",
                            width: "70%",
                            textAlign: "center",
                            fontSize: "100px",
                        }}
                    />
                    <h5
                        style={{
                            margin: "auto",
                            width: "100%",
                            textAlign: "center",
                        }}
                    >
                        You will be redirected to front page in {timer}
                    </h5>
                </div>
            </div>
        </main>
    );
};

export default LoginSuccess;
