import ImgButtonComponent from "../../components/button/ImgButtonComponent";

const ProfileSNS = () => {
  const classNameStr = "w-8 h-8 shadow-xl rounded-lg m-1 block";
  return (
    <div className="flex justify-center items-center m-3">
      <ImgButtonComponent
        imgSource="/assets/github.png"
        imgLink="https://github.com/Bingsu-kun"
        classNameStr={classNameStr}
        isHover={true}
      />
      <ImgButtonComponent
        imgSource="/assets/instagram.png"
        imgLink="https://www.instagram.com/isaac._.jh/"
        classNameStr={classNameStr}
        isHover={true}
      />
      <ImgButtonComponent
        imgSource="/assets/mail.png"
        imgLink=""
        classNameStr={classNameStr}
        isHover={true}
      />
      {/* TODO - 이메일 아이콘은 클릭시 이메일 주소가 클립보드에 복사되도록 */}
    </div>
  );
};

export default ProfileSNS;
