import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';

const Presentation = () => {
  return (
    <Layout>
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-sdg-navy mb-6 text-center">SDG Presentation Instructions</h1>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-6 max-w-4xl mx-auto">
            <p className="mb-2 text-center">
              <strong className="text-lg">Example Presentation:</strong>{' '}
              <a 
                href="https://jtrudeau.github.io/colorful-recycletastic-presentation/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sdg-blue hover:text-sdg-navy underline"
              >
                View Example SDG Presentation (Use ← → arrow keys to navigate)
              </a>
            </p>
            <p className="text-center">
              <Link 
                to="/script-example" 
                className="text-sdg-blue hover:text-sdg-navy underline"
              >
                View Example Presentation Script
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-10">
            <div>
              <h2 className="text-3xl font-bold text-sdg-navy mb-4">Presentation Overview</h2>
              <p className="text-gray-600 mb-4">Through this Data Storytelling and Engineering Challenge, your team will create a presentation showcasing your innovative technology solution for a Sustainable Development Goal (SDG). Your presentation should demonstrate how you've used game design or microcomputing to address real-world environmental sustainability challenges.</p>
              
              <p className="text-gray-600 mb-6">Your presentation should be at least 10 minutes long and illustrate how you've applied concepts from data analysis, green energy, and/or artificial intelligence in your STEAM project.</p>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <ol className="list-decimal pl-6 space-y-3">
                  <li><strong className="text-sdg-navy">Introduction to your SDG</strong> - What is this goal about? Why does it matter globally?</li>
                  <li><strong className="text-sdg-navy">Key statistics and challenges</strong> - Present 3-5 impactful statistics that illustrate the importance of your SDG</li>
                  <li><strong className="text-sdg-navy">Real-world examples</strong> - Showcase 2-3 current initiatives or organizations working on this SDG</li>
                  <li><strong className="text-sdg-navy">Local relevance</strong> - How does this SDG relate to our local community?</li>
                  <li><strong className="text-sdg-navy">Your technology solution</strong> - Demonstrate your prototype using game design or microcomputing</li>
                  <li><strong className="text-sdg-navy">Impact and scalability</strong> - How your solution addresses the challenges and could be expanded</li>
                </ol>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-sdg-navy mb-6">Step-by-Step Presentation Guide</h2>
              
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-2xl font-bold text-sdg-navy mb-4">STEP 1: Project Title & Slogan</h3>
                
                <div className="mb-4">
                  <p className="text-gray-600 mb-2"><strong>Purpose:</strong> Grab attention and summarize what your project is about.</p>
                  
                  <p className="text-gray-600 mb-2"><strong>Tips:</strong></p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-4">
                    <li>Keep the title short and memorable.</li>
                    <li>The slogan can be catchy or funny—something that conveys your project's message in just a few words.</li>
                  </ul>
                  
                  <div className="bg-blue-50 p-4 rounded-md">
                    <p className="font-medium text-sdg-navy mb-2">Example:</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-600">
                      <li><strong>Project Title:</strong> "Green Bites"</li>
                      <li><strong>Slogan:</strong> "Don't trash it, eat it!"</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-2xl font-bold text-sdg-navy mb-4">STEP 2: Team & Roles</h3>
                
                <div className="mb-4">
                  <p className="text-gray-600 mb-2"><strong>Purpose:</strong> Begin to define who is doing what. This helps ensure each member contributes.</p>
                  
                  <p className="text-gray-600 mb-2"><strong>Tips:</strong></p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-4">
                    <li>Every team member should have at least one role.</li>
                    <li>Roles can overlap if needed, but make sure everyone is clear about a main responsibility.</li>
                  </ul>

                  <p className="text-gray-600 mb-2">Below is a list of common team roles and what they typically do:</p>

                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="font-medium text-sdg-navy">1. Project Manager (PM)</p>
                      <ul className="list-disc pl-6 text-gray-600">
                        <li>Keeps track of deadlines, tasks, and makes sure the team is on schedule.</li>
                        <li>Organizes meetings and coordinates communication.</li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-medium text-sdg-navy">2. Lead Researcher</p>
                      <ul className="list-disc pl-6 text-gray-600">
                        <li>Gathers background information on the issue or problem.</li>
                        <li>Organizes and summarizes relevant data, articles, or statistics.</li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-medium text-sdg-navy">3. Lead Designer (Product or Graphic Designer)</p>
                      <ul className="list-disc pl-6 text-gray-600">
                        <li>Plans and sketches the look or layout of the solution (e.g., prototypes, posters, or slides).</li>
                        <li>Ensures the presentation or prototype looks appealing.</li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-medium text-sdg-navy">4. Programmer / Developer</p>
                      <ul className="list-disc pl-6 text-gray-600">
                        <li>Writes and tests code (in Scratch, Arduino, etc.) to bring the solution to life.</li>
                        <li>Handles technical aspects like sensor connections or game logic.</li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-medium text-sdg-navy">5. Engineer</p>
                      <ul className="list-disc pl-6 text-gray-600">
                        <li>Builds physical parts of the prototype (e.g., attaching sensors to Arduino, wiring).</li>
                        <li>Troubleshoots hardware issues.</li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-medium text-sdg-navy">6. Communications Lead</p>
                      <ul className="list-disc pl-6 text-gray-600">
                        <li>Organizes the presentation, managing the script and slide by slide coordination of team members.</li>
                        <li>Coordinates team practice and preparation.</li>
                      </ul>
                    </div>
                  </div>

                  <p className="text-gray-600 italic mb-4">Feel free to add, change or merge roles based on your team's strengths and size.</p>
                  
                  <div className="bg-blue-50 p-4 rounded-md">
                    <p className="font-medium text-sdg-navy mb-2">Example (for a 4-member team):</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-600">
                      <li><strong>Team Name:</strong> The Food Warriors</li>
                      <li><strong>Member 1 (Project Manager):</strong> Alex</li>
                      <li><strong>Member 2 (Researcher):</strong> Sam</li>
                      <li><strong>Member 3 (Designer):</strong> Melanie</li>
                      <li><strong>Member 4 (Programmer):</strong> Jordan</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-2xl font-bold text-sdg-navy mb-4">STEP 3: Issue, SDG Alignment & Specific Problem</h3>
                
                <div className="mb-4">
                  <p className="text-gray-600 mb-2"><strong>Purpose:</strong> Identify the main global issue your project addresses, which SDGs it aligns with, and then narrow it down to a specific, measurable problem.</p>
                  
                  <div className="mb-5">
                    <h4 className="text-lg font-medium text-sdg-navy mb-2">Part A: Selecting Your SDG(s)</h4>
                    <p className="text-gray-600 mb-3">Review the 17 Sustainable Development Goals and select one or more that align with your project focus. Visit our <Link to="/sdgs" className="text-sdg-blue hover:text-sdg-navy underline">SDGs page</Link> to learn more about each goal.</p>
                    
                    <p className="text-gray-600 mb-2"><strong>Tips for SDG Selection:</strong></p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-4">
                      <li>Your project might connect primarily to one SDG but also relate to others</li>
                      <li>Use the official colors and icons of your chosen SDG(s) in your presentation</li>
                      <li>Research specific targets within your chosen SDG(s) to make your project more focused</li>
                      <li>Consider local implementation of global SDGs - how does this show up in your community?</li>
                    </ul>
                  </div>
                  
                  <div className="mb-5">
                    <h4 className="text-lg font-medium text-sdg-navy mb-2">Part B: Issue & Specific Problem</h4>
                    <p className="text-gray-600 mb-2"><strong>Tips:</strong></p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-4">
                      <li>A broad issue is something like "Pollution" or "Food Waste."</li>
                      <li>A specific problem is how that issue shows up in your community or situation (e.g., "Our cafeteria throws away X pounds of food daily").</li>
                      <li>Research statistics and facts about both the global issue and your local problem.</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-md mb-4">
                    <p className="font-medium text-sdg-navy mb-2">Food Waste Example:</p>
                    <ul className="space-y-3 pl-6 text-gray-600">
                      <li>
                        <strong>Selected SDGs:</strong>
                        <ul className="list-disc pl-6">
                          <li>Primary: SDG 12 (Responsible Consumption and Production)</li>
                          <li>Secondary: SDG 13 (Climate Action)</li>
                        </ul>
                      </li>
                      <li><strong>Main Issue:</strong> Food waste contributes significantly to landfills and greenhouse gas emissions.</li>
                      <li><strong>Specific Problem:</strong> Our school cafeteria throws away large amounts of uneaten lunch every day.</li>
                      <li><strong>Key Statistic:</strong> Approximately 30% of food prepared in our cafeteria ends up in the trash.</li>
                      <li><strong>Global Context Needed:</strong> To make your presentation complete, include 2-3 global statistics that show how this problem affects people worldwide (you'll gather these in the research step below).</li>
                    </ul>
                  </div>
                  
                  <div className="mb-5">
                    <h4 className="text-lg font-medium text-sdg-navy mb-2">Research With an AI Tool</h4>
                    <p className="text-gray-600 mb-3">
                      Finding reliable statistics and information about your SDG is crucial for creating an impactful presentation. We've created a detailed guide to help you use Perplexity AI for your research.
                    </p>
                    
                    <div className="bg-gray-50 p-4 rounded-md mb-4">
                      <h5 className="font-medium text-sdg-navy mb-2">AI Research Guide</h5>
                      <p className="text-gray-600 mb-4">Learn how to use Perplexity AI to find credible statistics and information for your SDG project.</p>
                      
                      <div className="flex justify-center">
                        <Link 
                          to="/ai-research-guide" 
                          className="bg-sdg-blue hover:bg-sdg-navy text-white px-6 py-2 rounded-md text-center inline-block transition-colors duration-200"
                        >
                          View AI Research Guide
                        </Link>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-md mb-4">
                      <p className="font-medium text-sdg-navy mb-2">Example of Research Results:</p>
                      <ul className="space-y-3 pl-6 text-gray-600">
                        <li>
                          <strong>Problem Researched:</strong> Food waste in schools and cafeterias
                        </li>
                        <li>
                          <strong>Key Statistics Found:</strong>
                          <ul className="list-disc pl-6">
                            <li>School cafeterias waste approximately 530,000 tons of food annually in the United States (World Wildlife Fund, 2023).</li>
                            <li>On average, 39% of food in school cafeterias ends up as waste (Food and Nutrition Service, USDA, 2022).</li>
                          </ul>
                        </li>
                        <li className="italic">See the AI Research Guide for the complete process and more examples.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-2xl font-bold text-sdg-navy mb-4">STEP 4: Possible Solutions & Team Focus</h3>
                
                <div className="mb-4">
                  <p className="text-gray-600 mb-2"><strong>Purpose:</strong> Brainstorm all the ways you might solve the problem, then decide which one to focus on for your project.</p>
                  
                  <p className="text-gray-600 mb-2"><strong>Tips:</strong></p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-4">
                    <li>List at least three possible solutions, even if they are rough ideas.</li>
                    <li>Pick one that seems both impactful and doable for your team.</li>
                    <li>Research existing solutions to the problem - what's already been tried?</li>
                  </ul>
                  
                  <div className="mb-5">
                    <h4 className="text-lg font-medium text-sdg-navy mb-2">Researching Real-World Examples</h4>
                    <p className="text-gray-600 mb-3">For your presentation, you'll need to showcase 2-3 real-world initiatives or organizations already working on this SDG:</p>
                    
                    <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-4">
                      <li>Look for both global and local organizations addressing your chosen issue</li>
                      <li>Take note of their approaches, successes, and challenges</li>
                      <li>Consider how these examples might inform your own solution</li>
                      <li>Prepare visuals (logos, photos, or screenshots) of these initiatives for your slides</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-md">
                    <p className="font-medium text-sdg-navy mb-2">Example:</p>
                    <div className="space-y-3 text-gray-600">
                      <div>
                        <p><strong>Brainstormed Solutions:</strong></p>
                        <ol className="list-decimal pl-6">
                          <li>An awareness campaign about portion sizes and waste.</li>
                          <li>A digital system (app or Scratch) to track daily food waste.</li>
                          <li>A composting system for leftover food.</li>
                        </ol>
                      </div>
                      
                      <p><strong>Team Focus:</strong> Build a prototype that monitors leftover cafeteria food with sensors to reduce waste.</p>
                      
                      <div>
                        <p><strong>Real-World Examples for Presentation:</strong></p>
                        <ul className="list-disc pl-6">
                          <li><strong>Too Good To Go</strong> - App connecting people with restaurants to buy surplus food at a discount</li>
                          <li><strong>Food Rescue US</strong> - Organization that redirects excess food from businesses to people in need</li>
                          <li><strong>Local Example:</strong> City composting program that converts food waste to garden soil</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-2xl font-bold text-sdg-navy mb-4">STEP 5: Prototype of the Real-World Solution</h3>
                
                <div className="mb-4">
                  <p className="text-gray-600 mb-2"><strong>Purpose:</strong> Share a tangible model or example of how your chosen solution might work in real life.</p>
                  
                  <p className="text-gray-600 mb-2"><strong>Tips:</strong></p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-4">
                    <li>If using tech like Arduino, think about which sensors, circuits, or code are needed.</li>
                    <li>If using Scratch, plan out the interactive features (like animations or data visualization). Check out our <Link to="/tutorial" className="text-sdg-blue hover:text-sdg-navy underline">Scratch tutorial</Link> for guidance.</li>
                    <li>Create visuals of your prototype - these can be drawings, diagrams, or photos.</li>
                    <li>Be prepared to explain how your prototype addresses the specific problem you identified.</li>
                  </ul>
                  
                  <div className="mb-5">
                    <h4 className="text-lg font-medium text-sdg-navy mb-2">Prototype Presentation Guidelines</h4>
                    <p className="text-gray-600 mb-3">Include these elements when presenting your prototype:</p>
                    
                    <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-4">
                      <li>Clear visual representation (photos, diagrams, or demo of the actual prototype)</li>
                      <li>Explanation of how it works and its main features</li>
                      <li>Connection to your chosen SDG and the specific problem</li>
                      <li>Discussion of limitations and potential future improvements</li>
                      <li>Provide a brief live demonstration of your prototype (Scratch or Physical Prototype). This can be an embedded video in your presentation.</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-md">
                    <p className="font-medium text-sdg-navy mb-2">Example:</p>
                    <div className="space-y-3 text-gray-600">
                      <p><strong>Prototype Concept:</strong> A device using Arduino and sensors to weigh leftover cafeteria food and display data on a screen.</p>
                      
                      <div>
                        <p><strong>Key Features:</strong></p>
                        <ul className="list-disc pl-6">
                          <li>Load sensor to measure weight.</li>
                          <li>LCD screen to show daily waste in grams.</li>
                          <li>Data log to compare waste across weeks.</li>
                        </ul>
                      </div>
                      
                      <div>
                        <p><strong>Presentation Elements:</strong></p>
                        <ul className="list-disc pl-6">
                          <li>A diagram showing how the components connect</li>
                          <li>Photos of the prototype setup in the cafeteria</li>
                          <li>Example data visualizations from a test week</li>
                          <li>Brief demo of how cafeteria staff would use the device</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-2xl font-bold text-sdg-navy mb-4">STEP 6: Demo (Scratch Quest Game or Physical Prototype Using Tech)</h3>
                
                <div className="mb-4">
                  <p className="text-gray-600 mb-2"><strong>Purpose:</strong> Show, don't just tell! Demonstrate how your solution works in action.</p>
                  
                  <p className="text-gray-600 mb-2"><strong>Tips:</strong></p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-4">
                    <li>Practice your demo beforehand to ensure it's smooth.</li>
                    <li>Make sure you have backups in case of technical issues (e.g., screenshots, pictures, video).</li>
                    <li>Keep your demo concise – aim for 1-2 minutes max.</li>
                    <li>Assign a specific team member to lead the demo, with others ready to assist if needed.</li>
                    <li>Test your equipment before your scheduled time if possible.</li>
                  </ul>
                  
                  <div className="mb-5">
                    <h4 className="text-lg font-medium text-sdg-navy mb-2">Demo Preparation Checklist</h4>
                    
                    <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-4">
                      <li><strong>For a Scratch Project:</strong>
                        <ul className="list-disc pl-6 mt-1">
                          <li>Make sure your Scratch project is saved and accessible online</li>
                          <li>Prepare a short script explaining what the audience is seeing</li>
                          <li>Highlight how your project addresses the SDG issue</li>
                          <li>Have screenshots ready in your slides in case of internet issues</li>
                        </ul>
                      </li>
                      <li className="mt-2"><strong>For a Physical Prototype:</strong>
                        <ul className="list-disc pl-6 mt-1">
                          <li>Test all components before the presentation day</li>
                          <li>Bring extra batteries or any other necessary supplies</li>
                          <li>Prepare a brief explanation for each step of the demonstration</li>
                          <li>Consider how to make the demo visible to the entire audience</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-md">
                    <p className="font-medium text-sdg-navy mb-2">Example:</p>
                    <div className="space-y-3 text-gray-600">
                      <p><strong>Technology Used:</strong> Arduino and connected sensors</p>
                      
                      <div>
                        <p><strong>Demo Explanation:</strong></p>
                        <ol className="list-decimal pl-6">
                          <li>Show the sensor measuring leftover food in real-time.</li>
                          <li>Display the results on an LCD screen.</li>
                          <li>Explain how the data might be used to raise awareness or encourage solutions like composting.</li>
                        </ol>
                      </div>
                      
                      <div>
                        <p><strong>Backup Plan:</strong></p>
                        <ul className="list-disc pl-6">
                          <li>Prepared slides with screenshots of the device in action</li>
                          <li>Video recording of a previous successful demonstration</li>
                          <li>Data printouts showing results from testing the prototype</li>
                        </ul>
                      </div>
                      
                      <div>
                        <p><strong>Demo Script Sample:</strong></p>
                        <p className="italic pl-2 border-l-4 border-sdg-blue ml-2">"Here we have our food waste monitoring system. When leftover food is placed on this tray [demonstrate], the weight sensor records the amount and displays it on this screen. After a week of data collection, we can generate these graphs [show example] to track patterns and identify which meals create the most waste. This information helps cafeteria staff adjust portion sizes and menu options to reduce overall waste."</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-2xl font-bold text-sdg-navy mb-4">Research Resources</h3>
                
                <div className="mb-5">
                  <h4 className="text-lg font-medium text-sdg-navy mb-2">Researching Your SDG</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Start with our <Link to="/sdgs" className="text-sdg-blue hover:text-sdg-navy underline">SDG summaries</Link> for baseline information.</li>
                    <li>Also use the official <Link to="https://sdgs.un.org/goals" className="text-sdg-blue hover:text-sdg-navy underline">UN SDG website</Link> for more information as needed.</li>
                    <li>Use the SDG Tracker tool to find current global progress metrics</li>
                    <li>Review case studies from the SDG Knowledge Platform</li>
                    <li>Connect your research to local issues in your community if possible</li>
                    <li>Search for organizations working on this SDG</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-sdg-navy mb-2">Creating Compelling Visuals</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Add colour! You can use the official SDG color as an accent colour.</li>
                    <li>Include a mix of charts/graphs, photos, and <strong>minimal text</strong> on slides</li>
                    <li>Aim for 7-10 slides total (not counting title/ending slides)</li>
                    <li>Use high-quality, properly attributed images</li>
                    <li>Incorporate before/after visuals when discussing impact</li>
                    <li><strong>Keep track of your sources!</strong></li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-sdg-navy mb-3">Presentation Delivery Tips</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Practice your timing - aim to speak for 1-2 minutes per slide</li>
                  <li>Prepare a script that complements your slides rather than repeating what's on them (<Link to="/script-example" className="text-sdg-blue hover:text-sdg-navy underline">see example script</Link>)</li>
                  <li>Begin with a good hook or statistic to engage your audience</li>
                  <li>Distribute speaking parts evenly among group members</li>
                  <li>Prepare for Q&A with any additional research beyond your slides</li>
                  <li>End with a clear, actionable takeaway message</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-sdg-navy mb-4">Submission Process</h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <ol className="list-decimal pl-6 space-y-2 text-gray-600">
                  <li>Share your presentation file through Canva</li>
                  <li>Each group will present during class on <strong>[PRESENTATION DATES]</strong></li>
                  <li>Be prepared to answer questions from classmates and teachers</li>
                </ol>
              </div>
            </div>

            <div className="mt-10 flex justify-center">
              <Link 
                to="/" 
                className="bg-sdg-blue hover:bg-sdg-navy text-white px-8 py-3 rounded-full text-center inline-block transition-colors duration-200"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Presentation;
