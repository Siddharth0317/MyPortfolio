import { useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_k5mf8ng',     
        'template_ekn5j09',   
        form.current,
        'fIjR-TfhOIE6ONva3' 
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Try again.");
          console.error(error);
        }
      );
  };

  return (
    <section id="contact" className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-6 dark:text-white">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="max-w-xl mx-auto space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full p-3 rounded border dark:bg-gray-700 dark:text-white"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-3 rounded border dark:bg-gray-700 dark:text-white"
          required
        />
        <textarea
          name="message"
          rows="4"
          placeholder="Message"
          className="w-full p-3 rounded border dark:bg-gray-700 dark:text-white"
          required
        ></textarea>
        <button type="submit" className="bg-blue-600 text-white py-2 px-6 rounded">
          Send
        </button>
      </form>
    </section>
  );
}
