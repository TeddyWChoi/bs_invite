import imgImage52 from "./35b3456b06c43ab3a05be837d0b3be4ea11d5a89.png";
import imgImage53 from "./ba31e94acd04fd990c9d778a70445a88dda48bf1.png";

function ListItem() {
  return (
    <div className="h-[21.125px] relative shrink-0 w-full" data-name="List Item">
      <ul className="absolute block font-['Rajdhani:Regular',sans-serif] leading-[0] left-[calc(50%-276.5px)] list-disc not-italic text-[#feb] text-[16px] top-0 whitespace-nowrap">
        <li className="mb-0 ms-[24px]">
          <span className="leading-[21.125px]">The event entry will be completed once the invited user logs into Papaya Play.</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[21.125px]">Only one code can be entered per account.</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[21.125px]">Rewards are sent to your Mailbox in-game, and it must be claimed within 14 days.</span>
        </li>
        <li className="ms-[24px]">
          <span className="leading-[21.125px]">You can claim up to 5 rewards.</span>
        </li>
      </ul>
    </div>
  );
}

function List() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[10px] items-center left-1/2 pl-[20px] top-[323px] w-[543px]" data-name="List">
      <p className="font-['Barlow_Condensed:Bold',sans-serif] leading-[25.5px] not-italic relative shrink-0 text-[#ffe38c] text-[20px] tracking-[1.7px] whitespace-nowrap">IMPORTANT NOTICES</p>
      <ListItem />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="-translate-x-1/2 absolute h-[502px] left-1/2 top-0 w-[925px]" data-name="image 52">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage52} />
      </div>
      <div className="absolute h-[166px] left-[381px] top-[138px] w-[171px]" data-name="image 53">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage53} />
      </div>
      <List />
    </div>
  );
}