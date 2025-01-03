import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { FaMapMarkerAlt, FaGithub, FaEnvelope, FaLinkedin, FaClock, FaPhoneAlt } from 'react-icons/fa';
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
      <div className="min-h-screen bg-[#e6e6f8]">
          {/* Hero Section */}
          <section className="relative min-h-[60vh] bg-[#2a2943] overflow-hidden">
              {/* Background image with overlay */}
              <div className="absolute inset-0 z-0">
                  <img
                      src="https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?q=80&w=2070"
                      alt="Background"
                      className="w-full h-full object-cover opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#2a2943] via-[#2a2943]/95 to-[#2a2943]"></div>
              </div>

              {/* Animated background elements */}
              <div className="absolute inset-0">
                  <div className="absolute top-20 left-10 w-72 h-72 bg-[#00dac4]/20 rounded-full filter blur-xl animate-blob"></div>
                  <div className="absolute top-40 right-10 w-72 h-72 bg-[#c66690]/20 rounded-full filter blur-xl animate-blob [animation-delay:2s]"></div>
                  <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#56b4ed]/20 rounded-full filter blur-xl animate-blob [animation-delay:4s]"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
                  <h1 className="text-4xl sm:text-6xl font-bold text-[#00dac4] mb-6">
                      Let's Work Together!
                  </h1>
                  <p className="text-xl text-white font-medium mb-4">
                      Have a project in mind? I'd love to hear about it. Let's
                      discuss how we can work together to bring your ideas to
                      life.
                  </p>
              </div>
          </section>

          {/* Main Content */}
          <section className="py-20">
              <div className="max-w-6xl mx-auto px-4">
                  {/* Quick Contact Options */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                          <div className="w-16 h-16 bg-[#00dac4]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                              <FaPhoneAlt className="text-[#00dac4] text-2xl" />
                          </div>
                          <h3 className="text-xl font-semibold text-[#2a2943] mb-2">
                              Phone
                          </h3>
                          <p className="text-gray-600">+63 991 137 0797</p>
                          <p className="text-sm text-gray-500 mt-2">
                              Available for calls
                          </p>
                      </div>

                      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                          <div className="w-16 h-16 bg-[#56b4ed]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                              <FaEnvelope className="text-[#56b4ed] text-2xl" />
                          </div>
                          <h3 className="text-xl font-semibold text-[#2a2943] mb-2">
                              Email
                          </h3>
                          <a
                              href="mailto:charlesdiestro6@gmail.com"
                              className="text-[#2f7971] hover:text-[#00dac4]"
                          >
                              charlesdiestro6@gmail.com
                          </a>
                          <p className="text-sm text-gray-500 mt-2">
                              Replies within 24 hours
                          </p>
                      </div>

                      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                          <div className="w-16 h-16 bg-[#c66690]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                              <FaClock className="text-[#c66690] text-2xl" />
                          </div>
                          <h3 className="text-xl font-semibold text-[#2a2943] mb-2">
                              Working Hours
                          </h3>
                          <p className="text-gray-600">Monday - Friday</p>
                          <p className="text-sm text-gray-500 mt-2">
                              9:00 AM - 6:00 PM PHT
                          </p>
                      </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                      {/* Contact Information */}
                      <div className="bg-white rounded-lg shadow-lg p-8">
                          <h2 className="text-2xl font-semibold text-[#2a2943] mb-6">
                              Contact Information
                          </h2>
                          <div className="space-y-6">
                              <div className="flex items-center gap-4">
                                  <div className="w-10 h-10 bg-[#00dac4]/10 rounded-full flex items-center justify-center text-[#00dac4]">
                                      <FaMapMarkerAlt className="w-5 h-5" />
                                  </div>
                                  <div>
                                      <p className="font-medium text-[#2a2943]">
                                          Location
                                      </p>
                                      <p className="text-gray-600">
                                          Cogon, Panay, Capiz, 5801, Philippines
                                      </p>
                                  </div>
                              </div>
                              <div className="flex items-center gap-4">
                                  <div className="w-10 h-10 bg-[#56b4ed]/10 rounded-full flex items-center justify-center text-[#56b4ed]">
                                      <FaEnvelope className="w-5 h-5" />
                                  </div>
                                  <div>
                                      <p className="font-medium text-[#2a2943]">
                                          Email
                                      </p>
                                      <a
                                          href="mailto:charlesdiestro6@gmail.com"
                                          className="text-[#2f7971] hover:text-[#00dac4]"
                                      >
                                          charlesdiestro6@gmail.com
                                      </a>
                                  </div>
                              </div>
                              <div className="flex items-center gap-4">
                                  <div className="w-10 h-10 bg-[#c66690]/10 rounded-full flex items-center justify-center text-[#c66690]">
                                      <FaGithub className="w-5 h-5" />
                                  </div>
                                  <div>
                                      <p className="font-medium text-[#2a2943]">
                                          GitHub
                                      </p>
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
                              <div className="flex items-center gap-4">
                                  <div className="w-10 h-10 bg-[#00dac4]/10 rounded-full flex items-center justify-center text-[#00dac4]">
                                      <FaLinkedin className="w-5 h-5" />
                                  </div>
                                  <div>
                                      <p className="font-medium text-[#2a2943]">
                                          LinkedIn
                                      </p>
                                      <a
                                          href="https://www.linkedin.com/in/charles-diestro-873802188"
                                          className="text-[#2f7971] hover:text-[#00dac4]"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                      >
                                          Charles Diestro
                                      </a>
                                  </div>
                              </div>
                          </div>

                          {/* Social Links */}
                          <div className="mt-8 pt-8 border-t border-gray-200">
                              <h3 className="text-lg font-semibold text-[#2a2943] mb-4">
                                  Connect With Me
                              </h3>
                              <div className="flex justify-center gap-6">
                                  <a
                                      href="https://github.com/Monochromat1c"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="w-12 h-12 bg-[#2a2943]/5 hover:bg-[#2a2943]/10 rounded-full flex items-center justify-center text-[#2a2943] transition-colors"
                                  >
                                      <FaGithub size={24} />
                                  </a>
                                  <a
                                      href="https://www.linkedin.com/in/charles-diestro-873802188"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="w-12 h-12 bg-[#2a2943]/5 hover:bg-[#2a2943]/10 rounded-full flex items-center justify-center text-[#2a2943] transition-colors"
                                  >
                                      <FaLinkedin size={24} />
                                  </a>
                                  <a
                                      href="mailto:charlesdiestro6@gmail.com"
                                      className="w-12 h-12 bg-[#2a2943]/5 hover:bg-[#2a2943]/10 rounded-full flex items-center justify-center text-[#2a2943] transition-colors"
                                  >
                                      <FaEnvelope size={24} />
                                  </a>
                              </div>
                          </div>
                      </div>

                      {/* Contact Form */}
                      <div className="bg-white rounded-lg shadow-lg p-8">
                          <h2 className="text-2xl font-semibold text-[#2a2943] mb-6">
                              Send a Message
                          </h2>
                          <form
                              ref={form}
                              onSubmit={sendEmail}
                              className="space-y-4"
                          >
                              <div>
                                  <label className="block text-[#2a2943] mb-2">
                                      Name
                                  </label>
                                  <input
                                      type="text"
                                      name="user_name"
                                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 bg-slate-100 focus:ring-[#00dac4] text-gray-800"
                                      placeholder="Your name"
                                      required
                                  />
                              </div>
                              <div>
                                  <label className="block text-[#2a2943] mb-2">
                                      Email
                                  </label>
                                  <input
                                      type="email"
                                      name="user_email"
                                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 bg-slate-100 focus:ring-[#00dac4] text-gray-800"
                                      placeholder="Your email"
                                      required
                                  />
                              </div>
                              <div>
                                  <label className="block text-[#2a2943] mb-2">
                                      Message
                                  </label>
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
                                      isLoading
                                          ? "opacity-70 cursor-not-allowed"
                                          : ""
                                  }`}
                              >
                                  {isLoading ? (
                                      <>
                                          <span className="opacity-0">
                                              Send Message
                                          </span>
                                          <div className="absolute inset-0 flex items-center justify-center">
                                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                          </div>
                                      </>
                                  ) : (
                                      "Send Message"
                                  )}
                              </button>
                          </form>
                      </div>
                  </div>
              </div>
          </section>

          {/* Success Modal */}
          <SuccessModal
              isOpen={showModal}
              onClose={() => setShowModal(false)}
          />
      </div>
  );
};

export default Contact; 