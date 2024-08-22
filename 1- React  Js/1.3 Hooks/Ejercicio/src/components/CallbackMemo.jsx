import React, { useCallback, useMemo, useState } from 'react'

const CallbackMemo = () => {
  const [contador, setContador] = useState(0);

  const triplicar = () => {
    console.log('Ejecuto triplicar')
    return contador * 3;
  }

  const callback = useCallback(triplicar, [contador])
  const memo = useMemo(triplicar, []);

  console.log("Callback retorna: " + callback())
  console.log("Memo retorna: " + memo)

  return (
    <div>
      <button onClick={() => setContador(contador+1)}>Aumentar +1</button>
      <h1>{contador}</h1>
    </div>
  )
}

export default CallbackMemo