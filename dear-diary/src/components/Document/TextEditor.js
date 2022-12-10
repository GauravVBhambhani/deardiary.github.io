import React, { useEffect, useCallback, useState } from 'react'
import Quill from 'quill';
import "quill/dist/quill.snow.css";         //STYLESHEET THAT WE ARE GOING TO USE      
import { io } from "socket.io-client"
//for documentid we have to use something from react-router
import { useParams } from 'react-router-dom'



const SAVE_INTERVAL_MS = 5000;
/*Give style to out toolbar*/
const TOOLBAR_OPTIONS = [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["bold", "italic", "underline"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    [{ align: [] }],
    ["image", "blockquote", "code-block"],
    ["clean"],
]

export default function TextEditor() {
    const { id: documentId } = useParams();
    //to access our socket from anywhere
    const [socket, setSocket] = useState();
    const [quill, setQuill] = useState();

    //connect once
    useEffect(() => {
        const s = io("http://localhost:3001")
        setSocket(s);
        console.log("connected to socket");

        return () => {
            s.disconnect()
        }
    }, [])

    //for detecting changes when quill changes
    useEffect(() => {
        //to make sure we have a socket and a quill
        if (socket == null || quill == null) return

        const handler = (delta, oldDelta, source) => {
            //source is gonna detect if user is gonna make changes or library has made changes
            //to test if user has made the changes
            if (source !== 'user') return
            //send the changes to user
            //emit changes from client to a server
            socket.emit("send-changes", delta);
            //delta is small subset of what is changing in document and then we are gonna send it to the server
        }
        quill.on('text-change', handler);

        //we also need to pass the function we want to remove
        return () => {
            quill.off('text-change', handler);
        }
    }, [socket, quill])

    //handle to receive that event where we are telling it to broadcast that changes have been made
    useEffect(() => {
        if (socket == null || quill == null) return

        const handler = (delta, oldDelta, source) => {
            quill.updateContents(delta);     //make changes 
        }
        socket.on('receive-changes', handler);

        return () => {
            socket.off('receive-changes', handler);
        }
    }, [socket, quill])

    //useeffect for save data and create new one
    useEffect(() => {
        if (socket == null || quill == null) return;

        const interval = setInterval(() => {
            socket.emit("save-document", quill.getContents());
        }, SAVE_INTERVAL_MS)

        return () => {
            clearInterval(interval);
        }
    }, [socket, quill])

    //when we are opening a different document in new tab, then when we are making changes in any of the document, the changes are being made in all of them irrespective of document id
    //to avoid this situation we are creating a new useEffect
    //everytime our socket or quill or  documentid changes, we will call this useEffect 
    useEffect(() => {
        if (socket == null || quill == null) return;

        //make sure to listen to that event
        socket.once("load-document", document => {
            quill.setContents(document);
            quill.enable();
        })

        //send this documentid to server so we can attach ourselves to the room for that document
        //and if the document is saved, it is gonna send us to that document back 
        socket.emit('get-document', documentId);
    }, [socket, quill, documentId])

    //to avoid re render
    //re-render call
    const wrapperRef = useCallback((wrapper) => {
        if (wrapper == null) return;

        //we want to set it to empty string everytime we run it
        wrapper.innerHTML = "";
        const editor = document.createElement('div');
        wrapper.append(editor);      //saving the current state in this wrapperref
        debugger;
        const q = new Quill(editor,
            {
                theme: "snow",
                modules: { toolbar: TOOLBAR_OPTIONS},
            });
        setQuill(q);
        //if I write something here and save it, it is going to re render the app - i.e will display the text editor again
        //to avoid this - to clean up the previous toolbar and text editor, we have to wrap it up in one container
        //sfxchvdgjchb
        //inside useCallback we odn't have these return style cleanup
        // return () => {
        //     wrapperRef.innerHTML = "";
        // }
        q.disable();
        q.setText("Loading...");
        setQuill(q);
        //to disable the text cursor when the document is loading
    }, [])

    // toast(" Let’s toast to this toast today! ")
    // const showToast = () => {
    //     toast(" Let’s toast to this toast today! ");
    //   };
    return (
        <div className="container" ref={wrapperRef}>
            {/* Text Editor
            <button onClick={showToast}>Pop that toast!</button>
            <ToastContainer/> */}
        </div>
    )
}