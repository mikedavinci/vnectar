import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Vision Nectar',
  description: 'Vision Nectar Privacy Policy - Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-950 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how Vision Nectar collects, uses, and protects your information.
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
            
            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary-950 mb-6">Information We Collect</h2>
              <div className="space-y-6 text-primary-700">
                <div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-3">Personal Information</h3>
                  <p className="mb-4">When you use our services or contact us, we may collect:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Name and contact information (email, phone number)</li>
                    <li>Company information and job title</li>
                    <li>Service preferences and budget information</li>
                    <li>Messages and communications you send to us</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-3">Automatically Collected Information</h3>
                  <p className="mb-4">We automatically collect certain information when you visit our website:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>IP address and browser information</li>
                    <li>Device type and operating system</li>
                    <li>Pages visited and time spent on our site</li>
                    <li>Referral sources and website usage patterns</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary-950 mb-6">How We Use Your Information</h2>
              <div className="space-y-4 text-primary-700">
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide and improve our AI automation services</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you relevant information about our services</li>
                  <li>Analyze website usage and optimize user experience</li>
                  <li>Comply with legal obligations and protect our rights</li>
                </ul>
              </div>
            </div>

            {/* Information Sharing */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary-950 mb-6">Information Sharing</h2>
              <div className="space-y-4 text-primary-700">
                <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>With trusted service providers who assist in operating our business</li>
                  <li>When required by law or to protect our legal rights</li>
                  <li>In connection with a business transfer or acquisition</li>
                  <li>With your explicit consent</li>
                </ul>
              </div>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary-950 mb-6">Data Security</h2>
              <div className="space-y-4 text-primary-700">
                <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Encryption of sensitive data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Limited access to personal information on a need-to-know basis</li>
                  <li>Secure hosting and database management</li>
                </ul>
              </div>
            </div>

            {/* Cookies and Tracking */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary-950 mb-6">Cookies and Tracking Technologies</h2>
              <div className="space-y-4 text-primary-700">
                <p>We use cookies and similar technologies to enhance your browsing experience and analyze website traffic. You can control cookie settings through your browser preferences.</p>
                <p>Types of cookies we use:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Essential cookies for website functionality</li>
                  <li>Analytics cookies to understand user behavior</li>
                  <li>Performance cookies to optimize website speed</li>
                </ul>
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary-950 mb-6">Your Rights</h2>
              <div className="space-y-4 text-primary-700">
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access and review your personal information</li>
                  <li>Request corrections to inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Withdraw consent where applicable</li>
                </ul>
                <p>To exercise these rights, please contact us using the information provided below.</p>
              </div>
            </div>

            {/* Third-Party Links */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary-950 mb-6">Third-Party Links</h2>
              <div className="space-y-4 text-primary-700">
                <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party websites you visit.</p>
              </div>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary-950 mb-6">Children's Privacy</h2>
              <div className="space-y-4 text-primary-700">
                <p>Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it promptly.</p>
              </div>
            </div>

            {/* Changes to Policy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary-950 mb-6">Changes to This Policy</h2>
              <div className="space-y-4 text-primary-700">
                <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website and updating the "Last updated" date.</p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary-950 mb-6">Contact Us</h2>
              <div className="space-y-4 text-primary-700">
                <p>If you have any questions about this Privacy Policy or our privacy practices, please contact us:</p>
                <div className="bg-primary-50 p-6 rounded-lg mt-4">
                  <p className="font-semibold text-primary-900 mb-2">Vision Nectar</p>
                  <p>Email: privacy@visionnectar.com</p>
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
