import { Injectable } from '@angular/core';
import { FlatNodes } from '../data/nodes';
import { FlatNode } from '../interfaces/flatNode.interface';
import { Owner } from '../interfaces/owner.interface';
import { UsersSet } from '../interfaces/usersSet.class';

@Injectable({
  providedIn: 'root',
})
export class NodeTransformService {
  flatNodes: FlatNode[] = FlatNodes;

  currentUser = {
    uid: 'user1',
    username: 'ownerA',
  };

  myDriveNode: FlatNode = {
    uid: null,
    name: 'My Drive',
    createDateTimeUTC: new Date().toDateString(),
    owner: this.currentUser,
    parentNodeUid: null,
    color: '',
    icon: '',
    nodeType: 'Folder',
    peopleWithAccess: null,
    children: [],
  };

  sharedByNode: FlatNode = {
    uid: null,
    name: 'Shared By Me',
    createDateTimeUTC: new Date().toDateString(),
    owner: this.currentUser,
    parentNodeUid: null,
    color: '',
    icon: '',
    nodeType: 'Folder',
    peopleWithAccess: null,
    children: [],
  };

  sharedWithNode: FlatNode = {
    uid: null,
    name: 'Shared With Me',
    createDateTimeUTC: new Date().toDateString(),
    owner: this.currentUser,
    parentNodeUid: null,
    color: '',
    icon: '',
    nodeType: 'Folder',
    peopleWithAccess: null,
    children: [],
  };

  myDriveTreeNodes: FlatNode[] = [this.myDriveNode];
  sharedByTreeNodes: FlatNode[] = [this.sharedByNode];
  sharedWithTreeNodes: FlatNode[] = [this.sharedWithNode];

  filteredNodesMyDrive!: FlatNode[];
  filteredNodesSharedWith!: FlatNode[];
  filteredNodesSharedBy!: FlatNode[];

  constructor() {
    this.initialize();
  }

  initialize() {
    //Filtered arrays below are used to differentiate what tree the nodes are supposed to be a part of

    //Get all nodes that need to go into My Drive
    this.filteredNodesMyDrive = this.flatNodes.filter(
      (node) => node.owner.uid === this.currentUser.uid
    );

    //Get all nodes that need to go into Shared By
    this.filteredNodesSharedBy = this.flatNodes.filter(
      (node) =>
        node.owner.uid === this.currentUser.uid && node.peopleWithAccess?.length
    );

    //Get all nodes that need to go into Shared With
    this.filteredNodesSharedWith = this.flatNodes.filter(
      (node) =>
        node.owner.uid !== this.currentUser.uid &&
        node.peopleWithAccess?.some(
          (person) => person.uid === this.currentUser.uid
        )
    );

    this.createMyDriveTreeNodes();
    this.createSharedByTreeNodes();
    this.createSharedWithTreeNodes();
  }

  //A Method that builds the hierarchy from the root folder (My Drive or User folders in Shared By/With)
  buildTree(nodes: FlatNode[], parentNodeUid: string | null): FlatNode[] {
    return nodes
      .filter((node) => node.parentNodeUid === parentNodeUid)
      .map((node) => ({
        ...node,
        children: this.buildTree(nodes, node.uid),
      }));
  }

  //MY DRIVE

  createMyDriveTreeNodes() {
    this.myDriveTreeNodes[0].children = this.buildTree(this.filteredNodesMyDrive, null);
  }

  getMyDriveData() {
    return this.myDriveTreeNodes;
  }

  //SHARED BY

  //Method that extracts distinct users that the current user has shared nodes with and creates folders for those users which will contain the shared nodes
  getSharedByMeUserFolders() {
    const distinctUsersSet = new UsersSet<Owner>((owner) => owner.uid);
    this.filteredNodesSharedBy.forEach((node) => {
      node.peopleWithAccess?.forEach((user) => {
        distinctUsersSet.add(user);
      });
    });

    this.createUserFolders(this.sharedByTreeNodes, distinctUsersSet);
  }

  createSharedByTreeNodes() {
    this.getSharedByMeUserFolders();
    this.sharedByTreeNodes[0].children.forEach((user) => {
      const filteredNodesForUserFolder = this.filteredNodesSharedBy.filter(
        (node) =>
          node.peopleWithAccess?.some((person) => person.uid === user.uid)
      );
      //Had to create a copy of objects because any change on the filteredNodesForUserFolder nodes will trigger change in the original array (because the objects are passed by reference)
      const filteredNodesForUserFolderCopy = filteredNodesForUserFolder.map(
        (node) => ({
          ...node,
          parentNodeUid: !filteredNodesForUserFolder.some(
            (tempNode) => tempNode.uid === node.parentNodeUid
          )
            ? user.uid
            : node.parentNodeUid,
        })
      );
      user.children = this.buildTree(
        filteredNodesForUserFolderCopy,
        user.uid
      );
    });
  }

  getSharedByData() {
    return this.sharedByTreeNodes;
  }

  //SHARED WITH

  //Method that extracts distinct users that have shared with the current user and creates folders for those users which will contain the shared nodes
  getSharedWithMeUserFolders() {
    const distinctUsersSet = new UsersSet<Owner>((owner) => owner.uid);
    this.filteredNodesSharedWith.forEach((node) => {
      distinctUsersSet.add(node.owner);
    });

    this.createUserFolders(this.sharedWithTreeNodes, distinctUsersSet);
  }

  //Method that creates user folders in Shared By/With root folder
  createUserFolders(treeNode: FlatNode[], usersSet: UsersSet<Owner>) {
    const distinctUsers: Owner[] = usersSet.values();
    distinctUsers.forEach((user) => {
      const userFolder: FlatNode = {
        uid: user.uid,
        name: user.username,
        createDateTimeUTC: '',
        owner: user,
        parentNodeUid: null,
        color: '',
        icon: '',
        nodeType: 'Folder',
        peopleWithAccess: [this.currentUser],
        children: [],
      };
      treeNode[0].children.push(userFolder);
    });
  }

  createSharedWithTreeNodes() {
    this.getSharedWithMeUserFolders();
    this.sharedWithTreeNodes[0].children.forEach((user) => {
      const filteredNodesForUserFolder = this.filteredNodesSharedWith.filter(
        (node) => node.owner.uid === user.uid
      );
      //Had to create a copy of objects because any change on the filteredNodesForUserFolder nodes will trigger change in the original array (because the objects are passed by reference)
      const filteredNodesForUserFolderCopy = filteredNodesForUserFolder.map(
        (node) => ({
          ...node,
          parentNodeUid: node.parentNodeUid === null ?  node.parentNodeUid = node.owner.uid : node.parentNodeUid
        })
      );
      user.children = this.buildTree(filteredNodesForUserFolderCopy, user.uid);
    });
  }

  getSharedWithData() {
    return this.sharedWithTreeNodes;
  }
}
