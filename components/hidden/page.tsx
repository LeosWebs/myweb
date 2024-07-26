import { useState } from 'react';

function OurComponent() {
  const [showTextField, setShowTextField] = useState(false);

  return (
    <div>
      <button onClick={() => setShowTextField(!showTextField)}>Show Text Field</button>
      {showTextField && (
        <input type="text" placeholder="Enter text" />
      )}
    </div>
  );
}
export default OurComponent;