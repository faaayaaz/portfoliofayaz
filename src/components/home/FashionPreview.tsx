import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function FashionPreview() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const fashionProjects = [
    {
      title: "Urban Collection",
      image: "lovable-uploads/1cb96b82-31c8-4f79-9365-eb23a4bfc4c8.png",
      description: "City-inspired fashion shoot featuring contemporary urban styles.",
    },
    {
      title: "Winter Styles",
      image: "lovable-uploads/26d9f84d-93af-4f3f-935d-21c6ebdf937f.png",
      description: "Cold weather collection highlighting functional yet stylish winter wear.",
    },
    {
      title: "Summer Lookbook",
      image: "lovable-uploads/7e04893a-ef02-44c6-96ad-5e68880373bb.png",
      description: "Bright and colorful summer styles for the season.",
    },
  ];

  return (
    <section className="section-padding bg-fashion-cream">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif mb-3">Fashion Portfolio</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Showcasing a curated selection of modeling work across diverse styles,
              brands, and creative concepts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fashionProjects.map((project, index) => (
              <motion.div
                key={index}
                className="fashion-card relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-[320px] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                    style={{
                      transform: hoveredIndex === index ? "scale(1.05)" : "scale(1)",
                    }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-serif mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button asChild size="lg">
              <Link to="/fashion">View All Fashion Projects</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
