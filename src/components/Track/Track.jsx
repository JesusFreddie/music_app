import { IconButton } from '@mui/material';
import style from './track.module.scss'
import { PlayArrow, Pause } from '@mui/icons-material';
import secondsToMMSS from '../../utils/secondsToMMSS';
import { useContext } from 'react';
import { AudioContext } from '../../context/AudioContext';
import cn from 'classnames';

const Track = (track) => {
	const {id, src, preview, title, artists, duration} = track

	const { handleToggleAudio, currentTrack, isPlaying } = useContext(AudioContext)

	const isCurrrntTrack = currentTrack.id === track.id

	const formattedDuration = secondsToMMSS(duration)

	return ( 
		<div className={cn(style.track, isCurrrntTrack && style.playing)}>
			<IconButton onClick={()=> handleToggleAudio(track)}>
				{isCurrrntTrack && isPlaying ? <Pause/> : <PlayArrow/>}
			</IconButton>
			<img src={preview} alt=':)' className={style.preview}/>
			<div className={style.credits}>
				<b>{title}</b>
				<p>{artists}</p>
			</div>
			<p>{formattedDuration}</p>
		</div>
	 );
}
 
export default Track;