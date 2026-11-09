// Innehåll för varje exempelbransch. Byt ut texterna för att anpassa till en riktig kund.
const content = {
  cafe: {
    logoMark: "K",
    name: "Kafé Linden",
    navServices: "Meny",
    eyebrow: "Café & bageri i centrum",
    headline: "Nybakat varje morgon, sedan 2009.",
    lead: "Surdegsbröd, kanelbullar och kaffe från lokala rosterier. Slå dig ner en stund eller ta med något gott på vägen.",
    cta: "Hitta hit",
    cta2: "Se menyn",
    fact1: "⭐ 4,8 på Google",
    fact2: "📍 Storgatan 12",
    fact3: "🥐 Allt bakat på plats",
    heroIcon: "☕",
    heroCardTitle: "Dagens fika",
    heroCardText: "Kardemummabulle + kaffe",
    heroCardPrice: "55 kr",
    servicesEyebrow: "Från vårt kök",
    servicesTitle: "Det här erbjuder vi",
    services: [
      { icon: "☕", title: "Kaffe & te", text: "Espresso, bryggkaffe och te från lokala rosterier. Påtår ingår.", price: "från 32 kr" },
      { icon: "🥪", title: "Lunch", text: "Dagens soppa eller smörgås på eget surdegsbröd, vardagar 11–14.", price: "från 95 kr" },
      { icon: "🎂", title: "Tårtor & catering", text: "Beställ tårtor och fikabröd till kalaset eller kontoret.", price: "Offert på förfrågan" },
    ],
    aboutIcon: "🥐",
    aboutTitle: "Ett familjeägt kafé mitt i stan",
    aboutText1: "Vi är Anna och Erik. Vi öppnade Kafé Linden för att skapa en plats där grannar möts över en kopp kaffe och något hembakat.",
    aboutText2: "Allt bakas på plats varje morgon med råvaror från gårdar i närheten.",
    usps: ["Glutenfria och veganska alternativ varje dag", "Barnvänligt med lekhörna", "Uteservering maj–september"],
    reviews: [
      { text: "Stans bästa kanelbullar, utan tvekan. Mysig miljö och supertrevlig personal.", who: "Lisa, Google" },
      { text: "Beställde tårta till dotterns kalas – vacker och jättegod. Kommer beställa igen!", who: "Johan, Facebook" },
      { text: "Mitt stamställe för lunch. Alltid god soppa och nybakat bröd.", who: "Maria, Google" },
    ],
    contactTitle: "Välkommen förbi!",
    contactText: "Har du frågor om tårtbeställning eller catering? Hör av dig så återkommer vi samma dag.",
    address: "Storgatan 12, 123 45 Småstad",
    formTitle: "Beställ eller fråga",
    formPlaceholder: "Jag vill beställa en tårta till lördag…",
    hours: [["Måndag–fredag", "07–18"], ["Lördag", "09–17"], ["Söndag", "10–16"]],
  },

  hantverkare: {
    logoMark: "B",
    name: "Berg Bygg & Snickeri",
    navServices: "Tjänster",
    eyebrow: "Snickare & byggfirma",
    headline: "Vi bygger det du drömmer om – och gör det ordentligt.",
    lead: "Renovering, tillbyggnad och snickeri för privatpersoner och företag. Fast pris, tydlig tidsplan och ROT-avdrag direkt på fakturan.",
    cta: "Begär offert",
    cta2: "Våra tjänster",
    fact1: "⭐ 4,9 på Reco",
    fact2: "🛡️ F-skatt & försäkring",
    fact3: "🧾 ROT-avdrag",
    heroIcon: "🔨",
    heroCardTitle: "Gratis hembesök",
    heroCardText: "Vi kommer ut och ger en offert",
    heroCardPrice: "0 kr",
    servicesEyebrow: "Vad vi gör",
    servicesTitle: "Våra tjänster",
    services: [
      { icon: "🛁", title: "Badrumsrenovering", text: "Komplett badrum med certifierat tätskikt – från rivning till sista kakelplattan.", price: "Fast pris efter besiktning" },
      { icon: "🏡", title: "Altan & tillbyggnad", text: "Altaner, uterum och tillbyggnader byggda för svenskt klimat.", price: "ROT-avdrag 30 %" },
      { icon: "🪚", title: "Snickeri & kök", text: "Köksmontering, platsbyggda förvaringar, golv och listarbeten.", price: "Timpris eller fast pris" },
    ],
    aboutIcon: "🪵",
    aboutTitle: "Lokalt byggföretag med 20 års erfarenhet",
    aboutText1: "Berg Bygg startades av Mikael Berg 2005. I dag är vi sex hantverkare som tar hand om allt från små reparationer till hela husrenoveringar.",
    aboutText2: "Vi tror på raka besked, städade arbetsplatser och att alltid hålla det vi lovar.",
    usps: ["Fast pris – inga överraskningar", "Våtrumsbehörighet enligt BKR", "5 års garanti på utfört arbete"],
    reviews: [
      { text: "Renoverade vårt badrum på tre veckor precis som utlovat. Snyggt och noggrant gjort!", who: "Familjen Andersson" },
      { text: "Bra kommunikation genom hela projektet och de städade efter sig varje dag.", who: "Peter, Reco" },
      { text: "Vår nya altan blev ännu finare än vi tänkt oss. Rekommenderas varmt.", who: "Sara, Google" },
    ],
    contactTitle: "Berätta om ditt projekt",
    contactText: "Beskriv kort vad du vill göra så kontaktar vi dig inom 24 timmar för att boka ett kostnadsfritt hembesök.",
    address: "Industrivägen 4, 123 45 Småstad",
    formTitle: "Begär kostnadsfri offert",
    formPlaceholder: "Vi vill renovera badrummet, ca 6 kvm…",
    hours: [["Måndag–fredag", "07–16"], ["Lördag", "Enligt överenskommelse"], ["Söndag", "Stängt"]],
  },

  mekaniker: {
    logoMark: "N",
    name: "Nilssons Bilverkstad",
    navServices: "Tjänster",
    eyebrow: "Bilverkstad för alla märken",
    headline: "Service och reparation du kan lita på.",
    lead: "Vi servar och reparerar alla bilmärken – med bibehållen nybilsgaranti. Du får alltid prisbesked innan vi sätter igång.",
    cta: "Boka tid",
    cta2: "Se priser",
    fact1: "⭐ 4,7 på Google",
    fact2: "🚗 Alla bilmärken",
    fact3: "🔧 Lånebil finns",
    heroIcon: "🔧",
    heroCardTitle: "Däckbyte",
    heroCardText: "Skifte inkl. balansering",
    heroCardPrice: "från 495 kr",
    servicesEyebrow: "Verkstaden",
    servicesTitle: "Det här hjälper vi till med",
    services: [
      { icon: "🛠️", title: "Service", text: "Service enligt tillverkarens serviceprogram. Nybilsgarantin gäller.", price: "från 1 995 kr" },
      { icon: "🛞", title: "Däck & hjulinställning", text: "Däckbyte, däckhotell och hjulinställning med modern utrustning.", price: "från 495 kr" },
      { icon: "🔍", title: "Felsökning & reparation", text: "Diagnos, bromsar, kamrem, AC och avgassystem.", price: "Prisbesked innan start" },
    ],
    aboutIcon: "🚗",
    aboutTitle: "Familjeverkstad sedan 1987",
    aboutText1: "Nilssons Bilverkstad har tagit hand om ortens bilar i tre generationer. Hos oss pratar du direkt med mekanikern som jobbar med din bil.",
    aboutText2: "Vi är en ansluten MRF-verkstad och använder originaldelar eller delar av motsvarande kvalitet.",
    usps: ["Prisbesked innan vi börjar", "Lånebil vid längre reparationer", "12 månaders garanti på reparationer"],
    reviews: [
      { text: "Ärliga och kunniga. De fixade felet och tog betydligt mindre än märkesverkstaden.", who: "Anders, Google" },
      { text: "Smidig bokning, bilen klar samma dag och tydlig förklaring av vad som gjorts.", who: "Emma, Google" },
      { text: "Har lämnat in våra bilar här i över tio år. Alltid lika bra bemötande.", who: "Kent, Facebook" },
    ],
    contactTitle: "Boka tid på verkstaden",
    contactText: "Ring oss eller skicka ett meddelande med registreringsnummer och vad du behöver hjälp med.",
    address: "Verkstadsgatan 8, 123 45 Småstad",
    formTitle: "Boka tid",
    formPlaceholder: "ABC 123 – behöver service och byta till vinterdäck…",
    hours: [["Måndag–fredag", "07–17"], ["Lördag", "Stängt"], ["Söndag", "Stängt"]],
  },
};

// ---------- Rendering ----------
function render(key) {
  const c = content[key];
  document.body.dataset.theme = key;
  document.title = `${c.name} – exempelhemsida`;

  document.querySelectorAll("[data-bind]").forEach((el) => {
    const v = c[el.dataset.bind];
    if (v !== undefined) el.textContent = v;
  });
  document.querySelectorAll("[data-bind-placeholder]").forEach((el) => {
    el.placeholder = c[el.dataset.bindPlaceholder];
  });

  document.getElementById("services").innerHTML = c.services.map((s) => `
    <article class="card">
      <div class="card-icon" aria-hidden="true">${s.icon}</div>
      <h3>${s.title}</h3>
      <p>${s.text}</p>
      <p class="price">${s.price}</p>
    </article>`).join("");

  document.getElementById("usps").innerHTML = c.usps.map((u) => `<li>${u}</li>`).join("");

  document.getElementById("reviews").innerHTML = c.reviews.map((r) => `
    <figure class="review">
      <div class="stars" aria-label="5 av 5 stjärnor">★★★★★</div>
      <blockquote>”${r.text}”</blockquote>
      <figcaption>— ${r.who}</figcaption>
    </figure>`).join("");

  // Markera dagens rad i öppettiderna
  const day = new Date().getDay(); // 0 = söndag
  const todayRow = day === 0 ? 2 : day === 6 ? 1 : 0;
  document.getElementById("hours").innerHTML = c.hours.map(([d, t], i) =>
    `<tr${i === todayRow ? ' class="today"' : ""}><td>${d}</td><td>${t}</td></tr>`).join("");

  document.querySelectorAll(".demo-bar button").forEach((b) =>
    b.classList.toggle("active", b.dataset.set === key));
}

document.querySelectorAll(".demo-bar button").forEach((btn) =>
  btn.addEventListener("click", () => {
    render(btn.dataset.set);
    history.replaceState(null, "", `#${btn.dataset.set}`);
  }));

// ---------- Mobilmeny ----------
const toggle = document.querySelector(".menu-toggle");
const links = document.querySelector(".nav-links");
toggle.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});
links.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    links.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }
});

// Starta med bransch från URL (#cafe, #hantverkare, #mekaniker) om den finns
const start = location.hash.slice(1);
render(content[start] ? start : "cafe");
