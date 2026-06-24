"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, Clock, ArrowLeft } from "lucide-react"

const articles = [
  {
    id: 1,
    title: "Building AI Chatbots with NLP",
    description: "Learn how to create intelligent chatbots using Natural Language Processing techniques and Python.",
    date: "2024-12-15",
    readTime: "8 min read",
    category: "AI/ML",
    tags: ["Python", "NLP", "AI"],
    slug: "building-ai-chatbots-nlp",
    content: `
      Artificial Intelligence has revolutionized the way we interact with technology. One of the most exciting applications of AI is in building conversational agents or chatbots. In this article, we'll explore how to build AI chatbots using Natural Language Processing (NLP).

      ## Getting Started with NLP

      Natural Language Processing is a subset of AI that focuses on the interaction between computers and humans through natural language. The goal is to enable computers to understand, interpret, and generate human language in a way that is both meaningful and useful.

      ### Key NLP Concepts
      - **Tokenization**: Breaking text into individual words or tokens
      - **Stemming and Lemmatization**: Reducing words to their base form
      - **Named Entity Recognition**: Identifying entities like names, dates, locations
      - **Sentiment Analysis**: Determining the emotional tone of text

      ## Building the Chatbot

      We'll use Python with popular libraries like NLTK, spaCy, and TensorFlow to build our chatbot. The architecture typically includes:

      1. **Intent Classification**: Understanding what the user wants
      2. **Entity Extraction**: Pulling out specific information from user input
      3. **Response Generation**: Crafting appropriate replies

      ### Implementation Steps

      First, install the required dependencies:

      \`\`\`bash
      pip install nltk spacy tensorflow
      \`\`\`

      Then, create your intent recognition model:

      \`\`\`python
      import nltk
      import numpy as np
      from nltk.stem import WordNetLemmatizer

      lemmatizer = WordNetLemmatizer()
      # Define intents and patterns
      intents = {
          "greeting": ["hello", "hi", "hey", "good morning"],
          "goodbye": ["bye", "see you", "goodbye"],
          "help": ["help", "support", "what can you do"]
      }
      \`\`\`

      ## Testing Your Chatbot

      Once your model is trained, you can test it with various inputs. A well-trained chatbot should:
      - Understand context
      - Maintain conversation state
      - Provide relevant responses
      - Handle edge cases gracefully

      ## Conclusion

      Building AI chatbots with NLP is an exciting journey that combines linguistics, machine learning, and software engineering. Start with simple rule-based systems and gradually move to more sophisticated neural network approaches.
    `
  },
  {
    id: 2,
    title: "Face Recognition Systems Explained",
    description: "A comprehensive guide to implementing face recognition systems using computer vision libraries.",
    date: "2024-11-20",
    readTime: "10 min read",
    category: "Computer Vision",
    tags: ["Python", "OpenCV", "AI"],
    slug: "face-recognition-systems",
    content: `
      Face recognition technology has become increasingly prevalent in our daily lives, from unlocking smartphones to security surveillance systems. This article provides a comprehensive guide to understanding and implementing face recognition systems.

      ## How Face Recognition Works

      Face recognition involves several key steps:

      1. **Face Detection**: Locating faces in an image or video
      2. **Face Alignment**: Normalizing the face for consistent analysis
      3. **Feature Extraction**: Converting facial features into numerical data
      4. **Face Matching**: Comparing extracted features against a database

      ### Face Detection Methods

      Modern face detection relies on deep learning approaches:

      - **Haar Cascades**: Fast but less accurate
      - **HOG + SVM**: Good balance of speed and accuracy
      - **CNN-based Detectors**: Most accurate but computationally intensive
      - **MTCNN**: Multi-task cascaded convolutional networks

      ## Implementation with OpenCV

      OpenCV provides robust tools for face recognition:

      \`\`\`python
      import cv2
      import numpy as np

      # Load the pre-trained classifier
      face_cascade = cv2.CascadeClassifier(
          'haarcascade_frontalface_default.xml'
      )

      # Read image and detect faces
      img = cv2.imread('group_photo.jpg')
      gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
      faces = face_cascade.detectMultiScale(gray, 1.1, 4)
      \`\`\`

      ## Deep Learning Approach

      For better accuracy, use deep learning models like FaceNet or DeepFace:

      \`\`\`python
      from deepface import DeepFace

      # Verify if two faces belong to the same person
      result = DeepFace.verify(
          img1_path="person1.jpg",
          img2_path="person2.jpg"
      )
      print(f"Verified: {result['verified']}")
      \`\`\`

      ## Challenges and Limitations

      - **Lighting conditions**: Poor lighting reduces accuracy
      - **Pose variation**: Side profiles are harder to recognize
      - **Aging**: Faces change over time
      - **Occlusions**: Masks, glasses, and beards
      - **Ethical concerns**: Privacy and bias issues

      ## Best Practices

      1. Use high-quality training data
      2. Implement proper preprocessing
      3. Use ensemble methods for better accuracy
      4. Regularly update your model
      5. Consider privacy regulations

      ## Conclusion

      Face recognition technology continues to evolve rapidly. While implementation has become more accessible through libraries like OpenCV and DeepFace, careful consideration of accuracy, ethics, and privacy is essential for production systems.
    `
  },
  {
    id: 3,
    title: "Modern Web Development with JavaScript",
    description: "Exploring modern JavaScript frameworks and best practices for building responsive web applications.",
    date: "2024-10-10",
    readTime: "6 min read",
    category: "Web Development",
    tags: ["JavaScript", "HTML", "CSS"],
    slug: "modern-web-development",
    content: `
      Modern web development has evolved significantly over the past decade. JavaScript, once a simple scripting language for adding interactivity to web pages, is now the foundation of complex, full-stack applications.

      ## The Modern JavaScript Ecosystem

      Today's JavaScript ecosystem includes:
      - **Frameworks**: React, Vue, Angular, Svelte
      - **Meta-frameworks**: Next.js, Nuxt, Remix
      - **Build Tools**: Vite, Webpack, esbuild
      - **Package Managers**: npm, yarn, pnpm
      - **Testing**: Jest, Vitest, Cypress, Playwright

      ### Why Modern Frameworks?

      Modern frameworks solve common problems:

      1. **Component-based architecture**: Reusable UI elements
      2. **State management**: Predictable state handling
      3. **Routing**: Client-side navigation
      4. **Server-side rendering**: Better SEO and performance

      ## Getting Started with React

      React remains the most popular frontend framework:

      \`\`\`jsx
      import React, { useState } from 'react';

      function Counter() {
        const [count, setCount] = useState(0);

        return (
          <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
              Click me
            </button>
          </div>
        );
      }
      \`\`\`

      ## Modern CSS Approaches

      CSS has also evolved with:
      - **CSS Modules**: Scoped styling
      - **Tailwind CSS**: Utility-first framework
      - **CSS-in-JS**: Styled Components, Emotion
      - **CSS Variables**: Dynamic theming

      ## Performance Optimization

      Key performance best practices:

      - **Code splitting**: Load only what's needed
      - **Lazy loading**: Defer non-critical resources
      - **Image optimization**: Use modern formats like WebP
      - **Caching**: Implement proper cache strategies
      - **Bundle analysis**: Identify large dependencies

      \`\`\`javascript
      // Dynamic import for code splitting
      const HeavyComponent = React.lazy(() => 
        import('./HeavyComponent')
      );
      \`\`\`

      ## Conclusion

      Modern web development offers powerful tools and frameworks that make building complex applications easier than ever. The key is choosing the right tools for your specific needs and following best practices for performance, accessibility, and maintainability.
    `
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen py-20 md:py-32">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">
            All Articles
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights and tutorials on AI, web development, and technology
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/blog/${article.slug}`} className="block h-full">
                <Card className="h-full hover:shadow-lg transition-all duration-300 group border-2 hover:border-primary/50">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                      <span>•</span>
                      <Clock className="h-4 w-4" />
                      <span>{article.readTime}</span>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {article.title}
                    </CardTitle>
                    <Badge variant="secondary" className="w-fit">
                      {article.category}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      {article.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center text-sm font-medium text-primary group-hover:underline">
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
