const ContactPage = () => {
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
                <h1 style={{
                    fontSize: "3rem",
                    marginBottom: "10px",
                    background: "linear-gradient(90deg, #219EBC, #023047)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                }}>
                    Contact Us
                </h1>
                <p style={{
                    fontSize: "1.2rem",
                    color: "#333",
                    maxWidth: "600px",
                    marginBottom: "20px"
                }}>
                    Have questions or need help? Reach out to us anytime.
                </p>
                <p style={{ fontSize: "1rem", margin: "5px 0" }}>📧 Email: mp7702524@gmail.com</p>
                <p style={{ fontSize: "1rem", margin: "5px 0" }}>📞 Phone: +91 9099227702</p>
            </div>
        </main>
    );
};

export default ContactPage;