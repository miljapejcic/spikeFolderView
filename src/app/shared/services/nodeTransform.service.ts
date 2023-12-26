import { Injectable, OnInit } from '@angular/core';
import { FlatNodes } from '../data/nodes';
// import { TreeNode } from '../interfaces/treeNode.interface';
import { FlatNode } from '../interfaces/flatNode.interface';

@Injectable({
  providedIn: 'root',
})
export class NodeTransformService implements OnInit {
  flatNodes: FlatNode[] = FlatNodes;

  currentUser = {
    username: 'user2',
    uid: 'u2',
  };

  myDriveNode: FlatNode = {
    uid: null,
    name: 'My Drive',
    createDateTime: new Date().toDateString(),
    owner: this.currentUser,
    parentNodeUid: null,
    color: '',
    icon: '',
    nodeType: 'Folder',
    peopleWithAccess: null,
    children: [],
  };
  
  treeNodes: FlatNode[] = [this.myDriveNode]; //ovaj niz treba da ima jedan element

  constructor() {}

  ngOnInit(): void {
  }
  
  logArray() {
    console.log(this.flatNodes);
    const filteredNodesMyDrive = this.flatNodes.filter(node => node.owner.uid === this.currentUser.uid);

    console.log('My Drive', filteredNodesMyDrive);

    const filteredNodesSharedBy = this.flatNodes.filter(node => node.owner.uid === this.currentUser.uid && node.peopleWithAccess?.length);

    console.log('Shared By Me', filteredNodesSharedBy);

    const filteredNodesSharedWith = this.flatNodes.filter(node => node.owner.uid !== this.currentUser.uid && node.peopleWithAccess?.some(person => person.uid === this.currentUser.uid));

    console.log('Shared With Me', filteredNodesSharedWith);

    const buildTree = (nodes: FlatNode[], parentNodeUid: number | null): FlatNode[] => {
      return nodes
        .filter(node => node.parentNodeUid === parentNodeUid)
        .map(node => ({
          ...node,
          children: buildTree(nodes, node.uid),
        }));
    };
    
    const hierarchicalTree = buildTree(this.flatNodes, null);
    this.treeNodes[0].children = hierarchicalTree;
    console.log(this.treeNodes);
  }

  getMyDriveData(){
    this.logArray();
    return this.treeNodes;
  }
}
