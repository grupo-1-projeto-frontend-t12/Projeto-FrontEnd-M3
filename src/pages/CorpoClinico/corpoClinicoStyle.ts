import styled from "styled-components";


export const ContainerCorpoClinicoHeader = styled.div`   
    width: 100%;   
    height : 290px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    background: var(--bg-color-linear);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);   

   


        .container{
        width: 95%;
        max-width: 1200px;        
        margin-top: 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
       
        
        @media (min-width: 100px) and  (max-width: 768px)  {
        flex-direction: column;
        height: 100px;
        align-items: center;
    
    }
    }

    .menus{
        display: flex; 
        gap     : 10px;
        align-items: center;
    }

    img{
    width: 188px;
    height: 32px;
    }

   .container-buttons {
    display: flex;
    flex-direction: column;
    align-items: center;    
    gap: 15px;

    @media (min-width: 100px) and  (max-width: 768px) {
      display: none;
    }
  }
`