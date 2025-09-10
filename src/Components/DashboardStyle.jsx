import styled from 'styled-components';


export const Dashboard_container = styled.div`
    /* background: yellow; */
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Dashboard_holder = styled.div`
    width: 100%;
    height: 100vh;
    max-height: max-content;
    background: #fefefe;
    
`;
export const Dashboard_header = styled.div`
    width: 100%;
    height: 13vh;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
    /* background: aqua; */
    display: flex;
    justify-content: space-between;
    font-size: 20px;

  
`;
export const Myimg = styled.div`
height: 13vh;
display: flex;
justify-content: space-between;
align-items: center;
  .img{
        
        width: 70px;
        height: 90px;
    }
    .drop{
        cursor: pointer;
    }
`
export const Sidebar = styled.div`
    width: 20%;
    height: 80vh;
    background: #e0d9d9;
    box-shadow: 0 0 10px rgba(0,0,0,0.0);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  

    .set{
        cursor: pointer;
        height: 30px;
        width: 30px;
    }
    h2{
       color: red;
       cursor: pointer; 
    }
    .active{
        color: yellow;
    }
`