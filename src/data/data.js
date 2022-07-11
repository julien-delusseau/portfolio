export const works = [
  {
    id: 1,
    view: "private",
    programmation: "php",
    title: "cvthèque philiance",
    image: require("../assets/cvtheque.png"),
    tags: ["responsive", "javascript", "php", "symfony"],
    type: "Projet professionnel",
    link: "https://cvtheque-philiance.com/",
    github: "#!",
    description: `
            Un outil rapide, pertinent et ergonomique permettant la rencontre des candidats avec les recruteurs.
            Les candidats peuvent s'inscrire, compléter leur profil, uploader leurs propres CVs ou en télécharger un.
            La CVthèque détecte automatiquement les candidats concernés par la recherche de compétences clés exprimées par le recruteur.
        `,
  },
  {
    id: 2,
    view: "public",
    programmation: "javascript",
    title: "events",
    image: require("../assets/events.png"),
    tags: ["jss", "react", "redux", "firebase"],
    type: "Projet personnel",
    link: "https://hidden-plains-27480.herokuapp.com/",
    github: "https://github.com/julien-delusseau/mern-events",
    description:
      "Le but de cette application est de créer des évènements. Vous pouvez vous inscrire, créer vos évènements, ajouter des commentaires, ou participer aux évènements crées par les autres utilisateurs.",
  },
  {
    id: 3,
    view: "public",
    programmation: "javascript",
    title: "crwn clothing",
    image: require("../assets/crwn_clothing.png"),
    tags: ["sass", "react", "redux", "firebase"],
    type: "Projet personnel",
    link: "https://react-crwnclothing-app.herokuapp.com/",
    github: "https://github.com/julien-delusseau/crwn-clothing",
    description:
      "Développement d'une e-commerce, à l'aide de React et Redux, utilisant Firebase pour la base de données et l'authentification, et intégrant multiples librairies.",
  },
  {
    id: 4,
    view: "public",
    programmation: "javascript",
    title: "jobify",
    image: require("../assets/jobify.png"),
    tags: ["react", "node js", "sequelize"],
    type: "Projet personnel",
    link: "https://jobify-sern.herokuapp.com/",
    github: "https://github.com/julien-delusseau/Jobify",
    description:
      "Jobify est une application vous permettant de sauvegarder vos recherches d'emploi. Je suis parti d'un projet existant réalisé avec MongoDB, pour migrer vers une base de données SQL à l'aide de l'ORM Sequelize.",
  },
  {
    id: 5,
    view: "public",
    programmation: "php",
    title: "cms framework",
    image: require("../assets/framework.png"),
    tags: ["react", "node js", "sequelize"],
    type: "Projet personnel",
    link: "http://framework.juliendelusseau.fr/",
    github: "https://github.com/julien-delusseau/framework",
    description: `
    J'ai créer ce projet dans le cadre d'une formation DWWM.
    Le but était de créer un CMS, type Wordpress, from 'scratch', avec le moins de packages possible. Évidemment, il reste des d'améliorations à effectuer, mais il y a tout de même une base assez solide.
    `,
  },
  {
    id: 6,
    view: "private",
    programmation: "mobile",
    title: "manage me",
    image: require("../assets/manageme.png"),
    tags: ["react native", "node js", "expo"],
    type: "Projet personnel",
    link: "https://manageme.juliendelusseau.fr/",
    github: "#!",
    description: `
    Manage Me est conçue pour vous aider lors de la création et la gestion de vos factures.
    La facture est déjà pré-remplie avec vos informations ainsi que celle de votre client. Il ne vous reste qu'à entrer les informations tarifaires.
    Une fois votre facture créée, vous pouvez immédiatement la télécharger en format PDF ou Excel.
    `,
  },
];
