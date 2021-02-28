import React, { useEffect, useState } from 'react'

export function Template() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log(count);
  }, [count])
  return (
    <div>
      <h2>counter</h2>
      <button onClick={() => setCount(count + 1)}>add</button>
      <span>{count}</span>
      <button onClick={() => setCount(count - 1)}>decrease</button>
    </div>
  )
}
