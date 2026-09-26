/**
 * Contact details and links, in one place.
 * Previously these were duplicated across Home, Contact, Footer and Navbar,
 * which is how the LinkedIn URL ended up pointing at the wrong page.
 */
export const site = {
  name: "Suhail Khan",
  role: "Full Stack Developer",
  summary:
    "Full Stack Developer with 4+ years building scalable web applications with the MERN stack, PostgreSQL, TypeScript, Next.js and Elasticsearch. Currently a Senior Software Engineer at Quintype, working on media platforms for publishers, and upskilling in AI and LLMs.",
  location: "Jaipur, Rajasthan, India",
  email: "khansohail015@gmail.com",
  phone: "+91 95981 25005",
  phoneRaw: "919598125005",
  github: "https://github.com/suhail3535",
  githubUser: "suhail3535",
  linkedin: "https://www.linkedin.com/in/suhail-khan-dev/",
  instagram: "https://www.instagram.com/suhail5727/",
  // Google Drive file id for the resume PDF.
  resumeId: "1FWTnJLjTaVO79zOIWm672pJZFiRyDQK5",
  available: true,

  /**
   * TODO: create a free Cal.com or Calendly link and paste it here.
   * A booking link converts far better than a contact form — the client
   * picks a slot instead of composing a message. Until this is set, the
   * "Book a call" buttons fall back to email.
   */
  booking: null,
};

/** Where "Book a call" points: the calendar if set, otherwise email. */
export const bookingLink = site.booking || `mailto:${site.email}?subject=Project%20enquiry`;

export const whatsapp = `https://wa.me/${site.phoneRaw}`;

/**
 * Forces a file download instead of opening Drive's preview page.
 * A /file/d/<id>/view link always opens the viewer, and the HTML `download`
 * attribute is ignored cross-origin — so the URL itself has to be the
 * download endpoint, which responds with Content-Disposition: attachment.
 */
export const resumeDownload = `https://drive.google.com/uc?export=download&id=${site.resumeId}`;

/** Drive preview page, for opening the resume in the browser instead. */
export const resumeView = `https://drive.google.com/file/d/${site.resumeId}/view?usp=sharing`;
