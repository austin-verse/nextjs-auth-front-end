import Link from "next/link";
import styles from "./index.module.css";

export default function HomeComponents() {
	return (
		<div>
			<h1>홈페이지</h1>
			<Link href="/login">
				<h2>로그인</h2>
			</Link>
			<Link href="/register">
				<h2>회원가입</h2>
			</Link>
			<Link href="/profile">
				<h2>프로필</h2>
			</Link>
		</div>
	);
}
