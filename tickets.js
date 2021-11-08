const originalTickets = [
  {
    "id": 1,
    "ticketHolderFirstName": "Ryon",
    "ticketHolderLastName": "Forsdyke",
    "ticketHolderEmail": "rforsdyke0@cnet.com",
    "ticketCheckInDateTime": null,
    "ticketCheckedIn": false,
    "ticketNumber": "4097633988"
  },
  {
    "id": 2,
    "ticketHolderFirstName": "Kirk",
    "ticketHolderLastName": "Bandey",
    "ticketHolderEmail": "kbandey1@seesaa.net",
    "ticketCheckInDateTime": null,
    "ticketCheckedIn": false,
    "ticketNumber": "2999291515"
  },
  {
    "id": 3,
    "ticketHolderFirstName": "Golda",
    "ticketHolderLastName": "Mulvenna",
    "ticketHolderEmail": "gmulvenna2@answers.com",
    "ticketCheckInDateTime": null,
    "ticketCheckedIn": false,
    "ticketNumber": "0871567083"
  },
  {
    "id": 4,
    "ticketHolderFirstName": "Krystle",
    "ticketHolderLastName": "Croad",
    "ticketHolderEmail": "kcroad3@sina.com.cn",
    "ticketCheckInDateTime": null,
    "ticketCheckedIn": false,
    "ticketNumber": "7479078455"
  },
  {
    "id": 5,
    "ticketHolderFirstName": "Fan",
    "ticketHolderLastName": "MacCracken",
    "ticketHolderEmail": "fmaccracken4@yelp.com",
    "ticketCheckInDateTime": null,
    "ticketCheckedIn": false,
    "ticketNumber": "0425974553"
  },
  {
    "id": 6,
    "ticketHolderFirstName": "Vanni",
    "ticketHolderLastName": "Gregorace",
    "ticketHolderEmail": "vgregorace5@photobucket.com",
    "ticketCheckInDateTime": null,
    "ticketCheckedIn": false,
    "ticketNumber": "0247985007"
  },
  {
    "id": 7,
    "ticketHolderFirstName": "Waneta",
    "ticketHolderLastName": "Walding",
    "ticketHolderEmail": "wwalding6@wp.com",
    "ticketCheckInDateTime": null,
    "ticketCheckedIn": false,
    "ticketNumber": "0215311892"
  },
  {
    "id": 8,
    "ticketHolderFirstName": "Giffer",
    "ticketHolderLastName": "Maymond",
    "ticketHolderEmail": "gmaymond7@usda.gov",
    "ticketCheckInDateTime": null,
    "ticketCheckedIn": false,
    "ticketNumber": "7132944606"
  },
  {
    "id": 9,
    "ticketHolderFirstName": "Quincey",
    "ticketHolderLastName": "Skews",
    "ticketHolderEmail": "qskews8@seattletimes.com",
    "ticketCheckInDateTime": null,
    "ticketCheckedIn": false,
    "ticketNumber": "8764291405"
  },
  {
    "id": 10,
    "ticketHolderFirstName": "Ilario",
    "ticketHolderLastName": "Trayling",
    "ticketHolderEmail": "itrayling9@nymag.com",
    "ticketCheckInDateTime": null,
    "ticketCheckedIn": false,
    "ticketNumber": "6275407573"
  },
  {
    "id": 11,
    "ticketHolderFirstName": "Tommi",
    "ticketHolderLastName": "Rustadge",
    "ticketHolderEmail": "trustadgea@issuu.com",
    "ticketCheckInDateTime": null,
    "ticketCheckedIn": false,
    "ticketNumber": "3902207116"
  },
  {
    "id": 12,
    "ticketHolderFirstName": "Hank",
    "ticketHolderLastName": "York",
    "ticketHolderEmail": "hyorkb@buzzfeed.com",
    "ticketCheckInDateTime": null,
    "ticketCheckedIn": false,
    "ticketNumber": "0679806199"
  },
  {
    "id": 13,
    "ticketHolderFirstName": "Zedekiah",
    "ticketHolderLastName": "Bountiff",
    "ticketHolderEmail": "zbountiffc@hhs.gov",
    "ticketCheckInDateTime": null,
    "ticketCheckedIn": false,
    "ticketNumber": "9286412142"
  },
  {
    "id": 14,
    "ticketHolderFirstName": "Clemmie",
    "ticketHolderLastName": "Follows",
    "ticketHolderEmail": "cfollowsd@simplemachines.org",
    "ticketCheckInDateTime": null,
    "ticketCheckedIn": false,
    "ticketNumber": "8165707426"
  },
  {
    "id": 15,
    "ticketHolderFirstName": "Massimiliano",
    "ticketHolderLastName": "Fishleigh",
    "ticketHolderEmail": "mfishleighe@nps.gov",
    "ticketCheckInDateTime": null,
    "ticketCheckedIn": false,
    "ticketNumber": "3688996984"
  },
  {
    "id": 16,
    "ticketHolderFirstName": "Gigi",
    "ticketHolderLastName": "Stiger",
    "ticketHolderEmail": "gstigerf@list-manage.com",
    "ticketCheckInDateTime": null,
    "ticketCheckedIn": false,
    "ticketNumber": "1162692413"
  },
  {
    "id": 17,
    "ticketHolderFirstName": "Perice",
    "ticketHolderLastName": "Prodrick",
    "ticketHolderEmail": "pprodrickg@reuters.com",
    "ticketCheckInDateTime": null,
    "ticketCheckedIn": false,
    "ticketNumber": "5649587477"
  },
  {
    "id": 18,
    "ticketHolderFirstName": "Yolanthe",
    "ticketHolderLastName": "de Courcy",
    "ticketHolderEmail": "ydecourcyh@smh.com.au",
    "ticketCheckInDateTime": null,
    "ticketCheckedIn": false,
    "ticketNumber": "7935200238"
  },
  {
    "id": 19,
    "ticketHolderFirstName": "Chauncey",
    "ticketHolderLastName": "Stickels",
    "ticketHolderEmail": "cstickelsi@altervista.org",
    "ticketCheckInDateTime": null,
    "ticketCheckedIn": false,
    "ticketNumber": "4865475621"
  },
  {
    "id": 20,
    "ticketHolderFirstName": "Anatole",
    "ticketHolderLastName": "Izchaki",
    "ticketHolderEmail": "aizchakij@kickstarter.com",
    "ticketCheckInDateTime": null,
    "ticketCheckedIn": false,
    "ticketNumber": "2753844771"
  },
]