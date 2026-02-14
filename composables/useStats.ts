import type { Collections } from '@nuxt/content';
import { isEngagementFeature } from '../types';

export const useStats = () => {
  function countEngagementsByType(voies: Collections['voiesCyclablesGeojson'][], engagementType: string): number {
    return voies
        .map(voie => voie.features)
        .flat()
        .filter(isEngagementFeature)
        .filter((feature, index, sections) => {
          if (feature.properties.engagement === engagementType) {
            return true;
          }
          return index === sections.findIndex(section => section.properties.id === feature.properties.id);
        })
        .filter(feature => feature.properties.engagement === engagementType)
        .length;
  }

  function displayPercent(percent: number) {
    return `${percent}%`;
  }

  function getStats(voies: Collections['voiesCyclablesGeojson'][]) {

    const totalPasEngage = countEngagementsByType(voies, 'pasEngage');
    const totalEngage = countEngagementsByType(voies, 'engage');
    const totalEngagePlus = countEngagementsByType(voies, 'engagePlus');
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
