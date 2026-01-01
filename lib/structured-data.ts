export function generateStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mujeeb Ur Rehman",
    "alternateName": "Mujeeb Ur Rehman Shah",
    "jobTitle": "Computer Science Student & Software Developer",
    "description": "Computer Science student at Sukkur IBA University specializing in software development, AI, and web technologies",
    "url": "https://mujeeb-portfolio.vercel.app",
    "image": "https://mujeeb-portfolio.vercel.app/profile.jpg",
    "email": "mujeebalishah147@gmail.com",
    "telephone": "+92-325-2170112",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Khairpur Mir's",
      "addressRegion": "Sindh",
      "postalCode": "66000",
      "addressCountry": "PK"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Sukkur IBA University",
      "sameAs": "https://www.iba-suk.edu.pk/"
    },
    "knowsAbout": [
      "Java",
      "Python",
      "C++",
      "Web Development",
      "Artificial Intelligence",
      "Machine Learning",
      "Natural Language Processing",
      "Computer Vision",
      "Software Development"
    ],
    "sameAs": [
      "https://github.com/mujeeb-ali",
      "https://www.linkedin.com/in/mujeeb-ur-rehman-shah/",
      "https://x.com/mujeeb-ali"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "BS Computer Science",
        "credentialCategory": "degree",
        "recognizedBy": {
          "@type": "EducationalOrganization",
          "name": "Sukkur IBA University"
        }
      }
    ]
  }
}
