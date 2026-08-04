/* jshint esversion: 6 */

const conseils = [

    // --- EXEMPLE AVEC MODALE RICHE ---
    {
        title: "PARTAGE MOI",
        categorie: "Entraînement",
        tags: ["QR CODE"],
        desc: "QR CODE de l'appli",
        details: {
             contenu: [
                { type: "texte", texte: "<strong>partage le QR code à tout le monde</strong>" },
                
                { type: "separateur" },
                { type: "image", src: "images/qrcodeTHT.png", alt: "QR CODE" },
                ]
         }
     },
    
    {
        title: "MODE D'EMPLOI",
        categorie: "Entraînement",
        tags: ["PDF"],
        desc: "Comment utiliser l'appli",
        pdf: "docs/modedemploi.pdf"
         
     },
    
    {
        title: "CONTACT",
        categorie: "Entraînement",
        tags: ["CONTACT"],
        desc: "votre avis m'intéresse",
        details: {
             contenu: [
                { type: "texte", texte: "N'hésitez pas à m'écrire pour partager votre retour d'expérience sur le site : suggestion, ajout de séance d'entraînement... 🙂" },
                { type: "separateur" },
                { type: "email_contact", adresse: "totalhybridtraining@gmail.com", sujet: "Avis sur le site" },
                ]
         }
     },
    
    {
        title: "CROSSTRAINING — Lexique",
        categorie: "Entraînement",
        tags: ["crosstraining", "lexique", "matériel"],
        desc: "Deux fiches sur le crosstraining : un lexique matériels et entraînement / un guide des mouvements.",
        details: {
            contenu: [
                { type: "image", src: "docs/lexique_crosstraining1.jpg", alt: "Lexique crosstraining 1" },
                { type: "image", src: "docs/lexique_crosstraining2.jpg", alt: "Lexique crosstraining 2" }
            ]
        }
    },
    
    //{
    //    title: "CONCENTRIQUE / EXCENTRIQUE : Le cycle du mouvement",
    //    categorie: "Entraînement",
     //   tags: ["technique"],
    //    desc: "Deux phases dans le mouvement à identifier pour progresser.",
    //    details: {
    //         contenu: [
    //             { type: "texte", texte: "Dans presque chaque exercice de renforcement, le muscle passe par deux phases distinctes. Savoir les identifier et les manipuler est la clé pour progresser." },
    //             { type: "separateur" },
     //            { type: "texte", texte: "<strong style='font-size:1.1em; color:#000;'>📌 1-la phase concentrique :</strong>" },
    //             { type: "texte", texte: "• Pieds écartés à largeur d'épaules\n• Genoux dans l'axe des pieds\n• Dos droit, poitrine haute\n• Descendre jusqu'aux hanches sous les genoux" },
    //             { type: "image", src: "images/squat.jpg", alt: "Position du squat" },
    //             { type: "youtube", id: "VOTRE_ID_YOUTUBE" },
    //             { type: "video_locale", src: "videos/squat.mp4" }
    //         ]
    //     }
     //},
    
    {
        title: "ECHAUFFEMENT",
        categorie: "Entraînement",
        tags: ["technique"],
        desc: "A quoi ça sert?",
        details: {
             contenu: [
                { type: "texte", texte: "<strong>Pourquoi s'échauffer ?</strong>" },
                { type: "texte", texte: "L'échauffement est <em>indispensable</em> avant tout effort." },
                { type: "separateur" },
                 { type: "texte", texte: "<strong style='font-size:1.1em; color:#000;'>📌 Les 3 règles d'or :</strong>" },
                 { type: "separateur" },
                { type: "texte", texte: "• <strong>5 à 10 minutes</strong> minimum" },
                { type: "texte", texte: "• Progressif et <em>jamais statique</em>" },
                { type: "texte", texte: "• Spécifique à la séance du jour" },
            ]
         }
     },
    
    
    
    {
        title: "RAMEUR CONCEPT2 - le levier de réglage : DAMPER",
        categorie: "Entraînement",
        tags: ["technique"],
        desc: "Comment utiliser le DAMPER?",
        details: {
             contenu: [
                { type: "texte", texte: "<strong>Quel niveau de difficulté choisir et quel ressenti?</strong>" },
                 { type: "separateur" },
                { type: "texte", texte: "📌<em>DAMPER bas (1 à 3)</em> : Sensation légère et fluide. Idéal pour travailler la vitesse de réaction et le cardio pur. A utiliser pour l'échauffement." },
                { type: "texte", texte: "📌<em>DAMPER moyen (3 à 5)</em> : Réglage de référence pour les tests de performance (comme le 2000m). C'est le meilleur équilibre entre force et cardio." },
                 { type: "texte", texte: "📌<em>DAMPER haut (6 à 10)</em> : Sensation lourde. Impression de ramer dans de la mélasse ou avec un bateau très chargé. Contre-indiqué pour les longues séances. Plus exigeant pour les muscles, souvent plus lent pour le cardio car la cadence chute." },
                
            ]
         }
     },

    // ══════════════════════════════════════════════════════
    // LEXIQUE DES MOUVEMENTS
    // ══════════════════════════════════════════════════════
    {
        title: "LEXIQUE DES MOUVEMENTS",
        categorie: "Technique",
        tags: ["lexique", "mouvements", "muscles"],
        desc: "Description et muscles sollicités pour chaque mouvement. Recherche par nom ou muscle.",
        details: {
            type_special: "lexique",
            mouvements: [
                
                {
                    id: "burpee",
                    titre: "Burpee",
                    image: "images/mouvements/burpee.png",
                    explication: "Depuis la position debout : descendre au sol (pompe), se relever et sauter avec les bras levés.",
                    muscles: {
                        principaux:  ["Pectoraux", "Quadriceps", "Fessiers"],
                        secondaires: ["Triceps", "Deltoïdes", "Core", "Cardio"]
                    },
                    liens: [
                        
                    ]
                },
                
                {
                    id: "DC",
                    titre: "Dévellopé couché (Bench press)",
                    image: "images/mouvements/DC.png",
                    explication: "Allongé sur un banc, descendre la barre jusqu'à effleurer la poitrine puis pousser jusqu'à l'extension complète des bras, coudes légèrement rentrés.",
                    muscles: {
                        principaux:  ["Pectoraux"],
                        secondaires: ["Triceps", "Deltoïdes"]
                    },
                    liens: [
                        { type: "Mouvement similaire", id: "pompe" }
                    ]
                },
                
                {
                    id: "pompe",
                    titre: "Pompe (Push-up)",
                    image: "images/mouvements/pompe.png",
                    explication: "En appui sur les mains et les pieds, descendre la poitrine jusqu'au sol puis remonter en gardant le corps gainé.",
                    muscles: {
                        principaux:  ["Pectoraux", "Triceps"],
                        secondaires: ["Deltoïdes", "Core", "Rhomboïdes"]
                    },
                    liens: [
                        
                        { type: "Mouvement antagoniste", id: "traction" }
                    ]
                },
                
                {
                    id: "sit-up",
                    titre: "Sit-up",
                    image: "images/mouvements/SITUP.png",
                    explication: "Allongé sur le dos, genoux fléchis, monter le buste jusqu'à la position assise et toucher les chevilles avec les mains.",
                    muscles: {
                        principaux:  ["Abdominaux"],
                        secondaires: ["Fléchisseurs de hanche", "Core"]
                    },
                    liens: [
                        
                    ]
                },
                
                {
                    id: "squat",
                    titre: "Squat",
                    image: "images/mouvements/squat.png",
                    explication: "Pieds écartés à largeur d'épaules, descendre jusqu'aux hanches sous les genoux, dos droit, poitrine haute.",
                    muscles: {
                        principaux:  ["Quadriceps", "Fessiers"],
                        secondaires: ["Ischio-jambiers", "Mollets", "Core"]
                    },
                    liens: [
                        
                        
                    ]
                },
                
                {
                    id: "SDT",
                    titre: "Soulevé de terre (Deadlift)",
                    image: "images/mouvements/SDT.png",
                    explication: "Pieds écartés à largeur de hanches, barre au-dessus des pieds, dos droit et gainé, pousser le sol pour monter avec la barre le long des jambes jusqu'à l'extension complète.",
                    muscles: {
                        principaux:  ["Ischio-jambiers", "Fessiers", "Dorsaux"],
                        secondaires: ["Quadriceps", "Trapèzes", "Core", "Avant-bras"]
                    },
                    liens: [
                        
                        
                    ]
                },
                
                {
                    id: "thruster",
                    titre: "thruster",
                    image: "images/mouvements/thruster.png",
                    explication: "Pieds écartés à largeur de hanches, barre posé sur les clavicules, coude et avant bras à la perpendiculaire de la barre:<br>◾1:descendre sur une flexion de jambe, rentrer le nombril pour être bien stable, dos en position neutre <br>◾2:on évite en position basse d'arrondir le bas du dos. Si c'est le cas, moins descendre lors du mouvement suivant <br>◾3:remonter et utiliser la force de propulsion des jambes pour entamer le mouvement des bras vers le haut <br>◾4:développer pour amener la barre au dessus de votre tête bras tendus, ne pas cambrer. <br>◾Pendant le mouvement, les pieds restent bien campés au sol",
                    muscles: {
                        principaux:  ["Quadriceps", "Deltoïdes (Épaules)", "Fessiers", "Triceps"],
                        secondaires: ["Ischio-jambiers", "Sangle Abdominale et Érecteurs du Rachis", "Trapèzes", "Avant-bras", "Mollets"]
                    },
                    liens: [
                        
                        
                    ]
                },
                
                
                {
                    id: "traction",
                    titre: "Traction (Pull-up)",
                    image: "images/mouvements/traction.png",
                    explication: "Suspendu à une barre, tirer le corps vers le haut jusqu'à ce que le menton dépasse la barre.",
                    muscles: {
                        principaux:  ["Dorsaux", "Biceps"],
                        secondaires: ["Rhomboïdes", "Trapèzes", "Core"]
                    },
                    liens: [
                        { type: "Mouvement antagoniste", id: "pompe" }
                    ]
                },
                
            ]
        }
    },
    
    {
        title: "DATA ANALYTICS",
        categorie: "suivi et analyse",
        tags: ["DATA"],
        desc: "Analyse de performance -en test-",
        details: {
             contenu: [
                { type: "texte", texte: "<strong>clique sur le lien ci-dessous</strong>" },
                { type: "texte", texte: "(c'est en phase de test)" },
                { type: "separateur" },
                 { type: "lien", texte: "📊 Ouvrir THT Analytics", url: "THT_Analytics_Dashboard.html" },
                  { type: "lien", texte: "📊 Ouvrir THT AnalyticsV2", url: "THT_Analytics_Dashboard_v2.html" },
                 ]
         }
     },

    // --- EXEMPLE AVEC LIEN PDF ---
    // {
    //     title: "Mon conseil en PDF",
    //     categorie: "Nutrition",
    //     tags: ["nutrition", "récupération"],
    //     desc: "Description courte du conseil.",
    //     pdf: "docs/mon_conseil.pdf"
    // },

    // --- EXEMPLE MODALE COMPLÈTE (texte + image + vidéo) ---
    // {
    //     title: "Les bases du squat",
    //     categorie: "Technique",
    //     tags: ["technique", "jambes"],
    //     desc: "Apprendre le squat correctement pour éviter les blessures.",
    //     details: {
    //         contenu: [
    //             { type: "texte", texte: "Le squat est un mouvement fondamental du crosstraining. Voici les points clés à respecter :" },
    //             { type: "texte", texte: "• Pieds écartés à largeur d'épaules\n• Genoux dans l'axe des pieds\n• Dos droit, poitrine haute\n• Descendre jusqu'aux hanches sous les genoux" },
    //             { type: "image", src: "images/squat.jpg", alt: "Position du squat" },
    //             { type: "youtube", id: "VOTRE_ID_YOUTUBE" },
    //             { type: "video_locale", src: "videos/squat.mp4" }
    //         ]
    //     }
    // },

];

// Correspondance catégorie → couleur de carte
const categorieStyle = {
    "Lexique":      { cardClass: "card-muscu",    btnColor: "" },
    "Technique":    { cardClass: "card-for-time",  btnColor: "" },
    "Nutrition":    { cardClass: "card-hyrox",     btnColor: "" },
    "Récupération": { cardClass: "card-emom",      btnColor: "" },
    "Matériel":     { cardClass: "card-tabata",    btnColor: "" },
    "Programme":    { cardClass: "card-amrap",     btnColor: "" }
};

function displayConseils() {
    const grid = document.getElementById('conseils-grid');
    if (!grid) return;
    grid.innerHTML = '';

    conseils.forEach(function(conseil, index) {
        const style = categorieStyle[conseil.categorie] || { cardClass: "card-muscu" };
        const tagHtml = (conseil.tags || []).map(function(t) {
            return '<span class="tag tag-material">' + t + '</span>';
        }).join('');

        const btnHtml = conseil.details ?
            '<button onclick="openModalConseil(' + index + ')" class="btn-full">📖 Lire l\'article</button>' :
            '<a href="' + conseil.pdf + '" target="_blank" class="btn-full">📄 Ouvrir le PDF</a>';

        grid.innerHTML +=
            '<div class="card ' + style.cardClass + '">' +
            '<div>' +
            '<span class="tag tag-body">' + conseil.categorie + '</span>' +
            tagHtml +
            '<h3>' + conseil.title + '</h3>' +
            '<div class="card-desc">' + conseil.desc + '</div>' +
            '</div>' +
            '<div class="card-buttons">' + btnHtml + '</div>' +
            '</div>';
    });

    // Carte carnet d'entraînement muscu — dans sa propre section filtrable
    var hasData = false;
    try { hasData = Object.keys(JSON.parse(localStorage.getItem('muscu_carnet') || '{}')).length > 0; } catch(e) {}
    var carnetSection = document.getElementById('section-carnet');
    if (!carnetSection) {
        carnetSection = document.createElement('div');
        carnetSection.id = 'section-carnet';
        carnetSection.style.marginTop = '24px';
        var sectionConseils = document.getElementById('section-conseils');
        sectionConseils.parentNode.insertBefore(carnetSection, sectionConseils.nextSibling);
    }
    carnetSection.innerHTML =
        '<div class="card-grid">' +
        '<div class="card card-muscu">' +
        '<div>' +
        '<span class="tag tag-body">Musculation</span>' +
        '<span class="tag tag-material">CARNET</span>' +
        '<h3>📓 Mon carnet muscu</h3>' +
        '<div class="card-desc">' + (hasData ? "Consulter l'historique de vos séances : reps, poids, progression." : "Aucune séance enregistrée pour l'instant. Lancez une séance depuis \"Créer sa séance\".") + '</div>' +
        '</div>' +
        '<div class="card-buttons">' +
        '<button onclick="openCarnetMuscu()" class="btn-full">' + (hasData ? '📊 Voir mon carnet' : '📋 Carnet vide') + '</button>' +
        '</div>' +
        '</div>' +
        '</div>';

    // Carte carnet WOD & Cardio (TABATA, AMRAP, EMOM, FOR TIME, INTERVALLES)
    var wodData = getAllWodEntries();
    var hasWod  = wodData.length > 0;
    var wodSection = document.getElementById('section-carnet-wod');
    if (!wodSection) {
        wodSection = document.createElement('div');
        wodSection.id = 'section-carnet-wod';
        wodSection.style.marginTop = '24px';
        carnetSection.parentNode.insertBefore(wodSection, carnetSection.nextSibling);
    }
    wodSection.innerHTML =
        '<div class="card-grid">' +
        '<div class="card card-amrap">' +
        '<div>' +
        '<span class="tag tag-body">WOD</span>' +
        '<span class="tag tag-material">CARDIO</span>' +
        '<h3>\uD83C\uDFC5 Mon carnet WOD & Cardio</h3>' +
        '<div class="card-desc">' + (hasWod ? 'Historique de vos séances TABATA, AMRAP, EMOM, FOR TIME et Intervalles.' : 'Aucune séance enregistrée. Lancez une séance depuis "Créer sa séance" et cliquez sur \uD83D\uDCBE Sauvegarder.') + '</div>' +
        '</div>' +
        '<div class="card-buttons">' +
        '<button onclick="openCarnetWod()" class="btn-full">' + (hasWod ? '\uD83C\uDFC6 Voir mon carnet WOD (' + wodData.length + ')' : '\uD83D\uDCCB Carnet vide') + '</button>' +
        '</div>' +
        '</div>' +
        '</div>';

    // Carte Mon Activité (tableau de bord global)
    var activSection = document.getElementById('section-mon-activite');
    if (!activSection) {
        activSection = document.createElement('div');
        activSection.id = 'section-mon-activite';
        activSection.style.marginTop = '24px';
        wodSection.parentNode.insertBefore(activSection, wodSection.nextSibling);
    }
    var totalSeances = getAllActiviteEntries().length;
    activSection.innerHTML =
        '<div class="card-grid">' +
        '<div class="card card-hybrid">' +
        '<div>' +
        '<span class="tag tag-body">Suivi</span>' +
        '<span class="tag tag-material">GLOBAL</span>' +
        '<h3>📊 Mon activité</h3>' +
        '<div class="card-desc">' + (totalSeances > 0 ? 'Vue d\'ensemble de toutes vos séances : calendrier, histogramme, stats hebdo.' : 'Aucune séance enregistrée pour l\'instant.') + '</div>' +
        '</div>' +
        '<div class="card-buttons">' +
        '<button onclick="openMonActivite()" class="btn-full">' + (totalSeances > 0 ? '📈 Voir mon activité (' + totalSeances + ' séances)' : '📊 Tableau de bord') + '</button>' +
        '</div>' +
        '</div>' +
        '</div>';

    // Carte Sauvegarde globale (Export/Import JSON)
    var saveSection = document.getElementById('section-sauvegarde');
    if (!saveSection) {
        saveSection = document.createElement('div');
        saveSection.id = 'section-sauvegarde';
        saveSection.style.marginTop = '24px';
        activSection.parentNode.insertBefore(saveSection, activSection.nextSibling);
    }
    saveSection.innerHTML =
        '<div class="card-grid">' +
        '<div class="card card-cardio">' +
        '<div>' +
        '<span class="tag tag-body">Données</span>' +
        '<span class="tag tag-material">SAUVEGARDE</span>' +
        '<h3>💾 Mes sauvegardes</h3>' +
        '<div class="card-desc">Exportez ou restaurez l\'ensemble de vos données : carnet muscu et carnet WOD & Cardio en un seul fichier.</div>' +
        '</div>' +
        '<div class="card-buttons">' +
        '<button onclick="exportToutJSON()" class="btn-full" style="margin-bottom:8px;">⬇ Exporter tout (JSON)</button>' +
        '<button onclick="importToutJSON()" class="btn-full" style="background:#555;margin-bottom:8px;">⬆ Importer tout (JSON)</button>' +
        '<button onclick="effacerToutJSON()" class="btn-full" style="background:none;border:1px solid #c0392b;color:#e74c3c;">🗑 Effacer tout</button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<input type="file" id="tout-import-input" accept=".json" style="display:none;">';
}

function openModalConseil(index) {
    const c = conseils[index];
    const d = c.details;
    if (!d) return;

    // Titre
    document.getElementById('modal-title').textContent = c.title;

    // Style carte
    const style = categorieStyle[c.categorie] || { cardClass: "card-muscu" };
    const typeKey = style.cardClass.replace('card-', '');
    document.getElementById('modal-box').className = 'type-' + typeKey;

    // Badges
    const tagBadges = (c.tags || []).map(function(t) {
        return '<span class="modal-badge modal-badge-mat">' + t + '</span>';
    }).join('');
    document.getElementById('modal-badges').innerHTML =
        '<span class="modal-badge modal-badge-type">' + c.categorie + '</span>' +
        tagBadges;

    // Cas spécial : LEXIQUE DES MOUVEMENTS
    if (d.type_special === 'lexique') {
        var htmlLex = '';
        htmlLex += '<div style="margin-bottom:14px;">';
        htmlLex += '<input type="text" id="lexique-search" placeholder="🔍 Rechercher un mouvement ou un muscle..." ';
        htmlLex += 'style="width:100%; padding:10px 14px; border-radius:8px; border:1px solid #ddd; font-size:0.95em; box-sizing:border-box;">';
        htmlLex += '</div>';
        htmlLex += '<div id="lexique-liste">';
        (d.mouvements || []).forEach(function(mv) {
            var princ = (mv.muscles.principaux || []).join(', ');
            var secon = (mv.muscles.secondaires || []).join(', ');
            var mvId  = mv.id ? 'lexique-mv-' + mv.id : '';
            htmlLex += '<div class="lexique-item"' + (mvId ? ' id="' + mvId + '"' : '') +
                       ' data-search="' + (mv.titre + ' ' + princ + ' ' + secon).toLowerCase() + '" ';
            htmlLex += 'style="border-bottom:1px solid #f0f0f0; padding:14px 0;">';
            htmlLex += '<h4 class="lex-titre">' + mv.titre + '</h4>';
            if (mv.image) {
                htmlLex += '<img src="' + mv.image + '" alt="' + mv.titre + '" ';
                htmlLex += 'style="max-width:100%; max-height:350px; width:auto; height:auto; display:block; margin:0 auto 10px; border-radius:8px;" onerror="this.style.display=String.fromCharCode(110,111,110,101)">';
            }
            if (mv.youtube) {
                htmlLex += '<iframe src="https://www.youtube.com/embed/' + mv.youtube + '" ' +
                           'style="width:100%; aspect-ratio:16/9; border-radius:8px; border:none; margin-bottom:4px;" allowfullscreen></iframe>' +
                           '<p style="font-size:0.78em; color:#999; text-align:center; margin-bottom:10px;">⚠️ Nécessite une connexion — ' +
                           '<a href="https://www.youtube.com/watch?v=' + mv.youtube + '" target="_blank">ouvrir sur YouTube</a></p>';
            }
            if (mv.video) {
                htmlLex += '<video src="' + mv.video + '" controls ' +
                           'style="max-width:100%; max-height:350px; width:auto; display:block; margin:0 auto 10px; border-radius:8px;"></video>';
            }
            htmlLex += '<p class="lex-explication">' + mv.explication + '</p>';
            // Badges muscles
            htmlLex += '<div style="display:flex; gap:6px; flex-wrap:wrap; margin-bottom:8px;">';
            (mv.muscles.principaux || []).forEach(function(m) {
                htmlLex += '<span style="background:#fce4ec; color:#c62828; border-radius:12px; padding:3px 10px; font-size:0.78em; font-weight:700;">💪 ' + m + '</span>';
            });
            (mv.muscles.secondaires || []).forEach(function(m) {
                htmlLex += '<span style="background:#e8f5e9; color:#2e7d32; border-radius:12px; padding:3px 10px; font-size:0.78em; font-weight:700;">+ ' + m + '</span>';
            });
            htmlLex += '</div>';
            // Liens vers mouvements associés
            if (mv.liens && mv.liens.length > 0) {
                htmlLex += '<div class="lex-muscles-sec">';
                mv.liens.forEach(function(lien) {
                    var targetId = 'lexique-mv-' + lien.id;
                    var label = lien.id.replace(/-/g, ' ');
                    htmlLex += '<span style="margin-right:10px;">🔗 <em>' + lien.type + ' :</em> ' +
                               '<a href="#" onclick="scrollToMouvement(&quot;' + targetId + '&quot;); return false;" ' +
                               'class="lex-img-link">' +
                               label + '</a></span>';
                });
                htmlLex += '</div>';
            }
            htmlLex += '</div>';
        });
        htmlLex += '</div>';
        document.getElementById('modal-body').innerHTML = htmlLex;
        document.getElementById('modal-overlay').classList.add('open');
        document.body.style.overflow = 'hidden';
        // Activer la recherche + scroll listener
        setTimeout(function() {
            var input = document.getElementById('lexique-search');
            if (input) {
                input.addEventListener('input', function() {
                    var q = this.value.toLowerCase().trim();
                    document.querySelectorAll('.lexique-item').forEach(function(item) {
                        item.style.display = (!q || item.dataset.search.includes(q)) ? 'block' : 'none';
                    });
                });
            }

        }, 100);
        return;
    }

    // Corps — blocs de contenu
    let html = '';
    (d.contenu || []).forEach(function(bloc) {

        if (bloc.type === 'texte') {
            // Texte : supporte les sauts de ligne avec \n
            var lignes = bloc.texte.split('\n');
            html += '<div class="conseil-texte">';
            lignes.forEach(function(ligne) {
                html += '<p>' + ligne + '</p>';
            });
            html += '</div>';
        }

        else if (bloc.type === 'image') {
            html += '<div class="conseil-media" style="text-align:center;">' +
                    '<img src="' + bloc.src + '" alt="' + (bloc.alt || '') + '" ' +
                    'style="max-width:100%; max-height:420px; width:auto; height:auto; border-radius:8px; margin-bottom:12px; display:inline-block;">' +
                    '</div>';
        }

        else if (bloc.type === 'youtube') {
            html += '<div class="conseil-media">' +
                    '<iframe src="https://www.youtube.com/embed/' + bloc.id + '" ' +
                    'style="width:100%; aspect-ratio:16/9; border-radius:8px; border:none; margin-bottom:4px;" ' +
                    'allowfullscreen></iframe>' +
                    '<p class="conseil-media-note">' +
                    '⚠️ Nécessite une connexion — ' +
                    '<a href="https://www.youtube.com/watch?v=' + bloc.id + '" target="_blank">ouvrir sur YouTube</a>' +
                    '</p></div>';
        }

        else if (bloc.type === 'video_locale') {
            html += '<div class="conseil-media">' +
                    '<video src="' + bloc.src + '" controls ' +
                    'style="width:100%; border-radius:8px; margin-bottom:12px;"></video>' +
                    '</div>';
        }

        else if (bloc.type === 'conseil') {
            html += '<div class="modal-conseil">' +
                    '<strong>💡 Conseil</strong>' + bloc.texte +
                    '</div>';
        }

        else if (bloc.type === 'separateur') {
            html += '<hr class="conseil-sep">';
        }

        else if (bloc.type === 'lien') {
            html += '<div style="text-align:center; margin:12px 0;">' +
                    '<a href="' + bloc.url + '" class="btn-full" style="display:inline-block;">' +
                    bloc.texte +
                    '</a></div>';
        }

        else if (bloc.type === 'email_contact') {
            var sujetEncode = encodeURIComponent(bloc.sujet || '');
            var gmailUrl = 'https://mail.google.com/mail/?view=cm&to=' + bloc.adresse + '&su=' + sujetEncode;
            html += '<div style="text-align:center; margin:16px 0;">' +
                    '<div class="conseil-email-box">' +
                    '<span class="conseil-email-label">Adresse email</span>' +
                    '<span class="conseil-email-adresse">' + bloc.adresse + '</span>' +
                    '</div>' +
                    '<br>' +
                    '<a href="' + gmailUrl + '" target="_blank" class="btn-full" style="display:inline-block;">' +
                    '📧 Ouvrir dans Gmail' +
                    '</a>' +
                    '</div>';
        }

    });

    document.getElementById('modal-body').innerHTML = html;
    document.getElementById('modal-overlay').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function scrollToMouvement(targetId) {
    var target = document.getElementById(targetId);
    if (target) {
        // Effacer la recherche pour que le mouvement cible soit visible
        var input = document.getElementById('lexique-search');
        if (input) {
            input.value = '';
            document.querySelectorAll('.lexique-item').forEach(function(item){ item.style.display='block'; });
        }
        // Highlight temporaire
        target.style.background = '#fffde7';
        target.style.borderRadius = '8px';
        setTimeout(function(){ target.style.background = ''; target.style.borderRadius = ''; }, 1500);
        // scrollIntoView — fonctionne sur PC et smartphone
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Convertit "dd/mm/yyyy hh:mm" en timestamp — globale pour openCarnetMuscu ET renderCarnetDetail
function parseCarnetDate(d) {
    if (!d) return 0;
    var parts = d.split(' ');
    var dp = parts[0].split('/');
    var tp = parts[1] ? parts[1].split(':') : ['0','0'];
    return new Date(parseInt(dp[2]), parseInt(dp[1])-1, parseInt(dp[0]),
                    parseInt(tp[0])||0, parseInt(tp[1])||0).getTime();
}

function openCarnetMuscu() {
    var CARNET_KEY = 'muscu_carnet';
    var data = {};
    try { data = JSON.parse(localStorage.getItem(CARNET_KEY)) || {}; } catch(e) {}
    var keys = Object.keys(data);

    // Titre et badges
    document.getElementById('modal-title').textContent = 'Mon Carnet Muscu';
    document.getElementById('modal-box').className = 'type-muscu';
    document.getElementById('modal-badges').innerHTML =
        '<span class="modal-badge modal-badge-type">Musculation</span>' +
        '<span class="modal-badge modal-badge-mat">CARNET</span>';

    if (!keys.length) {
        document.getElementById('modal-body').innerHTML =
            '<div style="text-align:center;padding:30px;color:#999;">' +
            '<div style="font-size:2em;margin-bottom:12px;">📋</div>' +
            '<p>Aucune séance enregistrée.<br>Lance une séance muscu depuis <strong>Créer sa séance</strong> pour alimenter ton carnet.</p>' +
            '</div>';
        document.getElementById('modal-overlay').classList.add('open');
        document.body.style.overflow = 'hidden';
        return;
    }

    // Sélecteur de type de séance
    var html = '<div style="margin-bottom:16px;">';
    html += '<label style="font-size:0.8em;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#888;display:block;margin-bottom:6px;">Type de séance</label>';
    html += '<select id="carnet-type-select" style="width:100%;padding:10px;border-radius:8px;border:1px solid #ddd;font-size:0.95em;background:#fff;" onchange="renderCarnetDetail()">';
    // Trier les clés par date de la dernière séance (la plus récente en premier)
    keys.sort(function(a, b) {
        var dateA = data[a].length ? parseCarnetDate(data[a][0].date) : 0;
        var dateB = data[b].length ? parseCarnetDate(data[b][0].date) : 0;
        return dateB - dateA;
    });
    keys.forEach(function(nom) {
        var lastDate = data[nom].length ? data[nom][0].date.split(' ')[0] : '';
        html += '<option value="' + nom.replace(/"/g, '&quot;') + '">' + nom + ' — ' + lastDate + ' (' + data[nom].length + ' séance' + (data[nom].length > 1 ? 's' : '') + ')</option>';
    });
    html += '</select></div>';
    html += '<div id="carnet-detail-content"></div>';

    document.getElementById('modal-body').innerHTML = html;
    document.getElementById('modal-overlay').classList.add('open');
    document.body.style.overflow = 'hidden';

    // Stocker data pour renderCarnetDetail
    window._carnetData = data;
    setTimeout(renderCarnetDetail, 50);
}

function renderCarnetDetail() {
    var sel = document.getElementById('carnet-type-select');
    if (!sel || !window._carnetData) return;
    var nom = sel.value;
    var seances = window._carnetData[nom] || [];
    var container = document.getElementById('carnet-detail-content');
    if (!container) return;

    // Trier par date décroissante
    seances = seances.slice().sort(function(a, b) {
        return parseCarnetDate(b.date) - parseCarnetDate(a.date);
    });
    var html = '';
    seances.forEach(function(seance, si) {
        var prev = seances[si + 1] || null; // séance précédente
        html += '<div style="background:#f8f8f8;border-radius:10px;padding:14px;margin-bottom:14px;border:1px solid #eee;">';
        // En-tête séance
        html += '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;flex-wrap:wrap;gap:6px;">';
        html += '<div>';
        html += '<div style="font-weight:800;font-size:0.95em;color:#000;">' + (si === 0 ? '⭐ Dernière séance' : 'Séance #' + (si + 1)) + '</div>';
        html += '<div style="font-size:0.78em;color:#888;margin-top:2px;">📅 ' + seance.date + ' &nbsp;⏱ ' + seance.duree + '</div>';
        html += '</div>';
        if (si === 0 && seances.length > 1) {
            html += '<div style="font-size:0.72em;background:#e8f5e9;color:#2e7d32;padding:3px 8px;border-radius:10px;font-weight:700;">vs précédente ▼</div>';
        }
        html += '</div>';

        // Exercices
        seance.resultats.forEach(function(exo) {
            // Trouver cet exo dans la séance précédente
            var prevExo = null;
            if (prev) {
                for (var pi = 0; pi < prev.resultats.length; pi++) {
                    if (prev.resultats[pi].nom === exo.nom) { prevExo = prev.resultats[pi]; break; }
                }
            }

            html += '<div style="margin-bottom:10px;">';
            html += '<div style="font-size:0.85em;font-weight:700;color:#1a237e;margin-bottom:4px;">💪 ' + exo.nom + '</div>';

            // Tableau des séries
            html += '<table style="width:100%;border-collapse:collapse;font-size:0.8em;">';
            html += '<tr style="background:#e8eaf6;"><th style="padding:4px 8px;text-align:left;">Série</th><th style="padding:4px 8px;text-align:center;">Reps</th><th style="padding:4px 8px;text-align:center;">Poids</th>' + (prevExo ? '<th style="padding:4px 8px;text-align:center;">Progression</th>' : '') + '</tr>';

            exo.series.forEach(function(serie, idx) {
                var prevSerie = prevExo ? (prevExo.series[idx] || null) : null;
                var progHtml = '';
                if (prevSerie) {
                    var diffReps  = serie.reps  - prevSerie.reps;
                    var diffPoids = serie.poids - prevSerie.poids;
                    var parts = [];
                    if (diffReps  > 0) parts.push('<span style="color:#2e7d32;">+' + diffReps  + ' reps</span>');
                    if (diffReps  < 0) parts.push('<span style="color:#c62828;">'  + diffReps  + ' reps</span>');
                    if (diffPoids > 0) parts.push('<span style="color:#2e7d32;">+' + diffPoids + 'kg</span>');
                    if (diffPoids < 0) parts.push('<span style="color:#c62828;">'  + diffPoids + 'kg</span>');
                    progHtml = parts.length ? parts.join(' ') : '<span style="color:#999;">＝</span>';
                }
                var bg = idx % 2 === 0 ? '#fff' : '#f9f9f9';
                html += '<tr style="background:' + bg + ';">';
                html += '<td style="padding:4px 8px;color:#666;">S' + (idx+1) + '</td>';
                html += '<td style="padding:4px 8px;text-align:center;font-weight:700;">' + serie.reps + '<span style="font-size:0.85em;color:#888;"> r</span></td>';
                html += '<td style="padding:4px 8px;text-align:center;font-weight:700;">' + (serie.poids > 0 ? serie.poids + '<span style="font-size:0.85em;color:#888;"> kg</span>' : '<span style="color:#bbb;">—</span>') + '</td>';
                if (prevExo) html += '<td style="padding:4px 8px;text-align:center;">' + progHtml + '</td>';
                html += '</tr>';
            });
            // Totaux
            var totalReps = 0, totalVol = 0;
            exo.series.forEach(function(s) {
                totalReps += s.reps;
                totalVol  += s.reps * s.poids;
            });
            html += '<div style="display:flex;gap:10px;margin-top:6px;flex-wrap:wrap;">';
            html += '<span style="background:#e8eaf6;border-radius:6px;padding:3px 10px;font-size:0.78em;font-weight:700;color:#1a237e;">∑ ' + totalReps + ' reps</span>';
            if (totalVol > 0) {
                html += '<span style="background:#fce4ec;border-radius:6px;padding:3px 10px;font-size:0.78em;font-weight:700;color:#c62828;">∑ ' + totalVol + ' kg·reps</span>';
            }
            html += '</div>';

            html += '</table></div>';
        });
        html += '</div>';
    });

    container.innerHTML = html;
}

function closeModal() {
    document.getElementById('modal-overlay').classList.remove('open');
    document.body.style.overflow = '';
    window._carnetData = null;
}

window.addEventListener('DOMContentLoaded', function() {
    displayConseils();
    const overlay = document.getElementById('modal-overlay');
    if (overlay) overlay.addEventListener('click', function(e) { if (e.target === overlay) closeModal(); });
    document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeModal(); });
    const btnClose = document.getElementById('modal-close');
    if (btnClose) btnClose.addEventListener('click', closeModal);
    const backButton = document.getElementById('backToTop');
    if (backButton) {
        window.onscroll = function() { backButton.style.display = (window.scrollY > 300) ? 'block' : 'none'; };
        backButton.addEventListener('click', function() { window.scrollTo({ top: 0, behavior: 'smooth' }); });
    }
});

// ─── WOD CARNET — helpers localStorage (dupliqués ici pour autonomie sur infos.html) ──
function wodCarnetLoad() {
    try { return JSON.parse(localStorage.getItem('wod_carnet') || '{}'); } catch(e) { return {}; }
}
function wodCarnetSave(data) {
    try { localStorage.setItem('wod_carnet', JSON.stringify(data)); } catch(e) {}
}

// ─── WOD CARNET — lecture depuis localStorage wod_carnet ─────────────────
function getAllWodEntries() {
    var entries = [];
    try {
        var data = JSON.parse(localStorage.getItem('wod_carnet') || '{}');
        Object.keys(data).forEach(function(nom) {
            (data[nom] || []).forEach(function(entry) {
                var e = Object.assign({ nomCle: nom }, entry);
                // Normaliser duree_sec : si absent ou 0, le calculer depuis
                // tous les champs possibles (duree, temps, tempsTotal)
                // en gérant les deux formats : HH:MM:SS et MM:SS:centièmes
                if (!e.duree_sec) {
                    e.duree_sec = _parseDureeToSec(e.duree || e.temps || e.tempsTotal || '');
                }
                // Normaliser le champ d'affichage duree si absent
                if (!e.duree && e.duree_sec > 0) {
                    var h = Math.floor(e.duree_sec/3600);
                    var m = Math.floor((e.duree_sec%3600)/60);
                    var s = e.duree_sec%60;
                    e.duree = (h>0 ? String(h).padStart(2,'0')+':' : '') +
                              String(m).padStart(2,'0')+':'+String(s).padStart(2,'0');
                }
                entries.push(e);
            });
        });
    } catch(e) {}
    // Trier par date décroissante (format dd/mm/yyyy hh:mm)
    entries.sort(function(a, b) {
        return parseWodDate(b.date) - parseWodDate(a.date);
    });
    return entries;
}

function parseWodDate(d) {
    if (!d) return 0;
    var parts = d.split(' ');
    var dp = parts[0].split('/');
    var tp = parts[1] ? parts[1].split(':') : ['0','0'];
    return new Date(dp[2], dp[1]-1, dp[0], tp[0], tp[1]).getTime();
}

function openCarnetWod() {
    _wodOuvrirModal();
}

function _wodOuvrirModal() {
    var entries = getAllWodEntries();

    document.getElementById('modal-title').textContent = 'Mon Carnet WOD & Cardio';
    document.getElementById('modal-box').className = 'type-amrap';
    document.getElementById('modal-badges').innerHTML =
        '<span class="modal-badge modal-badge-type">WOD</span>' +
        '<span class="modal-badge modal-badge-mat">CARDIO</span>';

    var typeBadge = { 'TABATA/HIIT':'🎯','AMRAP':'🔄','EMOM':'🔁','FOR TIME':'🏁','INTERVALLES':'🏃','CARDIO EXTERNE':'🏅' };

    // ── Filtre ──────────────────────────────────────────────────────────────
    var nomsUniques = [];
    entries.forEach(function(e) { if (nomsUniques.indexOf(e.nomCle) === -1) nomsUniques.push(e.nomCle); });

    var optionsHtml = '<option value="all">🏆 Toutes les séances (' + entries.length + ')</option>';
    var types = ['TABATA/HIIT','AMRAP','EMOM','FOR TIME','INTERVALLES','CARDIO EXTERNE'];
    types.forEach(function(t) {
        var count = entries.filter(function(e){ return e.type === t; }).length;
        if (count > 0) optionsHtml += '<option value="type:' + t + '">' + (typeBadge[t]||'') + ' ' + t + ' (' + count + ')</option>';
    });
    nomsUniques.forEach(function(n) {
        var count = entries.filter(function(e){ return e.nomCle === n; }).length;
        optionsHtml += '<option value="nom:' + n.replace(/"/g,'&quot;') + '">📋 ' + n + ' (' + count + ')</option>';
    });

    // ── HTML de la modale ───────────────────────────────────────────────────
    var s = 'font-size:0.8em;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#888;display:block;margin-bottom:6px;';
    var html = '';

    // Bouton "+ Séance externe"
    html += '<div style="margin-bottom:14px;text-align:right;">';
    html += '<button onclick="_wodToggleForm()" id="wod-btn-add" style="background:#1a6b3c;color:#fff;border:none;border-radius:8px;padding:8px 16px;font-size:0.85em;font-weight:700;cursor:pointer;">＋ Séance externe</button>';
    html += '</div>';

    // Formulaire de saisie (masqué par défaut)
    html += '<div id="wod-form-ext" style="display:none;background:#f0f7f2;border:1px solid #b2dfdb;border-radius:10px;padding:16px;margin-bottom:18px;">';
    html += '<div style="font-weight:800;font-size:0.9em;color:#1a6b3c;margin-bottom:14px;text-transform:uppercase;letter-spacing:0.06em;">📝 Saisir une séance externe</div>';

    var inp = 'width:100%;padding:9px 12px;border-radius:8px;border:1px solid #ccc;font-size:0.92em;box-sizing:border-box;background:#fff;';
    var row = 'margin-bottom:10px;';

    // 1. Activité (obligatoire)
    html += '<div style="' + row + '"><label style="' + s + '">Activité <span style="color:#c0392b;">*</span></label>';
    html += '<select id="wf-activite" style="' + inp + '">';
    html += '<option value="">-- Choisir --</option>';
    ['Course à pied','Crosstraining','Cyclisme sur route','VTT','Randonnée','Natation','Yoga','Fitness','Sport Collectif'].forEach(function(a) {
        html += '<option value="' + a + '">' + a + '</option>';
    });
    html += '</select></div>';

    // 2. Nom de la séance
    html += '<div style="' + row + '"><label style="' + s + '">Nom de la séance</label>';
    html += '<input type="text" id="wf-nom" placeholder="Ex: Sortie longue dimanche, Trail 10km..." style="' + inp + '" maxlength="80"></div>';

    // 3. Date (obligatoire)
    html += '<div style="' + row + '"><label style="' + s + '">Date <span style="color:#c0392b;">*</span></label>';
    html += '<input type="date" id="wf-date" style="' + inp + '"></div>';

    // 4. Durée HH:MM:SS (obligatoire)
    html += '<div style="' + row + '"><label style="' + s + '">Durée HH:MM:SS <span style="color:#c0392b;">*</span></label>';
    html += '<div style="display:flex;gap:6px;align-items:center;">';
    html += '<input type="number" id="wf-dur-h" placeholder="HH" min="0" max="23" style="' + inp + 'width:70px;">';
    html += '<span style="color:#888;font-weight:700;">:</span>';
    html += '<input type="number" id="wf-dur-m" placeholder="MM" min="0" max="59" style="' + inp + 'width:70px;">';
    html += '<span style="color:#888;font-weight:700;">:</span>';
    html += '<input type="number" id="wf-dur-s" placeholder="SS" min="0" max="59" style="' + inp + 'width:70px;">';
    html += '</div></div>';

    // 5. Distance (km)
    html += '<div style="' + row + '"><label style="' + s + '">Distance (km) — facultatif</label>';
    html += '<input type="number" id="wf-distance" placeholder="Ex: 10.5" min="0" step="0.01" style="' + inp + '"></div>';

    // 6. Allure moyenne (min/km)
    html += '<div style="' + row + '"><label style="' + s + '">Allure moyenne (min/km) — facultatif</label>';
    html += '<div style="display:flex;gap:6px;align-items:center;">';
    html += '<input type="number" id="wf-allure-min" placeholder="min" min="0" max="99" style="' + inp + 'width:80px;">';
    html += '<span style="color:#888;font-weight:700;">\'</span>';
    html += '<input type="number" id="wf-allure-sec" placeholder="sec" min="0" max="59" style="' + inp + 'width:80px;">';
    html += '<span style="color:#888;font-size:0.82em;">/km</span>';
    html += '</div></div>';

    // 7. Nombre de pas
    html += '<div style="' + row + '"><label style="' + s + '">Nombre de pas — facultatif</label>';
    html += '<input type="number" id="wf-pas" placeholder="Ex: 8500" min="0" style="' + inp + '"></div>';

    // 8. Énergie dépensée (kcal)
    html += '<div style="' + row + '"><label style="' + s + '">Énergie dépensée (kcal) — facultatif</label>';
    html += '<input type="number" id="wf-kcal" placeholder="Ex: 450" min="0" style="' + inp + '"></div>';

    // 9. Reps / Rounds
    html += '<div style="' + row + '"><label style="' + s + '">Reps / Rounds — facultatif</label>';
    html += '<input type="text" id="wf-reps" placeholder="Ex: 5 rounds, 120 reps..." style="' + inp + '" maxlength="60"></div>';

    // 10. Vitesse moyenne (km/h)
    html += '<div style="' + row + '"><label style="' + s + '">Vitesse moyenne (km/h) — facultatif</label>';
    html += '<input type="number" id="wf-vitesse" placeholder="Ex: 28.5" min="0" step="0.1" style="' + inp + '"></div>';

    // 11. Dénivelé positif (m)
    html += '<div style="' + row + '"><label style="' + s + '">Dénivelé + (mètres) — facultatif</label>';
    html += '<input type="number" id="wf-denivele-pos" placeholder="Ex: 450" min="0" style="' + inp + '"></div>';

    // 12. Dénivelé négatif (m)
    html += '<div style="' + row + '"><label style="' + s + '">Dénivelé - (mètres) — facultatif</label>';
    html += '<input type="number" id="wf-denivele-neg" placeholder="Ex: 420" min="0" style="' + inp + '"></div>';

    // 13. Commentaire libre
    html += '<div style="' + row + '"><label style="' + s + '">Commentaire libre — facultatif</label>';
    html += '<textarea id="wf-commentaire" rows="3" placeholder="Ressenti, conditions météo, objectif prochain..." style="' + inp + 'resize:vertical;font-family:sans-serif;"></textarea></div>';

    // Boutons valider / annuler
    html += '<div style="display:flex;gap:10px;margin-top:14px;">';
    html += '<button onclick="_wodSauvegarderExterne()" style="flex:1;background:#1a6b3c;color:#fff;border:none;border-radius:8px;padding:10px;font-size:0.88em;font-weight:700;cursor:pointer;">💾 Sauvegarder</button>';
    html += '<button onclick="_wodToggleForm()" style="flex:1;background:none;border:1px solid #ccc;border-radius:8px;padding:10px;font-size:0.88em;cursor:pointer;">Annuler</button>';
    html += '</div>';
    html += '<div id="wod-form-feedback" style="margin-top:8px;font-size:0.82em;color:#c0392b;min-height:18px;"></div>';
    html += '</div>'; // fin form

    // Filtre + liste
    if (entries.length) {
        html += '<div style="margin-bottom:16px;"><label style="' + s + '">Filtrer</label>';
        html += '<select id="wod-filter-select" style="width:100%;padding:10px;border-radius:8px;border:1px solid #ddd;font-size:0.95em;background:#fff;" onchange="renderCarnetWod()">';
        html += optionsHtml + '</select></div>';
    }
    html += '<div id="wod-detail-content"></div>';

    document.getElementById('modal-body').innerHTML = html;
    // Pré-remplir la date du jour
    var today = new Date();
    var dd = String(today.getDate()).padStart(2,'0');
    var mm = String(today.getMonth()+1).padStart(2,'0');
    var yyyy = today.getFullYear();
    var el = document.getElementById('wf-date');
    if (el) el.value = yyyy + '-' + mm + '-' + dd;

    document.getElementById('modal-overlay').classList.add('open');
    document.body.style.overflow = 'hidden';
    window._wodData = entries;
    if (entries.length) setTimeout(renderCarnetWod, 50);
}

function _wodToggleForm() {
    var f = document.getElementById('wod-form-ext');
    if (!f) return;
    f.style.display = (f.style.display === 'none') ? 'block' : 'none';
}

function _wodSauvegarderExterne() {
    var activite = (document.getElementById('wf-activite') || {}).value || '';
    var nom      = (document.getElementById('wf-nom')      || {}).value || '';
    var dateVal  = (document.getElementById('wf-date')     || {}).value || '';
    var durH     = parseInt((document.getElementById('wf-dur-h') || {}).value) || 0;
    var durM     = parseInt((document.getElementById('wf-dur-m') || {}).value) || 0;
    var durS     = parseInt((document.getElementById('wf-dur-s') || {}).value) || 0;
    var dist     = parseFloat((document.getElementById('wf-distance')  || {}).value) || null;
    var allMin   = parseInt((document.getElementById('wf-allure-min') || {}).value);
    var allSec   = parseInt((document.getElementById('wf-allure-sec') || {}).value);
    var pas      = parseInt((document.getElementById('wf-pas')  || {}).value) || null;
    var kcal     = parseInt((document.getElementById('wf-kcal') || {}).value) || null;
    var reps        = (document.getElementById('wf-reps')         || {}).value || '';
    var vitesse     = parseFloat((document.getElementById('wf-vitesse')      || {}).value) || null;
    var denivPos    = parseInt((document.getElementById('wf-denivele-pos')   || {}).value) || null;
    var denivNeg    = parseInt((document.getElementById('wf-denivele-neg')   || {}).value) || null;
    var commentaire = (document.getElementById('wf-commentaire') || {}).value || '';

    var fb = document.getElementById('wod-form-feedback');

    // Validations obligatoires
    if (!activite) { if(fb) fb.textContent = '⚠️ Veuillez choisir une activité.'; return; }
    if (!dateVal)  { if(fb) fb.textContent = '⚠️ La date est obligatoire.'; return; }
    var dureeSecTotale = durH * 3600 + durM * 60 + durS;
    if (dureeSecTotale <= 0) { if(fb) fb.textContent = '⚠️ La durée est obligatoire.'; return; }
    if(fb) fb.textContent = '';

    // Formatage date en dd/mm/yyyy pour cohérence avec le reste du carnet
    var parts = dateVal.split('-');
    var dateFr = parts[2] + '/' + parts[1] + '/' + parts[0];

    // Allure : stocker en décimal min/km (ex: 5'15" → 5.25)
    var allureDec = null;
    if (!isNaN(allMin) && !isNaN(allSec) && (allMin > 0 || allSec > 0)) {
        allureDec = allMin + Math.round(allSec / 0.6) / 100;
    }

    // Durée formatée HH:MM:SS pour l'affichage
    var dureeAff = _pad2(durH) + ':' + _pad2(durM) + ':' + _pad2(durS);

    var nomCle = nom.trim() || activite;
    var entry = {
        date:      dateFr,
        type:      'CARDIO EXTERNE',
        activite:  activite,
        nom:       nomCle,
        // Durée normalisée
        duree_sec: dureeSecTotale,   // stockage calcul
        duree:     dureeAff,          // affichage
        // Optionnels normalisés
        distance_km:  dist !== null ? dist : undefined,
        allure_min_km: allureDec !== null ? allureDec : undefined,
        pas:          pas  !== null ? pas  : undefined,
        kcal:         kcal !== null ? kcal : undefined,
        reps:            reps.trim() || undefined,
        vitesse_kmh:     vitesse  !== null ? vitesse  : undefined,
        denivele_pos_m:  denivPos !== null ? denivPos : undefined,
        denivele_neg_m:  denivNeg !== null ? denivNeg : undefined,
        commentaire:     commentaire.trim() || undefined
    };
    // Nettoyer les undefined
    Object.keys(entry).forEach(function(k){ if (entry[k] === undefined) delete entry[k]; });

    // Sauvegarder
    var data = wodCarnetLoad();
    if (!data[nomCle]) data[nomCle] = [];
    data[nomCle].unshift(entry);
    data[nomCle] = data[nomCle].slice(0, 999);
    wodCarnetSave(data);

    // Feedback + refresh
    _wodToggleForm();
    _wodOuvrirModal();
}

function _pad2(n) { return String(n).padStart(2,'0'); }

function renderCarnetWod() {
    var sel = document.getElementById('wod-filter-select');
    var container = document.getElementById('wod-detail-content');
    if (!container || !window._wodData) return;
    var filterVal = sel ? sel.value : 'all';

    var typeBadge = { 'TABATA/HIIT':'🎯','AMRAP':'🔄','EMOM':'🔁','FOR TIME':'🏁','INTERVALLES':'🏃','CARDIO EXTERNE':'🏅' };
    var typeColor = { 'TABATA/HIIT':'#c0392b','AMRAP':'#8e44ad','EMOM':'#2980b9','FOR TIME':'#e67e22','INTERVALLES':'#27ae60','CARDIO EXTERNE':'#00897b' };

    var entries;
    if (filterVal === 'all') {
        entries = window._wodData;
    } else if (filterVal.indexOf('type:') === 0) {
        var t = filterVal.slice(5);
        entries = window._wodData.filter(function(e){ return e.type === t; });
    } else if (filterVal.indexOf('nom:') === 0) {
        var n = filterVal.slice(4);
        entries = window._wodData.filter(function(e){ return e.nomCle === n; });
    } else {
        entries = window._wodData;
    }

    var html = '';
    entries.forEach(function(e, idx) {
        var couleur = typeColor[e.type] || '#555';
        html += '<div style="background:#f8f8f8;border-radius:10px;padding:14px;margin-bottom:14px;border:1px solid #eee;border-left:4px solid ' + couleur + ';">';

        // En-tête
        html += '<div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:6px;margin-bottom:10px;">';
        html += '<div>';
        var label = e.activite ? (typeBadge[e.type]||'') + ' ' + e.activite : (typeBadge[e.type]||'') + ' ' + (e.type||'');
        html += '<div style="font-size:0.72em;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:' + couleur + ';margin-bottom:3px;">' + label + '</div>';
        html += '<div style="font-weight:800;font-size:0.95em;color:#000;">' + (e.nom || e.nomCle) + '</div>';
        html += '</div>';
        if (e.date) html += '<div style="font-size:0.75em;background:#f0f0f0;color:#555;padding:3px 8px;border-radius:8px;white-space:nowrap;">📅 ' + e.date + '</div>';
        html += '</div>';

        // Badges résultats
        html += '<div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:8px;">';
        if (e.duree)        html += '<span style="background:#e8eaf6;color:#1a237e;border-radius:8px;padding:4px 10px;font-size:0.82em;font-weight:700;">⏱ ' + e.duree + '</span>';
        if (e.temps)        html += '<span style="background:#e8eaf6;color:#1a237e;border-radius:8px;padding:4px 10px;font-size:0.82em;font-weight:700;">⏱ ' + e.temps + '</span>';
        if (e.tempsTotal)   html += '<span style="background:#e8eaf6;color:#1a237e;border-radius:8px;padding:4px 10px;font-size:0.82em;font-weight:700;">⏱ ' + e.tempsTotal + '</span>';
        if (e.distance_km)  html += '<span style="background:#e0f2f1;color:#00695c;border-radius:8px;padding:4px 10px;font-size:0.82em;font-weight:700;">📍 ' + e.distance_km + ' km</span>';
        if (e.allure_min_km) {
            var am = Math.floor(e.allure_min_km);
            var as = Math.round((e.allure_min_km - am) * 0.6 * 100);
            html += '<span style="background:#f3e5f5;color:#6a1b9a;border-radius:8px;padding:4px 10px;font-size:0.82em;font-weight:700;">🏃 ' + am + '\'' + _pad2(as) + '"/km</span>';
        }
        if (e.kcal)         html += '<span style="background:#fff8e1;color:#f57f17;border-radius:8px;padding:4px 10px;font-size:0.82em;font-weight:700;">🔥 ' + e.kcal + ' kcal</span>';
        if (e.pas)          html += '<span style="background:#fce4ec;color:#880e4f;border-radius:8px;padding:4px 10px;font-size:0.82em;font-weight:700;">👟 ' + e.pas.toLocaleString('fr-FR') + ' pas</span>';
        if (e.rounds && e.rounds !== '0') html += '<span style="background:#fce4ec;color:#c62828;border-radius:8px;padding:4px 10px;font-size:0.82em;font-weight:700;">🔁 ' + e.rounds + ' rounds</span>';
        if (e.reps)         html += '<span style="background:#fff3e0;color:#e65100;border-radius:8px;padding:4px 10px;font-size:0.82em;font-weight:700;">💪 ' + e.reps + '</span>';
        if (e.vitesse_kmh)     html += '<span style="background:#e8f5e9;color:#2e7d32;border-radius:8px;padding:4px 10px;font-size:0.82em;font-weight:700;">🚴 ' + e.vitesse_kmh + ' km/h</span>';
        if (e.denivele_pos_m)  html += '<span style="background:#e8f0fe;color:#1a237e;border-radius:8px;padding:4px 10px;font-size:0.82em;font-weight:700;">⬆ +' + e.denivele_pos_m + ' m</span>';
        if (e.denivele_neg_m)  html += '<span style="background:#fbe9e7;color:#bf360c;border-radius:8px;padding:4px 10px;font-size:0.82em;font-weight:700;">⬇ -' + e.denivele_neg_m + ' m</span>';
        html += '</div>';

        if (e.commentaire) {
            html += '<div style="font-size:0.83em;color:#555;background:#fffde7;border-radius:6px;padding:8px 10px;border:1px solid #f9a825;margin-bottom:8px;white-space:pre-wrap;">💬 ' + e.commentaire.replace(/</g,'&lt;').replace(/>/g,'&gt;') + '</div>';
        }
        if (e.exos) {
            html += '<div style="font-size:0.82em;color:#666;background:#fff;border-radius:6px;padding:8px 10px;border:1px solid #eee;">' +
                    e.exos.replace(/</g,'&lt;').replace(/>/g,'&gt;') + '</div>';
        }
        // Bouton supprimer
        html += '<div style="text-align:right;margin-top:8px;">';
        html += '<button onclick="_wodSupprimerEntree(' + idx + ')" style="background:none;border:1px solid #e74c3c;color:#e74c3c;border-radius:6px;padding:4px 10px;font-size:0.78em;cursor:pointer;">🗑 Supprimer</button>';
        html += '</div>';
        html += '</div>';
    });

    container.innerHTML = html || '<div style="text-align:center;color:#999;padding:20px;">Aucune séance pour ce filtre.</div>';

}

function _wodSupprimerEntree(idx) {
    if (!window._wodData) return;
    var entry = window._wodData[idx];
    if (!entry) return;
    if (!confirm('Supprimer cette séance (' + (entry.nom || entry.nomCle) + ') ?')) return;
    var data = wodCarnetLoad();
    var nomCle = entry.nomCle;
    if (data[nomCle]) {
        data[nomCle] = data[nomCle].filter(function(e) {
            return !(e.date === entry.date && e.type === entry.type && e.nom === entry.nom);
        });
        if (data[nomCle].length === 0) delete data[nomCle];
        wodCarnetSave(data);
    }
    _wodOuvrirModal();
}



// ══════════════════════════════════════════════════════════════════════════════
// MON ACTIVITÉ — Tableau de bord global (toutes sources)
// ══════════════════════════════════════════════════════════════════════════════

// Couleurs et labels par type
var ACTIVITE_COLORS = {
    'MUSCU':          '#1a237e',
    'TABATA/HIIT':    '#c0392b',
    'AMRAP':          '#8e44ad',
    'EMOM':           '#2980b9',
    'FOR TIME':       '#e67e22',
    'INTERVALLES':    '#27ae60',
    'CARDIO EXTERNE': '#00897b'
};
var ACTIVITE_LABELS = {
    'MUSCU':'MUSCU','TABATA/HIIT':'TABATA','AMRAP':'AMRAP',
    'EMOM':'EMOM','FOR TIME':'FOR TIME','INTERVALLES':'INTERV.','CARDIO EXTERNE':'CARDIO'
};

// ── Collecte toutes les entrées de toutes les sources ────────────────────────
function getAllActiviteEntries() {
    var all = [];

    // 1. muscu_carnet  { date:"dd/mm/yyyy hh:mm", nom, duree:"MM:SS", resultats:[{nom,series:[{reps,poids}]}] }
    try {
        var muscu = JSON.parse(localStorage.getItem('muscu_carnet') || '{}');
        Object.keys(muscu).forEach(function(nom) {
            (muscu[nom] || []).forEach(function(e) {
                var sec = _parseDureeToSec(e.duree);
                // Calcul poids total soulevé
                var poidsTotal = 0;
                (e.resultats || []).forEach(function(exo) {
                    (exo.series || []).forEach(function(s) { poidsTotal += (s.reps || 0) * (s.poids || 0); });
                });
                all.push({
                    dateStr: e.date,
                    dateObj: _parseDateFr(e.date),
                    type: 'MUSCU',
                    nom: e.nom || nom,
                    duree_sec: sec,
                    poids_kg: poidsTotal,
                    distance_km: 0
                });
            });
        });
    } catch(err) {}

    // 2. wod_carnet  { date:"dd/mm/yyyy hh:mm", type, nom, duree/"duree_sec", distance_km }
    try {
        var wod = JSON.parse(localStorage.getItem('wod_carnet') || '{}');
        Object.keys(wod).forEach(function(nom) {
            (wod[nom] || []).forEach(function(e) {
                var sec = e.duree_sec || _parseDureeToSec(e.duree || e.temps || '');
                all.push({
                    dateStr: e.date,
                    dateObj: _parseDateFr(e.date),
                    type: e.type || 'CARDIO EXTERNE',
                    nom: e.nom || nom,
                    duree_sec: sec,
                    poids_kg: 0,
                    distance_km: e.distance_km || 0
                });
            });
        });
    } catch(err) {}

    // Trier par date décroissante
    all.sort(function(a, b) { return b.dateObj - a.dateObj; });
    return all;
}

function _parseDateFr(str) {
    if (!str) return new Date(0);
    var parts = str.split(' ');
    var dp = parts[0].split('/');
    var tp = parts[1] ? parts[1].split(':') : ['0','0'];
    if (dp.length < 3) return new Date(0);
    return new Date(parseInt(dp[2]), parseInt(dp[1])-1, parseInt(dp[0]), parseInt(tp[0])||0, parseInt(tp[1])||0);
}

function _parseDureeToSec(str) {
    if (!str) return 0;
    var parts = str.split(':').map(Number);
    if (parts.length === 3) {
        // Deux formats possibles :
        // HH:MM:SS standard (ex: "01:35:19" depuis saisie externe)
        // MM:SS:centièmes (ex: "47:34:90" depuis le chrono seances_perso)
        // Si parts[2] >= 60 ou parts[0] > 23 → forcément MM:SS:centièmes
        if (parts[2] >= 60 || parts[0] > 23) {
            return parts[0]*60 + parts[1]; // MM:SS, centièmes ignorés
        }
        return parts[0]*3600 + parts[1]*60 + parts[2]; // HH:MM:SS
    }
    if (parts.length === 2) return parts[0]*60 + parts[1];
    return 0;
}

function _secToHMS(sec) {
    sec = Math.round(sec);
    var h = Math.floor(sec/3600), m = Math.floor((sec%3600)/60), s = sec%60;
    if (h > 0) return h + 'h' + (m>0 ? _pad2(m) + 'min' : '');
    if (m > 0) return m + 'min' + (s>0 ? _pad2(s) + 's' : '');
    return s + 's';
}

// ── Ouvrir la modale Mon Activité ────────────────────────────────────────────
var _activiteMoisOffset = 0; // 0 = mois courant

function openMonActivite() {
    _activiteMoisOffset = 0;
    _renderMonActivite();
}

function _renderMonActivite() {
    var entries = getAllActiviteEntries();
    var now = new Date();
    var year  = now.getFullYear();
    var month = now.getMonth() + _activiteMoisOffset;
    // Normaliser si débordement
    var d = new Date(year, month, 1);
    year = d.getFullYear(); month = d.getMonth();

    document.getElementById('modal-title').textContent = 'Mon Activité';
    document.getElementById('modal-box').className = 'type-hybrid';
    document.getElementById('modal-badges').innerHTML =
        '<span class="modal-badge modal-badge-type">Suivi</span>' +
        '<span class="modal-badge modal-badge-mat">GLOBAL</span>';

    // ── Construire l'index par date (yyyy-mm-dd → [entries]) ─────────────────
    var byDate = {};
    entries.forEach(function(e) {
        if (!e.dateObj || e.dateObj.getTime() === 0) return;
        var key = e.dateObj.getFullYear() + '-' + _pad2(e.dateObj.getMonth()+1) + '-' + _pad2(e.dateObj.getDate());
        if (!byDate[key]) byDate[key] = [];
        byDate[key].push(e);
    });

    // ── Stats 7 derniers jours ───────────────────────────────────────────────
    var stats7 = _calcStats7(entries);

    // ── HTML ─────────────────────────────────────────────────────────────────
    var html = '';

    // Navigation mois
    var moisNoms = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];
    html += '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;">';
    html += '<button onclick="_activiteMoisOffset--;_renderMonActivite()" style="background:#f0f0f0;border:none;border-radius:8px;padding:6px 14px;font-size:1em;cursor:pointer;">‹</button>';
    html += '<span style="font-weight:800;font-size:1em;color:#1a237e;">' + moisNoms[month] + ' ' + year + '</span>';
    var isCurrentMonth = (year === now.getFullYear() && month === now.getMonth());
    html += '<button onclick="_activiteMoisOffset++;_renderMonActivite()" style="background:#f0f0f0;border:none;border-radius:8px;padding:6px 14px;font-size:1em;cursor:pointer;' + (isCurrentMonth ? 'opacity:0.3;pointer-events:none;' : '') + '">›</button>';
    html += '</div>';

    // Légende types
    html += '<div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:10px;">';
    Object.keys(ACTIVITE_COLORS).forEach(function(t) {
        html += '<span style="background:' + ACTIVITE_COLORS[t] + ';color:#fff;border-radius:4px;padding:2px 7px;font-size:0.68em;font-weight:700;">' + (ACTIVITE_LABELS[t]||t) + '</span>';
    });
    html += '</div>';

    // Calendrier
    html += _buildCalendrier(year, month, byDate, now);

    // Séparateur
    html += '<hr style="border:none;border-top:1px solid #eee;margin:18px 0;">';

    // Titre synthèse
    html += '<div style="font-weight:800;font-size:0.88em;text-transform:uppercase;letter-spacing:0.08em;color:#888;margin-bottom:12px;">📅 Synthèse — 7 derniers jours</div>';

    // Histogramme
    html += _buildHistogramme(stats7);

    // Stats badges
    html += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:14px;">';
    html += _statBox('⏱', 'Temps total', _secToHMS(stats7.totalSec), '#e8eaf6', '#1a237e');
    html += _statBox('🏋', 'Séances', stats7.nbSeances + ' séance' + (stats7.nbSeances > 1 ? 's' : ''), '#fce4ec', '#c62828');
    html += _statBox('🏋', 'Poids soulevé', stats7.poidsTotal > 0 ? stats7.poidsTotal.toLocaleString('fr-FR') + ' kg' : '—', '#fff3e0', '#e65100');
    html += _statBox('📍', 'Distance', stats7.distanceTotal > 0 ? stats7.distanceTotal.toFixed(1) + ' km' : '—', '#e0f2f1', '#00695c');
    html += '</div>';

    document.getElementById('modal-body').innerHTML = html;
    // Attacher les listeners sur les cellules cliquables du calendrier
    document.querySelectorAll('[data-cal]').forEach(function(el) {
        el.addEventListener('click', function() {
            _calOverlay(el.getAttribute('data-cal'));
        });
    });
    document.getElementById('modal-overlay').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function _statBox(icon, label, val, bg, color) {
    return '<div style="background:' + bg + ';border-radius:10px;padding:12px 14px;">' +
           '<div style="font-size:0.72em;color:' + color + ';font-weight:700;text-transform:uppercase;letter-spacing:0.06em;margin-bottom:4px;">' + label + '</div>' +
           '<div style="font-size:1.15em;font-weight:900;color:' + color + ';">' + val + '</div>' +
           '</div>';
}


// Helper : rendu des puces d'activité pour un jour du calendrier
// Helper : filtrer les entrées par clé de date yyyy-mm-dd
function _entriesForKey(entries, key) {
    return entries.filter(function(e) {
        var dk = e.dateObj.getFullYear() + '-' + _pad2(e.dateObj.getMonth()+1) + '-' + _pad2(e.dateObj.getDate());
        return dk === key;
    });
}

// Helper : encoder les données d'un jour pour l'overlay (évite les problèmes de quotes)
function _encodeDayData(entries) {
    return encodeURIComponent(JSON.stringify(entries.map(function(e) {
        return { type: e.type, nom: e.nom, duree_sec: e.duree_sec || 0, duree: e.duree || e.temps || '', date: e.dateStr || '' };
    })));
}

// Overlay au clic sur une cellule du calendrier
function _calOverlay(encoded) {
    var entries;
    try { entries = JSON.parse(decodeURIComponent(encoded)); } catch(er) { return; }
    if (!entries || !entries.length) return;

    // Supprimer un éventuel overlay précédent
    var old = document.getElementById('cal-overlay');
    if (old) old.parentNode.removeChild(old);

    var ov = document.createElement('div');
    ov.id = 'cal-overlay';
    ov.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.55);z-index:9999;display:flex;align-items:center;justify-content:center;';
    ov.onclick = function(ev) { if (ev.target === ov) _calClose(); };

    var box = document.createElement('div');
    box.style.cssText = 'background:#fff;border-radius:14px;padding:20px;max-width:320px;width:90%;max-height:70vh;overflow-y:auto;box-shadow:0 8px 32px rgba(0,0,0,0.25);';

    var html = '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;">';
    html += '<div style="font-weight:800;font-size:0.95em;color:#1a237e;">📅 ' + (entries[0].date ? entries[0].date.split(' ')[0] : '') + '</div>';
    html += '<button onclick="_calClose()" style="background:none;border:none;font-size:1.2em;cursor:pointer;color:#888;">✕</button>';
    html += '</div>';

    entries.forEach(function(e) {
        var col = ACTIVITE_COLORS[e.type] || '#888';
        var lbl = ACTIVITE_LABELS[e.type] || e.type;
        var dureeAff = e.duree || (e.duree_sec > 0 ? _secToHMS(e.duree_sec) : '');
        html += '<div style="border-left:4px solid ' + col + ';border-radius:6px;background:#f8f8f8;padding:10px 12px;margin-bottom:10px;">';
        html += '<div style="font-size:0.7em;font-weight:800;text-transform:uppercase;letter-spacing:0.07em;color:' + col + ';margin-bottom:3px;">' + lbl + '</div>';
        html += '<div style="font-weight:700;font-size:0.9em;color:#111;margin-bottom:4px;">' + e.nom + '</div>';
        if (dureeAff) html += '<div style="font-size:0.78em;color:#555;">⏱ ' + dureeAff + '</div>';
        html += '</div>';
    });

    box.innerHTML = html;
    ov.appendChild(box);
    document.body.appendChild(ov);
}

function _calClose() {
    var o = document.getElementById('cal-overlay');
    if (o) o.parentNode.removeChild(o);
}

function _buildCalendrier(year, month, byDate, now) {
    var firstDay = new Date(year, month, 1).getDay();
    firstDay = (firstDay + 6) % 7; // lundi = 0
    var daysInMonth = new Date(year, month + 1, 0).getDate();
    var todayKey = now.getFullYear() + '-' + _pad2(now.getMonth()+1) + '-' + _pad2(now.getDate());

    var jours = ['L','M','M','J','V','S','D'];

    // Grille : gap fixe, hauteur de cellule via aspect-ratio
    var html = '<div style="display:grid;grid-template-columns:repeat(7,1fr);gap:3px;">';

    // En-têtes
    jours.forEach(function(j) {
        html += '<div style="text-align:center;font-size:0.68em;font-weight:700;color:#aaa;padding:3px 0;">' + j + '</div>';
    });

    // Cases vides
    for (var i = 0; i < firstDay; i++) {
        html += '<div style="aspect-ratio:1/1;"></div>';
    }

    // Jours du mois
    for (var day = 1; day <= daysInMonth; day++) {
        var key = year + '-' + _pad2(month+1) + '-' + _pad2(day);
        var dayEntries = byDate[key] || [];
        var isToday    = (key === todayKey);
        var hasActivity = dayEntries.length > 0;

        var bgDay     = isToday ? '#e8f5e9' : (hasActivity ? '#f0f4ff' : '#fafafa');
        var borderDay = isToday ? '2px solid #27ae60' : (hasActivity ? '1px solid #c5cae9' : '1px solid #eee');
        var cursor    = hasActivity ? 'pointer' : 'default';

        // Cellule à taille fixe via aspect-ratio 1:1
        var cellStyle = 'aspect-ratio:1/1;border-radius:6px;background:' + bgDay + ';border:' + borderDay + ';' +
                        'cursor:' + cursor + ';overflow:hidden;display:flex;flex-direction:column;' +
                        'align-items:stretch;padding:2px;box-sizing:border-box;';

        if (hasActivity) {
            var encoded = _encodeDayData(dayEntries);
            html += '<div style="' + cellStyle + '" data-cal="' + encoded.replace(/"/g, '&quot;') + '">';
        } else {
            html += '<div style="' + cellStyle + '">';
        }

function renderDayEntry(e) {
    var col = ACTIVITE_COLORS[e.type] || '#888';
    var lbl = ACTIVITE_LABELS[e.type] || e.type;
    return '<div style="background:' + col + ';color:#fff;border-radius:2px;padding:1px 2px;' +
           'font-size:0.52em;font-weight:700;line-height:1.3;overflow:hidden;white-space:nowrap;' +
           'text-overflow:ellipsis;margin-bottom:1px;flex-shrink:0;" title="' + lbl + ' — ' + e.nom.replace(/"/g,'&quot;') + '">' +
           lbl + '</div>';
}

        // Numéro du jour
        html += '<div style="text-align:center;font-size:0.65em;font-weight:' + (isToday ? '900' : '600') + ';' +
                'color:' + (isToday ? '#27ae60' : '#666') + ';line-height:1.4;flex-shrink:0;">' + day + '</div>';

        // Puces : une ligne par séance, nom tronqué, hauteur fixe
        html += dayEntries.map(renderDayEntry).join('');

        html += '</div>';
    }

    html += '</div>';
    return html;
}

function _calcStats7(entries) {
    var cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - 6);
    cutoff.setHours(0, 0, 0, 0);

    var recent = entries.filter(function(e) { return e.dateObj >= cutoff; });

    var totalSec = 0, poidsTotal = 0, distanceTotal = 0;
    recent.forEach(function(e) {
        totalSec     += e.duree_sec || 0;
        poidsTotal   += e.poids_kg  || 0;
        distanceTotal += e.distance_km || 0;
    });

    // Par jour (7 derniers jours, du plus ancien au plus récent)
    var days = [];
    for (var i = 6; i >= 0; i--) {
        var d = new Date();
        d.setDate(d.getDate() - i);
        d.setHours(0, 0, 0, 0);
        var key = d.getFullYear() + '-' + _pad2(d.getMonth()+1) + '-' + _pad2(d.getDate());
        var dayEntries = _entriesForKey(entries, key);
        var secDay = dayEntries.reduce(function(acc, e) { return acc + (e.duree_sec || 0); }, 0);
        var jNoms = ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'];
        days.push({ label: jNoms[d.getDay()], sec: secDay, nb: dayEntries.length, date: d });
    }

    return { totalSec: totalSec, nbSeances: recent.length, poidsTotal: Math.round(poidsTotal), distanceTotal: distanceTotal, days: days };
}

function _buildHistogramme(stats) {
    var days = stats.days;
    var maxSec = Math.max.apply(null, days.map(function(d){ return d.sec; }));
    if (maxSec === 0) {
        return '<div style="text-align:center;color:#bbb;font-size:0.85em;padding:16px 0;">Aucune activité cette semaine.</div>';
    }
    var barMaxH = 60;

    var html = '<div style="display:flex;align-items:flex-end;justify-content:space-around;height:' + (barMaxH+32) + 'px;gap:4px;padding:0 4px;">';
    days.forEach(function(d) {
        var pct = maxSec > 0 ? d.sec / maxSec : 0;
        var h = Math.max(pct * barMaxH, d.sec > 0 ? 4 : 0);
        var isToday = (d.date.toDateString() === new Date().toDateString());
        var col = d.sec > 0 ? (isToday ? '#27ae60' : '#1a237e') : '#e0e0e0';
        var label = d.sec > 0 ? _secToHMS(d.sec) : '';

        html += '<div style="display:flex;flex-direction:column;align-items:center;flex:1;">';
        if (label) html += '<div style="font-size:0.58em;color:#666;margin-bottom:2px;white-space:nowrap;">' + label + '</div>';
        else html += '<div style="font-size:0.58em;margin-bottom:2px;">&nbsp;</div>';
        html += '<div style="width:100%;height:' + h + 'px;background:' + col + ';border-radius:4px 4px 0 0;min-height:' + (d.sec>0?4:0) + 'px;"></div>';
        html += '<div style="font-size:0.68em;font-weight:' + (isToday?'900':'600') + ';color:' + (isToday?'#27ae60':'#888') + ';margin-top:3px;">' + d.label + '</div>';
        if (d.nb > 0) html += '<div style="font-size:0.6em;color:#aaa;">' + d.nb + 'x</div>';
        html += '</div>';
    });
    html += '</div>';
    return html;
}

// ══════════════════════════════════════════════════════════════════════════════
// SAUVEGARDE GLOBALE — Export/Import JSON (muscu_carnet + wod_carnet)
// ══════════════════════════════════════════════════════════════════════════════

function exportToutJSON() {
    var muscu = {};
    var wod   = {};
    try { muscu = JSON.parse(localStorage.getItem('muscu_carnet') || '{}'); } catch(e) {}
    try { wod   = JSON.parse(localStorage.getItem('wod_carnet')   || '{}'); } catch(e) {}

    var totalMuscu = Object.keys(muscu).reduce(function(acc, k) { return acc + muscu[k].length; }, 0);
    var totalWod   = Object.keys(wod).reduce(function(acc, k)   { return acc + wod[k].length;   }, 0);

    if (!totalMuscu && !totalWod) {
        alert('Aucune donnée à exporter.');
        return;
    }

    var export_data = {
        _info: {
            version: 1,
            date_export: new Date().toLocaleDateString('fr-FR'),
            total_muscu: totalMuscu,
            total_wod: totalWod
        },
        muscu_carnet: muscu,
        wod_carnet:   wod
    };

    var blob = new Blob([JSON.stringify(export_data, null, 2)], { type: 'application/json' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    var d = new Date();
    a.download = 'THT_sauvegarde_' + d.getFullYear() + ('0'+(d.getMonth()+1)).slice(-2) + ('0'+d.getDate()).slice(-2) + '.json';
    a.click();
    URL.revokeObjectURL(a.href);
}

function importToutJSON() {
    var input = document.getElementById('tout-import-input');
    if (!input) return;
    input.value = '';
    input.onchange = function(e) {
        var file = e.target.files[0];
        if (!file) return;
        var reader = new FileReader();
        reader.onload = function(ev) {
            try {
                var imp = JSON.parse(ev.target.result);
                if (typeof imp !== 'object' || Array.isArray(imp)) throw new Error('Format invalide');

                var nbMuscu = 0, nbWod = 0;

                // Importer muscu_carnet
                if (imp.muscu_carnet && typeof imp.muscu_carnet === 'object') {
                    var existMuscu = {};
                    try { existMuscu = JSON.parse(localStorage.getItem('muscu_carnet') || '{}'); } catch(er) {}
                    Object.keys(imp.muscu_carnet).forEach(function(nom) {
                        if (!Array.isArray(imp.muscu_carnet[nom])) return;
                        if (!existMuscu[nom]) existMuscu[nom] = [];
                        existMuscu[nom] = imp.muscu_carnet[nom].concat(existMuscu[nom]).slice(0, 999);
                        nbMuscu += imp.muscu_carnet[nom].length;
                    });
                    localStorage.setItem('muscu_carnet', JSON.stringify(existMuscu));
                }

                // Importer wod_carnet
                if (imp.wod_carnet && typeof imp.wod_carnet === 'object') {
                    var existWod = {};
                    try { existWod = JSON.parse(localStorage.getItem('wod_carnet') || '{}'); } catch(er) {}
                    Object.keys(imp.wod_carnet).forEach(function(nom) {
                        if (!Array.isArray(imp.wod_carnet[nom])) return;
                        if (!existWod[nom]) existWod[nom] = [];
                        existWod[nom] = imp.wod_carnet[nom].concat(existWod[nom]).slice(0, 999);
                        nbWod += imp.wod_carnet[nom].length;
                    });
                    localStorage.setItem('wod_carnet', JSON.stringify(existWod));
                }

                // Rétrocompat : ancien format sans envelope (juste muscu_carnet à plat)
                if (!imp.muscu_carnet && !imp.wod_carnet) {
                    var existMuscu2 = {};
                    try { existMuscu2 = JSON.parse(localStorage.getItem('muscu_carnet') || '{}'); } catch(er) {}
                    Object.keys(imp).forEach(function(nom) {
                        if (nom === '_info' || !Array.isArray(imp[nom])) return;
                        if (!existMuscu2[nom]) existMuscu2[nom] = [];
                        existMuscu2[nom] = imp[nom].concat(existMuscu2[nom]).slice(0, 999);
                        nbMuscu++;
                    });
                    localStorage.setItem('muscu_carnet', JSON.stringify(existMuscu2));
                }

                var msg = '✅ Importation réussie !\n';
                if (nbMuscu) msg += '• ' + nbMuscu + ' séance(s) muscu\n';
                if (nbWod)   msg += '• ' + nbWod   + ' séance(s) WOD/Cardio\n';
                if (!nbMuscu && !nbWod) msg = '⚠️ Aucune donnée reconnue dans ce fichier.';
                alert(msg);

                // Rafraîchir la carte si on est sur infos.html
                if (typeof displayConseils === 'function') displayConseils();

            } catch(err) {
                alert('❌ Fichier JSON invalide : ' + err.message);
            }
        };
        reader.readAsText(file);
    };
    input.click();
}

function effacerToutJSON() {
    if (!confirm('⚠️ Supprimer TOUTES les séances enregistrées sur cet appareil ?\n\nCarnet MUSCU + Carnet WOD & Cardio seront définitivement vidés.\nCette action est irréversible.')) return;
    localStorage.removeItem('muscu_carnet');
    localStorage.removeItem('wod_carnet');
    alert('✅ Toutes les données ont été effacées.');
    if (typeof displayConseils === 'function') displayConseils();
}

/* ============================================================
   ESTIMATEUR DE CHARGES — pour débutants (MUSCU)
   À coller à la toute fin de conseils.js
   ============================================================ */

/* ---------- 1. TABLE DE RÉFÉRENCE DES EXERCICES ----------
   Chaque exercice cible est rattaché à un test de référence
   (push / pull / legs) et un ratio par rapport au 1RM estimé
   de ce test, calé pour viser une charge confortable en 8-12 reps
   (environ 65-70% du 1RM estimé), pas une charge maximale.
   Ratios basés sur les standards de force relative usuels
   (T-Nation 4:3:2:1, ratios bench/incline/DB, Fitness Volt). */

const CHARGES_REF_EXOS = {
    push: [
        { nom: "Développé couché",                         ratio: 0.70 },
        { nom: "Développé couché (Bench press)",            ratio: 0.70 },
        { nom: "Développé couché prise serrée (Close-grip bench press)", ratio: 0.65 },
        { nom: "Développé incliné haltères (Incline dumbbell press)",    ratio: 0.50 },
        { nom: "Développé militaire (Overhead press)",      ratio: 0.40 },
        { nom: "Développé militaire haltères (Dumbbell overhead press)", ratio: 0.38 },
        { nom: "Chest fly avec élastique",                  ratio: 0.30 },
        { nom: "Écarté haltères couché (Dumbbell fly)",      ratio: 0.30 },
        { nom: "Dips",                                      ratio: 0.55 },
        { nom: "Extension triceps haltère (Triceps overhead extension)", ratio: 0.20 },
        { nom: "Extension triceps poulie haute",            ratio: 0.25 },
        { nom: "Extension triceps à la poulie haute (Triceps pushdown)", ratio: 0.25 },
        { nom: "Barre au front",                            ratio: 0.25 },
        { nom: "Élévation frontale haltères (Front raise)", ratio: 0.18 },
        { nom: "Élévation latérale avec haltères",          ratio: 0.18 },
        { nom: "Élévation latérale haltères (Lateral raise)", ratio: 0.18 },
        { nom: "Chest Press Jammer Arm",                    ratio: 0.55 },
        { nom: "Landmine Press à un bras",                  ratio: 0.35 },
        { nom: "Landmine press à un bras",                  ratio: 0.35 },
        { nom: "Pompe",                                     ratio: null } // référence elle-même
    ],
    pull: [
        { nom: "Rowing barre (Barbell row)",                ratio: 0.85 },
        { nom: "Rowing haltère unilatéral (Single-arm dumbbell row)", ratio: 0.40 },
        { nom: "Rowing buste penché jammer arms",            ratio: 0.45 },
        { nom: "Rowing horizontal poulie basse",             ratio: 0.75 },
        { nom: "Tirage vertical poulie haute (Lat pulldown)", ratio: 0.85 },
        { nom: "Tirage poulie haute prise serrée (Close-grip lat pulldown)", ratio: 0.80 },
        { nom: "Curl barre (Barbell curl)",                  ratio: 0.35 },
        { nom: "Curl haltères (Dumbbell curl)",              ratio: 0.16 },
        { nom: "Curl incliné",                               ratio: 0.14 },
        { nom: "Curl incliné haltères (Incline dumbbell curl)", ratio: 0.14 },
        { nom: "Curl marteau (Hammer curl)",                 ratio: 0.16 },
        { nom: "Curl à la barre EZ",                         ratio: 0.35 },
        { nom: "Curl biceps à la poulie basse",              ratio: 0.35 },
        { nom: "Haussement d'épaules barre (Barbell shrug)", ratio: 0.90 },
        { nom: "Shrug jammer arms",                          ratio: 0.60 },
        { nom: "Oiseau avec haltères",                       ratio: 0.12 },
        { nom: "Oiseau haltères (Reverse fly)",               ratio: 0.12 },
        { nom: "Oiseau à la poulie basse (Cable reverse fly)", ratio: 0.20 },
        { nom: "Traction - Traction lestée",                 ratio: null },
        { nom: "Tractions (Pull-up)",                        ratio: null }
    ],
    legs: [
        { nom: "Squat barre (Back squat)",                   ratio: 0.65 },
        { nom: "Squat avant (Front squat)",                  ratio: 0.55 },
        { nom: "Squat gobelet (Goblet squat)",                ratio: 0.45 },
        { nom: "Goblet squat haltère talons surélevés",       ratio: 0.40 },
        { nom: "Landmine squat",                              ratio: 0.40 },
        { nom: "Fentes avant haltères (Dumbbell lunge)",      ratio: 0.25 },
        { nom: "Fentes arrière haltères (Reverse dumbbell lunge)", ratio: 0.25 },
        { nom: "Fentes marchées haltères (Walking lunge)",    ratio: 0.22 },
        { nom: "Fentes jammer arms (poids sur les 2 jammers arms)", ratio: 0.45 },
        { nom: "Soulevé de terre (Deadlift)",                 ratio: 0.80 },
        { nom: "Soulevé de terre jambes tendues (Romanian deadlift)", ratio: 0.65 },
        { nom: "Soulevé de terre à la barre jambes tendues",  ratio: 0.65 },
        { nom: "Deadlift jambes tendues à l'élastique (focus lombaire)", ratio: 0.30 },
        { nom: "Extension de jambes (Leg extension)",         ratio: 0.45 },
        { nom: "Flexion de jambes (Leg curl)",                ratio: 0.35 },
        { nom: "Poussée de hanches (Hip thrust)",             ratio: 0.75 },
        { nom: "Relevé de bassin (Hip raise)",                ratio: null },
        { nom: "Enroulement de bassin (Hip thrust / crunch bas)", ratio: null },
        { nom: "Abduction de hanche (Hip abduction)",         ratio: 0.20 },
        { nom: "Élévation des mollets (Calf raise)",          ratio: 0.55 },
        { nom: "Élévation des mollets debout (Standing calf raise)", ratio: 0.55 },
        { nom: "Extension Mollets debout avec Landmine",      ratio: 0.45 },
        { nom: "Squat", ratio: null } // référence elle-même
    ]
};

/* ---------- 2. INJECTION DE LA CARTE DANS infos.html ---------- */
/* On hook displayConseils() en y ajoutant un appel supplémentaire */
(function() {
    var originalDisplayConseils = displayConseils;
    displayConseils = function() {
        originalDisplayConseils();

        var savedCharges = {};
        try { savedCharges = JSON.parse(localStorage.getItem('charges_estimees')) || {}; } catch(e) {}
        var hasCharges = Object.keys(savedCharges).length > 0;

        var saveSectionRef = document.getElementById('section-sauvegarde');
        var chargesSection = document.getElementById('section-charges-estimees');
        if (!chargesSection) {
            chargesSection = document.createElement('div');
            chargesSection.id = 'section-charges-estimees';
            chargesSection.style.marginTop = '24px';
            var sectionConseils = document.getElementById('section-conseils');
            // On l'insère juste après la grille de conseils, avant le carnet
            sectionConseils.parentNode.insertBefore(chargesSection, sectionConseils.nextSibling);
        }
        chargesSection.innerHTML =
            '<div class="card-grid">' +
            '<div class="card card-muscu">' +
            '<div>' +
            '<span class="tag tag-body">Musculation</span>' +
            '<span class="tag tag-material">DÉBUTANT</span>' +
            '<h3>🧮 Estimateur de charges</h3>' +
            '<div class="card-desc">' + (hasCharges ? 'Charges estimées disponibles pour pré-remplir vos séances MUSCU.' : "Vous débutez en musculation ? Estimez vos charges de départ en 3 tests rapides (5-10 min).") + '</div>' +
            '</div>' +
            '<div class="card-buttons">' +
            '<button onclick="openEstimateurCharges()" class="btn-full">' + (hasCharges ? '🔄 Refaire le test' : '🧮 Lancer le test') + '</button>' +
            '</div>' +
            '</div>' +
            '</div>';
    };
})();

/* ---------- 3. MODALE — 3 TESTS + RÉSULTATS ---------- */

function openEstimateurCharges() {
    document.getElementById('modal-title').textContent = 'Estimateur de charges';
    document.getElementById('modal-box').className = 'type-muscu';
    document.getElementById('modal-badges').innerHTML =
        '<span class="modal-badge modal-badge-type">Musculation</span>' +
        '<span class="modal-badge modal-badge-mat">DÉBUTANT</span>';

    var html = '';
    html += '<div style="margin-bottom:16px;">';
    html += '<p style="font-size:0.92em;color:#888;line-height:1.5;">3 tests rapides (5-10 min au total) pour estimer vos charges de départ sur les principaux mouvements de musculation. Faites une vraie série à l\'échec (ou proche) pour chaque test, avec une bonne technique.</p>';
    html += '</div>';

    // Infos perso
    html += '<div style="background:#f8f8f8;border-radius:10px;padding:14px;margin-bottom:16px;">';
    html += '<label style="font-size:0.8em;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#888;display:block;margin-bottom:6px;">Poids de corps (kg)</label>';
    html += '<input type="number" id="ec-poids-corps" min="30" max="200" step="0.5" placeholder="ex: 70" style="width:100%;padding:10px;border-radius:8px;border:1px solid #ddd;font-size:0.95em;margin-bottom:12px;">';
    html += '<label style="font-size:0.8em;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#888;display:block;margin-bottom:6px;">Sexe</label>';
    html += '<select id="ec-sexe" style="width:100%;padding:10px;border-radius:8px;border:1px solid #ddd;font-size:0.95em;">';
    html += '<option value="H">Homme</option><option value="F">Femme</option>';
    html += '</select>';
    html += '</div>';

    // Test 1 : Poussée
    html += '<div style="border:1px solid #eee;border-radius:10px;padding:14px;margin-bottom:14px;">';
    html += '<div style="font-weight:800;margin-bottom:8px;">1️⃣ Poussée (Pectoraux / Épaules / Triceps)</div>';
    html += '<label style="font-size:0.85em;display:block;margin-bottom:6px;">Avez-vous des haltères disponibles ?</label>';
    html += '<select id="ec-push-materiel" onchange="ecToggleMateriel(\'push\')" style="width:100%;padding:8px;border-radius:8px;border:1px solid #ddd;margin-bottom:10px;">';
    html += '<option value="non">Non — test au poids de corps (pompes)</option>';
    html += '<option value="oui">Oui — test développé haltères léger</option>';
    html += '</select>';
    html += '<div id="ec-push-nomateriel">';
    html += '<label style="font-size:0.85em;display:block;margin-bottom:6px;">Nombre de pompes complètes réalisées d\'affilée (max)</label>';
    html += '<input type="number" id="ec-push-reps" min="0" max="80" placeholder="ex: 12" style="width:100%;padding:8px;border-radius:8px;border:1px solid #ddd;">';
    html += '</div>';
    html += '<div id="ec-push-materiel-zone" style="display:none;">';
    html += '<label style="font-size:0.85em;display:block;margin-bottom:6px;">Poids d\'un haltère utilisé (kg)</label>';
    html += '<input type="number" id="ec-push-poids" min="1" max="60" step="0.5" placeholder="ex: 8" style="width:100%;padding:8px;border-radius:8px;border:1px solid #ddd;margin-bottom:8px;">';
    html += '<label style="font-size:0.85em;display:block;margin-bottom:6px;">Nombre de reps réalisées avec ce poids (développé couché haltères)</label>';
    html += '<input type="number" id="ec-push-poids-reps" min="1" max="30" placeholder="ex: 10" style="width:100%;padding:8px;border-radius:8px;border:1px solid #ddd;">';
    html += '</div>';
    html += '</div>';

    // Test 2 : Tirage
    html += '<div style="border:1px solid #eee;border-radius:10px;padding:14px;margin-bottom:14px;">';
    html += '<div style="font-weight:800;margin-bottom:8px;">2️⃣ Tirage (Dos / Biceps)</div>';
    html += '<label style="font-size:0.85em;display:block;margin-bottom:6px;">Avez-vous accès à une barre de traction ou élastique/poulie ?</label>';
    html += '<select id="ec-pull-materiel" onchange="ecToggleMateriel(\'pull\')" style="width:100%;padding:8px;border-radius:8px;border:1px solid #ddd;margin-bottom:10px;">';
    html += '<option value="non">Non — pas de test possible, estimation prudente</option>';
    html += '<option value="oui">Oui — test tractions (ou rowing élastique/poulie)</option>';
    html += '</select>';
    html += '<div id="ec-pull-materiel-zone" style="display:none;">';
    html += '<label style="font-size:0.85em;display:block;margin-bottom:6px;">Type de test</label>';
    html += '<select id="ec-pull-type" onchange="ecTogglePullType()" style="width:100%;padding:8px;border-radius:8px;border:1px solid #ddd;margin-bottom:10px;">';
    html += '<option value="tractions">Tractions complètes</option>';
    html += '<option value="rowing">Rowing élastique/poulie (poids + reps)</option>';
    html += '</select>';
    html += '<div id="ec-pull-tractions-zone">';
    html += '<label style="font-size:0.85em;display:block;margin-bottom:6px;">Nombre de tractions complètes réalisées (max)</label>';
    html += '<input type="number" id="ec-pull-reps" min="0" max="40" placeholder="ex: 5" style="width:100%;padding:8px;border-radius:8px;border:1px solid #ddd;">';
    html += '</div>';
    html += '<div id="ec-pull-rowing-zone" style="display:none;">';
    html += '<label style="font-size:0.85em;display:block;margin-bottom:6px;">Poids ou résistance utilisée (kg)</label>';
    html += '<input type="number" id="ec-pull-poids" min="1" max="100" step="0.5" placeholder="ex: 20" style="width:100%;padding:8px;border-radius:8px;border:1px solid #ddd;margin-bottom:8px;">';
    html += '<label style="font-size:0.85em;display:block;margin-bottom:6px;">Nombre de reps réalisées avec ce poids</label>';
    html += '<input type="number" id="ec-pull-poids-reps" min="1" max="30" placeholder="ex: 12" style="width:100%;padding:8px;border-radius:8px;border:1px solid #ddd;">';
    html += '</div>';
    html += '</div>';
    html += '</div>';

    // Test 3 : Jambes
    html += '<div style="border:1px solid #eee;border-radius:10px;padding:14px;margin-bottom:16px;">';
    html += '<div style="font-weight:800;margin-bottom:8px;">3️⃣ Jambes (Quadriceps / Fessiers)</div>';
    html += '<label style="font-size:0.85em;display:block;margin-bottom:6px;">Avez-vous un haltère/kettlebell disponible ?</label>';
    html += '<select id="ec-legs-materiel" onchange="ecToggleMateriel(\'legs\')" style="width:100%;padding:8px;border-radius:8px;border:1px solid #ddd;margin-bottom:10px;">';
    html += '<option value="non">Non — test au poids de corps (squats)</option>';
    html += '<option value="oui">Oui — test goblet squat avec charge</option>';
    html += '</select>';
    html += '<div id="ec-legs-nomateriel">';
    html += '<label style="font-size:0.85em;display:block;margin-bottom:6px;">Nombre de squats complets réalisés d\'affilée en 45 sec</label>';
    html += '<input type="number" id="ec-legs-reps" min="0" max="80" placeholder="ex: 25" style="width:100%;padding:8px;border-radius:8px;border:1px solid #ddd;">';
    html += '</div>';
    html += '<div id="ec-legs-materiel-zone" style="display:none;">';
    html += '<label style="font-size:0.85em;display:block;margin-bottom:6px;">Poids utilisé en goblet squat (kg)</label>';
    html += '<input type="number" id="ec-legs-poids" min="1" max="60" step="0.5" placeholder="ex: 16" style="width:100%;padding:8px;border-radius:8px;border:1px solid #ddd;margin-bottom:8px;">';
    html += '<label style="font-size:0.85em;display:block;margin-bottom:6px;">Nombre de reps réalisées avec ce poids</label>';
    html += '<input type="number" id="ec-legs-poids-reps" min="1" max="30" placeholder="ex: 12" style="width:100%;padding:8px;border-radius:8px;border:1px solid #ddd;">';
    html += '</div>';
    html += '</div>';

    html += '<button onclick="ecCalculerCharges()" class="btn-full" style="margin-bottom:10px;">📊 Calculer mes charges</button>';
    html += '<div id="ec-resultats"></div>';

    document.getElementById('modal-body').innerHTML = html;
    document.getElementById('modal-overlay').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function ecToggleMateriel(zone) {
    var materiel = document.getElementById('ec-' + zone + '-materiel').value;
    if (zone === 'pull') {
        document.getElementById('ec-pull-materiel-zone').style.display = (materiel === 'oui') ? 'block' : 'none';
    } else {
        document.getElementById('ec-' + zone + '-nomateriel').style.display = (materiel === 'non') ? 'block' : 'none';
        document.getElementById('ec-' + zone + '-materiel-zone').style.display = (materiel === 'oui') ? 'block' : 'none';
    }
}

function ecTogglePullType() {
    var type = document.getElementById('ec-pull-type').value;
    document.getElementById('ec-pull-tractions-zone').style.display = (type === 'tractions') ? 'block' : 'none';
    document.getElementById('ec-pull-rowing-zone').style.display = (type === 'rowing') ? 'block' : 'none';
}

/* La formule Epley standard (1RM = poids × (1 + reps/30)) n'est fiable
   que jusqu'à environ 10-12 reps : au-delà, elle surestime fortement
   car elle ignore le basculement vers l'endurance musculaire.
   On plafonne donc l'effet des reps au-delà de 12 : chaque rep
   supplémentaire ne compte plus que pour 20% de son poids normal. */
function ecRepsAjustees(reps) {
    if (reps <= 12) return reps;
    return 12 + (reps - 12) * 0.2;
}

function ecEpley(poids, reps) {
    var repsAjustees = ecRepsAjustees(reps);
    return poids * (1 + repsAjustees / 30);
}

function ecCalculerCharges() {
    var poidsCorps = parseFloat(document.getElementById('ec-poids-corps').value);
    var sexe = document.getElementById('ec-sexe').value;

    if (!poidsCorps || poidsCorps < 30) {
        document.getElementById('ec-resultats').innerHTML = '<div style="color:#e74c3c;padding:10px;text-align:center;">⚠️ Merci d\'indiquer votre poids de corps.</div>';
        return;
    }

    var coefSexe = (sexe === 'F') ? 0.65 : 1.0; // ajustement global femme/homme sur la force relative haut du corps surtout

    var resultats = {};

    // --- TEST PUSH ---
    var push1RM = null;
    var pushMateriel = document.getElementById('ec-push-materiel').value;
    if (pushMateriel === 'oui') {
        var pPoids = parseFloat(document.getElementById('ec-push-poids').value) || 0;
        var pReps = parseFloat(document.getElementById('ec-push-poids-reps').value) || 0;
        if (pPoids > 0 && pReps > 0) {
            // 2 haltères, donc poids total = pPoids * 2
            push1RM = ecEpley(pPoids * 2, pReps);
        }
    } else {
        var pushReps = parseFloat(document.getElementById('ec-push-reps').value) || 0;
        if (pushReps > 0) {
            var chargeEffectivePompe = poidsCorps * 0.65; // ~65% du poids de corps en pompe
            push1RM = ecEpley(chargeEffectivePompe, pushReps);
        }
    }

    // --- TEST PULL ---
    var pull1RM = null;
    var pullMateriel = document.getElementById('ec-pull-materiel').value;
    if (pullMateriel === 'oui') {
        var pullType = document.getElementById('ec-pull-type').value;
        if (pullType === 'tractions') {
            var pullReps = parseFloat(document.getElementById('ec-pull-reps').value) || 0;
            if (pullReps > 0) {
                var chargeEffectiveTraction = poidsCorps * 0.9; // quasi tout le poids de corps
                pull1RM = ecEpley(chargeEffectiveTraction, pullReps);
            }
        } else {
            var rPoids = parseFloat(document.getElementById('ec-pull-poids').value) || 0;
            var rReps = parseFloat(document.getElementById('ec-pull-poids-reps').value) || 0;
            if (rPoids > 0 && rReps > 0) {
                pull1RM = ecEpley(rPoids, rReps);
            }
        }
    }
    // Si pas de matériel, on estime prudemment le tirage à partir du push (ratio dos/poitrine ~1.1)
    if (pull1RM === null && push1RM !== null) {
        pull1RM = push1RM * 1.1;
    }

    // --- TEST LEGS ---
    var legs1RM = null;
    var legsMateriel = document.getElementById('ec-legs-materiel').value;
    if (legsMateriel === 'oui') {
        var lPoids = parseFloat(document.getElementById('ec-legs-poids').value) || 0;
        var lReps = parseFloat(document.getElementById('ec-legs-poids-reps').value) || 0;
        if (lPoids > 0 && lReps > 0) {
            legs1RM = ecEpley(lPoids, lReps);
        }
    } else {
        var legsReps = parseFloat(document.getElementById('ec-legs-reps').value) || 0;
        if (legsReps > 0) {
            // squat poids de corps en 45 sec = test d'endurance, conversion approximative en équivalent reps strict (/1.5)
            var repsEquivalent = legsReps / 1.5;
            var chargeEffectiveSquat = poidsCorps * 1.0; // tout le poids de corps en squat
            legs1RM = ecEpley(chargeEffectiveSquat, repsEquivalent);
        }
    }

    if (!push1RM && !pull1RM && !legs1RM) {
        document.getElementById('ec-resultats').innerHTML = '<div style="color:#e74c3c;padding:10px;text-align:center;">⚠️ Merci de compléter au moins un test.</div>';
        return;
    }

    // Construction des résultats par exercice
    var charges = {};
    function remplirGroupe(groupe, ref1RM) {
        if (ref1RM === null) return;
        CHARGES_REF_EXOS[groupe].forEach(function(exo) {
            if (exo.ratio === null) return;
            var charge = ref1RM * exo.ratio * coefSexe;
            // arrondi au 0.5 kg le plus proche, minimum 0
            charge = Math.max(0, Math.round(charge * 2) / 2);
            charges[exo.nom] = charge;
        });
    }
    remplirGroupe('push', push1RM);
    remplirGroupe('pull', pull1RM);
    remplirGroupe('legs', legs1RM);
    resultats = charges;

    // Sauvegarde
    localStorage.setItem('charges_estimees', JSON.stringify(resultats));
    localStorage.setItem('charges_estimees_meta', JSON.stringify({ date: new Date().toLocaleDateString('fr-FR'), poidsCorps: poidsCorps, sexe: sexe }));

    // Affichage
    var html = '<div style="background:#f0f9f0;border-radius:10px;padding:14px;margin-top:6px;">';
    html += '<div style="font-weight:800;margin-bottom:10px;">✅ Charges de départ estimées (8-12 reps)</div>';

    var groupesAffichage = [
        { titre: '💪 Poussée', exos: CHARGES_REF_EXOS.push },
        { titre: '🔙 Tirage', exos: CHARGES_REF_EXOS.pull },
        { titre: '🦵 Jambes', exos: CHARGES_REF_EXOS.legs }
    ];

    groupesAffichage.forEach(function(groupe) {
        var lignes = groupe.exos.filter(function(e) { return charges.hasOwnProperty(e.nom); });
        if (!lignes.length) return;
        html += '<div style="margin-bottom:12px;">';
        html += '<div style="font-weight:700;font-size:0.85em;color:#555;margin-bottom:6px;">' + groupe.titre + '</div>';
        lignes.forEach(function(e) {
            html += '<div style="display:flex;justify-content:space-between;padding:4px 0;border-bottom:1px solid #e8e8e8;font-size:0.9em;">';
            html += '<span>' + e.nom + '</span><span style="font-weight:700;">' + charges[e.nom] + ' kg</span>';
            html += '</div>';
        });
        html += '</div>';
    });

    html += '<p style="font-size:0.78em;color:#888;margin-top:10px;line-height:1.4;">Ces charges sont des points de départ estimés, pas des maximums. Ajustez librement dans vos séances selon votre ressenti — l\'objectif est de pouvoir réaliser 8 à 12 répétitions propres.</p>';
    html += '</div>';

    document.getElementById('ec-resultats').innerHTML = html;

    // Rafraîchir la carte d'accueil si on revient à la liste
    if (typeof displayConseils === 'function') {
        // léger délai pour ne pas perturber la modale ouverte
        setTimeout(displayConseils, 100);
    }
}

/* ---------- 4. OUVERTURE AUTOMATIQUE DEPUIS UNE AUTRE PAGE ----------
   Si on arrive sur infos.html via le lien "Pas sûr de vos charges ?"
   présent dans les séances MUSCU (infos.html?outil=estimateur),
   on ouvre directement la modale au chargement de la page. */
(function() {
    var params = new URLSearchParams(window.location.search);
    if (params.get('outil') === 'estimateur') {
        // On attend que displayConseils() ait eu le temps de construire la carte
        window.addEventListener('DOMContentLoaded', function() {
            setTimeout(function() {
                if (typeof openEstimateurCharges === 'function') openEstimateurCharges();
            }, 150);
        });
    }
})();
