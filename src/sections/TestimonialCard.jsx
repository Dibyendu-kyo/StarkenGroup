
import { User } from "lucide-react"; // Optional: using Lucide icons

export default function TestimonialCard() {
  return (
    <div className="flex items-start gap-4">
      {/* Avatar Circle with Icon */}
      <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
        <User className="w-6 h-6 text-gray-500" />
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-700 text-md">
        "Aelo made buying my first home a breeze! Their expert team guided me through every step, and the virtual
        tours saved me time.”
      </p>
    </div>
  );
}
