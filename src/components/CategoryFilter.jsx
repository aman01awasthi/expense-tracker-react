const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div className="flex items-center gap-3 mb-4">
      <label htmlFor="category" className="text-sm font-medium text-gray-700">Filter by Category</label>
      <input type="text" id="category" name="category" placeholder="Search by category" value={selectedCategory} onChange={(e) => onCategoryChange(e.target.value)} className="border rounded-lg p-2 w-48"/>
    </div>
  );
};
export default CategoryFilter;