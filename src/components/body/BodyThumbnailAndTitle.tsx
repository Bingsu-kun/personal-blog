function BodyThumbnailAndTitle() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center shadow-xl rounded-xl w-full h-20 bg-[url(assets/image-placeholder.png)] bg-cover">
        <p>임시용</p>
      </div>
    </div>
  );
}
// TODO - image background height 수정 필요 (어떻게 이미지를 전부 띄울 것인지)
export default BodyThumbnailAndTitle;
