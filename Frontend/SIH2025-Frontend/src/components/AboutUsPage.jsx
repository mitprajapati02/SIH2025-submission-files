
const AboutUsPage = () => {
    return (
        <main>
            <div style={{
                width: "100%",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                background: "linear-gradient(135deg, #fff3e0, #ffe0b2)",
                fontFamily: "Arial, sans-serif",
                textAlign: "center",
                padding: "20px"
            }}>
                <h1 style={{
                    fontSize: "3rem",
                    marginBottom: "10px",
                    background: "linear-gradient(90deg, #1e3c72, #2a5298)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                }}>
                    About Us
                </h1>
                <p style={{
                    fontSize: "1.2rem",
                    color: "#444",
                    maxWidth: "700px",
                    lineHeight: "1.6"
                }}>
                    We are <strong>TasselTurners</strong>, a passionate team building solutions
                    to help educational institutions reduce dropout rates.
                    Our mission is to empower mentors, faculty, and administrators with
                    insights that guide students toward graduation success 🎓.
                </p>
            </div>
        </main>
    );
};

export default AboutUsPage;
