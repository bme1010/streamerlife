import React, { useState, useEffect, useRef, useCallback } from "react";
import events from "./data/events";

// ── TikTok clips ────────────────────────────────────────────────
const TIKTOK_CLIPS = {
  3:  { embed: "https://www.tiktok.com/embed/v2/7186452674269826310", link: "https://www.tiktok.com/@lacyhim3elf/video/7186452674269826310" },
  4:  { embed: "https://www.tiktok.com/embed/v2/7415822062175915307", link: "https://www.tiktok.com/@mota_edits/video/7415822062175915307" },
  5:  { embed: "https://www.tiktok.com/embed/v2/7524789438497541389", link: "https://www.tiktok.com/@clipchase00/video/7524789438497541389" },
  6:  { embed: "https://www.tiktok.com/embed/v2/7388380125928197418", link: "https://www.tiktok.com/@homebase_entertanment/video/7388380125928197418" },
  8:  { embed: "https://www.tiktok.com/embed/v2/7508552049445834030", link: "https://www.tiktok.com/@striqzclips/video/7508552049445834030" },
  9:  { embed: "https://www.tiktok.com/embed/v2/7343871555325234475", link: "https://www.tiktok.com/@lacy/video/7343871555325234475" },
  10: { embed: "https://www.tiktok.com/embed/v2/7367150015623548191", link: "https://www.tiktok.com/@iitz.samurai/video/7367150015623548191" },
  11: { embed: "https://www.tiktok.com/embed/v2/7343122255028735275", link: "https://www.tiktok.com/@lacy/video/7343122255028735275" },
  13: { embed: "https://www.tiktok.com/embed/v2/7523759928259939614", link: "https://www.tiktok.com/@top.5.clipsss/video/7523759928259939614" },
  14: { embed: "https://www.tiktok.com/embed/v2/7364110469612834094", link: "https://www.tiktok.com/@lacy/video/7364110469612834094" },
  15: { embed: "https://www.tiktok.com/embed/v2/7388555417611160878", link: "https://www.tiktok.com/@gamingnetw0rk/video/7388555417611160878" },
  16: { embed: "https://www.tiktok.com/embed/v2/7633309834007301408", link: "https://www.tiktok.com/@todaysclip11/video/7633309834007301408" },
  17: { embed: "https://www.tiktok.com/embed/v2/7544570848770805023", link: "https://www.tiktok.com/@clipsgalorex96/video/7544570848770805023" },
  18: { embed: "https://www.tiktok.com/embed/v2/7589488407546449207", link: "https://www.tiktok.com/@mandoeditss/video/7589488407546449207" },
  19: { embed: "https://www.tiktok.com/embed/v2/7636468633857772822", link: "https://www.tiktok.com/@mikeyclipztv/video/7636468633857772822" },

};

const EVENT_TITLES = {
  0:  "fortnite grind (2 viewers let's go)",
  1:  "still live, parents mad lol",
  2:  "been at this for months",
  3:  "donating to clix stream rn",
  4:  "CLIX JUST READ MY DONO",
  5:  "people are clipping me now??",
  6:  "irl with clix today",
  7:  "might crash out tonight",
  8:  "first stream from dallas",
  9:  "darla is here again chat",
  10: "irl in miami",
  11: "streaming with adin tonight",
  12: "miami irl chaos",
  13: "one handed catch stream",
  14: "faze offered me a contract",
  15: "first stream from the faze house",
  16: "me and marlon again",
  17: "chat has been asking for this",
  18: "need to talk to chat about something",
  19: "CORE announcement today",
  20: "made it",
};

const EVENT_CHAT = {
  0: ["yo","hello??","anyone here","2 viewers 💀","bro lagging again","mic cut out","W","hi","still going?","lol"],
  1: ["parents gonna take the pc 💀","bro its 3am","go to sleep","stream till they pull the plug","W dedication","they mad?","turn down the mic","sneak mode activated","this is sad 😭","keep going"],
  2: ["bro nobody is watching","this aint it","post on tiktok","bro is determined","5 viewers 💀","clip something","algorithm is not in ur favor rn","W for trying","been here since day 1","you got this"],
  3: ["HE DID NOT","CLIX GONNA BAN YOU 💀","BRO IS ACTUALLY DOING IT","NO WAY","SPAM THE DONO","this is so funny","clix about to be so confused","LACY IS INSANE","keep going keep going","he's gonna see it","HELP 😭😭","W behavior","bro really said hold my beer"],
  4: ["CLIX READ IT 💀","NO WAY HE SAW IT","LACY IS INSANE","BRO GOT NOTICED","HE ACTUALLY DID IT","CLIX MENTIONED LACY","bro is famous now","CLIP CLIP CLIP","I was here for this","historic moment","POV: ur watching history","LACY LACY LACY","this is ur moment bro","SCREAM"],
  5: ["people are clipping you fr","TikTok found you","the awkward moments compilation goes crazy","bro is becoming a meme","LACY IS WEIRD (affectionate)","clip that clip that","he's not real 😭","the internet found him","W side character arc","YOU'RE BLOWING UP","I knew him before he was famous","say something else","chat is NOT ready"],
  6: ["bro actually helped the kid","W human being","this is actually wholesome","ngl this is kinda sweet","LACY IS THE GOAT","the parents are so happy","clip going viral rn","this is the moment","I'm not crying you're crying","different side of lacy fr","W W W W","wholesome arc unlocked"],
  7: ["LACY IS CRASHING OUT","CHAT IS NOT READY","bro is unhinged rn","say it again SAY IT AGAIN","this is insane 😭","CRASHOUT INCOMING","he's tweaking","I can't 😭😭","actual menace fr","clip this clip this","he's not okay","W crashout","LACY IS BUILT DIFFERENT","mod where are you","this stream is going down in history"],
  8: ["DALLAS ARC","W MOVE","he left the basement","CONTENT BOUTTA CHANGE","new era loading...","fr fr this is huge","no going back now","Dallas about to see Lacy different","W W W","the grind continues","era change confirmed","real ones been here since the basement","LETS GOOO"],
  9: ["DARLA IS HERE","chat going crazy rn","the chemistry bro 😭","CLIP IT","these two are something else","I ship it ngl","darla arc loading","this is going on tiktok","awkward but make it viral","the tension 💀","say something to her","LACY IS SO AWKWARD","bro is flustered"],
  10: ["MIAMI ARC","he made it","bro is actually in Miami","glow up confirmed","IRL content goes crazy","W W W W","from basement to Miami 📈","the come up is real","Miami is not ready for Lacy","era W","content is gonna be insane","no more mic issues hopefully","LETS GOOOO"],
  11: ["ADIN AND LACY","this is the biggest stream ever","the internet is watching rn","HE'S ON ADIN'S STREAM","don't blow it","act crazy act crazy","be yourself be yourself","Adin's chat is going insane","MASSIVE moment","fr fr this is HUGE","I can't believe this","from 2 viewers to this 😭","the grind paid off","LACY ON TOP"],
  12: ["MIAMI STREETS","IRL CHAOS","bro is unhinged","this is content","something is gonna happen I can feel it","every stream is an event fr","W IRL streamer","Miami loves Lacy","he's different out here","CLIP INCOMING","something always happens on these","best streamer in Miami rn"],
  13: ["ONE HANDED CATCH 😭","BRO IS ACTUALLY ATHLETIC","this clip has 5M views??","LACY IS BUILT","he's an athlete now??","the internet does NOT know what to do with this","different breed fr","W catch W catch","bro is just built different","this went SO viral","unexpected arc but I'm here for it","sports lacy > gaming lacy"],
  14: ["FAZE LACY","HE ACTUALLY JOINED","THIS IS HUGE","BRO WON","from 2 viewers to FaZe 📈","the grind arc is COMPLETE","legitimacy unlocked","FaZe made the right call","W org W org","real ones been here since day 1","I was here 🫡","new chapter","this is what we've been waiting for"],
  15: ["FAZE HOUSE CONTENT","bro lives with the creators now","content machine activated","daily collabs fr","the house is gonna be insane","W move","FaZe house era","this is gonna go crazy","who else is in the house","the lifestyle content incoming","era W no cap","he really made it"],
  16: ["LACY AND MARLON","the duo is BACK","the chemistry is insane","these two together 😭","W collab W collab","this stream is trending","every time they stream together it goes crazy","CLIP THIS","undeniable chemistry fr","the internet loves these two","best duo in streaming rn","can't make this up"],
  17: ["DO IT DO IT DO IT","50K WATCHING","HE'S ACTUALLY GONNA DO IT","CHAT IS LOSING IT","bro put the clippers down 💀","LACY LACY LACY","I will never recover from this","he's really doing it","the moment of truth","LIVE ON STREAM","my jaw dropped","this is going everywhere","historic moment fr","I can't watch"],
  18: ["what's going on with FaZe","he has something to say","the org drama fr","bro is about to say something big","this feels serious","WHAT IS HE ABOUT TO SAY","chat is quiet rn","something is happening","I have a bad feeling","just say it","we're listening","the org situation..."],
  19: ["CORE???","HIS OWN ORG","BRO STARTED HIS OWN THING","THIS IS HUGE","CORE LACY","the internet is losing it","announcement dropped","from FaZe to founding his own org","W move W move","this is the play","he's built different","CORE IS GONNA BE MASSIVE","era defining moment","we been here since the basement 🫡"],
  20: ["2.5M FOLLOWERS","from 2 viewers to THIS","the come up is real","I been here since the start 🫡","greatest arc in streaming","W W W W W W","he really did it","Miami house confirmed?","the grind was worth it","WE WON","LACY ON TOP","nobody believed in him and look","greatest story ever told","I will never doubt him again","GOAT behavior"],
};

const DEFAULT_CHAT = ["W","LMAOOOO","bro said what 💀","this is crazy","clip it","he's not real","I can't 😭","actual menace","chat is not ready","W stream","something is about to happen","bro really said that on stream","nah this is sending me","W W W W","no cap fr fr"];

function getScene(id) {
  if (typeof id !== "number") return "DEAD CAM";
  if (id <= 2)  return "BASEMENT CAM";
  if (id <= 6)  return "DESK CAM";
  if (id <= 10) return "DALLAS IRL";
  if (id <= 15) return "MIAMI IRL";
  return "STUDIO CAM";
}

function useAlerts() {
  const [alerts, setAlerts] = useState([]);
  const push = useCallback((msg, type = "follow") => {
    const id = Date.now() + Math.random();
    setAlerts(p => [...p, { id, msg, type }]);
    setTimeout(() => setAlerts(p => p.filter(a => a.id !== id)), 3000);
  }, []);
  return [alerts, push];
}

const ClipTimeline = React.memo(function ClipTimeline({ clips }) {
  const ref = useRef(null);
  useEffect(() => { if (ref.current) ref.current.scrollTop = ref.current.scrollHeight; }, [clips]);
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-3 flex-shrink-0">
        <span className="text-zinc-400 text-xs font-black tracking-widest uppercase">Clip Timeline</span>
        <span className="text-zinc-700 text-xs">{clips.length} viral</span>
      </div>
      <div ref={ref} className="flex-1 overflow-y-scroll flex flex-col gap-2 min-h-0 pr-0.5">
        {clips.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full gap-3 opacity-30">
            <div className="text-4xl">📼</div>
            <div className="text-zinc-500 text-xs text-center leading-relaxed">Viral clips will<br />appear here</div>
          </div>
        )}
        {clips.map((clip, i) => (
          <div key={clip.id} className="bg-zinc-900 border border-zinc-800 hover:border-zinc-600 rounded-xl p-3 transition-colors" style={{ animation: "fadeUp 0.25s ease-out" }}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-red-500 font-black text-xs tracking-wider">#{i + 1}</span>
              <span className="text-zinc-700 text-xs font-mono">age {clip.age}</span>
            </div>
            <div className="text-white text-xs font-bold leading-snug mb-1">{clip.title}</div>
            <div className="text-emerald-400 text-xs font-bold">{clip.gain}</div>
            {clip.link && (
              <a href={clip.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-zinc-700 hover:text-zinc-400 text-xs transition-colors">
                view on tiktok →
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
});

function OBSBar({ scene, viewers, streamTitle, isLive }) {
  const [elapsed, setElapsed] = useState(0);
  const startRef = useRef(Date.now());
  useEffect(() => {
    if (!isLive) { setElapsed(0); return; }
    startRef.current = Date.now();
    const t = setInterval(() => setElapsed(Math.floor((Date.now() - startRef.current) / 1000)), 1000);
    return () => clearInterval(t);
  }, [isLive, streamTitle]);
  const fmt = s => {
    const h = String(Math.floor(s / 3600)).padStart(2, "0");
    const m = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
    const sec = String(s % 60).padStart(2, "0");
    return `${h}:${m}:${sec}`;
  };
  const SCENES = ["BASEMENT CAM", "DESK CAM", "DALLAS IRL", "MIAMI IRL", "STUDIO CAM"];
  const sources = [
    { icon: "🎤", label: "Mic/Aux", active: true },
    { icon: "📸", label: "Webcam", active: isLive },
    { icon: "🎮", label: "Game Capture", active: scene.includes("CAM") },
    { icon: "🌐", label: "Browser Source", active: false },
  ];
  return (
    <div className="bg-[#141417] border border-zinc-800 rounded-2xl overflow-hidden">
      <div className="bg-[#0f0f12] border-b border-zinc-800 px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <span className="text-zinc-600 text-xs font-mono select-none">OBS Studio 30.2.2</span>
        </div>
        <div className="flex items-center gap-5">
          {isLive ? (
            <>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                <span className="text-red-400 text-xs font-black tracking-widest">LIVE</span>
              </span>
              <span className="text-zinc-500 text-xs font-mono tabular-nums">{fmt(elapsed)}</span>
            </>
          ) : (
            <span className="text-zinc-700 text-xs font-mono">OFFLINE</span>
          )}
          <span className="text-zinc-500 text-xs">👀 {viewers.toLocaleString()}</span>
        </div>
      </div>
      <div className="px-4 py-3 flex items-center gap-6 flex-wrap">
        <div className="flex items-center gap-3 min-w-0">
          <span className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest flex-shrink-0">Stream Title</span>
          <div className="bg-black border border-zinc-800 rounded-lg px-3 py-1.5 min-w-[220px] max-w-sm">
            {streamTitle
              ? <span className="text-white text-xs font-mono truncate block">"{streamTitle}"</span>
              : <span className="text-zinc-700 text-xs font-mono italic">no title set</span>}
          </div>
        </div>
        <div className="w-px h-6 bg-zinc-800 flex-shrink-0" />
        <div className="flex items-center gap-1 flex-shrink-0">
          <span className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest mr-2">Sources</span>
          {sources.map(src => (
            <div key={src.label} className="flex items-center gap-1 px-2 py-1 rounded-md bg-zinc-900 border border-zinc-800">
              <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${src.active ? "bg-emerald-500" : "bg-zinc-700"}`} />
              <span className="text-zinc-500 text-[10px]">{src.label}</span>
            </div>
          ))}
        </div>
        <div className="w-px h-6 bg-zinc-800 flex-shrink-0" />
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <span className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest mr-1">Scenes</span>
          {SCENES.map(s => (
            <div key={s} className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-[10px] font-bold transition-all ${scene === s ? "bg-purple-600 border-purple-500 text-white" : "bg-zinc-900 border-zinc-800 text-zinc-600"}`}>
              {scene === s && <span className="w-1 h-1 rounded-full bg-white flex-shrink-0" />}
              {s}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AlertOverlay({ alerts }) {
  const STYLES = {
    follow:   "border-blue-900   bg-blue-950/90   text-blue-200",
    donation: "border-yellow-900 bg-yellow-950/90 text-yellow-200",
    raid:     "border-purple-900 bg-purple-950/90 text-purple-200",
    clip:     "border-red-900    bg-red-950/90    text-red-200",
  };
  const ICONS = { follow: "👥", donation: "💰", raid: "🚨", clip: "📼" };
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col-reverse gap-2 pointer-events-none">
      {alerts.map(a => (
        <div key={a.id} className={`border px-4 py-2.5 rounded-xl text-xs font-bold max-w-[260px] ${STYLES[a.type] || STYLES.follow}`} style={{ animation: "slideInRight 0.2s ease-out" }}>
          <span className="mr-1.5">{ICONS[a.type] || "🔔"}</span>{a.msg}
        </div>
      ))}
    </div>
  );
}

// ── Mobile Chat Drawer ───────────────────────────────────────────
function MobileChatDrawer({ open, onClose, liveChat, viewers }) {
  const chatBoxRef = useRef(null);
  useEffect(() => {
    if (open && chatBoxRef.current) chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
  }, [open, liveChat]);

  return (
    <>
      {/* backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={onClose}
        />
      )}
      {/* drawer */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 lg:hidden rounded-t-3xl bg-[#111114] border-t border-zinc-800 transition-transform duration-300 ease-out ${open ? "translate-y-0" : "translate-y-full"}`}
        style={{ maxHeight: "60vh", display: "flex", flexDirection: "column" }}
      >
        {/* handle + header */}
        <div className="flex-shrink-0 px-4 pt-3 pb-2">
          <div className="w-10 h-1 bg-zinc-700 rounded-full mx-auto mb-3" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-purple-400 font-black text-sm">💬 LIVE CHAT</span>
              {viewers >= 1000 && (
                <span className="text-red-500 text-[10px] font-black tracking-widest animate-pulse">FAST</span>
              )}
            </div>
            {/* Twitch-style viewer count */}
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <span className="text-zinc-400 text-xs font-bold tabular-nums">{viewers.toLocaleString()}</span>
            </div>
          </div>
        </div>
        <div className="w-full h-px bg-zinc-800 flex-shrink-0" />
        {/* messages */}
        <div
          ref={chatBoxRef}
          className="flex-1 overflow-y-auto flex flex-col gap-1.5 px-3 py-2"
          style={{ scrollBehavior: "smooth" }}
        >
          {liveChat.length === 0 && (
            <div className="flex items-center justify-center h-24 text-zinc-600 text-xs">Chat warming up...</div>
          )}
          {liveChat.map(msg => (
            <div key={msg.id} className="text-xs leading-snug" style={{ animation: "fadeUp 0.12s ease-out" }}>
              <span className={`font-black mr-1 ${msg.color}`}>{msg.user}:</span>
              <span className="text-zinc-300">{msg.text}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// ── Mobile Clips Drawer ──────────────────────────────────────────
function MobileClipsDrawer({ open, onClose, clips }) {
  return (
    <>
      {open && (
        <div className="fixed inset-0 z-40 bg-black/60 lg:hidden" onClick={onClose} />
      )}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 lg:hidden rounded-t-3xl bg-[#111114] border-t border-zinc-800 transition-transform duration-300 ease-out ${open ? "translate-y-0" : "translate-y-full"}`}
        style={{ maxHeight: "70vh", display: "flex", flexDirection: "column" }}
      >
        <div className="flex-shrink-0 px-4 pt-3 pb-2">
          <div className="w-10 h-1 bg-zinc-700 rounded-full mx-auto mb-3" />
          <div className="flex items-center justify-between">
            <span className="text-red-400 font-black text-sm">📼 VIRAL CLIPS</span>
            <span className="text-zinc-600 text-xs">{clips.length} clips</span>
          </div>
        </div>
        <div className="w-full h-px bg-zinc-800 flex-shrink-0" />
        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
          {clips.length === 0 && (
            <div className="flex flex-col items-center justify-center h-32 gap-3 opacity-30">
              <div className="text-4xl">📼</div>
              <div className="text-zinc-500 text-xs text-center">No viral clips yet</div>
            </div>
          )}
          {clips.map((clip, i) => (
            <div key={clip.id} className="bg-zinc-900 border border-zinc-800 rounded-xl p-3">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-red-500 font-black text-xs">#{i + 1}</span>
                <span className="text-zinc-600 text-xs">age {clip.age}</span>
              </div>
              <div className="text-white text-sm font-bold mb-1">{clip.title}</div>
              <div className="text-emerald-400 text-xs font-bold">{clip.gain}</div>
              {clip.link && (
                <a href={clip.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-zinc-600 text-xs">
                  view on tiktok →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

 // ── Shared viral modal content ─────────────────────────────────
  const ViralModal = React.memo(function ViralModal({
  pendingClip,
  continueAfterClip,
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/90 p-0 sm:p-4">
      <div
        className="w-full sm:max-w-sm bg-[#111114] border-t-2 sm:border-2 border-red-600 sm:rounded-3xl overflow-hidden flex flex-col shadow-2xl"
        style={{ maxHeight: "100dvh", animation: "slideUp 0.25s ease-out" }}
      >
        {/* header */}
        <div className="bg-red-700 px-5 py-4 flex items-center gap-3 flex-shrink-0">
          <span className="text-2xl">🔥</span>
          <div>
            <div className="font-black text-base leading-tight">VIRAL CLIP</div>
            <div className="text-red-200 text-xs uppercase tracking-widest mt-0.5">This one changed everything</div>
          </div>
        </div>
        {/* embed */}
        <div className="flex-1 min-h-0 flex justify-center items-center px-4 pt-4 pb-2 bg-[#0a0a0c]" style={{ minHeight: 180, maxHeight: 320 }}>
          {pendingClip.embedUrl ? (
            <iframe
              src={pendingClip.embedUrl}
              className="rounded-xl border border-zinc-800 w-full h-full"
              style={{ minHeight: 180, maxHeight: 300 }}
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
              scrolling="no"
              title={pendingClip.title}
            />
          ) : (
            <div className="bg-zinc-900 rounded-xl w-full h-40 flex items-center justify-center text-zinc-600 text-sm">
              📱 clip unavailable
            </div>
          )}
        </div>
        {/* footer */}
        <div className="px-5 py-4 bg-[#111114] border-t border-zinc-800 flex-shrink-0">
          <div className="mb-0.5 font-black text-sm leading-snug">{pendingClip.title}</div>
          <div className="text-emerald-400 text-sm font-bold mb-4">{pendingClip.gain}</div>
          <div className="flex gap-2">
            {pendingClip.linkUrl && (
              <a href={pendingClip.linkUrl} target="_blank" rel="noopener noreferrer" className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white text-center py-3 rounded-xl font-bold text-sm transition-all">
                📱 TikTok
              </a>
            )}
            <button
              onClick={continueAfterClip}
              className="flex-1 bg-red-600 hover:bg-red-500 active:scale-95 py-3 rounded-xl font-black text-sm transition-all"
            >
              Continue →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

// ── Main App ─────────────────────────────────────────────────────
export default function App() {
  const [followers,    setFollowers]    = useState(0);
  const [viewers,      setViewers]      = useState(2);
  const [money,        setMoney]        = useState(100);
  const [currentEvent, setCurrentEvent] = useState(0);
  const [pendingClip,  setPendingClip]  = useState(null);
  const [clipTimeline, setClipTimeline] = useState([]);
  const [liveChat,     setLiveChat]     = useState([]);
  const [chatOpen,     setChatOpen]     = useState(false);
  const [clipsOpen,    setClipsOpen]    = useState(false);
  const [alerts, pushAlert] = useAlerts();

  const chatBoxRef  = useRef(null);
  const intervalRef = useRef(null);

  const event       = events.find(e => e.id === currentEvent);
  const scene       = getScene(currentEvent);
  const isEnding    = event && event.choices.length === 0;
  const streamTitle = EVENT_TITLES[currentEvent] || null;

  const USERNAMES = ["xXDarkSlayer99","streamer_fan22","TwitchViewer_","NRGfan","clixgang","lacyW","actuallygoated","viewer1847","notabot_real","yunggrinder","w_merchant","clipchaser","viralmoment","fortniteking","chatspammer","miamimade","fazeclip","coregrinder","tiktokwatcher","streamsniper_","W_predictor","based_viewer","lacyismygoat","irl_enjoyer"];
  const USER_COLORS = ["text-pink-400","text-blue-400","text-green-400","text-yellow-400","text-purple-400","text-red-400","text-cyan-400","text-orange-400"];
  const pick = arr => arr[Math.floor(Math.random() * arr.length)];

  const getChatInterval = useCallback(() => {
    if (viewers < 10)    return 4000;
    if (viewers < 50)    return 2500;
    if (viewers < 200)   return 1500;
    if (viewers < 1000)  return 800;
    if (viewers < 5000)  return 400;
    if (viewers < 15000) return 180;
    return 80;
  }, [viewers]);

  const pushMessage = useCallback(() => {
    const pool  = EVENT_CHAT[currentEvent] || DEFAULT_CHAT;
    const text  = pick(pool);
    const user  = pick(USERNAMES);
    const color = USER_COLORS[USERNAMES.indexOf(user) % USER_COLORS.length];
    const id    = Date.now() + Math.random();
    setLiveChat(prev => {
      const next = [...prev, { id, user, color, text }];
      return next.length > 35 ? next.slice(-35) : next;
    });
    if (Math.random() < 0.035 && viewers > 30)  pushAlert(`${user} followed!`, "follow");
    if (Math.random() < 0.015 && viewers > 300) pushAlert(`${user} raided with ${Math.floor(Math.random()*300+50)} viewers!`, "raid");
    if (Math.random() < 0.02  && viewers > 80)  pushAlert(`${user} donated $${(Math.random()*25+2).toFixed(2)}`, "donation");
  }, [currentEvent, viewers, pushAlert]);

  useEffect(() => {
    if (chatBoxRef.current) chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
  }, [liveChat]);

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (viewers > 0) intervalRef.current = setInterval(pushMessage, getChatInterval());
    return () => clearInterval(intervalRef.current);
  }, [viewers, currentEvent, getChatInterval, pushMessage]);

  const handleChoice = choice => {
    if (pendingClip) return;
    if (choice.effects.followers) setFollowers(p => Math.max(0, p + choice.effects.followers));
    if (choice.effects.viewers)   setViewers(p  => Math.max(0, p + choice.effects.viewers));
    if (choice.effects.money)     setMoney(p    => Math.max(0, p + choice.effects.money));
    if (choice.viralClip) {
      setPendingClip({
        title:    choice.clipTitle,
        gain:     choice.clipGain,
        nextEvent: choice.nextEvent,
        embedUrl: TIKTOK_CLIPS[currentEvent]?.embed || null,
        linkUrl:  TIKTOK_CLIPS[currentEvent]?.link  || null,
        eventAge: event.age,
      });
    } else if (events.find(e => e.id === choice.nextEvent)) {
      setCurrentEvent(choice.nextEvent);
      setLiveChat([]);
    }
  };

  const continueAfterClip = () => {
    setClipTimeline(prev => [...prev, {
      id:    Date.now(),
      title: pendingClip.title,
      gain:  pendingClip.gain,
      link:  pendingClip.linkUrl,
      age:   pendingClip.eventAge,
    }]);
    pushAlert(`"${pendingClip.title}" going viral`, "clip");
    setCurrentEvent(pendingClip.nextEvent);
    setPendingClip(null);
    setLiveChat([]);
  };

  const resetGame = () => {
    setFollowers(0); setViewers(2); setMoney(100);
    setCurrentEvent(0); setPendingClip(null);
    setClipTimeline([]); setLiveChat([]);
    setChatOpen(false); setClipsOpen(false);
  };

  const ENDINGS = {
    good: { emoji: "👑", label: "YOU MADE IT",    color: "text-yellow-400", border: "border-yellow-800", bg: "bg-yellow-950/20", sub: "From 2 viewers to internet royalty. They said it wouldn't happen." },
    mid:  { emoji: "😐", label: "STUCK AT MID",   color: "text-zinc-400",   border: "border-zinc-700",   bg: "bg-zinc-900/40",   sub: "Not famous. Not forgotten. Just... mid. The algorithm had other plans." },
    bad:  { emoji: "💀", label: "STREAM OVER",    color: "text-red-400",    border: "border-red-900",    bg: "bg-red-950/20",    sub: "The grind broke you. But hey — at least you tried." },
  };

 

  // ── Ending card ────────────────────────────────────────────────
  const EndingCard = ({ cfg }) => (
    <div className={`rounded-2xl border-2 ${cfg.border} ${cfg.bg} p-6 sm:p-8 text-center`}>
      <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">{cfg.emoji}</div>
      <div className={`text-2xl sm:text-3xl font-black mb-2 sm:mb-3 ${cfg.color}`}>{cfg.label}</div>
      <div className="text-zinc-500 text-sm sm:text-base mb-6 sm:mb-7 max-w-sm mx-auto leading-relaxed">{cfg.sub}</div>
      <div className="flex gap-2 sm:gap-3 justify-center flex-wrap mb-6 sm:mb-7">
        {[
          { l: "Followers", v: followers.toLocaleString(),   c: "text-pink-400" },
          { l: "Viewers",   v: viewers.toLocaleString(),     c: "text-emerald-400" },
          { l: "Clips",     v: String(clipTimeline.length),  c: "text-red-400" },
          { l: "Money",     v: `$${money.toLocaleString()}`, c: "text-yellow-400" },
        ].map(s => (
          <div key={s.l} className="bg-zinc-900 border border-zinc-800 rounded-xl px-3 sm:px-4 py-2 sm:py-3">
            <div className="text-zinc-600 text-xs mb-1">{s.l}</div>
            <div className={`text-lg sm:text-xl font-black ${s.c} tabular-nums`}>{s.v}</div>
          </div>
        ))}
      </div>
      <button onClick={resetGame} className="bg-purple-600 hover:bg-purple-500 active:scale-95 px-7 py-3.5 rounded-xl font-black text-base transition-all w-full sm:w-auto">
        🔄 Play Again
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0d0d10] text-white" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>

      <AlertOverlay alerts={alerts} />

      {/* Viral clip modal */}
      {pendingClip && (
  <ViralModal
    pendingClip={pendingClip}
    continueAfterClip={continueAfterClip}
  />
)}

      {/* Mobile chat & clips drawers */}
      <MobileChatDrawer open={chatOpen} onClose={() => setChatOpen(false)} liveChat={liveChat} viewers={viewers} />
      <MobileClipsDrawer open={clipsOpen} onClose={() => setClipsOpen(false)} clips={clipTimeline} />

      {/* ════════════════════════════════════════
          MOBILE LAYOUT  (hidden on lg+)
      ════════════════════════════════════════ */}
      <div className="lg:hidden flex flex-col min-h-screen">

        {/* ── Mobile top bar ── */}
        <div className="flex-shrink-0 bg-[#0d0d10] border-b border-zinc-900 px-4 py-3 flex items-center justify-between">
          <div>
            <div className="text-purple-500 font-black text-xl leading-none">StreamerLife</div>
            <div className="text-zinc-700 text-[10px] uppercase tracking-widest mt-0.5">Streamer Simulator</div>
          </div>
          <div className="flex items-center gap-2">
            {/* live badge */}
            {streamTitle && (
              <div className="flex items-center gap-1.5 bg-red-950/60 border border-red-900 rounded-lg px-2 py-1">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                <span className="text-red-400 text-[10px] font-black tracking-widest">LIVE</span>
              </div>
            )}
            <div className="text-right">
              <div className="text-zinc-600 text-[10px] uppercase tracking-widest">Age</div>
              <div className="text-xl font-black leading-none tabular-nums">{event?.age}</div>
            </div>
          </div>
        </div>

        {/* ── Mobile stat strip ── */}
        <div className="flex-shrink-0 bg-[#111114] border-b border-zinc-900 px-4 py-2.5 grid grid-cols-3 divide-x divide-zinc-800">
          {[
            { icon: "👥", value: followers >= 1000 ? `${(followers/1000).toFixed(1)}K` : followers.toString(), label: "followers", color: "text-pink-400" },
            { icon: "👀", value: viewers >= 1000   ? `${(viewers/1000).toFixed(1)}K`   : viewers.toString(),   label: "viewers",   color: "text-emerald-400" },
            { icon: "💰", value: `$${money >= 1000 ? `${(money/1000).toFixed(1)}K`     : money.toString()}`,  label: "money",     color: "text-yellow-400" },
          ].map(s => (
            <div key={s.label} className="flex flex-col items-center px-2">
              <div className={`text-lg font-black tabular-nums leading-none ${s.color}`}>{s.icon} {s.value}</div>
              <div className="text-zinc-700 text-[9px] uppercase tracking-widest mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>

        {/* ── Mobile main card ── */}
        <div className="flex-1 flex flex-col px-4 pt-5 pb-2 overflow-y-auto">

          {/* scene badge */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-zinc-700 text-[10px] font-black uppercase tracking-widest border border-zinc-800 px-2.5 py-1 rounded-lg">{scene}</span>
            {streamTitle && (
              <span className="text-zinc-600 text-[10px] font-mono truncate max-w-[200px]">"{streamTitle}"</span>
            )}
          </div>

          {/* event title */}
          <h2 className="text-3xl font-black mb-3 leading-tight">{event?.title}</h2>

          {/* event text */}
          <p className="text-zinc-300 text-base leading-relaxed mb-8">{event?.text}</p>

          {/* choices or ending */}
          {isEnding ? (
            <EndingCard cfg={ENDINGS[event.ending] || ENDINGS.good} />
          ) : (
            <div className="flex flex-col gap-3 pb-4">
              {event?.choices.map((choice, i) => (
                <button
                  key={i}
                  onClick={() => handleChoice(choice)}
                  disabled={!!pendingClip}
                  className={`group relative text-left px-5 py-4 rounded-2xl border font-bold text-base transition-all duration-150 active:scale-[0.98]
                    ${pendingClip ? "opacity-20 cursor-not-allowed" : "cursor-pointer"}
                    ${choice.viralClip
                      ? "bg-purple-950/40 border-purple-800/60"
                      : "bg-zinc-900/80 border-zinc-800"
                    }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="leading-snug">{choice.text}</span>
                    {choice.viralClip && (
                      <span className="text-red-500 text-xs font-black flex-shrink-0 opacity-70">📼</span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ── Mobile bottom toolbar ── */}
        {!isEnding && (
          <div className="flex-shrink-0 bg-[#111114] border-t border-zinc-800 px-4 py-3 flex items-center gap-3 safe-area-bottom">
            {/* Chat button — Twitch-style */}
            <button
              onClick={() => { setChatOpen(true); setClipsOpen(false); }}
              className="flex-1 flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-800 rounded-xl py-3 text-sm font-bold text-zinc-300 active:bg-zinc-800 transition-colors"
            >
              <span className="text-purple-400">💬</span>
              <span>Chat</span>
              {viewers >= 100 && (
                <span className="text-zinc-600 text-xs tabular-nums">
                  {viewers >= 1000 ? `${(viewers/1000).toFixed(1)}K` : viewers}
                </span>
              )}
            </button>

            {/* Clips button */}
            <button
              onClick={() => { setClipsOpen(true); setChatOpen(false); }}
              className="flex-1 flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-800 rounded-xl py-3 text-sm font-bold text-zinc-300 active:bg-zinc-800 transition-colors"
            >
              <span className="text-red-400">📼</span>
              <span>Clips</span>
              {clipTimeline.length > 0 && (
                <span className="bg-red-600 text-white text-[10px] font-black rounded-full w-4 h-4 flex items-center justify-center">
                  {clipTimeline.length}
                </span>
              )}
            </button>
          </div>
        )}
      </div>

      {/* ════════════════════════════════════════
          DESKTOP LAYOUT  (hidden on mobile)
      ════════════════════════════════════════ */}
      <div className="hidden lg:block max-w-[1400px] mx-auto px-4 pb-8 pt-4">
        <div className="flex flex-col gap-4">

          {/* Header */}
          <div className="flex items-end justify-between">
            <div>
              <div className="text-zinc-700 text-[10px] uppercase tracking-[0.25em] font-bold mb-1">Internet Streamer Simulator</div>
              <h1 className="text-5xl font-black text-purple-500 leading-none tracking-tight">StreamerLife</h1>
            </div>
            <div className="text-right">
              <div className="text-zinc-600 text-xs uppercase tracking-widest">Age</div>
              <div className="text-4xl font-black leading-none tabular-nums">{event?.age}</div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Followers",    value: followers.toLocaleString(),    icon: "👥", color: "text-pink-400" },
              { label: "Live Viewers", value: viewers.toLocaleString(),      icon: "👀", color: "text-emerald-400" },
              { label: "Money",        value: `$${money.toLocaleString()}`,  icon: "💰", color: "text-yellow-400" },
            ].map(s => (
              <div key={s.label} className="bg-[#111114] border border-zinc-800 rounded-2xl p-4">
                <div className="text-zinc-600 text-[10px] uppercase tracking-widest font-bold mb-2">{s.label}</div>
                <div className={`text-3xl font-black ${s.color} tabular-nums`}>{s.icon} {s.value}</div>
              </div>
            ))}
          </div>

          {/* OBS Bar */}
          <OBSBar scene={scene} viewers={viewers} streamTitle={streamTitle} isLive={!!streamTitle} />

          {/* Three-column body */}
          <div className="grid grid-cols-12 gap-4 items-start">

            {/* Clip Timeline */}
            <div className="col-span-3 bg-[#111114] border border-zinc-800 rounded-2xl p-4" style={{ height: 510 }}>
              <ClipTimeline clips={clipTimeline} />
            </div>

            {/* Event Card */}
            <div className="col-span-6 bg-[#111114] border border-zinc-800 rounded-2xl p-7 flex flex-col">
              <div className="flex items-center gap-2 flex-wrap mb-5">
                <span className="text-zinc-700 text-[10px] font-black uppercase tracking-widest border border-zinc-800 px-2.5 py-1 rounded-lg">{scene}</span>
                {streamTitle && (
                  <span className="text-zinc-600 text-xs font-mono truncate max-w-[280px]">"{streamTitle}"</span>
                )}
              </div>
              <h2 className="text-4xl font-black mb-3 leading-tight">{event?.title}</h2>
              <p className="text-zinc-300 text-lg leading-relaxed mb-8 flex-1">{event?.text}</p>
              <div className="flex flex-col gap-3">
                {isEnding ? (
                  <EndingCard cfg={ENDINGS[event.ending] || ENDINGS.good} />
                ) : (
                  event?.choices.map((choice, i) => (
                    <button
                      key={i}
                      onClick={() => handleChoice(choice)}
                      disabled={!!pendingClip}
                      className={`group relative text-left px-6 py-5 rounded-2xl border font-bold text-base transition-all duration-150
                        ${pendingClip ? "opacity-20 cursor-not-allowed" : "cursor-pointer hover:scale-[1.01] active:scale-[0.99]"}
                        ${choice.viralClip
                          ? "bg-purple-950/40 border-purple-800/60 hover:bg-purple-950/60 hover:border-purple-600"
                          : "bg-zinc-900/60 border-zinc-800 hover:bg-zinc-800/80 hover:border-zinc-600"
                        }`}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <span className="leading-snug">{choice.text}</span>
                        {choice.viralClip && (
                          <span className="text-red-500 text-xs font-black flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity">📼 CLIP</span>
                        )}
                      </div>
                    </button>
                  ))
                )}
              </div>
            </div>

            {/* Live Chat */}
            <div className="col-span-3 bg-[#111114] border border-zinc-800 rounded-2xl flex flex-col overflow-hidden" style={{ height: 510 }}>
              <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800 flex-shrink-0">
                <span className="text-purple-400 font-black text-sm">💬 LIVE CHAT</span>
                {viewers >= 1000 && (
                  <span className="text-red-500 text-[10px] font-black tracking-widest animate-pulse">FAST</span>
                )}
                <span className="ml-auto text-zinc-800 text-xs tabular-nums">{liveChat.length}/35</span>
              </div>
              <div
                ref={chatBoxRef}
                className="flex-1 overflow-y-scroll flex flex-col gap-1.5 p-3"
                style={{ scrollBehavior: "smooth" }}
              >
                {liveChat.length === 0 && (
                  <div className="flex flex-col items-center justify-center h-full gap-3 opacity-30">
                    <div className="text-4xl">💬</div>
                    <div className="text-zinc-500 text-xs text-center leading-relaxed">Chat warming up...</div>
                  </div>
                )}
                {liveChat.map(msg => (
                  <div key={msg.id} className="bg-zinc-900/80 rounded-lg px-3 py-1.5 text-xs leading-snug" style={{ animation: "fadeUp 0.12s ease-out" }}>
                    <span className={`font-black mr-1 ${msg.color}`}>{msg.user}:</span>
                    <span className="text-zinc-300">{msg.text}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(12px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .safe-area-bottom {
          padding-bottom: max(12px, env(safe-area-inset-bottom));
        }
      `}</style>
    </div>
  );
}