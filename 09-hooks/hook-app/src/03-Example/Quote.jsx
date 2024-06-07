import { useLayoutEffect, useRef, useState } from "react"

export const Quote = ({character,image}) => {

  const pRef = useRef();

  const [boxSize,setBoxSize] = useState({ width: 0, height:0});

  useLayoutEffect(() => {
      console.log(pRef.current.getBoundingClientRect());
      const { height, width } = pRef.current.getBoundingClientRect();
      setBoxSize({height,width});
  }, [image])

  return (
    <>
      <div className="text-right" style={{display: 'flex'}}>
          <h2 className="mb-1">{ character }</h2>
          <img ref={pRef} src={ image } className=""/>
      </div>
      <code>{JSON.stringify(boxSize)}</code>
    </>
  )
}
