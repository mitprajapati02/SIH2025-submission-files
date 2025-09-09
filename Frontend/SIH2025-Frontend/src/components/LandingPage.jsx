

import '../App.css';
import Header from './Header';
import Footer from './Footer';

function LandingPage() {
    return (
        <>
            <Header />
            <main>
                <div className="hero-section" style={{ backgroundColor: '#ccdbdc', borderTopLeftRadius: '9px', borderTopRightRadius: '9px' }}>
                    <div className="hero-text-box">
                        <div><h1 style={{ color: '#023047' }}>Predict Student Success With AI</h1></div>
                        <div className="hero-subheading"
                        ><p>
                                Our advanced System helps identify at-risk students early and provides targeted counseling support to improve
                                retention and academic outcomes.</p></div>
                        <div className="hero-buttons" ><div>
                            <button className="get-started" style={{ padding: '10px 20px', border: 'none', borderRadius: '5px' }}>Get Started</button></div>
                            <div>
                                <button className="learn-more" style={{ padding: '10px 20px', border: 'none', borderRadius: '5px' }}>
                                    Learn More</button></div></div>
                    </div>
                    <div>
                        <div className="hero-image-div" >
                            <div className="hero-image-box">
                                <img src="https://img.freepik.com/free-vector/people-using-digital-devices_53876-40306.jpg?w=740&t=st=1696116061~exp=1696116661~hmac=3a5e2e3f0a4f3f0e2e4c6e4f4e4c6e4f4e4c6e4f4e4c6e4f4e4c6e4f4e4c6e" alt="hero image" />
                                <div className="risk-based-colors" style={{ marginTop: '10px' }}>
                                    {/* color of div will  be red  */}
                                    <div className="risk-status-color card-btn">Needs Mentorship</div>
                                    <div className="card-btn">Low Attendance Alerts</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="how-it-works" >
                    <div className="how-it-works-text" style={{ marginBottom: '55px' }}>
                        <h1 style={{
                            color: '#023047',
                            textTransform: 'capitalize',
                            fontWeight: 700,
                            fontSize: '2.5rem',
                        }}>how it works</h1>
                        <br />
                        <p style={{ color: "black", fontSize: '1.2rem', fontWeight: "400" }}>Our platform uses advanced analytics to identify at-risk students and provide timely notification to mentors so they can take proactive measures.</p>
                    </div>
                    <div className="select-core-addons">
                        <div className="with-background"  ><button className='get-merged' style={{ textTransform: 'capitalize' }}>Let's Predict</button></div>
                        <div className="with-background-two"><button className='are-you-institution'>Are You an Institution?</button></div>
                    </div>
                </div>
            </main>
            <Footer />

        </>
    )

}
export default LandingPage;