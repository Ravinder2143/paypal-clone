import Head from 'next/head'; // Import the Head component from Next.js

const Help = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <Head>
        <title>PayPal Support</title>
        <meta name="description" content="PayPal Support for common issues" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
          PayPal Support - Common Issues
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Issue: Password and Account Access */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Password and Account Access
            </h2>
            <ul className="list-disc pl-5">
              <li>Resets</li>
              <li>Unlock account</li>
              <li>Unknown charges</li>
            </ul>
          </div>

          {/* Issue: Payments */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Payments
            </h2>
            <ul className="list-disc pl-5">
              <li>Holds</li>
              <li>Declines</li>
              <li>Refunds</li>
              <li>Balance issues</li>
            </ul>
          </div>

          {/* Issue: Account Profile and Setup */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Account Profile and Setup
            </h2>
            <ul className="list-disc pl-5">
              <li>Bank account</li>
              <li>Credit card</li>
              <li>Email</li>
              <li>Phone</li>
            </ul>
          </div>

          {/* Issue: Disputes and Account Limitations */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Disputes and Account Limitations
            </h2>
            <ul className="list-disc pl-5">
              <li>Payment dispute</li>
              <li>Chargeback</li>
              <li>Account limitations</li>
            </ul>
          </div>

          {/* Issue: Business Solutions */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Business Solutions
            </h2>
            <ul className="list-disc pl-5">
              <li>Fees</li>
              <li>Orders</li>
              <li>PayPal solutions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
