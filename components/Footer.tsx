export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-fedex-purple to-fedex-orange rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">FX</span>
              </div>
              <span className="text-xl font-bold">ExpressCourier</span>
            </div>
            <p className="text-gray-400">
              Educational courier website built for portfolio demonstration.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Track Shipments</li>
              <li>Create Shipments</li>
              <li>Shipping Rates</li>
              <li>Delivery Options</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>About Us</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>support@expresscourier.demo</li>
              <li>1-800-DEMO-HELP</li>
              <li>24/7 Customer Support</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <div className="mb-4">
            <p className="font-bold text-red-500">
              ⚠️ IMPORTANT DISCLAIMER
            </p>
            <p>
              This is an educational project only. Not affiliated with any real courier service.
              No real shipments are processed through this website.
            </p>
          </div>
          <p>© {new Date().getFullYear()} ExpressCourier Demo. For portfolio purposes only.</p>
        </div>
      </div>
    </footer>
  );
}