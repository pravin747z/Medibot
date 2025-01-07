const userMessage = [
  ["hi", "hey", "hello"],
  ["sure", "yes", "no"],
  ["are you genious", "are you nerd", "are you intelligent"],
  ["i hate you", "i dont like you"],
  ["how are you", "how is life", "how are things", "how are you doing"],
  ["how is corona", "how is covid 19", "how is covid19 situation"],
  ["what are you doing", "what is going on", "what is up"],
  ["how old are you"],
  ["who are you", "are you human", "are you bot", "are you human or bot"],
  ["who created you", "who made you", "who is your creator"],
  //10
  [
    "your name please",
    "name",
    "your name",
    "may i know your name",
    "what is your name",
    "what call yourself"
  ],
  ["I love you","iloveyou","love you","loveyou","i loveyou","ilove you","i love you","i love u"],
  ["happy", "good", "fun", "wonderful", "fantastic", "cool", "very good"],
  ["bad", "bored", "tired"],
  ["help me", "tell me story", "tell me joke"],
  ["ah", "ok", "okay", "nice", "welcome"],
  ["thanks", "thank you"],
  ["what should i eat today"],
  ["bro"],
  ["what", "why", "how", "where", "when"],
  //20
  ["corona", "covid19", "coronavirus"],
  ["you are funny"],
  ["i dont know"],
  ["boring"],
  ["im tired"],
  ["aprm"],
  ["mm","mmm","hmm","hm","hmmm"],
  ["what you are doing?"],
  ["are you single or commited"],
  ["single  or commited"],
  //30
  ["do you like me?","do you like me","like me"],
  ["do you hate me?","do you hate me","hate me"],
  ["medical","MEDICAL","MEDICINE"],
  ["cold","cold and fever","cold,fever","iam having cold",,"iam having cold and fever","i have cold"],
  ["headache","headpain","head pain","head ache","iam having head pain","i have head pain","iam having head ache","i have head ache","i have head ache"],
  ["fever","light fever","lightfever","viral fever","viralfever","i have fever","iam having light fever"],
  //35
  ["electrical accident","currentshock","current shock","current attack"],
  ["cpr","how to give cpr","what is cpr","how to do cpr"],
  ["fire accident","fireaccident","burns","i have burns","iam having burns"],
  ["love failure"],
  ["road accident","roadaccident"],
  //40
  ["body pain","bodypain","i have body pain"],
  ["vomit","vomitting","vaanthi","i have vomiting problem","iam having vomit","i am having vomitting"],
  ["eyepain","eye pain","eye strain","eyestrain","i have eye pain","iam having eye pain","i am having eye strain"],
  ["Flu","Influenza","influ","fluu","flu","i have flu","iam having flu","i am having flu"],
  ["Sinus","Sinusitis","sines","sinus","i have sinus","iam having sinus","i am having sinus"],
  //45
  ["ear pain","earpain","ear infection","earinfection"],
  ["asthma","asthuma","Asthma","sneezing","i have asthma","iam having asthma","i am having asthma"],
  ["throatpain","throat pain","throat infection","throatinfection"],
  ["Diarrhea","loose motion","loosemotion","diarea","diarea","bethi","i have diarrhea","iam having diarrhea","i am having diarrhea"],
  ["jaundice","jandice","jandise","jandice","jaundise","i have jaundice","iam having jaundice","i am having jaundice"],
  //50
  ["cancer"],
  ["hiv","aids"],
  ["heartattack","heart attack"],
  ["BP","bp","bloodpressure","blood pressure"],
  ["sugar","i have sugar","iam having sugar","i am having sugar"],
  //55
  ["cholesterol","colostrol","i have cholestrol","iam having cholestrol","i am having cholestrol"],
  ["itches","itches","i have itches","iam having itches","i am having itches","itching"],
  ["pimple","pimples","i have pimples","iam having pimple","i am having pimple"],
  ["kidney stones","kidneystones","kidney stone","stone","i have kidney stone","i have stone problem"],
  ["cramp","cramps","i have cramp"],
  //60
  ["malaria","malaria fever","i have malaria"],
  ["nosebleed","nose bleed","i have nose bleed","iam having nose bleed"],
  ["stomach pain","stomach ache"],
  ["strains","injury","injuries"],
  ["wound","cuts","scramps","knife cuts"],
  //65

];
const botReply = [
  ["Hello! Iam Medibot,I can help you with your medical condition,I am  designed to provide general medicine and instructions....How do you feel"],
  ["Okay"],
  ["Yes I am! "],
  ["I'm sorry about that. But I like you dude."],
  ["Fine... how are you?",
    "Pretty well, how are you?",
    "Fantastic, how are you?"],
  ["Getting better. There?", "Somewhat okay!", "Yeah fine. Better stay home!"],
  ["Nothing much",
    "About to go to sleep",
    "Can you guess?",
    "I don't know actually"],
  ["I am always young."],
  ["I am just a bot", "I am a bot. What are you?"],
  ["I am nameless", "I don't have a name"],
  ["Isabella","Amiliya"],
  //11
  ["I love you too"],
  ["Have you ever felt bad?", "Glad to hear it"],
  ["Why?", "Why? You shouldn't!", "Try watching TV", "Chat with me."],
  ["What about?", "Once upon a time..."],
  ["My Pleasure,Take care of yourself","Take care of yourself,Please consult a Doctor", "Take care yourself"],
  ["You're welcome"],
  ["Briyani", "Burger", "Sushi", "Pizza"],
  ["Dude!"],
  ["Yes?"],
  //20
  ["Please stay home"],
  ["Glad to hear it"],
  ["Say something interesting"],
  ["Sorry for that. Let's chat!"],
  ["Take some rest, Dude!"],
  ["are you ate?"],
  ["aprm sollunga"],
  ["chatting..."],
  ["for what"],
  ["yes you are my teddy "],
  //30
  ["yes you are my teddy"],
  ["No,how can i hate someone like you..."],
  ["how do you feel?cold,fever...."],
  ["Take Rest, Drink plenty of liquids,  Humidify the air,  Use saline nasal rins        Some general medicines are:   Antihistamines and  monticope,Please consult a doctor"],
  ["Most occasional tension-type headaches are easily treated with over-the-counter medications, including:Aspirin Ibuprofen (Advil, Motrin IB, others) Acetaminophen (Tylenol, others)Daily prescription medications, including tricyclic antidepressants, might manage chronic tension-type headaches. Alternative therapies aimed at stress reduction might help. They include:Cognitive behavioral therapy,Biofeedback,Massage therapy,Acupuncture,Please consult a doctor"],
  ["Take paracetamol or ibuprofen in appropriate doses to help bring your temperature down. Drink plenty of fluids, particularly water. Avoid alcohol, tea and coffee as these drinks can cause slight dehydration. Sponge exposed skin with tepid water.Please consult a doctor"],
  //35
  ["Turn off the source of electricity, if possible. If not, use a dry, nonconducting object made of cardboard, plastic or wood to move the source away from you and the injured person. Begin CPR if the person shows no signs of circulation, such as breathing, coughing or movement.Please consult a doctor"],
  ["1.Call 108 and report the incident 2.Lay the person on their back and open their airway. 3.Check for breathing. If they are not breathing, start CPR.4.Perform 30 chest compressions.5.Perform two rescue breaths.6.Repeat until an ambulance or automated external defibrillator (AED) arrives.Please consult a doctor"],
  ["Hold the area under cool (not cold) running water for about 10 minutes. If the burn is on the face, apply a cool, wet cloth until the pain eases. For a mouth burn from hot food or drink, put a piece of ice in the mouth for a few minutes.Please consult a doctor"],
  ["Go and move on.....you have to achieve more...you have a bright future"],
  ["Put the victim on ground very gently and cautiously without vigorous handling to prevent further injury. Turn the victim to one side. Loosen clothing at neck, chest and waist. Tilt the head back, point the face slightly down so the tongue can fall forward allowing blood and vomit to drain out.please consult a doctor"],
  //40
  ["Drinking plenty of fluids: Staying hydrated can help ease achiness caused by dehydration. Taking over-the-counter medications (OTC): Non-steroidal anti-inflammatory drugs (NSAIDs), which can reduce pain and inflammation. Having a warm bath: The heat can help relax muscles and ease tension in the body.please consult a doctor"],
  ["Drink plenty of clear fluids or oral rehydration solution to replace lost fluids — take small sips if you feel sick. Avoid fruit juice, cordial and sugary drinks. Avoid alcohol and caffeine. Manage your diet until you get back to normal — eat bland foods, such as rice, pasta and crackers, and avoid fatty food.Please consult a doctor"],
  ["For some people, wearing glasses that are prescribed for specific activities, such as for computer use or for reading, helps reduce eyestrain. Your eye specialist may suggest that you take regular eye breaks to help your eyes focus at different distances.Please consult a doctor"],
  ["Choose water, juice and warm soups to prevent dehydration.These medicines can include oseltamivir (Tamiflu), baloxavir (Xofluza) and zanamivir (Relenza).Please consult a doctor"],
  ["Put a warm compress over the nose and forehead to help relieve sinus pressure.Use a decongestant or saline nasal spray.Breathe in steam from a bowl of hot water or shower.Please consult a doctor"],
  //45
  ["Home remedies for ear infections can range from doctor-recommended home treatments like over-the-counter pain medication and cold compress to unproven remedies like olive oil and garlic.Please consult a doctor"],
  ["Asthma can usually be managed with rescue inhalers to treat symptoms (salbutamol) and controller inhalers that prevent symptoms (steroids). Severe cases may require longer-acting inhalers that keep the airways open (formoterol, salmeterol, tiotropium), as well as inhalant steroids.Inhaled corticosteroids which include fluticasone, budesonide, mometasone, beclomethasone and ciclesonide.Please consult a doctor"],
  ["Antibiotics don't help treat a viral infection.To ease pain and fever, many people turn to acetaminophen (Tylenol, others) or other mild pain relievers.Please consult a doctor"],
  ["You should drink at least six 8-ounce glasses of fluids each day. Choose electrolyte replacement drinks or soda without caffeine.medicines such as loperamide link (Imodium) and bismuth subsalicylate link (Pepto-Bismol, Kaopectate).Please consult a doctor"],
  ["Some general tips include:Avoid hepatitis infection.Stay within recommended alcohol limits.Maintain a healthy weight.Manage your cholesterol.Please consult a doctor"],
  //50
  ["Most people have a combination of treatments, such as surgery with chemotherapy and radiation therapy,Chemotherapy,Hormone Therapy,Hyperthermia,Immunotherapy,Photodynamic Therapy,Radiation Therapy,Stem Cell Transplant,Surgery,Targeted Therapy.Please consult a doctor"],
  ["HIV is treated with antiretroviral medicines, which work by stopping the virus replicating in the body. This allows the immune system to repair itself and prevent further damage.Some medicines are Cimduo,Combivir,Descovy,Epzicom.Please consult a doctor"],
  ["Treatment ranges from lifestyle changes and cardiac rehabilitation to medication, stents and bypass surgery.some medicines are Aspirin,Clot busters (thrombolytics or fibrinolytics),Other blood-thinning medicines,Nitroglycerin,Morphine,Beta blockers.Please consult a doctor"],
  ["Eating a healthier diet with less salt, exercising regularly and taking medication can help lower blood pressure.some ideas are manage weight,less stress,healthy diet,limit alchohol,don't smoke.please concult a doctor"],
  ["diabetes or gestational diabetes also need insulin therapy. Many types of insulin are available, including short-acting (regular insulin), rapid-acting insulin, long-acting insulin and intermediate options.some medicines are Metformin,Dipeptidyl peptidase IV inhibitors,SGLT2 inhibitors,Sulfonylureas,Thiazolidinediones,Amylinomimetics,Biguanides"],
  //55
  ["Lifestyle changes such as exercising and eating a healthy diet are the first line of defense against high cholesterol.Some medicines are atorvastatin (Lipitor), fluvastatin (Lescol), lovastatin (Altoprev), pitavastatin (Livalo), pravastatin (Pravachol), rosuvastatin (Crestor) and simvastatin (Zocor).Please consult a doctor"],
  ["Use creams, lotions or gels that soothe and cool the skin.Short-term use of nonprescription corticosteroid cream may offer short-term relief of itchy, inflamed skin."],
  ["If you have a pimple, using benzoyl peroxide, salicylic acid, or a pimple patch can help it go away faster. Your dermatologist can give you a cortisone injection to make a deep, painful, inflamed pimple heal quickly. Avoid picking or trying to pop your pimple — this can lead to more inflammation, redness, and scarring."],
  ["The best way of preventing kidney stones is to make sure you drink plenty of water each day to avoid becoming dehydrated.Your doctor may prescribe a thiazide diuretic, which can reduce the amount of calcium released into the urine.Please consut a doctor"],
  ["Stretching and massaging the muscle may help it relax. Applying heat or cold to the area may also help.Quinine, the active ingredient in tonic water, has been suggested as a potential remedy for leg cramps due to its muscle-relaxing properties.Please consult a doctor "],
  //60
  ["artemisinin-based combination therapy (ACT) is a combination of two or more drugs that work against the malaria parasite in different ways. This is usually the preferred treatment for chloroquine-resistant malaria. Examples include artemether-lumefantrine (Coartem) and artesunate-mefloquine.Please a consult a doctor"],
  ["To stop a nosebleed: sit down at a table, lean forward and firmly pinch the soft part of your nose, just above your nostrils, for at least 10 to 15 minutes. lean forward and breathe through your mouth – spit out any blood that collects in your throat or mouth into a bowl; do not swallow any blood.Please cnsult a doctor"],
  ["Drink plenty of clear fluids such as water. Reduce your intake of coffee, tea and alcohol as these can make the pain worse. When you are allowed to eat again, start with clear liquids, then progress to bland foods such as crackers, rice, bananas or toast. Your doctor may advise you to avoid certain foods.Please consult a doctor"],
  ["Rest the strained muscle and apply ice for the first few days after the injury. Anti-inflammatory medicines such as ibuprofen, naproxen, or acetaminophen (Tylenol) also help reduce pain and swelling.Please consult a doctor"],
  ["Wash your hands,Stop the bleeding,Clean the wound,Put on an antibiotic or petroleum jelly,Cover the wound,Change the covering,Get a tetanus shot,Watch for signs of infection.Please consult a doctor"],
];

const alternative = [
  "Same here, dude.",
  "That's cool! Go on...",
  "sorry come again...",
  "Ask something else...",
  "Hey, I'm listening..."
];

const synth = window.speechSynthesis;

function voiceControl(string) {
  let u = new SpeechSynthesisUtterance(string);
  u.text = string;
  u.lang = "en-aus";
  u.volume = 1;
  u.rate = 1;
  u.pitch = 1;

  // Find a female voice
  let femaleVoice = speechSynthesis.getVoices().find(voice => voice.name === 'Google UK English Female');
  if (femaleVoice) {
    u.voice = femaleVoice;
  } else {
    console.log("Female voice not found. Using default voice.");
  }

  speechSynthesis.speak(u);
}


document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("input");
  inputField.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {
      let input = inputField.value.trim();
      input != "" && output(input);
      inputField.value = "";
    }
  });
});

function sendMessage(input) {
  let product;

  let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");

  text = text
    .replace(/[\W_]/g, " ")
    .replace(/ a /g, " ")
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "")
    .trim();

  let comparedText = compare(userMessage, botReply, text);

  product = comparedText
    ? comparedText
    : alternative[Math.floor(Math.random() * alternative.length)];
  addChat(input, product);
}

function output(input) {
  let product;

  let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");

  text = text
    .replace(/[\W_]/g, " ")
    .replace(/ a /g, " ")
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "")
    .trim();

  let comparedText = compare(userMessage, botReply, text);

  product = comparedText
    ? comparedText
    : alternative[Math.floor(Math.random() * alternative.length)];
  addChat(input, product);
}

function compare(triggerArray, replyArray, string) {
  let item;
  for (let x = 0; x < triggerArray.length; x++) {
    for (let y = 0; y < replyArray.length; y++) {
      if (triggerArray[x][y] == string) {
        items = replyArray[x];
        item = items[Math.floor(Math.random() * items.length)];
      }
    }
  }
  //containMessageCheck(string);
  if (item) return item;
  else return containMessageCheck(string);
}

function containMessageCheck(string) {
  let expectedReply = [
    [
      "Good Bye, dude",
      "Bye, See you!",
      "Dude, Bye. Take care of your health in this situation."
    ],
    ["Good Night, dude", "Have a sound sleep", "Sweet dreams"],
    ["Have a pleasant evening!", "Good evening too", "Evening!"],
    ["Good morning, Have a great day!", "Morning, dude!"],
    ["Good Afternoon", "Noon, dude!", "Afternoon, dude!"]
  ];
  let expectedMessage = [
    ["bye", "tc", "take care"],
    ["night", "good night"],
    ["evening", "good evening"],
    ["morning", "good morning"],
    ["noon"]
  ];
  let item;
  for (let x = 0; x < expectedMessage.length; x++) {
    if (expectedMessage[x].includes(string)) {
      items = expectedReply[x];
      item = items[Math.floor(Math.random() * items.length)];
    }
  }
  return item;
}
function addChat(input, product) {
  const mainDiv = document.getElementById("message-section");
  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.classList.add("message");
  userDiv.innerHTML = `<span id="user-response">${input}</span>`;
  mainDiv.appendChild(userDiv);

  let botDiv = document.createElement("div");
  botDiv.id = "bot";
  botDiv.classList.add("message");
  botDiv.innerHTML = `<span id="bot-response">${product}</span>`;
  mainDiv.appendChild(botDiv);
  var scroll = document.getElementById("message-section");
  scroll.scrollTop = scroll.scrollHeight;
  voiceControl(product);
}

// Initialize the Web Speech API
const recognition = new webkitSpeechRecognition();
recognition.continuous = false;
recognition.lang = 'en-US';

recognition.onresult = function (event) {
  const transcript = event.results[1][0].transcript;
  document.getElementById('input').value = transcript;
  sendMessage(transcript); 
  voiceControl("You said " + transcript);
  };

  recognition.onend = function () {
    isRecognitionActive = false;
  };

function startVoiceRecognition() {
  if (!isRecognitionActive) {
    recognition.start();
    isRecognitionActive = true;
  } else {
    console.log("Recognition is already active.");
  }
}

function sendMessage(message) {
  console.log('Message sent:', message);
}
