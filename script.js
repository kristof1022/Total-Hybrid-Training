/* jshint esversion: 6 */

const workouts = [

  
/* SEANCES TABATA */
  
    { title: "WOD TABATA 30/10", material: ["poids-corps"], body: "complet", duration: 6.5, type: "TABATA", level: "Facile", desc: "<strong>30 sec travail / 10 sec repos :</strong> Squats, Burpees, Mountain Climbers, Jumping jacks, Fente avant(lunges).",
      details: { format_label: "TABATA — 6 min 30", intro: "30 sec travail / 10 sec repos — 2 tours complets :", exercises: [
          { text: "30 sec SQUATS / 10 sec repos" }, { text: "30 sec BURPEES / 10 sec repos" }, { text: "30 sec MOUNTAIN CLIMBERS / 10 sec repos" }, { text: "30 sec JUMPING JACKS / 10 sec repos" }, { text: "30 sec FENTES AVANT / 10 sec repos" }, { text: "→ Répéter une 2ème fois (même ordre)" }
        ], conseil: "30 secondes de travail / 10 secondes de repos.",
        chargeable: true,
        chargement: {
          type: "tabata",
          nom: "WOD TABATA 30/10",
          travail: 30,
          repos: 10,
          rounds: 10,
          exercices: [
            { text: "SQUATS" },
            { text: "BURPEES" },
            { text: "MOUNTAIN CLIMBERS" },
            { text: "JUMPING JACKS" },
            { text: "FENTES AVANT" },
            { text: "SQUATS" },
            { text: "BURPEES" },
            { text: "MOUNTAIN CLIMBERS" },
            { text: "JUMPING JACKS" },
            { text: "FENTES AVANT" }
          ]
        }       
        }},

    { title: "WOD TABATA 40/10", material: ["poids-corps"], body: "complet", duration: 10, type: "TABATA", level: "Facile", desc: "<strong>40 sec travail / 10 sec repos :</strong> Squats sautées, Pompes(push-ups), Sit-ups(abdos), Burpees.",
      details: { format_label: "TABATA — 9 min 30", intro: "3 tours avec 40 sec de travail et 10 sec de repos :", exercises: [
          { text: "40 sec SQUATS SAUTÉS / 10 sec repos" }, { text: "40 sec POMPES / 10 sec repos" }, { text: "40 sec SIT-UPS / 10 sec repos" }, { text: "40 sec BURPEES / 10 sec repos" }, { text: "→ Répéter 3 tours au total" }
        ], scaled: { intro: "VERSION SCALED :", exercises: [
          { text: "Remplacer les sit-ups par des crunches" }, { text: "Pompes sur les genoux ou inclinées" }, { text: "Burpees sans saut et/ou sans pompe" }
        ]}, conseil: "40 secondes de travail / 10 secondes de repos.",
        chargeable: true,
        chargement: {
          type: "tabata",
          nom: "WOD TABATA 40/10",
          travail: 40,
          repos: 10,
          rounds: 15,
          exercices: [
            { text: "SQUATS SAUTÉS" },
            { text: "POMPES" },
            { text: "SIT-UPS" },
            { text: "BURPEES" },
            { text: "SQUATS SAUTÉS" },
            { text: "POMPES" },
            { text: "SIT-UPS" },
            { text: "BURPEES" },
            { text: "SQUATS SAUTÉS" },
            { text: "POMPES" },
            { text: "SIT-UPS" },
            { text: "BURPEES" }
          ]
        }              
    }},

    { title: "WOD TABATA 30/10 ABDOS", material: ["poids-corps"], body: "abdos", duration: 5, type: "TABATA", level: "Facile", desc: "<strong>30 sec travail / 10 sec repos pour les abdos :</strong> focus gainage.",
      details: { format_label: "TABATA ABDOS — 5 min 10", intro: "30 sec travail / 10 sec repos — 2 tours :", exercises: [
          { text: "30 sec GAINAGE SUR LES COUDES / 10 sec repos" }, { text: "30 sec GAINAGE LATÉRAL GAUCHE / 10 sec repos" }, { text: "30 sec GAINAGE SUR LES MAINS / 10 sec repos" }, { text: "30 sec GAINAGE LATÉRAL DROIT / 10 sec repos" }, { text: "30 sec GAINAGE SUR LES COUDES / 10 sec repos" }, { text: "30 sec GAINAGE LATÉRAL GAUCHE / 10 sec repos" }, { text: "30 sec GAINAGE SUR LES MAINS / 10 sec repos" }, { text: "30 sec GAINAGE LATÉRAL DROIT / 10 sec repos" }
        ], conseil: "30 secondes de travail / 10 secondes de repos. Focus gainage.",
        chargeable: true,
        chargement: {
          type: "tabata",
          nom: "WOD TABATA 30/10 ABDOS",
          travail: 30,
          repos: 10,
          rounds: 8,
          exercices: [
            { text: "Gainage sur les coudes" },
            { text: "Gainage latéral gauche" },
            { text: "Gainage sur les mains" },
            { text: "Gainage latéral droit" },
            { text: "Gainage sur les coudes" },
            { text: "Gainage latéral gauche" },
            { text: "Gainage sur les mains" },
            { text: "Gainage latéral droit" }
          ]
        }
      }},  

  
/* SEANCES AMRAP */
  
  { title: "WOD AMRAP 6 EXOS", material: ["poids-corps"], body: "complet", duration: 28, type: "AMRAP", level: "Facile", 
   desc: "<strong>4 tours (1' repos) :</strong> 1 min Burpees, 1 min Pompes(push-ups), 1 min Squat jump, 1 min Marche de l'ours, 1 min Mountain climber, 1 min Sit-up(abdos).",
      details: { format_label: "AMRAP 28 MINUTES", intro: "Réaliser 4 rounds (1 min repos entre chaque) :", 
                exercises: [
                  { text: "1 minute Burpees" }, { text: "1 minute Pompes" }, { text: "1 minute Squat jump" }, 
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
          { text: "5 Burpees" }, { text: "7 Tractions (pull-ups)" }, { text: "10 Pompes" }, { text: "15 Squats" }
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
          { text: "5 Tractions (pull-ups)" }, { text: "10 Pompes" }, { text: "15 Squats" }
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
          { text: "5 Tractions (pull-ups)" }, { text: "10 Pompes (push-ups)" }, { text: "15 Squats poids de corps (air squats)" }
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
          { text: "10 Box jumps (sauts sur boîte/banc)" }, { text: "15 Pompes (push-ups)" }, { text: "20 Sit-ups (abdos)" }
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
          { text: "10 Pompes (push-ups)" }, { text: "20 Sit-ups (abdos)" }, { text: "30 sec de gainage en planche" }
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
          { text: "1ère minute : 1 burpee (reste de la minute = repos)" },
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
          { text: "5 Tractions (pull-ups)" }, { text: "10 Pompes (push-ups)" }, { text: "15 Squats au poids de corps (air squats)" }
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
          { text: "4 Burpees" }, { text: "6 Air squats" }, { text: "8 Sit-ups (abdos)" }
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

    { title: "WOD 3 EXOS 10 MIN", material: ["poids-corps"], body: "complet", duration: 10, type: "EMOM", level: "Facile", desc: "<strong>Chaque minute :</strong> 5 Burpees, 10 Squats jump, 5 Pompes(push-ups).",
      details: { format_label: "EMOM 10 MINUTES", exercises: [
          { text: "5 Burpees" }, { text: "10 Squats jump" }, { text: "5 Pompes" }
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
          { text: "Min 1 : 6 burpees → Min 2 : 7 → Min 3 : 8 → Min 4 : 9 → Min 5 : 10 → Min 6 : 11 → Min 7 : 12 → Min 8 : 13" }, { text: "Min 9 : 13 → Min 10 : 12 → Min 11 : 11 → Min 12 : 10 → Min 13 : 9 → Min 14 : 8 → Min 15 : 7 → Min 16 : 6" }, { text: "Total : 152 burpees" }
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
          { text: "100 Air squats" }, { text: "50 Pompes (push-ups)" }, { text: "100 Sit-ups (abdos)" }, { text: "50 Pompes (push-ups)" }, { text: "100 Air squats" }
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
          { text: "100 Air squats" }, { text: "50 Pompes (push-ups)" },{ text: "50 Rowings élastique (tirages dos à l'élastique)" }, { text: "100 Sit-ups (abdos)" },{ text: "50 Rowings élastique (tirages dos à l'élastique)" }, { text: "50 Pompes (push-ups)" }, { text: "100 Air squats" }
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
          { text: "Burpees" }, { text: "Sit-ups (abdos)" }
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
          { text: "100 Tractions (pull-ups)" }, { text: "100 Pompes (push-ups)" }, { text: "100 Sit-ups (abdos)" }, { text: "100 Squats au poids de corps (air squats)" }
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
          { text: "20 Tractions (pull-ups)" }, { text: "30 Pompes (push-ups)" }, { text: "40 Sit-ups (abdos)" }, { text: "50 Squats au poids de corps (air squats)" }, { text: "3 minutes de pause entre les rounds" }
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

    { title: "Le WOD Murph", material: ["traction", "gilet-leste"], body: "complet", duration: 0, type: "FOR TIME", level: "Intense", desc: "1.6km course, 100 Pull-ups(tractions), 200 Push-ups(pompes), 300 Squats, 1.6km course.",
      details: { format_label: "FOR TIME", exercises: [
          { text: "1,6 km de course à pied" }, { text: "100 Tractions (pull-ups)" }, { text: "200 Pompes (push-ups)" }, { text: "300 Squats au poids de corps (air squats)" }, { text: "1,6 km de course à pied" }
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
          { text: "Sit-ups (abdos)" }, { text: "Burpees" }
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
          { text: "20 Tractions (pull-ups)" }, { text: "40 Pompes (push-ups)" }, { text: "60 Squats au poids de corps (air squats)" }
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
          { text: "15 Wall balls (ballon lesté)" }, { text: "15 Burpees" }
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
          { text: "150 Burpees le plus rapidement possible" }
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
          { text: "1,6 km de course à pied (run)" }, { text: "150 Burpees" }, { text: "1,6 km de course à pied (run)" }
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
          { text: "8 km de course à pied avec un arrêt toutes les 5 minutes pour exécuter :" }, { text: "→ 50 Squats au poids de corps (air-squats)" }, { text: "→ 50 Pompes (push-ups)" }
        ], conseil: "Prévoir de quoi s'hydrater, l'effort dépasse l'heure de travail." }},

    { title: "Le WOD Zachary Tellier", material: ["poids-corps"], body: "complet", duration: 0, type: "FOR TIME", level: "Intense", desc: "10 Burpees au départ, puis enchainement Burpees / Push-ups(pompes) / Lunges(fentes) / Sit-ups(abdos).",
      details: { format_label: "FOR TIME", intro: "10 burpees buy-in, puis enchaîner :", exercises: [
          { text: "10 Burpees + 25 Push-ups" }, { text: "10 Burpees + 25 Push-ups + 50 Lunges" }, { text: "10 Burpees + 25 Push-ups + 50 Lunges + 100 Sit-ups" }, { text: "10 Burpees + 25 Push-ups + 50 Lunges + 100 Sit-ups + 150 Air Squats" }
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
          { text: "24 Air squats" }, { text: "24 Pompes (push-ups)" }, { text: "24 Fentes marchées (walking lunges)" }, { text: "400m Course à pied (run)" }
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
          { text: "50 Burpees" }, { text: "400m Run" }, { text: "100 Push-Ups (pompes)" }, { text: "400m Run" }, { text: "150 Walking Lunges (fentes marchées)" }, { text: "400m Run" }, { text: "200 Air Squats" }, { text: "400m Run" }, { text: "150 Walking Lunges" }, { text: "400m Run" }, { text: "100 Push-Ups" }, { text: "400m Run" }, { text: "50 Burpees" }
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
          { text: "Burpees" }, { text: "Pompes (push-ups)" }, { text: "Sit-ups (abdos)" }, { text: "Air squats" }
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
          { text: "800m de course à pied (run)" }, { text: "49 Pompes (push-ups)" }, { text: "49 Sit-ups (abdos)" }, { text: "49 Air squats" }
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
          { text: "10 Burpees" }, { text: "10 Air squats" }, { text: "10 Pompes (push-ups)" }, { text: "10 Sit-ups (abdos)" }
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
          { text: "200m de course à pied au départ (run)" }, { text: "Burpees pendant 2min puis 200m de course à pied" }, { text: "Burpees pendant 2min puis 200m de course à pied" }, { text: "..." }, { text: "Burpees pendant 2min puis 200m de course à pied" }, { text: "jusque 100 burpees effectué" }
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
          { text: "10 Burpees" }, { text: "100m Run" }, { text: "10 Air Squats" }, { text: "100m Run" }, { text: "10 Push-Ups (pompes)" }, { text: "100m Run" }, { text: "10 Sit-Ups (abdos)" }, { text: "100m Run" }
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
        ]}, conseil: "-" }},

    { title: "Le WOD Dee", material: ["poids-corps"], body: "complet", duration: 0, type: "FOR TIME", level: "Moyen", desc: "4 rounds : 40 Air Squats, 30 Hand Release Push-Up(pompes), 20 Burpees.",
      details: { format_label: "FOR TIME", intro: "Réaliser 4 rounds :", exercises: [
          { text: "40 Air Squats" }, { text: "30 Pompes avec décollement des mains en position basse (Hand Release Push-Ups)" }, { text: "20 Burpees" }, { text: "400m de course à pied (run)" }
        ], scaled: { intro: "VERSION SCALED — 4 rounds :", exercises: [
          { text: "40 Air Squats" }, { text: "30 Pompes ou pompes sur les genoux" }, { text: "20 Burpees" }, { text: "400m de course à pied" }
        ]}, conseil: "-" }},

    { title: "Le WOD Riley", material: ["poids-corps","gilet-leste"], body: "complet", duration: 0, level: "Intense", type: "FOR TIME", desc: "2.4km Run, 150 Burpees, 2.4km Run.",
      details: { format_label: "FOR TIME", intro: "Avec gilet lesté de 9 kg/6 kg :", exercises: [
          { text: "2400m de course à pied (run)" }, { text: "150 Burpees" }, { text: "2400m de course à pied" }
        ], scaled: { intro: "VERSION SCALED (avec ou sans gilet) :", exercises: [
          { text: "1000m de course à pied" }, { text: "100 Burpees" }, { text: "1000m de course à pied" }
        ]}, conseil: "-" }},

    { title: "WOD For Time 6 EXOS#1", material: ["traction", "station-dips"], body: "complet", duration: 0, type: "FOR TIME", level: "Moyen", desc: "<strong>4 tours (1' repos) :</strong> 10 Tractions(pull-ups), 15 Tractions australiennes, 10 Dips, 15 Pompes diamant(push-ups), 10 Fentes/jambe(lunges), 15 Squats.",
      details: { format_label: "FOR TIME", intro: "Réaliser 4 rounds (1 min repos entre chaque) :", exercises: [
          { text: "10 Tractions (pull-ups)" }, { text: "15 Tractions australiennes" }, { text: "10 Dips" }, { text: "15 Pompes diamant" }, { text: "10 Fentes/jambe (lunges)" }, { text: "15 Squats" }, { text: "1 minute de repos" }
        ], scaled: { intro: "VERSION SCALED :", exercises: [
          { text: "Pompes inclinées ou sur genoux" }, { text: "Tractions avec TRX ou élastique" }
        ]}, conseil: "-" }},

    { title: "WOD 500 REPS", material: ["poids-corps"], body: "complet", duration: 0, type: "FOR TIME", level: "Moyen", desc: "50 Montées de genoux, 50 Squats, 50 Demi squats sautés, 50 Pompes(push-ups), 50 Mountains climbers, 50 Coups de genoux, 50 Fentes(lunges), 50 Directs bras gauche/droit, 50 Burpees, 50 Jumping jacks.",
      details: { format_label: "FOR TIME", exercises: [
          { text: "50 Montées de genoux" }, { text: "50 Squats" }, { text: "50 Demi-squats sautés (position basse)" }, { text: "50 Pompes" }, { text: "50 Mountains climbers" }, { text: "50 Coups de genoux" }, { text: "50 Fentes (vers l'avant)" }, { text: "50 Directs bras avant / bras arrière" }, { text: "50 Burpees" }, { text: "50 Jumping jacks" }
        ], conseil: "WOD orienté sport de combat." }},

    { title: "WOD For Time 6 EXOS#2", material: ["traction"], body: "complet", duration: 0, type: "FOR TIME", level: "Moyen", desc: "<strong>4 tours (1' repos) :</strong> 15 Burpees, 15 Squats jump, 15 Pompes(push-ups), 15 Tractions(pull-ups), 15 Fentes(lunges), 15 Sit-ups(abdos).",
      details: { format_label: "FOR TIME", intro: "Réaliser 4 rounds (1 min repos entre chaque) :", exercises: [
          { text: "15 Burpees" }, { text: "15 Squats jump" }, { text: "15 Pompes" }, { text: "15 Tractions (pull-ups)" }, { text: "15 Fentes (lunges)" }, { text: "15 Sit-ups (abdos)" }, { text: "1 minute de repos" }
        ], scaled: { intro: "VERSION SCALED :", exercises: [
          { text: "Pompes inclinées ou sur genoux" }, { text: "Tractions avec TRX ou élastique" }, { text: "Remplacer les sit-ups par des crunches" }
        ]}, conseil: "-" }},

    { title: "WOD 1000 REPS", material: ["traction", "station-dips", "box-jump"], body: "complet", duration: 0, type: "FOR TIME", level: "Intense", desc: "100 Tractions australiennes(pull-ups), 100 Pompes diamants(push-ups), 100 Squats jumps, 100 Mountain climbers, 100 Burpees, 100 Dips, 100 Gainage dynamique, 100 Box jumps, 100 Relevés de jambe, 100 Fentes marchées(walking lunges)",
      details: { format_label: "FOR TIME — 1000 REPS", exercises: [
          { text: "100 Tractions australiennes" }, { text: "100 Pompes diamants" }, { text: "100 Squats jump" }, { text: "100 Mountain climbers" }, { text: "100 Burpees" }, { text: "100 Dips" }, { text: "100 Gainage dynamique" }, { text: "100 Box jump" }, { text: "100 Relevés de jambes" }, { text: "100 Fentes marchées (walking lunges)" }
        ], conseil: "WOD haut niveau." }},

    { title: "WOD BRI", material: ["poids-corps"], body: "complet", duration: 0, type: "FOR TIME", level: "Intense", desc: "<strong>36Reps / 2X18Reps / 3x12Reps / 4X9Reps / 6X6Reps :</strong> Burpees, Pompes(push-ups), Sit-ups(abdos), Squats.",
      details: { format_label: "FOR TIME — 720 REPS", intro: "À chaque étape : Burpees / Push-ups / Sit-ups / Squats", exercises: [
          { text: "Étape 1 : 36 reps × 4 exercices (1 fois)" }, { text: "Étape 2 : 18 reps × 4 exercices (2 fois)" }, { text: "Étape 3 : 12 reps × 4 exercices (3 fois)" }, { text: "Étape 4 : 9 reps × 4 exercices (4 fois)" }, { text: "Étape 5 : 6 reps × 4 exercices (6 fois)" }
        ], conseil: "720 reps au total. À chaque étape on effectue 36 reps de chaque mouvement." }},

    { title: "WOD HYBRID ANDRE", material: ["rameur"], body: "complet", duration: 0, type: "HYBRID", level: "Intense", desc: "<strong>FOR TIME:</strong> alternance Rameur(row), Burpees.",
      details: { format_label: "HYBRID — FOR TIME", exercises: [
          { text: "1000m Rameur" }, { text: "50 Burpees" }, { text: "800m Rameur" }, { text: "40 Burpees" }, { text: "600m Rameur" }, { text: "30 Burpees" }, { text: "400m Rameur" }, { text: "20 Burpees" }, { text: "200m Rameur" }, { text: "10 Burpees" }
        ], conseil: "Durée estimée 40 minutes." }},

    { title: "WOD HYBRID DOMINO", material: ["poids-corps", "tapis-incurve"], body: "complet", duration: 0, type: "HYBRID", level: "Moyen", desc: "<strong>FOR TIME:</strong> alternance Course à pied(run), Squats/Burpees/Pompes(Push-ups)/Sit-ups(abdos).",
      details: { format_label: "HYBRID — FOR TIME", exercises: [
          { text: "5 min Course à pied" }, { text: "50 Squats au poids de corps" }, { text: "5 min Course à pied" }, { text: "50 Burpees" }, { text: "5 min Course à pied" }, { text: "50 Pompes" }, { text: "5 min Course à pied" }, { text: "50 Sit-ups (abdos)" }
        ], conseil: "Durée estimée 45 minutes." }},

    { title: "WOD HYBRID 4 TOURS#1", material: ["ballon-leste", "tapis-incurve", "traction"], body: "complet", duration: 0, type: "HYBRID", level: "Intense", desc: "<strong>4 TOURS FOR TIME:</strong> 600m. Course à pied(run), 30 Lancers de ballon lesté(wall-ball), 20 Sit-ups(abdos), 20 Tractions(pull-ups).",
      details: { format_label: "HYBRID — 4 TOURS FOR TIME", intro: "Effectuer 4 tours :", exercises: [
          { text: "600m de course à pied" }, { text: "30 Wall-Balls (ballon lesté)" }, { text: "20 Sit-ups (abdos)" }, { text: "20 Tractions (pull-ups)" }
        ], conseil: "-" }},

    { title: "WOD HYBRID 4 TOURS#2", material: ["rameur", "tapis-incurve", "box-jump", "ski-erg"], body: "complet", duration: 0, type: "HYBRID", level: "Moyen", desc: "<strong>4 TOUS FOR TIME:</strong> 400m. Course à pied(run), 15 Burpees Box-jump Over, 400m. de rameur(row), 400 m. de SkiERG.",
      details: { format_label: "HYBRID — 4 TOURS FOR TIME", intro: "Effectuer 4 tours :", exercises: [
          { text: "400m de course à pied (rapide)" }, { text: "15 Burpees Box Jump Over" }, { text: "400m de Rameur (rapide)" }, { text: "400m de SkiERG (rapide)" }
        ], conseil: "Ajuster la hauteur de la box-jump selon le niveau, ou effectuer des burpees simples." }},

    { title: "WOD HYBRID AMRAP40", material: ["rameur", "tapis-incurve", "ballon-leste", "sand-bag"], body: "complet", duration: 40, type: "HYBRID", level: "Moyen", desc: "<strong>AMRAP de 40 minutes:</strong> 1km de Rameur(row), 20 Fentes marchées avec sandbag(Lunges), 1km de Course à pied(run), 20 lancé de ballon lesté(wall-balls).",
      details: { format_label: "HYBRID — AMRAP 40 MINUTES", intro: "Enchaîner le circuit en effectuant un maximum de tours :", exercises: [
          { text: "1 km de Rameur" }, { text: "20 Fentes marchées avec SandBag" }, { text: "1 km de Course à pied" }, { text: "20 Lancés de ballon lesté contre un mur (wall-balls)" }
        ], conseil: "Pour les fentes et les wall-balls, adapter le poids en fonction du niveau et/ou de votre forme du jour." }},

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
                { text: "1️⃣ Faire son maximum de pompes en une série" },
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
            conseil: "Rien ne vous empêche d'ajouter des reps sur les genoux. Le gainage statique ou dynamique peut vous aider à vous tonifier en complément."
        }
    },

    { title: "RENFO Haut & Postérieur", material: ["barre"], body: "complet", duration: 0, type: "MUSCU", level: "Moyen", desc: "5 rounds : 10 Deadlifts (soulevé de terre), 10 Bench Press (développé couché).",
      details: { format_label: "MUSCU / RENFORCEMENT", intro: "Réaliser 5 séries de ces 2 exercices (superset) :", exercises: [
          { text: "10 Soulevé de terre (Deadlift → renforcement chaîne postérieure)" }, { text: "10 Développé couché (Bench Press → renforcement pectoraux, triceps, avant de l'épaule)" }
        ], conseil: "Entraînement barre libre — adapter la charge à votre niveau. Demander conseils si vous débutez sur ces mouvements." }},

    { title: "WOD 300", material: ["barre", "haltere", "box-jump", "traction"], body: "complet", duration: 0, type: "MUSCU", level: "Intense", desc: "<strong>l'entrainement spartiate :</strong> 25 Tractions, 50 Deadlifts(soulevé de terre), 50 Pompes(push-ups), 50 Box jumps, 50 relevés de jambes avec barre, 50 Arrachés épaules à 1 bras(25-25), 25 Tractions.",
      details: { format_label: "FOR TIME — L'ENTRAÎNEMENT SPARTIATE", exercises: [
          { text: "25 Tractions (pull-ups)" }, { text: "50 Soulevé de terre 60 kg (deadlift)" }, { text: "50 Pompes (push-ups)" }, { text: "50 Sauts box jump" }, { text: "50 Relevés de jambes avec barre 60 kg" }, { text: "50 Arrachés épaules 1 bras (25-25) — haltère 16 kg" }, { text: "25 Tractions (pull-ups)" }
        ], scaled: { intro: "VERSION SCALED :", exercises: [
          { text: "Adapter les poids à son niveau" }, { text: "Pompes sur les genoux ou inclinées" }, { text: "Tractions australiennes ou TRX" }
        ]}, conseil: "relevés de jambes avec barre : placer au sol sur le dos, tenir la barre olympique chargée bras tendus. Jambes tendues et jointes : position 1- la pointe de pieds touchent les disques de droite;position 2- les talons touchent le sol; position 3-les pointes de pied touchent les disques de gauche (on alterne donc 1 – 2 – 3 – 2 – 1 – 2 …)" }},

    { title: "RENFO 10TOURS/3EXOS", material: ["poids-corps"], body: "complet", duration: 0, type: "MUSCU", level: "Facile", desc: "10 Squats, 5 Pompes(push-ups), 10 Sit-ups(abdos).",
      details: { format_label: "RENFO — 10 TOURS", intro: "Enchaîner les 10 tours :", exercises: [
          { text: "10 Squats" }, { text: "5 Pompes" }, { text: "10 Sit-ups (abdos)" }, { text: "30 sec à 1 min de repos entre les tours" }
        ], scaled: { intro: "VERSION SCALED :", exercises: [
          { text: "Pompes inclinées ou sur les genoux" }, { text: "Remplacer les sit-ups par des crunches" }
        ]}, conseil: "-" }},

    { title: "RENFO 5TOURS/3EXOS", material: ["station-dips"], body: "complet", duration: 0, type: "MUSCU", level: "Facile", desc: "20 Squats, 10 Dips, 1 min de gainage(abdos).",
      details: { format_label: "RENFO — 5 TOURS", intro: "Enchaîner les 5 tours :", exercises: [
          { text: "20 Squats" }, { text: "10 Dips" }, { text: "1 minute de gainage" }, { text: "1 minute de repos" }
        ], conseil: "Alterner le type de gainage (latéral, dynamique, appui main, appui coude). Dips : sur station ou entre 2 bancs." }},

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

    { title: "Séance BikeERG orientée FORCE", material: ["bike-erg"], body: "bas", duration: 40, type: "CARDIO", level: "Intense", desc: "séance de fractionné pendant 40 minutes.",
      details: { format_label: "SÉANCE CARDIO — 40 MINUTES", exercises: [
          { text: "Échauffement : 10 minutes (damper 2-3)" }, { text: "Fractionné : 20 minutes — 10 fois :" }, { text: "→ 1 minute d'effort (damper et RPM selon niveau, min. 70-75 RPM)" }, { text: "→ 1 minute de récupération" }, { text: "Récupération : 10 minutes (damper 2-3)" }
        ], conseil: "40 minutes avec 20 de fractionné. Adapter le damper (minimum 4) et le RPM. Le RPM doit rester constant pendant les minutes d'effort." }},

    { title: "Séance intervalle BikeERG", material: ["bike-erg"], body: "bas", duration: 30, type: "CARDIO", level: "Moyen", desc: "séance de fractionné pendant 30 minutes.",
      details: { format_label: "SÉANCE CARDIO — 30 MINUTES", exercises: [
          { text: "Échauffement : 10 minutes (damper 2-3)" }, { text: "Fractionné : 10 minutes — 10 fois :" }, { text: "→ 1 minute intensité max. (pédalage le plus rapide possible)" }, { text: "→ 1 minute de récupération" }, { text: "Récupération : 10 minutes (damper 2-3)" }
        ], conseil: "Adapter le damper (minimum 3) et le RPM selon votre niveau." }},


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
      }}

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
            btnCharger3.textContent = '🚀 Charger dans Créer sa séance';
            btnCharger3.onclick = function() { chargerSeanceErgo(); };
            footer3.insertBefore(btnCharger3, footer3.firstChild);
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
            html += '<button class="btn-niveau' + activeClass + '" onclick="selectNiveau(' + i + ')" id="btn-niveau-' + i + '">' + i + '</button>';
        }
        html += '</div></div>';
        html += '<div id="run-tempo-phases"></div>';
        if (d.conseil) {
            html += '<div class="modal-conseil"><strong>&#x1F4A1; Conseil</strong>' + d.conseil + '</div>';
        }
        document.getElementById('modal-body').innerHTML = html;
        window._niveauxActifs = d.niveaux;
        window._niveauActif = 1;
        selectNiveau(1);

        // Bouton Charger pour Run Tempo
        var footer = document.getElementById('modal-footer');
        var existingBtn = document.getElementById('btn-charger');
        if (existingBtn) existingBtn.remove();
        var rtOverlay = document.getElementById('modal-overlay');
        rtOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';

        // Bouton Charger — ajouté après l'ouverture de la modale
        var footer2 = document.getElementById('modal-footer');
        var existingBtn2 = document.getElementById('btn-charger');
        if (existingBtn2) existingBtn2.remove();
        if (d.chargeable && footer2) {
            var btnCharger2 = document.createElement('button');
            btnCharger2.id = 'btn-charger';
            btnCharger2.className = 'btn-modal-charger';
            btnCharger2.textContent = '🚀 Charger dans Créer sa séance';
            btnCharger2.onclick = function() { chargerSeance({ type: 'avec_niveaux' }); };
            footer2.insertBefore(btnCharger2, footer2.firstChild);
        }
        return;
    }

    html += '<p class="modal-format-label">' + d.format_label + '</p>';
    if (d.intro) html += '<p class="modal-intro">' + d.intro + '</p>';
    if (d.image) html += '<img src="' + d.image + '" alt="" style="width:100%; border-radius:8px; margin-bottom:12px;">';
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
    d.exercises.forEach(function(ex) { html += '<li>' + ex.text + '</li>'; });
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

    // Bouton "Charger dans Créer sa séance" si chargeable
    var footerMain = document.getElementById('modal-footer');
    var existingBtnMain = document.getElementById('btn-charger');
    if (existingBtnMain) existingBtnMain.remove();
    if (d.chargeable && d.chargement) {
        var btnCharger = document.createElement('button');
        btnCharger.id = 'btn-charger';
        btnCharger.className = 'btn-modal-charger';
        btnCharger.textContent = '🚀 Charger dans Créer sa séance';
        btnCharger.onclick = function() { chargerSeance(d.chargement); };
        footerMain.insertBefore(btnCharger, footerMain.firstChild);
    }

    const modalOverlay = document.getElementById('modal-overlay');
    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function chargerSeance(chargement) {
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
    var encoded = encodeURIComponent(JSON.stringify(chargement));
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
    html += '<thead><tr style="background:#f0f0f0;">';
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
        { min: "0:06-0:07:30",label: "Echauffement 1/3 : BikeErg ou run — on augmente le rythme",           cls: "run-recup" },
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
        { type: 'warmup', sec: 90,   text: 'Echauffement 1/3 : BikeErg ou run — 2 accélérations de 30sec' },
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

    var encoded = encodeURIComponent(JSON.stringify(chargement));
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
    const indexHasard = Math.floor(Math.random() * workouts.length);
    const wodChoisi = workouts[indexHasard];
    if (wodChoisi.details) {
        openModal(indexHasard);
    } else {
        alert("Le destin a choisi pour toi : " + wodChoisi.title);
        if (wodChoisi.pdf) window.open(wodChoisi.pdf, '_blank');
    }
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

