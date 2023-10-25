function Block(props: { blockId: string }) {
  const id = "block-" + `${props.blockId}`;

  return (
    <div
      id={id}
      className="shadow-xl rounded-xl bg-[var(--dark-block-bg)] justify-center items-center border border-white border-opacity-[.08] my-10 px-10 py-5 hover:bg-[#384264]"
    >
      hello hello hello hello <br />
      hellohellohellohello
    </div>
  );
}

export default Block;
