import * as S from "./styles"
import { Linking } from "react-native";
import lenoBrega from "../../assets/images/lenobrega.jpg"
import { LENO_BREGA_LINKS } from "@/constants/links";

async function openLinkUrl(url: string) {
    try {
        Linking.canOpenURL(url)
        Linking.openURL(url)
    } catch(_) {
        alert("Ocorreu um problema ao abrir o link.")
    }
}   

export function HomeScreen() {
    return (
        <S.Container>
            <S.LenoBregaImage source={lenoBrega} />

            <S.LenoBregaTitle>
                Leno Brega - Links
            </S.LenoBregaTitle>

            <S.LinksContainer>
                {LENO_BREGA_LINKS.map(link => <S.LinkButton color="#FF69B4" onPress={() => openLinkUrl(link.url)} title={link.title} />)}
            </S.LinksContainer>
        </S.Container>
    )
}