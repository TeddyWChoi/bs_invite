import img from "./2aef9289bee67ee51d1cb74183137ac69f36dba3.png";
import imgImage63 from "./de81b511ec9e9e0e2da8accd339431e97d69cc8b.png";
import imgImage62 from "./e53b492f68ed030872165e00222ef48f3b4fc050.png";
import imgContainer from "./d33974090fe1751534fdab9f01d6b5a84148abd4.png";
import imgContainer1 from "./f9ca7638e17d7946998f16ef242aa359e4090e8a.png";
import imgContainer2 from "./b07ea32961bb161cf5abfdf5f067dcad9104a6d5.png";
import imgContainer3 from "./0820d3a74633d98c7d7cb12de24ba44602ca3ab9.png";
import imgImage52 from "./35b3456b06c43ab3a05be837d0b3be4ea11d5a89.png";
import imgImage58 from "./f77528cb2a918de00c91b3f6c858144ac6e34caa.png";
import imgImage59 from "./1387058ae926dcf0cc66e783dc54ae1d34c44605.png";
import imgImage53 from "./ba31e94acd04fd990c9d778a70445a88dda48bf1.png";

function Container() {
  return <div className="absolute blur-[100px] left-[172.89px] rounded-[33554400px] size-[256px] top-[80px]" data-name="Container" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 256 256\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -18.102 -18.102 0 128 128)\\'><stop stop-color=\\'rgba(230,120,20,0.25)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(115,60,10,0.125)\\' offset=\\'0.35\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>')" }} />;
}

function Container1() {
  return <div className="border-6 border-[#5a1c1c] border-dashed opacity-20 rounded-[33554400px] size-[128px]" data-name="Container" />;
}

function Label() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Rajdhani:Bold',sans-serif] leading-[20px] left-0 not-italic text-[#6c5a4b] text-[14px] top-0 tracking-[1.4px] whitespace-nowrap">Invitation Code</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-[#d3cbc0] h-[58px] relative shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[20px] py-[12px] relative size-full">
          <p className="font-['Rajdhani:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(26,12,0,0.5)] tracking-[1.6px] whitespace-nowrap">Enter your invitation code</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#4a3525] border-b-2 border-dashed inset-0 pointer-events-none" />
    </div>
  );
}

function Container5() {
  return (
    <div className="flex-[499.344_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative w-full">
        <Label />
        <TextInput />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#2b1c11] h-[59px] relative shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 w-[194.656px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Barlow_Condensed:Bold',sans-serif] leading-[27px] left-[97.5px] not-italic text-[#f0e8d0] text-[18px] text-center top-[15px] tracking-[1.8px] uppercase whitespace-nowrap">Confirm</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex gap-[24px] h-[94px] items-end left-0 top-[126px] w-[786px]" data-name="Container">
      <Container5 />
      <Button />
    </div>
  );
}

function Container6() {
  return <div className="absolute bg-[#8b1c1c] h-[1.987px] left-0 top-[8px] w-[19.985px]" data-name="Container" />;
}

function Text() {
  return (
    <div className="absolute h-[17.998px] left-[27.98px] top-0 w-[125.731px]" data-name="Text">
      <p className="absolute font-['Rajdhani:Regular',sans-serif] leading-[18px] left-[calc(50%-61.85px)] not-italic text-[#8b1c1c] text-[12px] top-[-0.99px] tracking-[3.6px] uppercase whitespace-nowrap">Invited Player</p>
    </div>
  );
}

function Container7() {
  return <div className="absolute bg-[#8b1c1c] h-[1.987px] left-[161.71px] top-[8px] w-[19.985px]" data-name="Container" />;
}

function SectionBadge() {
  return (
    <div className="-translate-x-1/2 absolute h-[17.998px] left-[calc(50%-0.15px)] top-[16.08px] w-[181.695px]" data-name="SectionBadge">
      <Container6 />
      <Text />
      <Container7 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[251.953px] left-0 top-0 w-[786px]" data-name="Heading 2">
      <Container4 />
      <SectionBadge />
      <p className="absolute font-['Black_Ops_One:Regular',sans-serif] leading-[52px] left-[calc(50%-225px)] not-italic text-[#2b1c11] text-[52px] top-[39px] tracking-[1.56px] uppercase whitespace-nowrap">Welcome Back</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[274px] left-[24px] top-[64px] w-[787px]" data-name="Container">
      <Heading1 />
      <p className="absolute font-['Barlow:Regular','Noto_Sans:Regular',sans-serif] leading-[0] left-[calc(50%-121.5px)] not-italic text-[13px] text-[rgba(58,32,0,0.55)] top-[242px] whitespace-nowrap">
        <span className="leading-[19.5px]">{`※ Don't have a code? `}</span>
        <span className="[text-decoration-skip-ink:none] decoration-solid leading-[19.5px] text-[#3e2200] underline">Click HERE</span>
        <span className="leading-[19.5px]">{` for details.`}</span>
      </p>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[385px] left-[25px] top-[348px] w-[786px]" data-name="Container">
      <div className="absolute font-['Barlow:Regular',sans-serif] leading-[0] left-[calc(50%-359px)] not-italic text-[#3e2200] text-[17px] top-[420px] w-[718px]">
        <p className="leading-[27.625px] mb-0">* Paste or enter your invitation code, then click the Confirm button.</p>
        <p className="leading-[27.625px]">* Log in to Papaya Play and enter your invitation code to receive rewards for you and your friend!</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="-translate-x-1/2 absolute h-[381px] left-[calc(50%+0.5px)] pointer-events-none top-[362px] w-[786px]" data-name="Container">
      <div className="absolute inset-0 overflow-hidden">
        <img alt="" className="absolute h-[109.19%] left-0 max-w-none top-[0.05%] w-full" src={imgContainer2} />
      </div>
      <div aria-hidden="true" className="absolute border-3 border-[rgba(79,79,79,0.5)] border-solid inset-0" />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.3)] h-[886px] left-[32px] top-[33px] w-[835px]">
      <div aria-hidden="true" className="absolute border-7 border-[#660a0a] border-solid inset-[-7px] pointer-events-none" />
      <Container3 />
      <Container8 />
      <Container9 />
    </div>
  );
}

function Label1() {
  return (
    <div className="absolute h-[20px] left-0 right-0 top-0" data-name="Label">
      <p className="absolute font-['Rajdhani:Bold',sans-serif] leading-[20px] left-0 not-italic text-[#6c5a4b] text-[14px] top-0 tracking-[1.4px] whitespace-nowrap">My Invitation Code</p>
    </div>
  );
}

function TextInput1() {
  return (
    <div className="absolute bg-[#d4ccc1] h-[58px] left-0 right-0 top-[35px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip px-[20px] py-[12px] relative rounded-[inherit] size-full">
        <p className="font-['Rajdhani:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[30px] text-[rgba(160,144,125,0.5)] tracking-[3px] uppercase whitespace-nowrap">--- --- ---</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#4a3525] border-b-2 border-dashed inset-0 pointer-events-none" />
    </div>
  );
}

function Container12() {
  return (
    <div className="flex-[499.344_0_0] h-[94px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Label1 />
        <TextInput1 />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#2b1c11] h-[59px] relative shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 w-[194.656px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Barlow_Condensed:Bold',sans-serif] leading-[27px] left-[97.5px] not-italic text-[#f0e8d0] text-[18px] text-center top-[15px] tracking-[1.8px] uppercase whitespace-nowrap">Generate</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex gap-[24px] h-[94px] items-end left-0 top-[126px] w-[786px]" data-name="Container">
      <Container12 />
      <Button1 />
    </div>
  );
}

function Container13() {
  return <div className="absolute bg-[#8b1c1c] h-[1.987px] left-0 top-[8px] w-[19.985px]" data-name="Container" />;
}

function Text1() {
  return (
    <div className="absolute h-[17.998px] left-[27.98px] top-0 w-[125.731px]" data-name="Text">
      <p className="absolute font-['Rajdhani:Regular',sans-serif] leading-[18px] left-[calc(50%-64.85px)] not-italic text-[#8b1c1c] text-[12px] top-[-0.99px] tracking-[3.6px] uppercase whitespace-nowrap">Inviting Player</p>
    </div>
  );
}

function Container14() {
  return <div className="absolute bg-[#8b1c1c] h-[1.987px] left-[161.71px] top-[8px] w-[19.985px]" data-name="Container" />;
}

function SectionBadge1() {
  return (
    <div className="-translate-x-1/2 absolute h-[17.998px] left-[calc(50%-0.15px)] top-0 w-[181.695px]" data-name="SectionBadge">
      <Container13 />
      <Text1 />
      <Container14 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute h-[251.953px] left-0 top-0 w-[786px]" data-name="Heading 2">
      <Container11 />
      <SectionBadge1 />
      <p className="absolute font-['Black_Ops_One:Regular',sans-serif] leading-[52px] left-[calc(50%-225px)] not-italic text-[#2b1c11] text-[52px] top-[22.92px] tracking-[1.56px] uppercase whitespace-nowrap">{` My Invitation`}</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute h-[274px] left-[25px] top-[64px] w-[786px]" data-name="Container">
      <Heading2 />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[20px] relative w-[77px]" data-name="Text">
      <div className="-translate-x-1/2 absolute flex h-[36.574px] items-center justify-center left-[38.47px] top-[-7.98px] w-[70.848px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="flex-none rotate-[-14.67deg]">
          <p className="font-['Barlow_Condensed:Bold',sans-serif] leading-[20px] not-italic relative text-[#8b1c1c] text-[14px] text-center tracking-[0.8px] whitespace-nowrap">TOP SECRET</p>
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return <div className="absolute border-2 border-[#8b1c1c] border-solid left-[4px] rounded-[33554400px] size-[80.904px] top-[4px]" data-name="Container" />;
}

function Stamp() {
  return (
    <div className="border-4 border-[#8b1c1c] border-dashed relative rounded-[33554400px] size-[96px]" data-name="Stamp">
      <div className="absolute flex h-[20.437px] items-center justify-center left-[5.44px] top-[33.78px] w-[77.112px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.33deg]">
          <Text2 />
        </div>
      </div>
      <Container16 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute left-[711px] opacity-80 size-[96px] top-[24px]" data-name="Container">
      <div className="absolute flex items-center justify-center left-[-0.54px] size-[97.085px] top-[-0.54px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="flex-none rotate-[-0.65deg]">
          <Stamp />
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[#615247] h-[40.619px] left-0 shadow-[0px_6.885px_10.327px_0px_rgba(0,0,0,0.1),0px_2.754px_4.131px_0px_rgba(0,0,0,0.1)] top-0 w-[134.013px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Barlow_Condensed:Bold',sans-serif] leading-[18.588px] left-[67.37px] not-italic text-[#f0e8d0] text-[12.392px] text-center top-[10.33px] tracking-[1.2392px] uppercase whitespace-nowrap">Copy Code</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[#615247] h-[40.619px] left-[147.33px] shadow-[0px_6.885px_10.327px_0px_rgba(0,0,0,0.1),0px_2.754px_4.131px_0px_rgba(0,0,0,0.1)] top-0 w-[134.013px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Barlow_Condensed:Bold',sans-serif] leading-[18.588px] left-[67.31px] not-italic text-[#f0e8d0] text-[12.392px] text-center top-[10.33px] tracking-[1.2392px] uppercase whitespace-nowrap">Copy URL</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="-translate-x-1/2 absolute h-[40.619px] left-[calc(50%-252.33px)] top-[8px] w-[281.344px]">
      <Button2 />
      <Button3 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[15.001px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Rajdhani:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#3e2200] text-[10px] top-[0.01px] tracking-[2px] whitespace-nowrap">Number of Referrals</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[41.989px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Rajdhani:Bold',sans-serif] leading-[42px] left-0 not-italic text-[#1a0c00] text-[28px] top-[-5.97px] whitespace-nowrap">5</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[58.977px] relative shrink-0 w-[112.796px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[1.987px] items-start relative size-full">
        <Paragraph />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[rgba(70,35,0,0.15)] h-[36.011px] relative shrink-0 w-[91.502px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.01px] border-[rgba(110,75,10,0.75)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Rajdhani:Bold',sans-serif] leading-[18px] left-[46.49px] not-italic text-[#3a2000] text-[12px] text-center top-[8.02px] tracking-[1.44px] whitespace-nowrap">DETAILS</p>
      </div>
    </div>
  );
}

function MyInvitationSection() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex h-[59px] items-center justify-between left-[calc(50%+262px)] top-0 w-[262px]" data-name="MyInvitationSection">
      <Container17 />
      <Button4 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute h-[59px] left-[25px] top-[306px] w-[786px]">
      <Frame2 />
      <MyInvitationSection />
    </div>
  );
}

function Container18() {
  return (
    <div className="-translate-x-1/2 absolute h-[381px] left-[calc(50%+0.5px)] pointer-events-none top-[412px] w-[786px]" data-name="Container">
      <div className="absolute inset-0 overflow-hidden">
        <img alt="" className="absolute h-[118.77%] left-0 max-w-none top-[-4.56%] w-full" src={imgContainer3} />
      </div>
      <div aria-hidden="true" className="absolute border-3 border-[rgba(79,79,79,0.5)] border-solid inset-0" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.3)] h-[991px] left-[32px] top-[951px] w-[835px]">
      <div aria-hidden="true" className="absolute border-7 border-[#660a0a] border-solid inset-[-7px] pointer-events-none" />
      <Container10 />
      <Container15 />
      <Frame3 />
      <Container18 />
      <div className="absolute font-['Barlow:Regular',sans-serif] leading-[0] left-[calc(50%-376.5px)] not-italic text-[#3e2200] text-[17px] top-[825px] w-[754px]">
        <p className="leading-[27.625px] mb-0">* Copy the invitation code or URL and share it with someone you’d like to play with.</p>
        <p className="leading-[27.625px]">* If the invited user enters the code or logs in to Papaya Play through the shared URL to play BlackShot, both players will receive rewards above.</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[20px] relative w-[77px]" data-name="Text">
      <div className="-translate-x-1/2 absolute flex h-[36.574px] items-center justify-center left-[38.47px] top-[-7.98px] w-[70.848px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="flex-none rotate-[-14.67deg]">
          <p className="font-['Barlow_Condensed:Bold',sans-serif] leading-[20px] not-italic relative text-[#8b1c1c] text-[14px] text-center tracking-[0.8px] whitespace-nowrap">TOP SECRET</p>
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return <div className="absolute border-2 border-[#8b1c1c] border-solid left-[4px] rounded-[33554400px] size-[80.904px] top-[4px]" data-name="Container" />;
}

function Stamp1() {
  return (
    <div className="border-4 border-[#8b1c1c] border-dashed relative rounded-[33554400px] size-[96px]" data-name="Stamp">
      <div className="absolute flex h-[20.437px] items-center justify-center left-[5.44px] top-[33.78px] w-[77.112px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.33deg]">
          <Text3 />
        </div>
      </div>
      <Container20 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute left-[743px] opacity-80 size-[96px] top-[57px]" data-name="Container">
      <div className="absolute flex items-center justify-center left-[-0.54px] size-[97.085px] top-[-0.54px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="flex-none rotate-[-0.65deg]">
          <Stamp1 />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[2093px] left-[510px] top-[473px] w-[900px]" data-name="Container">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#f4ebd8] inset-0" />
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[7.27%] left-0 max-w-none top-[-0.36%] w-[16.67%]" src={imgContainer} />
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[117.37%] left-[-36.56%] max-w-none top-[-8.68%] w-[173.11%]" src={imgContainer1} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(139,69,19,0.3)] border-solid inset-0 pointer-events-none shadow-[0px_20px_50px_0px_rgba(0,0,0,0.9)]" />
      <Frame />
      <Frame1 />
      <Container19 />
      <div className="-translate-x-1/2 absolute h-[441px] left-[calc(50%+0.5px)] top-[1872px] w-[925px]" data-name="image 52">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage52} />
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_80px_0px_rgba(100,50,0,0.1)]" />
    </div>
  );
}

function Paragraph2() {
  return <div className="absolute h-[32.998px] left-[704px] top-[19px] w-[247.202px]" data-name="Paragraph" />;
}

function Heading() {
  return (
    <div className="absolute h-[180px] left-[16px] right-[16px] shadow-[0px_25px_50px_0px_rgba(0,0,0,0.15)] top-[-47px]" data-name="Heading 1">
      <Paragraph2 />
      <p className="-translate-x-1/2 absolute font-['Barlow_Condensed:SemiBold',sans-serif] leading-[33px] left-1/2 not-italic text-[22px] text-[rgba(201,160,32,0.65)] text-center top-[74px] tracking-[4.4px] uppercase whitespace-nowrap">Back to BlackShot?</p>
      <div className="-translate-x-1/2 absolute h-[65px] left-[calc(50%+0.5px)] shadow-[0px_0px_14px_0px_black] top-[122px] w-[552px]" data-name="image 58">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage58} />
      </div>
    </div>
  );
}

function Paragraph3() {
  return <div className="absolute h-[30px] left-[16px] right-[16px] shadow-[0px_3px_6px_0px_rgba(0,0,0,0.12)] top-[256px]" data-name="Paragraph" />;
}

function Container21() {
  return (
    <div className="-translate-x-1/2 absolute h-[239px] left-[calc(50%-0.5px)] top-[82px] w-[1729px]" data-name="Container">
      <Heading />
      <div className="-translate-x-1/2 absolute h-[44px] left-1/2 top-[174px] w-[313px]" data-name="image 59">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage59} />
      </div>
      <p className="-translate-x-1/2 absolute font-['Rajdhani:Bold',sans-serif] leading-[21px] left-[865px] not-italic text-[#2b1c11] text-[14px] text-center top-[185px] tracking-[2.8px] whitespace-nowrap">Apr. 30. 2026 — May. 15. 2026</p>
      <Paragraph3 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="relative size-full" data-name="블랙샷 초대 이벤트 마이크로사이트 디자인">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1920 2898\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -244.75 -299.49 0 960 579.6)\\'><stop stop-color=\\'rgba(43,24,13,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(28,16,9,1)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(13,7,4,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} />
        <img alt="" className="absolute max-w-none object-cover size-full" src={img} />
      </div>
      <div className="absolute h-[1273px] left-[-116px] top-[388px] w-[911px]" data-name="image 63">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-33.59%] max-w-none top-0 w-[177.17%]" src={imgImage63} />
        </div>
      </div>
      <div className="absolute h-[1232px] left-[1450px] top-[1368px] w-[488px]" data-name="image 62">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage62} />
      </div>
      <Container />
      <div className="absolute flex items-center justify-center left-[238.29px] size-[170.103px] top-[138.95px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-25 flex-none">
          <Container1 />
        </div>
      </div>
      <Container2 />
      <Container21 />
      <div className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold h-[101px] leading-[0] left-[calc(50%+0.5px)] not-italic text-[#898989] text-[0px] text-center top-[334px] w-[901px] whitespace-pre-wrap">
        <p className="mb-0 text-[16px]">
          <span className="leading-[1.02]">{`Calling all players who have not logged in to Papaya Play from `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[1.02] not-italic text-[#c9a020]">{`Jan. 28, 2026 `}</span>
          <span className="leading-[1.02]">to</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[1.02] not-italic text-[#c9a020]">{` Apr. 29, 2026!`}</span>
        </p>
        <p className="leading-[1.02] mb-0 text-[16px]">&nbsp;</p>
        <p className="leading-[1.02] mb-0 text-[16px]">{`You are eligible for special rewards! This promotion includes new players as well. `}</p>
        <p className="leading-[1.02] mb-0 text-[16px]">&nbsp;</p>
        <p className="mb-0 text-[16px]">
          <span className="leading-[1.02]">{`if your friend logs into the game `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[1.02] not-italic text-[#c9a020]">using your invitation code</span>
          <span className="leading-[1.02]">{`, both `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[1.02] not-italic text-[#c9a020]">you and your friend</span>
          <span className="leading-[1.02]">{` will receive `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[1.02] not-italic text-[#c9a020]">special rewards!</span>
        </p>
        <p className="leading-[1.02] mb-0 text-[16px]">&nbsp;</p>
        <p className="leading-[1.02] text-[16px]">&nbsp;</p>
      </div>
      <div className="absolute h-[166px] left-[879px] top-[2456px] w-[171px]" data-name="image 53">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage53} />
      </div>
    </div>
  );
}