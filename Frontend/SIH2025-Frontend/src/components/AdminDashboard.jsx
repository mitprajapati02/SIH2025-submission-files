import '../styles/AdminDashboard.css'
import Footer from './Footer';
import Header from './Header';

function AdminDashboard() {
    return (
        <>
            <Header />
            <main>
                <div className="main-inner-container">
                    <div className='student-statistics'>
                        <div className='admin-state total-student' style={{ backgroundColor: '#7fc8f8' }}><h2>Total Students</h2><p>86</p>
                        </div>
                        <div className='admin-state at-risk-student' style={{ backgroundColor: '#ff6392' }}><h2>At Risk Students</h2> <p>5</p></div>
                        <div className='admin-state predicted-dropout' style={{ backgroundColor: '#e1e5f2' }}><h2>Predicted Drop-out percentage</h2><p>15%</p></div>
                        <div className='admin-state mentor-name' style={{ backgroundColor: 'rgba(33, 150, 243,0.7)' }}><h2>Mentor Name</h2><p>Saurabh Sir</p></div>
                        <div className='admin-state status' style={{ backgroundColor: 'rgba(144, 238, 144, 0.5)' }} ><h2>Status</h2><p>Healthy</p></div>
                    </div>
                    <div className='sheet-statistics'>
                        <div className="filter-list">filters wills go here</div>
                        <div className='table-of-student-list'>
                            <div className="list-table-row">
                                <div style={{ fontWeight: 'bold' }}>Student Id</div>
                                <div style={{ fontWeight: 'bold' }}>Name</div>
                                <div style={{ fontWeight: 'bold' }}>Attendance</div>
                                <div style={{ fontWeight: 'bold' }}>Test score</div>
                                <div style={{ fontWeight: 'bold' }}>Fees status</div>
                                <div style={{ fontWeight: 'bold' }}>Risk Level</div>
                            </div>
                            <div className="list-table-row" style={{ backgroundColor: '#ffe45e' }} >
                                <div >01</div>
                                <div >Mit</div>
                                <div >70</div>
                                <div >60</div>
                                <div >Paid</div>
                                <div >Medium</div>
                            </div>
                            <div className="list-table-row" style={{ backgroundColor: '#ff6392' }} >
                                <div >02</div>
                                <div >Alex</div>
                                <div >50</div>
                                <div >30</div>
                                <div >Due</div>
                                <div >High</div>
                            </div>
                            <div className="list-table-row" style={{ backgroundColor: '#90ee90' }} >
                                <div >03</div>
                                <div >Jay</div>
                                <div >79</div>
                                <div >90</div>
                                <div >Paid</div>
                                <div >Low</div>
                            </div>
                            <div className="list-table-row" style={{ backgroundColor: '#90ee90' }} >
                                <div >04</div>
                                <div >Parv</div>
                                <div >70</div>
                                <div >90</div>
                                <div >Paid</div>
                                <div >Low</div>
                            </div>
                        </div>
                    </div>
                    <div className="tool-tip-and-export">
                        <div className="export-button">
                            <button className="btn-export">Export Data</button>
                        </div>

                        <div className="tool-tip">
                            <div className="legend-item">
                                <span className="legend-color high"></span>
                                <span>High</span>
                            </div>
                            <div className="legend-item">
                                <span className="legend-color medium"></span>
                                <span>Medium</span>
                            </div>
                            <div className="legend-item">
                                <span className="legend-color low"></span>
                                <span>Low</span>
                            </div>
                            <span style={{ color: '#333' }}> Drop-out chances</span>
                        </div>
                    </div>
                </div>

            </main>
            <Footer />

        </>
    )
}

export default AdminDashboard;