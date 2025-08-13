interface Service {
  title: string;
  description: string;
  image: string;
}

interface Industry {
  title: string;
  description: string;
  image: string;
  services: Service[];
}

export const industryDetails: Record<string, Industry> = {
  manufacturing: {
    title: "Manufacturing",
    description: "Discover our industrial units and factory capabilities.",
    image: "/industries/manufacturing.jpg",
    services: [
      {
        title: "REBAR Couplers (Our Patented Product)",
        description: `Our REBAR couplers are designed to connect steel bars quickly and securely, reducing waste and saving time on construction sites.

Key Features:
• Tested for high strength and durability
• Ideal for both residential and commercial projects
• Patented design ensures consistent quality
• Easy installation in all types of structures
• Reduces construction time and material waste`,
        image: "/images/industries/manufacturing/reber-couplers.jpg"
      },
      {
        title: "Oil Grooving & Bushes",
        description: `We manufacture precision oil grooving components and industrial bushes used in machinery and engines.

Benefits:
• Reduce friction in mechanical systems
• Improve movement and performance
• Increase the life of mechanical systems
• Available in various sizes and materials
• Meet the highest industry standards
• Used in engines and heavy machinery`,
        image: "/images/industries/manufacturing/Oil Grooving & Bushes.avif"
      },
      {
        title: "Fabrication",
        description: `Our fabrication services include cutting, welding, and shaping metals to create strong, custom-built components.

Services Include:
• Metal cutting with precision
• Professional welding services
• Custom shaping and forming
• Work with mild steel and stainless steel
• High-quality fabricated structures
• Suitable for construction and industrial use
• Guaranteed accuracy, strength, and on-time delivery`,
        image: "/images/industries/fabrication.webp"
      },
      {
        title: "Special Purpose Machines & Components",
        description: `We design and build special purpose machines tailored to your industry needs.

Our Approach:
• Custom design for specific industry requirements
• Improve efficiency and productivity
• Reduce manual work and labor costs
• Built for long-term reliable use
• Complete service from concept to production
• Precision engineering with strong support
• Ongoing maintenance and technical assistance`,
        image: "/images/industries/manufacturing/Special Purpose Machines & Components.webp"
      }
    ]
  },
  services: {
    title: "Services",
    description: "See the range of services we offer across sectors.",
    image: "/industries/services.jpg",
    services: [
      {
        title: "Hospitality Management",
        description: `We provide professional hospitality management services for hotels, resorts, and commercial properties.

Our Services:
• Professional hotel and resort management
• High service standards maintenance
• Smooth daily operations management
• Guest satisfaction assurance
• Housekeeping services coordination
• Front desk management
• Quality experience delivery every day`,
        image: "/images/industries/services/Hospitality Management.png"
      },
      {
        title: "Manpower Supply",
        description: `We supply skilled and semi-skilled manpower for various industries and projects.

What We Offer:
• Skilled and semi-skilled workforce
• Construction, manufacturing, hospitality sectors
• Trained and reliable personnel
• Short-term and long-term project support
• Proper documentation and compliance
• Quick deployment capabilities
• Smooth staffing solutions for your business`,
        image: "/images/industries/services/Manpower Supply.png"
      },
      {
        title: "Calibration Services",
        description: `We offer accurate calibration services for industrial tools, machines, and equipment.

Our Expertise:
• Certified professional calibration team
• National and international standards compliance
• Industrial tools and equipment testing
• Precision maintenance services
• Quality control improvement
• Compliance requirements fulfillment
• Regular calibration scheduling available`,
        image: "/images/industries/services/Calibration Services.png"
      },
      {
        title: "Procurement Management Consultant",
        description: `We assist businesses in streamlining their purchasing and supply chain processes.

Our Services:
• Purchasing process optimization
• Supply chain management consulting
• Vendor selection and evaluation
• Cost control and budget management
• Efficiency improvement strategies
• Procurement risk reduction
• Customized sourcing solutions
• Time and money saving strategies`,
        image: "/images/industries/procurement.png"
      },
      {
        title: "Real Estate Development",
        description: `Our real estate development services include planning, design, and construction of residential and commercial spaces.

Our Process:
• Comprehensive project planning
• Professional design and architecture
• Residential and commercial construction
• Safe and sustainable building practices
• Modern property development
• Long-term value delivery
• Complete project management from start to finish
• Quality assurance at every stage`,
        image: "/images/industries/services/Real Estate Development.png"
      }
    ]
  },
  trading: {
    title: "Trading",
    description: "Know our extensive trading operations across regions.",
    image: "/industries/trading.jpg",
    services: [
      {
        title: "Import – Export",
        description: `We handle the import and export of quality industrial goods and building materials across global markets.

Our Capabilities:
• Quality industrial goods trading
• Building materials import/export
• Global market reach and presence
• Strong logistics network
• Clear documentation and compliance
• Safe and timely delivery guarantee
• Reliable international trade partnership
• Focus on quality and regulatory compliance`,
        image: "/images/industries/trading/Import – Export.png"
      },
      {
        title: "Machine Components",
        description: `We supply high-quality machine components used in various industries like construction, manufacturing, and engineering.

What We Provide:
• High-quality machine components
• Construction industry parts
• Manufacturing equipment components
• Engineering precision parts
• Strict quality standards compliance
• Various specifications available
• Standard and custom orders
• Precision delivery with consistency`,
        image: "/images/industries/trading/Machine Components.png"
      },
      {
        title: "Building Material Trading",
        description: `From steel and cement to electrical and plumbing items, we trade a wide range of building materials for construction projects.

Materials We Supply:
• Steel and structural materials
• Cement and concrete products
• Electrical components and systems
• Plumbing items and fixtures
• Wide range of construction materials
• Strong vendor network partnerships
• Bulk supply capacity
• Competitive pricing and on-time delivery
• Support for builders, contractors, and developers
• Materials for every construction stage`,
        image: "/images/industries/trading/Building Material Trading.png"
      }
    ]
  },
  construction: {
    title: "Construction",
    description: "Building strong foundations for the future.",
    image: "/images/industries/construction.png",
    services: [
      {
        title: "Residential Construction",
        description: `We specialize in building high-quality residential properties that combine modern design with traditional craftsmanship.

Our Services:
• Custom home construction
• Apartment and housing complexes
• Villa and luxury home development
• Interior design and finishing
• Quality materials and construction
• Timely project completion
• Post-construction support and maintenance`,
        image: "/images/industries/real-estate.png"
      },
      {
        title: "Commercial Construction",
        description: `Our commercial construction services cater to businesses looking for professional, durable, and functional spaces.

What We Build:
• Office buildings and complexes
• Retail spaces and shopping centers
• Industrial facilities and warehouses
• Educational institutions
• Healthcare facilities
• Hospitality and entertainment venues
• Custom commercial projects`,
        image: "/images/industries/building-materials.webp"
      },
      {
        title: "Infrastructure Development",
        description: `We contribute to infrastructure development projects that support community growth and economic development.

Our Capabilities:
• Road and highway construction
• Bridge and overpass development
• Water supply and drainage systems
• Electrical and telecommunications infrastructure
• Public facility construction
• Urban planning and development
• Government and municipal projects`,
        image: "/images/industries/construction.png"
      }
    ]
  }
};