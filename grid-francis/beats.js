// beats.js

var BEATS = [
      1.0490000248,
      1.5290000439,
      1.9970000982,
      2.4690001011,
      2.9330000877,
      3.3970000744,
      3.853000164,
      4.2930002213,
      4.8050003052,
      5.2690005302,
      5.7410001755,
      6.2130002975,
      6.6730003357,
      7.1290006638,
      7.5970005989,
      8.0570001602,
      8.5130004883,
      8.9890003204,
      9.4689998627,
      9.9370002747,
      10.401000023,
      10.864999771,
      11.329000473,
      11.817000389,
      12.296999931,
      12.773000717,
      13.241000175,
      13.713000298,
      14.169000626,
      14.61700058,
      15.077000618,
      15.541000366,
      16.029001236,
      16.497001648,
      16.96900177,
      17.437002182,
      17.901000977,
      18.365001678,
      18.825000763,
      19.281002045,
      19.737001419,
      20.237001419,
      20.713001251,
      21.169002533,
      21.641000748,
      22.10900116,
      22.577001572,
      23.057001114,
      23.509000778,
      23.985002518,
      24.46100235,
      24.921001434,
      25.393001556,
      25.845001221,
      26.301002502,
      26.801002502,
      27.265001297,
      27.737001419,
      28.205001831,
      28.669002533,
      29.145002365,
      29.617002487,
      30.081001282,
      30.553001404,
      31.009002686,
      31.485002518,
      31.96100235,
      32.417003632,
      32.897003174,
      33.393001556,
      33.845001221,
      34.289001465,
      34.761001587,
      35.237003326,
      35.713001251,
      36.17300415,
      36.645000458,
      37.10900116,
      37.577003479,
      38.053001404,
      38.509002686,
      38.98500061,
      39.457000732,
      39.917003632,
      40.393001556,
      40.857002258,
      41.325000763,
      41.801002502,
      42.261001587,
      42.733001709,
      43.213001251,
      43.669002533,
      44.145004272,
      44.617004395,
      45.077003479,
      45.553001404,
      46.009002686,
      46.485004425,
      46.96100235,
      47.417003632,
      47.893001556,
      48.361003876,
      48.825004578,
      49.301002502,
      49.757003784,
      50.229003906,
      50.697002411,
      51.16500473,
      51.641002655,
      52.109004974,
      52.577003479,
      53.045001984,
      53.509002686,
      53.985004425,
      54.457004547,
      54.917003632,
      55.393001556,
      55.857002258,
      56.32100296,
      56.789001465,
      57.257003784,
      57.733001709,
      58.201004028,
      58.66500473,
      59.141002655,
      59.609004974,
      60.077003479,
      60.549003601,
      61.009002686,
      61.485004425,
      61.957004547,
      62.417003632,
      62.893005371,
      63.357002258,
      63.825004578,
      64.2970047,
      64.761001587,
      65.233001709,
      65.701004028,
      66.165000916,
      66.64100647,
      67.10900116,
      67.577003479,
      68.049003601,
      68.509002686,
      68.98500061,
      69.457000732,
      69.917007446,
      70.393005371,
      70.857002258,
      71.325004578,
      71.793006897,
      72.257003784,
      72.733001709,
      73.205001831,
      73.665000916,
      74.14100647,
      74.60900116,
      75.077003479,
      75.549003601,
      76.009002686,
      76.48500061,
      76.961006165,
      77.421005249,
      77.893005371,
      78.353004456,
      78.825004578,
      79.285003662,
      79.753005981,
      80.209007263,
      80.681007385,
      81.145004272,
      81.637001038,
      82.097007751,
      82.561004639,
      83.025001526,
      83.50100708,
      83.957008362,
      84.433006287,
      84.893005371,
      85.381004333,
      85.845001221,
      86.317001343,
      86.777008057,
      87.249008179,
      87.709007263,
      88.181007385,
      88.64100647,
      89.129005432,
      89.593002319,
      90.069007874,
      90.529006958,
      91.005004883,
      91.457008362,
      91.933006287,
      92.393005371,
      92.885002136,
      93.34500885,
      93.821006775,
      94.277008057,
      94.741004944,
      95.205001831,
      95.681007385,
      96.145004272,
      96.64100647,
      97.097007751,
      97.573005676,
      98.029006958,
      98.505004883,
      98.961006165,
      99.433006287,
      99.893005371,
      100.38500214,
      100.84500885,
      101.30500793,
      101.77700806,
      102.25300598,
      102.70900726,
      103.18500519,
      103.65700531,
      104.14100647,
      104.59700775,
      105.06900787,
      105.52900696,
      106.00500488,
      106.45700836,
      106.93300629,
      107.39300537,
      107.88500214,
      108.34500885,
      108.82100677,
      109.27700806,
      109.76100922,
      110.23300934,
      110.70900726,
      111.16900635,
      111.64100647,
      112.10900879,
      112.57700348,
      113.0490036,
      113.50900269,
      113.98500824,
      114.45700836,
      114.91700745,
      115.39300537,
      115.85700989,
      116.32500458,
      116.8010025,
      117.26500702,
      117.73700714,
      118.21300507,
      118.66900635,
      119.14500427,
      119.61700439,
      120.07700348,
      120.55300903,
      121.00900269,
      121.48500824,
      121.96100616,
      122.41700745,
      122.89300537,
      123.35700989,
      123.82500458,
      124.30101013,
      124.75700378,
      125.22900391,
      125.69700623,
      126.16500854,
      126.64100647,
      127.10900879,
      127.57700348,
      128.04901123,
      128.51300049,
      128.98500061,
      129.45700073,
      129.91700745,
      130.39300537,
      130.85700989,
      131.32501221,
      131.79299927,
      132.25700378,
      132.73300171,
      133.20100403,
      133.66500854,
      134.14100647,
      134.60900879,
      135.07701111,
      135.54901123,
      136.00900269,
      136.48500061,
      136.95700073,
      137.41700745,
      137.89300537,
      138.36100769,
      138.82901001,
      139.30101013,
      139.76100159,
      140.23300171,
      140.70100403,
      141.16500854,
      141.64100647,
      142.10900879,
      142.57701111,
      143.04901123,
      143.50900269,
      143.98500061,
      144.45700073,
      144.91700745,
      145.39300537,
      145.85700989,
      146.32501221,
      146.79301453,
      147.25700378,
      147.73300171,
      148.20500183,
      148.66500854,
      149.14100647,
      149.60900879,
      150.07701111,
      150.54901123,
      151.00900269,
      151.48500061,
      151.96101379,
      152.42100525,
      152.89300537,
      153.35700989,
      153.83300781,
      154.30500793,
      154.80500793,
      155.25700378,
      155.7170105,
      156.18501282,
      156.64900208,
      157.1210022,
      157.58500671,
      158.04901123,
      158.50900269,
      158.9730072,
      159.44900513,
      159.91700745,
      160.39300537,
      160.85700989,
      161.32901001,
      161.80500793,
      162.26901245,
      162.73300171,
      163.20901489,
      163.66900635,
      164.14100647,
      164.60501099,
      165.07701111,
      165.55300903,
      166.00900269,
      166.48501587,
      166.96101379,
      167.42100525,
      167.89300537,
      168.36500549,
      168.82901001,
      169.30101013,
      169.76501465,
      170.23701477,
      170.7130127,
      171.17700195,
      171.64500427,
      172.11300659,
      172.57701111,
      173.04901123,
      173.50900269,
      173.98501587,
      174.46101379,
      174.92500305,
      175.39300537,
      175.85700989,
      176.32501221,
      176.80101013,
      177.26501465,
      177.73701477,
      178.2130127,
      178.66900635,
      179.14500427,
      179.61700439,
      180.07701111,
      180.54901123,
      181.00900269,
      181.48501587,
      181.96101379,
      182.42100525,
      182.89300537,
      183.36500549,
      183.82501221,
      184.30101013,
      184.75700378,
      185.22900391,
      185.69700623,
      186.16500854,
      186.64100647,
      187.10900879,
      187.57701111,
      188.04501343,
      188.50900269,
      188.98501587,
      189.45701599,
      189.91700745,
      190.39300537,
      190.85700989,
      191.3210144,
      191.78901672,
      192.25700378,
      192.73301697,
      193.20100403,
      193.66500854,
      194.14100647,
      194.60900879,
      195.07701111,
      195.54901123,
      196.00900269,
      196.48501587,
      196.95701599,
      197.41700745,
      197.89300537,
      198.36100769,
      198.82901001,
      199.30101013,
      199.76101685,
      200.23301697,
      200.70100403,
      201.16500854,
      201.64100647,
      202.10900879,
      202.57701111,
      203.04901123,
      203.51301575,
      203.98501587,
      204.45701599,
      204.91700745,
      205.39300537,
      205.85700989,
      206.32501221,
      206.79301453,
      207.25700378,
      207.73301697,
      208.20501709,
      208.66500854,
      209.14100647,
      209.60900879,
      210.07701111,
      210.54901123,
      211.00901794,
      211.48501587,
      211.96101379,
      212.42100525,
      212.89300537,
      213.35301208,
      213.82901001,
      214.30500793,
      214.77700806
    ]