import config from '~/config.json';

export const useConfig = () => {
  function getProjectName(): string {
    return config.projectName;
  }

  function getAssoName(): string {
    return config.assoName;
  }

  function getAssoLink(): string {
    return config.assoLink;
  }

  function getnbMunicipalites(): number {
    return config.nbMunicipalites;
  }

  function displayQuality(): boolean {
    return config.qualityDisplay;
  }

  function displayQualityOnHomePage(): boolean {
    return config.qualityDisplayOnHomePage;
  }

  return { getProjectName, getAssoName, getAssoLink, getnbMunicipalites, displayQuality, displayQualityOnHomePage };
};
