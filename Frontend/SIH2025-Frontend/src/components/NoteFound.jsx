import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <main>
            <div style={{
                width: "100%",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                background: "linear-gradient(135deg, #fdfbfb, #ebedee)",
                fontFamily: "Arial, sans-serif",
                textAlign: "center"
            }}>
                <h1
                    style={{
                        fontSize: "5rem",
                        margin: "0",
                        background: "linear-gradient(90deg, #ff416c, #ff4b2b)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                    }}  >
                    404
                </h1>
                <p
                    style={{
                        fontSize: "1.5rem",
                        marginBottom: "20px",
                        background: "linear-gradient(90deg, #1e3c72, #2a5298)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                    }} >
                    Page Not Found
                </p>

                <Link
                    to="/"
                    style={{
                        padding: "12px 24px",
                        backgroundColor: "#007bff",
                        color: "#fff",
                        textDecoration: "none",
                        borderRadius: "8px",
                        fontSize: "1rem",
                        transition: "0.3s"
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#0056b3"}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#007bff"}
                >
                    Go Home
                </Link>
            </div>
        </main>
    );
};
export default NotFound;