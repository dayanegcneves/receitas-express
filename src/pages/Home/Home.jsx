import { Banner } from "../../components/Banner/Banner";
import { ReceitasRecentes } from "../../components/ReceitasRecentes/ReceitasRecentes";

export function Home() {
    return (
        <>
            <Banner>
                Prepare refeições rápidas, saborosas e criativas, sem complicações.
            </Banner>
            <ReceitasRecentes></ReceitasRecentes>
        </>
    )
}