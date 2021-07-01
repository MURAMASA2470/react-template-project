import logo from '../../assets/image/svg/logo.svg'
import '../../assets/css/app.css'

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					{process.env.REACT_APP_APPLICATION_TITLE}
				</p>
			</header>
		</div>
	)
}

export default App
