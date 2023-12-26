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
    this.dataSource.data = this.nodeTransformService.getMyDriveData();

  }

  ngOnInit() {
    // this.nodeTransformService.logArray()
  }

  private _transformer = (node: FlatNode, level: number) :MYTreeNode => {
    return {
      expandable: node.nodeType === 'Folder',  //expandable: !!node.children && node.children.length > 0,
      level: level,
      name: node.name,
      path: node.path,
      uid: node.uid,
      createDateTime: node.createDateTime,
      owner: node.owner,
      parentNodeUid: node.parentNodeUid,
      color: node.color,
      icon: node.icon,
      peopleWithAccess: node.peopleWithAccess,
      children: node.children,
      nodeType: node.nodeType
    };
  };

  treeControl = new FlatTreeControl<MYTreeNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);


  hasChild = (_: number, node: MYTreeNode) => node.expandable;

}
