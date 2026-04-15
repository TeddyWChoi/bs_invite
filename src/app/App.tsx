import React, { useState, useEffect } from 'react';

// ─── Image Imports (barrel file — avoids Korean path encoding issues) ─────────
import {
  imgBg,
  imgCharLeft,
  imgCharRight,
  imgPaperTopLeft,
  imgPaperBg,
  imgRewardWelcome,
  imgRewardInvitation,
  imgEnvelopeFlap,
  imgReferralTitle,
  imgDateBadge,
  imgDecorBullets,
} from '../imports/bs_invite_event';

import { DetailsPopup } from './components/DetailsPopup';

// ─── Window Width Hook ────────────────────────────────────────────────────────
function useWindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 900
  );
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return width;
}

// ─── Section Badge ────────────────────────────────────────────────────────────
function SectionBadge({ text }: { text: string }) {
  return (
    <div className="flex items-center justify-center gap-0" style={{ height: 18 }}>
      <div style={{ width: 20, height: 2, background: '#8b1c1c', flexShrink: 0 }} />
      <p
        className="px-[8px] text-[#8b1c1c] text-[12px] uppercase whitespace-nowrap"
        style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: '3.6px', lineHeight: '18px' }}
      >
        {text}
      </p>
      <div style={{ width: 20, height: 2, background: '#8b1c1c', flexShrink: 0 }} />
    </div>
  );
}

// ─── TOP SECRET Stamp ─────────────────────────────────────────────────────────
function TopSecretStamp({ size = 96 }: { size?: number }) {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        border: `${size < 70 ? 3 : 4}px dashed #8b1c1c`,
        transform: 'rotate(-0.65deg)',
      }}
    >
      <div
        className="absolute"
        style={{
          inset: size < 70 ? 3 : 4,
          borderRadius: '50%',
          border: '2px solid #8b1c1c',
        }}
      />
      <div
        className="flex items-center justify-center"
        style={{ width: size * 0.8, height: 20, transform: 'rotate(-14.67deg)' }}
      >
        <p
          className="text-[#8b1c1c] text-center whitespace-nowrap"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 700,
            fontSize: size < 70 ? 10 : 14,
            letterSpacing: '0.8px',
            lineHeight: '20px',
          }}
        >
          TOP SECRET
        </p>
      </div>
    </div>
  );
}

// ─── Main App ─────────────────────────────────────────────────────────────────
export default function App() {
  const [inviteCode, setInviteCode] = useState('');
  const [myCode, setMyCode] = useState('');
  const [referralCount] = useState(5);
  const [copiedType, setCopiedType] = useState<'code' | 'url' | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 640;

  // Envelope scale calculation
  const envelopeNativeW = 878;
  const envelopeNativeH = 441;
  const envelopeScale = isMobile ? Math.min(1, (windowWidth - 16) / envelopeNativeW) : 1;
  const envelopeScaledH = envelopeNativeH * envelopeScale;
  const noticesExtraH = 180; // extra height below scaled envelope for notices text on mobile
  const wrapperMarginBottom = isMobile
    ? Math.round(envelopeScaledH + noticesExtraH - 40)
    : 360;

  const handleConfirm = () => {
    if (!inviteCode.trim()) return;
    alert('Invitation code submitted!');
  };

  const handleGenerate = () => {
    const code = 'BS'
      + Math.random().toString(36).substring(2, 5).toUpperCase()
      + Math.random().toString(36).substring(2, 5).toUpperCase()
      + Math.random().toString(36).substring(2, 5).toUpperCase();
    setMyCode(code.slice(0, 3) + ' ' + code.slice(3, 6) + ' ' + code.slice(6, 9));
  };

  const handleCopyCode = () => {
    if (myCode) navigator.clipboard.writeText(myCode);
    setCopiedType('code');
    setTimeout(() => setCopiedType(null), 1500);
  };

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(
      `https://papayaplay.com/blackshot/referral?code=${myCode.replace(/ /g, '')}`
    );
    setCopiedType('url');
    setTimeout(() => setCopiedType(null), 1500);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden" style={{ background: '#100704' }}>

      {/* ── Wood background image ── */}
      <img
        alt=""
        className="absolute inset-0 size-full object-cover pointer-events-none"
        src={imgBg}
      />

      {/* ── Radial dark gradient overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 62% 50% at 50% 20%, rgba(43,24,13,0.6) 0%, rgba(13,7,4,0.85) 100%)',
        }}
      />

      {/* ── Orange atmospheric glow — desktop only ── */}
      <div
        className="absolute pointer-events-none hidden sm:block"
        style={{
          left: 'calc(50% - 340px)',
          top: 80,
          width: 256,
          height: 256,
          borderRadius: '50%',
          filter: 'blur(100px)',
          background: 'radial-gradient(circle, rgba(230,120,20,0.25) 0%, rgba(115,60,10,0.125) 35%, transparent 70%)',
        }}
      />

      {/* ── Dashed circle decoration — desktop only ── */}
      <div
        className="absolute pointer-events-none opacity-20 hidden sm:block"
        style={{
          left: 'calc(50% - 420px)',
          top: 139,
          width: 128,
          height: 128,
          borderRadius: '50%',
          border: '6px dashed #5a1c1c',
          transform: 'rotate(-25deg)',
        }}
      />

      {/* ── Left Character — desktop only ── */}
      <div
        className="absolute left-0 pointer-events-none hidden sm:block"
        style={{ top: 388, width: '47vw', maxWidth: 700, zIndex: 2 }}
      >
        <div className="relative w-full overflow-hidden" style={{ height: 1273 }}>
          <img
            alt=""
            className="absolute max-w-none"
            style={{ left: '-33.59%', top: 0, width: '177.17%', height: '100%', objectFit: 'cover' }}
            src={imgCharLeft}
          />
        </div>
      </div>

      {/* ── Right Character — desktop only ── */}
      <div
        className="absolute right-0 pointer-events-none hidden sm:block"
        style={{ top: 1000, width: '28vw', maxWidth: 500, zIndex: 2 }}
      >
        <img
          alt=""
          className="w-full h-auto object-contain"
          src={imgCharRight}
        />
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          MAIN CONTENT COLUMN
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="relative mx-auto" style={{ maxWidth: 900, zIndex: 10 }}>

        {/* ── Header ── */}
        <div className="text-center pt-10 sm:pt-20 pb-6 sm:pb-10 px-4 sm:px-6">

          {/* "Back to BlackShot?" subtitle */}
          <p
            className="uppercase mb-4 sm:mb-5"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 600,
              fontSize: isMobile ? 16 : 22,
              letterSpacing: isMobile ? '2.5px' : '4.4px',
              color: 'rgba(201,160,32,0.65)',
              lineHeight: '1.5',
            }}
          >
            Back to BlackShot?
          </p>

          {/* REFERRAL EVENT title image */}
          <div className="flex justify-center mb-4 sm:mb-5">
            <img
              alt="Referral Event"
              className="object-contain w-[80%] sm:w-auto"
              style={{ height: isMobile ? 'auto' : 65, maxHeight: 65, boxShadow: '0 0 14px 0 black' }}
              src={imgReferralTitle}
            />
          </div>

          {/* Date badge */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div style={{ position: 'relative', display: 'inline-block', height: isMobile ? 36 : 44 }}>
              <img
                alt="Apr. 30. 2026 — May. 15. 2026"
                className="object-contain"
                style={{ height: isMobile ? 36 : 44 }}
                src={imgDateBadge}
              />
              <span
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: "'Rajdhani', sans-serif",
                  fontWeight: 700,
                  fontSize: isMobile ? 11 : 16,
                  color: '#2b1c11',
                  letterSpacing: isMobile ? '1px' : '2px',
                  whiteSpace: 'nowrap',
                  pointerEvents: 'none',
                }}
              >
                Apr. 30. 2026 — May. 15. 2026
              </span>
            </div>
          </div>

          {/* Description text */}
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: isMobile ? 13 : 16,
              color: '#898989',
              lineHeight: '1.55',
              textAlign: 'center',
            }}
          >
            <p>
              Calling all players who have not logged in to Papaya Play from{' '}
              <strong style={{ color: '#c9a020', fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>Jan. 28, 2026 </strong>
              to
              <strong style={{ color: '#c9a020', fontFamily: "'Inter', sans-serif", fontWeight: 700 }}> Apr. 29, 2026!</strong>
            </p>
            <p className="mt-3">You are eligible for special rewards! This promotion includes new players as well.</p>
            <p className="mt-3">
              If your friend logs into the game{' '}
              <strong style={{ color: '#c9a020', fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>using your invitation code</strong>
              , both{' '}
              <strong style={{ color: '#c9a020', fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>you and your friend</strong>
              {' '}will receive{' '}
              <strong style={{ color: '#c9a020', fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>special rewards!</strong>
            </p>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════════
            MAIN PAPER / ENVELOPE BODY
        ══════════════════════════════════════════════════════════════════ */}
        <div
          className="relative mx-2 sm:mx-4"
          style={{ marginBottom: wrapperMarginBottom }}
        >

          {/* ── Paper ── */}
          <div
            className="relative"
            style={{
              background: '#f4ebd8',
              border: '1px solid rgba(139,69,19,0.3)',
              boxShadow: '0 20px 50px 0 rgba(0,0,0,0.9)',
            }}
          >
            {/* Paper textures */}
            <img
              alt=""
              className="absolute top-0 left-0 pointer-events-none"
              style={{ width: '16.67%', zIndex: 0 }}
              src={imgPaperTopLeft}
            />
            <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
              <img
                alt=""
                className="absolute max-w-none"
                style={{
                  left: '-36.56%',
                  top: '-8.68%',
                  width: '173.11%',
                  height: '117.37%',
                }}
                src={imgPaperBg}
              />
            </div>
            {/* Inner vignette shadow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ boxShadow: 'inset 0 0 80px 0 rgba(100,50,0,0.1)', zIndex: 1 }}
            />

            {/* Letter sections */}
            <div
              className="relative"
              style={{
                padding: isMobile ? '20px 12px 80px' : '32px 32px 138px',
                zIndex: 2,
              }}
            >

              {/* ════════════════════════════════════════════════════════════
                  SECTION 1 — WELCOME BACK
              ════════════════════════════════════════════════════════════ */}
              <div
                className="relative mb-6 sm:mb-8"
                style={{
                  background: 'rgba(255,255,255,0.3)',
                  border: isMobile ? '4px solid #660a0a' : '7px solid #660a0a',
                }}
              >
                {/* TOP SECRET stamp */}
                <div
                  className="absolute opacity-80"
                  style={{ top: isMobile ? 12 : 44, right: isMobile ? 10 : 24, zIndex: 10 }}
                >
                  <TopSecretStamp size={isMobile ? 60 : 96} />
                </div>

                {/* Inner content */}
                <div style={{ padding: isMobile ? '16px 12px 0' : '24px 24px 0' }}>

                  {/* Section badge */}
                  <div className="mb-3 mt-1">
                    <SectionBadge text="Invited Player" />
                  </div>

                  {/* Title */}
                  <h2
                    className="text-center uppercase text-[#2b1c11]"
                    style={{
                      fontFamily: "'Black Ops One', sans-serif",
                      fontSize: isMobile ? 30 : 52,
                      letterSpacing: isMobile ? '1px' : '1.56px',
                      lineHeight: '1.1',
                      marginBottom: isMobile ? 20 : 32,
                      marginTop: 8,
                    }}
                  >
                    Welcome Back
                  </h2>

                  {/* Input + Confirm row — stacks on mobile */}
                  <div
                    className="flex items-end mb-4"
                    style={{
                      flexDirection: isMobile ? 'column' : 'row',
                      gap: isMobile ? 10 : 24,
                    }}
                  >
                    {/* Label + Input */}
                    <div style={{ flex: 1, width: '100%' }}>
                      <label
                        className="block mb-2 text-[#6c5a4b]"
                        style={{
                          fontFamily: "'Rajdhani', sans-serif",
                          fontWeight: 700,
                          fontSize: 14,
                          letterSpacing: '1.4px',
                          lineHeight: '20px',
                        }}
                      >
                        Invitation Code
                      </label>
                      <div className="relative" style={{ height: 50, background: '#d3cbc0' }}>
                        <input
                          type="text"
                          value={inviteCode}
                          onChange={(e) => setInviteCode(e.target.value)}
                          placeholder="Enter your invitation code"
                          className="absolute inset-0 bg-transparent px-4 outline-none w-full"
                          style={{
                            fontFamily: "'Rajdhani', sans-serif",
                            fontWeight: 600,
                            fontSize: isMobile ? 14 : 16,
                            letterSpacing: '1.6px',
                            color: 'rgba(26,12,0,0.8)',
                            borderBottomWidth: '2px',
                            borderBottomStyle: 'dashed',
                            borderBottomColor: '#4a3525',
                          }}
                        />
                      </div>
                    </div>

                    {/* Confirm button */}
                    <button
                      onClick={handleConfirm}
                      className="shrink-0 text-[#f0e8d0] uppercase"
                      style={{
                        height: 50,
                        width: isMobile ? '100%' : 195,
                        background: '#2b1c11',
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 700,
                        fontSize: 18,
                        letterSpacing: '1.8px',
                        boxShadow: '0 10px 15px 0 rgba(0,0,0,0.1), 0 4px 6px 0 rgba(0,0,0,0.1)',
                      }}
                    >
                      Confirm
                    </button>
                  </div>

                  {/* Don't have code link */}
                  <p
                    className="text-center"
                    style={{
                      fontFamily: "'Barlow', 'Noto Sans', sans-serif",
                      fontSize: isMobile ? 11 : 13,
                      color: 'rgba(58,32,0,0.55)',
                      lineHeight: '1.6',
                      marginBottom: isMobile ? 16 : 24,
                    }}
                  >
                    ※ Don&apos;t have a code?{' '}
                    <a
                      href="#"
                      style={{ color: '#3e2200', textDecoration: 'underline', textDecorationSkipInk: 'none' }}
                    >
                      Click HERE
                    </a>{' '}
                    for details.
                  </p>
                </div>

                {/* Reward image */}
                <div
                  className="relative overflow-hidden"
                  style={{
                    height: isMobile ? 180 : 381,
                    margin: isMobile ? '0 12px' : '0 24px',
                    border: '3px solid rgba(79,79,79,0.5)',
                  }}
                >
                  <img
                    alt="Welcome Back Rewards"
                    className="absolute left-0 w-full object-cover pointer-events-none"
                    style={{ height: '109.19%', top: '0.05%' }}
                    src={imgRewardWelcome}
                  />
                </div>

                {/* Notes */}
                <div style={{ padding: isMobile ? '12px' : '24px' }}>
                  <p
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: isMobile ? 13 : 17,
                      color: '#3e2200',
                      lineHeight: '1.6',
                      marginBottom: 0,
                    }}
                  >
                    * Paste or enter your invitation code, then click the Confirm button.
                  </p>
                  <p
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: isMobile ? 13 : 17,
                      color: '#3e2200',
                      lineHeight: '1.6',
                      marginTop: 4,
                    }}
                  >
                    * Log in to Papaya Play and enter your invitation code to receive rewards for you and your friend!
                  </p>
                </div>
              </div>

              {/* ════════════════════════════════════════════════════════════
                  SECTION 2 — MY INVITATION
              ════════════════════════════════════════════════════════════ */}
              <div
                className="relative"
                style={{
                  background: 'rgba(255,255,255,0.3)',
                  border: isMobile ? '4px solid #660a0a' : '7px solid #660a0a',
                }}
              >
                {/* TOP SECRET stamp */}
                <div
                  className="absolute opacity-80"
                  style={{ top: isMobile ? 12 : 24, right: isMobile ? 10 : 24, zIndex: 10 }}
                >
                  <TopSecretStamp size={isMobile ? 60 : 96} />
                </div>

                {/* Inner content */}
                <div style={{ padding: isMobile ? '16px 12px 0' : '24px 24px 0' }}>

                  {/* Section badge */}
                  <div className="mb-2 mt-1">
                    <SectionBadge text="Inviting Player" />
                  </div>

                  {/* Title */}
                  <h2
                    className="text-center uppercase text-[#2b1c11]"
                    style={{
                      fontFamily: "'Black Ops One', sans-serif",
                      fontSize: isMobile ? 30 : 52,
                      letterSpacing: isMobile ? '1px' : '1.56px',
                      lineHeight: '1.1',
                      marginBottom: isMobile ? 20 : 32,
                      marginTop: 8,
                    }}
                  >
                    My Invitation
                  </h2>

                  {/* Code display + Generate row — stacks on mobile */}
                  <div
                    className="flex items-end mb-4 sm:mb-6"
                    style={{
                      flexDirection: isMobile ? 'column' : 'row',
                      gap: isMobile ? 10 : 24,
                    }}
                  >
                    {/* Label + Code display */}
                    <div style={{ flex: 1, width: '100%' }}>
                      <label
                        className="block mb-2 text-[#6c5a4b]"
                        style={{
                          fontFamily: "'Rajdhani', sans-serif",
                          fontWeight: 700,
                          fontSize: 14,
                          letterSpacing: '1.4px',
                          lineHeight: '20px',
                        }}
                      >
                        My Invitation Code
                      </label>
                      <div className="relative" style={{ height: 50, background: '#d4ccc1' }}>
                        <input
                          type="text"
                          readOnly
                          value={myCode}
                          placeholder="--- --- ---"
                          className="absolute inset-0 bg-transparent px-4 outline-none w-full uppercase cursor-default select-all"
                          style={{
                            fontFamily: "'Rajdhani', sans-serif",
                            fontWeight: 700,
                            fontSize: isMobile ? 22 : 30,
                            letterSpacing: '3px',
                            color: myCode ? 'rgba(160,144,125,0.9)' : 'rgba(160,144,125,0.5)',
                            borderBottomWidth: '2px',
                            borderBottomStyle: 'dashed',
                            borderBottomColor: '#4a3525',
                          }}
                        />
                      </div>
                    </div>

                    {/* Generate button */}
                    <button
                      onClick={handleGenerate}
                      className="shrink-0 text-[#f0e8d0] uppercase"
                      style={{
                        height: 50,
                        width: isMobile ? '100%' : 195,
                        background: '#2b1c11',
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 700,
                        fontSize: 18,
                        letterSpacing: '1.8px',
                        boxShadow: '0 10px 15px 0 rgba(0,0,0,0.1), 0 4px 6px 0 rgba(0,0,0,0.1)',
                      }}
                    >
                      Generate
                    </button>
                  </div>

                  {/* Copy buttons + Referrals row */}
                  <div
                    className="flex mb-4 sm:mb-6"
                    style={{
                      flexDirection: isMobile ? 'column' : 'row',
                      alignItems: isMobile ? 'stretch' : 'center',
                      justifyContent: isMobile ? 'flex-start' : 'space-between',
                      gap: isMobile ? 12 : 0,
                    }}
                  >
                    {/* Copy buttons */}
                    <div className="flex gap-3">
                      <button
                        onClick={handleCopyCode}
                        className="text-[#f0e8d0] uppercase flex-1 sm:flex-none"
                        style={{
                          height: 40,
                          width: isMobile ? 'auto' : 134,
                          background: copiedType === 'code' ? '#4a3a30' : '#615247',
                          fontFamily: "'Barlow Condensed', sans-serif",
                          fontWeight: 700,
                          fontSize: 12.4,
                          letterSpacing: '1.24px',
                          boxShadow: '0 6.9px 10.3px 0 rgba(0,0,0,0.1), 0 2.8px 4.1px 0 rgba(0,0,0,0.1)',
                        }}
                      >
                        {copiedType === 'code' ? 'Copied!' : 'Copy Code'}
                      </button>
                      <button
                        onClick={handleCopyUrl}
                        className="text-[#f0e8d0] uppercase flex-1 sm:flex-none"
                        style={{
                          height: 40,
                          width: isMobile ? 'auto' : 134,
                          background: copiedType === 'url' ? '#4a3a30' : '#615247',
                          fontFamily: "'Barlow Condensed', sans-serif",
                          fontWeight: 700,
                          fontSize: 12.4,
                          letterSpacing: '1.24px',
                          boxShadow: '0 6.9px 10.3px 0 rgba(0,0,0,0.1), 0 2.8px 4.1px 0 rgba(0,0,0,0.1)',
                        }}
                      >
                        {copiedType === 'url' ? 'Copied!' : 'Copy URL'}
                      </button>
                    </div>

                    {/* Referrals count + Details */}
                    <div
                      className="flex items-center"
                      style={{
                        gap: 16,
                        justifyContent: isMobile ? 'space-between' : 'flex-end',
                      }}
                    >
                      <div>
                        <p
                          style={{
                            fontFamily: "'Rajdhani', sans-serif",
                            fontSize: 10,
                            letterSpacing: '2px',
                            color: '#3e2200',
                            lineHeight: '15px',
                          }}
                        >
                          Number of Referrals
                        </p>
                        <p
                          style={{
                            fontFamily: "'Rajdhani', sans-serif",
                            fontWeight: 700,
                            fontSize: 28,
                            color: '#1a0c00',
                            lineHeight: '42px',
                          }}
                        >
                          {referralCount}
                        </p>
                      </div>
                      <button
                        onClick={() => setShowDetails(true)}
                        style={{
                          height: 36,
                          minWidth: 92,
                          paddingLeft: 16,
                          paddingRight: 16,
                          fontFamily: "'Rajdhani', sans-serif",
                          fontWeight: 700,
                          fontSize: 12,
                          letterSpacing: '1.44px',
                          color: '#3a2000',
                          background: 'rgba(70,35,0,0.15)',
                          border: '1.01px solid rgba(110,75,10,0.75)',
                        }}
                      >
                        DETAILS
                      </button>
                    </div>
                  </div>
                </div>

                {/* Reward image */}
                <div
                  className="relative overflow-hidden"
                  style={{
                    height: isMobile ? 180 : 381,
                    margin: isMobile ? '0 12px' : '0 24px',
                    border: '3px solid rgba(79,79,79,0.5)',
                  }}
                >
                  <img
                    alt="My Invitation Rewards"
                    className="absolute left-0 w-full object-cover pointer-events-none"
                    style={{ height: '118.77%', top: '-4.56%' }}
                    src={imgRewardInvitation}
                  />
                </div>

                {/* Notes */}
                <div style={{ padding: isMobile ? '12px' : '24px' }}>
                  <p
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: isMobile ? 13 : 17,
                      color: '#3e2200',
                      lineHeight: '1.6',
                      marginBottom: 0,
                    }}
                  >
                    * Copy the invitation code or URL and share it with someone you&apos;d like to play with.
                  </p>
                  <p
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: isMobile ? 13 : 17,
                      color: '#3e2200',
                      lineHeight: '1.6',
                      marginTop: 4,
                    }}
                  >
                    * If the invited user enters the code or logs in to Papaya Play through the shared URL to play BlackShot, both players will receive rewards above.
                  </p>
                </div>
              </div>

            </div>
          </div>{/* /paper */}

          {/* ── Envelope flap + wax seal ── */}
          <div
            className="absolute left-0 right-0 pointer-events-none"
            style={{
              top: isMobile ? 'calc(100% - 40px)' : 'calc(100% - 80px)',
              height: isMobile ? envelopeScaledH + noticesExtraH : 441,
              zIndex: 30,
              // overflow: hidden 제거 — 봉투 상단이 paper에 자연스럽게 겹쳐야 함
            }}
          >
            {/* Scaled envelope image container (이미지만 scale 적용) */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: `translateX(-50%) scale(${envelopeScale})`,
                transformOrigin: 'top center',
                width: envelopeNativeW,
                height: envelopeNativeH,
              }}
            >
              {/* Envelope flap image */}
              <img
                alt=""
                className="absolute left-1/2 -translate-x-1/2 object-cover"
                style={{ maxWidth: 'none', width: envelopeNativeW, height: envelopeNativeH, top: -120 }}
                src={imgEnvelopeFlap}
              />
            </div>

            {/* IMPORTANT NOTICES — scale 밖에 배치해 글자 크기 유지 */}
            <div
              className="absolute left-1/2 -translate-x-1/2 flex flex-col gap-[10px] items-center pointer-events-auto px-[0px]"
              style={{
                top: isMobile ? Math.round(envelopeScaledH * 0.35) : 160,
                width: isMobile ? 'calc(100% - 32px)' : 700,
                paddingTop: isMobile ? 100 : 0,
              }}
            >
              <p
                className="uppercase text-[#ffe38c]"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: isMobile ? 16 : 20,
                  letterSpacing: '1.7px',
                  lineHeight: '25.5px',
                }}
              >
                IMPORTANT NOTICES
              </p>
              <ul
                className="text-[#feb] list-disc space-y-1"
                style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: isMobile ? 13 : 16 }}
              >
                <li className="ml-6 leading-[21.125px]">The event entry will be completed once the invited user logs into Papaya Play.</li>
                <li className="ml-6 leading-[21.125px]">Only one code can be entered per account.</li>
                <li className="ml-6 leading-[21.125px]">Rewards are sent to your Mailbox in-game, and it must be claimed within 14 days.</li>
                <li className="ml-6 leading-[21.125px]">You can claim up to 5 rewards.</li>
              </ul>
            </div>

            {/* Gold wax seal */}
            <img
              alt=""
              style={{
                position: 'absolute',
                left: '50%',
                top: isMobile ? Math.round(20 * envelopeScale) : -20,
                transform: 'translateX(-50%)',
                width: isMobile ? Math.round(171 * envelopeScale) : 171,
                height: isMobile ? Math.round(166 * envelopeScale) : 166,
                objectFit: 'cover',
              }}
              src={imgDecorBullets}
            />
          </div>

        </div>{/* /wrapper */}

      </div>

      {/* Details Popup */}
      {showDetails && <DetailsPopup onClose={() => setShowDetails(false)} />}
    </div>
  );
}