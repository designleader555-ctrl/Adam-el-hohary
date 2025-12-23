// Sample project data
const projects = [
  {
    id: 1,
    title: "Brand Identity Design",
    category: "Branding",
    image: "/modern-brand-identity-design-with-minimal-aestheti.jpg",
    tags: ["Design", "Branding"],
    description:
      "A comprehensive brand identity system for a sustainable fashion startup, featuring logo design, color palette, and brand guidelines.",
    client: "EcoWear",
    year: "2024",
    role: "Brand Designer",
    media: [
      { type: "image", src: "/brand-identity-logo-designs-minimal.jpg" },
      { type: "image", src: "/brand-color-palette-and-typography.jpg" },
      { type: "image", src: "/business-cards-and-stationery-design.jpg" },
    ],
  },
  {
    id: 2,
    title: "Mobile App Interface",
    category: "UI/UX Design",
    image: "/mobile-app-interface-design-minimal-clean.jpg",
    tags: ["UI/UX", "Mobile"],
    description:
      "Intuitive mobile application design for a fitness tracking app with seamless user experience and modern aesthetics.",
    client: "FitTrack",
    year: "2024",
    role: "UI/UX Designer",
    media: [
      { type: "image", src: "/mobile-app-screens-fitness-interface.jpg" },
      { type: "video", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" },
      { type: "image", src: "/app-user-flow-diagram.jpg" },
    ],
  },
  {
    id: 3,
    title: "E-commerce Website",
    category: "Web Development",
    image: "/ecommerce-website-homepage-minimal-design.jpg",
    tags: ["Web", "Development"],
    description: "Full-stack e-commerce platform with modern checkout experience and inventory management system.",
    client: "Artisan Goods",
    year: "2023",
    role: "Full-Stack Developer",
    media: [
      { type: "image", src: "/ecommerce-homepage-design.jpg" },
      { type: "image", src: "/product-page-layout-ecommerce.jpg" },
      { type: "video", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" },
    ],
  },
  {
    id: 4,
    title: "Editorial Photography",
    category: "Photography",
    image: "/editorial-fashion-photography-minimal.jpg",
    tags: ["Photography"],
    description: "Art direction and photography for a contemporary fashion editorial series.",
    client: "Style Magazine",
    year: "2024",
    role: "Photographer",
    media: [
      { type: "image", src: "/fashion-editorial-photography-portrait.jpg" },
      { type: "image", src: "/fashion-editorial-full-body-shot.jpg" },
      { type: "image", src: "/fashion-editorial-detail-shot.jpg" },
    ],
  },
  {
    id: 5,
    title: "Motion Graphics Reel",
    category: "Motion Design",
    image: "/motion-graphics-abstract-design.jpg",
    tags: ["Motion", "Animation"],
    description: "Collection of motion graphics and animated content for various digital campaigns.",
    client: "Various Clients",
    year: "2023-2024",
    role: "Motion Designer",
    media: [
      { type: "video", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
      { type: "image", src: "/motion-graphics-storyboard.jpg" },
      { type: "video", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" },
    ],
  },
  {
    id: 6,
    title: "Packaging Design",
    category: "Design",
    image: "/product-packaging-design-minimal-elegant.jpg",
    tags: ["Design", "Branding"],
    description: "Sustainable packaging design for an organic skincare line emphasizing eco-friendly materials.",
    client: "Pure Botanicals",
    year: "2023",
    role: "Package Designer",
    media: [
      { type: "image", src: "/skincare-packaging-design.jpg" },
      { type: "image", src: "/placeholder.svg?height=800&width=1200" },
      { type: "image", src: "/placeholder.svg?height=800&width=1200" },
    ],
  },
]

// Render projects on homepage
function renderProjects() {
  const grid = document.getElementById("projectsGrid")
  if (!grid) return

  grid.innerHTML = projects
    .map(
      (project) => `
    <div class="project-card">
      <a href="project.html?id=${project.id}" class="project-card-link">
        <div class="project-image-wrapper">
          <img src="${project.image}" alt="${project.title}" class="project-image">
        </div>
        <div class="project-info">
          <h3 class="project-name">${project.title}</h3>
          <p class="project-category">${project.category}</p>
          <div class="project-tags">
            ${project.tags.map((tag) => `<span class="project-tag">${tag}</span>`).join("")}
          </div>
        </div>
      </a>
    </div>
  `,
    )
    .join("")
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  renderProjects()
})

// Store projects data in sessionStorage for project page
sessionStorage.setItem("projectsData", JSON.stringify(projects))
