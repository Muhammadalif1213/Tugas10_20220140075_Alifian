import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import instagramLogo from './instagramLogo.png';
import './App.css';

function App() {
  // State for countdown timer
  const [countdown, setCountdown] = useState('');
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    // Set the date we're counting down to
    const countDownDate = new Date('2024-06-15T23:59:59').getTime(); // Closing date of the event

    // Update the countdown every second
    const timer = setInterval(() => {
      // Get the current date and time
      const now = new Date().getTime();

      // Find the distance between now and the countdown date
      const distance = countDownDate - now;

      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the countdown in the format: "X days X hours X minutes X seconds"
      setCountdown(`${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`);

      // If the countdown is over, clear the timer
      if (distance < 0) {
        clearInterval(timer);
        setCountdown('EXPIRED');
      }
    }, 1000);

    // Cleanup function to clear the interval when component unmounts
    return () => clearInterval(timer);
  }, []);

  // Function to handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    alert("TERIMAKASIH SUDAH MENDAFTAR");
    e.preventDefault();
    // Create an alert message with the form data
    const alertMessage = `Nama: ${formData.name}\nEmail: ${formData.email}\nNo Telephone: ${formData.phone}`;
    // Show the alert message
    alert(alertMessage);
    // Clear form fields after submission
    setFormData({
      name: '',
      email: '',
      phone: ''
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>SELAMAT DATANG DI WEB IT SPECTA</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-title">
          <b>APA ITU IT SPECTA</b><br></br>
          <p1>"IT Specta merupakan sebuah kegiatan yang diselenggarakan oleh Jurusan Teknologi Informasi, yang bertujuan untuk menghadirkan forum interaktif bagi para mahasiswa dan profesional di bidang teknologi informasi.<br></br>
          Melalui serangkaian acara, IT Specta mempersembahkan peluang untuk berbagi pengetahuan, memperluas jaringan, serta menggali potensi dan inovasi terbaru dalam dunia teknologi informasi.<br></br>
           Dengan fokus pada kolaborasi, pembelajaran, dan inspirasi, IT Specta menjadi wadah yang menginspirasi perkembangan teknologi dan pemikiran di era digital ini."</p1>
        </p>
        <p><b>REGISTRASI SEKARANG</b></p>
        <form onSubmit={handleSubmit} className="Registration-form">
          <input
            type="text"
            name="name"
            placeholder="Nama"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="No Telephone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
          <button type="submit" className="Register-button">
            Registrasi sekarang!
          </button>
        </form>
        <p className="App-subtitle">klik gambar di bawah ini untuk menuju instagram IT SPECTA
        <br></br>
        <a
          className="App-link"
          href="https://www.instagram.com/it_specta/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagramLogo} alt="Instagram" className="Instagram-logo" />
        </a>

        </p>

        <p className="Countdown">Event Countdown: {countdown}</p>

      </header>
    </div>
  );
}


export default App;
