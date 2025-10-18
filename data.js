// Comprehensive skeleton bone data with Latin names and Finnish translations
const skeletonData = [
    // Skull (Cranium)
    {
        latin: "Cranium",
        finnish: "Kallo",
        region: "skull",
        description: "Skull"
    },
    {
        latin: "Frontal bone",
        finnish: "Otsaluu",
        region: "skull",
        description: "Forehead bone"
    },
    {
        latin: "Parietal bone",
        finnish: "Päälakiluu",
        region: "skull",
        description: "Top side of skull (2 bones)"
    },
    {
        latin: "Temporal bone",
        finnish: "Ohimoluu",
        region: "skull",
        description: "Temple bone (2 bones)"
    },
    {
        latin: "Occipital bone",
        finnish: "Takaraivoluut",
        region: "skull",
        description: "Back of skull"
    },
    {
        latin: "Sphenoid bone",
        finnish: "Kiilaluu",
        region: "skull",
        description: "Wedge-shaped bone at base of skull"
    },
    {
        latin: "Ethmoid bone",
        finnish: "Seulaluu",
        region: "skull",
        description: "Bone between nasal cavity and brain"
    },
    {
        latin: "Nasal bone",
        finnish: "Nenäluu",
        region: "skull",
        description: "Nose bone (2 bones)"
    },
    {
        latin: "Lacrimal bone",
        finnish: "Kyynelluu",
        region: "skull",
        description: "Small bone at inner eye (2 bones)"
    },
    {
        latin: "Zygomatic bone",
        finnish: "Poskipääluu",
        region: "skull",
        description: "Cheekbone (2 bones)"
    },
    {
        latin: "Maxilla",
        finnish: "Yläleuka",
        region: "skull",
        description: "Upper jaw (2 bones)"
    },
    {
        latin: "Mandible",
        finnish: "Alaleuka",
        region: "skull",
        description: "Lower jaw"
    },
    {
        latin: "Palatine bone",
        finnish: "Kitalakiluu",
        region: "skull",
        description: "Palate bone (2 bones)"
    },
    {
        latin: "Vomer",
        finnish: "Auranluu",
        region: "skull",
        description: "Nasal septum bone"
    },
    {
        latin: "Inferior nasal concha",
        finnish: "Alempi nenäkupu",
        region: "skull",
        description: "Lower nasal turbinate (2 bones)"
    },
    {
        latin: "Hyoid bone",
        finnish: "Kieliluu",
        region: "skull",
        description: "U-shaped bone in neck"
    },

    // Spine (Columna vertebralis)
    {
        latin: "Vertebra cervicalis I (Atlas)",
        finnish: "1. kaularanka (atlas)",
        region: "spine",
        description: "First cervical vertebra"
    },
    {
        latin: "Vertebra cervicalis II (Axis)",
        finnish: "2. kaularanka (axis)",
        region: "spine",
        description: "Second cervical vertebra"
    },
    {
        latin: "Vertebra cervicalis III",
        finnish: "3. kaularanka",
        region: "spine",
        description: "Third cervical vertebra"
    },
    {
        latin: "Vertebra cervicalis IV",
        finnish: "4. kaularanka",
        region: "spine",
        description: "Fourth cervical vertebra"
    },
    {
        latin: "Vertebra cervicalis V",
        finnish: "5. kaularanka",
        region: "spine",
        description: "Fifth cervical vertebra"
    },
    {
        latin: "Vertebra cervicalis VI",
        finnish: "6. kaularanka",
        region: "spine",
        description: "Sixth cervical vertebra"
    },
    {
        latin: "Vertebra cervicalis VII",
        finnish: "7. kaularanka",
        region: "spine",
        description: "Seventh cervical vertebra"
    },
    {
        latin: "Vertebra thoracica I",
        finnish: "1. rintaranka",
        region: "spine",
        description: "First thoracic vertebra"
    },
    {
        latin: "Vertebra thoracica II",
        finnish: "2. rintaranka",
        region: "spine",
        description: "Second thoracic vertebra"
    },
    {
        latin: "Vertebra thoracica III",
        finnish: "3. rintaranka",
        region: "spine",
        description: "Third thoracic vertebra"
    },
    {
        latin: "Vertebra thoracica IV",
        finnish: "4. rintaranka",
        region: "spine",
        description: "Fourth thoracic vertebra"
    },
    {
        latin: "Vertebra thoracica V",
        finnish: "5. rintaranka",
        region: "spine",
        description: "Fifth thoracic vertebra"
    },
    {
        latin: "Vertebra thoracica VI",
        finnish: "6. rintaranka",
        region: "spine",
        description: "Sixth thoracic vertebra"
    },
    {
        latin: "Vertebra thoracica VII",
        finnish: "7. rintaranka",
        region: "spine",
        description: "Seventh thoracic vertebra"
    },
    {
        latin: "Vertebra thoracica VIII",
        finnish: "8. rintaranka",
        region: "spine",
        description: "Eighth thoracic vertebra"
    },
    {
        latin: "Vertebra thoracica IX",
        finnish: "9. rintaranka",
        region: "spine",
        description: "Ninth thoracic vertebra"
    },
    {
        latin: "Vertebra thoracica X",
        finnish: "10. rintaranka",
        region: "spine",
        description: "Tenth thoracic vertebra"
    },
    {
        latin: "Vertebra thoracica XI",
        finnish: "11. rintaranka",
        region: "spine",
        description: "Eleventh thoracic vertebra"
    },
    {
        latin: "Vertebra thoracica XII",
        finnish: "12. rintaranka",
        region: "spine",
        description: "Twelfth thoracic vertebra"
    },
    {
        latin: "Vertebra lumbalis I",
        finnish: "1. lanneranka",
        region: "spine",
        description: "First lumbar vertebra"
    },
    {
        latin: "Vertebra lumbalis II",
        finnish: "2. lanneranka",
        region: "spine",
        description: "Second lumbar vertebra"
    },
    {
        latin: "Vertebra lumbalis III",
        finnish: "3. lanneranka",
        region: "spine",
        description: "Third lumbar vertebra"
    },
    {
        latin: "Vertebra lumbalis IV",
        finnish: "4. lanneranka",
        region: "spine",
        description: "Fourth lumbar vertebra"
    },
    {
        latin: "Vertebra lumbalis V",
        finnish: "5. lanneranka",
        region: "spine",
        description: "Fifth lumbar vertebra"
    },
    {
        latin: "Sacrum",
        finnish: "Ristiselkä",
        region: "spine",
        description: "Fused vertebrae at base of spine"
    },
    {
        latin: "Coccyx",
        finnish: "Häntäluu",
        region: "spine",
        description: "Tailbone"
    },

    // Ribs and Sternum
    {
        latin: "Costa I",
        finnish: "1. kylkiluu",
        region: "ribs",
        description: "First rib (left and right)"
    },
    {
        latin: "Costa II",
        finnish: "2. kylkiluu",
        region: "ribs",
        description: "Second rib (left and right)"
    },
    {
        latin: "Costa III",
        finnish: "3. kylkiluu",
        region: "ribs",
        description: "Third rib (left and right)"
    },
    {
        latin: "Costa IV",
        finnish: "4. kylkiluu",
        region: "ribs",
        description: "Fourth rib (left and right)"
    },
    {
        latin: "Costa V",
        finnish: "5. kylkiluu",
        region: "ribs",
        description: "Fifth rib (left and right)"
    },
    {
        latin: "Costa VI",
        finnish: "6. kylkiluu",
        region: "ribs",
        description: "Sixth rib (left and right)"
    },
    {
        latin: "Costa VII",
        finnish: "7. kylkiluu",
        region: "ribs",
        description: "Seventh rib (left and right)"
    },
    {
        latin: "Costa VIII",
        finnish: "8. kylkiluu",
        region: "ribs",
        description: "Eighth rib (left and right)"
    },
    {
        latin: "Costa IX",
        finnish: "9. kylkiluu",
        region: "ribs",
        description: "Ninth rib (left and right)"
    },
    {
        latin: "Costa X",
        finnish: "10. kylkiluu",
        region: "ribs",
        description: "Tenth rib (left and right)"
    },
    {
        latin: "Costa XI",
        finnish: "11. kylkiluu",
        region: "ribs",
        description: "Eleventh rib (left and right)"
    },
    {
        latin: "Costa XII",
        finnish: "12. kylkiluu",
        region: "ribs",
        description: "Twelfth rib (left and right)"
    },
    {
        latin: "Sternum",
        finnish: "Rintalasta",
        region: "ribs",
        description: "Breastbone"
    },

    // Shoulder and Arms
    {
        latin: "Clavicle",
        finnish: "Solisluu",
        region: "shoulder",
        description: "Collarbone (2 bones)"
    },
    {
        latin: "Scapula",
        finnish: "Lapaluu",
        region: "shoulder",
        description: "Shoulder blade (2 bones)"
    },
    {
        latin: "Humerus",
        finnish: "Olkaluu",
        region: "shoulder",
        description: "Upper arm bone (2 bones)"
    },
    {
        latin: "Radius",
        finnish: "Värttinäluu",
        region: "shoulder",
        description: "Forearm bone, thumb side (2 bones)"
    },
    {
        latin: "Ulna",
        finnish: "Kyynärluu",
        region: "shoulder",
        description: "Forearm bone, pinky side (2 bones)"
    },

    // Hands (Carpals, Metacarpals, Phalanges)
    {
        latin: "Scaphoid",
        finnish: "Veneluut",
        region: "hands",
        description: "Wrist bone, radial side"
    },
    {
        latin: "Lunate",
        finnish: "Kuuluu",
        region: "hands",
        description: "Wrist bone, crescent-shaped"
    },
    {
        latin: "Triquetrum",
        finnish: "Kolmioluu",
        region: "hands",
        description: "Wrist bone, triangular"
    },
    {
        latin: "Pisiform",
        finnish: "Herneluu",
        region: "hands",
        description: "Wrist bone, pea-shaped"
    },
    {
        latin: "Trapezium",
        finnish: "Iso monikulmainen luu",
        region: "hands",
        description: "Wrist bone, base of thumb"
    },
    {
        latin: "Trapezoid",
        finnish: "Pieni monikulmainen luu",
        region: "hands",
        description: "Wrist bone, next to trapezium"
    },
    {
        latin: "Capitate",
        finnish: "Pääntä luu",
        region: "hands",
        description: "Wrist bone, largest carpal"
    },
    {
        latin: "Hamate",
        finnish: "Koukuluu",
        region: "hands",
        description: "Wrist bone, hook-shaped"
    },
    {
        latin: "Metacarpal I",
        finnish: "1. käsivarsilu",
        region: "hands",
        description: "Thumb metacarpal"
    },
    {
        latin: "Metacarpal II",
        finnish: "2. käsivarsilu",
        region: "hands",
        description: "Index finger metacarpal"
    },
    {
        latin: "Metacarpal III",
        finnish: "3. käsivarsilu",
        region: "hands",
        description: "Middle finger metacarpal"
    },
    {
        latin: "Metacarpal IV",
        finnish: "4. käsivarsilu",
        region: "hands",
        description: "Ring finger metacarpal"
    },
    {
        latin: "Metacarpal V",
        finnish: "5. käsivarsilu",
        region: "hands",
        description: "Pinky finger metacarpal"
    },
    {
        latin: "Proximal phalanx (hand)",
        finnish: "Käden tyvinivel",
        region: "hands",
        description: "First finger bone segment (10 total)"
    },
    {
        latin: "Middle phalanx (hand)",
        finnish: "Käden keskimmäinen nivel",
        region: "hands",
        description: "Middle finger bone segment (8 total)"
    },
    {
        latin: "Distal phalanx (hand)",
        finnish: "Käden kärkinivel",
        region: "hands",
        description: "Fingertip bone segment (10 total)"
    },

    // Pelvis
    {
        latin: "Ilium",
        finnish: "Suoliluu",
        region: "pelvis",
        description: "Upper part of hip bone (2 bones)"
    },
    {
        latin: "Ischium",
        finnish: "Istuinluu",
        region: "pelvis",
        description: "Lower back part of hip bone (2 bones)"
    },
    {
        latin: "Pubis",
        finnish: "Häpyluu",
        region: "pelvis",
        description: "Front part of hip bone (2 bones)"
    },

    // Legs
    {
        latin: "Femur",
        finnish: "Resiluu",
        region: "legs",
        description: "Thigh bone (2 bones)"
    },
    {
        latin: "Patella",
        finnish: "Polvilumpiot",
        region: "legs",
        description: "Kneecap (2 bones)"
    },
    {
        latin: "Tibia",
        finnish: "Sääriluu",
        region: "legs",
        description: "Shin bone (2 bones)"
    },
    {
        latin: "Fibula",
        finnish: "Pohjeluu",
        region: "legs",
        description: "Calf bone (2 bones)"
    },

    // Feet (Tarsals, Metatarsals, Phalanges)
    {
        latin: "Calcaneus",
        finnish: "Kantapääluu",
        region: "feet",
        description: "Heel bone (2 bones)"
    },
    {
        latin: "Talus",
        finnish: "Nilkkaluu",
        region: "feet",
        description: "Ankle bone (2 bones)"
    },
    {
        latin: "Navicular",
        finnish: "Veneluu",
        region: "feet",
        description: "Boat-shaped tarsal bone"
    },
    {
        latin: "Cuboid",
        finnish: "Kuutioluu",
        region: "feet",
        description: "Cube-shaped tarsal bone"
    },
    {
        latin: "Medial cuneiform",
        finnish: "Sisempi kiilaluu",
        region: "feet",
        description: "Inner wedge bone of foot"
    },
    {
        latin: "Intermediate cuneiform",
        finnish: "Keskimmäinen kiilaluu",
        region: "feet",
        description: "Middle wedge bone of foot"
    },
    {
        latin: "Lateral cuneiform",
        finnish: "Ulompi kiilaluu",
        region: "feet",
        description: "Outer wedge bone of foot"
    },
    {
        latin: "Metatarsal I",
        finnish: "1. jalkapöydänluu",
        region: "feet",
        description: "Big toe metatarsal"
    },
    {
        latin: "Metatarsal II",
        finnish: "2. jalkapöydänluu",
        region: "feet",
        description: "Second toe metatarsal"
    },
    {
        latin: "Metatarsal III",
        finnish: "3. jalkapöydänluu",
        region: "feet",
        description: "Third toe metatarsal"
    },
    {
        latin: "Metatarsal IV",
        finnish: "4. jalkapöydänluu",
        region: "feet",
        description: "Fourth toe metatarsal"
    },
    {
        latin: "Metatarsal V",
        finnish: "5. jalkapöydänluu",
        region: "feet",
        description: "Fifth toe metatarsal"
    },
    {
        latin: "Proximal phalanx (foot)",
        finnish: "Jalan tyvinivel",
        region: "feet",
        description: "First toe bone segment (10 total)"
    },
    {
        latin: "Middle phalanx (foot)",
        finnish: "Jalan keskimmäinen nivel",
        region: "feet",
        description: "Middle toe bone segment (8 total)"
    },
    {
        latin: "Distal phalanx (foot)",
        finnish: "Jalan kärkinivel",
        region: "feet",
        description: "Toe tip bone segment (10 total)"
    }
];
