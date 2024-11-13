import { useState } from 'react';

export function InfoTextCards({ content }) {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  return (
    <div className="h-full flex flex-col" id="tabs">
      <div className="flex gap-2">
        {content.map((tab, index) => (
          <button
            key={tab.label}
            className={`bg-primary-light-200 rounded-t-xl w-1/3 p-3 dark:bg-primary-dark-500 dark:bg-opacity-75 dark:text-white ${
              activeContentIndex === index ? 'active' : 'mb-2'
            }`}
            onClick={() => setActiveContentIndex(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div
        id="tab-content"
        className="bg-primary-light-200 text-justify rounded-b-lg p-6 h-full dark:bg-primary-dark-500 dark:bg-opacity-75 dark:text-white"
      >
        <div>{content[activeContentIndex].body}</div>
      </div>
      {/* <Tables /> */}
    </div>
  );
}
