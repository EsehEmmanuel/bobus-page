import styled from 'styled-components';

export const Contain = styled.div`
    background-color: #6C63FF;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
`;
export const Contain_left = styled.div`
    width: 50%;
    height: 100%;
    
    img{
        width: 100%;
        height: 100vh
    }
    `;
export const Contain_right = styled.div`
    width: 50%;
    height: 100%;
    /* background-color: aqua; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;

    form{
        width: 50%;
        height: 60vh;
        max-height: max-content;
        background-color: white;
        display: flex;
         padding-top: 20px;
        /* justify-content: center; */
        align-items: center;    
        flex-direction: column;
        border-radius: 9px;
        box-shadow: 0 0 10px rgba(0,0,0,0.3);
        background: #6C63FF;
        color: white;
        font-size: 20px;
        gap: 10px;
        
        input{
            width: 320px;
            height: 45px;
            border-radius: 14px;
            outline: none;
            border: none;
            padding-left: 15px;
        }
        .btn{
            width: 250px;
            height: 45px;
            border-radius: 30px;
            background: #554fcf;
            border: none;
            cursor: pointer;
            color: white;
            font-size: 20px;
        }
        p{
           /* margin-left: 134px; */
           color: #0000ffca;
            cursor: pointer;

            span{
                cursor: pointer;
            }
        }
    }
    `;