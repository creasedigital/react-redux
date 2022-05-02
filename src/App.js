import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/cake/store";
import HooksCakeContainer from "./components/HooksCakeContainer";

function App() {
	return (
		<Provider store={store}>
			<div>
				<CakeContainer />
				<HooksCakeContainer />
			</div>
		</Provider>
	);
}

export default App;
