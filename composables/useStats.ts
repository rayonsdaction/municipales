import type { Collections } from '@nuxt/content';
import { isEngagementFeature } from '../types';

export const useStats = () => {
  function countEngagementsByType(voies: Collections['voiesCyclablesGeojson'][], engagementType: string,
                                  liste: number): number {
    return voies
        .map(voie => voie.features)
        .flat()
        .filter(isEngagementFeature)
        .filter((feature, index, sections) => {
          if (feature.properties.engagement === engagementType && feature.properties.liste === liste) {
            return true;
          }
        })
        .filter(feature => feature.properties.engagement === engagementType)
        .length;
  }

  function displayPercent(percent: number) {
    return `${percent}%`;
  }

  function getStats(voies: Collections['voiesCyclablesGeojson'][], liste: number) {

    const totalPasEngage = countEngagementsByType(voies, 'pasEngage', liste);
    const totalEngage = countEngagementsByType(voies, 'engage', liste);
    const totalEngagePlus = countEngagementsByType(voies, 'engagePlus', liste);
    const total = totalPasEngage + totalEngage + totalEngagePlus

    function getPercent(engagements: number) {
      return Math.round((engagements / total) * 100);
    }

    return {
      engagePlus: {
        name: 'Engagement fort',
        number: totalEngagePlus,
        percent: getPercent(totalEngagePlus),
        class: 'text-ra-green-600 font-semibold'
      },
      engage: {
        name: 'Engagement minimal',
        number: totalEngage,
        percent: getPercent(totalEngage),
        class: 'text-ra-green-400 font-normal'
      },
      pasEngage: {
        name: 'Pas d\'engagement',
        number: totalPasEngage,
        percent: getPercent(totalPasEngage),
        class: 'text-ra-orange font-semibold'
      }
    };
  }

  return {
    getStats,
    displayPercent
  };
};
