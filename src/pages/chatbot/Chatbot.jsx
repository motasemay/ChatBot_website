import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { marked } from 'marked';
import ourLogo from '../../assets/ourLogo.jpg';
import chatStyle from './Chatbot.module.css';

function Chatbot() {

    const [messages, setMessages] = useState([]);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [processedFiles, setProcessedFiles] = useState([]);
    const [fileListVisible, setFileListVisible] = useState(false);
    const [processedFilesSectionVisible, setProcessedFilesSectionVisible] = useState(false);
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const fileInputRef = useRef(null);
    const messageInputRef = useRef(null);
    const chatMessagesRef = useRef(null);
    const fileListRef = useRef(null);
    const fileCount = useRef(null);
    const sidebarRef = useRef(null);

    useEffect(() => {
        if (chatMessagesRef.current) {
            chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
        }
    }, [messages]);


    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            handleSendMessage();
        }
    };
    const handleSendMessage = async () => {
        const messageText = messageInputRef.current.value.trim();
        if (!messageText) return;

        setIsLoading(true);
        addMessage(messageText, 'user');
        messageInputRef.current.value = '';

        try {

            const response = await axios.post('/chat', { message: messageText });
            if (response.data.bot_message) {
                const formattedResponse = formatChatbotResponse(response.data.bot_message);
                addMessage(formattedResponse, 'bot');
            } else if (response.data.error) {
                addMessage("Error: " + response.data.error, 'error');
            }
        } catch (error) {
            addMessage("Error: " + error.message, 'error');
        } finally {
            setIsLoading(false);

            setTimeout(() => {
                if (messageInputRef.current) {
                    messageInputRef.current.focus();
                }
            }, 0);

        }

    };

    const handleFileInputChange = (event) => {
        const files = Array.from(event.target.files);
        const totalFiles = selectedFiles.length + files.length;

        if (totalFiles > 10) {
            alert('You cannot upload more than 10 files.');
            return;
        }

        setSelectedFiles([...selectedFiles, ...files]);
    };

    const handleDeleteFile = (index) => {
        const updatedFiles = [...selectedFiles];
        updatedFiles.splice(index, 1);
        setSelectedFiles(updatedFiles);
    };

    const handleProcessFiles = async () => {
        if (selectedFiles.length === 0) {
            alert("Please select at least one file to process.");
            return;
        }

        setIsLoading(true);

        const formData = new FormData();
        selectedFiles.forEach(file => formData.append('files[]', file));

        try {
            const response = await axios.post('/process-file', formData);
            console.log('Process result:', response.data);
            alert(response.data.message || 'Files processed successfully!');

            setProcessedFiles([...processedFiles, ...selectedFiles]);
            setProcessedFilesSectionVisible(true);

            try {
                const reloadResponse = await axios.post('/reload-index');
                if (reloadResponse.data.success) {
                    console.log('Index reloaded successfully!');
                } else {
                    console.error('Index reload failed:', reloadResponse.data.error);
                    alert('Index reload failed. Please try again.');
                }
            } catch (reloadError) {
                console.error('Error reloading index:', reloadError);
                alert('Error reloading index.');

            }

        } catch (error) {
            console.error('Error processing files:', error);
            alert('Error processing the files.');
        } finally {
            setSelectedFiles([]);
            setIsLoading(false);
            setProcessedFiles([...processedFiles, ...selectedFiles]);
            setProcessedFilesSectionVisible(true);
        }
    };

    const handleDeleteProcessedFile = (index) => {
        const updatedFiles = [...processedFiles];
        updatedFiles.splice(index, 1);
        setProcessedFiles(updatedFiles);

        // If no processed files left, hide the section
        if (updatedFiles.length === 0) {
            setProcessedFilesSectionVisible(false);
        }
    };

    const handleSuggestionClick = (message) => {
        messageInputRef.current.value = message;
        handleSendMessage();
    };

    const addMessage = (message, type) => {
        // setMessages([...messages, { text: message, type }]);
        setMessages(prevMessages => [...prevMessages, { text: message, type }]);
    };

    const formatChatbotResponse = (response) => {
        const formattedResponse = marked.parse(response);
        const isArabic = /[\u0600-\u06FF]/.test(response);
        return (
            <div dir={isArabic ? "rtl" : "ltr"} dangerouslySetInnerHTML={{ __html: formattedResponse }} />
        );
    };

    const toggleFileList = () => {
        setFileListVisible(!fileListVisible);

        if (fileListVisible) { // Closing the file list
            fileListRef.current.classList.remove(`${chatStyle.visible}`);
            fileCount.current.style.borderRadius = '25px';
            setTimeout(() => {
                fileListRef.current.style.display = 'none';
            }, 300); // Match the transition duration in your CSS
        } else { // Opening the file list
            fileListRef.current.style.display = 'block';
            fileCount.current.style.borderRadius = "10px";
            setTimeout(() => {
                fileListRef.current.classList.add(`${chatStyle.visible}`);
            }, 40);
        }
    };


    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };


    return (
        <div className={chatStyle.chatContainer}>
            <div className={`${chatStyle.over} ${sidebarVisible ? `${chatStyle.overlay}` : ''}`}></div>
            <div className={`${chatStyle.chatApp} `}>

               

                <div className={chatStyle.chatContainer}>

                    <div className={chatStyle.chatHeader}>
                    
                        {/* <svg width={32} height={32} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-xl-heavy"><path fillRule="evenodd" clipRule="evenodd" d="M8.85719 3H15.1428C16.2266 2.99999 17.1007 2.99998 17.8086 3.05782C18.5375 3.11737 19.1777 3.24318 19.77 3.54497C20.7108 4.02433 21.4757 4.78924 21.955 5.73005C22.2568 6.32234 22.3826 6.96253 22.4422 7.69138C22.5 8.39925 22.5 9.27339 22.5 10.3572V13.6428C22.5 14.7266 22.5 15.6008 22.4422 16.3086C22.3826 17.0375 22.2568 17.6777 21.955 18.27C21.4757 19.2108 20.7108 19.9757 19.77 20.455C19.1777 20.7568 18.5375 20.8826 17.8086 20.9422C17.1008 21 16.2266 21 15.1428 21H8.85717C7.77339 21 6.89925 21 6.19138 20.9422C5.46253 20.8826 4.82234 20.7568 4.23005 20.455C3.28924 19.9757 2.52433 19.2108 2.04497 18.27C1.74318 17.6777 1.61737 17.0375 1.55782 16.3086C1.49998 15.6007 1.49999 14.7266 1.5 13.6428V10.3572C1.49999 9.27341 1.49998 8.39926 1.55782 7.69138C1.61737 6.96253 1.74318 6.32234 2.04497 5.73005C2.52433 4.78924 3.28924 4.02433 4.23005 3.54497C4.82234 3.24318 5.46253 3.11737 6.19138 3.05782C6.89926 2.99998 7.77341 2.99999 8.85719 3ZM6.35424 5.05118C5.74907 5.10062 5.40138 5.19279 5.13803 5.32698C4.57354 5.6146 4.1146 6.07354 3.82698 6.63803C3.69279 6.90138 3.60062 7.24907 3.55118 7.85424C3.50078 8.47108 3.5 9.26339 3.5 10.4V13.6C3.5 14.7366 3.50078 15.5289 3.55118 16.1458C3.60062 16.7509 3.69279 17.0986 3.82698 17.362C4.1146 17.9265 4.57354 18.3854 5.13803 18.673C5.40138 18.8072 5.74907 18.8994 6.35424 18.9488C6.97108 18.9992 7.76339 19 8.9 19H9.5V5H8.9C7.76339 5 6.97108 5.00078 6.35424 5.05118ZM11.5 5V19H15.1C16.2366 19 17.0289 18.9992 17.6458 18.9488C18.2509 18.8994 18.5986 18.8072 18.862 18.673C19.4265 18.3854 19.8854 17.9265 20.173 17.362C20.3072 17.0986 20.3994 16.7509 20.4488 16.1458C20.4992 15.5289 20.5 14.7366 20.5 13.6V10.4C20.5 9.26339 20.4992 8.47108 20.4488 7.85424C20.3994 7.24907 20.3072 6.90138 20.173 6.63803C19.8854 6.07354 19.4265 5.6146 18.862 5.32698C18.5986 5.19279 18.2509 5.10062 17.6458 5.05118C17.0289 5.00078 16.2366 5 15.1 5H11.5ZM5 8.5C5 7.94772 5.44772 7.5 6 7.5H7C7.55229 7.5 8 7.94772 8 8.5C8 9.05229 7.55229 9.5 7 9.5H6C5.44772 9.5 5 9.05229 5 8.5ZM5 12C5 11.4477 5.44772 11 6 11H7C7.55229 11 8 11.4477 8 12C8 12.5523 7.55229 13 7 13H6C5.44772 13 5 12.5523 5 12Z" fill="#85262a" /></svg> */}

                        <div className={chatStyle.mContainer}>
                            <img src={ourLogo} alt="Bislan AI Logo" />

                            <span>Chatbot</span>
                        </div>
                        <button className={`${chatStyle.toggleSidebarButton} ${sidebarVisible ? `${chatStyle.toggleButtonRight}` : ''}`} onClick={toggleSidebar}>

{sidebarVisible ?
 <svg
 xmlns="http://www.w3.org/2000/svg"
 fill="none"
 viewBox="0 0 24 24"
 strokeWidth="1.5"
 stroke="currentColor"
 className={chatStyle.svgBackGround}
 style={{ transform: 'rotate(180deg)' }}
 width="35"
 height="35"
>
 <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>







    :
    <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
        className="size-6"
        width="35"
        height="35"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
    </svg>
}
</button>
                    </div>
                    <div className={chatStyle.chatMessages} ref={chatMessagesRef}>
                        <div className={chatStyle.mContainer} id="chatMessages">
                            {messages.map((message, index) => (
                                <div key={index} className={` ${chatStyle.chatMessage} ${message.type === 'bot' ? chatStyle.bot : null} ${message.type === 'user' ? chatStyle.user : null} `}>
                                    {/* Render message content based on type (using formatChatbotResponse if needed) */}
                                    {message.type === 'bot' ? formatChatbotResponse(message.text) : message.text}
                                </div>
                            ))}

                        </div>
                    </div>

                    <div className={chatStyle.chatInput}>
                        <div className={chatStyle.mContainer}>

                            <input type="file" id="fileInput" style={{ display: 'none' }} multiple ref={fileInputRef} onChange={handleFileInputChange} />


                            <button id="processButton" className={`${chatStyle.iconButton} ${chatStyle.processButton} ${selectedFiles.length > 0 ? `${chatStyle.displayInlineBlock}` : `${chatStyle.displayNone}`}`}
                                onClick={handleProcessFiles} disabled={isLoading}>
                                {isLoading ? <span className={chatStyle.loader}></span> : 'Process'}
                            </button>

                            <div id="filePreviewContainer" className={`${chatStyle.filePreviewContainer} ${selectedFiles.length > 0 ? `${chatStyle.displayFlex}` : `${chatStyle.displayNone}`} `}>


                                <ul ref={fileListRef} id="file-list" className={chatStyle.fileList}>
                                    {selectedFiles.map((file, index) => (
                                        <li key={index} className={chatStyle.fileLi}>
                                            <span>{file.name}</span>
                                            <span className={chatStyle.deleteIcon} onClick={() => handleDeleteFile(index)}>x</span>
                                        </li>
                                    ))}
                                </ul>
                                <span ref={fileCount} id="file-count" className={chatStyle.fileCount} onClick={toggleFileList}>
                                    {/* <span id="file-count" className="fileCount"></span> */}

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                        <path d="M19.5 21a3 3 0 0 0 3-3v-4.5a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h15ZM1.5 10.146V6a3 3 0 0 1 3-3h5.379a2.25 2.25 0 0 1 1.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 0 1 3 3v1.146A4.483 4.483 0 0 0 19.5 9h-15a4.483 4.483 0 0 0-3 1.146Z" />
                                    </svg>
                                    Files ({selectedFiles.length})</span>

                            </div>

                            <div className={chatStyle.textareaWithButtons}>
                                <button id="fileButton" className={` ${chatStyle.iconButton} ${chatStyle.fileB} `} onClick={() => fileInputRef.current.click()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth="1.6" height="25px" stroke="currentColor" className="size-6">
                                        <path fill="none" strokeLinejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
                                    </svg>



                                </button>
                                <textarea id="messageInput" placeholder="Type your message..." ref={messageInputRef} disabled={isLoading} onKeyDown={handleKeyDown}></textarea>
                                <button id="sendButton" className={chatStyle.sendB} onClick={handleSendMessage} disabled={isLoading}>
                                    {isLoading ?
                                        <span className={chatStyle.loader}></span>
                                        :
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" height="25px">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M2.01 21L23 12 2.01 3v7l15 2-15 2z" />
                                        </svg>


                                    }

                                </button>
                            </div>

                        </div>
                    </div>
                </div>
                 <div ref={sidebarRef} className={`${chatStyle.sidebar} ${sidebarVisible ? `${chatStyle.showSideBar}` : ''}`}>
                    <h2>Suggested Questions</h2>
                    <ul>
                        {/* ... your suggested questions */}
                        <li><a href="#" onClick={() => handleSuggestionClick("What's the weather like today?")}>What's the weather like today?</a></li>
                        <li><a href="#" onClick={() => handleSuggestionClick("Tell me a joke.")}>Tell me a joke.</a></li>
                        <li><a href="#" onClick={() => handleSuggestionClick("How do I reset my password?")}>How do I reset my password?</a></li>
                        <li><a href="#" onClick={() => handleSuggestionClick("Can you help me with my account?")}>Can you help me with my account?</a></li>
                        <li><a href="#" onClick={() => handleSuggestionClick("What's the d like today?")}>What's the weather like today?</a></li>
                        <li><a href="#" onClick={() => handleSuggestionClick("What's the d like today?")}>What's the weather like today?</a></li>
                        <li><a href="#" onClick={() => handleSuggestionClick("What's the weaddther like today?")}>What's the weather like today?</a></li>
                        <li><a href="#" onClick={() => handleSuggestionClick("What's the weather like today?")}>What's the weather like today?</a></li>
                        {/* ... more suggestions */}
                    </ul>

                    <div id="processed-files-section" className={`${chatStyle.processedFilesSection} ${processedFilesSectionVisible ? `${chatStyle.displayInlineBlock}` : `${chatStyle.displayNone}`}`}>
                        <h2>Processed Files</h2>
                        <ul id="processed-files-list" className={chatStyle.processedFilesList}>
                            {processedFiles.map((file, index) => (
                                <li key={index}>
                                    <span>{file.name}</span>
                                    <span className={chatStyle.deleteIcon} onClick={() => handleDeleteProcessedFile(index)}>X</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chatbot;