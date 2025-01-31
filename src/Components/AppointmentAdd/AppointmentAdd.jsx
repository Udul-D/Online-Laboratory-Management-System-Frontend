import React, { useState, useEffect } from "react";
import axios from "axios";
import "antd/dist/antd.min.css";
import Notification from "../Notification/index";
import { DatePicker, Space, TimePicker } from "antd";
import { useLocation } from "react-router-dom";

function AddAppointment() {
	const [notify, setNotify] = useState({
		isOpen: false,
		message: "",
		type: "",
	});

	const [open, setOpen] = useState(false);

	const handletime = (newTime) => {
		setTime(newTime);
	};

	const location = useLocation();

	// const toggle = () => {
	//     setIsOpen(!isOpen);
	// };

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [nic, setNIC] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [email, setEmail] = useState("");
	const [gender, setGender] = useState("");
	const [age, setAge] = useState("");
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");
	const [testName, setTestName] = useState("");

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
		if (
			firstName === "" ||
			lastName === "" ||
			nic === "" ||
			phoneNumber === "" ||
			email === "" ||
			gender === "" ||
			age === "" ||
			date === "" ||
			time === "" ||
			testName === ""
		) {
			error.innerHTML =
				"* Fill out all the fields. (All the fields are required)";
		} else {
			error.innerHTML = "";
		}
	};

	// on submit function
	const submit = async (e) => {
		e.preventDefault();
		errorhandling();

		const data = {
			firstName: firstName,
			lastName: lastName,
			nic: nic,
			phoneNumber: phoneNumber,
			email: email,
			gender: gender,
			age: age,
			date: date,
			time: time,
			testName: testName,
		};

		console.log(data);

		try {
			await axios
				.post("/api/appointment/add", {
					headers: {
						authentication:
							localStorage.getItem("authentication"),
					},
					data,
				})
				.then((res) => {
					console.log("add appointment res", res);
					setNotify({
						isOpen: true,
						message: "Appointment made Successfull!",
						type: "success",
					});
					window.location.reload();
				})
				.catch((err) => {
					console.log(err);
					setNotify({
						isOpen: true,
						message: "Appointment is Failed!",
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
								Appointment Details Form
							</h1>
						</div>
						<div className="flex justify-center items-center">
							<form
								onSubmit={submit}
								className="bg-white w-[55%] h-auto p-14 rounded-xl mt-5 ">
								<p
									className="text-red-600 mb-10 text-sm"
									id="errorMessage"
								/>
								<div className="flex justify-center items-center mt-8">
									<div className="p-0 md:gap-24">
										<h2 className="text-button-blue font-semibold text-4xl text-center">
											Patient Details
										</h2>
										<div class="grid md:grid-cols-1 md:gap-6">
											<div class="relative z-0 mb-4 w-full group mt-10">
												<input
													type="text"
													name="floating_first_name"
													id="floating_first_name"
													class="block py-2.5 px-0 w-full text-lg text-button-blue bg-transparent border-0 border-b-2 border-button-blue appearance-none dark:text-button-blue dark:border-button-blue dark:focus:border-button-blue focus:outline-none focus:ring-0 focus:border-button-blue peer"
													placeholder=" "
													required=""
													onChange={(e) =>
														setFirstName(
															e.target.value,
														)
													}
												/>
												<label
													for="floating_first_name"
													class="peer-focus:font-medium absolute text-lg text-button-blue dark:text-button-blue duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-button-blue peer-focus:dark:text-button-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
													First Name
												</label>
											</div>
											<div class="relative z-0 mb-8 w-full group">
												<input
													type="text"
													name="floating_last_name"
													id="floating_last_name"
													class="block py-2.5 px-0 w-full text-lg text-button-blue bg-transparent border-0 border-b-2 border-button-blue appearance-none dark:text-button-blue dark:border-button-blue dark:focus:border-button-blue focus:outline-none focus:ring-0 focus:border-button-blue peer"
													placeholder=" "
													required=""
													onChange={(e) =>
														setLastName(
															e.target.value,
														)
													}
												/>
												<label
													for="floating_last_name"
													class="peer-focus:font-medium absolute text-lg text-button-blue dark:text-button-blue duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-button-blue peer-focus:dark:text-button-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
													Last Name
												</label>
											</div>
										</div>
										<div class="grid md:grid-cols-1 md:gap-6">
											<div class="relative z-0 mb-2 w-full group">
												<input
													type="text"
													name="floating_NIC"
													id="floating_NIC"
													class="block py-2.5 px-0 w-full text-lg text-button-blue bg-transparent border-0 border-b-2 border-button-blue appearance-none dark:text-button-blue dark:border-button-blue dark:focus:border-button-blue focus:outline-none focus:ring-0 focus:border-button-blue peer"
													placeholder=" "
													pattern="^([0-9]{9}[x|X|v|V]|[0-9]{12})$"
													title="Please enter valid NIC Number ex: xxxxxxxxV / xxxxxxxxxv / xxxxxxxxxxxx"
													required=""
													onChange={(e) =>
														setNIC(
															e.target.value,
														)
													}
												/>
												<label
													for="floating_NIC"
													class="peer-focus:font-medium absolute text-lg text-button-blue dark:text-button-blue duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-button-blue peer-focus:dark:text-button-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
													NIC
												</label>
											</div>
											<div class="relative z-0 mb-8 w-full group">
												<input
													type="text"
													name="floating_phone"
													id="floating_phone"
													class="block py-2.5 px-0 w-full text-lg text-button-blue bg-transparent border-0 border-b-2 border-button-blue appearance-none dark:text-button-blue dark:border-button-blue dark:focus:border-button-blue focus:outline-none focus:ring-0 focus:border-button-blue peer"
													placeholder=" "
													pattern="[0-9]{3}-[0-9]{3}[0-9]{4}"
													title="Enter phone number in this format ex: 077-4567890"
													required=""
													onChange={(e) =>
														setPhoneNumber(
															e.target.value,
														)
													}
												/>
												<label
													for="floating_phone"
													class="peer-focus:font-medium absolute text-lg text-button-blue dark:text-button-blue duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-button-blue peer-focus:dark:text-button-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
													Phone Number
												</label>
											</div>
											<p id="pnum"></p>
										</div>
										<div class="grid md:grid-cols-1 md:gap-6">
											<div class="relative z-0 mb-8 w-full group">
												<input
													type="email"
													name="floating_email"
													id="floating_email"
													class="block py-2.5 px-0 w-full text-lg text-button-blue bg-transparent border-0 border-b-2 border-button-blue appearance-none dark:text-button-blue dark:border-button-blue dark:focus:border-button-blue focus:outline-none focus:ring-0 focus:border-button-blue peer"
													placeholder=" "
													pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
													title="Please Enter valid email address ex: abc@gmail.com"
													required=""
													onChange={(e) =>
														setEmail(
															e.target.value,
														)
													}
												/>
												<label
													for="floating_email"
													class="peer-focus:font-medium absolute text-lg text-button-blue dark:text-button-blue duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-button-blue peer-focus:dark:text-button-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
													Email
												</label>
											</div>
										</div>

										<div class="grid md:grid-cols-1 md:gap-1">
											<div class="relative z-0 mb-6 w-full group">
												<h3 class="mb-4 font-regular text-lg text-button-blue">
													Gender
												</h3>
												<ul class="items-center w-full text-sm font-medium rounded-xl border sm:flex text-white bg-cyan-800">
													<li class="w-1/2 border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-white">
														<div class="flex items-center pl-3">
															<input
																id="radio-Male"
																type="radio"
																value="male"
																name="list-radio"
																class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2"
																onChange={(
																	e,
																) =>
																	setGender(
																		e
																			.target
																			.value,
																	)
																}
															/>
															<label
																for="horizontal-list-radio-license"
																class="py-3 ml-2 w-full text-sm font-medium text-white">
																Male
															</label>
														</div>
													</li>
													<li class="w-1/2 border-b border-white sm:border-b-0 sm:border-">
														<div class="flex items-center pl-3">
															<input
																id="radio-Female"
																type="radio"
																value="female"
																name="list-radio"
																class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
																onChange={(
																	e,
																) =>
																	setGender(
																		e
																			.target
																			.value,
																	)
																}
															/>
															<label
																for="horizontal-list-radio-id"
																class="py-3 ml-2 w-full text-sm font-medium text-white">
																Female
															</label>
														</div>
													</li>
												</ul>
											</div>
											<div class="relative z-0 mb-6 w-full mt-2 group">
												<input
													type="text"
													name="floating_age"
													id="floating_age"
													class="block py-2.5 px-0 w-full text-lg text-button-blue bg-transparent border-0 border-b-2 border-button-blue appearance-none dark:text-button-blue dark:border-button-blue dark:focus:border-button-blue focus:outline-none focus:ring-0 focus:border-button-blue peer"
													placeholder=" "
													pattern="[0-9]{2}"
													title="Please enter a valid age between 0 and 100."
													required=""
													onChange={(e) =>
														setAge(
															e.target.value,
														)
													}
												/>
												<label
													for="floating_username"
													class="peer-focus:font-medium absolute text-lg text-button-blue dark:text-button-blue duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-button-blue peer-focus:dark:text-button-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
													Age
												</label>
											</div>
										</div>
										<div class="relative z-0 mb-8 w-full group mt-8">
											<div class="relative z-0 mb-6 w-full group mt-8">
												<label
													for="floating_username"
													class="peer-focus:font-medium absolute text-2xl text-button-blue dark:text-button-blue duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-button-blue peer-focus:dark:text-button-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
													Date
												</label>
											</div>
											<Space
												direction="vertical"
												style={{ width: "100%" }}>
												<DatePicker
													value={date}
													placeholder="Select Date"
													onChange={(date) =>
														setDate(date)
													}
													style={{
														background:
															"transparent",
														border: "none",
														borderBottom:
															"2px solid #265673",
														marginTop: "10px",
														width: "100%",
														color: "#265673",
													}}
												/>
											</Space>
										</div>
										<div class="relative z-0 mb-10 w-full group">
											<label
												for="floating_phone"
												class="peer-focus:font-medium absolute text-lg text-button-blue dark:text-button-blue duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-button-blue peer-focus:dark:text-button-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
												Time
											</label>
											<TimePicker
												use12Hours
												open={open}
												onOpenChange={setOpen}
												getTi
												value={time}
												onChange={handletime}
												className="w-full mt-5"
											/>
										</div>
										<div class="grid md:grid-cols-1 md:gap-6">
											<div class="relative z-0 mb-6 w-full group">
												<h3 class="mb-4 font-regular text-lg text-button-blue">
													Test Name
												</h3>
												<div className="container p-5 text-align: center w-full text-lg">
													<select
														className="custom-select"
														style={{
															borderWidth:
																"medium",
															width: "100%",
															borderColor:
																"#265673",
														}}
														value={testName}
														required=""
														onChange={(e) => {
															const selectedTest =
																e.target
																	.value;
															setTestName(
																selectedTest,
															);
														}}>
														<option value="Select the Test Name You want to do">
															Select the Test
															Name You want
															to do{" "}
														</option>
														<option value="Blood Sugar">
															Blood Sugar
														</option>
														<option value="PSA">
															PSA
														</option>
														<option value="Sputin-For-FAB">
															Sputin-For-FAB
														</option>
														<option value="Cardiac-Profile">
															Cardiac-Profile
														</option>
														<option value="ESR">
															ESR
														</option>
														<option value="GGT">
															GGT
														</option>
														<option value="Iron Study">
															Iron Study
														</option>
														<option value="Platelet Count">
															Platelet Count
														</option>
														<option value="Renai Profile">
															Renai Profile
														</option>
														<option value="Urine Routine">
															Urine Routine
														</option>
														<option value="Serum Chemistry">
															Serum Chemistry
														</option>
														<option value="HCV">
															HCV
														</option>
													</select>
													{/* {testName} */}
												</div>
											</div>
										</div>
										<div class="grid md:grid-cols-1 md:gap-6">
											<div class="relative z-0 mb-6 w-full group flex justify-center items-center">
												<button
													type="submit"
													class="text-white bg-button-blue hover:bg-button-hover-blue focus:outline-none font-medium rounded-full text-lg w-full sm:w-auto px-[234px] py-2.5 text-center dark:bg-button-blue dark:hover:bg-button-hover-blue mt-5">
													Book Now
												</button>
											</div>
										</div>
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

export default AddAppointment;
