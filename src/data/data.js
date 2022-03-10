export const works = [
    {
        id: 1,
        title: 'cvthèque philiance',
        image: require('../assets/cvtheque.png'),
        tags: ['responsive', 'javascript', 'php', 'symfony'],
        type: 'Projet professionnel',
        link: 'https://cvtheque-philiance.com/',
        github: '',
        description: `
            Un outil rapide, pertinent et ergonomique permettant la rencontre des candidats avec les recruteurs.
            Les candidats peuvent s'inscrire, compléter leur profil, uploader leurs propres CVs ou en télécharger un.
            La CVthèque détecte automatiquement les candidats concernés par la recherche de compétences clés exprimées par le recruteur.
        `
    },
    {
        id: 2,
        title: 'events',
        image: require('../assets/events.jpg'),
        tags: ['jss', 'react', 'redux', 'firebase'],
        type: 'Projet personnel',
        link: 'https://hidden-plains-27480.herokuapp.com/',
        github: 'https://github.com/julien-delusseau/mern-events',
        description: 'Le but de cette application est de créer des évènements. Vous pouvez vous inscrire, créer vos évènements, ajouter des commentaires, ou participer aux évènements crées par les autres utilisateurs.'
    },
    {
        id: 3,
        title: 'crwn clothing',
        image: require('../assets/crwn_clothing.png'),
        tags: ['sass', 'react', 'redux', 'firebase'],
        type: 'Projet personnel',
        link: 'https://react-crwnclothing-app.herokuapp.com/',
        github: 'https://github.com/julien-delusseau/crwn-clothing',
        description: 'Développement d\'une e-commerce, à l\'aide de React et Redux, utilisant Firebase pour la base de données et l\'authentification, et intégrant multiples librairies.'
    }
];