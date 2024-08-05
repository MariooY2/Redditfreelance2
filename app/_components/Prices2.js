"use client"
import { useState } from "react";

const servicesData = [
  {
    category: "Teeth Whitening",
    services: [{ name: "Teeth Whitening", price: "$80.00" }],
  },
  {
    category: "Teeth Jewelry",
    services: [
      {
        name: "Installation",
        price: "$140.00",
        additionalInfo: "$100 for Repeat Customers",
      },
      {
        name: "Removal",
        price: "$50.00",
        additionalInfo:
          "Removals & Installation can be discounted for repeat customers",
      },
      { name: "Gems", price: "Varies" },
    ],
  },
  {
    category: "Lashes",
    services: [
      { name: "Classic", price: "$150.00" },
      { name: "Hybrid", price: "$175.00" },
      { name: "Soft Volume", price: "$185.00" },
      { name: "Volume", price: "$220.00" },
      { name: "Mega Volume", price: "$250.00" },
      { name: "Classic Refill", price: "$75.00" },
      { name: "Hybrid Refill", price: "$85.00" },
      { name: "Volume Refill", price: "$120.00" },
      { name: "Soft Volume Refill", price: "$100.00" },
    ],
  },
  {
    category: "Body Contouring",
    services: [
      {
        name: "Lipo",
        price: "$240.00",
        additionalInfo: "Per Session $75 to add another body area",
      },
      {
        name: "Butt Lift",
        price: "$250.00",
        additionalInfo: "Per Session 6-12 sessions depending on the body type",
      },
      {
        name: "Skin Tightening",
        price: "$200.00",
        additionalInfo: "Per Session $50 Small areas Face $75",
      },
      {
        name: "Cellulite Reduction",
        price: "$250.00",
        additionalInfo: "Per Session",
      },
      { name: "Wood Therapy", price: "$125.00", additionalInfo: "Per Session" },
    ],
  },
  {
    category: "Brow Lamination and Tinting",
    services: [
      { name: "Brow Lamination", price: "$70.00" },
      { name: "Brow Tinting", price: "$30.00" },
      { name: "Brow Lamination & Tinting", price: "$90.00" },
      { name: "Brow Wax", price: "$25.00" },
    ],
  },
  {
    category: "Bundled Services",
    services: [
      {
        name: "Bright Eyes & Pearly Whites Bundle - Teeth Whitening & Classic Lashes",
        price: "$200.00",
      },
      { name: "Teeth Whitening & Hybrid Lashes", price: "$240.00" },
      { name: "Teeth Whitening & Volume Lashes", price: "$250.00" },
      {
        name: "Lash & Gem Brilliance Bundle - Teeth Jewelry & Classic Lashes",
        price: "$250.00",
      },
      { name: "Teeth Jewelry & Hybrid Lashes", price: "$290.00" },
      { name: "Teeth Jewelry & Volume Lashes", price: "$320.00" },
      {
        name: "Lash & Brow Revival Package - Brow Tinting & Classic Lashes",
        price: "$150.00",
      },
      { name: "Brow Tinting & Hybrid Lashes", price: "$200.00" },
      { name: "Brow Tinting & Volume Lashes", price: "$240.00" },
      {
        name: "FirmCurve Harmony - Butt Lift, Skin Tightening and Wood Therapy",
        price: "$400.00",
      },
      {
        name: "Lifted Cellulite Fusion - Cellulite Reduction & Butt Lift",
        price: "$400.00",
      },
    ],
  },
  {
    category: "Body Contouring Session Sales",
    services: [
      { name: "Cellulite Reduction - Session 4", price: "$750.00" },
      { name: "Cellulite Reduction - Session 6", price: "$1,150.00" },
      { name: "Skin Tightening - Sessions 4", price: "$600.00" },
      { name: "Butt Lift - Sessions 3", price: "$600.00" },
      { name: "Butt Lift - Sessions 5", price: "$1,000.00" },
      { name: "Butt Lift - Sessions 8", price: "$1,500.00" },
      { name: "Lipo - Sessions 4", price: "$800.00" },
    ],
  },
];

function Prices2() {
  const [selectedCategory, setSelectedCategory] = useState("Teeth Whitening");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="lg:text-7xl text-4xl font-bold text-center  mb-8">
        Prices
      </h1>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {servicesData.map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-lg shadow-md ${
              selectedCategory === category.category
                ? "bg-pink-600 text-white"
                : "bg-white text-pink-600 border border-pink-600"
            }`}
            onClick={() => handleCategoryClick(category.category)}
          >
            {category.category}
          </button>
        ))}
      </div>
      {selectedCategory && (
        <div>
          <h2 className="text-2xl font-bold text-pink-600 mb-4">
            {selectedCategory}
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-950">
              <thead>
                <tr>
                  <th className="px-4 py-2 border border-gray-950 text-gray-950">Service</th>
                  <th className="px-4 py-2 border border-gray-950 text-gray-950">Price</th>
                  <th className="px-4 py-2 border border-gray-950 text-gray-950">Additional Info</th>
                </tr>
              </thead>
              <tbody>
                {servicesData
                  .find((category) => category.category === selectedCategory)
                  .services.map((service, index) => (
                    <tr key={index} className="border-t">
                      <td className="px-4 py-2 border border-gray-950 text-gray-950">{service.name}</td>
                      <td className="px-4 py-2 border border-gray-950 text-gray-950">{service.price}</td>
                      <td className="px-4 py-2 border border-gray-950 text-gray-950">
                        {service.additionalInfo || "-"}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default Prices2;