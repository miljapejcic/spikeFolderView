import { FlatNode } from './flatNode.interface';
import { Owner } from './owner.interface';

export interface MYTreeNode{
  expandable: boolean;
  level: number;
  uid: string | null;
  name: string;
  createDateTimeUTC: string;
  owner: Owner;
  parentNodeUid: string | null;
  color: string;
  icon: string;
  nodeType: 'Folder' | 'Document';
  peopleWithAccess?: Owner[] | null;
  children: FlatNode[];
}
