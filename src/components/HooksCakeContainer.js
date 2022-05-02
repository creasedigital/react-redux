import { useSelector } from "react-redux";

const HooksCakeContainer = () => {
	const numOfCakes = useSelector((state) => state.numOfCakes);
	return (
		<div style={{ textAlign: "center", width: "100vw", margin: "0px auto" }}>
			<h2 style={{ fontSize: "2rem", color: "forestgreen" }}>
				Number of cakes - {numOfCakes}
			</h2>
			<button
				style={{
					fontSize: "2rem",
					backgroundColor: "transparent",
					cursor: "pointer",
					color: "forestgreen",
					borderRadius: "10px",
					border: "2px solid forestgreen",
				}}
				// onClick={props.buyCake}
			>
				Buy Cake
			</button>
		</div>
	);
};
export default HooksCakeContainer;
