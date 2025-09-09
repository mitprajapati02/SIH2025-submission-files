import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/DropSheet.css";

function DropSheetLayout() {
    const [attendance, setAttendance] = useState(null);
    const [marks, setMarks] = useState(null);
    const [fees, setFees] = useState(null);

    const [minAttendance, setMinAttendance] = useState(75);
    const [minMarks, setMinMarks] = useState(35);
    const [feeStatus, setFeeStatus] = useState("due");
    const [mentorName, setMentorName] = useState("John Doe");
    const [mentorEmail, setMentorEmail] = useState("john@example.com");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        if (attendance) formData.append("attendance", attendance);
        if (marks) formData.append("marks", marks);
        if (fees) formData.append("fees", fees);

        formData.append("min_attendance", minAttendance);
        formData.append("min_marks", minMarks);
        formData.append("fee_status", feeStatus);
        formData.append("mentor_name", mentorName);
        formData.append("mentor_email", mentorEmail);

        try {
            const response = await fetch("http://127.0.0.1:5000/dropout", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (response.ok) {
                // ✅ Redirect to admin dashboard with backend JSON
                navigate("/admin-dashboard", { state: { data } });
            } else {
                alert("Error: " + data.error);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Something went wrong!");
        }
    };

    return (
        <>
            <main>
                <form onSubmit={handleSubmit}>
                    <div className="drop-sheet-section ">
                        <div className="drop-sheet-one" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                            <label className="upload-label" style={{ color: "#00171f", fontWeight: "bold", fontSize: "1.5rem" }}>Upload Attendance File</label>
                            <br />
                            <label className="custom-file-upload">
                                <input type="file" accept=".csv,.xlsx" onChange={(e) => setAttendance(e.target.files[0])} />
                                Choose File
                            </label>
                            <span className="file-name">{attendance ? attendance.name : "No file chosen"}</span>
                        </div>

                        <div className="drop-sheet-one" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                            <label className="upload-label" style={{ color: "#00171f", fontWeight: "bold", fontSize: "1.5rem" }}>Upload Marks File</label>
                            <br />
                            <label className="custom-file-upload">
                                <input type="file" accept=".csv,.xlsx" onChange={(e) => setMarks(e.target.files[0])} />
                                Choose File
                            </label>
                            <span className="file-name">{marks ? marks.name : "No file chosen"}</span>
                        </div>

                        <div className="drop-sheet-one" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                            <label className="upload-label" style={{ color: "#00171f", fontWeight: "bold", fontSize: "1.5rem" }}>Upload Fees File</label>
                            <br />
                            <label className="custom-file-upload">
                                <input type="file" accept=".csv,.xlsx" onChange={(e) => setFees(e.target.files[0])} />
                                Choose File
                            </label>
                            <span className="file-name">{fees ? fees.name : "No file chosen"}</span>
                        </div>
                    </div>

                    <div className="drop-sheet-before-submit">
                        <div className="condition-and-mentor">
                            <div className="sheet-conditions">
                                <h2>Filters / Thresholds</h2>

                                <div className="form-group range-group">
                                    <label>Minimum Attendance %:</label>
                                    <div className="slider-with-value">
                                        <input
                                            type="range"
                                            min="50"
                                            max="100"
                                            value={minAttendance}
                                            onChange={(e) => setMinAttendance(e.target.value)}
                                        />
                                        <span className="range-value">{minAttendance}%</span>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Minimum Marks Required:</label>
                                    <input
                                        type="number"
                                        min="0"
                                        max="100"
                                        value={minMarks}
                                        onChange={(e) => setMinMarks(e.target.value)}
                                        style={{ width: "50%" }}
                                    />
                                </div>

                                <div className="form-group radio-group">
                                    <label>Fee Status:</label>
                                    <div>
                                        <input type="radio" name="fees" value="due" checked={feeStatus === "due"} onChange={(e) => setFeeStatus(e.target.value)} />
                                        <span>Due</span>
                                    </div>
                                    <div>
                                        <input type="radio" name="fees" value="overdue" checked={feeStatus === "overdue"} onChange={(e) => setFeeStatus(e.target.value)} />
                                        <span>Overdue</span>
                                    </div>
                                    <div>
                                        <input type="radio" name="fees" value="paid" checked={feeStatus === "paid"} onChange={(e) => setFeeStatus(e.target.value)} />
                                        <span>Paid</span>
                                    </div>
                                </div>
                            </div>

                            <div className="sheet-assign-mentor">
                                <center><h2 style={{ color: '#333' }}>Assign Mentor</h2></center>
                                <div className="form-group">
                                    <label>Mentor Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Mentor Name"
                                        value={mentorName}
                                        onChange={(e) => setMentorName(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Mentor Email</label>
                                    <input
                                        type="email"
                                        placeholder="Enter Mentor Email"
                                        value={mentorEmail}
                                        onChange={(e) => setMentorEmail(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="sheet-submit-button">
                            <button type="submit" className="btn-submit">Merge & Insight</button>
                        </div>
                    </div>
                </form>
            </main>
        </>
    );
}

export default DropSheetLayout;
