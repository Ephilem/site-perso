<script lang="ts">
    import { page } from "$app/state";
    import { BigSeparator, NavButton } from "$lib/components";

</script>

<div class="container">

    {@render page.state.homeArticle?.()}

    <h2>Qui je suis ?</h2>
    <p>
        Bonjour! Je suis Raphaël AIMÉ et je suis actuellement étudiant en 3ème année de BUT Informatique à l'IUT de Vannes. J'ai débuté l'informatique très jeunes à travers
        Minecraft en créant des plugins pour créer des mini-jeux. J'ai continuer dans cet esprit en apprenant le développement web avec au départ JQuery pour finir avec Svelte.
    </p>
    <p>
        Dans cette attirance dans tout ce qui est visuelle, j'ai aussi fait des petits jeux sur Unreal Engine 4 au collège pour apprendre les bases de la conception de jeux vidéo.
        Cette passion est revenue récemment où j'ai voulu comprendre comment les jeux vidéos effectue des rendus 3D. J'ai donc commencé à créer un moteur de rendu 3D en C avec Vulkan pour
        bien comprendre toute les étapes de rendu d'une scène 3D.
    </p>
    <p>
        L'informatique n'est pas ma seul passion ! Je suis aussi batteur depuis le lycée. J'ai appris à jouer en autodidacte et j'ai eu la chance de jouer dans plusieurs groupes de musique.
        Cette passion m'a même amené à présider l'Association Musicale des Étudiants Vannetais.
    </p>

    <h2>Études</h2>
    <div class="timeline">
        <div class="timeline-item">
            <div class="date-timeline">
                <span>2022 - En cours</span>
            </div>
            <div class="separator-timeline">
                <div class="dot"></div>
                <div class="line"></div>
            </div>
            <div class="content-timeline">
                <h3>BUT Informatique, spécialité Réalisation d'applications</h3>
                <h4>IUT de Vannes, Université Bretagne Sud</h4>
                <ul>
                    <li>Informatique : Algorithmique, Automates, structure de données, base de données, technologie web</li>
                    <li>Mathématiques : Algèbre linéaire, probabilités, cryptographie, optimisation</li>
                    <li>Conception : Interface IHM, Conception BDD, Diagramme UML, Architecture logicielle</li>
                </ul>
            </div>
        </div>

        <div class="timeline-item">
            <div class="date-timeline">
                <span>2018 - 2022</span>
            </div>
            <div class="separator-timeline">
                <div class="dot done"></div>
                <div class="line"></div>
            </div>
            <div class="content-timeline">
                <h3>Baccalauréat Général, mention Très bien</h3>
                <h4>Jean Paul II, Groupe Saint Jean, Saint-Grégoire</h4>
                <p>Mathématiques, Numérique et Sciences Informatiques, Physique-Chimie</p>
            </div>
        </div>
    </div>

    <h2>Expériences professionnelles</h2>
    <div class="timeline">
        <div class="timeline-item">
            <div class="date-timeline">
                <span>2023 - En cours</span>
            </div>
            <div class="separator-timeline">
                <div class="dot"></div>
                <div class="line"></div>
            </div>
            <div class="content-timeline">
                <h3>Lemedecin.fr - Développeur Fullstack Web</h3>
                <h4>Alternance</h4>
                <ul>
                    <li>Développement d'une plateforme de support client format Webmail, réduisant le temps de traitement d'un message.</li>
                    <li>Amélioration de l'expérience utilisateur d'un système de téléconsultation en ajoutant des fonctionnalités demandé par les utilisateurs.</li>
                    <li>Élaboration d'un POC d'assistant médical basé sur l'IA avec une équipe pluridisciplinaire de professionnels de santé.</li>
                </ul>
            </div>
        </div>
    </div>

</div>


<style>
    .container {
        padding: calc(var(--spacing) * 8);
    }

    p {
        text-indent: 2em;
    }

    .container > h2 {
        position: relative;
        margin: 0;
    }
    .container > h2:nth-of-type(n+2) {
        margin-top: 1.2em;
    }
    .container > h2:nth-of-type(n+2)::before {
        content: "";
        position: absolute;
        top: -0.5em;
        width: 100%;
        height: 2px;
        border-top: 1px dashed var(--foreground-muted-color);
    }



    .timeline {
        display: flex;
        flex-direction: column;
        gap: 0;
        margin: 2em 0 3em 0;
    }

    .timeline-item {
        display: grid;
        grid-template-columns: 3fr 1fr 8fr;
        min-height: 120px;
    }

    .date-timeline {
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
        padding-top: 6px;
        padding-right: 1.5em;
        font-weight: bold;
    }

    .separator-timeline {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .dot {
        margin-top: 8px;

        width: 16px;
        height: 16px;

        border-radius: 50%;

        background-color: var(--primary-color);

        z-index: 2;
    }

    .line {
        position: absolute;
        top: 16px;
        width: 2px;
        height: calc(100% + 8px);

        background-image: repeating-linear-gradient(
                360deg,
                var(--foreground-muted-color) 0px,
                var(--foreground-muted-color) 1px,
                transparent 1px,
                transparent 50%
        );
        background-size: 10px 10px;
        background-attachment: fixed;

        z-index: 1;
    }

    .timeline-item:last-child .line {
        display: none;
    }

    .content-timeline {
        padding-left: 1.5em;
        padding-bottom: 1.5em;
        margin-top: 2px;
    }

    .content-timeline h3 {
        margin: 0;
    }

    .content-timeline h4 {
        margin: 0.3em 0 1em 0;
        font-weight: normal;
        font-style: italic;
        color: var(--foreground-muted-text-color);
    }

    .content-timeline p {
        text-indent: 0;
        margin: 0.5em 0;
    }

    .content-timeline ul {
        margin: 0.5em 0;
        padding-left: 1.5em;
    }

    .content-timeline li {
        margin-bottom: 0.3em;
    }

</style>