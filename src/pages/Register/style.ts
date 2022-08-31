import styled from "styled-components";


export const ContainerRegister = styled.div`
 background-color: rgba(0,0,0,0.5) ;
color: #F8F9FA;
display: flex;
justify-content: center;
align-items: center;
padding: 22px 22px;
gap: 20px;




.Register{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 95%;
    max-width: 370px;
    background-color: #FFFFFF;
    
    
    
 
}
.divHeader{
    display: flex;
    align-items: center;
    justify-content: right;
    width: 100%;
    height: 26px;
    background-color: #FFFFFF;

}
.spanRegister{
    
    color: #0B362F;
    font-size: 1.7rem;
    font-weight: bold;
    margin-bottom: 15px;
    height: 28px;
    
}
.btnReturn{
    background-color: #00A48B;
    color: #F8F9FA;
    width: 25px;
    height: 22px;
    cursor: pointer;
    border: none;
    margin-top: 35px;
    margin-right: 20px;
    border-radius: 5px;
    font-weight: bold;

}
.btnReturn:hover{
  background: var(--color-green2);
}

  .form{
  
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items:center ;
    width: 95%;
    color: grey;
    margin-top: 10px;
    
  
  }
  

  .inputRegister{
  
    height: 48px;
    width: 95%;
    margin-bottom: 20px;
    background-color: #F2F2F2;
    color: #0B362F;
    font-size: 0.8rem;
    border-radius: 5px;
    border: none;
    padding: 2% 3%;
  
  }
 

  .btnRegister{
    background-color: #00A48B;
    width: 95%;
    height: 50px;
    border-radius: 5px;
    border: none;
    color: aliceblue;
    font-size: 1rem;
    margin-bottom: 20px;

  }
  .btnRegister:hover{
    background: var(--color-green2);
  }
  
  label{
    display: flex;
    align-items: center;
    width: 95%;
    font-size: 0.8rem;
    color: #0B362F;
    margin-bottom: 8px;
  }
  placeholder{
    margin-left: 8px;
  }

 
/* 
  @media (min-width: 375px) {
    .main{
      width: 365px;
      flex-wrap: wrap;
        }
  }

  @media (min-width: 425px) {
    .main{
      width: 425px;
      flex-wrap: wrap;
        }
  }
@media (min-width: 768px) {
    .main{
      width: 768px;
      flex-wrap: wrap;
        }
  }
  @media (min-width: 1024px) {
    .main{
      width: 1024px;
      flex-wrap: wrap;
        }
  }
  @media (min-width: 1440) {
    .main{
      width: 1440px;
      flex-wrap: wrap;
        }
  } */
`