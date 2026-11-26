let products = [
  {id:"tanievo-001",name:"Apple AirPods 5 (MKFW4ZM/A)",category:"Elektronika",store:"Ceneo",icon:"🎧",productUrl:"https://www.ceneo.pl/199946527#cid=52090&crid=818405&pid=31443",linkType:"affiliate"},
  {id:"tanievo-002",name:"Telewizor QLED Sharp 65JT8765E 65 cali",category:"RTV",store:"Ceneo",icon:"📺",image:"https://image.ceneostatic.pl/offercandidates/9QDgAHRodHRwOi8vZjAxLmVzZnIucGwvZm90by8zLzE5MzcwMzU5NjE2OS81OTIwMjM3MjEzNWUzOTNiYTVlZGM5OWQzNmVjYjZhYS9zaGFycC10ZWxld2l6b3ItNjVqdDg3NjUsMTkzNzAzNTk2MTY5XzYud2VicA%3D%3D",productUrl:""},
  {id:"tanievo-003",name:"Karta graficzna MSI GeForce RTX 5080 Gaming Trio OC 16 GB GDDR7",category:"Elektronika",store:"Ceneo",icon:"🎮",image:"https://image.ceneostatic.pl/offercandidates/9QDgAGtodHRwczovL2Nkbi54LWtvbS5wbC9pL3NldHVwL2ltYWdlcy9wcm9kL2JpZy8xNTAweDE1MDAsLDIwMjUvMy9wcl8yMDI1XzNfMjRfMTFfMTNfMTVfMjJfMDAuanBnP2ZpbHRlcnM9dHJpbQ%3D%3D",productUrl:""},
  {id:"tanievo-004",name:"Hulajnoga elektryczna KuKirin G2",category:"Sport",store:"Ceneo",icon:"🛴",image:"https://image.ceneostatic.pl/offercandidates/9QDgAEVodHRwczovL2EuYWxsZWdyb2ltZy5jb20vb3JpZ2luYWwvMTEwYjk3Lzc4MmNiYzQ5NDFiMDkzNTMxOTJjNjc2ODgxNzc%3D",productUrl:""},
  {id:"tanievo-005",name:"Thermos Mountain FFX 0,5 l Matt Black Green",category:"Dom",store:"Ceneo",icon:"☕",image:"https://image.ceneostatic.pl/offercandidates/9QDgAF1odHRwczovL21lZGlhLmdyYW1pbm8uY29tL21lZHVzYS9UaGVybW9zLU1vdW50YWluLUZGWC1ibGFjay0wMS0wMU01NTFIWVlISEhRSEFKU01OMzVYMEo4OS5qcGc%3D",productUrl:""},
  {id:"tanievo-006",name:"Opony zimowe Dębica Frigo 2 205/55 R16 91T",category:"Motoryzacja",store:"Ceneo",icon:"🚗",image:"https://image.ceneostatic.pl/offercandidates/9QDgAEVodHRwczovL2EuYWxsZWdyb2ltZy5jb20vb3JpZ2luYWwvMTE3NjljL2Y1Yjc0OTFjNDcwODhiMDU1Y2U3NmExYWRkOWU%3D",productUrl:""},
  {id:"tanievo-007",name:"Wobell mata antyszronowa na przednią szybę",category:"Motoryzacja",store:"Ceneo",icon:"🚘",image:"https://image.ceneostatic.pl/offercandidates/9QDgAEVodHRwczovL2EuYWxsZWdyb2ltZy5jb20vb3JpZ2luYWwvMTE3ZmI2LzVmMTlmNjZhNGE0YmJjMjdiYTAzNjJkOGU0YzM%3D",productUrl:""},
  {id:"tanievo-008",name:"Wkrętarka akumulatorowa DeWALT DCD800N 18 V",category:"Narzędzia",store:"Ceneo",icon:"🛠️",image:"https://image.ceneostatic.pl/offercandidates/9QDgAEVodHRwczovL2EuYWxsZWdyb2ltZy5jb20vb3JpZ2luYWwvMTE3ZmUyL2Q4YzhiNDMzNGQwNjg2NzQyNmJjMTM4ZGQzMjY%3D",productUrl:""},
  {id:"tanievo-009",name:"Whiskas Adult Mix smaków 40 × 85 g",category:"Dla zwierząt",store:"Ceneo",icon:"🐾",image:"https://image.ceneostatic.pl/offercandidates/9QDgAEpodHRwczovL3pvb2FydC5jb20ucGwvaHBlY2lhaS82ZmFhZTk3ODM1ZjhkYzlkMGIyYjdmY2MxZGU1NDhiYS82NTY5NV8xLnBuZw%3D%3D",productUrl:""},
  {id:"tanievo-010",name:"DicloMAX Mobilat żel 100 g",category:"Zdrowie",store:"Ceneo",icon:"🧴",image:"https://image.ceneostatic.pl/offercandidates/9QDgAFVodHRwczovL2JhY2tlbmQuZHJtYXgucGwvbWVkaWEvY2F0YWxvZy9wcm9kdWN0LzIvOC8yODFkZGRkZWE2MmE2XzU5MDk5OTE1MjIzNjBfVDEuanBn",productUrl:""}
,
  {id:"tanievo-051",name:"Klawiatura SteelSeries Apex 3",category:"Komputery",store:"Ceneo",icon:"⌨️",productUrl:""},
  {id:"tanievo-052",name:"Helikon-Tex Wolfhound Hoodie Climashield Apex Black",category:"Odzież outdoor",store:"Ceneo",icon:"🧥",productUrl:""},
  {id:"tanievo-053",name:"Helikon-Tex Wolfhound Hoodie Climashield Apex Pencott Wildwood",category:"Odzież outdoor",store:"Ceneo",icon:"🧥",productUrl:""},
  {id:"tanievo-054",name:"Sudocrem Expert krem barierowy 400 g",category:"Zdrowie i higiena",store:"Ceneo",icon:"🧴",productUrl:""},
  {id:"tanievo-055",name:"LEGO City 60508 Napad na policyjny pociąg",category:"Zabawki",store:"Ceneo",icon:"🧩",productUrl:""},
  {id:"tanievo-056",name:"Pampers Premium Care rozmiar 1, 156 szt.",category:"Dziecko",store:"Ceneo",icon:"🍼",productUrl:""},
  {id:"tanievo-057",name:"Liqui Moly Diesel Spulung 500 ml (2666)",category:"Motoryzacja",store:"Ceneo",icon:"🚗",productUrl:""},
  {id:"tanievo-058",name:"Apple AirPods Pro 3",category:"Elektronika",store:"Amazon PartnerNet",icon:"🎧",image:"",price:951,productUrl:"https://www.amazon.pl/dp/B0FQF32239/ref=cm_sw_r_as_gl_api_gl_i_J6DA85MZ6MJAN3SJRE5D?linkCode=ml1&tag=tanievo-21&linkId=de2135f17c53b51a033f3a184f6574e6&gaOptInStatus=true",linkType:"affiliate"}
  ,{id:"tanievo-059",name:"Avast – oprogramowanie ochronne",category:"Oprogramowanie",store:"Avast · webePartners",icon:"🛡️",productUrl:"https://webep1.com/go/9febd7553f",linkType:"affiliate"}
  ,{id:"tanievo-060",name:"Bitdefender – pakiety antywirusowe i ochrona urządzeń",category:"Oprogramowanie",store:"Bitdefender · webePartners",icon:"🛡️",productUrl:"",linkType:"paused"}
];

// Dodatkowe pozycje katalogowe do wyszukania w Ceneo; nie są potwierdzonymi ofertami afiliacyjnymi.
const discoveryProducts = [["tanievo-011","Samsung Galaxy A56 5G","Telefony","📱"],["tanievo-012","Apple iPhone 16 128 GB","Telefony","📱"],["tanievo-013","Xiaomi Redmi Note 14 Pro 5G","Telefony","📱"],["tanievo-014","Sony WH-1000XM5","Elektronika","🎧"],["tanievo-015","JBL Tune 770NC","Elektronika","🎧"],["tanievo-016","Powerbank Xiaomi 20000 mAh","Elektronika","🔋"],["tanievo-017","Ładowarka Anker USB-C 30 W","Elektronika","🔌"],["tanievo-018","Monitor Dell 27 cali QHD","Komputery","🖥️"],["tanievo-019","Laptop Lenovo IdeaPad Slim 3","Komputery","💻"],["tanievo-020","SSD Samsung 990 EVO 1 TB","Komputery","💾"],["tanievo-021","Klawiatura Logitech K380","Komputery","⌨️"],["tanievo-022","Mysz Logitech MX Master 3S","Komputery","🖱️"],["tanievo-023","Sony PlayStation 5 Slim","Gaming","🎮"],["tanievo-024","Xbox Wireless Controller","Gaming","🎮"],["tanievo-025","Telewizor Samsung QLED 55 cali","RTV","📺"],["tanievo-026","Soundbar JBL Bar 500","RTV","🔊"],["tanievo-027","DeLonghi Magnifica S","AGD","☕"],["tanievo-028","Xiaomi Robot Vacuum S10","AGD","🤖"],["tanievo-029","Dyson V8","AGD","🧹"],["tanievo-030","Philips Airfryer 3000","AGD","🍟"],["tanievo-031","Blender Bosch VitaPower","AGD","🥤"],["tanievo-032","Czajnik Bosch Styline","AGD","🫖"],["tanievo-033","Zestaw garnków Tefal Ingenio","Dom","🍳"],["tanievo-034","Patelnia Tefal Unlimited 28 cm","Dom","🍳"],["tanievo-035","Pościel bawełniana 160 × 200 cm","Dom","🛏️"],["tanievo-036","Xiaomi Smart Air Purifier 4","Dom","🌬️"],["tanievo-037","Lampa biurkowa LED","Dom","💡"],["tanievo-038","Bosch Professional GSR 18V-55","Narzędzia","🛠️"],["tanievo-039","Szlifierka kątowa Makita 9558HNRG","Narzędzia","⚙️"],["tanievo-040","Zestaw kluczy nasadowych Yato","Narzędzia","🔧"],["tanievo-041","Kosiarka Bosch UniversalRotak","Ogród","🌱"],["tanievo-042","Myjka Kärcher K 4 Power Control","Ogród","🚿"],["tanievo-043","Kurtka trekkingowa softshell","Moda","🧥"],["tanievo-044","Adidas Terrex AX4","Obuwie","🥾"],["tanievo-045","Nike Revolution 7","Obuwie","👟"],["tanievo-046","Garmin Forerunner 165","Sport","⌚"],["tanievo-047","Mata fitness 180 cm","Sport","🧘"],["tanievo-048","Michelin Alpin 6 205/55 R16","Motoryzacja","🚗"],["tanievo-049","Wideorejestrator 70mai A500S","Motoryzacja","📹"],["tanievo-050","Legowisko wodoodporne dla psa","Dla zwierząt","🐾"]].map(([id,name,category,icon]) => ({id:"catalog-"+id,name,category,icon,store:"Wyszukaj w Ceneo",productUrl:"https://www.ceneo.pl/;szukaj-" + encodeURIComponent(name),linkType:"search"}));

discoveryProducts.push(...[
["tanievo-073","Żarówki LED H7 do samochodu — dobierz homologowany wariant","Oświetlenie samochodowe","🚘"],
  ["tanievo-074","Lampy robocze LED 12/24 V do samochodu i warsztatu","Oświetlenie samochodowe","💡"],
  ["tanievo-075","Wkrętarka akumulatorowa 18 V do domu i warsztatu","Elektronarzędzia","🛠️"],
  ["tanievo-076","Szlifierka kątowa 125 mm — elektronarzędzie","Elektronarzędzia","⚙️"],
  ["tanievo-077","Wiertarko-wkrętarka udarowa akumulatorowa 18 V","Elektronarzędzia","🔩"],
  ["tanievo-078","Grzejnik konwektorowy elektryczny do domu","Ogrzewanie domu","🔥"],
  ["tanievo-079","Grzejnik olejowy elektryczny do mieszkania","Ogrzewanie domu","♨️"],
  ["tanievo-080","Panel grzewczy na podczerwień do domu","Ogrzewanie domu","🌡️"]
].map(([id,name,category,icon]) => ({
  id:"catalog-"+id,name,category,icon:id==="tanievo-020"?"🔩":icon,
  image:id==="tanievo-020"?"https://images.samsung.com/kdp/goods/2024/01/10/72bda001-f4f4-4f7a-9a3d-0707974271a0.png":"",
  store:"Wyszukaj w Ceneo",
  productUrl:"https://www.ceneo.pl/;szukaj-" + encodeURIComponent(name),
  linkType:"search"
})));


discoveryProducts.push(...[
["tanievo-081","Garrett ACE 250 — wykrywacz metali","Wykrywacze metali","🧭"],
  ["tanievo-082","Minelab X-Terra Pro — wykrywacz metali","Wykrywacze metali","🧭"],
  ["tanievo-083","Nokta Simplex Lite — wykrywacz metali","Wykrywacze metali","🧭"],
  ["tanievo-084","Garrett Pro-Pointer AT — ręczny pinpointer","Akcesoria do wykrywaczy","📍"],
  ["tanievo-085","Cewki, osłony i słuchawki do wykrywaczy metali","Akcesoria do wykrywaczy","🎧"],
  ["tanievo-086","everActive NC-450 — ładowarka AA/AAA","Ładowarki i zasilacze","🔌"],
  ["tanievo-087","Panasonic Eneloop BQ-CC55 — ładowarka z akumulatorkami AA","Ładowarki i zasilacze","🔋"],
  ["tanievo-088","Akumulatorki AA Ni-MH 2500 mAh — zestaw 4 szt.","Akumulatory AA i AAA","🔋"],
  ["tanievo-089","Akumulatorki AAA Ni-MH 800–1000 mAh — zestaw 4 szt.","Akumulatory AA i AAA","🔋"],
  ["tanievo-090","Akumulatorki AAA Panasonic Eneloop — zestaw 4 szt.","Akumulatory AA i AAA","🔋"]
].map(([id,name,category,icon]) => ({
  id:"catalog-"+id,name,category,icon,store:"Wyszukaj w Ceneo",
  productUrl:"https://www.ceneo.pl/;szukaj-" + encodeURIComponent(name),
  linkType:"search"
})));


discoveryProducts.push(...[
["tanievo-091","Sofirn SC18 — latarka LED USB-C z akumulatorem 18650","Latarki LED","🔦"],
  ["tanievo-092","NEO — latarka akumulatorowa LED USB-C 500 lm","Latarki LED","🔦"],
  ["tanievo-093","Latarka czołowa LED USB-C z akumulatorem","Latarki LED","🔦"],
  ["tanievo-094","Lampa warsztatowa LED COB z magnesem i hakiem","Latarki LED","💡"],
  ["tanievo-095","Akumulator 18650 Li-Ion 2600 mAh z zabezpieczeniem — sprawdź kompatybilność","Akumulatory 18650","🔋"],
  ["tanievo-096","XTAR 18650 Li-Ion 2600 mAh — ogniwo do latarki","Akumulatory 18650","🔋"],
  ["tanievo-097","Panasonic NCR18650B 3400 mAh — akumulator Li-Ion","Akumulatory 18650","🔋"],
  ["tanievo-098","Ładowarka XTAR do ogniw 18650","Ładowarki i zasilacze","🔌"],
  ["tanievo-099","Marioinex Mini Waffle — klocki konstrukcyjne","Zabawki","🧸"],
  ["tanievo-100","LEGO DUPLO — kreatywne zwierzaki 3 w 1","Zabawki","🧸"],
  ["tanievo-101","Zestaw kreatywny do skręcania z narzędziami dla dzieci","Zabawki","🧰"],
  ["tanievo-102","Kostka edukacyjna Montessori","Zabawki","🧩"],
  ["tanievo-103","Zestaw małego elektronika — eksperymenty edukacyjne","Zabawki","⚡"]
].map(([id,name,category,icon]) => ({
  id:"catalog-"+id,name,category,icon,store:"Wyszukaj w Ceneo",
  productUrl:"https://www.ceneo.pl/;szukaj-" + encodeURIComponent(name),
  linkType:"search"
})));


discoveryProducts.push(...[
["tanievo-104","Philips Series 5000 — suszarka do włosów z jonizacją","Uroda i stylizacja","💨"],
  ["tanievo-105","Remington Pro Soft Curl — lokówka ceramiczna","Uroda i stylizacja","💇"],
  ["tanievo-106","BaByliss Pro Rotating 800 — obrotowa suszarko-lokówka","Uroda i stylizacja","💇"],
  ["tanievo-107","Remington Shine Therapy — prostownica do włosów","Uroda i stylizacja","✨"],
  ["tanievo-108","Philips Series 7000 — multistyler do włosów","Uroda i stylizacja","💇"],
  ["tanievo-109","Szczotka susząco-modelująca 4w1 z jonizacją","Uroda i stylizacja","🪮"],
  ["tanievo-110","Bosch MFQ 36400 — mikser ręczny","Miksery i blendery","🥣"],
  ["tanievo-111","Zelmer ZHM 1650 — mikser ręczny","Miksery i blendery","🥣"],
  ["tanievo-112","Bosch ErgoMixx — blender ręczny z końcówkami","Miksery i blendery","🥤"],
  ["tanievo-113","Tefal Quickchef — blender ręczny","Miksery i blendery","🥤"],
  ["tanievo-114","Kenwood Prospero — mikser planetarny","Miksery i blendery","🍰"],
  ["tanievo-115","Bosch MUM — robot kuchenny z misą","Miksery i blendery","🍰"]
].map(([id,name,category,icon]) => ({
  id:"catalog-"+id,name,category,icon,store:"Wyszukaj w Ceneo",
  productUrl:"https://www.ceneo.pl/;szukaj-" + encodeURIComponent(name),
  linkType:"search"
})));


discoveryProducts.push(...[
["tanievo-116","Romet Orkan — rower trekkingowy","Rowery","🚲"],
  ["tanievo-117","Kross Level — rower górski MTB","Rowery","🚵"],
  ["tanievo-118","Kross Trans — rower trekkingowy","Rowery","🚲"],
  ["tanievo-119","Romet Gazela — rower miejski","Rowery","🚲"],
  ["tanievo-120","Rower gravel Kross Esker","Rowery","🚴"],
  ["tanievo-121","Rower elektryczny miejski — e-bike","Rowery","⚡"],
  ["tanievo-122","Raven rolki regulowane dla dzieci","Rolki i wrotki","🛼"],
  ["tanievo-123","Rollerblade rolki fitness dla dorosłych","Rolki i wrotki","🛼"],
  ["tanievo-124","Nils Extreme wrotki klasyczne","Rolki i wrotki","🛼"],
  ["tanievo-125","Rolki freestyle Powerslide","Rolki i wrotki","🛼"],
  ["tanievo-126","Kask rowerowy Uvex Viva 3","Akcesoria rowerowe","⛑️"],
  ["tanievo-127","Lampki rowerowe LED przód i tył USB","Akcesoria rowerowe","💡"],
  ["tanievo-128","Zapięcie rowerowe U-lock","Akcesoria rowerowe","🔒"],
  ["tanievo-129","Sakwa rowerowa wodoodporna","Akcesoria rowerowe","🎒"],
  ["tanievo-130","Licznik rowerowy GPS Garmin Edge","Akcesoria rowerowe","📟"],
  ["tanievo-131","Pompka rowerowa z manometrem","Akcesoria rowerowe","🚲"],
  ["tanievo-132","Zestaw naprawczy do dętek rowerowych","Akcesoria rowerowe","🔧"]
].map(([id,name,category,icon]) => ({
  id:"catalog-"+id,name,category,icon,store:"Wyszukaj w Ceneo",
  productUrl:"https://www.ceneo.pl/;szukaj-" + encodeURIComponent(name),
  linkType:"search"
})));


discoveryProducts.push(...[
["tanievo-133","Shell Helix Ultra 5W-30 — olej silnikowy 4 l","Oleje i płyny samochodowe","🛢️"],
  ["tanievo-134","Castrol EDGE 5W-30 — olej silnikowy 5 l","Oleje i płyny samochodowe","🛢️"],
  ["tanievo-135","Mobil 1 ESP 5W-30 — olej silnikowy 5 l","Oleje i płyny samochodowe","🛢️"],
  ["tanievo-136","Motul 8100 X-clean — olej silnikowy 5 l","Oleje i płyny samochodowe","🛢️"],
  ["tanievo-137","Olej przekładniowy 75W-90 — do skrzyni biegów","Oleje i płyny samochodowe","⚙️"],
  ["tanievo-138","Płyn chłodniczy koncentrat — dobierz specyfikację","Oleje i płyny samochodowe","❄️"],
  ["tanievo-139","Płyn hamulcowy DOT 4 — opakowanie 1 l","Oleje i płyny samochodowe","🚗"],
  ["tanievo-140","Zestaw kluczy nasadowych Yato 1/4 i 1/2 cala","Warsztat i majsterkowanie","🔧"],
  ["tanievo-141","Zestaw precyzyjnych śrubokrętów i bitów","Warsztat i majsterkowanie","🪛"],
  ["tanievo-142","Szczypce, kombinerki i obcinaki — zestaw warsztatowy","Warsztat i majsterkowanie","🗜️"],
  ["tanievo-143","Imadło stołowe obrotowe do majsterkowania","Warsztat i majsterkowanie","🧰"],
  ["tanievo-144","Zestaw lutowniczy z regulacją temperatury","Warsztat i majsterkowanie"," solder"],
  ["tanievo-145","Zestaw śrub, nakrętek i podkładek w organizerze","Warsztat i majsterkowanie","🔩"],
  ["tanievo-146","Zestaw konstrukcyjny metalowy do samodzielnego składania","Warsztat i majsterkowanie","🧩"],
  ["tanievo-147","Welly — metalowy samochodzik kolekcjonerski 1:64","Modele i samochodziki","🚗"],
  ["tanievo-148","Bburago — model samochodu 1:24 do kolekcji","Modele i samochodziki","🏎️"],
  ["tanievo-149","Maisto — model samochodu 1:18","Modele i samochodziki","🚙"],
  ["tanievo-150","Zestaw toru wyścigowego dla samochodzików","Modele i samochodziki","🏁"],
  ["tanievo-151","LEGO Technic — samochód do składania","Modele i samochodziki","🧱"],
  ["tanievo-152","Model samochodu RC — zdalnie sterowany","Modele i samochodziki","🎮"]
].map(([id,name,category,icon]) => ({
  id:"catalog-"+id,name,category,icon: icon === " solder" ? "🔌" : icon,store:"Wyszukaj w Ceneo",
  productUrl:"https://www.ceneo.pl/;szukaj-" + encodeURIComponent(name),
  linkType:"search"
})));


discoveryProducts.push(...[
["tanievo-153","Revell — plastikowy model samolotu do sklejania","Modelarstwo","✈️"],
  ["tanievo-154","Revell — model samochodu do sklejania 1:24","Modelarstwo","🚗"],
  ["tanievo-155","Tamiya — model samochodu do sklejania","Modelarstwo","🏎️"],
  ["tanievo-156","Zestaw farbek akrylowych do modeli","Modelarstwo","🎨"],
  ["tanievo-157","Pędzle modelarskie — zestaw precyzyjny","Modelarstwo","🖌️"],
  ["tanievo-158","Klej modelarski do plastiku","Modelarstwo","🧴"],
  ["tanievo-159","Aerograf modelarski z kompresorem — zestaw","Modelarstwo","🖌️"],
  ["tanievo-160","Mata, nożyk i narzędzia do modelarstwa","Modelarstwo","🧰"],
  ["tanievo-161","Arduino Uno — zestaw startowy elektroniki","Elektronika DIY","🔌"],
  ["tanievo-162","Raspberry Pi — zestaw akcesoriów i obudowa","Elektronika DIY","💻"],
  ["tanievo-163","Płytka stykowa i przewody połączeniowe — zestaw","Elektronika DIY","🔗"],
  ["tanievo-164","Zestaw elementów elektronicznych: rezystory i kondensatory","Elektronika DIY","⚡"],
  ["tanievo-165","Moduły LED i czujniki do projektów Arduino","Elektronika DIY","💡"],
  ["tanievo-166","Multimetr cyfrowy do elektroniki i domu","Pomiary i diagnostyka","📟"],
  ["tanievo-167","Suwmiarka cyfrowa 150 mm","Pomiary i diagnostyka","📏"],
  ["tanievo-168","Mikrometr zewnętrzny — narzędzie pomiarowe","Pomiary i diagnostyka","📐"],
  ["tanievo-169","Tester akumulatora samochodowego 12 V","Pomiary i diagnostyka","🔋"],
  ["tanievo-170","Czytnik diagnostyczny OBD2 Bluetooth","Pomiary i diagnostyka","🚘"],
  ["tanievo-171","Miernik temperatury i wilgotności z sondą","Pomiary i diagnostyka","🌡️"]
].map(([id,name,category,icon]) => ({
  id:"catalog-"+id,name,category,icon,store:"Wyszukaj w Ceneo",
  productUrl:"https://www.ceneo.pl/;szukaj-" + encodeURIComponent(name),
  linkType:"search"
})));

// Dodatkowe produkty katalogowe — rozszerzenie listopad 2026.
// To pozycje do wyszukania w Ceneo, nie potwierdzone oferty ani ceny.
discoveryProducts.push(...[
  ["tanievo-172","Einhell CE-BC 6 M — prostownik automatyczny","Prostowniki","🔋"],
  ["tanievo-173","NEO 10A — prostownik automatyczny 12 V","Prostowniki","🔋"],
  ["tanievo-174","NOCO GENIUS1EU — ładowarka akumulatorów 6/12 V","Prostowniki","⚡"],
  ["tanievo-175","Bosch C1 — ładowarka akumulatora samochodowego","Prostowniki","🔋"],
  ["tanievo-176","BLOW 12V/10A — prostownik automatyczny","Prostowniki","🔌"],
  ["tanievo-177","DeWalt DCK2020P2T — zestaw elektronarzędzi 18 V","Elektronarzędzia","🛠️"],
  ["tanievo-178","Makita DHP486 — wiertarko-wkrętarka udarowa 18 V","Elektronarzędzia","🔩"],
  ["tanievo-179","Bosch GWS 18V-10 — szlifierka kątowa 18 V","Elektronarzędzia","⚙️"],
  ["tanievo-180","DeWalt DCF887 — zakrętarka udarowa 18 V","Elektronarzędzia","🛠️"],
  ["tanievo-181","Bosch GSR 12V-35 — wiertarko-wkrętarka 12 V","Elektronarzędzia","🔧"],
  ["tanievo-182","Parkside Performance — klucz udarowy akumulatorowy 20 V","Elektronarzędzia","🔩"],
  ["tanievo-183","Kärcher WD 3 — odkurzacz uniwersalny","Warsztat i majsterkowanie","🧹"],
  ["tanievo-184","Yato YT-38841 — zestaw kluczy nasadowych","Warsztat i majsterkowanie","🔧"],
  ["tanievo-185","Stanley FatMax — skrzynka narzędziowa","Warsztat i majsterkowanie","🧰"],
  ["tanievo-186","Vorel — zestaw szczypiec i kombinerek","Warsztat i majsterkowanie","🗜️"],
  ["tanievo-187","Wera Kraftform — zestaw wkrętaków","Warsztat i majsterkowanie","🪛"],
  ["tanievo-188","Shell Helix HX8 5W-30 — olej silnikowy 4 l","Oleje i płyny samochodowe","🛢️"],
  ["tanievo-189","Total Quartz Ineo ECS 5W-30 — olej silnikowy 5 l","Oleje i płyny samochodowe","🛢️"],
  ["tanievo-190","Valvoline SynPower 5W-30 — olej silnikowy 5 l","Oleje i płyny samochodowe","🛢️"],
  ["tanievo-191","Febi Bilstein — płyn chłodniczy G12/G13","Oleje i płyny samochodowe","❄️"],
  ["tanievo-192","Webasto Air Top 2000 STC — ogrzewanie postojowe 12 V","Ogrzewanie postojowe","🔥"],
  ["tanievo-193","Eberspächer Airtronic D2 — ogrzewanie postojowe","Ogrzewanie postojowe","🔥"],
  ["tanievo-194","Webasto Thermo Top Evo — ogrzewanie wodne","Ogrzewanie postojowe","♨️"],
  ["tanievo-195","Grzejnik olejowy 9-żebrowy z termostatem","Ogrzewanie domu","🌡️"],
  ["tanievo-196","Grzejnik konwektorowy z termostatem i timerem","Ogrzewanie domu","🔥"],
  ["tanievo-197","Panel grzewczy na podczerwień 600 W","Ogrzewanie domu","♨️"],
  ["tanievo-198","Termowentylator ceramiczny z regulacją temperatury","Ogrzewanie domu","🌡️"],
  ["tanievo-199","Kamera samochodowa 70mai A510","Motoryzacja","📹"],
  ["tanievo-200","Kompresor samochodowy Xiaomi Portable Electric Air Compressor 2","Motoryzacja","💨"],
  ["tanievo-201","Ładowarka samochodowa USB-C Power Delivery 45 W","Motoryzacja","🔌"],
  ["tanievo-202","Zestaw dywaników gumowych dopasowanych do modelu auta","Motoryzacja","🚗"],
  ["tanievo-203","Philips Airfryer 3000 Series — frytkownica beztłuszczowa","AGD","🍟"],
  ["tanievo-204","Bosch Serie 2 — odkurzacz workowy","AGD","🧹"],
  ["tanievo-205","Xiaomi Smart Air Purifier 4 Lite — oczyszczacz powietrza","Dom","🌬️"],
  ["tanievo-206","TP-Link Tapo P110 — inteligentne gniazdko Wi-Fi","Dom","🔌"],
  ["tanievo-207","Philips Hue White — inteligentna żarówka LED","Dom","💡"],
  ["tanievo-208","Kärcher K 5 Power Control — myjka ciśnieniowa","Myjki ciśnieniowe","🚿"],
  ["tanievo-209","Bosch UniversalAquatak 135 — myjka ciśnieniowa","Myjki ciśnieniowe","🚿"],
  ["tanievo-210","Einhell TE-AC 24 Silent — kompresor 24 l","Kompresory","💨"],
  ["tanievo-211","Stanley DST 100/8/6 — kompresor bezolejowy","Kompresory","💨"]
].map(([id,name,category,icon]) => ({
  id:"catalog-"+id,name,category,icon,store:"Wyszukaj w Ceneo",
  productUrl:"https://www.ceneo.pl/;szukaj-" + encodeURIComponent(name),
  linkType:"search"
})));

products = [...products, ...discoveryProducts];

// Zweryfikowany link afiliacyjny Bizon Mobile — sklep z akcesoriami GSM.
products.push({
  id: "tanievo-bizon-mobile-001",
  name: "Bizon Mobile — akcesoria GSM i mobilne",
  category: "Telefony",
  store: "Bizon Mobile · webePartners",
  icon: "📱",
  productUrl: "https://webep1.com/c/12930/6aecbf4b2777780c42e8ebd9?r=aHR0cHM6Ly9za2xlcC5iaXpvbm1vYmlsZS5wbC8",
  linkType: "affiliate"
});

// Link afiliacyjny Strefa Motocykli — sklep z wyposażeniem i akcesoriami motocyklowymi.
products.push({
  id: "tanievo-strefa-motocykli-001",
  name: "Strefa Motocykli — akcesoria i wyposażenie motocyklowe",
  category: "Motoryzacja",
  store: "Strefa Motocykli · webePartners",
  icon: "🏍️",
  productUrl: "https://click.webeh1.com/c/249/6aecbf4b2777780c42e8ebd9?r=aHR0cHM6Ly9zdHJlZmFtb3RvY3lrbGkucGw",
  linkType: "affiliate"
});

// Partner afiliacyjny BabyOno — produkty dla niemowląt i dzieci.
products.push({
  id: "tanievo-babyono-001",
  name: "BabyOno — akcesoria dla niemowląt i dzieci",
  category: "Dla dzieci",
  store: "BabyOno · webePartners",
  icon: "🍼",
  productUrl: "https://click.webeh1.com/go/00e5aba9eb",
  linkType: "affiliate"
});


// Zweryfikowane zdjęcia produktów — przypisujemy tylko do zgodnych modeli.
// Pozostałe karty zachowują czytelny placeholder zamiast przypadkowej fotografii.
const verifiedProductImages = {
  "Einhell CE-BC 6 M — prostownik automatyczny": "https://einhell.pl/wp-content/uploads/2024/12/Zrzut-ekranu-2022-10-6-o-13.47.36-324x324.png",
  "Webasto Air Top 2000 STC — ogrzewanie postojowe 12 V": "https://www.webasto.com/adobe/dynamicmedia/deliver/dm-aid--1e1fd815-6448-4612-abe3-a1f62fc71907/air-top-2000-stc-header.jpg?preferwebp=true&quality=85",

  "Apple AirPods Pro 3": "https://cdn.newtime.ua/upload/2025-09/navushniki-apple-airpods-pro-3_2400.webp",
  "Samsung Galaxy Buds3 Pro": "https://www.callme.dk/globalassets/olympus/inriver/samsung-galaxy-buds3-pro-silver_1.png?w=480",
  "Apple iPhone 17 Pro 256 GB": "https://www.mediazone.ma/product/images/18044-O4NyMHRz/apple-iphone-17-pro-256go-bleu-intense-maroc.webp",
  "Wkrętarka akumulatorowa DeWALT DCD800N 18 V": "https://narzedziownia.shop/701169-large_default/wkretarka-18v-xr-90nm-2-biegowa-dewalt-dcd800n.jpg",
  "Sony WH-1000XM5": "https://www.sony.ie/image/6145c1d32e6ac8e63a46c912dc33c5bb?fmt=png-alpha&hei=660&wid=660",
  "Sony WF-1000XM5": "https://store.sony.com.tw/resource/file/product_files/WF-1000XM5/05_73f1c2306.jpg",
  "Anker Zolo 25000 mAh 165 W A1695H11": "https://cdn.hstatic.net/products/200000868777/a1695_b19a9fa039694abfb189e6de6250c2c4_master.png"
};
for (const product of products) {
  if (!product.image && verifiedProductImages[product.name]) {
    product.image = verifiedProductImages[product.name];
  }
}

// Ujednolicenie nazw kategorii: kafelki i filtry muszą wskazywać te same pozycje.
function categoryProductIcon(category, name = "") {
  const value = String(category || "").toLocaleLowerCase("pl");
  if (value.includes("robot") || value.includes("sprząt")) return "🤖";
  if (value.includes("smartwatch") || value.includes("zegark")) return "⌚";
  if (value.includes("ekspres") || value.includes("kaw")) return "☕";
  if (value.includes("ogród")) return "🌱";
  if (value.includes("oświetlenie samochodowe")) return "🚘";
  if (value.includes("akumulatory")) return "🔋";
  if (value.includes("prostowniki")) return "⚡";
  if (value.includes("kompresory")) return "💨";
  if (value.includes("podnośniki")) return "🚗";
  if (value.includes("myjki ciśnieniowe")) return "🚿";
  if (value.includes("nagrzewnice garażowe")) return "🔥";
  if (value.includes("ogrzewanie domu")) return "🏠";
  if (value.includes("modelarstwo")) return "🎨";
  if (value.includes("elektronika diy")) return "🔌";
  if (value.includes("pomiary i diagnostyka")) return "📏";
  if (value.includes("oleje i płyny samochodowe")) return "🛢️";
  if (value.includes("warsztat i majsterkowanie")) return "🧰";
  if (value.includes("modele i samochodziki")) return "🚗";
  if (value.includes("wykrywacze metali")) return "🧭";
  if (value.includes("akcesoria do wykrywaczy")) return "🎒";
  if (value.includes("ładowarki i zasilacze")) return "🔌";
  if (value.includes("akumulatory aa i aaa")) return "🔋";
  if (value.includes("latarki")) return "🔦";
  if (value.includes("akumulatory 18650")) return "🔋";
  if (value.includes("zabawki")) return "🧸";
  if (value.includes("uroda i stylizacja")) return "💇";
  if (value.includes("miksery i blendery")) return "🥣";
  if (value.includes("rowery")) return "🚲";
  if (value.includes("rolki i wrotki")) return "🛼";
  if (value.includes("akcesoria rowerowe")) return "🚴";
  if (value.includes("elektronarzędzia")) return "🛠️";
  if (value.includes("narzędzia warsztatowe")) return "🔧";
  if (value.includes("ogrzewanie postojowe")) return "🔥";
  if (value.includes("konsole")) return "🎮";
  if (value.includes("pady") || value.includes("kontroler")) return "🕹️";
  if (value.includes("gry")) return "🎯";
  if (value.includes("zima")) return "❄️";
  if (value.includes("monitor")) return "📷";
  if (value.includes("dron")) return "🚁";
  if (value.includes("telefon")) return "📱";
  if (value.includes("komputer")) return "💻";
  if (value.includes("rtv") || value.includes("telewiz")) return "📺";
  if (value.includes("agd")) return "🏠";
  if (value.includes("elektron")) return "🎧";
  return "🛍️";
}

function normalizeCategory(value) {
  const aliases = {
    "Odzież outdoor": "Moda",
    "Zdrowie i higiena": "Zdrowie",
    "Smartfony": "Telefony",
    "Słuchawki": "Elektronika"
  };
  return aliases[value] || value;
}
products.forEach(product => {
  product.category = normalizeCategory(product.category);
});

// Wspólne parametry identyfikujące kampanię Ceneo.
// Ich obecność w adresie nie potwierdza naliczania kliknięć ani prowizji.
for (const product of products) {
  if (!product.productUrl && product.linkType !== "paused") {
    product.productUrl = "https://www.ceneo.pl/;szukaj-" + encodeURIComponent(product.name);
    product.linkType = "search";
  }
  if (!product.linkType && product.productUrl) {
    product.linkType = "external";
  }
  if (!product.store) product.store = "Ceneo";
}

const grid = document.getElementById("productGrid");
const search = document.getElementById("searchInput");
const sort = document.getElementById("sortSelect");
const favoritesToggle = document.getElementById("favoritesToggle");
const loadMoreButton=document.createElement("button");
loadMoreButton.type="button";
loadMoreButton.className="load-more-products";
loadMoreButton.textContent="Pobierz kolejną porcję produktów";
loadMoreButton.hidden=true;
grid.insertAdjacentElement("afterend",loadMoreButton);
loadMoreButton.addEventListener("click",loadNextLiveCategoryPage);
let catalogManifest = null;
const loadedCatalogFiles = new Set();
const catalogFilePromises = new Map();
let activeLiveCategoryNames = [];
let catalogCategories = [...new Set(products.map(p => p.category))].sort((a,b) => a.localeCompare(b,"pl"));
let category = "Wszystkie";
let activeCategoryMatches = null;
let favoritesOnly = false;
const categoryAliases={
  "Telewizory i RTV":["RTV"],"Sport i rekreacja":["Sport"],
  "Dom i kuchnia":["Dom","AGD","Małe AGD","Miksery i blendery","Ogrzewanie domu"],
  "Komputery i akcesoria":["Komputery"],"Kamery i monitoring":["Monitoring"],
  "Zdrowie i uroda":["Zdrowie","Zdrowie i higiena"],
  "Ogród i narzędzia":["Ogród"],"Małe AGD":["AGD"],
  "Ekspresy do kawy":["AGD"],"Roboty sprzątające":["AGD"],
  "Na zimę":["Motoryzacja","Odzież outdoor","Moda"],
  "Narzędzia warsztatowe":["Narzędzia","Warsztat i majsterkowanie"],
  "Elektronarzędzia i warsztat":["Narzędzia","Warsztat i majsterkowanie"],
  "Motoryzacja i oleje":["Motoryzacja"],
  "Majsterkowanie i narzędzia":["Narzędzia","Warsztat i majsterkowanie"],
  "Modelarstwo i zestawy":["Modelarstwo","Zabawki"],
  "Elektronika DIY":["Elektronika","Komputery"],
  "Turystyka i outdoor":["Odzież outdoor","Sport"],
  "Rowery i sport":["Rowery","Sport"],
  "Dom i ogrzewanie":["Dom","Ogrzewanie domu","AGD"],
  "Uroda i stylizacja":["Zdrowie","Zdrowie i higiena"],
  "Miksery i AGD":["Miksery i blendery","AGD","Małe AGD"],
  "Zabawki":["Zabawki","Dziecko"],
  "Telewizory i RTV":["Elektronika"],
  "Sport i rekreacja":["Sport i outdoor"],
  "Rowery":["Sport i outdoor"],
  "Rolki i wrotki":["Sport i outdoor"],
  "Akcesoria rowerowe":["Sport i outdoor"],
  "Uroda i stylizacja":["Uroda"],
  "Miksery i blendery":["AGD"],
  "Oleje i płyny samochodowe":["Motoryzacja"],
  "Warsztat i majsterkowanie":["Narzędzia"],
  "Modele i samochodziki":["Zabawki"],
  "Modelarstwo":["Zabawki"],
  "Pomiary i diagnostyka":["Narzędzia","Inne"],
  "Oprogramowanie":["Elektronika","Inne"],
  "Komputery i akcesoria":["Elektronika"],
  "Gaming":["Elektronika"],
  "Moda":["Sport i outdoor","Inne"],
  "Obuwie":["Sport i outdoor"],
  "Kamery i monitoring":["Elektronika"],
  "Drony":["Elektronika"],
  "Smartwatche":["Elektronika"],
  "Ogród i narzędzia":["Narzędzia"],
  "Konsole":["Elektronika"],
  "Pady i kontrolery":["Elektronika"],
  "Gry":["Elektronika","Zabawki"],
  "Oświetlenie samochodowe":["Motoryzacja","Oświetlenie"],
  "Elektronarzędzia":["Narzędzia"],
  "Ogrzewanie postojowe":["Motoryzacja"],
  "Akumulatory samochodowe":["Motoryzacja"],
  "Prostowniki":["Motoryzacja"],
  "Kompresory":["Motoryzacja","Narzędzia"],
  "Podnośniki":["Motoryzacja","Narzędzia"],
  "Myjki ciśnieniowe":["Motoryzacja","Narzędzia"],
  "Nagrzewnice garażowe":["Motoryzacja","Narzędzia"],
  "Wykrywacze metali":["Inne"],
  "Akcesoria do wykrywaczy":["Inne"],
  "Ładowarki i zasilacze":["Elektronika"],
  "Akumulatory AA i AAA":["Elektronika"],
  "Latarki LED":["Oświetlenie"],
  "Akumulatory 18650":["Elektronika"],
  "Ogrzewanie domu":["Dom"],
  "Zdrowie i uroda":["Uroda"],
  "Elektronika i wiele więcej!":["Elektronika","Komputery","RTV","Telefony","Gaming"]
};
function getTileCategoryMatches(tile){
  const label=tile.querySelector("strong")?.textContent.trim() || "";
  const raw=tile.dataset.categoryJump || "";
  const candidates=[raw,label,...(categoryAliases[label]||[]),...(categoryAliases[raw]||[])];
  return [...new Set(candidates.map(value => normalizeCategory(String(value).trim())).filter(Boolean))];
}
function categoryMatchKey(value){
  return normalizeCategory(String(value || "").trim())
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("pl").replace(/\s+/g, " ");
}
function hasActiveProductLink(product){
  const url=String(product.productUrl || "").trim();
  return product.linkType !== "paused" && url.toLowerCase().startsWith("https://");
}
function getLiveCategoryCount(matches){
  if(!catalogManifest?.categories)return null;
  const keys=new Set(matches);
  return Object.entries(catalogManifest.categories).reduce((sum,[name,count])=>sum+(keys.has(categoryMatchKey(name))?(Number(count)||0):0),0);
}
function getLinkedProductsForTile(tile){
  const matches=new Set(getTileCategoryMatches(tile).map(categoryMatchKey));
  return products.filter(product=>matches.has(categoryMatchKey(product.category))&&hasActiveProductLink(product));
}
function buildCategoryNavigation(){
  catalogCategories=[...new Set([...products.map(p=>p.category),...Object.keys(catalogManifest?.categories||{})])].sort((a,b)=>a.localeCompare(b,"pl"));
  if(category !== "Wszystkie" && !catalogCategories.includes(category)) category = "Wszystkie";
  const chips=document.getElementById("categoryChips");
  if(chips)chips.innerHTML=["Wszystkie",...catalogCategories].map(name=>{
    const active=name===category;
    return '<button type="button" class="chip '+(active?"active":"") + '" data-category="'+escapeHTML(name)+'" aria-pressed="'+String(active)+'">'+escapeHTML(name)+'</button>';
  }).join("");
  document.querySelectorAll("[data-category-jump]").forEach(tile=>{
    const key=tile.querySelector("strong")?.textContent.trim() || tile.dataset.categoryJump;
    const linkedProducts=getLinkedProductsForTile(tile);
    const liveCount=getLiveCategoryCount(getTileCategoryMatches(tile).map(categoryMatchKey));
    const n=liveCount===null?linkedProducts.length:liveCount;
    const countLabel=tile.querySelector("small");
    if(countLabel)countLabel.textContent=n+(n===1?" produkt":n<5?" produkty":" produktów");

    // Ukrywamy kafelki katalogu bez produktów, aby nie prowadzić do pustych wyników.
    const isCatalogTile=Boolean(tile.closest(".category-grid"));
    tile.hidden=isCatalogTile && n===0;
    tile.setAttribute("aria-label",key+": "+(countLabel?.textContent || (n+" produktów")));
    tile.dataset.productCount=String(n);
  });
  const statusCount=document.getElementById("catalogStatusCount");
  if(statusCount)statusCount.textContent=catalogManifest?.count??products.length;
  const note=document.querySelector(".demo-note");
  if(note)note.textContent=catalogManifest?Number(catalogManifest.count).toLocaleString("pl-PL")+" produktów — wybierz kategorię, aby pobrać jej oferty":products.length+" produktów w katalogu";
  const categoryGrid=document.querySelector(".category-grid");
  if(categoryGrid){
    const visibleTiles=categoryGrid.querySelectorAll("[data-category-jump]:not([hidden])").length;
    categoryGrid.setAttribute("aria-label","Dostępne kategorie: "+visibleTiles);
  }
}

function loadFavorites() {
  try {
    const value = JSON.parse(localStorage.getItem("tanievoFavorites") || localStorage.getItem("lowcaFavorites") || localStorage.getItem("cenolotFavorites") || "[]");
    return Array.isArray(value) ? value.filter(v => Number.isInteger(v) || typeof v === "string").map(String) : [];
  } catch {
    return [];
  }
}
let favorites = loadFavorites();

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[char]));
}
function formatDate(value) {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? "czas nieznany" : date.toLocaleString("pl-PL", {dateStyle:"short",timeStyle:"short"});
}
function isSafeExternalHttpsUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" &&
      Boolean(url.hostname) &&
      !url.username &&
      !url.password &&
      (url.port === "" || url.port === "443");
  } catch {
    return false;
  }
}
function safeImage(value) {
  return isSafeExternalHttpsUrl(value);
}
function safeProductUrl(value) {
  return isSafeExternalHttpsUrl(value);
}

// Wspólne parametry kampanii Ceneo. Identyfikatory kreacji są przypisane do konkretnych pozycji.
const CENEO_CAMPAIGN = "cid=52090";
const CENEO_PUBLISHER = "pid=31443";
const CENEO_DEFAULT_TRACKING = CENEO_CAMPAIGN + "&crid=818403&" + CENEO_PUBLISHER;
// „Tanievo – produkt 001” (pierwsza pozycja) -> crid 818404
const CENEO_CREATIVE_URLS = {
  "tanievo-001": "https://www.ceneo.pl/199946527#cid=52090&crid=818405&pid=31443"
};
const AIRPODS_5_CENEO_URL = CENEO_CREATIVE_URLS["tanievo-001"];

function withCeneoTracking(candidate) {
  if (!safeProductUrl(candidate)) return "";
  try {
    const url = new URL(candidate);
    if (url.hostname !== "www.ceneo.pl") return "";
    // Zachowaj przypisaną kreację; wspólny tracking dodaj tylko do linków bez fragmentu.
    if (!url.hash) url.hash = CENEO_DEFAULT_TRACKING;
    return url.href;
  } catch {
    return "";
  }
}

function getCeneoUrl(product) {
  const creativeUrl = CENEO_CREATIVE_URLS[String(product.id)];
  if (creativeUrl) return creativeUrl;
  for (const candidate of [product.ceneoUrl, product.productUrl]) {
    const tracked = withCeneoTracking(candidate);
    if (tracked) return tracked;
  }
  return withCeneoTracking("https://www.ceneo.pl/;szukaj-" + encodeURIComponent(product.name));
}

function getAmazonUrl(product) {
  for (const candidate of [product.productUrl, product.amazonSearchUrl]) {
    if (!safeProductUrl(candidate)) continue;
    try {
      const url = new URL(candidate);
      if ((url.hostname === "www.amazon.pl" && url.searchParams.get("tag") === "tanievo-21") || url.hostname === "amzn.to" || url.hostname === "link.amazon") return candidate;
    } catch {}
  }
  return "https://www.amazon.pl/s?k=" + encodeURIComponent(product.name) + "&tag=tanievo-21";
}

function getDirectOfferUrl(product) {
  if (!safeProductUrl(product.productUrl)) return "";
  try {
    const host = new URL(product.productUrl).hostname;
    return host !== "www.ceneo.pl" && host !== "www.amazon.pl" ? product.productUrl : "";
  } catch {
    return "";
  }
}

function getPrimaryProductUrl(product) {
  const direct = getDirectOfferUrl(product);
  if (direct) return direct;
  if (product.linkType === "affiliate") return getAmazonUrl(product);
  return getCeneoUrl(product);
}
let liveCatalog = false;
["price-asc", "price-desc", "discount"].forEach(value => {
  const option = sort.querySelector('option[value="' + value + '"]');
  if (option) option.hidden = true;
});
async function loadAmazonOffers() {
  try {
    const response = await fetch("./amazon-offers.json", {cache:"default"});
    if (!response.ok) return;
    const payload = await response.json();
    if (!payload || !Array.isArray(payload.offers)) return;
    const imported = payload.offers.filter(item => {
      if (!item || typeof item.id !== "string" || typeof item.name !== "string" || typeof item.productUrl !== "string" || !isSafeExternalHttpsUrl(item.productUrl)) return false;
      const url = new URL(item.productUrl);
      if (item.linkType === "comparison") return (url.hostname === "www.ceneo.pl" || (url.hostname === "www.amazon.pl" && url.searchParams.get("tag") === "tanievo-21") || ["allegro.pl","www.allegro.pl","mrkapitan.pl","www.mrkapitan.pl","www.x-kom.pl"].includes(url.hostname)) && typeof item.amazonSearchUrl === "string" && isSafeExternalHttpsUrl(item.amazonSearchUrl) && ((new URL(item.amazonSearchUrl).hostname === "www.amazon.pl" && new URL(item.amazonSearchUrl).searchParams.get("tag") === "tanievo-21") || ["amzn.to","link.amazon"].includes(new URL(item.amazonSearchUrl).hostname)) && (item.price == null || (Number.isFinite(Number(item.price)) && Number(item.price) > 0));
      return url.hostname === "www.amazon.pl" && url.searchParams.get("tag") === "tanievo-21" && typeof item.asin === "string" && url.pathname.includes("/dp/" + item.asin);
    }).map(item => ({
      id:item.id, name:item.name, category:normalizeCategory(item.category || "Inne"),
      price:Number.isFinite(Number(item.price)) && Number(item.price) > 0 && item.priceCheckedAt && (Date.now() - Date.parse(item.priceCheckedAt) <= 72 * 60 * 60 * 1000) && Date.now() >= Date.parse(item.priceCheckedAt) ? Number(item.price) : null, priceSource:item.priceSource || (item.priceCheckedAt ? "Cena sprawdzona: " + item.priceCheckedAt : "Cena niepotwierdzona — sprawdź u sprzedawcy"), priceCheckedAt:item.priceCheckedAt || "", store:item.merchant || "Amazon", productUrl:item.productUrl,
      linkType:item.linkType === "comparison" ? "comparison" : "affiliate", amazonSearchUrl:item.amazonSearchUrl || "", ceneoUrl:item.ceneoUrl || "",
      image:safeImage(item.image) ? item.image : "", availability:item.availability || "Sprawdź u sprzedawcy", icon:categoryProductIcon(item.category, item.name)
    }));
    for (const offer of imported) {
      const index = products.findIndex(product => String(product.id) === offer.id);
      if (index >= 0) {
        // Nie pozwól, aby błędny lub powielony identyfikator nadpisał inną ofertę.
        if (products[index].name !== offer.name) {
          console.warn("Pominięto ofertę z kolizją ID:", offer.id, offer.name);
          continue;
        }
        products[index] = {...products[index], ...offer};
      } else {
        products.unshift(offer);
      }
    }
    buildCategoryNavigation();
    render();
  } catch (error) {
    console.warn("Nie udało się wczytać ofert Amazon PartnerNet.", error);
  }
}

function normalizeOfferNameKey(value){
  return String(value||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g," ").trim();
}
function isUsableImportedOffer(item){
  if(!item||typeof item.name!=="string")return false;
  const name=item.name.trim();
  if(name.length<8||name.length>180||/[\u0000-\u001f]/.test(name))return false;
  if(!item.image||!safeProductUrl(item.image))return false;
  if(!safeProductUrl(item.productUrl))return false;
  if(!Number.isFinite(Number(item.price))||Number(item.price)<1||Number(item.price)>100000)return false;
  // Only keep imported offers with a recognized Polish-facing merchant label.
  return typeof item.merchant==="string"&&item.merchant.trim()==="AliExpress PL";
}
function normalizeLiveItems(items,fetchedAt){
  const now=Date.now(),maxAgeMs=72*60*60*1000,seenNames=new Set(products.map(p=>normalizeOfferNameKey(p.name)));
  const accepted=[];
  for(const item of items){
    if(!item||!item.updatedAt)continue;
    const updated=Date.parse(item.updatedAt);
    if(!Number.isFinite(updated)||now-updated<0||now-updated>maxAgeMs||!isUsableImportedOffer(item))continue;
    const nameKey=normalizeOfferNameKey(item.name);
    if(!nameKey||seenNames.has(nameKey))continue;
    seenNames.add(nameKey);
    const originalCategory=typeof item.category==="string"?item.category:"Inne";
    const n=normalizeOfferNameKey(item.name);
    let category=normalizeCategory(originalCategory);
    if(/smartfon|telefon|iphone|galaxy [aszm]|redmi note|pixel [0-9]/.test(n))category="Telefony";
    else if(/telewizor|qled|oled|soundbar/.test(n))category="Elektronika";
    else if(/opon|wycierac|akumulator samoch|samochod|motocykl|kask|olej silnik/.test(n))category="Motoryzacja";
    else if(/wiertark|wkretark|szlifierk|narzedzi|klucz nasadow|spawark/.test(n))category="Narzędzia";
    else if(/pies|psa|kot|karma|smycz|legowisk/.test(n))category="Dla zwierząt";
    else if(/lamp|zarowk|oswiet|latark/.test(n))category="Oświetlenie";
    else if(/lego|zabaw|klock|pluszak|lalka/.test(n))category="Zabawki";
    else if(/ekspres do kaw|frytkownic|odkurzacz|toster|czajnik|blender|robot sprz/.test(n))category="AGD";
    accepted.push({id:String(item.id),name:item.name.trim(),category,price:Number(item.price),store:item.merchant,productUrl:item.productUrl,image:item.image,updatedAt:item.updatedAt||fetchedAt||"",availability:typeof item.availability==="string"?item.availability:"Sprawdź u sprzedawcy",linkType:"affiliate",icon:"🛍️"});
  }
  return accepted;
}
async function loadLiveCategoryNames(names){
  if(!catalogManifest?.categoryFiles)return 0;
  activeLiveCategoryNames=[...names];
  const wanted=new Set(names.map(categoryMatchKey));
  const selected=Object.entries(catalogManifest.categoryFiles)
    .filter(([name])=>wanted.has(categoryMatchKey(name)))
    .map(([,files])=>(files||[]).find(entry=>!loadedCatalogFiles.has(entry.file)))
    .filter(Boolean);
  const counts=await Promise.all(selected.map(entry=>{
    if(catalogFilePromises.has(entry.file))return catalogFilePromises.get(entry.file);
    const task=fetch("./data/catalog/"+encodeURIComponent(entry.file),{cache:"force-cache"})
      .then(response=>{if(!response.ok)throw new Error("Nie udało się pobrać "+entry.file);return response.json();})
      .then(payload=>{
        const normalized=normalizeLiveItems(Array.isArray(payload.items)?payload.items:[],catalogManifest.generatedAt);
        const ids=new Set(products.map(product=>String(product.id)));
        products.push(...normalized.filter(product=>!ids.has(String(product.id))));
        loadedCatalogFiles.add(entry.file);
        return normalized.length;
      })
      .finally(()=>catalogFilePromises.delete(entry.file));
    catalogFilePromises.set(entry.file,task);return task;
  }));
  liveCatalog=true;
  buildCategoryNavigation();
  render();
  updateLoadMoreButton();
  return counts.reduce((sum,count)=>sum+count,0);
}
async function loadNextLiveCategoryPage(){
  if(!activeLiveCategoryNames.length)return;
  await loadLiveCategoryNames(activeLiveCategoryNames);
}
function updateLoadMoreButton(){
  if(!loadMoreButton||!catalogManifest?.categoryFiles)return;
  const wanted=new Set(activeLiveCategoryNames.map(categoryMatchKey));
  const remaining=Object.entries(catalogManifest.categoryFiles)
    .filter(([name])=>wanted.has(categoryMatchKey(name)))
    .some(([,files])=>(files||[]).some(entry=>!loadedCatalogFiles.has(entry.file)));
  loadMoreButton.hidden=!remaining;
  loadMoreButton.textContent="Pobierz kolejną porcję produktów";
}

async function loadLiveCatalog(){
  try{
    const response=await fetch("./data/catalog/manifest.json",{cache:"no-store"});if(!response.ok)return;
    const manifest=await response.json();if(!manifest?.categoryFiles||!manifest?.categories)return;
    catalogManifest=manifest;liveCatalog=true;
    catalogCategories=[...new Set([...products.map(p=>p.category),...Object.keys(manifest.categories)])].sort((a,b)=>a.localeCompare(b,"pl"));
    buildCategoryNavigation();
    ["price-asc","price-desc","discount"].forEach(value=>{const option=sort.querySelector('option[value="'+value+'"]');if(option)option.hidden=false;});
    const discountOption=sort.querySelector('option[value="discount"]');if(discountOption)discountOption.hidden=true;
    if(sort.value==="discount")sort.value="recommended";
    const disclaimer=document.querySelector(".disclaimer");if(disclaimer)disclaimer.textContent="Oferty są pobierane z katalogu partnerów dopiero po wybraniu kategorii. Ceny i dostępność potwierdź u sprzedawcy.";
    const status=document.getElementById("catalogStatus");if(status)status.textContent="Katalog zawiera "+Number(manifest.count).toLocaleString("pl-PL")+" produktów. Wybierz kategorię, aby pobrać tylko potrzebne oferty.";
  }catch(error){console.warn("Nie udało się pobrać manifestu katalogu; pozostaje katalog lokalny.",error);}
}

function money(value) {
  return value.toFixed(2).replace(".", ",") + " zł";
}

// Pokazujemy kwoty porównawcze wyłącznie wtedy, gdy mają własne źródło i świeżą datę.
function getFreshComparisonPrice(product, shop) {
  const key = shop === "amazon" ? "amazonPrice" : "ceneoPrice";
  const dateKey = shop === "amazon" ? "amazonPriceCheckedAt" : "ceneoPriceCheckedAt";
  const value = Number(product[key]);
  const checked = Date.parse(product[dateKey] || "");
  if (!Number.isFinite(value) || value <= 0 || !Number.isFinite(checked)) return null;
  const age = Date.now() - checked;
  return age >= 0 && age <= 72 * 60 * 60 * 1000 ? value : null;
}
function comparisonPanel(product) {
  const amazon = getFreshComparisonPrice(product, "amazon");
  const ceneo = getFreshComparisonPrice(product, "ceneo");
  const productLabel = String(product.name || "").toLocaleLowerCase("pl");
  const categoryLabel = String(product.category || "").toLocaleLowerCase("pl");
  const isAppleProduct = /apple|iphone|ipad|airpods|macbook|imac/.test(productLabel);
  const isOutdoorProduct = /outdoor|trekking|turyst|camping|kemping|namiot|plecak|śpiwor|latark|termos|rower|sport/.test(productLabel + " " + categoryLabel);
  const isHomeEnergyProduct = /fotowolta|solar|solarn|pompa ciepła|ogrzewanie domu|grzejnik|panel grzewczy|termowentylator|energia/.test(productLabel + " " + categoryLabel);
  const isFitnessProduct = /sport|fitness|siłown|trening|hantl|sztang|ławka|obciąż|bieżnia|rower/.test(productLabel + " " + categoryLabel);
  let summary = "Sprawdź aktualne ceny w obu sklepach";
  if (amazon !== null && ceneo !== null) {
    const diff = Math.abs(amazon - ceneo);
    summary = diff < 0.01 ? "Taka sama cena w obu sklepach" :
      (amazon < ceneo ? "Amazon taniej o " : "Ceneo taniej o ") + money(diff);
  } else if (amazon !== null) {
    summary = "Cena Amazon potwierdzona · Ceneo do sprawdzenia";
  } else if (ceneo !== null) {
    summary = "Cena Ceneo potwierdzona · Amazon do sprawdzenia";
  }
  return `<details class="price-comparison" aria-label="Porównanie cen Amazon i Ceneo">
    <summary class="comparison-heading"><strong>Porównaj ceny</strong><span class="comparison-toggle" aria-hidden="true">＋</span></summary>
    <div class="comparison-content">
    <p class="comparison-summary">${escapeHTML(summary)}</p>
    <div class="comparison-stores">
      <div class="comparison-store"><span class="comparison-store-name">Amazon</span><strong>${amazon === null ? "Sprawdź cenę" : money(amazon)}</strong><a href="${escapeHTML(getAmazonUrl(product))}" target="_blank" rel="sponsored nofollow noopener noreferrer">Zobacz ofertę ↗</a></div>
      <div class="comparison-store"><span class="comparison-store-name">Ceneo</span><strong>${ceneo === null ? "Sprawdź cenę" : money(ceneo)}</strong><a href="${escapeHTML(getCeneoUrl(product))}" target="_blank" rel="nofollow noopener noreferrer">Zobacz oferty ↗</a></div>
    </div>
    ${isAppleProduct ? `<div class="comparison-store partner-store"><span class="comparison-store-name">Lantre · autoryzowany sklep Apple</span><strong>Oferta Apple</strong><a href="https://webep1.com/c/13508/6aecbf4b2777780c42e8ebd9?r=aHR0cHM6Ly9pcW8ubGFudHJlLnBsLz9QNTExNzQ5NTdGMDYxMTkxJnJlZGlyPWh0dHBzOi8vbGFudHJlLnBsLw" target="_blank" rel="sponsored nofollow noopener noreferrer">Przejdź do Lantre ↗</a></div>` : ""}
    ${isOutdoorProduct ? `<div class="comparison-store partner-store"><span class="comparison-store-name">RG CAMP · sprzęt outdoor</span><strong>Turystyka i rekreacja</strong><a href="https://webep1.com/c/13574/6aecbf4b2777780c42e8ebd9?r=aHR0cHM6Ly9yZ2NhbXAuZXUv" target="_blank" rel="sponsored nofollow noopener noreferrer">Przejdź do sklepu RG CAMP ↗</a><a href="https://webep1.com/go/4833aa708e" target="_blank" rel="sponsored nofollow noopener noreferrer">Zobacz ofertę partnerską ↗</a></div>` : ""}
    ${isHomeEnergyProduct ? `<div class="comparison-store partner-store"><span class="comparison-store-name">Solve24 · rozwiązania energetyczne</span><strong>Dom i energia</strong><a href="https://webep1.com/c/5400/6aecbf4b2777780c42e8ebd9?r=aHR0cHM6Ly93d3cuc29sdmUyNC5wbA" target="_blank" rel="sponsored nofollow noopener noreferrer">Przejdź do Solve24 ↗</a><a href="https://webep1.com/go/103fc5f5a0" target="_blank" rel="sponsored nofollow noopener noreferrer">Zobacz ofertę partnerską ↗</a></div>` : ""}
    ${isFitnessProduct ? `<div class="comparison-store partner-store"><span class="comparison-store-name">Marbo Sport · sprzęt treningowy</span><strong>Siłownia i trening</strong><a href="https://webep1.com/c/3206/6aecbf4b2777780c42e8ebd9?r=aHR0cHM6Ly93d3cubWFyYm8tc3BvcnQucGw" target="_blank" rel="sponsored nofollow noopener noreferrer">Przejdź do Marbo Sport ↗</a></div>` : ""}

    <small>Ceny porównujemy tylko dla zgodnego modelu i wariantu. Kwoty bez świeżego potwierdzenia nie są wyświetlane.</small>
    </div>
  </details>`;
}




function render() {
  let list = products.filter(product => {
    const matchesCategory = category === "Wszystkie" || (activeCategoryMatches ? activeCategoryMatches.includes(normalizeCategory(product.category)) : product.category === category);
    const matchesSearch = !search || (product.name + " " + product.category).toLocaleLowerCase("pl").includes(search.value.trim().toLocaleLowerCase("pl"));
    const matchesFavorites = !favoritesOnly || favorites.includes(String(product.id));
    // Search-only discovery entries stay out of the default "All" view.
    const hasProductUrl = typeof product.productUrl === "string" && product.productUrl.trim().length > 0;
    // Entries without a product destination are not treated as real offers; hide them from category browsing too.
    const isSearchOnly = product.linkType === "search" || !hasProductUrl;
    const matchesOfferType = !isSearchOnly;
    return matchesCategory && matchesSearch && matchesFavorites && matchesOfferType;
  });

  if (liveCatalog && sort.value === "price-asc") list.sort((a,b) => a.price - b.price);
  if (liveCatalog && sort.value === "price-desc") list.sort((a,b) => b.price - a.price);
  if (liveCatalog && sort.value === "discount") list.sort((a,b) => a.price - b.price);

  grid.innerHTML = list.slice(0, 120).map(product => {
    const safeName = escapeHTML(product.name);
    const safeCategory = escapeHTML(product.category);
    const safeStore = escapeHTML(product.store || product.merchant || "Sklep partnerski");
    const saved = favorites.includes(String(product.id));
    return `<article class="product-card">
      <div class="product-visual">
        ${Number.isFinite(product.discount) ? `<span class="discount-pill">−${product.discount}%</span>` : ""}
        ${safeImage(product.image) ? `<img class="product-image" src="${escapeHTML(product.image)}" alt="${safeName}" data-fallback-icon="${escapeHTML(product.icon || categoryProductIcon(product.category, product.name))}" loading="lazy" decoding="async">` : `<span class="product-image-fallback" role="img" aria-label="Podgląd kategorii produktu"><span class="product-fallback-icon" aria-hidden="true">${escapeHTML(product.icon || categoryProductIcon(product.category, product.name))}</span><small>Podgląd produktu</small></span>`}
        <button class="fav ${saved ? "saved" : ""}" data-fav="${escapeHTML(String(product.id))}" aria-label="${saved ? "Usuń z" : "Dodaj do"} ulubionych: ${safeName}" aria-pressed="${saved}">${saved ? "♥" : "♡"}</button>
      </div>
      <div class="product-category">${safeCategory}</div>
      <h3><a class="product-title-link" href="${escapeHTML(getPrimaryProductUrl(product))}" target="_blank" rel="sponsored nofollow noopener noreferrer">${safeName} <span aria-hidden="true">↗</span></a></h3>
      ${Number.isFinite(product.price) ? `<div class="price-row"><span class="price">${money(product.price)}</span></div>${product.priceSource || product.priceCheckedAt || product.linkType === "comparison" ? `<div class="demo-price-note">${product.linkType === "comparison" ? "Cena orientacyjna · " : ""}${escapeHTML(product.priceSource || "Cena sprawdzona")}${product.priceCheckedAt ? " · sprawdzono: " + escapeHTML(product.priceCheckedAt) : ""}</div>` : ""}` : `<div class="demo-price-note">${product.priceSource ? "Cena niepotwierdzona — sprawdź u sprzedawcy" : "Sprawdź aktualną cenę u partnera"}</div>`}
      <div class="store">${safeStore} · ${product.linkType === "paused" ? "oferta chwilowo niedostępna" : product.linkType === "search" ? "wyszukiwanie produktu" : product.linkType === "comparison" ? "porównanie cen" : product.linkType === "affiliate" ? "link partnerski" : product.productUrl ? "link zewnętrzny" : "weryfikacja linku w toku"}</div>
      ${liveCatalog && product.availability ? `<div class="store">Dostępność: ${escapeHTML(product.availability)}</div>` : ""}
      ${comparisonPanel(product)}
      ${getDirectOfferUrl(product) ? `<a class="offer-link" href="${escapeHTML(getDirectOfferUrl(product))}" target="_blank" rel="sponsored nofollow noopener noreferrer"><span>Sprawdź ofertę partnera ↗</span></a>` : ""}
    </article>`;
  }).join("");
  const resultCount = document.getElementById("resultCount");
  if (resultCount) resultCount.textContent = list.length > 120
    ? "Wyświetlono 120 z " + list.length.toLocaleString("pl-PL") + " wyników. Użyj wyszukiwarki lub kategorii, aby zawęzić listę."
    : list.length.toLocaleString("pl-PL") + (list.length === 1 ? " produkt" : " produktów");

  // Obsłuż błędy zewnętrznych serwerów zdjęć, aby karta nie zostawała pusta.
  grid.querySelectorAll("img.product-image").forEach(img => {
    img.addEventListener("error", () => {
      const fallback = document.createElement("span");
      fallback.className = "product-image-fallback";
      fallback.setAttribute("role", "img");
      fallback.setAttribute("aria-label", "Zdjęcie produktu niedostępne");
      const icon = document.createElement("span");
      icon.className = "product-fallback-icon";
      icon.setAttribute("aria-hidden", "true");
      icon.textContent = img.dataset.fallbackIcon || "📦";
      const label = document.createElement("small");
      label.textContent = "Zdjęcie niedostępne";
      fallback.append(icon, label);
      img.replaceWith(fallback);
    }, {once:true});
  });

  const count = list.length;
  document.getElementById("resultCount").textContent = count > 120 ? `Wyświetlono 120 z ${count.toLocaleString("pl-PL")} produktów. Zawęź wyszukiwanie lub kategorię.` : `${count} ${count === 1 ? "produkt" : count < 5 ? "produkty" : "produktów"}`;
  document.getElementById("emptyState").hidden = count !== 0;
  grid.hidden = count === 0;
  favoritesToggle.setAttribute("aria-pressed", String(favoritesOnly));
  favoritesToggle.classList.toggle("active", favoritesOnly);
  favoritesToggle.innerHTML = `${favoritesOnly ? "♥" : "♡"} Tylko zapisane <span>${favorites.length}</span>`;
  const favoritesCount = document.getElementById("favoritesCount");
  if (favoritesCount) favoritesCount.textContent = String(favorites.length);
}

// Jedna obsługa kategorii w fazie capture: obejmuje kafelki strony i chipy katalogu,
// także po przebudowaniu ich przez katalog dodatkowy lub live.
document.addEventListener("click", async event => {
  const target = event.target && typeof event.target.closest === "function"
    ? event.target
    : event.composedPath?.().find(node => node && typeof node.closest === "function");
  if (!target) return;
  const tile = target.closest("[data-category-jump]");
  const chip = target.closest("[data-category]");
  if (!tile && !chip) return;

  event.preventDefault();
  favoritesOnly = false;
  if (search) search.value = "";
  if (favoritesToggle) favoritesToggle.setAttribute("aria-pressed", "false");

  if (tile) {
    const matches=new Set(getTileCategoryMatches(tile).map(categoryMatchKey));
    const names=catalogManifest?Object.keys(catalogManifest.categories).filter(name=>matches.has(categoryMatchKey(name))):[];
    if(names.length)await loadLiveCategoryNames(names);
    const matchingProducts=products.filter(product=>matches.has(categoryMatchKey(product.category)));
    activeCategoryMatches=[...new Set(matchingProducts.map(product=>normalizeCategory(product.category)))];
    category=activeCategoryMatches[0]||"Wszystkie";
    const label=tile.querySelector("strong")?.textContent.trim()||tile.dataset.categoryJump||"Wybrana kategoria";
    const total=getLiveCategoryCount([...matches]),status=document.getElementById("catalogStatus");
    if(status)status.textContent=(total??matchingProducts.length).toLocaleString("pl-PL")+" produktów w kategorii „"+label+"”.";
  } else {
    category=chip.dataset.category||"Wszystkie";activeCategoryMatches=null;
    if(category!=="Wszystkie"&&catalogManifest)await loadLiveCategoryNames([category]);
    else {activeLiveCategoryNames=[];updateLoadMoreButton();}
  }

  document.querySelectorAll(".chip").forEach(item => {
    const active = item.dataset.category === category;
    item.classList.toggle("active", active);
    item.setAttribute("aria-pressed", String(active));
  });
  render();
  const section = document.getElementById("productGrid") || document.getElementById("oferty");
  if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
}, true);

if(search)search.addEventListener("input",()=>{
  if(catalogManifest&&category==="Wszystkie"&&search.value.trim().length>=2){const status=document.getElementById("catalogStatus");if(status)status.textContent="Wybierz kategorię, aby przeszukać jej pełny katalog bez pobierania wszystkich 165 tys. ofert.";}
  render();
});
sort.addEventListener("change", render);
favoritesToggle.addEventListener("click", () => {
  favoritesOnly = !favoritesOnly;
  render();
});

const clearSearch = document.getElementById("clearSearch");
if (clearSearch && search) clearSearch.addEventListener("click", () => {
  if (search) search.value = "";
  render();
  search.focus();
});

document.getElementById("resetFilters").addEventListener("click", () => {
  category = "Wszystkie";
  activeCategoryMatches = null;
  activeLiveCategoryNames = [];
  updateLoadMoreButton();
  favoritesOnly = false;
  search.value = "";
  sort.value = "recommended";
  document.querySelectorAll(".chip").forEach(chip => {
    const active = chip.dataset.category === "Wszystkie";
    chip.classList.toggle("active", active);
    chip.setAttribute("aria-pressed", String(active));
  });
  render();
});

// Jeśli zewnętrzny serwer zdjęć odrzuci hotlink lub zwróci 404, pokaż czytelny fallback zamiast pustego pola.
grid.addEventListener("error", event => {
  const image = event.target;
  if (!image || image.tagName !== "IMG" || !image.classList.contains("product-image")) return;
  const card = image.closest(".product-visual");
  if (!card || image.dataset.fallbackApplied === "true") return;
  image.dataset.fallbackApplied = "true";
  const productName = image.alt || "Produkt";
  const cardCategory = card.parentElement?.querySelector(".product-category")?.textContent || "";
  const product = products.find(item => item.name === productName);
  const icon = product ? (product.icon || categoryProductIcon(product.category, product.name)) : categoryProductIcon(cardCategory, productName);
  const fallback = document.createElement("span");
  fallback.className = "product-image-fallback";
  fallback.setAttribute("role", "img");
  fallback.setAttribute("aria-label", "Brak zdjęcia produktu — podgląd kategorii");
  const symbol = document.createElement("span");
  symbol.className = "product-fallback-icon";
  symbol.setAttribute("aria-hidden", "true");
  symbol.textContent = icon;
  const label = document.createElement("small");
  label.textContent = "Zdjęcie chwilowo niedostępne";
  fallback.append(symbol, label);
  image.replaceWith(fallback);
}, true);

// Kliknięcie w dowolne miejsce karty produktu otwiera ofertę; kontrolki zachowują własne działanie.
grid.addEventListener("click", event => {
  const target = event.target;
  if (!target || target.closest("a,button,details,summary,input,select")) return;
  const card = target.closest(".product-card");
  if (!card) return;
  const link = card.querySelector(".product-title-link");
  if (link && link.href) window.location.assign(link.href);
});

grid.addEventListener("click", event => {
  const button = event.target.closest("[data-fav]");
  if (!button) return;
  const id = button.dataset.fav;
  if (!products.some(product => String(product.id) === id)) return;
  favorites = favorites.includes(id) ? favorites.filter(value => value !== id) : [...favorites, id];
  try { localStorage.setItem("tanievoFavorites", JSON.stringify(favorites)); localStorage.removeItem("lowcaFavorites"); } catch {}
  render();
});


const mobileNavToggle = document.getElementById("mobileNavToggle");
const mainNav = document.getElementById("main-nav");
if (mobileNavToggle && mainNav) {
  mobileNavToggle.addEventListener("click", () => {
    const expanded = mobileNavToggle.getAttribute("aria-expanded") === "true";
    mobileNavToggle.setAttribute("aria-expanded", String(!expanded));
    mainNav.classList.toggle("is-open", !expanded);
    mobileNavToggle.innerHTML = !expanded ? 'Zamknij <span aria-hidden="true">×</span>' : 'Menu <span aria-hidden="true">☰</span>';
  });
  mainNav.addEventListener("click", event => {
    if (event.target.closest("a")) {
      mainNav.classList.remove("is-open");
      mobileNavToggle.setAttribute("aria-expanded", "false");
      mobileNavToggle.innerHTML = 'Menu <span aria-hidden="true">☰</span>';
    }
  });
}

document.getElementById("year").textContent = new Date().getFullYear();
buildCategoryNavigation();
render();
// Jeśli zatwierdzony workflow opublikuje products.json, strona pobierze aktualny katalog.
// Brak pliku oznacza pozostawienie bezpiecznego katalogu demonstracyjnego.
loadLiveCatalog();
loadAmazonOffers();

const heroFavoritesAction = document.getElementById("heroFavoritesAction");
if (heroFavoritesAction && favoritesToggle) heroFavoritesAction.addEventListener("click", () => { favoritesToggle.click(); document.getElementById("oferty")?.scrollIntoView({behavior:"smooth"}); });

const copyPromoButton = document.getElementById("copyPromoText");
if (copyPromoButton) {
  copyPromoButton.addEventListener("click", async () => {
    const promoText = "Sprawdź Tanievo.pl — katalog produktów, wyszukiwanie w Ceneo i praktyczne poradniki zakupowe.\nhttps://tanievo.pl/";
    const feedback = document.getElementById("shareFeedback");
    try {
      await navigator.clipboard.writeText(promoText);
      if (feedback) feedback.textContent = "Tekst skopiowany. Możesz wkleić go w wybranej grupie.";
    } catch {
      if (feedback) feedback.textContent = "Nie udało się skopiować automatycznie. Skopiuj adres strony: https://tanievo.pl/";
    }
  });
}
