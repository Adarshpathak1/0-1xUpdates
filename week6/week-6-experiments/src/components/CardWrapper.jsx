import { Children } from "react"

const CardWrapper = () => {
    return (
        <div style={{
          border: "2px solid white",
          borderRadius: "10px",
          padding:"10px"
         }}>
          <p>Hello Card</p>
          {Children}
        </div>
      )
}

export default CardWrapper