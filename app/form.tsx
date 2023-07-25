'use client';

const ContactForm = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: event.target.email.value,
        message: event.target.message.value,
      }),
    });
    if (res.status !== 200) {
      console.log('送信失敗');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input id="email" name="email" type="email" placeholder="name@example.com" />
      <textarea id="message" name="message" rows={3} style={{ display: 'block' }} />
      <button type="submit">送信</button>
    </form>
  );
};

export default ContactForm;
