/* jshint esversion: 6 */

const workouts = [

  
/* SEANCES TABATA */
  
    { title: "WOD TABATA 30/10", material: ["poids-corps"], body: "complet", duration: 6.5, type: "TABATA", level: "Facile", desc: "<strong>30 sec travail / 10 sec repos :</strong> Squats, Burpees, Mountain Climbers, Jumping jacks, Fente avant(lunges).",
      details: { format_label: "TABATA — 6 min 30", intro: "30 sec travail / 10 sec repos — 2 tours complets :", exercises: [
          { text: "30 sec SQUATS / 10 sec repos" }, { text: "30 sec BURPEES / 10 sec repos", image: "images/infosbulles/BURPEES1.png" }, { text: "30 sec MOUNTAIN CLIMBERS / 10 sec repos" }, { text: "30 sec JUMPING JACKS / 10 sec repos" }, { text: "30 sec FENTES AVANT / 10 sec repos" }, { text: "→ Répéter une 2ème fois (même ordre)" }
        ], conseil: "30 secondes de travail / 10 secondes de repos.",
        chargeable: true,
        chargement: {
          type: "tabata",
          nom: "WOD TABATA 30/10",
          travail: 30,
          repos: 10,
          rounds: 2,
          exercices: [
            { text: "SQUATS" },
            { text: "BURPEES" },
            { text: "MOUNTAIN CLIMBERS" },
            { text: "JUMPING JACKS" },
            { text: "FENTES AVANT" }
          ]
        }       
        }},

    { title: "WOD TABATA 40/10", material: ["poids-corps"], body: "complet", duration: 10, type: "TABATA", level: "Facile", desc: "<strong>40 sec travail / 10 sec repos :</strong> Squats sautées, Pompes(push-ups), Sit-ups(abdos), Burpees.",
      details: { format_label: "TABATA — 10 min", intro: "3 tours avec 40 sec de travail et 10 sec de repos :", exercises: [
          { text: "40 sec SQUATS SAUTÉS / 10 sec repos" }, { text: "40 sec POMPES / 10 sec repos", image: "images/infosbulles/POMPES1.png" }, { text: "40 sec SIT-UPS / 10 sec repos" }, { text: "40 sec BURPEES / 10 sec repos", image: "images/infosbulles/BURPEES1.png" }, { text: "→ Répéter 3 tours au total" }
        ], scaled: { intro: "VERSION SCALED :", exercises: [
          { text: "Remplacer les sit-ups par des crunches" }, { text: "Pompes sur les genoux ou inclinées" }, { text: "Burpees sans saut et/ou sans pompe" }
        ]}, conseil: "40 secondes de travail / 10 secondes de repos.",
        chargeable: true,
        chargement: {
          type: "tabata",
          nom: "WOD TABATA 40/10",
          travail: 40,
          repos: 10,
          rounds: 3,
          exercices: [
            { text: "SQUATS SAUTÉS" },
            { text: "POMPES" },
            { text: "SIT-UPS" },
            { text: "BURPEES" }
          ]
        }              
    }},

    { title: "WOD TABATA 30/10 ABDOS GAINAGE", material: ["poids-corps"], body: "abdos", duration: 5, type: "TABATA", level: "Facile", desc: "<strong>30 sec travail / 10 sec repos pour les abdos :</strong> focus gainage.",
      details: { format_label: "TABATA ABDOS — 5 min 10", intro: "30 sec travail / 10 sec repos — 2 tours :", exercises: [
          { text: "30 sec GAINAGE SUR LES COUDES / 10 sec repos" }, { text: "30 sec GAINAGE LATÉRAL GAUCHE / 10 sec repos" }, { text: "30 sec GAINAGE SUR LES MAINS / 10 sec repos" }, { text: "30 sec GAINAGE LATÉRAL DROIT / 10 sec repos" }
        ], conseil: "30 secondes de travail / 10 secondes de repos. Focus gainage, à enchaîner avec le WOD TABATA 30/10 CEINTURE ABDOMINALE DYNAMIQUE.",
        chargeable: true,
        chargement: {
          type: "tabata",
          nom: "WOD TABATA 30/10 ABDOS",
          travail: 30,
          repos: 10,
          rounds: 2,
          exercices: [
            { text: "Gainage sur les coudes" },
            { text: "Gainage latéral gauche" },
            { text: "Gainage sur les mains" },
            { text: "Gainage latéral droit" }
          ]
        }
      }},  
  
    { title: "WOD TABATA 30/10 CEINTURE ABDOMINALE DYNAMIQUE", material: ["poids-corps"], body: "abdos", duration: 5, type: "TABATA", level: "Facile", 
     desc: "<strong>30 sec travail / 10 sec repos pour la ceinture abdominale</strong>",
     details: { format_label: "TABATA ABDOS — 5 min 10", intro: "30 sec travail / 10 sec repos — 2 tours :", 
     exercises: [{ text: "30 sec Sit-ups / 10 sec repos" },
                 { text: "30 sec de revelé de bassin, jambe droite tendue / 10 sec repos" },
                 { text: "30 sec enroulement de bassin / 10 sec repos" },
                 { text: "30 sec de revelé de bassin, jambe gauche tendue / 10 sec repos" }
        ], 
     conseil: "30 secondes de travail / 10 secondes de repos. abdos en dynamique, à enchaîner avec le WOD TABATA 30/10 ABDOS GAINAGE.",
        chargeable: true,
        chargement: {
          type: "tabata",
          nom: "WOD TABATA 30/10 CEINTURE ABDOMINALE DYNAMIQUE",
          travail: 30,
          repos: 10,
          rounds: 2,
          exercices: [
            { text: "Sit-ups" },
            { text: "revelé de bassin, jambe droite tendue" },
            { text: "enroulement de bassins" },
            { text: "revelé de bassin, jambe gauche tendue" }
          ]
        }
      }},
  
    { title: "WOD TABATA 20/10 BAS DU CORPS ET CARDIO", material: ["poids-corps"], body: "complet", duration: 12, type: "TABATA", level: "Facile", 
     desc: "<strong>20 sec travail / 10 sec - 12 minutes</strong>",
     details: { format_label: "TABATA ABDOS — 12 min ", intro: "20 sec travail / 10 sec repos — 4 tours :", 
     exercises: [{ text: "20 sec Air Squats / 10 sec repos" },
                 { text: "20 sec Jumping Jacks / 10 sec repos" },
                 { text: "20 sec Relevés de bassin (bridge) / 10 sec repos" },
                 { text: "20 sec Burpees sans saut, sans pompe / 10 sec repos", image: "images/infosbulles/BURPEES1.png" },
                 { text: "20 sec Fentes arrières alternées/ 10 sec repos" },
                 { text: "20 sec Mountain climbers / 10 sec repos" },
                ], 
     conseil: "20 secondes de travail / 10 secondes de repos : s'échauffer avant l'entraînement",
        chargeable: true,
        chargement: {
          type: "tabata",
          nom: "WOD TABATA 20/10 BAS DU CORPS ET CARDIO",
          travail: 20,
          repos: 10,
          rounds: 4,
          exercices: [
                  { text: "Air Squats" },
                 { text: "Jumping Jacks" },
                 { text: "Relevés de bassin (bridge)" },
                 { text: "Burpees sans saut, sans pompe" },
                 { text: "Fentes arrières alternées" },
                 { text: "Mountain climbers" }
          ]
        }
      }},
  
      { title: "WOD TABATA 40/20 RENFO Course à pied 🏃‍♀️", material: ["poids-corps"], body: "complet", duration: 20, type: "TABATA", level: "Facile", 
     desc: "<strong>40 sec travail / 20 sec - 20 minutes</strong>",
     details: { format_label: "TABATA RENFO Course à pied (run) — 20 min ", intro: "40 sec travail / 20 sec repos — 4 tours :", 
     exercises: [{ text: "40 sec Fentes arrière alternées / 20 sec repos" },
                 { text: "40 sec Squat 'stop and go' / 20 sec repos" },
                 { text: "40 sec Fentes Cosaques / 20 sec repos" },
                 { text: "40 sec Gainage dynamique (planche puis chien tête en bas) / 20 sec repos" },
                 { text: "40 sec Extensions mollets / 20 sec repos" },
                ], 
     conseil: "▫️S'échauffer 5 min avant l'entraînement : quelques squats/jumping jacks et mobilisation articulaire et/ou course légère. <br>▫️Squat 'stop and go': descendre; rester 2 sec en position basse; remontée tonique.  <br>▫️Pour les extensions mollets, ne pas hésiter à poser les pointes de pied sur un support afin de bien étirer les mollets en position basse. <br>▫️Possibilité de faire du gainage commando (passage appui main/appui coude) à la place du gainage dynamique.",
        chargeable: true,
        chargement: {
          type: "tabata",
          nom: "🏃‍♀️ TABATA 40/20 BAS DU CORPS ET CARDIO 🏃‍♀️",
          travail: 40,
          repos: 10,
          rounds: 4,
          exercices: [
                 { text: "Fentes arrière alternées" },
                 { text: "Squat 'stop and go' (stop 2sec en bas)" },
                 { text: "Fentes Cosaques" },
                 { text: "Gainage dynamique (planche 🔁 chien tête en bas)" },
                 { text: "Extensions mollets" }
          ]
        }
      }},
  
        {
    title: "🚀WOD TABATA 20/10 HAUT DU CORPS J1 - J4",
    material: ["poids-corps"],
    body: "haut",
    duration: 10,
    type: "TABATA",
    level: "Facile",
    desc: "<strong>20 sec travail / 10 sec - 20 minutes</strong> <br>'Programme débutant 10min/jour'",
    details: {
      format_label: "TABATA HAUT DU CORPS — 20 min",
      intro: "20 sec travail / 10 sec repos — 2 tours :",
      exercises: [
        { text: "20 sec Superman / 10 sec repos" },
        { text: "20 sec Pompes / 10 sec repos" },
        { text: "20 sec \"Y-W\" / 10 sec repos" },
        { text: "20 sec Dips / 10 sec repos" },
        { text: "20 sec Shadow boxing / 10 sec repos" },
        { text: "20 sec Gainage commando/ 10 sec repos" },
        { text: "20 sec Dips / 10 sec repos" },
        { text: "20 sec \"Y-W\" / 10 sec repos" },
        { text: "20 sec Pompes / 10 sec repos" },
        { text: "20 sec Superman / 10 sec repos" }
      ],
      conseil: "Séances lundi - jeudi du programme débutant '10 minutes par jour'",
      chargeable: true,
      chargement: {
        type: "tabata",
        nom: "🚀TABATA 20/10 HAUT DU CORPS🚀",
        travail: 20,
        repos: 10,
        rounds: 2,
        exercices: [
          { text: "Superman" },
          { text: "Pompes" },
          { text: "Y-W" },
          { text: "Dips" },
          { text: "Shadow Boxing 🥊" },
          { text: "Gainage commando" },
          { text: "Dips" },
          { text: "Y-W" },
          { text: "Pompes" },
          { text: "Superman" }
        ]
      }
    }
  },
  
    {
    title: "🚀WOD TABATA 20/10 BAS DU CORPS J2 - J5",
    material: ["poids-corps"],
    body: "bas",
    duration: 10,
    type: "TABATA",
    level: "Facile",
    desc: "<strong>20 sec travail / 10 sec - 20 minutes</strong> <br>'Programme débutant 10min/jour'",
    details: {
      format_label: "TABATA BAS DU CORPS — 10 min",
      intro: "20 sec travail / 10 sec repos — 2 tours :",
      exercises: [
        { text: "20 sec Squats / 10 sec repos" },
        { text: "20 sec Jumping jacks / 10 sec repos" },
        { text: "20 sec Fentes arrière alternées / 10 sec repos" },
        { text: "20 sec Chaise contre le mur / 10 sec repos" },
        { text: "20 sec Fentes avant alternées/ 10 sec repos" },
        { text: "20 sec Fentes avant alternées/ 10 sec repos" },
        { text: "20 sec Chaise contre le mur / 10 sec repos" },
        { text: "20 sec Fentes arrière alternées / 10 sec repos" },
        { text: "20 sec Jumping jacks / 10 sec repos" },
        { text: "20 sec Squats / 10 sec repos" },
      ],
      conseil: "Séances mardi - vendredi du programme débutant '10 minutes par jour'",
      chargeable: true,
      chargement: {
        type: "tabata",
        nom: "🚀TABATA 20/10 BAS DU CORPS🚀",
        travail: 20,
        repos: 10,
        rounds: 2,
        exercices: [
          { text: "Squats" },
          { text: "Jumping Jacks" },
          { text: "Fentes arrière alternées" },
          { text: "Chaise" },
          { text: "Fentes avant alternées" },
          { text: "Fentes avant alternées" },
          { text: "Chaise" },
          { text: "Fentes arrière alternées" },
          { text: "Jumping Jacks" },
          { text: "Squats" },
        ]
      }
    }
  },
  
    {
    title: "🚀WOD TABATA 20/10 Abdos J3",
    material: ["poids-corps"],
    body: "bas",
    duration: 10,
    type: "TABATA",
    level: "Facile",
    desc: "<strong>20 sec travail / 10 sec - 20 minutes</strong> <br>'Programme débutant 10min/jour'",
    details: {
      format_label: "TABATA BAS DU CORPS — 10 min",
      intro: "20 sec travail / 10 sec repos — 2 tours :",
      exercises: [
        { text: "20 sec Crunchs (mains posées sur les épaules) / 10 sec repos" },
        { text: "20 sec Gainage sur les coudes / 10 sec repos" },
        { text: "20 sec Levés de bassin / 10 sec repos" },
        { text: "20 sec Gainage latéral droit / 10 sec repos" },
        { text: "20 sec Gainage latéral gauche / 10 sec repos" },
        { text: "20 sec Hiptrusts au sol / 10 sec repos", image: "images/infosbulles/HIPTRUST.png" },
        { text: "20 sec Mountain climbers / 10 sec repos" },
        { text: "20 sec Russian twists / 10 sec repos" },
        { text: "20 sec Gainage latéral droit / 10 sec repos" },
        { text: "20 sec Gainage latéral gauche / 10 sec repos" },
      ],
      conseil: "Séance mercredi du programme débutant '10 minutes par jour'",
      chargeable: true,
      chargement: {
        type: "tabata",
        nom: "🚀TABATA 20/10 ABDOS🚀",
        travail: 20,
        repos: 10,
        rounds: 2,
        exercices: [
          { text: "Crunchs (mains posées sur les épaules)" },
          { text: "Gainage sur les coudes" },
          { text: "Levés de bassin" },
          { text: "Gainage latéral droit" },
          { text: "Gainage latéral gauche" },
          { text: "Hiptrusts au sol" },
          { text: "Mountain climbers" },
          { text: "Russian twists" },
          { text: "Gainage latéral droit" },
          { text: "Gainage latéral gauche" },
        ]
      }
    }
  },


  
    
  
/* SEANCES AMRAP */
  
  { title: "WOD AMRAP 6 EXOS", material: ["poids-corps"], body: "complet", duration: 28, type: "AMRAP", level: "Facile", 
   desc: "<strong>4 tours (1' repos) :</strong> 1 min Burpees, 1 min Pompes(push-ups), 1 min Squat jump, 1 min Marche de l'ours, 1 min Mountain climber, 1 min Sit-up(abdos).",
      details: { format_label: "AMRAP 28 MINUTES", intro: "Réaliser 4 rounds (1 min repos entre chaque) :", 
                exercises: [
                  { text: "1 minute Burpees", image: "images/infosbulles/BURPEES1.png" }, { text: "1 minute Pompes", image: "images/infosbulles/POMPES1.png" }, { text: "1 minute Squat jump" }, 
                  { text: "1 minute Marche de l'ours" }, { text: "1 minute Mountain climber" }, { text: "1 minute Sit-up (abdos)" }, { text: "1 minute de repos" }
                ], 
                scaled: { intro: "VERSION SCALED :", 
                exercises: [
                { text: "Pompes inclinées ou sur genoux" }, { text: "Burpees sans saut et/ou sans pompe" }, { text: "Remplacer les sit-ups par des crunches" }
                ]},
                conseil: "-",
               chargeable: true,
                  chargement: {
                  type: "surmesure",
                  nom: "WOD AMRAP 6 EXOS",
                  repeat: 4,
                  phases: [
                      { type: "travail", sec: 60, text: "Burpees" },
                      { type: "travail", sec: 60, text: "Pompes" },
                      { type: "travail", sec: 60, text: "Squat jump" },
                      { type: "travail", sec: 60, text: "Marche de l'ours" },
                      { type: "travail", sec: 60, text: "Mountain climber" },
                      { type: "travail", sec: 60, text: "Sit-up (abdos)" },
                      { type: "repos",   sec: 60, text: "Repos" }
                  ]
                  }
               }},

    { title: "WOD AMRAP 4 EXOS", material: ["traction"], body: "complet", duration: 30, type: "AMRAP", level: "Moyen", desc: "<strong>Pendant 30 min :</strong> 5 Burpees, 7 Tractions(pull-ups), 10 Pompes(push-ups), 15 Squats.",
      details: { format_label: "AMRAP 30 MINUTES", intro: "Enchaîner les exercices suivants pendant 30 minutes :", exercises: [
          { text: "5 Burpees", image: "images/infosbulles/BURPEES1.png" }, { text: "7 Tractions (pull-ups)" }, { text: "10 Pompes", image: "images/infosbulles/POMPES1.png" }, { text: "15 Squats" }
        ], scaled: { intro: "VERSION SCALED :", exercises: [
          { text: "Pompes inclinées ou sur les genoux" }, { text: "Burpees sans saut et/ou sans pompe" }, { text: "Tractions TRX ou avec élastique" }
        ]}, conseil: "-",
        chargeable: true,
        chargement: {
          type: "amrap",
          nom: "WOD AMRAP 4 EXOS",
          duree_min: 30,
          exercices: [
            { text: "5 Burpees" },
            { text: "7 Tractions (pull-ups)" },
            { text: "10 Pompes" },
            { text: "15 Squats" },
          ]
        }
    }},

    { title: "WOD AMRAP 3 EXOS", material: ["traction"], body: "complet", duration: 20, type: "AMRAP", level: "Facile", desc: "<strong>Pendant 20 min :</strong> 5 Tractions(pull-ups), 10 Pompes(push-ups), 15 Squats.",
      details: { format_label: "AMRAP 20 MINUTES", intro: "Enchaîner les exercices suivants pendant 20 minutes :", exercises: [
          { text: "5 Tractions (pull-ups)" }, { text: "10 Pompes", image: "images/infosbulles/POMPES1.png" }, { text: "15 Squats" }
        ], scaled: { intro: "VERSION SCALED :", exercises: [
          { text: "Tractions TRX ou avec élastique" }, { text: "Pompes inclinées ou sur les genoux" }
        ]}, conseil: "-",
          chargeable: true,
        chargement: {
          type: "amrap",
          nom: "WOD AMRAP 3 EXOS",
          duree_min: 20,
          exercices: [
            { text: "5 Tractions (pull-ups)" },
            { text: "10 Pompes" },
            { text: "15 Squats" },
          ]
        }            
        }},
  
    { title: "WOD AMRAP spécial RENFO NATATION 🏊", material: ["poids-corps"], body: "complet", duration: 20, type: "AMRAP", level: "Facile", desc: "<strong>Pendant 20 min :</strong> Pompes(Push-ups), Superman(Lombaires), Sit-ups(abdos), Fentes sautées alternées (alternating jumping lunge), Burpees sans saut.",
      details: { format_label: "AMRAP 20 MINUTES", intro: "Enchaîner les exercices suivants pendant 20 minutes :", exercises: [
          { text: "12 Pompes(Push-ups)", image: "images/infosbulles/POMPES1.png" }, { text: "15 Superman(Lombaires)" }, { text: "15 Sit-Ups(abdos)" }, { text: "20 Fentes sautées alternées - 10/jambe (alternating jumping lunge)" }, { text: "10 Burpees sans saut", image: "images/infosbulles/BURPEES1.png" }
        ], scaled: { intro: "VERSION SCALED :", exercises: [
          { text: "12 Pompes sur les genoux(Push-ups)" }, { text: "10 Superman(Lombaires)" }, { text: "10 crunchs(abdos)" }, { text: "20 Fentes  - 10/jambe (lunge)" }, { text: "10 Burpees sans saut" }
        ]}, conseil: "en échauffement ➔ 3 rounds d'activation : 10 Pompes + 10 Air Squats + 20 sec Hollow Hold (Gainage cuillère).",
          chargeable: true,
        chargement: {
          type: "amrap",
          nom: "🏊 AMRAP spécial RENFO NATATION 🏊",
          duree_min: 20,
          exercices: [
            { text: "12 Pompes(Push-ups)" }, { text: "15 Superman(Lombaires)" }, { text: "15 Sit-Ups(abdos)" }, { text: "20 Fentes sautées alternées - 10/jambe (alternating jumping lunge)" }, { text: "10 Burpees sans saut" }
          ]
        }            
        }},
  
  
  { title: "Le WOD Lunges & Co", material: ["poids-corps"], body: "bas", duration: 20, type: "AMRAP", level: "Facile", desc: "<strong>AMRAP 20 min :</strong> 20 Jumping Lunges(fentes), 20 Sit-ups(abdos), 20 Air Squats.",
      details: { format_label: "AMRAP 20 MINUTES", intro: "Réaliser les exercices :", exercises: [
          { text: "20 Fentes sautées (Jumping lunges)" }, { text: "20 Sit-ups (abdos)" }, { text: "20 Squats poids de corps (air squats)" }
        ], conseil: "But d'un AMRAP : faire le plus de tours dans le temps imparti. Essayer de garder un rythme régulier du début à la fin.",
      chargeable: true,
        chargement: {
          type: "amrap",
          nom: "Le Lunges & Co",
          duree_min: 20,
          exercices: [
            { text: "20 Fentes sautées (Jumping lunges)" },
            { text: "20 Sit-ups (abdos)" },
            { text: "20 Squats poids de corps (air squats)" }
          ]
        }
    }},

    { title: "Le WOD Cindy", material: ["traction"], body: "complet", duration: 20, type: "AMRAP", level: "Moyen", desc: "<strong>AMRAP 20 min :</strong> 5 Pull-ups(tractions), 10 Push-ups(pompes), 15 Air Squats.",
      details: { format_label: "AMRAP 20 MINUTES", intro: "Réaliser les exercices :", exercises: [
          { text: "5 Tractions (pull-ups)" }, { text: "10 Pompes (push-ups)", image: "images/infosbulles/POMPES1.png" }, { text: "15 Squats poids de corps (air squats)" }
        ], scaled: { intro: "VERSION SCALED :", exercises: [
          { text: "5 Tractions australiennes ou tractions TRX" }, { text: "10 Pompes sur les genoux ou pompes inclinées" }, { text: "15 Squats poids de corps (air squats)" }
        ]}, conseil: "But d'un AMRAP : faire le plus de tours dans le temps imparti. Essayer de garder un rythme régulier du début à la fin.",
        chargeable: true,
        chargement: {
          type: "amrap",
          nom: "Le WOD Cindy",
          duree_min: 20,
          exercices: [
            { text: "5 Tractions (pull-ups)" },
            { text: "10 Pompes (push-ups)" },
            { text: "15 Squats poids de corps (air squats)" }
          ]
        }
      }},

    { title: "Le WOD Mary", material: ["poids-corps"], body: "complet", duration: 20, type: "AMRAP", level: "Intense", desc: "5 Handstand Push-ups(pompes inversées), 10 Pistols(squat une jambe), 15 Pull-ups(tractions).",
      details: { format_label: "AMRAP 20 MINUTES", exercises: [
          { text: "5 Handstand Push-ups (pompes en poirier contre un mur)" }, { text: "10 Pistols (squats sur une seule jambe)" }, { text: "15 Tractions (pull-ups)" }
        ], scaled: { intro: "VERSION SCALED :", exercises: [
          { text: "HSPU → pompes avec pieds surélevés" }, { text: "Pistols → fentes arrières alternées (ou pistols en tenant un poteau)" }
        ]}, conseil: "AMRAP = autant de répétitions que possible en enchaînant les séries pendant 20 minutes.",
        chargeable: true,
        chargement: {
          type: "amrap",
          nom: "Le WOD Mary",
          duree_min: 20,
          exercices: [
            { text: "5 Handstand Push-ups (pompes en poirier contre un mur)" },
            { text: "10 Pistols (squats sur une seule jambe)" },
            { text: "15 Tractions (pull-ups)" }
          ]
        }       
      }},

    { title: "Le WOD Nicole", material: ["traction", "tapis-incurve"], body: "complet", duration: 20, type: "AMRAP", level: "Intense", desc: "Run 400m, Max Pull-ups(tractions).",
      details: { format_label: "AMRAP 20 MINUTES", exercises: [
          { text: "400 mètres de course à pied" }, { text: "Maximum de tractions (pull-ups)" }
        ], conseil: "Le score est le nombre total de tractions effectuées.",
          chargeable: true,
        chargement: {
          type: "amrap",
          nom: "Le WOD Nicole",
          duree_min: 20,
          exercices: [
            { text: "400 mètres de course à pied" },
            { text: "Maximum de tractions (pull-ups)" }
          ]
        }            
      }},

    { title: "Le WOD Jump & Push", material: ["box-jump"], body: "complet", duration: 20, type: "AMRAP", level: "Moyen", desc: "10 Box Jumps, 15 Push-ups(pompes), 20 Sit-ups(abdos).",
      details: { format_label: "AMRAP 20 MINUTES", exercises: [
          { text: "10 Box jumps (sauts sur boîte/banc)" }, { text: "15 Pompes (push-ups)", image: "images/infosbulles/POMPES1.png" }, { text: "20 Sit-ups (abdos)" }
        ], conseil: "On peut remplacer les box jumps par des squats jumps (sans matériel).",
        chargeable: true,
        chargement: {
          type: "amrap",
          nom: "Le WOD Jump & Push",
          duree_min: 20,
          exercices: [
            { text: "10 Box jumps (sauts sur boîte/banc)" },
            { text: "15 Pompes (push-ups)" },
            { text: "20 Sit-ups (abdos)" }
          ]
        }                   
        }},

    { title: "Le WOD Plank & Push", material: ["poids-corps"], body: "complet", duration: 15, type: "AMRAP", level: "Facile", desc: "10 Push-ups(pompes), 20 Sit-ups(abdos), 30 sec Plank(gainage planche-abdos).",
      details: { format_label: "AMRAP 15 MINUTES", exercises: [
          { text: "10 Pompes (push-ups)", image: "images/infosbulles/POMPES1.png" }, { text: "20 Sit-ups (abdos)" }, { text: "30 sec de gainage en planche" }
        ], conseil: "Sur la planche, aspirer le nombril et serrer les fessiers.",
        chargeable: true,
        chargement: {
          type: "amrap",
          nom: "Le WOD Plank & Push",
          duree_min: 15,
          exercices: [
            { text: "10 Pompes (push-ups)" }, { text: "20 Sit-ups (abdos)" }, { text: "30 sec de gainage en planche" }
          ]
        }               
        }},

    { title: "Le WOD Cindy XXX", material: ["traction"], body: "complet", duration: 20, type: "AMRAP", level: "Intense", desc: "<strong>AMRAP 20 min :</strong> WOD CINDY version hard ; Pull-ups(tractions), Push-ups(pompes), Air Squats.",
      details: { format_label: "AMRAP 20 MINUTES", intro: "Enchaîner les séries progressives :", exercises: [
          { text: "10 Pull-Ups(tractions) + 20 Push-Ups(pompes) + 30 Air Squats" }, { text: "15 Pull-Ups + 30 Push-Ups + 45 Air Squats" }, { text: "20 Pull-Ups + 40 Push-Ups + 60 Air Squats" }, { text: "25 Pull-Ups + 50 Push-Ups + 75 Air Squats" }, { text: "30 Pull-Ups + 60 Push-Ups + 90 Air Squats" }
        ], scaled: { intro: "VERSION SCALED :", exercises: [
          { text: "Remplacer les tractions par des tractions australiennes ou TRX" }, { text: "Pompes sur les genoux ou inclinées" }
        ]}, conseil: "Version musclée du WOD CINDY.",
        chargeable: true,
        chargement: {
          type: "amrap",
          nom: "Le WOD Cindy XXX",
          duree_min: 20,
          exercices: [
            { text: "10 Pull-Ups(tractions)" }, { text: "20 Push-Ups(pompes)" }, { text: "30 Air Squats" },
            { text: "15 Pull-Ups(tractions)" }, { text: "30 Push-Ups(pompes)" }, { text: "45 Air Squats" },
            { text: "20 Pull-Ups(tractions)" }, { text: "40 Push-Ups(pompes)" }, { text: "60 Air Squats" },
            { text: "25 Pull-Ups(tractions)" }, { text: "50 Push-Ups(pompes)" }, { text: "75 Air Squats" },
            { text: "30 Pull-Ups(tractions)" }, { text: "60 Push-Ups(pompes)" }, { text: "90 Air Squats" }
          ]
        }                
        }},

/* SEANCES EMOM */  
  
      { title: "Le WOD Death by Burpees", material: ["poids-corps"], body: "complet", duration: 15, type: "EMOM", level: "Intense", desc: "<strong>EMOM :</strong> Minute 1 : 1 Burpee, Minute 2 : 2 Burpees...",
      details: { format_label: "EMOM 15 MINUTES", exercises: [
          { text: "1ère minute : 1 burpee (reste de la minute = repos)", image: "images/infosbulles/BURPEES1.png" },
          { text: "2ème minute : 2 burpees" }, { text: "3ème minute : 3 burpees" },
          { text: "4ème minute : 4 burpees … et ainsi de suite …" },
          { text: "15ème minute : 15 burpees" }
        ], scaled: { intro: "VERSION SCALED — 2 suggestions :", exercises: [
          { text: "Faire les burpees sans saut" }, { text: "Faire les burpees sans la pompe" }
        ]}, conseil: "EMOM : faire le nombre de répétitions prévu, le reste du temps dans la minute sert à se reposer. Cela se corse à partir de la 10ème minute.",
        chargeable: true,
        chargement: {
          type: "emom",
          nom: "Le WOD Death by Burpees",
          duree_min: 15,
          exercices: [
            { text: "Minute 1➔1 burpee \nMinute 2➔2 burpees \nMinute 3➔3 burpees \n.... \n.... \nMinute 15➔15 burpees" }
            ]
        }       
        }},

    { title: "Le WOD Chelsea", material: ["traction"], body: "complet", duration: 30, type: "EMOM", level: "Moyen", desc: "<strong>EMOM 30 min :</strong> 5 Pull-ups(tractions), 10 Push-ups(pompes), 15 Squats.",
      details: { format_label: "EMOM 30 MINUTES", exercises: [
          { text: "5 Tractions (pull-ups)" }, { text: "10 Pompes (push-ups)", image: "images/infosbulles/POMPES1.png" }, { text: "15 Squats au poids de corps (air squats)" }
        ], scaled: { intro: "VERSION SCALED :", exercises: [
          { text: "5 Tractions australiennes ou tractions TRX" }, { text: "10 Pompes inclinées ou sur les genoux" }, { text: "15 Squats au poids de corps (air squats)" }
        ]}, conseil: "Effectuer tous les mouvements dans la minute. Le reste du temps sert de repos.",
        chargeable: true,
        chargement: {
          type: "emom",
          nom: "Le WOD Chelsea",
          duree_min: 30,
          exercices: [
            { text: "5 Tractions (pull-ups)" },
            { text: "10 Pompes (push-ups)" },
            { text: "15 Squats au poids de corps (air squats)" }
          ]
        }
      }},


  
    { title: "Le WOD Orbison", material: ["poids-corps"], body: "complet", duration: 20, type: "EMOM", level: "Moyen", desc: "<strong>EMOM 20 min :</strong> 4 Burpees, 6 Air Squats, 8 Sit-Ups(abdos).",
      details: { format_label: "EMOM 20 MINUTES", exercises: [
          { text: "4 Burpees", image: "images/infosbulles/BURPEES1.png" }, { text: "6 Air squats" }, { text: "8 Sit-ups (abdos)" }
        ], scaled: { intro: "VERSION SCALED :", exercises: [
          { text: "2 Burpees" }, { text: "3 Air squats" }, { text: "4 Sit-ups (abdos)" }
        ]}, conseil: "Sur 1 minute, effectuer les 4 burpees, 6 air squats, 8 sit-ups. Le reste de la minute sert de repos. À enchaîner 20 fois.",
        chargeable: true,
        chargement: {
          type: "emom",
          nom: "Le WOD Orbison",
          duree_min: 20,
          exercices: [
            { text: "4 Burpees" }, { text: "6 Air squats" }, { text: "8 Sit-ups (abdos)" }
          ]
        }        
        }},
  
    { title: "WOD EMOM spécial RENFO NATATION 🏊", material: ["machineguidee", "kettle", "barre"], body: "complet", duration: 20, type: "EMOM", level: "Facile", desc: "<strong>Chaque minute :</strong> Tirage poulie haute(dos), Kettlebell swing, Développé militaire barre(épaules), Fente avec kettlebells.",
      details: { format_label: "EMOM 10 MINUTES", exercises: [
          { text: "minute 1 : 10 Tirages poulie haute" }, { text: " minute 2 : 12 Kettlebell swings lourd" }, { text: " minute 3 : 10 Dévelloppés militaire barre" }, { text: " minute 4 : 20 Fentes kettlebell alternée (10/jambe) "}, { text: " minute 5 : repos " }
        ], conseil: "on peut remplacer le tirage poulie haute par des tractions",
        chargeable: true,
                  chargement: {
                  type: "surmesure",
                  nom: "🏊 EMOM RENFO NATATION 🏊",
                  repeat: 0,
                  phases: [
                    { type: "travail", sec: 60, text: "10 tirages poulie haute" },
                    { type: "travail", sec: 60, text: "12 Kettlebell swings lourd" },
                    { type: "travail", sec: 60, text: "10 Dévelloppés militaire barre" },
                    { type: "travail", sec: 60, text: "20 Fentes kettlebell alternée" },
                    { type: "repos", sec: 60, text: " 1 minute de repos " },
                    { type: "travail", sec: 60, text: "10 tirages poulie haute" },
                    { type: "travail", sec: 60, text: "12 Kettlebell swings lourd" },
                    { type: "travail", sec: 60, text: "10 Dévelloppés militaire barre" },
                    { type: "travail", sec: 60, text: "20 Fentes kettlebell alternée" },
                    { type: "repos", sec: 60, text: " 1 minute de repos " },
                    { type: "travail", sec: 60, text: "10 tirages poulie haute" },
                    { type: "travail", sec: 60, text: "12 Kettlebell swings lourd" },
                    { type: "travail", sec: 60, text: "10 Dévelloppés militaire barre" },
                    { type: "travail", sec: 60, text: "20 Fentes kettlebell alternée" },
                    { type: "repos", sec: 60, text: " 1 minute de repos " },
                    { type: "travail", sec: 60, text: "10 tirages poulie haute" },
                    { type: "travail", sec: 60, text: "12 Kettlebell swings lourd" },
                    { type: "travail", sec: 60, text: "10 Dévelloppés militaire barre" },
                    { type: "travail", sec: 60, text: "20 Fentes kettlebell alternée" },
                    { type: "repos", sec: 60, text: " 1 minute de repos " },
                  ]
        }        
        }},

    { title: "WOD 3 EXOS 10 MIN", material: ["poids-corps"], body: "complet", duration: 10, type: "EMOM", level: "Facile", desc: "<strong>Chaque minute :</strong> 5 Burpees, 10 Squats jump, 5 Pompes(push-ups).",
      details: { format_label: "EMOM 10 MINUTES", exercises: [
          { text: "5 Burpees", image: "images/infosbulles/BURPEES1.png" }, { text: "10 Squats jump" }, { text: "5 Pompes", image: "images/infosbulles/POMPES1.png" }
        ], scaled: { intro: "VERSION SCALED :", exercises: [
          { text: "5 Burpees sans saut et/ou sans pompes" }, { text: "10 Squats" }, { text: "5 Pompes inclinées ou sur les genoux" }
        ]}, conseil: "EMOM : pendant la minute exécuter les burpees, squats jump et pompes. Le reste de la minute sert de repos.",
        chargeable: true,
        chargement: {
          type: "emom",
          nom: "WOD 3 EXOS 10 MIN",
          duree_min: 10,
          exercices: [
            { text: "5 Burpees" }, { text: "10 Squats jump" }, { text: "5 Pompes" }
          ]
        }        
        }},

    { title: "WOD Burpees Pyramide", material: ["poids-corps"], body: "complet", duration: 16, type: "EMOM", level: "Intense", desc: "<strong>Pyramide Burpees :</strong> Commencer à 6 burpees la 1ère min, puis gravir et descendre la pyramide pendant 16 minutes",
      details: { format_label: "EMOM 16 MINUTES — PYRAMIDE BURPEES", intro: "Monter puis descendre la pyramide :",
                // ── Image locale (fichier dans le dossier images/) ──
                image: "images/PyrBurpees.png",
                exercises: [
          { text: "Min 1 : 6 burpees → Min 2 : 7 → Min 3 : 8 → Min 4 : 9 → Min 5 : 10 → Min 6 : 11 → Min 7 : 12 → Min 8 : 13", image: "images/infosbulles/BURPEES1.png" }, { text: "Min 9 : 13 → Min 10 : 12 → Min 11 : 11 → Min 12 : 10 → Min 13 : 9 → Min 14 : 8 → Min 15 : 7 → Min 16 : 6" }, { text: "Total : 152 burpees" }
        ], conseil: "EMOM : exécuter les burpees pendant la minute, le reste sert de repos. Selon le niveau, partir de plus bas (ex : 1ère min = 2 burpees).",
        chargeable: true,
                  chargement: {
                  type: "surmesure",
                  nom: "WOD Burpees Pyramide",
                  repeat: 0,
                  phases: [
                    { type: "travail", sec: 60, text: "6 Burpees" },
                    { type: "travail", sec: 60, text: "7 Burpees" },
                    { type: "travail", sec: 60, text: "8 Burpees" },
                    { type: "travail", sec: 60, text: "9 Burpees" },
                    { type: "travail", sec: 60, text: "10 Burpees" },
                    { type: "travail", sec: 60, text: "11 Burpees" },
                    { type: "travail", sec: 60, text: "12 Burpees" },
                    { type: "travail", sec: 60, text: "13 Burpees" },
                    { type: "travail", sec: 60, text: "13 Burpees" },
                    { type: "travail", sec: 60, text: "12 Burpees" },
                    { type: "travail", sec: 60, text: "11 Burpees" },
                    { type: "travail", sec: 60, text: "10 Burpees" },
                    { type: "travail", sec: 60, text: "9 Burpees" },
                    { type: "travail", sec: 60, text: "8 Burpees" },
                    { type: "travail", sec: 60, text: "7 Burpees" },
                    { type: "travail", sec: 60, text: "6 Burpees" },
                  ]
                  }       
        }},

/* SEANCES FOR TIME */    
  
    { title: "Le WOD du Voyageur", material: ["poids-corps"], body: "complet", duration: 0, type: "FOR TIME", level: "Moyen", desc: "100 Air Squats, 50 Push-ups(pompes), 100 Sit-ups(abdos), 50 Push-ups, 100 Air Squats.",
      details: { format_label: "FOR TIME", exercises: [
          { text: "100 Air squats" }, { text: "50 Pompes (push-ups)", image: "images/infosbulles/POMPES1.png" }, { text: "100 Sit-ups (abdos)" }, { text: "50 Pompes (push-ups)", image: "images/infosbulles/POMPES1.png" }, { text: "100 Air squats" }
        ], conseil: "Durée estimée 20 minutes. Entraînement parfait en déplacement.",
        chargeable: true,
        chargement: {
          type: "fortime",
          nom: "Le WOD du Voyageur",
          exercices: [
            { text: "100 Air squats" },
            { text: "50 Pompes (push-ups)" },
            
            { text: "100 Sit-ups (abdos)" },
            
            { text: "50 Pompes (push-ups)" },
            { text: "100 Air squats" }
          ]
        }
      }},
    
    { title: "Le WOD du Voyageur#2", material: ["elastique"], body: "complet", duration: 0, type: "FOR TIME", level: "Moyen", desc: "100 Air Squats, 50 Push-ups(pompes), 50 Rowings élastique (tirages dos à l'élastique),  100 Sit-ups(abdos), 50 Rowings élastique (tirages dos à l'élastique), 50 Push-ups, 100 Air Squats.",
      details: { format_label: "FOR TIME", exercises: [
          { text: "100 Air squats" }, { text: "50 Pompes (push-ups)", image: "images/infosbulles/POMPES1.png" },{ text: "50 Rowings élastique (tirages dos à l'élastique)" }, { text: "100 Sit-ups (abdos)" },{ text: "50 Rowings élastique (tirages dos à l'élastique)" }, { text: "50 Pompes (push-ups)", image: "images/infosbulles/POMPES1.png" }, { text: "100 Air squats" }
        ], conseil: "Durée estimée 20 minutes. Entraînement parfait en déplacement.",
        chargeable: true,
        chargement: {
          type: "fortime",
          nom: "Le WOD du Voyageur#2",
          exercices: [
            { text: "100 Air squats" },
            { text: "50 Pompes (push-ups)" },
            { text: "50 Rowings élastique (tirages dos à l'élastique)" },
            { text: "100 Sit-ups (abdos)" },
            { text: "50 Rowings élastique (tirages dos à l'élastique)" },
            { text: "50 Pompes (push-ups)" },
            { text: "100 Air squats" }
          ]
        }
      }},

    { title: "Le WOD 10 to 1", material: ["poids-corps"], body: "complet", duration: 0, type: "FOR TIME", level: "Moyen", desc: "10-9-8-7-6-5-4-3-2-1 répétitions de : Burpees et Sit-ups(abdos).",
      details: { format_label: "FOR TIME", intro: "Réaliser 10 puis 9 / 8 / 7 / 6 / 5 / 4 / 3 / 2 / 1 reps des exercices suivants :", exercises: [
          { text: "Burpees", image: "images/infosbulles/BURPEES1.png" }, { text: "Sit-ups (abdos)" }
        ], conseil: "Format dégressif — durée estimée 15 minutes.",
        chargeable: true,
        chargement: {
          type: "fortime",
          nom: "Le WOD 10 to 1",
          exercices: [
            { text: "10 Burpees  /  10 Sit-ups (abdos) \n9 Burpees  /  9 Sit-ups (abdos) \n8 Burpees  /  8 Sit-ups (abdos) \n7 Burpees  /  7 Sit-ups (abdos) \n6 Burpees  /  6 Sit-ups (abdos) \n5 Burpees  /  5 Sit-ups (abdos) \n4 Burpees  /  4 Sit-ups (abdos) \n3 Burpees  /  3 Sit-ups (abdos) \n2 Burpees  /  2 Sit-ups (abdos) \n1 Burpees  /  1 Sit-ups (abdos)" },
          ]
        }
      }},

    { title: "Le WOD Annie", material: ["corde"], body: "complet", duration: 0, type: "FOR TIME", level: "Intense", desc: "50-40-30-20-10 : Double-Unders et Sit-ups(abdos).",
      details: { format_label: "FOR TIME", intro: "Réaliser 50 puis 40 / 30 / 20 / 10 reps :", exercises: [
          { text: "Double unders (corde à sauter)" }, { text: "Sit-ups (abdos)" }
        ], scaled: { intro: "VERSION SCALED — même schéma 50 / 40 / 30 / 20 / 10 :", exercises: [
          { text: "Single unders (corde à sauter)" }, { text: "Sit-ups (abdos)" }
        ]}, conseil: "Faire 50 DU - 50 sit-ups, puis 40 DU - 40 sit-ups, etc. Si difficile avec les double unders, faire des single unders. Le but est d'aller vite — faire les reps unbroken (sans pause).",
        chargeable: true,
        chargement: {
          type: "fortime",
          nom: "Le WOD Annie",
          exercices: [
            { text: "50 Double unders (corde à sauter, 2 tours pour 1 saut)  /  50 Sit-ups (abdos) \n40 Double unders  /  40 Sit-ups (abdos) \n30 Double unders  /  30 Sit-ups (abdos) \n20 Double unders  /  20 Sit-ups (abdos) \n10 Double unders  /  10 Sit-ups (abdos) \n<em>Version scaled : faire de simple saut à la corde</em>" },
          ]
        }        
        }},

    { title: "Le WOD Angie", material: ["traction"], body: "complet", duration: 0, type: "FOR TIME", level: "Intense", desc: "100 Pull-ups(tractions), 100 Push-ups(pompes), 100 Sit-ups(abdos), 100 Squats.",
      details: { format_label: "FOR TIME", exercises: [
          { text: "100 Tractions (pull-ups)" }, { text: "100 Pompes (push-ups)", image: "images/infosbulles/POMPES1.png" }, { text: "100 Sit-ups (abdos)" }, { text: "100 Squats au poids de corps (air squats)" }
        ], scaled: { intro: "VERSION SCALED :", exercises: [
          { text: "30 Tractions australiennes ou tractions TRX" }, { text: "30 Pompes inclinées ou sur les genoux" }, { text: "30 Crunches" }, { text: "30 Squats au poids de corps" }
        ]}, conseil: "Durée estimée 35 minutes. 400 répétitions à effectuer.",
        chargeable: true,
        chargement: {
          type: "fortime",
          nom: "Le WOD Angie",
          exercices: [
            { text: "100 Tractions (pull-ups)" }, { text: "100 Pompes (push-ups)" }, { text: "100 Sit-ups (abdos)" }, { text: "100 Squats au poids de corps (air squats)" },
          ]
        }
        }},

    { title: "Le WOD Barbara", material: ["traction"], body: "complet", duration: 0, type: "FOR TIME", level: "Intense", desc: "5 rounds (3' repos) : 20 Pull-ups, 30 Push-ups, 40 Sit-ups, 50 Squats.",
      details: { format_label: "5 ROUNDS FOR TIME", intro: "Réaliser 5 rounds :", exercises: [
          { text: "20 Tractions (pull-ups)" }, { text: "30 Pompes (push-ups)", image: "images/infosbulles/POMPES1.png" }, { text: "40 Sit-ups (abdos)" }, { text: "50 Squats au poids de corps (air squats)" }, { text: "3 minutes de pause entre les rounds" }
        ], scaled: { intro: "VERSION SCALED — 5 rounds :", exercises: [
          { text: "10 Tractions australiennes ou tractions TRX" }, { text: "15 Pompes inclinées ou sur les genoux" }, { text: "20 Crunches" }, { text: "25 Squats au poids de corps" }, { text: "3 minutes de pause entre les rounds" }
        ]}, conseil: "Durée estimée 45 minutes.",
        chargeable: true,
        chargement: {
          type: "fortime",
          nom: "Le WOD Barbara",
          exercices: [
            { text: "20 Tractions (pull-ups)" }, { text: "30 Pompes (push-ups)" }, { text: "40 Sit-ups (abdos)" }, { text: "50 Squats au poids de corps (air squats)" }, { text: "<em>jusqu'à 3 minutes de pause entre les rounds<em>" },
          ]
        }
    }},
  
    { title: "Le WOD FRAN", material: ["traction", "barre"], body: "complet", duration: 0, type: "FOR TIME", level: "Intense", desc: "3 rounds : 21-15-9 Thrusters (43/30 kg) + Tractions (Pull-ups)",
      details: { format_label: "5 ROUNDS FOR TIME", intro: "Réaliser 3 rounds en dégressif :", exercises: [
        { text: "21 Thrusters (43/30 kg) / 21 Tractions (Pull-ups)" },
        { text: "15 Thrusters (43/30 kg) / 15 Tractions (Pull-ups)" },
        { text: "09 Thrusters (43/30 kg) / 09 Tractions (Pull-ups)" }
        ], conseil: "Le thruster est expliqué dans le lexique des mouvements (INFOS PRATIQUES).<br> 43kg pour les hommes; 30kg pour les femmes.",
        chargeable: true,
        chargement: {
          type: "fortime",
          nom: "Le WOD FRAN",
          exercices: [
            { text: "21 Thrusters (43/30 kg) / 21 Tractions (Pull-ups)" },
            { text: "15 Thrusters (43/30 kg) / 15 Tractions (Pull-ups)" },
            { text: "09 Thrusters (43/30 kg) / 09 Tractions (Pull-ups)" } 
          ]
        }
    }},

    { title: "Le WOD Murph", material: ["traction", "gilet-leste"], body: "complet", duration: 0, type: "FOR TIME", level: "Intense", desc: "1.6km course, 100 Pull-ups(tractions), 200 Push-ups(pompes), 300 Squats, 1.6km course.",
      details: { format_label: "FOR TIME", exercises: [
          { text: "1,6 km de course à pied" }, { text: "100 Tractions (pull-ups)" }, { text: "200 Pompes (push-ups)", image: "images/infosbulles/POMPES1.png" }, { text: "300 Squats au poids de corps (air squats)" }, { text: "1,6 km de course à pied" }
        ], conseil: "Durée estimée 50 minutes. WOD très dur — ne pas hésiter à partitionner les séries de tractions / pompes / squats. Les plus forts portent un gilet lesté (9 kg homme / 6 kg femme).",
        chargeable: true,
        chargement: {
          type: "fortime",
          nom: "Le WOD Murph",
          exercices: [
            { text: "1,6 km de course à pied" }, { text: "100 Tractions (pull-ups)" }, { text: "200 Pompes (push-ups)" }, { text: "300 Squats au poids de corps (air squats)" }, { text: "1,6 km de course à pied" },
          ]
        }
        }},

    { title: "Le WOD Sit-ups & Burpees", material: ["poids-corps"], body: "abdos", duration: 0, type: "FOR TIME", level: "Intense", desc: "10-20-30-40-30-20-10 : Sit-ups(abdos) et Burpees.",
      details: { format_label: "FOR TIME", intro: "Réaliser 10-20-30-40-30-20-10 répétitions de :", exercises: [
          { text: "Sit-ups (abdos)" }, { text: "Burpees", image: "images/infosbulles/BURPEES1.png" }
        ], conseil: "Durée estimée 15 minutes en format pyramidale. Mieux vaut un rythme régulier et lent pour les burpees.",
        chargeable: true,
        chargement: {
          type: "fortime",
          nom: "Le WOD Sit-ups & Burpees",
          exercices: [
            { text: "10 Sit-ups / 10 Burpees" },
            { text: "20 Sit-ups / 20 Burpees" },
            { text: "30 Sit-ups / 30 Burpees" },
            { text: "40 Sit-ups / 40 Burpees" },
            { text: "30 Sit-ups / 30 Burpees" },
            { text: "20 Sit-ups / 20 Burpees" },
            { text: "10 Sit-ups / 10 Burpees" }
          ]
        }
        }},

    { title: "Le WOD Candy", material: ["traction"], body: "complet", duration: 0, type: "FOR TIME", level: "Intense", desc: "5 rounds : 20 Pull-ups(tractions), 40 Push-ups(pompes), 60 Squats.",
      details: { format_label: "FOR TIME", intro: "Réaliser 5 rounds :", exercises: [
          { text: "20 Tractions (pull-ups)" }, { text: "40 Pompes (push-ups)", image: "images/infosbulles/POMPES1.png" }, { text: "60 Squats au poids de corps (air squats)" }
        ], conseil: "Durée estimée 40 minutes. Version allégée du Murph (sans la course).",
        chargeable: true,
        chargement: {
          type: "fortime",
          nom: "Le WOD Candy",
          exercices: [
            { text: "<u>5 ROUNDS :</u>" },
            { text: "20 Tractions (pull-ups)" },
              { text: "40 Pompes (push-ups)" },
              { text: "60 Squats au poids de corps (air squats)" },
             ]
        }
        }},

    { title: "Le WOD Karabel", material: ["ballon-leste"], body: "complet", duration: 0, type: "FOR TIME", level: "Moyen", desc: "10 rounds : 15 Wall Balls(ballon lesté) et 15 Burpees.",
      details: { format_label: "FOR TIME", intro: "Réaliser 10 rounds :", exercises: [
          { text: "15 Wall balls (ballon lesté)" }, { text: "15 Burpees", image: "images/infosbulles/BURPEES1.png" }
        ], conseil: "Durée estimée 15 minutes.",
        chargeable: true,
        chargement: {
          type: "fortime",
          nom: "Le WOD Karabel",
          exercices: [
            { text: "<u>10 ROUNDS :</u>" },
            { text: "15 Wall balls (ballon lesté)" }, { text: "15 Burpees" }
             ]
        }
               }},

    { title: "Le WOD Handstand", material: ["poids-corps"], body: "complet", duration: 0, type: "FOR TIME", level: "Intense", desc: "5 rounds : 10 HSPU(pompes inversées), 20 Squats, 10 HSPU, 20 Lunges(fentes).",
      details: { format_label: "FOR TIME", intro: "Réaliser 5 rounds :", exercises: [
          { text: "10 Handstand Push-ups (pompes en poirier contre un mur)" }, { text: "20 Squats au poids de corps (air squats)" }, { text: "10 Handstand Push-ups (pompes en poirier contre un mur)" }, { text: "20 Fentes (lunges)" }
        ], scaled: { intro: "VERSION SCALED :", exercises: [
          { text: "Remplacer les HSPU par des pompes avec pieds surélevés" }
        ]}, conseil: "-",
        chargeable: true,
        chargement: {
          type: "fortime",
          nom: "Le WOD Handstand",
          exercices: [
            { text: "<u>5 ROUNDS :</u>" },
            { text: "10 Handstand Push-ups (pompes en poirier contre un mur)" }, { text: "20 Squats au poids de corps (air squats)" }, { text: "10 Handstand Push-ups (pompes en poirier contre un mur)" }, { text: "20 Fentes (lunges)" }
             ]
        }       
        }},

    { title: "Le WOD Super Legs", material: ["poids-corps"], body: "bas", duration: 0, type: "FOR TIME", level: "Facile", desc: "<strong>5 rounds :</strong> 20 Air Squats, 20 Alternating Lunges(fentes), 20 Split Squat Jumps, 10 Squat Jumps.",
      details: { format_label: "FOR TIME", intro: "Réaliser 5 rounds :", exercises: [
          { text: "20 Squats au poids de corps (air squats)" }, { text: "20 Fentes alternées (lunges)" }, { text: "20 Fentes sautées" }, { text: "10 Squats sautés (squats jumps)" }
        ], conseil: "Ça brûle ! Penser à ne pas s'avachir avec la fatigue, on garde le buste droit.",
        chargeable: true,
        chargement: {
          type: "fortime",
          nom: "Le WOD Super Legs",
          exercices: [
            { text: "<u>5 ROUNDS :</u>" },
            { text: "20 Squats au poids de corps (air squats)" }, { text: "20 Fentes alternées (lunges)" }, { text: "20 Fentes sautées" }, { text: "10 Squats sautés (squats jumps)" }
             ]
        }       
        }},

    { title: "Le WOD Air Squat Galore", material: ["poids-corps"], body: "bas", duration: 0, type: "FOR TIME", level: "Facile", desc: "500 Air Squats pour le temps.",
      details: { format_label: "FOR TIME", exercises: [
          { text: "500 Squats au poids de corps le plus rapidement possible (air-squats)" }
        ], conseil: "Durée estimée 20 minutes.",
        chargeable: true,
        chargement: {
          type: "fortime",
          nom: "Le WOD Air Squat Galore",
          exercices: [
            { text: "500 Squats au poids de corps le plus rapidement possible (air-squats)" }
             ]
        }       
        }},

    { title: "Le WOD Lunges & Run", material: ["poids-corps", "tapis-incurve"], body: "bas", duration: 0, type: "FOR TIME", level: "Facile", desc: "5 rounds : Run 400m, 30 Walking Lunges(fentes marchées).",
      details: { format_label: "FOR TIME", intro: "Réaliser 5 rounds :", exercises: [
          { text: "400m de course à pied" }, { text: "30 Fentes marchées (walking lunges)" }
        ], conseil: "Durée estimée 25 minutes. Utiliser la course pour récupérer le souffle après les fentes.",
        chargeable: true,
        chargement: {
          type: "fortime",
          nom: "Le WOD Lunges & Run",
          exercices: [
            { text: "<u>5 ROUNDS :</u>" },
            { text: "400m de course à pied" }, { text: "30 Fentes marchées (walking lunges)" }
             ]
        }              
        }},

    { title: "Le WOD Burpee Marathon", material: ["poids-corps"], body: "complet", duration: 0, type: "FOR TIME", level: "Intense", desc: "150 Burpees le plus vite possible.",
      details: { format_label: "FOR TIME", exercises: [
          { text: "150 Burpees le plus rapidement possible", image: "images/infosbulles/BURPEES1.png" }
        ], conseil: "Trouver un rythme pour tenir le plus longtemps possible sans pause. Mieux vaut être lent.",
        chargeable: true,
        chargement: {
          type: "fortime",
          nom: "Le WOD Burpee Marathon",
          exercices: [
            { text: "150 Burpees le plus rapidement possible" }
             ]
        }              
        }},

    { title: "Le WOD Cloverfield", material: ["poids-corps"], body: "complet", duration: 0, type: "FOR TIME", level: "Intense", desc: "Run 2400m(course à pied), 150 Burpees, Run 2400m.",
      details: { format_label: "FOR TIME", exercises: [
          { text: "1,6 km de course à pied (run)" }, { text: "150 Burpees", image: "images/infosbulles/BURPEES1.png" }, { text: "1,6 km de course à pied (run)" }
        ], conseil: "Trouver un rythme pour tenir le plus longtemps possible sans pause. Mieux vaut être lent.",
        chargeable: true,
        chargement: {
          type: "fortime",
          nom: "Le WOD Cloverfield",
          exercices: [
            { text: "1,6 km de course à pied (run)" }, { text: "150 Burpees" }, { text: "1,6 km de course à pied (run)" }
             ]
        }                
        }},

    { title: "Le WOD Shawn", material: ["poids-corps"], body: "complet", duration: 0, type: "FOR TIME", level: "Moyen", desc: "Run 8km. Toutes les 5 min : 50 Squats et 50 Push-ups(pompes).",
      details: { format_label: "FOR TIME", exercises: [
          { text: "8 km de course à pied avec un arrêt toutes les 5 minutes pour exécuter :" }, { text: "→ 50 Squats au poids de corps (air-squats)" }, { text: "→ 50 Pompes (push-ups)", image: "images/infosbulles/POMPES1.png" }
        ], conseil: "Prévoir de quoi s'hydrater, l'effort dépasse l'heure de travail." }},

    { title: "Le WOD Zachary Tellier", material: ["poids-corps"], body: "complet", duration: 0, type: "FOR TIME", level: "Intense", desc: "10 Burpees au départ, puis enchainement Burpees / Push-ups(pompes) / Lunges(fentes) / Sit-ups(abdos).",
      details: { format_label: "FOR TIME", intro: "'10 burpees buy-in'", exercises: [
          { text: "10 Burpees", image: "images/infosbulles/BURPEES1.png" }, { text: "10 Burpees + 25 Push-ups" }, { text: "10 Burpees + 25 Push-ups + 50 Lunges" }, { text: "10 Burpees + 25 Push-ups + 50 Lunges + 100 Sit-ups" }, { text: "10 Burpees + 25 Push-ups + 50 Lunges + 100 Sit-ups + 150 Air Squats" }
        ], scaled: { intro: "VERSION SCALED :", exercises: [
          { text: "Pompes sur les genoux ou inclinées" }, { text: "Burpees sans le saut et/ou sans la pompe" }
        ]}, conseil: "Durée estimée 35 minutes.",
        chargeable: true,
        chargement: {
          type: "fortime",
          nom: "Le WOD Zachary Tellier",
          exercices: [
            { text: "10 Burpees" }, { text: "10 Burpees + 25 Push-ups" }, { text: "10 Burpees + 25 Push-ups + 50 Lunges" }, { text: "10 Burpees + 25 Push-ups + 50 Lunges + 100 Sit-ups" }, { text: "10 Burpees + 25 Push-ups + 50 Lunges + 100 Sit-ups + 150 Air Squats" }
              ]
        } 
        }},

    { title: "Le WOD Loredo", material: ["poids-corps"], body: "complet", duration: 0, type: "FOR TIME", level: "Moyen", desc: "<strong>6 tours :</strong> 24 Squats, 24 Push-ups(pompes), 24 Walking Lunges(fentes marchées), 400m Run.",
      details: { format_label: "FOR TIME", intro: "Réaliser 6 rounds :", exercises: [
          { text: "24 Air squats" }, { text: "24 Pompes (push-ups)", image: "images/infosbulles/POMPES1.png" }, { text: "24 Fentes marchées (walking lunges)" }, { text: "400m Course à pied (run)" }
        ], scaled: { intro: "VERSION SCALED — 4 rounds :", exercises: [
          { text: "24 Air squats" }, { text: "24 Pompes inclinées ou sur les genoux" }, { text: "24 Fentes marchées (walking lunges)" }, { text: "400m Course à pied (run)" }
        ]}, conseil: "144 reps par exercice.",
        chargeable: true,
        chargement: {
          type: "fortime",
          nom: "Le WOD Loredo",
          exercices: [
            { text: "<u>6 ROUNDS :</u>" },
            { text: "24 Air squats" }, { text: "24 Pompes (push-ups)" }, { text: "24 Fentes marchées (walking lunges)" }, { text: "400m Course à pied (run)" }
             ]
        }               
        }},

    { title: "Le WOD Bert", material: ["poids-corps"], body: "complet", duration: 0, type: "FOR TIME", level: "Intense", desc: "50 Burpees, 400m Run(course), 100 Push-ups(pompes), 400m Run, 150 Walking Lunges(fentes marchées), 400m Run, 200 Squats, 400m Run, 150 Walking Lunges, 400m Run, 100 Push-ups, 400m Run, 50 Burpees.",
      details: { format_label: "FOR TIME", exercises: [
          { text: "50 Burpees", image: "images/infosbulles/BURPEES1.png" }, { text: "400m Run" }, { text: "100 Push-Ups (pompes)", image: "images/infosbulles/POMPES1.png" }, { text: "400m Run" }, { text: "150 Walking Lunges (fentes marchées)" }, { text: "400m Run" }, { text: "200 Air Squats" }, { text: "400m Run" }, { text: "150 Walking Lunges" }, { text: "400m Run" }, { text: "100 Push-Ups" }, { text: "400m Run" }, { text: "50 Burpees" }
        ], scaled: { intro: "VERSION SCALED :", exercises: [
          { text: "20 Burpees / 200m Run / 30 Knee Push-Ups / 200m Run / 40 Walking Lunges / 200m Run / 50 Air Squats / 200m Run / (miroir en sens inverse)" }
        ]}, conseil: "Durée estimée 70 minutes.",
        chargeable: true,
        chargement: {
          type: "fortime",
          nom: "Le WOD Bert",
          exercices: [
            { text: "50 Burpees + 400m Run" }, { text: "100 Push-Ups (pompes) + 400m Run" }, { text: "150 Walking Lunges (fentes marchées) + 400m Run" }, { text: "200 Air Squats + 400m Run" }, { text: "150 Walking Lunges + 400m Run" }, { text: "100 Push-Ups + 400m Run" }, { text: "50 Burpees + 400m Run" }
             ]
        }        
        }},

    { title: "Le WOD Hero Mark Klement", material: ["poids-corps"], body: "complet", duration: 0, type: "FOR TIME", level: "Intense", desc: "<strong>7 tours :</strong> 74-44-11 reps de Burpees, Push-ups(pompes), Sit-ups(abdos), Air squats.",
      details: { format_label: "FOR TIME", intro: "Réaliser 74 puis 44 puis 11 reps de :", exercises: [
          { text: "Burpees", image: "images/infosbulles/BURPEES1.png" }, { text: "Pompes (push-ups)", image: "images/infosbulles/POMPES1.png" }, { text: "Sit-ups (abdos)" }, { text: "Air squats" }
        ], scaled: { intro: "VERSION SCALED — mêmes séries avec :", exercises: [
          { text: "Burpees sans sauts et/ou sans pompes" }, { text: "Pompes sur les genoux ou inclinées" }
        ]}, conseil: "129 reps par exercice au total.",
        chargeable: true,
        chargement: {
          type: "fortime",
          nom: "Le WOD Mark Klement",
          exercices: [
            { text: "74 Burpees / 74 Pompes (push-ups) / 74 Sit-ups (abdos) / 74 Air squats" }, { text: "44 Burpees / 44 Pompes (push-ups) / 44 Sit-ups (abdos) / 44 Air squats" }, { text: "11 Burpees / 11 Pompes (push-ups) / 11 Sit-ups (abdos) / 11 Air squats" }
            ]
        }        
        }},

    { title: "Le WOD Hero Maupin", material: ["poids-corps"], body: "complet", duration: 0, type: "FOR TIME", level: "Moyen", desc: "800m Run(course), 49 Push-ups(pompes), 49 Sit-ups(abdos), 49 Air Squats.",
      details: { format_label: "FOR TIME", intro: "Réaliser 4 rounds :", exercises: [
          { text: "800m de course à pied (run)" }, { text: "49 Pompes (push-ups)", image: "images/infosbulles/POMPES1.png" }, { text: "49 Sit-ups (abdos)" }, { text: "49 Air squats" }
        ], scaled: { intro: "VERSION SCALED — 4 rounds :", exercises: [
          { text: "800m de course à pied" }, { text: "49 Pompes inclinées ou sur les genoux" }, { text: "49 Sit-ups ou crunches" }, { text: "49 Air squats" }
        ]}, conseil: "196 reps par exercice au total.",
        chargeable: true,
        chargement: {
          type: "fortime",
          nom: "Le WOD Hero Maupin",
          exercices: [
            { text: "<u>4 ROUNDS :</u>" },
            { text: "800m de course à pied (run)" }, { text: "49 Pompes (push-ups)" }, { text: "49 Sit-ups (abdos)" }, { text: "49 Air squats" }
             ]
        }                    
        }},

    { title: "Le WOD Chad", material: ["box-jump","gilet-leste"], body: "bas", duration: 0, type: "FOR TIME", level: "Intense", desc: "1000 Box Step-ups. Option : gilet lesté.",
      details: { format_label: "FOR TIME", exercises: [
          { text: "1000 montées de box à 50cm (Box Step-Ups)" }, { text: "Avec gilet lesté : 20 kg/homme, 15 kg/femme" }
        ], scaled: { intro: "VERSION SCALED (sans gilet) :", exercises: [
          { text: "1000 montées de box à 50cm (Box Step-Ups)" }
        ]}, conseil: "Box de 50 cm.",
        chargeable: true,
        chargement: {
          type: "fortime",
          nom: "Le WOD Chad",
          exercices: [
            { text: "1000 montées de box à 50cm (Box Step-Ups)" }, { text: "<em>avec gilet lesté de 20 kg/homme, 15 kg/femme et box-jump de 50cm</em>" }
            ]
        }        
        }},

    { title: "Le WOD Cooper", material: ["poids-corps"], body: "complet", duration: 0, type: "FOR TIME", level: "Facile", desc: "10 rounds : 10 Burpees, 10 Air Squats, 10 Push-ups(pompes), 10 Sit-ups(abdos).",
      details: { format_label: "FOR TIME", intro: "Réaliser 10 rounds :", exercises: [
          { text: "10 Burpees", image: "images/infosbulles/BURPEES1.png" }, { text: "10 Air squats" }, { text: "10 Pompes (push-ups)", image: "images/infosbulles/POMPES1.png" }, { text: "10 Sit-ups (abdos)" }
        ], scaled: { intro: "VERSION SCALED — 5 rounds :", exercises: [
          { text: "10 Burpees" }, { text: "10 Air squats" }, { text: "10 Pompes inclinées ou sur les genoux" }, { text: "10 Sit-ups (abdos)" }
        ]}, conseil: "Durée estimée 30 minutes.",
        chargeable: true,
        chargement: {
          type: "fortime",
          nom: "Le WOD Cooper",
          exercices: [
            { text: "<u>10 ROUNDS :</u>" },
            { text: "10 Burpees" }, { text: "10 Air squats" }, { text: "10 Pompes (push-ups)" }, { text: "10 Sit-ups (abdos)" }
             ]
        }        
        }},

    { title: "Le WOD It's a trap", material: ["poids-corps"], body: "complet", duration: 0, type: "FOR TIME", level: "Intense", desc: "commencer par 200m Run(course) puis effectuer 100 Burpees avec toutes les 2 minutes un Run de 200m.",
      details: { format_label: "FOR TIME", exercises: [
          { text: "200m de course à pied au départ (run)" }, { text: "Burpees pendant 2min puis 200m de course à pied", image: "images/infosbulles/BURPEES1.png" }, { text: "Burpees pendant 2min puis 200m de course à pied" }, { text: "..." }, { text: "Burpees pendant 2min puis 200m de course à pied" }, { text: "jusque 100 burpees effectué" }
        ], scaled: { intro: "VERSION SCALED :", exercises: [
          { text: "200m de course à pied au départ" }, { text: "50 Burpees" }, { text: "200m de course à pied toutes les 2 minutes" }
        ]}, conseil: "OBJECTIF 100 BURPEES : Commencer par 200m de course, puis c'est parti pour 2 minutes de burpees. Après ces 2 minutes c'est reparti pour 200m de course, etc, jusque 100 burpees effectués.",
         chargeable: true,
        chargement: {
          type: "fortime",
          nom: "Le WOD It's a trap",
          exercices: [
            { text: "200m de course à pied au départ (run)" }, { text: "Burpees pendant 2min puis 200m de course à pied" }, { text: "Burpees pendant 2min puis 200m de course à pied" }, { text: "..." }, { text: "Burpees pendant 2min puis 200m de course à pied" }, { text: "<em>jusque <u>100 burpees</u> effectués</em>" }
             ]
        }       
        }},

    { title: "Le WOD The Longest Mile", material: ["poids-corps"], body: "complet", duration: 0, type: "FOR TIME", level: "Moyen", desc: "4 rounds : 10 Burpees, 100m Run(course), 10 Air Squats, 100m Run, 10 Push-ups(pompes), 100m Run, 10 Sit-ups(abdos), 100m Run.",
      details: { format_label: "FOR TIME", intro: "Réaliser 4 rounds :", exercises: [
          { text: "10 Burpees", image: "images/infosbulles/BURPEES1.png" }, { text: "100m Run" }, { text: "10 Air Squats" }, { text: "100m Run" }, { text: "10 Push-Ups (pompes)", image: "images/infosbulles/POMPES1.png" }, { text: "100m Run" }, { text: "10 Sit-Ups (abdos)" }, { text: "100m Run" }
        ], scaled: { intro: "VERSION SCALED — 3 rounds (mêmes exercices)", exercises: [
          { text: "10 Burpees" }, { text: "100m Run" }, { text: "10 Air Squats" }, { text: "100m Run" }, { text: "10 Push-Ups (pompes)" }, { text: "100m Run" }, { text: "10 Sit-Ups (abdos)" }, { text: "100m Run" }
        ] }, conseil: "-",
             chargeable: true,
        chargement: {
          type: "fortime",
          nom: "Le WOD The Longest Mile",
          exercices: [
            { text: "<u>4 ROUNDS :</u>" },
            { text: "10 Burpees" }, { text: "100m Run" }, { text: "10 Air Squats" }, { text: "100m Run" }, { text: "10 Push-Ups (pompes)" }, { text: "100m Run" }, { text: "10 Sit-Ups (abdos)" }, { text: "100m Run" }
             ]
        }  
        }},

    { title: "Le WOD Durante Core", material: ["poids-corps"], body: "abdos", duration: 0, type: "FOR TIME", level: "Facile", desc: "<strong>ABDOS - 5 tours :</strong> 10 Hollow Rocks, 10 V-ups, 10 Tuck-ups, 10 sec Hollow Hold, 1 minute de pause.",
      details: { format_label: "FOR TIME", intro: "Réaliser 5 rounds :", exercises: [
          { text: "10 Hollow Rocks" }, { text: "10 V-Ups" }, { text: "10 Tucks-Ups" }, { text: "10 sec Hollow Hold" }, { text: "1 minute de pause" }
        ], scaled: { intro: "VERSION SCALED — 5 rounds :", exercises: [
          { text: "10 Hollow Rock Scaled" }, { text: "10 Sit-Ups" }, { text: "10 Tucks-Ups" }, { text: "10 sec Hollow Hold Scaled" }, { text: "1 minute de pause" }
        ]}, conseil: "-",
        chargeable: true,
        chargement: {
        type: "fortime",
        nom: "Le WOD Durante Core",
        exercices: [
            { text: "<u>5 ROUNDS :</u>" },
            { text: "10 Hollow Rocks" }, { text: "10 V-Ups" }, { text: "10 Tucks-Ups" }, { text: "10 sec Hollow Hold" }, { text: "1 minute de pause" }
        ]
        }       
        }},

    { title: "Le WOD Dee", material: ["poids-corps"], body: "complet", duration: 0, type: "FOR TIME", level: "Moyen", desc: "4 rounds : 40 Air Squats, 30 Hand Release Push-Up(pompes), 20 Burpees.",
      details: { format_label: "FOR TIME", intro: "Réaliser 4 rounds :", exercises: [
          { text: "40 Air Squats" }, { text: "30 Pompes avec décollement des mains en position basse (Hand Release Push-Ups)" }, { text: "20 Burpees" }, { text: "400m de course à pied (run)" }
        ], scaled: { intro: "VERSION SCALED — 4 rounds :", exercises: [
          { text: "40 Air Squats" }, { text: "30 Pompes ou pompes sur les genoux" }, { text: "20 Burpees", image: "images/infosbulles/BURPEES1.png" }, { text: "400m de course à pied" }
        ]}, conseil: "-",
        chargeable: true,
        chargement: {
        type: "fortime",
        nom: "Le WOD Dee",
        exercices: [
            { text: "<u>4 ROUNDS :</u>" },
            { text: "40 Air Squats" }, { text: "30 Pompes avec décollement des mains en position basse (Hand Release Push-Ups)" }, { text: "20 Burpees", image: "images/infosbulles/BURPEES1.png" }, { text: "400m de course à pied (run)" }
        ]
        }              
        }},

    { title: "Le WOD Riley", material: ["poids-corps","gilet-leste"], body: "complet", duration: 0, level: "Intense", type: "FOR TIME", desc: "2.4km Run, 150 Burpees, 2.4km Run.",
      details: { format_label: "FOR TIME", intro: "Avec gilet lesté de 9 kg/6 kg :", exercises: [
          { text: "2400m de course à pied (run)" }, { text: "150 Burpees", image: "images/infosbulles/BURPEES1.png" }, { text: "2400m de course à pied" }
        ], scaled: { intro: "VERSION SCALED (avec ou sans gilet) :", exercises: [
          { text: "1000m de course à pied" }, { text: "100 Burpees" }, { text: "1000m de course à pied" }
        ]}, conseil: "-",
        chargeable: true,
        chargement: {
          type: "fortime",
          nom: "Le WOD Riley",
          exercices: [
            { text: "1000m de course à pied" }, { text: "100 Burpees" }, { text: "1000m de course à pied" }, { text: "<em>version avec un gilet : 9kg/6kg </em>" }
             ]
        }              
        }},

    { title: "WOD For Time 6 EXOS#1", material: ["traction", "station-dips"], body: "complet", duration: 0, type: "FOR TIME", level: "Moyen", desc: "<strong>4 tours (1' repos) :</strong> 10 Tractions(pull-ups), 15 Tractions australiennes, 10 Dips, 15 Pompes diamant(push-ups), 10 Fentes/jambe(lunges), 15 Squats.",
      details: { format_label: "FOR TIME", intro: "Réaliser 4 rounds (1 min repos entre chaque) :", exercises: [
          { text: "10 Tractions (pull-ups)" }, { text: "15 Tractions australiennes" }, { text: "10 Dips" }, { text: "15 Pompes diamant" }, { text: "10 Fentes/jambe (lunges)" }, { text: "15 Squats" }, { text: "1 minute de repos" }
        ], scaled: { intro: "VERSION SCALED :", exercises: [
          { text: "Pompes inclinées ou sur genoux" }, { text: "Tractions avec TRX ou élastique" }
        ]}, conseil: "-",
        chargeable: true,
        chargement: {
        type: "fortime",
        nom: "WOD For Time 6 EXOS#1",
        exercices: [
            { text: "<u>4 ROUNDS :</u>" },
            { text: "10 Tractions (pull-ups)" }, { text: "15 Tractions australiennes" }, { text: "10 Dips" }, { text: "15 Pompes diamant" }, { text: "10 Fentes/jambe (lunges)" }, { text: "15 Squats" }, { text: "1 minute de repos" }
        ]
        }       
        }},

    { title: "WOD 500 REPS", material: ["poids-corps"], body: "complet", duration: 0, type: "FOR TIME", level: "Moyen", desc: "50 Montées de genoux, 50 Squats, 50 Demi squats sautés, 50 Pompes(push-ups), 50 Mountains climbers, 50 Coups de genoux, 50 Fentes(lunges), 50 Directs bras gauche/droit, 50 Burpees, 50 Jumping jacks.",
      details: { format_label: "FOR TIME", exercises: [
          { text: "50 Montées de genoux" }, { text: "50 Squats" }, { text: "50 Demi-squats sautés (position basse)" }, { text: "50 Pompes", image: "images/infosbulles/POMPES1.png" }, { text: "50 Mountains climbers" }, { text: "50 Coups de genoux" }, { text: "50 Fentes (vers l'avant)" }, { text: "50 Directs bras avant / bras arrière" }, { text: "50 Burpees" }, { text: "50 Jumping jacks" }
        ], conseil: "WOD orienté sport de combat.",
        chargeable: true,
        chargement: {
        type: "fortime",
        nom: "WOD 500 REPS",
        exercices: [
            { text: "50 Montées de genoux" }, { text: "50 Squats" }, { text: "50 Demi-squats sautés (position basse)" }, { text: "50 Pompes" }, { text: "50 Mountains climbers" }, { text: "50 Coups de genoux" }, { text: "50 Fentes (vers l'avant)" }, { text: "50 Directs bras avant / bras arrière" }, { text: "50 Burpees" }, { text: "50 Jumping jacks" }
        ]
        }        
        }},

    { title: "WOD For Time 6 EXOS#2", material: ["traction"], body: "complet", duration: 0, type: "FOR TIME", level: "Moyen", desc: "<strong>4 tours (1' repos) :</strong> 15 Burpees, 15 Squats jump, 15 Pompes(push-ups), 15 Tractions(pull-ups), 15 Fentes(lunges), 15 Sit-ups(abdos).",
      details: { format_label: "FOR TIME", intro: "Réaliser 4 rounds (1 min repos entre chaque) :", exercises: [
          { text: "15 Burpees", image: "images/infosbulles/BURPEES1.png" }, { text: "15 Squats jump" }, { text: "15 Pompes", image: "images/infosbulles/POMPES1.png" }, { text: "15 Tractions (pull-ups)" }, { text: "15 Fentes (lunges)" }, { text: "15 Sit-ups (abdos)" }, { text: "1 minute de repos" }
        ], scaled: { intro: "VERSION SCALED :", exercises: [
          { text: "Pompes inclinées ou sur genoux" }, { text: "Tractions avec TRX ou élastique" }, { text: "Remplacer les sit-ups par des crunches" }
        ]}, conseil: "-",
        chargeable: true,
        chargement: {
        type: "fortime",
        nom: "WOD For Time 6 EXOS#2",
        exercices: [
            { text: "<u>4 ROUNDS :</u>" },
            { text: "15 Burpees" }, { text: "15 Squats jump" }, { text: "15 Pompes" }, { text: "15 Tractions (pull-ups)" }, { text: "15 Fentes (lunges)" }, { text: "15 Sit-ups (abdos)" }, { text: "1 minute de repos" }
        ]
        }       
        }},

    { title: "WOD 1000 REPS", material: ["traction", "station-dips", "box-jump"], body: "complet", duration: 0, type: "FOR TIME", level: "Intense", desc: "100 Tractions australiennes(pull-ups), 100 Pompes diamants(push-ups), 100 Squats jumps, 100 Mountain climbers, 100 Burpees, 100 Dips, 100 Gainage dynamique, 100 Box jumps, 100 Relevés de jambe, 100 Fentes marchées(walking lunges)",
      details: { format_label: "FOR TIME — 1000 REPS", exercises: [
          { text: "100 Tractions australiennes" }, { text: "100 Pompes diamants" }, { text: "100 Squats jump" }, { text: "100 Mountain climbers" }, { text: "100 Burpees" }, { text: "100 Dips" }, { text: "100 Gainage dynamique" }, { text: "100 Box jump" }, { text: "100 Relevés de jambes" }, { text: "100 Fentes marchées (walking lunges)" }
        ], conseil: "WOD haut niveau.",
        chargeable: true,
        chargement: {
        type: "fortime",
        nom: "WOD 1000 REPS",
        exercices: [
            { text: "100 Tractions australiennes" }, { text: "100 Pompes diamants" }, { text: "100 Squats jump" }, { text: "100 Mountain climbers" }, { text: "100 Burpees" }, { text: "100 Dips" }, { text: "100 Gainage dynamique" }, { text: "100 Box jump" }, { text: "100 Relevés de jambes" }, { text: "100 Fentes marchées (walking lunges)" }
        ]
        }       
        }},

    { title: "WOD BRI", material: ["poids-corps"], body: "complet", duration: 0, type: "FOR TIME", level: "Intense", desc: "<strong>36Reps / 2X18Reps / 3x12Reps / 4X9Reps / 6X6Reps :</strong> Burpees, Pompes(push-ups), Sit-ups(abdos), Squats.",
      details: { format_label: "FOR TIME — 720 REPS", intro: "À chaque étape : Burpees / Push-ups(pompes) / Sit-ups(abdos) / Squats", exercises: [
          { text: "Étape 1 : 36 reps × 4 exercices (1 fois)" }, { text: "Étape 2 : 18 reps × 4 exercices (2 fois)" }, { text: "Étape 3 : 12 reps × 4 exercices (3 fois)" }, { text: "Étape 4 : 9 reps × 4 exercices (4 fois)" }, { text: "Étape 5 : 6 reps × 4 exercices (6 fois)" }
        ], conseil: "720 reps au total. À chaque étape on effectue 36 reps de chaque mouvement.",
        chargeable: true,
        chargement: {
        type: "fortime",
        nom: "WOD BRI",
        exercices: [
            { text: "Étape 1 : 36reps BURPEES / 36reps POMPES / 36reps SIT-UPS / 36reps SQUATS ➡️ <u>1 fois</u>" }, 
            { text: "Étape 2 : 18reps BURPEES / 18reps POMPES / 18reps SIT-UPS / 18reps SQUATS ➡️ <u>2 fois</u>" }, 
            { text: "Étape 3 : 12reps BURPEES / 12reps POMPES / 12reps SIT-UPS / 12reps SQUATS ➡️ <u>3 fois</u>" }, 
            { text: "Étape 4 : 09reps BURPEES / 09reps POMPES / 09reps SIT-UPS / 09reps SQUATS ➡️ <u>4 fois</u>" }, 
            { text: "Étape 4 : 06reps BURPEES / 06reps POMPES / 06reps SIT-UPS / 06reps SQUATS ➡️ <u>6 fois</u>" },
        ]
        }        
        }},

    { title: "WOD HYBRID ANDRE", material: ["rameur"], body: "complet", duration: 0, type: "HYBRID", level: "Intense", desc: "<strong>FOR TIME:</strong> alternance Rameur(row), Burpees.",
      details: { format_label: "HYBRID — FOR TIME", exercises: [
          { text: "1000m Rameur" }, { text: "50 Burpees", image: "images/infosbulles/BURPEES1.png" }, { text: "800m Rameur" }, { text: "40 Burpees", image: "images/infosbulles/BURPEES1.png" }, { text: "600m Rameur" }, { text: "30 Burpees", image: "images/infosbulles/BURPEES1.png" }, { text: "400m Rameur" }, { text: "20 Burpees", image: "images/infosbulles/BURPEES1.png" }, { text: "200m Rameur" }, { text: "10 Burpees", image: "images/infosbulles/BURPEES1.png" }
        ], conseil: "Durée estimée 40 minutes.",
        chargeable: true,
        chargement: {
        type: "fortime",
        nom: "WOD HYBRID ANDRE",
        exercices: [
            { text: "1000m Rameur" }, { text: "50 Burpees" }, { text: "800m Rameur" }, { text: "40 Burpees" }, { text: "600m Rameur" }, { text: "30 Burpees" }, { text: "400m Rameur" }, { text: "20 Burpees" }, { text: "200m Rameur" }, { text: "10 Burpees" }
        ]
        }       
        }},

    { title: "WOD HYBRID DOMINO", material: ["poids-corps", "tapis-incurve"], body: "complet", duration: 0, type: "HYBRID", level: "Moyen", desc: "<strong>FOR TIME:</strong> alternance Course à pied(run), Squats/Burpees/Pompes(Push-ups)/Sit-ups(abdos).",
      details: { format_label: "HYBRID — FOR TIME", exercises: [
          { text: "5 min Course à pied" }, { text: "50 Squats au poids de corps" }, { text: "5 min Course à pied" }, { text: "50 Burpees", image: "images/infosbulles/BURPEES1.png" }, { text: "5 min Course à pied" }, { text: "50 Pompes (Push-ups)", image: "images/infosbulles/POMPES1.png" }, { text: "5 min Course à pied" }, { text: "50 Sit-ups (abdos)" }
        ], conseil: "Durée estimée 45 minutes.",
        chargeable: true,
        chargement: {
        type: "fortime",
        nom: "WOD HYBRID DOMINO",
        exercices: [
            { text: "5 min Course à pied" }, { text: "50 Squats au poids de corps" }, { text: "5 min Course à pied" }, { text: "50 Burpees" }, { text: "5 min Course à pied" }, { text: "50 Pompes" }, { text: "5 min Course à pied" }, { text: "50 Sit-ups (abdos)" }
        ]
        }       
        }},

    { title: "WOD HYBRID 4 TOURS#1", material: ["ballon-leste", "tapis-incurve", "traction"], body: "complet", duration: 0, type: "HYBRID", level: "Intense", desc: "<strong>4 TOURS FOR TIME:</strong> 600m. Course à pied(run), 30 Lancers de ballon lesté(wall-ball), 20 Sit-ups(abdos), 20 Tractions(pull-ups).",
      details: { format_label: "HYBRID — 4 TOURS FOR TIME", intro: "Effectuer 4 tours :", exercises: [
          { text: "600m de course à pied" }, { text: "30 Wall-Balls (ballon lesté)" }, { text: "20 Sit-ups (abdos)" }, { text: "20 Tractions (pull-ups)" }
        ], conseil: "-",
        chargeable: true,
        chargement: {
        type: "fortime",
        nom: "WOD HYBRID 4 TOURS#1",
        exercices: [
            { text: "<u>4 ROUNDS :</u>" },
            { text: "600m de course à pied" }, { text: "30 Wall-Balls (ballon lesté)" }, { text: "20 Sit-ups (abdos)" }, { text: "20 Tractions (pull-ups)" }
        ]
        }       
        }},

    { title: "WOD HYBRID 4 TOURS#2", material: ["rameur", "tapis-incurve", "box-jump", "ski-erg"], body: "complet", duration: 0, type: "HYBRID", level: "Moyen", desc: "<strong>4 TOUS FOR TIME:</strong> 400m. Course à pied(run), 15 Burpees Box-jump Over, 400m. de rameur(row), 400 m. de SkiERG.",
      details: { format_label: "HYBRID — 4 TOURS FOR TIME", intro: "Effectuer 4 tours :", exercises: [
          { text: "400m de course à pied (rapide)" }, { text: "15 Burpees Box Jump Over" }, { text: "400m de Rameur (rapide)" }, { text: "400m de SkiERG (rapide)" }
        ], conseil: "Ajuster la hauteur de la box-jump selon le niveau, ou effectuer des burpees simples.",
        chargeable: true,
        chargement: {
        type: "fortime",
        nom: "WOD HYBRID 4 TOURS#2",
        exercices: [
            { text: "<u>4 ROUNDS :</u>" },
            { text: "400m de course à pied (rapide)" }, { text: "15 Burpees Box Jump Over" }, { text: "400m de Rameur (rapide)" }, { text: "400m de SkiERG (rapide)" }
        ]
        }       
        }},

    { title: "WOD HYBRID AMRAP40", material: ["rameur", "tapis-incurve", "ballon-leste", "sand-bag"], body: "complet", duration: 40, type: "HYBRID", level: "Moyen", desc: "<strong>AMRAP de 40 minutes:</strong> 1km de Rameur(row), 20 Fentes marchées avec sandbag(Lunges), 1km de Course à pied(run), 20 lancé de ballon lesté(wall-balls).",
      details: { format_label: "HYBRID — AMRAP 40 MINUTES", intro: "Enchaîner le circuit en effectuant un maximum de tours :", exercises: [
          { text: "1 km de Rameur" }, { text: "20 Fentes marchées avec SandBag" }, { text: "1 km de Course à pied" }, { text: "20 Lancés de ballon lesté contre un mur (wall-balls)" }
        ], conseil: "Pour les fentes et les wall-balls, adapter le poids en fonction du niveau et/ou de votre forme du jour.",
        chargeable: true,
        chargement: {
          type: "amrap",
          nom: "WOD HYBRID AMRAP40",
          duree_min: 40,
          exercices: [
            { text: "1 km de Rameur" }, { text: "20 Fentes marchées avec SandBag" }, { text: "1 km de Course à pied" }, { text: "20 Lancés de ballon lesté contre un mur (wall-balls)" }
          ]
        }
                
      }},
  
    { title: "WOD HYBRID 3 PYRAMIDES RUN", material: ["poids-corps", "tapis-incurve"], body: "complet", duration: 0, type: "HYBRID", level: "Moyen", desc: "<strong>FOR TIME 3 ROUNDS:</strong> 200m run + 10 burpees, 400m run + 15 air squats, 600m run + 20 sit-ups(abdos), 400m run + 15 air squats, 200m run + 10 burpees.",
      details: { format_label: "WOD HYBRID 3 PYRAMIDES RUN", intro: "Effectuer 3 tours :", exercises: [
          { text: "200m run + 10 burpees", image: "images/infosbulles/BURPEES1.png" }, { text: "400m run + 15 air squats" }, { text: "600m run + 20 sit-ups(abdos)" }, { text: "400m run + 15 air squats" }, { text: "200m run + 10 burpees", image: "images/infosbulles/BURPEES1.png" }, { text: "prendre 1 min à 2 minutes de récup au besoin entre 2 rounds" }
        ], conseil: "Pour les burpees, mieux vaut un rythme lent et faire les 10 répétitions sans coupure.",
        chargeable: true,
        chargement: {
          type: "fortime",
        nom: "WOD HYBRID 3 PYRAMIDES RUN",
        exercices: [
            { text: "<u>3 ROUNDS :</u>" },
            { text: "200m run + 10 burpees" }, { text: "400m run + 15 air squats" }, { text: "600m run + 20 sit-ups(abdos)" }, { text: "400m run + 15 air squats" }, { text: "200m run + 10 burpees" }, { text: "<em>prendre 1 min à 2 minutes de récup au besoin entre 2 rounds</em>" }
        ]
        }
      }},
  
      {
        title: "WOD HYBRID PETE",
        material: ["barre", "tapis-incurve"],
        body: "complet",
        duration: 53,
        type: "HYBRID",
        level: "Intense",
        desc: "3 AMRAP à enchaîner : <br>🔹course à pied(run), <br>🔹Squat (Back Squat), <br>🔹Développé Couché (bench press), <br>🔹Soulevé de terre (deadlift)",
        details: {
            format_label: "AMRAP : 3x12 minutes ",
            exercises: [
                { text: "AMRAP 1 : 400m course à pied(run) 🔄 12 reps Back Squats (barre sur les épaules)" },
                { text: "2 minutes de pause" },
                { text: "AMRAP 2 : 400m course à pied(run) 🔄 12 reps Développés couchés (Bench press)" },
                { text: "2 minutes de pause" },
                { text: "AMRAP 3 : 400m course à pied(run) 🔄 12 reps Soulevés de Terre (Deadlift)" }
            ],
            conseil: "Allure constante sur les runs. Pour la barre sur les 3 exercices, ne pas trop charger. En cas de doute, demander conseil ou faire des squats à vide, des pompes et des relevés de bassin au sol",
            chargeable: true,
            chargement: {
                type: "intervalles",
                nom: "WOD HYBRID PETE",
                blocs: [
                    { type: "warmup",  reps: 1,  hasTimer: true,  dur: 300, instr: "Echauffement de 10 min, course à pied et exercice de mobilité" },
                    { type: "travail", reps: 1, hasTimer: true,  dur: 720, instr: "<strong><u>AMRAP 1/3:</u></strong><br>400m course à pied(run) 🔄 12 reps Back Squats" },
                    { type: "repos",   reps: 1,  dur: 120,                   instr: "Récupération" },
                    { type: "travail", reps: 1, hasTimer: true,  dur: 720, instr: "<strong><u>AMRAP 2/3:</u></strong><br>400m course à pied(run) 🔄 12 reps Développés couchés" },
                    { type: "repos",   reps: 1,  dur: 120,                   instr: "Récupération" },
                    { type: "travail", reps: 1, hasTimer: true,  dur: 720, instr: "<strong><u>AMRAP 3/3:</u></strong><br>400m course à pied(run) 🔄 12 reps Soulevés de Terre" },
                    { type: "recup",   reps: 1,  hasTimer: true,  dur: 300 , instr: "Retour au calme — course lente ou marche et/ou étirements légers" }
                ]
            }
        }
    }, 
  
      {
        title: "WOD HYBRID TRIADE",
        material: ["barre", "tapis-incurve", "ski-erg", "rameur", "haltere", "trapbar", "machineguidee"],
        body: "complet",
        duration: 53,
        type: "HYBRID",
        level: "Intense",
        desc: "3 AMRAP à enchaîner : <br>🔹course à pied(run)🔄Deadlift ou presse à cuisse, <br>🔹Skierg🔄Développé Couché, <br>🔹Rameur🔄Traction ou Tirage poulie haute",
        details: {
            format_label: "AMRAP : 3x12 minutes ",
            exercises: [
                { text: "AMRAP 1 : 400m course à pied(run) 🔄 12 reps Trap Bar ou Presse à cuisse" },
                { text: "2 minutes de pause" },
                { text: "AMRAP 2 : 500m de Skierg 🔄 12 reps Développés couchés à la barre ou aux haltères" },
                { text: "2 minutes de pause" },
                { text: "AMRAP 3 : 500m de Rameur (Row) 🔄 12 reps Tractions (pull-ups) ou tirage à la poulie haute " }
            ],
            conseil: "Allure constante sur les runs. Ne pas trop charger pour les exercices de musculation. En cas de doute, demander conseil ou faire des squats à vide, des pompes et des relevés de bassin au sol(hiptrusts)",
            chargeable: true,
            chargement: {
                type: "intervalles",
                nom: "WOD HYBRID TRIADE",
                blocs: [
                    { type: "warmup",  reps: 1,  hasTimer: true,  dur: 300, instr: "Echauffement de 10 min, vélo ou course à pied et exercice de mobilité" },
                    { type: "travail", reps: 1, hasTimer: true,  dur: 720, instr: "<strong><u>AMRAP 1/3:</u></strong><br>🏃400m course à pied(run) <br>🔄 <br>12 reps Trap Bar ou Presse à cuisse" },
                    { type: "repos",   reps: 1,  dur: 120,                   instr: "Récupération" },
                    { type: "travail", reps: 1, hasTimer: true,  dur: 720, instr: "<strong><u>AMRAP 2/3:</u></strong><br>⛷️500m de Skierg <br>🔄 <br>12 reps Développés couchés à la barre ou aux haltères" },
                    { type: "repos",   reps: 1,  dur: 120,                   instr: "Récupération" },
                    { type: "travail", reps: 1, hasTimer: true,  dur: 720, instr: "<strong><u>AMRAP 3/3:</u></strong><br>🚣500m de Rameur <br>🔄 <br>12 reps Tractions (pull-ups) ou tirage à la poulie haute" },
                    { type: "recup",   reps: 1,  hasTimer: true,  dur: 300 , instr: "Retour au calme — course lente ou marche et/ou étirements légers" }
                ]
            }
        }
    }, 
  
  
    { title: "WOD P'F''T", material: ["poids-corps", "tapis-incurve", "rameur", "ballon-leste"], body: "complet", duration: 0, type: "HYBRID", level: "Intense", desc: "<strong>FOR TIME:</strong> 1000m de course à pied, 50 Burpees Broad Jumps, 100 fentes stationnaires, 1000m de rameur, 30 pompes relâchement des mains (push-ups hand release), 100 Wallballs (6 kg pour les hommes / 4 kg pour les femmes).",
      details: { format_label: "WOD P'F''T", intro: "FOR TIME :", exercises: [
          { text: "1000m de course à pied" }, { text: "50 Burpees Broad Jumps" }, { text: "100 fentes" }, { text: "1000m de rameur" }, { text: "30 pompes relâchement des mains (push-ups hand release)" }, { text: "100 Wallballs (6 kg/4 kg)" }
        ], conseil: "Vous pouvez remplacer les burpees broad jump par de simples burpees. <br>Permet de connaître son niveau HYROX : <br>15 – 25 minutes : Hyrox PRO<br>25 – 35 minutes : Hyrox Open<br>30 – 40 minutes : Hyrox Doubles<br>35 – 45 minutes : Hyrox Relais",
        chargeable: true,
        chargement: {
          type: "fortime",
        nom: "WOD P'F''T",
        exercices: [
            { text: "1000m de course à pied" }, { text: "50 Burpees Broad Jumps" }, { text: "100 fentes" }, { text: "1000m de rameur" }, { text: "30 pompes relâchement des mains (push-ups hand release)" }, { text: "100 Wallballs (6 kg/4 kg)" }
        ]
        }
      }},

    {
        title: "Séance Pompes",
        material: ["poids-corps"],
        body: "haut",
        duration: 0,
        type: "MUSCU",
        level: "Facile",
        desc: "Programme progressif pour améliorer son nombre maximum de répétitions en pompes.",
        details: {
            format_label: "PROGRAMME POMPES PROGRESSIF",
            exercises: [
                { text: "1️⃣ Faire son maximum de pompes en une série", image: "images/infosbulles/POMPES1.png" },
                { text: "2️⃣ Diviser ce résultat par 2 → c'est votre nombre de reps par série" },
                { text: "3️⃣ Réaliser 5 séries de (max ÷ 2) avec 1min30 à 2min de repos entre chaque" },
                { text: "4️⃣ Répéter 1 à 2 fois par jour" }
            ],
            intro: "La formule est simple :",
            exemple: {
                titre: "Exemple concret",
                texte: "Votre max est 26 pompes → vous faites 5 × 13. Pour progresser, ajoutez 1 rep sur la 1ère série d'abord, puis les suivantes progressivement :",
                series: ["13 13 13 13 13", "14 13 13 13 13", "14 14 13 13 13", "14 14 14 13 13", "…"]
            },
            gainage: [
                { text: "🧱 Gainage en appui sur les coudes" },
                { text: "🧱 Gainage en appui sur les mains" },
                { text: "🧱 Gainage de côté (gauche et droit)" },
                { text: "🧱 Gainage commando" }
            ],
            conseil: "Utiliser la fonction 'Charger dans Ma Séance' pour avoir un suivi et travailler sa progression : <br>▪️Bascule automatiquement dans l'onglet Ma Séance|MUSCU|PREPARER <br>▪️Entrer pour les 5 séries le nombre de reps en fonction de son maximum, ajuster la récupération entre chaque série <br>▪️Cliquer sur le bouton 'LANCER LA SEANCE' <br>▪️Faire ses 5 séries de pompes, noter le nombre de répétitions <br>▪️En fin de séance, cliquer sur 'Terminer la séance' pour enregistrer ses résultats <br>▪️Pour les séances suivantes, utiliser le calendrier 'MUSCU | SUIVI | PROGRESSION' en bas de l'onglet 'Ma Séance|MUSCU|PREPARER' pour recharger sa dernière séance et progresser  <br>Rien ne vous empêche d'ajouter des reps sur les genoux. Le gainage statique ou dynamique peut vous aider à vous tonifier en complément.",
            chargeable: true,
            chargement: {
                type: "muscu",
                nom: "PROGRAMME POMPES PROGRESSIF",
                recupSerie: 90,
                recupBloc: 5,
                blocs: [
                    {
                        type: "solo",
                        exos: [
                            {
                                nom: "Pompe",
                                series: [
                                    { reps: 10, poids: 0 },
                                    { reps: 10, poids: 0 },
                                    { reps: 10, poids: 0 },
                                    { reps: 10, poids: 0 },
                                    { reps: 10, poids: 0 }
                                ]
                            }
                        ]
                    },
                 ]
            }
        }
    },

    { title: "RENFO Haut & Postérieur", material: ["barre"], body: "complet", duration: 0, type: "MUSCU", level: "Moyen", desc: "5 rounds : 10 Deadlifts (soulevé de terre), 10 Bench Press (développé couché).",
      details: { format_label: "MUSCU / RENFORCEMENT", intro: "Réaliser 5 séries de ces 2 exercices (superset) :", exercises: [
          { text: "10 Soulevés de terre (Deadlift → renforcement chaîne postérieure)" }, { text: "10 Développés couchés (Bench Press → renforcement pectoraux, triceps, avant de l'épaule)" }
        ], conseil: "Entraînement barre libre — adapter la charge à votre niveau. Demander conseils si vous débutez sur ces mouvements.",
        chargeable: true,
        chargement: {
        type: "fortime",
        nom: "RENFO Haut & Postérieur",
        exercices: [
            { text: "<u>5 ROUNDS :</u>" },
            { text: "10 Soulevés de terre" }, { text: "10 Développés couchés" }
        ]
        }     
        }},

    { title: "WOD 300", material: ["barre", "haltere", "box-jump", "traction"], body: "complet", duration: 0, type: "MUSCU", level: "Intense", desc: "<strong>l'entrainement spartiate :</strong> 25 Tractions, 50 Deadlifts(soulevé de terre), 50 Pompes(push-ups), 50 Box jumps, 50 relevés de jambes avec barre, 50 Arrachés épaules à 1 bras(25-25), 25 Tractions.",
      details: { format_label: "FOR TIME — L'ENTRAÎNEMENT SPARTIATE", exercises: [
          { text: "25 Tractions (pull-ups)" }, { text: "50 Soulevé de terre 60 kg (deadlift)" }, { text: "50 Pompes (push-ups)", image: "images/infosbulles/POMPES1.png" }, { text: "50 Sauts box jump" }, { text: "50 Relevés de jambes avec barre 60 kg" }, { text: "50 Arrachés épaules 1 bras (25-25) — haltère 16 kg" }, { text: "25 Tractions (pull-ups)" }
        ], scaled: { intro: "VERSION SCALED :", exercises: [
          { text: "Adapter les poids à son niveau" }, { text: "Pompes sur les genoux ou inclinées" }, { text: "Tractions australiennes ou TRX" }
        ]}, conseil: "relevés de jambes avec barre : placer au sol sur le dos, tenir la barre olympique chargée bras tendus. Jambes tendues et jointes : position 1- la pointe de pieds touchent les disques de droite;position 2- les talons touchent le sol; position 3-les pointes de pied touchent les disques de gauche (on alterne donc 1 – 2 – 3 – 2 – 1 – 2 …)",
        chargeable: true,
        chargement: {
        type: "fortime",
        nom: "WOD 300",
        exercices: [
            { text: "25 Tractions (pull-ups)" }, { text: "50 Soulevé de terre 60 kg (deadlift)" }, { text: "50 Pompes (push-ups)" }, { text: "50 Sauts box jump" }, { text: "50 Relevés de jambes avec barre 60 kg" }, { text: "50 Arrachés épaules 1 bras (25-25) — haltère 16 kg" }, { text: "25 Tractions (pull-ups)" }
        ]
        }     
          }},

    { title: "RENFO 10TOURS/3EXOS", material: ["poids-corps"], body: "complet", duration: 0, type: "MUSCU", level: "Facile", desc: "10 Squats, 5 Pompes(push-ups), 10 Sit-ups(abdos).",
      details: { format_label: "RENFO — 10 TOURS", intro: "Enchaîner les 10 tours :", exercises: [
          { text: "10 Squats" }, { text: "5 Pompes", image: "images/infosbulles/POMPES1.png" }, { text: "10 Sit-ups (abdos)" }, { text: "30 sec à 1 min de repos entre les tours" }
        ], scaled: { intro: "VERSION SCALED :", exercises: [
          { text: "Pompes inclinées ou sur les genoux" }, { text: "Remplacer les sit-ups par des crunches" }
        ]}, conseil: "-",
        chargeable: true,
        chargement: {
        type: "fortime",
        nom: "RENFO 10TOURS/3EXOS",
        exercices: [
            { text: "<u>10 ROUNDS :</u>" },
            { text: "10 Squats" }, { text: "5 Pompes" }, { text: "10 Sit-ups (abdos)" }, { text: "30 sec à 1 min de repos entre les tours" }
        ]
        }       
        }},

    { title: "RENFO 5TOURS/3EXOS", material: ["station-dips"], body: "complet", duration: 0, type: "MUSCU", level: "Facile", desc: "20 Squats, 10 Dips, 1 min de gainage(abdos).",
      details: { format_label: "RENFO — 5 TOURS", intro: "Enchaîner les 5 tours :", exercises: [
          { text: "20 Squats" }, { text: "10 Dips" }, { text: "1 minute de gainage" }, { text: "1 minute de repos" }
        ], conseil: "Alterner le type de gainage (latéral, dynamique, appui main, appui coude). Dips : sur station ou entre 2 bancs.",
        chargeable: true,
        chargement: {
        type: "fortime",
        nom: "RENFO 5TOURS/3EXOS",
        exercices: [
            { text: "<u>5 ROUNDS :</u>" },
            { text: "20 Squats" }, { text: "10 Dips" }, { text: "1 minute de gainage" }, { text: "1 minute de repos" }
        ]
        }        
        }},
  
  { title: "Séance Stabilité bas du corps", material: ["elastique"], body: "bas", duration: 12, type: "MUSCU", level: "Moyen", desc: "améliorer sa stabilité en 12 minutes",
      details: { format_label: "RENFO STABILITÉ BAS DU CORPS", exercises: [
          { text: "tripode (pieds nus) : 2 minutes" }, { text: "Split squat isomètrique : 45 secondes — 2 fois par jambe" }, { text: "Pallof Press statique : 2x2min" }, { text: "Monster walk : 3 minutes" }
        ], conseil: "-",
        chargeable: true,
                  chargement: {
                  type: "surmesure",
                  nom: "Séance Stabilité bas du corps 12 minutes",
                  repeat: 0,
                  phases: [
                    { type: "travail", sec: 120, text: "tripode (pieds nus)" },
                    { type: "travail", sec: 45, text: "Split squat jambe droite devant" },
                    { type: "travail", sec: 45, text: "Split squat jambe gauche devant" },
                    { type: "travail", sec: 45, text: "Split squat jambe droite devant" },
                    { type: "travail", sec: 45, text: "Split squat jambe gauche devant" },
                    { type: "travail", sec: 120, text: "Pallof press statitique droite" },
                    { type: "travail", sec: 120, text: "Pallof press statitique gauche" },
                    { type: "travail", sec: 120, text: "Monster walk à l'élastique" }
                    
                  ]
                  }       
        }},
  

  
  // ══════════════════════════════════════════════════════════
    // SÉANCES MUSCU 
    // ══════════════════════════════════════════════════════════
  
     {
        title: "💥Pectoraux | Biceps | Epaules",
        material: ["barre","haltere","elastique","machineguidee","jammer"],
        body: "haut",
        duration: 0,
        type: "MUSCU",
        level: "Moyen",
        desc: "Séance pectoraux biceps : Développé couché, SUPERSET Curl à la barre/Chest Press Jammer Arm, SUPERSET Curl incliné/Chest fly avec élastique (point d'accroche bas), TRISET Oiseau aux haltères/Elévations latèrale aux haltères/Abdos obliques.",
        details: {
            format_label: "MUSCU",
            exercises: [
                { text: "Développé couché — 5 ×10 à 12 reps" },
                { text: "SUPERSET Curl à la barre EZ/Chest Press Jammer Arm — 3×10/15 reps" },
                { text: "SUPERSET Curl incliné/Chest fly avec élastique — 3×10/15 reps" },
                { text: "TRISET Oiseau aux haltères/Elévations latèrale aux haltères/Abdos obliques — 4×15/20 reps" }
            ],
            conseil: "10 minutes d'échauffement avec montée en gamme sur le développé couché. La séance avec échauffement dure environ 1 heure. Adapter les poids à son niveau.",
            chargeable: true,
            chargement: {
                type: "muscu",
                nom: "💥Pectoraux / Biceps / Epaules | SÉANCE MUSCU",
                recupSerie: 90,
                recupBloc: 120,
                blocs: [
                    {
                        type: "solo",
                        exos: [
                            {
                                nom: "Développé couché",
                                series: [
                                    { reps: 10, poids: 50 },
                                    { reps: 6, poids: 70 },
                                    { reps: 7, poids: 70 },
                                    { reps: 12, poids: 60 },
                                    { reps: 11, poids: 60 }
                                ]
                            }
                        ]
                    },
                    {
                        type: "superset",
                        exos: [
                            {
                                nom: "Curl à la barre EZ",
                                series: [
                                    { reps: 15, poids: 31 },
                                    { reps: 15, poids: 31 },
                                    { reps: 15, poids: 31 },
                                    { reps: 15, poids: 31 }
                                ]
                            },
                            {
                                nom: "Chest Press Jammer Arm",
                                series: [
                                    { reps: 15, poids: 40 },
                                    { reps: 15, poids: 40 },
                                    { reps: 15, poids: 40 },
                                    { reps: 10, poids: 40 }
                                ]
                            }
                        ]
                    },
                    {
                        type: "superset",
                        exos: [
                            {
                                nom: "Curl incliné",
                                series: [
                                    { reps: 14, poids: 10 },
                                    { reps: 14, poids: 10 },
                                    { reps: 14, poids: 10 }
                                ]
                            },
                            {
                                nom: "Chest fly avec élastique",
                                series: [
                                    { reps: 10, poids: 0 },
                                    { reps: 10, poids: 0 },
                                    { reps: 10, poids: 0 }
                                ]
                            }
                        ]
                    },
                    {
                        type: "triset",
                        exos: [
                            {
                                nom: "Oiseau avec haltères",
                                series: [
                                    { reps: 12, poids: 8 },
                                    { reps: 12, poids: 8 },
                                    { reps: 15, poids: 8 },
                                    { reps: 12, poids: 8 }
                                ]
                            },
                            {
                                nom: "Élévation latérale avec haltères",
                                series: [
                                    { reps: 12, poids: 8 },
                                    { reps: 12, poids: 8 },
                                    { reps: 15, poids: 8 },
                                    { reps: 12, poids: 8 }
                                ]
                            },
                            {
                                nom: "Obliques suspendu à la barre",
                                series: [
                                    { reps: 20, poids: 0 },
                                    { reps: 30, poids: 0 },
                                    { reps: 30, poids: 0 },
                                    { reps: 30, poids: 0 }
                                ]
                            }
                        ]
                    },
                ]
            }
        }
    },
  
    {
        title: "💥Dos | Triceps | Epaules",
        material: ["traction","barre","haltere","elastique","machineguidee", "jammer"],
        body: "haut",
        duration: 0,
        type: "MUSCU",
        level: "Moyen",
        desc: "Séance dos triceps : Traction, TRISET Barre au front/Rowing buste penché jammer arms/Shrug jammer arms, SUPERSET Rowing poulie basse/Dips, Landmine Press à un bras",
        details: {
            format_label: "MUSCU",
            exercises: [
                { text: "Tractions (lestées) — 5 ×10 à 12 reps" },
                { text: "TRISET Barre au front/Rowing buste penché jammer arms/Shrug jammer arms — 3×10/15 reps" },
                { text: "SUPERSET Rowing horizontal poulie basse/Dips — 3×15/20 reps" },
                { text: "Landmine Press à un bras — 4 ×10 à 12 reps" },
            ],
            conseil: "10 minutes d'échauffement avec montée en gamme sur les tractions (tractions élastiques, échauffement rotateurs épaules. La séance avec échauffement dure environ 1 heure. Adapter les poids à son niveau.",
            chargeable: true,
            chargement: {
                type: "muscu",
                nom: "💥Dos / Triceps | SÉANCE MUSCU",
                recupSerie: 90,
                recupBloc: 120,
                blocs: [
                    {
                        type: "solo",
                        exos: [
                            {
                                nom: "Traction - Traction lestée",
                                series: [
                                    { reps: 10, poids: 0 },
                                    { reps: 10, poids: 6 },
                                    { reps: 10, poids: 6 },
                                    { reps: 10, poids: 6 },
                                    { reps: 13, poids: 0 }
                                ]
                            }
                        ]
                    },
                    {
                        type: "triset",
                        exos: [
                            {
                                nom: "Barre au front",
                                series: [
                                    { reps: 15, poids: 33 },
                                    { reps: 15, poids: 33 },
                                    { reps: 15, poids: 33 }
                                ]
                            },
                            {
                                nom: "Rowing buste penché jammer arms",
                                series: [
                                    { reps: 12, poids: 52 },
                                    { reps: 12, poids: 52 },
                                    { reps: 12, poids: 52 }
                                ]
                            },
                            {
                                nom: "Shrug jammer arms",
                                series: [
                                    { reps: 12, poids: 52 },
                                    { reps: 12, poids: 52 },
                                    { reps: 12, poids: 52 }
                                ]
                            },
                        ]
                    },
                    {
                        type: "superset",
                        exos: [
                            {
                                nom: "Rowing horizontal poulie basse",
                                series: [
                                    { reps: 15, poids: 52 },
                                    { reps: 15, poids: 52 },
                                    { reps: 15, poids: 52 },
                                    { reps: 15, poids: 52 }
                                ]
                            },
                            {
                                nom: "Dips",
                                series: [
                                    { reps: 20, poids: 0 },
                                    { reps: 20, poids: 0 },
                                    { reps: 20, poids: 0 },
                                    { reps: 20, poids: 0 }
                                ]
                            }
                        ]
                    },
                    {
                        type: "solo",
                        exos: [
                            {
                                nom: "Landmine Press à un bras",
                                series: [
                                    { reps: 12, poids: 20 },
                                    { reps: 10, poids: 25 },
                                    { reps: 10, poids: 25 },
                                    { reps: 10, poids: 25 }
                                ]
                            }
                        ]
                    },
                ]
            }
        }
    },
  
    {
        title: "💥Jambes | Abdos",
        material: ["jammer","barre","haltere","machineguidee","landmine"],
        body: "bas",
        duration: 0,
        type: "MUSCU",
        level: "Moyen",
        desc: "Séance Jambes : Fentes, Landmine squat, Soulevé de terre jambes tendues, Goblet squat haltère talons surélevés, Extension Mollets debout, Sit-ups lestés ",
        details: {
            format_label: "MUSCU",
            exercises: [
                { text: "Fentes jammer arms — 4 × 08 à 12 reps" },
                { text: "Landmine squat — 3×10/15 reps" },
                { text: "Soulevé de terre à la barre jambes tendues — 3×10/15 reps" },
                { text: "Goblet squat haltère talons surélevés — 3×15/20 reps" },
                { text: "Extension Mollets debout avec Landmine — 4×15/20 reps" },
                { text: "Sit-ups lestés — 4×15/20 reps" }
            ],
            conseil: "10 minutes d'échauffement Squats et fentes au poids de corps. Mobilité : maintien squat position basse, rotation du torse, enroulement de colonne... Adapter les poids à son niveau.",
            chargeable: true,
            chargement: {
                type: "muscu",
                nom: "💥Jambes | SÉANCE MUSCU",
                recupSerie: 90,
                recupBloc: 120,
                blocs: [
                    {
                        type: "solo",
                        exos: [
                            {
                                nom: "Fentes jammer arms (poids sur les 2 jammers arms)",
                                series: [
                                    { reps: 9, poids: 64 },
                                    { reps: 10, poids: 62 },
                                    { reps: 10, poids: 60 },
                                    { reps: 10, poids: 60 },
                                    { reps: 10, poids: 60 }
                                ]
                            }
                        ]
                    },
                    {
                        type: "solo",
                        exos: [
                            {
                                nom: "Landmine squat",
                                series: [
                                    { reps: 20, poids: 25 },
                                    { reps: 15, poids: 30 },
                                    { reps: 15, poids: 35 },
                                 ]
                            }
                        ]
                    },
                    {
                        type: "solo",
                        exos: [
                            {
                                nom: "Soulevé de terre à la barre jambes tendues",
                                series: [
                                    { reps: 15, poids: 46 },
                                    { reps: 16, poids: 46 },
                                    { reps: 16, poids: 46 },
                                 ]
                            }
                        ]
                    },
                    {
                        type: "solo",
                        exos: [
                            {
                                nom: "Goblet squat haltère talons surélevés",
                                series: [
                                    { reps: 15, poids: 28 },
                                    { reps: 16, poids: 28 },
                                    { reps: 16, poids: 28 },
                                 ]
                            }
                        ]
                    },
                    {
                        type: "solo",
                        exos: [
                            {
                                nom: "Extension Mollets debout avec Landmine",
                                series: [
                                    { reps: 15, poids: 25 },
                                    { reps: 15, poids: 25 },
                                    { reps: 15, poids: 25 },
                                    { reps: 16, poids: 25 },
                                 ]
                            }
                        ]
                    },
                    {
                        type: "solo",
                        exos: [
                            {
                                nom: "Situp",
                                series: [
                                    { reps: 15, poids: 10 },
                                    { reps: 15, poids: 10 },
                                    { reps: 15, poids: 10 },
                                    { reps: 15, poids: 10 }
                                 ]
                            }
                        ]
                    },
                ]
            }
        }
    },
  
    {
        title: "💥Épaules / Abdominaux",
        material: ["traction","barre","haltere","elastique","machineguidee", "jammer"],
        body: "haut",
        duration: 0,
        type: "MUSCU",
        level: "Moyen",
        desc: "Séance dos triceps : TRISET Landmine press à un bras/Situp/Obliques suspendu à la barre, BISET Oiseau avec haltères/Élévation latérale avec haltères",
        details: {
            format_label: "MUSCU",
            exercises: [
                { text: "TRISET Landmine press à un bras/Situp/Obliques suspendu à la barre" },
                { text: "BISET Oiseau avec haltères/Élévation latérale avec haltères — 3×10/15 reps" }                
            ],
            conseil: "10 minutes d'échauffement avec échauffement des rotateurs d'épaules. Adapter les poids à son niveau.",
            chargeable: true,
            chargement: {
                type: "muscu",
                nom: "💥Épaules / Abdominaux | SÉANCE MUSCU",
                recupSerie: 90,
                recupBloc: 120,
                blocs: [
                    {
                        type: "triset",
                        exos: [
                            {
                                nom: "Landmine press à un bras",
                                series: [
                                    { reps: 12, poids: 15 },
                                    { reps: 10, poids: 20 },
                                    { reps: 12, poids: 20 },
                                    { reps: 16, poids: 20 },
                                    { reps: 10, poids: 25 }
                                ]
                            },
                            {
                                nom: "Situp",
                                series: [
                                    { reps: 15, poids: 5 },
                                    { reps: 20, poids: 5 },
                                    { reps: 20, poids: 5 },
                                    { reps: 20, poids: 5 },
                                    { reps: 20, poids: 5 }
                                ]
                            },
                            {
                                nom: "Obliques suspendu à la barre",
                                series: [
                                    { reps: 20, poids: 0 },
                                    { reps: 26, poids: 0 },
                                    { reps: 26, poids: 0 },
                                    { reps: 26, poids: 0 },
                                    { reps: 26, poids: 0 }
                                ]
                            },
                        ]
                    },
                    {
                        type: "triset",
                        exos: [
                            {
                                nom: "Oiseau avec haltères",
                                series: [
                                    { reps: 12, poids: 8 },
                                    { reps: 12, poids: 8 },
                                    { reps: 12, poids: 8 }
                                ]
                            },
                            {
                                nom: "Élévation latérale avec haltères",
                                series: [
                                    { reps: 12, poids: 8 },
                                    { reps: 12, poids: 8 },
                                    { reps: 12, poids: 8 }
                                ]
                            },
                            {
                                nom: "Deadlift jambes tendues à l'élastique (focus lombaire)",
                                series: [
                                    { reps: 12, poids: 0 },
                                    { reps: 12, poids: 0 },
                                    { reps: 12, poids: 0 }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    },
  
   // ══════════════════════════════════════════════════════════
    // PLANIFICATION 3 JOURS — SIMILI FULL BODY HOME
    // ══════════════════════════════════════════════════════════
       {
        title: "💪Pectoraux | Jambes | Dos | Epaules/Biceps",
        material: ["barre","haltere","elastique","machineguidee","jammer"],
        body: "complet",
        duration: 0,
        type: "MUSCU",
        level: "Moyen",
        desc: "Séance ① ➡️ Mouvement principal : Développé couché | Soulevé de terre jambes tendues | Rowing horizontal poulie basse | Épaules/Biceps (Superset) ",
        details: {
            format_label: "MUSCU",
            exercises: [
                { text: "Développé couché — 5 ×10 à 12 reps" },
                { text: "Soulevé de terre jambes tendues — 3×10/15 reps" },
                { text: "Rowing horizontal poulie basse — 3×10/15 reps" },
                { text: "TRISET Oiseau aux haltères/Elévations latèrale aux haltères/Curls inclinés — 3×15/20 reps" }
            ],
            conseil: "10 minutes d'échauffement avec montée en gamme sur le développé couché. La séance avec échauffement dure environ 1 heure. Adapter les poids à son niveau.",
            chargeable: true,
            chargement: {
                type: "muscu",
                nom: "💪Pectoraux - Jambes - Dos - Epaules/Biceps | SÉANCE MUSCU",
                recupSerie: 90,
                recupBloc: 120,
                blocs: [
                    {
                        type: "solo",
                        exos: [
                            {
                                nom: "Développé couché",
                                series: [
                                    { reps: 10, poids: 50 },
                                    { reps: 6, poids: 70 },
                                    { reps: 7, poids: 70 },
                                    { reps: 12, poids: 60 },
                                    { reps: 11, poids: 60 }
                                ]
                            }
                        ]
                    },
                    {
                        type: "solo",
                        exos: [
                            {
                                nom: "Soulevé de terre à la barre jambes tendues",
                                series: [
                                    { reps: 15, poids: 48 },
                                    { reps: 15, poids: 48 },
                                    { reps: 15, poids: 48 }
                                ]
                            }
                        ]
                    },
                    {
                        type: "solo",
                        exos: [
                            {
                                nom: "Rowing horizontal poulie basse",
                                series: [
                                    { reps: 15, poids: 48 },
                                    { reps: 15, poids: 48 },
                                    { reps: 15, poids: 48 }
                                ]
                            }
                        ]
                    },
                    {
                        type: "triset",
                        exos: [
                            {
                                nom: "Oiseau avec haltères",
                                series: [
                                    { reps: 12, poids: 8 },
                                    { reps: 12, poids: 8 },
                                    { reps: 15, poids: 8 },
                                    { reps: 12, poids: 8 }
                                ]
                            },
                            {
                                nom: "Élévation latérale avec haltères",
                                series: [
                                    { reps: 12, poids: 8 },
                                    { reps: 12, poids: 8 },
                                    { reps: 15, poids: 8 },
                                    { reps: 12, poids: 8 }
                                ]
                            },
                            {
                                nom: "Curl incliné",
                                series: [
                                    { reps: 15, poids: 10 },
                                    { reps: 15, poids: 10 },
                                    { reps: 15, poids: 10 },
                                    { reps: 15, poids: 10 }
                                ]
                            }
                        ]
                    },
                ]
            }
        }
    },
  
    {
        title: "💪Dos | Pectoraux | Jambes | Triceps/Abdos",
        material: ["barre","haltere","elastique","machineguidee","jammer"],
        body: "complet",
        duration: 0,
        type: "MUSCU",
        level: "Moyen",
        desc: "Séance ② ➡️ Mouvement principal : Tractions | Chest Press Jammer Arm | Goblet squat | Extension triceps poulie haute/Sit-ups(Superset) ",
        details: {
            format_label: "MUSCU",
            exercises: [
                { text: "Tractions(lestées) — 5 ×10 à 12 reps" },
                { text: "Chest Press Jammer Arm — 3×12/15 reps" },
                { text: "Goblet squat — 3×12/15 reps" },
                { text: "SUPERSET Extension triceps poulie haute/Sit-up — 3×15/20 reps" }
            ],
            conseil: "10 minutes d'échauffement complet avec montée en gamme sur les tractions. La séance avec échauffement dure environ 1 heure. Adapter les poids à son niveau.",
            chargeable: true,
            chargement: {
                type: "muscu",
                nom: "💪Dos | Pectoraux | Jambes | Triceps/Abdos",
                recupSerie: 90,
                recupBloc: 120,
                blocs: [
                    {
                        type: "solo",
                        exos: [
                            {
                                nom: "Traction - Traction lestée",
                                series: [
                                    { reps: 10, poids: 0 },
                                    { reps: 10, poids: 6 },
                                    { reps: 10, poids: 6 },
                                    { reps: 10, poids: 6 },
                                    { reps: 10, poids: 6 }
                                ]
                            }
                        ]
                    },
                    {
                        type: "solo",
                        exos: [
                            {
                                nom: "Chest Press Jammer Arm",
                                series: [
                                    { reps: 15, poids: 41 },
                                    { reps: 15, poids: 41 },
                                    { reps: 15, poids: 41 }
                                ]
                            }
                        ]
                    },
                    {
                        type: "solo",
                        exos: [
                            {
                                nom: "Goblet squat haltère talons surélevés",
                                series: [
                                    { reps: 15, poids: 38 },
                                    { reps: 15, poids: 38 },
                                    { reps: 15, poids: 38 }
                                ]
                            }
                        ]
                    },
                    {
                        type: "superset",
                        exos: [
                            {
                                nom: "Extension triceps poulie haute",
                                series: [
                                    { reps: 10, poids: 0 },
                                    { reps: 10, poids: 0 },
                                    { reps: 10, poids: 0 },
                                    { reps: 10, poids: 0 }
                                ]
                            },
                            {
                                nom: "Situp",
                                series: [
                                    { reps: 15, poids: 10 },
                                    { reps: 15, poids: 10 },
                                    { reps: 15, poids: 10 },
                                    { reps: 15, poids: 10 }
                                ]
                            }
                        ]
                    },
                ]
            }
        }
    },
  
    {
        title: "💪Jambes | Dos | Epaules | Mollets/Abdos",
        material: ["barre","haltere","elastique","machineguidee","jammer"],
        body: "complet",
        duration: 0,
        type: "MUSCU",
        level: "Moyen",
        desc: "Séance ③ ➡️ Mouvement principal : Fentes Jammer Arms | Rowing buste penché Jammer Arm + Shrugs Jammer Arm | Landmine Press | Extension mollets debout/Abdo obliques(Superset) ",
        details: {
            format_label: "MUSCU",
            exercises: [
                { text: "Fentes jammer arms (poids sur les 2 jammers arms) — 5 ×10 à 12 reps" },
                { text: "SUPERSET Rowing buste penché Jammer Arm + Shrugs Jammer Arm — 3×12/15 reps" },
                { text: "Landmine press à un bras — 4×12/15 reps" },
                { text: "SUPERSET Extension Mollets debout avec Landmine/Obliques suspendu à la barre — 3×15/20 reps" }
            ],
            conseil: "10 minutes d'échauffement complet avec montée en gamme sur les tractions. La séance avec échauffement dure environ 1 heure. Adapter les poids à son niveau.",
            chargeable: true,
            chargement: {
                type: "muscu",
                nom: "💪Dos | Pectoraux | Jambes | Triceps/Abdos",
                recupSerie: 90,
                recupBloc: 120,
                blocs: [
                    {
                        type: "solo",
                        exos: [
                            {
                                nom: "Traction - Traction lestée",
                                series: [
                                    { reps: 10, poids: 0 },
                                    { reps: 10, poids: 6 },
                                    { reps: 10, poids: 6 },
                                    { reps: 10, poids: 6 },
                                    { reps: 10, poids: 6 }
                                ]
                            }
                        ]
                    },
                    {
                        type: "superset",
                        exos: [
                            {
                                nom: "Rowing buste penché jammer arms",
                                series: [
                                    { reps: 12, poids: 41 },
                                    { reps: 12, poids: 41 },
                                    { reps: 12, poids: 41 }
                                ]
                            },
                            {
                                nom: "Shrug jammer arms",
                                series: [
                                    { reps: 12, poids: 41 },
                                    { reps: 12, poids: 41 },
                                    { reps: 12, poids: 41 }
                                ]
                            }
                        ]
                    },
                    {
                        type: "solo",
                        exos: [
                            {
                                nom: "Landmine press à un bras",
                                series: [
                                    { reps: 15, poids: 20 },
                                    { reps: 15, poids: 25 },
                                    { reps: 15, poids: 25 },
                                    { reps: 15, poids: 25 }
                                ]
                            }
                        ]
                    },
                    {
                        type: "superset",
                        exos: [
                            {
                                nom: "Extension Mollets debout avec Landmine",
                                series: [
                                    { reps: 12, poids: 25 },
                                    { reps: 12, poids: 25 },
                                    { reps: 12, poids: 25 }
                                ]
                            },
                            {
                                nom: "Obliques suspendu à la barre",
                                series: [
                                    { reps: 20, poids: 4 },
                                    { reps: 20, poids: 4 },
                                    { reps: 20, poids: 4 }
                                ]
                            }
                        ]
                    },
                    
                ]
            }
        }
    },
  
  
  
    // ══════════════════════════════════════════════════════════
    // PLANIFICATION 5 JOURS — SPLIT MUSCULAIRE
    // ══════════════════════════════════════════════════════════

    {
        title: "⚡SPLIT 5J — Jour 1 : Pectoraux / Triceps (Push Day)",
        material: ["barre", "haltere", "station-dips"],
        body: "haut",
        duration: 60,
        type: "MUSCU",
        level: "Moyen",
        desc: "<strong>Planification 5 jours — Jour 1/5.</strong> Séance poussée : développé couché, écarté, dips, extensions triceps. 4 exercices, 3-4 séries.",
        details: {
            format_label: "SPLIT 5 JOURS — PECTORAUX / TRICEPS",
            intro: "📅 Programme SPLIT 5 jours — J1 : Pectoraux / Triceps | J2 : Dos / Biceps | J3 : Épaules | J4 : Jambes | J5 : Bras / Abdos",
            exercises: [
                { text: "Développé couché (Bench press) — 4×8-10 reps" },
                { text: "Écarté haltères couché (Dumbbell fly) — 3×12 reps" },
                { text: "Développé couché prise serrée (Close-grip bench press) — 3×10 reps" },
                { text: "Dips — 3×10-12 reps" },
                { text: "Extension triceps à la poulie haute (Triceps pushdown) — 3×15 reps" }
            ],
            conseil: "Récupération 90 sec entre séries, 2 min entre exercices. Échauffement : 10 min cardio léger + rotations épaules + 2 séries légères de développé couché.",
            chargeable: true,
            chargement: {
                type: "muscu",
                nom: "SPLIT 5J — J1 : Pectoraux / Triceps",
                recupSerie: 90,
                recupBloc: 120,
                blocs: [
                    {
                        type: "solo",
                        exos: [{
                            nom: "Développé couché (Bench press)",
                            series: [
                                { reps: 10, poids: 40 },
                                { reps: 10, poids: 50 },
                                { reps: 8,  poids: 60 },
                                { reps: 8,  poids: 60 }
                            ]
                        }]
                    },
                    {
                        type: "solo",
                        exos: [{
                            nom: "Écarté haltères couché (Dumbbell fly)",
                            series: [
                                { reps: 12, poids: 12 },
                                { reps: 12, poids: 14 },
                                { reps: 12, poids: 14 }
                            ]
                        }]
                    },
                    {
                        type: "biset",
                        exos: [
                            {
                                nom: "Développé couché prise serrée (Close-grip bench press)",
                                series: [
                                    { reps: 10, poids: 40 },
                                    { reps: 10, poids: 45 },
                                    { reps: 10, poids: 45 }
                                ]
                            },
                            {
                                nom: "Dips",
                                series: [
                                    { reps: 12, poids: 0 },
                                    { reps: 10, poids: 0 },
                                    { reps: 10, poids: 0 }
                                ]
                            }
                        ]
                    },
                    {
                        type: "solo",
                        exos: [{
                            nom: "Extension triceps à la poulie haute (Triceps pushdown)",
                            series: [
                                { reps: 15, poids: 15 },
                                { reps: 15, poids: 15 },
                                { reps: 15, poids: 17 }
                            ]
                        }]
                    }
                ]
            }
        }
    },

    {
        title: "⚡SPLIT 5J — Jour 2 : Dos / Biceps (Pull Day)",
        material: ["barre", "haltere", "traction"],
        body: "haut",
        duration: 60,
        type: "MUSCU",
        level: "Moyen",
        desc: "<strong>Planification 5 jours — Jour 2/5.</strong> Séance tirée : tractions, rowing, tirage, curl biceps. 4 exercices, 3-4 séries.",
        details: {
            format_label: "SPLIT 5 JOURS — DOS / BICEPS",
            intro: "📅 Programme SPLIT 5 jours — J1 : Pectoraux / Triceps | J2 : Dos / Biceps | J3 : Épaules | J4 : Jambes | J5 : Bras / Abdos",
            exercises: [
                { text: "Tractions (Pull-up) — 4×max reps" },
                { text: "Rowing barre (Barbell row) — 4×8-10 reps" },
                { text: "Tirage vertical poulie haute (Lat pulldown) — 3×12 reps" },
                { text: "Biset : Curl haltères (Dumbbell curl) / Curl marteau (Hammer curl) — 3×10/10 reps" }
            ],
            conseil: "Récupération 90 sec entre séries, 2 min entre exercices. Concentrez-vous sur le travail de rétraction des omoplates sur le rowing.",
            chargeable: true,
            chargement: {
                type: "muscu",
                nom: "SPLIT 5J — J2 : Dos / Biceps",
                recupSerie: 90,
                recupBloc: 120,
                blocs: [
                    {
                        type: "solo",
                        exos: [{
                            nom: "Tractions (Pull-up)",
                            series: [
                                { reps: 8, poids: 0 },
                                { reps: 7, poids: 0 },
                                { reps: 6, poids: 0 },
                                { reps: 6, poids: 0 }
                            ]
                        }]
                    },
                    {
                        type: "solo",
                        exos: [{
                            nom: "Rowing barre (Barbell row)",
                            series: [
                                { reps: 10, poids: 40 },
                                { reps: 10, poids: 50 },
                                { reps: 8,  poids: 55 },
                                { reps: 8,  poids: 55 }
                            ]
                        }]
                    },
                    {
                        type: "solo",
                        exos: [{
                            nom: "Tirage vertical poulie haute (Lat pulldown)",
                            series: [
                                { reps: 12, poids: 40 },
                                { reps: 12, poids: 45 },
                                { reps: 12, poids: 45 }
                            ]
                        }]
                    },
                    {
                        type: "biset",
                        exos: [
                            {
                                nom: "Curl haltères (Dumbbell curl)",
                                series: [
                                    { reps: 10, poids: 12 },
                                    { reps: 10, poids: 14 },
                                    { reps: 10, poids: 14 }
                                ]
                            },
                            {
                                nom: "Curl marteau (Hammer curl)",
                                series: [
                                    { reps: 10, poids: 12 },
                                    { reps: 10, poids: 12 },
                                    { reps: 10, poids: 14 }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    },

    {
        title: "⚡SPLIT 5J — Jour 3 : Épaules (Shoulder Day)",
        material: ["barre", "haltere"],
        body: "haut",
        duration: 55,
        type: "MUSCU",
        level: "Moyen",
        desc: "<strong>Planification 5 jours — Jour 3/5.</strong> Développé militaire, élévations latérales, oiseau, élévations frontales. 4 exercices, 3-4 séries.",
        details: {
            format_label: "SPLIT 5 JOURS — ÉPAULES",
            intro: "📅 Programme SPLIT 5 jours — J1 : Pectoraux / Triceps | J2 : Dos / Biceps | J3 : Épaules | J4 : Jambes | J5 : Bras / Abdos",
            exercises: [
                { text: "Développé militaire (Overhead press / Military press) — 4×8-10 reps" },
                { text: "Élévation latérale haltères (Lateral raise) — 4×12-15 reps" },
                { text: "Oiseau haltères (Reverse fly) — 3×12 reps" },
                { text: "Triset : Élévation frontale (Front raise) / Oiseau poulie (Cable fly) / Shrug barre (Barbell shrug) — 3×12 reps" }
            ],
            conseil: "Les épaules sont une articulation fragile : bien s'échauffer avec rotations complètes et élévations légères avant de charger. Privilégier la qualité d'exécution à la charge.",
            chargeable: true,
            chargement: {
                type: "muscu",
                nom: "SPLIT 5J — J3 : Épaules",
                recupSerie: 90,
                recupBloc: 120,
                blocs: [
                    {
                        type: "solo",
                        exos: [{
                            nom: "Développé militaire (Overhead press)",
                            series: [
                                { reps: 10, poids: 30 },
                                { reps: 8,  poids: 40 },
                                { reps: 8,  poids: 45 },
                                { reps: 8,  poids: 45 }
                            ]
                        }]
                    },
                    {
                        type: "solo",
                        exos: [{
                            nom: "Élévation latérale haltères (Lateral raise)",
                            series: [
                                { reps: 15, poids: 8 },
                                { reps: 12, poids: 10 },
                                { reps: 12, poids: 10 },
                                { reps: 12, poids: 10 }
                            ]
                        }]
                    },
                    {
                        type: "solo",
                        exos: [{
                            nom: "Oiseau haltères (Reverse fly)",
                            series: [
                                { reps: 12, poids: 8 },
                                { reps: 12, poids: 8 },
                                { reps: 12, poids: 10 }
                            ]
                        }]
                    },
                    {
                        type: "triset",
                        exos: [
                            {
                                nom: "Élévation frontale haltères (Front raise)",
                                series: [
                                    { reps: 12, poids: 8 },
                                    { reps: 12, poids: 8 },
                                    { reps: 12, poids: 8 }
                                ]
                            },
                            {
                                nom: "Oiseau à la poulie basse (Cable reverse fly)",
                                series: [
                                    { reps: 12, poids: 10 },
                                    { reps: 12, poids: 10 },
                                    { reps: 12, poids: 10 }
                                ]
                            },
                            {
                                nom: "Haussement d'épaules barre (Barbell shrug)",
                                series: [
                                    { reps: 15, poids: 50 },
                                    { reps: 15, poids: 50 },
                                    { reps: 15, poids: 60 }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    },

    {
        title: "⚡SPLIT 5J — Jour 4 : Jambes (Leg Day)",
        material: ["barre", "haltere"],
        body: "bas",
        duration: 65,
        type: "MUSCU",
        level: "Moyen",
        desc: "<strong>Planification 5 jours — Jour 4/5.</strong> Squat, fentes, leg press, leg curl, mollets. Séance complète bas du corps.",
        details: {
            format_label: "SPLIT 5 JOURS — JAMBES",
            intro: "📅 Programme SPLIT 5 jours — J1 : Pectoraux / Triceps | J2 : Dos / Biceps | J3 : Épaules | J4 : Jambes | J5 : Bras / Abdos",
            exercises: [
                { text: "Squat barre (Back squat) — 4×8-10 reps" },
                { text: "Fentes marchées haltères (Walking lunge) — 3×12 reps/jambe" },
                { text: "Soulevé de terre jambes tendues (Romanian deadlift) — 3×10 reps" },
                { text: "Biset : Extension de jambes (Leg extension) / Flexion de jambes (Leg curl) — 3×15 reps" },
                { text: "Élévation des mollets debout (Standing calf raise) — 4×20 reps" }
            ],
            conseil: "Bien s'échauffer les genoux et hanches avant de squatter. Ne jamais verrouiller les genoux en extension. Récupération 2 min entre séries de squat.",
            chargeable: true,
            chargement: {
                type: "muscu",
                nom: "SPLIT 5J — J4 : Jambes",
                recupSerie: 120,
                recupBloc: 150,
                blocs: [
                    {
                        type: "solo",
                        exos: [{
                            nom: "Squat barre (Back squat)",
                            series: [
                                { reps: 10, poids: 50 },
                                { reps: 8,  poids: 70 },
                                { reps: 8,  poids: 80 },
                                { reps: 8,  poids: 80 }
                            ]
                        }]
                    },
                    {
                        type: "solo",
                        exos: [{
                            nom: "Fentes marchées haltères (Walking lunge)",
                            series: [
                                { reps: 12, poids: 16 },
                                { reps: 12, poids: 20 },
                                { reps: 12, poids: 20 }
                            ]
                        }]
                    },
                    {
                        type: "solo",
                        exos: [{
                            nom: "Soulevé de terre jambes tendues (Romanian deadlift)",
                            series: [
                                { reps: 10, poids: 50 },
                                { reps: 10, poids: 60 },
                                { reps: 10, poids: 60 }
                            ]
                        }]
                    },
                    {
                        type: "biset",
                        exos: [
                            {
                                nom: "Extension de jambes (Leg extension)",
                                series: [
                                    { reps: 15, poids: 30 },
                                    { reps: 15, poids: 35 },
                                    { reps: 15, poids: 35 }
                                ]
                            },
                            {
                                nom: "Flexion de jambes (Leg curl)",
                                series: [
                                    { reps: 15, poids: 25 },
                                    { reps: 15, poids: 30 },
                                    { reps: 15, poids: 30 }
                                ]
                            }
                        ]
                    },
                    {
                        type: "solo",
                        exos: [{
                            nom: "Élévation des mollets debout (Standing calf raise)",
                            series: [
                                { reps: 20, poids: 0 },
                                { reps: 20, poids: 0 },
                                { reps: 20, poids: 0 },
                                { reps: 20, poids: 0 }
                            ]
                        }]
                    }
                ]
            }
        }
    },

    {
        title: "⚡SPLIT 5J — Jour 5 : Bras / Abdominaux (Arms & Core Day)",
        material: ["barre", "haltere", "station-dips"],
        body: "haut",
        duration: 55,
        type: "MUSCU",
        level: "Moyen",
        desc: "<strong>Planification 5 jours — Jour 5/5.</strong> Biceps, triceps, avant-bras et gainageabdominaux. Séance finition.",
        details: {
            format_label: "SPLIT 5 JOURS — BRAS / ABDOMINAUX",
            intro: "📅 Programme SPLIT 5 jours — J1 : Pectoraux / Triceps | J2 : Dos / Biceps | J3 : Épaules | J4 : Jambes | J5 : Bras / Abdos",
            exercises: [
                { text: "Biset : Curl barre (Barbell curl) / Dips lestés — 4×10/10 reps" },
                { text: "Biset : Curl incliné haltères (Incline dumbbell curl) / Extension triceps haltère (Triceps overhead extension) — 3×12 reps" },
                { text: "Triset : Gainage (Plank) / Relevé de jambes suspendu (Hanging knee raise) / Enroulement de bassin (Hip thrust) — 3×30sec/15/20 reps" }
            ],
            conseil: "Séance finition : charges modérées, amplitude maximale, focus sur la sensation musculaire. Pas besoin de charger lourd pour les bras.",
            chargeable: true,
            chargement: {
                type: "muscu",
                nom: "SPLIT 5J — J5 : Bras / Abdominaux",
                recupSerie: 75,
                recupBloc: 90,
                blocs: [
                    {
                        type: "biset",
                        exos: [
                            {
                                nom: "Curl barre (Barbell curl)",
                                series: [
                                    { reps: 10, poids: 25 },
                                    { reps: 10, poids: 30 },
                                    { reps: 10, poids: 30 },
                                    { reps: 10, poids: 30 }
                                ]
                            },
                            {
                                nom: "Dips",
                                series: [
                                    { reps: 10, poids: 0 },
                                    { reps: 10, poids: 0 },
                                    { reps: 10, poids: 0 },
                                    { reps: 10, poids: 0 }
                                ]
                            }
                        ]
                    },
                    {
                        type: "biset",
                        exos: [
                            {
                                nom: "Curl incliné haltères (Incline dumbbell curl)",
                                series: [
                                    { reps: 12, poids: 10 },
                                    { reps: 12, poids: 12 },
                                    { reps: 12, poids: 12 }
                                ]
                            },
                            {
                                nom: "Extension triceps haltère (Triceps overhead extension)",
                                series: [
                                    { reps: 12, poids: 14 },
                                    { reps: 12, poids: 16 },
                                    { reps: 12, poids: 16 }
                                ]
                            }
                        ]
                    },
                    {
                        type: "triset",
                        exos: [
                            {
                                nom: "Gainage face (Plank)",
                                series: [
                                    { reps: 30, poids: 0 },
                                    { reps: 30, poids: 0 },
                                    { reps: 30, poids: 0 }
                                ]
                            },
                            {
                                nom: "Relevé de genoux suspendu (Hanging knee raise)",
                                series: [
                                    { reps: 15, poids: 0 },
                                    { reps: 15, poids: 0 },
                                    { reps: 15, poids: 0 }
                                ]
                            },
                            {
                                nom: "Enroulement de bassin (Hip thrust / crunch bas)",
                                series: [
                                    { reps: 20, poids: 0 },
                                    { reps: 20, poids: 0 },
                                    { reps: 20, poids: 0 }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    },


    // ══════════════════════════════════════════════════════════
    // PLANIFICATION 4 JOURS — CORPS COMPLET
    // ══════════════════════════════════════════════════════════

    {
        title: "🔀PLAN 4J — Jour 1 : Haut du corps Poussée (Upper Push)",
        material: ["barre", "haltere", "station-dips"],
        body: "haut",
        duration: 55,
        type: "MUSCU",
        level: "Moyen",
        desc: "<strong>Planification 4 jours — Jour 1/4.</strong> Pectoraux, épaules (faisceau antérieur & médial), triceps. Corps complet sur la semaine.",
        details: {
            format_label: "PLAN 4 JOURS — HAUT POUSSÉE",
            intro: "📅 Programme 4 jours — J1 : Haut Poussée | J2 : Bas Quadriceps | J3 : Haut Tirée | J4 : Bas Ischio/Fessiers",
            exercises: [
                { text: "Développé couché (Bench press) — 4×8-10 reps" },
                { text: "Développé incliné haltères (Incline dumbbell press) — 3×10 reps" },
                { text: "Développé militaire haltères (Dumbbell overhead press) — 3×10 reps" },
                { text: "Biset : Dips / Élévation latérale (Lateral raise) — 3×10/12 reps" }
            ],
            conseil: "Récupération 90 sec entre séries, 2 min entre exercices. Programme 4 jours idéal pour les sportifs qui pratiquent aussi une activité cardio.",
            chargeable: true,
            chargement: {
                type: "muscu",
                nom: "PLAN 4J — J1 : Haut Poussée",
                recupSerie: 90,
                recupBloc: 120,
                blocs: [
                    {
                        type: "solo",
                        exos: [{
                            nom: "Développé couché (Bench press)",
                            series: [
                                { reps: 10, poids: 40 },
                                { reps: 8,  poids: 55 },
                                { reps: 8,  poids: 60 },
                                { reps: 8,  poids: 60 }
                            ]
                        }]
                    },
                    {
                        type: "solo",
                        exos: [{
                            nom: "Développé incliné haltères (Incline dumbbell press)",
                            series: [
                                { reps: 10, poids: 18 },
                                { reps: 10, poids: 20 },
                                { reps: 10, poids: 20 }
                            ]
                        }]
                    },
                    {
                        type: "solo",
                        exos: [{
                            nom: "Développé militaire haltères (Dumbbell overhead press)",
                            series: [
                                { reps: 10, poids: 16 },
                                { reps: 10, poids: 18 },
                                { reps: 10, poids: 18 }
                            ]
                        }]
                    },
                    {
                        type: "biset",
                        exos: [
                            {
                                nom: "Dips",
                                series: [
                                    { reps: 10, poids: 0 },
                                    { reps: 10, poids: 0 },
                                    { reps: 10, poids: 0 }
                                ]
                            },
                            {
                                nom: "Élévation latérale haltères (Lateral raise)",
                                series: [
                                    { reps: 12, poids: 8 },
                                    { reps: 12, poids: 10 },
                                    { reps: 12, poids: 10 }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    },

    {
        title: "🔀PLAN 4J — Jour 2 : Bas du corps Quadriceps (Lower Quad)",
        material: ["barre", "haltere"],
        body: "bas",
        duration: 60,
        type: "MUSCU",
        level: "Moyen",
        desc: "<strong>Planification 4 jours — Jour 2/4.</strong> Accent quadriceps : squat, fente, leg press, mollets.",
        details: {
            format_label: "PLAN 4 JOURS — BAS QUADRICEPS",
            intro: "📅 Programme 4 jours — J1 : Haut Poussée | J2 : Bas Quadriceps | J3 : Haut Tirée | J4 : Bas Ischio/Fessiers",
            exercises: [
                { text: "Squat barre (Back squat) — 4×8-10 reps" },
                { text: "Fentes avant haltères (Dumbbell lunge) — 3×12 reps/jambe" },
                { text: "Squat gobelet (Goblet squat) — 3×15 reps" },
                { text: "Élévation des mollets (Calf raise) — 4×20 reps" }
            ],
            conseil: "Séance orientée quadriceps : descente lente (3 sec) sur squat et fentes pour maximiser le travail en excentrique.",
            chargeable: true,
            chargement: {
                type: "muscu",
                nom: "PLAN 4J — J2 : Bas Quadriceps",
                recupSerie: 120,
                recupBloc: 150,
                blocs: [
                    {
                        type: "solo",
                        exos: [{
                            nom: "Squat barre (Back squat)",
                            series: [
                                { reps: 10, poids: 50 },
                                { reps: 8,  poids: 70 },
                                { reps: 8,  poids: 80 },
                                { reps: 8,  poids: 80 }
                            ]
                        }]
                    },
                    {
                        type: "solo",
                        exos: [{
                            nom: "Fentes avant haltères (Dumbbell lunge)",
                            series: [
                                { reps: 12, poids: 16 },
                                { reps: 12, poids: 20 },
                                { reps: 12, poids: 20 }
                            ]
                        }]
                    },
                    {
                        type: "solo",
                        exos: [{
                            nom: "Squat gobelet (Goblet squat)",
                            series: [
                                { reps: 15, poids: 20 },
                                { reps: 15, poids: 24 },
                                { reps: 15, poids: 24 }
                            ]
                        }]
                    },
                    {
                        type: "solo",
                        exos: [{
                            nom: "Élévation des mollets (Calf raise)",
                            series: [
                                { reps: 20, poids: 0 },
                                { reps: 20, poids: 0 },
                                { reps: 20, poids: 0 },
                                { reps: 20, poids: 0 }
                            ]
                        }]
                    }
                ]
            }
        }
    },

    {
        title: "🔀PLAN 4J — Jour 3 : Haut du corps Tirée (Upper Pull)",
        material: ["barre", "haltere", "traction"],
        body: "haut",
        duration: 55,
        type: "MUSCU",
        level: "Moyen",
        desc: "<strong>Planification 4 jours — Jour 3/4.</strong> Dos, biceps, trapèzes. Séance tirée complète pour le haut du corps.",
        details: {
            format_label: "PLAN 4 JOURS — HAUT TIRÉE",
            intro: "📅 Programme 4 jours — J1 : Haut Poussée | J2 : Bas Quadriceps | J3 : Haut Tirée | J4 : Bas Ischio/Fessiers",
            exercises: [
                { text: "Tractions (Pull-up) — 4×max reps" },
                { text: "Rowing haltères unilatéral (Single-arm dumbbell row) — 4×10 reps" },
                { text: "Tirage poulie haute prise serrée (Close-grip lat pulldown) — 3×12 reps" },
                { text: "Biset : Curl barre (Barbell curl) / Curl marteau (Hammer curl) — 3×10/10 reps" }
            ],
            conseil: "Concentrez-vous sur la rétraction des omoplates en début de chaque mouvement de dos. Alterner les exercices pour les tractions : prise large / prise neutre.",
            chargeable: true,
            chargement: {
                type: "muscu",
                nom: "PLAN 4J — J3 : Haut Tirée",
                recupSerie: 90,
                recupBloc: 120,
                blocs: [
                    {
                        type: "solo",
                        exos: [{
                            nom: "Tractions (Pull-up)",
                            series: [
                                { reps: 8, poids: 0 },
                                { reps: 7, poids: 0 },
                                { reps: 6, poids: 0 },
                                { reps: 6, poids: 0 }
                            ]
                        }]
                    },
                    {
                        type: "solo",
                        exos: [{
                            nom: "Rowing haltère unilatéral (Single-arm dumbbell row)",
                            series: [
                                { reps: 10, poids: 20 },
                                { reps: 10, poids: 24 },
                                { reps: 10, poids: 26 },
                                { reps: 10, poids: 26 }
                            ]
                        }]
                    },
                    {
                        type: "solo",
                        exos: [{
                            nom: "Tirage poulie haute prise serrée (Close-grip lat pulldown)",
                            series: [
                                { reps: 12, poids: 40 },
                                { reps: 12, poids: 45 },
                                { reps: 12, poids: 45 }
                            ]
                        }]
                    },
                    {
                        type: "biset",
                        exos: [
                            {
                                nom: "Curl barre (Barbell curl)",
                                series: [
                                    { reps: 10, poids: 25 },
                                    { reps: 10, poids: 30 },
                                    { reps: 10, poids: 30 }
                                ]
                            },
                            {
                                nom: "Curl marteau (Hammer curl)",
                                series: [
                                    { reps: 10, poids: 12 },
                                    { reps: 10, poids: 14 },
                                    { reps: 10, poids: 14 }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    },

    {
        title: "🔀PLAN 4J — Jour 4 : Bas du corps Ischio / Fessiers (Lower Posterior)",
        material: ["barre", "haltere"],
        body: "bas",
        duration: 60,
        type: "MUSCU",
        level: "Moyen",
        desc: "<strong>Planification 4 jours — Jour 4/4.</strong> Accent ischio-jambiers et fessiers : soulevé de terre, hip thrust, leg curl.",
        details: {
            format_label: "PLAN 4 JOURS — BAS ISCHIO / FESSIERS",
            intro: "📅 Programme 4 jours — J1 : Haut Poussée | J2 : Bas Quadriceps | J3 : Haut Tirée | J4 : Bas Ischio/Fessiers",
            exercises: [
                { text: "Soulevé de terre (Deadlift) — 4×6-8 reps" },
                { text: "Poussée de hanches (Hip thrust) — 4×12 reps" },
                { text: "Soulevé de terre jambes tendues (Romanian deadlift) — 3×10 reps" },
                { text: "Biset : Flexion de jambes (Leg curl) / Abduction (Hip abduction) — 3×15 reps" }
            ],
            conseil: "Le soulevé de terre est l'exercice roi de cette séance : ne pas arrondir le dos, bien démarrer avec le bassin en position basse. Récupération longue entre les séries lourdes (2 min).",
            chargeable: true,
            chargement: {
                type: "muscu",
                nom: "PLAN 4J — J4 : Bas Ischio / Fessiers",
                recupSerie: 120,
                recupBloc: 150,
                blocs: [
                    {
                        type: "solo",
                        exos: [{
                            nom: "Soulevé de terre (Deadlift)",
                            series: [
                                { reps: 8,  poids: 60 },
                                { reps: 6,  poids: 80 },
                                { reps: 6,  poids: 90 },
                                { reps: 6,  poids: 90 }
                            ]
                        }]
                    },
                    {
                        type: "solo",
                        exos: [{
                            nom: "Poussée de hanches (Hip thrust)",
                            series: [
                                { reps: 12, poids: 40 },
                                { reps: 12, poids: 60 },
                                { reps: 12, poids: 70 },
                                { reps: 12, poids: 70 }
                            ]
                        }]
                    },
                    {
                        type: "solo",
                        exos: [{
                            nom: "Soulevé de terre jambes tendues (Romanian deadlift)",
                            series: [
                                { reps: 10, poids: 50 },
                                { reps: 10, poids: 60 },
                                { reps: 10, poids: 60 }
                            ]
                        }]
                    },
                    {
                        type: "biset",
                        exos: [
                            {
                                nom: "Flexion de jambes (Leg curl)",
                                series: [
                                    { reps: 15, poids: 25 },
                                    { reps: 15, poids: 30 },
                                    { reps: 15, poids: 30 }
                                ]
                            },
                            {
                                nom: "Abduction de hanche (Hip abduction)",
                                series: [
                                    { reps: 15, poids: 0 },
                                    { reps: 15, poids: 0 },
                                    { reps: 15, poids: 0 }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    },


    // ══════════════════════════════════════════════════════════
    // PLANIFICATION 3 JOURS — FULL BODY
    // ══════════════════════════════════════════════════════════

    {
        title: "🔱PLAN 3J — Jour 1 : Corps complet A (Full Body A)",
        material: ["barre", "haltere", "traction"],
        body: "complet",
        duration: 60,
        type: "MUSCU",
        level: "Moyen",
        desc: "<strong>Planification 3 jours — Jour 1/3.</strong> Corps complet : squat, développé couché, tractions, abdos. Exercices polyarticulaires prioritaires.",
        details: {
            format_label: "PLAN 3 JOURS — FULL BODY A",
            intro: "📅 Programme 3 jours — J1 : Full Body A (Lun) | J2 : Full Body B (Mer) | J3 : Full Body C (Ven) — 1 jour de repos entre chaque",
            exercises: [
                { text: "Squat barre (Back squat) — 4×8 reps" },
                { text: "Développé couché (Bench press) — 4×8-10 reps" },
                { text: "Tractions (Pull-up) — 3×max reps" },
                { text: "Développé militaire (Overhead press) — 3×10 reps" },
                { text: "Gainage (Plank) — 3×45 sec" }
            ],
            conseil: "Programme Full Body idéal pour 3 séances par semaine. Priorité aux exercices polyarticulaires. Récupération 2 min entre les séries des exercices de base.",
            chargeable: true,
            chargement: {
                type: "muscu",
                nom: "PLAN 3J — J1 : Full Body A",
                recupSerie: 120,
                recupBloc: 150,
                blocs: [
                    {
                        type: "solo",
                        exos: [{
                            nom: "Squat barre (Back squat)",
                            series: [
                                { reps: 8, poids: 60 },
                                { reps: 8, poids: 70 },
                                { reps: 8, poids: 80 },
                                { reps: 8, poids: 80 }
                            ]
                        }]
                    },
                    {
                        type: "solo",
                        exos: [{
                            nom: "Développé couché (Bench press)",
                            series: [
                                { reps: 10, poids: 40 },
                                { reps: 8,  poids: 55 },
                                { reps: 8,  poids: 60 },
                                { reps: 8,  poids: 60 }
                            ]
                        }]
                    },
                    {
                        type: "solo",
                        exos: [{
                            nom: "Tractions (Pull-up)",
                            series: [
                                { reps: 8, poids: 0 },
                                { reps: 7, poids: 0 },
                                { reps: 6, poids: 0 }
                            ]
                        }]
                    },
                    {
                        type: "solo",
                        exos: [{
                            nom: "Développé militaire (Overhead press)",
                            series: [
                                { reps: 10, poids: 30 },
                                { reps: 10, poids: 35 },
                                { reps: 10, poids: 40 }
                            ]
                        }]
                    },
                    {
                        type: "solo",
                        exos: [{
                            nom: "Gainage face (Plank)",
                            series: [
                                { reps: 45, poids: 0 },
                                { reps: 45, poids: 0 },
                                { reps: 45, poids: 0 }
                            ]
                        }]
                    }
                ]
            }
        }
    },

    {
        title: "🔱PLAN 3J — Jour 2 : Corps complet B (Full Body B)",
        material: ["barre", "haltere"],
        body: "complet",
        duration: 60,
        type: "MUSCU",
        level: "Moyen",
        desc: "<strong>Planification 3 jours — Jour 2/3.</strong> Corps complet : soulevé de terre, développé incliné, rowing, fentes, abdos.",
        details: {
            format_label: "PLAN 3 JOURS — FULL BODY B",
            intro: "📅 Programme 3 jours — J1 : Full Body A (Lun) | J2 : Full Body B (Mer) | J3 : Full Body C (Ven) — 1 jour de repos entre chaque",
            exercises: [
                { text: "Soulevé de terre (Deadlift) — 4×6 reps" },
                { text: "Développé incliné haltères (Incline dumbbell press) — 4×10 reps" },
                { text: "Rowing barre (Barbell row) — 4×10 reps" },
                { text: "Fentes arrière haltères (Reverse dumbbell lunge) — 3×10 reps/jambe" },
                { text: "Biset : Crunch (Crunch) / Relevé de bassin (Hip raise) — 3×20 reps" }
            ],
            conseil: "Séance B : changement d'exercices pour éviter l'accommodation et stimuler toutes les fibres. Bien s'échauffer avant les séries de soulevé de terre.",
            chargeable: true,
            chargement: {
                type: "muscu",
                nom: "PLAN 3J — J2 : Full Body B",
                recupSerie: 120,
                recupBloc: 150,
                blocs: [
                    {
                        type: "solo",
                        exos: [{
                            nom: "Soulevé de terre (Deadlift)",
                            series: [
                                { reps: 6, poids: 70 },
                                { reps: 6, poids: 90 },
                                { reps: 6, poids: 100 },
                                { reps: 6, poids: 100 }
                            ]
                        }]
                    },
                    {
                        type: "solo",
                        exos: [{
                            nom: "Développé incliné haltères (Incline dumbbell press)",
                            series: [
                                { reps: 10, poids: 16 },
                                { reps: 10, poids: 20 },
                                { reps: 10, poids: 22 },
                                { reps: 10, poids: 22 }
                            ]
                        }]
                    },
                    {
                        type: "solo",
                        exos: [{
                            nom: "Rowing barre (Barbell row)",
                            series: [
                                { reps: 10, poids: 40 },
                                { reps: 10, poids: 50 },
                                { reps: 10, poids: 55 },
                                { reps: 10, poids: 55 }
                            ]
                        }]
                    },
                    {
                        type: "solo",
                        exos: [{
                            nom: "Fentes arrière haltères (Reverse dumbbell lunge)",
                            series: [
                                { reps: 10, poids: 16 },
                                { reps: 10, poids: 18 },
                                { reps: 10, poids: 20 }
                            ]
                        }]
                    },
                    {
                        type: "biset",
                        exos: [
                            {
                                nom: "Crunch (Crunch)",
                                series: [
                                    { reps: 20, poids: 0 },
                                    { reps: 20, poids: 0 },
                                    { reps: 20, poids: 0 }
                                ]
                            },
                            {
                                nom: "Relevé de bassin (Hip raise)",
                                series: [
                                    { reps: 20, poids: 0 },
                                    { reps: 20, poids: 0 },
                                    { reps: 20, poids: 0 }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    },

    {
        title: "🔱PLAN 3J — Jour 3 : Corps complet C (Full Body C)",
        material: ["barre", "haltere", "traction"],
        body: "complet",
        duration: 60,
        type: "MUSCU",
        level: "Moyen",
        desc: "<strong>Planification 3 jours — Jour 3/3.</strong> Corps complet : squat avant, développé couché prise serrée, rowing haltères, hip thrust, gainage.",
        details: {
            format_label: "PLAN 3 JOURS — FULL BODY C",
            intro: "📅 Programme 3 jours — J1 : Full Body A (Lun) | J2 : Full Body B (Mer) | J3 : Full Body C (Ven) — 1 jour de repos entre chaque",
            exercises: [
                { text: "Squat avant (Front squat) — 4×8 reps" },
                { text: "Développé couché prise serrée (Close-grip bench press) — 3×10 reps" },
                { text: "Rowing haltère unilatéral (Single-arm dumbbell row) — 3×10 reps" },
                { text: "Poussée de hanches (Hip thrust) — 3×12 reps" },
                { text: "Triset : Gainage (Plank) / Gainage latéral (Side plank) / Rotation russe (Russian twist) — 3×30sec/30sec/20 reps" }
            ],
            conseil: "Séance C : variantes pour continuer à progresser. Le squat avant développe davantage le gainage et les quadriceps. Ne pas négliger les abdos en fin de séance.",
            chargeable: true,
            chargement: {
                type: "muscu",
                nom: "PLAN 3J — J3 : Full Body C",
                recupSerie: 120,
                recupBloc: 150,
                blocs: [
                    {
                        type: "solo",
                        exos: [{
                            nom: "Squat avant (Front squat)",
                            series: [
                                { reps: 8, poids: 40 },
                                { reps: 8, poids: 55 },
                                { reps: 8, poids: 60 },
                                { reps: 8, poids: 60 }
                            ]
                        }]
                    },
                    {
                        type: "solo",
                        exos: [{
                            nom: "Développé couché prise serrée (Close-grip bench press)",
                            series: [
                                { reps: 10, poids: 40 },
                                { reps: 10, poids: 45 },
                                { reps: 10, poids: 50 }
                            ]
                        }]
                    },
                    {
                        type: "solo",
                        exos: [{
                            nom: "Rowing haltère unilatéral (Single-arm dumbbell row)",
                            series: [
                                { reps: 10, poids: 20 },
                                { reps: 10, poids: 24 },
                                { reps: 10, poids: 26 }
                            ]
                        }]
                    },
                    {
                        type: "solo",
                        exos: [{
                            nom: "Poussée de hanches (Hip thrust)",
                            series: [
                                { reps: 12, poids: 50 },
                                { reps: 12, poids: 65 },
                                { reps: 12, poids: 70 }
                            ]
                        }]
                    },
                    {
                        type: "triset",
                        exos: [
                            {
                                nom: "Gainage face (Plank)",
                                series: [
                                    { reps: 30, poids: 0 },
                                    { reps: 30, poids: 0 },
                                    { reps: 30, poids: 0 }
                                ]
                            },
                            {
                                nom: "Gainage latéral (Side plank)",
                                series: [
                                    { reps: 30, poids: 0 },
                                    { reps: 30, poids: 0 },
                                    { reps: 30, poids: 0 }
                                ]
                            },
                            {
                                nom: "Rotation russe (Russian twist)",
                                series: [
                                    { reps: 20, poids: 5 },
                                    { reps: 20, poids: 5 },
                                    { reps: 20, poids: 5 }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    },


    // ══════════════════════════════════════════════════════════
    // PLANIFICATION 2 JOURS — FULL BODY MINIMALISTE
    // ══════════════════════════════════════════════════════════

    {
        title: "⚖️PLAN 2J — Jour 1 : Corps complet Poussée / Bas (Full Body Push + Legs)",
        material: ["barre", "haltere", "station-dips"],
        body: "complet",
        duration: 60,
        type: "MUSCU",
        level: "Moyen",
        desc: "<strong>Planification 2 jours — Jour 1/2.</strong> Programme minimaliste : mouvements de poussée + jambes. Tout le corps travaillé en 2 séances.",
        details: {
            format_label: "PLAN 2 JOURS — POUSSÉE + JAMBES",
            intro: "📅 Programme 2 jours — J1 : Poussée + Jambes (ex: Lun) | J2 : Tirée + Postérieur (ex: Jeu) — parfait pour un emploi du temps chargé",
            exercises: [
                { text: "Squat barre (Back squat) — 4×8-10 reps" },
                { text: "Développé couché (Bench press) — 4×8-10 reps" },
                { text: "Développé militaire (Overhead press) — 3×10 reps" },
                { text: "Dips — 3×10-12 reps" },
                { text: "Élévation des mollets (Calf raise) — 3×20 reps" },
                { text: "Gainage (Plank) — 3×45 sec" }
            ],
            conseil: "Programme 2 jours idéal si vous avez moins de 2h par semaine pour la salle. Chaque séance travaille tout le corps avec des exercices complémentaires. Indispensable de bien récupérer entre les 2 séances (48h mini).",
            chargeable: true,
            chargement: {
                type: "muscu",
                nom: "PLAN 2J — J1 : Poussée + Jambes",
                recupSerie: 120,
                recupBloc: 150,
                blocs: [
                    {
                        type: "solo",
                        exos: [{
                            nom: "Squat barre (Back squat)",
                            series: [
                                { reps: 10, poids: 50 },
                                { reps: 8,  poids: 70 },
                                { reps: 8,  poids: 80 },
                                { reps: 8,  poids: 80 }
                            ]
                        }]
                    },
                    {
                        type: "solo",
                        exos: [{
                            nom: "Développé couché (Bench press)",
                            series: [
                                { reps: 10, poids: 40 },
                                { reps: 8,  poids: 55 },
                                { reps: 8,  poids: 60 },
                                { reps: 8,  poids: 60 }
                            ]
                        }]
                    },
                    {
                        type: "solo",
                        exos: [{
                            nom: "Développé militaire (Overhead press)",
                            series: [
                                { reps: 10, poids: 30 },
                                { reps: 10, poids: 35 },
                                { reps: 10, poids: 40 }
                            ]
                        }]
                    },
                    {
                        type: "biset",
                        exos: [
                            {
                                nom: "Dips",
                                series: [
                                    { reps: 12, poids: 0 },
                                    { reps: 10, poids: 0 },
                                    { reps: 10, poids: 0 }
                                ]
                            },
                            {
                                nom: "Élévation des mollets (Calf raise)",
                                series: [
                                    { reps: 20, poids: 0 },
                                    { reps: 20, poids: 0 },
                                    { reps: 20, poids: 0 }
                                ]
                            }
                        ]
                    },
                    {
                        type: "solo",
                        exos: [{
                            nom: "Gainage face (Plank)",
                            series: [
                                { reps: 45, poids: 0 },
                                { reps: 45, poids: 0 },
                                { reps: 45, poids: 0 }
                            ]
                        }]
                    }
                ]
            }
        }
    },

    {
        title: "⚖️PLAN 2J — Jour 2 : Corps complet Tirée / Postérieur (Full Body Pull + Posterior)",
        material: ["barre", "haltere", "traction"],
        body: "complet",
        duration: 60,
        type: "MUSCU",
        level: "Moyen",
        desc: "<strong>Planification 2 jours — Jour 2/2.</strong> Programme minimaliste : mouvements de tirée + chaîne postérieure. Complémentaire du Jour 1.",
        details: {
            format_label: "PLAN 2 JOURS — TIRÉE + POSTÉRIEUR",
            intro: "📅 Programme 2 jours — J1 : Poussée + Jambes (ex: Lun) | J2 : Tirée + Postérieur (ex: Jeu) — parfait pour un emploi du temps chargé",
            exercises: [
                { text: "Soulevé de terre (Deadlift) — 4×6-8 reps" },
                { text: "Tractions (Pull-up) — 4×max reps" },
                { text: "Rowing barre (Barbell row) — 3×10 reps" },
                { text: "Poussée de hanches (Hip thrust) — 3×12 reps" },
                { text: "Biset : Curl barre (Barbell curl) / Rotation russe (Russian twist) — 3×10/20 reps" }
            ],
            conseil: "Séance complémentaire du Jour 1 : elle couvre toute la chaîne postérieure (dos, ischio-jambiers, fessiers) et les muscles tireurs. 48h de repos minimum entre les 2 séances.",
            chargeable: true,
            chargement: {
                type: "muscu",
                nom: "PLAN 2J — J2 : Tirée + Postérieur",
                recupSerie: 120,
                recupBloc: 150,
                blocs: [
                    {
                        type: "solo",
                        exos: [{
                            nom: "Soulevé de terre (Deadlift)",
                            series: [
                                { reps: 8,  poids: 60 },
                                { reps: 6,  poids: 80 },
                                { reps: 6,  poids: 95 },
                                { reps: 6,  poids: 95 }
                            ]
                        }]
                    },
                    {
                        type: "solo",
                        exos: [{
                            nom: "Tractions (Pull-up)",
                            series: [
                                { reps: 8, poids: 0 },
                                { reps: 7, poids: 0 },
                                { reps: 6, poids: 0 },
                                { reps: 6, poids: 0 }
                            ]
                        }]
                    },
                    {
                        type: "solo",
                        exos: [{
                            nom: "Rowing barre (Barbell row)",
                            series: [
                                { reps: 10, poids: 45 },
                                { reps: 10, poids: 55 },
                                { reps: 10, poids: 60 }
                            ]
                        }]
                    },
                    {
                        type: "solo",
                        exos: [{
                            nom: "Poussée de hanches (Hip thrust)",
                            series: [
                                { reps: 12, poids: 50 },
                                { reps: 12, poids: 65 },
                                { reps: 12, poids: 70 }
                            ]
                        }]
                    },
                    {
                        type: "biset",
                        exos: [
                            {
                                nom: "Curl barre (Barbell curl)",
                                series: [
                                    { reps: 10, poids: 25 },
                                    { reps: 10, poids: 30 },
                                    { reps: 10, poids: 30 }
                                ]
                            },
                            {
                                nom: "Rotation russe (Russian twist)",
                                series: [
                                    { reps: 20, poids: 5 },
                                    { reps: 20, poids: 5 },
                                    { reps: 20, poids: 5 }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    },
  
  
    
    {
        title: "Séances Fractionné course",
        material: ["poids-corps", "tapis-incurve"],
        body: "complet",
        duration: 0,
        type: "CARDIO",
        level: "Moyen",
        desc: "Séances de fractionné en course à pied pour s'améliorer au Luc Léger. Deux niveaux : débutant et confirmé.",
        details: {
            format_label: "FRACTIONNÉ COURSE À PIED",
            type_special: "fractionne",
            conseil: "S'échauffer en courant 10 minutes avant chaque séance. Alterner courses rapides et récupérations, sur piste (distances) ou en nature (temps d'effort)."
        }
    },

    { title: "Séance BikeERG orientée FORCE", material: ["bike-erg"], body: "bas", duration: 40, type: "CARDIO", level: "Intense",
      desc: "Séance de fractionné 40 min sur BikeERG. ▪️ 10 min échauffement. ▪️ 20 min fractionné (10×1min effort / 1min récup). ▪️ 10 min retour au calme. Choisir son damper et son plage RPM cible.",
      details: {
        format_label: "BIKEERG FORCE — 40 MINUTES",
        type_special: "bikeerg_force",
        conseil: "Le damper contrôle la résistance de l'air : plus il est élevé, plus chaque coup de pédale est lourd. Maintenez le RPM sélectionné pendant toute la minute d'effort — c'est la clé de la séance, si c'est trop ➔ dur descendre de niveaux. Échauffement et retour au calme : damper 2ou3.<br>LES NIVEAUX :<br>🐣Rookie - DAMPER 3<br>🥊Challenger - DAMPER 4<br>⚔️ Warrior - DAMPER 5<br>👑 Légende - DAMPER 6",
        chargeable: true,
        dampers: [3, 4, 5, 6],
        rpms: ["70↔75", "75↔80", "80↔85", "85↔90", "90↔95"]
      }
    },

    { title: "Séance intervalle BikeERG", material: ["bike-erg"], body: "bas", duration: 30, type: "CARDIO", level: "Moyen", desc: "séance de fractionné pendant 30 minutes.",
      details: { format_label: "SÉANCE CARDIO — 30 MINUTES", exercises: [
          { text: "Échauffement : 10 minutes (damper 2-3)" }, { text: "Fractionné : 14 minutes — 7 fois :" }, { text: "→ 1 minute intensité max. (pédalage le plus rapide possible)" }, { text: "→ 1 minute de récupération" }, { text: "Récupération : 10 minutes (damper 2-3)" }
        ], conseil: "Adapter le damper (minimum 3) et le RPM selon votre niveau.",
        chargeable: true,
                  chargement: {
                  type: "surmesure",
                  nom: "Séance intervalle BikeERG 30 minutes",
                  repeat: 0,
                  phases: [
                    { type: "warmup", sec: 600, text: "échauffement : mettre le damper(levier de résistance) sur 2-3" },
                    { type: "travail", sec: 60, text: "🚴 1 minute intensité max. | damper 3 mini | pédalage le plus rapide possible" },
                    { type: "repos", sec: 60, text: "💤 1 minute de récupération" },
                    { type: "travail", sec: 60, text: "🚴 1 minute intensité max. | damper 3 mini | pédalage le plus rapide possible" },
                    { type: "repos", sec: 60, text: "💤 1 minute de récupération" },
                    { type: "travail", sec: 60, text: "🚴 1 minute intensité max. | damper 3 mini | pédalage le plus rapide possible" },
                    { type: "repos", sec: 60, text: "💤 1 minute de récupération" },
                    { type: "travail", sec: 60, text: "🚴 1 minute intensité max. | damper 3 mini | pédalage le plus rapide possible" },
                    { type: "repos", sec: 60, text: "💤 1 minute de récupération" },
                    { type: "travail", sec: 60, text: "🚴 1 minute intensité max. | damper 3 mini | pédalage le plus rapide possible" },
                    { type: "repos", sec: 60, text: "💤 1 minute de récupération" },
                    { type: "travail", sec: 60, text: "🚴 1 minute intensité max. | damper 3 mini | pédalage le plus rapide possible" },
                    { type: "repos", sec: 60, text: "💤 1 minute de récupération" },
                    { type: "travail", sec: 60, text: "🚴 1 minute intensité max. | damper 3 mini | pédalage le plus rapide possible" },
                    { type: "repos", sec: 60, text: "💤 1 minute de récupération" },
                    { type: "recup", sec: 360, text: "retour au calme : damper 2-3" },
                  ]
                  }       
        }},


    // ══════════════════════════════════════════════════════════
    // SÉANCE 4 ERGOMÈTRES — 60 MIN
    // ══════════════════════════════════════════════════════════
    {
        title: "Séance Quatuor Hybride",
        material: ["ski-erg", "rameur", "bike-erg", "tapis-incurve"],
        body: "complet",
        duration: 60,
        type: "CARDIO",
        level: "Moyen",
        desc: "4 ateliers à enchaîner : SkiErg, Rameur, BikeErg et Tapis Incurvé. <br>▪️2 séquences de travail. <br>▪️5 minutes par atelier. <br>▪️12 niveaux de progression. <br>▪️1 heure.",
        details: {
            format_label: "CARDIO — 60 MINUTES",
            type_special: "quatre_ergo",
            conseil: "Respectez votre niveau de split/allure sur chaque atelier. Profitez des transitions pour vous hydrater. Vous ne connaissez pas votre niveau de départ, prenez les allures de course sur tapis pour vous situer (9km/h🟢 ➔ 17km/h🔴)",
            chargeable: true,
            niveaux: [
                { n:  1, rameur: "2:35", skierg: "2:42", bikeerg: "2:10", tapis: "9.0"  },
                { n:  2, rameur: "2:30", skierg: "2:37", bikeerg: "2:05", tapis: "9.5"  },
                { n:  3, rameur: "2:25", skierg: "2:32", bikeerg: "2:00", tapis: "10.5" },
                { n:  4, rameur: "2:20", skierg: "2:27", bikeerg: "1:55", tapis: "11.5" },
                { n:  5, rameur: "2:15", skierg: "2:22", bikeerg: "1:50", tapis: "12.5" },
                { n:  6, rameur: "2:10", skierg: "2:17", bikeerg: "1:45", tapis: "13.0" },
                { n:  7, rameur: "2:05", skierg: "2:12", bikeerg: "1:40", tapis: "13.5" },
                { n:  8, rameur: "2:00", skierg: "2:07", bikeerg: "1:35", tapis: "14.0" },
                { n:  9, rameur: "1:55", skierg: "2:02", bikeerg: "1:30", tapis: "14.5" },
                { n: 10, rameur: "1:50", skierg: "1:57", bikeerg: "1:25", tapis: "15.0" },
                { n: 11, rameur: "1:45", skierg: "1:52", bikeerg: "1:20", tapis: "16.0" },
                { n: 12, rameur: "1:40", skierg: "1:47", bikeerg: "1:15", tapis: "17.0" }
            ]
        }
    },

    // ══════════════════════════════════════════════════════════
    // SÉANCE RAMEUR TEMPO
    // ══════════════════════════════════════════════════════════
    {
        title: "Séance RAMEUR TEMPO",
        material: ["rameur"],
        body: "complet",
        duration: 40,
        type: "CARDIO",
        level: "Moyen",
        desc: "Séance structurée sur rameur Concept2 — 40 minutes avec 6 phases de travail progressif. 12 niveaux disponibles. Damper 3-5.",
        details: {
            format_label: "RAMEUR TEMPO — 40 MINUTES",
            type_special: "avec_niveaux",
            conseil: "Séance parfaite sur rameur Concept2 (erg). Le niveau correspond approximativement aux paliers du test Cooper/VO2max. Min 1-10 : échauffement avec 3 accélérations de 30 sec. Min 32-40 : retour au calme. Damper conseillé : 1-3 pour l'échauffement/retour au calme, 3-5 pour les phases de travail.",
            chargeable: true,
            niveaux: [
                { n:  1, attaque: "2:35", transition: "2:50", base: "3:00", remontee: "2:50", soutenu: "2:40", pointe: "2:30" },
                { n:  2, attaque: "2:30", transition: "2:40", base: "2:50", remontee: "2:40", soutenu: "2:35", pointe: "2:25" },
                { n:  3, attaque: "2:25", transition: "2:35", base: "2:45", remontee: "2:35", soutenu: "2:30", pointe: "2:20" },
                { n:  4, attaque: "2:20", transition: "2:30", base: "2:40", remontee: "2:30", soutenu: "2:25", pointe: "2:15" },
                { n:  5, attaque: "2:15", transition: "2:25", base: "2:35", remontee: "2:25", soutenu: "2:20", pointe: "2:10" },
                { n:  6, attaque: "2:10", transition: "2:20", base: "2:30", remontee: "2:20", soutenu: "2:15", pointe: "2:05" },
                { n:  7, attaque: "2:05", transition: "2:15", base: "2:25", remontee: "2:15", soutenu: "2:10", pointe: "2:00" },
                { n:  8, attaque: "2:00", transition: "2:10", base: "2:20", remontee: "2:10", soutenu: "2:05", pointe: "1:55" },
                { n:  9, attaque: "1:55", transition: "2:05", base: "2:15", remontee: "2:05", soutenu: "2:00", pointe: "1:50" },
                { n: 10, attaque: "1:50", transition: "2:00", base: "2:10", remontee: "2:00", soutenu: "1:55", pointe: "1:45" },
                { n: 11, attaque: "1:45", transition: "1:55", base: "2:05", remontee: "1:55", soutenu: "1:50", pointe: "1:40" },
                { n: 12, attaque: "1:40", transition: "1:50", base: "2:00", remontee: "1:50", soutenu: "1:45", pointe: "1:35" }
            ]
        }
    },

    // SÉANCE SKIERG TEMPO
    // ══════════════════════════════════════════════════════════
    {
        title: "Séance SKIERG TEMPO",
        material: ["ski-erg"],
        body: "complet",
        duration: 40,
        type: "CARDIO",
        level: "Moyen",
        desc: "Séance structurée sur SkiErg Concept2 — 40 minutes avec 6 phases de travail progressif. 12 niveaux disponibles. Haut du corps dominant.",
        details: {
            format_label: "SKIERG TEMPO — 40 MINUTES",
            type_special: "avec_niveaux",
            conseil: "Séance sur SkiErg Concept2. Le split /500m est l'indicateur clé — il sera naturellement plus lent qu'au rameur (haut du corps uniquement). Les 12 niveaux couvrent du débutant au confirmé. Concentrez-vous sur la technique : traction des bras, gainage, flexion de hanches. Min 0-10 : échauffement avec 3 accélérations. Min 32-40 : retour au calme.",
            chargeable: true,
            niveaux: [
                { n:  1, attaque: "3:00", transition: "3:15", base: "3:25", remontee: "3:15", soutenu: "3:05", pointe: "2:55" },
                { n:  2, attaque: "2:55", transition: "3:05", base: "3:15", remontee: "3:05", soutenu: "3:00", pointe: "2:50" },
                { n:  3, attaque: "2:50", transition: "3:00", base: "3:10", remontee: "3:00", soutenu: "2:55", pointe: "2:45" },
                { n:  4, attaque: "2:45", transition: "2:55", base: "3:05", remontee: "2:55", soutenu: "2:50", pointe: "2:40" },
                { n:  5, attaque: "2:40", transition: "2:50", base: "3:00", remontee: "2:50", soutenu: "2:45", pointe: "2:35" },
                { n:  6, attaque: "2:35", transition: "2:45", base: "2:55", remontee: "2:45", soutenu: "2:40", pointe: "2:30" },
                { n:  7, attaque: "2:30", transition: "2:40", base: "2:50", remontee: "2:40", soutenu: "2:35", pointe: "2:25" },
                { n:  8, attaque: "2:25", transition: "2:35", base: "2:45", remontee: "2:35", soutenu: "2:30", pointe: "2:20" },
                { n:  9, attaque: "2:20", transition: "2:30", base: "2:40", remontee: "2:30", soutenu: "2:25", pointe: "2:15" },
                { n: 10, attaque: "2:15", transition: "2:25", base: "2:35", remontee: "2:25", soutenu: "2:20", pointe: "2:10" },
                { n: 11, attaque: "2:10", transition: "2:20", base: "2:30", remontee: "2:20", soutenu: "2:15", pointe: "2:05" },
                { n: 12, attaque: "2:05", transition: "2:15", base: "2:25", remontee: "2:15", soutenu: "2:10", pointe: "2:00" }
            ]
        }
    },

    // SÉANCE ASSAULT BIKE TEMPO
    // ══════════════════════════════════════════════════════════
    {
        title: "Séance ASSAULT BIKE TEMPO",
        material: ["assault-bike"],
        body: "complet",
        duration: 20,
        type: "CARDIO",
        level: "Intense",
        desc: "Séance structurée sur Assault Bike — 20 minutes intenses corps entier. 12 niveaux en RPM. 5 min échauffement + séquence TEMPO + 3 min retour au calme.",
        details: {
            format_label: "ASSAULT BIKE TEMPO — 20 MINUTES",
            type_special: "avec_niveaux",
            conseil: "L'Assault Bike est l'un des appareils les plus exigeants : la résistance augmente exponentiellement avec la vitesse. Les RPM sont votre boussole — maintenez-les constants pendant les phases d'effort. Récupération active (pédalage très léger) entre chaque phase, ne vous arrêtez pas. Ne sous-estimez jamais cet appareil : commencez au niveau 1 si vous le découvrez.",
            chargeable: true,
            niveaux: [
                { n:  1, attaque: "45-50",  transition: "40-45", base: "35-40", remontee: "42-47", soutenu: "45-50", pointe: "55-60"  },
                { n:  2, attaque: "50-55",  transition: "45-50", base: "38-43", remontee: "47-52", soutenu: "50-55", pointe: "60-65"  },
                { n:  3, attaque: "55-60",  transition: "50-55", base: "42-47", remontee: "52-57", soutenu: "55-60", pointe: "65-70"  },
                { n:  4, attaque: "58-63",  transition: "53-58", base: "45-50", remontee: "55-60", soutenu: "58-63", pointe: "68-73"  },
                { n:  5, attaque: "62-67",  transition: "57-62", base: "48-53", remontee: "58-63", soutenu: "62-67", pointe: "72-77"  },
                { n:  6, attaque: "65-70",  transition: "60-65", base: "52-57", remontee: "62-67", soutenu: "65-70", pointe: "75-80"  },
                { n:  7, attaque: "68-73",  transition: "63-68", base: "55-60", remontee: "65-70", soutenu: "68-73", pointe: "78-83"  },
                { n:  8, attaque: "72-77",  transition: "67-72", base: "58-63", remontee: "68-73", soutenu: "72-77", pointe: "82-87"  },
                { n:  9, attaque: "75-80",  transition: "70-75", base: "62-67", remontee: "72-77", soutenu: "75-80", pointe: "85-90"  },
                { n: 10, attaque: "78-83",  transition: "73-78", base: "65-70", remontee: "75-80", soutenu: "78-83", pointe: "88-93"  },
                { n: 11, attaque: "82-87",  transition: "77-82", base: "68-73", remontee: "78-83", soutenu: "82-87", pointe: "92-97"  },
                { n: 12, attaque: "85-90",  transition: "80-85", base: "72-77", remontee: "82-87", soutenu: "85-90", pointe: "95-100" }
            ]
        }
    },

    { title: "Séance RUN TEMPO sur tapis", material: ["tapis-incurve"], body: "bas", duration: 40, type: "CARDIO", level: "Moyen", desc: "séance de fractionné pyramidale. <br>▪️12 niveaux disponibles.  <br>▪️40 minutes",
      details: {
        format_label: "CARDIO PYRAMIDAL — 40 MINUTES",
        type_special: "run_tempo",
        conseil: "Séance parfaite sur tapis incurvé. Le niveau correspond approximativement aux paliers du Luc Léger. Min 1-10 : échauffement avec 3 accélérations de 30 sec. Min 33-40 : récupération course lente.",
        chargeable: true,
        niveaux: [
          { n: 1, phases: [
            { min: "10-11", vitesse: "9 à 10 km/h", type: "effort" },
            { min: "11-12", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "12-14", vitesse: "8 à 9 km/h", type: "effort" },
            { min: "14-15", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "15-18", vitesse: "7,5 à 8,5 km/h", type: "effort" },
            { min: "18-19", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "19-23", vitesse: "7,5 à 8,5 km/h", type: "effort" },
            { min: "23-24", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "24-27", vitesse: "8 à 9 km/h", type: "effort" },
            { min: "27-28", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "28-30", vitesse: "8,5 à 9,5 km/h", type: "effort" },
            { min: "30-31", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "31-32", vitesse: "9,5 à 10,5 km/h", type: "effort" },
            { min: "32-33", vitesse: "Récupération (course lente)", type: "recup" }
          ]},
          { n: 2, phases: [
            { min: "10-11", vitesse: "9,5 à 10,5 km/h", type: "effort" },
            { min: "11-12", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "12-14", vitesse: "8,5 à 9,5 km/h", type: "effort" },
            { min: "14-15", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "15-18", vitesse: "8 à 9 km/h", type: "effort" },
            { min: "18-19", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "19-23", vitesse: "8 à 9 km/h", type: "effort" },
            { min: "23-24", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "24-27", vitesse: "8,5 à 9,5 km/h", type: "effort" },
            { min: "27-28", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "28-30", vitesse: "9 à 10 km/h", type: "effort" },
            { min: "30-31", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "31-32", vitesse: "10 à 11 km/h", type: "effort" },
            { min: "32-33", vitesse: "Récupération (course lente)", type: "recup" }
          ]},
          { n: 3, phases: [
            { min: "10-11", vitesse: "10 à 11 km/h", type: "effort" },
            { min: "11-12", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "12-14", vitesse: "9 à 10 km/h", type: "effort" },
            { min: "14-15", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "15-18", vitesse: "8,5 à 9,5 km/h", type: "effort" },
            { min: "18-19", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "19-23", vitesse: "8,5 à 9,5 km/h", type: "effort" },
            { min: "23-24", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "24-27", vitesse: "9 à 10 km/h", type: "effort" },
            { min: "27-28", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "28-30", vitesse: "9,5 à 10,5 km/h", type: "effort" },
            { min: "30-31", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "31-32", vitesse: "10,5 à 11,5 km/h", type: "effort" },
            { min: "32-33", vitesse: "Récupération (course lente)", type: "recup" }
          ]},
          { n: 4, phases: [
            { min: "10-11", vitesse: "10,5 à 11,5 km/h", type: "effort" },
            { min: "11-12", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "12-14", vitesse: "9,5 à 10,5 km/h", type: "effort" },
            { min: "14-15", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "15-18", vitesse: "9 à 10 km/h", type: "effort" },
            { min: "18-19", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "19-23", vitesse: "9 à 10 km/h", type: "effort" },
            { min: "23-24", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "24-27", vitesse: "9,5 à 10,5 km/h", type: "effort" },
            { min: "27-28", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "28-30", vitesse: "10 à 11 km/h", type: "effort" },
            { min: "30-31", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "31-32", vitesse: "11 à 12 km/h", type: "effort" },
            { min: "32-33", vitesse: "Récupération (course lente)", type: "recup" }
          ]},
          { n: 5, phases: [
            { min: "10-11", vitesse: "11 à 12 km/h", type: "effort" },
            { min: "11-12", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "12-14", vitesse: "10 à 11 km/h", type: "effort" },
            { min: "14-15", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "15-18", vitesse: "9,5 à 10,5 km/h", type: "effort" },
            { min: "18-19", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "19-23", vitesse: "9,5 à 10,5 km/h", type: "effort" },
            { min: "23-24", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "24-27", vitesse: "10 à 11 km/h", type: "effort" },
            { min: "27-28", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "28-30", vitesse: "10,5 à 11,5 km/h", type: "effort" },
            { min: "30-31", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "31-32", vitesse: "11,5 à 12,5 km/h", type: "effort" },
            { min: "32-33", vitesse: "Récupération (course lente)", type: "recup" }
          ]},
          { n: 6, phases: [
            { min: "10-11", vitesse: "11,5 à 12,5 km/h", type: "effort" },
            { min: "11-12", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "12-14", vitesse: "10,5 à 11,5 km/h", type: "effort" },
            { min: "14-15", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "15-18", vitesse: "10 à 11 km/h", type: "effort" },
            { min: "18-19", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "19-23", vitesse: "10 à 11 km/h", type: "effort" },
            { min: "23-24", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "24-27", vitesse: "10,5 à 11,5 km/h", type: "effort" },
            { min: "27-28", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "28-30", vitesse: "11 à 12 km/h", type: "effort" },
            { min: "30-31", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "31-32", vitesse: "12 à 13 km/h", type: "effort" },
            { min: "32-33", vitesse: "Récupération (course lente)", type: "recup" }
          ]},
          { n: 7, phases: [
            { min: "10-11", vitesse: "12 à 13 km/h", type: "effort" },
            { min: "11-12", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "12-14", vitesse: "11 à 12 km/h", type: "effort" },
            { min: "14-15", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "15-18", vitesse: "10,5 à 11,5 km/h", type: "effort" },
            { min: "18-19", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "19-23", vitesse: "10,5 à 11,5 km/h", type: "effort" },
            { min: "23-24", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "24-27", vitesse: "11 à 12 km/h", type: "effort" },
            { min: "27-28", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "28-30", vitesse: "11,5 à 12,5 km/h", type: "effort" },
            { min: "30-31", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "31-32", vitesse: "12,5 à 13,5 km/h", type: "effort" },
            { min: "32-33", vitesse: "Récupération (course lente)", type: "recup" }
          ]},
          { n: 8, phases: [
            { min: "10-11", vitesse: "13 à 14 km/h", type: "effort" },
            { min: "11-12", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "12-14", vitesse: "11,5 à 12,5 km/h", type: "effort" },
            { min: "14-15", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "15-18", vitesse: "11 à 12 km/h", type: "effort" },
            { min: "18-19", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "19-23", vitesse: "11 à 12 km/h", type: "effort" },
            { min: "23-24", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "24-27", vitesse: "11,5 à 12,5 km/h", type: "effort" },
            { min: "27-28", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "28-30", vitesse: "12,5 à 13,5 km/h", type: "effort" },
            { min: "30-31", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "31-32", vitesse: "13,5 à 14,5 km/h", type: "effort" },
            { min: "32-33", vitesse: "Récupération (course lente)", type: "recup" }
          ]},
          { n: 9, phases: [
            { min: "10-11", vitesse: "13,5 à 14,5 km/h", type: "effort" },
            { min: "11-12", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "12-14", vitesse: "12 à 13 km/h", type: "effort" },
            { min: "14-15", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "15-18", vitesse: "11,5 à 12,5 km/h", type: "effort" },
            { min: "18-19", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "19-23", vitesse: "11,5 à 12,5 km/h", type: "effort" },
            { min: "23-24", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "24-27", vitesse: "12 à 13 km/h", type: "effort" },
            { min: "27-28", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "28-30", vitesse: "13 à 14 km/h", type: "effort" },
            { min: "30-31", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "31-32", vitesse: "14 à 15 km/h", type: "effort" },
            { min: "32-33", vitesse: "Récupération (course lente)", type: "recup" }
          ]},
          { n: 10, phases: [
            { min: "10-11", vitesse: "14 à 15 km/h", type: "effort" },
            { min: "11-12", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "12-14", vitesse: "12,5 à 13,5 km/h", type: "effort" },
            { min: "14-15", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "15-18", vitesse: "12 à 13 km/h", type: "effort" },
            { min: "18-19", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "19-23", vitesse: "12 à 13 km/h", type: "effort" },
            { min: "23-24", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "24-27", vitesse: "12,5 à 13,5 km/h", type: "effort" },
            { min: "27-28", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "28-30", vitesse: "13,5 à 14,5 km/h", type: "effort" },
            { min: "30-31", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "31-32", vitesse: "14,5 à 15,5 km/h", type: "effort" },
            { min: "32-33", vitesse: "Récupération (course lente)", type: "recup" }
          ]},
          { n: 11, phases: [
            { min: "10-11", vitesse: "14,5 à 15,5 km/h", type: "effort" },
            { min: "11-12", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "12-14", vitesse: "13 à 14 km/h", type: "effort" },
            { min: "14-15", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "15-18", vitesse: "12,5 à 13,5 km/h", type: "effort" },
            { min: "18-19", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "19-23", vitesse: "12,5 à 13,5 km/h", type: "effort" },
            { min: "23-24", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "24-27", vitesse: "13 à 14 km/h", type: "effort" },
            { min: "27-28", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "28-30", vitesse: "14 à 15 km/h", type: "effort" },
            { min: "30-31", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "31-32", vitesse: "15,5 à 16,5 km/h", type: "effort" },
            { min: "32-33", vitesse: "Récupération (course lente)", type: "recup" }
          ]},
          { n: 12, phases: [
            { min: "10-11", vitesse: "15 à 16 km/h", type: "effort" },
            { min: "11-12", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "12-14", vitesse: "13,5 à 14,5 km/h", type: "effort" },
            { min: "14-15", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "15-18", vitesse: "13 à 14 km/h", type: "effort" },
            { min: "18-19", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "19-23", vitesse: "13 à 14 km/h", type: "effort" },
            { min: "23-24", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "24-27", vitesse: "13,5 à 14,5 km/h", type: "effort" },
            { min: "27-28", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "28-30", vitesse: "14,5 à 15,5 km/h", type: "effort" },
            { min: "30-31", vitesse: "Récupération (course lente)", type: "recup" },
            { min: "31-32", vitesse: "16 à 17 km/h", type: "effort" },
            { min: "32-33", vitesse: "Récupération (course lente)", type: "recup" }
          ]}
        ]
      }},

    

    // ══════════════════════════════════════════════════════════
    // SÉANCE TEST — INTERVALLES (décommenter pour activer)
    // ══════════════════════════════════════════════════════════
    //{
    //    title: "TEST — Séance Intervalles",
    //    material: ["poids-corps"],
    //    body: "complet",
    //    duration: 35,
    //    type: "CARDIO",
    //    level: "Moyen",
    //    desc: "Séance test : warmup avec timer, 12x travail avec objectifs reps/rounds, repos chronométré, retour au calme sans timer.",
    //    details: {
    //        format_label: "INTERVALLES — 35 MINUTES",
    //        exercises: [
    //            { text: "Warmup 10 min (avec timer)" },
    //            { text: "12 × Burpees — objectif 10 reps / 3 rounds" },
    //            { text: "Repos 90 sec (timer)" },
    //            { text: "Retour au calme (sans timer)" }
    //        ],
    //        conseil: "Séance de test pour valider le chargement de l'onglet Intervalles.",
    //        chargeable: true,
    //        chargement: {
    //            type: "intervalles",
    //            nom: "TEST — Séance Intervalles",
    //            blocs: [
    //                { type: "warmup",  reps: 1,  hasTimer: true,  dur: 600, instr: "Échauffement général — mobilisation + course légère" },
    //                { type: "travail", reps: 5,  hasTimer: true,  dur: 60, repsObj: 0, rndsObj: 0, instr: "Gainage planche — tenir 1 minute" },
    //                { type: "travail", reps: 12, repsObj: 10, rndsObj: 3,   instr: "Burpees — effort maximal (sans timer)" },
    //                { type: "repos",   reps: 1,  dur: 90,                   instr: "Récupération active — marche ou course lente" },
    //                { type: "recup",   reps: 1,  hasTimer: false,           instr: "Retour au calme — étirements légers" }
    //            ]
    //        }
    //    }
    //},
    {
        title: "Séance de Fractionné course à pied (run) Confirmé",
        material: ["poids-corps", "tapis-incurve"],
        body: "complet",
        duration: 0,
        type: "CARDIO",
        level: "Intense",
        desc: "Séance fractionné : 10X400 mètres / récup:1 minute",
        details: {
            format_label: "FRACTIONNE - FOR TIME",
            exercises: [
                { text: "Echauffement de 10 min, 3 accélérations " },
                { text: "10 × 400 mètres actif: allure de course élevée. objectif: allure constante sur les 10 séries" },
                { text: "Repos 1 minute : course lente" },
                { text: "Retour au calme : 5 minutes, course lente et/ou étirement léger" }
            ],
            conseil: "Allure constante sur les 10 séries. les courses de récupération sont très lente pendant la minute",
            chargeable: true,
            chargement: {
                type: "intervalles",
                nom: "Séance fractionné : 10X400 mètres / récup:1 minute",
                blocs: [
                    { type: "warmup",  reps: 1,  hasTimer: true,  dur: 600, instr: "Echauffement de 10 min, 3 accélérations" },
                    { type: "travail", reps: 1, instr: "<strong><u>400 MÈTRES ACTIFS</u></strong> 1/10 - <em>(cliquer sur 'étape suivante' quand les 400m sont effectués)</em>" },
                    { type: "repos",   reps: 1,  dur: 60,                   instr: "Récupération active — marche ou course lente" },
                    { type: "travail", reps: 1, instr: "<strong><u>400 MÈTRES ACTIFS</u></strong> 2/10 - <em>(cliquer sur 'étape suivante' quand les 400m sont effectués)</em>" },
                    { type: "repos",   reps: 1,  dur: 60,                   instr: "Récupération active — marche ou course lente" },
                    { type: "travail", reps: 1, instr: "<strong><u>400 MÈTRES ACTIFS</u></strong> 3/10 - <em>(cliquer sur 'étape suivante' quand les 400m sont effectués)</em>" },
                    { type: "repos",   reps: 1,  dur: 60,                   instr: "Récupération active — marche ou course lente" },
                    { type: "travail", reps: 1, instr: "<strong><u>400 MÈTRES ACTIFS</u></strong> 4/10 - <em>(cliquer sur 'étape suivante' quand les 400m sont effectués)</em>" },
                    { type: "repos",   reps: 1,  dur: 60,                   instr: "Récupération active — marche ou course lente" },
                    { type: "travail", reps: 1, instr: "<strong><u>400 MÈTRES ACTIFS</u></strong> 5/10 - <em>(cliquer sur 'étape suivante' quand les 400m sont effectués)</em>" },
                    { type: "repos",   reps: 1,  dur: 60,                   instr: "Récupération active — marche ou course lente" },
                    { type: "travail", reps: 1, instr: "<strong><u>400 MÈTRES ACTIFS</u></strong> 6/10 - <em>(cliquer sur 'étape suivante' quand les 400m sont effectués)</em>" },
                    { type: "repos",   reps: 1,  dur: 60,                   instr: "Récupération active — marche ou course lente" },
                    { type: "travail", reps: 1, instr: "<strong><u>400 MÈTRES ACTIFS</u></strong> 7/10 - <em>(cliquer sur 'étape suivante' quand les 400m sont effectués)</em>" },
                    { type: "repos",   reps: 1,  dur: 60,                   instr: "Récupération active — marche ou course lente" },
                    { type: "travail", reps: 1, instr: "<strong><u>400 MÈTRES ACTIFS</u></strong> 8/10 - <em>(cliquer sur 'étape suivante' quand les 400m sont effectués)</em>" },
                    { type: "repos",   reps: 1,  dur: 60,                   instr: "Récupération active — marche ou course lente" },
                    { type: "travail", reps: 1, instr: "<strong><u>400 MÈTRES ACTIFS</u></strong> 9/10 - <em>(cliquer sur 'étape suivante' quand les 400m sont effectués)</em>" },
                    { type: "repos",   reps: 1,  dur: 60,                   instr: "Récupération active — marche ou course lente" },
                    { type: "travail", reps: 1, instr: "<strong><u>400 MÈTRES ACTIFS</u></strong> 10/10 - <em>(cliquer sur 'étape suivante' quand les 400m sont effectués)</em>" },
                    { type: "recup",   reps: 1,  hasTimer: true,  dur: 300 , instr: "Retour au calme — étirements légers" }
                ]
            }
        }
    }




];

// Données séances fractionné course
const fractionneSéances = {
    debutant: [
        { seance: "10 × 200m vite",        recup: "100m de récupération" },
        { seance: "12 × 30 sec effort",     recup: "30 sec de récupération" },
        { seance: "6 × 400m",               recup: "200m de récupération" },
        { seance: "8 × 1 min effort",       recup: "1 min de récupération" },
        { seance: "3 × 800m",               recup: "400m de récupération" },
        { seance: "3 × 3 min effort",       recup: "1 min 30 de récupération" },
        { seance: "3 × 1000m",              recup: "400m de récupération" },
        { seance: "3 × 5 min effort",       recup: "2 min 30 de récupération" },
        { seance: "2 × 2000m",              recup: "600m de récupération" }
    ],
    confirme: [
        { seance: "2 × (8 × 200m)",         recup: "r=40s, R=2min entre séries" },
        { seance: "2 × (10 × 30sec-30sec)", recup: "R=2min entre séries" },
        { seance: "10 × 400m",              recup: "Récup = 1 min" },
        { seance: "10 × 1min30",            recup: "Récup = 1 min" },
        { seance: "6 × 800m",               recup: "R = 1 min 30" },
        { seance: "7 × 3 min",              recup: "R = 1 min 30" },
        { seance: "5 × 1000m",              recup: "R = 2 min" },
        { seance: "5 × 4 min",              recup: "R = 2 min" },
        { seance: "3000m - 2000m - 1000m",  recup: "R = 2 min 30" }
    ]
};

// =============================================
// FAVORIS
// =============================================

function getFavoris() {
    try { return JSON.parse(localStorage.getItem('favoris') || '[]'); }
    catch(e) { return []; }
}

function toggleFavori(title, btn) {
    var favoris = getFavoris();
    var idx = favoris.indexOf(title);
    if (idx === -1) {
        favoris.push(title);
        btn.textContent = '❤️';
        btn.title = 'Retirer des favoris';
    } else {
        favoris.splice(idx, 1);
        btn.textContent = '🤍';
        btn.title = 'Ajouter aux favoris';
    }
    localStorage.setItem('favoris', JSON.stringify(favoris));
}

function displayWorkouts() {
    const grid = document.getElementById('workout-grid');
    
    // Récupération de la recherche textuelle
    const searchInput = document.getElementById('search-input');
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : "";
    
    // Récupération des filtres
    const matFilter = document.getElementById('filter-material').value;
    const bodyFilter = document.getElementById('filter-body').value;
    const timeFilter = document.getElementById('filter-time').value;
    const typeFilter = document.getElementById('filter-type') ? document.getElementById('filter-type').value : 'all';
    const levelFilter = document.getElementById('levelFilter') ? document.getElementById('levelFilter').value : 'all';
    const favorisFilter = document.getElementById('filter-favoris') ? document.getElementById('filter-favoris').value : 'all';
    const favoris = getFavoris();

    const filtered = workouts.filter(w => {
        const matchSearch = w.title.toLowerCase().includes(searchTerm) || 
                            w.desc.toLowerCase().includes(searchTerm);

        const matchMat = matFilter === 'all' || (Array.isArray(w.material) ? w.material.includes(matFilter) : w.material === matFilter);
        const matchBody = bodyFilter === 'all' || w.body === bodyFilter;
        const matchType = typeFilter === 'all' || w.type === typeFilter;
        const matchLevel = levelFilter === 'all' || w.level === levelFilter; // AJOUT

        let matchTime = true;
        if (timeFilter === 'court') matchTime = w.duration > 0 && w.duration < 15;
        else if (timeFilter === 'moyen') matchTime = w.duration >= 15 && w.duration <= 30;
        else if (timeFilter === 'long') matchTime = w.duration > 30;
        else if (timeFilter === 'libre') matchTime = w.duration === 0;

        const matchFavoris = favorisFilter === 'all' || (favorisFilter === 'favoris' && favoris.includes(w.title));
        return matchSearch && matchMat && matchBody && matchType && matchLevel && matchTime && matchFavoris;
    });

    // Gestion du compteur
    let counter = document.getElementById('workout-counter');
    if (!counter) {
        counter = document.createElement('p');
        counter.id = 'workout-counter';
        counter.style.cssText = 'font-weight:bold; margin-bottom:20px;';
        grid.parentNode.insertBefore(counter, grid);
    }
    counter.innerText = `${filtered.length} séance(s) trouvée(s)`;

    grid.innerHTML = '';

    filtered.forEach(workout => {
        const typeClass = workout.type ? `card-${workout.type.toLowerCase().replace(/\s+/g, '-')}` : '';
        const materialTags = Array.isArray(workout.material) ? 
                             workout.material.map(m => `<span class="tag tag-material">${m}</span>`).join('') : 
                             `<span class="tag tag-material">${workout.material}</span>`;
        const durationText = workout.duration === 0 ? "Temps libre" : `${workout.duration} min`;

        // Bouton modale si details dispo, sinon fallback PDF
        const btnHtml = workout.details ?
            `<button onclick="openModal(${workouts.indexOf(workout)})" class="btn-full">📋 Voir la séance</button>` :
            `<a href="${workout.pdf || '#'}" target="_blank" class="btn-full">Ouvrir la fiche PDF</a>`;

        const isFavori = favoris.includes(workout.title);
        const titleEscaped = workout.title.replace(/'/g, "\\'");
        const favBtn = `<button class="btn-favori" onclick="toggleFavori('${titleEscaped}', this)" title="${isFavori ? 'Retirer des favoris' : 'Ajouter aux favoris'}">${isFavori ? '❤️' : '🤍'}</button>`;

        grid.innerHTML += `
            <div class="card ${typeClass}">
                <div>
                    <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                        <div style="flex:1;">${materialTags}<span class="tag tag-body">${workout.body}</span><span class="tag tag-time">${durationText}</span><span class="tag tag-${workout.level.toLowerCase()}">${workout.level}</span></div>
                        ${favBtn}
                    </div>
                    <h3>${workout.title}</h3>
                    <div class="card-desc">${workout.desc}</div>
                </div>
                <div class="card-buttons">
                    ${btnHtml}
                </div>
            </div>
        `;
    });
}

// =============================================
// MODALE
// =============================================

function openModal(index) {
    var i, activeClass; // variables partagées entre les boucles
    const w = workouts[index];
    const d = w.details;
    if (!d) return;

    document.getElementById('modal-title').textContent = w.title;

    const box = document.getElementById('modal-box');
    box.className = 'type-' + w.type.toLowerCase().replace(/\s+/g, '-');

    const durationText = w.duration === 0 ? 'Temps libre' : w.duration + ' min';
    const levelClass = 'modal-badge-level-' + w.level.toLowerCase();
    const matList = Array.isArray(w.material) ? w.material.join(', ') : w.material;
    document.getElementById('modal-badges').innerHTML =
        '<span class="modal-badge modal-badge-type">' + w.type + '</span>' +
        '<span class="modal-badge modal-badge-body">' + w.body + '</span>' +
        '<span class="modal-badge modal-badge-time">&#x23F1; ' + durationText + '</span>' +
        '<span class="modal-badge modal-badge-mat">&#x1F3CB; ' + matList + '</span>' +
        '<span class="modal-badge ' + levelClass + '">' + w.level + '</span>';

    let html = '';

    // Cas spécial RUN TEMPO : sélecteur de niveau (traitement avant tout le reste)
    // Cas spécial 4 ergomètres
    if (d.type_special === 'quatre_ergo') {
        html += '<p class="modal-format-label">' + d.format_label + '</p>';
        html += '<div class="run-tempo-selector">';
        html += '<p class="modal-section-title">Choisir votre niveau</p>';
        html += '<div class="niveau-buttons">';
        for (i = 1; i <= 12; i++) {
            activeClass = i === 1 ? ' active' : '';
            html += '<button class="btn-niveau' + activeClass + '" onclick="selectNiveauErgo(' + i + ')" id="btn-ergo-' + i + '">' + i + '</button>';
        }
        html += '</div></div>';
        html += '<div id="ergo-phases"></div>';
        if (d.conseil) {
            html += '<div class="modal-conseil"><strong>&#x1F4A1; Conseil</strong>' + d.conseil + '</div>';
        }
        document.getElementById('modal-body').innerHTML = html;
        window._niveauxActifs = d.niveaux;
        window._niveauActif   = 1;
        selectNiveauErgo(1);

        var rtOverlay2 = document.getElementById('modal-overlay');
        rtOverlay2.classList.add('open');
        document.body.style.overflow = 'hidden';

        var footer3 = document.getElementById('modal-footer');
        var existingBtn3 = document.getElementById('btn-charger');
        if (existingBtn3) existingBtn3.remove();
        if (d.chargeable && footer3) {
            var btnCharger3 = document.createElement('button');
            btnCharger3.id = 'btn-charger';
            btnCharger3.className = 'btn-modal-charger';
            btnCharger3.textContent = '🚀 Charger dans Ma Séance';
            btnCharger3.onclick = function() { chargerSeanceErgo(); };
            footer3.insertBefore(btnCharger3, footer3.firstChild);
        }
        return;
    }

    // ── BikeERG FORCE : double sélecteur damper + RPM ──────────────────────────
    if (d.type_special === 'bikeerg_force') {
        html += '<p class="modal-format-label">' + d.format_label + '</p>';

        // Sélecteur Damper
        html += '<div class="run-tempo-selector">';
        html += '<p class="modal-section-title">🎛 Choisir le Damper (résistance)</p>';
        html += '<div class="niveau-buttons">';
        d.dampers.forEach(function(v, i) {
            var activeClass = i === 0 ? ' active' : '';
            html += '<button class="btn-niveau' + activeClass + '" id="btn-damper-' + v + '" onclick="selectBikeERGDamper(' + v + ')">' + v + '</button>';
        });
        html += '</div></div>';

        // Sélecteur RPM
        html += '<div class="run-tempo-selector" style="margin-top:12px;">';
        html += '<p class="modal-section-title">⚡ Choisir la plage RPM cible</p>';
        html += '<div class="niveau-buttons">';
        d.rpms.forEach(function(v, i) {
            var activeClass = i === 0 ? ' active' : '';
            html += '<button class="btn-niveau btn-niveau-wide' + activeClass + '" id="btn-rpm-' + i + '" onclick="selectBikeERGRpm(' + i + ')">' + v + '</button>';
        });
        html += '</div></div>';

        // Zone de synthèse
        html += '<div id="bikeerg-synthese"></div>';

        if (d.conseil) {
            html += '<div class="modal-conseil"><strong>&#x1F4A1; Conseil</strong> ' + d.conseil + '</div>';
        }

        document.getElementById('modal-body').innerHTML = html;
        window._bikeergDampers = d.dampers;
        window._bikeergRpms   = d.rpms;
        window._bikeergDamper = d.dampers[0];
        window._bikeergRpmIdx = 0;
        _updateBikeERGSynthese();

        document.getElementById('modal-overlay').classList.add('open');
        document.body.style.overflow = 'hidden';

        // Bouton Charger
        var footerBike = document.getElementById('modal-footer');
        var existingBtnBike = document.getElementById('btn-charger');
        if (existingBtnBike) existingBtnBike.remove();
        if (d.chargeable && footerBike) {
            var btnChargerBike = document.createElement('button');
            btnChargerBike.id = 'btn-charger';
            btnChargerBike.className = 'btn-modal-charger';
            btnChargerBike.textContent = '🚀 Charger dans Ma Séance';
            btnChargerBike.onclick = function() { chargerSeanceBikeERGForce(); };
            footerBike.insertBefore(btnChargerBike, footerBike.firstChild);
        }
        return;
    }

    if (d.type_special === 'run_tempo' || d.type_special === 'avec_niveaux') {
        html += '<p class="modal-format-label">' + d.format_label + '</p>';
        html += '<div class="run-tempo-selector">';
        html += '<p class="modal-section-title">Choisir votre niveau</p>';
        html += '<div class="niveau-buttons">';
        for (i = 1; i <= 12; i++) {
            activeClass = i === 1 ? ' active' : '';
            var isRameurType2 = d.niveaux && d.niveaux[0] && d.niveaux[0].attaque !== undefined;
            var isSkiErgBtn = isRameurType2 && w.material && (Array.isArray(w.material) ? w.material.includes('ski-erg') : w.material === 'ski-erg');
            var isAssaultBtn = isRameurType2 && w.material && (Array.isArray(w.material) ? w.material.includes('assault-bike') : w.material === 'assault-bike');
            var fnSelect = isRameurType2 ?
                (isAssaultBtn ? 'selectNiveauAssaultBike' : isSkiErgBtn ? 'selectNiveauSkiErg' : 'selectNiveauRameur') :
                'selectNiveau';
            html += '<button class="btn-niveau' + activeClass + '" onclick="' + fnSelect + '(' + i + ')" id="btn-niveau-' + i + '">' + i + '</button>';
        }
        html += '</div></div>';
        html += '<div id="run-tempo-phases"></div>';
        if (d.conseil) {
            html += '<div class="modal-conseil"><strong>&#x1F4A1; Conseil</strong>' + d.conseil + '</div>';
        }
        document.getElementById('modal-body').innerHTML = html;
        window._niveauxActifs = d.niveaux;
        window._niveauActif = 1;

        // Détecter rameur, skierg, assault bike ou run tempo
        var isAvecAttaque = (d.niveaux && d.niveaux[0] && d.niveaux[0].attaque !== undefined);
        var isSkiErg     = isAvecAttaque && w.material && (Array.isArray(w.material) ? w.material.includes('ski-erg')      : w.material === 'ski-erg');
        var isAssaultBike = isAvecAttaque && w.material && (Array.isArray(w.material) ? w.material.includes('assault-bike') : w.material === 'assault-bike');
        var isRameur2    = isAvecAttaque && !isSkiErg && !isAssaultBike;
        if (isAssaultBike) {
            selectNiveauAssaultBike(1);
        } else if (isSkiErg) {
            selectNiveauSkiErg(1);
        } else if (isRameur2) {
            selectNiveauRameur(1);
        } else {
            selectNiveau(1);
        }

        var rtOverlay = document.getElementById('modal-overlay');
        rtOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';

        // Bouton Charger
        var footer2 = document.getElementById('modal-footer');
        var existingBtn2 = document.getElementById('btn-charger');
        if (existingBtn2) existingBtn2.remove();
        if (d.chargeable && footer2) {
            var btnCharger2 = document.createElement('button');
            btnCharger2.id = 'btn-charger';
            btnCharger2.className = 'btn-modal-charger';
            btnCharger2.textContent = '🚀 Charger dans Ma Séance';
            if (isAssaultBike) {
                btnCharger2.onclick = function() { chargerSeanceAssaultBike(); };
            } else if (isSkiErg) {
                btnCharger2.onclick = function() { chargerSeanceSkiErg(); };
            } else if (isRameur2) {
                btnCharger2.onclick = function() { chargerSeanceRameur(); };
            } else {
                btnCharger2.onclick = function() { chargerSeance({ type: 'avec_niveaux' }); };
            }
            footer2.insertBefore(btnCharger2, footer2.firstChild);
        }
        return;
    }

    html += '<p class="modal-format-label">' + d.format_label + '</p>';
    if (d.intro) html += '<p class="modal-intro">' + d.intro + '</p>';
    if (d.image) html += '<div style="text-align:center;"><img src="' + d.image + '" alt="" style="max-width:100%; max-height:420px; width:auto; height:auto; border-radius:8px; margin-bottom:12px; display:inline-block;"></div>';
    if (d.video) {html += '<video src="' + d.video + '" controls style="width:100%; border-radius:8px; margin-bottom:12px;"></video>';}
    if (d.youtube) {html += '<a href="https://www.youtube.com/watch?v=' + d.youtube + '" target="_blank" class="btn-full" style="margin-bottom:12px;">▶ Voir la vidéo sur YouTube</a>';}
    // Cas spécial fractionné course
    if (d.type_special === 'fractionne') {
        html += '<p class="modal-intro">🔥 S\'échauffer 10 minutes avant chaque séance.</p>';
        html += '<div class="modal-scaled" style="margin-bottom:12px">';
        html += '<p class="modal-section-title">🟢 Coureur Débutant</p>';
        html += '<ul class="modal-exercises">';
        fractionneSéances.debutant.forEach(function(s) {
            html += '<li><strong>' + s.seance + '</strong> — ' + s.recup + '</li>';
        });
        html += '</ul></div>';
        html += '<div class="modal-scaled">';
        html += '<p class="modal-section-title">🔴 Coureur Confirmé (- de 40min au 10km)</p>';
        html += '<ul class="modal-exercises">';
        fractionneSéances.confirme.forEach(function(s) {
            html += '<li><strong>' + s.seance + '</strong> — ' + s.recup + '</li>';
        });
        html += '</ul></div>';
        if (d.conseil) html += '<div class="modal-conseil"><strong>&#x1F4A1; Conseil</strong>' + d.conseil + '</div>';
        document.getElementById('modal-body').innerHTML = html;
        var overlay = document.getElementById('modal-overlay');
        overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
        return;
    }

    html += '<ul class="modal-exercises">';
    d.exercises.forEach(function(ex) {
        var hasMedia = ex.youtube || ex.video || ex.image;
        if (hasMedia) {
            var mediaType = ex.youtube ? 'youtube' : (ex.video ? 'video' : 'image');
            var mediaSrc  = ex.youtube ? ex.youtube : (ex.video ? ex.video : ex.image);
            html += '<li><a href="#" class="modal-ex-img-link" onclick="modalShowMedia(\'' + mediaType + '\',\'' + mediaSrc.replace(/'/g,"\'") + '\');return false;" title="Voir le mouvement">' + ex.text + '</a></li>';
        } else {
            html += '<li>' + ex.text + '</li>';
        }
    });
    html += '</ul>';

    // Exemple concret (ex: séance pompes)
    if (d.exemple) {
        html += '<div class="modal-scaled">';
        html += '<p class="modal-section-title">&#x1F4CA; ' + d.exemple.titre + '</p>';
        html += '<p class="modal-intro">' + d.exemple.texte + '</p>';
        html += '<ul class="modal-exercises">';
        d.exemple.series.forEach(function(s) {
            html += '<li style="font-family:monospace;letter-spacing:4px;font-weight:bold">' + s + '</li>';
        });
        html += '</ul></div>';
    }

    // Gainage complémentaire
    if (d.gainage) {
        html += '<div class="modal-scaled">';
        html += '<p class="modal-section-title">Gainage complémentaire</p>';
        html += '<ul class="modal-exercises">';
        d.gainage.forEach(function(ex) { html += '<li>' + ex.text + '</li>'; });
        html += '</ul></div>';
    }

    // Version scaled
    if (d.scaled) {
        html += '<div class="modal-scaled">';
        if (d.scaled.intro) html += '<p class="modal-intro">' + d.scaled.intro + '</p>';
        html += '<ul class="modal-exercises">';
        d.scaled.exercises.forEach(function(ex) { html += '<li>' + ex.text + '</li>'; });
        html += '</ul></div>';
    }

    if (d.conseil) {
        html += '<div class="modal-conseil"><strong>&#x1F4A1; Conseil</strong>' + d.conseil + '</div>';
    }

    document.getElementById('modal-body').innerHTML = html;

    // Bouton "Charger dans Ma Séance" si chargeable
    var footerMain = document.getElementById('modal-footer');
    var existingBtnMain = document.getElementById('btn-charger');
    if (existingBtnMain) existingBtnMain.remove();
    if (d.chargeable && d.chargement) {
        var btnCharger = document.createElement('button');
        btnCharger.id = 'btn-charger';
        btnCharger.className = 'btn-modal-charger';
        btnCharger.textContent = '🚀 Charger dans Ma Séance';
        btnCharger.onclick = function() { chargerSeance(d.chargement); };
        footerMain.insertBefore(btnCharger, footerMain.firstChild);
    }

    const modalOverlay = document.getElementById('modal-overlay');
    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

// ══════════════════════════════════════════════════════
// IMAGE POPUP — modale index
// ══════════════════════════════════════════════════════
function modalShowMedia(type, src) {
    // Supprimer un overlay existant pour reconstruire proprement
    var old = document.getElementById('modal-img-overlay');
    if (old) old.remove();

    var overlay = document.createElement('div');
    overlay.id = 'modal-img-overlay';
    overlay.style.cssText = 'display:flex;position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:9999;align-items:center;justify-content:center;padding:20px;box-sizing:border-box;';

    // Bouton fermer
    var btnClose = document.createElement('button');
    btnClose.textContent = '✕';
    btnClose.style.cssText = 'position:fixed;top:14px;right:14px;background:#fff;border:none;border-radius:50%;width:40px;height:40px;font-size:1.2em;cursor:pointer;z-index:10000;box-shadow:0 2px 8px rgba(0,0,0,0.3);';
    btnClose.onclick = function(e) { e.stopPropagation(); overlay.remove(); };
    overlay.appendChild(btnClose);

    // Contenu selon le type
    if (type === 'image') {
        var img = document.createElement('img');
        img.src = src;
        img.style.cssText = 'max-width:95vw;max-height:90vh;object-fit:contain;border-radius:10px;box-shadow:0 4px 30px rgba(0,0,0,0.5);';
        overlay.appendChild(img);
        overlay.onclick = function() { overlay.remove(); };

    } else if (type === 'video') {
        var vid = document.createElement('video');
        vid.src = src;
        vid.controls = true;
        vid.autoplay = true;
        vid.style.cssText = 'max-width:95vw;max-height:90vh;border-radius:10px;box-shadow:0 4px 30px rgba(0,0,0,0.5);';
        overlay.appendChild(vid);

    } else if (type === 'youtube') {
        var wrap = document.createElement('div');
        wrap.style.cssText = 'width:min(95vw,800px);aspect-ratio:16/9;position:relative;';
        var iframe = document.createElement('iframe');
        iframe.src = 'https://www.youtube.com/embed/' + src + '?autoplay=1';
        iframe.style.cssText = 'width:100%;height:100%;border:none;border-radius:10px;';
        iframe.allow = 'autoplay;encrypted-media';
        iframe.allowFullscreen = true;
        wrap.appendChild(iframe);
        overlay.appendChild(wrap);
        // Note hors ligne
        var note = document.createElement('p');
        note.textContent = '⚠️ Nécessite une connexion internet';
        note.style.cssText = 'position:fixed;bottom:16px;color:rgba(255,255,255,0.6);font-size:0.8em;';
        overlay.appendChild(note);
    }

    document.body.appendChild(overlay);
}


function chargerSeance(chargement) {
    // Cas muscu : passage direct avec données structurées
    if (chargement && chargement.type === 'muscu') {
        const encoded = encodeURIComponent(JSON.stringify(chargement));
        window.location.href = 'seances_perso.html?seance=' + encoded;
        return;
    }
    // Cas spécial Run Tempo : construire les phases depuis le niveau actif
    if (chargement && chargement.type === 'avec_niveaux') {
        var niveauActif = window._niveauActif || 1;
        var niveaux = window._niveauxActifs;
        var niveau = niveaux ? niveaux.find(function(nv) { return nv.n === niveauActif; }) : null;
        if (niveau) {
            var phases = [];
            // Échauffement 10 min
            phases.push({ type: 'warmup', sec: 600, text: 'Échauffement — course lente avec 3 accélérations de 30sec' });
            // Phases du niveau sélectionné
            niveau.phases.forEach(function(p) {
                var dureeMin = p.min.split('-');
                var debut = parseFloat(dureeMin[0]);
                var fin = parseFloat(dureeMin[1]);
                var sec = Math.round((fin - debut) * 60);
                var type = p.type === 'effort' ? 'travail' : 'repos';
                phases.push({ type: type, sec: sec, text: p.vitesse });
            });
            // Récupération 7 min
            phases.push({ type: 'recup', sec: 420, text: 'Récupération post-entraînement — course lente' });
            chargement = {
                type: 'surmesure',
                nom: 'Run Tempo — Niveau ' + niveauActif,
                phases: phases
            };
        }
    }
    const encoded = encodeURIComponent(JSON.stringify(chargement));
    window.location.href = 'seances_perso.html?seance=' + encoded;
}

function selectNiveau(n) {
    window._niveauActif = n; // Mémoriser le niveau sélectionné
    var niveaux = window._niveauxActifs;
    if (!niveaux) return;
    var niveau = niveaux.find(function(nv) { return nv.n === n; });
    if (!niveau) return;

    // Mettre à jour les boutons
    for (var i = 1; i <= 12; i++) {
        var btn = document.getElementById('btn-niveau-' + i);
        if (btn) btn.className = 'btn-niveau' + (i === n ? ' active' : '');
    }

    // Construire le tableau des phases
    var phaseHtml = '<div class="run-tempo-phases-wrap">';
    phaseHtml += '<p class="modal-intro">Min 1-10 : Échauffement — course lente avec 3 accélérations de 30 sec</p>';
    phaseHtml += '<ul class="modal-exercises run-tempo-list">';
    niveau.phases.forEach(function(p) {
        var cls = p.type === 'effort' ? ' run-effort' : ' run-recup';
        var icon = p.type === 'effort' ? '🏃' : '😮‍💨';
        phaseHtml += '<li class="' + cls + '">';
        phaseHtml += '<span class="run-min">Min ' + p.min + '</span>';
        phaseHtml += '<span class="run-speed">' + icon + ' ' + p.vitesse + '</span>';
        phaseHtml += '</li>';
    });
    phaseHtml += '</ul>';
    phaseHtml += '<p class="modal-intro" style="margin-top:10px">Min 33-40 : Récupération — course lente</p>';
    phaseHtml += '</div>';

    var container = document.getElementById('run-tempo-phases');
    if (container) container.innerHTML = phaseHtml;
}

function selectNiveauErgo(n) {
    window._niveauActif = n;
    var niveaux = window._niveauxActifs;
    if (!niveaux) return;
    var niveau = niveaux.find(function(nv) { return nv.n === n; });
    if (!niveau) return;

    for (var i = 1; i <= 12; i++) {
        var btn = document.getElementById('btn-ergo-' + i);
        if (btn) btn.className = 'btn-niveau' + (i === n ? ' active' : '');
    }

    var html = '<div class="run-tempo-phases-wrap">';
    html += '<p class="modal-section-title" style="margin:12px 0 8px;">📋 Déroulé de la séance — Niveau ' + n + '</p>';

    // Tableau des rythmes
    html += '<table style="width:100%; border-collapse:collapse; font-size:0.88em; margin-bottom:14px;">';
    html += '<thead><tr class="rameur-thead">';
    html += '<th style="padding:6px 8px; text-align:left;">Atelier</th>';
    html += '<th style="padding:6px 8px; text-align:center;">Objectif</th>';
    html += '</tr></thead><tbody>';
    html += '<tr style="border-bottom:1px solid #eee;"><td style="padding:6px 8px;">⛷️ SkiErg</td><td style="padding:6px 8px; text-align:center; font-weight:700; color:#1a237e;">' + niveau.skierg + ' /500m</td></tr>';
    html += '<tr style="border-bottom:1px solid #eee;"><td style="padding:6px 8px;">🚣 Rameur</td><td style="padding:6px 8px; text-align:center; font-weight:700; color:#1a237e;">' + niveau.rameur + ' /500m</td></tr>';
    html += '<tr style="border-bottom:1px solid #eee;"><td style="padding:6px 8px;">🚴 BikeErg</td><td style="padding:6px 8px; text-align:center; font-weight:700; color:#1a237e;">' + niveau.bikeerg + ' /1000m</td></tr>';
    html += '<tr><td style="padding:6px 8px;">🏃 Tapis</td><td style="padding:6px 8px; text-align:center; font-weight:700; color:#1a237e;">' + niveau.tapis + ' km/h</td></tr>';
    html += '</tbody></table>';

    // Déroulé
    html += '<ul class="modal-exercises run-tempo-list">';
    var deroulé = [
        { min: "0:00-0:02",   label: "Echauffement 1/3 : Mobilisation articulaire",                  cls: "run-recup" },
        { min: "0:02-0:06",   label: "Echauffement 2/3 : BikeErg ou run léger",                       cls: "run-recup" },
        { min: "0:06-0:07:30",label: "Echauffement 3/3 : BikeErg ou run — on augmente le rythme",           cls: "run-recup" },
        { min: "0:07:30-0:08",label: "⏸ Transition vers SkiErg",                  cls: "run-recup" },
        { min: "0:08-0:13",   label: "⛷️ SkiErg — " + niveau.skierg + " /500m",   cls: "run-effort" },
        { min: "0:13-0:14",   label: "⏸ Repos / transition Rameur",                cls: "run-recup" },
        { min: "0:14-0:19",   label: "🚣 Rameur — " + niveau.rameur + " /500m",    cls: "run-effort" },
        { min: "0:19-0:20",   label: "⏸ Repos / transition BikeErg",              cls: "run-recup" },
        { min: "0:20-0:25",   label: "🚴 BikeErg — " + niveau.bikeerg + " /1000m", cls: "run-effort" },
        { min: "0:25-0:26",   label: "⏸ Repos / transition Tapis",                cls: "run-recup" },
        { min: "0:26-0:31",   label: "🏃 Tapis — " + niveau.tapis + " km/h",      cls: "run-effort" },
        { min: "0:31-0:34",   label: "⏸ Pause mi-parcours — hydratez-vous !",     cls: "run-recup" },
        { min: "0:34-0:39",   label: "⛷️ SkiErg — " + niveau.skierg + " /500m",   cls: "run-effort" },
        { min: "0:39-0:40",   label: "⏸ Repos / transition Rameur",                cls: "run-recup" },
        { min: "0:40-0:45",   label: "🚣 Rameur — " + niveau.rameur + " /500m",    cls: "run-effort" },
        { min: "0:45-0:46",   label: "⏸ Repos / transition BikeErg",              cls: "run-recup" },
        { min: "0:46-0:51",   label: "🚴 BikeErg — " + niveau.bikeerg + " /1000m", cls: "run-effort" },
        { min: "0:51-0:52",   label: "⏸ Repos / transition Tapis",                cls: "run-recup" },
        { min: "0:52-0:57",   label: "🏃 Tapis — " + niveau.tapis + " km/h",      cls: "run-effort" },
        { min: "0:57-1:00",   label: "🧘 Récupération — course lente ou BikeErg.", cls: "run-recup" }
    ];
    deroulé.forEach(function(d) {
        html += '<li class="' + d.cls + '">';
        html += '<span class="run-min">' + d.min + '</span>';
        html += '<span class="run-speed">' + d.label + '</span>';
        html += '</li>';
    });
    html += '</ul></div>';

    var container = document.getElementById('ergo-phases');
    if (container) container.innerHTML = html;
}

function chargerSeanceErgo() {
    var niveauActif = window._niveauActif || 1;
    var niveaux = window._niveauxActifs;
    var niveau = niveaux ? niveaux.find(function(nv) { return nv.n === niveauActif; }) : null;
    if (!niveau) return;

    var phases = [
        // Échauffement
        { type: 'warmup', sec: 120,  text: 'Echauffement 1/3 : Mobilisation articulaire' },
        { type: 'warmup', sec: 240,  text: 'Echauffement 2/3 : BikeErg ou run léger' },
        { type: 'warmup', sec: 90,   text: 'Echauffement 3/3 : BikeErg ou run — on augmente le rythme' },
        { type: 'repos',  sec: 30,   text: 'Transition vers SkiErg, début de la première séquence' },
        // Tour 1
        { type: 'travail', sec: 300, text: '⛷️ SkiErg — ' + niveau.skierg + ' /500m' },
        { type: 'repos',   sec: 60,  text: 'Repos / transition Rameur' },
        { type: 'travail', sec: 300, text: '🚣 Rameur — ' + niveau.rameur + ' /500m' },
        { type: 'repos',   sec: 60,  text: 'Repos / transition BikeErg' },
        { type: 'travail', sec: 300, text: '🚴 BikeErg — ' + niveau.bikeerg + ' /1000m' },
        { type: 'repos',   sec: 60,  text: 'Repos / transition Tapis' },
        { type: 'travail', sec: 300, text: '🏃 Tapis — ' + niveau.tapis + ' km/h' },
        // Pause mi-parcours
        { type: 'repos',   sec: 180, text: '⏸ Pause mi-parcours — hydratez-vous ! prêt pour la seconde séquence? (SkiErg)' },
        // Tour 2
        { type: 'travail', sec: 300, text: '⛷️ SkiErg — ' + niveau.skierg + ' /500m' },
        { type: 'repos',   sec: 60,  text: 'Repos / transition Rameur' },
        { type: 'travail', sec: 300, text: '🚣 Rameur — ' + niveau.rameur + ' /500m' },
        { type: 'repos',   sec: 60,  text: 'Repos / transition BikeErg' },
        { type: 'travail', sec: 300, text: '🚴 BikeErg — ' + niveau.bikeerg + ' /1000m' },
        { type: 'repos',   sec: 60,  text: 'Repos / transition Tapis' },
        { type: 'travail', sec: 300, text: '🏃 Tapis — ' + niveau.tapis + ' km/h' },
        // Récup
        { type: 'recup',   sec: 180, text: '🧘 Récupération — course lente ou BikeErg. 🔥BELLE SEANCE!🔥' }
    ];

    var chargement = {
        type: 'surmesure',
        nom: 'Séance 4 Ergomètres — Niveau ' + niveauActif,
        phases: phases
    };

    const encoded = encodeURIComponent(JSON.stringify(chargement));
    window.location.href = 'seances_perso.html?seance=' + encoded;
}

function selectNiveauRameur(n) {
    window._niveauActif = n;
    var niveaux = window._niveauxActifs;
    if (!niveaux) return;
    var niveau = niveaux.find(function(nv) { return nv.n === n; });
    if (!niveau) return;

    // Mettre à jour les boutons
    for (var i = 1; i <= 12; i++) {
        var btn = document.getElementById('btn-niveau-' + i);
        if (btn) btn.className = 'btn-niveau' + (i === n ? ' active' : '');
    }

    // Tableau des splits par phase
    var html = '<div class="run-tempo-phases-wrap">';
    html += '<p class="modal-section-title" style="margin:12px 0 8px;">🚣 Splits /500m — Niveau ' + n + '</p>';
    html += '<table style="width:100%; border-collapse:collapse; font-size:0.88em; margin-bottom:14px;">';
    html += '<thead><tr class="rameur-thead">';
    html += '<th style="padding:6px 8px; text-align:left;">Phase</th>';
    html += '<th style="padding:6px 8px; text-align:left;">Durée</th>';
    html += '<th style="padding:6px 8px; text-align:center;">Split /500m</th>';
    html += '</tr></thead><tbody>';

    var phases = [
        { label: "🔥 Attaque",    dur: "1 min",  split: niveau.attaque,    cls: "run-effort" },
        { label: "😮‍💨 Récup",       dur: "1 min",  split: "Récupération",    cls: "run-recup"  },
        { label: "🔼 Transition",  dur: "2 min",  split: niveau.transition,  cls: "run-effort" },
        { label: "😮‍💨 Récup",       dur: "1 min",  split: "Récupération",    cls: "run-recup"  },
        { label: "📍 La Base",     dur: "8 min",  split: niveau.base,        cls: "run-effort" },
        { label: "😮‍💨 Récup",       dur: "1 min",  split: "Récupération",    cls: "run-recup"  },
        { label: "📈 Remontée",   dur: "3 min",  split: niveau.remontee,    cls: "run-effort" },
        { label: "😮‍💨 Récup",       dur: "1 min",  split: "Récupération",    cls: "run-recup"  },
        { label: "💪 Soutenu",    dur: "2 min",  split: niveau.soutenu,     cls: "run-effort" },
        { label: "😮‍💨 Récup",       dur: "1 min",  split: "Récupération",    cls: "run-recup"  },
        { label: "🚀 Pointe",     dur: "1 min",  split: niveau.pointe,      cls: "run-effort" }
    ];

    phases.forEach(function(p) {
        var splitDisplay = p.cls === 'run-effort' ? '<strong class="rameur-split-effort">' + p.split + '</strong>' : '<em class="rameur-split-recup">' + p.split + '</em>';
        html += '<tr class="' + p.cls + '" style="border-bottom:1px solid #eee;">';
        html += '<td style="padding:6px 8px;">' + p.label + '</td>';
        html += '<td class="rameur-dur">' + p.dur + '</td>';
        html += '<td style="padding:6px 8px; text-align:center;">' + splitDisplay + '</td>';
        html += '</tr>';
    });
    html += '</tbody></table>';

    // Déroulé complet
    html += '<ul class="modal-exercises run-tempo-list">';
    var deroulé = [
        { min: "0:00-0:10",  label: "🏃 Échauffement — ramer tranquillement avec 3 accélérations de 30sec (damper 1-3)", cls: "run-recup" },
        { min: "0:10-0:11",  label: "🔥 Attaque — " + niveau.attaque + " /500m",         cls: "run-effort" },
        { min: "0:11-0:12",  label: "😮‍💨 Récupération",                                   cls: "run-recup"  },
        { min: "0:12-0:14",  label: "🔼 Transition — " + niveau.transition + " /500m",   cls: "run-effort" },
        { min: "0:14-0:15",  label: "😮‍💨 Récupération",                                   cls: "run-recup"  },
        { min: "0:15-0:23",  label: "📍 La Base — " + niveau.base + " /500m",            cls: "run-effort" },
        { min: "0:23-0:24",  label: "😮‍💨 Récupération",                                   cls: "run-recup"  },
        { min: "0:24-0:27",  label: "📈 Remontée — " + niveau.remontee + " /500m",      cls: "run-effort" },
        { min: "0:27-0:28",  label: "😮‍💨 Récupération",                                   cls: "run-recup"  },
        { min: "0:28-0:30",  label: "💪 Soutenu — " + niveau.soutenu + " /500m",        cls: "run-effort" },
        { min: "0:30-0:31",  label: "😮‍💨 Récupération",                                   cls: "run-recup"  },
        { min: "0:31-0:32",  label: "🚀 Pointe — " + niveau.pointe + " /500m",          cls: "run-effort" },
        { min: "0:32-0:40",  label: "🧘 Retour au calme — ramer tranquillement (damper 1-3)", cls: "run-recup" }
    ];
    deroulé.forEach(function(d) {
        html += '<li class="' + d.cls + '">';
        html += '<span class="run-min">' + d.min + '</span>';
        html += '<span class="run-speed">' + d.label + '</span>';
        html += '</li>';
    });
    html += '</ul></div>';

    var container = document.getElementById('run-tempo-phases');
    if (container) container.innerHTML = html;
}

function chargerSeanceRameur() {
    var niveauActif = window._niveauActif || 1;
    var niveaux = window._niveauxActifs;
    var niveau = niveaux ? niveaux.find(function(nv) { return nv.n === niveauActif; }) : null;
    if (!niveau) return;

    var phases = [
        { type: 'warmup', sec: 600,  text: 'Échauffement — ramer tranquillement avec 3 accélérations de 30sec (damper 1-3)' },
        { type: 'travail', sec: 60,  text: '🔥 Attaque — ' + niveau.attaque + ' /500m (damper 3-5)' },
        { type: 'repos',   sec: 60,  text: '😮‍💨 Récupération' },
        { type: 'travail', sec: 120, text: '🔼 Transition — ' + niveau.transition + ' /500m' },
        { type: 'repos',   sec: 60,  text: '😮‍💨 Récupération' },
        { type: 'travail', sec: 480, text: '📍 La Base — ' + niveau.base + ' /500m' },
        { type: 'repos',   sec: 60,  text: '😮‍💨 Récupération' },
        { type: 'travail', sec: 180, text: '📈 Remontée — ' + niveau.remontee + ' /500m' },
        { type: 'repos',   sec: 60,  text: '😮‍💨 Récupération' },
        { type: 'travail', sec: 120, text: '💪 Soutenu — ' + niveau.soutenu + ' /500m' },
        { type: 'repos',   sec: 60,  text: '😮‍💨 Récupération' },
        { type: 'travail', sec: 60,  text: '🚀 Pointe — ' + niveau.pointe + ' /500m' },
        { type: 'recup',   sec: 480, text: '🧘 Retour au calme — ramer tranquillement (damper 1-3)' }
    ];

    var chargement = {
        type: 'surmesure',
        nom: 'Rameur Tempo — Niveau ' + niveauActif,
        phases: phases
    };

    const encoded = encodeURIComponent(JSON.stringify(chargement));
    window.location.href = 'seances_perso.html?seance=' + encoded;
}

function closeModal() {
    document.getElementById('modal-overlay').classList.remove('open');
    document.body.style.overflow = '';
}

// =============================================
// LISTENERS FILTRES & INIT
// =============================================

document.querySelectorAll('.filter-bar select').forEach(function(select) {
    select.addEventListener('change', displayWorkouts);
    const favorisSelect = document.getElementById('filter-favoris');
    if (favorisSelect) favorisSelect.addEventListener('change', displayWorkouts);
});

const searchField = document.getElementById('search-input');
if (searchField) {
    searchField.addEventListener('input', displayWorkouts);
}

window.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('modal-overlay');
    if (overlay) {
        overlay.addEventListener('click', function(e) { if (e.target === overlay) closeModal(); });
    }
    document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeModal(); });
    const btnClose = document.getElementById('modal-close');
    if (btnClose) btnClose.addEventListener('click', closeModal);

    const backButton = document.getElementById("backToTop");
    if (backButton) {
        window.onscroll = function() {
            backButton.style.display = (window.scrollY > 300) ? "block" : "none";
        };
        backButton.addEventListener("click", function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    displayWorkouts();
});

function tirageAleatoire() {
    // Récupérer les filtres actifs
    const matFilter   = document.getElementById('filter-material').value;
    const bodyFilter  = document.getElementById('filter-body').value;
    const timeFilter  = document.getElementById('filter-time').value;
    const typeFilter  = document.getElementById('filter-type') ? document.getElementById('filter-type').value : 'all';
    const levelFilter = document.getElementById('levelFilter') ? document.getElementById('levelFilter').value : 'all';
    const favoris     = getFavoris();
    const favorisFilter = document.getElementById('filter-favoris') ? document.getElementById('filter-favoris').value : 'all';
    const searchTerm  = document.getElementById('search-input') ? document.getElementById('search-input').value.toLowerCase() : '';

    // Filtrer comme displayWorkouts
    const pool = workouts.filter(w => {
        const matchSearch = !searchTerm || w.title.toLowerCase().includes(searchTerm) || w.desc.toLowerCase().includes(searchTerm);
        const matchMat    = matFilter   === 'all' || (Array.isArray(w.material) ? w.material.includes(matFilter) : w.material === matFilter);
        const matchBody   = bodyFilter  === 'all' || w.body  === bodyFilter;
        const matchType   = typeFilter  === 'all' || w.type  === typeFilter;
        const matchLevel  = levelFilter === 'all' || w.level === levelFilter;
        const matchFavoris = favorisFilter === 'all' || (favorisFilter === 'favoris' && favoris.includes(w.title));
        let matchTime = true;
        if      (timeFilter === 'court') matchTime = w.duration > 0 && w.duration < 15;
        else if (timeFilter === 'moyen') matchTime = w.duration >= 15 && w.duration <= 30;
        else if (timeFilter === 'long')  matchTime = w.duration > 30;
        else if (timeFilter === 'libre') matchTime = w.duration === 0;
        return matchSearch && matchMat && matchBody && matchType && matchLevel && matchTime && matchFavoris;
    });

    if (!pool.length) {
        alert('Aucune séance ne correspond aux filtres actifs. Élargis ta sélection !');
        return;
    }

    const wodChoisi = pool[Math.floor(Math.random() * pool.length)];
    const realIndex = workouts.indexOf(wodChoisi);
    if (wodChoisi.details) {
        openModal(realIndex);
    } else {
        alert('Le destin a choisi pour toi : ' + wodChoisi.title);
        if (wodChoisi.pdf) window.open(wodChoisi.pdf, '_blank');
    }
}

function resetFiltres() {
    document.getElementById('filter-type').value     = 'all';
    document.getElementById('levelFilter').value     = 'all';
    document.getElementById('filter-material').value = 'all';
    document.getElementById('filter-body').value     = 'all';
    document.getElementById('filter-time').value     = 'all';
    document.getElementById('filter-favoris').value  = 'all';
    document.getElementById('search-input').value    = '';
    displayWorkouts();
}

// ══════════════════════════════════════════════════════════════
// EXEMPLE DE CODAGE — MODALE AVEC IMAGE, VIDÉO ET YOUTUBE
// (Décommenter et adapter pour utiliser)
// ══════════════════════════════════════════════════════════════

//    {
//        title: "Nom de la séance",
//        material: ["poids-corps"],
//        body: "complet",
//        duration: 20,
//        type: "FOR TIME",
//        level: "Moyen",
//        desc: "Description courte de la séance.",
//        details: {
//            format_label: "FOR TIME",
//            intro: "Texte d'introduction optionnel.",
//
//            // ── Image locale (fichier dans le dossier images/) ──
//            image: "images/nom_image.jpg",
//
//            // ── Vidéo locale (fichier dans le dossier videos/) ──
//            video: "videos/nom_video.mp4",
//
//            // ── Lien YouTube (ID de la vidéo uniquement) ────────
//            // URL : https://www.youtube.com/watch?v=ABC123xyz
//            //                                        ^^^^^^^^^^^  ← cet ID
//            youtube: "ABC123xyz",
//
//            exercises: [
//                { text: "10 Burpees" },
//                { text: "15 Air Squats" },
//                { text: "20 Sit-ups" }
//            ],
//            scaled: {
//                intro: "VERSION SCALED :",
//                exercises: [
//                    { text: "10 Burpees sans saut" },
//                    { text: "15 Air Squats" }
//                ]
//            },
//            conseil: "Texte du conseil affiché en bas de la modale."
//        }
//    },


// ══════════════════════════════════════════════════════════════
// BIKEERG FORCE — sélecteurs damper + RPM + chargement
// ══════════════════════════════════════════════════════════════

function selectBikeERGDamper(val) {
    window._bikeergDamper = val;
    (window._bikeergDampers || []).forEach(function(v) {
        var btn = document.getElementById('btn-damper-' + v);
        if (btn) btn.className = 'btn-niveau' + (v === val ? ' active' : '');
    });
    _updateBikeERGSynthese();
}

function selectBikeERGRpm(idx) {
    window._bikeergRpmIdx = idx;
    (window._bikeergRpms || []).forEach(function(v, i) {
        var btn = document.getElementById('btn-rpm-' + i);
        if (btn) btn.className = 'btn-niveau btn-niveau-wide' + (i === idx ? ' active' : '');
    });
    _updateBikeERGSynthese();
}

function _updateBikeERGSynthese() {
    var container = document.getElementById('bikeerg-synthese');
    if (!container) return;
    var damper = window._bikeergDamper || 3;
    var rpmIdx = window._bikeergRpmIdx || 0;
    var rpm    = (window._bikeergRpms || [])[rpmIdx] || '70↔75';

    var html = '<div style="background:#f0f4ff;border-radius:10px;padding:14px;margin:14px 0;border-left:4px solid #1a237e;">';
    html += '<div style="font-weight:800;font-size:0.85em;text-transform:uppercase;letter-spacing:0.06em;color:#1a237e;margin-bottom:10px;">📋 Votre séance personnalisée</div>';
    html += '<div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:10px;">';
    html += '<span style="background:#1a237e;color:#fff;border-radius:8px;padding:5px 12px;font-size:0.85em;font-weight:700;">🎛 Damper ' + damper + '</span>';
    html += '<span style="background:#c0392b;color:#fff;border-radius:8px;padding:5px 12px;font-size:0.85em;font-weight:700;">⚡ ' + rpm + ' RPM</span>';
    html += '</div>';
    html += '<ul style="margin:0;padding-left:18px;font-size:0.83em;color:#333;line-height:1.8;">';
    html += '<li>Échauffement 10 min — damper 2-3, pédalage libre</li>';
    html += '<li>Fractionné 20 min — 10 fois :</li>';
    html += '<ul style="padding-left:16px;">';
    html += '<li>🚴 1 min effort — <strong>Damper ' + damper + ' | ' + rpm + ' RPM constant</strong></li>';
    html += '<li>💤 1 min récupération — relâcher</li>';
    html += '</ul>';
    html += '<li>Retour au calme 10 min — damper 2-3, pédalage libre</li>';
    html += '</ul></div>';

    container.innerHTML = html;
}

function chargerSeanceBikeERGForce() {
    var damper = window._bikeergDamper || 3;
    var rpmIdx = window._bikeergRpmIdx || 0;
    var rpm    = (window._bikeergRpms || [])[rpmIdx] || '70↔75';

    var effortText = '🚴 1 min d\'effort — Damper ' + damper + ' | ' + rpm + ' RPM constant';
    var reposText  = '💤 1 min récupération — relâcher, damper inchangé';

    var phases = [];
    phases.push({ type: 'warmup', sec: 600, text: 'Échauffement — damper 2-3, pédalage libre et progressif' });
    for (var i = 0; i < 10; i++) {
        phases.push({ type: 'travail', sec: 60, text: effortText });
        phases.push({ type: 'repos',   sec: 60, text: reposText });
    }
    phases.push({ type: 'recup', sec: 600, text: 'Retour au calme — damper 2-3, pédalage libre' });

    var chargement = {
        type: 'surmesure',
        nom: 'BikeERG FORCE — Damper ' + damper + ' | ' + rpm + ' RPM',
        phases: phases
    };
    var encoded = encodeURIComponent(JSON.stringify(chargement));
    window.location.href = 'seances_perso.html?seance=' + encoded;
}

// ══════════════════════════════════════════════════════════════
// SKIERG TEMPO — affichage niveaux + chargement chrono
// ══════════════════════════════════════════════════════════════

function selectNiveauSkiErg(n) {
    window._niveauActif = n;
    var niveaux = window._niveauxActifs;
    if (!niveaux) return;
    var niveau = niveaux.find(function(nv) { return nv.n === n; });
    if (!niveau) return;

    // Mettre à jour les boutons
    for (var i = 1; i <= 12; i++) {
        var btn = document.getElementById('btn-niveau-' + i);
        if (btn) btn.className = 'btn-niveau' + (i === n ? ' active' : '');
    }

    // Tableau des splits par phase
    var html = '<div class="run-tempo-phases-wrap">';
    html += '<p class="modal-section-title" style="margin:12px 0 8px;">🎿 Splits /500m — Niveau ' + n + '</p>';
    html += '<table style="width:100%; border-collapse:collapse; font-size:0.88em; margin-bottom:14px;">';
    html += '<thead><tr class="rameur-thead">';
    html += '<th style="padding:6px 8px; text-align:left;">Phase</th>';
    html += '<th style="padding:6px 8px; text-align:left;">Durée</th>';
    html += '<th style="padding:6px 8px; text-align:center;">Split /500m</th>';
    html += '</tr></thead><tbody>';

    var phases = [
        { label: "🔥 Attaque",    dur: "1 min",  split: niveau.attaque,    cls: "run-effort" },
        { label: "😮‍💨 Récup",       dur: "1 min",  split: "Récupération",    cls: "run-recup"  },
        { label: "🔼 Transition",  dur: "2 min",  split: niveau.transition,  cls: "run-effort" },
        { label: "😮‍💨 Récup",       dur: "1 min",  split: "Récupération",    cls: "run-recup"  },
        { label: "📍 La Base",     dur: "8 min",  split: niveau.base,        cls: "run-effort" },
        { label: "😮‍💨 Récup",       dur: "1 min",  split: "Récupération",    cls: "run-recup"  },
        { label: "📈 Remontée",   dur: "3 min",  split: niveau.remontee,    cls: "run-effort" },
        { label: "😮‍💨 Récup",       dur: "1 min",  split: "Récupération",    cls: "run-recup"  },
        { label: "💪 Soutenu",    dur: "2 min",  split: niveau.soutenu,     cls: "run-effort" },
        { label: "😮‍💨 Récup",       dur: "1 min",  split: "Récupération",    cls: "run-recup"  },
        { label: "🚀 Pointe",     dur: "1 min",  split: niveau.pointe,      cls: "run-effort" }
    ];

    phases.forEach(function(p) {
        var splitDisplay = p.cls === 'run-effort' ?
            '<strong class="rameur-split-effort">' + p.split + '</strong>' :
            '<em class="rameur-split-recup">' + p.split + '</em>';
        html += '<tr class="' + p.cls + '" style="border-bottom:1px solid #eee;">';
        html += '<td style="padding:6px 8px;">' + p.label + '</td>';
        html += '<td class="rameur-dur">' + p.dur + '</td>';
        html += '<td style="padding:6px 8px; text-align:center;">' + splitDisplay + '</td>';
        html += '</tr>';
    });
    html += '</tbody></table>';

    // Déroulé complet
    html += '<ul class="modal-exercises run-tempo-list">';
    var deroule = [
        { min: "0:00-0:10", label: "🎿 Échauffement — skier tranquillement, 3 accélérations de 30sec progressives", cls: "run-recup" },
        { min: "0:10-0:11", label: "🔥 Attaque — " + niveau.attaque + " /500m", cls: "run-effort" },
        { min: "0:11-0:12", label: "😮‍💨 Récupération — relâcher, respirer", cls: "run-recup" },
        { min: "0:12-0:14", label: "🔼 Transition — " + niveau.transition + " /500m", cls: "run-effort" },
        { min: "0:14-0:15", label: "😮‍💨 Récupération", cls: "run-recup" },
        { min: "0:15-0:23", label: "📍 La Base — " + niveau.base + " /500m (effort soutenu constant)", cls: "run-effort" },
        { min: "0:23-0:24", label: "😮‍💨 Récupération", cls: "run-recup" },
        { min: "0:24-0:27", label: "📈 Remontée — " + niveau.remontee + " /500m", cls: "run-effort" },
        { min: "0:27-0:28", label: "😮‍💨 Récupération", cls: "run-recup" },
        { min: "0:28-0:30", label: "💪 Soutenu — " + niveau.soutenu + " /500m", cls: "run-effort" },
        { min: "0:30-0:31", label: "😮‍💨 Récupération", cls: "run-recup" },
        { min: "0:31-0:32", label: "🚀 Pointe — " + niveau.pointe + " /500m (tout donner)", cls: "run-effort" },
        { min: "0:32-0:40", label: "🧘 Retour au calme — skier très lentement, récupération active", cls: "run-recup" }
    ];
    deroule.forEach(function(item) {
        html += '<li class="' + item.cls + '">';
        html += '<span class="run-min">' + item.min + '</span>';
        html += '<span class="run-speed">' + item.label + '</span>';
        html += '</li>';
    });
    html += '</ul></div>';

    var container = document.getElementById('run-tempo-phases');
    if (container) container.innerHTML = html;
}

function chargerSeanceSkiErg() {
    var niveauActif = window._niveauActif || 1;
    var niveaux = window._niveauxActifs;
    var niveau = niveaux ? niveaux.find(function(nv) { return nv.n === niveauActif; }) : null;
    if (!niveau) return;

    var phases = [
        { type: 'warmup', sec: 600,  text: '🎿 Échauffement — skier tranquillement, 3 accélérations de 30sec' },
        { type: 'travail', sec: 60,  text: '🔥 Attaque — ' + niveau.attaque + ' /500m' },
        { type: 'repos',   sec: 60,  text: '😮‍💨 Récupération — relâcher, respirer' },
        { type: 'travail', sec: 120, text: '🔼 Transition — ' + niveau.transition + ' /500m' },
        { type: 'repos',   sec: 60,  text: '😮‍💨 Récupération' },
        { type: 'travail', sec: 480, text: '📍 La Base — ' + niveau.base + ' /500m' },
        { type: 'repos',   sec: 60,  text: '😮‍💨 Récupération' },
        { type: 'travail', sec: 180, text: '📈 Remontée — ' + niveau.remontee + ' /500m' },
        { type: 'repos',   sec: 60,  text: '😮‍💨 Récupération' },
        { type: 'travail', sec: 120, text: '💪 Soutenu — ' + niveau.soutenu + ' /500m' },
        { type: 'repos',   sec: 60,  text: '😮‍💨 Récupération' },
        { type: 'travail', sec: 60,  text: '🚀 Pointe — ' + niveau.pointe + ' /500m' },
        { type: 'recup',   sec: 480, text: '🧘 Retour au calme — skier très lentement' }
    ];

    var chargement = {
        type: 'surmesure',
        nom: 'SkiErg TEMPO — Niveau ' + niveauActif,
        phases: phases
    };
    var encoded = encodeURIComponent(JSON.stringify(chargement));
    window.location.href = 'seances_perso.html?seance=' + encoded;
}

// ══════════════════════════════════════════════════════════════
// ASSAULT BIKE TEMPO — affichage niveaux + chargement chrono
// ══════════════════════════════════════════════════════════════

function selectNiveauAssaultBike(n) {
    window._niveauActif = n;
    var niveaux = window._niveauxActifs;
    if (!niveaux) return;
    var niveau = niveaux.find(function(nv) { return nv.n === n; });
    if (!niveau) return;

    for (var i = 1; i <= 12; i++) {
        var btn = document.getElementById('btn-niveau-' + i);
        if (btn) btn.className = 'btn-niveau' + (i === n ? ' active' : '');
    }

    var html = '<div class="run-tempo-phases-wrap">';
    html += '<p class="modal-section-title" style="margin:12px 0 8px;">🚴 Cibles RPM — Niveau ' + n + '</p>';
    html += '<table style="width:100%; border-collapse:collapse; font-size:0.88em; margin-bottom:14px;">';
    html += '<thead><tr class="rameur-thead">';
    html += '<th style="padding:6px 8px; text-align:left;">Phase</th>';
    html += '<th style="padding:6px 8px; text-align:left;">Durée</th>';
    html += '<th style="padding:6px 8px; text-align:center;">RPM cible</th>';
    html += '</tr></thead><tbody>';

    var phases = [
        { label: "🔥 Attaque",   dur: "30 sec", split: niveau.attaque,    cls: "run-effort" },
        { label: "😮‍💨 Récup",      dur: "30 sec", split: "RPM très bas",    cls: "run-recup"  },
        { label: "🔼 Transition", dur: "1 min",  split: niveau.transition,  cls: "run-effort" },
        { label: "😮‍💨 Récup",      dur: "1 min",  split: "RPM très bas",    cls: "run-recup"  },
        { label: "📍 La Base",    dur: "3 min",  split: niveau.base,        cls: "run-effort" },
        { label: "😮‍💨 Récup",      dur: "1 min",  split: "RPM très bas",    cls: "run-recup"  },
        { label: "📈 Remontée",  dur: "1 min",  split: niveau.remontee,    cls: "run-effort" },
        { label: "😮‍💨 Récup",      dur: "30 sec", split: "RPM très bas",    cls: "run-recup"  },
        { label: "💪 Soutenu",   dur: "1 min",  split: niveau.soutenu,     cls: "run-effort" },
        { label: "😮‍💨 Récup",      dur: "30 sec", split: "RPM très bas",    cls: "run-recup"  },
        { label: "🚀 Pointe",    dur: "20 sec", split: niveau.pointe,      cls: "run-effort" }
    ];

    phases.forEach(function(p) {
        var splitDisplay = p.cls === 'run-effort' ?
            '<strong class="rameur-split-effort">' + p.split + ' RPM</strong>' :
            '<em class="rameur-split-recup">' + p.split + '</em>';
        html += '<tr class="' + p.cls + '" style="border-bottom:1px solid #eee;">';
        html += '<td style="padding:6px 8px;">' + p.label + '</td>';
        html += '<td class="rameur-dur">' + p.dur + '</td>';
        html += '<td style="padding:6px 8px; text-align:center;">' + splitDisplay + '</td>';
        html += '</tr>';
    });
    html += '</tbody></table>';

    html += '<ul class="modal-exercises run-tempo-list">';
    var deroule = [
        { min: "0:00-0:05", label: "🚴 Échauffement — pédalage modéré, montée en température progressive", cls: "run-recup" },
        { min: "0:05-0:05:30", label: "🔥 Attaque — " + niveau.attaque + " RPM", cls: "run-effort" },
        { min: "0:05:30-0:06", label: "😮‍💨 Récup active — pédalage très léger", cls: "run-recup" },
        { min: "0:06-0:07", label: "🔼 Transition — " + niveau.transition + " RPM", cls: "run-effort" },
        { min: "0:07-0:08", label: "😮‍💨 Récup active", cls: "run-recup" },
        { min: "0:08-0:11", label: "📍 La Base — " + niveau.base + " RPM (effort constant soutenu)", cls: "run-effort" },
        { min: "0:11-0:12", label: "😮‍💨 Récup active — ne pas s'arrêter", cls: "run-recup" },
        { min: "0:12-0:13", label: "📈 Remontée — " + niveau.remontee + " RPM", cls: "run-effort" },
        { min: "0:13-0:13:30", label: "😮‍💨 Récup active", cls: "run-recup" },
        { min: "0:13:30-0:14:30", label: "💪 Soutenu — " + niveau.soutenu + " RPM", cls: "run-effort" },
        { min: "0:14:30-0:15", label: "😮‍💨 Récup active", cls: "run-recup" },
        { min: "0:15-0:15:20", label: "🚀 Pointe — " + niveau.pointe + " RPM (TOUT DONNER — 20 sec)", cls: "run-effort" },
        { min: "0:15:20-0:18", label: "🧘 Récupération longue", cls: "run-recup" },
        { min: "0:18-0:20", label: "🧘 Retour au calme — pédalage très léger, étirements doux", cls: "run-recup" }
    ];
    deroule.forEach(function(item) {
        html += '<li class="' + item.cls + '">';
        html += '<span class="run-min">' + item.min + '</span>';
        html += '<span class="run-speed">' + item.label + '</span>';
        html += '</li>';
    });
    html += '</ul></div>';

    var container = document.getElementById('run-tempo-phases');
    if (container) container.innerHTML = html;
}

function chargerSeanceAssaultBike() {
    var niveauActif = window._niveauActif || 1;
    var niveaux = window._niveauxActifs;
    var niveau = niveaux ? niveaux.find(function(nv) { return nv.n === niveauActif; }) : null;
    if (!niveau) return;

    var phases = [
        { type: 'warmup',  sec: 300, text: '🚴 Échauffement — pédalage modéré, montée en température progressive' },
        { type: 'travail', sec: 30,  text: '🔥 Attaque — ' + niveau.attaque + ' RPM' },
        { type: 'repos',   sec: 30,  text: '😮‍💨 Récup active — pédalage très léger' },
        { type: 'travail', sec: 60,  text: '🔼 Transition — ' + niveau.transition + ' RPM' },
        { type: 'repos',   sec: 60,  text: '😮‍💨 Récup active' },
        { type: 'travail', sec: 180, text: '📍 La Base — ' + niveau.base + ' RPM' },
        { type: 'repos',   sec: 60,  text: '😮‍💨 Récup active — ne pas s\'arrêter' },
        { type: 'travail', sec: 60,  text: '📈 Remontée — ' + niveau.remontee + ' RPM' },
        { type: 'repos',   sec: 30,  text: '😮‍💨 Récup active' },
        { type: 'travail', sec: 60,  text: '💪 Soutenu — ' + niveau.soutenu + ' RPM' },
        { type: 'repos',   sec: 30,  text: '😮‍💨 Récup active' },
        { type: 'travail', sec: 20,  text: '🚀 Pointe — ' + niveau.pointe + ' RPM (TOUT DONNER)' },
        { type: 'recup',   sec: 160, text: '🧘 Récupération longue' },
        { type: 'recup',   sec: 120, text: '🧘 Retour au calme — pédalage très léger' }
    ];

    var chargement = {
        type: 'surmesure',
        nom: 'Assault Bike TEMPO — Niveau ' + niveauActif,
        phases: phases
    };
    var encoded = encodeURIComponent(JSON.stringify(chargement));
    window.location.href = 'seances_perso.html?seance=' + encoded;
}
