
import React, { useState } from 'react';

// ==============================================================================================
// 1. COPY THE CODE BELOW AND PASTE IT INTO YOUR GOOGLE APPS SCRIPT EDITOR (code.gs)
// ==============================================================================================
/*
var ADMIN_EMAIL = "contact@superbprecision.in"; // Check for typos here!

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var data = JSON.parse(e.postData.contents);
    var userInfo = {
      name: data.name,
      email: data.email,
      company: data.company,
      message: data.message
    };

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    sheet.appendRow([new Date(), userInfo.name, userInfo.email, userInfo.company, userInfo.message]);

    // EMAIL 1: To Admin
    MailApp.sendEmail({
      to: ADMIN_EMAIL,
      replyTo: userInfo.email,
      subject: "New Lead: " + userInfo.name,
      htmlBody: "<h3>New Inquiry</h3><p><strong>Name:</strong> " + userInfo.name + "</p><p><strong>Email:</strong> " + userInfo.email + "</p><p><strong>Company:</strong> " + userInfo.company + "</p><p><strong>Message:</strong><br>" + userInfo.message + "</p>"
    });

    // EMAIL 2: To Client (Auto-reply)
    // NOTE: If you test with the ADMIN_EMAIL address, this will come back to you!
    if (userInfo.email && userInfo.email.indexOf("@") > -1) {
      MailApp.sendEmail({
        to: userInfo.email, 
        subject: "Received: Your inquiry to Superb Precision",
        htmlBody: "<p>Hi " + userInfo.name + ",</p><p>Thank you for contacting Superb Precision. We have received your details and will get back to you shortly.</p><p>Best Regards,<br>Superb Precision Team</p>"
      });
    }

    return ContentService.createTextOutput(JSON.stringify({ "result": "success" })).setMimeType(ContentService.MimeType.JSON);
  } catch (e) {
    return ContentService.createTextOutput(JSON.stringify({ "result": "error", "error": e.toString() })).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
*/
// ==============================================================================================
// 2. AFTER PASTING: Click Deploy > Manage Deployments > Edit (Pencil) > Version: NEW VERSION > Deploy
// ==============================================================================================

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwybjJnqBwiPK3cDeiS-exRrX-qgVzv1ZlTRYbrKJq-zdsm9oGrMOVbadvCGxxAwUnFnQ/exec"; 

const ContactInfo: React.FC<{ icon: React.ReactNode, text: string }> = ({ icon, text }) => (
    <div className="flex items-start space-x-4">
        <div className="w-12 h-12 bg-accent-green/10 flex items-center justify-center rounded-full text-accent-green flex-shrink-0 mt-1">{icon}</div>
        <span className="text-lg text-steel-blue break-words">{text}</span>
    </div>
);

// Success Modal Component
const SuccessModal: React.FC<{ onClose: () => void }> = ({ onClose }) => (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative z-10 transform transition-all animate-[fadeIn_0.3s_ease-out] text-center border-t-8 border-accent-green">
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
            </div>
            
            <h3 className="text-3xl font-bold text-steel-blue mb-2">Message Sent!</h3>
            <p className="text-gray-600 text-lg mb-8">
                We have received your details. A confirmation email has been sent to the address you provided.
                <br/><br/>
                <span className="text-xs text-gray-400 font-medium">Note: If you are testing with your own admin email, you will receive both the notification and the auto-reply.</span>
            </p>
            
            <button 
                onClick={onClose}
                className="w-full bg-accent-green text-white font-bold py-3 px-6 rounded-xl hover:bg-steel-blue transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
                Close
            </button>
        </div>
    </div>
);

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });

    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const triggerConfetti = () => {
        if ((window as any).confetti) {
            (window as any).confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#18D4A5', '#1C3B57', '#C0C0C0']
            });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!formData.name || !formData.email || !formData.message) {
            setErrorMessage('Please fill in all required fields.');
            setStatus('error');
            return;
        }

        if (SCRIPT_URL.includes("YOUR_GOOGLE_APPS_SCRIPT")) {
            setErrorMessage('Error: Please update the SCRIPT_URL in the code with your deployed Web App URL.');
            setStatus('error');
            return;
        }

        // Clean data before sending
        const payload = {
            name: formData.name.trim(),
            email: formData.email.trim(),
            company: formData.company.trim(),
            message: formData.message.trim(),
            timestamp: new Date().toISOString()
        };

        console.log("Submitting payload to Google Script:", payload);

        setStatus('submitting');
        setErrorMessage('');

        try {
            // Using 'no-cors' mode and 'text/plain' to ensure successful delivery to Google Apps Script
            await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors', 
                cache: 'no-cache', // Ensure no caching
                credentials: 'omit',
                redirect: 'follow', // Important for Google Scripts that might redirect
                headers: {
                    'Content-Type': 'text/plain;charset=utf-8',
                },
                body: JSON.stringify(payload),
            });

            // With no-cors, we assume success if no network error occurred.
            setStatus('success');
            setFormData({ name: '', email: '', company: '', message: '' });
            setShowModal(true);
            triggerConfetti();

        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
            setErrorMessage('Network error. Please check your connection.');
        }
    };

    return (
        <section id="contact" className="py-12 md:py-20 bg-white relative">
            {showModal && <SuccessModal onClose={() => { setShowModal(false); setStatus('idle'); }} />}
            
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-steel-blue mb-4">Let’s Build the Future Together</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">Have a project in mind or need a quote? Reach out to our team of experts to discuss your precision engineering needs.</p>
                </div>
                <div className="grid lg:grid-cols-2 gap-12">
                    <div 
                        className="p-6 md:p-8 rounded-lg bg-cover bg-center shadow-xl" 
                        style={{ backgroundImage: "url('https://picsum.photos/800/600?grayscale&random=9')"}}
                    >
                      <div className="bg-white/95 backdrop-blur-md p-6 md:p-8 rounded-lg h-full flex flex-col shadow-lg">
                        <h3 className="text-2xl font-bold text-steel-blue mb-6">Contact Details</h3>
                        <div className="space-y-6 mb-8">
                            <ContactInfo icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>} text="contact@superbprecision.in" />
                            <ContactInfo icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" /></svg>} text="+91 9422222410" />
                            <ContactInfo icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>} text="Plot No 4, Nimblak, Nagapur MIDC, Ahilyanagar (Ahmednagar) Maharashtra 414111, India" />
                        </div>
                        
                        <div className="w-full h-64 rounded-lg overflow-hidden shadow-md border border-gray-200 mt-auto">
                            <iframe 
                                title="Superb Precision Location"
                                width="100%" 
                                height="100%" 
                                frameBorder="0" 
                                scrolling="no" 
                                marginHeight={0} 
                                marginWidth={0} 
                                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Plot%20No%204,%20Nimblak,%20Nagapur%20MIDC,%20Ahilyanagar%20Maharashtra%20414111&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                            ></iframe>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-inner border border-gray-100 relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-steel-blue mb-6">Request a Quote</h3>
                            
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {status === 'error' && (
                                    <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm flex items-start">
                                        <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        <span>{errorMessage}</span>
                                    </div>
                                )}

                                <div>
                                    <label htmlFor="name" className="sr-only">Full Name</label>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Full Name *" 
                                        required
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-green focus:border-transparent outline-none transition-all shadow-sm" 
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="email" className="sr-only">Email Address</label>
                                    <input 
                                        type="email" 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Email Address *" 
                                        required
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-green focus:border-transparent outline-none transition-all shadow-sm" 
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="company" className="sr-only">Company Name</label>
                                    <input 
                                        type="text" 
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Company Name" 
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-green focus:border-transparent outline-none transition-all shadow-sm" 
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="message" className="sr-only">Project Details</label>
                                    <textarea 
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Project Details *" 
                                        rows={5} 
                                        required
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-green focus:border-transparent outline-none transition-all shadow-sm resize-none"
                                    ></textarea>
                                </div>

                                <button 
                                    type="submit" 
                                    disabled={status === 'submitting'}
                                    className={`w-full bg-accent-green text-white font-bold py-3.5 px-6 rounded-lg hover:bg-steel-blue hover:-translate-y-0.5 transition-all duration-300 shadow-md flex justify-center items-center ${status === 'submitting' ? 'opacity-75 cursor-not-allowed transform-none' : ''}`}
                                >
                                    {status === 'submitting' ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        'Start a Project'
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
