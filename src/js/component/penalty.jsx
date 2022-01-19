import React from "react";

let directions = ["TL", "TC", "TR", "ML", "MC", "MR", "BL", "BC", "BR"];
let kickResult = "";

function goalOrNot(direction) {
	//alert(direction);
	let gk = directions[Math.floor(Math.random() * directions.length)];
	//alert(gk);

	if (direction != gk) {
		kickResult = "GOAL!!!!!!!!!";
	} else {
		kickResult = "DEFENSE!!!!!!";
	}
	//alert(kickResult);
	document.getElementById("resultDiv").innerHTML = kickResult;
}

const Penalty = () => {
	return (
		<>
			<p>Penalty</p>
			<div className="container">
				<div className="goal">
					<div className="row d-flex justify-content-center g-0">
						<div className="col-4">
							<button onClick={() => goalOrNot("TL")}></button>
						</div>
						<div className="col-4">
							<button onClick={() => goalOrNot("TC")}></button>
						</div>
						<div className="col-4">
							<button onClick={() => goalOrNot("TR")}></button>
						</div>
					</div>
					<div className="row d-flex justify-content-center g-0">
						<div className="col-4">
							<button onClick={() => goalOrNot("ML")}></button>
						</div>
						<div className="col-4">
							<button onClick={() => goalOrNot("MC")}></button>
						</div>
						<div className="col-4">
							<button onClick={() => goalOrNot("MR")}></button>
						</div>
					</div>
					<div className="row d-flex justify-content-center g-0">
						<div className="col-4">
							<button onClick={() => goalOrNot("BL")}></button>
						</div>
						<div className="col-4">
							<button onClick={() => goalOrNot("BC")}></button>
						</div>
						<div className="col-4">
							<button onClick={() => goalOrNot("BR")}></button>
						</div>
					</div>
				</div>
			</div>
			<div>
				<div id="resultDiv">{kickResult}</div>
			</div>
		</>
	);
};

export default Penalty;
