export default function Footer() {
  return (
    <footer className="bg-[#FAFAFA] border-t">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Our Company</h4>
            <ul className="space-y-2 text-gray-600">
              <li>About FedEx</li>
              <li>Careers</li>
              <li>Investor Relations</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-600">
              <li>Blog</li>
              <li>Newsroom</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">More</h4>
            <ul className="space-y-2 text-gray-600">
              <li>Developer Portal</li>
              <li>Logistics</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Language</h4>
            <p className="text-gray-600">English (US)</p>
          </div>
        </div>

        <div className="mt-12 border-t pt-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between gap-4">
          <p>© FedEx 1995–2025</p>
          <div className="flex gap-4">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
