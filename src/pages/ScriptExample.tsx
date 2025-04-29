import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import useScrollToTop from "@/hooks/useScrollToTop";

const ScriptExample = () => {
  // Scroll to top on page load
  useScrollToTop();
  
  return (
    <Layout>
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-sdg-navy mb-6 text-center">RecyQuest: Example Presentation Script</h1>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-6 max-w-4xl mx-auto">
            <p className="mb-2 text-center">
              <strong className="text-lg">Example Speaker Notes</strong>{' '}
              <span className="text-gray-600">for the RecyQuest Presentation</span>
            </p>
            <p className="text-center">
              <Link 
                to="/presentation" 
                className="text-sdg-blue hover:text-sdg-navy underline"
              >
                Back to Presentation Instructions
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose">
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-bold text-sdg-navy mb-4">Slide 1: Title & Slogan</h2>
              <div className="pl-5 border-l-4 border-sdg-blue">
                <p className="italic"><strong>[Student 1]:</strong> Hi everyone! We're super excited to show you our awesome project called RecyQuest! It's a really cool game we made to help kids like us learn how to recycle better while having tons of fun!</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-bold text-sdg-navy mb-4">Slide 2: Team & Roles</h2>
              <div className="pl-5 border-l-4 border-sdg-blue">
                <p className="italic"><strong>[Student 2]:</strong> We all worked together as a team and everyone got to do what they're best at. I was the project manager and helped organize our tasks. <strong>[Student 3]</strong> was responsible for leading the research, <strong>[Student 4]</strong> designed all the cool graphics, <strong>[Student 1]</strong> led the overall game design and we all did the coding together.</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-bold text-sdg-navy mb-4">Slide 3: Issue & Related Problem</h2>
              <div className="pl-5 border-l-4 border-sdg-blue">
                <p className="italic"><strong>[Student 3]:</strong> So, we noticed a big problem in schools - lots of people don't really recycle much, and when they do, they often put stuff in the wrong bins. From our research we found out it's pretty confusing for many kids, and some just don't feel like doing it.</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-bold text-sdg-navy mb-4">Slide 4: Possible Solutions & Team Focus</h2>
              <div className="pl-5 border-l-4 border-sdg-blue">
                <p className="italic"><strong>[Student 4]:</strong> We thought of a bunch of different ways to fix this problem, like making posters and videos. But then we had the BEST idea - what if we made a game? I mean, everyone in our class loves games, and we thought it would be the most fun way to learn about recycling!</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-bold text-sdg-navy mb-4">Slide 5: Sustainable Development Goals</h2>
              <div className="pl-5 border-l-4 border-sdg-blue">
                <p className="italic"><strong>[Student 3]:</strong> Our game helps with two important global goals - SDG 12, which is about using stuff responsibly, and SDG 4, which is about good education. Pretty cool, right? We're helping save the planet with our game!</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-bold text-sdg-navy mb-4">Slide 6: Background Research</h2>
              <div className="pl-5 border-l-4 border-sdg-blue">
                <p className="italic"><strong>[Student 3]:</strong> When we did our research, we found out that people make recycling mistakes because they're confused, not motivated, or just don't know enough about it. Did you know that about 25% of recyclable stuff gets messed up because people put it in the wrong bins? That's a lot!</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-bold text-sdg-navy mb-4">Slide 7: Prototype of the Real-World Solution</h2>
              <div className="pl-5 border-l-4 border-sdg-blue">
                <p className="italic"><strong>[Student 5]:</strong> So here's what we came up with - RecyQuest! We made it using Scratch, which is a programming platform we learned in class. In the game, you have to sort different items into the right recycling bins. When you get it right, you get points! And as you get better, the levels get harder and more challenging.</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-bold text-sdg-navy mb-4">Slide 8: Demo</h2>
              <div className="pl-5 border-l-4 border-sdg-blue">
                <p className="italic"><strong>[Student 5]:</strong> Now we'll show you how our game actually works! Does anyone want to come up and try it?</p>
                <p className="italic mt-2"><strong>[Student 1]:</strong> While they're playing, I can explain how we designed the different levels to get gradually more challenging.</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-bold text-sdg-navy mb-4">Slide 9: Testing & Feedback</h2>
              <div className="pl-5 border-l-4 border-sdg-blue">
                <p className="italic"><strong>[Student 1]:</strong> We had our classmates test our game, and they thought it was really fun! They especially liked competing against each other and working together.</p>
                <p className="italic mt-2"><strong>[Student 4]:</strong> Yeah, and they also gave us some super helpful tips that made our game even better and easier to understand. We changed some of the graphics and made the instructions clearer based on what they told us.</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-bold text-sdg-navy mb-4">Slide 10: Next Steps</h2>
              <div className="pl-5 border-l-4 border-sdg-blue">
                <p className="italic"><strong>[Student 2]:</strong> For the future, we want to make our game even cooler and maybe even create a mobile app so you can play it on phones and tablets! We also think it would be awesome if teachers could use our game in classrooms to help more kids learn about recycling.</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-bold text-sdg-navy mb-4">Slide 11: Q&A</h2>
              <div className="pl-5 border-l-4 border-sdg-blue">
                <p className="italic"><strong>[Student 2]:</strong> Thanks so much for listening to our presentation! Does anyone have any questions? We'd love to answer them!</p>
                <p className="italic mt-2"><strong>[Student 4]:</strong> If you have any questions about how we made the game, I can answer those!</p>
                <p className="italic mt-2"><strong>[Student 3]:</strong> And I can answer questions about recycling facts or our research!</p>
              </div>
            </div>

            <div className="mt-10 flex justify-center">
              <Link 
                to="/presentation" 
                className="bg-sdg-blue hover:bg-sdg-navy text-white px-8 py-3 rounded-full text-center inline-block transition-colors duration-200"
              >
                Back to Presentation Instructions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ScriptExample; 