import React from 'react'
import { useSnapshot } from 'valtio'

import state from '../store';

const FilterTab = ({ filterTab, isFilterTab, isActiveTab, handleClick }) => {
  const snap = useSnapshot(state);

  const activeStyles = isFilterTab && isActiveTab 
    ? { backgroundColor: snap.color, opacity: 0.5 }
    : { backgroundColor: "transparent", opacity: 1 }

  return (
    <div
      key={filterTab.name}
      className={`filterTab-btn ${isFilterTab ? 'rounded-full glassmorphism' : 'rounded-4'}`}
      onClick={handleClick}
      style={activeStyles}
    >
      <img 
        src={filterTab.icon}
        alt={filterTab.name}
        className={`${isFilterTab ? 'w-2/3 h-2/3' : 'w-11/12 h-11/12 object-contain'}`}
      />
    </div>
  )
}

export default FilterTab