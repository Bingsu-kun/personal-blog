const now: Date = new Date()
const currentYear: number = now.getFullYear()

const ResumeRow = (props: {
	style: string
	leftElement: JSX.Element
	rightElement: JSX.Element
}) => {
	let baseStyle: string = "flex pt-12 pb-12"
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
						<img
							className="resume-profile"
							src="https://img.notionusercontent.com/s3/prod-files-secure%2Ffb3f6454-3ba9-4f1b-851c-d4a96cd78dcc%2Ffd2a8d37-5342-4c88-a3c4-e47896153dc7%2FKakaoTalk_20230906_191130583.jpg/size/w=380?exp=1727325185&sig=zmBOoIWgVguMx3PJLjH-05yHXP3WJ86q0aK7JRsPEQU"></img>
					}></ResumeRow>

				<p className="resume-introduce">
					서울에서 {currentYear - 2022 + 1}년차 웹 백엔드 엔지니어로 일하고
					있습니다. 복잡한 비즈니스 로직을 최선의 방법으로 풀어나가는 것을
					좋아하며 누군가에게 도움이 되는 개발을 할 때 가장 큰 보람을 느낍니다.
				</p>
			</section>
		</div>
	)
}

export default Resume
