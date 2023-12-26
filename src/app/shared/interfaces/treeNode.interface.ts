// Mislim da ovo nece da nam treba, ali neka se ne brise jos uvek
import { FlatNode } from './flatNode.interface';
import { Owner } from './owner.interface';

export interface MYTreeNode{
  expandable: boolean;
  level: number;
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
