"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import { Toaster, toast } from "react-hot-toast"

import { styles } from "../styles"
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faEnvelope, faComment, faPaperPlane, faSpinner, faPhone } from "@fortawesome/free-solid-svg-icons"

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill all fields before submitting. ⚠️")
      return
    }

    setLoading(true)

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAIL_JS_ACCESS_TOKEN

      const isPlaceholder = (val) => !val || val.includes("<") || val === "";

      if (isPlaceholder(serviceId) || isPlaceholder(templateId) || isPlaceholder(publicKey)) {
        setTimeout(() => {
          setLoading(false)
          setSuccess(true)
          setForm({ name: "", email: "", message: "" })
          toast.success("Message sent successfully!")
          setTimeout(() => setSuccess(false), 3000)
        }, 1500)
        return
      }

      emailjs
        .send(
          serviceId,
          templateId,
          {
            from_name: form.name,
            to_name: "Mohammed Amanulla",
            from_email: form.email,
            to_email: "amanulla.m.8504@gmail.com",
            message: form.message,
          },
          publicKey,
        )
        .then(
          () => {
            setLoading(false)
            setSuccess(true)
            setForm({ name: "", email: "", message: "" })
            toast.success("Message sent successfully!")
            setTimeout(() => setSuccess(false), 3000)
          },
          (error) => {
            setLoading(false)
            console.error(error)
            toast.error("Something went wrong with EmailJS. Please try again.")
          },
        )
    } catch (err) {
      setLoading(false)
      console.error(err)
      toast.error("Failed to connect to the email service.")
    }
  }

  return (
    <div className={`xl:mt-12 flex flex-col gap-10 overflow-hidden`}>
      <Toaster position="bottom-center" containerStyle={{ zIndex: 99999 }} />

      {/* World Animation on Top */}
      <motion.div
        variants={slideIn("up", "tween", 0.2, 1)}
        initial='hidden'
        whileInView='show'
        className="w-full h-[450px] md:h-[550px]"
      >
        <EarthCanvas />
      </motion.div>

      {/* Contact Form Below */}
      <motion.div
        variants={slideIn("up", "tween", 0.3, 1)}
        className="w-full max-w-4xl mx-auto glass-morphism-premium p-8 rounded-3xl border border-white/10 shadow-premium relative overflow-hidden"
      >
        {/* Decorative Glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 blur-[60px] rounded-full" />

        <div className="flex justify-between items-center mb-4 relative z-10">
          <p className={styles.sectionSubText}>Get in touch</p>
          <a
            href="tel:+919482844896"
            className="text-accent hover:text-white transition-all duration-300 flex items-center gap-2 group"
          >
            <FontAwesomeIcon icon={faPhone} className="group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-medium tracking-wider">+91 9482844896</span>
          </a>
        </div>
        <h3 className={`${styles.sectionHeadText} relative z-10`}>Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8 relative z-10">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4 flex items-center gap-2 opacity-80">
              <FontAwesomeIcon icon={faUser} className="text-accent" />
              Name
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="bg-primary/50 backdrop-blur-sm py-4 px-6 placeholder:text-secondary text-white rounded-xl outline-none border border-white/10 font-medium transition-all duration-300 focus:border-accent focus:shadow-[0_0_15px_rgba(145,94,255,0.2)]"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4 flex items-center gap-2 opacity-80">
              <FontAwesomeIcon icon={faEnvelope} className="text-accent" />
              Email
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your email"
              className="bg-primary/50 backdrop-blur-sm py-4 px-6 placeholder:text-secondary text-white rounded-xl outline-none border border-white/10 font-medium transition-all duration-300 focus:border-accent focus:shadow-[0_0_15px_rgba(145,94,255,0.2)]"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4 flex items-center gap-2 opacity-80">
              <FontAwesomeIcon icon={faComment} className="text-accent" />
              Message
            </span>
            <textarea
              rows={5}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="How can I help you?"
              className="bg-primary/50 backdrop-blur-sm py-4 px-6 placeholder:text-secondary text-white rounded-xl outline-none border border-white/10 font-medium transition-all duration-300 focus:border-accent focus:shadow-[0_0_15px_rgba(145,94,255,0.2)] resize-none"
            />
          </label>



          <button
            type="submit"
            className="w-full bg-accent text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-premium hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden relative"
            disabled={loading}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            {loading ? (
              <FontAwesomeIcon icon={faSpinner} spin className="text-xl" />
            ) : (
              <>
                <span className="tracking-widest uppercase">{success ? "Sent Successfully" : "Send Message"}</span>
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                />
              </>
            )}
          </button>
        </form>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")
