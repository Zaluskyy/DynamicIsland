import React, { useContext } from 'react';
import '../style/IconsPlace.scss';
import Application from './Application';

import safari from '../img/icons/safari.jpg'
import spotify from '../img/icons/spotify.png'
import photos from '../img/icons/photos.png'
import mail from '../img/icons/mail.png'
import health from '../img/icons/health.png'
import music from '../img/icons/music.png'
import appStore from '../img/icons/appStore.png'
import youtube from '../img/icons/youtube.png'
import maps from '../img/icons/maps.png'
import AppsContext from '../store/AppsContext';
import DynamicIslandContext from '../store/DynamicIslandContext';

interface IApplications {
    name: string,
    img: string,
    onClick: ()=>void,
}

export interface IconsPlaceProps{
}

const IconsPlace: React.FC<IconsPlaceProps> = () => {

    const appsContext = useContext(AppsContext)
    const diContext = useContext(DynamicIslandContext)

    const handleOpenApp = (name: string)=>{
        if(name!==''){
            appsContext.handleOpenApp(name)
        }
    }

    interface Applications {
        name: string,
        img: HTMLImageElement,
        onClick: ()=>number
    }

    const applications: IApplications[] = [
        {name: "Spotify", img: spotify, onClick: ()=>handleOpenApp('SPOTIFY')},
        {name: "Photos", img: photos, onClick: ()=>handleOpenApp('')},
        {name: "Mail", img: mail, onClick: ()=>handleOpenApp('')},
        {name: "Safari", img: safari, onClick: ()=>handleOpenApp('')},
        {name: "Health", img: health, onClick: ()=>handleOpenApp('')},
        {name: "Music", img: music, onClick: ()=>handleOpenApp('')},
        {name: "Store", img: appStore, onClick: ()=>handleOpenApp('')},
        {name: "Maps", img: maps, onClick: ()=>handleOpenApp('')},
        {name: "Youtube", img: youtube, onClick: ()=>handleOpenApp('')},
    ]

    const app: JSX.Element[] = applications.map(item=>{
        return <Application key={item.name} name={item.name} image={item.img} onClick={item.onClick} />
    })

    return ( 
        <div className='IconsPlace' onClick={diContext.hanldeCloseBigIsland}>
            {app}
        </div>
     );
}
 
export default IconsPlace;