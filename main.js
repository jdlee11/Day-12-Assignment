var species = {
  robo: {
    name: "Roborovsky",
    bio: "Roborovski hamsters (Phodopus roborovskii;" +
    " formerly Cricetulus bedfordiae) also known as desert" +
    " hamsters or Robos are the smallest of three species of" +
    " hamster in the genus Phodopus, averaging under 2 centimetres" +
    " (0.8 in) at birth and 4.5–5 centimetres (1.8–2.0 in) and 20–25" +
    " grams (0.71–0.88 oz) during adulthood.[2] Distinguishing characteristics" +
    " of the Roborovskis are eyebrow-like white spots and the lack of any dorsal" +
    " stripe (found on the other members of the Phodopus genus). The average lifespan" +
    " for the Roborovski hamster is three years, though this is dependent on living conditions" +
    " (extremes being four years in captivity and two in the wild).[citation needed] Roborovskis" +
    " are known for their speed and have been said to run an equivalent of four human marathons each night on average.[3]"
  },
  syrian: {
    name: "Syrian",
    bio: "The Syrian hamster (Mesocricetus auratus) is a member " +
    "of the subfamily Cricetinae, the hamsters.[2] In the wild, they " +
    "are now considered vulnerable. Their natural geographical range is " +
    "limited to the north of Syria and the south of Turkey, in arid habitats." +
    "Their numbers have been declining due to loss of habitat caused by " +
    "agriculture and deliberate destruction by humans.[1] However, captive-breeding" +
    " programs are well established, and captive-bred Syrian hamsters are often kept as " +
    "pets. They are also used as scientific research animals throughout the world."
  },
  winter: {
    name: "Djungarian",
    bio: "he Djungarian hamster (Phodopus sungorus), also known as the Siberian hamster," +
    " Siberian dwarf hamster or Russian winter white dwarf hamster, is one of three species" +
    " of hamster in the genus Phodopus. It is ball-shaped and typically half the size of the" +
    " Syrian hamster, and therefore called a dwarf hamster along with all Phodopus species. " +
    "Features of the Djungarian hamster include a typically thick, dark grey dorsal stripe and " +
    "furry feet. As winter approaches and the days shorten, the Djungarian hamster's dark fur is " +
    "almost entirely replaced with white fur. In captivity, this does not always happen. In the wild," +
    " they originate from Dzungaria, the wheat fields of Kazakhstan, the meadows of Mongolia, Siberia, and the birch stands of Manchuria."
  }
};

var textHeader = document.querySelector("h1");
var textBody = document.querySelector("p");

function renderContent(evt){
  console.log(location.hash);
  textHeader.textContent = species[location.hash.slice(1)].name;
  textBody.textContent = species[location.hash.slice(1)].bio;
}


window.addEventListener("hashchange", renderContent);
