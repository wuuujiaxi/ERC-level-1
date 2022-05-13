var APP_DATA = {
  "scenes": [
    {
      "id": "0-erc-level-1-near-escalator",
      "name": "ERC Level 1 Near Escalator",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -3.049062221130619,
        "pitch": -0.07090556853444419,
        "fov": 1.2634123859167636
      },
      "linkHotspots": [
        {
          "yaw": -1.7841174148530072,
          "pitch": 0.005785972348942181,
          "rotation": 8.63937979737193,
          "target": "1-erc-level-1-starbucks"
        },
        {
          "yaw": -2.6481021076046627,
          "pitch": 0.13392584432487098,
          "rotation": 0.7853981633974483,
          "target": "2-erc-level-1-tembusu-tree"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.08391482081866997,
          "pitch": -0.05658471322408509,
          "title": "Stephen Riady Centre",
          "text": "Located opposite the ERC, across the field."
        }
      ]
    },
    {
      "id": "1-erc-level-1-starbucks",
      "name": "ERC Level 1 Starbucks",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2634123859167636
      },
      "linkHotspots": [
        {
          "yaw": -0.5037860446533955,
          "pitch": 0.1508064348466025,
          "rotation": 11.780972450961727,
          "target": "0-erc-level-1-near-escalator"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.8583447127023849,
          "pitch": 0.39417447723846166,
          "title": "Vending machines",
          "text": "Beverages and snacks."
        }
      ]
    },
    {
      "id": "2-erc-level-1-tembusu-tree",
      "name": "ERC Level 1 Tembusu Tree",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -2.7807020907399984,
        "pitch": -0.13881006667074658,
        "fov": 1.2634123859167636
      },
      "linkHotspots": [
        {
          "yaw": -2.5672621893450547,
          "pitch": 0.031156688362969476,
          "rotation": 1.5707963267948966,
          "target": "0-erc-level-1-near-escalator"
        },
        {
          "yaw": 2.6384737676868326,
          "pitch": 0.04732886988416851,
          "rotation": 17.27875959474387,
          "target": "1-erc-level-1-starbucks"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.0771996878568508,
          "pitch": 0.2725118413195524,
          "title": "Under the tree",
          "text": "Great place for hang-outs."
        }
      ]
    }
  ],
  "name": "ERC Level 1 ",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
