export const footerLinks = [
  {
    title: "About",
    links: [
      { title: "How it works", url: "/" },
      { title: "Featured", url: "/" },
      { title: "Partnership", url: "/" },
      { title: "Bussiness Relation", url: "/" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "Events", url: "/" },
      { title: "Blog", url: "/" },
      { title: "Podcast", url: "/" },
      { title: "Invite a friend", url: "/" },
    ],
  },
  {
    title: "Socials",
    links: [
      { title: "Discord", url: "/" },
      { title: "Instagram", url: "/" },
      { title: "Twitter", url: "/" },
      { title: "Facebook", url: "/" },
    ],
  },
];

export const products = [
  { id: 1, title: "Underarmour Hoodie Compass", price: 199, productType: "Hoodie", color: "Colored", size: "XL" ,imageUrl: "/Images/hoodie_001.webp" },
  { id: 2, title: "Ugg Hoodie Heavyweight", price: 199, productType: "Hoodie", color: "Black", size: "M" ,imageUrl: "/Images/hoodie_002.webp" },
  { id: 3, title: "Huf Hoodie Sport", price: 199, productType: "Hoodie", color: "LGray", size: "S" ,imageUrl: "/Images/hoodie_003.webp" },
  { id: 4, title: "Puma Pants Active", price: 45, productType: "Pants", color: "LGray", size: "XS" ,imageUrl: "/Images/pants_001.webp" },
  { id: 5, title: "Puma Pants Fleece", price: 45, productType: "Pants", color: "Black", size: "M" ,imageUrl: "/Images/pants_002.webp" },
  { id: 6, title: "Nike Pants Air", price: 45, productType: "Pants", color: "Gray", size: "XL" ,imageUrl: "/Images/pants_003.webp" },
  { id: 7, title: "Nike Pants Sportswear", price: 45, productType: "Pants", color: "Black", size: "M" ,imageUrl: "/Images/pants_004.webp" },
  { id: 8, title: "Adidas Shoes LV8", price: 89, discount: 26, productType: "Shoes", color: "Black", size: "L" ,imageUrl: "/Images/shoes_001.webp" },
  { id: 9, title: "Adidas Shoes Climacool", price: 89, discount: 26, productType: "Shoes", color: "Black", size: "M" ,imageUrl: "/Images/shoes_002.webp" },
  { id: 10, title: "Nike Shoes General", price: 89, discount: 26, productType: "Shoes", color: "Black", size: "S" ,imageUrl: "/Images/shoes_003.webp" },
  { id: 11, title: "Nike Shoes Metcon", price: 89, discount: 26, productType: "Shoes", color: "White", size: "M" ,imageUrl: "/Images/shoes_004.webp" },
  { id: 12, title: "UnderArmour T-Shirt Compass", price: 29, productType: "T-Shirt", color: "Black", size: "M" ,imageUrl: "/Images/tshirt_001.webp" },
  { id: 13, title: "UnderArmour T-Shirt Heavyweight", price: 29, productType: "T-Shirt", color: "Colored", size: "L" ,imageUrl: "/Images/tshirt_002.webp" },
 ] as const;