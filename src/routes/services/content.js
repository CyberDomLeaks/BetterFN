const express = require("express")
const app = express.Router()
const path = require('path')
const config = require(path.join(__dirname, '../../config.json'))


app.get("/api/pages/fortnite-game", async (req, res) => {
    var season
    if (req.headers["user-agent"]) {
        try {
            season = req.headers["user-agent"].split("-")[1].split(".")[0]
            if (season == 10) season = "x"
        } catch {
            season = 2
        }
    } else season = 2

    res.json({
        "jcr:isCheckedOut": true,
        _title: "Fortnite Game",
        "jcr:baseVersion": "a7ca237317f1e7883b3279-c38f-4aa7-a325-e099e4bf71e5",
        _activeDate: "2017-08-30T03:20:48.050Z",
        lastModified: new Date(),
        _locale: "en-US",
        battleroyalenewsv2: {
            news: {
                motds: [
                    {
                        entryType: "Text",
                        image: "https://i.ibb.co/4VkLWZw/052c362c76c3ac3cecb11c2bc8bd596d.jpg",
                        tileImage: "https://i.ibb.co/4VkLWZw/052c362c76c3ac3cecb11c2bc8bd596d.jpg",
                        hidden: false,
                        videoMute: false,
                        tabTitleOverride: "BetterFN",
                        _type: "CommonUI Simple Message MOTD",
                        title: "BetterFN",
                        body: "Welcome to BetterFN, a private server created by Fevers and GamingBlueShell. Credits to Aurora and Rift for making this possible.",
                        videoLoop: false,
                        videoStreamingEnabled: false,
                        sortingPriority: 80,
                        id: `Aurora-News-0`,
                        spotlight: false
                     },
                     {
                        entryType: "Text",
                        image: "https://media.discordapp.net/attachments/813249754468581407/821860922813055051/55921609-8277-4979-86EE-F29FDA0F4225.png",
                        tileImage: "https://media.discordapp.net/attachments/813249754468581407/821860922813055051/55921609-8277-4979-86EE-F29FDA0F4225.png",
                        hidden: false,
                        videoMute: false,
                        tabTitleOverride: "SLL Bypass",
                        _type: "CommonUI Simple Message MOTD",
                        title: "SLL Bypass",
                        body: "Due to our SLL bypass being patched, there is only in-lobby support at this time. We are sorry for the inconvenience.",
                        videoLoop: false,
                        videoStreamingEnabled: false,
                        sortingPriority: 80,
                        id: `Aurora-News-0`,
                        spotlight: false
                    },
                     {
                     entryType: "Text",
                     image: "https://media.discordapp.net/attachments/813249754468581407/818994804137787402/okkkkk.png",
                     tileImage: "https://media.discordapp.net/attachments/813249754468581407/818994804137787402/okkkkk.png",
                     hidden: false,
                     videoMute: false,
                     tabTitleOverride: "Patch 3.0",
                     _type: "CommonUI Simple Message MOTD",
                     title: "Patch 3.0",
                     body: "Patch 3.0 notes: THE DEVICE EVENT SUPPORT! We have finally added The Device event support, meaning you can boot up v12.61, click the PLAY! button in the lobby, once in-game click F2 to start the event! Enjoy!",
                     videoLoop: false,
                     videoStreamingEnabled: false,
                     sortingPriority: 80,
                     id: `Aurora-News-0`,
                     spotlight: false
                 },
                 {
                  entryType: "Website",
                  image: "https://media.discordapp.net/attachments/813249754468581407/819180644197728266/our_discord.png",
                  tileImage: "https://media.discordapp.net/attachments/813249754468581407/819180644197728266/our_discord.png",
                  hidden: false,
                  videoMute: false,
                  tabTitleOverride: "Discord",
                  _type: "CommonUI Simple Message MOTD",
                  title: "Discord",
                  body: "Click the button below to join our Discord!",
                  videoLoop: false,
                  videoStreamingEnabled: false,
                  sortingPriority: 80,
                  id: `Aurora-News-0`,
                  websiteURL: "https://discord.gg/tnkumFcH4K",
                  websiteButtonText : "Join our discord here!",
                  spotlight: false
                 }
                ],
            }
        },
        emergencynotice: {
            news: {
                platform_messages: [],
                _type: "Battle Royale News",
                messages: [
                    {
                        hidden: false,
                        _type: "CommonUI Simple Message Base",
                        subgame: "br",
                        title: "BetterFN",
                        body: "BetterFN, a private server created by Fevers and GamingBlueShell. Credits to Aurora and Rift for making this possible.",
                        spotlight: true
                    }
                ]
            },
            _title: "emergencynotice",
            _activeDate: new Date(),
            lastModified: new Date(),
            _locale: "en-US"
        },
        dynamicbackgrounds: {
            "jcr:isCheckedOut": true,
            backgrounds: {
                backgrounds: [
                    {
                        stage: config.lobbybg,
                        _type: "DynamicBackground",
                        key: "lobby"
                    },
                    {
                        stage: config.seasonStage,
                        _type: "DynamicBackground",
                        key: "vault"
                    }
                ],
                "_type": "DynamicBackgroundList"
            },
            _title: "dynamicbackgrounds",
            _noIndex: false,
            "jcr:baseVersion": "a7ca237317f1e77f95d770-e4c1-4078-b0c3-e5d0ff33f600",
            _activeDate: new Date(),
            lastModified: new Date(),
            _locale: "en-US"
        },
        "shopSections":{
         "jcrisCheckedOut":true,
         "_title":"shop-sections",
         "sectionList":{
            "_type":"ShopSectionList",
            "sections":[
               {
                  "bSortOffersByOwnership":false,
                  "bShowIneligibleOffersIfGiftable":false,
                  "bEnableToastNotification":true,
                  "background":{
                     "_type":"DynamicBackground"
                  },
                  "_type":"ShopSection",
                  "landingPriority":95,
                  "bHidden":false,
                  "sectionId":"Kratos",
                  "bShowTimer":true,
                  "sectionDisplayName":"Kratos",
                  "bShowIneligibleOffers":true
               },
               {
                  "bSortOffersByOwnership":false,
                  "bShowIneligibleOffersIfGiftable":false,
                  "bEnableToastNotification":true,
                  "background":{
                     "_type":"DynamicBackground"
                  },
                  "_type":"ShopSection",
                  "landingPriority":100,
                  "bHidden":false,
                  "sectionId":"PizoLocker",
                  "bShowTimer":true,
                  "sectionDisplayName":"Pizo's Locker",
                  "bShowIneligibleOffers":true
               },
               {
                  "bSortOffersByOwnership":false,
                  "bShowIneligibleOffersIfGiftable":false,
                  "bEnableToastNotification":true,
                  "background":{
                     "_type":"DynamicBackground"
                  },
                  "_type":"ShopSection",
                  "landingPriority":100,
                  "bHidden":false,
                  "sectionId":"grefg",
                  "bShowTimer":true,
                  "sectionDisplayName":"TheGrefg",
                  "bShowIneligibleOffers":true
               },
               {
                  "bSortOffersByOwnership":false,
                  "bShowIneligibleOffersIfGiftable":false,
                  "bEnableToastNotification":true,
                  "background":{
                     "_type":"DynamicBackground"
                  },
                  "_type":"ShopSection",
                  "landingPriority":100,
                  "bHidden":false,
                  "sectionId":"tess",
                  "bShowTimer":true,
                  "sectionDisplayName":"Tess Bundle OwO UWU",
                  "bShowIneligibleOffers":true
               },
               {
                  "bSortOffersByOwnership":false,
                  "bShowIneligibleOffersIfGiftable":false,
                  "bEnableToastNotification":true,
                  "background":{
                     "_type":"DynamicBackground"
                  },
                  "_type":"ShopSection",
                  "landingPriority":100,
                  "bHidden":false,
                  "sectionId":"traviepattie",
                  "bShowTimer":true,
                  "sectionDisplayName":"Travis Scott - Updated!",
                  "bShowIneligibleOffers":true
               },
               {
                  "bSortOffersByOwnership":false,
                  "bShowIneligibleOffersIfGiftable":false,
                  "bEnableToastNotification":true,
                  "background":{
                     "_type":"DynamicBackground"
                  },
                  "_type":"ShopSection",
                  "landingPriority":100,
                  "bHidden":false,
                  "sectionId":"psyco",
                  "bShowTimer":true,
                  "sectionDisplayName":"Da gangnam style emote lol",
                  "bShowIneligibleOffers":true
               },
               {
                  "bSortOffersByOwnership":false,
                  "bShowIneligibleOffersIfGiftable":false,
                  "bEnableToastNotification":true,
                  "background":{
                     "_type":"DynamicBackground"
                  },
                  "_type":"ShopSection",
                  "landingPriority":100,
                  "bHidden":false,
                  "sectionId":"BenjyfishyLocker",
                  "bShowTimer":true,
                  "sectionDisplayName":"Benjyfishy's Locker",
                  "bShowIneligibleOffers":true
               },
               {
                  "bSortOffersByOwnership":false,
                  "bShowIneligibleOffersIfGiftable":false,
                  "bEnableToastNotification":true,
                  "background":{
                     "stage":"default",
                     "_type":"DynamicBackground",
                     "key":"vault"
                  },
                  "_type":"ShopSection",
                  "landingPriority":64,
                  "bHidden":false,
                  "sectionId":"lockerbundleslol",
                  "bShowTimer":true,
                  "sectionDisplayName":"Creator Locker Bundles",
                  "bShowIneligibleOffers":true
               },
               {
                  "bSortOffersByOwnership":false,
                  "bShowIneligibleOffersIfGiftable":false,
                  "bEnableToastNotification":true,
                  "background":{
                     "_type":"DynamicBackground"
                  },
                  "_type":"ShopSection",
                  "landingPriority":100,
                  "bHidden":false,
                  "sectionId":"NickEh30Locker",
                  "bShowTimer":true,
                  "sectionDisplayName":"NickEh30's Locker",
                  "bShowIneligibleOffers":true
               },
               {
                  "bSortOffersByOwnership":false,
                  "bShowIneligibleOffersIfGiftable":false,
                  "bEnableToastNotification":true,
                  "background":{
                     "_type":"DynamicBackground"
                  },
                  "_type":"ShopSection",
                  "landingPriority":50,
                  "bHidden":false,
                  "sectionId":"Featured",
                  "bShowTimer":true,
                  "sectionDisplayName":"BetterFN Shop",
                  "bShowIneligibleOffers":true
               },
               {
                  "bSortOffersByOwnership":false,
                  "bShowIneligibleOffersIfGiftable":false,
                  "bEnableToastNotification":true,
                  "background":{
                     "_type":"DynamicBackground"
                  },
                  "_type":"ShopSection",
                  "landingPriority":49,
                  "bHidden":false,
                  "sectionId":"Featured2",
                  "bShowTimer":false,
                  "bShowIneligibleOffers":true
               },
               {
                  "bSortOffersByOwnership":false,
                  "bShowIneligibleOffersIfGiftable":false,
                  "bEnableToastNotification":true,
                  "background":{
                     "_type":"DynamicBackground"
                  },
                  "_type":"ShopSection",
                  "landingPriority":60,
                  "bHidden":false,
                  "sectionId":"RepYourTeam",
                  "bShowTimer":true,
                  "sectionDisplayName":"Rep Your Team",
                  "bShowIneligibleOffers":true
               },
               {
                  "bSortOffersByOwnership":false,
                  "bShowIneligibleOffersIfGiftable":false,
                  "bEnableToastNotification":true,
                  "background":{
                     "_type":"DynamicBackground"
                  },
                  "_type":"ShopSection",
                  "landingPriority":59,
                  "bHidden":false,
                  "sectionId":"RepYourTeam2",
                  "bShowTimer":true,
                  "sectionDisplayName":"Rep Your Team",
                  "bShowIneligibleOffers":true
               },
               {
                  "bSortOffersByOwnership":false,
                  "bShowIneligibleOffersIfGiftable":false,
                  "bEnableToastNotification":true,
                  "background":{
                     "_type":"DynamicBackground"
                  },
                  "_type":"ShopSection",
                  "landingPriority":58,
                  "bHidden":false,
                  "sectionId":"Referees",
                  "bShowTimer":true,
                  "sectionDisplayName":"Referees",
                  "bShowIneligibleOffers":true
               },
               {
                  "bSortOffersByOwnership":false,
                  "bShowIneligibleOffersIfGiftable":false,
                  "bEnableToastNotification":true,
                  "background":{
                     "_type":"DynamicBackground"
                  },
                  "_type":"ShopSection",
                  "landingPriority":50,
                  "bHidden":false,
                  "sectionId":"Icons",
                  "bShowTimer":true,
                  "sectionDisplayName":"Icons",
                  "bShowIneligibleOffers":true
               },
               {
                  "bSortOffersByOwnership":false,
                  "bShowIneligibleOffersIfGiftable":false,
                  "bEnableToastNotification":true,
                  "background":{
                     "_type":"DynamicBackground"
                  },
                  "_type":"ShopSection",
                  "landingPriority":65,
                  "bHidden":false,
                  "sectionId":"CustomizeHero",
                  "bShowTimer":true,
                  "sectionDisplayName":"Customize Your Hero!",
                  "bShowIneligibleOffers":true
               },
               {
                  "bSortOffersByOwnership":false,
                  "bShowIneligibleOffersIfGiftable":false,
                  "bEnableToastNotification":true,
                  "background":{
                     "stage":"default",
                     "_type":"DynamicBackground",
                     "key":"vault"
                  },
                  "_type":"ShopSection",
                  "landingPriority":64,
                  "bHidden":false,
                  "sectionId":"HeroGear",
                  "bShowTimer":true,
                  "sectionDisplayName":"Hero Gear",
                  "bShowIneligibleOffers":true
               },
               {
                  "bSortOffersByOwnership":false,
                  "bShowIneligibleOffersIfGiftable":false,
                  "bEnableToastNotification":true,
                  "background":{
                     "stage":"default",
                     "_type":"DynamicBackground",
                     "key":"vault"
                  },
                  "_type":"ShopSection",
                  "landingPriority":65,
                  "bHidden":false,
                  "sectionId":"BannerBrigade",
                  "bShowTimer":true,
                  "sectionDisplayName":"Banner Brigade",
                  "bShowIneligibleOffers":true
               },
               {
                  "bSortOffersByOwnership":false,
                  "bShowIneligibleOffersIfGiftable":false,
                  "bEnableToastNotification":true,
                  "background":{
                     "stage":"default",
                     "_type":"DynamicBackground",
                     "key":"vault"
                  },
                  "_type":"ShopSection",
                  "landingPriority":64,
                  "bHidden":false,
                  "sectionId":"BannerGear",
                  "bShowTimer":true,
                  "sectionDisplayName":"Banner Gear",
                  "bShowIneligibleOffers":true
               },
               {
                  "bSortOffersByOwnership":false,
                  "bShowIneligibleOffersIfGiftable":false,
                  "bEnableToastNotification":true,
                  "background":{
                     "stage":"default",
                     "_type":"DynamicBackground",
                     "key":"vault"
                  },
                  "_type":"ShopSection",
                  "landingPriority":40,
                  "bHidden":false,
                  "sectionId":"Daily",
                  "bShowTimer":true,
                  "sectionDisplayName":"Daily",
                  "bShowIneligibleOffers":true
               },
               {
                  "bSortOffersByOwnership":false,
                  "bShowIneligibleOffersIfGiftable":false,
                  "bEnableToastNotification":true,
                  "background":{
                     "_type":"DynamicBackground"
                  },
                  "_type":"ShopSection",
                  "landingPriority":39,
                  "bHidden":false,
                  "sectionId":"Daily2",
                  "bShowTimer":true,
                  "bShowIneligibleOffers":true
               },
               {
                  "bSortOffersByOwnership":false,
                  "bShowIneligibleOffersIfGiftable":false,
                  "bEnableToastNotification":true,
                  "background":{
                     "_type":"DynamicBackground"
                  },
                  "_type":"ShopSection",
                  "landingPriority":95,
                  "bHidden":false,
                  "sectionId":"KratosB",
                  "bShowTimer":true,
                  "sectionDisplayName":"Kratos",
                  "bShowIneligibleOffers":true
               },
               {
                  "bSortOffersByOwnership":false,
                  "bShowIneligibleOffersIfGiftable":false,
                  "bEnableToastNotification":true,
                  "background":{
                     "stage":"default",
                     "_type":"DynamicBackground",
                     "key":"vault"
                  },
                  "_type":"ShopSection",
                  "landingPriority":60,
                  "bHidden":false,
                  "sectionId":"Special",
                  "bShowTimer":true,
                  "sectionDisplayName":"Special Offers",
                  "bShowIneligibleOffers":true
               },
               {
                  "bSortOffersByOwnership":false,
                  "bShowIneligibleOffersIfGiftable":false,
                  "bEnableToastNotification":true,
                  "background":{
                     "_type":"DynamicBackground"
                  },
                  "_type":"ShopSection",
                  "landingPriority":59,
                  "bHidden":false,
                  "sectionId":"Special2",
                  "bShowTimer":true,
                  "bShowIneligibleOffers":true
               },
               {
                  "bSortOffersByOwnership":false,
                  "bShowIneligibleOffersIfGiftable":false,
                  "bEnableToastNotification":true,
                  "background":{
                     "_type":"DynamicBackground"
                  },
                  "_type":"ShopSection",
                  "landingPriority":40,
                  "bHidden":false,
                  "sectionId":"Season",
                  "bShowTimer":true,
                  "sectionDisplayName":"'Tis the Season",
                  "bShowIneligibleOffers":true
               },
               {
                  "bSortOffersByOwnership":false,
                  "bShowIneligibleOffersIfGiftable":false,
                  "bEnableToastNotification":true,
                  "background":{
                     "_type":"DynamicBackground"
                  },
                  "_type":"ShopSection",
                  "landingPriority":39,
                  "bHidden":false,
                  "sectionId":"Season2",
                  "bShowTimer":true,
                  "bShowIneligibleOffers":true
               },
               {
                  "bSortOffersByOwnership":false,
                  "bShowIneligibleOffersIfGiftable":false,
                  "bEnableToastNotification":true,
                  "background":{
                     "_type":"DynamicBackground"
                  },
                  "_type":"ShopSection",
                  "landingPriority":38,
                  "bHidden":false,
                  "sectionId":"Season3",
                  "bShowTimer":true,
                  "bShowIneligibleOffers":true
               },
               {
                  "bSortOffersByOwnership":false,
                  "bShowIneligibleOffersIfGiftable":false,
                  "bEnableToastNotification":true,
                  "background":{
                     "_type":"DynamicBackground"
                  },
                  "_type":"ShopSection",
                  "landingPriority":95,
                  "bHidden":false,
                  "sectionId":"KratosC",
                  "bShowTimer":true,
                  "sectionDisplayName":"Kratos",
                  "bShowIneligibleOffers":true
               },
               {
                  "bSortOffersByOwnership":false,
                  "bShowIneligibleOffersIfGiftable":false,
                  "bEnableToastNotification":true,
                  "background":{
                     "_type":"DynamicBackground"
                  },
                  "_type":"ShopSection",
                  "landingPriority":100,
                  "bHidden":false,
                  "sectionId":"BenjyfishyLockerB",
                  "bShowTimer":true,
                  "sectionDisplayName":"Benjyfishy's Locker",
                  "bShowIneligibleOffers":true
               },
               {
                  "bSortOffersByOwnership":false,
                  "bShowIneligibleOffersIfGiftable":false,
                  "bEnableToastNotification":true,
                  "background":{
                     "_type":"DynamicBackground"
                  },
                  "_type":"ShopSection",
                  "landingPriority":100,
                  "bHidden":false,
                  "sectionId":"PizoLockerB",
                  "bShowTimer":true,
                  "sectionDisplayName":"Pizo's Locker",
                  "bShowIneligibleOffers":true
               },
               {
                  "bSortOffersByOwnership":false,
                  "bShowIneligibleOffersIfGiftable":false,
                  "bEnableToastNotification":true,
                  "background":{
                     "_type":"DynamicBackground"
                  },
                  "_type":"ShopSection",
                  "landingPriority":100,
                  "bHidden":false,
                  "sectionId":"NickEh30LockerB",
                  "bShowTimer":true,
                  "sectionDisplayName":"NickEh30's Locker",
                  "bShowIneligibleOffers":true
               },
               {
                  "bSortOffersByOwnership":false,
                  "bShowIneligibleOffersIfGiftable":false,
                  "bEnableToastNotification":true,
                  "background":{
                     "_type":"DynamicBackground"
                  },
                  "_type":"ShopSection",
                  "landingPriority":50,
                  "bHidden":false,
                  "sectionId":"IconsB",
                  "bShowTimer":true,
                  "sectionDisplayName":"Icons",
                  "bShowIneligibleOffers":true
               },
               {
                  "bSortOffersByOwnership":false,
                  "bShowIneligibleOffersIfGiftable":false,
                  "bEnableToastNotification":true,
                  "background":{
                     "_type":"DynamicBackground"
                  },
                  "_type":"ShopSection",
                  "landingPriority":60,
                  "bHidden":false,
                  "sectionId":"RepYourTeamB",
                  "bShowTimer":true,
                  "sectionDisplayName":"Rep Your Team",
                  "bShowIneligibleOffers":true
               },
               {
                  "bSortOffersByOwnership":false,
                  "bShowIneligibleOffersIfGiftable":false,
                  "bEnableToastNotification":true,
                  "background":{
                     "_type":"DynamicBackground"
                  },
                  "_type":"ShopSection",
                  "landingPriority":59,
                  "bHidden":false,
                  "sectionId":"RepYourTeam2B",
                  "bShowTimer":true,
                  "sectionDisplayName":"Rep Your Team",
                  "bShowIneligibleOffers":true
               },
               {
                  "bSortOffersByOwnership":false,
                  "bShowIneligibleOffersIfGiftable":false,
                  "bEnableToastNotification":true,
                  "background":{
                     "_type":"DynamicBackground"
                  },
                  "_type":"ShopSection",
                  "landingPriority":58,
                  "bHidden":false,
                  "sectionId":"RefereesB",
                  "bShowTimer":true,
                  "sectionDisplayName":"Referees",
                  "bShowIneligibleOffers":true
               },
               {
                  "bSortOffersByOwnership":false,
                  "bShowIneligibleOffersIfGiftable":false,
                  "bEnableToastNotification":true,
                  "background":{
                     "stage":"default",
                     "_type":"DynamicBackground",
                     "key":"vault"
                  },
                  "_type":"ShopSection",
                  "landingPriority":65,
                  "bHidden":false,
                  "sectionId":"StarWars",
                  "bShowTimer":true,
                  "sectionDisplayName":"Star Wars",
                  "bShowIneligibleOffers":true
               },
               {
                  "bSortOffersByOwnership":false,
                  "bShowIneligibleOffersIfGiftable":false,
                  "bEnableToastNotification":true,
                  "background":{
                     "_type":"DynamicBackground"
                  },
                  "_type":"ShopSection",
                  "landingPriority":65,
                  "bHidden":false,
                  "sectionId":"StartParty",
                  "bShowTimer":true,
                  "sectionDisplayName":"Start the Party!",
                  "bShowIneligibleOffers":true
               },
               {
                  "bSortOffersByOwnership":false,
                  "bShowIneligibleOffersIfGiftable":false,
                  "bEnableToastNotification":true,
                  "background":{
                     "_type":"DynamicBackground"
                  },
                  "_type":"ShopSection",
                  "landingPriority":64,
                  "bHidden":false,
                  "sectionId":"PartyGear",
                  "bShowTimer":true,
                  "sectionDisplayName":"Party Gear",
                  "bShowIneligibleOffers":true
               },
               {
                  "bSortOffersByOwnership":false,
                  "bShowIneligibleOffersIfGiftable":false,
                  "bEnableToastNotification":true,
                  "background":{
                     "_type":"DynamicBackground"
                  },
                  "_type":"ShopSection",
                  "landingPriority":64,
                  "bHidden":false,
                  "sectionId":"TurnMusicUp",
                  "bShowTimer":true,
                  "sectionDisplayName":"Turn The Music Up!",
                  "bShowIneligibleOffers":true
               },
               {
                  "bSortOffersByOwnership":false,
                  "bShowIneligibleOffersIfGiftable":false,
                  "bEnableToastNotification":true,
                  "background":{
                     "_type":"DynamicBackground"
                  },
                  "_type":"ShopSection",
                  "landingPriority":65,
                  "bHidden":false,
                  "sectionId":"SpookyOffers",
                  "bShowTimer":true,
                  "sectionDisplayName":"Spooky Offers",
                  "bShowIneligibleOffers":true
               },
               {
                  "bSortOffersByOwnership":false,
                  "bShowIneligibleOffersIfGiftable":false,
                  "bEnableToastNotification":true,
                  "background":{
                     "_type":"DynamicBackground"
                  },
                  "_type":"ShopSection",
                  "landingPriority":64,
                  "bHidden":false,
                  "sectionId":"SpookyOffers2",
                  "bShowTimer":true,
                  "bShowIneligibleOffers":true
               },
               {
                  "bSortOffersByOwnership":false,
                  "bShowIneligibleOffersIfGiftable":false,
                  "bEnableToastNotification":true,
                  "background":{
                     "stage":"default",
                     "_type":"DynamicBackground",
                     "key":"vault"
                  },
                  "_type":"ShopSection",
                  "landingPriority":65,
                  "bHidden":false,
                  "sectionId":"Fortnitemares",
                  "bShowTimer":true,
                  "sectionDisplayName":"Fortnitemares",
                  "bShowIneligibleOffers":true
               },
               {
                  "bSortOffersByOwnership":false,
                  "bShowIneligibleOffersIfGiftable":false,
                  "bEnableToastNotification":true,
                  "background":{
                     "_type":"DynamicBackground"
                  },
                  "_type":"ShopSection",
                  "landingPriority":65,
                  "bHidden":false,
                  "sectionId":"Ghostbusters",
                  "bShowTimer":true,
                  "sectionDisplayName":"Ghostbusters",
                  "bShowIneligibleOffers":true
               },
               {
                  "bSortOffersByOwnership":false,
                  "bShowIneligibleOffersIfGiftable":false,
                  "bEnableToastNotification":true,
                  "background":{
                     "_type":"DynamicBackground"
                  },
                  "_type":"ShopSection",
                  "landingPriority":64,
                  "bHidden":false,
                  "sectionId":"GhostbustersGear",
                  "bShowTimer":true,
                  "sectionDisplayName":"Ghostbusters Gear",
                  "bShowIneligibleOffers":true
               },
               {
                  "bSortOffersByOwnership":false,
                  "bShowIneligibleOffersIfGiftable":false,
                  "bEnableToastNotification":true,
                  "background":{
                     "stage":"default",
                     "_type":"DynamicBackground",
                     "key":"vault"
                  },
                  "_type":"ShopSection",
                  "landingPriority":70,
                  "bHidden":false,
                  "sectionId":"Marvel",
                  "bShowTimer":true,
                  "sectionDisplayName":"Marvel",
                  "bShowIneligibleOffers":true
               },
               {
                  "bSortOffersByOwnership":false,
                  "bShowIneligibleOffersIfGiftable":false,
                  "bEnableToastNotification":true,
                  "background":{
                     "_type":"DynamicBackground"
                  },
                  "_type":"ShopSection",
                  "landingPriority":69,
                  "bHidden":false,
                  "sectionId":"Marvel2",
                  "bShowTimer":true,
                  "bShowIneligibleOffers":true
               },
               {
                  "bSortOffersByOwnership":false,
                  "bShowIneligibleOffersIfGiftable":false,
                  "bEnableToastNotification":true,
                  "background":{
                     "_type":"DynamicBackground"
                  },
                  "_type":"ShopSection",
                  "landingPriority":68,
                  "bHidden":false,
                  "sectionId":"Marvel3",
                  "bShowTimer":true,
                  "bShowIneligibleOffers":true
               },
               {
                  "bSortOffersByOwnership":false,
                  "bShowIneligibleOffersIfGiftable":false,
                  "bEnableToastNotification":true,
                  "background":{
                     "_type":"DynamicBackground"
                  },
                  "_type":"ShopSection",
                  "landingPriority":67,
                  "bHidden":false,
                  "sectionId":"Marvel4",
                  "bShowTimer":true,
                  "bShowIneligibleOffers":true
               },
               {
                  "bSortOffersByOwnership":false,
                  "bShowIneligibleOffersIfGiftable":false,
                  "bEnableToastNotification":true,
                  "background":{
                     "_type":"DynamicBackground"
                  },
                  "_type":"ShopSection",
                  "landingPriority":66,
                  "bHidden":false,
                  "sectionId":"Marvel5",
                  "bShowTimer":true,
                  "bShowIneligibleOffers":true
               },
               {
                  "bSortOffersByOwnership":false,
                  "bShowIneligibleOffersIfGiftable":false,
                  "bEnableToastNotification":true,
                  "background":{
                     "_type":"DynamicBackground"
                  },
                  "_type":"ShopSection",
                  "landingPriority":65,
                  "bHidden":false,
                  "sectionId":"Marvel6",
                  "bShowTimer":true,
                  "bShowIneligibleOffers":true
               },
               {
                  "bSortOffersByOwnership":false,
                  "bShowIneligibleOffersIfGiftable":false,
                  "bEnableToastNotification":true,
                  "background":{
                     "stage":"default",
                     "_type":"DynamicBackground",
                     "key":"vault"
                  },
                  "_type":"ShopSection",
                  "bHidden":false,
                  "sectionId":"Bundles",
                  "bShowTimer":true,
                  "sectionDisplayName":"Bundles",
                  "bShowIneligibleOffers":true
               },
               {
                  "bSortOffersByOwnership":false,
                  "bShowIneligibleOffersIfGiftable":false,
                  "bEnableToastNotification":true,
                  "background":{
                     "stage":"default",
                     "_type":"DynamicBackground",
                     "key":"vault"
                  },
                  "_type":"ShopSection",
                  "bHidden":false,
                  "sectionId":"Characters",
                  "bShowTimer":true,
                  "sectionDisplayName":"Outfits",
                  "bShowIneligibleOffers":true
               },
               {
                  "bSortOffersByOwnership":false,
                  "bShowIneligibleOffersIfGiftable":false,
                  "bEnableToastNotification":true,
                  "background":{
                     "stage":"default",
                     "_type":"DynamicBackground",
                     "key":"vault"
                  },
                  "_type":"ShopSection",
                  "bHidden":false,
                  "sectionId":"Backpacks",
                  "bShowTimer":true,
                  "sectionDisplayName":"Back Blings",
                  "bShowIneligibleOffers":true
               },
               {
                  "bSortOffersByOwnership":false,
                  "bShowIneligibleOffersIfGiftable":false,
                  "bEnableToastNotification":true,
                  "background":{
                     "stage":"default",
                     "_type":"DynamicBackground",
                     "key":"vault"
                  },
                  "_type":"ShopSection",
                  "landingPriority":0,
                  "bHidden":false,
                  "sectionId":"Pickaxes",
                  "bShowTimer":true,
                  "sectionDisplayName":"Harvesting Tools",
                  "bShowIneligibleOffers":true
               },
               {
                  "bSortOffersByOwnership":false,
                  "bShowIneligibleOffersIfGiftable":false,
                  "bEnableToastNotification":true,
                  "background":{
                     "stage":"default",
                     "_type":"DynamicBackground",
                     "key":"vault"
                  },
                  "_type":"ShopSection",
                  "bHidden":false,
                  "sectionId":"Gliders",
                  "bShowTimer":true,
                  "sectionDisplayName":"Gliders",
                  "bShowIneligibleOffers":true
               },
               {
                  "bSortOffersByOwnership":false,
                  "bShowIneligibleOffersIfGiftable":false,
                  "bEnableToastNotification":true,
                  "background":{
                     "stage":"default",
                     "_type":"DynamicBackground",
                     "key":"vault"
                  },
                  "_type":"ShopSection",
                  "bHidden":false,
                  "sectionId":"MusicPacks",
                  "bShowTimer":true,
                  "sectionDisplayName":"Music Packs",
                  "bShowIneligibleOffers":true
               },
               {
                  "bSortOffersByOwnership":false,
                  "bShowIneligibleOffersIfGiftable":false,
                  "bEnableToastNotification":true,
                  "background":{
                     "stage":"default",
                     "_type":"DynamicBackground",
                     "key":"vault"
                  },
                  "_type":"ShopSection",
                  "bHidden":false,
                  "sectionId":"Wraps",
                  "bShowTimer":true,
                  "sectionDisplayName":"Wraps",
                  "bShowIneligibleOffers":true
               },
               {
                  "bSortOffersByOwnership":false,
                  "bShowIneligibleOffersIfGiftable":true,
                  "bEnableToastNotification":true,
                  "background":{
                     "stage":"default",
                     "_type":"DynamicBackground",
                     "key":"vault"
                  },
                  "_type":"ShopSection",
                  "landingPriority":80,
                  "bHidden":false,
                  "sectionId":"LimitedTime",
                  "bShowTimer":false,
                  "sectionDisplayName":"Limited Time",
                  "bShowIneligibleOffers":false
               },
               {
                  "bSortOffersByOwnership":false,
                  "bShowIneligibleOffersIfGiftable":true,
                  "bEnableToastNotification":true,
                  "background":{
                     "stage":"default",
                     "_type":"DynamicBackground",
                     "key":"vault"
                  },
                  "_type":"ShopSection",
                  "landingPriority":80,
                  "bHidden":false,
                  "sectionId":"FSL",
                  "bShowTimer":false,
                  "sectionDisplayName":"Fevers Sucks Lol",
                  "bShowIneligibleOffers":false
               },
               {
                  "bSortOffersByOwnership":false,
                  "bShowIneligibleOffersIfGiftable":false,
                  "bEnableToastNotification":false,
                  "background":{
                     "stage":"default",
                     "_type":"DynamicBackground",
                     "key":"vault"
                  },
                  "_type":"ShopSection",
                  "landingPriority":90,
                  "bHidden":false,
                  "sectionId":"Battlepass",
                  "bShowTimer":false,
                  "sectionDisplayName":"Battle Pass",
                  "bShowIneligibleOffers":false
               },
               {
                  "bSortOffersByOwnership":false,
                  "bShowIneligibleOffersIfGiftable":false,
                  "bEnableToastNotification":false,
                  "background":{
                     "_type":"DynamicBackground"
                  },
                  "_type":"ShopSection",
                  "bHidden":false,
                  "sectionId":"Subscription",
                  "bShowTimer":false,
                  "sectionDisplayName":"Fortnite Crew",
                  "bShowIneligibleOffers":true
               }
            ]
         },
         "_noIndex":false,
         "jcr:baseVersion":"a7ca237317f1e783846681-0296-4ef7-9de0-c3f812f6d8f1",
         "_activeDate":"2020-12-03T23:30:00.000Z",
         "lastModified":"2020-12-03T19:30:34.281Z",
         "_locale":"en-US"
      },
   
    })
})


module.exports = app