const Filter = ({ categories, selectedCategories, onCategoryChange }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg mb-6">
      <h3 className="text-xl font-semibold mb-4">Filter by Category</h3>
      <div className="space-y-2">
        {categories.map((category) => (
          <div key={category} className="flex items-center">
            <input
              type="checkbox"
              id={category}
              checked={selectedCategories.includes(category)}
              onChange={() => onCategoryChange(category)}
              className="mr-2"
            />
            <label htmlFor={category} className="text-gray-700">
              {category}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
