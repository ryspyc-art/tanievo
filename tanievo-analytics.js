/* Tanievo: zagregowane zdarzenia wyjścia do sklepów. Bez cookies i lokalnych identyfikatorów. */
document.addEventListener("click", event => {
  const link = event.target.closest("a[href]");
  if (!link || !window.goatcounter || typeof window.goatcounter.count !== "function") return;

  let destination;
  try { destination = new URL(link.href, window.location.href); }
  catch { return; }
  if (destination.origin === window.location.origin) return;

  const host = destination.hostname.toLowerCase();
  let shop = "";
  if (/(^|\\.)amazon\\./.test(host)) shop = "amazon";
  else if (host === "ceneo.pl" || host.endsWith(".ceneo.pl")) shop = "ceneo";
  if (!shop) return;

  window.goatcounter.count({
    path: "/klik/" + shop,
    title: "Kliknięcie do " + (shop === "amazon" ? "Amazon" : "Ceneo"),
    event: true,
    no_session: true
  });
});
