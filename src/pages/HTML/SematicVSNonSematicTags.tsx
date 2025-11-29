import React from 'react';

const SematicVSNonSematicTags: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto p-5">
      <h2>Semantic vs Non-Semantic HTML Tags</h2>
      <p className="small">
        This page demonstrates the difference between semantic and non-semantic HTML tags 
        by creating a complete static web page using both types.
      </p>

      {/* Semantic HTML Structure */}
      <section className="my-10">
        <h3 className="text-slate-700 border-b-2 border-blue-500 pb-2.5">
          Semantic HTML Tags
        </h3>
        <p>
          Semantic HTML tags clearly describe their meaning in a human- and machine-readable way. 
          They provide better accessibility, SEO, and code maintainability.
        </p>
        
        <div className="bg-gray-50 p-5 rounded-lg mt-5 border border-gray-300">
          <header className="bg-blue-50 p-4 rounded-md mb-4">
            <h1 className="m-0 text-blue-700">My Portfolio Website</h1>
            <nav className="mt-2.5">
              <ul className="list-none p-0 flex gap-5 m-0">
                <li><a href="#home" className="no-underline text-blue-700">Home</a></li>
                <li><a href="#about" className="no-underline text-blue-700">About</a></li>
                <li><a href="#services" className="no-underline text-blue-700">Services</a></li>
                <li><a href="#contact" className="no-underline text-blue-700">Contact</a></li>
              </ul>
            </nav>
          </header>

          <main className="py-5">
            <article className="mb-8">
              <h2 className="text-slate-700">Welcome to My Website</h2>
              <p className="leading-relaxed text-gray-600">
                This is a demonstration of semantic HTML tags. Semantic tags like 
                <code className="bg-white px-1.5 py-0.5 rounded"> &lt;header&gt;</code>, 
                <code className="bg-white px-1.5 py-0.5 rounded"> &lt;nav&gt;</code>, 
                <code className="bg-white px-1.5 py-0.5 rounded"> &lt;main&gt;</code>, 
                <code className="bg-white px-1.5 py-0.5 rounded"> &lt;article&gt;</code>, 
                <code className="bg-white px-1.5 py-0.5 rounded"> &lt;section&gt;</code>, 
                and <code className="bg-white px-1.5 py-0.5 rounded"> &lt;footer&gt;</code> 
                clearly indicate the purpose of each section.
              </p>
            </article>

            <section className="bg-white p-5 rounded-md mb-5">
              <h3 className="text-slate-700 mt-0">About Me</h3>
              <p className="leading-relaxed text-gray-600">
                I am a web developer passionate about creating accessible and semantic web pages. 
                Using semantic HTML helps screen readers and search engines understand the content better.
              </p>
            </section>

            <section className="bg-white p-5 rounded-md mb-5">
              <h3 className="text-slate-700 mt-0">My Services</h3>
              <ul className="leading-loose text-gray-600">
                <li>Web Development</li>
                <li>UI/UX Design</li>
                <li>SEO Optimization</li>
                <li>Accessibility Consulting</li>
              </ul>
            </section>

            <aside className="bg-yellow-50 p-4 rounded-md border-l-4 border-yellow-500 mb-5">
              <h4 className="mt-0 text-yellow-800">Did you know?</h4>
              <p className="m-0 text-yellow-800">
                Semantic HTML improves SEO because search engines can better understand your content structure.
              </p>
            </aside>
          </main>

          <footer className="bg-gray-800 text-white p-5 rounded-md text-center mt-8">
            <p className="m-0">
              &copy; 2024 My Portfolio. All rights reserved. | 
              <address className="inline ml-2.5">
                Contact: <a href="mailto:info@example.com" className="text-blue-300">info@example.com</a>
              </address>
            </p>
          </footer>
        </div>

        <div className="mt-5 p-4 bg-green-50 rounded-md">
          <h4 className="mt-0 text-green-800">Common Semantic Tags:</h4>
          <ul className="columns-2 gap-8 text-green-800">
            <li><code>&lt;header&gt;</code> - Header section</li>
            <li><code>&lt;nav&gt;</code> - Navigation links</li>
            <li><code>&lt;main&gt;</code> - Main content</li>
            <li><code>&lt;article&gt;</code> - Independent content</li>
            <li><code>&lt;section&gt;</code> - Thematic grouping</li>
            <li><code>&lt;aside&gt;</code> - Sidebar content</li>
            <li><code>&lt;footer&gt;</code> - Footer section</li>
            <li><code>&lt;figure&gt;</code> - Images/media with caption</li>
            <li><code>&lt;figcaption&gt;</code> - Caption for figure</li>
            <li><code>&lt;time&gt;</code> - Date/time information</li>
            <li><code>&lt;mark&gt;</code> - Highlighted text</li>
            <li><code>&lt;address&gt;</code> - Contact information</li>
          </ul>
        </div>
      </section>

      {/* Non-Semantic HTML Structure */}
      <section className="mt-16 mb-10">
        <h3 className="text-slate-700 border-b-2 border-red-500 pb-2.5">
          Non-Semantic HTML Tags
        </h3>
        <p>
          Non-semantic HTML tags don't convey meaning about their content. They are generic containers 
          that require additional attributes or CSS to understand their purpose.
        </p>
        
        <div className="bg-red-50 p-5 rounded-lg mt-5 border border-red-200">
          <div className="bg-red-100 p-4 rounded-md mb-4">
            <div className="text-2xl font-bold text-red-900 mb-2.5">
              My Portfolio Website
            </div>
            <div className="mt-2.5">
              <div className="flex gap-5">
                <span><a href="#home" className="no-underline text-red-900">Home</a></span>
                <span><a href="#about" className="no-underline text-red-900">About</a></span>
                <span><a href="#services" className="no-underline text-red-900">Services</a></span>
                <span><a href="#contact" className="no-underline text-red-900">Contact</a></span>
              </div>
            </div>
          </div>

          <div className="py-5">
            <div className="mb-8">
              <div className="text-xl font-bold text-slate-700 mb-2.5">
                Welcome to My Website
              </div>
              <div className="leading-relaxed text-gray-600">
                This is a demonstration of non-semantic HTML tags. Non-semantic tags like 
                <code className="bg-white px-1.5 py-0.5 rounded"> &lt;div&gt;</code> 
                and <code className="bg-white px-1.5 py-0.5 rounded"> &lt;span&gt;</code> 
                don't provide any meaning about their content. You need to rely on class names, IDs, or 
                comments to understand their purpose.
              </div>
            </div>

            <div className="bg-white p-5 rounded-md mb-5">
              <div className="text-lg font-bold text-slate-700 mb-2.5">
                About Me
              </div>
              <div className="leading-relaxed text-gray-600">
                I am a web developer. Without semantic tags, screen readers and search engines 
                have a harder time understanding the page structure.
              </div>
            </div>

            <div className="bg-white p-5 rounded-md mb-5">
              <div className="text-lg font-bold text-slate-700 mb-2.5">
                My Services
              </div>
              <div className="leading-loose text-gray-600">
                <div>• Web Development</div>
                <div>• UI/UX Design</div>
                <div>• SEO Optimization</div>
                <div>• Accessibility Consulting</div>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-md border-l-4 border-yellow-500 mb-5">
              <div className="text-base font-bold text-yellow-800 mb-1">
                Did you know?
              </div>
              <div className="text-yellow-800">
                Using only &lt;div&gt; and &lt;span&gt; makes it harder for assistive technologies 
                to navigate your page.
              </div>
            </div>
          </div>

          <div className="bg-gray-800 text-white p-5 rounded-md text-center mt-8">
            <div>
              &copy; 2024 My Portfolio. All rights reserved. | 
              <span className="ml-2.5">
                Contact: <a href="mailto:info@example.com" className="text-blue-300">info@example.com</a>
              </span>
            </div>
          </div>
        </div>

        <div className="mt-5 p-4 bg-red-50 rounded-md">
          <h4 className="mt-0 text-red-800">Common Non-Semantic Tags:</h4>
          <ul className="columns-2 gap-8 text-red-800">
            <li><code>&lt;div&gt;</code> - Generic block container</li>
            <li><code>&lt;span&gt;</code> - Generic inline container</li>
          </ul>
          <p className="text-red-800 mt-2.5 italic">
            Note: While &lt;div&gt; and &lt;span&gt; are still useful, they should be used when 
            no semantic tag is appropriate, not as a replacement for semantic tags.
          </p>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="mt-16 p-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl text-white">
        <h3 className="mt-0 text-white">Key Differences</h3>
        <div className="grid grid-cols-2 gap-8 mt-5">
          <div className="bg-white/10 p-5 rounded-lg">
            <h4 className="text-white mt-0">✅ Semantic Tags</h4>
            <ul className="leading-loose">
              <li>Clear meaning and purpose</li>
              <li>Better accessibility</li>
              <li>Improved SEO</li>
              <li>Easier to maintain</li>
              <li>Self-documenting code</li>
              <li>Better for screen readers</li>
            </ul>
          </div>
          <div className="bg-white/10 p-5 rounded-lg">
            <h4 className="text-white mt-0">❌ Non-Semantic Tags</h4>
            <ul className="leading-loose">
              <li>No inherent meaning</li>
              <li>Requires additional context</li>
              <li>Harder for assistive tech</li>
              <li>Less SEO-friendly</li>
              <li>Requires comments/classes</li>
              <li>Generic containers only</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="mt-10 p-6 bg-blue-50 rounded-lg border-2 border-blue-500">
        <h3 className="mt-0 text-blue-700">Best Practices</h3>
        <ol className="leading-loose text-blue-700">
          <li><strong>Use semantic tags first:</strong> Always prefer semantic HTML5 tags when they fit your content.</li>
          <li><strong>Use div/span when needed:</strong> Use &lt;div&gt; and &lt;span&gt; only when no semantic tag is appropriate.</li>
          <li><strong>Combine both:</strong> You can use semantic tags for structure and non-semantic tags for styling/grouping.</li>
          <li><strong>Accessibility matters:</strong> Semantic HTML makes your site more accessible to people with disabilities.</li>
          <li><strong>SEO benefits:</strong> Search engines understand semantic HTML better, improving your rankings.</li>
        </ol>
      </section>
    </div>
  );
};

export default SematicVSNonSematicTags;
