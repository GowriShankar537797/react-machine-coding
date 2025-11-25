import React, { useState } from 'react';

const Star: React.FC<{filled:boolean; onClick:()=>void; onEnter:()=>void; onLeave:()=>void}> = ({filled, onClick, onEnter, onLeave}) => (
  <span onClick={onClick} onMouseEnter={onEnter} onMouseLeave={onLeave} className="cursor-pointer text-[22px]">
    {filled ? '★' : '☆'}
  </span>
);

const StarRatingPage: React.FC = () => {
  const [value, setValue] = useState(0);
  const [hover, setHover] = useState(0);
  const max = 5;
  return (
    <div>
      <h2>Star Rating</h2>
      <div>
        {Array.from({length:max}).map((_,i)=>(
          <Star
            key={i}
            filled={ (hover || value) > i }
            onClick={()=>setValue(i+1)}
            onEnter={()=>setHover(i+1)}
            onLeave={()=>setHover(0)}
          />
        ))}
      </div>
      <div className="small">Selected: {value} / {max}</div>
    </div>
  );
};

export default StarRatingPage;
