import './Contact.css';

export default function Contact() {
    return (

      <body>
        <form action="contactInfo.tsx" method="GET">
<div>
  <label htmlFor="name" className="form-label">Name</label>
  <input type="text" name="name" id="name" required/>
</div>
<div>
  <label htmlFor="email" className="form-label">Email</label>
  <input type="email" name="email" id="email" required/>
</div>
<div>
  <label htmlFor="message" className="form-label">Message</label>
  <textarea name="message" id="message" required/>
</div>
<button type="submit">Submit</button>
</form>
</body>

) 
  }