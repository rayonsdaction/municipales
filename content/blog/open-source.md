---
title: Tutoriel - Dupliquer Municipales 2026 pour votre ville
description: Guide à destination des associations ou citoyens souhaitant réutiliser Municipales 2026 pour suivre les engagements des candidats aux élections municipales de 2026.
imageUrl: https://www.mce-info.org/wp-content/uploads/2024/02/25-Rayons-d-action.webp
---

## Municipales 2026 est (et restera) Open Source

Municipales 2026 est un projet Open Source conçu pour permettre à chacun·e de suivre les engagements des candidats aux élections municipales. Tout le code est public et réutilisable librement.

Le code est disponible sur [GitHub](https://github.com/rayonsdaction/municipales) sous [licence MIT](https://github.com/rayonsdaction/municipales/blob/main/LICENSE.md).

Une association, un collectif ou un·e citoyen·ne peut donc copier, modifier et adapter ce projet à sa ville, puis le publier sous un autre nom.

---

## Combien ça coûte d’avoir sa propre instance de Municipales 2026 ?

La plateforme est conçue pour être légère et peu coûteuse :
- Pas de base de données dédiée (les données sont stockées sur GitHub).
- Pas de serveur payant.
- Pas de logiciel tiers onéreux.

Le seul coût financier est l’achat d’un nom de domaine (~10€/an).

### Outils tiers utilisés :
- [GitHub](https://github.com) : stockage du code et des données. Gratuit.
- [Netlify](https://www.netlify.com) ou [Vercel](https://vercel.com) : hébergement du site. Offre gratuite largement suffisante.
- [Etalab](https://openmaptiles.geo.data.gouv.fr/) : cartes (si besoin). Gratuit.
- [Beam Analytics](https://beamanalytics.io/) : suivi d’audience. Gratuit (offre free tier).

---

## Comment créer ma version de Municipales 2026 ?

⚠️ *Cette partie est technique. L’aide d’un·e développeur·euse peut être utile.*

### 1. Contactez-nous
N’hésitez pas à nous envoyer un message pour échanger sur votre projet. On pourra vous donner des conseils et des retours d’expérience.

### 2. Tutoriel vidéo (à venir)
*[Optionnel : si tu prévois de créer un tutoriel vidéo, ajoute ici un lien ou une mention.]*

### 3. Étapes techniques

#### 3.1 Clonez le dépôt
```bash
git clone git@github.com:rayonsdaction/municipales.git
cd municipales2026
```

Puis installer les dépendances
```
npm install
```

Puis le faire tourner en local
```
npm run dev
```

ça y est : vous avez votre clone de Municipales qui tourne sur votre poste.
```
http://localhost:3000
```


#### Déployez votre toute nouvelle plateforme

Une fois que vous avez adapté les données à votre ville, vous pouvez déployer votre plateforme.

On recommande d'utiliser [Netlify](https://www.netlify.com) ou [Vercel](https://vercel.com/) pour l'hébergement. L'offre gratuite de ces 2 plateformes est très généreuse et suffira largement pour ce genre de projet.
Par ailleurs, elles offrent une excellente intégration avec Github. Ainsi, à chaque modification de vos données (ou commit), les changements seront "live" en 30-40 secondes.

Voici par exemple la configuration de Municipales sur Netlify (section Build & Deploy):
```
Build command : npm run generate
Publish directory : dist
```

Et voilà!

Vous pouvez ensuite :
- acheter un nom de domaine pour votre plateforme.
- configurer un outil de suivi d'audience (on utilise Beam Analytics, mais il y a plein d'autres solutions).


## Conclusion

On vous souhaite tout le meilleur pour votre projet ! 🎉
