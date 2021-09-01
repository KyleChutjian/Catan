const roads = [
    {
        "index": 0,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [0],
        connectedSettlements: [0, 3],
        attachedRoads: [1, 6],
        connectedRoads: []
    },
    {
        "index": 1,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [0],
        connectedSettlements: [0, 4],
        attachedRoads: [0, 2, 7],
        connectedRoads: []
    },
    {
        "index": 2,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [1],
        connectedSettlements: [1, 4],
        attachedRoads: [1, 3, 7],
        connectedRoads: []
    },
    {
        "index": 3,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [1],
        connectedSettlements: [1, 5],
        attachedRoads: [2, 4, 8],
        connectedRoads: []
    },
    {
        "index": 4,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [2],
        connectedSettlements: [2, 5],
        attachedRoads: [3, 5, 8],
        connectedRoads: []
    },
    {
        "index": 5,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [2],
        connectedSettlements: [2, 6],
        attachedRoads: [4, 9],
        connectedRoads: []
    },
    {
        "index": 6,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [0],
        connectedSettlements: [3, 7],
        attachedRoads: [0, 10, 11],
        connectedRoads: []
    },
    {
        "index": 7,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [0, 1],
        connectedSettlements: [4, 8],
        attachedRoads: [1, 2, 12, 13],
        connectedRoads: []
    },
    {
        "index": 8,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [1, 2],
        connectedSettlements: [5, 9],
        attachedRoads: [3, 4, 14, 15],
        connectedRoads: []
    },
    {
        "index": 9,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [2],
        connectedSettlements: [6, 10],
        attachedRoads: [5, 16, 17],
        connectedRoads: []
    },
    {
        "index": 10,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [3],
        connectedSettlements: [7, 11],
        attachedRoads: [6, 11, 18],
        connectedRoads: []
    },
    {
        "index": 11,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [0, 3],
        connectedSettlements: [7, 12],
        attachedRoads: [6, 10, 12, 19],
        connectedRoads: []
    },
    {
        "index": 12,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [0, 4],
        connectedSettlements: [8, 12],
        attachedRoads: [7, 11, 13, 19],
        connectedRoads: []
    },
    {
        "index": 13,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [1, 4],
        connectedSettlements: [8, 13],
        attachedRoads: [7, 12, 14, 20],
        connectedRoads: []
    },
    {
        "index": 14,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [1, 5],
        connectedSettlements: [9, 13],
        attachedRoads: [8, 13, 15, 20],
        connectedRoads: []
    },
    {
        "index": 15,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [2, 5],
        connectedSettlements: [9, 14],
        attachedRoads: [8, 14, 16, 21],
        connectedRoads: []
    },
    {
        "index": 16,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [2, 6],
        connectedSettlements: [10, 14],
        attachedRoads: [9, 15, 17, 21],
        connectedRoads: []
    },
    {
        "index": 17,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [6],
        connectedSettlements: [10, 15],
        attachedRoads: [9, 16, 22],
        connectedRoads: []
    },
    {
        "index": 18,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [3],
        connectedSettlements: [11, 16],
        attachedRoads: [10, 23, 24],
        connectedRoads: []
    },
    {
        "index": 19,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [3, 4],
        connectedSettlements: [12, 17],
        attachedRoads: [11, 12, 25, 26],
        connectedRoads: []
    },
    {
        "index": 20,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [4, 5],
        connectedSettlements: [13, 18],
        attachedRoads: [13, 14, 27, 28],
        connectedRoads: []
    },
    {
        "index": 21,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [5, 6],
        connectedSettlements: [14, 19],
        attachedRoads: [15, 16, 29, 30],
        connectedRoads: []
    },
    {
        "index": 22,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [6],
        connectedSettlements: [15, 20],
        attachedRoads: [17, 31, 32],
        connectedRoads: []
    },
    {
        "index": 23,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [7],
        connectedSettlements: [16, 21],
        attachedRoads: [18, 24, 33],
        connectedRoads: []
    },
    {
        "index": 24,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [3, 7],
        connectedSettlements: [16, 22],
        attachedRoads: [18, 23, 25, 34],
        connectedRoads: []
    },
    {
        "index": 25,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [3, 8],
        connectedSettlements: [17, 22],
        attachedRoads: [19, 24, 26, 34],
        connectedRoads: []
    },
    {
        "index": 26,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [4, 8],
        connectedSettlements: [19, 25, 27, 35],
        attachedRoads: [],
        connectedRoads: []
    },
    {
        "index": 27,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [4, 9],
        connectedSettlements: [18, 23],
        attachedRoads: [20, 26, 28, 35],
        connectedRoads: []
    },
    {
        "index": 28,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [5, 9],
        connectedSettlements: [18, 24],
        attachedRoads: [20, 27, 29, 36],
        connectedRoads: []
    },
    {
        "index": 29,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [5, 10],
        connectedSettlements: [19, 24],
        attachedRoads: [21, 28, 30, 36],
        connectedRoads: []
    },
    {
        "index": 30,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [6, 10],
        connectedSettlements: [19, 25],
        attachedRoads: [21, 29, 31, 37],
        connectedRoads: []
    },
    {
        "index": 31,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [6, 11],
        connectedSettlements: [20, 25],
        attachedRoads: [22, 30, 32, 37],
        connectedRoads: []
    },
    {
        "index": 32,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [11],
        connectedSettlements: [20, 26],
        attachedRoads: [22, 31, 38],
        connectedRoads: []
    },
    {
        "index": 33,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [7],
        connectedSettlements: [21, 27],
        attachedRoads: [23, 39],
        connectedRoads: []
    },
    {
        "index": 34,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [7, 8],
        connectedSettlements: [22, 28],
        attachedRoads: [24, 25, 40, 41],
        connectedRoads: []
    },
    {
        "index": 35,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [8, 9],
        connectedSettlements: [23, 29],
        attachedRoads: [26, 27, 42, 43],
        connectedRoads: []
    },
    {
        "index": 36,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [9, 10],
        connectedSettlements: [24, 30],
        attachedRoads: [28, 29, 44, 45],
        connectedRoads: []
    },
    {
        "index": 37,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [10, 11],
        connectedSettlements: [25, 31],
        attachedRoads: [30, 31, 46, 47],
        connectedRoads: []
    },
    {
        "index": 38,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [11],
        connectedSettlements: [26, 32],
        attachedRoads: [32, 48],
        connectedRoads: []
    },
    {
        "index": 39,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [7],
        connectedSettlements: [27, 33],
        attachedRoads: [33, 40, 49],
        connectedRoads: []
    },
    {
        "index": 40,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [7, 12],
        connectedSettlements: [28, 33],
        attachedRoads: [34, 39, 41, 49],
        connectedRoads: []
    },
    {
        "index": 41,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [8, 12],
        connectedSettlements: [28, 34],
        attachedRoads: [34, 40, 42, 50],
        connectedRoads: []
    },
    {
        "index": 42,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [8, 13],
        connectedSettlements: [29, 34],
        attachedRoads: [35, 41, 43, 50],
        connectedRoads: []
    },
    {
        "index": 43,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [9, 13],
        connectedSettlements: [29, 35],
        attachedRoads: [35, 42, 44, 51],
        connectedRoads: []
    },
    {
        "index": 44,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [9, 14],
        connectedSettlements: [30, 35],
        attachedRoads: [36, 43, 45, 51],
        connectedRoads: []
    },
    {
        "index": 45,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [10, 14],
        connectedSettlements: [30, 36],
        attachedRoads: [36, 44, 46, 52],
        connectedRoads: []
    },
    {
        "index": 46,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [10, 15],
        connectedSettlements: [31, 36],
        attachedRoads: [37, 45, 47, 52],
        connectedRoads: []
    },
    {
        "index": 47,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [11, 15],
        connectedSettlements: [31, 37],
        attachedRoads: [37, 46, 48, 53],
        connectedRoads: []
    },
    {
        "index": 48,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [11],
        connectedSettlements: [32, 37],
        attachedRoads: [38, 47, 53],
        connectedRoads: []
    },
    {
        "index": 49,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [12],
        connectedSettlements: [33, 38],
        attachedRoads: [39, 40, 54],
        connectedRoads: []
    },
    {
        "index": 50,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [12, 13],
        connectedSettlements: [34, 39],
        attachedRoads: [41, 42, 55, 56],
        connectedRoads: []
    },
    {
        "index": 51,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [13, 14],
        connectedSettlements: [35, 40],
        attachedRoads: [43, 43, 57, 58],
        connectedRoads: []
    },
    {
        "index": 52,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [14, 15],
        connectedSettlements: [36, 41],
        attachedRoads: [45, 46, 59, 60],
        connectedRoads: []
    },
    {
        "index": 53,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [15],
        connectedSettlements: [37, 42],
        attachedRoads: [47, 48, 61],
        connectedRoads: []
    },
    {
        "index": 54,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [12],
        connectedSettlements: [38, 43],
        attachedRoads: [49, 55, 62],
        connectedRoads: []
    },
    {
        "index": 55,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [12, 16],
        connectedSettlements: [39, 43],
        attachedRoads: [50, 54, 56, 62],
        connectedRoads: []
    },
    {
        "index": 56,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [13, 16],
        connectedSettlements: [39, 44],
        attachedRoads: [50, 55, 57, 63],
        connectedRoads: []
    },
    {
        "index": 57,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [13, 17],
        connectedSettlements: [40, 44],
        attachedRoads: [51, 56, 58, 63],
        connectedRoads: []
    },
    {
        "index": 58,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [14, 17],
        connectedSettlements: [40, 45],
        attachedRoads: [51, 57, 59, 64],
        connectedRoads: []
    },
    {
        "index": 59,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [14, 18],
        connectedSettlements: [41, 45],
        attachedRoads: [52, 58, 69, 64],
        connectedRoads: []
    },
    {
        "index": 60,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [15, 18],
        connectedSettlements: [41, 46],
        attachedRoads: [52, 59, 61, 65],
        connectedRoads: []
    },
    {
        "index": 61,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [15],
        connectedSettlements: [42, 46],
        attachedRoads: [53, 60, 65],
        connectedRoads: []
    },
    {
        "index": 62,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [16],
        connectedSettlements: [43, 47],
        attachedRoads: [54, 55, 66],
        connectedRoads: []
    },
    {
        "index": 63,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [16, 17],
        connectedSettlements: [44, 48],
        attachedRoads: [56, 57, 67, 68],
        connectedRoads: []
    },
    {
        "index": 64,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [17, 18],
        connectedSettlements: [45, 49],
        attachedRoads: [58, 59, 69, 70],
        connectedRoads: []
    },
    {
        "index": 65,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [18],
        connectedSettlements: [46, 50],
        attachedRoads: [60, 61, 71],
        connectedRoads: []
    },
    {
        "index": 66,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [16],
        connectedSettlements: [47, 51],
        attachedRoads: [62, 67],
        connectedRoads: []
    },
    {
        "index": 67,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [16],
        connectedSettlements: [48, 51],
        attachedRoads: [63, 66, 68],
        connectedRoads: []
    },
    {
        "index": 68,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [17],
        connectedSettlements: [48, 52],
        attachedRoads: [63, 67, 69],
        connectedRoads: []
    },
    {
        "index": 69,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [17],
        connectedSettlements: [49, 52],
        attachedRoads: [64, 68, 70],
        connectedRoads: []
    },
    {
        "index": 70,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [18],
        connectedSettlements: [49, 53],
        attachedRoads: [64, 69, 70],
        connectedRoads: []
    },
    {
        "index": 71,
        isPossible: true,
        playerBuiltBy: 0,
        connectedTiles: [18],
        connectedSettlements: [50, 53],
        attachedRoads: [70, 65],
        connectedRoads: []
    }
]