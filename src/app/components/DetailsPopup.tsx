import React from "react";

interface ReferralRow {
  no: number;
  date: string;
  account: string;
}

const referralData: ReferralRow[] = [
  { no: 1, date: "2026-04-03 14:30:56", account: "Play***" },
  { no: 2, date: "2026-04-03 14:30:56", account: "Play***" },
  { no: 3, date: "2026-04-03 14:30:56", account: "Play***" },
  { no: 4, date: "-", account: "-" },
  { no: 5, date: "-", account: "-" },
];

interface DetailsPopupProps {
  onClose: () => void;
}

export function DetailsPopup({ onClose }: DetailsPopupProps) {
  return (
    /* Backdrop */
    <div
      className="fixed inset-0 flex items-center justify-center"
      style={{
        zIndex: 1000,
        background: "rgba(10,5,2,0.82)",
        backdropFilter: "blur(4px)",
      }}
      onClick={onClose}
    >
      {/* Modal panel */}
      <div
        className="relative"
        style={{
          width: 820,
          maxWidth: "95vw",
          background: "#f4ebd8",
          border: "7px solid #660a0a",
          boxShadow:
            "0 30px 80px 0 rgba(0,0,0,0.9), inset 0 0 60px 0 rgba(100,50,0,0.08)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Parchment texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "repeating-linear-gradient(0deg, transparent, transparent 28px, rgba(139,69,19,0.04) 29px)",
            zIndex: 0,
          }}
        />

        {/* Inner border accent */}
        <div
          className="absolute pointer-events-none"
          style={{
            inset: 6,
            border: "1px solid rgba(139,69,19,0.25)",
            zIndex: 0,
          }}
        />

        {/* Content */}
        <div
          className="relative px-8 pt-8 pb-7"
          style={{ zIndex: 1 }}
        >
          {/* Header row */}
          <div className="flex items-start justify-between mb-6">
            <div>
              {/* Decorative rule above title */}
              <div className="flex items-center gap-2 mb-2">
                <div
                  style={{
                    width: 28,
                    height: 2,
                    background: "#8b1c1c",
                  }}
                />
                <p
                  className="uppercase text-[#8b1c1c] text-[11px]"
                  style={{
                    fontFamily: "'Rajdhani', sans-serif",
                    fontWeight: 700,
                    letterSpacing: "3px",
                  }}
                >
                  Inviting Player
                </p>
                <div
                  style={{
                    width: 28,
                    height: 2,
                    background: "#8b1c1c",
                  }}
                />
              </div>

              <h2
                className="text-[#2b1c11]"
                style={{
                  fontFamily: "'Black Ops One', sans-serif",
                  fontSize: 26,
                  letterSpacing: "1.2px",
                  lineHeight: "1",
                }}
              >
                Referred Users
              </h2>
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              className="flex items-center justify-center shrink-0 ml-4"
              style={{
                width: 36,
                height: 36,
                background: "rgba(43,28,17,0.12)",
                border: "1.5px solid rgba(139,69,19,0.5)",
                color: "#5a3b22",
              }}
              aria-label="Close"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <line
                  x1="1"
                  y1="1"
                  x2="13"
                  y2="13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="13"
                  y1="1"
                  x2="1"
                  y2="13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* Table */}
          <div
            style={{
              border: "2px solid rgba(139,69,19,0.4)",
              background: "rgba(255,255,255,0.35)",
              overflow: "hidden",
            }}
          >
            {/* Table header */}
            <div
              className="grid"
              style={{
                gridTemplateColumns: "80px 1fr 1fr",
                background: "rgba(43,28,17,0.88)",
              }}
            >
              {["No.", "Date", "Papaya Play Account"].map(
                (col) => (
                  <div
                    key={col}
                    className="flex items-center justify-center py-3"
                    style={{
                      fontFamily: "'Rajdhani', sans-serif",
                      fontWeight: 700,
                      fontSize: 15,
                      letterSpacing: "1.5px",
                      color: "#e8d5a3",
                      borderRight:
                        col !== "Papaya Play Account"
                          ? "1px solid rgba(201,160,32,0.25)"
                          : "none",
                    }}
                  >
                    {col}
                  </div>
                ),
              )}
            </div>

            {/* Table rows */}
            {referralData.map((row, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div
                  key={row.no}
                  className="grid"
                  style={{
                    gridTemplateColumns: "80px 1fr 1fr",
                    background: isEven
                      ? "rgba(244,235,216,0.6)"
                      : "rgba(255,255,255,0.45)",
                    borderTop: "1px solid rgba(139,69,19,0.18)",
                  }}
                >
                  {/* No. */}
                  <div
                    className="flex items-center justify-center py-3"
                    style={{
                      fontFamily: "'Rajdhani', sans-serif",
                      fontWeight: 700,
                      fontSize: 17,
                      color: "#2b1c11",
                      borderRight:
                        "1px solid rgba(139,69,19,0.18)",
                    }}
                  >
                    {row.no}
                  </div>
                  {/* Date */}
                  <div
                    className="flex items-center justify-center py-3"
                    style={{
                      fontFamily: "'Rajdhani', sans-serif",
                      fontWeight: row.date === "-" ? 700 : 400,
                      fontSize: 15,
                      color:
                        row.date === "-"
                          ? "rgba(43,28,17,0.4)"
                          : "#2b1c11",
                      letterSpacing: "0.5px",
                      borderRight:
                        "1px solid rgba(139,69,19,0.18)",
                    }}
                  >
                    {row.date}
                  </div>
                  {/* Account */}
                  <div
                    className="flex items-center justify-center py-3"
                    style={{
                      fontFamily: "'Rajdhani', sans-serif",
                      fontWeight:
                        row.account === "-" ? 700 : 400,
                      fontSize: 15,
                      color:
                        row.account === "-"
                          ? "rgba(43,28,17,0.4)"
                          : "#2b1c11",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {row.account}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Note */}
          <div className="flex items-start gap-2 mt-5">
            <span
              style={{
                fontFamily: "'Rajdhani', sans-serif",
                fontSize: 14,
                color: "#8b5e3c",
                lineHeight: "1.5",
                flexShrink: 0,
                marginTop: 1,
              }}
            >
              • Information is shown for the first 5 returning
              users only rewards are limited to a maximum of 5
              per account.
            </span>
            <p
              style={{
                fontFamily:
                  "'Barlow', 'Noto Sans KR', sans-serif",
                fontSize: 14,
                color: "#6b4c30",
                lineHeight: "1.55",
              }}
            ></p>
          </div>
        </div>
      </div>
    </div>
  );
}