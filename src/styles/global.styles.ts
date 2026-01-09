export const globalStyles = `
  @keyframes marquee { 
    0% { transform: translateX(0%); } 
    100% { transform: translateX(-50%); } 
  }
  
  @keyframes fadeIn { 
    from { opacity: 0; transform: translateY(20px); } 
    to { opacity: 1; transform: translateY(0); } 
  }
  
  @keyframes loading { 
    0% { width: 0%; } 
    100% { width: 100%; } 
  }
  
  ::-webkit-scrollbar { 
    width: 8px; 
  }
  
  ::-webkit-scrollbar-track { 
    background: transparent; 
  }
  
  ::-webkit-scrollbar-thumb { 
    background: #000; 
    border-radius: 4px; 
  }
  
  ::-webkit-scrollbar-thumb:hover { 
    background: #333; 
  }
`;
