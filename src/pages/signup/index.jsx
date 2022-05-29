import {PageContainer,PageTitle} from '../../components/template/mainComponents';
import FormLogin from '../../components/formLogin';
import { PageAreaSingUp} from './styles';
const Signup = ()=>{
    return(
        <PageContainer>
            <PageTitle>Cadastro</PageTitle>
            <PageAreaSingUp>
                <FormLogin/>
            </PageAreaSingUp>
        </PageContainer>
    )
}

export default Signup;