import { Injectable, OnInit } from '@angular/core';
import { FlatNodes } from '../data/nodes';
import { TreeNode } from '../interfaces/treeNode.interface';

@Injectable({
  providedIn: 'root',
})
export class NodeTransformService implements OnInit {
  flatNodes = FlatNodes;

  currentUser = {
    username: 'user2',
    uid: 'u2',
  };

  myDriveNode: TreeNode = {
    uid: null,
    name: 'My Drive',
    createDateTime: new Date().toDateString(),
    path: 'My Drive/',
    owner: this.currentUser,
    parentNodeUid: null,
    color: '',
    icon: '',
    nodeType: 'Folder',
    peopleWithAccess: null,
    expandable: true,
    level: 0,
    children: [],
  };
  
  treeNodes: TreeNode[] = [this.myDriveNode]; //ovaj niz treba da ima jedan element

  constructor() {}

  ngOnInit(): void {
    console.log(this.flatNodes);
  }

  transformArray() {
    this.flatNodes.forEach((node) => {
      if (node.owner.uid === this.currentUser.uid) {
      }
    });
  }
}
