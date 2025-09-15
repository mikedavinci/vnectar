import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy - Vision Nectar',
  description: 'Vision Nectar Cookie Policy - Learn about our cookie usage and data collection practices.',
};

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-950 mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto">
              Information about how Vision Nectar uses cookies and similar technologies on our website.
            </p>
            <p className="text-sm text-primary-500 mt-4">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Current Cookie Usage */}
            <div className="mb-12">
              <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-lg mb-8">
                <h2 className="text-2xl font-bold text-primary-950 mb-4">Current Status</h2>
                <p className="text-primary-700 text-lg">
                  <strong>Vision Nectar currently does not use cookies on our website.</strong> We have designed our site to function without storing any cookies on your device at this time.
                </p>
              </div>
            </div>

            {/* What Are Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary-950 mb-6">What Are Cookies?</h2>
              <div className="space-y-4 text-primary-700">
                <p>Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.</p>
                <p>Cookies can be:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Essential cookies:</strong> Necessary for the website to function properly</li>
                  <li><strong>Performance cookies:</strong> Help improve website performance by collecting usage data</li>
                  <li><strong>Functional cookies:</strong> Remember your preferences and settings</li>
                  <li><strong>Marketing cookies:</strong> Used to track visitors and display relevant advertisements</li>
                </ul>
              </div>
            </div>

            {/* Future Cookie Usage */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary-950 mb-6">Future Cookie Usage</h2>
              <div className="space-y-4 text-primary-700">
                <p>While we don't currently use cookies, we may implement them in the future to enhance your experience on our website. If we do decide to use cookies, we will:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Update this Cookie Policy with detailed information</li>
                  <li>Notify you of any changes through our website</li>
                  <li>Only use cookies that are necessary or beneficial to your experience</li>
                  <li>Provide you with options to control cookie settings</li>
                  <li>Comply with all applicable privacy and cookie laws</li>
                </ul>
              </div>
            </div>

            {/* Types We Might Use */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary-950 mb-6">Types of Cookies We Might Use</h2>
              <div className="space-y-6 text-primary-700">
                <p>If we implement cookies in the future, they may include:</p>
                
                <div className="bg-white border border-primary-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-primary-900 mb-3">Essential Cookies</h3>
                  <p>These would be necessary for our website to function properly, such as maintaining your session or remembering your preferences during your visit.</p>
                </div>

                <div className="bg-white border border-primary-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-primary-900 mb-3">Analytics Cookies</h3>
                  <p>These would help us understand how visitors use our website, which pages are most popular, and how we can improve the user experience.</p>
                </div>

                <div className="bg-white border border-primary-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-primary-900 mb-3">Functional Cookies</h3>
                  <p>These would remember your choices and preferences to provide a more personalized experience on return visits.</p>
                </div>
              </div>
            </div>

            {/* Browser Settings */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary-950 mb-6">Managing Cookies in Your Browser</h2>
              <div className="space-y-4 text-primary-700">
                <p>Even though we don't currently use cookies, you can control how cookies are handled by your browser. Most browsers allow you to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>View which cookies are stored on your device</li>
                  <li>Delete existing cookies</li>
                  <li>Block cookies from specific websites</li>
                  <li>Block all cookies (though this may affect website functionality)</li>
                  <li>Set preferences for different types of cookies</li>
                </ul>
                <p>To manage cookies, look for "Privacy" or "Cookie" settings in your browser's preferences or settings menu.</p>
              </div>
            </div>

            {/* Third-Party Services */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary-950 mb-6">Third-Party Services</h2>
              <div className="space-y-4 text-primary-700">
                <p>While our website doesn't use cookies, some third-party services we may integrate with in the future could set their own cookies. These might include:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Analytics services (like Google Analytics)</li>
                  <li>Social media plugins</li>
                  <li>Customer support chat widgets</li>
                  <li>Payment processing services</li>
                </ul>
                <p>If we integrate such services, we will update this policy and inform you accordingly.</p>
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary-950 mb-6">Your Rights</h2>
              <div className="space-y-4 text-primary-700">
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Be informed about any cookies we use</li>
                  <li>Choose whether to accept or decline cookies</li>
                  <li>Withdraw your consent at any time</li>
                  <li>Request information about cookies stored on your device</li>
                  <li>Ask us to delete any cookies we have set</li>
                </ul>
              </div>
            </div>

            {/* Updates to Policy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary-950 mb-6">Updates to This Policy</h2>
              <div className="space-y-4 text-primary-700">
                <p>We will update this Cookie Policy if we begin using cookies or if there are any changes to how we handle cookies. Any updates will be posted on this page with a revised "Last updated" date.</p>
                <p>We recommend checking this page periodically to stay informed about our cookie practices.</p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary-950 mb-6">Contact Us</h2>
              <div className="space-y-4 text-primary-700">
                <p>If you have any questions about this Cookie Policy or our privacy practices, please contact us:</p>
                <div className="bg-primary-50 p-6 rounded-lg mt-4">
                  <p className="font-semibold text-primary-900 mb-2">Vision Nectar</p>
                  <p>Email: privacy@visionnectar.com</p>
                  <p>Phone: +1 (956) 605-8337</p>
                  <p>Website: www.visionnectar.com</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
