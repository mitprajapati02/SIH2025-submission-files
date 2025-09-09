const TypeErrorPage = () => {
    return (
        <main><div style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "linear-gradient(135deg, #89f7fe, #66a6ff)",
            fontFamily: "Arial, sans-serif",
            textAlign: "center",
            padding: "20px"
        }}>
            <h1 style={{
                fontSize: "3rem",
                marginBottom: "20px",
                background: "linear-gradient(90deg, #ffe259, #ffa751)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
            }}>
                Type Error
            </h1>
            <p style={{
                fontSize: "1.5rem",
                color: "#fff"
            }}>
                This page is under development.
            </p>
        </div></main>
    );
};

export default TypeErrorPage;