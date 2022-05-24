
import FormLogin from '../../components/formLogin';
import {PageContainer,PageTitle} from '../../components/template/mainComponents';
import { PageArea } from './styles';
const Signin = ()=>{
    return (
        <PageContainer>
            <PageTitle>Login</PageTitle>
            <PageArea>
                <FormLogin/>
            </PageArea>
        </PageContainer>
   
    )
}

export default Signin;