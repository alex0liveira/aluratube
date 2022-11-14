import React from "react";
import config from "../config.json";
import styled from "styled-components";
import Menu from "../src/components/Menu/";
import { StyledTimeline } from "../src/components/Timeline";
import { StyledBanner } from "../src/components/Banner";
import { StyledFavorite } from "../src/components/Favorite";
import { videoService } from "../src/services/videoService";

function HomePage() {
    const service = videoService();
    const [valorDoFiltro, setValorDoFiltro] = React.useState("");
    const [playlists, setPlaylists] = React.useState({});

    React.useEffect(() => {
        console.log("useEffect");
        service
            .getAllVideos()
            .then((dados) => {
                console.log(dados.data);
                const novasPlaylists = { ...playlists };
                dados.data.forEach((video) => {
                    if (!novasPlaylists[video.playlist]) novasPlaylists[video.playlist] = [];
                    novasPlaylists[video.playlist].push(video);
                })
                setPlaylists(novasPlaylists);
            });
    }, []);

    console.log(playlists)

    return (
        <>

            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                // backgroundColor: "red",
            }}>
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
                <Banner imagem={config.bannerUrl} />
                <Header />
                <Timeline searchValue={valorDoFiltro} playlists={playlists}>
                    Conteúdo
                </Timeline>
                <Favorites favorites={config["favorites"]} />
            </div>
        </>
    );
}

const StyledHeader = styled.div`
    background-color: ${({ theme }) => theme.backgroundLevel1};
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

function Timeline({ searchValue, ...props }) {

    const playlistNames = Object.keys(props.playlists);

    //Statement - for and forEach
    //Retorno por expressão - map

    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = props.playlists[playlistName];
                return (
                    <section key={playlistName}>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.filter((video) => {
                                const titleNormalized = video.title.toLowerCase();
                                const searchValueNormalized = searchValue.toLowerCase();
                                return titleNormalized.includes(searchValueNormalized)
                            }).map((video) => {
                                return (
                                    <a key={video.url} href={video.url}>
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
                    return (
                        <a key={favoriteUser} href={`https://github.com/${favoriteUser}`}>
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