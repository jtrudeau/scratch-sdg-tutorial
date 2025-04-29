import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import useScrollToTop from "@/hooks/useScrollToTop";

const AIResearchGuide = () => {
  // Scroll to top on page load
  useScrollToTop();

  return (
    <Layout>
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-sdg-navy mb-6 text-center">AI Research Guide for SDG Projects</h1>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-6 max-w-4xl mx-auto">
            <p className="mb-2 text-center">
              <Link 
                to="/presentation" 
                className="text-sdg-blue hover:text-sdg-navy underline"
              >
                ← Back to Presentation Guide
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-10">
            
            {/* Introduction */}
            <div>
              <h2 className="text-3xl font-bold text-sdg-navy mb-4">Using Perplexity AI for SDG Research</h2>
              <p className="text-gray-600 mb-4">Finding reliable statistics and information is important for creating your impactful SDG presentation. Perplexity AI is an AI search/research tool that can help you discover credible data about your chosen Sustainable Development Goal.</p>
              
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-bold text-sdg-navy mb-3">Why Use Perplexity AI?</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>It searches multiple sources at once to find recent statistics</li>
                  <li>You can use it anonymously - no account required</li>
                  <li>It provides sources for all information, making citation easier</li>
                  <li>It can help you find data specific to your SDG challenge</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-sdg-navy mb-3">How to Access Perplexity</h3>
                <p className="text-gray-600 mb-4">You can use Perplexity AI without creating an account:</p>
                <ol className="list-decimal pl-6 space-y-2 text-gray-600">
                  <li>Go to <a href="https://www.perplexity.ai/" target="_blank" rel="noopener noreferrer" className="text-sdg-blue hover:text-sdg-navy underline">https://www.perplexity.ai/</a></li>
                  <li>You can start searching immediately - no login required</li>
                  <li>For classroom use, you may need to use the "Basic" version, which is free and can be done anonymously</li>
                  <li>Use the search box at the top to enter your research query following the instructions below</li>
                </ol>
              </div>
            </div>
            
            {/* Step-by-Step Guide */}
            <div>
              <h2 className="text-3xl font-bold text-sdg-navy mb-6">Step-by-Step Research Process</h2>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-2xl font-bold text-sdg-navy mb-4">Research & Data Gathering</h3>
                <p className="text-gray-600 mb-4">Use real numbers to make your presentation clear, compelling, and evidence-based. Follow these steps:</p>
                
                <ol className="list-decimal pl-6 space-y-6 text-gray-600">
                  <li>
                    <h4 className="text-lg font-medium text-sdg-navy mb-2">Run the Perplexity Prompt</h4>
                    <p className="mb-2">Copy-and-paste this into Perplexity. Replace "YOUR PROBLEM" with the specific problem you are trying to solve.</p>
                    <div className="bg-white p-4 rounded border border-gray-300 my-2">
                      <p className="text-sm">As an expert researcher, find the 5 most recent, credible statistics that illustrate the scope of "[YOUR PROBLEM]". For each statistic, please provide:</p>
                      <ol className="list-decimal pl-6 text-sm mt-2">
                        <li>What it measures (in one sentence)</li>
                        <li>The exact figure or percentage</li>
                        <li>Source name with a link</li>
                        <li>Year of publication</li>
                      </ol>
                      <p className="text-sm mt-2">Only use reputable data providers such as UN SDG Indicators, WHO, Our World in Data, Statistics Canada (or equivalent national agencies), and major NGOs. Organize your answer in a simple table. 
                        It would be ideal if the search results were from the last year or two.
                      </p>
                    </div>
                    
                    <div className="mt-3 p-3 bg-blue-50 rounded-md">
                      <p className="font-medium">Example Problems You Could Search:</p>
                      <ul className="list-disc pl-6 mt-1">
                        <li>"Food waste in schools"</li>
                        <li>"Plastic pollution in oceans"</li>
                        <li>"Gender inequality in education"</li>
                        <li>"Lack of clean drinking water in my community"</li>
                      </ul>
                    </div>
                  </li>
                  
                  <li>
                    <h4 className="text-lg font-medium text-sdg-navy mb-2">Capture Your Results</h4>
                    <p className="mb-2">From Perplexity's output, export your research for your records:</p>
                    
                    <div className="mb-4 bg-yellow-50 p-4 rounded-md border-l-4 border-yellow-500">
                      <h5 className="text-lg font-medium text-yellow-800 mb-2">Exporting from Perplexity</h5>
                      <div className="flex items-start">
                        <div className="min-w-0 flex-1">
                          <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                            <li>After getting your research results, locate the "Export" button in the Perplexity interface (usually shown at the bottom of your research results)</li>
                            <li>Click on "Export" and select "Word (.docx)" from the options</li>
                            <li>Save the file to your computer with a clear name like "SDG12_FoodWaste_Research.docx"</li>
                            <li>This document will contain all your research findings with sources for your records</li>
                          </ol>
                        </div>
                        <div className="ml-3 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    <p className="mb-4">Next, create a table in your presentation with the key statistics from your research:</p>
                    <div className="overflow-x-auto mt-2">
                      <table className="min-w-full border border-gray-300">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-3 py-2 text-left">Statistic Description</th>
                            <th className="border border-gray-300 px-3 py-2 text-left">Value</th>
                            <th className="border border-gray-300 px-3 py-2 text-left">Source & Link</th>
                            <th className="border border-gray-300 px-3 py-2 text-left">Year</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-3 py-2">e.g. People without water</td>
                            <td className="border border-gray-300 px-3 py-2">2.2 billion</td>
                            <td className="border border-gray-300 px-3 py-2">WHO: Global Water Report (link)</td>
                            <td className="border border-gray-300 px-3 py-2">2022</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-3 py-2">…</td>
                            <td className="border border-gray-300 px-3 py-2">…</td>
                            <td className="border border-gray-300 px-3 py-2">…</td>
                            <td className="border border-gray-300 px-3 py-2">…</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="mt-3 text-sm italic">Tip: Include the exported .docx file in your project documentation for your teacher to reference.</p>
                  </li>
                  
                  <li>
                    <h4 className="text-lg font-medium text-sdg-navy mb-2">Design Your Slide</h4>
                    <p className="mb-2">Now that you have your statistics, create a slide that showcases them effectively:</p>
                    <ul className="list-disc pl-6 mt-1">
                      <li>Layout your findings in a chart or a table, or as a list</li>
                      <li>Highlight one standout number by using a simple chart (bar, pie, or icon-based graphic)</li>
                      <li>Keep text minimal - let the numbers speak for themselves</li>
                      <li>Use colors that match your SDG's official color scheme</li>
                    </ul>
                  </li>
                  
                  <li>
                    <h4 className="text-lg font-medium text-sdg-navy mb-2">Write a Caption</h4>
                    <ul className="list-disc pl-6 mt-1">
                      <li>Under your chart, add one sentence that explains why this number matters:</li>
                      <p className="italic mt-1 ml-6">"Every year, 2.2 billion people lack access to safe drinking water—showing how urgent it is to innovate clean-water tech."</p>
                    </ul>
                  </li>
                  
                  <li>
                    <h4 className="text-lg font-medium text-sdg-navy mb-2">Reflection Prompt</h4>
                    <p className="mb-2">At the bottom of your slide (or in your speaker notes), answer in two sentences:</p>
                    <ol className="list-decimal pl-6 mt-1">
                      <li>Why you picked these statistics</li>
                      <li>How they support your proposed solution</li>
                    </ol>
                  </li>
                </ol>
                
                <p className="text-gray-600 mt-6">This structure will guide you from AI-powered research through to a polished, data-driven slide that makes your technology solution shine.</p>
              </div>
            </div>
            
            {/* Examples Section */}
            <div>
              <h2 className="text-3xl font-bold text-sdg-navy mb-6">Example Research Results</h2>
              
              <div className="bg-blue-50 p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-2xl font-bold text-sdg-navy mb-4">Example 1: Clean Water Access</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-sdg-navy mb-2">Problem Researched:</p>
                    <p className="text-gray-600 ml-4">Lack of clean drinking water</p>
                  </div>
                  
                  <div>
                    <p className="font-medium text-sdg-navy mb-2">Key Statistics Found:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>Globally, 703 million people—1 in 11—lack access to clean water (World Vision, 2025).</li>
                      <li>2.2 billion people worldwide did not have safely managed drinking water services in 2022 (WHO, 2023).</li>
                      <li>In Canada, 99.9% of over 521,000 municipal drinking water tests met quality standards in 2022-23 (Ontario Ministry of the Environment, 2023).</li>
                      <li>Between two and three billion people experience water shortages for at least one month per year (UNESCO, 2023).</li>
                      <li>If everyone had clean water, 297,000 diarrheal deaths in children under 5 could be prevented each year (WHO, 2022).</li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="font-medium text-sdg-navy mb-2">Sample Caption:</p>
                    <p className="italic text-gray-600 ml-4">"With 2.2 billion people lacking safely managed drinking water services, our water purification solution addresses one of humanity's most critical challenges."</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-2xl font-bold text-sdg-navy mb-4">Example 2: Food Waste</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-sdg-navy mb-2">Problem Researched:</p>
                    <p className="text-gray-600 ml-4">Food waste in schools and cafeterias</p>
                  </div>
                  
                  <div>
                    <p className="font-medium text-sdg-navy mb-2">Key Statistics Found:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>School cafeterias waste approximately 530,000 tons of food annually in the United States (World Wildlife Fund, 2023).</li>
                      <li>On average, 39% of food in school cafeterias ends up as waste (Food and Nutrition Service, USDA, 2022).</li>
                      <li>Each student generates around 30 kg of food waste annually in school settings (Environmental Protection Agency, 2023).</li>
                      <li>Food waste in schools contributes to 18% of landfill contents in many municipalities (Journal of Environmental Management, 2022).</li>
                      <li>Implementing food waste reduction programs in schools can save an average of $2,800 per year per school (ReFED, 2023).</li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="font-medium text-sdg-navy mb-2">Sample Caption:</p>
                    <p className="italic text-gray-600 ml-4">"With 39% of cafeteria food being thrown away, our food waste monitoring system targets a significant environmental and economic opportunity."</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-sdg-navy mb-4">Example 3: Renewable Energy Access</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-sdg-navy mb-2">Problem Researched:</p>
                    <p className="text-gray-600 ml-4">Lack of access to affordable renewable energy</p>
                  </div>
                  
                  <div>
                    <p className="font-medium text-sdg-navy mb-2">Key Statistics Found:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>As of 2023, 675 million people worldwide still lack access to electricity (International Energy Agency, 2023).</li>
                      <li>Renewable energy accounts for only 29% of global electricity generation (International Renewable Energy Agency, 2023).</li>
                      <li>The cost of solar photovoltaic electricity has decreased by 89% since 2010 (IRENA, 2023).</li>
                      <li>Approximately 2.3 billion people still rely on traditional biomass (wood, charcoal) for cooking (WHO, 2022).</li>
                      <li>Implementing clean cooking solutions could prevent 3.2 million premature deaths per year (UN SDG Indicators, 2022).</li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="font-medium text-sdg-navy mb-2">Sample Caption:</p>
                    <p className="italic text-gray-600 ml-4">"With 675 million people still living without electricity, our low-cost solar solution addresses a fundamental human need while supporting climate action."</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Practical Advice */}
            <div>
              <h2 className="text-3xl font-bold text-sdg-navy mb-6">Citation and Verification</h2>
              
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-bold text-sdg-navy mb-3">Citing Your Sources</h3>
                <p className="text-gray-600 mb-3">When using statistics found through Perplexity AI, always cite the original source, not Perplexity itself. Here's how to format your citations:</p>
                
                <div className="p-4 bg-gray-50 rounded-md mb-4">
                  <p className="font-medium mb-2">For your presentation slide:</p>
                  <p className="text-sm">Include the source name and year directly on your slide with statistics: "(WHO, 2023)"</p>
                  
                  <p className="font-medium mt-4 mb-2">For your reference list or credits slide:</p>
                  <ul className="list-disc pl-6 text-sm">
                    <li>World Health Organization. (2023). Global Water Report. https://www.who.int/reports/water-2023</li>
                    <li>World Wildlife Fund. (2023). Food Waste in Schools Report. https://www.wwf.org/food-waste-2023</li>
                  </ul>
                </div>
                
                <p className="text-gray-600 italic">Always include a source slide at the end of your presentation that lists all your references.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-sdg-navy mb-3">Verifying Information</h3>
                <p className="text-gray-600 mb-3">While Perplexity AI tries to provide accurate information, it's important to verify what you find:</p>
                
                <ol className="list-decimal pl-6 space-y-2 text-gray-600">
                  <li>Check that the link provided actually works</li>
                  <li>Confirm the statistics on the original source website</li>
                  <li>Be cautious of very old statistics (from before 2020)</li>
                  <li>If something seems unusual, try to find a second source to confirm it</li>
                  <li>Ask your teacher if you're unsure about a particular data point</li>
                </ol>
              </div>
            </div>
            
            {/* Next Steps */}
            <div>
              <h2 className="text-3xl font-bold text-sdg-navy mb-4">Next Steps</h2>
              
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <p className="text-gray-600 mb-4">Now that you've gathered compelling statistics about your SDG issue, return to the presentation guide to continue developing your presentation:</p>
                
                <ol className="list-decimal pl-6 space-y-2 text-gray-600 mb-6">
                  <li>Incorporate your statistics into your presentation slides</li>
                  <li>Create a visual representation of your most impactful statistic</li>
                  <li>Connect these statistics to your proposed solution</li>
                  <li>Practice explaining these statistics in your presentation</li>
                </ol>
                
                <div className="flex justify-center">
                  <Link 
                    to="/presentation" 
                    className="bg-sdg-blue hover:bg-sdg-navy text-white px-8 py-3 rounded-full text-center inline-block transition-colors duration-200"
                  >
                    Return to Presentation Guide
                  </Link>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AIResearchGuide; 