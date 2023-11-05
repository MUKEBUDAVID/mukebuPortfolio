import React,{useState,useEffect} from "react";
import TrackVisibility from "react-on-screen";
import 'animate.css';


function Welcom() {

const [mots,setmots]=useState("");

  const text=["web Developper","Mobile Developper","Desktop Developper"];
  let intervalId ="";
  let oneInterval=""

  const promesse=new Promise((resolve,reject)=>{

   setTimeout(()=>{
    resolve("uppy")
   },8000)

  })

  const typewritter=(word,index)=>{
    if(index < word[0].length ){
      intervalId =setTimeout(()=>{
    setmots((mots)=> mots+word[0][index])
    typewritter(word,index+1)
       },300)

    }

    if(index >= word[0].length && index<32 ){
      promesse.then(()=>{
      oneInterval=setTimeout(()=>{
          setmots((mots)=> mots.substring(0, mots.length - 1))
          typewritter(word,index+1)
         console.log(index);
        },300)

            })
           }

   if(index >= 31){
    setTimeout(()=>{
      // setwords((words)=> words.substring(0, words.length - 1))
      typewritter(word,index+1)
      console.log("oui");

    },300)

   }

   }

  useEffect(() => {

   typewritter(text,0)

    return () => {
      clearTimeout(intervalId);

    setmots("")

    };
  },[]);





  return (
    <div className="welcom">
     
        <div className="presentation"  >
          <div className="portfolio">Welcome to my Portfolio</div>

          <h1 aria-label="Hi! I'm David Mukebu" className="name">
            Hi! I'm David Mukebu
            <span className="data-change"> {mots}</span>
          </h1>

          <p className="paragraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>

          <a className="Connect" href="#connect">
            <p>Let's Connect</p>
            <img src="/arrow.svg" alt="fleche" />
          </a>
        </div>
      


    
        <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src="/header-img.svg" alt="Header Img" className="header-img"/>
                </div>}
            </TrackVisibility>
      </div>
  )
}

export default Welcom