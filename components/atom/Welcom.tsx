import React,{useState,useEffect} from "react";
import TrackVisibility from "react-on-screen";
import 'animate.css';


function Welcom() {

// const [mots,setmots]=useState("");

//   const text=["web Developper","Mobile Developper","Desktop Developper"];
//   let intervalId ="";
//   let oneInterval=""

//   const promesse=new Promise((resolve,reject)=>{

//    setTimeout(()=>{
//     resolve("uppy")
//    },8000)

//   })

//   const typewritter=(word,index)=>{
//     if(index < word[0].length ){
//       intervalId =setTimeout(()=>{
//     setmots((mots)=> mots+word[0][index])
//     typewritter(word,index+1)
//        },300)

//     }

//     if(index >= word[0].length && index<32 ){
//       promesse.then(()=>{
//       oneInterval=setTimeout(()=>{
//           setmots((mots)=> mots.substring(0, mots.length - 1))
//           typewritter(word,index+1)
//          console.log(index);
//         },300)

//             })
//            }

//    if(index >= 31){
//     setTimeout(()=>{
//       // setwords((words)=> words.substring(0, words.length - 1))
//       typewritter(word,index+1)
//       console.log("oui");

//     },300)

//    }

//    }

//   useEffect(() => {

//    typewritter(text,0)

//     return () => {
//       clearTimeout(intervalId);

//     setmots("")

//     };
//   },[]);

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["web Developper","Mobile Developper","Desktop Developper"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }





  return (
    <div className="welcom">
     
        <div className="presentation"  >
          <div className="portfolio">Welcome to my Portfolio</div>

          <h1 aria-label="Hi! I'm David Mukebu" className="name">
            Hi! I'm David Mukebu
            <span className="data-change"> {text}</span>
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