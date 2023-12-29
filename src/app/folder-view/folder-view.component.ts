import { Component, OnInit } from '@angular/core';
import { NodeTransformService } from '../shared/services/nodeTransform.service';
import { FlatNode } from '../shared/interfaces/flatNode.interface';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MYTreeNode } from '../shared/interfaces/treeNode.interface';

@Component({
  selector: 'folder-view',
  templateUrl: './folder-view.component.html',
  styleUrls: ['./folder-view.component.scss']
})
export class FolderViewComponent implements OnInit {

  constructor(private nodeTransformService: NodeTransformService) { 
    this.dataSourceMyDrive.data = this.nodeTransformService.getMyDriveData();
    this.dataSourceSharedBy.data = this.nodeTransformService.getSharedByData();
    this.dataSourceSharedWith.data = this.nodeTransformService.getSharedWithData();
  }

  ngOnInit() {
  }

  //tree transformer for all three trees (my drive, shared by, shared with)
  private _transformer = (node: FlatNode, level: number): MYTreeNode => {
    return {
      expandable: node.nodeType === 'Folder',
      level: level,
      uid: node.uid,
      name: node.name,
      createDateTimeUTC: node.createDateTimeUTC,
      owner: node.owner,
      parentNodeUid: node.parentNodeUid,
      color: node.color,
      icon: node.icon,
      nodeType: node.nodeType,
      peopleWithAccess: node.peopleWithAccess,
      children: node.children,
    };
  };

  hasChild = (_: number, node: MYTreeNode) => node.expandable;

  //My Drive
  treeControlMyDrive = new FlatTreeControl<MYTreeNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattenerMyDrive = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children,
  );

  dataSourceMyDrive = new MatTreeFlatDataSource(this.treeControlMyDrive, this.treeFlattenerMyDrive);


  //Shared By Me
  treeControlSharedBy = new FlatTreeControl<MYTreeNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattenerSharedBy = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children,
  );

  dataSourceSharedBy = new MatTreeFlatDataSource(this.treeControlSharedBy, this.treeFlattenerSharedBy);


  //Shared With Me
  treeControlSharedWith = new FlatTreeControl<MYTreeNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattenerSharedWith = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children,
  );

  dataSourceSharedWith = new MatTreeFlatDataSource(this.treeControlSharedWith, this.treeFlattenerSharedWith);

  test(node: any){
    console.log(node);
  }

}
