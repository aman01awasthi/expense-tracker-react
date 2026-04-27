const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  return (
    <>
      <label htmlFor="category">Search Category</label>
      <input
        type="text"
        id="category"
        name="category"
        placeholder="Search by category"
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
      />
    </>
  );
};

export default CategoryFilter;
