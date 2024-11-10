import { useState } from 'react';

export function InfoTextCards({ content }) {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  return (
    <div className="px-16 mt-10" id="tabs">
      <div className="flex gap-2">
        {content.map((tab, index) => (
          <button
            key={tab.label}
            className={`bg-primary-light-200 rounded-t-xl w-1/3 p-3 ${
              activeContentIndex === index ? 'active' : 'mb-2'
            }`}
            onClick={() => setActiveContentIndex(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div
        className="bg-primary-light-200 text-justify rounded-b-lg p-6"
        id="tab-content"
      >
        <div>{content[activeContentIndex].body}</div>
      </div>
      {/* <Tables /> */}
    </div>
  );
}
