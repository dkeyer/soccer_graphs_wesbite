export default function Contact() {
    return (
      <body>
        <form action="contactInfo.tsx" method="GET">
<div>
  <label htmlFor="name">Name</label>
  <input type="text" name="name" id="name" required/>
</div>
<div>
  <label htmlFor="email">Email</label>
  <input type="email" name="email" id="email" required/>
</div>
<div>
  <label htmlFor="message">Message</label>
  <input type="text" name="message" id="message" required/>
</div>
<button type="submit">Submit</button>
</form>
</body>

) 
  }