/* jshint esversion: 6 */

const workouts = [
    { title: "Le WOD du Voyageur", material: ["poids-corps"], body: "complet", duration: 20, type: "FOR TIME", level: "Moyen", desc: "100 Air Squats, 50 Push-ups(pompes), 100 Sit-ups(abdos), 50 Push-ups, 100 Air Squats.", pdf: "docs/WOD_VOYAGEUR.pdf" },
    { title: "Le WOD 10 to 1", material: ["poids-corps"], body: "complet", duration: 15, type: "FOR TIME", level: "Moyen", desc: "10-9-8-7-6-5-4-3-2-1 répétitions de : Burpees et Sit-ups(abdos).", pdf: "docs/WOD_10TO1.pdf" },
    { title: "Le WOD Lunges & Co", material: ["poids-corps"], body: "bas", duration: 20, type: "AMRAP", level: "Facile", desc: "<strong>AMRAP 20 min :</strong> 20 Jumping Lunges(fentes), 20 Sit-ups(abdos), 20 Air Squats.", pdf: "docs/WOD_LUNGESANDCO.pdf" },
    { title: "Le WOD Annie", material: ["corde"], body: "complet", duration: 15, type: "FOR TIME", level: "Intense", desc: "50-40-30-20-10 : Double-Unders et Sit-ups(abdos).", pdf: "docs/WOD_ANNIE.pdf" },
    { title: "Le WOD Cindy", material: ["traction"], body: "complet", duration: 20, type: "AMRAP", level: "Moyen", desc: "<strong>AMRAP 20 min :</strong> 5 Pull-ups(tractions), 10 Push-ups(pompes), 15 Air Squats.", pdf: "docs/WOD_CINDY.pdf" },
    { title: "Le WOD Death by Burpees", material: ["poids-corps"], body: "complet", duration: 15, type: "EMOM", level: "Intense", desc: "<strong>EMOM :</strong> Minute 1 : 1 Burpee, Minute 2 : 2 Burpees...", pdf: "docs/WOD_DEATHBYBURPEES.pdf" },
    { title: "Le WOD Angie", material: ["traction"], body: "complet", duration: 35, type: "FOR TIME", level: "Intense", desc: "100 Pull-ups(tractions), 100 Push-ups(pompes), 100 Sit-ups(abdos), 100 Squats.", pdf: "docs/WOD_ANGIE.pdf" },
    { title: "Le WOD Barbara", material: ["traction"], body: "complet", duration: 45, type: "FOR TIME", level: "Intense", desc: "5 rounds (3' repos) : 20 Pull-ups, 30 Push-ups, 40 Sit-ups, 50 Squats.", pdf: "docs/WOD_BARBARA.pdf" },
    { title: "Le WOD Murph", material: ["traction", "gilet-leste"], body: "complet", duration: 50, type: "FOR TIME", level: "Intense", desc: "1.6km course, 100 Pull-ups(tractions), 200 Push-ups(pompes), 300 Squats, 1.6km course.", pdf: "docs/WOD_MURPH.pdf" },
    { title: "Le WOD Sit-ups & Burpees", material: ["poids-corps"], body: "abdos", duration: 15, type: "FOR TIME", level: "Intense", desc: "10-20-30-40-30-20-10 : Sit-ups(abdos) et Burpees.", pdf: "docs/WOD_SITUPSANDBURPEES.pdf" },
    { title: "Le WOD Chelsea", material: ["traction"], body: "complet", duration: 30, type: "EMOM", level: "Moyen", desc: "<strong>EMOM 30 min :</strong> 5 Pull-ups(tractions), 10 Push-ups(pompes), 15 Squats.", pdf: "docs/WOD_CHELSEA.pdf" },
    { title: "Le WOD Candy", material: ["traction"], body: "complet", duration: 40, type: "FOR TIME", level: "Intense", desc: "5 rounds : 20 Pull-ups(tractions), 40 Push-ups(pompes), 60 Squats.", pdf: "docs/WOD_CANDY.pdf" },
    { title: "Le WOD Karabel", material: ["ballon-leste"], body: "complet", duration: 15, type: "FOR TIME", level: "Moyen", desc: "10 rounds : 15 Wall Balls(ballon lesté) et 15 Burpees.", pdf: "docs/WOD_KARABEL.pdf" },
    { title: "Le WOD Mary", material: ["poids-corps"], body: "complet", duration: 20, type: "AMRAP", level: "Intense", desc: "5 Handstand Push-ups(pompes inversées), 10 Pistols(squat une jambe), 15 Pull-ups(tractions).", pdf: "docs/WOD_MARY.pdf" },
    { title: "Le WOD Nicole", material: ["traction"], body: "complet", duration: 20, type: "AMRAP", level: "Intense", desc: "Run 400m, Max Pull-ups(tractions).", pdf: "docs/WOD_NICOLE.pdf" },
    { title: "Le WOD Jump & Push", material: ["box-jump"], body: "complet", duration: 20, type: "AMRAP", level: "Moyen", desc: "10 Box Jumps, 15 Push-ups(pompes), 20 Sit-ups(abdos).", pdf: "docs/WOD_JUMPANDPUSH.pdf" },
    { title: "Le WOD Handstand", material: ["poids-corps"], body: "complet", duration: 15, type: "FOR TIME", level: "Intense", desc: "5 rounds : 10 HSPU(pompes inversées), 20 Squats, 10 HSPU, 20 Lunges(fentes).", pdf: "docs/WOD_HANDSTAND.pdf" },
    { title: "Le WOD Super Legs", material: ["poids-corps"], body: "bas", duration: 20, type: "FOR TIME", level: "Facile", desc: "<strong>5 rounds :</strong> 20 Air Squats, 20 Alternating Lunges(fentes), 20 Split Squat Jumps, 10 Squat Jumps.", pdf: "docs/WOD_SUPERLEG.pdf" },
    { title: "Le WOD Air Squat Galore", material: ["poids-corps"], body: "bas", duration: 20, type: "FOR TIME", level: "Facile", desc: "500 Air Squats pour le temps.", pdf: "docs/WOD_AIRSQUATGALORE.pdf" },
    { title: "Le WOD Plank & Push", material: ["poids-corps"], body: "complet", duration: 15, type: "AMRAP", level: "Facile", desc: "10 Push-ups(pompes), 20 Sit-ups(abdos), 30 sec Plank(gainage planche-abdos).", pdf: "docs/WOD_PLANKANDPUSH.pdf" },
    { title: "Le WOD Lunges & Run", material: ["poids-corps"], body: "bas", duration: 25, type: "FOR TIME", level: "Facile", desc: "5 rounds : Run 400m, 30 Walking Lunges(fentes marchées).", pdf: "docs/WOD_LUNGESANDRUN.pdf" },
    { title: "Le WOD Burpee Marathon", material: ["poids-corps"], body: "complet", duration: 15, type: "FOR TIME", level: "Intense", desc: "150 Burpees le plus vite possible.", pdf: "docs/WOD_BURPEESMARATHON.pdf" },
    { title: "Le WOD Cloverfield", material: ["poids-corps"], body: "complet", duration: 40, type: "FOR TIME", level: "Intense", desc: "Run 2400m(course à pied), 150 Burpees, Run 2400m.", pdf: "docs/WOD_CLOVERFIELD.pdf" },
    { title: "Le WOD Shawn", material: ["poids-corps"], body: "complet", duration: 60, type: "FOR TIME", level: "Moyen", desc: "Run 8km. Toutes les 5 min : 50 Squats et 50 Push-ups(pompes).", pdf: "docs/WOD_SHAWN.pdf" },
    
    { title: "Le WOD Cindy XXX", material: ["traction"], body: "complet", duration: 20, type: "AMRAP", level: "Intense", desc: "<strong>AMRAP 20 min :</strong> WOD CINDY version hard ; Pull-ups(tractions), Push-ups(pompes), Air Squats.", pdf: "docs/WOD_CINDYXXX.pdf" },
    { title: "Le WOD Zachary Tellier", material: ["poids-corps"], body: "complet", duration: 0, type: "FOR TIME", level: "Intense", desc: "10 Burpees au départ, puis enchainement Burpees / Push-ups(pompes) / Lunges(fentes) / Sit-ups(abdos).", pdf: "docs/WOD_ZACHTELLIER.pdf" },
    { title: "Le WOD Loredo", material: ["poids-corps"], body: "complet", duration: 0, type: "FOR TIME", level: "Moyen", desc: "<strong>6 tours :</strong> 24 Squats, 24 Push-ups(pompes), 24 Walking Lunges(fentes marchées), 400m Run.", pdf: "docs/WOD_LOREDO.pdf" },
    { title: "Le WOD Bert", material: ["poids-corps"], body: "complet", duration: 0, type: "FOR TIME", level: "Intense", desc: "50 Burpees, 400m Run(course), 100 Push-ups(pompes), 400m Run, 150 Walking Lunges(fentes marchées), 400m Run, 200 Squats, 400m Run, 150 Walking Lunges, 400m Run, 100 Push-ups, 400m Run, 50 Burpees.", pdf: "docs/WOD_BERT.pdf" },
    { title: "Le WOD Hero Mark Klement", material: ["poids-corps"], body: "complet", duration: 0, type: "FOR TIME", level: "Intense", desc: "<strong>7 tours :</strong> 74-44-11 reps de Burpees, Push-ups(pompes), Sit-ups(abdos), Air squats.", pdf: "docs/WOD_MARKKLEMENT.pdf" },
    { title: "Le WOD Hero Maupin", material: ["poids-corps"], body: "complet", duration: 0, type: "FOR TIME", level: "Moyen", desc: "800m Run(course), 49 Push-ups(pompes), 49 Sit-ups(abdos), 49 Air Squats.", pdf: "docs/WOD_HEROMAUPIN.pdf" },
    { title: "Le WOD Chad", material: ["box-jump","gilet-leste"], body: "bas", duration: 60, type: "FOR TIME", level: "Intense", desc: "1000 Box Step-ups. Option : gilet lesté.", pdf: "docs/WOD_CHAD.pdf" },
    { title: "Le WOD Cooper", material: ["poids-corps"], body: "complet", duration: 0, type: "FOR TIME", level: "Facile", desc: "10 rounds : 10 Burpees, 10 Air Squats, 10 Push-ups(pompes), 10 Sit-ups(abdos).", pdf: "docs/WOD_COOPER.pdf" },
    { title: "Le WOD Orbison", material: ["poids-corps"], body: "complet", duration: 20, type: "EMOM", level: "Moyen", desc: "<strong>EMOM 20 min :</strong> 4 Burpees, 6 Air Squats, 8 Sit-Ups(abdos).", pdf: "docs/WOD_ORBISON.pdf" },
    { title: "Le WOD It's a trap", material: ["poids-corps"], body: "complet", duration: 0, type: "FOR TIME", level: "Intense", desc: "commencer par 200m Run(course) puis effectuer 100 Burpees avec toutes les 2 minutes un Run de 200m.", pdf: "docs/WOD_ITSATRAP.pdf" },
    { title: "Le WOD The Longest Mile", material: ["poids-corps"], body: "complet", duration: 0, type: "FOR TIME", level: "Moyen", desc: "4 rounds : 10 Burpees, 100m Run(course), 10 Air Squats, 100m Run, 10 Push-ups(pompes), 100m Run, 10 Sit-ups(abdos), 100m Run.", pdf: "docs/WOD_THELONGESTMILE.pdf" },
    { title: "Le WOD Durante Core", material: ["poids-corps"], body: "abdos", duration: 0, type: "FOR TIME", level: "Facile", desc: "<strong>ABDOS - 5 tours :</strong> 10 Hollow Rocks, 10 V-ups, 10 Tuck-ups, 10 sec Hollow Hold, 1 minute de pause.", pdf: "docs/WOD_DURANTECORE.pdf" },
    { title: "Le WOD Dee", material: ["poids-corps"], body: "complet", duration: 0, type: "FOR TIME", level: "Moyen", desc: "4 rounds : 40 Air Squats, 30 Hand Release Push-Up(pompes), 20 Burpees.", pdf: "docs/WOD_DEE.pdf" },
    { title: "Le WOD Open 12.1", material: ["poids-corps"], body: "complet", duration: 7, type: "AMRAP", level: "Facile", desc: "<strong>AMRAP 7 min :</strong> Maximum de Burpees.", pdf: "docs/WOD_12_1.pdf" },
    { title: "Le WOD Riley", material: ["poids-corps","gilet-leste"], body: "complet", duration: 0, level: "Intense", type: "FOR TIME", desc: "2.4km Run, 150 Burpees, 2.4km Run.", pdf: "docs/WOD_RILEY.pdf" },
    
    { title: "RENFO Haut & Postérieur", material: ["barre"], body: "complet", duration: 0, type: "MUSCU", level: "Moyen", desc: "5 rounds : 10 Deadlifts (soulevé de terre), 10 Bench Press (développé couché).", pdf: "docs/RENFO_HAUT_POST.pdf" },
    
    // --- --------------- ---
    
    { title: "Séance BikeERG orientée FORCE", material: ["bike-erg"], body: "bas", duration: 40, type: "CARDIO", level: "Intense", desc: "séance de fractionné pendant 40 minutes.", pdf: "docs/SEANCE_BIKEERG_40.pdf" },
    { title: "Séance intervalle BikeERG", material: ["bike-erg"], body: "bas", duration: 30, type: "CARDIO", level: "Moyen", desc: "séance de fractionné pendant 30 minutes.", pdf: "docs/SEANCE_BIKEERG_30.pdf" },
    
    { title: "Séance RUN TEMPO sur tapis", material: ["tapis-incurve"], body: "bas", duration: 40, type: "CARDIO", level: "Moyen", desc: "séance de fractionné pyramidale pendant 40 minutes.", pdf: "docs/RUN_TEMPO.pdf" },
    
    // --- SÉANCES DU PDF "1_CROSS TRAINING_NEW" ---
    { title: "WOD TABATA 30/10", material: ["poids-corps"], body: "complet", duration: 6.5, type: "TABATA", level: "Facile", desc: "<strong>30 sec travail / 10 sec repos :</strong> Squats, Burpees, Mountain Climbers, Jumping jacks, Fente avant(lunges).", pdf: "docs/WOD_TABATA30_10.pdf" },
    { title: "WOD TABATA 40/10", material: ["poids-corps"], body: "complet", duration: 9.5, type: "TABATA", level: "Facile", desc: "<strong>40 sec travail / 10 sec repos :</strong> Squats sautées, Pompes(push-ups), Sit-ups(abdos), Burpees.", pdf: "docs/WOD_TABATA_40_10.pdf" },
    { title: "WOD TABATA 30/10 ABDOS", material: ["poids-corps"], body: "abdos", duration: 5, type: "TABATA", level: "Facile", desc: "<strong>30 sec travail / 10 sec repos pour les abdos :</strong> focus gainage.", pdf: "docs/WOD_TABATA30_10_ABDOS.pdf" },
    { title: "WOD For Time 6 EXOS#1", material: ["traction", "poids-corps", "station-dips"], body: "complet", duration: 0, type: "FOR TIME", level: "Moyen", desc: "<strong>4 tours (1' repos) :</strong> 10 Tractions(pull-ups), 15 Tractions australiennes, 10 Dips, 15 Pompes diamant(push-ups), 10 Fentes/jambe(lunges), 15 Squats.", pdf: "docs/WOD_FORTIME6EXOS.pdf" },
    { title: "WOD 500 REPS", material: ["poids-corps"], body: "complet", duration: 0, type: "FOR TIME", level: "Moyen", desc: "50 Montées de genoux, 50 Squats, 50 Demi squats sautés, 50 Pompes(push-ups), 50 Mountains climbers, 50 Coups de genoux, 50 Fentes(lunges), 50 Directs bras gauche/droit, 50 Burpees, 50 Jumping jacks.", pdf: "docs/WOD_500REPS.pdf" },
    { title: "WOD 3 EXOS 10 MIN", material: ["poids-corps"], body: "complet", duration: 10, type: "EMOM", level: "Facile", desc: "<strong>Chaque minute :</strong> 5 Burpees, 10 Squats jump, 5 Pompes(push-ups).", pdf: "docs/WOD_3EXOS10MINUTES.pdf" },
    { title: "WOD Burpees Pyramide", material: ["poids-corps"], body: "complet", duration: 16, type: "EMOM", level: "Intense", desc: "<strong>Pyramide Burpees :</strong> Commencer à 6 burpees la 1ère min, puis gravir et descendre la pyramide pendant 16 minutes", pdf: "docs/WOD_BURPEESPYRAMIDE.pdf" },
    { title: "WOD For Time 6 EXOS#2", material: ["traction"], body: "complet", duration: 0, type: "FOR TIME", level: "Moyen", desc: "<strong>4 tours (1' repos) :</strong> 15 Burpees, 15 Squats jump, 15 Pompes(push-ups), 15 Tractions(pull-ups), 15 Fentes(lunges), 15 Sit-ups(abdos).", pdf: "docs/WOD_FORTIME6EXOS2.pdf" },
    { title: "WOD AMRAP 6 EXOS", material: ["poids-corps"], body: "complet", duration: 28, type: "AMRAP", level: "Facile", desc: "<strong>4 tours (1' repos) :</strong> 1 min Burpees, 1 min Pompes(push-ups), 1 min Squat jump, 1 min Marche de l'ours, 1 min Mountain climber, 1 min Sit-up(abdos).", pdf: "docs/WOD_AMRAP6EXOS.pdf" },
    { title: "WOD AMRAP 4 EXOS", material: ["traction"], body: "complet", duration: 30, type: "AMRAP", level: "Moyen", desc: "<strong>Pendant 30 min :</strong> 5 Burpees, 7 Tractions(pull-ups), 10 Pompes(push-ups), 15 Squats.", pdf: "docs/WOD_AMRAP4EXOS.pdf" },
    { title: "WOD 1000 REPS", material: ["poids-corps", "traction", "station-dips", "box-jump"], body: "complet", duration: 0, type: "FOR TIME", level: "Intense", desc: "100 Tractions australiennes(pull-ups), 100 Pompes diamants(push-ups), 100 Squats jumps, 100 Mountain climbers, 100 Burpees, 100 Dips, 100 Gainage dynamique, 100 Box jumps, 100 Relevés de jambe, 100 Fentes marchées(walking lunges) ", pdf: "docs/WOD_1000REPS.pdf" },
    { title: "WOD BRI", material: ["poids-corps"], body: "complet", duration: 0, type: "FOR TIME", level: "Intense", desc: "<strong>36Reps / 2X18Reps / 3x12Reps / 4X9Reps / 6X6Reps :</strong> Burpees, Pompes(push-ups), Sit-ups(abdos), Squats.", pdf: "docs/WOD_BRI.pdf" },
    { title: "WOD AMRAP 3 EXOS", material: ["traction", "poids-corps"], body: "complet", duration: 20, type: "AMRAP", level: "Facile", desc: "<strong>Pendant 20 min :</strong> 5 Tractions(pull-ups), 10 Pompes(push-ups), 15 Squats.", pdf: "docs/WOD_AMRAP3EXOS.pdf" },
    { title: "WOD 300", material: ["barre", "haltere", "box-jump", "traction"], body: "complet", duration: 0, type: "MUSCU", level: "Intense", desc: "<strong>l'entrainement spartiate :</strong> 25 Tractions, 50 Deadlifts(soulevé de terre), 50 Pompes(push-ups), 50 Box jumps, 50 relevés de jambes avec barre, 50 Arrachés épaules à 1 bras(25-25), 25 Tractions.", pdf: "docs/WOD_300.pdf" },
    { title: "RENFO 10TOURS/3EXOS", material: ["poids-corps"], body: "complet", duration: 0, type: "MUSCU", level: "Facile", desc: "10 Squats, 5 Pompes(push-ups), 10 Sit-ups(abdos).", pdf: "docs/RENFO_10TOURS_3EXOS.pdf" },
    { title: "RENFO 5TOURS/3EXOS", material: ["poids-corps", "station-dips"], body: "complet", duration: 0, type: "MUSCU", level: "Facile", desc: "20 Squats, 10 Dips, 1 min de gainage(abdos).", pdf: "docs/RENFO_5TOURS_3EXOS.pdf" },
    { title: "WOD HYROX ANDRE", material: ["poids-corps", "rameur"], body: "complet", duration: 0, type: "HYROX", level: "Intense", desc: "<strong>FOR TIME:</strong> alternance Rameur(row), Burpees.", pdf: "docs/WOD_HYROX_ANDRE.pdf" },
    { title: "WOD HYROX DOMINO", material: ["poids-corps", "tapis-incurve"], body: "complet", duration: 0, type: "HYROX", level: "Moyen", desc: "<strong>FOR TIME:</strong> alternance Course à pied(run), Squats/Burpees/Pompes(Push-ups)/Sit-ups(abdos).", pdf: "docs/WOD_HYROX_DOMINO.pdf" },
    { title: "WOD HYROX 4 TOURS#1", material: ["ballon-leste", "tapis-incurve", "traction"], body: "complet", duration: 0, type: "HYROX", level: "Intense", desc: "<strong>4 TOURS FOR TIME:</strong> 600m. Course à pied(run), 30 Lancers de ballon lesté(wall-ball), 20 Sit-ups(abdos), 20 Tractions(pull-ups).", pdf: "docs/WOD_HYROX_4TOURS.pdf" },
    { title: "WOD HYROX 4 TOURS#2", material: ["rameur", "tapis-incurve", "box-jump", "ski-erg"], body: "complet", duration: 0, type: "HYROX", level: "Moyen", desc: "<strong>4 TOUS FOR TIME:</strong> 400m. Course à pied(run), 15 Burpees Box-jump Over, 400m. de rameur(row), 400 m. de SkiERG.", pdf: "docs/WOD_HYROX_4TOURS_2.pdf" },
    { title: "WOD HYROX AMRAP40", material: ["rameur", "tapis-incurve", "ballon-leste", "sand-bag"], body: "complet", duration: 40, type: "HYROX", level: "Moyen", desc: "<strong>AMRAP de 40 minutes:</strong> 1km de Rameur(row), 20 Fentes marchées avec sandbag(Lunges), 1km de Course à pied(run), 20 lancé de ballon lesté(wall-balls).", pdf: "docs/WOD_HYROX_AMRAP40.pdf" },
    
];

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
    const levelFilter = document.getElementById('levelFilter') ? document.getElementById('levelFilter').value : 'all'; // AJOUT

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

        return matchSearch && matchMat && matchBody && matchType && matchLevel && matchTime;
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

        grid.innerHTML += `
            <div class="card ${typeClass}">
                <div>
                    ${materialTags}
                    <span class="tag tag-body">${workout.body}</span>
                    <span class="tag tag-time">${durationText}</span>
                    <span class="tag tag-${workout.level.toLowerCase()}">${workout.level}</span> <h3>${workout.title}</h3>
                    <div class="card-desc">${workout.desc}</div>
                </div>
                <div class="card-buttons">
                    <a href="${workout.pdf}" target="_blank" class="btn-full">Ouvrir la fiche PDF</a>
                </div>
            </div>
        `;
    });
}

// Listeners pour les filtres (select)
document.querySelectorAll('.filter-bar select').forEach(select => {
    select.addEventListener('change', displayWorkouts);
});

// Listener pour la barre de recherche (input direct)
const searchField = document.getElementById('search-input');
if (searchField) {
    searchField.addEventListener('input', displayWorkouts);
}

// Initialisation au chargement
window.addEventListener('DOMContentLoaded', () => {
    const backButton = document.getElementById("backToTop");
    if (backButton) {
        window.onscroll = () => {
            backButton.style.display = (window.scrollY > 300) ? "block" : "none";
        };
        backButton.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    displayWorkouts();
});

// Fonction Tirage Aléatoire
function tirageAleatoire() {
    const indexHasard = Math.floor(Math.random() * workouts.length);
    const wodChoisi = workouts[indexHasard];
    alert("Le destin a choisi pour toi : " + wodChoisi.title);
    window.open(wodChoisi.pdf, '_blank');
}