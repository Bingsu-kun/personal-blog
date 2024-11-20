const ResumeRow = (props: {
	style: string
	leftElement: JSX.Element
	rightElement: JSX.Element
}) => {
	let baseStyle: string = "flex"
	if (props.style === "introduce") {
		baseStyle += " justify-between"
	}
	return (
		<div className={baseStyle}>
			<div className="basis-72 shrink-0 pr-4">{props.leftElement}</div>
			<div className="grow">{props.rightElement}</div>
		</div>
	)
}

const Resume = () => {
	return (
		<div className="resume-container">
			<section>
				<ResumeRow
					style="introduce"
					leftElement={
						<h1 className="resume-h1">
							안녕하세요,
							<br />
							백엔드 개발자
							<br />
							이장훈입니다
							<span className="resume-period-dot">.</span>
						</h1>
					}
					rightElement={
						<div style={{ fontSize: "4rem" }}>
							<img
								className="resume-profile"
								src="/assets/profile_round.png"></img>
						</div>
					}></ResumeRow>

				<p className="resume-introduce">
					복잡한 비즈니스 로직을 최선의 방법으로 풀어나가는 것을 좋아하며
					누군가에게 도움이 되는 개발을 할 때 가장 큰 보람을 느낍니다. MSA 환경
					에서의 웹 백엔드 애플리케이션 서버 개발 및 배포 파이프라인 구성에 대한
					업무 경험이 있습니다.
				</p>
			</section>
			<section>
				<p className="resume-h3">
					Tech Stacks
					<span className="resume-period-dot">.</span>
				</p>
				<p className="resume-h4">Main</p>
				<p className="resume-bold">
					#Java #Python #SpringBoot #FastAPI #Django #GraphQL #PostgreSQL
					#MongoDB
				</p>
				<p className="resume-bold">
					#AWS #Docker #Kubernetes #Keycloak #GithubActions
				</p>
				<p className="resume-h4">Sub</p>
				<p className="resume-bold">#JavaScript #TypeScript #React #Vue.js</p>
			</section>
			<section>
				<p className="resume-h3">
					Careers
					<span className="resume-period-dot">.</span>
				</p>
				<p className="resume-h4">스마트스코어 — Web Backend Engineer</p>
				<p>플랫폼사업 2 팀 (온/오프라인 레슨)</p>
				<p>2023 년 11 월 – 2024 년 9 월</p>
				<br />
				<p className="resume-bold">
					스마트프로 (프로 전용 레슨 관리 시스템) 백엔드 개발
				</p>
				<p>2024 년 2 월 - 2024 년 9 월</p>
				<p>
					서비스 링크 <a href="https://pro.pocketlesson.com/">[링크]</a>
				</p>
				<br />
				<p>
					골프 프로의 오프라인 레슨을 생성하고, 레슨을 받고싶어 하는 유저의 예약
					및 출석을 관리하기 위한 플랫폼의 서버 개발
				</p>
				<br />
				<ul>
					<li>
						- 기존 플랫폼 (포켓레슨) 이용 유저들의 데이터를 연동하여 인증/인가
						기능 구현
					</li>
					<li>
						- 오프라인 레슨 관리 및 예약을 위한 데이터베이스 설계 및 데이터 연동
						로직 구현
					</li>
					<li>
						- 팀 내 데이터 공유 및 조작을 위한 임시 백오피스 개발하여 업무
						편의성 향상
					</li>
					<li>
						- 유저들과 프로들에게 예약 완료, 레슨 리마인드 등의 안내를 위한
						알림톡 구현을 통해 유저 편의성 향상
					</li>
				</ul>
				<br />
				<p className="resume-bold">
					포켓레슨 (온/오프라인 골프 레슨 플랫폼) 백엔드 개발
				</p>
				<p>2023 년 11 월 - 2024 년 1 월</p>
				<p>
					서비스 링크 <a href="https://pocketlesson.com/home">[링크]</a>
				</p>
				<br />
				<p>유저의 골프 레슨 신청을 위한 플랫폼 서버 개발</p>
				<br />
				<ul>
					<li>
						- 유저에게 구체적인 레슨 선택 경험 제공을 위해 고민태그 구현하여
						편의성 향상
					</li>
					<li>
						- 유저 피드백을 반영하여 클럽 추천 레슨 구현을 통한 유저 접근 다양성
						향상
					</li>
					<li>- 프로 후원 서비스 데이터베이스 설계 및 기능 개발</li>
				</ul>
				<br />
				<p className="resume-h4">잉클 — Web Backend Engineer</p>
				<p>클라우드팀, 솔루션팀</p>
				<p>2022 년 5 월 - 2023 년 7 월</p>
				<p>
					서비스 참고 링크 <a href="https://docs.nazare.cloud/">[링크]</a>
				</p>
			</section>
		</div>
	)
}

export default Resume
