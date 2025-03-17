interface Props {
  text: string;
  route:string;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;

}

export const StyledButton = (props:Props) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button className="hover:cursor-pointer font-bold bg-[#499ed6] py-[0.65rem] rounded-full hover:bg-[#273974] text-center mt-4 w-[10rem]"
      onClick={() => scrollToSection(props.route)}
    >
      {props.text}
    </button>
  )
}