import { useState } from 'react'
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify'
import { motion } from 'framer-motion'
import { useSectionInView } from '../../../hooks/hooks'
import SectionHeading from '../SectionHeading/SectionHeading'
import { themeClassMap } from '../../../lib/data'
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const { ref } = useSectionInView('contact')
    const [pending, setPending ] = useState(false);

    const sendEmail = async (e) => {
        e.preventDefault();
        setPending(true);
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        console.log(data)

        emailjs.send(import.meta.env.VITE_REACT_APP_SERVICE_ID, import.meta.env.VITE_REACT_APP_TEMPLATE_ID,
            {message: JSON.stringify(data)},
            {publicKey: import.meta.env.VITE_REACT_APP_PUBLIC_KEY}
          )
          .then(
            () => {
              console.log('SUCCESS!');
              toast.success('Email sent successfully!', {theme: "colored"});
              setPending(false);
            },
            (error) => {
              console.log('FAILED...', error);
              toast.error("Unable to send email!!", {theme: "colored"});
              setPending(false);
            },
          );
      }

    return (
        <motion.section
          id="contact"
          ref={ref}
          className={`${themeClassMap.text} text-center w-full items-center flex flex-col py-20`}
          initial={{
            opacity: 0.8,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          viewport={{
            once: true,
          }}
        >
          <SectionHeading>Hit me up!</SectionHeading>
          <div className="w-[min(100%,38rem)]">
            <ToastContainer />
            <p className={`mt-6 mb-20 `}>
              Please contact me directly at{' '}
              <a className="underline" href="mailto:jitender1405@gmail.com">
                jitender1405@gmail.com
              </a>{' '}
              or through this form.
            </p>

            <form
              className="mt-10 flex flex-col dark:text-black"
              onSubmit={sendEmail}
            //   action={async (formData) => {
            //     const { error } = await sendEmail(formData)

            //     if (error) {
            //       toast.error(error)
            //       return
            //     }

            //     toast.success('Email sent successfully!')
            //   }}
            >
              <input
                className={`h-14 px-4 border ${themeClassMap.text} ${themeClassMap.bg} ${themeClassMap.border} rounded-lg dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all`}
                name="senderEmail"
                type="email"
                required
                maxLength={500}
                placeholder="Your email"
              />
              <textarea
                className={`h-52 my-3 rounded-lg border p-4 ${themeClassMap.text} ${themeClassMap.bg} ${themeClassMap.border} dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none`}
                name="message"
                placeholder="Your message 👋"
                required
                maxLength={5000}
              />
              <div className="flex justify-center">
              <button
                type="submit"
                className={`${themeClassMap.btn} ${themeClassMap.btnColor} group flex items-center justify-center gap-2 h-[3rem] w-[8rem] rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105  disabled:scale-100 disabled:bg-opacity-65 `}
                disabled={pending}
                >
                    {/* {pending? 'Sending...' : 'Submit'}
                    <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div> */}
                {pending ? (
                        <>
                          Sending...
                          <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
                        </>
                    ) : "Submit"
                  }
                </button>
              </div>
            </form>
          </div>
        </motion.section>
      )
}

export default Contact
