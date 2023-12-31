import { FlatNode } from "../interfaces/flatNode.interface";

export const FlatNodes: FlatNode[] = [
  {
    "uid": "88b3d83e-c1a2-449a-b95b-8edbf92f1d42",
    "name": "fdggdgf",
    "owner": {
      "uid": "user2",
      "username": "owner B"
    },
    "parentNodeUid": null,
    "nodeType": "Folder",
    "color": "#e74c3c",
    "icon": "folder",
    "createDateTimeUTC": "2023-12-02T00:00:00",
    "children": [],
    "peopleWithAccess": [
      {
        "uid": "user1",
        "username": "owner A"
      },
      {
        "uid": "user3",
        "username": "owner C"
      }
    ]
  },
  {
    "uid": "cff5d177-18f1-4a41-8876-729d97b5b158",
    "name": "folder4",
    "owner": {
      "uid": "user3",
      "username": "owner C"
    },
    "parentNodeUid": null,
    "nodeType": "Folder",
    "color": "#2ecc71",
    "icon": "folder",
    "createDateTimeUTC": "2023-12-03T00:00:00",
    "children": [],
    "peopleWithAccess": [
      {
        "uid": "user1",
        "username": "owner A"
      },
      {
        "uid": "user2",
        "username": "owner B"
      }
    ]
  },
  {
    "uid": "fada7a0f-5f58-4b0a-b857-009ffaddd90f",
    "name": "folder5",
    "owner": {
      "uid": "user1",
      "username": "owner A"
    },
    "parentNodeUid": null,
    "nodeType": "Folder",
    "color": "#f39c12",
    "icon": "folder",
    "createDateTimeUTC": "2023-12-04T00:00:00",
    "children": [],
    "peopleWithAccess": [
      {
        "uid": "user3",
        "username": "owner C"
      }
    ]
  },
  {
    "uid": "9687237c-255c-48db-a500-fc469469f744",
    "name": "doc1",
    "owner": {
      "uid": "user2",
      "username": "owner B"
    },
    "parentNodeUid": "88b3d83e-c1a2-449a-b95b-8edbf92f1d42",
    "nodeType": "Document",
    "color": "#9b59b6",
    "icon": "file",
    "createDateTimeUTC": "2023-12-05T00:00:00",
    "children": [],
    "peopleWithAccess": [
      {
        "uid": "user1",
        "username": "owner A"
      },
      {
        "uid": "user3",
        "username": "owner C"
      }
    ]
  },
  {
    "uid": "db93bc4c-c84f-4a44-aaed-8c8bc8e8748f",
    "name": "doc4",
    "owner": {
      "uid": "user3",
      "username": "owner C"
    },
    "parentNodeUid": "fada7a0f-5f58-4b0a-b857-009ffaddd90f",
    "nodeType": "Document",
    "color": "#f39c12",
    "icon": "file",
    "createDateTimeUTC": "2023-12-06T00:00:00",
    "children": [],
    "peopleWithAccess": [
      {
        "uid": "user2",
        "username": "owner B"
      },
      {
        "uid": "user3",
        "username": "owner C"
      }
    ]
  },
  {
    "uid": "81038b8b-b436-44a6-b53d-bc7e97b2a4ea",
    "name": "doc2",
    "owner": {
      "uid": "user1",
      "username": "owner A"
    },
    "parentNodeUid": null,
    "nodeType": "Document",
    "color": "#e74c3c",
    "icon": "file",
    "createDateTimeUTC": "2023-12-07T00:00:00",
    "children": [],
    "peopleWithAccess": [
      {
        "uid": "user2",
        "username": "owner B"
      }
    ]
  },
  {
    "uid": "19cde0c5-0a69-4a22-829e-c554c98bcea6",
    "name": "doc3",
    "owner": {
      "uid": "user2",
      "username": "owner B"
    },
    "parentNodeUid": null,
    "nodeType": "Document",
    "color": "#3498db",
    "icon": "file",
    "createDateTimeUTC": "2023-12-08T00:00:00",
    "peopleWithAccess": [],
    "children":[]
  },
  {
    "uid": "pqr678",
    "name": "New Folder 1",
    "owner": {
      "uid": "user1",
      "username": "owner A"
    },
    "parentNodeUid": null,
    "nodeType": "Folder",
    "color": "#3498db",
    "icon": "folder",
    "createDateTimeUTC": "2023-12-09T00:00:00",
    "children": [],
    "peopleWithAccess": []
  },
  {
    "uid": "stu901",
    "name": "New Document 1",
    "owner": {
      "uid": "user1",
      "username": "owner A"
    },
    "parentNodeUid": "pqr678",
    "nodeType": "Document",
    "color": "#e74c3c",
    "icon": "file",
    "createDateTimeUTC": "2023-12-10T00:00:00",
    "children": [],
    "peopleWithAccess": []
  },
  {
    "uid": "ghi789",
    "name": "New Document 2",
    "owner": {
      "uid": "user1",
      "username": "owner A"
    },
    "parentNodeUid": "jkl012",
    "nodeType": "Document",
    "color": "#0000ff",
    "icon": "file",
    "createDateTimeUTC": "2023-12-11T00:00:00",
    "children": [],
    "peopleWithAccess": [
      {
        "uid": "user2",
        "username": "owner B"
      },
      {
        "uid": "user3",
        "username": "owner C"
      },
    ]
  },
  {
    "uid": "jkl012",
    "name": "New Folder 2",
    "owner": {
      "uid": "user1",
      "username": "owner A"
    },
    "parentNodeUid": "pqr678",
    "nodeType": "Folder",
    "color": "#ff00ff",
    "icon": "folder",
    "createDateTimeUTC": "2023-12-12T00:00:00",
    "children": [],
    "peopleWithAccess": [
      {
        "uid": "user2",
        "username": "owner B"
      }
    ]
  },
  {
    "uid": "mno345",
    "name": "New Document 3",
    "owner": {
      "uid": "user1",
      "username": "owner A"
    },
    "parentNodeUid": null,
    "nodeType": "Document",
    "color": "#ffff00",
    "icon": "file",
    "createDateTimeUTC": "2023-12-13T00:00:00",
    "children": [],
    "peopleWithAccess": []
  },
  {
    "uid": "gpd731",
    "name": "Document 7",
    "owner": {
      "uid": "user2",
      "username": "owner B"
    },
    "parentNodeUid": null,
    "nodeType": "Document",
    "color": "#ffff00",
    "icon": "file",
    "createDateTimeUTC": "2023-12-13T00:00:00",
    "children": [],
    "peopleWithAccess": [
      {
        "uid": "user1",
        "username": "owner A"
      }
    ]
  }
];
