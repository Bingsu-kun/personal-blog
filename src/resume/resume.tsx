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
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "flex-end",
								fontSize: "4rem",
								margin: "0.6em 0",
							}}>
							<img
								className="resume-profile"
								style={{ width: "100px", height: "100px", margin: 0 }}
								src="/assets/profile_round.png"
								alt="profile-image"
							/>
							<p className="resume-h4">
								Contact<span className="resume-period-dot">.</span>
							</p>
							<p style={{ fontSize: "1rem" }}>E-mail : icetime963@gmail.com</p>
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
				<p className="resume-h2">
					Tech Stacks
					<span className="resume-period-dot">.</span>
				</p>
				<p className="resume-h3 orange-text">Main</p>
				<p className="resume-h4">
					#Java #Python #SpringBoot #FastAPI #Django #GraphQL #PostgreSQL
					#MongoDB
				</p>
				<p className="resume-h4">
					#AWS #Docker #Kubernetes #Keycloak #GithubActions
				</p>
				<p className="resume-h3 orange-text">Sub</p>
				<p className="resume-h4">#JavaScript #TypeScript #React #Vue.js</p>
			</section>
			<section>
				<p className="resume-h2">
					Careers
					<span className="resume-period-dot">.</span>
				</p>
				<p className="resume-h3">스마트스코어 — Web Backend Engineer</p>
				<p>플랫폼사업 2 팀 (온/오프라인 레슨)</p>
				<p>2023 년 11 월 – 2024 년 9 월</p>
				<br />
				<p className="resume-h4">
					스마트프로 (프로 전용 레슨 관리 시스템) 백엔드 개발
				</p>
				<p>2024 년 2 월 - 2024 년 9 월</p>
				<p>
					서비스 링크{" "}
					<a className="orange-text" href="https://pro.pocketlesson.com/">
						[링크]
					</a>
				</p>
				<br />
				<p>
					골프 프로의 오프라인 레슨을 생성하고, 레슨을 받고싶어 하는 유저의 예약
					및 출석을 관리하기 위한 플랫폼의 서버 개발
				</p>
				<br />
				<ul>
					<li>
						- 기존 플랫폼 (포켓레슨) 이용 유저들의 데이터를 연동하여{" "}
						<span className="orange-text">인증/인가 기능 구현</span>
					</li>
					<li>
						- 오프라인 레슨 관리 및 예약을 위한{" "}
						<span className="orange-text">
							데이터베이스 설계 및 데이터 연동
						</span>
						로직 구현
					</li>
					<li>
						- 팀 내 데이터 공유 및 조작을 위한{" "}
						<span className="orange-text">
							임시 백오피스 개발하여 업무 편의성 향상
						</span>
					</li>
					<li>
						- 유저들과 프로들에게 예약 완료, 레슨 리마인드 등의 안내를 위한{" "}
						<span className="orange-text">
							알림톡 구현을 통해 유저 편의성 향상
						</span>
					</li>
				</ul>
				<br />
				<p className="resume-h4">
					포켓레슨 (온/오프라인 골프 레슨 플랫폼) 백엔드 개발
				</p>
				<p>2023 년 11 월 - 2024 년 1 월</p>
				<p>
					서비스 링크{" "}
					<a className="orange-text" href="https://pocketlesson.com/home">
						[링크]
					</a>
				</p>
				<br />
				<p>유저의 골프 레슨 신청을 위한 플랫폼 서버 개발</p>
				<br />
				<ul>
					<li>
						- 유저에게 구체적인 레슨 선택 경험 제공을 위해{" "}
						<span className="orange-text">고민태그 구현하여 편의성 향상</span>
					</li>
					<li>
						- 유저 피드백을 반영하여{" "}
						<span className="orange-text">
							클럽 추천 레슨 구현을 통한 유저 접근 다양성 향상
						</span>
					</li>
					<li>- 프로 후원 서비스 데이터베이스 설계 및 기능 개발</li>
				</ul>
				<br />
				<p className="resume-h3">잉클 — Web Backend Engineer</p>
				<p>클라우드팀, 솔루션팀</p>
				<p>2022 년 5 월 - 2023 년 7 월</p>
				<p>
					서비스 참고 링크{" "}
					<a className="orange-text" href="https://docs.nazare.cloud/">
						[링크]
					</a>
				</p>
				<br />
				<p className="resume-h4">
					데이터 트랜스퍼(Data Transfer) 백엔드 서버 개발
				</p>
				<br />
				<p>
					MongoDB 및 DataLake 에 저장된 Raw Data 를 정제하여 FE 및 애널라이즈용
					DB 로 보내주는 Data Transfer 웹 백엔드 서버 구축 및 유지 보수
				</p>
				<br />
				<ul>
					<li>- RawData 정제 로직 및 API 구현</li>
					<li>
						- 사내에서 사용하던 두 가지 종류의 DB(DynamoDB, MongoDB) 접근
						라이브러리를 통합하여{" "}
						<span className="orange-text">
							사내 라이브러리 개발을 통해 개발 효율 향상
						</span>
					</li>
					<li>
						- Keycloak 이용한{" "}
						<span className="orange-text">어드민 Authentication 서버 구현</span>
					</li>
					<li>
						- 정제 데이터 저장을 위한{" "}
						<span className="orange-text">
							AWS DocumentDB 클러스터 구축 및 유지보수
						</span>
					</li>
				</ul>
				<br />
				<p className="resume-h4">
					실시간 데이터 서비스 플랫폼 백엔드 서버 개발
				</p>
				<br />
				<p>
					실시간 데이터 대시보드와 설비 현황 및 예지보전 서비스 플랫폼의 백엔드
					GraphQL 서버 개발 및 프론트엔드 백엔드 배포 자동화
				</p>
				<br />
				<ul>
					<li>- AWS AppSync 기반 기존 플랫폼 유지보수</li>
					<li>
						- 기존 플랫폼을{" "}
						<span className="orange-text">
							Apollo GraphQL Sever 로 마이그레이션하여 서버 비용 절감
						</span>{" "}
						및 프라이빗 환경 대비
					</li>
					<li>
						- Kubernetes 및 EKS 기반의 MSA 환경에서 프론트엔드 및 백엔드 DT
						애플리케이션 서버{" "}
						<span className="orange-text">
							프로비저닝 및 컨테이너화 CI/CD 구축
						</span>
					</li>
				</ul>
			</section>
			<section>
				<p className="resume-h2">
					Side Projects
					<span className="resume-period-dot">.</span>
				</p>
				<p className="resume-h3">FlarePoint</p>
				<p>2021 년 7 월 ~ 2021 년 11 월</p>
				<p>풀스택, 1인 프로젝트</p>
				<p>
					회고 글 링크{" "}
					<a
						className="orange-text"
						href="https://velog.io/@bingsu_kun/%ED%86%A0%EC%9D%B4-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-FlarePoint-%EB%A7%88%EC%BB%A4-%EA%B3%B5%EC%9C%A0-%EC%A7%80%EB%8F%84">
						[링크]
					</a>
				</p>
				<br />
				<p>
					코로나 팬데믹으로 인해 많은 사람들이 모이지 않는 레저 (캠핑, 낚시 등)
					가 인기가 많아짐에 따라 사람들에게 잘 알려지지 않은 좋은 장소를 마커로
					공유하는 플랫폼 입니다.
				</p>
				<p>#SpringBoot #Java #PostgreSQL</p>
				<p>#Vue.js #JavaScript</p>
				<br />
				<p className="resume-h3">익명부엉이</p>
				<p>2022 년 1 월 ~ 2022 년 3 월</p>
				<p>백엔드, 2인 프로젝트</p>
				<p>
					회고 글 링크{" "}
					<a
						className="orange-text"
						href="https://velog.io/@bingsu_kun/%ED%86%A0%EC%9D%B4-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%9D%B5%EB%AA%85-%EB%B6%80%EC%97%89%EC%9D%B4-Slack-%EC%9D%B5%EB%AA%85-%EC%A7%88%EB%AC%B8%EB%8B%B5%EA%B8%80-%EB%B4%87">
						[링크]
					</a>
				</p>
				<br />
				<p>
					스터디를 진행할 때 질문에 대한 압박감을 줄이고 소통의 허들을 낮추고자
					제작한 슬랙 봇 프로젝트 입니다.
				</p>
				<p>#Bolt #Node.js #Express.js #JavaScript #Google SpreadSheet</p>
			</section>
		</div>
	)
}

export default Resume
