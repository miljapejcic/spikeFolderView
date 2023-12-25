export const FlatNodes = [
    {
      "uid": "1",
      "name": "Folder 1",
      "createDateTime": "2023-01-01T10:00:00",
      "path": "/root/Folder1",
      "owner": { "username": "user1", "uid": "u1" },
      "parentNodeUid": null,
      "color": "#3498db",
      "icon": "folder",
      "nodeType": "Folder",
      "peopleWithAccess": [
        { "username": "user2", "uid": "u2" },
        { "username": "user3", "uid": "u3" }
      ]
    },
    {
      "uid": "2",
      "name": "Document 1",
      "createDateTime": "2023-02-15T14:30:00",
      "path": "/root/Folder1/Document1",
      "owner": { "username": "user2", "uid": "u2" },
      "parentNodeUid": "1",
      "color": "#e74c3c",
      "icon": "file",
      "nodeType": "Document",
      "peopleWithAccess": [
        { "username": "user1", "uid": "u1" },
        { "username": "user3", "uid": "u3" }
      ]
    },
    {
      "uid": "3",
      "name": "Folder 2",
      "createDateTime": "2023-03-10T09:45:00",
      "path": "/root/Folder2",
      "owner": { "username": "user3", "uid": "u3" },
      "parentNodeUid": null,
      "color": "#2ecc71",
      "icon": "folder",
      "nodeType": "Folder",
      "peopleWithAccess": [
        { "username": "user1", "uid": "u1" },
        { "username": "user2", "uid": "u2" }
      ]
    },
    {
      "uid": "4",
      "name": "Document 2",
      "createDateTime": "2023-04-05T12:15:00",
      "path": "/root/Folder2/Document2",
      "owner": { "username": "user1", "uid": "u1" },
      "parentNodeUid": "3",
      "color": "#9b59b6",
      "icon": "file",
      "nodeType": "Document",
      "peopleWithAccess": [
        { "username": "user2", "uid": "u2" },
        { "username": "user3", "uid": "u3" }
      ]
    },
    {
      "uid": "5",
      "name": "Folder 3",
      "createDateTime": "2023-05-20T16:00:00",
      "path": "/root/Folder3",
      "owner": { "username": "user2", "uid": "u2" },
      "parentNodeUid": null,
      "color": "#f39c12",
      "icon": "folder",
      "nodeType": "Folder",
      "peopleWithAccess": [
        { "username": "user1", "uid": "u1" },
        { "username": "user3", "uid": "u3" }
      ]
    }
  ]
  