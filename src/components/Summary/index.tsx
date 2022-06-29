import { Container } from "./styles";
import incomeImg from '../../assets/entradas.svg'
import outcomeImg from '../../assets/saidas.svg'
import totalImg from '../../assets/total.svg'
import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";

export function Summary(){

    const data = useContext(TransactionsContext)

    console.log(data);
    

    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>R1000,00</strong>
            </div>

            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt="Saidas" />
                </header>
                <strong> - R500,00</strong>
            </div>

            <div className="heighlight_background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>R500,00</strong>
            </div>
        </Container>
    )
}