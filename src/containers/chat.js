import React, { useEffect, useState,useRef } from 'react';
import chat from "../assests/chat3.gif"
import chat2 from "../assests/chatIcon.jpg"
import axios from 'axios';
import chatIcon from "../assests/send2.png"
import me from "../assests/me.jpeg";
import loading from "../assests/loading.gif"
import ScrollableFeed from 'react-scrollable-feed'


function Chat() {
    const [toggle,handleTog] = useState(false);
    const [res,setRes] = useState([{"res":"Hello! Welcome to my portfolio. I'm a personal chatbot here to guide you through my work and experiences. Feel free to ask me anything or explore the various projects I've undertaken. Let's embark on this journey together!"}]);
    const [queryString,setQueryString] = useState("")

  const divRef = useRef(null);

  const handleNewMessage = () => {
    var bodyFormData = new FormData();
    
    if(queryString?.trim()?.length == 0){
      console.log("Query String cannot be empty")
    }
    else{
      var temp = {"q":"","res":""}
      setRes([...res,{"q":queryString}])
      bodyFormData.append('message', queryString);
      axios({
        method: "post",
        url: "https://mebott.click/getMessage",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
          temp.q = queryString
          temp.res = response?.data
          if(temp.res == ""){
            temp.res = "I am still in training, will learn this as soon as possible :)"
          }
          setRes([...res,temp])
          console.log(res);
        })
        .catch(function (response) {
          console.log(response);
        });
      // (async () => {
      //   const rawResponse = await fetch('http://ec2-54-244-2-106.us-west-2.compute.amazonaws.com:8000/getMessage', {
      //     method: 'POST',
      //     data: bodyFormData
      //   });
      //   const content = rawResponse;
      //   console.log(content);
      // })();
        setQueryString("")
      }
  };


    return (
      <>
      <div className='chat-Icon' onClick={()=>handleTog(!toggle)}>
        <img src = {chat} />
      </div>
     <div className={toggle?'chat-window':'chat-window-nodisplay'}>
      <div className='chat-header'>
        <img src = {chat2} className='profile-pic'/>
        <div className='profile-details'>Personalised Chat Bot</div>
      </div>
      <div className='inner-container'>
      <ScrollableFeed>
      {res.map(val=>(
        <>
      {val?.q?(
        <div className='queries'>
          {val?.q}
        </div>
      ):<></>}
      {val?.res?(
        <div className='responses'>
        {val?.res}
    </div>
      ):<>
      <img src={loading} className='responses-loading'></img>
      </>}
        </>
      ))}
      </ScrollableFeed>
      </div>
      <div className='chat-footer'>
          <input type='text' name='chat' value={queryString} onChange={(e)=>{setQueryString(e?.target?.value)}} 
          onKeyDown={(event)=> event.key === "Enter"?handleNewMessage():''}
          />
          <div className='send-btn'  onClick={()=>handleNewMessage()} >
          <img src={chatIcon} height="25"/>
          </div>
      </div>
     </div>
     </>
    );
}

export default Chat;