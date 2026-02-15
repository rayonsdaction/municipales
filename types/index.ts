import type { Collections } from '@nuxt/content';

export type LaneType =
| 'bidirectionnelle'
| 'bilaterale'
| 'voie-bus'
| 'voie-bus-elargie'
| 'velorue'
| 'voie-verte'
| 'bandes-cyclables'
| 'zone-de-rencontre'
| 'aucun'
| 'inconnu';

export type LaneStatus = 'done' | 'wip' | 'planned' | 'tested' | 'postponed' | 'unknown' | 'variante' | 'variante-postponed' | 'expected';

export type LaneQuality = 'unsatisfactory' | 'satisfactory';

export type LineStringFeature = {
  type: 'Feature';
  properties: {
    id?: string // sert à identifier des tronçons communs entre plusieurs lignes
    line: number; // numéro de la voie cyclable
    name: string; // nom de la voie cyclable
    status: LaneStatus; // status d'avancement de la voie cyclable
    type: LaneType; // type de la voie cyclable
    doneAt?: string; // si applicable, date de fin des travaux (utile pour suivre la progression)
    link?: string;
    quality?: LaneQuality; // tronçon de qualité ou non
  };
  geometry: {
    type: 'LineString';
    coordinates: [number, number][];
  };
};

export type PerspectiveFeature = {
  type: 'Feature';
  properties: {
    type: 'perspective';
    line: number;
    name: string;
    imgUrl: string;
  };
  geometry: {
    type: 'Point';
    coordinates: [number, number];
  };
};

export type CompteurFeature = {
  type: 'Feature';
  properties: {
    type: 'compteur-velo' | 'compteur-voiture';
    line?: number;
    name: string;
    link?: string;
    counts: Array<{
      month: string;
      count: number;
    }>;
    /**
     * z-index like
     */
    circleSortKey?: number;
    circleRadius?: number;
    circleStrokeWidth?: number;
  };
  geometry: {
    type: 'Point';
    coordinates: [number, number];
  };
};

export type DangerFeature = {
  type: 'Feature';
  properties: {
    id?: string,
    type: 'danger',
    name: string
    description: string
    danger: string
  }
  geometry: {
    type: 'Point';
    coordinates: [number, number];
  };
}

export type Count = { month: string, count: number };

/**
 * type helpers
 */


export function isEngagementFeature(feature: Collections['voiesCyclablesGeojson']['features'][0]):
    feature is Extract<Collections['voiesCyclablesGeojson']['features'][0], { properties: { type: "engagement" } }> {
  return feature.properties.type === "engagement";
}
