import React, { useEffect, useState } from "react";
import Baniere from "../molecule/Baniere";
import  Projets from "../molecule/Projets";
import Contact from "../atom/Contact";

function Main() {
  // const [mots,setmots]=useState("");

  // const text=["web Developper","Mobile Developper","Desktop Developper"];
  // let intervalId ="";
  // let oneInterval=""

  // const promesse=new Promise((resolve,reject)=>{

  //  setTimeout(()=>{
  //   resolve("uppy")
  //  },8000)

  // })

  // const typewritter=(word,index)=>{
  //   if(index < word[0].length ){
  //     intervalId =setTimeout(()=>{
  //   setmots((mots)=> mots+word[0][index])
  //   typewritter(word,index+1)
  //      },300)

  //   }

  //   if(index >= word[0].length && index<32 ){
  //     promesse.then(()=>{
  //     oneInterval=setTimeout(()=>{
  //         setmots((mots)=> mots.substring(0, mots.length - 1))
  //         typewritter(word,index+1)
  //        console.log(index);
  //       },300)

  //           })
  //          }

  //  if(index >= 31){
  //   setTimeout(()=>{
  //     // setwords((words)=> words.substring(0, words.length - 1))
  //     typewritter(word,index+1)
  //     console.log("oui");

  //   },300)

  //  }

  //  }

  // useEffect(() => {

  //  typewritter(text,0)

  //   return () => {
  //     clearTimeout(intervalId);

  //   setmots("")

  //   };
  // },[]);

  return (
    <main>
      <Baniere />
      <Projets/>
      <Contact/>

    </main>
  );
}

export default Main;
