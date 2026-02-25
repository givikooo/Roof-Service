import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, Palette, Wrench, Droplets, 
  Activity, Shield, Check, ArrowRight,
  Clock, Award, ThumbsUp, Coins,
  Building2, Sparkles, Settings, Hammer, Layers, Grid3x3, 
  Trees, Sun, CloudRain, AlignVerticalJustifyCenter, Triangle, 
  Hexagon, Maximize2, Wind
} from 'lucide-react';
import { cn, getBaseUrl } from '@/lib/utils';

// Service details data
const serviceDetails = {
  'roof-installation': {
    title: 'Professional Roof Installation',
    icon: <Home size={48} />,
    description: 'Complete roof installation services using high-quality materials and expert craftsmanship for long-lasting results.',
    fullDescription: 'Our professional roof installation service provides homeowners with durable, weather-resistant roofing solutions tailored to their specific needs. We use only premium materials and employ skilled craftsmen who follow industry best practices to ensure your new roof will protect your home for decades to come.',
    image: 'images/roof-installation.jpg',
    benefits: [
      'Expert installation by certified professionals',
      'High-quality materials from trusted manufacturers',
      'Energy-efficient roofing options',
      'Comprehensive warranties',
      'Clean job site with thorough debris removal',
      'Timely project completion'
    ],
    process: [
      { title: 'Initial Consultation', description: 'We assess your needs and discuss material options.' },
      { title: 'Detailed Estimate', description: 'We provide a comprehensive quote with no hidden costs.' },
      { title: 'Material Selection', description: 'Choose from our wide range of quality roofing materials.' },
      { title: 'Installation', description: 'Our expert team completes the installation with precision.' },
      { title: 'Final Inspection', description: 'We conduct a thorough inspection to ensure quality.' },
      { title: 'Cleanup', description: 'We leave your property clean and free of debris.' }
    ],
    faqs: [
      { 
        question: 'How long does a typical roof installation take?', 
        answer: 'Most residential roof installations take 1-3 days, depending on the size and complexity of your roof.'
      },
      { 
        question: 'What types of roofing materials do you offer?', 
        answer: 'We offer a wide range of materials including asphalt shingles, metal roofing, tile, slate, and more.'
      },
      { 
        question: 'Do you provide warranties?', 
        answer: 'Yes, we offer manufacturer warranties on materials and our own workmanship warranty.'
      },
      { 
        question: 'How do I know if I need a new roof?', 
        answer: 'Signs include missing or damaged shingles, leaks, age of roof (over 20 years), and visible wear and tear.'
      }
    ]
  },
  'roof-repair': {
    title: 'Expert Roof Repair',
    icon: <Wrench size={48} />,
    description: 'Professional repair services to fix leaks, damaged shingles, and other roofing issues to protect your home.',
    fullDescription: 'Our roof repair services address a wide range of issues from minor leaks to major structural damage. Our experienced technicians can identify problems quickly and implement effective solutions to extend the life of your roof and prevent costly water damage to your home.',
    image: 'images/roof-repair.jpg',
    benefits: [
      'Fast response to prevent further damage',
      'Accurate diagnosis of roofing problems',
      'Cost-effective solutions',
      'Quality repair materials',
      'Experienced repair technicians',
      'Preventative maintenance options'
    ],
    process: [
      { title: 'Inspection', description: 'We thoroughly assess the damage to your roof.' },
      { title: 'Diagnosis', description: 'We identify the root cause of your roofing issue.' },
      { title: 'Repair Plan', description: 'We develop a comprehensive repair strategy.' },
      { title: 'Cost Estimate', description: 'We provide a transparent, detailed quote.' },
      { title: 'Repairs', description: 'Our skilled technicians implement the necessary repairs.' },
      { title: 'Final Check', description: 'We verify that all issues have been properly addressed.' }
    ],
    faqs: [
      { 
        question: 'How quickly can you respond to a roof leak?', 
        answer: 'We offer emergency services and can typically respond within 24-48 hours for urgent situations.'
      },
      { 
        question: 'Can you repair just a section of my roof?', 
        answer: 'Yes, we specialize in targeted repairs that address specific problem areas without replacing the entire roof.'
      },
      { 
        question: 'How do I know if a repair will be sufficient?', 
        answer: 'Our inspection will determine if repair is adequate or if replacement would be more cost-effective long-term.'
      },
      { 
        question: 'Do you provide temporary repairs during bad weather?', 
        answer: 'Yes, we can implement emergency tarping and temporary solutions until permanent repairs can be made safely.'
      }
    ]
  },
  'roof-replacement': {
    title: 'Complete Roof Replacement',
    icon: <Palette size={48} />,
    description: 'Full roof replacement services when repairs aren\'t enough, with various material options to choose from.',
    fullDescription: 'When repairs are no longer cost-effective or your roof has reached the end of its lifespan, our roof replacement service provides a comprehensive solution. We handle everything from tear-off to installation of your new roof, offering a variety of materials to enhance both the protection and appearance of your home.',
    image: 'images/roof-replacement.webp',
    benefits: [
      'Enhanced home value and curb appeal',
      'Improved energy efficiency',
      'Better protection against the elements',
      'Updated warranty coverage',
      'Selection of modern roofing materials',
      'Opportunity for structural improvements'
    ],
    process: [
      { title: 'Comprehensive Assessment', description: 'We evaluate your current roof condition and structural needs.' },
      { title: 'Material Consultation', description: 'We help you select the best materials for your budget and needs.' },
      { title: 'Detailed Proposal', description: 'We provide a complete project plan and transparent pricing.' },
      { title: 'Tear-off', description: 'We remove your old roofing materials completely.' },
      { title: 'Structural Repairs', description: 'We address any underlying issues before installing the new roof.' },
      { title: 'New Roof Installation', description: 'We install your new roof with precision and attention to detail.' }
    ],
    faqs: [
      { 
        question: 'How long does a roof replacement take?', 
        answer: 'Most residential roof replacements take 2-5 days, depending on size, complexity, and weather conditions.'
      },
      { 
        question: 'Can you install a new roof over my existing one?', 
        answer: 'While possible in some cases, we generally recommend complete removal to inspect and address underlying issues.'
      },
      { 
        question: 'What\'s the best time of year for roof replacement?', 
        answer: 'Spring through fall is ideal, but we can work year-round in most weather conditions except severe precipitation.'
      },
      { 
        question: 'How do I choose the right roofing material?', 
        answer: 'We\'ll help you evaluate factors like durability, appearance, energy efficiency, and budget to find the best option.'
      }
    ]
  },
  'gutter-services': {
    title: 'Comprehensive Gutter Services',
    icon: <Droplets size={48} />,
    description: 'Professional gutter cleaning, installation, replacement, and repair services for complete water drainage protection.',
    fullDescription: 'Our comprehensive gutter services protect your home from water damage through expert gutter cleaning, new gutter installation, complete gutter replacement, and targeted gutter repairs. Whether you need routine maintenance or a complete system overhaul, our experienced team ensures your gutters efficiently channel water away from your foundation, preventing costly damage to your property.',
    image: 'images/gutter-services.jpg',
    benefits: [
      'Professional gutter cleaning - removes all debris and blockages',
      'New gutter installation - aluminum, copper, or UPVC systems',
      'Complete gutter replacement - upgrade old damaged systems',
      'Expert gutter repair - fix leaks, sagging, and damage',
      'Prevents foundation and basement water damage',
      'Gutter guard installation available'
    ],
    process: [
      { title: 'Inspection & Assessment', description: 'Thorough evaluation of your gutter system condition and drainage requirements.' },
      { title: 'Service Recommendation', description: 'Determine if cleaning, repair, or replacement is needed based on condition.' },
      { title: 'Cleaning Service', description: 'Remove all debris, flush downpipes, check for leaks and proper flow.' },
      { title: 'Repair Work', description: 'Fix sagging sections, seal leaks, replace damaged brackets and sections.' },
      { title: 'Installation/Replacement', description: 'Install new gutter systems with proper pitch and secure mounting.' },
      { title: 'Testing & Verification', description: 'Verify proper water flow, drainage, and leak-free operation.' }
    ],
    faqs: [
      { 
        question: 'How often should gutters be cleaned?', 
        answer: 'We recommend professional gutter cleaning at least twice a year - in spring and fall. Properties with many overhanging trees may need quarterly cleaning to prevent blockages and overflow.'
      },
      { 
        question: 'When should I replace gutters instead of repairing them?', 
        answer: 'Consider gutter replacement if you have multiple leaks, severe rust or corrosion, sagging in multiple areas, or gutters older than 20 years. We\'ll assess and recommend the most cost-effective solution.'
      },
      { 
        question: 'What gutter material is best for installation?', 
        answer: 'Aluminum gutters are most popular - lightweight, rust-proof, and affordable. Copper offers premium aesthetics and 50+ year lifespan. UPVC is maintenance-free. We\'ll recommend based on your property and budget.'
      },
      { 
        question: 'Can you repair leaking gutter seams?', 
        answer: 'Yes, we can repair leaking seams using professional sealants and riveting techniques. For severe leaks, section replacement may be more effective and longer-lasting.'
      },
      { 
        question: 'Do you offer gutter guard installation?', 
        answer: 'Yes, we install various gutter guard systems that prevent leaves and debris while allowing water flow. This significantly reduces cleaning frequency and is ideal for homes near trees.'
      }
    ]
  },
  'roof-inspection': {
    title: 'Thorough Roof Inspection',
    icon: <Activity size={48} />,
    description: 'Thorough roof inspections to identify potential issues before they become major problems.',
    fullDescription: 'Our comprehensive roof inspection service provides homeowners with peace of mind by identifying potential problems before they lead to significant damage. Using advanced techniques and our years of experience, we thoroughly examine all aspects of your roofing system and provide detailed reports with clear recommendations.',
    image: 'images/roof-inspection.jpeg',
    benefits: [
      'Early problem detection',
      'Prevention of costly future repairs',
      'Extension of roof lifespan',
      'Documentation for insurance purposes',
      'Peace of mind',
      'Professional assessment for real estate transactions'
    ],
    process: [
      { title: 'Exterior Inspection', description: 'We examine shingles, flashing, and visible roofing materials.' },
      { title: 'Structural Assessment', description: 'We check for sagging and structural integrity issues.' },
      { title: 'Interior Inspection', description: 'We look for signs of leaks or water damage in the attic.' },
      { title: 'Ventilation Check', description: 'We ensure your roof ventilation system is functioning properly.' },
      { title: 'Detailed Documentation', description: 'We photograph and document all findings thoroughly.' },
      { title: 'Comprehensive Report', description: 'We provide a clear report with prioritized recommendations.' }
    ],
    faqs: [
      { 
        question: 'How often should I have my roof inspected?', 
        answer: 'We recommend annual inspections and additional checks after severe weather events like major storms or high winds.'
      },
      { 
        question: 'What does a roof inspection include?', 
        answer: 'Our inspections include examination of shingles/materials, flashing, gutters, chimney, ventilation, interior signs of leaks, and structural elements.'
      },
      { 
        question: 'How long does an inspection take?', 
        answer: 'A typical residential roof inspection takes 1-2 hours, depending on the size and complexity of your roof.'
      },
      { 
        question: 'Do you offer free inspections?', 
        answer: 'We offer free initial assessments for potential customers. Detailed inspections for insurance or real estate purposes may have a fee.'
      }
    ]
  },
  'storm-damage': {
    title: 'Storm Damage Repair',
    icon: <Shield size={48} />,
    description: 'Emergency services and repairs for roofs damaged by storms, high winds, or other natural disasters.',
    fullDescription: 'When severe weather strikes, our storm damage repair service provides rapid response to protect your home from further damage. We handle everything from emergency tarping to complete restoration, and we can assist with insurance claims to make the process as smooth as possible during a stressful time.',
    image: 'images/storm-damage.jpg',
    benefits: [
      'Emergency response services',
      'Temporary protective measures',
      'Insurance claims assistance',
      'Complete documentation of damage',
      'Quality repairs to restore protection',
      'Prevention of secondary damage'
    ],
    process: [
      { title: 'Rapid Response', description: 'We quickly assess and secure your roof after storm damage.' },
      { title: 'Emergency Protection', description: 'We install tarps or temporary covers to prevent further damage.' },
      { title: 'Damage Documentation', description: 'We thoroughly document all damage for insurance purposes.' },
      { title: 'Insurance Coordination', description: 'We help navigate the claims process with your insurance.' },
      { title: 'Repair Planning', description: 'We develop a comprehensive plan to restore your roof.' },
      { title: 'Complete Restoration', description: 'We perform all necessary repairs to return your roof to optimal condition.' }
    ],
    faqs: [
      { 
        question: 'What should I do immediately after storm damage?', 
        answer: 'First ensure everyone\'s safety, then call us for emergency tarping services to prevent water infiltration, and contact your insurance company to report the damage.'
      },
      { 
        question: 'Will you work with my insurance company?', 
        answer: 'Yes, we have extensive experience working with insurance companies and can help facilitate the claims process, from documentation to final inspection.'
      },
      { 
        question: 'How quickly can you respond after a storm?', 
        answer: 'We prioritize emergency situations and typically respond within 24 hours after severe weather events, often sooner depending on conditions.'
      },
      { 
        question: 'Can you identify all storm damage?', 
        answer: 'Yes, our experienced inspectors can identify both obvious and hidden storm damage that might be missed by the untrained eye.'
      }
    ]
  },
  'flat-roofing': {
    title: 'Professional Flat Roofing',
    icon: <Building2 size={48} />,
    description: 'Specialist flat roof installation and repair using modern materials like EPDM rubber, GRP fibreglass, and felt.',
    fullDescription: 'Our flat roofing specialists provide comprehensive solutions for residential and commercial properties. We work with all modern flat roofing materials including EPDM rubber, GRP fibreglass, felt systems, and single-ply membranes to deliver long-lasting, weather-tight protection.',
    image: 'images/flat-roofing.jpg',
    benefits: [
      'Durable EPDM rubber roofing - 50+ year lifespan',
      'Modern GRP fibreglass systems',
      'Traditional three-layer felt options',
      'Excellent drainage solutions',
      'Energy-efficient insulation',
      'Low maintenance requirements'
    ],
    process: [
      { title: 'Site Survey', description: 'Detailed assessment of existing flat roof structure and drainage.' },
      { title: 'Material Selection', description: 'Choose the best system for your budget and requirements.' },
      { title: 'Preparation', description: 'Remove old roof covering and repair deck if needed.' },
      { title: 'Installation', description: 'Expert installation of your chosen flat roofing system.' },
      { title: 'Quality Check', description: 'Thorough inspection and water testing.' }
    ],
    faqs: [
      { question: 'How long does a flat roof last?', answer: 'Modern flat roofs can last 20-50+ years depending on the material. EPDM rubber typically lasts 40-50 years, GRP fibreglass 30-50 years, and felt systems 15-25 years.' },
      { question: 'What is the best flat roof material?', answer: 'EPDM rubber and GRP fibreglass are excellent choices offering durability and low maintenance. The best option depends on your specific requirements, budget, and building structure.' },
      { question: 'Do flat roofs need maintenance?', answer: 'Yes, regular inspections and keeping drainage clear will extend your flat roof\'s lifespan significantly.' }
    ]
  },
  'roof-cleaning': {
    title: 'Professional Roof Cleaning',
    icon: <Sparkles size={48} />,
    description: 'Professional roof cleaning to remove moss, algae, and debris, extending your roof\'s lifespan and appearance.',
    fullDescription: 'Our specialist roof cleaning service removes moss, algae, lichen, and accumulated debris that can damage your roof and reduce its lifespan. We use gentle, effective cleaning methods that won\'t damage tiles or slates, followed by biocide treatment to prevent regrowth.',
    image: 'images/roof-cleaning.jpg',
    benefits: [
      'Extends roof lifespan significantly',
      'Improves curb appeal and property value',
      'Prevents tile/slate damage from moss',
      'Stops water retention issues',
      'Gentle cleaning methods',
      'Biocide treatment included'
    ],
    process: [
      { title: 'Inspection', description: 'Survey roof condition and identify problem areas.' },
      { title: 'Safety Setup', description: 'Install safety equipment and protect surrounding areas.' },
      { title: 'Cleaning', description: 'Careful removal of moss, algae, and debris.' },
      { title: 'Biocide Application', description: 'Apply professional treatment to prevent regrowth.' },
      { title: 'Final Clean', description: 'Clear all gutters and dispose of debris responsibly.' }
    ],
    faqs: [
      { question: 'How often should I clean my roof?', answer: 'We recommend professional cleaning every 2-3 years, or sooner if you notice significant moss growth.' },
      { question: 'Will cleaning damage my tiles?', answer: 'No, we use gentle cleaning methods specifically designed for roofing materials. We never use pressure washing which can damage tiles.' },
      { question: 'How long does biocide treatment last?', answer: 'Professional biocide treatment typically remains effective for 2-3 years, preventing moss and algae regrowth.' }
    ]
  },
  'roof-maintenance': {
    title: 'Comprehensive Roof Maintenance',
    icon: <Settings size={48} />,
    description: 'Regular maintenance programs to keep your roof in optimal condition and prevent costly repairs.',
    fullDescription: 'Preventative roof maintenance is essential for extending the lifespan of your roof and avoiding expensive emergency repairs. Our comprehensive maintenance programs include regular inspections, minor repairs, gutter cleaning, and detailed reports on your roof\'s condition.',
    image: 'images/roof-maintenance.jpg',
    benefits: [
      'Prevent costly emergency repairs',
      'Extend roof lifespan by years',
      'Regular professional inspections',
      'Priority emergency service',
      'Detailed condition reports',
      'Fixed annual maintenance cost'
    ],
    process: [
      { title: 'Initial Assessment', description: 'Comprehensive survey of roof condition and requirements.' },
      { title: 'Maintenance Plan', description: 'Customized schedule based on your roof type and age.' },
      { title: 'Regular Visits', description: 'Scheduled inspections and minor repairs.' },
      { title: 'Documentation', description: 'Detailed reports after each visit.' },
      { title: 'Priority Service', description: 'Fast-track service for any emergency issues.' }
    ],
    faqs: [
      { question: 'Why do I need roof maintenance?', answer: 'Regular maintenance catches small issues before they become expensive problems, extending your roof\'s lifespan and protecting your home investment.' },
      { question: 'What does maintenance include?', answer: 'Visual inspections, gutter cleaning, minor repairs, tile/slate replacement, repointing check, and comprehensive reporting.' },
      { question: 'How often should maintenance be done?', answer: 'We recommend biannual inspections - before winter and after winter - to catch any weather-related damage early.' }
    ]
  },
  'roofing-leadwork': {
    title: 'Expert Roofing Leadwork',
    icon: <Hammer size={48} />,
    description: 'Expert lead flashing, valleys, and weathering installation to ensure watertight seals around chimneys and dormers.',
    fullDescription: 'Leadwork is crucial for preventing water ingress at vulnerable points on your roof. Our skilled craftsmen specialize in traditional and modern lead installation techniques, including chimney flashings, valley linings, dormer weathering, and decorative lead features.',
    image: 'images/roofing-leadwork.jpg',
    benefits: [
      'Traditional craftsmanship skills',
      'Code 4, 5, and 6 lead used',
      'Watertight guarantee',
      '100+ year lifespan',
      'Expert chimney flashings',
      'Valley and dormer specialist'
    ],
    process: [
      { title: 'Assessment', description: 'Evaluate existing leadwork and requirements.' },
      { title: 'Specification', description: 'Determine correct lead code and detailing.' },
      { title: 'Preparation', description: 'Remove old lead and prepare substrate.' },
      { title: 'Installation', description: 'Expert lead installation following best practices.' },
      { title: 'Inspection', description: 'Thorough quality check and water testing.' }
    ],
    faqs: [
      { question: 'How long does lead last on a roof?', answer: 'Properly installed code 4 or 5 lead can easily last 100+ years, making it one of the most durable roofing materials.' },
      { question: 'What is the difference between lead codes?', answer: 'Lead codes refer to thickness. Code 3 (light duties), Code 4 (standard), Code 5 (valleys/dormers), Code 6 (parapet gutters). We use the appropriate code for each application.' },
      { question: 'Can old lead be repaired?', answer: 'Yes, existing lead can often be repaired or patched. However, very old or damaged lead may need complete replacement for a reliable waterproof seal.' }
    ]
  },
  'slate-roofing': {
    title: 'Premium Slate Roofing',
    icon: <Layers size={48} />,
    description: 'Traditional slate roof installation and repairs using premium natural or synthetic slate tiles.',
    fullDescription: 'Slate roofing offers unmatched beauty, durability, and longevity. Our slate roofing specialists work with both natural slate and high-quality synthetic alternatives, providing expert installation, repair, and restoration services for both period properties and modern homes.',
    image: 'images/slate-roofing.jpg',
    benefits: [
      'Natural stone beauty',
      '75-150 year lifespan',
      'Fire resistant material',
      'Low maintenance requirements',
      'Adds significant property value',
      'Environmentally sustainable'
    ],
    process: [
      { title: 'Consultation', description: 'Discuss slate options - natural vs synthetic, colors, and sizes.' },
      { title: 'Structural Check', description: 'Ensure roof structure can support slate weight.' },
      { title: 'Material Supply', description: 'Source premium quality slate tiles.' },
      { title: 'Installation', description: 'Expert laying using traditional or modern techniques.' },
      { title: 'Finishing', description: 'Ridge, valley, and detail work completion.' }
    ],
    faqs: [
      { question: 'How long does a slate roof last?', answer: 'Natural slate roofs can last 75-150 years or more with proper maintenance. Synthetic slate typically lasts 40-60 years.' },
      { question: 'Is slate roofing expensive?', answer: 'Initial costs are higher than other materials, but the exceptional longevity and low maintenance make slate cost-effective long-term.' },
      { question: 'Can individual slates be replaced?', answer: 'Yes, damaged slates can be easily replaced without disturbing surrounding tiles, making repairs straightforward.' }
    ]
  },
  'tile-roofing': {
    title: 'Clay & Concrete Tile Roofing',
    icon: <Grid3x3 size={48} />,
    description: 'Clay and concrete tile roofing installation, repair, and replacement with a wide selection of styles and colors.',
    fullDescription: 'Tile roofing combines durability with aesthetic appeal. We specialize in both clay and concrete tile installation, offering an extensive range of colors, profiles, and finishes to match any architectural style from traditional to contemporary.',
    image: 'images/tile-roofing.jpg',
    benefits: [
      'Wide range of colors and styles',
      '50-100 year lifespan',
      'Excellent weather resistance',
      'Energy efficient properties',
      'Fire resistant',
      'Low maintenance requirements'
    ],
    process: [
      { title: 'Design Selection', description: 'Choose from extensive range of tile styles and colors.' },
      { title: 'Structural Survey', description: 'Verify roof can support tile weight.' },
      { title: 'Battening', description: 'Install or replace tile battens to correct gauge.' },
      { title: 'Tile Installation', description: 'Expert fixing of tiles with appropriate clips/nails.' },
      { title: 'Ridge & Details', description: 'Complete ridge tiles, hips, and verges.' }
    ],
    faqs: [
      { question: 'Clay or concrete tiles - which is better?', answer: 'Both are excellent. Clay offers traditional appearance and 100+ year lifespan. Concrete is more affordable with 50+ year lifespan and more color options.' },
      { question: 'Do tiles need replacing if they look old?', answer: 'Not necessarily. Tiles can last many decades. If tiles are intact without cracks, they often just need re-bedding of ridges and cleaning.' },
      { question: 'Can I match tiles for repairs?', answer: 'Usually yes. We stock a wide range of tiles and can often match existing tiles for seamless repairs.' }
    ]
  },
 
  'velux-installation': {
    title: 'Velux Window Installation',
    icon: <Maximize2 size={48} />,
    description: 'Expert Velux roof window installation for improved ventilation, natural light, and energy efficiency.',
    fullDescription: 'Velux roof windows are the premium choice for bringing light and ventilation to loft spaces. As certified Velux installers, we provide expert installation of all Velux window types, including center-pivot, top-hung, and electric models with rain sensors and smart home integration.',
    image: 'images/velux-installation.jpg',
    benefits: [
      'Premium quality Velux windows',
      'Certified installation',
      'Electric and manual options',
      'Smart home compatible',
      'Rain sensor technology',
      'Energy efficient glazing'
    ],
    process: [
      { title: 'Consultation', description: 'Discuss Velux range, sizes, and operation types.' },
      { title: 'Measurement', description: 'Precise measurement for perfect fit.' },
      { title: 'Ordering', description: 'Supply genuine Velux windows and flashings.' },
      { title: 'Installation', description: 'Expert fitting following Velux specifications.' },
      { title: 'Integration', description: 'Set up electric controls or smart home features.' }
    ],
    faqs: [
      { question: 'What size Velux window do I need?', answer: 'Size depends on room dimensions, roof pitch, and rafter spacing. We\'ll recommend the optimal size for maximum light and head clearance.' },
      { question: 'Can I add blinds to Velux windows?', answer: 'Yes, Velux offers a full range of blinds including blackout, pleated, and venetian styles. We can install these at the same time.' },
      { question: 'Are electric Velux windows worth it?', answer: 'Electric Velux windows with rain sensors are excellent for hard-to-reach installations and can be integrated with smart home systems for automated climate control.' }
    ]
  },
  'downpipe-repair': {
    title: 'Downpipe Repair & Replacement',
    icon: <CloudRain size={48} />,
    description: 'Professional downpipe repair and replacement to ensure proper rainwater drainage from your property.',
    fullDescription: 'Functional downpipes are essential for directing rainwater away from your property foundations. We repair and replace damaged, leaking, or inadequate downpipes using high-quality UPVC, cast iron, or aluminium systems to protect your property from water damage.',
    image: 'images/downpipe-repair.webp',
    benefits: [
      'Prevents foundation damage',
      'Stops damp and water ingress',
      'UPVC, cast iron, or aluminium options',
      'Color-matched to property',
      'Quick installation',
      'Underground drainage connection'
    ],
    process: [
      { title: 'Inspection', description: 'Assess damage and drainage requirements.' },
      { title: 'Material Selection', description: 'Choose appropriate system for your property.' },
      { title: 'Removal', description: 'Safe removal of old downpipes.' },
      { title: 'Installation', description: 'Fit new downpipes with secure brackets.' },
      { title: 'Testing', description: 'Verify proper water flow and drainage.' }
    ],
    faqs: [
      { question: 'How do I know if my downpipe needs replacing?', answer: 'Signs include visible cracks, leaks, rust (cast iron), or overflow during rainfall. Blocked downpipes causing gutter overflow also indicate problems.' },
      { question: 'What material is best for downpipes?', answer: 'UPVC is popular for its durability and low maintenance. Cast iron suits period properties. Aluminum offers strength with less weight.' },
      { question: 'How quickly can downpipes be replaced?', answer: 'Most downpipe replacements are completed in one day, weather permitting.' }
    ]
  },
  'rainwater-systems': {
    title: 'Complete Rainwater Systems',
    icon: <Droplets size={48} />,
    description: 'Complete rainwater system installation and maintenance including gutters, downpipes, and drainage solutions.',
    fullDescription: 'A properly designed rainwater system protects your property from water damage by efficiently collecting and directing roof water away from foundations. We design, install, and maintain complete systems including gutters, downpipes, hoppers, and underground drainage.',
    image: 'images/rainwater-system.webp',
    benefits: [
      'Comprehensive system design',
      'Proper water capacity calculations',
      'Multiple material options',
      'Underground drainage connection',
      'Prevents property water damage',
      'Long-lasting installations'
    ],
    process: [
      { title: 'Site Survey', description: 'Assess roof area, rainfall requirements, and drainage.' },
      { title: 'System Design', description: 'Calculate capacities and design optimal layout.' },
      { title: 'Material Selection', description: 'Choose gutter profiles, sizes, and materials.' },
      { title: 'Installation', description: 'Complete system installation including drainage.' },
      { title: 'Testing', description: 'Verify system handles maximum water flow.' }
    ],
    faqs: [
      { question: 'What size gutters do I need?', answer: 'Size depends on roof area and rainfall rates. We calculate exact requirements ensuring your system handles even heavy storms.' },
      { question: 'Where should rainwater drain to?', answer: 'Ideally to soakaways or main drainage. We assess your property and recommend the best solution, ensuring compliance with regulations.' },
      { question: 'How often should rainwater systems be maintained?', answer: 'Annual cleaning is recommended, with additional checks after storms or heavy leaf fall to maintain optimal performance.' }
    ]
  },
  'fascia-replacement': {
    title: 'Fascia Board Replacement',
    icon: <AlignVerticalJustifyCenter size={48} />,
    description: 'UPVC and timber fascia board replacement to protect your roofline and enhance your home\'s appearance.',
    fullDescription: 'Fascia boards protect your roofline timber from weather damage while supporting gutters and adding visual appeal. We replace rotted timber fascias with maintenance-free UPVC or premium timber alternatives, improving your home\'s weather resistance and appearance.',
    image: 'images/fascia-replacement.jpg',
    benefits: [
      'Maintenance-free UPVC option',
      'Prevents rafter end rot',
      'Wide color range available',
      'Improves property appearance',
      '20+ year guarantee',
      'Quick installation'
    ],
    process: [
      { title: 'Assessment', description: 'Inspect existing fascias and rafter ends.' },
      { title: 'Material Choice', description: 'Select UPVC or timber with appropriate finish.' },
      { title: 'Gutter Removal', description: 'Safely remove existing guttering.' },
      { title: 'Fascia Replacement', description: 'Remove old boards and fit new fascias.' },
      { title: 'Gutter Refit', description: 'Reinstall or replace guttering system.' }
    ],
    faqs: [
      { question: 'UPVC or timber fascias - which is better?', answer: 'UPVC requires zero maintenance and lasts 20+ years. Timber offers traditional appearance but needs regular painting. Most homeowners choose UPVC for convenience.' },
      { question: 'Can I just paint old fascias?', answer: 'If fascias are sound, painting is possible. However, rotted boards must be replaced to prevent further timber decay and structural issues.' },
      { question: 'Do gutters need replacing with fascias?', answer: 'Not always, but it\'s cost-effective to replace both together. New gutters ensure perfect fit and avoid old brackets damaging new fascias.' }
    ]
  },
  'soffit-replacement': {
    title: 'Soffit Board Replacement',
    icon: <AlignVerticalJustifyCenter size={48} />,
    description: 'Professional soffit replacement and installation for improved ventilation and roofline protection.',
    fullDescription: 'Soffits provide essential ventilation to your roof space while protecting the underside of your roof from weather damage. We replace damaged timber soffits with ventilated UPVC systems that prevent condensation and provide maintenance-free performance.',
    image: 'images/soffit-replacement.webp',
    benefits: [
      'Integral ventilation system',
      'Prevents roof space condensation',
      'Maintenance-free UPVC',
      'Multiple color options',
      'Protects roof timbers',
      'Quick installation'
    ],
    process: [
      { title: 'Inspection', description: 'Check soffit condition and ventilation requirements.' },
      { title: 'Specification', description: 'Calculate ventilation needs and select soffits.' },
      { title: 'Preparation', description: 'Remove old soffits safely.' },
      { title: 'Installation', description: 'Fit new ventilated soffit boards.' },
      { title: 'Ventilation Check', description: 'Verify adequate roof space airflow.' }
    ],
    faqs: [
      { question: 'Why do soffits have holes?', answer: 'Ventilation holes allow air into your roof space, preventing condensation and moisture damage to roof timbers. Modern soffits have integral ventilation.' },
      { question: 'Should soffits match fascias?', answer: 'Typically yes, matching colors create a cohesive appearance. However, contrasting colors can also work depending on your property style.' },
      { question: 'How much ventilation do I need?', answer: 'Building regulations specify minimum ventilation based on roof area. We calculate exact requirements ensuring adequate airflow.' }
    ]
  },
  'cladding-repair': {
    title: 'Exterior Cladding Repair',
    icon: <Shield size={48} />,
    description: 'Expert repair and replacement of exterior cladding to protect your property from weather damage.',
    fullDescription: 'Wall cladding protects your property from weathering while enhancing appearance. We repair and replace all cladding types including timber, UPVC, metal, and composite systems, ensuring weather-tight performance and improved aesthetics.',
    image: 'images/cladding-repair.jpg',
    benefits: [
      'Weather protection',
      'Improves insulation',
      'Multiple material options',
      'Enhances property value',
      'Low maintenance solutions',
      'Modern or traditional styles'
    ],
    process: [
      { title: 'Survey', description: 'Assess damage and evaluate substrate condition.' },
      { title: 'Design', description: 'Select appropriate cladding system and finish.' },
      { title: 'Preparation', description: 'Remove damaged sections and prepare walls.' },
      { title: 'Installation', description: 'Fit new cladding ensuring weather-tightness.' },
      { title: 'Finishing', description: 'Complete trims, corners, and detail work.' }
    ],
    faqs: [
      { question: 'What cladding materials are available?', answer: 'Options include timber (cedar, larch), UPVC, composite, metal (aluminum, zinc), and fiber cement. Each has different aesthetics, maintenance needs, and longevity.' },
      { question: 'Does cladding improve insulation?', answer: 'Yes, modern cladding systems include insulation layers significantly improving thermal performance and reducing heating costs.' },
      { question: 'How long does cladding last?', answer: 'Depends on material. UPVC and metal 25+ years, timber cedar 20+ years (with treatment), composite 25-50 years.' }
    ]
  },
  'ridge-repointing': {
    title: 'Ridge Tile Repointing',
    icon: <Triangle size={48} />,
    description: 'Professional ridge tile repointing and bedding to prevent water ingress and extend roof lifespan.',
    fullDescription: 'Ridge tiles are vulnerable to weathering and movement, eventually requiring repointing to maintain weather-tightness. We remove old deteriorated mortar and rebede ridge tiles using modern flexible systems or traditional mortar, ensuring long-lasting performance.',
    image: 'images/ridge-repointing.jpg',
    benefits: [
      'Prevents wind lifting',
      'Stops water ingress',
      'Modern flexible systems available',
      'Traditional mortar option',
      'Quick completion',
      '10-15 year performance'
    ],
    process: [
      { title: 'Inspection', description: 'Assess ridge tile condition and mortar deterioration.' },
      { title: 'System Selection', description: 'Choose mechanical fixing or mortar system.' },
      { title: 'Removal', description: 'Carefully remove old mortar and clean tiles.' },
      { title: 'Rebedding', description: 'Install new mortar or mechanical system.' },
      { title: 'Pointing', description: 'Complete pointing for weather-tight seal.' }
    ],
    faqs: [
      { question: 'How often do ridges need repointing?', answer: 'Typically every 15-25 years depending on exposure and original mortar quality. Signs include cracked mortar, loose tiles, or lifted tiles.' },
      { question: 'What is dry ridge system?', answer: 'Modern mechanical fixing systems using clips and rolls rather than mortar. These offer excellent wind resistance and longer life.' },
      { question: 'Can I just repoint without rebedding?', answer: 'No, effective repointing requires removing old mortar, checking tile condition, and rebedding on fresh mortar for proper adhesion.' }
    ]
  },
 
  'dry-verge': {
    title: 'Dry Verge System Installation',
    icon: <Wrench size={48} />,
    description: 'Modern dry verge system installation for long-lasting, maintenance-free roof edge protection.',
    fullDescription: 'Dry verge systems replace traditional mortar verges with maintenance-free mechanical systems. These plastic or aluminum units provide superior wind resistance, eliminate tile slippage, and require no maintenance, making them ideal for exposed locations.',
    image: 'images/dry-verge.jpg',
    benefits: [
      'Maintenance-free operation',
      'Superior wind resistance',
      'Quick installation',
      'Eliminates tile slippage',
      'Neat finished appearance',
      '20+ year lifespan'
    ],
    process: [
      { title: 'Removal', description: 'Remove old mortar verge and clean tiles.' },
      { title: 'Preparation', description: 'Ensure correct tile positioning.' },
      { title: 'Installation', description: 'Fix dry verge units to specified spacing.' },
      { title: 'Caps', description: 'Install verge caps ensuring weather-tight seal.' },
      { title: 'Inspection', description: 'Verify secure fixing and neat appearance.' }
    ],
    faqs: [
      { question: 'Why choose dry verge over mortar?', answer: 'Dry verge systems never crack or need repointing, provide better wind resistance, and are quicker to install. They\'re the modern maintenance-free solution.' },
      { question: 'Can dry verge be added to existing roofs?', answer: 'Yes, dry verge systems are ideal for replacing failed mortar verges. The installation is quick and eliminates future maintenance.' },
      { question: 'Does dry verge work in exposed locations?', answer: 'Absolutely. Dry verge systems are specifically designed for exposed situations and often outperform mortar in high winds.' }
    ]
  },
  'external-insulation': {
    title: 'External Wall Insulation (EWI / EPS Systems)',
    icon: <Home size={48} />,
    description: 'Professional external wall insulation using EPS board and mineral wool systems to dramatically improve energy efficiency and transform your property\'s appearance.',
    fullDescription: 'External Wall Insulation (EWI) is the most effective way to improve your home\'s thermal performance. We specialize in complete EWI/EPS systems that wrap your property in a protective thermal layer, eliminating cold walls, reducing heating bills by up to 40%, and giving your home a stunning modern finish. Our certified installers work with premium materials and offer a comprehensive range of render finishes to suit any architectural style.',
    image: 'images/external-insulation.jpg',
    benefits: [
      'EPS board installation - lightweight, cost-effective insulation',
      'Mineral wool systems - fire-resistant, breathable alternatives',
      'Mechanical fixing & adhesive bonding - dual security system',
      'Mesh reinforcement - impact resistance and crack prevention',
      'Base coat application - weather-tight protective layer',
      'Silicone render finish - self-cleaning, hydrophobic coating',
      'Acrylic render finish - flexible, decorative options',
      'Decorative façade finish - wide range of colors and textures',
      'U-value upgrade systems - meet Building Regulations Part L',
      'Full house wrap insulation - complete thermal envelope'
    ],
    process: [
      { title: 'Technical Survey', description: 'We conduct detailed wall surveys, thermal imaging, and U-value calculations to design optimal system.' },
      { title: 'System Specification', description: 'We specify EPS or mineral wool boards, thickness, fixing method, and render finish system.' },
      { title: 'Surface Preparation', description: 'We clean walls, repair defects, install starter tracks, and prime surfaces for adhesion.' },
      { title: 'Board Installation', description: 'We fix insulation boards using mechanical fixings and adhesive bonding for maximum security.' },
      { title: 'Mesh & Base Coat', description: 'We embed alkali-resistant mesh in base coat providing reinforcement and impact resistance.' },
      { title: 'Render Application', description: 'We apply silicone or acrylic render finish in your chosen color with decorative texture.' },
      { title: 'Details & Finishing', description: 'We finish window reveals, corners, and joints with decorative beads and trims.' },
      { title: 'Final Inspection', description: 'We conduct quality checks ensuring weathertightness and aesthetic perfection.' }
    ],
    faqs: [
      { 
        question: 'What\'s the difference between EPS and mineral wool insulation?', 
        answer: 'EPS (Expanded Polystyrene) is lightweight, cost-effective, and offers excellent thermal performance. Mineral wool is fire-resistant (non-combustible), breathable, and preferred for certain building types. We recommend the best option for your property.'
      },
      { 
        question: 'What render finishes do you offer?', 
        answer: 'We offer silicone renders (self-cleaning, hydrophobic, longest-lasting), acrylic renders (flexible, good color retention), and mineral renders (breathable, traditional). Each comes in smooth, textured, or decorative finishes with extensive color choices.'
      },
      { 
        question: 'How does EWI affect windows and doors?', 
        answer: 'We extend window sills, add insulated reveals, and fit matching window trims. The result enhances window aesthetics while maintaining functionality. Door thresholds may need adjustment.'
      },
      { 
        question: 'What U-values can you achieve?', 
        answer: 'We typically achieve U-values of 0.18-0.25 W/m²K depending on board thickness (100-200mm). This comfortably meets and exceeds Building Regulations requirements of 0.30 W/m²K.'
      },
      { 
        question: 'Is mechanical fixing necessary with adhesive?', 
        answer: 'Yes, we use both for maximum security. Adhesive provides thermal continuity and primary fixing, while mechanical fixings provide additional security, especially important in exposed locations.'
      },
      { 
        question: 'How long will the render finish last?', 
        answer: 'Silicone renders last 25+ years with minimal maintenance. Acrylic renders 15-20 years. Both are guaranteed against defects and come with manufacturer warranties.'
      }
    ]
  },
  'internal-insulation': {
    title: 'Internal Wall Insulation',
    icon: <Layers size={48} />,
    description: 'Professional internal wall insulation using insulated plasterboard, PIR boards, and thermal dry lining systems for superior energy efficiency.',
    fullDescription: 'Internal Wall Insulation (IWI) is the perfect solution when external insulation isn\'t possible due to planning restrictions, conservation areas, or property characteristics. Our comprehensive IWI service includes multiple insulation methods tailored to your specific needs - from quick insulated plasterboard installations to full stud wall systems with PIR boards. We specialize in room-by-room upgrades, basement insulation, and apartment thermal improvements, always maintaining your property\'s external appearance while dramatically reducing heat loss and energy bills.',
    image: 'images/internal-insulation.jpg',
    benefits: [
      'Insulated plasterboard - quick installation, minimal disruption',
      'Thermal dry lining - high-performance laminated boards',
      'PIR board fitting - superior insulation values (0.022 W/mK)',
      'Vapour barrier systems - prevent condensation and damp',
      'Stud wall insulation - maximum thermal performance',
      'Basement insulation - transform cold basements into warm spaces',
      'Apartment thermal upgrade - ideal for flats and maisonettes',
      'Room-by-room insulation - phased approach to suit budget'
    ],
    process: [
      { title: 'Technical Survey', description: 'We assess wall types, identify damp issues, measure rooms, and specify optimal insulation system.' },
      { title: 'System Design', description: 'We design bespoke solution choosing between insulated plasterboard, PIR boards, or stud wall systems.' },
      { title: 'Room Preparation', description: 'We protect flooring and furniture, remove fixtures, sockets, and radiators for insulation work.' },
      { title: 'Vapour Barrier Installation', description: 'We install vapor control layers preventing interstitial condensation and damp problems.' },
      { title: 'Insulation Fixing', description: 'We mechanically fix insulated plasterboard or install stud walls with PIR board infill.' },
      { title: 'Services Relocation', description: 'We extend electrical boxes, relocate sockets and switches, refit radiators with extended brackets.' },
      { title: 'Plastering & Finishing', description: 'We skim plaster boards, achieve smooth finish ready for decoration.' },
      { title: 'Quality Checks', description: 'We verify thermal continuity, check for cold bridges, and ensure perfect finish.' }
    ],
    faqs: [
      { 
        question: 'How much room space will internal insulation take?', 
        answer: 'Insulated plasterboard: 50-70mm. PIR board systems: 60-80mm. Stud wall systems: 80-100mm. We minimize space loss while maximizing thermal performance.'
      },
      { 
        question: 'What\'s the difference between insulated plasterboard and PIR board systems?', 
        answer: 'Insulated plasterboard is laminated insulation + plasterboard in one board (quick installation). PIR boards are separate high-performance boards (better U-values) fixed before plasterboard. We recommend based on your requirements.'
      },
      { 
        question: 'Can you insulate just one room or must you do the whole house?', 
        answer: 'We specialize in room-by-room insulation allowing you to spread costs and minimize disruption. Many clients start with bedrooms or living rooms and expand later.'
      },
      { 
        question: 'Will internal insulation cause damp or condensation?', 
        answer: 'Not when properly installed. We always include vapor barrier systems and ensure adequate ventilation. We also treat any existing damp issues before insulation.'
      },
      { 
        question: 'Is internal insulation suitable for basements?', 
        answer: 'Yes, basement insulation is highly effective. We use moisture-resistant boards and vapour barriers specifically designed for below-ground applications, transforming cold basements into warm usable spaces.'
      },
      { 
        question: 'What U-values can internal insulation achieve?', 
        answer: 'Insulated plasterboard: 0.25-0.30 W/m²K. PIR board systems: 0.18-0.25 W/m²K. Stud wall systems: 0.15-0.20 W/m²K. All meet Building Regulations requirements.'
      }
    ]
  },
  'loft-insulation': {
    title: 'Loft Insulation',
    icon: <Wind size={48} />,
    description: 'Professional loft insulation installation to reduce heat loss and improve energy efficiency with quick 1-day installation.',
    fullDescription: 'Loft insulation is one of the most cost-effective ways to reduce heat loss and lower your heating bills. Up to 25% of home heat escapes through an uninsulated roof. Our professional loft insulation service installs mineral wool or fibreglass rolls between and over joists to current Building Regulations standards (270mm+), dramatically improving your home\'s thermal performance and comfort. With quick 1-day installation and minimal disruption, you\'ll start saving money immediately while improving your property\'s BER rating.',
    image: 'images/loft-insulation.jpg',
    benefits: [
      'Lower heating bills - save up to 25% on energy costs',
      'Warmer home - improved comfort in winter',
      'Improved BER rating - increase property value',
      'Quick 1-day installation - minimal disruption',
      'Mineral wool or fibreglass rolls - premium materials',
      'Insulation between & over joists - comprehensive coverage',
      'Top-up insulation available - upgrade existing insulation',
      'Ventilation check included - prevent condensation',
      'Loft hatch insulation - eliminate cold draughts'
    ],
    process: [
      { title: 'Initial Loft Survey', description: 'We inspect existing insulation levels, measure joist depths, and assess ventilation requirements.' },
      { title: 'Ventilation Check', description: 'We verify adequate ventilation and install additional vents if needed to prevent condensation.' },
      { title: 'Material Preparation', description: 'We select mineral wool or fibreglass rolls suitable for your loft specifications.' },
      { title: 'Joist Insulation', description: 'We lay insulation between joists ensuring no gaps and proper coverage around obstacles.' },
      { title: 'Over-Joist Layer', description: 'We install second layer over joists perpendicular to first layer achieving 270mm+ depth.' },
      { title: 'Loft Hatch Insulation', description: 'We insulate loft hatch door with rigid insulation board eliminating heat loss and draughts.' },
      { title: 'Pipe Protection', description: 'We insulate exposed pipes preventing freezing and protect water tanks with insulation jackets.' },
      { title: 'Final Inspection', description: 'We verify insulation depth, check ventilation paths clear, and leave loft clean and tidy.' }
    ],
    faqs: [
      { 
        question: 'How much loft insulation do I need?', 
        answer: 'Current Building Regulations recommend 270mm for optimal performance. If you have less than 200mm (or no insulation), we recommend a full installation or top-up to meet this standard.'
      },
      { 
        question: 'What\'s the difference between mineral wool and fibreglass?', 
        answer: 'Both are excellent insulators. Mineral wool is slightly denser and better for sound insulation. Fibreglass is lighter and easier to handle. We recommend the best option based on your loft characteristics.'
      },
      { 
        question: 'Can I top up my existing insulation?', 
        answer: 'Yes, top-up insulation is cost-effective if existing insulation is in good condition. We lay new insulation perpendicular to existing layers achieving required 270mm depth.'
      },
      { 
        question: 'Will loft insulation affect my ventilation?', 
        answer: 'We include a ventilation check with every installation. Proper eaves ventilation is essential to prevent condensation. We install or upgrade vents as needed.'
      },
      { 
        question: 'How long does loft insulation installation take?', 
        answer: 'Most lofts are completed in just 1 day with no disruption to living spaces. You can use your home normally during installation and start saving on heating bills immediately.'
      },
      { 
        question: 'Do you insulate the loft hatch?', 
        answer: 'Yes, loft hatch insulation is included. We fit rigid insulation board to the hatch door and draught-strip the edges, preventing heat loss and cold draughts through the hatch opening.'
      }
    ]
  },
  'roof-insulation': {
    title: 'Roof & Attic Insulation Systems',
    icon: <Home size={48} />,
    description: 'Professional roof and attic insulation services including warm roof systems, rafter insulation, and flat roof upgrades for maximum thermal efficiency.',
    fullDescription: 'Our comprehensive Roof & Attic Insulation service covers all aspects of roof-level thermal upgrades. From simple attic roll insulation and loft top-ups to complex warm roof systems and rafter insulation for conversions, we deliver solutions that dramatically reduce heat loss and meet Building Regulations. We specialize in both pitched and flat roof insulation, ensuring your property achieves optimal thermal performance with proper ventilation and condensation control.',
    image: 'images/roof-insulation.jpg',
    benefits: [
      'Attic roll insulation - mineral wool rolls for standard loft spaces',
      'Loft top-up insulation - upgrade existing insulation to 270mm+',
      'Rafter insulation - between and under rafter systems for conversions',
      'Warm roof systems - insulation above structure for flat roofs',
      'Flat roof insulation - PIR boards with vapor control layers',
      'Ventilation upgrades - ridge vents, soffit vents, tile vents',
      'Roof thermal upgrades - comprehensive thermal envelope improvements'
    ],
    process: [
      { title: 'Thermal Survey', description: 'We assess existing insulation, roof construction, ventilation, and identify thermal weaknesses.' },
      { title: 'System Specification', description: 'We design optimal solution choosing materials, thickness, and ventilation strategy.' },
      { title: 'Preparation Work', description: 'We clear loft space or strip flat roof covering as needed for insulation installation.' },
      { title: 'Insulation Installation', description: 'We install attic rolls, rafter insulation, or warm roof boards depending on system type.' },
      { title: 'Vapor Control', description: 'We install vapor barriers preventing interstitial condensation in roof structure.' },
      { title: 'Ventilation Installation', description: 'We fit ridge vents, soffit vents, or breathable membranes ensuring adequate ventilation.' },
      { title: 'Boarding (if required)', description: 'We install loft boarding on raised joists or complete flat roof weatherproofing.' },
      { title: 'Quality Assurance', description: 'We verify insulation continuity, check ventilation paths, and ensure Building Regulations compliance.' }
    ],
    faqs: [
      { 
        question: 'What\'s the difference between attic roll insulation and rafter insulation?', 
        answer: 'Attic roll insulation sits between ceiling joists in unused loft spaces. Rafter insulation fits between roof rafters for loft conversions or room-in-roof spaces where the roof forms the ceiling.'
      },
      { 
        question: 'What is a warm roof system for flat roofs?', 
        answer: 'A warm roof has insulation above the roof deck (structural layer), keeping the entire roof structure warm and eliminating condensation risk. This is the preferred modern method for flat roof insulation.'
      },
      { 
        question: 'How much loft insulation do I need?', 
        answer: 'Current Building Regulations require 270mm for new installations. If you have less than 200mm, a top-up is recommended. We measure existing insulation and calculate the exact top-up needed.'
      },
      { 
        question: 'Will roof insulation affect ventilation?', 
        answer: 'Proper ventilation is essential. We install ventilation upgrades (ridge vents, soffit vents) to ensure adequate airflow above insulation, preventing condensation and maintaining roof health.'
      },
      { 
        question: 'Can you insulate my flat roof without replacing it?', 
        answer: 'In most cases, yes. We install warm roof insulation systems over existing flat roofs, adding PIR boards and new weatherproof covering. This is a cost-effective thermal upgrade.'
      },
      { 
        question: 'Is roof insulation suitable for loft conversions?', 
        answer: 'Absolutely essential. Loft conversions require rafter insulation (between and under rafters) to meet Building Regulations Part L. We maximize headroom while achieving required U-values of 0.18 W/m²K.'
      }
    ]
  }
};

interface ServiceDetailContentProps {
  serviceId: string | undefined;
}

const ServiceDetailContent: React.FC<ServiceDetailContentProps> = ({ serviceId }) => {
  const base = getBaseUrl();
  if (!serviceId || !serviceDetails[serviceId as keyof typeof serviceDetails]) {
    return <div className="container-section">Service not found</div>;
  }

  const service = serviceDetails[serviceId as keyof typeof serviceDetails];

  return (
    <section className="bg-white">
      {/* Hero section */}
      <div className="relative h-[40vh] lg:h-[50vh] overflow-hidden">
        <img 
          src={`${base}/${service.image}`} 
          alt={service.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-roofing-navy/80 to-roofing-navy/40 flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl">
              <div className="text-white mb-4">{service.icon}</div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{service.title}</h1>
              <p className="text-xl text-white/90">{service.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 md:px-8 py-12 lg:py-16">
        {/* Overview section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-roofing-navy mb-6">Service Overview</h2>
          <p className="text-lg text-roofing-charcoal/80 mb-8">{service.fullDescription}</p>
          
          <div className="bg-roofing-light-blue p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-roofing-navy mb-4">Key Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <Check size={20} className="text-roofing-orange mr-2 mt-1 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-roofing-navy text-center mb-10">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.process.map((step, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-roofing-navy text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-roofing-navy">{step.title}</h3>
                </div>
                <p className="text-roofing-charcoal/80">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why choose us */}
        <div className="bg-roofing-gray rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-roofing-navy text-center mb-10">Why Choose Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <Award className="text-roofing-orange" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-roofing-navy mb-2">Quality Workmanship</h3>
              <p className="text-roofing-charcoal/80">Expert craftsmen with years of experience</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <ThumbsUp className="text-roofing-orange" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-roofing-navy mb-2">Fully Licensed & Insured</h3>
              <p className="text-roofing-charcoal/80">Peace of mind with complete coverage</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <Clock className="text-roofing-orange" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-roofing-navy mb-2">On-Time Service</h3>
              <p className="text-roofing-charcoal/80">We value your time and stick to schedules</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <Coins className="text-roofing-orange" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-roofing-navy mb-2">Competitive Pricing</h3>
              <p className="text-roofing-charcoal/80">Great value without compromising quality</p>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-roofing-navy text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {service.faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-roofing-navy mb-2">{faq.question}</h3>
                <p className="text-roofing-charcoal/80">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-roofing-navy text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-white/80 mb-8">Contact us today for a free consultation and estimate</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              Contact Us
            </Link>
            <a href="tel:555-123-4567" className="btn-outline border-white text-white hover:bg-white/10">
              Call (555) 123-4567
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailContent;