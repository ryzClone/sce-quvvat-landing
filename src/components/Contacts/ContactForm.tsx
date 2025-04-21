import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Bu yerda backendga yuborish yoki EmailJS ishlatish mumkin
    console.log({ name, email, message });
    setSent(true);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ismingiz"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email manzilingiz"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <textarea
        placeholder="Xabaringiz"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <button type="submit">Yuborish</button>
      {sent && <p className="sent-msg">✅ Xabaringiz yuborildi!</p>}
    </form>
  );
};

export default ContactForm;
