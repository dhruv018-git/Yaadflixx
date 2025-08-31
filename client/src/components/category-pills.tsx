export default function CategoryPills() {
  const categories = [
    "Action", "Drama", "Comedy", "Thriller", "Sci-Fi", "Horror", "Romance", "Documentary"
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="scroll-fade">
          <h2 className="text-2xl font-bold mb-8" data-testid="heading-genres">Browse by Genre</h2>
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button 
                key={category}
                className="category-pill px-6 py-3 rounded-full text-white font-medium"
                data-testid={`button-genre-${category.toLowerCase()}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
