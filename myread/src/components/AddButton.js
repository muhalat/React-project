// import { useState } from "react"

const AddButton = () => { 
    // const [author, setAuthor] = useState('mario')
   
    const testButton = () =>{
         const good = 'works!';
         console.log({good})
    }
    return ( 
        <div className="Search">
            <button onClick = {testButton}>
            {/* <select
                value={author}
                onChange = {((e)=>setAuthor(e.target.value))}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                    </select> */}
                    click me!
            </button>
        </div>
     );
}
 
export default AddButton;