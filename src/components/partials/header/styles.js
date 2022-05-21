import styled from 'styled-components';

export const HeaderArea = styled.div`
height:60px;
background-color:#fff;
border:1px solid #ccc;
a{
    text-decoration:none ;
}
`
export const Container = styled.div`
 max-width:1400px ;
 display: flex ;
 margin:auto ;

`; 

export const LogoArea = styled.div`
display: flex ;
flex:1 ;
align-items:center ;
height: 60px;
margin-left:10px ;
`;

export const LogoLetter1 = styled.span`
font-size: 27px ;
font-weight:bold ;
color:#ff0000;
`;

export const LogoLetter2 = styled.span`
font-size: 27px ;
font-weight:bold ;
color:#00ff00;
`;

export const LogoLetter3 = styled.span`
font-size: 27px ;
font-weight:bold ;
color:#0000ff;
`;

export const NavMenu = styled.nav`
display : flex ;
align-items:center ;
height:60px ;
margin-right:10px ;


 ul{
    list-style: none;
    display: flex ;
    align-items:center ;

    li{
        margin: 0px 20px;

        a{
            color:#000;
            font-size: 14px;
            &:hover{color:#999}
        }
    }
 }
`;

export const ButtonMenu = styled.button`
outline: none ;
border: 0;
background-color:#ff8100 ;
border-radius:4px ;
color:#fff ;
padding: 5px 10px ;
cursor: pointer;

&:hover{
    background-color:#e57706;
    transform: scale(1.1) ;
    transition: 0.3s ease-in ;
}
`;