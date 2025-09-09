const ServicesPage = () => {
    return (
        <main>
            <div style={{
                width: "100%",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                background: "linear-gradient(135deg, #e3f2fd, #bbdefb)",
                fontFamily: "Arial, sans-serif",
                textAlign: "center",
                padding: "20px"
            }}>
                <h1 style={{
                    fontSize: "3rem",
                    marginBottom: "10px",
                    background: "linear-gradient(90deg, #ff416c, #ff4b2b)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                }}>
                    Our Services
                </h1>
                <ul style={{
                    listStyle: "none",
                    padding: "0",
                    fontSize: "1.2rem",
                    color: "#023047"
                }}>
                    <li style={{ margin: "10px 0" }}>📊 Dropout Risk Prediction</li>
                    <li style={{ margin: "10px 0" }}>👨‍🏫 Mentor & Faculty Dashboard</li>
                    <li style={{ margin: "10px 0" }}>📩 Automated Alerts & Reports</li>
                    <li style={{ margin: "10px 0" }}>🎓 Student Progress Tracking</li>
                </ul>
            </div>
        </main>
    );
};

export default ServicesPage;
