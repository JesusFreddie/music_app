import MainPage from "./pages/MainPage/MainPage";
import style from './global.module.scss'
import Platbar from "./components/Playbar/Playbar";

const App = () => {
	return ( 
		<div className={style.wrapper}>
			<MainPage/>
			<Platbar/>
		</div>
	 );
}
 
export default App;