
import React, { useEffect, useState } from "react";

function Main() {
const [words,setwords]=useState("");

const text1=" web Developper";
const text2=" Mobile Developper";
const text3=" Desktop Developper";
let intervalId ="";

const typewritter=(word,index)=>{
  if(index < word.length ){
    intervalId =setTimeout(()=>{
  setwords((words)=> words+word[index])
  typewritter(word,index+1)
     },300)

  }

  if(index >= word.length ){

    
      setTimeout(()=>{
        setwords((words)=> words.substring(0, words.length - 1))
        typewritter(word,index+1)
           },300)

   
    
  
     
 }
  
  


 }

useEffect(() => {

 typewritter(text1,0)


  return () => {
     clearTimeout(intervalId);
  setwords("")

  };
},[]);







  return (
    <main>

      <section className="bannier">

        <div className="welcom">

          <div className="presentation">

            <div className="portfolio">Welcome to my Portfolio</div>

            <h1 aria-label="Hi! I'm David Mukebu" className="name">Hi! I'm David Mukebu 
             <span className="data-change">{words}</span>
              </h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              reiciendis ad quae harum deserunt iusto necessitatibus autem minus
              adipisci quo. Molestias error nostrum obcaecati alias distinctio
              itaque reprehenderit soluta a!
            </p>


            <div>
              <p>Let's Connect</p>
       <img src="/arrow.svg" alt="fleche" />
      
            </div>

          </div>

          <img src="/header-img.svg" alt="svg" />
        </div>
      </section>

    </main>
  );
}

export default Main;
