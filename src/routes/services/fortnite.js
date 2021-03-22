const express = require("express")
const app = express.Router()
const fs = require("fs")
const path = require('path')
const { Z_ASCII } = require("zlib")

const checkToken = require(`${__dirname}/../../middleware/checkToken`)
const cache = require(`${__dirname}/../../structs/caching`)
const errors = require(`${__dirname}/../../structs/errors`)
const config = require(path.join(__dirname, '../../config.json'))

app.use(require(`${__dirname}/cloudstorage.js`))
app.use(require(`${__dirname}/timeline.js`))
app.use(require(`${__dirname}/mcp.js`))

app.get("/api/storefront/v2/catalog", async (req, res) => {
    res.json({
        "refreshIntervalHrs": 9999999,
        "dailyPurchaseHrs": 9999999,
        "expiration": "9999-12-02T01:12:00Z",
        "storefronts": [
            {
            "name": "BRDailyStorefront",
            "catalogEntries": [
                {
                "devName": "[VIRTUAL]1 x John Wick, 1 x Assassin Pack for 2000 MtxCurrency",
                "offerId": "v2:/dfgfdgdfg-gf-fdggfgfd-fggf-dgfgf",
                "fulfillmentIds": [],
                "dailyLimit": -1,
                "weeklyLimit": -1,
                "monthlyLimit": -1,
                "categories": [],
                "prices": [
                    {
                    "currencyType": "MtxCurrency",
                    "currencySubType": "",
                    "regularPrice": 2000,
                    "finalPrice": 2000,
                    "saleExpiration": "9999-12-02T01:12:00Z",
                    "basePrice": 2000
                    }
                ],
                "matchFilter": "",
                "filterWeight": 0,
                "appStoreId": [],
                "requirements": [
                    {
                    "requirementType": "DenyOnItemOwnership",
                    "requiredId": "CID_416_Athena_Commando_M_AssassinSuit",
                    "minQuantity": 1
                    }
                ],
                "offerType": "StaticPrice",
                "giftInfo": {
                    "bIsEnabled": false,
                    "forcedGiftBoxTemplateId": "",
                    "purchaseRequirements": [],
                    "giftRecordIds": []
                },
                "refundable": true,
                "metaInfo": [],
                "displayAssetPath": "",
                "itemGrants": [
                    {
                    "templateId": "CID_416_Athena_Commando_M_AssassinSuit",
                    "quantity": 1
                    }
                ],
                "sortPriority": 0,
                "catalogGroupPriority": 0
                },
                        {
                            "devName": "[VIRTUAL]1 x TBD",
                            "offerId": "TBD",
                            "fulfillmentIds": [],
                            "dailyLimit": -1,
                            "weeklyLimit": -1,
                            "monthlyLimit": -1,
                            "categories": [],
                            "prices": [{
                                    "currencyType": "MtxCurrency",
                                    "currencySubType": "",
                                    "regularPrice": config.dapprice1,
                                    "dynamicRegularPrice": config.dapprice1,
                                    "finalPrice": config.dapprice1,
                                    "saleExpiration": "9999-12-31T23:59:59.999Z",
                                    "basePrice": config.dapprice1
                                }
                            ],
                            "matchFilter": "",
                            "filterWeight": 0,
                            "requirements": [],
                            "offerType": "StaticPrice",
                            "giftInfo": {
                                "bIsEnabled": true,
                                "forcedGiftBoxTemplateId": "",
                                "purchaseRequirements": [],
                                "giftRecordIds": []
                            },
                            "refundable": true,
                            "metaInfo": [{
                                    "key": "SectionId",
                                    "value": "Featured"
                                }, {
                                    "key": "DisplayAssetPath",
                                    "value": config.dap1,
                                }
                            ],
                            "itemGrants": [
                                {
                                    "templateId": config.dapitem1,
                                    "quantity": 1
                                },  
                            ],
                            "DisplayAssetPath": config.dap1,
                            "additionalGrants": [],
                            "sortPriority": 0,
                            "catalogGroupPriority": 0
                        },
                        {
                            "devName": "[VIRTUAL]1 x TBD",
                            "offerId": "TBD",
                            "fulfillmentIds": [],
                            "dailyLimit": -1,
                            "weeklyLimit": -1,
                            "monthlyLimit": -1,
                            "categories": [],
                            "prices": [{
                                    "currencyType": "MtxCurrency",
                                    "currencySubType": "",
                                    "regularPrice": config.dapprice2,
                                    "dynamicRegularPrice": config.dapprice2,
                                    "finalPrice": config.dapprice2,
                                    "saleExpiration": "9999-12-31T23:59:59.999Z",
                                    "basePrice": config.dapprice2
                                }
                            ],
                            "matchFilter": "",
                            "filterWeight": 0,
                            "requirements": [],
                            "offerType": "StaticPrice",
                            "giftInfo": {
                                "bIsEnabled": true,
                                "forcedGiftBoxTemplateId": "",
                                "purchaseRequirements": [],
                                "giftRecordIds": []
                            },
                            "refundable": true,
                            "metaInfo": [{
                                    "key": "SectionId",
                                    "value": "Featured"
                                }, {
                                    "key": "DisplayAssetPath",
                                    "value": config.dap2,
                                }
                            ],
                            "itemGrants": [
                                {
                                    "templateId": config.dapitem2,
                                    "quantity": 1
                                },  
                            ],
                            "DisplayAssetPath": config.dap2,
                            "additionalGrants": [],
                            "sortPriority": 0,
                            "catalogGroupPriority": 0
                        },
                        {
                            "devName": "[VIRTUAL]1 x TBD",
                            "offerId": "TBD",
                            "fulfillmentIds": [],
                            "dailyLimit": -1,
                            "weeklyLimit": -1,
                            "monthlyLimit": -1,
                            "categories": [],
                            "prices": [{
                                    "currencyType": "MtxCurrency",
                                    "currencySubType": "",
                                    "regularPrice": config.dapprice3,
                                    "dynamicRegularPrice": config.dapprice3,
                                    "finalPrice": config.dapprice3,
                                    "saleExpiration": "9999-12-31T23:59:59.999Z",
                                    "basePrice": config.dapitem3
                                }
                            ],
                            "matchFilter": "",
                            "filterWeight": 0,
                            "requirements": [],
                            "offerType": "StaticPrice",
                            "giftInfo": {
                                "bIsEnabled": true,
                                "forcedGiftBoxTemplateId": "",
                                "purchaseRequirements": [],
                                "giftRecordIds": []
                            },
                            "refundable": true,
                            "metaInfo": [{
                                    "key": "SectionId",
                                    "value": "Featured"
                                }, {
                                    "key": "DisplayAssetPath",
                                    "value": config.dap3,
                                }
                            ],
                            "itemGrants": [
                                {
                                    "templateId": config.dapitem3,
                                    "quantity": 1
                                },  
                            ],
                            "DisplayAssetPath": config.dap3,
                            "additionalGrants": [],
                            "sortPriority": 0,
                            "catalogGroupPriority": 0
                        },
                    
                        {
                            "devName": config.item,
                            "offerId": "v2:/fg-gf-dgfgfgddggfdfsfdsa-ddsffsd-dsfds",
                            "fulfillmentIds": [],
                            "dailyLimit": -1,
                            "weeklyLimit": -1,
                            "monthlyLimit": -1,
                            "categories": [],
                            "prices": [
                                {
                                "currencyType": "MtxCurrency",
                                "currencySubType": "",
                                "regularPrice": 9999,
                                "finalPrice": 9999,
                                "saleExpiration": "9999-12-02T01:12:00Z",
                                "basePrice": 9999
                                }
                            ],
                            "matchFilter": "",
                            "filterWeight": 0,
                            "appStoreId": [],
                            "requirements": [
                                {
                                "requirementType": "DenyOnItemOwnership",
                                "requiredId": config.item,
                                "minQuantity": 1
                                }
                            ],
                            "offerType": "StaticPrice",
                            "giftInfo": {
                                "bIsEnabled": false,
                                "forcedGiftBoxTemplateId": "",
                                "purchaseRequirements": [],
                                "giftRecordIds": []
                            },
                            "refundable": true,
                            "metaInfo": [
                                {
                                    "key": "SectionId",
                                    "value": "Featured"
                                },
                                {
                                    "key": "TileSize",
                                    "value": "Normal"
                                },
                                {
                                    "key": "AnalyticOfferGroupId",
                                    "value": "12"
                                }
                            ],
                            "displayAssetPath": "",
                            "itemGrants": [
                                {
                                "templateId": config.item,
                                "quantity": 1
                                }
                            ],
                            "sortPriority": 0,
                            "catalogGroupPriority": 0
                            },
                            {
                                "devName": config.item2,
                                "offerId": "v2:/fg-gf-dgfgfgddggfdfsfdsa-ddsffsd-dsfds",
                                "fulfillmentIds": [],
                                "dailyLimit": -1,
                                "weeklyLimit": -1,
                                "monthlyLimit": -1,
                                "categories": [],
                                "prices": [
                                    {
                                    "currencyType": "MtxCurrency",
                                    "currencySubType": "",
                                    "regularPrice": 9999,
                                    "finalPrice": 9999,
                                    "saleExpiration": "9999-12-02T01:12:00Z",
                                    "basePrice": 9999
                                    }
                                ],
                                "matchFilter": "",
                                "filterWeight": 0,
                                "appStoreId": [],
                                "requirements": [
                                    {
                                    "requirementType": "DenyOnItemOwnership",
                                    "requiredId": config.item2,
                                    "minQuantity": 1
                                    }
                                ],
                                "offerType": "StaticPrice",
                                "giftInfo": {
                                    "bIsEnabled": false,
                                    "forcedGiftBoxTemplateId": "",
                                    "purchaseRequirements": [],
                                    "giftRecordIds": []
                                },
                                "refundable": true,
                                "metaInfo": [
                                    {
                                        "key": "SectionId",
                                        "value": "Featured"
                                    },
                                    {
                                        "key": "TileSize",
                                        "value": "Normal"
                                    },
                                    {
                                        "key": "AnalyticOfferGroupId",
                                        "value": "12"
                                    }
                                ],
                                "displayAssetPath": "",
                                "itemGrants": [
                                    {
                                    "templateId": config.item2,
                                    "quantity": 1
                                    }
                                ],
                                "sortPriority": 0,
                                "catalogGroupPriority": 0
                                },
                                {
                                    "devName": config.item3,
                                    "offerId": "v2:/fg-gf-dgfgfgddggfdfsfdsa-ddsffsd-dsfds",
                                    "fulfillmentIds": [],
                                    "dailyLimit": -1,
                                    "weeklyLimit": -1,
                                    "monthlyLimit": -1,
                                    "categories": [],
                                    "prices": [
                                        {
                                        "currencyType": "MtxCurrency",
                                        "currencySubType": "",
                                        "regularPrice": 9999,
                                        "finalPrice": 9999,
                                        "saleExpiration": "9999-12-02T01:12:00Z",
                                        "basePrice": 9999
                                        }
                                    ],
                                    "matchFilter": "",
                                    "filterWeight": 0,
                                    "appStoreId": [],
                                    "requirements": [
                                        {
                                        "requirementType": "DenyOnItemOwnership",
                                        "requiredId": config.item3,
                                        "minQuantity": 1
                                        }
                                    ],
                                    "offerType": "StaticPrice",
                                    "giftInfo": {
                                        "bIsEnabled": false,
                                        "forcedGiftBoxTemplateId": "",
                                        "purchaseRequirements": [],
                                        "giftRecordIds": []
                                    },
                                    "refundable": true,
                                    "metaInfo": [
                                        {
                                            "key": "SectionId",
                                            "value": "Featured"
                                        },
                                        {
                                            "key": "TileSize",
                                            "value": "Normal"
                                        },
                                        {
                                            "key": "AnalyticOfferGroupId",
                                            "value": "12"
                                        }
                                    ],
                                    "displayAssetPath": "",
                                    "itemGrants": [
                                        {
                                        "templateId": config.item3,
                                        "quantity": 1
                                        }
                                    ],
                                    "sortPriority": 0,
                                    "catalogGroupPriority": 0
                                    },
                                    {
                                        "devName": config.item4,
                                        "offerId": "v2:/fg-gf-dgfgfgddggfdfsfdsa-ddsffsd-dsfds",
                                        "fulfillmentIds": [],
                                        "dailyLimit": -1,
                                        "weeklyLimit": -1,
                                        "monthlyLimit": -1,
                                        "categories": [],
                                        "prices": [
                                            {
                                            "currencyType": "MtxCurrency",
                                            "currencySubType": "",
                                            "regularPrice": 9999,
                                            "finalPrice": 9999,
                                            "saleExpiration": "9999-12-02T01:12:00Z",
                                            "basePrice": 9999
                                            }
                                        ],
                                        "matchFilter": "",
                                        "filterWeight": 0,
                                        "appStoreId": [],
                                        "requirements": [
                                            {
                                            "requirementType": "DenyOnItemOwnership",
                                            "requiredId": config.item4,
                                            "minQuantity": 1
                                            }
                                        ],
                                        "offerType": "StaticPrice",
                                        "giftInfo": {
                                            "bIsEnabled": false,
                                            "forcedGiftBoxTemplateId": "",
                                            "purchaseRequirements": [],
                                            "giftRecordIds": []
                                        },
                                        "refundable": true,
                                        "metaInfo": [
                                            {
                                                "key": "SectionId",
                                                "value": "Featured"
                                            },
                                            {
                                                "key": "TileSize",
                                                "value": "Normal"
                                            },
                                            {
                                                "key": "AnalyticOfferGroupId",
                                                "value": "12"
                                            }
                                        ],
                                        "displayAssetPath": "",
                                        "itemGrants": [
                                            {
                                            "templateId": config.item4,
                                            "quantity": 1
                                            }
                                        ],
                                        "sortPriority": 0,
                                        "catalogGroupPriority": 0
                                        },
                                        {
                                            "devName": config.item5,
                                            "offerId": "v2:/fg-gf-dgfgfgddggfdfsfdsa-ddsffsd-dsfds",
                                            "fulfillmentIds": [],
                                            "dailyLimit": -1,
                                            "weeklyLimit": -1,
                                            "monthlyLimit": -1,
                                            "categories": [],
                                            "prices": [
                                                {
                                                "currencyType": "MtxCurrency",
                                                "currencySubType": "",
                                                "regularPrice": 9999,
                                                "finalPrice": 9999,
                                                "saleExpiration": "9999-12-02T01:12:00Z",
                                                "basePrice": 9999
                                                }
                                            ],
                                            "matchFilter": "",
                                            "filterWeight": 0,
                                            "appStoreId": [],
                                            "requirements": [
                                                {
                                                "requirementType": "DenyOnItemOwnership",
                                                "requiredId": config.item5,
                                                "minQuantity": 1
                                                }
                                            ],
                                            "offerType": "StaticPrice",
                                            "giftInfo": {
                                                "bIsEnabled": false,
                                                "forcedGiftBoxTemplateId": "",
                                                "purchaseRequirements": [],
                                                "giftRecordIds": []
                                            },
                                            "refundable": true,
                                            "metaInfo": [
                                                {
                                                    "key": "SectionId",
                                                    "value": "Featured"
                                                },
                                                {
                                                    "key": "TileSize",
                                                    "value": "Normal"
                                                },
                                                {
                                                    "key": "AnalyticOfferGroupId",
                                                    "value": "12"
                                                }
                                            ],
                                            "displayAssetPath": "",
                                            "itemGrants": [
                                                {
                                                "templateId": config.item5,
                                                "quantity": 1
                                                }
                                            ],
                                            "sortPriority": 0,
                                            "catalogGroupPriority": 0
                                            },
                                            {
                                                "devName": config.item6,
                                                "offerId": "v2:/fg-gf-dgfgfgddggfdfsfdsa-ddsffsd-dsfds",
                                                "fulfillmentIds": [],
                                                "dailyLimit": -1,
                                                "weeklyLimit": -1,
                                                "monthlyLimit": -1,
                                                "categories": [],
                                                "prices": [
                                                    {
                                                    "currencyType": "MtxCurrency",
                                                    "currencySubType": "",
                                                    "regularPrice": 9999,
                                                    "finalPrice": 9999,
                                                    "saleExpiration": "9999-12-02T01:12:00Z",
                                                    "basePrice": 9999
                                                    }
                                                ],
                                                "matchFilter": "",
                                                "filterWeight": 0,
                                                "appStoreId": [],
                                                "requirements": [
                                                    {
                                                    "requirementType": "DenyOnItemOwnership",
                                                    "requiredId": config.item6,
                                                    "minQuantity": 1
                                                    }
                                                ],
                                                "offerType": "StaticPrice",
                                                "giftInfo": {
                                                    "bIsEnabled": false,
                                                    "forcedGiftBoxTemplateId": "",
                                                    "purchaseRequirements": [],
                                                    "giftRecordIds": []
                                                },
                                                "refundable": true,
                                                "metaInfo": [
                                                    {
                                                        "key": "SectionId",
                                                        "value": "Featured"
                                                    },
                                                    {
                                                        "key": "TileSize",
                                                        "value": "Normal"
                                                    },
                                                    {
                                                        "key": "AnalyticOfferGroupId",
                                                        "value": "12"
                                                    }
                                                ],
                                                "displayAssetPath": "",
                                                "itemGrants": [
                                                    {
                                                    "templateId": config.item6,
                                                    "quantity": 1
                                                    }
                                                ],
                                                "sortPriority": 0,
                                                "catalogGroupPriority": 0
                                                },
                                                {
                                                    "devName": config.item7,
                                                    "offerId": "v2:/fg-gf-dgfgfgddggfdfsfdsa-ddsffsd-dsfds",
                                                    "fulfillmentIds": [],
                                                    "dailyLimit": -1,
                                                    "weeklyLimit": -1,
                                                    "monthlyLimit": -1,
                                                    "categories": [],
                                                    "prices": [
                                                        {
                                                        "currencyType": "MtxCurrency",
                                                        "currencySubType": "",
                                                        "regularPrice": 9999,
                                                        "finalPrice": 9999,
                                                        "saleExpiration": "9999-12-02T01:12:00Z",
                                                        "basePrice": 9999
                                                        }
                                                    ],
                                                    "matchFilter": "",
                                                    "filterWeight": 0,
                                                    "appStoreId": [],
                                                    "requirements": [
                                                        {
                                                        "requirementType": "DenyOnItemOwnership",
                                                        "requiredId": config.item7,
                                                        "minQuantity": 1
                                                        }
                                                    ],
                                                    "offerType": "StaticPrice",
                                                    "giftInfo": {
                                                        "bIsEnabled": false,
                                                        "forcedGiftBoxTemplateId": "",
                                                        "purchaseRequirements": [],
                                                        "giftRecordIds": []
                                                    },
                                                    "refundable": true,
                                                    "metaInfo": [
                                                        {
                                                            "key": "SectionId",
                                                            "value": "Featured"
                                                        },
                                                        {
                                                            "key": "TileSize",
                                                            "value": "Normal"
                                                        },
                                                        {
                                                            "key": "AnalyticOfferGroupId",
                                                            "value": "12"
                                                        }
                                                    ],
                                                    "displayAssetPath": "",
                                                    "itemGrants": [
                                                        {
                                                        "templateId": config.item7,
                                                        "quantity": 1
                                                        }
                                                    ],
                                                    "sortPriority": 0,
                                                    "catalogGroupPriority": 0
                                                    },
                                                    {
                                                        "devName": config.item8,
                                                        "offerId": "v2:/fg-gf-dgfgfgddggfdfsfdsa-ddsffsd-dsfds",
                                                        "fulfillmentIds": [],
                                                        "dailyLimit": -1,
                                                        "weeklyLimit": -1,
                                                        "monthlyLimit": -1,
                                                        "categories": [],
                                                        "prices": [
                                                            {
                                                            "currencyType": "MtxCurrency",
                                                            "currencySubType": "",
                                                            "regularPrice": 9999,
                                                            "finalPrice": 9999,
                                                            "saleExpiration": "9999-12-02T01:12:00Z",
                                                            "basePrice": 9999
                                                            }
                                                        ],
                                                        "matchFilter": "",
                                                        "filterWeight": 0,
                                                        "appStoreId": [],
                                                        "requirements": [
                                                            {
                                                            "requirementType": "DenyOnItemOwnership",
                                                            "requiredId": config.item8,
                                                            "minQuantity": 1
                                                            }
                                                        ],
                                                        "offerType": "StaticPrice",
                                                        "giftInfo": {
                                                            "bIsEnabled": false,
                                                            "forcedGiftBoxTemplateId": "",
                                                            "purchaseRequirements": [],
                                                            "giftRecordIds": []
                                                        },
                                                        "refundable": true,
                                                        "metaInfo": [
                                                            {
                                                                "key": "SectionId",
                                                                "value": "Featured"
                                                            },
                                                            {
                                                                "key": "TileSize",
                                                                "value": "Normal"
                                                            },
                                                            {
                                                                "key": "AnalyticOfferGroupId",
                                                                "value": "12"
                                                            }
                                                        ],
                                                        "displayAssetPath": "",
                                                        "itemGrants": [
                                                            {
                                                            "templateId": config.item8,
                                                            "quantity": 1
                                                            }
                                                        ],
                                                        "sortPriority": 0,
                                                        "catalogGroupPriority": 0
                                                        },
                                                        {
                                                            "devName": config.item9,
                                                            "offerId": "v2:/fg-gf-dgfgfgddggfdfsfdsa-ddsffsd-dsfds",
                                                            "fulfillmentIds": [],
                                                            "dailyLimit": -1,
                                                            "weeklyLimit": -1,
                                                            "monthlyLimit": -1,
                                                            "categories": [],
                                                            "prices": [
                                                                {
                                                                "currencyType": "MtxCurrency",
                                                                "currencySubType": "",
                                                                "regularPrice": 9999,
                                                                "finalPrice": 9999,
                                                                "saleExpiration": "9999-12-02T01:12:00Z",
                                                                "basePrice": 9999
                                                                }
                                                            ],
                                                            "matchFilter": "",
                                                            "filterWeight": 0,
                                                            "appStoreId": [],
                                                            "requirements": [
                                                                {
                                                                "requirementType": "DenyOnItemOwnership",
                                                                "requiredId": config.item9,
                                                                "minQuantity": 1
                                                                }
                                                            ],
                                                            "offerType": "StaticPrice",
                                                            "giftInfo": {
                                                                "bIsEnabled": false,
                                                                "forcedGiftBoxTemplateId": "",
                                                                "purchaseRequirements": [],
                                                                "giftRecordIds": []
                                                            },
                                                            "refundable": true,
                                                            "metaInfo": [
                                                                {
                                                                    "key": "SectionId",
                                                                    "value": "Featured"
                                                                },
                                                                {
                                                                    "key": "TileSize",
                                                                    "value": "Normal"
                                                                },
                                                                {
                                                                    "key": "AnalyticOfferGroupId",
                                                                    "value": "12"
                                                                }
                                                            ],
                                                            "displayAssetPath": "",
                                                            "itemGrants": [
                                                                {
                                                                "templateId": config.item9,
                                                                "quantity": 1
                                                                }
                                                            ],
                                                            "sortPriority": 0,
                                                            "catalogGroupPriority": 0
                                                            },
                                                            {
                                                                "devName": config.item10,
                                                                "offerId": "v2:/fg-gf-dgfgfgddggfdfsfdsa-ddsffsd-dsfds",
                                                                "fulfillmentIds": [],
                                                                "dailyLimit": -1,
                                                                "weeklyLimit": -1,
                                                                "monthlyLimit": -1,
                                                                "categories": [],
                                                                "prices": [
                                                                    {
                                                                    "currencyType": "MtxCurrency",
                                                                    "currencySubType": "",
                                                                    "regularPrice": 9999,
                                                                    "finalPrice": 9999,
                                                                    "saleExpiration": "9999-12-02T01:12:00Z",
                                                                    "basePrice": 9999
                                                                    }
                                                                ],
                                                                "matchFilter": "",
                                                                "filterWeight": 0,
                                                                "appStoreId": [],
                                                                "requirements": [
                                                                    {
                                                                    "requirementType": "DenyOnItemOwnership",
                                                                    "requiredId": config.item10,
                                                                    "minQuantity": 1
                                                                    }
                                                                ],
                                                                "offerType": "StaticPrice",
                                                                "giftInfo": {
                                                                    "bIsEnabled": false,
                                                                    "forcedGiftBoxTemplateId": "",
                                                                    "purchaseRequirements": [],
                                                                    "giftRecordIds": []
                                                                },
                                                                "refundable": true,
                                                                "metaInfo": [
                                                                    {
                                                                        "key": "SectionId",
                                                                        "value": "Featured"
                                                                    },
                                                                    {
                                                                        "key": "TileSize",
                                                                        "value": "Normal"
                                                                    },
                                                                    {
                                                                        "key": "AnalyticOfferGroupId",
                                                                        "value": "12"
                                                                    }
                                                                ],
                                                                "displayAssetPath": "",
                                                                "itemGrants": [
                                                                    {
                                                                    "templateId": config.item10,
                                                                    "quantity": 1
                                                                    }
                                                                ],
                                                                "sortPriority": 0,
                                                                "catalogGroupPriority": 0
                                                                },
                                                                {
                                                                    "devName": "[VIRTUAL]1 x Mullet Marauder, 1 x Boombox, 1 x Hot Ride, 1 x Pink Flamingo, 1 x Slick for -1 MtxCurrency",
                                                                    "offerId": "v2:/117bf2e1226b25af6dc9c9018901b28f6e28efce9c4abf6c445cac2dd5b1283e",
                                                                    "fulfillmentIds": [],
                                                                    "dailyLimit": -1,
                                                                    "weeklyLimit": -1,
                                                                    "monthlyLimit": -1,
                                                                    "categories": [
                                                                        "Panel 02"
                                                                    ],
                                                                    "prices": [],
                                                                    "dynamicBundleInfo": {
                                                                        "discountedBasePrice": -2500,
                                                                        "regularBasePrice": 0,
                                                                        "floorPrice": 200,
                                                                        "currencyType": "MtxCurrency",
                                                                        "currencySubType": "",
                                                                        "displayType": "AmountOff",
                                                                        "bundleItems": [
                                                                            {
                                                                                "bCanOwnMultiple": false,
                                                                                "regularPrice": 1500,
                                                                                "discountedPrice": 1500,
                                                                                "alreadyOwnedPriceReduction": 1500,
                                                                                "item": {
                                                                                    "templateId": "AthenaCharacter:cid_186_athena_commando_m_exercise",
                                                                                    "quantity": 1
                                                                                }
                                                                            },
                                                                            {
                                                                                "bCanOwnMultiple": false,
                                                                                "regularPrice": 0,
                                                                                "discountedPrice": 0,
                                                                                "alreadyOwnedPriceReduction": 0,
                                                                                "item": {
                                                                                    "templateId": "AthenaBackpack:bid_087_exercisemale",
                                                                                    "quantity": 1
                                                                                }
                                                                            },
                                                                            {
                                                                                "bCanOwnMultiple": false,
                                                                                "regularPrice": 1500,
                                                                                "discountedPrice": 1500,
                                                                                "alreadyOwnedPriceReduction": 1500,
                                                                                "item": {
                                                                                    "templateId": "AthenaGlider:glider_id_068_garageband",
                                                                                    "quantity": 1
                                                                                }
                                                                            },
                                                                            {
                                                                                "bCanOwnMultiple": false,
                                                                                "regularPrice": 1500,
                                                                                "discountedPrice": 1500,
                                                                                "alreadyOwnedPriceReduction": 1500,
                                                                                "item": {
                                                                                    "templateId": "AthenaPickaxe:pickaxe_flamingo",
                                                                                    "quantity": 1
                                                                                }
                                                                            },
                                                                            {
                                                                                "bCanOwnMultiple": false,
                                                                                "regularPrice": 500,
                                                                                "discountedPrice": 500,
                                                                                "alreadyOwnedPriceReduction": 500,
                                                                                "item": {
                                                                                    "templateId": "AthenaDance:eid_jazzdance",
                                                                                    "quantity": 1
                                                                                }
                                                                            }
                                                                        ]
                                                                    },
                                                                    "meta": {
                                                                        "NewDisplayAssetPath": "/Game/Catalog/NewDisplayAssets/DAv2_Bundle_Featured_MaleExercise.DAv2_Bundle_Featured_MaleExercise",
                                                                        "SectionId": "lockerbundleslol",
                                                                        "TileSize": "DoubleWide",
                                                                        "AnalyticOfferGroupId": "11"
                                                                    },
                                                                    "matchFilter": "",
                                                                    "filterWeight": 0.0,
                                                                    "appStoreId": [],
                                                                    "requirements": [],
                                                                    "offerType": "DynamicBundle",
                                                                    "refundable": true,
                                                                    "metaInfo": [
                                                                        {
                                                                            "key": "NewDisplayAssetPath",
                                                                            "value": "/Game/Catalog/NewDisplayAssets/DAv2_Bundle_Featured_MaleExercise.DAv2_Bundle_Featured_MaleExercise"
                                                                        },
                                                                        {
                                                                            "key": "SectionId",
                                                                            "value": "lockerbundleslol"
                                                                        },
                                                                        {
                                                                            "key": "TileSize",
                                                                            "value": "DoubleWide"
                                                                        },
                                                                        {
                                                                            "key": "AnalyticOfferGroupId",
                                                                            "value": "11"
                                                                        }
                                                                    ],
                                                                    "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_Architect_MaleExercise_Bundle.DA_Featured_Architect_MaleExercise_Bundle",
                                                                    "itemGrants": [
                                                                        {
                                                                            "templateId": "AthenaCharacter:cid_186_athena_commando_m_exercise",
                                                                            "quantity": 1
                                                                        },
                                                                        {
                                                                            "templateId": "AthenaBackpack:bid_087_exercisemale",
                                                                            "quantity": 1
                                                                        },
                                                                        {
                                                                            "templateId": "AthenaGlider:glider_id_068_garageband",
                                                                            "quantity": 1
                                                                        },
                                                                        {
                                                                            "templateId": "AthenaPickaxe:pickaxe_flamingo",
                                                                            "quantity": 1
                                                                        },
                                                                        {
                                                                            "templateId": "AthenaDance:eid_jazzdance",
                                                                            "quantity": 1
                                                                        }
                                                                    ],
                                                                    "additionalGrants": [],
                                                                    "sortPriority": -1,
                                                                    "catalogGroupPriority": 0
                                                                },
                                                                {
                                                                    "devName": "[VIRTUAL]1 x LOYAS BUNDLE THING for -1 MtxCurrency",
                                                                    "offerId": "v2:/117bf2e1226b25af6dc9c9018901b28f6e28efce9c4abf6c445cac2dd5b1283e",
                                                                    "fulfillmentIds": [],
                                                                    "dailyLimit": -1,
                                                                    "weeklyLimit": -1,
                                                                    "monthlyLimit": -1,
                                                                    "categories": [
                                                                        "Panel 02"
                                                                    ],
                                                                    "prices": [],
                                                                    "dynamicBundleInfo": {
                                                                        "discountedBasePrice": -2500,
                                                                        "regularBasePrice": 0,
                                                                        "floorPrice": 200,
                                                                        "currencyType": "MtxCurrency",
                                                                        "currencySubType": "",
                                                                        "displayType": "AmountOff",
                                                                        "bundleItems": [
                                                                            {
                                                                                "bCanOwnMultiple": false,
                                                                                "regularPrice": 1500,
                                                                                "discountedPrice": 1500,
                                                                                "alreadyOwnedPriceReduction": 1500,
                                                                                "item": {
                                                                                    "templateId": "AthenaCharacter:CID_523_Athena_Commando_F_Cupid",
                                                                                    "quantity": 1
                                                                                }
                                                                            },
                                                                            {
                                                                                "bCanOwnMultiple": false,
                                                                                "regularPrice": 0,
                                                                                "discountedPrice": 0,
                                                                                "alreadyOwnedPriceReduction": 0,
                                                                                "item": {
                                                                                    "templateId": "AthenaBackpack:BID_352_CupidFemale",
                                                                                    "quantity": 1
                                                                                }
                                                                            },
                                                                            {
                                                                                "bCanOwnMultiple": false,
                                                                                "regularPrice": 1500,
                                                                                "discountedPrice": 1500,
                                                                                "alreadyOwnedPriceReduction": 1500,
                                                                                "item": {
                                                                                    "templateId": "AthenaItemWrap:Wrap_113_ZeroPointFloor",
                                                                                    "quantity": 1
                                                                                }
                                                                            },
                                                                            {
                                                                                "bCanOwnMultiple": false,
                                                                                "regularPrice": 1500,
                                                                                "discountedPrice": 1500,
                                                                                "alreadyOwnedPriceReduction": 1500,
                                                                                "item": {
                                                                                    "templateId": "AthenaPickaxe:Pickaxe_ID_057_Jailbird",
                                                                                    "quantity": 1
                                                                                }
                                                                            },
                                                                            {
                                                                                "bCanOwnMultiple": false,
                                                                                "regularPrice": 500,
                                                                                "discountedPrice": 500,
                                                                                "alreadyOwnedPriceReduction": 500,
                                                                                "item": {
                                                                                    "templateId": "AthenaDance:EID_DiscoFever",
                                                                                    "quantity": 1
                                                                                }
                                                                            }
                                                                        ]
                                                                    },
                                                                    "meta": {
                                                                        "NewDisplayAssetPath": "/Game/Catalog/NewDisplayAssets/DAv2_Bundle_Featured_FemaleCupid.DAv2_Bundle_Featured_FemaleCupid",
                                                                        "SectionId": "lockerbundleslol",
                                                                        "TileSize": "DoubleWide",
                                                                        "AnalyticOfferGroupId": "12"
                                                                    },
                                                                    "matchFilter": "",
                                                                    "filterWeight": 0.0,
                                                                    "appStoreId": [],
                                                                    "requirements": [],
                                                                    "offerType": "DynamicBundle",
                                                                    "refundable": true,
                                                                    "metaInfo": [
                                                                        {
                                                                            "key": "NewDisplayAssetPath",
                                                                            "value": "/Game/Catalog/NewDisplayAssets/DAv2_Bundle_Featured_FemaleCupid.DAv2_Bundle_Featured_FemaleCupid"
                                                                        },
                                                                        {
                                                                            "key": "SectionId",
                                                                            "value": "lockerbundleslol"
                                                                        },
                                                                        {
                                                                            "key": "TileSize",
                                                                            "value": "DoubleWide"
                                                                        },
                                                                        {
                                                                            "key": "AnalyticOfferGroupId",
                                                                            "value": "12"
                                                                        }
                                                                    ],
                                                                    "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_Architect_FemaleCupid_Bundle.DA_Featured_Architect_FemaleCupid_Bundle",
                                                                    "itemGrants": [
                                                                        {
                                                                            "templateId": "AthenaCharacter:CID_523_Athena_Commando_F_Cupid",
                                                                            "quantity": 1
                                                                        },
                                                                        {
                                                                            "templateId": "AthenaBackpack:BID_352_CupidFemale",
                                                                            "quantity": 1
                                                                        },
                                                                        {
                                                                            "templateId": "AthenaItemWrap:Wrap_113_ZeroPointFloor",
                                                                            "quantity": 1
                                                                        },
                                                                        {
                                                                            "templateId": "AthenaPickaxe:Pickaxe_ID_057_Jailbird",
                                                                            "quantity": 1
                                                                        },
                                                                        {
                                                                            "templateId": "AthenaDance:EID_DiscoFever",
                                                                            "quantity": 1
                                                                        }
                                                                    ],
                                                                    "additionalGrants": [],
                                                                    "sortPriority": -1,
                                                                    "catalogGroupPriority": 0
                                                                }
                                                
                            
                         
                        
                                                                                                                                                                                                                                                                                  
                    ]
                    }
                ]         
            })
    res.status(200);
})
    

app.all("/api/v2/versioncheck/Windows", (req, res) => {
    if(req.method != "GET") return res.status(405).json(errors.method("fortnite", "prod-live"))
    res.json({type: "NO_UPDATE"})
})

app.all("/api/game/v2/tryPlayOnPlatform/account/:accountId", checkToken, (req, res) => {
    if(req.method != "POST") return res.status(405).json(errors.method("fortnite", "prod-live"))
    res.setHeader('Content-Type', 'text/plain')
    res.send(true)
})

app.all("/api/game/v2/enabled_features", checkToken,  (req, res) => {
    if(req.method != "GET") return res.status(405).json(errors.method("fortnite", "prod-live"))
    res.json([])
})

app.all("/api/storefront/v2/keychain", checkToken, (req, res) => {
    if(req.method != "GET") return res.status(405).json(errors.method("fortnite", "prod-live"))

    res.json(cache.getKeychain())
})

app.all("/api/game/v2/matchmakingservice/ticket/player/:accountId", checkToken, (req, res) => {
    res.status(401).json(errors.create(
        "Due to Epic TOS, we are not able to support matchmaking. Sorry for any inconvenience.", 12002,
        "dev.slushia.fdev.matchmaking.not_enabled",
        "fortnite", "prod"
    ))
})

app.all("/api/game/v2/privacy/account/:accountId", checkToken, (req, res) => {
    res.json({
        acceptInvites: "public"
    })
})

app.all("/api/game/v2/world/info", checkToken, (req, res) => {
    res.json({})
})

app.all("/api/matchmaking/session/findPlayer/:accountId", (req, res) => {
    res.status(204).end()
})

app.use((req, res, next) => {
    res.status(404).json(errors.create(
        "errors.com.epicgames.common.not_found", 1004,
        "Sorry the resource you were trying to find could not be found",
        "fortnite", "prod"
    ))
})

module.exports = app