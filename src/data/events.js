const events = [

  // =====================================================
  // EARLY GRIND
  // broke teenager, spending on equipment, no income
  // =====================================================

  {
    id: 0,
    age: 16,
    title: "Basement Fortnite Streams",
    text: "You stream Fortnite every night from your parents' basement to 2 viewers. Your mic cuts out constantly and nobody talks in chat.",
    choices: [
      {
        text: "Grind every single night",
        viralClip: false,
        effects: { followers: 25, viewers: 1, money: -50 }, // buying better gear
        nextEvent: 1,
      },
      {
        text: "Only stream casually",
        viralClip: false,
        effects: { followers: 5, viewers: 0, money: 0 },
        nextEvent: "BAD_casual_start",
      },
    ],
  },

  {
    id: 1,
    age: 16,
    title: "Parents Are Mad",
    text: "Your parents are furious you're staying up until 4 AM yelling at Fortnite. They're threatening to take the PC.",
    choices: [
      {
        text: "Keep grinding anyway",
        viralClip: false,
        effects: { followers: 40, viewers: 2, money: -30 }, // energy drinks, mic upgrade
        nextEvent: 2,
      },
      {
        text: "Take a short break to keep the peace",
        viralClip: false,
        effects: { followers: 0, viewers: -1, money: 0 },
        nextEvent: "BAD_parents_win",
      },
    ],
  },

  {
    id: 2,
    age: 17,
    title: "No Growth",
    text: "Months pass and your stream is still averaging under 5 viewers. The grind is real and nobody cares yet.",
    choices: [
      {
        text: "Start posting TikTok clips",
        viralClip: false,
        effects: { followers: 400, viewers: 8, money: 0 },
        nextEvent: 3,
      },
      {
        text: "Quit streaming — it's not working",
        viralClip: false,
        effects: { followers: -100, viewers: -5, money: 0 },
        nextEvent: 99,
      },
    ],
  },

  // =====================================================
  // CLIX ARC
  // first donations coming in — tiny money, mostly spending
  // =====================================================

  {
    id: 3,
    age: 17,
    title: "Toxic Donation Spam",
    text: "You start spam donating weird toxic messages into Clix's stream hoping he'll notice you.",
    choices: [
      {
        text: "Keep spamming donos",
        viralClip: true,
        clipTitle: "LACY SPAM DONATES CLIX",
        clipGain: "+3,000 Followers",
        effects: { followers: 3000, viewers: 80, money: -200 }, // spent on donos to clix
        nextEvent: 4,
      },
      {
        text: "Stop before getting banned",
        viralClip: false,
        effects: { followers: 100, viewers: 2, money: 0 },
        nextEvent: "BAD_stopped_clix",
      },
    ],
  },

  {
    id: 4,
    age: 17,
    title: "Clix Notices You",
    text: "Clix finally reads one of your donos out loud and chat starts spamming your name.",
    choices: [
      {
        text: "Start screaming in the Discord call",
        viralClip: true,
        clipTitle: "CLIX NOTICES LACY",
        clipGain: "+8,000 Followers",
        // first real sub income + bits starting to trickle
        effects: { followers: 8000, viewers: 300, money: 800 },
        nextEvent: 5,
      },
      {
        text: "Try acting normal and cool",
        viralClip: false,
        effects: { followers: 500, viewers: 20, money: 0 },
        nextEvent: "BAD_too_normal",
      },
    ],
  },

  // =====================================================
  // SIDE CHARACTER ARC
  // growing — Twitch affiliate, subs, small brand interest
  // =====================================================

  {
    id: 5,
    age: 18,
    title: "The Beginning",
    text: "People online begin clipping you. You're becoming more popular as the days go by.",
    choices: [
      {
        text: "Start Clip Farming",
        viralClip: true,
        clipTitle: "LACY AWKWARD CLIPS COMPILATION",
        clipGain: "+12,000 Followers",
        // Twitch affiliate income + first merch drop + subs ramping
        effects: { followers: 12000, viewers: 600, money: 3500 },
        nextEvent: 6,
      },
      {
        text: "Try forcing aura instead",
        viralClip: false,
        effects: { followers: -2000, viewers: -80, money: -500 },
        nextEvent: "BAD_aura_flop",
      },
    ],
  },

  {
    id: 6,
    age: 18,
    title: "Lost Kid Moment",
    text: "During an IRL stream with Clix, you talk to a lost kid. The clip spreads everywhere online.",
    choices: [
      {
        text: "Farm the clip and talk to the kid",
        viralClip: true,
        clipTitle: "LACY FINDS LOST KID ON STREAM",
        clipGain: "+20,000 Followers",
        // viral press = Twitch partner incoming, subs spike, first sponsor inquiry
        effects: { followers: 20000, viewers: 1200, money: 7500 },
        nextEvent: 7,
      },
      {
        text: "Talk to the kid unknowingly that he was lost",
         viralClip: true,
        clipTitle: "LACY FINDS LOST KID ON STREAM",
        clipGain: "+20,000 Followers",
        // viral press = Twitch partner incoming, subs spike, first sponsor inquiry
        effects: { followers: 20000, viewers: 1200, money: 7500 },
        nextEvent: 7,
      },
    ],
  },

  // =====================================================
  // CRASHOUT ARC
  // Twitch partner — subs, bits, first paid sponsorship
  // =====================================================

  {
    id: 7,
    age: 19,
    title: "Crashout Clips Phase",
    text: "As you start to gain publicity, what better way than to fake crashout?",
    choices: [
      {
        text: "Crash out for the clips",
        viralClip: false,
        clipTitle: "LACY FULL STREAM CRASHOUT",
        clipGain: "+45,000 Followers",
        // partner sub revenue + first mid-tier sponsor deal ($5k)
        effects: { followers: 45000, viewers: 3500, money: 18000 },
        nextEvent: 8,
      },
      {
        text: "Let chat own you and end stream spiraling a different path...",
        viralClip: false,
        effects: { followers: -8000, viewers: -500, money: -2000 },
        nextEvent: "BAD_soft_apology",
      },
    ],
  },

  // =====================================================
  // DALLAS ARC
  // moving costs money — but income rising fast
  // =====================================================

  {
    id: 8,
    age: 20,
    title: "Move to Dallas",
    text: "You move to Dallas. This is your shot at going from a streamer to a star.",
    choices: [
      {
        text: "Fully embrace chaotic IRL streams",
        viralClip: true,
        clipTitle: "LACY MOVES TO DALLAS",
        clipGain: "+55,000 Followers",
        // relocation cost offset by first real brand deal (~$15k) + sub income
        effects: { followers: 55000, viewers: 500, money: 22000 },
        nextEvent: 9,
      },
      {
        text: "Stay home — it's too risky financially",
        viralClip: false,
        effects: { followers: -5000, viewers: -300, money: -1000 },
        nextEvent: "BAD_stay_home",
      },
    ],
  },

  // =====================================================
  // DARLA ARC
  // relationship content = views = ad rev + sponsors
  // =====================================================

  {
    id: 9,
    age: 20,
    title: "Darla Arc",
    text: "Your awkward relationship clips with Darla begin exploding across TikTok and Twitter.",
    choices: [
      {
        text: "Lean fully into girl content",
        viralClip: true,
        clipTitle: "LACY + DARLA VIRAL COMPILATION",
        clipGain: "+80,000 Followers",
        // TikTok creator fund + YouTube ad rev kicking in + sponsor renewal
        effects: { followers: 80000, viewers: 1500, money: 38000 },
        nextEvent: 10,
      },
      {
        text: "Keep it private — focus on gaming",
        viralClip: false,
        effects: { followers: -5000, viewers: -400, money: -3000 },
        nextEvent: "BAD_private_darla",
      },
    ],
  },

  // =====================================================
  // MIAMI ARC
  // bigger city, bigger costs, bigger money
  // =====================================================

  {
    id: 10,
    age: 20,
    title: "Move to Miami",
    text: "Bigger streamers want you around. Miami is calling. This is where the real opportunities are.",
    choices: [
      {
        text: "Go all in on IRL streams in Miami",
        viralClip: true,
        clipTitle: "LACY ARRIVES IN MIAMI",
        clipGain: "+110,000 Followers",
        // luxury rent + setup costs, but multiple sponsors + YouTube rev growing
        effects: { followers: 110000, viewers: 2000, money: 55000 },
        nextEvent: 11,
      },
      {
        text: "Stay lowkey — don't overextend",
        viralClip: false,
        effects: { followers: -8000, viewers: -600, money: -5000 },
        nextEvent: "BAD_lowkey_miami",
      },
    ],
  },

  // =====================================================
  // ADIN ROSS ARC
  // massive exposure = massive brand deal potential
  // =====================================================

  {
    id: 11,
    age: 20,
    title: "Adin Ross Linkup",
    text: "You finally appear on stream with Adin Ross after months of networking. The whole internet is watching.",
    choices: [
      {
        text: "Act chaotic — be yourself, go crazy",
        viralClip: true,
        clipTitle: "ADIN ROSS MEETS LACY",
        clipGain: "+180,000 Followers",
        // immediate spike: new brand deal ($40k), sub surge, YouTube monetization
        effects: { followers: 180000, viewers: 3000, money: 95000 },
        nextEvent: 12,
      },
      {
        text: "Try acting mature and professional",
        viralClip: false,
        effects: { followers: 3000, viewers: 400, money: 5000 },
        nextEvent: "BAD_boring_adin",
      },
    ],
  },

  {
    id: 12,
    age: 20,
    title: "Public IRL Chaos",
    text: "Your Miami streams become unpredictable and constantly trend online. Every stream is an event.",
    choices: [
      {
        text: "Be the clip, you are the clip",
        viralClip: false,
        clipTitle: "LACY MIAMI CRASHOUT",
        clipGain: "+160,000 Followers",
        // consistent top-tier income: subs + 3 active sponsors + YT ad rev
        effects: { followers: 160000, viewers: 800, money: 120000 },
        nextEvent: 13,
      },
      {
        text: "Be the fart of twitch with no path",
        viralClip: false,
        effects: { followers: -10000, viewers: -2000, money: -20000 },
        nextEvent: "BAD_calm_miami",
      },
    ],
  },

  // =====================================================
  // SPORTS / CATCH CLIPS
  // brand deals from non-gaming companies entering
  // =====================================================

  {
    id: 13,
    age: 21,
    title: "Viral Sports Clips",
    text: "Your sports clips are going viral. The one-handed catch clip alone has 5 million views.",
    choices: [
      {
        text: "Keep being an athletic chad that mogs everyone",
        viralClip: true,
        clipTitle: "LACY ONE HANDED CATCH GOES VIRAL",
        clipGain: "+190,000 Followers",
        // sports brand deal (Nike/Gatorade tier) + existing income = big quarter
        effects: { followers: 190000, viewers: 1500, money: 180000 },
        nextEvent: 14,
      },
      {
        text: "Go back to normal gaming content",
        viralClip: false,
        effects: { followers: -8000, viewers: -1500, money: -15000 },
        nextEvent: "BAD_dropped_sports",
      },
    ],
  },

  // =====================================================
  // FAZE ARC
  // org signing bonus + org-level brand deals
  // =====================================================

  {
    id: 14,
    age: 21,
    title: "FaZe Invitation",
    text: "FaZe officially offers you a contract. This is 'legitimacy.' This is the org.",
    choices: [
      {
        text: "Join FaZe immediately",
        viralClip: true,
        clipTitle: "LACY JOINS FAZE",
        clipGain: "+320,000 Followers",
        // signing bonus + org salary + org brand deals + revenue share
        effects: { followers: 320000, viewers: 2000, money: 280000 },
        nextEvent: 15,
      },
      {
        text: "Stay independent — you don't need them",
        viralClip: false,
        effects: { followers: -15000, viewers: -2000, money: -30000 },
        nextEvent: "BAD_stay_independent",
      },
    ],
  },

  // =====================================================
  // FAZE HOUSE ARC
  // org subsidizing house, collabs = cross-promotion $
  // =====================================================

  {
    id: 15,
    age: 21,
    title: "FaZe House Content",
    text: "You move into the content house. Daily collabs, constant cameras, and a structured content machine.",
    choices: [
      {
        text: "Farm every possible collab",
        viralClip: true,
        clipTitle: "LACY MOVES INTO THE FAZE HOUSE",
        clipGain: "+350,000 Followers",
        // org pays rent + collab revenue + merch split + multiple brand deals
        effects: { followers: 350000, viewers: 1000, money: 380000 },
        nextEvent: 16,
      },
      {
        text: "Keep to yourself — focus on solo streams",
        viralClip: false,
        effects: { followers: -20000, viewers: -3000, money: -50000 },
        nextEvent: "BAD_faze_solo",
      },
    ],
  },

  // =====================================================
  // MARLON ARC
  // dual audience = dual revenue, merch doing numbers
  // =====================================================

  {
    id: 16,
    age: 21,
    title: "Marlon Collabs",
    text: "Collabs with Marlon are going insane. Every stream trends. The chemistry is undeniable.",
    choices: [
      {
        text: "Lean fully into the chaos with Marlon",
        viralClip: true,
        clipTitle: "LACY + MARLON STREAM GOES INSANE",
        clipGain: "+290,000 Followers",
        // merch collab drop + split brand deals + YouTube rev hitting peak
        effects: { followers: 290000, viewers: 500, money: 480000 },
        nextEvent: 17,
      },
      {
        text: "Pull back — you don't want to be a duo act",
        viralClip: false,
        effects: { followers: -12000, viewers: -2000, money: -40000 },
        nextEvent: "BAD_dropped_marlon",
      },
    ],
  },

  // =====================================================
  // HAIRCUT ARC
  // peak virality = peak sponsorship value
  // =====================================================

  {
    id: 17,
    age: 21,
    title: "Haircut Stream",
    text: "Chat has been daring you for weeks. 50,000 people watching live waiting to see if you'll actually do it.",
    choices: [
      {
        text: "DO IT LIVE — shave your head",
        viralClip: true,
        clipTitle: "LACY SHAVES HIS HEAD LIVE",
        clipGain: "+270,000 Followers",
        // massive live viewership = record sub night + sponsor activation
        effects: { followers: 270000, viewers: 500, money: 620000 },
        nextEvent: 18,
      },
      {
        text: "Back out — it's just hair but it's YOUR hair",
        viralClip: false,
        effects: { followers: -25000, viewers: -4000, money: -60000 },
        nextEvent: "BAD_backed_out_haircut",
      },
    ],
  },

  // =====================================================
  // LEAVE FAZE / CORE
  // leaving org = short-term dip, long-term equity upside
  // =====================================================

  {
    id: 18,
    age: 22,
    title: "FaZe Drama",
    text: "Tension grows inside FaZe. Creators are leaving. The org is cracking. You have to decide what side of history you're on.",
    choices: [
      {
        text: "Leave FaZe and build something new",
        viralClip: true,
        clipTitle: "END OF FAZE",
        clipGain: "+0 Followers",
        // lose org salary but keep personal income; drama bump drives subs
        effects: { followers: 20000, viewers: -500, money: 700000 },
        nextEvent: 19,
      },
      {
        text: "Stay with FaZe — loyalty matters",
        viralClip: false,
        effects: { followers: -30000, viewers: -4000, money: -80000 },
        nextEvent: "BAD_stayed_faze",
      },
    ],
  },

  {
    id: 19,
    age: 22,
    title: "Create CORE",
    text: "You help launch CORE with other creators. It's your org, your rules, your brand.",
    choices: [
      {
        text: "Go all in on CORE — make it huge",
        viralClip: true,
        clipTitle: "CORE ANNOUNCEMENT BREAKS THE INTERNET",
        clipGain: "+406,535 Followers",
        // founding equity + investor round + org-level deals + personal income
        effects: { followers: 406535, viewers: 1010, money: 1350000 },
        nextEvent: 20,
      },
      {
        text: "Treat it as a side project — stay solo",
        viralClip: false,
        effects: { followers: -15000, viewers: -2000, money: -100000 },
        nextEvent: "BAD_core_halfhearted",
      },
    ],
  },

  // =====================================================
  // GOOD ENDING
  // ~$2M net worth — house, org equity, brand deals, subs
  // =====================================================

  {
    id: 20,
    age: 23,
    title: "Internet Main Character",
    text: "2.5 million followers. 20,000 average viewers. Brand deals. A house in Miami. You run your own org. You went from 2 viewers in a basement to one of the defining creators of your generation. They said it wouldn't happen.",
    ending: "good",
    choices: [],
  },

  // =====================================================
  // QUIT EARLY ENDING
  // =====================================================

  {
    id: 99,
    age: 17,
    title: "Normal Life",
    text: "You quit streaming. The PC collects dust. You got a part-time job. Sometimes you see a streamer clip on your feed and wonder what would've happened if you kept going. You'll never know.",
    ending: "bad",
    choices: [],
  },

  // =====================================================
  // BAD PATH — CASUAL START
  // =====================================================

  {
    id: "BAD_casual_start",
    age: 17,
    title: "The Casual Trap",
    text: "Streaming casually means streaming to nobody. Your most viewed TikTok has 14 views. You're not really a streamer — you're just a guy with a capture card.",
    choices: [
      {
        text: "Try to take it seriously now",
        viralClip: false,
        effects: { followers: 200, viewers: 2, money: -100 },
        nextEvent: "BAD_too_late_early",
      },
      {
        text: "Accept this was just a hobby",
        viralClip: false,
        effects: { money: 0 },
        nextEvent: 99,
      },
    ],
  },

  {
    id: "BAD_too_late_early",
    age: 18,
    title: "Trying Too Late",
    text: "You try grinding now but you've lost months of momentum. Other streamers who started when you did are already at 10k followers. You're still at 200. The consistency gap is brutal.",
    choices: [
      {
        text: "Keep pushing — grind it out",
        viralClip: false,
        effects: { followers: 300, viewers: 3, money: -200 },
        nextEvent: "BAD_grinding_alone",
      },
      {
        text: "Call it — streaming isn't for you",
        viralClip: false,
        effects: { money: 0 },
        nextEvent: "BAD_gave_up_for_school",
      },
    ],
  },

  // =====================================================
  // BAD PATH — PARENTS WIN
  // =====================================================

  {
    id: "BAD_parents_win",
    age: 17,
    title: "The Break That Never Ended",
    text: "A week off turned into a month. The small routine you built collapsed. You go back to streaming but the energy is gone and so are the 2 viewers you had.",
    choices: [
      {
        text: "Try rebuilding from scratch",
        viralClip: false,
        effects: { followers: 100, viewers: 1, money: -150 },
        nextEvent: "BAD_grinding_alone",
      },
      {
        text: "Parents were right — focus on school",
        viralClip: false,
        effects: { money: 0 },
        nextEvent: "BAD_gave_up_for_school",
      },
    ],
  },

  // =====================================================
  // BAD PATH — STOPPED CLIX SPAM
  // =====================================================

  {
    id: "BAD_stopped_clix",
    age: 18,
    title: "Safe and Ignored",
    text: "You played it safe. No ban. Also no clip, no exposure, no growth. Your stream sits at 6 average viewers for 4 straight months. You watch Clix's stream and wonder what would've happened.",
    choices: [
      {
        text: "Find another big streamer to get noticed by",
        viralClip: false,
        effects: { followers: 200, viewers: 3, money: -300 },
        nextEvent: "BAD_chasing_clout",
      },
      {
        text: "Accept you're not built for the attention game",
        viralClip: false,
        effects: { money: 0 },
        nextEvent: "BAD_grinding_alone",
      },
    ],
  },

  // =====================================================
  // BAD PATH — TOO NORMAL ON CLIX STREAM
  // =====================================================

  {
    id: "BAD_too_normal",
    age: 18,
    title: "Missed the Moment",
    text: "You acted normal and cool. Clix moved on in 30 seconds. Chat forgot your name. The clip that could've been your breakthrough got zero traction. You had one shot and you played it safe.",
    choices: [
      {
        text: "Try reaching out to Clix on Twitter",
        viralClip: false,
        effects: { followers: 100, viewers: 1, money: -200 },
        nextEvent: "BAD_chasing_clout",
      },
      {
        text: "Accept that moment is gone forever",
        viralClip: false,
        effects: { followers: 50, money: 0 },
        nextEvent: "BAD_grinding_alone",
      },
    ],
  },

  // =====================================================
  // BAD PATH — AURA FLOP
  // =====================================================

  {
    id: "BAD_aura_flop",
    age: 18,
    title: "The Aura That Wasn't There",
    text: "You tried to be cool. Chat immediately called it out. A clip of you trying to act mysterious goes viral on Twitter as a meme. Comments say 'bro thinks he has aura 💀'. You've become a joke for the wrong reasons.",
    choices: [
      {
        text: "Own it and lean into the meme",
        viralClip: false,
        effects: { followers: 1500, viewers: 100, money: 500 },
        nextEvent: "BAD_wrong_viral",
      },
      {
        text: "Delete the clips and go quiet",
        viralClip: false,
        effects: { followers: -500, viewers: -50, money: -200 },
        nextEvent: "BAD_grinding_alone",
      },
    ],
  },

  // =====================================================
  // BAD PATH — FARMED THE LOST KID
  // =====================================================

  {
    id: "BAD_farmed_kid",
    age: 18,
    title: "Clout Chasing Allegations",
    text: "Twitter went in on you. 'Using a lost crying child for content' was trending under your name for 48 hours. Clix publicly distanced himself. Your following dropped 3,000 in two days.",
    choices: [
      {
        text: "Post a lengthy apology video",
        viralClip: false,
        effects: { followers: -2000, viewers: -300, money: -1000 },
        nextEvent: "BAD_cancelled_small",
      },
      {
        text: "Go private and wait for it to blow over",
        viralClip: false,
        effects: { followers: -1000, viewers: -150, money: -500 },
        nextEvent: "BAD_grinding_alone",
      },
    ],
  },

  // =====================================================
  // BAD PATH — SOFT APOLOGY
  // =====================================================

  {
    id: "BAD_soft_apology",
    age: 19,
    title: "They Called You Soft",
    text: "You apologized and ended the stream. 'Lacy deleted the vod' was trending. The audience that was starting to build turned on you — not for crashing out, but for being embarrassed about it. The momentum died completely.",
    choices: [
      {
        text: "Try a comeback stream next week",
        viralClip: false,
        effects: { followers: 500, viewers: 50, money: 300 },
        nextEvent: "BAD_comeback_flop",
      },
      {
        text: "Take a long break — you need to reset",
        viralClip: false,
        effects: { followers: -2000, viewers: -200, money: -500 },
        nextEvent: "BAD_long_break",
      },
    ],
  },

  // =====================================================
  // BAD PATH — STAYED HOME
  // =====================================================

  {
    id: "BAD_stay_home",
    age: 20,
    title: "Left Behind",
    text: "You stayed home. Dallas happened without you. Creators you used to collab with are now living together, streaming together, blowing up together. You're still in your room watching their clips.",
    choices: [
      {
        text: "Move to Dallas late — better late than never",
        viralClip: false,
        effects: { followers: 2000, viewers: 100, money: -3000 },
        nextEvent: "BAD_late_arrival",
      },
      {
        text: "Stay home and grind solo",
        viralClip: false,
        effects: { followers: 500, viewers: 20, money: 1000 },
        nextEvent: "BAD_grinding_alone",
      },
    ],
  },

  // =====================================================
  // BAD PATH — KEPT DARLA PRIVATE
  // =====================================================

  {
    id: "BAD_private_darla",
    age: 20,
    title: "The Wave You Didn't Ride",
    text: "You kept it private. The clips people wanted never came. TikTok's algorithm buried you. Darla even made her own content about it and got 200k views. You're not even the main character in your own story right now.",
    choices: [
      {
        text: "Make a response video — use the drama",
        viralClip: false,
        effects: { followers: 1000, viewers: 80, money: 800 },
        nextEvent: "BAD_chasing_clout",
      },
      {
        text: "Move on — focus on new content",
        viralClip: false,
        effects: { followers: 200, viewers: 15, money: 200 },
        nextEvent: "BAD_grinding_alone",
      },
    ],
  },

  // =====================================================
  // BAD PATH — STAYED LOWKEY IN MIAMI
  // =====================================================

  {
    id: "BAD_lowkey_miami",
    age: 20,
    title: "Invisible in Miami",
    text: "You were in Miami but nobody knew it. You didn't collab, didn't stream IRL, didn't make noise. You were in the same city as some of the biggest creators on the internet and you chose to stay in an Airbnb watching them on your phone.",
    choices: [
      {
        text: "Force your way into the content scene",
        viralClip: false,
        effects: { followers: 500, viewers: 30, money: -2000 },
        nextEvent: "BAD_forced_collabs",
      },
      {
        text: "Go back home — Miami wasn't for you",
        viralClip: false,
        effects: { followers: -2000, viewers: -200, money: -5000 },
        nextEvent: "BAD_grinding_alone",
      },
    ],
  },

  // =====================================================
  // BAD PATH — BORING ON ADIN
  // =====================================================

  {
    id: "BAD_boring_adin",
    age: 20,
    title: "Chat Ignored You",
    text: "You acted mature and professional. Adin's chat typed 'who?' and moved on. Adin laughed awkwardly and changed the subject. You got zero clips, zero followers. 80,000 people watched and you left with nothing.",
    choices: [
      {
        text: "Beg Adin for another appearance",
        viralClip: false,
        effects: { followers: 200, viewers: 10, money: -1000 },
        nextEvent: "BAD_chasing_clout",
      },
      {
        text: "Accept you missed your shot",
        viralClip: false,
        effects: { followers: 100, money: 0 },
        nextEvent: "BAD_grinding_alone",
      },
    ],
  },

  // =====================================================
  // BAD PATH — CALMED DOWN IN MIAMI
  // =====================================================

  {
    id: "BAD_calm_miami",
    age: 21,
    title: "Fell Off Allegations",
    text: "The calm streams killed everything. Viewers came for chaos and got a guy sitting at a desk quietly. 'Lacy fell off' started trending. Your viewer count dropped from 14,000 to 800 in three weeks. Brands that were interested pulled out.",
    choices: [
      {
        text: "Try to reignite the chaos",
        viralClip: false,
        effects: { followers: 2000, viewers: 300, money: 3000 },
        nextEvent: "BAD_forced_content",
      },
      {
        text: "Accept the fall off and go smaller",
        viralClip: false,
        effects: { followers: -5000, viewers: -500, money: -10000 },
        nextEvent: "BAD_grinding_alone",
      },
    ],
  },

  // =====================================================
  // BAD PATH — DROPPED SPORTS CLIPS
  // =====================================================

  {
    id: "BAD_dropped_sports",
    age: 21,
    title: "Dropped the Wave",
    text: "You went back to gaming right when sports content was working. The algorithm buried you immediately. That one-handed catch clip stayed your most viewed video ever — a reminder of what could've been.",
    choices: [
      {
        text: "Go back to sports clips",
        viralClip: false,
        effects: { followers: 1000, viewers: 200, money: 2000 },
        nextEvent: "BAD_forced_content",
      },
      {
        text: "Double down on gaming — it's who you are",
        viralClip: false,
        effects: { followers: -3000, viewers: -400, money: -5000 },
        nextEvent: "BAD_grinding_alone",
      },
    ],
  },

  // =====================================================
  // BAD PATH — STAYED INDEPENDENT
  // =====================================================

  {
    id: "BAD_stay_independent",
    age: 21,
    title: "The Org You Turned Down",
    text: "You turned down FaZe. Six months later the creators who joined are getting brand deals, co-streams, and media coverage. You're still posting to a shrinking audience with no org backing and no resources.",
    choices: [
      {
        text: "Try to get picked up by a different org",
        viralClip: false,
        effects: { followers: 1000, viewers: 100, money: 5000 },
        nextEvent: "BAD_chasing_clout",
      },
      {
        text: "Stay fully independent — figure it out",
        viralClip: false,
        effects: { followers: 500, viewers: 50, money: 2000 },
        nextEvent: "BAD_grinding_alone",
      },
    ],
  },

  // =====================================================
  // BAD PATH — WENT SOLO IN FAZE HOUSE
  // =====================================================

  {
    id: "BAD_faze_solo",
    age: 21,
    title: "FaZe Drops You",
    text: "FaZe put you in the house and you barely showed up for collabs. After 3 months they quietly didn't renew your contract. No announcement. No drama. Just a DM saying they were going in a different direction.",
    choices: [
      {
        text: "Publicly expose the situation for clout",
        viralClip: false,
        effects: { followers: 3000, viewers: 400, money: -5000 },
        nextEvent: "BAD_wrong_viral",
      },
      {
        text: "Move on quietly and rebuild",
        viralClip: false,
        effects: { followers: -8000, viewers: -1000, money: -10000 },
        nextEvent: "BAD_grinding_alone",
      },
    ],
  },

  // =====================================================
  // BAD PATH — DROPPED MARLON
  // =====================================================

  {
    id: "BAD_dropped_marlon",
    age: 21,
    title: "You Killed the Chemistry",
    text: "You pulled back from Marlon right when it was working. He kept posting without you and grew 30% the month after you stopped collabing. Your stream dropped 15%. Chat started commenting 'where's Marlon?' every session.",
    choices: [
      {
        text: "Reach out to Marlon and try to fix it",
        viralClip: false,
        effects: { followers: 1500, viewers: 200, money: 3000 },
        nextEvent: "BAD_forced_collabs",
      },
      {
        text: "Go fully solo — you don't need him",
        viralClip: false,
        effects: { followers: -4000, viewers: -600, money: -8000 },
        nextEvent: "BAD_grinding_alone",
      },
    ],
  },

  // =====================================================
  // BAD PATH — BACKED OUT OF HAIRCUT
  // =====================================================

  {
    id: "BAD_backed_out_haircut",
    age: 22,
    title: "The Biggest L of Your Career",
    text: "You backed out in front of 50,000 viewers. 'Lacy backed out 💀' stayed in people's heads. It cemented you as someone who flinches under pressure. Numbers never fully recovered.",
    choices: [
      {
        text: "Try to prove yourself with a bigger stunt",
        viralClip: false,
        effects: { followers: 2000, viewers: 300, money: -5000 },
        nextEvent: "BAD_forced_content",
      },
      {
        text: "Shave your head off-stream — quiet redemption",
        viralClip: false,
        effects: { followers: 5000, viewers: 800, money: 8000 },
        nextEvent: "BAD_mid_ending",
      },
    ],
  },

  // =====================================================
  // BAD PATH — STAYED WITH FAZE AS IT COLLAPSED
  // =====================================================

  {
    id: "BAD_stayed_faze",
    age: 22,
    title: "The Org That Crumbled",
    text: "You stayed loyal. FaZe's drama escalated. Sponsors pulled out. A major exodus happened publicly and you got lumped in even though you didn't cause any of it. Guilt by association killed three potential brand deals.",
    choices: [
      {
        text: "Leave now and distance yourself publicly",
        viralClip: false,
        effects: { followers: 3000, viewers: 500, money: 10000 },
        nextEvent: "BAD_mid_ending",
      },
      {
        text: "Stay until the bitter end out of loyalty",
        viralClip: false,
        effects: { followers: -10000, viewers: -1500, money: -25000 },
        nextEvent: "BAD_loyal_ending",
      },
    ],
  },

  // =====================================================
  // BAD PATH — CORE HALFHEARTED
  // =====================================================

  {
    id: "BAD_core_halfhearted",
    age: 22,
    title: "CORE Without You",
    text: "CORE launched without your real investment. The other creators carried it and it grew — just without you at the center. You're technically a member but nobody mentions your name in the comments.",
    choices: [
      {
        text: "Get more involved — reclaim your spot",
        viralClip: false,
        effects: { followers: 5000, viewers: 600, money: 20000 },
        nextEvent: "BAD_mid_ending",
      },
      {
        text: "Go fully solo — CORE isn't your thing",
        viralClip: false,
        effects: { followers: -8000, viewers: -1000, money: -15000 },
        nextEvent: "BAD_grinding_alone",
      },
    ],
  },

  // =====================================================
  // SHARED BAD PATH NODES
  // =====================================================

  {
    id: "BAD_grinding_alone",
    age: 22,
    title: "The Grind That Goes Nowhere",
    text: "You've been streaming for 6 years. You're consistent. You're dedicated. And you're averaging 80 viewers. No org, no deals, no virality. The people you started with are on 1 million followers.",
    choices: [
      {
        text: "Keep grinding — the breakthrough is coming",
        viralClip: false,
        effects: { followers: 500, viewers: 10, money: -500 },
        nextEvent: "BAD_almost_made_it",
      },
      {
        text: "Accept this is your ceiling",
        viralClip: false,
        effects: { money: 0 },
        nextEvent: "BAD_mid_ending",
      },
    ],
  },

  {
    id: "BAD_chasing_clout",
    age: 21,
    title: "Desperate Moves",
    text: "You've been chasing attention for two years and it shows. Every move feels calculated and forced. The audience can feel it. Clips that would've landed when you were authentic now get 200 views.",
    choices: [
      {
        text: "One final shot — something massive",
        viralClip: false,
        effects: { followers: 1000, viewers: 80, money: -3000 },
        nextEvent: "BAD_forced_content",
      },
      {
        text: "Stop chasing and go back to basics",
        viralClip: false,
        effects: { followers: 200, viewers: 15, money: 500 },
        nextEvent: "BAD_grinding_alone",
      },
    ],
  },

  {
    id: "BAD_comeback_flop",
    age: 20,
    title: "Nobody Showed Up",
    text: "You announced the comeback stream. 90 people watched. The energy felt off and chat could tell you weren't confident. After the stream ended you sat in the dark for a while.",
    choices: [
      {
        text: "Keep streaming every week regardless",
        viralClip: false,
        effects: { followers: 300, viewers: 20, money: 800 },
        nextEvent: "BAD_grinding_alone",
      },
      {
        text: "Take another break — you're not ready",
        viralClip: false,
        effects: { followers: -500, viewers: -30, money: -200 },
        nextEvent: "BAD_long_break",
      },
    ],
  },

  {
    id: "BAD_long_break",
    age: 20,
    title: "Offline For a Long Time",
    text: "You went offline. Weeks became months. Your channel slowly decayed in the algorithm. When you finally came back the platform had changed, the trends had moved on, and your old clips had that dated look.",
    choices: [
      {
        text: "Rebuild from scratch with a new identity",
        viralClip: false,
        effects: { followers: 400, viewers: 25, money: -1000 },
        nextEvent: "BAD_grinding_alone",
      },
      {
        text: "It's over — close the chapter",
        viralClip: false,
        effects: { money: 0 },
        nextEvent: "BAD_quit_ending",
      },
    ],
  },

  {
    id: "BAD_late_arrival",
    age: 21,
    title: "Showing Up After the Party",
    text: "You moved to Dallas a year late. The scene was established. Creators had their friend groups locked in. You were the new guy nobody was sure about.",
    choices: [
      {
        text: "Force your way in — be too loud to ignore",
        viralClip: false,
        effects: { followers: 1500, viewers: 120, money: -2000 },
        nextEvent: "BAD_forced_collabs",
      },
      {
        text: "Accept you missed the window",
        viralClip: false,
        effects: { followers: 300, viewers: 20, money: 500 },
        nextEvent: "BAD_grinding_alone",
      },
    ],
  },

  {
    id: "BAD_forced_collabs",
    age: 21,
    title: "Forced Chemistry",
    text: "You pushed for collabs but everyone could feel you were trying too hard. Not funny awkward — uncomfortable awkward. Bigger creators stopped inviting you back.",
    choices: [
      {
        text: "Try going viral solo to prove yourself",
        viralClip: false,
        effects: { followers: 800, viewers: 60, money: -1500 },
        nextEvent: "BAD_wrong_viral",
      },
      {
        text: "Fall back and work on your own content",
        viralClip: false,
        effects: { followers: 200, viewers: 15, money: 300 },
        nextEvent: "BAD_grinding_alone",
      },
    ],
  },

  {
    id: "BAD_wrong_viral",
    age: 21,
    title: "Viral For the Wrong Reasons",
    text: "You went viral — but not the way you wanted. People are talking about you as a meme. The followers you gained don't watch your streams. They followed for the joke.",
    choices: [
      {
        text: "Lean into it — any attention is good attention",
        viralClip: false,
        effects: { followers: 2000, viewers: 50, money: 1000 },
        nextEvent: "BAD_mid_ending",
      },
      {
        text: "Ignore it and focus on real content",
        viralClip: false,
        effects: { followers: -1000, viewers: -30, money: 200 },
        nextEvent: "BAD_grinding_alone",
      },
    ],
  },

  {
    id: "BAD_cancelled_small",
    age: 19,
    title: "Small Scale Cancelled",
    text: "You weren't big enough to be truly cancelled but big enough for the drama to follow you. Every time you tried to grow into a new space, someone in the replies brought up the situation.",
    choices: [
      {
        text: "Rebrand under a new name and start fresh",
        viralClip: false,
        effects: { followers: -2000, viewers: -200, money: -1000 },
        nextEvent: "BAD_grinding_alone",
      },
      {
        text: "Stay and fight through the reputation",
        viralClip: false,
        effects: { followers: 500, viewers: 30, money: 500 },
        nextEvent: "BAD_chasing_clout",
      },
    ],
  },

  {
    id: "BAD_forced_content",
    age: 22,
    title: "Forcing It",
    text: "You can feel yourself manufacturing content now. Nothing is organic. You script reactions, bait drama, post things you don't care about because the algorithm might. Long-time viewers comment 'this isn't the same Lacy'.",
    choices: [
      {
        text: "Double down — this is what works now",
        viralClip: false,
        effects: { followers: 1500, viewers: 100, money: 5000 },
        nextEvent: "BAD_mid_ending",
      },
      {
        text: "Stop everything and be honest with chat",
        viralClip: false,
        effects: { followers: 500, viewers: 200, money: 2000 },
        nextEvent: "BAD_mid_ending",
      },
    ],
  },

  // =====================================================
  // BAD ENDINGS
  // =====================================================

  {
    id: "BAD_gave_up_for_school",
    age: 18,
    title: "The Responsible Choice",
    text: "You studied. You did well. Your parents were proud. Sometimes you open Twitch late at night and watch other streamers for a few minutes before closing the tab. It's fine. You made the responsible choice. It just doesn't feel like a win.",
    ending: "bad",
    choices: [],
  },

  {
    id: "BAD_almost_made_it",
    age: 23,
    title: "Almost Made It",
    text: "You gave it everything for 7 years. 300 people who genuinely love your streams. No money, no deals, no recognition. You're proud and exhausted in equal measure. Time to get a real job.",
    ending: "bad",
    choices: [],
  },

  {
    id: "BAD_mid_ending",
    age: 23,
    title: "Stuck at Mid",
    text: "You built something but never broke through. 8,000 followers. 200 average viewers. Small brand deals that barely cover equipment. The content is solid. The community likes you. But the big moment never came.",
    ending: "mid",
    choices: [],
  },

  {
    id: "BAD_loyal_ending",
    age: 23,
    title: "Loyalty Tax",
    text: "You stayed loyal to the end. The org collapsed publicly. Your name got dragged through it even though you did nothing wrong. You're rebuilding from 5,000 followers at 23. Your biggest lesson: loyalty without self-preservation is just slow career suicide.",
    ending: "bad",
    choices: [],
  },

  {
    id: "BAD_quit_ending",
    age: 21,
    title: "Logged Off",
    text: "You logged off for the last time. No big announcement. No farewell stream crowd. You just stopped. The channel is still up. You haven't deleted it. Sometimes you look at the analytics — a ghost town of numbers that used to feel important.",
    ending: "bad",
    choices: [],
  },
];

export default events;