import React, { useState, useEffect } from "react";
import axios from "axios";
import "antd/dist/antd.min.css";
import Notification from "../Notification/index";
import { DatePicker, Space } from "antd";
import { useLocation } from "react-router-dom";

function AppointmentCancel() {
	const [notify, setNotify] = useState({
		isOpen: false,
		message: "",
		type: "",
	});

	const location = useLocation();

	// const toggle = () => {
	//     setIsOpen(!isOpen);
	// };

	

	// useEffect(() => {
	// 	const getData = async () => {
	// 		setDate(location.state.date);
	// 		setTime(location.state.time);
	// 	};
	// 	getData();
	// },[location]);

	// setDate(localStorage.getItem("date").toString());
	// setTime(localStorage.getItem("time").toString());

	// console.log(email);

	const error = document.getElementById("errorMessage");

	// error handling
	const errorhandling = () => {
	
	};

	// on submit function
	const submit = async (e) => {
		e.preventDefault();
		errorhandling();


		const data = {
			
		};

		console.log(data);

		try {
			await axios
				.post("/api/appointment/cancel", {
					headers: {
						authentication:
							localStorage.getItem("authentication"),
					},
					data,
				})
				.then((res) => {
					console.log("cancel appointment res", res);
					setNotify({
						isOpen: true,
						message: "Appointment Cancel Successfull!",
						type: "success",
					});
					window.location.reload();
				})
				.catch((err) => {
					console.log(err);
					setNotify({
						isOpen: true,
						message: "Appointment Cancel is Failed!",
						type: "error",
					});
				});
		} catch (error) {
			console.log(error);
		}
	};


	return (
		<>
			<div className="bg-main-blue w-[100%] h-full">
				<div className="flex justify-center items-center">
					<div className="ml-20 w-full">
						<div className="w-[100%] mb-10 mt-12">
							<h1 className="text-button-blue font-semibold text-4xl text-center">
								Cancel Your Appointment
							</h1>
						</div>
						<div className="flex justify-center items-center">
							<form
								onSubmit={submit}
								className="bg-white w-[55%] h-auto p-4 rounded-xl mt-5 ">
								<p
									className="text-red-600 mb-10 text-sm"
									id="errorMessage"
								/>
                                <div className="flex justify-center item-center mb-12">
                                <p>
                                <a href="https://cdn-icons-png.flaticon.com/512/564/564619.png">
                                <img border="0" alt="" src="https://cdn-icons-png.flaticon.com/512/564/564619.png" width="100" height="100"></img>
                                </a>
                                </p>
                                </div>
                                {/* <img src="https://www.flaticon.com/free-icon/warning_564619">delete</img> */}
								<div className="flex justify-center items-center mt-4">
									<div className="p-0 md:gap-2">
										<h2 className="text-button-blue font-semibold text-lg text-center">
											Are you sure want to cancel this appointment ?
										</h2>
										
										</div>
										</div>

                                        <div class="flex items-center justify-center cols-1 mt-16">
															<div className="cols-1 mr-4">
																<button
																	type="submit"
																	class="cols-1 text-white bg-red-600 focus:outline-none  rounded-full text-lg  sm:w-auto px-[50px] py-2 text-center dark:bg-red-600 mt-0">
																	Yes
																</button>
															</div>
															<div className="cols-1">
																<button
																	type="submit"
																	class="cols-1 text-white bg-gray-600 focus:outline-none  rounded-full text-lg  sm:w-auto px-[50px] py-2 text-center dark:bg-gray-600 mt-0">
																	No
																</button>
															</div>
														</div>
									
								
							</form>
						</div>
					</div>
				</div>
			</div>
			<Notification notify={notify} setNotify={setNotify} />
		</>
	);
}

export default AppointmentCancel;
