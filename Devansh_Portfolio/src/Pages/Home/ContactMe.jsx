// export default function ContactMe() {
//   return (
//     <section id="Contact" className="contact--section">
//       <div>
//         <p className="sub--title">Get In Touch</p>
//         <h2>Contact Me</h2>
//         <p className="text-lg">
//           If you have suggestion or want to interect with me please contact me here.
//         </p>
//       </div>
//       <form className="contact--form--container">
//         <div className="container">
//           <label htmlFor="first-name" className="contact--label">
//             <span className="text-md">First Name</span>
//             <input
//               type="text"
//               className="contact--input text-md"
//               name="first-name"
//               id="first-name"
//               required
//             />
//           </label>
//           <label htmlFor="last-name" className="contact--label">
//             <span className="text-md">Last Name</span>
//             <input
//               type="text"
//               className="contact--input text-md"
//               name="last-name"
//               id="last-name"
//               required
//             />
//           </label>
//           <label htmlFor="email" className="contact--label">
//             <span className="text-md">Email</span>
//             <input
//               type="email"
//               className="contact--input text-md"
//               name="email"
//               id="email"
//               required
//             />
//           </label>
//           <label htmlFor="phone-number" className="contact--label">
//             <span className="text-md">phone-number</span>
//             <input
//               type="number"
//               className="contact--input text-md"
//               name="phone-number"
//               id="phone-number"
//               required
//             />
//           </label>
//         </div>
//         {/* <label htmlFor="choode-topic" className="contact--label">
//           <span className="text-md">Choose a topic</span>
//           <select id="choose-topic" className="contact--input text-md">
//             <option>Select One...</option>
//             <option>Item 1</option>
//             <option>Item 2</option>
//             <option>Item 3</option>
//           </select>
//         </label> */}
//         <label htmlFor="message" className="contact--label">
//           <span className="text-md">Message</span>
//           <textarea
//             className="contact--input text-md"
//             id="message"
//             rows="8"
//             placeholder="Type your message..."
//           />
//         </label>
//         <label htmlFor="checkboc" className="checkbox--label">
//           <input type="checkbox" required name="checkbox" id="checkbox" />
//           <span className="text-sm">I accept the terms</span>
//         </label>
//         <div>
//           <button className="btn btn-primary contact--form--btn">Submit</button>
//         </div>
//       </form>
//     </section>
//   );
// }


import { useRef } from "react";
import emailjs from "emailjs-com";

export default function ContactMe() {
  const formRef = useRef();

  const handlePhoneChange = (e) => {
    const phoneRegex = /^[0-9]{0,15}$/; // Allow up to 15 digits
    if (!phoneRegex.test(e.target.value)) {
      e.target.setCustomValidity("Phone number must be numeric and up to 15 digits.");
    } else {
      e.target.setCustomValidity("");
    }
  };
  
  
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form refresh

    const phoneInput = formRef.current["phone"].value;
    const phoneRegex = /^[0-9]{10,15}$/; // Allows 10-15 digits (adjust as needed)
  
    if (!phoneRegex.test(phoneInput)) {
      alert("Please enter a valid phone number (10-15 digits only).");
      return; // Stop form submission if the phone number is invalid
    }
    
    emailjs
      .sendForm(
        "service_25jnsde", // Replace with your EmailJS service ID
        "template_1h9bmf9", // Replace with your EmailJS template ID
        formRef.current,
        "xuTkPNcF8YNLaijrk" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text+" message sent succesfully!");
          alert("Message sent successfully!");
          window.location.reload();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          If you have suggestions or want to interact with me, please contact me here.
        </p>
      </div>
      <form ref={formRef} className="contact--form--container" onSubmit={handleSubmit}>
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first_name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last_name"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
              placeholder="Enter your email address"
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone Number</span>
            <input
            type="text"
            className="contact--input text-md"
            name="phone"
            id="phone-number"
            required
            onChange={handlePhoneChange}
          />
          </label>
        </div>
        <label htmlFor="choose-topic" className="contact--label">
          <span className="text-md">Choose a topic</span>
          <select id="choose-topic" name="subject" className="contact--input text-md">
            <option value="">Select One...</option>
            <option value="Job Opportunities">Job Opportunities</option>
            <option value="Feedback/Suggestions">Feedback/Suggestions</option>
            <option value="Collaboration/Project Proposal">Collaboration/Project Proposal</option>
          </select>
        </label>

        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            name="message"
            rows="8"
            placeholder="Type your message..."
            required
          />
        </label>
        <label htmlFor="checkbox" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">I accept the terms</span>
        </label>
        <div>
          <button type="submit" className="btn btn-primary contact--form--btn">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
