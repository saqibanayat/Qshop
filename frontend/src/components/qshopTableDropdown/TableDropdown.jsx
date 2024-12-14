import React, { useState, useEffect, useRef } from 'react';
import './tabledropdown.css';
import { FaCaretDown } from "react-icons/fa";

const TableDropdown = ({ items, onSelect, listKeyName ,selectionName,...props}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(` ${selectionName? selectionName:''}`);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (item) => {
    setSelectedItem(item[listKeyName] ? item[listKeyName] : 'Select an option'); // Dynamically set the selected item's display name
    setIsOpen(false);            // Close the dropdown
    onSelect(item);              // Send the selected item back to the parent component
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className='custom-dropdown-container ' type="button" >
      <div className='flex justify-between align-center select-item  p-3 rounded-lg' {...props} onClick={toggleDropdown}>
        <div className='textdropdown'>{selectedItem}</div>
        <div><FaCaretDown className='ms-1 mt-1' /></div>
      </div>
      {isOpen && (
        <div className='dropdowndummy'>
          {Array.isArray(items) ? (
            items.length > 0 ? (
              items.map((item, index) => (
                <div key={index} className='dropdown-item' onClick={() => handleSelect(item)}>
                  {item[listKeyName] ? item[listKeyName] : 'No Data'} 
                </div>
              ))
            ) : (
              <p>No Data</p>
            )
          ) : (
            <p>No List Found</p>
          )}
        </div>
      )}
    </div>
    
  );
};

export default TableDropdown;
