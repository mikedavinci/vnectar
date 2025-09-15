import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - Vision Nectar',
  description: 'Vision Nectar Terms of Service - Learn about the terms and conditions for using our AI automation services.',
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-950 mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto">
              These terms govern your use of Vision Nectar's AI automation services and website.
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
            
            {/* Acceptance of Terms */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary-950 mb-6">Acceptance of Terms</h2>
              <div className="space-y-4 text-primary-700">
                <p>By accessing and using Vision Nectar's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
                <p>These Terms of Service ("Terms") apply to all users of the website located at visionnectar.com and our AI automation services.</p>
              </div>
            </div>

            {/* Services Description */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary-950 mb-6">Our Services</h2>
              <div className="space-y-4 text-primary-700">
                <p>Vision Nectar provides AI automation services including but not limited to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>AI chatbot development and implementation</li>
                  <li>Landing page creation and optimization</li>
                  <li>Marketing automation solutions</li>
                  <li>Lead generation systems</li>
                  <li>Business workflow automation</li>
                  <li>Consultation and support services</li>
                </ul>
              </div>
            </div>

            {/* User Responsibilities */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary-950 mb-6">User Responsibilities</h2>
              <div className="space-y-4 text-primary-700">
                <p>As a user of our services, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate and complete information when requested</li>
                  <li>Use our services only for lawful purposes</li>
                  <li>Not interfere with or disrupt our services or servers</li>
                  <li>Not attempt to gain unauthorized access to our systems</li>
                  <li>Respect intellectual property rights</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </div>
            </div>

            {/* Payment Terms */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary-950 mb-6">Payment Terms</h2>
              <div className="space-y-4 text-primary-700">
                <p>For paid services:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Payment is due according to the agreed-upon schedule</li>
                  <li>All fees are non-refundable unless otherwise specified</li>
                  <li>We reserve the right to suspend services for non-payment</li>
                  <li>Prices may change with 30 days' notice</li>
                  <li>You are responsible for all applicable taxes</li>
                </ul>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary-950 mb-6">Intellectual Property</h2>
              <div className="space-y-4 text-primary-700">
                <p>The service and its original content, features, and functionality are and will remain the exclusive property of Vision Nectar and its licensors. The service is protected by copyright, trademark, and other laws.</p>
                <p>You retain ownership of content you provide to us, but grant us a license to use it in connection with providing our services.</p>
              </div>
            </div>

            {/* Service Availability */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary-950 mb-6">Service Availability</h2>
              <div className="space-y-4 text-primary-700">
                <p>We strive to maintain high service availability, but we do not guarantee uninterrupted access to our services. We may:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Perform scheduled maintenance that may temporarily affect service</li>
                  <li>Experience unexpected downtime due to technical issues</li>
                  <li>Modify or discontinue services with reasonable notice</li>
                  <li>Suspend access for violations of these terms</li>
                </ul>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary-950 mb-6">Limitation of Liability</h2>
              <div className="space-y-4 text-primary-700">
                <p>In no event shall Vision Nectar, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.</p>
                <p>Our total liability to you for all claims arising from or relating to these terms or our services shall not exceed the amount you paid us in the 12 months preceding the claim.</p>
              </div>
            </div>

            {/* Privacy and Data */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary-950 mb-6">Privacy and Data</h2>
              <div className="space-y-4 text-primary-700">
                <p>Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, to understand our practices.</p>
                <p>By using our services, you consent to the collection and use of information as described in our Privacy Policy.</p>
              </div>
            </div>

            {/* Termination */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary-950 mb-6">Termination</h2>
              <div className="space-y-4 text-primary-700">
                <p>We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
                <p>Upon termination, your right to use the service will cease immediately. All provisions of the Terms which by their nature should survive termination shall survive termination.</p>
              </div>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary-950 mb-6">Governing Law</h2>
              <div className="space-y-4 text-primary-700">
                <p>These Terms shall be interpreted and governed by the laws of the United States, without regard to its conflict of law provisions.</p>
                <p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.</p>
              </div>
            </div>

            {/* Changes to Terms */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary-950 mb-6">Changes to Terms</h2>
              <div className="space-y-4 text-primary-700">
                <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.</p>
                <p>By continuing to access or use our service after those revisions become effective, you agree to be bound by the revised terms.</p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary-950 mb-6">Contact Us</h2>
              <div className="space-y-4 text-primary-700">
                <p>If you have any questions about these Terms of Service, please contact us:</p>
                <div className="bg-primary-50 p-6 rounded-lg mt-4">
                  <p className="font-semibold text-primary-900 mb-2">Vision Nectar</p>
                  <p>Email: legal@visionnectar.com</p>
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
