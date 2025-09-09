import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/DropSheet.css';
import Footer from './Footer';
import Header from './Header';

function DropSheet() {
    const navigate = useNavigate();

    // State for files
    const [attendanceFile, setAttendanceFile] = useState(null);
    const [marksFile, setMarksFile] = useState(null);
    const [feesFile, setFeesFile] = useState(null);

    // State for filters
    const [attendanceThreshold, setAttendanceThreshold] = useState(50);
    const [minMarks, setMinMarks] = useState(35);
    const [feeStatus, setFeeStatus] = useState("due");

    // State for mentor
    const [mentorName, setMentorName] = useState("John Doe");
    const [mentorEmail, setMentorEmail] = useState("john@example.com");

    // Handle file change
    const handleFileChange = (e, setter) => {
        setter(e.target.files[0]);
    };

    // Submit form data
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        if (attendanceFile) formData.append("attendance", attendanceFile);
        if (marksFile) formData.append("marks", marksFile);
        if (feesFile) formData.append("fees", feesFile);

        formData.append("attendance_threshold", attendanceThreshold);
        formData.append("min_marks", minMarks);
        formData.append("fee_status", feeStatus);
        formData.append("mentor_name", mentorName);
        formData.append("mentor_email", mentorEmail);

        try {
            const response = await fetch("http://127.0.0.1:5000/combine-sheets", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) throw new Error("Failed to submit data");

            const result = await response.json();

            // Redirect with backend data
            navigate("/admin-dashboard", { state: { data: result } });
        } catch (error) {
            console.error("Error:", error);
            alert("Error uploading files or fetching insights!");
        }
    };

    return (
        <>
            <Header />
            <main>
                <form onSubmit={handleSubmit} className="drop-sheet-section">
                    {/* Attendance */}
                    <div className="drop-sheet-one" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <label className="upload-label" style={{ color: '#00171f', fontWeight: 'bold', fontSize: '1.5rem' }}>Upload Attendance File</label>
                        <br />
                        <label className="custom-file-upload">
                            <input type="file" accept=".csv,.xlsx" onChange={(e) => handleFileChange(e, setAttendanceFile)} />
                            Choose File
                        </label>
                        <span className="file-name">{attendanceFile ? attendanceFile.name : "No file chosen"}</span>
                    </div>

                    {/* Marks */}
                    <div className="drop-sheet-one" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <label className="upload-label" style={{ color: '#00171f', fontWeight: 'bold', fontSize: '1.5rem' }}>Upload Marks File</label>
                        <br />
                        <label className="custom-file-upload">
                            <input type="file" accept=".csv,.xlsx" onChange={(e) => handleFileChange(e, setMarksFile)} />
                            Choose File
                        </label>
                        <span className="file-name">{marksFile ? marksFile.name : "No file chosen"}</span>
                    </div>

                    {/* Fees */}
                    <div className="drop-sheet-one" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <label className="upload-label" style={{ color: '#00171f', fontWeight: 'bold', fontSize: '1.5rem' }}>Upload Fees File</label>
                        <br />
                        <label className="custom-file-upload">
                            <input type="file" accept=".csv,.xlsx" onChange={(e) => handleFileChange(e, setFeesFile)} />
                            Choose File
                        </label>
                        <span className="file-name">{feesFile ? feesFile.name : "No file chosen"}</span>
                    </div>

                    {/* Filters and Mentor */}
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
                                            value={attendanceThreshold}
                                            onChange={(e) => setAttendanceThreshold(e.target.value)}
                                        />
                                        <span className="range-value">{attendanceThreshold}%</span>
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
                                        style={{ width: '50%' }}
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

                            {/* Mentor Info */}
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

                        {/* Submit */}
                        <div className="sheet-submit-button">
                            <button type="submit" className="btn-submit">Merge & Insight</button>
                        </div>
                    </div>
                </form>
            </main>
            <Footer />
        </>
    );
}

export default DropSheet;
