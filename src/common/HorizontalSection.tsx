//TODO: This common is not used anywhere and have table estructure. Check it and delete because to Seba doesnt like tables.

interface HorizontalSectionProps {
  firstItem: JSX.Element;
  secondItem: JSX.Element;
  thirdItem: JSX.Element;
  fourthItem: JSX.Element;
  fifthItem: JSX.Element;
  sixthItem: JSX.Element;
  className: JSX.Element;
  icon:  JSX.Element;
}

export default function HorizontalSection({
  firstItem,
  secondItem,
  thirdItem,
  fourthItem,
  fifthItem,
  sixthItem,
  className,
  icon,
} : HorizontalSectionProps) {
  return (
    <table className="h-[48px] pl-84 pt-[12px] pb-[12px] py-2 flex items-center space-x-4 border-b border-gray w-full bg-light-grey border border-gray">
      {firstItem && (
        <tr className="border-r border-gray flex-grow flex justify-center">
          <td className="font-inter font-semibold">{firstItem}</td>
        </tr>
      )}

      {secondItem && (
        <tr className="border-r border-gray flex-grow flex items-center justify-between pr-[20px]">
          <td className="font-inter font-semibold">{secondItem}</td>
          {icon}
        </tr>
      )}

      {thirdItem && (
        <tr className="border-r border-gray flex-grow flex items-center justify-between pr-[20px]">
          <td className="font-inter font-semibold">{thirdItem}</td>
          {icon}
        </tr>
      )}

      {fourthItem && (
        <tr className="border-r border-gray flex-grow font-semibold">
          <td className="font-inter">{fourthItem}</td>
        </tr>
      )}

      {fifthItem && (
        <tr className="border-r border-gray flex-grow font-semibold">
          <td className="font-inter">{fifthItem}</td>
        </tr>
      )}

      {sixthItem && (
        <tr className="border-r border-gray flex-grow font-semibold">
          <td className="font-inter">{sixthItem}</td>
        </tr>
      )}
    </table>
  );
}
