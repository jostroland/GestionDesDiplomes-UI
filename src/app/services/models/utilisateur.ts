/* tslint:disable */
/* eslint-disable */
import { GrantedAuthority } from './granted-authority';
import { Role } from './role';
export interface Utilisateur {
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  active?: boolean;
  authorities?: Array<GrantedAuthority>;
  createdDate?: string;
  credentialsNonExpired?: boolean;
  email?: string;
  enabled?: boolean;
  id?: number;
  lastModifiedDate?: string;
  motDePasse?: string;
  nom?: string;
  password?: string;
  photo?: string;
  prenoms?: string;
  role?: Role;
  username?: string;
}
