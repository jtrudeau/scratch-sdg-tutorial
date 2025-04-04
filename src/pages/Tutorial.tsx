import Layout from '@/components/Layout';
import TutorialStep, { ScratchBlock, formatScratchText } from '@/components/TutorialStep';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Helper component to render formatted text with bold quotes
const FormattedText = ({ text }: { text: string }) => (
  <p dangerouslySetInnerHTML={{ __html: formatScratchText(text) }} className="mb-4" />
);

const Tutorial = () => {
  return (
    <Layout>
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-sdg-navy mb-4">Scratch Tutorial: Education Game</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create a fun educational game that promotes SDG 4: Quality Education
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 rounded-lg shadow-md mb-12">
            <h2 className="text-2xl font-bold text-sdg-navy mb-4">Project Overview</h2>
            <p className="text-gray-600 mb-6">
              In this tutorial, you'll create an interactive quiz game that teaches players about the importance of 
              education while testing their knowledge. You'll use Scratch's block coding to build a fun and educational game 
              that helps raise awareness about SDG 4.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="bg-blue-100 px-4 py-2 rounded-full text-blue-800">Difficulty: Beginner</div>
              <div className="bg-blue-100 px-4 py-2 rounded-full text-blue-800">Time: 30 minutes</div>
              <div className="bg-blue-100 px-4 py-2 rounded-full text-blue-800">Age: 10-12 years</div>
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <p className="text-yellow-800">
                <strong>Note:</strong> You'll need to have a Scratch account to save your project. If you don't have one yet, 
                visit <a href="https://scratch.mit.edu" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">scratch.mit.edu</a> to 
                create a free account.
              </p>
            </div>
            <div className="mt-6">
              <p className="text-blue-800 mb-2"><strong>Looking for more Scratch tutorials?</strong></p>
              <a 
                href="https://scratch.mit.edu/projects/editor/?tutorial=all" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block bg-blue-100 hover:bg-blue-200 text-blue-800 px-4 py-2 rounded-md transition-colors"
              >
                Visit Official Scratch Tutorials
              </a>
            </div>
          </div>

          <div className="space-y-8">
            <TutorialStep 
              number={1} 
              title="Create a New Scratch Project"
              imageSrc="/lovable-uploads/bf479945-8dd9-41c4-86b0-9b957b68c72e.png"
            >
              <FormattedText text="Start by opening Scratch and creating a new project:" />
              <ol className="list-decimal list-inside space-y-2 mb-4">
                <li>Go to <a href="https://scratch.mit.edu" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">scratch.mit.edu</a> and log in to your account.</li>
                <li>Click on "Create" in the top navigation to start a new project.</li>
                <li>You'll see the Scratch editor with a cat sprite on a white background.</li>
              </ol>
              <p>The Scratch interface has three main sections:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>The <strong>Stage area</strong> (right) - where you see your project run</li>
                <li>The <strong>Sprite list</strong> (below the stage) - showing all characters and objects</li>
                <li>The <strong>Code area</strong> (left) - where you'll add blocks to program your sprites</li>
              </ul>
            </TutorialStep>

            <TutorialStep 
              number={2} 
              title="Set Up Your Game Background"
            >
              <FormattedText text="Let's create a classroom setting for our game:" />
              <ol className="list-decimal list-inside space-y-2 mb-4">
                <li>Click on the <strong>"Stage"</strong> in the bottom right corner of the screen.</li>
                <li>Go to the <strong>"Backdrops"</strong> tab at the top of the editor.</li>
                <li>Click on <strong>"Choose a Backdrop"</strong> button at the bottom left.</li>
                <li>Search for <strong>"classroom"</strong> or <strong>"library"</strong> and select an appropriate background.</li>
                <li>If you can't find a suitable backdrop, you can draw your own by clicking on <strong>"Paint"</strong> in the backdrop library.</li>
              </ol>
              <p>Try to choose or create a backdrop that represents a learning environment.</p>
            </TutorialStep>

            <TutorialStep 
              number={3} 
              title="Create a Teacher Character"
            >
              <FormattedText text="Next, let's replace the cat with a teacher character:" />
              <ol className="list-decimal list-inside space-y-2 mb-4">
                <li>Right-click on the cat sprite and select <strong>"Delete"</strong> to remove it.</li>
                <li>Click on the <strong>"Choose a Sprite"</strong> button at the bottom right (it looks like a cat face).</li>
                <li>Search for <strong>"teacher"</strong> or <strong>"person"</strong> and select an appropriate character.</li>
                <li>Alternatively, you can draw your own teacher character by clicking on <strong>"Paint"</strong> in the sprite library.</li>
              </ol>
              <p className="mb-4">After adding your teacher sprite, position it on the left side of the stage by dragging it.</p>
            </TutorialStep>

            <TutorialStep 
              number={4} 
              title="Add Quiz Questions and Answers"
            >
              <FormattedText text="Now, let's create variables to store our quiz questions and answers:" />
              <ol className="list-decimal list-inside space-y-2 mb-4">
                <li>Click on the <strong>"Variables"</strong> section in the blocks palette (left side).</li>
                <li>Click <strong>"Make a Variable"</strong> and name it <strong>"currentQuestion"</strong>.</li>
                <li>Create another variable called <strong>"score"</strong>.</li>
                <li>Create a list by clicking <strong>"Make a List"</strong> and name it <strong>"questions"</strong>.</li>
                <li>Create another list called <strong>"answers"</strong>.</li>
              </ol>
              <p className="mb-4">Now let's add some questions about education and SDG 4:</p>
              <p className="mb-4">Select your <strong>"questions"</strong> list in the Variables section, and click the "+" button to add the following questions:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>What is SDG 4 about?</li>
                <li>How many children worldwide are out of school?</li>
                <li>What percentage of children in developing countries cannot read by age 10?</li>
                <li>What is one way you can help achieve SDG 4?</li>
              </ul>
              <p className="mb-4">Now select your <strong>"answers"</strong> list and add the correct answers in the same order:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Quality Education</li>
                <li>Over 260 million</li>
                <li>About 50 percent</li>
                <li>Share educational resources</li>
              </ul>
            </TutorialStep>

            <TutorialStep 
              number={5} 
              title="Program The Quiz Logic"
            >
              <FormattedText text="Let's create the code for our quiz game. Click on your teacher sprite and add these blocks:" />
              <p className="font-bold mb-2">When the Game Starts:</p>
              <ScratchBlock>
                when green flag clicked<br />
                set [score v] to (0)<br />
                set [currentQuestion v] to (1)<br />
                ask (item (currentQuestion) of [questions v]) and wait
              </ScratchBlock>

              <p className="font-bold mb-2">Check Answer and Move to Next Question:</p>
              <ScratchBlock>
                when I receive [checkAnswer v]<br />
                if &lt;(answer) = (item (currentQuestion) of [answers v])&gt; then<br />
                &nbsp;&nbsp;change [score v] by (1)<br />
                &nbsp;&nbsp;say [Correct! Great job!] for (2) seconds<br />
                else<br />
                &nbsp;&nbsp;say [Not quite. The answer is] for (1) seconds<br />
                &nbsp;&nbsp;say (item (currentQuestion) of [answers v]) for (2) seconds<br />
                end<br />
                change [currentQuestion v] by (1)<br />
                if &lt;(currentQuestion) &gt; (length of [questions v])&gt; then<br />
                &nbsp;&nbsp;broadcast [endGame v]<br />
                else<br />
                &nbsp;&nbsp;ask (item (currentQuestion) of [questions v]) and wait<br />
                end
              </ScratchBlock>

              <p className="font-bold mb-2">When the Player Answers:</p>
              <ScratchBlock>
                when I receive [answer v]<br />
                broadcast [checkAnswer v]
              </ScratchBlock>

              <p className="font-bold mb-2">When the Game Ends:</p>
              <ScratchBlock>
                when I receive [endGame v]<br />
                say [Quiz complete!] for (2) seconds<br />
                say (join [Your score: ] (score)) for (2) seconds<br />
                if &lt;(score) = (length of [questions v])&gt; then<br />
                &nbsp;&nbsp;say [Perfect score! You're an education expert!] for (3) seconds<br />
                else<br />
                &nbsp;&nbsp;say [Good job! Keep learning about SDG 4!] for (3) seconds<br />
                end
              </ScratchBlock>
            </TutorialStep>

            <TutorialStep 
              number={6} 
              title="Add Educational Facts"
            >
              <FormattedText text="Let's add educational facts about SDG 4 that appear between questions:" />
              <ol className="list-decimal list-inside space-y-2 mb-4">
                <li>Create a new list called <strong>"educationFacts"</strong>.</li>
                <li>Add the following facts to the list:</li>
                <ul className="list-disc list-inside ml-6 space-y-2 mb-4">
                  <li>Education can help reduce poverty and inequality.</li>
                  <li>Girls who complete secondary education are less likely to marry young.</li>
                  <li>Every additional year of education can increase a person's earnings by 10%.</li>
                  <li>Education helps people protect the environment and understand climate change.</li>
                </ul>
              </ol>

              <p className="font-bold mb-2">Add this code to show facts between questions:</p>
              <ScratchBlock>
                when I receive [checkAnswer v]<br />
                wait (3) seconds<br />
                say [Did you know?] for (2) seconds<br />
                say (item (pick random (1) to (length of [educationFacts v])) of [educationFacts v]) for (4) seconds<br />
              </ScratchBlock>
            </TutorialStep>

            <TutorialStep 
              number={7} 
              title="Add Visual Appeal and Sound"
            >
              <FormattedText text="Let's make our game more engaging with animations and sound:" />
              <ol className="list-decimal list-inside space-y-2 mb-4">
                <li>Click on the <strong>"Costumes"</strong> tab for your teacher sprite.</li>
                <li>If your sprite has multiple costumes, you can make it animate when answering questions.</li>
                <li>Go to the <strong>"Sounds"</strong> tab and add some sound effects (like a chime for correct answers).</li>
                <li>You might want to add background music by adding sound to the Stage.</li>
              </ol>

              <p className="font-bold mb-2">Add this code for animations:</p>
              <ScratchBlock>
                when I receive [checkAnswer v]<br />
                if &lt;(answer) = (item (currentQuestion) of [answers v])&gt; then<br />
                &nbsp;&nbsp;play sound [correct v] until done<br />
                &nbsp;&nbsp;switch costume to [happy v]<br />
                else<br />
                &nbsp;&nbsp;play sound [incorrect v] until done<br />
                &nbsp;&nbsp;switch costume to [thinking v]<br />
                end<br />
              </ScratchBlock>
            </TutorialStep>

            <TutorialStep 
              number={8} 
              title="Test and Share Your Game"
            >
              <FormattedText text="Congratulations! You've created an educational game that raises awareness about SDG 4. Now it's time to test and share your creation:" />
              <ol className="list-decimal list-inside space-y-2 mb-4">
                <li>Click the green flag to test your game. Make sure all the questions and feedback work correctly.</li>
                <li>Fix any bugs or issues you find during testing.</li>
                <li>Add more questions if you want to make your game longer.</li>
                <li>Click <strong>"Share"</strong> at the top right of the Scratch editor to publish your project.</li>
                <li>Add tags like <strong>"SDG4"</strong>, <strong>"Education"</strong>, and <strong>"Quiz"</strong> to help others find your game.</li>
                <li>Write a brief description explaining that your game is about SDG 4 and quality education.</li>
              </ol>
              <p>Share your game with friends and family to help spread awareness about the importance of quality education for all!</p>
            </TutorialStep>
          </div>

          <div className="mt-12 bg-green-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-sdg-navy mb-4">Expansion Ideas</h2>
            <p className="text-gray-600 mb-6">
              Want to make your game even better? Here are some ideas to expand your project:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Add multiple levels with increasingly difficult questions</li>
              <li>Create a character selection screen with different educators from around the world</li>
              <li>Add a timer to make the quiz more challenging</li>
              <li>Include pictures or videos about education challenges</li>
              <li>Create a "story mode" where players help deliver education to a community</li>
            </ul>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-sdg-navy mb-6">Ready to Explore More SDGs?</h2>
            <Button asChild className="bg-sdg-blue hover:bg-sdg-navy text-white px-8 py-3 rounded-full">
              <Link to="/sdgs">View All 17 SDGs</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Tutorial;
