import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import { StyledBanner } from "../src/components/Banner";
import { StyledFavorite } from "../src/components/Favorite";

function HomePage() {
    const estilosDaHomePage = {
        // backgroundColor: "red" 
    };

    // console.log(config.playlists)
    console.log(config["favorites"])

    return (
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                // backgroundColor: "red",
            }}>
                <Menu />
                <Banner imagem={config.bannerUrl} />
                <Header />
                <Timeline playlists={config.playlists}>
                    Conteúdo
                </Timeline>
                <Favorites favorites={config["favorites"]} />
            </div>
        </>
    );
}

// function Menu() {
//     return (
//         <div>
//             Menu
//         </div>
//     )
// }
const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%; 
    }
    .user-info{
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;
function Header() {
    return (
        <StyledHeader>
            {/*<img src="banner" />*/}
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
}

function Banner(props) {
    return (
        <StyledBanner>
            <img src={props.imagem} />
        </StyledBanner>
    )
};

function Timeline(props) {
    // console.log("Dentro do Componente:", props.playlists);

    const playlistNames = Object.keys(props.playlists);

    //Statement - for and forEach
    //Retorno por expressão - map

    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = props.playlists[playlistName];
                console.log(playlistName);
                console.log(videos);
                return (
                    <section>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                );
            })}
        </StyledTimeline>
    )
}

function Favorites(props) {

    const favoriteUsers = props.favorites;

    return (
        <StyledFavorite>
            <h2>AluraTubes Favoritos</h2>
            <div>
                {favoriteUsers.map((favoriteUser) => {
                    console.log(favoriteUser);
                    return (
                        <a href={`https://github.com/${favoriteUser}`}>
                            <img src={`https://github.com/${favoriteUser}.png`} />
                            <span>@{favoriteUser}</span>
                        </a>
                    );
                })
                }
            </div>
        </StyledFavorite>
    )
}

export default HomePage