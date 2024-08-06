import React, { useState } from "react";



const App = () =>{
   {/* PAGES */}

   const [lib1, setLib1] = useState(true)
   const [lib2, setLib2] = useState(false)
   const [lib3, setLib3] = useState(false)

   const onClickCounter = () => {
      setLib1((true))
      setLib2((false))
      setLib3((false))
      setBar((false))
      setModalWindow((false))
   }
   const onClickModelWindow = () => {
      setLib1((false))
      setLib2((true))
      setLib3((false))
   }
   const onClickMoreproject = () => {
      setLib1((false))
      setLib2((false))
      setLib3((true))
      setBar((false))
      setModalWindow((false))
   }
   

   {/* PAGE COUNTER */}
   
   const [count, setCount] = useState(0)
   const onClickMinus = () => {
      setCount((count - 1))
   }
   const onClickPlus = () => {
      setCount((count + 1))
   }

   {/* PAGE MODEL_WINDOW */}

   const [bar, setBar] = useState(false)

   const [ModalWindow, setModalWindow] = useState(false)

   function toggleBodyScroll(lock) {
      document.body.style.overflow = lock ? 'hidden' : '';
   }

   const onClickModalWindow = () => {
      setModalWindow((ModalWindow) => ModalWindow = !ModalWindow)
      setBar((bar) => bar = false)
      toggleBodyScroll(true)

   }
   const onClickBar = () => {
      setBar((bar) => bar = !bar)
      setModalWindow((ModalWindow) => ModalWindow = false)
   }
   const closeModelWindow = () => {
      setModalWindow((ModalWindow) => ModalWindow = !ModalWindow)
      toggleBodyScroll(false)
   }
   const onClickhiddenModalWindow = () => {
      setModalWindow((ModalWindow) => ModalWindow = !ModalWindow)
      toggleBodyScroll(false)
   }

   return(

      <div>
         <div className="containerHeader">
               <button className="lib1" id="libr" onClick={onClickCounter}>Counter</button>
               <button className="lib2" id="libr" onClick={onClickModelWindow}>Model Window</button>
               <button className="lib3" id="libr" onClick={onClickMoreproject}>More project</button>
            </div>

         {/* PAGE COUNTER */}
         {lib1 && (
            
         <div>            
            <div className="counterApp">
               <div className="background_Counter">
                  <h1 className="count">{count}</h1>
                  <h1 className="textCount">Счетчик</h1>
               </div>
            </div>           

            <div className="signs">
            <div className="minus" onClick={onClickMinus}>-1</div>
            <div className="plus"  onClick={onClickPlus}>+1</div>
            </div>
         </div>
         )}

         {lib2 && (
         <div> {/* PAGE MODEL_WINDOW */}
            <div className="buttons">
               <button id="btn" className="ModalWindow" onClick={onClickModalWindow}>Modal Window</button>
               <button id="btn" className="Bar" onClick={onClickBar}>Hidden/Open Bar</button>
            </div>
            {bar && (
               <div className="barContainer">
                  <div className="barTab">
                     <h1>Hello World</h1>
                  </div>
               </div>
            )}

            {ModalWindow && (
               <div className="ModalWindowContainer" id="ModWinCon">
                  <div className="podlojka" onClick={onClickhiddenModalWindow}></div>

                  <div className="ModalWindowTab">


                     <div className="ModalWindowCloseCont">
                        <div className="ModalWindowClose" onClick={closeModelWindow}>x</div>
                     </div>
                     
                     <div className="ModalWindowText">
                        <h1 id="hLib">Модальное окно</h1>
                        <h1 id="hLib">С эффектами</h1>
                     </div> 
                  
                  </div>
               </div>
            )}
         </div>
         )}

         
      </div>

      
   )



}


export default App