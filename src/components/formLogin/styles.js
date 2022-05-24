import styled from 'styled-components';

export const Form = styled.form`
  background-color:#fff;
    border-radius:3px ;
    padding:10px ;
    box-shadow:0px 0px 3px #999 ;

    .area{
        display:flex ;
        align-items:center ;
        padding:10px ;
        max-width:500px ;

        .area-title{
            width:200px;
            text-align:right;
            padding-right:20px ;
            font-weight:bold ;
            font-size:14px;
        }

        .area-input{
            flex:1 ;
           
            input{
                width:100%;
                font-size:14px;
                padding:5px ;
                border-radius:3px ;
                border:1px solid #ddd;
                outline:0 ;
                transition: all ease 0.4s ;
                &:focus{
                    border:1px solid #333;
                    color:#333 ;   
            }
           
            }
           
        }

        button{
            width:100px ;
            outline: none ;
            border:none ;
            margin-left:auto ;
            margin-right:auto ;
            background-color:#0089ff ;
           padding:5px 10px ;
           border-radius:4px ;
           color:#fff;
           cursor: pointer;
           font-size:14px ;
           &:hover{
               background-color:#006fce ;
           }

        }
    }

`