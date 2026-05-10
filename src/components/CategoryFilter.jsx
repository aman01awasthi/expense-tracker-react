import { useTheme } from "../context/ThemeContext";

const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  const {theme} = useTheme();
  return (
    <div className="flex items-center gap-3 mb-4">
      <label htmlFor="category" className={`text-sm font-medium ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>Filter by Category</label>
      <input type="text" id="category" name="category" placeholder="Search by category" value={selectedCategory} onChange={(e) => onCategoryChange(e.target.value)} className="border rounded-lg p-2 w-48"/>
    </div>
  );
};
export default CategoryFilter;