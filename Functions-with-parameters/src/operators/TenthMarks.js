import React, { useRef } from 'react'

function TenthMarks() {

let firstNameInputRef = useRef();
let lastNameInputRef = useRef ();
let engInputRef = useRef ();
let telInputRef = useRef ();
let hinInputRef = useRef ();
let matInputRef = useRef ();
let sciInputRef = useRef ();
let socInputRef = useRef ();
let resultLabelRef = useRef ();

let calculateBtnRef = useRef ();

let firstNameSpanResultRef = useRef ();
let lastNameSpanResultRef = useRef ();
let engSpanResultRef = useRef ();
let telSpanResultRef = useRef ();
let hinSpanResultRef = useRef ();
let matSpanResultRef = useRef ();
let sciSpanResultRef = useRef ();
let socSpanResultRef = useRef ();

let result;

let calculateResult = ()=>{
    let firstName = firstNameInputRef.current.value;
                let lastName = lastNameInputRef.current.value;
                let engMarks = Number(engInputRef.current.value);
                let telMarks = Number(telInputRef.current.value);
                let hinMarks = Number(hinInputRef.current.value);
                let matMarks = Number(matInputRef.current.value);
                let sciMarks = Number(sciInputRef.current.value);
                let socMarks = Number(socInputRef.current.value);

            let totalMarks = engMarks+telMarks+hinMarks+matMarks+sciMarks+socMarks;

            // if(engMarks <35 || telMarks <35 || hinMarks <35 || 
            //     matMarks <35 || sciMarks <35 || socMarks <35
            // ){result ="Failed"}else{result="Passed"}
               if(engMarks>=35 && telMarks>=35 && hinMarks>=35 && 
                matMarks>=35 && sciMarks>=35 && socMarks>=35
            ){result ="Passed"

            }
            else{result="Failed"

            }

            resultLabelRef.current.innerHTML = `${firstName} ${lastName} 
            ${result} In Tenth And Got Total Of ${totalMarks} Marks`;    

           
}
    let inputOnFocus = (inputRef)=>{inputRef.current.style.backgroundColor ="#5DB996"
    }
    let inputOnBlur = (inputRef)=>{inputRef.current.style.backgroundColor =""
    } 
    let inputOnChange = (inputRef,spanRef)=>{
        let marks = inputRef.current.value;
        if(marks>=0 && marks<=100){
            if(marks >=35){spanRef.current.innerHTML ="📗Pass";}
            else{spanRef.current.innerHTML ="📕Fail"}
            calculateBtnRef.current.style.display ="inline-block"
        }else{
            spanRef.current.innerHTML ="⚠️Invalid";
            calculateBtnRef.current.style.display ="none"
            
        }} 

  return (
    
      <div>
      <form>
      <fieldset> <legend className='legendTitle'>Student Score Summary</legend>
                
            <div>
            <label>First Name</label>
            <input type='text' placeholder='First Name' ref={firstNameInputRef}
            onFocus={()=>{inputOnFocus(firstNameInputRef);}}
            onBlur={()=>{inputOnBlur(firstNameInputRef);}}
            ></input>
            <span ref={firstNameSpanResultRef}></span>
        </div>
        <div>
            <label>Last Name</label>
            <input type='text' placeholder='Last Name' ref={lastNameInputRef}
            onFocus={()=>{inputOnFocus(lastNameInputRef);}}
            onBlur={()=>{inputOnBlur(lastNameInputRef);}}
            ></input>
            <span ref={lastNameSpanResultRef}></span>
        </div>
        <div>
            <label>English</label>
            <input type='number' placeholder='Enter Marks' ref={engInputRef}
            onFocus={()=>{inputOnFocus(engInputRef);}}
            onBlur={()=>{inputOnBlur(engInputRef);}}
            onChange={()=>{inputOnChange(engInputRef,engSpanResultRef);}}
            ></input>
            <span ref={engSpanResultRef}></span>
        </div>
        <div>
            <label>Telugu</label>
            <input type='number' placeholder='Enter Marks' ref={telInputRef} 
             onFocus={()=>{inputOnFocus(telInputRef);}}
             onBlur={()=>{inputOnBlur(telInputRef);}}
             onChange={()=>{inputOnChange(telInputRef,telSpanResultRef);}}

            ></input>
            <span ref={telSpanResultRef}></span>
        </div>
        <div>
            <label>Hindi</label>
            <input type='number' placeholder='Enter Marks' ref={hinInputRef}
             onFocus={()=>{inputOnFocus(hinInputRef);}}
             onBlur={()=>{inputOnBlur(hinInputRef);}}
             onChange={()=>{inputOnChange(hinInputRef,hinSpanResultRef);}}
            ></input>
            <span ref={hinSpanResultRef}
            
            ></span>
        </div>
        <div>
            <label>Maths</label>
            <input type='number' placeholder='Enter Marks' ref={matInputRef}
             onFocus={()=>{inputOnFocus(matInputRef);}}
             onBlur={()=>{inputOnBlur(matInputRef);}}
             onChange={()=>{inputOnChange(matInputRef,matSpanResultRef);}}
            ></input>
            <span ref={matSpanResultRef}></span>
        </div>
        <div>
            <label>Science</label>
            <input type='number' placeholder='Enter Marks' ref={sciInputRef}
             onFocus={()=>{inputOnFocus(sciInputRef);}}
             onBlur={()=>{inputOnBlur(sciInputRef);}}
             onChange={()=>{inputOnChange(sciInputRef,sciSpanResultRef);}}
            ></input>
            <span ref={sciSpanResultRef}></span>
        </div>
        <div>
            <label>Social</label>
            <input type='number' placeholder='Enter Marks' ref={socInputRef}
             onFocus={()=>{inputOnFocus(socInputRef);}}
             onBlur={()=>{inputOnBlur(socInputRef);}}
             onChange={()=>{inputOnChange(socInputRef,socSpanResultRef);}}
            ></input>
            <span ref={socSpanResultRef}></span>
        </div>
        <div>
            <button ref={calculateBtnRef} type='button' className='myButton' onClick={()=>{
                calculateResult();
                 }}>Calculate</button>
        </div>
        <label className='resultLabel' ref={resultLabelRef}>Result Here</label>
        </fieldset>
          </form>
            </div> 
  )
}
export default TenthMarks
