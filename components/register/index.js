import axios from "axios";
import styles from "./index.module.css";
import { useRef } from "react";

export default function RegisterComponents() {
	// 사용자 회원가입 기입 요소 ref
	const emailRef = useRef();
	const passwordRef = useRef();
	const nameRef = useRef();

	// 회원가입 function
	const createUser = async () => {
		// axios post
		try {
			let response = await axios.post(
				"http://localhost:4000/api/v1/users/register",
				{
					email: emailRef.current.value,
					password: passwordRef.current.value,
					name: nameRef.current.value,
				}
			);
			// 성공시
			console.log("성공");
			console.log(response);
			// 에러 발생 시
		} catch (error) {
			console.log(error.response.status);
			// 422에러 발생 시
			if (error.response.status == 422) {
				console.log("422에러");
			}
		}
	};
	return (
		<div>
			<h1>회원가입 페이지</h1>
			<form className={styles.form}>
				<label htmlFor="email">이메일</label>
				<input id="email" ref={emailRef} />
				<label htmlFor="password">비밀번호</label>
				<input id="password" ref={passwordRef} />
				<label htmlFor="name">이름</label>
				<input id="name" ref={nameRef} />
				<button type="button" onClick={createUser}>
					제출하기
				</button>
			</form>
		</div>
	);
}
