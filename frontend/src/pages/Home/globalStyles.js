import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        margin: 0%;
        padding: 0%;
        box-sizing: border-box;
        overflow-x: hidden;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        width: 100%;
        height: 100%;
        font-family: 'Roboto', sans-serif;
    }

    a {
        text-decoration: none;
    }

    body::-webkit-scrollbar {
        width: 0px;        
    }
    
    body::-webkit-scrollbar-track {
        background: transparent;  
    }
    
    body::-webkit-scrollbar-thumb {
        background-color: transparent; 
    }

    button#primeiro {
        margin-top: 20px;
        padding: 20px;
        font-size: 2rem;
        font-family: 'Roboto';
        color: white;
        background: #EA7A67;
        border: 3px solid #A92364;
        box-shadow: 3px 4px 5px 3px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        cursor: pointer;
        overflow-y: hidden;
    }

    button#botao-remover {
        width: 50%;
        padding-bottom: 10px;
        padding-top: 10px;
        font-size: 2rem;
        font-family: 'IBM Plex Sans';
        color: white;
        background: #EA7A67;
        border: 3px solid #A92364;
        box-shadow: -3px 4px 3px 3px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        cursor: pointer;
        overflow-y: hidden;
    }
    
    #keyframe1 {
        animation-duration: 3s;
        animation-name: slidein-left;  
    }

    #keyframe2 {
        animation-duration: 3s;
        animation-name: slidein-right;  
    }

    #keyframe3 {
        animation-duration: 0.8s;
        animation-name: slidein-left;  
    }

    #keyframe4 {
        animation-duration: 0.8s;
        animation-name: slidein-right;  
    }

    #keyframe5 {
        animation-duration: 4s;
        animation-name: slidein-up;  
    }

    @keyframes slidein-left {
        from {
        margin-left: 50%;
        }
    
        to {
        margin-left: 0%;
        }
    }

    @keyframes slidein-right {
        from {
        margin-right: 50%;
        }
    
        to {
        margin-right: 0%;
        }
    }

    @keyframes slidein-up {
        from {
        margin-top: 100%;
        }
    
        to {
        margin-top: 0%;
        }
    }
`;

export default GlobalStyle;