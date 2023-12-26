import { Owner } from './owner.interface';

export interface FlatNode {
  uid: number | null;
  name: string;
  createDateTime: string;
  owner: Owner;
  parentNodeUid: string | null;
  color: string;
  icon: string;
  nodeType: 'Folder' | 'Document';
  peopleWithAccess?: Owner[] | null;
  children: FlatNode[];
}
