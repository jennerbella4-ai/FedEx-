"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { validateTrackingNumber } from "@/lib/utils";

export default function TrackingInput() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!trackingNumber.trim()) {
      setError("Please enter a tracking number");
      return;
    }

    if (!validateTrackingNumber(trackingNumber)) {
      setError("Invalid tracking number format. Example: FEDEX123456789012US");
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      router.push(`/track/${trackingNumber}`);
      setIsLoading(false);
    }, 1000);
  };

  return (
    // <div className="w-full max-w-2xl mx-auto">
    //   <form onSubmit={handleTrack} className="space-y-4">
    //     <div className="relative">
    //       <input
    //         type="text"
    //         value={trackingNumber}
    //         onChange={(e) => setTrackingNumber(e.target.value.toUpperCase())}
    //         placeholder="TRACKING ID"
    //         className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-fedex-purple focus:outline-none focus:ring-2 focus:ring-fedex-purple/20 transition-all"
    //         disabled={isLoading}
    //       />
    //       {error && (
    //         <p className="mt-2 text-red-600 text-sm">{error}</p>
    //       )}
    //     </div>

    //     <button
    //       type="submit"
    //       disabled={isLoading}
    //       className="w-full bg-gradient-to-r from-fedex-purple to-fedex-orange text-white py-4 rounded-xl font-semibold text-lg hover:opacity-90 disabled:opacity-50 transition-all flex items-center justify-center"
    //     >
    //       {isLoading ? (
    //         <>
    //           <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
    //           Tracking...
    //         </>
    //       ) : (
    //         'Track Package'
    //       )}
    //     </button>

    //     <p className="text-center text-gray-600 text-sm">
    //       Need help? Try our demo tracking number: <code className="bg-gray-100 px-2 py-1 rounded">FEDEX123456789012US</code>
    //     </p>
    //   </form>
    // </div>
    <div className=" mx-auto">
      <form onSubmit={handleTrack} className="space-y-4">
        {/* Input + Button row */}
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <input
              type="text"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value.toUpperCase())}
              placeholder="TRACKING ID"
              className="w-full px-6 py-4 text-lg border-2 border-gray-300 focus:border-fedex-purple focus:outline-none focus:ring-2 focus:ring-fedex-purple/20 transition-all"
              disabled={isLoading}
            />

            {error && <p className="mt-2 text-red-600 text-sm">{error}</p>}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="px-10 bg-fedex-orange text-white font-semibold text-lg hover:opacity-90  transition-all flex items-center justify-center"
          >
            {isLoading ? (
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              "Track"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
