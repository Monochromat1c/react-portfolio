import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { FaMapMarkerAlt, FaGithub, FaEnvelope } from 'react-icons/fa';
import SuccessModal from '../components/SuccessModal';

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    emailjs.init("mHp4qqfnE2O6WAp5x");
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    if (isLoading) return;

    setIsLoading(true);
    try {
      await emailjs.sendForm(
        'service_nwxn3gh',
        'template_dzclo3l',
        form.current,
        'mHp4qqfnE2O6WAp5x'
      );
      form.current.reset();
      setShowModal(true);
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#e6e6f8] py-20">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#00dac4]/10 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-[#c66690]/10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-[#56b4ed]/10 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#2a2943] mb-4">Get In Touch</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Feel free to reach out to me for any inquiries or collaboration opportunities. 
            I'm always excited to connect with fellow developers and potential clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-[#2a2943] mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#00dac4]/10 rounded-full flex items-center justify-center text-[#00dac4]">
                  <FaMapMarkerAlt className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-[#2a2943]">Location</p>
                  <p className="text-gray-600">Cogon, Panay, Capiz, 5801, Philippines</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#56b4ed]/10 rounded-full flex items-center justify-center text-[#56b4ed]">
                  <FaEnvelope className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-[#2a2943]">Email</p>
                  <a href="mailto:charlesdiestro6@gmail.com" className="text-[#2f7971] hover:text-[#00dac4]">
                    charlesdiestro6@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#c66690]/10 rounded-full flex items-center justify-center text-[#c66690]">
                  <FaGithub className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-[#2a2943]">GitHub</p>
                  <a 
                    href="https://github.com/Monochromat1c"
                    className="text-[#2f7971] hover:text-[#00dac4]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @Monochromat1c
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-[#2a2943] mb-6">Send a Message</h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label className="block text-[#2a2943] mb-2">Name</label>
                <input
                  type="text"
                  name="user_name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 bg-slate-100 focus:ring-[#00dac4] text-gray-800"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-[#2a2943] mb-2">Email</label>
                <input
                  type="email"
                  name="user_email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 bg-slate-100 focus:ring-[#00dac4] text-gray-800"
                  placeholder="Your email"
                  required
                />
              </div>
              <div>
                <label className="block text-[#2a2943] mb-2">Message</label>
                <textarea
                  name="message"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 bg-slate-100 focus:ring-[#00dac4] text-gray-800"
                  rows="4"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full bg-[#00dac4] hover:bg-[#00dac4]/90 text-white font-medium py-3 px-4 rounded-md transition-all relative ${
                  isLoading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isLoading ? (
                  <>
                    <span className="opacity-0">Send Message</span>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <SuccessModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default Contact; 