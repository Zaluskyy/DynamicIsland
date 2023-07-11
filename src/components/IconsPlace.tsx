import * as React from 'react';
import '../style/IconsPlace.scss';
import Application from './Application';

import safari from '../img/icons/safari.jpg'
import wallpaper from '../img/walpaperr.png'
import spotify from '../img/icons/spotify.png'
import photos from '../img/icons/photos.png'
import mail from '../img/icons/mail.png'
import health from '../img/icons/health.png'
import music from '../img/icons/music.png'
import appStore from '../img/icons/appStore.png'
import youtube from '../img/icons/youtube.png'
import maps from '../img/icons/maps.png'

interface IApplications {
    name: string,
    img: string,
    onClick: ()=>void,
}

export interface IconsPlaceProps{
    setSpotify: React.Dispatch<React.SetStateAction<boolean>>;
}

const IconsPlace: React.FC<IconsPlaceProps> = ({setSpotify}) => {

    const handleYetNothing = ()=>{
        console.log("not a function")
        setSpotify(true)
        
    }

    interface Applications {
        name: string,
        img: HTMLImageElement,
        onClick: ()=>number
    }

    const applications: IApplications[] = [
        {name: "Spotify", img: spotify, onClick: handleYetNothing},
        {name: "Photos", img: photos, onClick: handleYetNothing},
        {name: "Mail", img: mail, onClick: handleYetNothing},
        {name: "Safari", img: safari, onClick: handleYetNothing},
        {name: "Health", img: health, onClick: handleYetNothing},
        {name: "Music", img: music, onClick: handleYetNothing},
        {name: "App Store", img: appStore, onClick: handleYetNothing},
        {name: "Maps", img: maps, onClick: handleYetNothing},
        {name: "Youtube", img: youtube, onClick: handleYetNothing},
    ]

    const app: JSX.Element[] = applications.map(item=>{
        return <Application key={item.name} name={item.name} image={item.img} onClick={item.onClick} />
    })

    return ( 
        <div className='IconsPlace'>
            {app}
        </div>
     );
}
 
export default IconsPlace;