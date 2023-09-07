import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline" onClick={() => setCount(count + 1)}>
        Hello world!   {count}
      </h1>
    </>
  )
}

export default App
