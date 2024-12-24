// import React, { useState } from 'react';
// import { Input } from '@shadcn/ui'; 
// import { Button } from '@shadcn/ui';  

// // Example suggestions
// const suggestions = [
//   "Apple",
//   "Banana",
//   "Orange",
//   "Grapes",
//   "Peach",
//   "Pineapple"
// ];

// const SearchBar = () => {
//   const [query, setQuery] = useState('');
//   const [filteredSuggestions, setFilteredSuggestions] = useState(suggestions);
//   const [isPopoverOpen, setIsPopoverOpen] = useState(false);

//   // Handle input change and filtering of suggestions
//   const handleChange = (e) => {
//     const newQuery = e.target.value;
//     setQuery(newQuery);

//     if (newQuery === '') {
//       setIsPopoverOpen(false);  // Close popover if input is empty
//     } else {
//       setIsPopoverOpen(true);
//     }

//     // Filter suggestions based on query
//     setFilteredSuggestions(
//       suggestions.filter(suggestion =>
//         suggestion.toLowerCase().includes(newQuery.toLowerCase())
//       )
//     );
//   };

//   // Handle selecting a suggestion
//   const handleSuggestionSelect = (suggestion) => {
//     setQuery(suggestion);  // Set the selected suggestion as the query
//     setIsPopoverOpen(false);  // Close the popover
//   };

//   // Handle clicking outside to close the popover
//   const handleClickOutside = (e) => {
//     if (!e.target.closest('.search-bar-container')) {
//       setIsPopoverOpen(false);  // Close the popover when clicking outside
//     }
//   };

//   // Attach event listener to detect clicks outside
//   React.useEffect(() => {
//     document.addEventListener('click', handleClickOutside);
//     return () => {
//       document.removeEventListener('click', handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="relative search-bar-container">
//       <Input
//         value={query}
//         onChange={handleChange}
//         placeholder="Search..."
//         className="border p-2 rounded-l-md w-full"
//       />
//       <Button
//         onClick={() => console.log('Searching for:', query)}
//         className="bg-blue-500 text-white p-2 rounded-r-md"
//       >
//         Search
//       </Button>

//       {/* Popover for suggestions */}
//       {isPopoverOpen && query && (
//         <div className="absolute left-0 right-0 top-full mt-2 bg-white border rounded-lg shadow-md max-h-48 overflow-y-auto z-10">
//           {filteredSuggestions.length > 0 ? (
//             filteredSuggestions.map((suggestion, index) => (
//               <div
//                 key={index}
//                 className="p-2 hover:bg-gray-200 cursor-pointer"
//                 onClick={() => handleSuggestionSelect(suggestion)}
//               >
//                 {suggestion}
//               </div>
//             ))
//           ) : (
//             <div className="p-2 text-gray-500">No suggestions</div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchBar;
