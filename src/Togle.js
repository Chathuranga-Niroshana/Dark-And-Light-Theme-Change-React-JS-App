import { useState } from "react";
import "./style.css"


function ToggleButtonColor(){

    const[backgroundColor,setBackgroundColor]=useState("white");
    const[textColor,setTextColor]=useState("#1b1b1b");
    const[buttonStyle, setButtonStyle]=useState("white");


    function handleClick(){
        setBackgroundColor(backgroundColor==="white" ? "#1b1b1b":"white");
        setTextColor(textColor === "#1b1b1b" ? "#ffa31a":"#1b1b1b");
        setButtonStyle(backgroundColor==="white"? "#1b1b1b":"white")
    }

    return(
        <>
        <section style={{backgroundColor,color:textColor}}>
            <button onClick={handleClick} style={{buttonStyle,color:textColor,border:`2px solid ${textColor}`}}>{backgroundColor=== "#1b1b1b" ? "Dark Mode":"Light Mode"}</button>

            <section className="content">
                <h1>DARK AND LIGHT THEME</h1>
            </section>
            <section className="content">
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem vitae
    adipisci consequatur nemo voluptatibus eaque perferendis officiis dolores
    minima odit commodi dolorum dolorem vel, facere quos nihil fuga! Suscipit,
    aut.
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia possimus labore atque illo esse repellendus itaque tempora sequi quia nam obcaecati odio corrupti, repudiandae ratione optio eaque modi? Molestias, voluptate.
    Alias eaque repellat illum, laboriosam odio unde quod possimus, doloremque soluta vel iure quidem! Aspernatur harum mollitia dolore perferendis animi est illo ab. Voluptates, facere quas. Sapiente commodi asperiores eveniet.
    Possimus ab fugiat minima quibusdam molestias iure vel, quo quos nisi eius omnis minus porro quis odit tempore excepturi eligendi, laudantium sint, facere necessitatibus sunt qui numquam quidem veritatis! Delectus.
    
  </p>
</section>;

        </section>
        
        
        </>
    )
}
export default ToggleButtonColor;