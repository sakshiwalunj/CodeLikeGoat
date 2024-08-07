import React, { useState } from 'react';
import Lottie from 'lottie-react';
import contact from '../Lottifiles/contact.json';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:sakshiwalunj23@gmail.com?subject=Contact%20form%20submission%20from%20${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom:%20${formData.name}%0AEmail:%20${formData.email}`;
    window.location.href = mailtoLink;
  };

  return (
    <div style={styles.container}>
      <Lottie 
        style={styles.illustration} 
        animationData={contact} 
        loop={true} 
      />
      <h1>Contact Page</h1>
      <div style={styles.formBox}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label>Name:</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label>Email:</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label>Message:</label>
            <textarea 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              required 
              style={styles.textarea}
            />
          </div>
          <button type="submit" style={styles.button}>Send</button>
        </form>
        <p>Thanks for your response</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
  },
  illustration: {
    width: '200px',
    height: '200px',
    margin: '0 auto',
  },
  formBox: {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
    maxWidth: '500px',
    margin: '20px auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  formGroup: {
    marginBottom: '15px',
    textAlign: 'left',
    width: '100%',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    minHeight: '100px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '5px',
    background: '#007BFF',
    color: '#fff',
    border: 'none',
    marginTop: '10px',
  },
  alert: {
    marginTop: '20px',
    color: 'red',
    fontWeight: 'bold',
  },
};

export default Contact;


