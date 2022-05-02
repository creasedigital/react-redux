import { buyCake } from "../redux";
import { connect } from "react-redux";

const CakeContainer = (props) => {
	return (
		<div style={{ textAlign: "center", width: "100vw", margin: "0px auto" }}>
			<h2 style={{ fontSize: "2rem", color: "sienna" }}>
				Number of cakes - {props.numOfCakes}
			</h2>
			<button
				style={{
					fontSize: "2rem",
					backgroundColor: "transparent",
					cursor: "pointer",
					color: "sienna",
					borderRadius: "10px",
					border: "2px solid sienna",
				}}
				onClick={props.buyCake}
			>
				Buy Cake
			</button>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		numOfCakes: state.numOfCakes,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		buyCake: () => dispatch(buyCake()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
