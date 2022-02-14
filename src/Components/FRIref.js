import React from 'react'

// function FRIref() {
//   return (
//     <div>

//         <input type="text"/>
//     </div>
//   )
// }

const FRIref = React.forwardRef( (props, ref) => {

    return (
            <div>
        
                <input type="text" ref={ref}/>
            </div>
          )

})

export default FRIref