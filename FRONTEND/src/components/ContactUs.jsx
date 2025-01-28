import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

// Testimonial data could be fetched from an API instead of being hardcoded
const testimonials = [
    {
        name: "Rudra Mondal",
        feedback: "The course recommendations have greatly improved my skills. The support team was very responsive!"
    },
    {
        name: "Anshu Parihar",
        feedback: "A fantastic platform! I loved the personalized learning experience and the quick responses from the team."
    },
    {
        name: "Swami Patil",
        feedback: "Highly recommend! The courses are well-structured, and the team is very helpful."
    },
    {
        name: "Swarup Patil",
        feedback: "Excellent service! I had a query, and they resolved it in no time. Keep up the great work!"
    }
];

const ContactUs = () => {
    // State to manage form inputs and status message
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [formStatus, setFormStatus] = useState('');
    const [loading, setLoading] = useState(false);  // State to handle loading indicator

    // Handle input changes for each field
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);  // Show loading spinner

        // Sending form data to the backend
        try {
            const response = await fetch('http://localhost:3001/api/contactus', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                setFormStatus(data.msg || 'Message sent successfully!');
                setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form after submission
            } else {
                const errorData = await response.json();
                setFormStatus(errorData.msg || 'Something went wrong. Please try again later.');
            }
        } catch (error) {
            setFormStatus('An error occurred. Please try again.');
            console.error('Submit error:', error);
        } finally {
            setLoading(false);  // Hide loading spinner once request completes
        }
    };

    return (
        <>
            <Header />
            <div className="container my-5">
                <style>
                    {`
                        .container {
                            background-color: #f9f9f9;
                            padding: 30px;
                            border-radius: 10px;
                            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                        }

                        h1, h2 {
                            color: #333;
                        }

                        .btn-primary {
                            background-color: #007bff;
                            border: none;
                        }

                        .testimonial-card {
                            border: 1px solid #ddd;
                            border-radius: 10px;
                            transition: transform 0.2s;
                        }

                        .testimonial-card:hover {
                            transform: scale(1.05);
                        }

                        .card-text {
                            font-style: italic;
                        }

                        .card-title {
                            color: #007bff;
                        }
                    `}
                </style>

                <h1 className="text-center mb-4">Contact Us</h1>
                <p className="text-center mb-5">
                    We’d love to hear from you! Please fill out the form below or contact us directly through the provided information.
                </p>

                <div className="row">
                    <div className="col-md-6">
                        <h2>Contact Form</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    placeholder="Your Name"
                                    required
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    placeholder="Your Email"
                                    required
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    placeholder="Subject"
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    className="form-control"
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    placeholder="Your Message"
                                    required
                                    onChange={handleInputChange}
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" disabled={loading}>
                                {loading ? 'Sending...' : 'Submit'}
                            </button>
                        </form>
                        {formStatus && <p className="mt-3">{formStatus}</p>}
                    </div>

                    <div className="col-md-6">
                        <h2>Contact Information</h2>
                        <p>
                            <strong>Email:</strong> <a href="mailto:support@example.com">support@example.com</a>
                        </p>
                        <p>
                            <strong>Phone:</strong> <a href="tel:+1234567890">(123) 456-7890</a>
                        </p>
                        <p>
                            <strong>Address:</strong> 123 Main St, City, Country
                        </p>

                        <h2>Follow Us</h2>
                        <p>
                            Stay connected through our social media channels:
                        </p>
                        <p>
                            <a href="#" className="mr-3">Facebook</a> |
                            <a href="#" className="mx-3">Twitter</a> |
                            <a href="#" className="mx-3">LinkedIn</a>
                        </p>

                        <h2>FAQs</h2>
                        <p>
                            For quick answers, check out our <a href="#">FAQ page</a>.
                        </p>

                        <h2>Customer Testimonials</h2>
                        {testimonials.map((testimonial, index) => (
                            <div className="card mb-3 testimonial-card" key={index}>
                                <div className="card-body">
                                    <h5 className="card-title">{testimonial.name}</h5>
                                    <p className="card-text">{testimonial.feedback}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ContactUs;
