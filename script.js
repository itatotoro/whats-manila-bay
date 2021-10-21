/*
This is your site JavaScript code - you can add interactivity and carry out processing
- Initially the JS writes a message to the console, and moves a button you can add from the README
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"

// This is a single line JS comment
/*
This is a comment that can span multiple lines 
- use comments to make your own notes!
*/

/*
Responsive design stuff.
*/

var r = window.matchMedia("(max-width: 600px)")
respDesign(r) // Call listener function at run time
r.addListener(respDesign) // Attach listener function on state changes

function respDesign(r) {
  if (r.matches) { // If media query matches
    document.getElementById("lcolumn").style.width = "100%";
    document.getElementById("rcolumn").style.width = "100%";
    document.getElementById("grid").style.width = "100%";
  } else {
    
  }
}

document.getElementById("frame").style.display = "none";
/*
document.getElementById("picinfo").innerHTML = "";
document.getElementById("refs").innerHTML = "";
*/

function detail(a){
  document.getElementById("rcolumn").style.display = "block";
  document.getElementById("rcolumn").style.opacity = 1;
  document.getElementById("grid").style.display = "none";
  document.getElementById("frame").style.display = "block";
  document.getElementById("frame").style.opacity = 1;
  document.getElementById("verify").style.opacity = 0;
  document.getElementById("row").style.margin = 0;
  
  if (r.matches){
    document.getElementById("lcolumn").style.width = "100%";
    document.getElementById("rcolumn").style.width = "100%";
    document.getElementById("frame").style.height = "400px";
  }
  else {
    document.getElementById("lcolumn").style.width = "70%";
    document.getElementById("rcolumn").style.width = "30%";
  }
  
  if (a == 1){
    document.getElementById("frame").style.backgroundImage = "url(https://cdn.glitch.com/fb10f383-0890-409e-b36f-cef479b16ff7%2Fmangroves.jpg?v=1633153658313)";
    document.getElementById("picinfo").innerHTML = "We have stood here long enough <br>To be mistaken as name-givers<br>To the land. All young lives,<br>In and off the reef, are cradled by our roots.<br><br>We have stood here long enough:<br>Bunched together to bear the<br>Sea in its thunderous temper,<br>The City implode upon our children.<br><br>Today there are new encroachers <br>Upon our sands. No cannons,<br>No sirens—only the thick swing of metal,<br>And our roots choking beneath foil.";
    document.getElementById("refs").innerHTML = 'September 25, 2021 | Navotas mudflats<br><a href = "https://www.facebook.com/photo/?fbid=10161180994647802&set=pcb.10161180994917802">Photo:</a> Diuvs de Jesus, marine scientist<br>References:<a href = "https://coconuts.co/manila/news/photos-of-manila-bays-polluted-mangroves-show-theres-more-work-that-needs-to-be-done/">[1]</a><a href = "https://www.esquiremag.ph/long-reads/features/manila-bay-mangroves-choking-with-garbage-a00293-20210930">[2]</a> <a href = "https://oceana.org/marine-life/marine-science-and-ecosystems/mangrove-forest">[3]</a>  <a href = "https://www.jstor.org/stable/29791188">[4]</a>';
    
  }
  if (a == 2){
    document.getElementById("picinfo").innerHTML ='All battles for the bay,<br>From Dewey to the waterfront lords,<br>Have never been for the waters.<br><br>They ebb and flow indifferently<br>About us, eager to bear<br>Our reflection, prompt submersion.';
    document.getElementById("refs").innerHTML =' March 20, 2019 | Pasig River flowing into Manila Bay<br><a href="https://www.rappler.com/newsbreak/in-depth/why-manila-bay-cannot-be-saved-6-months-rehabilitation-series-part-2 ">Photo:</a> Inoue Jaena | Rappler<br>References: <a href="https://www.esquiremag.ph/culture/lifestyle/manila-bay-history-a1729-20190111-lfrm ">[1]</a> <a href="https://www.denr.gov.ph/index.php?id=813&page=74&sort=&filter=&searchword= ">[2]</a> <a href="https://mb.com.ph/2018/01/28/finally-a-master-plan-for-manila-bay/ ">[3]</a>';
    document.getElementById("frame").style.backgroundImage = "url(https://cdn.glitch.com/fb10f383-0890-409e-b36f-cef479b16ff7%2FManila%20Bay%20aerial.jpg?v=1633158877916)";
  }
  if (a == 3){
    document.getElementById("picinfo").innerHTML =' We love our very own <del>natural</del>* white-sand beach!<br><del>The destination to be,</del>** <br><del>Safe for swimming</del>***,<br><del>A lasting landmark</del>****,<br>I mean... at least it’s clean?<br><br><small>*Dolomite = Construction material mined and exported from Cebu, without a permit <sup><a href="https://www.rappler.com/nation/cebu-provincial-board-did-not-issue-permit-to-extract-synthetic-sand-for-manila-bay">[1]</a></sup><br>**Wait for the public health emergency to be over! <br>***Don’t ingest or inhale! <sup><a href="https://www.rappler.com/newsbreak/iq/things-to-know-dolomite-sand-affect-manila-bay ">[2]</a></sup><br>****We have no control over the sea. <sup><a href="https://mb.com.ph/2020/10/09/washing-away-of-manila-bay-white-sand-pure-speculation-denr/">[3]</a></sup></small>';
    document.getElementById("refs").innerHTML ='September 19, 2020 | MANILABAYWALKDOLOMITEBEACH<br><a href="https://www.rappler.com/nation/look-artificial-white-sand-beach-manila-bay-opens ">Photo:</a> Inoue Jaena | Rappler<br>References: <a href="https://news.abs-cbn.com/news/11/19/20/sc-denies-akbayans-bid-to-intervene-in-manila-bay-case-over-dolomite-beach">[4]</a> <a href="https://mb.com.ph/2021/09/28/fault-in-spaces-in-manila-baywalk-dolomite-beach-signage-fixed-after-going-viral/">[5]</a>';
    document.getElementById("frame").style.backgroundImage = "url(https://cdn.glitch.com/fb10f383-0890-409e-b36f-cef479b16ff7%2F1600505780-manila-bay-dolomite-opening-september-19-2020-007-738.jpg?v=1633158878483)";
  }
  if (a == 4){
    document.getElementById("picinfo").innerHTML ='Known =  What seawalls should do, the thrill of being splashed<br>Unknown = The fury of the sea? Storm surge? <i>Daluyong?</i>';
    document.getElementById("refs").innerHTML =' September 26, 2011 | Baywalk along Roxas Boulevard, Manila during a storm surge at the height of Typhoon Pedring (international name: Nesat)<br><a href="https://curlybookworm.wordpress.com/tag/pedring/">Photo:</a> Paulo Payumo<br>References:<a href="https://www.philstar.com/pilipino-star-ngayon/metro/2018/09/16/1851889/roxas-boulevard-nalubog-sa-baha-basura">[1]</a> <a href="https://www.gmanetwork.com/news/news/nation/233611/manila-cleans-up-after-typhoon-pedring/story/">[2]</a> <a href="https://news.abs-cbn.com/focus/11/17/13/storm-surges-waves-why-manila-risk">[3]</a> <a href="https://www.officialgazette.gov.ph/laginghanda/storm-surges/">[4]</a>';
    document.getElementById("frame").style.backgroundImage = "url(https://cdn.glitch.com/fb10f383-0890-409e-b36f-cef479b16ff7%2FStorm%20surge.jpg?v=1633159016499)";
  }
  if (a == 5){
    document.getElementById("picinfo").innerHTML =' When twilight dances with Manila’s smog,<br>Vermillion kisses upon the horizon<br>Draw a hundred more to be recalled.';
    document.getElementById("refs").innerHTML ='2019 | Baywalk, Roxas Boulevard<br><a href ="https://www.philstar.com/headlines/2019/01/27/1888502/denr-all-systems-go-manila-bay-rehab">Photo:</a> Miguel de Guzman | Philippine Star<br>References: <a href="https://www.nationalgeographic.com/science/article/131027-sunset-sky-change-color-red-clouds-science">[1]</a> <a href="https://www.scientificamerican.com/article/fact-or-fiction-smog-creates-beautiful-sunsets/">[2]</a>';
    document.getElementById("frame").style.backgroundImage = "url(https://cdn.glitch.com/fb10f383-0890-409e-b36f-cef479b16ff7%2Fgen2-manila-bay-sunset_2019-01-26_22-42-15.jpg?v=1633159016184)";
  }
  if (a == 6){
    if (r.matches) {
      document.getElementById("frame").style.backgroundImage = "url(https://cdn.glitch.com/fb10f383-0890-409e-b36f-cef479b16ff7%2Fbird%20crop.jpg?v=1633160564961)";
      document.getElementById("frame").style.backgroundSize = "cover";
    }else{
      document.getElementById("frame").style.backgroundImage = "url(https://cdn.glitch.com/fb10f383-0890-409e-b36f-cef479b16ff7%2FBlack-faced_spoonbill-e1579512631662-1840x500.jpg?v=1633159015984)";
      document.getElementById("frame").style.backgroundSize = "contain";
      document.getElementById("frame").style.backgroundRepeat = "no-repeat";
    }
    document.getElementById("picinfo").innerHTML ='<b>Black-faced Spoonbill</b><br><i>Platelea minor</i><ul type="disc"><li>Globally endangered</li><li>Originates from mainland China and North Korea, migrates south in the winter</li><li>24 found resting, the highest number reported for the bird in the country</li><li>Before 2019, they were not recorded in Manila Bay for over a century</li><li>Like other migratory birds, good indicator for ecosystem health</li></ul>';
    document.getElementById("refs").innerHTML ='January 11, 2020 | Mudflat areas of Barangay Taliptip in Bulacan<br><a href="https://www.wetlands.org/news/largest-ever-number-of-endangered-black-faced-spoonbills-recorded-in-the-philippines/">Photo:</a> Jasmin Meren<br>References: <a href ="https://businessmirror.com.ph/2020/01/14/globally-endangered-black-faced-spoonbills-recorded-in-bulacan/">[1]</a> <a href = "https://globalnation.inquirer.net/2289/manila-bay-bird-sanctuary-under-threat">[2]</a>';
  }
  if (a == 7){
    if (r.matches) {
      document.getElementById("frame").style.backgroundImage = "url(https://cdn.glitch.me/fb10f383-0890-409e-b36f-cef479b16ff7%2FTaliptip%20crop.jpg?v=1634825191264)";
      document.getElementById("frame").style.backgroundSize = "cover";
    }else{
      document.getElementById("frame").style.backgroundImage = "url(https://cdn.glitch.com/fb10f383-0890-409e-b36f-cef479b16ff7%2FTaliptip%20chapel.jpg?v=1633159109434)";
    }
    document.getElementById("picinfo").innerHTML ='Translated quotes from former residents of Barangay Taliptip, site of San Miguel Corporation’s New Manila International Airport (construction ongoing) <sup><a href="https://www.philstar.com/headlines/2020/10/14/2049252/taliptip-long-goodbye-where-sea-will-soon-meet-sky">[1]</a></sup><br><br><ul style="disc"><li>“We have had weddings there, and baptisms.” - Thelma Bantigue, 38</li><li>"It&#39;s different if you work for someone. They&#39;ll shout at you if you make a mistake… All my husband and I know are the sea.” - Anita Anastacio, 39</li><li>"Maybe this is as far as we can go and we just have to accept it. We fought it but we lost. We can meet them with our heads held high. We can look them in the eye [because] we stood up for our rights." Teodoro Bacon, 42</li></ul>';
    document.getElementById("refs").innerHTML ='October 2020 | Abandoned chapel on a sandbar called “Torres”, Barangay Taliptip, Bulakan, Bulacan<br><a href="https://www.philstar.com/headlines/2020/10/14/2049252/taliptip-long-goodbye-where-sea-will-soon-meet-sky">Photo</a>: Efigenio Toledo IV | Philippine Star';
    
  }
  if (a == 8){
     if (r.matches) {
      document.getElementById("frame").style.backgroundImage = "url(https://cdn.glitch.com/fb10f383-0890-409e-b36f-cef479b16ff7%2Fswim%20crop.jpg?v=1633160720913)";
      document.getElementById("frame").style.backgroundSize = "cover";
    }else{
      document.getElementById("frame").style.backgroundImage = "url(https://cdn.glitch.com/fb10f383-0890-409e-b36f-cef479b16ff7%2FManila%20Bay%20swimming.jpg?v=1633159109773)";
    } 
    document.getElementById("picinfo").innerHTML ='<b>What&#39;s in this water?</b><br><br><ul style="disc"><li>Fecal coliform bacteria in the water [2019: 1.26 billion MPN/100mL, standard is 100 MPN/100mL]<sup><a href="https://www.pna.gov.ph/articles/1151877">[1]</a></sup></li><li>Household wastes dumped into the 25-kilometer long Pasig River, plus other rivers and estuaries<sup><a href="https://www.rappler.com/newsbreak/in-depth/why-manila-bay-cannot-be-saved-6-months-rehabilitation-series-part-2">[2]</a></sup></li><li>Wastewater discharge from waterside establishments</li><li>85% of Metro Manila’s household toilets, unconnected to sewerage system<sup><a href="https://mb.com.ph/2021/02/18/a-reminder-on-the-problem-of-pollution-in-manila-bay/">[3]</a></sup></li><li>Single-use plastics, among other kinds of nonbiodegradables<sup><a href="https://www.pna.gov.ph/articles/1063387">[3]</a> <a href="https://www.rappler.com/environment/plastic-bags-garbage-manila-bay">[4]</a></sup></li></ul>Swimming in Manila Bay is banned by Manila ordinance.';
    document.getElementById("refs").innerHTML =' June 8, 2018 | Strip of sand at the stalled Baseco Reclamation Expansion Project<br><a href="https://www.rappler.com/nation/manila-bay-world-ocean-day-photos">Photo: </a> Leanne Jazul | Rappler<br>References: <a href="https://www.rappler.com/nation/manila-bay-lgus-violating-environmental-laws">[5]</a> <a href="https://www.cnnphilippines.com/news/2020/1/23/denr-manila-bay-rehab-fecal-coliform-levels.html">[6]</a>';
  }
  if (a == 9){
    if (r.matches) {
      document.getElementById("frame").style.backgroundImage = "url(https://cdn.glitch.me/fb10f383-0890-409e-b36f-cef479b16ff7%2FFisherfolk-protest-c.jpg?v=1634825546265)";
      document.getElementById("frame").style.backgroundSize = "cover";
    }else{
      document.getElementById("frame").style.backgroundImage = "url(https://cdn.glitch.com/fb10f383-0890-409e-b36f-cef479b16ff7%2FFisherfolk%20protest.jfif?v=1633159109329)";
    } 
    document.getElementById("picinfo").innerHTML ='Protest signage (translated from Filipino):<br><br>Defend livelihood <br>Demolition of mussel farms and fish pens<br>Oppose, resist, do not permit';
    document.getElementById("refs").innerHTML ='September 7, 2021 | Protest by the Samahan ng Mangingisda sa Parañaque (PANGISDA-Pilipinas) in La Huerta, Parañaque to stop demolition of fishpens in DENR’s Manila Bay rehabilitation project<br><a href="https://news.abs-cbn.com/news/multimedia/slideshow/09/07/21/the-day-in-photos-september-7-2021">Photo: </a>George Calvelo | ABS-CBN NewsReferences: <a href="https://news.abs-cbn.com/news/09/02/21/paggiba-ng-mga-tahongan-sa-manila-bay-tinutulan">[1]</a> <a href="https://angpamalakaya.org/2021/09/06/pamalakayas-tahong-and-talaba-growers-storm-denr-ahead-of-its-demolition-order/">[2]</a>';
  }
  
  // Zoom picture, show [-] button
  // Show info on the right hand bar
}

function closedetail(){
  document.getElementById("lcolumn").style.width = "100%";
  document.getElementById("rcolumn").style.width = "0%";
  document.getElementById("rcolumn").style.opacity = 0;
  document.getElementById("row").style.margin = "2vw";
  document.getElementById("frame").style.display = "none";
  document.getElementById("grid").style.display = "grid";
  document.getElementById("grid").style.opacity = 1;
  document.getElementById("picinfo").innerHTML = "";
  document.getElementById("refs").innerHTML = "";
  document.getElementById("verify").style.opacity = 1;
}

function select(obj){
  var pic = obj.id;
  var a = window.getComputedStyle(obj, null).outlineStyle;
  
  if (pic == "mangrove"){
  document.getElementById("birds").style.animation = "glow 3s 1 alternate";
  document.getElementById("aerial").style.animation = "glow 3s 1 alternate";
  document.getElementById("stormsurge").style.animation = "glow 3s 1 alternate";
  document.getElementById("fishers").style.animation = "glow 3s 1 alternate";
  }
  if (pic == "aerial"){
    document.getElementById("mangrove").style.animation = "glow 3s 1 alternate";
    document.getElementById("dolomite").style.animation = "glow 3s 1 alternate";
    document.getElementById("fishers").style.animation = "glow 3s 1 alternate";
    document.getElementById("sunset").style.animation = "glow 3s 1 alternate";
    document.getElementById("church").style.animation = "glow 3s 1 alternate";
    document.getElementById("swim").style.animation = "glow 3s 1 alternate";
  }
  if (pic == "dolomite"){
    document.getElementById("aerial").style.animation = "glow 3s 1 alternate";
    document.getElementById("sunset").style.animation = "glow 3s 1 alternate";
    document.getElementById("swim").style.animation = "glow 3s 1 alternate";
  }
  if (pic == "stormsurge"){
    document.getElementById("mangrove").style.animation = "glow 3s 1 alternate";
    document.getElementById("sunset").style.animation = "glow 3s 1 alternate";
  }
  if (pic == "sunset"){
    document.getElementById("dolomite").style.animation = "glow 3s 1 alternate";
    document.getElementById("stormsurge").style.animation = "glow 3s 1 alternate";
    document.getElementById("swim").style.animation = "glow 3s 1 alternate";
    document.getElementById("aerial").style.animation = "glow 3s 1 alternate";
  }
  if (pic == "birds"){
    document.getElementById("mangrove").style.animation = "glow 3s 1 alternate";
  }
  if (pic == "church"){
    document.getElementById("aerial").style.animation = "glow 3s 1 alternate";
    document.getElementById("fishers").style.animation = "glow 3s 1 alternate";
  }
  if (pic == "swim"){
    document.getElementById("aerial").style.animation = "glow 3s 1 alternate";
    document.getElementById("dolomite").style.animation = "glow 3s 1 alternate";
     document.getElementById("sunset").style.animation = "glow 3s 1 alternate";
  }
  if (pic == "fishers"){
    document.getElementById("mangrove").style.animation = "glow 3s 1 alternate";
    document.getElementById("aerial").style.animation = "glow 3s 1 alternate";
    document.getElementById("church").style.animation = "glow 3s 1 alternate";
  } 
  if (a == "none") {
    obj.style.outline = "5px solid white";
    obj.style.outlineoffset = "-30px";
  } else {
    obj.style.outline = "none";
  }
  var newone = obj.cloneNode(true);
  obj.parentNode.replaceChild(newone, obj);
  newone.id = pic;
  newone.onclick = select(this);  
}