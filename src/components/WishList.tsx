"use client";
import { useState } from "react";
import { Heart } from "lucide-react";

const WishlistComponent = () => {
  const [activeIcon, setActiveIcon] = useState(null); // Track which icon is active

  const toggleWishlist = (id: any) => {
    if (activeIcon === id) {
      setActiveIcon(null); // Remove from wishlist
      setTimeout(() => {
        alert("Removed from wishlist");
      }, 100); // Delay the alert after removing
    } else {
      setActiveIcon(id); // Add to wishlist
      setTimeout(() => {
        alert("Added to wishlist");
      }, 100); // Delay the alert after adding
    }
  };

  const icon = [1];

  return (
    <div className="flex space-x-4">
      {icon.map((id) => (
        <Heart
          key={id}
          onClick={() => toggleWishlist(id)}
          className={`w-5 h-5 sm:w-6 sm:h-6 stroke-gray-400 hover:cursor-pointer ${
            activeIcon === id ? "fill-red-500 stroke-red-500" : "fill-none"
          }`}
        />
      ))}
    </div>
  );
};

export default WishlistComponent;
