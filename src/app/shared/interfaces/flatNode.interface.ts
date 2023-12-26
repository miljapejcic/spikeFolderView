import { Owner } from './owner.interface';

export interface FlatNode {
  uid: string | null;
  name: string;
  createDateTime: string;
  path: string; //ne treba
  owner: Owner;
  parentNodeUid: string | null;
  color: string;
  icon: string;
  nodeType: 'Folder' | 'Document';
  peopleWithAccess?: Owner[] | null;
  children: FlatNode[];
}
