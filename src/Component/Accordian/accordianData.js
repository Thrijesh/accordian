export const data = [
    {
        _id: "self-delivery/delux",
        merchantId: "delux",
        partnerId: "self-delivery",
        config: {
            areaConfig: {
                zoneId: "Zone 0\r",
                sub: {
                    sabaragamuwa: {
                        sub: {
                            ratnapura: {
                                zoneId: "Zone 1\r",
                                sub: {
                                    pelmadulla: {
                                        zoneId: "Zone 1\r",
                                        sub: {}
                                    },
                                    kahawatte: {
                                        zoneId: "Zone 1\r",
                                        sub: {}
                                    }
                                }
                            }
                        }
                    },
                    centralprovince: {
                        sub: {
                            kandy: {
                                zoneId: "Zone 5\r",
                                sub: {
                                    kandytown: {
                                        zoneId: "Zone 5\r",
                                        sub: {}
                                    },
                                    nawalapitiya: {
                                        zoneId: "Zone 5\r",
                                        sub: {}
                                    }
                                }
                            }
                        }
                    },
                    western: {
                        sub: {
                            gampaha: {
                                zoneId: "Zone 2\r",
                                sub: {
                                    gampahatown: {
                                        zoneId: "Zone 2\r",
                                        sub: {}
                                    }
                                }
                            },
                            colombo: {
                                zoneId: "Zone 3\r",
                                sub: {
                                    angulana: {
                                        zoneId: "Zone 3\r",
                                        sub: {}
                                    }
                                }
                            }
                        }
                    }
                }
            },
            zoneConfig: {
                Zone1: {
                    zoneId: "Zone 1",
                    plans: {
                        Express: {
                            planId: "Express",
                            initialWeight: 5000,
                            initialPrice: 400,
                            additionalUnitPrice: 100,
                            deliveryDuration: "1 day",
                            label: "Delux Express",
                            iconUrl: "https://appigo-mall.hsenidmobile.com/merchant-resources/delux/mEX0vQpvSr.png"
                        },
                        Regular: {
                            planId: "Regular",
                            initialWeight: 5000,
                            initialPrice: 200,
                            additionalUnitPrice: 50,
                            deliveryDuration: "3 days",
                            label: "Delux Regular",
                            iconUrl: "https://appigo-mall.hsenidmobile.com/merchant-resources/delux/mEX0vQpvSr.png"
                        }
                    }
                },
                Zone2: {
                    zoneId: "Zone 2",
                    plans: {
                        Express: {
                            planId: "Express",
                            initialWeight: 5000,
                            initialPrice: 800,
                            additionalUnitPrice: 120,
                            deliveryDuration: "1 day",
                            label: "Delux Express",
                            iconUrl: "https://appigo-mall.hsenidmobile.com/merchant-resources/delux/mEX0vQpvSr.png"
                        },
                        Regular: {
                            planId: "Regular",
                            initialWeight: 5000,
                            initialPrice: 400,
                            additionalUnitPrice: 80,
                            deliveryDuration: "3 days",
                            label: "Delux Regular",
                            iconUrl: "https://appigo-mall.hsenidmobile.com/merchant-resources/delux/mEX0vQpvSr.png"
                        }
                    }
                },
                Zone3: {
                    zoneId: "Zone 3",
                    plans: {
                        Express: {
                            planId: "Express",
                            initialWeight: 5000,
                            initialPrice: 1000,
                            additionalUnitPrice: 200,
                            deliveryDuration: "1 day",
                            label: "Delux Express",
                            iconUrl: "https://appigo-mall.hsenidmobile.com/merchant-resources/delux/mEX0vQpvSr.png"
                        },
                        Regular: {
                            planId: "Regular",
                            initialWeight: 5000,
                            initialPrice: 500,
                            additionalUnitPrice: 100,
                            deliveryDuration: "3 days",
                            label: "Delux Regular",
                            iconUrl: "https://appigo-mall.hsenidmobile.com/merchant-resources/delux/mEX0vQpvSr.png"
                        }
                    }
                },
                Zone4: {
                    zoneId: "Zone 4",
                    plans: {
                        Express: {
                            planId: "Express",
                            initialWeight: 5000,
                            initialPrice: 100,
                            additionalUnitPrice: 100,
                            deliveryDuration: "1 day",
                            label: "Delux Express",
                            iconUrl: "https://appigo-mall.hsenidmobile.com/merchant-resources/delux/mEX0vQpvSr.png"
                        },
                        Regular: {
                            planId: "Regular",
                            initialWeight: 5000,
                            initialPrice: 100,
                            additionalUnitPrice: 100,
                            deliveryDuration: "3 days",
                            label: "Delux Regular",
                            iconUrl: "https://appigo-mall.hsenidmobile.com/merchant-resources/delux/mEX0vQpvSr.png"
                        }
                    }
                },
                Zone5: {
                    zoneId: "Zone 5",
                    plans: {
                        Express: {
                            planId: "Express",
                            initialWeight: 5000,
                            initialPrice: 100,
                            additionalUnitPrice: 100,
                            deliveryDuration: "1 day",
                            label: "Delux Express",
                            iconUrl: "https://appigo-mall.hsenidmobile.com/merchant-resources/delux/mEX0vQpvSr.png"
                        },
                        Regular: {
                            planId: "Regular",
                            initialWeight: 5000,
                            initialPrice: 100,
                            additionalUnitPrice: 100,
                            deliveryDuration: "3 days",
                            label: "Delux Regular",
                            iconUrl: "https://appigo-mall.hsenidmobile.com/merchant-resources/delux/mEX0vQpvSr.png"
                        }
                    }
                }
            },
            _class: "hms.core.appigo.deliverygateway.adaptor.selfdelivery.MerchantSpecificConfig"
        },
        _class: "hms.core.appigo.deliverygateway.commons.MerchantDeliveryPartnerConfigData"
    }
    //     {
    //         header: "Zone 1",
    //         desc: "Colombo 01, Colombo 02, Colombo 03, Colombo 04, Colombo 05" 
    //     },
    //     {
    //         header: "Zone 2",
    //         desc: "Colombo 01, Colombo 02, Colombo 03, Colombo 04, Colombo 05" 
    //     },
    //     {
    //         header: "Zone 3",
    //         desc: "Colombo 01, Colombo 02, Colombo 03, Colombo 04, Colombo 05" 
    //     },
    //     {
    //         header: "Zone 4",
    //         desc: "Colombo 01, Colombo 02, Colombo 03, Colombo 04, Colombo 05" 
    //     },
    //     {
    //         header: "Zone 5",
    //         desc: "Colombo 01, Colombo 02, Colombo 03, Colombo 04, Colombo 05" 
    //     }
]