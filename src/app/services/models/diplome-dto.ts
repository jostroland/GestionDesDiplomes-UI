/* tslint:disable */
/* eslint-disable */
export interface DiplomeDto {
  beneficiaire: string;
  civilite: 'M' | 'Mme' | 'Mlle';
  dateEdition?: string;
  dateObtention?: string;
  fonction: string;
  id?: number;
  ministreId?: number;
  numeroEnreg: string;
  titre: string;
}
