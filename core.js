(function(global){const modules={'core/AlphaConfig':function(require,exports){
const ALPHA_CONFIG = {
    "version": "1.1",
    "familyRanks": {
        "1": {
            "name": "练气家族",
            "capacity": 30,
            "policySlots": 1,
            "requirements": null
        },
        "2": {
            "name": "筑基世家",
            "capacity": 80,
            "policySlots": 1,
            "requirements": {
                "foundation": 1,
                "population": 12,
                "reputation": 300,
                "spiritVein": "1-mid",
                "assets": 3000
            }
        },
        "3": {
            "name": "金丹世家",
            "capacity": 180,
            "policySlots": 2,
            "requirements": {
                "core": 1,
                "foundation": 4,
                "population": 35,
                "reputation": 2000,
                "spiritVein": "2",
                "assets": 15000
            }
        },
        "4": {
            "name": "元婴仙族",
            "capacity": 350,
            "policySlots": 2,
            "requirements": {
                "nascent": 1,
                "core": 3,
                "foundation": 10,
                "population": 80,
                "reputation": 8000,
                "spiritVein": "3",
                "assets": 60000
            }
        }
    },
    "upkeepPerYear": {
        "mortal": 0.5,
        "qi": 2,
        "foundation": 10,
        "core": 50,
        "nascent": 250
    },
    "buildings": {
        "hall": {
            "name": "议事堂",
            "levels": {
                "1": {
                    "upgradeCost": 0,
                    "rankRequired": 1
                },
                "2": {
                    "upgradeCost": 1500,
                    "rankRequired": 2
                },
                "3": {
                    "upgradeCost": 6000,
                    "rankRequired": 3
                },
                "4": {
                    "upgradeCost": 30000,
                    "rankRequired": 4
                }
            }
        },
        "spiritVein": {
            "name": "灵脉",
            "levels": {
                "1": {
                    "tier": "1-low",
                    "cultivationMultiplier": 1.0,
                    "breakthroughBonus": 0.0,
                    "upgradeCost": 0
                },
                "2": {
                    "tier": "1-mid",
                    "cultivationMultiplier": 1.05,
                    "breakthroughBonus": 0.02,
                    "upgradeCost": 2500
                },
                "3": {
                    "tier": "2",
                    "cultivationMultiplier": 1.12,
                    "breakthroughBonus": 0.05,
                    "upgradeCost": 10000
                },
                "4": {
                    "tier": "3",
                    "cultivationMultiplier": 1.22,
                    "breakthroughBonus": 0.08,
                    "upgradeCost": 50000
                }
            }
        },
        "field": {
            "name": "灵田",
            "levels": {
                "1": {
                    "herbsPerYear": 24,
                    "upgradeCost": 0
                },
                "2": {
                    "herbsPerYear": 60,
                    "upgradeCost": 800
                },
                "3": {
                    "herbsPerYear": 180,
                    "upgradeCost": 3200
                },
                "4": {
                    "herbsPerYear": 320,
                    "upgradeCost": 16000
                }
            }
        },
        "mine": {
            "name": "灵矿",
            "levels": {
                "1": {
                    "stonesPerYear": 150,
                    "materialsPerYear": 8,
                    "upgradeCost": 0
                },
                "2": {
                    "stonesPerYear": 400,
                    "materialsPerYear": 20,
                    "upgradeCost": 1000
                },
                "3": {
                    "stonesPerYear": 1000,
                    "materialsPerYear": 50,
                    "upgradeCost": 4500
                },
                "4": {
                    "stonesPerYear": 2400,
                    "materialsPerYear": 120,
                    "upgradeCost": 22000
                }
            }
        },
        "library": {
            "name": "藏经阁",
            "levels": {
                "1": {
                    "gradeUnlock": "凡",
                    "upgradeCost": 0
                },
                "2": {
                    "gradeUnlock": "黄",
                    "upgradeCost": 1200
                },
                "3": {
                    "gradeUnlock": "玄",
                    "upgradeCost": 5000
                },
                "4": {
                    "gradeUnlock": "玄",
                    "techniqueBonus": 0.03,
                    "upgradeCost": 25000
                }
            }
        },
        "ancestralHall": {
            "name": "祖祠",
            "levels": {
                "1": {
                    "activeBlessings": 1,
                    "upgradeCost": 0
                },
                "2": {
                    "activeBlessings": 2,
                    "upgradeCost": 800
                },
                "3": {
                    "activeBlessings": 3,
                    "upgradeCost": 3500
                },
                "4": {
                    "activeBlessings": 4,
                    "upgradeCost": 18000
                }
            }
        },
        "trainingGround": {
            "name": "演武场",
            "levels": {
                "1": {
                    "minorCultivationBonus": 0.0,
                    "upgradeCost": 0
                },
                "2": {
                    "minorCultivationBonus": 0.02,
                    "upgradeCost": 800
                },
                "3": {
                    "minorCultivationBonus": 0.04,
                    "upgradeCost": 3500
                },
                "4": {
                    "minorCultivationBonus": 0.06,
                    "upgradeCost": 18000
                }
            }
        }
    },
    "policies": {
        "cultivation": {
            "name": "重视修炼",
            "cultivationMultiplier": 1.08,
            "upkeepMultiplier": 1.1
        },
        "fertility": {
            "name": "鼓励婚育",
            "fertilityMultiplier": 1.1,
            "marriageMultiplier": 1.1,
            "upkeepMultiplier": 1.05
        },
        "recruit": {
            "name": "广纳散修",
            "annualRecruitChance": 0.08,
            "reputationPerRecruit": -10
        },
        "quiet": {
            "name": "韬光养晦",
            "conflictMultiplier": 0.7,
            "reputationGrowthMultiplier": 0.8
        },
        "economy": {
            "name": "开拓经营",
            "productionMultiplier": 1.12,
            "cultivationMultiplier": 0.97
        }
    },
    "policyChangeCooldownYears": 5,
    "branching": {
        "triggerCapacityRatio": 1.1,
        "targetCapacityRatioAfterMigration": 0.92,
        "annualCheck": true
    },
    "market": {
        "foundationPillPriceMin": 800,
        "foundationPillPriceMax": 1200,
        "herbSellPrice": 3,
        "materialSellPrice": 8
    },
    "npcWorld": {
        "familyCount": 10,
        "sectCount": 2,
        "initialNascentCount": 0,
        "initialCoreMin": 3,
        "initialCoreMax": 8,
        "familyNames": [
            "林氏",
            "陈氏",
            "赵氏",
            "顾氏",
            "苏氏",
            "陆氏",
            "沈氏",
            "叶氏",
            "韩氏",
            "温氏",
            "周氏",
            "宁氏"
        ],
        "sectNames": [
            "青玄宗",
            "流云谷"
        ],
        "marketName": "天河坊市"
    },
    "exploration": [
        {
            "id": "black_water_ridge",
            "name": "黑水岭",
            "danger": 1,
            "unlockRank": 1
        },
        {
            "id": "ancient_pine_ruins",
            "name": "古松遗迹",
            "danger": 2,
            "unlockRank": 2
        },
        {
            "id": "qingxia_secret",
            "name": "青霞秘境",
            "danger": 3,
            "unlockRank": 2,
            "periodYears": 80
        },
        {
            "id": "fallen_star_valley",
            "name": "落星谷",
            "danger": 4,
            "unlockRank": 3
        }
    ],
    "combatRealmBase": {
        "mortal": 1,
        "qi": 10,
        "foundation": 120,
        "core": 1500,
        "nascent": 20000
    },
    "stabilization": {
        "stageYears": {
            "qi": 5.5,
            "foundation": 28,
            "core": 50,
            "nascent": 90
        },
        "breakthroughCosts": {
            "foundation": {
                "stones": 1600,
                "herbs": 500,
                "materials": 90
            },
            "core": {
                "stones": 6000,
                "herbs": 1000,
                "materials": 300
            },
            "nascent": {
                "stones": 50000,
                "herbs": 5500,
                "materials": 2000
            }
        },
        "autoReserveFraction": 0.5,
        "autoUpkeepReserveYears": 4,
        "failureRecoveryYears": {
            "foundation": [
                3,
                5
            ],
            "core": [
                8,
                14
            ],
            "nascent": [
                12,
                24
            ]
        },
        "failureProgress": {
            "foundation": [
                0.3,
                0.2,
                0,
                0
            ],
            "core": [
                0,
                0,
                0,
                0
            ],
            "nascent": [
                0,
                0,
                0,
                0
            ]
        },
        "nascentPreparationYears": [
            140,
            180
        ],
        "annualReputationBase": 3.5,
        "annualReputationPerCultivator": 1.5,
        "npcReputationBase": 1,
        "npcFoundationSupportRatio": 0.1,
        "npcIntermarriageChance": 0.006,
        "npcIntermarriageCooldownYears": 12,
        "npcTraitIncome": {
            "善商": 1.15,
            "重文": 0.95,
            "尚武": 0.85
        },
        "npcTraitReputation": {
            "善商": 0.9,
            "重文": 1.2,
            "尚武": 1
        },
        "npcVeinUpgradeCosts": [
            0,
            0,
            10000,
            50000
        ],
        "npcProductionMultiplier": 1.1,
        "npcAnnualRecruitChance": 0.04,
        "npcPeoplePerNotable": 20,
        "npcDeathReputationLoss": {
            "mortal": 5,
            "qi": 10,
            "foundation": 40,
            "core": 120,
            "nascent": 400
        },
        "nascentDifficulty": 0.12
    }
};
const EVENT_PACK = {
    "schemaVersion": "1.0",
    "minimumTemplatesToImplement": 45,
    "requiredChains": [
        "mysterious_oldman",
        "missing_member",
        "branch_crisis",
        "ancestral_sword",
        "first_nascent"
    ],
    "events": [
        {
            "id": "p_early_wisdom",
            "category": "person",
            "level": 1,
            "title": "幼年早慧",
            "mode": "auto",
            "conditions": [
                "age 6-14"
            ],
            "choices": [],
            "effects": [
                "comprehension +2~5"
            ],
            "cooldownYears": 20,
            "chain": null
        },
        {
            "id": "p_weak_childhood",
            "category": "person",
            "level": 1,
            "title": "幼年体弱",
            "mode": "auto",
            "conditions": [
                "age 6-14"
            ],
            "choices": [],
            "effects": [
                "constitution -2~5"
            ],
            "cooldownYears": 20,
            "chain": null
        },
        {
            "id": "p_starry_insight",
            "category": "person",
            "level": 2,
            "title": "夜观星象有所悟",
            "mode": "auto",
            "conditions": [
                "cultivator",
                "mood != demon"
            ],
            "choices": [],
            "effects": [
                "cultivation +8~18%"
            ],
            "cooldownYears": 15,
            "chain": null
        },
        {
            "id": "p_bottleneck_confusion",
            "category": "person",
            "level": 1,
            "title": "久困瓶颈",
            "mode": "auto",
            "conditions": [
                "bottleneck >= 5 years"
            ],
            "choices": [],
            "effects": [
                "mood -> confused"
            ],
            "cooldownYears": 10,
            "chain": null
        },
        {
            "id": "p_family_loss_growth",
            "category": "person",
            "level": 2,
            "title": "丧亲之后",
            "mode": "auto",
            "conditions": [
                "recent close-family death"
            ],
            "choices": [],
            "effects": [
                "trait change weighted by personality"
            ],
            "cooldownYears": 20,
            "chain": null
        },
        {
            "id": "p_clan_competition_win",
            "category": "person",
            "level": 1,
            "title": "族内比试胜出",
            "mode": "auto",
            "conditions": [
                "age >= 14",
                "cultivator"
            ],
            "choices": [],
            "effects": [
                "reputation +small",
                "mood -> excited"
            ],
            "cooldownYears": 8,
            "chain": null
        },
        {
            "id": "p_clan_competition_loss",
            "category": "person",
            "level": 1,
            "title": "族内比试受挫",
            "mode": "auto",
            "conditions": [
                "age >= 14",
                "cultivator"
            ],
            "choices": [],
            "effects": [
                "trait/mood branch"
            ],
            "cooldownYears": 8,
            "chain": null
        },
        {
            "id": "p_retreat_insight",
            "category": "person",
            "level": 2,
            "title": "闭关顿悟",
            "mode": "auto",
            "conditions": [
                "inRetreat"
            ],
            "choices": [],
            "effects": [
                "cultivation +10~25%",
                "small chance mood clear"
            ],
            "cooldownYears": 12,
            "chain": null
        },
        {
            "id": "p_retreat_deviation",
            "category": "person",
            "level": 2,
            "title": "闭关气息紊乱",
            "mode": "auto",
            "conditions": [
                "inRetreat"
            ],
            "choices": [],
            "effects": [
                "light injury or early exit"
            ],
            "cooldownYears": 15,
            "chain": null
        },
        {
            "id": "p_old_age_legacy",
            "category": "person",
            "level": 3,
            "title": "大限将近",
            "mode": "choice",
            "conditions": [
                "ageRatio >= 0.9",
                "important person"
            ],
            "choices": [
                {
                    "id": "retreat",
                    "text": "闭死关",
                    "effects": [
                        "enter retreat",
                        "breakthrough preparation +small"
                    ]
                },
                {
                    "id": "legacy",
                    "text": "整理传承",
                    "effects": [
                        "create legacy note",
                        "family reputation +small"
                    ]
                },
                {
                    "id": "peace",
                    "text": "安度晚年",
                    "effects": [
                        "mood -> clear"
                    ]
                }
            ],
            "effects": [],
            "cooldownYears": 100,
            "chain": null
        },
        {
            "id": "m_clan_proposal",
            "category": "marriage",
            "level": 3,
            "title": "邻族提亲",
            "mode": "choice",
            "conditions": [
                "npc relation >= normal",
                "eligible important member"
            ],
            "choices": [
                {
                    "id": "accept",
                    "text": "接受",
                    "effects": [
                        "create interfamily marriage",
                        "relation +15"
                    ]
                },
                {
                    "id": "reject",
                    "text": "婉拒",
                    "effects": [
                        "relation -5"
                    ]
                }
            ],
            "effects": [],
            "cooldownYears": 8,
            "chain": null
        },
        {
            "id": "m_marry_in_request",
            "category": "marriage",
            "level": 3,
            "title": "对方愿入族",
            "mode": "choice",
            "conditions": [
                "proposal"
            ],
            "choices": [
                {
                    "id": "accept",
                    "text": "接纳",
                    "effects": [
                        "partner isResident true"
                    ]
                },
                {
                    "id": "reject",
                    "text": "拒绝",
                    "effects": [
                        "relation -3"
                    ]
                }
            ],
            "effects": [],
            "cooldownYears": 0,
            "chain": null
        },
        {
            "id": "m_marry_out_request",
            "category": "marriage",
            "level": 3,
            "title": "对方要求外迁",
            "mode": "choice",
            "conditions": [
                "stronger npc family proposal"
            ],
            "choices": [
                {
                    "id": "accept",
                    "text": "同意外迁",
                    "effects": [
                        "player member isResident false",
                        "relation +12"
                    ]
                },
                {
                    "id": "reject",
                    "text": "拒绝",
                    "effects": [
                        "relation -8"
                    ]
                }
            ],
            "effects": [],
            "cooldownYears": 0,
            "chain": null
        },
        {
            "id": "b_twins",
            "category": "birth",
            "level": 2,
            "title": "双生之喜",
            "mode": "auto",
            "conditions": [
                "birth trigger"
            ],
            "choices": [],
            "effects": [
                "small chance create second child"
            ],
            "cooldownYears": 20,
            "chain": null
        },
        {
            "id": "r_heavenly_sign",
            "category": "root",
            "level": 4,
            "title": "天灵根现世",
            "mode": "auto",
            "conditions": [
                "new root heavenly",
                "player family"
            ],
            "choices": [],
            "effects": [
                "reputation +50",
                "chronicle"
            ],
            "cooldownYears": 0,
            "chain": null
        },
        {
            "id": "r_thunder_sign",
            "category": "root",
            "level": 4,
            "title": "雷灵根异象",
            "mode": "auto",
            "conditions": [
                "mutant thunder",
                "player family"
            ],
            "choices": [],
            "effects": [
                "reputation +60",
                "chronicle"
            ],
            "cooldownYears": 0,
            "chain": null
        },
        {
            "id": "r_ice_sign",
            "category": "root",
            "level": 4,
            "title": "冰灵根异象",
            "mode": "auto",
            "conditions": [
                "mutant ice",
                "player family"
            ],
            "choices": [],
            "effects": [
                "reputation +50",
                "chronicle"
            ],
            "cooldownYears": 0,
            "chain": null
        },
        {
            "id": "r_wind_sign",
            "category": "root",
            "level": 4,
            "title": "风灵根异象",
            "mode": "auto",
            "conditions": [
                "mutant wind",
                "player family"
            ],
            "choices": [],
            "effects": [
                "reputation +50",
                "chronicle"
            ],
            "cooldownYears": 0,
            "chain": null
        },
        {
            "id": "bl_awaken",
            "category": "bloodline",
            "level": 3,
            "title": "沉睡血脉觉醒",
            "mode": "auto",
            "conditions": [
                "bloodline 25-49",
                "fortune check"
            ],
            "choices": [],
            "effects": [
                "bloodline +15~30"
            ],
            "cooldownYears": 30,
            "chain": null
        },
        {
            "id": "bl_atavism",
            "category": "bloodline",
            "level": 4,
            "title": "远祖血脉返祖",
            "mode": "auto",
            "conditions": [
                "ancestor bloodline exists",
                "rare check"
            ],
            "choices": [],
            "effects": [
                "bloodline -> 50~85",
                "chronicle"
            ],
            "cooldownYears": 80,
            "chain": null
        },
        {
            "id": "f_field_harvest",
            "category": "family",
            "level": 1,
            "title": "灵田丰收",
            "mode": "auto",
            "conditions": [],
            "choices": [],
            "effects": [
                "herbs +20~50% annual output"
            ],
            "cooldownYears": 8,
            "chain": null
        },
        {
            "id": "f_mine_vein",
            "category": "family",
            "level": 2,
            "title": "灵矿发现支脉",
            "mode": "auto",
            "conditions": [],
            "choices": [],
            "effects": [
                "materials +20~50",
                "stones +100~400"
            ],
            "cooldownYears": 15,
            "chain": null
        },
        {
            "id": "f_mine_decline",
            "category": "family",
            "level": 2,
            "title": "灵矿产量下降",
            "mode": "choice",
            "conditions": [],
            "choices": [
                {
                    "id": "repair",
                    "text": "投入灵石整修",
                    "effects": [
                        "stones -300",
                        "avoid production debuff"
                    ]
                },
                {
                    "id": "accept",
                    "text": "暂且接受",
                    "effects": [
                        "mine production -15% for 5 years"
                    ]
                }
            ],
            "effects": [],
            "cooldownYears": 20,
            "chain": null
        },
        {
            "id": "f_wanderer_join",
            "category": "family",
            "level": 3,
            "title": "散修投奔",
            "mode": "choice",
            "conditions": [
                "policy recruit or reputation >= 300"
            ],
            "choices": [
                {
                    "id": "accept",
                    "text": "接纳",
                    "effects": [
                        "create outsider resident",
                        "reputation +small"
                    ]
                },
                {
                    "id": "investigate",
                    "text": "先行查验",
                    "effects": [
                        "fortune/check branch"
                    ]
                },
                {
                    "id": "reject",
                    "text": "拒绝",
                    "effects": []
                }
            ],
            "effects": [],
            "cooldownYears": 8,
            "chain": null
        },
        {
            "id": "f_position_dispute",
            "category": "family",
            "level": 3,
            "title": "长老人选争议",
            "mode": "choice",
            "conditions": [
                "rank >=2"
            ],
            "choices": [
                {
                    "id": "seniority",
                    "text": "按资历",
                    "effects": [
                        "older candidate position"
                    ]
                },
                {
                    "id": "talent",
                    "text": "按能力",
                    "effects": [
                        "better-stat candidate position"
                    ]
                },
                {
                    "id": "vacant",
                    "text": "暂缓任命",
                    "effects": [
                        "small stability penalty"
                    ]
                }
            ],
            "effects": [],
            "cooldownYears": 15,
            "chain": null
        },
        {
            "id": "f_policy_debate",
            "category": "family",
            "level": 2,
            "title": "族中议论家策",
            "mode": "auto",
            "conditions": [
                "policy active"
            ],
            "choices": [],
            "effects": [
                "small mood/reputation flavor"
            ],
            "cooldownYears": 10,
            "chain": null
        },
        {
            "id": "f_branch_request",
            "category": "family",
            "level": 3,
            "title": "旁支请求外迁",
            "mode": "choice",
            "conditions": [
                "population over capacity"
            ],
            "choices": [
                {
                    "id": "approve",
                    "text": "准许立支",
                    "effects": [
                        "create C-tier branch"
                    ]
                },
                {
                    "id": "delay",
                    "text": "暂缓",
                    "effects": [
                        "overcapacity pressure +1"
                    ]
                }
            ],
            "effects": [],
            "cooldownYears": 5,
            "chain": null
        },
        {
            "id": "f_branch_return",
            "category": "family",
            "level": 3,
            "title": "外迁支系请求回归",
            "mode": "choice",
            "conditions": [
                "branch exists",
                "branch relation >= friendly"
            ],
            "choices": [
                {
                    "id": "accept",
                    "text": "迎回人才",
                    "effects": [
                        "spawn notable descendant",
                        "resident population +small"
                    ]
                },
                {
                    "id": "support",
                    "text": "资助支系",
                    "effects": [
                        "stones -300",
                        "branch relation +15"
                    ]
                },
                {
                    "id": "decline",
                    "text": "婉拒",
                    "effects": [
                        "branch relation -8"
                    ]
                }
            ],
            "effects": [],
            "cooldownYears": 15,
            "chain": null
        },
        {
            "id": "d_neighbor_gift",
            "category": "diplomacy",
            "level": 2,
            "title": "邻族赠礼",
            "mode": "auto",
            "conditions": [
                "npc relation >= friendly"
            ],
            "choices": [],
            "effects": [
                "stones/materials +small",
                "relation +3"
            ],
            "cooldownYears": 10,
            "chain": null
        },
        {
            "id": "d_neighbor_aid",
            "category": "diplomacy",
            "level": 3,
            "title": "邻族求援",
            "mode": "choice",
            "conditions": [
                "npc family crisis"
            ],
            "choices": [
                {
                    "id": "aid",
                    "text": "出手相助",
                    "effects": [
                        "stones -500",
                        "relation +20",
                        "reputation +50"
                    ]
                },
                {
                    "id": "decline",
                    "text": "婉拒",
                    "effects": [
                        "relation -10"
                    ]
                }
            ],
            "effects": [],
            "cooldownYears": 15,
            "chain": null
        },
        {
            "id": "d_land_dispute",
            "category": "diplomacy",
            "level": 3,
            "title": "灵地争议",
            "mode": "choice",
            "conditions": [
                "npc relation <= normal"
            ],
            "choices": [
                {
                    "id": "negotiate",
                    "text": "协商",
                    "effects": [
                        "diplomacy check"
                    ]
                },
                {
                    "id": "yield",
                    "text": "退让",
                    "effects": [
                        "relation +5",
                        "reputation -small"
                    ]
                },
                {
                    "id": "contest",
                    "text": "争夺",
                    "effects": [
                        "auto conflict check"
                    ]
                }
            ],
            "effects": [],
            "cooldownYears": 20,
            "chain": null
        },
        {
            "id": "d_generational_friendship",
            "category": "diplomacy",
            "level": 4,
            "title": "世交之谊",
            "mode": "auto",
            "conditions": [
                "3+ historical marriages with same npc"
            ],
            "choices": [],
            "effects": [
                "memory tag 世交",
                "relation floor friendly"
            ],
            "cooldownYears": 100,
            "chain": null
        },
        {
            "id": "n_highest_death",
            "category": "world",
            "level": 4,
            "title": "一族支柱寿终",
            "mode": "auto",
            "conditions": [
                "npc highest notable dies"
            ],
            "choices": [],
            "effects": [
                "npc prestige loss",
                "possible rank pressure"
            ],
            "cooldownYears": 0,
            "chain": null
        },
        {
            "id": "n_rank_up",
            "category": "world",
            "level": 4,
            "title": "邻族晋阶",
            "mode": "auto",
            "conditions": [
                "npc satisfies rank conditions"
            ],
            "choices": [],
            "effects": [
                "npc rank +1",
                "world chronicle"
            ],
            "cooldownYears": 0,
            "chain": null
        },
        {
            "id": "n_rank_down",
            "category": "world",
            "level": 4,
            "title": "邻族衰落",
            "mode": "auto",
            "conditions": [
                "npc no longer sustains rank for long"
            ],
            "choices": [],
            "effects": [
                "npc rank -1",
                "world chronicle"
            ],
            "cooldownYears": 0,
            "chain": null
        },
        {
            "id": "s_invitation",
            "category": "sect",
            "level": 3,
            "title": "宗门邀徒",
            "mode": "choice",
            "conditions": [
                "young talented player member"
            ],
            "choices": [
                {
                    "id": "accept",
                    "text": "入宗修行",
                    "effects": [
                        "set sectId",
                        "isResident false",
                        "sect relation +10"
                    ]
                },
                {
                    "id": "reject",
                    "text": "留在家族",
                    "effects": [
                        "sect relation -2"
                    ]
                }
            ],
            "effects": [],
            "cooldownYears": 8,
            "chain": null
        },
        {
            "id": "s_return_gift",
            "category": "sect",
            "level": 2,
            "title": "宗门子弟归家",
            "mode": "auto",
            "conditions": [
                "family member has sectId"
            ],
            "choices": [],
            "effects": [
                "stones/materials/technique chance"
            ],
            "cooldownYears": 12,
            "chain": null
        },
        {
            "id": "s_elder_visit",
            "category": "sect",
            "level": 3,
            "title": "宗门长老来访",
            "mode": "choice",
            "conditions": [
                "sect relation >= friendly"
            ],
            "choices": [
                {
                    "id": "host",
                    "text": "隆重接待",
                    "effects": [
                        "stones -300",
                        "sect relation +10",
                        "reputation +20"
                    ]
                },
                {
                    "id": "simple",
                    "text": "礼数周全",
                    "effects": [
                        "stones -80",
                        "sect relation +3"
                    ]
                }
            ],
            "effects": [],
            "cooldownYears": 15,
            "chain": null
        },
        {
            "id": "e_ruined_cave",
            "category": "exploration",
            "level": 3,
            "title": "废弃洞府",
            "mode": "choice",
            "conditions": [
                "expedition active"
            ],
            "choices": [
                {
                    "id": "break",
                    "text": "尝试破阵",
                    "effects": [
                        "comprehension/check -> reward or injury"
                    ]
                },
                {
                    "id": "scout",
                    "text": "先行探查",
                    "effects": [
                        "fortune/check -> reveal risk"
                    ]
                },
                {
                    "id": "leave",
                    "text": "绕行",
                    "effects": []
                }
            ],
            "effects": [],
            "cooldownYears": 0,
            "chain": null
        },
        {
            "id": "e_beast_tracks",
            "category": "exploration",
            "level": 2,
            "title": "妖兽踪迹",
            "mode": "choice",
            "conditions": [
                "expedition active"
            ],
            "choices": [
                {
                    "id": "hunt",
                    "text": "追猎",
                    "effects": [
                        "auto combat"
                    ]
                },
                {
                    "id": "avoid",
                    "text": "避开",
                    "effects": [
                        "safe progress"
                    ]
                }
            ],
            "effects": [],
            "cooldownYears": 0,
            "chain": null
        },
        {
            "id": "e_spirit_herbs",
            "category": "exploration",
            "level": 2,
            "title": "灵药谷地",
            "mode": "choice",
            "conditions": [
                "expedition active"
            ],
            "choices": [
                {
                    "id": "gather",
                    "text": "采集",
                    "effects": [
                        "herbs +",
                        "small risk"
                    ]
                },
                {
                    "id": "mark",
                    "text": "记录位置",
                    "effects": [
                        "future event tag"
                    ]
                }
            ],
            "effects": [],
            "cooldownYears": 0,
            "chain": null
        },
        {
            "id": "e_secret_open",
            "category": "world",
            "level": 4,
            "title": "青霞秘境开启",
            "mode": "auto",
            "conditions": [
                "year matches period"
            ],
            "choices": [],
            "effects": [
                "unlock expedition for limited years",
                "world chronicle"
            ],
            "cooldownYears": 70,
            "chain": null
        },
        {
            "id": "e_market_fair",
            "category": "world",
            "level": 2,
            "title": "天河坊市大集",
            "mode": "auto",
            "conditions": [
                "every 10-20 years"
            ],
            "choices": [],
            "effects": [
                "market special inventory"
            ],
            "cooldownYears": 10,
            "chain": null
        },
        {
            "id": "c_oldman_1",
            "category": "chain",
            "level": 3,
            "title": "山下老人",
            "mode": "choice",
            "conditions": [],
            "choices": [
                {
                    "id": "save",
                    "text": "救下老人",
                    "effects": [
                        "memory tag oldman_saved"
                    ],
                    "next": "c_oldman_2",
                    "delayYears": [
                        5,
                        12
                    ]
                },
                {
                    "id": "leave",
                    "text": "不作干涉",
                    "effects": []
                }
            ],
            "effects": [],
            "cooldownYears": 100,
            "chain": "mysterious_oldman"
        },
        {
            "id": "c_oldman_2",
            "category": "chain",
            "level": 2,
            "title": "故人再至",
            "mode": "auto",
            "conditions": [
                "tag oldman_saved"
            ],
            "choices": [],
            "effects": [
                "gain broken jade"
            ],
            "cooldownYears": 0,
            "chain": "mysterious_oldman"
        },
        {
            "id": "c_oldman_3",
            "category": "chain",
            "level": 3,
            "title": "玉简显影",
            "mode": "auto",
            "conditions": [
                "has broken jade"
            ],
            "choices": [],
            "effects": [
                "unlock ancient cave expedition"
            ],
            "cooldownYears": 0,
            "chain": "mysterious_oldman"
        },
        {
            "id": "c_missing_1",
            "category": "chain",
            "level": 4,
            "title": "族人失踪",
            "mode": "auto",
            "conditions": [
                "expedition member"
            ],
            "choices": [],
            "effects": [
                "mark missing"
            ],
            "cooldownYears": 0,
            "chain": "missing_member"
        },
        {
            "id": "c_missing_2",
            "category": "chain",
            "level": 3,
            "title": "遗物送回",
            "mode": "auto",
            "conditions": [
                "missing 5+ years"
            ],
            "choices": [
                {
                    "id": "investigate",
                    "text": "继续查找",
                    "effects": [
                        "unlock follow-up"
                    ],
                    "next": "c_missing_3",
                    "delayYears": [
                        1,
                        5
                    ]
                },
                {
                    "id": "memorial",
                    "text": "立碑纪念",
                    "effects": [
                        "chronicle"
                    ]
                }
            ],
            "effects": [],
            "cooldownYears": 0,
            "chain": "missing_member"
        },
        {
            "id": "c_missing_3",
            "category": "chain",
            "level": 4,
            "title": "多年后的消息",
            "mode": "auto",
            "conditions": [
                "investigation tag"
            ],
            "choices": [],
            "effects": [
                "resolve: alive/sect/safe tragedy weighted"
            ],
            "cooldownYears": 0,
            "chain": "missing_member"
        },
        {
            "id": "c_outbranch_1",
            "category": "chain",
            "level": 3,
            "title": "外嫁支系求援",
            "mode": "auto",
            "conditions": [
                "external branch crisis"
            ],
            "choices": [
                {
                    "id": "shelter",
                    "text": "接纳后人",
                    "effects": [
                        "spawn notable descendants",
                        "relation +"
                    ]
                },
                {
                    "id": "fund",
                    "text": "提供资源",
                    "effects": [
                        "stones -",
                        "branch survival +"
                    ]
                },
                {
                    "id": "refuse",
                    "text": "拒绝",
                    "effects": [
                        "branch relation -"
                    ]
                }
            ],
            "effects": [],
            "cooldownYears": 0,
            "chain": "branch_crisis"
        },
        {
            "id": "c_outbranch_2",
            "category": "chain",
            "level": 3,
            "title": "旧仇随之而来",
            "mode": "auto",
            "conditions": [
                "shelter choice"
            ],
            "choices": [],
            "effects": [
                "diplomacy complication"
            ],
            "cooldownYears": 0,
            "chain": "branch_crisis"
        },
        {
            "id": "c_sword_1",
            "category": "chain",
            "level": 4,
            "title": "老祖遗剑",
            "mode": "auto",
            "conditions": [
                "important elder death"
            ],
            "choices": [],
            "effects": [
                "create ancestral item"
            ],
            "cooldownYears": 0,
            "chain": "ancestral_sword"
        },
        {
            "id": "c_sword_2",
            "category": "chain",
            "level": 3,
            "title": "剑中残意",
            "mode": "auto",
            "conditions": [
                "ancestral sword exists",
                "high comprehension descendant"
            ],
            "choices": [],
            "effects": [
                "unlock technique insight"
            ],
            "cooldownYears": 0,
            "chain": "ancestral_sword"
        },
        {
            "id": "c_sword_3",
            "category": "chain",
            "level": 3,
            "title": "旧剑入祠",
            "mode": "auto",
            "conditions": [
                "insight resolved"
            ],
            "choices": [],
            "effects": [
                "ancestral hall display",
                "small blessing"
            ],
            "cooldownYears": 0,
            "chain": "ancestral_sword"
        },
        {
            "id": "c_nascent_1",
            "category": "chain",
            "level": 4,
            "title": "闭关冲婴",
            "mode": "auto",
            "conditions": [
                "core perfect important character"
            ],
            "choices": [],
            "effects": [
                "mark long retreat"
            ],
            "cooldownYears": 0,
            "chain": "first_nascent"
        },
        {
            "id": "c_nascent_2",
            "category": "chain",
            "level": 5,
            "title": "云州灵气异动",
            "mode": "auto",
            "conditions": [
                "first nascent attempt reaches climax"
            ],
            "choices": [],
            "effects": [
                "world notice"
            ],
            "cooldownYears": 0,
            "chain": "first_nascent"
        },
        {
            "id": "c_nascent_3",
            "category": "chain",
            "level": 5,
            "title": "元婴现世",
            "mode": "auto",
            "conditions": [
                "first nascent success"
            ],
            "choices": [],
            "effects": [
                "WORLD_FIRST_NASCENT_SOUL",
                "all faction reactions"
            ],
            "cooldownYears": 0,
            "chain": "first_nascent"
        }
    ]
};

exports.ALPHA_CONFIG=ALPHA_CONFIG;
exports.EVENT_PACK=EVENT_PACK;
},
'core/AlphaState':function(require,exports){
const { Character, GameState, LifeEvent }=require('./GameState');
function alphaDefaults() {
    return {
        gameVersion: 'Alpha 0.3',
        herbs: 0,
        materials: 0,
        reputation: 100,
        buildings: {
            hall: 1,
            spiritVein: 1,
            field: 1,
            mine: 1,
            library: 1,
            ancestralHall: 1,
            trainingGround: 1
        },
        policies: [],
        policyChanged: -5,
        positions: {
            elder: null,
            teacher: null,
            envoy: null,
            steward: null
        },
        poor: false,
        annual: {
            income: 0,
            upkeep: 0
        },
        branches: [],
        pressure: 0,
        world: [],
        worldHistory: [],
        familyHistory: [],
        firstNascent: null,
        inventory: {
            foundationPill: 0
        },
        market: {
            price: 1000,
            stock: 3,
            special: false
        },
        memories: {},
        cooldowns: {},
        scheduled: [],
        eventSeen: {},
        expedition: null,
        lastExpeditionSettlement: null,
        lastDecisionYear: -5,
        mineDebuffUntil: 0,
        missing: {},
        memorialIds: [],
        firstYears: {},
        worldModal: false,
        bootstrapped: false
    };
}
function ensureAlpha(s) {
    const d = alphaDefaults(), a = s.alpha;
    s.alpha = {
        ...d,
        ...a,
        buildings: {
            ...d.buildings,
            ...a?.buildings
        },
        positions: {
            ...d.positions,
            ...a?.positions
        },
        market: {
            ...d.market,
            ...a?.market
        },
        inventory: {
            ...d.inventory,
            ...a?.inventory
        }
    };
    for (const key of Object.keys(d)){
        const def = d[key], value = s.alpha[key];
        if (Array.isArray(def) && !Array.isArray(value)) s.alpha[key] = def;
        else if (def && typeof def === 'object' && !Array.isArray(def) && (!value || typeof value !== 'object')) s.alpha[key] = def;
    }
    s.alpha.gameVersion = d.gameVersion;
    for (const f of s.alpha.world){
        f.intermarriages ??= {};
        f.relations ??= {};
    }
    if (s.alpha.expedition) {
        const x = s.alpha.expedition;
        x.plannedNodes ??= x.total;
        x.currentNode ??= x.node + 1;
        x.extraNodes ??= 0;
        x.startedYear ??= s.meta.gameYear;
        x.startedMonth ??= s.meta.gameMonth;
        x.injuredIds ??= [];
        x.findings ??= [];
    }
    const occupied = new Set(s.playerFamily.leaderId ? [
        s.playerFamily.leaderId
    ] : []);
    for (const role of [
        'elder',
        'teacher',
        'envoy',
        'steward'
    ]){
        const id = s.alpha.positions[role];
        if (id && (occupied.has(id) || !s.characters.alive[id])) s.alpha.positions[role] = null;
        else if (id) occupied.add(id);
    }
    return s.alpha;
}
function playerMember(s, c) {
    return !c.factionId || c.factionId === s.playerFamily.id;
}
function resident(s, c) {
    return c.isResident && playerMember(s, c) && c.lifeStatus === 'alive';
}
const REALMS = [
    'mortal',
    'qi',
    'foundation',
    'core',
    'nascent', 'spirit', 'void'
];

exports.alphaDefaults=alphaDefaults;
exports.ensureAlpha=ensureAlpha;
exports.playerMember=playerMember;
exports.resident=resident;
exports.REALMS=REALMS;
},
'core/Configs':function(require,exports){
const CONFIG = {
    saveVersion: '1.2.2',
    rootTestAge: 6,
    cultivationStartAge: 8,
    lifespan: {
        mortal: 80,
        qi: 120,
        foundation: 220,
        core: 500,
        nascent: 1000
    },
    stages: {
        mortal: 1,
        qi: 9,
        foundation: 4,
        core: 4,
        nascent: 4
    },
    stageYears: {
        mortal: 0,
        qi: 4,
        foundation: 20,
        core: 45,
        nascent: 90
    },
    rootDistribution: [
        [
            'five',
            26
        ],
        [
            'four',
            35
        ],
        [
            'triple',
            27
        ],
        [
            'dual',
            10
        ],
        [
            'heavenly',
            2
        ]
    ],
    rootCount: {
        none: 0,
        five: 5,
        four: 4,
        triple: 3,
        dual: 2,
        heavenly: 1,
        mutant: 1
    },
    rootSpeed: {
        none: 0,
        five: .68,
        four: .82,
        triple: 1,
        dual: 1.25,
        heavenly: 1.55,
        mutant: 1.60
    },
    rootChance: .70,
    mutationChance: .008,
    genetics: {
        father: .42,
        mother: .42,
        ancestor: .08,
        mutation: .08,
        regression: .15,
        rootedParentBonus: .10,
        heavenlyWeightBonus: 11,
        dualWeightBonus: 1
    },
    comprehension: [
        [
            30,
            .90
        ],
        [
            50,
            1
        ],
        [
            70,
            1.05
        ],
        [
            85,
            1.10
        ],
        [
            95,
            1.15
        ],
        [
            101,
            1.20
        ]
    ],
    breakthrough: {
        foundation: .45,
        core: .35,
        nascent: .25
    },
    breakthroughModifiers: {
        root: {
            heavenly: .13,
            mutant: .14,
            dual: .08,
            triple: 0,
            four: -.05,
            five: -.09
        },
        comprehension: {
            baseline: 45,
            perPoint: .003
        },
        age: {
            agingStart: .78,
            penaltyPerRatio: .4
        },
        technique: {
            speedBaseline: 1,
            speedPerPoint: .02,
            affinityBaseline: .9,
            affinityPerPoint: .15
        },
        spiritVein: {
            '1-low': 0,
            other: .03
        },
        mood: {
            calm: 0,
            clear: .06,
            excited: .03,
            grieving: -.05,
            demon: -.12,
            confused: 0,
            obsessed: 0
        },
        injury: {
            healthy: 0,
            light: -.08,
            severe: -.25,
            critical: -.4
        },
        pill: {
            cost: 1000,
            bonus: .15,
            target: 'foundation'
        },
        probabilityLabels: [
            [
                .15,
                '极低'
            ],
            [
                .3,
                '较低'
            ],
            [
                .5,
                '尚可'
            ],
            [
                .7,
                '较高'
            ],
            [
                .85,
                '很高'
            ],
            [
                1,
                '极高'
            ]
        ]
    },
    failure: {
        foundation: [
            .70,
            .24,
            .05,
            .01
        ],
        core: [
            .55,
            .30,
            .12,
            .03
        ],
        nascent: [
            .45,
            .30,
            .20,
            .05
        ]
    },
    failureEffects: {
        progress: [
            .8,
            .65,
            .4,
            .4
        ],
        injuryMonths: [
            0,
            6,
            24,
            48
        ],
        catastrophicDeath: .06,
        lifespanPenalty: [
            5,
            15
        ],
        minorProgress: .9,
        minorRetryMonths: 3
    },
    minorChance: .94,
    majorRetryMonths: 24,
    majorMin: .05,
    majorMax: .95,
    get pillCost () {
        return this.breakthroughModifiers.pill.cost;
    },
    get pillBonus () {
        return this.breakthroughModifiers.pill.bonus;
    },
    fertility: .06,
    fertilityAges: [
        [
            36,
            1
        ],
        [
            51,
            .7
        ],
        [
            71,
            .3
        ],
        [
            101,
            .1
        ],
        [
            Infinity,
            .003
        ]
    ],
    childFactor: [
        1,
        .8,
        .55,
        .3,
        .1
    ],
    childMaximum: 4,
    minimumMarriageAge: 18,
    mortality: {
        agingStart: .78,
        highRisk: 1.15,
        extremeRisk: 1.2,
        baseAnnual: .0005
    },
    manualDecisions: {
        rareRoots: [
            'heavenly',
            'mutant'
        ],
        highestRepresentativeCount: 1
    },
    history: {
        biographyOnly: [
            'minor_success',
            'minor_failure',
            'root_test',
            'cultivation_start',
            'deferred',
            'decision',
            'debug'
        ]
    },
    bloodlineThresholds: [
        10,
        25,
        50,
        75,
        95
    ],
    speeds: {
        paused: 0,
        normal: 15,
        fast: 5,
        high: 2
    },
    offlineHourMs: 3600000,
    offlineMaxYears: 24,
    marriageAnnual: .25,
    techniques: [
        {
            id: 'metal_basic',
            name: '金元诀',
            element: 'metal',
            grade: '凡',
            speed: 1
        },
        {
            id: 'wood_basic',
            name: '青木诀',
            element: 'wood',
            grade: '凡',
            speed: 1
        },
        {
            id: 'water_basic',
            name: '流水诀',
            element: 'water',
            grade: '凡',
            speed: 1
        },
        {
            id: 'fire_basic',
            name: '赤火诀',
            element: 'fire',
            grade: '凡',
            speed: 1
        },
        {
            id: 'earth_basic',
            name: '厚土诀',
            element: 'earth',
            grade: '凡',
            speed: 1
        },
        {
            id: 'qingluan_art',
            name: '青鸾养元功',
            element: 'wood',
            grade: '黄',
            speed: 1.08
        },
        {
            id: 'thunder_art',
            name: '玄雷真法',
            element: 'thunder',
            grade: '玄',
            speed: 1.16
        }
    ],
    elements: [
        'metal',
        'wood',
        'water',
        'fire',
        'earth'
    ],
    mutantElements: [
        'thunder',
        'ice',
        'wind'
    ],
    bloodlines: [
        'qingluan',
        'xuantu'
    ],
    traits: [
        'cautious',
        'affectionate',
        'diligent',
        'bold',
        'quiet'
    ]
};
const clamp = (n, min = 0, max = 100)=>Math.min(max, Math.max(min, n));
const annualToMonthly = (p)=>1 - Math.pow(1 - clamp(p, 0, 1), 1 / 12);

exports.CONFIG=CONFIG;
exports.clamp=clamp;
exports.annualToMonthly=annualToMonthly;
},
'core/DecisionPolicy':function(require,exports){
const { GameState, Character }=require('./GameState');
const { CONFIG }=require('./Configs');
const realms = [
    'mortal',
    'qi',
    'foundation',
    'core',
    'nascent', 'spirit', 'void'
];
function highestRealmRepresentative(state) {
    const people = Object.values(state.characters.alive).filter((c)=>c.isResident && (!c.factionId || c.factionId === state.playerFamily.id));
    people.sort((a, b)=>realms.indexOf(b.realm) - realms.indexOf(a.realm) || b.realmStage - a.realmStage || Number(b.id === state.playerFamily.leaderId) - Number(a.id === state.playerFamily.leaderId) || b.age - a.age || a.id.localeCompare(b.id));
    return people[0]?.id || null;
}
function isRareGenius(c) {
    return c.rootTested && CONFIG.manualDecisions.rareRoots.includes(c.rootType);
}
function manualMarriage(state, c) {
    return c.isWatched || c.id === state.playerFamily.leaderId || isRareGenius(c);
}
function manualBreakthrough(state, c) {
    return manualMarriage(state, c) || c.id === highestRealmRepresentative(state) || c.realm === 'core' && c.realmStage === CONFIG.stages.core;
}

exports.highestRealmRepresentative=highestRealmRepresentative;
exports.isRareGenius=isRareGenius;
exports.manualMarriage=manualMarriage;
exports.manualBreakthrough=manualBreakthrough;
},
'core/Engine':function(require,exports){
const { GameState, Character, findCharacter, absoluteMonth, ageMonths }=require('./GameState');
const { CONFIG }=require('./Configs');
const { RNGService }=require('./RNGService');
const { EventBus }=require('./EventBus');
const { NotificationSystem }=require('../systems/NotificationSystem');
const { CharacterSystem }=require('../systems/CharacterSystem');
const { GenealogySystem }=require('../systems/GenealogySystem');
const { CultivationSystem }=require('../systems/CultivationSystem');
const { MarriageSystem }=require('../systems/MarriageSystem');
const { BirthSystem }=require('../systems/BirthSystem');
const { LifespanSystem }=require('../systems/LifespanSystem');
const { TimeSystem }=require('../systems/TimeSystem');
const { SaveSystem }=require('../systems/SaveSystem');
const { AlphaWorldSystem }=require('../systems/AlphaWorldSystem');
class Engine {
    state;
    saves;
    world;
    rng;
    bus;
    notices;
    chars;
    gene;
    cultivation;
    marriage;
    birth;
    life;
    time;
    constructor(state, saves){
        this.state = state;
        this.saves = saves;
        this.rng = new RNGService(state.meta.seed, state.meta.rngState);
        this.bus = new EventBus();
        this.notices = new NotificationSystem(state, this.bus);
        this.gene = new GenealogySystem(state);
        this.chars = new CharacterSystem(state, this.rng, this.notices, this.gene);
        this.life = new LifespanSystem(state, this.rng, this.notices);
        this.cultivation = new CultivationSystem(state, this.rng, this.notices, this.life);
        this.marriage = new MarriageSystem(state, this.rng, this.gene, this.chars, this.notices);
        this.birth = new BirthSystem(state, this.rng, this.chars);
        this.time = new TimeSystem(state, this.rng, this.chars, this.cultivation, this.marriage, this.birth, this.life, ()=>{
            this.world.annual();
            this.save();
        }, this.bus);
        this.world = new AlphaWorldSystem(this);
    }
    static create(surname, seed, rerolls = 0, now = Date.now(), saves) {
        surname = surname.trim();
        if (!surname || surname.length > 8) throw new Error('请输入1至8字姓氏');
        const rng = new RNGService(seed);
        const state = {
            meta: {
                saveVersion: CONFIG.saveVersion,
                seed,
                rngState: rng.state,
                gameYear: 1,
                gameMonth: 1,
                createdAt: now,
                updatedAt: now,
                lastExitAt: now,
                nextId: 1,
                started: false,
                offlineCarryMs: 0
            },
            playerFamily: {
                id: 'family_player',
                surname,
                name: surname + '氏',
                rank: 1,
                spiritStones: 1200,
                spiritVeinTier: '1-low',
                initialRerollCount: rerolls,
                ancestorId: '',
                leaderId: null
            },
            characters: {
                alive: {},
                archive: {}
            },
            pendingDecisions: [],
            history: [],
            settings: {
                timeSpeed: 'paused',
                sound: false,
                debugEnabled: true,
                autoBreakthrough: true
            }
        };
        const e = new Engine(state, saves);
        const total = e.rng.int(5, 8);
        const ancestor = e.chars.create(50, 'male');
        const wife = e.chars.create(46, 'female', undefined, undefined, true);
        wife.isFamily = true;
        wife.rootType = 'none';
        wife.rootElements = [];
        wife.rootPurity = 0;
        ancestor.bloodlines = [
            {
                id: 'qingluan',
                strength: e.rng.int(25, 50)
            }
        ];
        ancestor.isWatched = true;
        state.playerFamily.ancestorId = ancestor.id;
        state.playerFamily.leaderId = ancestor.id;
        const giveQi = (c, stage)=>{
            if (c.rootType === 'none') {
                c.rootType = 'triple';
                c.rootElements = CONFIG.elements.slice().sort((a, b)=>c.rootAffinity[b] - c.rootAffinity[a]).slice(0, 3);
                c.rootPurity = .7;
            }
            e.chars.testRoot(c);
            e.chars.startCultivation(c);
            c.realm = 'qi';
            c.realmStage = stage;
            c.baseLifespan = 120;
        };
        giveQi(ancestor, 8);
        e.chars.testRoot(wife);
        e.chars.startCultivation(wife);
        e.marriage.marry(ancestor, wife, wife.birthYear + 18);
        for(let i = 2; i < total; i++){
            const child = e.chars.create(e.rng.int(18, 28), i % 2 ? 'female' : 'male', ancestor, wife);
            if (i < 4) giveQi(child, e.rng.int(2, 4));
            else {
                e.chars.testRoot(child);
                e.chars.startCultivation(child);
            }
        }
        state.meta.rngState = e.rng.state;
        return e;
    }
    start() {
        this.state.meta.started = true;
        this.save();
    }
    reroll() {
        if (this.state.meta.started || this.state.playerFamily.initialRerollCount >= 3) throw new Error('开局最多重刷3次');
        const count = this.state.playerFamily.initialRerollCount + 1;
        const e = Engine.create(this.state.playerFamily.surname, this.state.meta.seed + '-r' + count, count, this.state.meta.createdAt, this.saves);
        e.save();
        return e;
    }
    save(now = Date.now()) {
        this.state.meta.rngState = this.rng.state;
        this.saves?.save(this.state, now);
    }
    advanceYears(years) {
        this.time.advanceMonths(Math.floor(years * 12));
        this.save();
    }
    resolve(id, action, pill = false) {
        const d = this.state.pendingDecisions.find((x)=>x.id === id);
        if (!d) return false;
        if (d.type === 'event') return this.world.events.resolve(id, action);
        if (d.type === 'rank') return action === 'accept' && this.world.promote();
        if (d.type === 'marriage') {
            const a = findCharacter(this.state, d.characterId), b = findCharacter(this.state, d.payload.partnerId), f = this.world.faction(d.payload.npcId);
            const ok = this.marriage.resolve(id, action === 'accept');
            if (ok && action === 'accept' && a && b && f) this.world.marriageResolved(a, b, f, d.payload.mode || 'in');
            return ok;
        }
        const c = findCharacter(this.state, d.characterId);
        if (!c) return false;
        if (action === 'defer') {
            c.retryAtMonth = absoluteMonth(this.state) + 12;
            this.state.pendingDecisions = this.state.pendingDecisions.filter((x)=>x.id !== id);
            this.notices.record('deferred', `${c.name}暂缓突破一年`, [
                c
            ]);
            return true;
        }
        return this.cultivation.attempt(c, pill);
    }
    debugNewborn() {
        const mothers = this.world.residents().filter((c)=>c.gender === 'female' && c.age >= 18 && c.spouseIds.some((id)=>this.state.characters.alive[id]));
        let m = mothers[0], f = m ? findCharacter(this.state, m.spouseIds.find((id)=>this.state.characters.alive[id])) : undefined;
        if (!m || !f) {
            f = this.chars.create(24, 'male');
            m = this.chars.create(23, 'female', undefined, undefined, true);
            this.chars.testRoot(f);
            this.chars.startCultivation(f);
            this.chars.testRoot(m);
            this.chars.startCultivation(m);
            this.marriage.marry(f, m);
        }
        const c = this.chars.create(0, undefined, f, m);
        this.save();
        return c;
    }
    debugTestRoot(id) {
        const c = findCharacter(this.state, id);
        if (!c || c.lifeStatus !== 'alive' || c.rootTested || c.age >= 6) return false;
        const months = Math.max(0, 72 - ageMonths(this.state, c));
        this.time.advanceMonths(months);
        if (c.lifeStatus === 'alive') this.chars.testRoot(c);
        this.save();
        return c.rootTested;
    }
    debugBottleneck(id, target) {
        const c = findCharacter(this.state, id);
        if (!c || c.lifeStatus !== 'alive' || c.age < CONFIG.cultivationStartAge) return false;
        if (!c.rootTested) this.chars.testRoot(c);
        this.chars.startCultivation(c);
        if (c.rootType === 'none') {
            this.notices.record('debug', '无灵根者不能强制修炼', [
                c
            ]);
            return false;
        }
        if (target) {
            const previous = {
                foundation: 'qi',
                core: 'foundation',
                nascent: 'core', spirit: 'nascent', void: 'spirit'
            }[target];
            c.realm = previous;
            c.realmStage = CONFIG.stages[previous];
            c.baseLifespan = CONFIG.lifespan[previous];
        } else if (c.realm === 'mortal') return false;
        c.cultivationProgress = 1;
        c.isBottleneck = true;
        c.retryAtMonth = absoluteMonth(this.state);
        this.save();
        return true;
    }
}

exports.Engine=Engine;
},
'core/EventBus':function(require,exports){
class EventBus {
    listeners = [];
    subscribe(fn) {
        this.listeners.push(fn);
        return ()=>{
            this.listeners = this.listeners.filter((x)=>x !== fn);
        };
    }
    emit(event) {
        for (const fn of [
            ...this.listeners
        ])fn(event);
    }
}

exports.EventBus=EventBus;
},
'core/GameState':function(require,exports){
function allCharacters(s) {
    return [
        ...Object.values(s.characters.alive),
        ...Object.values(s.characters.archive)
    ];
}
function findCharacter(s, id) {
    return id ? s.characters.alive[id] || s.characters.archive[id] : undefined;
}
function absoluteMonth(s) {
    return (s.meta.gameYear - 1) * 12 + s.meta.gameMonth - 1;
}
function ageMonths(s, c) {
    return (s.meta.gameYear - c.birthYear) * 12 + s.meta.gameMonth - c.birthMonth;
}
function newId(s, prefix) {
    return prefix + '_' + s.meta.nextId++;
}

exports.allCharacters=allCharacters;
exports.findCharacter=findCharacter;
exports.absoluteMonth=absoluteMonth;
exports.ageMonths=ageMonths;
exports.newId=newId;
},
'core/RNGService':function(require,exports){
class RNGService {
    state;
    constructor(seed, state){
        let h = 2166136261;
        for (const ch of seed){
            h = Math.imul(h ^ ch.charCodeAt(0), 16777619);
        }
        this.state = state === undefined ? h >>> 0 : state >>> 0;
    }
    next() {
        this.state = this.state + 0x6D2B79F5 >>> 0;
        let t = this.state;
        t = Math.imul(t ^ t >>> 15, t | 1);
        t ^= t + Math.imul(t ^ t >>> 7, t | 61);
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }
    chance(p) {
        return this.next() < p;
    }
    int(min, max) {
        return min + Math.floor(this.next() * (max - min + 1));
    }
    pick(items) {
        return items[this.int(0, items.length - 1)];
    }
    weighted(items) {
        let r = this.next() * items.reduce((a, x)=>a + x[1], 0);
        for (const [item, w] of items){
            r -= w;
            if (r < 0) return item;
        }
        return items[items.length - 1][0];
    }
}

exports.RNGService=RNGService;
},
'systems/AlphaWorldSystem':function(require,exports){
const { Engine }=require('../core/Engine');
const { Character, LifeEvent, newId, findCharacter }=require('../core/GameState');
const { ALPHA_CONFIG : D }=require('../core/AlphaConfig');
const { AlphaState, Branch, Faction, ensureAlpha, resident, REALMS, playerMember }=require('../core/AlphaState');
const { RNGService }=require('../core/RNGService');
const { CharacterSystem }=require('./CharacterSystem');
const { CONFIG, clamp }=require('../core/Configs');
const { EventSystem }=require('./EventSystem');
class AlphaWorldSystem {
    e;
    a;
    events;
    constructor(e){
        this.e = e;
        this.a = ensureAlpha(e.state);
        this.bootstrap();
        this.events = new EventSystem(this);
        e.bus.subscribe((x)=>this.observe(x));
    }
    get s() {
        return this.e.state;
    }
    get year() {
        return this.s.meta.gameYear;
    }
    residents() {
        return Object.values(this.s.characters.alive).filter((c)=>resident(this.s, c));
    }
    faction(id) {
        return this.a.world.find((f)=>f.id === id);
    }
    log(type, text, world = false, c) {
        const x = {
            year: this.year,
            month: this.s.meta.gameMonth,
            type,
            text,
            ...c ? {
                characterId: c.id
            } : {}
        };
        (world ? this.a.worldHistory : this.s.history).push(x);
        if (c) c.biography.push(x);
        this.e.bus.emit({
            ...x,
            presentationOnly: true
        });
        return x;
    }
    bootstrap() {
        if (this.a.bootstrapped) return;
        const originalHistoryLength = this.s.history.length;
        const rng = new RNGService(this.s.meta.seed + '-yunzhou'), chars = new CharacterSystem(this.s, rng, this.e.notices, this.e.gene);
        for(let i = 0; i < 12; i++){
            const sect = i >= 10, rank = sect ? 3 : i < 5 ? 1 : i < 9 ? 2 : 3;
            const f = {
                id: (sect ? 'sect_' : 'npc_') + i,
                name: sect ? D.npcWorld.sectNames[i - 10] : D.npcWorld.familyNames[i],
                kind: sect ? 'sect' : 'family',
                rank,
                reputation: rank * 600,
                wealth: rank * 3000,
                population: rank * 30,
                vein: rank,
                relation: 0,
                notableIds: [],
                counts: {},
                marriages: [],
                history: [],
                decline: 0,
                allies: [],
                intermarriages: {},
                relations: {},
                trait: rng.pick([
                    '重文',
                    '尚武',
                    '善商'
                ])
            };
            this.a.world.push(f);
            for(let j = 0; j < 3; j++){
                const c = chars.create(rng.int(22, 65), j % 2 ? 'female' : 'male', undefined, undefined, true);
                c.name = f.name.replace(/氏$/, '') + c.name.slice(1);
                c.isFamily = false;
                c.isResident = false;
                c.factionId = f.id;
                c.originFamilyId = f.id;
                c.rootType = j === 0 ? 'dual' : 'triple';
                c.rootElements = [
                    'wood'
                ];
                c.rootPurity = .8;
                chars.testRoot(c);
                chars.startCultivation(c);
                if (j === 0 && rank >= 2) {
                    c.realm = rank === 3 ? 'core' : 'foundation';
                    c.realmStage = 1;
                    c.baseLifespan = CONFIG.lifespan[c.realm];
                    this.e.notices.record('initial_background', `${c.name}开局已为${c.realm}修士，此前修炼历程为开局背景`, [
                        c
                    ], undefined, false);
                }
                if (i === 8 && j === 1) {
                    c.realm = 'core';
                    c.realmStage = 1;
                    c.baseLifespan = 500;
                }
                f.notableIds.push(c.id);
            }
            this.countFaction(f);
        }
        this.s.history.length = originalHistoryLength;
        this.a.bootstrapped = true;
    }
    capacity() {
        return D.familyRanks[this.s.playerFamily.rank].capacity;
    }
    policy(key) {
        return this.a.policies.includes(key);
    }
    canAppoint(role, id) {
        const c = findCharacter(this.s, id);
        return !!c && resident(this.s, c) && c.age >= 18 && role in this.a.positions && id !== this.s.playerFamily.leaderId && !Object.values(this.a.positions).includes(id);
    }
    appoint(role, id) {
        const c = findCharacter(this.s, id);
        if (!c || !this.canAppoint(role, id)) return false;
        this.a.positions[role] = id;
        this.log('position', `${c.name}受任${{
            elder: '大长老',
            teacher: '传功长老',
            envoy: '外务长老',
            steward: '执事'
        }[role]}`, false, c);
        return true;
    }
    setPolicies(keys) {
        if (this.year - this.a.policyChanged < D.policyChangeCooldownYears || new Set(keys).size !== keys.length || keys.length > D.familyRanks[Math.min(this.s.playerFamily.rank, this.a.buildings.hall)].policySlots || keys.some((k)=>!(k in D.policies))) return false;
        this.a.policies = keys;
        this.a.policyChanged = this.year;
        this.log('policy', '家策改为' + (keys.map((k)=>D.policies[k].name).join('、') || '无'));
        return true;
    }
    upgrade(key) {
        const b = D.buildings[key], level = this.a.buildings[key];
        if (!b || !level || level >= 6) return false;
        const next = b.levels[level + 1];
        const max = key === 'spiritVein' ? Math.min(6, this.s.playerFamily.rank + 1) : this.s.playerFamily.rank;
        if (level + 1 > max || this.a.poor || this.s.playerFamily.spiritStones < next.upgradeCost) return false;
        this.s.playerFamily.spiritStones -= next.upgradeCost;
        this.a.buildings[key]++;
        if (key === 'spiritVein') this.s.playerFamily.spiritVeinTier = next.tier;
        this.log('building', b.name + '升至' + (level + 1) + '级');
        return true;
    }
    rankEligible() {
        const r = this.s.playerFamily.rank + 1, q = D.familyRanks[r]?.requirements;
        if (!q) return false;
        const p = this.residents(), counts = (realm)=>p.filter((c)=>c.realm === realm).length;
        return p.length >= q.population && this.a.reputation >= q.reputation && this.s.playerFamily.spiritStones + this.a.herbs * 3 + this.a.materials * 8 >= q.assets && [
            '1-low',
            '1-mid',
            '2',
            '3',
            '4',
            '5'
        ].indexOf(this.s.playerFamily.spiritVeinTier) >= [
            '1-low',
            '1-mid',
            '2',
            '3',
            '4',
            '5'
        ].indexOf(q.spiritVein) && (!q.foundation || counts('foundation') >= q.foundation) && (!q.core || counts('core') >= q.core) && (!q.nascent || counts('nascent') >= q.nascent) && (!q.spirit || counts('spirit') >= q.spirit) && (!q.void || counts('void') >= q.void) && (r === 2 || this.a.buildings.hall >= r - 1 && this.a.buildings.library >= r - 1);
    }
    promote() {
        if (!this.rankEligible()) return false;
        this.s.playerFamily.rank++;
        this.a.firstYears['rank' + this.s.playerFamily.rank] ??= this.year;
        this.s.pendingDecisions = this.s.pendingDecisions.filter((d)=>d.type !== 'rank');
        this.log('rank', this.s.playerFamily.name + '晋升' + this.s.playerFamily.rank + '星');
        return true;
    }
    buyPill() {
        if (this.a.market.stock < 1 || this.s.playerFamily.spiritStones < this.a.market.price) return false;
        this.s.playerFamily.spiritStones -= this.a.market.price;
        this.a.market.stock--;
        this.a.inventory.foundationPill++;
        return true;
    }
    sell(key, amount) {
        amount = Math.min(this.a[key], Math.max(0, Math.floor(amount)));
        this.a[key] -= amount;
        this.s.playerFamily.spiritStones += amount * (key === 'herbs' ? D.market.herbSellPrice : D.market.materialSellPrice);
    }
    diplomacy(id, action) {
        return this.diplomacyResult(id, action).ok;
    }
    diplomacyResult(id, action) {
        const f = this.faction(id), before = f?.relation ?? 0, key = 'diplomacy:' + id + ':' + action;
        const acts = {
            gift: {
                cost: 300,
                delta: 12
            },
            trade: {
                cost: 100,
                delta: 5
            },
            aid: {
                cost: 500,
                delta: 20
            },
            reconcile: {
                cost: 200,
                delta: 15
            },
            alliance: {
                cost: 0,
                delta: 5
            },
            hostile: {
                cost: 0,
                delta: -30
            }
        };
        const result = {
            ok: false,
            action,
            targetId: id,
            relationBefore: before,
            relationAfter: before,
            costs: {
                stones: 0
            },
            gains: {
                herbs: 0,
                materials: 0
            },
            cooldownUntilYear: this.a.cooldowns[key] || 0,
            reason: ''
        };
        const x = acts[action];
        if (!f || !x) {
            result.reason = '无效的外交对象或行动';
            return result;
        }
        if (result.cooldownUntilYear > this.year) {
            result.reason = '本年已执行此行动，仙历' + result.cooldownUntilYear + '年可再次执行';
            return result;
        }
        if (this.s.playerFamily.spiritStones < x.cost) {
            result.reason = '灵石不足，需要' + x.cost + '灵石';
            return result;
        }
        if (action === 'alliance' && (f.relation < 60 || f.allies.includes(this.s.playerFamily.id))) {
            result.reason = f.relation < 60 ? '关系未达亲近，暂不能结盟' : '已经结盟';
            return result;
        }
        this.s.playerFamily.spiritStones -= x.cost;
        const names = {
            gift: '赠礼',
            trade: '贸易',
            aid: '互助',
            reconcile: '和解',
            alliance: '结盟',
            hostile: '交恶'
        };
        this.changeRelation(f, x.delta, names[action]);
        if (action === 'trade') {
            this.a.materials += 10;
            this.a.herbs += 20;
            result.gains = {
                herbs: 20,
                materials: 10
            };
        }
        if (action === 'alliance') f.allies.push(this.s.playerFamily.id);
        this.a.cooldowns[key] = this.year + 1;
        return {
            ...result,
            ok: true,
            relationAfter: f.relation,
            costs: {
                stones: x.cost
            },
            cooldownUntilYear: this.year + 1,
            reason: '行动成功'
        };
    }
    changeRelation(f, n, reason) {
        f.relation = clamp(f.relation + n, -100, 100);
        f.history.push(this.log('diplomacy', `${f.name}：${reason}`, false));
    }
    propose(f, c, mode = 'in') {
        if (!this.e.marriage.eligible(c) || !resident(this.s, c)) return false;
        let p = f.notableIds.map((id)=>this.s.characters.alive[id]).find((p)=>p && p.gender !== c.gender && this.e.marriage.eligible(p));
        if (!p) {
            p = this.e.chars.create(Math.max(18, c.age), c.gender === 'male' ? 'female' : 'male', undefined, undefined, true);
            p.factionId = f.id;
            p.originFamilyId = f.id;
            p.isResident = false;
            this.e.chars.testRoot(p);
            this.e.chars.startCultivation(p);
            f.notableIds.push(p.id);
        }
        if (this.s.pendingDecisions.some((d)=>d.type === 'marriage' && (d.characterId === c.id || d.payload.partnerId === c.id))) return false;
        this.s.pendingDecisions.push({
            id: newId(this.s, 'decision'),
            type: 'marriage',
            characterId: c.id,
            createdGameYear: this.year,
            payload: {
                partnerId: p.id,
                npcId: f.id,
                mode
            }
        });
        return true;
    }
    marriageResolved(c, p, f, mode) {
        if (mode === 'in') {
            p.factionId = this.s.playerFamily.id;
            p.isFamily = true;
            p.isResident = true;
        } else if (mode === 'out') {
            c.factionId = f.id;
            c.isResident = false;
            f.notableIds.push(c.id);
        }
        f.marriages.push(c.id);
        this.changeRelation(f, 15, '联姻');
        if (f.marriages.length >= 3) {
            this.a.memories['世交:' + f.id] = true;
            f.relation = Math.max(30, f.relation);
        }
    }
    admit(c, f) {
        if (!resident(this.s, c) || c.age < 8) return false;
        c.sectId = f.id;
        c.isResident = false;
        this.changeRelation(f, 10, '入宗修行');
        this.log('sect', `${c.name}入${f.name}，族谱保留`, false, c);
        return true;
    }
    addMemorial(id) {
        const c = this.s.characters.archive[id];
        if (!c || !playerMember(this.s, c)) return false;
        if (!this.a.memorialIds.includes(id)) this.a.memorialIds.push(id);
        return true;
    }
    bless() {
        return Math.min(.02, this.a.memorialIds.filter((id)=>this.s.characters.archive[id]).slice(0, Math.min(this.s.playerFamily.rank, this.a.buildings.ancestralHall)).length * .005);
    }
    cultivationMultiplier(c) {
        if (!playerMember(this.s, c)) return 1;
        let m = D.buildings.spiritVein.levels[this.a.buildings.spiritVein].cultivationMultiplier;
        for (const p of this.a.policies)m *= D.policies[p].cultivationMultiplier ?? 1;
        if (this.a.positions.teacher && this.s.characters.alive[this.a.positions.teacher]) m *= 1.02;
        if (c.age < 50) m *= 1 + D.buildings.trainingGround.levels[this.a.buildings.trainingGround].minorCultivationBonus;
        return m * (this.a.poor ? .9 : 1) * (1 + this.bless());
    }
    protectedIds() {
        const ids = new Set([
            this.s.playerFamily.leaderId,
            ...Object.values(this.a.positions),
            ...this.a.expedition?.members || [],
            ...Object.keys(this.a.missing),
            ...this.s.pendingDecisions.flatMap((d)=>[
                    d.characterId,
                    d.payload.partnerId
                ])
        ].filter(Boolean));
        const p = this.residents().sort((a, b)=>REALMS.indexOf(b.realm) - REALMS.indexOf(a.realm) || b.realmStage - a.realmStage);
        if (p[0]) ids.add(p[0].id);
        for (const c of p)if (c.isWatched || c.realm === 'nascent' || [
            'heavenly',
            'mutant'
        ].includes(c.rootType)) ids.add(c.id);
        return ids;
    }
    migrateBranch(force = false) {
        const p = this.residents(), cap = this.capacity();
        if (!force && p.length <= cap * 1.1) return false;
        const protectedSet = this.protectedIds(), target = Math.floor(cap * .92), selected = new Set();
        for (const c of p.slice().sort((a, b)=>REALMS.indexOf(a.realm) - REALMS.indexOf(b.realm) || b.age - a.age)){
            if (p.length - selected.size <= target) break;
            const household = new Set([
                c.id
            ]);
            let changed = true;
            while(changed){
                changed = false;
                for (const id of [
                    ...household
                ]){
                    const x = this.s.characters.alive[id];
                    if (!x) continue;
                    for (const rel of [
                        ...x.spouseIds,
                        ...x.childrenIds.filter((k)=>{
                            const ch = this.s.characters.alive[k];
                            return ch !== undefined && ch.age < 18;
                        }),
                        ...x.age < 18 ? [
                            x.fatherId,
                            x.motherId
                        ] : []
                    ]){
                        if (rel && p.some((v)=>v.id === rel) && !household.has(rel)) {
                            household.add(rel);
                            changed = true;
                        }
                    }
                }
            }
            if ([
                ...household
            ].some((id)=>protectedSet.has(id))) continue;
            for (const id of household)selected.add(id);
        }
        if (!selected.size) return false;
        const founder = p.find((c)=>selected.has(c.id)), id = newId(this.s, 'branch'), b = {
            id,
            name: this.s.playerFamily.surname + '氏·' + founder.name.slice(1) + '支',
            founderId: founder.id,
            memberIds: [
                ...selected
            ],
            population: selected.size,
            generation: founder.generation,
            counts: {},
            bloodline: founder.bloodlines[0]?.id || '',
            relation: 35,
            history: []
        };
        for (const id of selected){
            const c = this.s.characters.alive[id];
            c.isResident = false;
            c.branchId = b.id;
        }
        b.history.push(this.log('branch', `${b.name}外迁立支，始祖${founder.name}`, false, founder));
        this.a.branches.push(b);
        return true;
    }
    branchNotable(b) {
        const c = this.e.chars.create(18, undefined, undefined, undefined, true);
        c.isFamily = true;
        c.factionId = this.s.playerFamily.id;
        c.branchId = b.id;
        c.isResident = true;
        c.generation = b.generation;
        c.rootType = this.e.rng.chance(.7) ? 'heavenly' : 'mutant';
        c.rootElements = c.rootType === 'mutant' ? [
            'wind'
        ] : [
            'wood'
        ];
        c.rootPurity = .9;
        c.bloodlines = b.bloodline ? [
            {
                id: b.bloodline,
                strength: 20
            }
        ] : [];
        this.e.chars.testRoot(c);
        this.e.chars.startCultivation(c);
        this.log('branch_return', `${b.name}第${b.generation}代旁支人才${c.name}回归（普通世代为统计节点，未伪造父母）`, false, c);
        return c;
    }
    countFaction(f) {
        const people = f.notableIds.map((id)=>this.s.characters.alive[id]).filter((c)=>!!c && c.factionId === f.id);
        const anchored = people.some((c)=>REALMS.indexOf(c.realm) >= 2);
        const support = anchored ? Math.min(Math.floor(f.population * D.stabilization.npcFoundationSupportRatio), Math.floor(f.wealth / 1000)) : 0;
        f.counts = {
            mortal: 0,
            qi: 0,
            foundation: support,
            core: 0,
            nascent: 0
        };
        for (const c of people)f.counts[c.realm]++;
        const ordinary = Math.max(0, f.population - people.length - support);
        f.counts.mortal += Math.floor(ordinary * .7);
        f.counts.qi += ordinary - Math.floor(ordinary * .7);
        return f.counts;
    }
    npcRankEligible(f, rank) {
        const q = D.familyRanks[rank]?.requirements;
        if (!q) return rank === 1;
        const people = f.notableIds.map((id)=>this.s.characters.alive[id]).filter((c)=>c && c.factionId === f.id);
        const anchor = people.some((c)=>REALMS.indexOf(c.realm) >= rank);
        return anchor && f.population >= q.population && f.wealth >= q.assets && f.reputation >= q.reputation && f.vein >= rank - 1 && (f.counts.foundation || 0) >= (q.foundation || 0) && (f.counts.core || 0) >= (q.core || 0) && (f.counts.nascent || 0) >= (q.nascent || 0);
    }
    npcIntermarriages() {
        const families = this.a.world.filter((f)=>f.kind === 'family');
        for(let i = 0; i < families.length; i++)for(let j = i + 1; j < families.length; j++){
            const f = families[i], other = families[j], old = f.intermarriages[other.id];
            if ((f.relations[other.id] || 0) < -19 || (other.relations[f.id] || 0) < -19 || old && this.year - old.lastYear < D.stabilization.npcIntermarriageCooldownYears) continue;
            if (!this.e.rng.chance(D.stabilization.npcIntermarriageChance)) continue;
            const record = {
                count: (old?.count || 0) + 1,
                lastYear: this.year
            };
            f.intermarriages[other.id] = {
                ...record
            };
            other.intermarriages[f.id] = {
                ...record
            };
            const floor = record.count >= 3 ? 30 : -100;
            f.relations[other.id] = clamp(Math.max(floor, (f.relations[other.id] || 0) + 5), -100, 100);
            other.relations[f.id] = clamp(Math.max(floor, (other.relations[f.id] || 0) + 5), -100, 100);
            const x = this.log('npc_intermarriage', f.name + '与' + other.name + '联姻' + (record.count >= 3 ? '，结为世交' : ''), true);
            f.history.push(x);
            other.history.push(x);
            if (record.count >= 3) this.a.memories['世交:' + [
                f.id,
                other.id
            ].sort().join(':')] = true;
        }
    }
    annual() {
        const p = this.residents();
        for (const role of Object.keys(this.a.positions))if (!this.s.characters.alive[this.a.positions[role] || '']) this.a.positions[role] = null;
        const prod = this.a.policies.reduce((m, key)=>m * (D.policies[key].productionMultiplier ?? 1), 1) * (this.a.positions.steward ? 1.02 : 1), mine = D.buildings.mine.levels[this.a.buildings.mine], field = D.buildings.field.levels[this.a.buildings.field], debuff = this.year < this.a.mineDebuffUntil ? .85 : 1;
        const income = mine.stonesPerYear * prod * debuff + p.filter((c)=>c.age >= 18).length * 8;
        let upkeep = p.reduce((n, c)=>n + D.upkeepPerYear[c.realm], 0);
        for (const key of this.a.policies)upkeep *= D.policies[key].upkeepMultiplier ?? 1;
        this.a.herbs += Math.round(field.herbsPerYear * prod);
        this.a.materials += Math.round(mine.materialsPerYear * prod * debuff);
        this.a.poor = this.s.playerFamily.spiritStones + income < upkeep;
        this.s.playerFamily.spiritStones = Math.max(0, this.s.playerFamily.spiritStones + income - upkeep);
        this.a.annual = {
            income,
            upkeep
        };
        this.a.reputation += Math.floor((D.stabilization.annualReputationBase + p.filter((c)=>REALMS.indexOf(c.realm) >= 2).length * D.stabilization.annualReputationPerCultivator) * this.a.policies.reduce((m, key)=>m * (D.policies[key].reputationGrowthMultiplier ?? 1), 1));
        this.a.market.price = this.e.rng.int(800, 1200);
        this.a.market.stock = 3;
        this.a.market.special = false;
        if (this.policy('recruit') && this.e.rng.chance(D.policies.recruit.annualRecruitChance)) {
            const c = this.e.chars.create(20, undefined, undefined, undefined, true);
            c.isFamily = true;
            this.a.reputation = Math.max(0, this.a.reputation + D.policies.recruit.reputationPerRecruit);
            this.e.chars.testRoot(c);
            this.e.chars.startCultivation(c);
        }
        this.a.pressure = p.length > this.capacity() * 1.1 ? this.a.pressure + 1 : 0;
        if (this.a.pressure >= 2) this.migrateBranch();
        for (const b of this.a.branches){
            b.population = Math.max(b.memberIds.filter((id)=>!!this.s.characters.alive[id]).length, b.population + this.e.rng.int(0, Math.max(1, Math.ceil(b.population * .025))) - this.e.rng.int(0, Math.max(1, Math.ceil(b.population * .012))));
            b.generation = Math.max(b.generation, findCharacter(this.s, b.founderId).generation + Math.floor((this.year - b.history[0].year) / 28));
            if (this.e.rng.chance(.01)) b.relation = clamp(b.relation - 10, -100, 100);
            b.counts = {
                mortal: Math.floor(b.population * .7),
                qi: Math.floor(b.population * .28),
                foundation: Math.floor(b.population * .02),
                core: 0,
                nascent: 0
            };
            if (this.e.rng.chance(.002)) this.branchNotable(b);
        }
        for (const f of this.a.world){
            let people = f.notableIds.map((id)=>this.s.characters.alive[id]).filter((c)=>!!c && c.factionId === f.id);
            for(let month = 0; month < 12; month++){
                this.e.cultivation.tick(people, true);
                for (const c of people)this.e.chars.recover(c);
                this.e.life.tick(people);
                people = people.filter((c)=>c.lifeStatus === 'alive');
            }
            const capacity = D.familyRanks[f.rank].capacity;
            f.population = Math.max(10, Math.round(f.population + (capacity - f.population) * .025 + (this.e.rng.next() - .5) * 6));
            const income = (150 * f.vein + 80 * f.vein + f.population * 3) * D.stabilization.npcProductionMultiplier * (D.stabilization.npcTraitIncome[f.trait] || 1);
            const upkeep = people.reduce((n, c)=>n + D.upkeepPerYear[c.realm], 0) + f.population * .6;
            f.wealth = Math.max(0, f.wealth + income - upkeep);
            f.reputation += Math.round((D.stabilization.npcReputationBase + f.rank) * (D.stabilization.npcTraitReputation[f.trait] || 1));
            this.countFaction(f);
            const canAdvance = this.npcRankEligible(f, f.rank + 1);
            if (!this.npcRankEligible(f, f.rank)) {
                f.decline++;
                if (f.decline >= 5) {
                    f.rank--;
                    f.decline = 0;
                    f.history.push(this.log('npc_rank_down', f.name + '跌至' + f.rank + '星', true));
                    this.events.fire('n_rank_down', {
                        factionId: f.id,
                        trigger: 'npc_rank_down'
                    });
                }
            } else {
                f.decline = 0;
                if (canAdvance) {
                    f.rank++;
                    f.history.push(this.log('npc_rank_up', f.name + '晋至' + f.rank + '星', true));
                    this.events.fire('n_rank_up', {
                        factionId: f.id,
                        trigger: 'npc_rank_up'
                    });
                }
            }
            if (f.vein < Math.min(3, f.rank) && f.wealth >= D.stabilization.npcVeinUpgradeCosts[f.vein + 1] + (f.rank === 2 ? 15000 : 60000)) {
                f.wealth -= D.stabilization.npcVeinUpgradeCosts[f.vein + 1];
                f.vein++;
                f.history.push(this.log('npc_vein', f.name + '修整灵脉至' + f.vein + '阶', true));
            }
            if (people.length < Math.max(3, Math.ceil(f.population / D.stabilization.npcPeoplePerNotable)) && this.e.rng.chance(D.stabilization.npcAnnualRecruitChance)) {
                const c = this.e.chars.create(18, undefined, undefined, undefined, true);
                c.isResident = false;
                c.factionId = f.id;
                c.originFamilyId = f.id;
                c.isFamily = false;
                this.e.chars.testRoot(c);
                this.e.chars.startCultivation(c);
                f.notableIds.push(c.id);
            }
            if (this.year % 20 === 0) {
                const other = this.e.rng.pick(this.a.world.filter((x)=>x.id !== f.id));
                if (this.e.rng.chance(.4)) {
                    if (!f.allies.includes(other.id)) f.allies.push(other.id);
                    if (!other.allies.includes(f.id)) other.allies.push(f.id);
                } else {
                    f.allies = f.allies.filter((x)=>x !== other.id);
                    other.allies = other.allies.filter((x)=>x !== f.id);
                }
            }
        }
        this.npcIntermarriages();
        if (this.rankEligible() && !this.s.pendingDecisions.some((d)=>d.type === 'rank')) this.s.pendingDecisions.push({
            id: newId(this.s, 'decision'),
            type: 'rank',
            characterId: this.s.playerFamily.leaderId || '',
            createdGameYear: this.year,
            payload: {
                target: this.s.playerFamily.rank + 1
            }
        });
        this.events.annual();
        this.s.meta.rngState = this.e.rng.state;
    }
    observe(x) {
        if (x.presentationOnly) return;
        const c = findCharacter(this.s, x.characterId || null);
        if (!c) return;
        if (x.type === 'leader') {
            for (const role of Object.keys(this.a.positions))if (this.a.positions[role] === c.id) this.a.positions[role] = null;
        }
        if (x.type === 'nascent_preparation') this.events.fire('c_nascent_1', {
            actorId: c.id
        });
        if (x.type === 'nascent_attempt' && !this.a.firstNascent) this.events.fire('c_nascent_2', {
            actorId: c.id,
            trigger: 'nascent_attempt'
        });
        if (x.type === 'major_success') {
            if (!this.a.firstYears[c.realm]) this.a.firstYears[c.realm] = this.year;
            if (playerMember(this.s, c) && !this.a.firstYears['player_' + c.realm]) this.a.firstYears['player_' + c.realm] = this.year;
            if (c.realm === 'nascent' && !this.a.firstNascent) {
                this.a.firstNascent = {
                    id: c.id,
                    name: c.name,
                    factionId: c.sectId || c.factionId || this.s.playerFamily.id,
                    year: this.year,
                    age: c.age,
                    root: c.rootType,
                    source: 'CultivationSystem.attempt'
                };
                this.events.fire('c_nascent_3', {
                    actorId: c.id,
                    trigger: 'nascent_success'
                });
                this.a.worldModal = true;
                this.s.settings.timeSpeed = 'paused';
                this.log('WORLD_FIRST_NASCENT_SOUL', `${c.name}，${this.a.firstNascent.factionId}，${c.age}岁，由金丹圆满真实突破成为云州首位元婴`, true, c);
                for (const f of this.a.world)f.history.push(this.log('reaction', f.name + '敬闻元婴现世', true));
            }
        }
        if (x.type === 'death' && c.factionId && c.factionId !== this.s.playerFamily.id) {
            const f = this.faction(c.factionId);
            if (f) {
                if (f.notableIds.map((id)=>this.s.characters.alive[id]).filter(Boolean).every((p)=>REALMS.indexOf(p.realm) <= REALMS.indexOf(c.realm))) this.events.fire('n_highest_death', {
                    actorId: c.id,
                    factionId: f.id,
                    trigger: 'npc_death'
                });
                f.reputation = Math.max(0, f.reputation - D.stabilization.npcDeathReputationLoss[c.realm]);
                f.history.push(this.log('npc_death', `${f.name}重要修士${c.name}寿终`, true));
            }
        }
        if (x.type === 'death' && playerMember(this.s, c) && (c.realm === 'core' || c.realm === 'nascent' || c.isWatched)) {
            this.addMemorial(c.id);
            this.events.fire('c_sword_1', {
                actorId: c.id,
                trigger: 'death'
            });
        }
        if (x.type === 'root_rare' && playerMember(this.s, c)) {
            const id = c.rootType === 'heavenly' ? 'r_heavenly_sign' : 'r_' + c.rootElements[0] + '_sign';
            this.events.fire(id, {
                actorId: c.id,
                trigger: 'root'
            });
        }
        if (x.type === 'birth' && c.fatherId && playerMember(this.s, c)) this.events.fire('b_twins', {
            actorId: c.id,
            trigger: 'birth'
        });
    }
    combat(team, enemyRealm, stage = 1) {
        const peak = Math.max(...team.map((c)=>REALMS.indexOf(c.realm))), enemy = REALMS.indexOf(enemyRealm);
        if (enemy - peak >= 2) return false;
        const strengths = team.map((c)=>D.combatRealmBase[c.realm] * (1 + c.realmStage * .12) * (c.health === 'healthy' ? 1 : c.health === 'light' ? .75 : .4) * (c.techniqueAffinity || .8));
        strengths.sort((a, b)=>b - a);
        const group = strengths[0] + strengths.slice(1).reduce((sum, x, i)=>sum + x / (i + 2), 0), foe = D.combatRealmBase[enemyRealm] * (1 + stage * .12);
        return group * (.85 + this.e.rng.next() * .3) > foe;
    }
    expeditionAccess(location) {
        const l = D.exploration.find((x)=>x.id === location);
        if (!l) return {
            ok: false,
            reason: '地点不存在'
        };
        if (this.s.playerFamily.rank < l.unlockRank) return {
            ok: false,
            reason: '需' + l.unlockRank + '星家族'
        };
        if (l.periodYears && (this.year % l.periodYears !== 0 || !this.a.memories.secret_open)) return {
            ok: false,
            reason: '秘境未开放：每' + l.periodYears + '年开放一年'
        };
        return {
            ok: true,
            reason: '已开放'
        };
    }
    startExpedition(location, ids) {
        const l = D.exploration.find((x)=>x.id === location);
        if (!l || this.a.expedition || ids.length < 3 || ids.length > 5 || new Set(ids).size !== ids.length || !this.expeditionAccess(location).ok || ids.some((id)=>{
            const c = this.s.characters.alive[id];
            return !c || !resident(this.s, c) || c.age < 18 || c.health === 'critical';
        })) return false;
        this.a.expedition = {
            id: newId(this.s, 'exp'),
            location,
            members: ids,
            node: 0,
            total: this.e.rng.int(2, 5),
            plannedNodes: 0,
            currentNode: 1,
            extraNodes: 0,
            startedYear: this.year,
            startedMonth: this.s.meta.gameMonth,
            injuredIds: [],
            findings: [],
            scouted: false,
            rewards: {
                stones: 0,
                herbs: 0,
                materials: 0
            },
            log: []
        };
        this.a.expedition.plannedNodes = this.a.expedition.total;
        this.a.lastExpeditionSettlement = null;
        this.encounter();
        if (this.e.rng.chance(.05)) this.events.fire('c_missing_1', {
            actorId: ids[0]
        });
        return true;
    }
    addHiddenNode(reason) {
        const x = this.a.expedition;
        if (!x || x.findings.includes(reason)) return false;
        x.extraNodes++;
        x.total = x.plannedNodes + x.extraNodes;
        x.findings.push(reason);
        x.log.push('发现隐藏节点：' + reason + '，总节点增至' + x.total);
        this.log('exploration_node', '发现隐藏节点：' + reason + '，总节点增至' + x.total);
        return true;
    }
    encounter() {
        const x = this.a.expedition;
        if (x) this.events.fire([
            'e_ruined_cave',
            'e_beast_tracks',
            'e_spirit_herbs'
        ][x.node % 3], {
            actorId: x.members[0]
        });
    }
    expeditionChoice(action) {
        const x = this.a.expedition;
        if (!x) return false;
        const l = D.exploration.find((v)=>v.id === x.location), team = x.members.map((id)=>this.s.characters.alive[id]).filter((c)=>!!c), avg = (key)=>team.reduce((n, c)=>n + c[key], 0) / Math.max(1, team.length);
        if (action === 'retreat' || team.length < 3) {
            this.finishExpedition(action === 'retreat' ? '主动撤回' : '队伍人数不足');
            return true;
        }
        if (action === 'scout') {
            x.scouted = true;
            x.log.push('探查风险，下一节点判定更稳妥');
            return true;
        }
        const before = {
            ...x.rewards
        };
        let injury = '';
        let win = true;
        if (action === 'hunt') win = this.combat(team, REALMS[Math.min(4, l.danger)]);
        else if (action === 'break') win = this.e.rng.chance(clamp(avg('comprehension') / 100 + (x.scouted ? .15 : 0), .1, .9));
        else if (action === 'gather') win = this.e.rng.chance(clamp(avg('fortune') / 100 + .25, .1, .95));
        else if (![
            'avoid',
            'leave',
            'mark'
        ].includes(action)) return false;
        if (win) {
            if (action === 'gather') x.rewards.herbs += this.e.rng.int(20, 60);
            if ([
                'hunt',
                'break'
            ].includes(action)) {
                x.rewards.stones += this.e.rng.int(100, 400);
                x.rewards.materials += this.e.rng.int(10, 30);
            }
        } else if (team[0]) {
            const c = this.e.rng.pick(team);
            c.health = 'light';
            c.injuryMonths = 6;
            injury = c.name + '轻伤，休养6个月';
            if (!x.injuredIds.includes(c.id)) x.injuredIds.push(c.id);
        }
        const names = {
            hunt: '追猎妖兽',
            break: '破阵',
            gather: '采集灵药',
            avoid: '避开风险',
            leave: '离开',
            mark: '标记线索'
        };
        x.log.push((names[action] || '远征行动') + '：' + (win ? '安然推进' : '受伤撤避') + ' · ' + (injury || '无人新增受伤') + ' · 获得灵石' + (x.rewards.stones - before.stones) + '、药材' + (x.rewards.herbs - before.herbs) + '、灵材' + (x.rewards.materials - before.materials) + ' · 无资源损失');
        x.node++;
        x.currentNode = x.node + 1;
        x.scouted = false;
        if (x.node >= x.total) this.finishExpedition();
        return true;
    }
    finishExpedition(reason = '完成探索') {
        const x = this.a.expedition;
        if (!x) return;
        this.a.lastExpeditionSettlement = {
            location: x.location,
            startedYear: x.startedYear,
            startedMonth: x.startedMonth,
            endedYear: this.year,
            endedMonth: this.s.meta.gameMonth,
            members: x.members.slice(),
            completed: x.node,
            planned: x.plannedNodes,
            extra: x.extraNodes,
            rewards: {
                ...x.rewards
            },
            injuredIds: x.injuredIds.slice(),
            findings: x.findings.slice(),
            log: x.log.slice(),
            reason
        };
        this.a.expedition = null;
        this.s.pendingDecisions = this.s.pendingDecisions.filter((d)=>![
                'e_ruined_cave',
                'e_beast_tracks',
                'e_spirit_herbs'
            ].includes(d.payload.eventId));
        this.s.playerFamily.spiritStones += x.rewards.stones;
        this.a.herbs += x.rewards.herbs;
        this.a.materials += x.rewards.materials;
        this.log('exploration', '远征归来：' + x.log.join('；'));
    }
}

exports.AlphaWorldSystem=AlphaWorldSystem;
},
'systems/BirthSystem':function(require,exports){
const { ALPHA_CONFIG }=require('../core/AlphaConfig');
const { resident }=require('../core/AlphaState');
const { GameState, Character, findCharacter, absoluteMonth }=require('../core/GameState');
const { CONFIG, annualToMonthly }=require('../core/Configs');
const { RNGService }=require('../core/RNGService');
const { CharacterSystem }=require('./CharacterSystem');
class BirthSystem {
    s;
    rng;
    chars;
    constructor(s, rng, chars){
        this.s = s;
        this.rng = rng;
        this.chars = chars;
    }
    probability(a, b) {
        const common = a.childrenIds.filter((x)=>b.childrenIds.includes(x)).length;
        if (common >= CONFIG.childMaximum) return 0;
        const factor = (age)=>CONFIG.fertilityAges.find(([max])=>age < max)[1];
        return CONFIG.fertility * (this.s.alpha?.policies.includes('fertility') ? ALPHA_CONFIG.policies.fertility.fertilityMultiplier : 1) * Math.min(factor(a.age), factor(b.age)) * CONFIG.childFactor[common];
    }
    tick() {
        for (const mother of Object.values(this.s.characters.alive)){
            if (!resident(this.s, mother) || mother.branchId && !mother.isResident || mother.gender !== 'female' || mother.age < 18 || mother.health !== 'healthy') continue;
            const father = mother.spouseIds.map((id)=>findCharacter(this.s, id)).find((c)=>c?.lifeStatus === 'alive');
            if (!father || !resident(this.s, father) || father.age < 18 || father.health !== 'healthy') continue;
            const youngest = mother.childrenIds.map((x)=>findCharacter(this.s, x)).filter(Boolean).reduce((v, c)=>Math.min(v, (this.s.meta.gameYear - c.birthYear) * 12 + this.s.meta.gameMonth - c.birthMonth), Infinity);
            if (youngest < 12) continue;
            if (this.rng.chance(annualToMonthly(this.probability(mother, father)))) this.chars.create(0, undefined, father, mother);
        }
    }
}

exports.BirthSystem=BirthSystem;
},
'systems/BloodlineSystem':function(require,exports){
const { Character }=require('../core/GameState');
const { RNGService }=require('../core/RNGService');
const { CONFIG, clamp }=require('../core/Configs');
class BloodlineSystem {
    rng;
    constructor(rng){
        this.rng = rng;
    }
    inherit(f, m, ancestors = []) {
        const ids = new Set([
            ...f?.bloodlines || [],
            ...m?.bloodlines || [],
            ...ancestors.flatMap((c)=>c.bloodlines)
        ].map((x)=>x.id));
        const result = [];
        for (const id of ids){
            const a = f?.bloodlines.find((x)=>x.id === id)?.strength || 0, b = m?.bloodlines.find((x)=>x.id === id)?.strength || 0;
            let strength = 0;
            if (a && b) strength = (a + b) / 2 + this.rng.int(-8, 15);
            else if (a || b) strength = Math.max(a, b) * (.55 + this.rng.next() * .15) + this.rng.int(-5, 5);
            else if (this.rng.chance(.025)) strength = Math.max(...ancestors.map((c)=>c.bloodlines.find((x)=>x.id === id)?.strength || 0)) * .9 + this.rng.int(0, 12);
            if (this.rng.chance(.005)) strength += 25;
            if (strength >= 1) result.push({
                id,
                strength: Math.round(clamp(strength))
            });
        }
        return result.sort((a, b)=>b.strength - a.strength).slice(0, 2);
    }
    label(strength) {
        const labels = [
            '无',
            '潜藏',
            '微弱',
            '觉醒',
            '浓郁',
            '返祖'
        ];
        return labels[CONFIG.bloodlineThresholds.filter((x)=>strength >= x).length];
    }
}

exports.BloodlineSystem=BloodlineSystem;
},
'systems/CharacterSystem':function(require,exports){
const { GameState, Character, Gender, findCharacter, newId }=require('../core/GameState');
const { RNGService }=require('../core/RNGService');
const { CONFIG }=require('../core/Configs');
const { GeneticsSystem }=require('./GeneticsSystem');
const { BloodlineSystem }=require('./BloodlineSystem');
const { GenealogySystem }=require('./GenealogySystem');
const { NotificationSystem }=require('./NotificationSystem');
class CharacterSystem {
    s;
    rng;
    notices;
    genealogy;
    constructor(s, rng, notices, genealogy){
        this.s = s;
        this.rng = rng;
        this.notices = notices;
        this.genealogy = genealogy;
    }
    create(age = 0, gender, f, m, external = false) {
        const ancestorIds = f && m ? new Set([
            ...this.genealogy.getAncestors(f.id, 3),
            ...this.genealogy.getAncestors(m.id, 3)
        ]) : new Set();
        const ancestors = [
            ...ancestorIds
        ].map((x)=>findCharacter(this.s, x)).filter(Boolean);
        const g = gender || this.rng.pick([
            'male',
            'female'
        ]);
        const id = newId(this.s, 'char');
        const surname = external ? this.rng.pick([
            '林',
            '苏',
            '沈',
            '陆',
            '叶',
            '顾'
        ]) : this.s.playerFamily.surname;
        const data = new GeneticsSystem(this.rng).generate(f, m, ancestors);
        const c = {
            id,
            name: surname + this.rng.pick([
                '云',
                '青',
                '明',
                '玄',
                '若',
                '承',
                '景',
                '望'
            ]) + this.rng.pick([
                '清',
                '远',
                '宁',
                '川',
                '安',
                '华',
                '岚',
                '辰'
            ]),
            gender: g,
            birthYear: this.s.meta.gameYear - age,
            birthMonth: this.s.meta.gameMonth,
            age,
            generation: f && m ? Math.max(f.generation, m.generation) + 1 : 1,
            fatherId: f?.id || null,
            motherId: m?.id || null,
            spouseIds: [],
            childrenIds: [],
            marriageYears: {},
            isResident: true,
            isFamily: !external,
            isWatched: false,
            lifeStatus: 'alive',
            deathYear: null,
            deathAge: null,
            health: 'healthy',
            mood: 'calm',
            realm: 'mortal',
            realmStage: 0,
            cultivationProgress: 0,
            techniqueId: '',
            techniqueAffinity: 0,
            isBottleneck: false,
            isInRetreat: false,
            retryAtMonth: 0,
            ...data,
            rootTested: false,
            cultivationStarted: false,
            bloodlines: new BloodlineSystem(this.rng).inherit(f, m, ancestors),
            traits: [
                this.rng.pick(CONFIG.traits)
            ],
            lifespanFactor: .9 + this.rng.next() * .2,
            baseLifespan: 80,
            lifespanPenalty: 0,
            injuryMonths: 0,
            biography: []
        };
        this.s.characters.alive[id] = c;
        if (f && m) {
            f.childrenIds.push(id);
            m.childrenIds.push(id);
        }
        this.notices.record('birth', f && m ? `${f.name}与${m.name}诞下${c.name}` : `${c.name}出生`, [
            c,
            ...[
                f,
                m
            ].filter(Boolean)
        ], {
            year: c.birthYear,
            month: c.birthMonth
        }, !external);
        if (external) this.notices.record('arrival', `${c.name}来到家族`, [
            c
        ]);
        return c;
    }
    testRoot(c) {
        if (c.rootTested || c.lifeStatus === 'dead' || c.age < CONFIG.rootTestAge) return;
        c.rootTested = true;
        this.notices.record([
            'heavenly',
            'mutant',
            'dual'
        ].includes(c.rootType) ? 'root_rare' : 'root_test', `${c.name}六岁测灵：${c.rootType}，${c.rootElements.join('/') || '无灵根'}`, [
            c
        ], {
            year: c.birthYear + CONFIG.rootTestAge,
            month: c.birthMonth
        }, c.isFamily && [
            'heavenly',
            'mutant',
            'dual'
        ].includes(c.rootType));
    }
    startCultivation(c) {
        if (c.cultivationStarted || c.lifeStatus === 'dead' || c.age < CONFIG.cultivationStartAge || !c.rootTested || c.rootType === 'none') return;
        c.cultivationStarted = true;
        c.realm = 'qi';
        c.realmStage = 1;
        c.baseLifespan = CONFIG.lifespan.qi;
        this.assignTechnique(c);
        this.notices.record('cultivation_start', `${c.name}八岁开始修炼`, [
            c
        ], {
            year: c.birthYear + CONFIG.cultivationStartAge,
            month: c.birthMonth
        }, false);
    }
    assignTechnique(c, id) {
        const selected = id ? CONFIG.techniques.find((t)=>t.id === id) : CONFIG.techniques.find((t)=>t.element === c.rootElements[0]);
        if (!selected || c.rootType === 'none') return;
        if ((!c.factionId || c.factionId === this.s.playerFamily.id) && this.s.alpha) {
            const grade = selected.grade === '黄' ? 2 : selected.grade === '玄' ? 3 : 1;
            if (grade > this.s.alpha.buildings.library) return;
        }
        c.techniqueId = selected.id;
        c.techniqueAffinity = c.rootType === 'mutant' ? selected.element === c.rootElements[0] ? 1 : .85 : .8 + (c.rootAffinity[selected.element] || 50) / 500;
    }
    recover(c) {
        if (c.injuryMonths > 0) {
            c.injuryMonths--;
            if (c.injuryMonths === 0) c.health = 'healthy';
        }
        if (c.mood === 'grieving' && this.rng.chance(.05)) c.mood = 'calm';
    }
}

exports.CharacterSystem=CharacterSystem;
},
'systems/CultivationSystem':function(require,exports){
const { playerMember, resident }=require('../core/AlphaState');
const { ALPHA_CONFIG }=require('../core/AlphaConfig');
const { GameState, Character, Realm, newId, absoluteMonth }=require('../core/GameState');
const { manualBreakthrough }=require('../core/DecisionPolicy');
const { CONFIG, clamp }=require('../core/Configs');
const { RNGService }=require('../core/RNGService');
const { NotificationSystem }=require('./NotificationSystem');
const { LifespanSystem }=require('./LifespanSystem');
class CultivationSystem {
    s;
    rng;
    notices;
    life;
    constructor(s, rng, notices, life){
        this.s = s;
        this.rng = rng;
        this.notices = notices;
        this.life = life;
    }
    multiplier(c) {
        const a = this.s.alpha;
        if (!a || !playerMember(this.s, c)) return 1;
        let m = ALPHA_CONFIG.buildings.spiritVein.levels[a.buildings.spiritVein].cultivationMultiplier;
        for (const p of a.policies)m *= ALPHA_CONFIG.policies[p].cultivationMultiplier ?? 1;
        if (a.positions.teacher && this.s.characters.alive[a.positions.teacher]) m *= 1.02;
        if (c.age < 50) m *= 1 + ALPHA_CONFIG.buildings.trainingGround.levels[a.buildings.trainingGround].minorCultivationBonus;
        const blessings = Math.min(this.s.playerFamily.rank, a.buildings.ancestralHall, a.memorialIds.length) * .005;
        return m * (a.poor ? .9 : 1) * (1 + Math.min(.02, blessings));
    }
    costs(c) {
        const target = this.target(c);
        return target ? ALPHA_CONFIG.stabilization.breakthroughCosts[target] : {
            stones: 0,
            herbs: 0,
            materials: 0
        };
    }
    environmentReady(c) {
        const target = this.target(c), a = this.s.alpha;
        if (!a || target === 'foundation') return true;
        if (playerMember(this.s, c)) return this.s.playerFamily.rank >= 2 && a.buildings.spiritVein >= (target === 'nascent' ? 4 : 3) && a.buildings.library >= (target === 'nascent' ? 3 : 2);
        const f = a.world.find((f)=>f.id === c.factionId);
        return !!f && f.rank >= 2 && f.vein >= (target === 'nascent' ? 3 : 2);
    }
    reservedHigherCost(c) {
        const order = [
            'foundation',
            'core',
            'nascent', 'spirit', 'void'
        ];
        const rank = order.indexOf(this.target(c) || '');
        const candidates = playerMember(this.s, c) ? this.s.pendingDecisions.filter((d)=>d.type === 'major_breakthrough').map((d)=>this.s.characters.alive[d.characterId]) : Object.values(this.s.characters.alive).filter((p)=>p.factionId === c.factionId && p.isBottleneck && this.atMajor(p));
        const higher = candidates.filter((p)=>!!p && p.id !== c.id && order.indexOf(this.target(p) || '') > rank && this.environmentReady(p) && (this.target(p) !== 'nascent' || p.nascentReadyYear !== undefined && p.nascentReadyYear <= this.s.meta.gameYear)).sort((a, b)=>order.indexOf(this.target(b) || '') - order.indexOf(this.target(a) || ''))[0];
        return higher ? this.costs(higher) : {
            stones: 0,
            herbs: 0,
            materials: 0
        };
    }
    resourcesReady(c, automatic = false) {
        if (!this.environmentReady(c)) return false;
        const cost = this.costs(c), a = this.s.alpha;
        const reserved = automatic ? this.reservedHigherCost(c) : {
            stones: 0,
            herbs: 0,
            materials: 0
        };
        if (!a) return true;
        if (!playerMember(this.s, c)) {
            const f = a.world.find((f)=>f.id === c.factionId);
            const equivalent = cost.stones + cost.herbs * 3 + cost.materials * 8;
            const reserve = automatic ? this.target(c) === 'foundation' ? 3000 : this.target(c) === 'core' ? 15000 : 60000 : 0;
            return !!f && f.wealth >= equivalent + reserve + reserved.stones + reserved.herbs * 3 + reserved.materials * 8;
        }
        const fraction = automatic ? ALPHA_CONFIG.stabilization.autoReserveFraction : 0;
        const upkeepReserve = automatic ? a.annual.upkeep * ALPHA_CONFIG.stabilization.autoUpkeepReserveYears : 0;
        return this.s.playerFamily.spiritStones >= cost.stones * (1 + fraction) + upkeepReserve + reserved.stones && a.herbs >= cost.herbs * (1 + fraction) + reserved.herbs && a.materials >= cost.materials * (1 + fraction) + reserved.materials;
    }
    preparationYears(c) {
        const range = ALPHA_CONFIG.stabilization.nascentPreparationYears;
        const a = this.s.alpha, f = a?.world.find((f)=>f.id === c.factionId);
        const vein = playerMember(this.s, c) ? a?.buildings.spiritVein || 1 : (f?.vein || 1) + 1;
        const resources = this.resourcesReady(c) ? .9 : 1.1;
        const technique = CONFIG.techniques.find((t)=>t.id === c.techniqueId)?.speed || 1;
        const understanding = 1 + (c.comprehension - 50) / 150;
        const mood = c.mood === 'clear' ? .9 : c.mood === 'grieving' || c.mood === 'demon' ? 1.15 : 1;
        return Math.round(this.rng.int(range[0], range[1]) * resources * mood / (understanding * technique * (1 + .06 * (vein - 2))));
    }
    prepareNascent(c) {
        if (c.nascentReadyYear !== undefined) return;
        c.nascentReadyYear = this.s.meta.gameYear + this.preparationYears(c);
        this.notices.record('nascent_preparation', c.name + '金丹圆满，冲婴准备预计至' + c.nascentReadyYear + '年', [
            c
        ]);
    }
    important(c) {
        return manualBreakthrough(this.s, c);
    }
    target(c) {
        return ({qi:'foundation',foundation:'core',core:'nascent',nascent:'spirit',spirit:'void'})[c.realm] || null;
    }
    atMajor(c) {
        return c.realm !== 'mortal' && c.realm !== 'void' && c.realmStage === CONFIG.stages[c.realm];
    }
    chance(c, pill = false) {
        const target = this.target(c);
        if (!target || target === 'mortal' || target === 'qi') return 0;
        const modifiers = CONFIG.breakthroughModifiers;
        const technique = CONFIG.techniques.find((t)=>t.id === c.techniqueId);
        const ageRatio = c.age / this.life.theoretical(c);
        let p = CONFIG.breakthrough[target];
        p += modifiers.root[c.rootType] || 0;
        p += (c.comprehension - modifiers.comprehension.baseline) * modifiers.comprehension.perPoint;
        p += ((technique?.speed || 1) - modifiers.technique.speedBaseline) * modifiers.technique.speedPerPoint;
        p += (c.techniqueAffinity - modifiers.technique.affinityBaseline) * modifiers.technique.affinityPerPoint;
        const npcVein = this.s.alpha?.world.find((f)=>f.id === c.factionId)?.vein || 1;
        p += ALPHA_CONFIG.buildings.spiritVein.levels[playerMember(this.s, c) ? this.s.alpha?.buildings.spiritVein || 1 : Math.min(4, npcVein + 1)].breakthroughBonus;
        p += modifiers.mood[c.mood] || 0;
        p += modifiers.injury[c.health];
        if (ageRatio > modifiers.age.agingStart) p -= (ageRatio - modifiers.age.agingStart) * modifiers.age.penaltyPerRatio;
        if (pill && target === modifiers.pill.target) p += modifiers.pill.bonus;
        if (target === 'nascent') p -= ALPHA_CONFIG.stabilization.nascentDifficulty;
        return clamp(p, CONFIG.majorMin, CONFIG.majorMax);
    }
    chanceLabel(c, pill = false) {
        const p = this.chance(c, pill);
        return CONFIG.breakthroughModifiers.probabilityLabels.find(([limit])=>p < limit)[1];
    }
    tick(people, npc = false) {
        this.s.pendingDecisions = this.s.pendingDecisions.filter((d)=>{
            if (d.type !== 'major_breakthrough') return true;
            const c = this.s.characters.alive[d.characterId];
            return !!c && c.isBottleneck && this.atMajor(c) && this.target(c) === d.payload.target && (this.important(c) || !this.s.settings.autoBreakthrough);
        });
        for (const c of people || Object.values(this.s.characters.alive).filter((c)=>playerMember(this.s, c) && (!c.branchId || c.isResident))){
            if (c.lifeStatus !== 'alive' || this.s.alpha?.missing[c.id] !== undefined) continue;
            if (!c.cultivationStarted || !c.rootTested || c.realm === 'mortal' || c.realm === 'void' && c.realmStage === 4 && c.cultivationProgress >= 1) continue;
            if (!c.isBottleneck) {
                const root = CONFIG.rootSpeed[c.rootType], understanding = CONFIG.comprehension.find(([max])=>c.comprehension < max)[1], tech = CONFIG.techniques.find((t)=>t.id === c.techniqueId)?.speed || 1;
                const ageFactor = c.age < 18 ? .85 : c.age / this.life.theoretical(c) > .78 ? .72 : 1;
                const status = c.health === 'healthy' ? 1 : c.health === 'light' ? .75 : c.health === 'severe' ? .3 : .1;
                const mood = c.mood === 'grieving' ? .9 : c.mood === 'demon' ? .6 : c.mood === 'clear' ? 1.05 : 1;
                c.cultivationProgress = clamp(c.cultivationProgress + root * understanding * tech * (c.techniqueAffinity / .9) * ageFactor * status * mood * (c.isInRetreat ? 1.05 : 1) * this.multiplier(c) / (ALPHA_CONFIG.stabilization.stageYears[c.realm] * 12), 0, 1);
                if (c.cultivationProgress >= 1) {
                    c.isBottleneck = true;
                    c.bottleneckYear = this.s.meta.gameYear;
                }
            }
            if (!c.isBottleneck || absoluteMonth(this.s) < c.retryAtMonth) continue;
            if (this.atMajor(c)) {
                if (this.target(c) === 'nascent') {
                    this.prepareNascent(c);
                    if (this.s.meta.gameYear < c.nascentReadyYear) continue;
                }
                if (!npc && (this.important(c) || !this.s.settings.autoBreakthrough)) {
                    if (!this.s.pendingDecisions.some((d)=>d.type === 'major_breakthrough' && d.characterId === c.id)) {
                        this.s.pendingDecisions.push({
                            id: newId(this.s, 'decision'),
                            type: 'major_breakthrough',
                            characterId: c.id,
                            createdGameYear: this.s.meta.gameYear,
                            payload: {
                                target: this.target(c)
                            }
                        });
                        this.notices.record('decision', `${c.name}等待大境界突破决定`, [
                            c
                        ]);
                    }
                } else this.attempt(c, false, true);
            } else if (c.realm === 'void' && c.realmStage === 4) {
                c.isBottleneck = false;
            } else if (this.rng.chance(CONFIG.minorChance)) {
                c.realmStage++;
                c.cultivationProgress = 0;
                c.isBottleneck = false;
                this.notices.record('minor_success', `${c.name}修至${c.realm}第${c.realmStage}层`, [
                    c
                ]);
            } else {
                c.cultivationProgress = CONFIG.failureEffects.minorProgress;
                c.isBottleneck = false;
                c.retryAtMonth = absoluteMonth(this.s) + CONFIG.failureEffects.minorRetryMonths;
                this.notices.record('minor_failure', `${c.name}小境界突破未成`, [
                    c
                ]);
            }
        }
    }
    attempt(c, pill = false, automatic = false) {
        if (c.lifeStatus !== 'alive' || !c.isBottleneck || !this.atMajor(c) || absoluteMonth(this.s) < c.retryAtMonth) return false;
        const target = this.target(c);
        if (target === 'nascent' && (c.nascentReadyYear === undefined || this.s.meta.gameYear < c.nascentReadyYear)) return false;
        if (!this.resourcesReady(c, automatic)) return false;
        const cost = this.costs(c);
        if (pill) {
            if (target !== 'foundation' || !this.s.alpha || this.s.alpha.inventory.foundationPill < 1) return false;
            this.s.alpha.inventory.foundationPill--;
        }
        if (this.s.alpha) {
            if (playerMember(this.s, c)) {
                this.s.playerFamily.spiritStones -= cost.stones;
                this.s.alpha.herbs -= cost.herbs;
                this.s.alpha.materials -= cost.materials;
            } else {
                const f = this.s.alpha.world.find((f)=>f.id === c.factionId);
                f.wealth -= cost.stones + cost.herbs * 3 + cost.materials * 8;
            }
        }
        if (target === 'nascent') this.notices.record('nascent_attempt', c.name + '冲婴准备完成，尝试突破', [
            c
        ]);
        this.s.pendingDecisions = this.s.pendingDecisions.filter((d)=>!(d.type === 'major_breakthrough' && d.characterId === c.id));
        if (this.rng.chance(this.chance(c, pill))) {
            delete c.nascentReadyYear;
            delete c.coreBreakthroughPreparation;
            c.realm = target;
            c.realmStage = 1;
            c.baseLifespan = CONFIG.lifespan[target];
            c.cultivationProgress = 0;
            c.isBottleneck = false;
            c.mood = 'excited';
            this.notices.record('major_success', `${c.name}突破至${target}，基础寿元${c.baseLifespan}岁`, [
                c
            ]);
            return true;
        }
        const dist = CONFIG.failure[target];
        const outcome = this.rng.weighted(dist.map((w, i)=>[
                i,
                w
            ]));
        c.cultivationProgress = ALPHA_CONFIG.stabilization.failureProgress[target][outcome];
        c.isBottleneck = false;
        const recovery = ALPHA_CONFIG.stabilization.failureRecoveryYears[target];
        c.retryAtMonth = absoluteMonth(this.s) + this.rng.int(recovery[0], recovery[1]) * 12;
        if (target === 'nascent') delete c.nascentReadyYear;
        if (target === 'core') c.coreBreakthroughPreparation = 0;
        if (outcome >= 2 && target !== 'foundation') c.realmStage = Math.max(1, c.realmStage - 1);
        c.mood = 'confused';
        if (outcome > 0) {
            c.health = outcome === 1 ? 'light' : outcome === 2 ? 'severe' : 'critical';
            c.injuryMonths = CONFIG.failureEffects.injuryMonths[outcome];
            if (outcome >= 2) this.notices.record('serious_injury', `${c.name}突破受${outcome === 2 ? '重伤' : '濒危伤势'}`, [
                c
            ]);
        }
        if (outcome === 3) {
            c.lifespanPenalty += this.rng.int(CONFIG.failureEffects.lifespanPenalty[0], CONFIG.failureEffects.lifespanPenalty[1]);
            c.realmStage = Math.max(1, c.realmStage - 1);
            if (this.rng.chance(CONFIG.failureEffects.catastrophicDeath)) this.life.die(c, '突破遭劫');
        }
        this.notices.record('major_failure', `${c.name}突破失败${pill ? '（已服筑基丹）' : ''}，${[
            '修为受损',
            '轻伤',
            '重伤',
            '遭遇灾难'
        ][outcome]}`, [
            c
        ]);
        return true;
    }
}
function sVeinBonus(tier) {
    const table = CONFIG.breakthroughModifiers.spiritVein;
    return tier === '1-low' ? table['1-low'] : table.other;
}

exports.CultivationSystem=CultivationSystem;
},
'systems/EventSystem':function(require,exports){
const { AlphaWorldSystem }=require('./AlphaWorldSystem');
const { EVENT_PACK }=require('../core/AlphaConfig');
const { Character, findCharacter, newId }=require('../core/GameState');
const { EventContext, playerMember, resident, REALMS }=require('../core/AlphaState');
const { clamp }=require('../core/Configs');
class EventSystem {
    w;
    templates = EVENT_PACK.events.map((t)=>({
            ...t,
            description: '岁月流转，' + t.title + '。此事将留下人物与势力的记忆。',
            weight: t.level >= 3 ? 1 : 2,
            actors: [
                'character',
                'faction',
                'branch'
            ],
            memoryTags: []
        }));
    conditions = {};
    effects = {};
    constructor(w){
        this.w = w;
        this.install();
    }
    actor(c) {
        return findCharacter(this.w.s, c.actorId || this.w.s.playerFamily.leaderId);
    }
    npc(c) {
        return this.w.faction(c.factionId) || this.w.a.world.find((f)=>f.kind === 'family');
    }
    branch(c) {
        return this.w.a.branches.find((b)=>b.id === c.branchId) || this.w.a.branches[0];
    }
    install() {
        const w = this.w, a = w.a, actor = (c)=>this.actor(c), npc = (c)=>this.npc(c), branch = (c)=>this.branch(c), mem = (k)=>!!a.memories[k];
        const C = this.conditions;
        C['age 6-14'] = (c)=>!!actor(c) && actor(c).age >= 6 && actor(c).age <= 14;
        C['age >= 14'] = (c)=>!!actor(c) && actor(c).age >= 14;
        C['cultivator'] = (c)=>!!actor(c)?.cultivationStarted;
        C['mood != demon'] = (c)=>actor(c)?.mood !== 'demon';
        C['bottleneck >= 5 years'] = (c)=>!!actor(c)?.isBottleneck && w.year - (actor(c)?.bottleneckYear || w.year) >= 5;
        C['recent close-family death'] = (c)=>!!actor(c)?.biography.some((x)=>x.type === 'death' && w.year - x.year <= 5) || actor(c)?.mood === 'grieving';
        C['inRetreat'] = (c)=>!!actor(c)?.isInRetreat;
        C['ageRatio >= 0.9'] = (c)=>!!actor(c) && actor(c).age / w.e.life.theoretical(actor(c)) >= .9;
        C['important person'] = (c)=>!!actor(c) && w.e.cultivation.important(actor(c));
        C['eligible important member'] = (c)=>!!actor(c) && resident(w.s, actor(c)) && w.e.marriage.eligible(actor(c)) && w.e.marriage.important(actor(c));
        C['npc relation >= normal'] = (c)=>npc(c).relation >= -19;
        C['npc relation >= friendly'] = (c)=>npc(c).relation >= 30;
        C['npc relation <= normal'] = (c)=>npc(c).relation < 30;
        C['proposal'] = (c)=>w.s.pendingDecisions.some((d)=>d.type === 'marriage' && d.payload.npcId === npc(c).id);
        C['stronger npc family proposal'] = (c)=>C['proposal'](c) && npc(c).rank > w.s.playerFamily.rank;
        C['birth trigger'] = (c)=>c.trigger === 'birth';
        C['new root heavenly'] = (c)=>c.trigger === 'root' && actor(c)?.rootType === 'heavenly';
        for (const k of [
            'thunder',
            'ice',
            'wind'
        ])C['mutant ' + k] = (c)=>c.trigger === 'root' && actor(c)?.rootType === 'mutant' && actor(c)?.rootElements.includes(k) === true;
        C['player family'] = (c)=>!!actor(c) && playerMember(w.s, actor(c));
        C['bloodline 25-49'] = (c)=>!!actor(c)?.bloodlines.some((x)=>x.strength >= 25 && x.strength < 50);
        C['ancestor bloodline exists'] = (c)=>!!actor(c)?.bloodlines.length;
        C['fortune check'] = (c)=>!!actor(c) && actor(c).fortune >= 60;
        C['rare check'] = (c)=>!!actor(c) && actor(c).fortune >= 80;
        C['policy recruit or reputation >= 300'] = ()=>w.policy('recruit') || a.reputation >= 300;
        C['rank >=2'] = ()=>w.s.playerFamily.rank >= 2;
        C['policy active'] = ()=>a.policies.length > 0;
        C['population over capacity'] = ()=>w.residents().length > w.capacity();
        C['branch exists'] = (c)=>!!branch(c);
        C['branch relation >= friendly'] = (c)=>(branch(c)?.relation || 0) >= 30;
        C['npc family crisis'] = (c)=>npc(c).wealth < 500 || npc(c).decline > 0;
        C['3+ historical marriages with same npc'] = (c)=>npc(c).marriages.length >= 3;
        C['npc highest notable dies'] = (c)=>c.trigger === 'npc_death';
        C['npc satisfies rank conditions'] = (c)=>c.trigger === 'npc_rank_up';
        C['npc no longer sustains rank for long'] = (c)=>c.trigger === 'npc_rank_down';
        C['young talented player member'] = (c)=>!!actor(c) && resident(w.s, actor(c)) && actor(c).age >= 8 && actor(c).age < 30 && [
                'heavenly',
                'mutant',
                'dual'
            ].includes(actor(c).rootType);
        C['family member has sectId'] = (c)=>!!actor(c)?.sectId;
        C['sect relation >= friendly'] = (c)=>npc(c).kind === 'sect' && npc(c).relation >= 30;
        C['expedition active'] = ()=>!!a.expedition;
        C['expedition member'] = (c)=>!!a.expedition?.members.includes(c.actorId || '');
        C['year matches period'] = ()=>w.year % 80 === 0;
        C['every 10-20 years'] = ()=>w.year % 15 === 0;
        C['tag oldman_saved'] = ()=>mem('oldman_saved');
        C['has broken jade'] = ()=>mem('broken_jade');
        C['missing 5+ years'] = (c)=>a.missing[c.actorId || ''] !== undefined && w.year - a.missing[c.actorId || ''] >= 5;
        C['investigation tag'] = ()=>mem('investigation');
        C['external branch crisis'] = (c)=>!!branch(c) && branch(c).relation < 20;
        C['shelter choice'] = ()=>mem('shelter');
        C['important elder death'] = (c)=>c.trigger === 'death' && !!actor(c) && REALMS.indexOf(actor(c).realm) >= 3;
        C['ancestral sword exists'] = ()=>mem('ancestral_sword');
        C['high comprehension descendant'] = (c)=>(actor(c)?.comprehension || 0) >= 70;
        C['insight resolved'] = ()=>mem('sword_insight');
        C['core perfect important character'] = (c)=>actor(c)?.realm === 'core' && actor(c)?.realmStage === 4;
        C['first nascent attempt reaches climax'] = (c)=>c.trigger === 'nascent_attempt';
        C['first nascent success'] = (c)=>!!a.firstNascent && a.firstNascent.id === c.actorId;
        const E = this.effects, withActor = (fn)=>(c)=>{
                const p = actor(c);
                if (p) fn(p);
            }, tag = (key)=>()=>{
                a.memories[key] = true;
            }, rel = (n)=>(c)=>w.changeRelation(npc(c), n, '事件选择');
        for (const n of [
            3,
            5,
            12,
            15,
            20,
            -3,
            -5,
            -8,
            -10
        ])E['relation ' + (n >= 0 ? '+' : '') + n] = rel(n);
        E['relation +'] = rel(10);
        E['reputation +small'] = ()=>{
            a.reputation += 15;
        };
        E['family reputation +small'] = E['reputation +small'];
        E['reputation -small'] = ()=>{
            a.reputation = Math.max(0, a.reputation - 15);
        };
        for (const n of [
            20,
            50,
            60
        ])E['reputation +' + n] = ()=>{
            a.reputation += n;
        };
        for (const n of [
            80,
            300,
            500
        ])E['stones -' + n] = ()=>{
            w.s.playerFamily.spiritStones -= n;
        };
        E['stones -'] = ()=>{
            w.s.playerFamily.spiritStones -= 300;
        };
        E['stones +100~400'] = ()=>{
            w.s.playerFamily.spiritStones += w.e.rng.int(100, 400);
        };
        E['materials +20~50'] = ()=>{
            a.materials += w.e.rng.int(20, 50);
        };
        E['herbs +20~50% annual output'] = ()=>{
            a.herbs += Math.round(24 * 2 ** (a.buildings.field - 1) * (.2 + w.e.rng.next() * .3));
        };
        E['stones/materials +small'] = ()=>{
            w.s.playerFamily.spiritStones += 100;
            a.materials += 5;
        };
        E['stones/materials/technique chance'] = (c)=>{
            E['stones/materials +small'](c);
            if (actor(c) && w.e.rng.chance(.3)) w.e.chars.assignTechnique(actor(c), 'qingluan_art');
        };
        E['comprehension +2~5'] = withActor((p)=>p.comprehension = clamp(p.comprehension + w.e.rng.int(2, 5)));
        E['constitution -2~5'] = withActor((p)=>p.constitution = clamp(p.constitution - w.e.rng.int(2, 5)));
        for (const [k, min, max] of [
            [
                'cultivation +8~18%',
                .08,
                .18
            ],
            [
                'cultivation +10~25%',
                .1,
                .25
            ]
        ])E[k] = withActor((p)=>p.cultivationProgress = clamp(p.cultivationProgress + min + w.e.rng.next() * (max - min), 0, 1));
        for (const k of [
            'clear',
            'excited',
            'confused'
        ])E['mood -> ' + k] = withActor((p)=>p.mood = k);
        E['enter retreat'] = withActor((p)=>p.isInRetreat = true);
        E['mark long retreat'] = (c)=>{
            const p = actor(c);
            if (p) {
                p.isInRetreat = true;
                w.e.cultivation.prepareNascent(p);
                w.log('nascent_preparation', p.name + '金丹圆满，开始长期冲婴准备', false, p);
            }
        };
        E['breakthrough preparation +small'] = withActor((p)=>p.mood = 'clear');
        E['light injury or early exit'] = withActor((p)=>{
            p.health = 'light';
            p.injuryMonths = 3;
        });
        E['small chance mood clear'] = withActor((p)=>{
            if (w.e.rng.chance(.2)) p.mood = 'clear';
        });
        E['trait change weighted by personality'] = withActor((p)=>{
            if (w.e.rng.chance(.3)) p.traits = [
                p.traits.includes('bold') ? 'cautious' : 'diligent'
            ];
        });
        E['trait/mood branch'] = withActor((p)=>p.mood = p.traits.includes('affectionate') ? 'grieving' : 'clear');
        E['create legacy note'] = withActor((p)=>w.log('legacy', p.name + '留下修行心得', false, p));
        E['bloodline +15~30'] = withActor((p)=>{
            if (p.bloodlines[0]) p.bloodlines[0].strength = clamp(p.bloodlines[0].strength + w.e.rng.int(15, 30));
        });
        E['bloodline -> 50~85'] = withActor((p)=>{
            if (p.bloodlines[0]) p.bloodlines[0].strength = w.e.rng.int(50, 85);
        });
        E['small mood/reputation flavor'] = E['reputation +small'];
        E['small stability penalty'] = withActor((p)=>p.mood = 'confused');
        E['create outsider resident'] = ()=>{
            const p = w.e.chars.create(22, undefined, undefined, undefined, true);
            p.isFamily = true;
            w.e.chars.testRoot(p);
            w.e.chars.startCultivation(p);
        };
        E['fortune/check branch'] = (c)=>{
            if (w.e.rng.chance((actor(c)?.fortune || 50) / 100)) E['create outsider resident'](c);
        };
        E['create C-tier branch'] = ()=>{
            w.migrateBranch(true);
        };
        E['overcapacity pressure +1'] = ()=>{
            a.pressure++;
        };
        E['spawn notable descendant'] = (c)=>{
            const b = branch(c);
            if (b) w.branchNotable(b);
        };
        E['spawn notable descendants'] = E['spawn notable descendant'];
        E['resident population +small'] = ()=>{};
        for (const [key, n] of [
            [
                'branch relation +15',
                15
            ],
            [
                'branch relation -8',
                -8
            ],
            [
                'branch relation -',
                -15
            ]
        ])E[key] = (c)=>{
            const b = branch(c);
            if (b) b.relation = clamp(b.relation + n, -100, 100);
        };
        E['branch survival +'] = (c)=>{
            const b = branch(c);
            if (b) b.population += 5;
        };
        E['older candidate position'] = ()=>{
            const p = w.residents().filter((c)=>w.canAppoint('elder', c.id)).sort((a, b)=>b.age - a.age)[0];
            if (p) w.appoint('elder', p.id);
        };
        E['better-stat candidate position'] = ()=>{
            const p = w.residents().filter((c)=>w.canAppoint('teacher', c.id)).sort((a, b)=>b.comprehension - a.comprehension)[0];
            if (p) w.appoint('teacher', p.id);
        };
        E['avoid production debuff'] = ()=>{
            a.mineDebuffUntil = 0;
        };
        E['mine production -15% for 5 years'] = ()=>{
            a.mineDebuffUntil = w.year + 5;
        };
        E['memory tag oldman_saved'] = tag('oldman_saved');
        E['memory tag 世交'] = (c)=>{
            a.memories['世交:' + npc(c).id] = true;
        };
        E['relation floor friendly'] = (c)=>{
            npc(c).relation = Math.max(30, npc(c).relation);
        };
        E['gain broken jade'] = tag('broken_jade');
        E['unlock ancient cave expedition'] = ()=>{
            a.memories.ancient_cave = true;
            w.addHiddenNode('古洞岔路');
        };
        E['future event tag'] = tag('herb_location');
        E['unlock expedition for limited years'] = tag('secret_open');
        E['market special inventory'] = ()=>{
            a.market.special = true;
            a.market.stock += 2;
        };
        E['create ancestral item'] = tag('ancestral_sword');
        E['unlock technique insight'] = (c)=>{
            a.memories.sword_insight = true;
            const p = actor(c);
            if (p) w.e.chars.assignTechnique(p, 'qingluan_art');
        };
        E['ancestral hall display'] = tag('sword_display');
        E['small blessing'] = tag('sword_blessing');
        E['unlock follow-up'] = tag('investigation');
        E['mark missing'] = (c)=>{
            const p = actor(c);
            if (p) {
                a.missing[p.id] = w.year;
                p.isResident = false;
            }
        };
        E['resolve: alive/sect/safe tragedy weighted'] = (c)=>{
            const p = actor(c);
            if (p) {
                delete a.missing[p.id];
                if (p.lifeStatus === 'dead') {
                    w.log('missing_resolved', p.name + '失踪期间已亡，亲缘与生平保留', false, p);
                    return;
                }
                if (w.e.rng.chance(.8)) {
                    p.isResident = true;
                    w.log('return', p.name + '平安归来', false, p);
                } else w.e.life.die(p, '失踪多年，遗物证实遇难');
            }
        };
        E['set sectId'] = (c)=>{
            const p = actor(c), f = w.a.world.find((f)=>f.kind === 'sect' && (f.id === c.factionId || !c.factionId)) || w.a.world.find((f)=>f.kind === 'sect');
            if (p) w.admit(p, f);
        };
        E['isResident false'] = withActor((p)=>p.isResident = false);
        for (const n of [
            10,
            3,
            -2
        ])E['sect relation ' + (n > 0 ? '+' : '') + n] = (c)=>{
            const f = w.a.world.find((f)=>f.id === c.factionId && f.kind === 'sect') || w.a.world.find((f)=>f.kind === 'sect');
            w.changeRelation(f, n, '宗门事件');
        };
        E['create interfamily marriage'] = (c)=>{
            const p = actor(c);
            if (p) w.propose(npc(c), p);
        };
        E['partner isResident true'] = (c)=>{
            const d = w.s.pendingDecisions.find((d)=>d.type === 'marriage' && d.payload.npcId === npc(c).id);
            if (d) d.payload.mode = 'in';
        };
        E['player member isResident false'] = (c)=>{
            const d = w.s.pendingDecisions.find((d)=>d.type === 'marriage' && d.payload.npcId === npc(c).id);
            if (d) d.payload.mode = 'out';
        };
        E['diplomacy check'] = (c)=>{
            const p = actor(c);
            rel(w.e.rng.chance(((p?.comprehension || 50) + (a.positions.envoy ? 5 : 0)) / 100) ? 12 : -5)(c);
        };
        E['auto conflict check'] = (c)=>{
            const team = w.residents().filter((p)=>p.realm !== 'mortal').slice(0, 5);
            if (team.length) rel(w.combat(team, REALMS[Math.min(4, npc(c).rank)]) ? 5 : -10)(c);
        };
        E['diplomacy complication'] = rel(-15);
        E['auto combat'] = ()=>{
            w.expeditionChoice('hunt');
        };
        E['comprehension/check -> reward or injury'] = ()=>{
            w.expeditionChoice('break');
        };
        E['fortune/check -> reveal risk'] = ()=>{
            w.expeditionChoice('scout');
        };
        E['herbs +'] = ()=>{
            w.expeditionChoice('gather');
        };
        E['small risk'] = ()=>{};
        E['safe progress'] = ()=>{
            w.expeditionChoice('avoid');
        };
        E['small chance create second child'] = (c)=>{
            const p = actor(c);
            if (p && w.e.rng.chance(.03)) {
                const f = findCharacter(w.s, p.fatherId), m = findCharacter(w.s, p.motherId);
                if (f && m) w.e.chars.create(0, undefined, f, m);
            }
        };
        for (const k of [
            'chronicle',
            'world chronicle',
            'world notice',
            'WORLD_FIRST_NASCENT_SOUL',
            'all faction reactions',
            'npc rank +1',
            'npc rank -1',
            'possible rank pressure',
            'npc prestige loss'
        ])E[k] = ()=>{};
        for (const e of this.templates){
            for (const k of e.conditions)if (!C[k]) throw new Error('Unregistered condition: ' + k);
            for (const k of [
                ...e.effects,
                ...e.choices.flatMap((x)=>x.effects)
            ])if (!E[k]) throw new Error('Unregistered effect: ' + k);
        }
    }
    eligible(t, c) {
        return t.conditions.every((k)=>this.conditions[k](c));
    }
    context(t) {
        const w = this.w;
        for (const p of w.residents().concat(Object.values(w.s.characters.alive).filter((c)=>!!c.sectId))){
            for (const f of w.a.world){
                const c = {
                    actorId: p.id,
                    factionId: f.id,
                    branchId: w.a.branches[0]?.id
                };
                if (this.eligible(t, c)) return c;
            }
        }
        const c = {
            actorId: w.s.playerFamily.leaderId || undefined
        };
        return this.eligible(t, c) ? c : null;
    }
    fire(id, c = {}, scheduled = false) {
        c = Object.fromEntries(Object.entries(c).filter(([, v])=>v !== undefined));
        const t = this.templates.find((x)=>x.id === id), w = this.w;
        if (!t || !scheduled && !this.eligible(t, c) || w.a.cooldowns[id] !== undefined && w.year - w.a.cooldowns[id] < t.cooldownYears || w.s.pendingDecisions.some((d)=>d.type === 'event' && d.payload.eventId === id)) return false;
        w.a.cooldowns[id] = w.year;
        w.a.eventSeen[id] = (w.a.eventSeen[id] || 0) + 1;
        w.log('event:' + id, t.title, t.category === 'world' || t.level === 5, this.actor(c));
        for (const tag of t.memoryTags || [])w.a.memories[tag] = true;
        if (t.choices.length) {
            w.s.pendingDecisions.push({
                id: newId(w.s, 'decision'),
                type: 'event',
                characterId: c.actorId || w.s.playerFamily.leaderId || '',
                createdGameYear: w.year,
                payload: {
                    eventId: id,
                    context: c,
                    level: t.level
                }
            });
            w.a.lastDecisionYear = w.year;
        } else {
            this.apply(t.effects, c);
            this.follow(id, c);
        }
        return true;
    }
    cost(effects) {
        return effects.reduce((n, k)=>n + (/^stones -(\d+)$/.test(k) ? Number(k.split('-')[1]) : k === 'stones -' ? 300 : 0), 0);
    }
    apply(effects, c) {
        if (this.w.s.playerFamily.spiritStones < this.cost(effects)) return false;
        for (const k of effects)this.effects[k](c);
        return true;
    }
    resolve(id, choice) {
        const d = this.w.s.pendingDecisions.find((x)=>x.id === id && x.type === 'event'), t = this.templates.find((x)=>x.id === d?.payload.eventId), ch = t?.choices.find((x)=>x.id === choice);
        if (!d || !t || !ch) return false;
        const c = d.payload.context;
        if (!this.apply(ch.effects, c)) return false;
        this.w.s.pendingDecisions = this.w.s.pendingDecisions.filter((x)=>x.id !== id);
        this.w.log('choice', t.title + '：' + ch.text, t.category === 'world', this.actor(c));
        if (t.id === 'c_outbranch_1' && choice === 'shelter') {
            this.w.a.memories.shelter = true;
            this.schedule('c_outbranch_2', c, [
                2,
                5
            ]);
        }
        if (ch.next) this.schedule(ch.next, c, ch.delayYears || [
            1,
            1
        ]);
        if (t.category === 'exploration') this.w.encounter();
        return true;
    }
    schedule(id, c, delay) {
        c = Object.fromEntries(Object.entries(c).filter(([, v])=>v !== undefined));
        if (!this.w.a.scheduled.some((x)=>x.id === id && x.context.actorId === c.actorId)) this.w.a.scheduled.push({
            id,
            context: c,
            year: this.w.year + this.w.e.rng.int(delay[0], delay[1])
        });
    }
    follow(id, c) {
        const template = this.templates.find((t)=>t.id === id);
        if (template?.nextEvent) {
            this.schedule(template.nextEvent, c, template.delayYears || [
                1,
                1
            ]);
            return;
        }
        const next = {
            c_oldman_2: [
                'c_oldman_3',
                [
                    3,
                    6
                ]
            ],
            c_missing_1: [
                'c_missing_2',
                [
                    5,
                    8
                ]
            ],
            c_sword_1: [
                'c_sword_2',
                [
                    2,
                    6
                ]
            ],
            c_sword_2: [
                'c_sword_3',
                [
                    1,
                    3
                ]
            ]
        };
        if (next[id]) this.schedule(next[id][0], c, next[id][1]);
    }
    annual() {
        const w = this.w;
        for (const x of [
            ...w.a.scheduled
        ])if (x.year <= w.year) {
            if (x.id === 'c_sword_2') {
                const descendant = w.residents().find((p)=>p.comprehension >= 70 && w.e.gene.getAncestors(p.id, 3).has(x.context.actorId || ''));
                if (!descendant) continue;
                x.context.actorId = descendant.id;
            }
            if (this.fire(x.id, x.context)) {
                w.a.scheduled = w.a.scheduled.filter((v)=>v !== x);
            } else if (!findCharacter(w.s, x.context.actorId || null) && x.context.actorId) w.a.scheduled = w.a.scheduled.filter((v)=>v !== x);
        }
        if (w.year % 80 !== 0) w.a.memories.secret_open = false;
        for (const id of [
            'e_secret_open',
            'e_market_fair'
        ])this.fire(id, {});
        const interval = w.s.playerFamily.rank <= 2 ? 6 : 10;
        const candidates = this.templates.filter((t)=>!t.id.startsWith('c_') || [
                'c_oldman_1',
                'c_outbranch_1'
            ].includes(t.id)).filter((t)=>![
                'world',
                'exploration'
            ].includes(t.category) && (!t.choices.length || w.year - w.a.lastDecisionYear >= interval)).filter((t)=>w.a.cooldowns[t.id] === undefined || w.year - w.a.cooldowns[t.id] >= t.cooldownYears).map((t)=>({
                t,
                c: this.context(t)
            })).filter((x)=>x.c);
        if (candidates.length && w.e.rng.chance(.3)) {
            const x = w.e.rng.weighted(candidates.map((x)=>[
                    x,
                    x.t.weight ?? (x.t.level >= 3 ? 1 : 2)
                ]));
            this.fire(x.t.id, x.c);
        }
    }
}

exports.EventSystem=EventSystem;
},
'systems/GenealogySystem':function(require,exports){
const { GameState, Character, findCharacter }=require('../core/GameState');
class GenealogySystem {
    state;
    constructor(state){
        this.state = state;
    }
    getAncestors(id, generations = 4) {
        const result = new Set();
        let frontier = [
            id
        ];
        for(let d = 0; d < generations; d++){
            const next = [];
            for (const x of frontier){
                const c = findCharacter(this.state, x);
                for (const p of [
                    c?.fatherId,
                    c?.motherId
                ])if (p && !result.has(p)) {
                    result.add(p);
                    next.push(p);
                }
            }
            frontier = next;
        }
        return result;
    }
    isCloseRelative(a, b, generations = 4) {
        if (a === b) return true;
        const aa = this.getAncestors(a, generations), bb = this.getAncestors(b, generations);
        if (aa.has(b) || bb.has(a)) return true;
        return [
            ...aa
        ].some((x)=>bb.has(x));
    }
    neighborhood(id, up = 3, down = 3) {
        const rows = [];
        const seen = new Set();
        const add = (x, relation, depth)=>{
            if (!seen.has(x) && findCharacter(this.state, x)) {
                seen.add(x);
                rows.push({
                    id: x,
                    relation,
                    depth
                });
            }
        };
        add(id, '本人', 0);
        const c = findCharacter(this.state, id);
        for (const x of c?.spouseIds || [])add(x, '道侣', 0);
        let frontier = [
            id
        ];
        for(let d = 1; d <= up; d++){
            const next = [];
            for (const x of frontier){
                const q = findCharacter(this.state, x);
                for (const p of [
                    q?.fatherId,
                    q?.motherId
                ])if (p) {
                    add(p, '祖辈', -d);
                    next.push(p);
                }
            }
            frontier = next;
        }
        frontier = [
            id
        ];
        for(let d = 1; d <= down; d++){
            const next = [];
            for (const x of frontier)for (const child of findCharacter(this.state, x)?.childrenIds || []){
                add(child, '后代', d);
                for (const sp of findCharacter(this.state, child)?.spouseIds || [])add(sp, '后代道侣', d);
                next.push(child);
            }
            frontier = next;
        }
        return rows;
    }
}

exports.GenealogySystem=GenealogySystem;
},
'systems/GeneticsSystem':function(require,exports){
const { Character }=require('../core/GameState');
const { RNGService }=require('../core/RNGService');
const { CONFIG, clamp }=require('../core/Configs');
class GeneticsSystem {
    rng;
    constructor(rng){
        this.rng = rng;
    }
    generate(f, m, ancestors = []) {
        const affinity = {};
        for (const e of CONFIG.elements){
            let v = this.rng.int(10, 90);
            if (f && m) {
                const ancestral = ancestors.length ? ancestors.reduce((s, c)=>s + c.rootAffinity[e], 0) / ancestors.length : 50;
                v = f.rootAffinity[e] * CONFIG.genetics.father + m.rootAffinity[e] * CONFIG.genetics.mother + ancestral * CONFIG.genetics.ancestor + v * CONFIG.genetics.mutation;
                v = v * (1 - CONFIG.genetics.regression) + 50 * CONFIG.genetics.regression + this.rng.int(-12, 12);
            }
            affinity[e] = Math.round(clamp(v));
        }
        const parents = f && m ? [
            f,
            m
        ] : [];
        const quality = parents.length ? parents.reduce((s, c)=>s + (c.rootType === 'heavenly' || c.rootType === 'mutant' ? 1 : c.rootType === 'dual' ? .6 : 0), 0) / 2 : 0;
        let rootType = 'none';
        const hasRoot = this.rng.chance(CONFIG.rootChance + quality * CONFIG.genetics.rootedParentBonus);
        const mutated = this.rng.chance(CONFIG.mutationChance);
        if (hasRoot || mutated) {
            const weights = CONFIG.rootDistribution.map(([t, w])=>[
                    t,
                    w * (t === 'heavenly' ? 1 + quality * CONFIG.genetics.heavenlyWeightBonus : t === 'dual' ? 1 + quality * CONFIG.genetics.dualWeightBonus : 1)
                ]);
            rootType = this.rng.weighted(weights);
            if (mutated) rootType = 'mutant';
        }
        const count = CONFIG.rootCount[rootType];
        const rootElements = rootType === 'mutant' ? [
            this.rng.pick(CONFIG.mutantElements)
        ] : CONFIG.elements.slice().sort((a, b)=>affinity[b] - affinity[a]).slice(0, count);
        const stat = (key)=>Math.round(clamp(parents.length ? (f[key] + m[key]) * .35 + 50 * .2 + this.rng.int(0, 100) * .1 + this.rng.int(-15, 15) : this.rng.int(20, 92)));
        return {
            rootAffinity: affinity,
            rootType,
            rootElements,
            rootPurity: rootType === 'none' ? 0 : clamp(.55 + this.rng.next() * .4 + quality * .04, 0, 1),
            comprehension: stat('comprehension'),
            fortune: stat('fortune'),
            constitution: stat('constitution')
        };
    }
}

exports.GeneticsSystem=GeneticsSystem;
},
'systems/HistoryCompaction':function(require,exports){
const { Character, GameState, LifeEvent }=require('../core/GameState');
function compactBiography(c) {
    if (c.lifeStatus !== 'dead') return;
    const output = [], groups = [];
    let group = [];
    for(let i = 0; i < c.biography.length; i++){
        const e = c.biography[i];
        if (e.type === 'minor_success' || e.type === 'minor_failure') group.push(i);
        if (e.type === 'major_success' || e.type === 'death') {
            if (group.length) groups.push(group);
            group = [];
        }
    }
    if (group.length) groups.push(group);
    const replacements = new Map(), removed = new Set();
    for (const indices of groups){
        if (indices.length < 2) continue;
        const first = c.biography[indices[0]], last = c.biography[indices[indices.length - 1]];
        for (const index of indices)removed.add(index);
        replacements.set(indices[indices.length - 1], {
            ...last,
            type: 'cultivation_summary',
            text: `仙历 ${first.year}~${last.year} 年，${indices.length}次小境界修行记事；${last.text}`
        });
    }
    for(let i = 0; i < c.biography.length; i++){
        const summary = replacements.get(i);
        if (summary) output.push(summary);
        else if (!removed.has(i)) output.push(c.biography[i]);
    }
    c.biography = output;
}
function compactLegacyHistory(s) {
    if (s.alpha?.familyHistory.length) {
        const key = (e)=>JSON.stringify([
                e.year,
                e.month,
                e.type,
                e.characterId || '',
                e.text
            ]);
        const seen = new Set(s.history.map(key));
        for (const e of s.alpha.familyHistory)if (!seen.has(key(e))) {
            s.history.push(e);
            seen.add(key(e));
        }
        s.history.sort((a, b)=>a.year - b.year || a.month - b.month);
        s.alpha.familyHistory = [];
    }
    for (const c of Object.values(s.characters.archive))compactBiography(c);
}

exports.compactBiography=compactBiography;
exports.compactLegacyHistory=compactLegacyHistory;
},
'systems/LifespanSystem':function(require,exports){
const { compactBiography }=require('./HistoryCompaction');
const { playerMember, resident }=require('../core/AlphaState');
const { GameState, Character, findCharacter, ageMonths }=require('../core/GameState');
const { CONFIG, annualToMonthly }=require('../core/Configs');
const { RNGService }=require('../core/RNGService');
const { NotificationSystem }=require('./NotificationSystem');
class LifespanSystem {
    s;
    rng;
    notices;
    constructor(s, rng, notices){
        this.s = s;
        this.rng = rng;
        this.notices = notices;
    }
    theoretical(c) {
        return Math.max(10, c.baseLifespan * c.lifespanFactor - c.lifespanPenalty);
    }
    tick(people) {
        for (const c of people || Object.values(this.s.characters.alive).filter((c)=>playerMember(this.s, c))){
            if (c.lifeStatus !== 'alive') continue;
            const ratio = ageMonths(this.s, c) / 12 / this.theoretical(c);
            let annual = CONFIG.mortality.baseAnnual;
            if (ratio > CONFIG.mortality.agingStart) annual += Math.pow((ratio - CONFIG.mortality.agingStart) / .42, 3) * .35;
            if (ratio > CONFIG.mortality.highRisk) annual = Math.max(annual, .80);
            if (ratio > CONFIG.mortality.extremeRisk) annual = .995;
            if (c.health === 'critical') annual = Math.max(annual, .10);
            if (this.rng.chance(annualToMonthly(Math.min(.999, annual)))) this.die(c, ratio >= CONFIG.mortality.agingStart ? '自然衰老' : '疾病');
        }
    }
    die(c, cause) {
        if (c.lifeStatus === 'dead') return;
        c.lifeStatus = 'dead';
        c.deathYear = this.s.meta.gameYear;
        c.deathAge = c.age;
        c.isInRetreat = false;
        delete this.s.characters.alive[c.id];
        this.s.characters.archive[c.id] = c;
        this.notices.record('death', `${c.name}享年${c.age}岁，${cause}`, [
            c
        ]);
        compactBiography(c);
        this.s.pendingDecisions = this.s.pendingDecisions.filter((d)=>d.characterId !== c.id && d.payload.partnerId !== c.id);
        for (const id of [
            ...c.spouseIds,
            ...c.childrenIds
        ]){
            const p = findCharacter(this.s, id);
            if (p?.lifeStatus === 'alive') p.mood = 'grieving';
        }
        if (this.s.playerFamily.leaderId === c.id) this.selectLeader();
    }
    selectLeader() {
        const list = Object.values(this.s.characters.alive).filter((c)=>c.isFamily && resident(this.s, c)).sort((a, b)=>[
                'mortal',
                'qi',
                'foundation',
                'core',
                'nascent', 'spirit', 'void'
            ].indexOf(b.realm) - [
                'mortal',
                'qi',
                'foundation',
                'core',
                'nascent', 'spirit', 'void'
            ].indexOf(a.realm) || b.realmStage - a.realmStage || b.age - a.age);
        const c = list[0];
        this.s.playerFamily.leaderId = c?.id || null;
        if (c) this.notices.record('leader', `${c.name}继任族长`, [
            c
        ]);
    }
    ancestorHall() {
        return Object.values(this.s.characters.archive).filter((c)=>c.isFamily && resident(this.s, c));
    }
}

exports.LifespanSystem=LifespanSystem;
},
'systems/LocalLZ':function(require,exports){
const BASE64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
function utf8(text) {
    const encoded = encodeURIComponent(text), out = [];
    for(let i = 0; i < encoded.length; i++){
        if (encoded[i] === '%') {
            out.push(parseInt(encoded.slice(i + 1, i + 3), 16));
            i += 2;
        } else out.push(encoded.charCodeAt(i));
    }
    return new Uint8Array(out);
}
function fromUTF8(bytes) {
    const chunks = [];
    for(let i = 0; i < bytes.length; i += 4096){
        let chunk = '';
        for(let j = i; j < Math.min(i + 4096, bytes.length); j++)chunk += '%' + bytes[j].toString(16).padStart(2, '0');
        chunks.push(chunk);
    }
    return decodeURIComponent(chunks.join(''));
}
function checksum(bytes) {
    let crc = 0xffffffff;
    for (const b of bytes){
        crc ^= b;
        for(let k = 0; k < 8; k++)crc = crc >>> 1 ^ (crc & 1 ? 0xedb88320 : 0);
    }
    return (crc ^ 0xffffffff) >>> 0;
}
function base64(bytes) {
    const chunks = [];
    for(let start = 0; start < bytes.length; start += 12288){
        let chunk = '';
        for(let i = start; i < Math.min(bytes.length, start + 12288); i += 3){
            const a = bytes[i], b = bytes[i + 1], c = bytes[i + 2], n = a << 16 | (b || 0) << 8 | (c || 0);
            chunk += BASE64[n >>> 18] + BASE64[n >>> 12 & 63] + (b === undefined ? '=' : BASE64[n >>> 6 & 63]) + (c === undefined ? '=' : BASE64[n & 63]);
        }
        chunks.push(chunk);
    }
    return chunks.join('');
}
function unbase64(text) {
    if (text.length % 4 || !/^[A-Za-z0-9+/]*={0,2}$/.test(text)) throw new Error('压缩存档编码损坏');
    const padding = text.endsWith('==') ? 2 : text.endsWith('=') ? 1 : 0;
    const out = new Uint8Array(text.length / 4 * 3 - padding);
    let pos = 0;
    for(let i = 0; i < text.length; i += 4){
        const n = BASE64.indexOf(text[i]) << 18 | BASE64.indexOf(text[i + 1]) << 12 | Math.max(0, BASE64.indexOf(text[i + 2])) << 6 | Math.max(0, BASE64.indexOf(text[i + 3]));
        for (const shift of [
            16,
            8,
            0
        ])if (pos < out.length) out[pos++] = n >>> shift & 255;
    }
    return out;
}
function compressSave(text) {
    const input = utf8(text), out = [], recent = new Int32Array(65536);
    recent.fill(-1);
    const hash = (i)=>(input[i] * 251 + input[i + 1]) * 251 + input[i + 2] & 65535;
    let literals = [];
    const flush = ()=>{
        if (literals.length) {
            out.push(literals.length - 1, ...literals);
            literals = [];
        }
    };
    for(let i = 0; i < input.length;){
        let length = 0, previous = -1;
        if (i + 2 < input.length) {
            const key = hash(i);
            previous = recent[key];
            recent[key] = i;
            if (previous >= 0 && i - previous <= 65535) while(length < 130 && i + length < input.length && input[previous + length] === input[i + length])length++;
        }
        if (length >= 4) {
            flush();
            const distance = i - previous;
            out.push(128 | length - 3, distance >>> 8, distance & 255);
            for(let j = 1; j < length && i + j + 2 < input.length; j++)recent[hash(i + j)] = i + j;
            i += length;
        } else {
            literals.push(input[i++]);
            if (literals.length === 128) flush();
        }
    }
    flush();
    return 'LZ1:' + input.length.toString(16).padStart(8, '0') + checksum(input).toString(16).padStart(8, '0') + ':' + base64(out);
}
function decompressSave(text) {
    if (!text.startsWith('LZ1:')) return text;
    if (!/^LZ1:[0-9a-f]{16}:/.test(text)) throw new Error('压缩存档头损坏');
    const length = parseInt(text.slice(4, 12), 16), crc = parseInt(text.slice(12, 20), 16);
    if (length > 32 * 1024 * 1024) throw new Error('压缩存档超过安全解码长度');
    const input = unbase64(text.slice(21)), out = new Uint8Array(length);
    let pos = 0;
    for(let i = 0; i < input.length;){
        const token = input[i++];
        if (token < 128) {
            const count = token + 1;
            if (i + count > input.length || pos + count > length) throw new Error('压缩存档字面段损坏');
            out.set(input.subarray(i, i + count), pos);
            pos += count;
            i += count;
        } else {
            if (i + 2 > input.length) throw new Error('压缩存档引用损坏');
            const distance = input[i++] << 8 | input[i++], count = (token & 127) + 3;
            if (!distance || distance > pos || pos + count > length) throw new Error('压缩存档引用越界');
            for(let j = 0; j < count; j++){
                out[pos] = out[pos - distance];
                pos++;
            }
        }
    }
    if (pos !== length || checksum(out) !== crc) throw new Error('压缩存档校验失败');
    return fromUTF8(out);
}

exports.compressSave=compressSave;
exports.decompressSave=decompressSave;
},
'systems/MarriageSystem':function(require,exports){
const { ALPHA_CONFIG }=require('../core/AlphaConfig');
const { resident }=require('../core/AlphaState');
const { GameState, Character, newId, findCharacter }=require('../core/GameState');
const { manualMarriage }=require('../core/DecisionPolicy');
const { CONFIG, annualToMonthly }=require('../core/Configs');
const { RNGService }=require('../core/RNGService');
const { GenealogySystem }=require('./GenealogySystem');
const { CharacterSystem }=require('./CharacterSystem');
const { NotificationSystem }=require('./NotificationSystem');
class MarriageSystem {
    s;
    rng;
    gene;
    chars;
    notices;
    constructor(s, rng, gene, chars, notices){
        this.s = s;
        this.rng = rng;
        this.gene = gene;
        this.chars = chars;
        this.notices = notices;
    }
    eligible(c) {
        return c.lifeStatus === 'alive' && c.age >= 18 && !c.spouseIds.some((id)=>findCharacter(this.s, id)?.lifeStatus === 'alive');
    }
    important(c) {
        return manualMarriage(this.s, c);
    }
    marry(a, b, year = this.s.meta.gameYear) {
        if (!this.eligible(a) || !this.eligible(b) || a.gender === b.gender || this.gene.isCloseRelative(a.id, b.id)) return false;
        a.spouseIds.push(b.id);
        b.spouseIds.push(a.id);
        a.marriageYears[b.id] = b.marriageYears[a.id] = year;
        this.notices.record('marriage', `${a.name}与${b.name}结为道侣`, [
            a,
            b
        ], {
            year,
            month: this.s.meta.gameMonth
        });
        return true;
    }
    annualProbability() {
        return CONFIG.marriageAnnual * (this.s.alpha?.policies.includes('fertility') ? ALPHA_CONFIG.policies.fertility.marriageMultiplier : 1);
    }
    tick() {
        for (const d of [
            ...this.s.pendingDecisions
        ]){
            if (d.type !== 'marriage') continue;
            const a = findCharacter(this.s, d.characterId), b = findCharacter(this.s, d.payload.partnerId);
            if (!a || !b || !this.eligible(a) || !this.eligible(b)) this.s.pendingDecisions = this.s.pendingDecisions.filter((x)=>x.id !== d.id);
            else if (!d.payload.npcId && !this.important(a) && !this.important(b)) this.resolve(d.id, true);
        }
        for (const c of Object.values(this.s.characters.alive)){
            if (!resident(this.s, c) || !c.isFamily || !this.eligible(c) || this.s.pendingDecisions.some((d)=>d.type === 'marriage' && (d.characterId === c.id || d.payload.partnerId === c.id)) || !this.rng.chance(annualToMonthly(this.annualProbability()))) continue;
            let partner = Object.values(this.s.characters.alive).find((b)=>resident(this.s, b) && b.id !== c.id && b.gender !== c.gender && this.eligible(b) && Math.abs(b.age - c.age) < 20 && !this.gene.isCloseRelative(c.id, b.id) && !this.s.pendingDecisions.some((d)=>d.type === 'marriage' && (d.characterId === b.id || d.payload.partnerId === b.id)));
            if (!partner) {
                partner = this.chars.create(Math.max(18, c.age + this.rng.int(-5, 5)), c.gender === 'male' ? 'female' : 'male', undefined, undefined, true);
                partner.generation = c.generation;
                this.chars.testRoot(partner);
                this.chars.startCultivation(partner);
            }
            if (this.important(c) || this.important(partner)) {
                this.s.pendingDecisions.push({
                    id: newId(this.s, 'decision'),
                    type: 'marriage',
                    characterId: c.id,
                    createdGameYear: this.s.meta.gameYear,
                    payload: {
                        partnerId: partner.id
                    }
                });
                this.notices.record('decision', `${c.name}的婚配等待决定`, [
                    c
                ]);
            } else this.marry(c, partner);
        }
    }
    resolve(id, accept) {
        const d = this.s.pendingDecisions.find((x)=>x.id === id && x.type === 'marriage');
        if (!d) return false;
        const a = findCharacter(this.s, d.characterId), b = findCharacter(this.s, d.payload.partnerId);
        this.s.pendingDecisions = this.s.pendingDecisions.filter((x)=>x.id !== id);
        if (!a || !b) return false;
        return accept ? this.marry(a, b) : true;
    }
}

exports.MarriageSystem=MarriageSystem;
},
'systems/NotificationSystem':function(require,exports){
const { GameState, Character, LifeEvent }=require('../core/GameState');
const { CONFIG }=require('../core/Configs');
const { EventBus }=require('../core/EventBus');
class NotificationSystem {
    state;
    bus;
    notices = [];
    constructor(state, bus){
        this.state = state;
        this.bus = bus;
    }
    record(type, text, people = [], date, familyHistory) {
        const event = {
            year: date?.year ?? this.state.meta.gameYear,
            month: date?.month ?? this.state.meta.gameMonth,
            type,
            text,
            characterId: people[0]?.id
        };
        const global = familyHistory ?? !CONFIG.history.biographyOnly.includes(type);
        if (global && (!people[0]?.factionId || people[0].factionId === this.state.playerFamily.id)) this.state.history.push(event);
        for (const c of people)c.biography.push({
            ...event,
            characterId: c.id
        });
        if (global && (!people[0]?.factionId || people[0].factionId === this.state.playerFamily.id) && (type !== 'death' || people[0]?.isWatched || [
            'core',
            'nascent', 'spirit', 'void'
        ].includes(people[0]?.realm)) && [
            'death',
            'root_rare',
            'major_success',
            'decision',
            'leader'
        ].includes(type)) {
            this.notices.push(event);
            if (this.notices.length > 80) this.notices.shift();
        }
        this.bus.emit(event);
        return event;
    }
}

exports.NotificationSystem=NotificationSystem;
},
'systems/SaveSystem':function(require,exports){
const { compressSave, decompressSave }=require('./LocalLZ');
const { compactLegacyHistory }=require('./HistoryCompaction');
const { ensureAlpha }=require('../core/AlphaState');
const { GameState, allCharacters, findCharacter }=require('../core/GameState');
const { CONFIG }=require('../core/Configs');
class MemoryStorage {
    data = {};
    getItem(k) {
        return this.data[k] ?? null;
    }
    setItem(k, v) {
        this.data[k] = v;
    }
    removeItem(k) {
        delete this.data[k];
    }
}
const SAVE_KEYS = {
    main: 'wx_family_save_main',
    backup: 'wx_family_save_backup',
    settings: 'wx_family_settings'
};
function validateState(s) {
    if (!s || s.meta?.saveVersion !== CONFIG.saveVersion || !s.playerFamily || !s.characters?.alive || !s.characters?.archive || !Array.isArray(s.pendingDecisions) || !Array.isArray(s.history)) throw new Error('存档结构或版本无效');
    const finite = (n)=>typeof n === 'number' && Number.isFinite(n);
    if (!finite(s.meta.gameYear) || s.meta.gameYear < 1 || !Number.isInteger(s.meta.gameYear) || !Number.isInteger(s.meta.gameMonth) || s.meta.gameMonth < 1 || s.meta.gameMonth > 12 || !finite(s.meta.rngState) || !finite(s.meta.lastExitAt) || !finite(s.meta.nextId) || !finite(s.meta.offlineCarryMs) || !s.settings || ![
        'paused',
        'normal',
        'fast',
        'high'
    ].includes(s.settings.timeSpeed)) throw new Error('时间/RNG/设置无效');
    if (typeof s.meta.seed !== 'string' || !Number.isInteger(s.meta.rngState) || s.meta.rngState < 0 || s.meta.rngState > 4294967295 || !Number.isInteger(s.meta.nextId) || s.meta.nextId < 1) throw new Error('Seed或ID序列无效');
    if (!finite(s.playerFamily.spiritStones) || s.playerFamily.spiritStones < 0 || !Number.isInteger(s.playerFamily.initialRerollCount) || s.playerFamily.initialRerollCount < 0 || s.playerFamily.initialRerollCount > 3) throw new Error('家族字段无效');
    const a = s.alpha;
    if (a) {
        for (const n of [
            a.herbs,
            a.materials,
            a.reputation,
            a.inventory.foundationPill,
            a.market.price,
            a.market.stock
        ])if (!finite(n) || n < 0) throw new Error('Alpha资源无效');
        for (const n of Object.values(a.buildings))if (!Number.isInteger(n) || n < 1 || n > 6) throw new Error('建筑等级无效');
        if (s.playerFamily.rank < 1 || s.playerFamily.rank > 6) throw new Error('家族星级无效');
        const worldIds = new Set(a.world.map((f)=>f.id));
        if (worldIds.size !== a.world.length) throw new Error('势力ID冲突');
        for (const f of a.world){
            if (!finite(f.population) || f.population < 0 || f.rank < 1 || f.rank > 4 || f.notableIds.some((id)=>!findCharacter(s, id))) throw new Error('云州势力引用无效');
            if (!finite(f.wealth) || f.wealth < 0 || !finite(f.reputation) || f.reputation < 0 || !finite(f.relation) || !Number.isInteger(f.vein) || f.vein < 1 || f.vein > 4 || !f.intermarriages || typeof f.intermarriages !== 'object' || !f.relations || typeof f.relations !== 'object') throw new Error('势力资源/联姻字段无效');
            for (const [otherId, record] of Object.entries(f.intermarriages)){
                const other = a.world.find((other)=>other.id === otherId), reciprocal = other?.intermarriages?.[f.id];
                if (f.kind !== 'family' || other?.kind !== 'family' || otherId === f.id || !Number.isInteger(record.count) || record.count < 1 || !Number.isInteger(record.lastYear) || record.lastYear > s.meta.gameYear || reciprocal?.count !== record.count || reciprocal?.lastYear !== record.lastYear) throw new Error('势力联姻引用无效');
            }
        }
        for (const b of a.branches){
            if (!findCharacter(s, b.founderId) || b.memberIds.some((id)=>!findCharacter(s, id)) || !finite(b.population) || b.population < 0) throw new Error('支系引用无效');
        }
        if (a.firstNascent && (!findCharacter(s, a.firstNascent.id) || a.firstNascent.source !== 'CultivationSystem.attempt')) throw new Error('首元婴引用无效');
    }
    const ids = new Set();
    for (const [key, c] of [
        ...Object.entries(s.characters.alive),
        ...Object.entries(s.characters.archive)
    ]){
        if (key !== c.id || ids.has(c.id)) throw new Error('人物ID冲突');
        ids.add(c.id);
        if (s.characters.alive[c.id] && c.lifeStatus !== 'alive' || s.characters.archive[c.id] && c.lifeStatus !== 'dead') throw new Error('人物归档状态无效');
        if (!finite(c.age) || c.age < 0 || !finite(c.cultivationProgress) || c.cultivationProgress < 0 || c.cultivationProgress > 1 || !CONFIG.stages[c.realm] || !Number.isInteger(c.realmStage) || c.realmStage < (c.realm === 'mortal' ? 0 : 1) || c.realmStage > (c.realm === 'mortal' ? 0 : CONFIG.stages[c.realm])) throw new Error('年龄或境界无效');
        for (const n of [
            c.birthYear,
            c.birthMonth,
            c.generation,
            c.comprehension,
            c.fortune,
            c.constitution,
            c.lifespanFactor,
            c.baseLifespan,
            c.rootPurity,
            c.retryAtMonth
        ])if (!finite(n)) throw new Error('人物数值无效');
        if (!(c.rootType in CONFIG.rootSpeed) || !finite(c.lifespanPenalty) || !finite(c.techniqueAffinity) || !finite(c.injuryMonths) || !finite(c.retryAtMonth) || c.lifespanFactor <= 0 || c.comprehension < 0 || c.comprehension > 100 || c.fortune < 0 || c.fortune > 100 || c.constitution < 0 || c.constitution > 100) throw new Error('天资或状态无效');
        if (typeof c.rootTested !== 'boolean' || typeof c.cultivationStarted !== 'boolean' || !c.cultivationStarted && c.realm !== 'mortal' || c.cultivationStarted && (!c.rootTested || c.rootType === 'none') || c.lifeStatus === 'alive' && c.age < CONFIG.cultivationStartAge && c.cultivationStarted || c.rootTested && c.age < CONFIG.rootTestAge) throw new Error('测灵/修炼状态无效');
        if (!Array.isArray(c.biography) || !Array.isArray(c.spouseIds) || !Array.isArray(c.childrenIds)) throw new Error('人物关系无效');
        for (const x of Object.values(c.rootAffinity))if (!finite(x)) throw new Error('灵根无效');
    }
    for (const c of allCharacters(s)){
        for (const [parent, gender] of [
            [
                c.fatherId,
                'male'
            ],
            [
                c.motherId,
                'female'
            ]
        ]){
            if (parent) {
                const p = findCharacter(s, parent);
                if (!p || p.gender !== gender || !p.childrenIds.includes(c.id) || p.id === c.id || p.generation >= c.generation || p.birthYear > c.birthYear - 18) throw new Error('亲子关系无效');
            }
        }
        for (const id of c.childrenIds){
            const child = findCharacter(s, id);
            if (!child || ![
                child.fatherId,
                child.motherId
            ].includes(c.id)) throw new Error('子女引用无效');
        }
        for (const id of c.spouseIds){
            const p = findCharacter(s, id);
            if (!p || !p.spouseIds.includes(c.id) || p.gender === c.gender || c.marriageYears[id] !== p.marriageYears[c.id]) throw new Error('配偶关系无效');
        }
    }
    for (const d of s.pendingDecisions){
        if (d.type !== 'event' && d.type !== 'rank' && !s.characters.alive[d.characterId] || ![
            'major_breakthrough',
            'marriage',
            'event',
            'rank'
        ].includes(d.type)) throw new Error('待决引用无效');
        if (d.type === 'marriage' && !s.characters.alive[d.payload.partnerId]) throw new Error('婚配待决无效');
    }
    if (s.playerFamily.leaderId && !s.characters.alive[s.playerFamily.leaderId]) throw new Error('族长引用无效');
}
class SaveSystem {
    port;
    lastWarning = '';
    preserveNextBackup = false;
    constructor(port){
        this.port = port;
    }
    migrate(raw) {
        if (raw?.meta?.saveVersion === CONFIG.saveVersion) {
            ensureAlpha(raw);
            return raw;
        }
        if (raw?.meta?.saveVersion === '1.2.2' || raw?.meta?.saveVersion === '1.2.1' || raw?.meta?.saveVersion === '1.2.0' || raw?.meta?.saveVersion === '1.1.0') {
            const s = JSON.parse(JSON.stringify(raw));
            s.meta.saveVersion = CONFIG.saveVersion;
            ensureAlpha(s);
            if (!['1.2.1','1.2.2'].includes(raw.meta.saveVersion)) compactLegacyHistory(s);
            validateState(s);
            return s;
        }
        if (raw?.meta?.saveVersion !== '1.0.0') {
            throw new Error('不支持此旧档/未来版本，请保留原档');
        }
        const state = JSON.parse(JSON.stringify(raw));
        const resetIds = new Set();
        for (const c of allCharacters(state)){
            c.cultivationStarted = c.realm !== 'mortal';
            if (c.lifeStatus === 'alive' && c.age < CONFIG.cultivationStartAge && c.cultivationStarted) {
                c.cultivationStarted = false;
                c.realm = 'mortal';
                c.realmStage = 0;
                c.cultivationProgress = 0;
                c.baseLifespan = CONFIG.lifespan.mortal;
                c.isBottleneck = false;
                c.isInRetreat = false;
                c.techniqueId = '';
                c.techniqueAffinity = 0;
                resetIds.add(c.id);
                for (const event of c.biography){
                    if (event.type === 'cultivation_start') {
                        event.type = 'legacy_cultivation_start';
                        event.text += '（V1.0提前修炼记录；V1.1起按八岁规则）';
                    }
                }
            }
        }
        state.history = state.history.filter((event)=>{
            if (event.type === 'child_birth' || CONFIG.history.biographyOnly.includes(event.type)) return false;
            const c = findCharacter(state, event.characterId || null);
            if (event.type === 'birth' && c && !c.isFamily) return false;
            if (event.type === 'root_rare' && c && !c.isFamily) return false;
            if (event.type === 'birth' && c?.fatherId && c?.motherId) {
                event.text = `${findCharacter(state, c.fatherId)?.name}与${findCharacter(state, c.motherId)?.name}诞下${c.name}`;
            }
            return true;
        });
        state.pendingDecisions = state.pendingDecisions.filter((d)=>d.type !== 'major_breakthrough' || !resetIds.has(d.characterId));
        state.meta.saveVersion = CONFIG.saveVersion;
        ensureAlpha(state);
        validateState(state);
        return state;
    }
    decode(text) {
        const s = this.migrate(JSON.parse(decompressSave(text)));
        validateState(s);
        return s;
    }
    save(s, now = Date.now(), touchExit = true) {
        validateState(s);
        const previousUpdated = s.meta.updatedAt, previousExit = s.meta.lastExitAt;
        s.meta.updatedAt = now;
        if (touchExit) s.meta.lastExitAt = now;
        let text;
        try {
            text = compressSave(JSON.stringify(s));
        } catch  {
            this.lastWarning = '本地压缩保存失败，原存档保留，请导出 JSON。';
            s.meta.updatedAt = previousUpdated;
            s.meta.lastExitAt = previousExit;
            return false;
        }
        const previous = this.port.getItem(SAVE_KEYS.main);
        if (previous && !this.preserveNextBackup) {
            try {
                this.decode(previous);
                this.port.setItem(SAVE_KEYS.backup, previous);
            } catch (e) {}
        }
        try {
            this.port.setItem(SAVE_KEYS.main, text);
            if (this.port.getItem(SAVE_KEYS.main) !== text) throw new Error('写入校验失败');
            this.lastWarning = '';
            this.preserveNextBackup = false;
        } catch  {
            this.lastWarning = '本地存档保存失败（空间或权限不足），原主档与有效备份仍保留。请立即导出当前 JSON；关闭页面会丢失尚未保存的进度。';
            s.meta.updatedAt = previousUpdated;
            s.meta.lastExitAt = previousExit;
            return false;
        }
        try {
            this.port.setItem(SAVE_KEYS.settings, JSON.stringify({
                ...s.settings,
                ...this.preferences()
            }));
        } catch  {}
        return true;
    }
    preferences() {
        try {
            const p = JSON.parse(this.port.getItem(SAVE_KEYS.settings) || '{}');
            return {
                ...typeof p.bgm === 'boolean' ? {
                    bgm: p.bgm
                } : {},
                ...typeof p.sfx === 'boolean' ? {
                    sfx: p.sfx
                } : {},
                ...typeof p.volume === 'number' && Number.isFinite(p.volume) ? {
                    volume: Math.max(0, Math.min(1, p.volume))
                } : {}
            };
        } catch  {
            return {};
        }
    }
    savePreferences(p) {
        try {
            this.port.setItem(SAVE_KEYS.settings, JSON.stringify(p));
            return true;
        } catch  {
            return false;
        }
    }
    readSlot(slot) {
        try {
            const text = this.port.getItem(SAVE_KEYS[slot]);
            return text ? this.decode(text) : null;
        } catch  {
            return null;
        }
    }
    backupCurrent() {
        const text = this.port.getItem(SAVE_KEYS.main);
        if (!text) return false;
        try {
            this.decode(text);
            this.port.setItem(SAVE_KEYS.backup, text);
            return this.port.getItem(SAVE_KEYS.backup) === text;
        } catch  {
            return false;
        }
    }
    restoreBackup() {
        const s = this.readSlot('backup');
        if (!s) return false;
        this.preserveNextBackup = true;
        return this.save(s);
    }
    deleteProgress() {
        this.port.removeItem(SAVE_KEYS.main);
        this.port.removeItem(SAVE_KEYS.backup);
        this.preserveNextBackup = false;
        this.lastWarning = '';
    }
    load() {
        this.lastWarning = '';
        for (const key of [
            SAVE_KEYS.main,
            SAVE_KEYS.backup
        ]){
            const text = this.port.getItem(key);
            if (!text) continue;
            try {
                const s = this.decode(text);
                if (key === SAVE_KEYS.backup) this.lastWarning = '主存档损坏，已恢复上一份备份。';
                return s;
            } catch (e) {
                this.lastWarning = '存档无法读取：' + String(e);
            }
        }
        return null;
    }
    hasData() {
        return !!(this.port.getItem(SAVE_KEYS.main) || this.port.getItem(SAVE_KEYS.backup));
    }
    reset() {
        Object.values(SAVE_KEYS).forEach((k)=>this.port.removeItem(k));
    }
    export(s) {
        validateState(s);
        return JSON.stringify(s, null, 2);
    }
}

exports.MemoryStorage=MemoryStorage;
exports.SAVE_KEYS=SAVE_KEYS;
exports.validateState=validateState;
exports.SaveSystem=SaveSystem;
},
'systems/TimeSystem':function(require,exports){
const { GameState, ageMonths }=require('../core/GameState');
const { RNGService }=require('../core/RNGService');
const { CONFIG }=require('../core/Configs');
const { CharacterSystem }=require('./CharacterSystem');
const { CultivationSystem }=require('./CultivationSystem');
const { MarriageSystem }=require('./MarriageSystem');
const { BirthSystem }=require('./BirthSystem');
const { LifespanSystem }=require('./LifespanSystem');
class TimeSystem {
    s;
    rng;
    chars;
    cultivation;
    marriage;
    birth;
    life;
    onYear;
    bus;
    constructor(s, rng, chars, cultivation, marriage, birth, life, onYear, bus){
        this.s = s;
        this.rng = rng;
        this.chars = chars;
        this.cultivation = cultivation;
        this.marriage = marriage;
        this.birth = birth;
        this.life = life;
        this.onYear = onYear;
        this.bus = bus;
    }
    tick() {
        if (!this.s.meta.started) return;
        this.s.meta.gameMonth++;
        if (this.s.meta.gameMonth > 12) {
            this.s.meta.gameMonth = 1;
            this.s.meta.gameYear++;
        }
        for (const c of Object.values(this.s.characters.alive))c.age = Math.max(0, Math.floor(ageMonths(this.s, c) / 12));
        this.cultivation.tick();
        this.marriage.tick();
        this.birth.tick();
        for (const c of Object.values(this.s.characters.alive).filter((c)=>!c.factionId || c.factionId === this.s.playerFamily.id)){
            this.chars.testRoot(c);
            this.chars.startCultivation(c);
            this.chars.recover(c);
        }
        this.life.tick();
        this.s.meta.rngState = this.rng.state;
        if (this.s.meta.gameMonth === 1) this.onYear();
    }
    advanceMonths(months) {
        if (!Number.isFinite(months) || months < 0) throw new Error('Invalid month count');
        for(let i = 0; i < Math.floor(months); i++){
            if (this.s.alpha?.worldModal || this.s.pendingDecisions.length) break;
            this.tick();
        }
    }
    offline(now) {
        const elapsed = Math.max(0, now - this.s.meta.lastExitAt) + this.s.meta.offlineCarryMs;
        const unit = CONFIG.offlineHourMs / 12;
        const months = Math.min(CONFIG.offlineMaxYears * 12, Math.floor(elapsed / unit));
        this.s.meta.offlineCarryMs = elapsed >= CONFIG.offlineMaxYears * CONFIG.offlineHourMs ? 0 : elapsed - months * unit;
        const start = this.s.history.length, startYear = this.s.meta.gameYear, startMonth = this.s.meta.gameMonth;
        let breakthroughs = 0;
        const unsubscribe = this.bus.subscribe((e)=>{
            if (e.type === 'minor_success' || e.type === 'major_success') breakthroughs++;
        });
        try {
            this.advanceMonths(months);
        } finally{
            unsubscribe();
        }
        if (this.s.alpha?.worldModal) this.s.meta.offlineCarryMs = 0;
        this.s.meta.lastExitAt = now;
        const events = this.s.history.slice(start).filter((e)=>e.year > startYear || e.year === startYear && e.month > startMonth);
        return {
            months: (this.s.meta.gameYear - startYear) * 12 + this.s.meta.gameMonth - startMonth,
            years: ((this.s.meta.gameYear - startYear) * 12 + this.s.meta.gameMonth - startMonth) / 12,
            births: events.filter((e)=>e.type === 'birth').length,
            marriages: events.filter((e)=>e.type === 'marriage').length,
            deaths: events.filter((e)=>e.type === 'death').length,
            breakthroughs,
            pending: this.s.pendingDecisions.length
        };
    }
}

exports.TimeSystem=TimeSystem;
},
'ui/AlphaPanels':function(require,exports){
const { treeLayout }=require('./TreeLayout');
const { ACTION_LABELS, calendar, spiritVein, relation }=require('./UIStringMapper');
const { Presenter, UIRow }=require('./Presenter');
const { ALPHA_CONFIG : D }=require('../core/AlphaConfig');
const { allCharacters, findCharacter }=require('../core/GameState');
const { resident, playerMember, REALMS }=require('../core/AlphaState');
const { label, realmLabel, rootLabel }=require('./Labels');
function alphaAction(p, id, input) {
    const e = p.engine;
    if (!e) return false;
    const w = e.world, s = e.state, a = w.a, parts = id.split(':');
    if (id === 'world_close') {
        a.worldModal = false;
        p.ui.modal = null;
        p.ui.tab = '大事';
        p.ui.historyTab = '世界史';
        return true;
    }
    if (id === 'search') {
        p.ui.search = input;
        p.ui.page = 0;
        return true;
    }
    if (parts[0] === 'panel') {
        p.ui.modal = parts[1];
        return true;
    }
    if (parts[0] === 'history') {
        p.ui.historyTab = parts[1];
        p.ui.page = 0;
        return true;
    }
    if (parts[0] === 'faction') {
        p.ui.factionId = parts[1];
        p.ui.modal = 'faction';
        return true;
    }
    if (parts[0] === 'upgrade') {
        if (!w.upgrade(parts[1])) p.ui.message = '需要足够灵石、星级，且家族未拮据';
        return true;
    }
    if (parts[0] === 'policy') {
        const keys = a.policies.includes(parts[1]) ? a.policies.filter((x)=>x !== parts[1]) : [
            ...a.policies,
            parts[1]
        ];
        if (!w.setPolicies(keys)) p.ui.message = '家策槽位不足或距上次改策未满五年';
        return true;
    }
    if (parts[0] === 'assign') {
        if (!w.appoint(parts[1], parts[2])) p.ui.message = '需要在族成年候选人';
        return true;
    }
    if (parts[0] === 'diplomacy') {
        const result = w.diplomacyResult(p.ui.factionId, parts[1]);
        p.ui.message = (result.ok ? '成功：' : '未执行：') + (ACTION_LABELS[result.action] || '外交') + ' · ' + result.reason + ' · 关系 ' + result.relationBefore + ' → ' + result.relationAfter + ' · 消耗灵石 ' + result.costs.stones + ' · 获得药材 ' + result.gains.herbs + '、灵材 ' + result.gains.materials + ' · 冷却至仙历' + result.cooldownUntilYear + '年';
        p.diplomacyFeedback = {
            targetId: result.targetId,
            text: p.ui.message
        };
        p.feedback('外交结果', p.ui.message);
        return true;
    }
    if (id === 'npc_marriage') {
        const f = w.faction(p.ui.factionId), c = w.residents().find((c)=>e.marriage.eligible(c));
        if (!f || !c || !w.propose(f, c)) p.ui.message = '暂缺合适候选人';
        else {
            p.ui.modal = null;
            p.ui.tab = '大事';
            p.ui.historyTab = '待决';
        }
        return true;
    }
    if (id === 'buy_pill') {
        if (!w.buyPill()) p.ui.message = '坊市库存或灵石不足';
        return true;
    }
    if (parts[0] === 'sell') {
        w.sell(parts[1], 50);
        return true;
    }
    if (parts[0] === 'memorial') {
        w.addMemorial(parts[1]);
        return true;
    }
    if (parts[0] === 'explore') {
        p.ui.location = parts[1];
        p.ui.team = [];
        p.ui.modal = 'location';
        return true;
    }
    if (id === 'prepare_expedition') {
        const access = w.expeditionAccess(p.ui.location);
        if (!access.ok || a.expedition) {
            p.ui.message = a.expedition ? '已有队伍在外，请先查看当前远征' : access.reason;
            return true;
        }
        p.ui.team = [];
        p.ui.modal = 'expedition_setup';
        return true;
    }
    if (parts[0] === 'team') {
        p.ui.team = p.ui.team.includes(parts[1]) ? p.ui.team.filter((x)=>x !== parts[1]) : p.ui.team.length < 5 ? [
            ...p.ui.team,
            parts[1]
        ] : p.ui.team;
        return true;
    }
    if (id === 'depart') {
        if (!w.startExpedition(p.ui.location, p.ui.team)) p.ui.message = '需要三至五名成年队员及地点解锁';
        else {
            p.ui.modal = 'expedition';
            p.feedback('远征出发', '队伍已出发，请选择当前节点行动。', a.expedition?.members[0]);
        }
        return true;
    }
    if (parts[0] === 'node') {
        const expedition = a.expedition;
        if (!expedition) {
            p.ui.message = '远征已结束，请查看结算';
            p.ui.modal = 'expedition';
            return true;
        }
        const node = expedition.node, logLength = expedition.log.length;
        const d = s.pendingDecisions.find((d)=>[
                'e_ruined_cave',
                'e_beast_tracks',
                'e_spirit_herbs'
            ].includes(d.payload.eventId));
        const t = w.events.templates.find((t)=>t.id === d?.payload.eventId);
        let ok = false;
        if (d && t?.choices.some((c)=>c.id === parts[1])) ok = w.events.resolve(d.id, parts[1]);
        else {
            ok = w.expeditionChoice(parts[1]);
            if (ok && a.expedition && a.expedition.node !== node) {
                if (d) s.pendingDecisions = s.pendingDecisions.filter((x)=>x.id !== d.id);
                w.encounter();
            }
        }
        const logs = expedition.log.slice(logLength).join('\n');
        p.ui.message = ok ? (ACTION_LABELS[parts[1]] || '远征行动') + '已结算' : '节点行动未执行，请检查条件';
        if (ok) p.feedback('远征节点结果', (logs || p.ui.message) + '\n' + (a.expedition ? '当前节点 ' + a.expedition.currentNode + '/' + (a.expedition.plannedNodes + a.expedition.extraNodes) : '远征已归来，奖励已入库，结算页已打开。'), expedition.members[0]);
        else p.feedback('远征节点结果', p.ui.message);
        return true;
    }
    return false;
}
function alphaRows(p) {
    const e = p.engine;
    if (!e || !e.state.meta.started) return null;
    const s = e.state, w = e.world, a = w.a, u = p.ui, actions = (pairs)=>pairs.map(([title, id])=>({
                title,
                id
            })), back = {
        title: '返回',
        id: 'close'
    };
    if (a.worldModal) {
        const n = a.firstNascent, c = findCharacter(s, n.id);
        return [
            {
                title: '元婴现世 · 天下大事',
                body: `仙历 ${n.year} 年\n${n.name} · ${w.faction(n.factionId)?.name || s.playerFamily.name}\n${n.age} 岁 · ${c ? rootLabel(c) : n.root}\n云州首位元婴由金丹圆满修士真实突破产生。`,
                tone: 'L5',
                fullscreen: true,
                effect: 'nascent',
                portraitId: n.id,
                actions: [
                    {
                        title: '查看世界史',
                        id: 'world_close'
                    }
                ]
            }
        ];
    }
    if (u.modal === 'buildings') return [
        {
            title: '山门营建',
            body: '每年自动经营。灵脉可提前一阶，作为晋星准备。',
            actions: [
                back
            ]
        },
        ...Object.entries(D.buildings).map(([k, b])=>({
                title: b.name + ' · ' + a.buildings[k] + '级',
                body: `下一级灵石 ${b.levels[a.buildings[k] + 1]?.upgradeCost ?? '已至最高'}${k === 'spiritVein' ? ' · ' + spiritVein(s.playerFamily.spiritVeinTier) : ''}`,
                actions: a.buildings[k] < 6 ? [
                    {
                        title: '升级',
                        id: 'upgrade:' + k
                    }
                ] : []
            }))
    ];
    if (u.modal === 'policies') return [
        {
            title: '家族政策',
            body: `议事堂 ${a.buildings.hall} 级 · 上次切换 ${a.policyChanged < 0 ? '未改策' : a.policyChanged + '年'}\n政策切换间隔五年，不能全部启用。`,
            actions: [
                back
            ]
        },
        ...Object.entries(D.policies).map(([k, v])=>({
                title: v.name + (a.policies.includes(k) ? ' · 已启用' : ''),
                body: ({
                    cultivation: '修炼略增，维护费提高',
                    fertility: '婚育略增，维护费提高',
                    recruit: '每年有机会接纳散修',
                    quiet: '负面冲突减少，声望增长放缓',
                    economy: '产量提升，修炼略降'
                })[k],
                actions: [
                    {
                        title: a.policies.includes(k) ? '停用' : '启用',
                        id: 'policy:' + k
                    }
                ]
            }))
    ];
    if (u.modal === 'positions') return [
        {
            title: '家族职位',
            body: '族长不兼任长老。大长老、传功长老、外务长老及执事互斥；现任不重复列入候选。',
            actions: [
                back
            ]
        },
        ...Object.entries(a.positions).flatMap(([role, id])=>{
            const names = {
                elder: '大长老',
                teacher: '传功长老',
                envoy: '外务长老',
                steward: '执事'
            };
            const suitability = (c)=>role === 'teacher' ? c.comprehension : role === 'elder' ? REALMS.indexOf(c.realm) * 20 + c.age / 10 : role === 'envoy' ? c.comprehension + (c.traits.includes('affectionate') ? 10 : 0) : c.fortune;
            const candidates = w.residents().filter((c)=>w.canAppoint(role, c.id)).sort((x, y)=>suitability(y) - suitability(x)).slice(0, 4);
            return [
                {
                    title: names[role] + ' · ' + (findCharacter(s, id)?.name || '空缺'),
                    body: '当前职责 ' + names[role]
                },
                ...candidates.map((c)=>({
                        title: c.name + ' · ' + names[role] + '候选',
                        body: `${c.age}岁 · ${realmLabel(c)}\n性格 ${c.traits.map(label).join('、')} · 适性 ${suitability(c) >= 70 ? '上佳' : '可任'} · 当前无职`,
                        portraitId: c.id,
                        actions: [
                            {
                                title: '任命',
                                id: `assign:${role}:${c.id}`
                            }
                        ]
                    }))
            ];
        })
    ];
    if (u.modal === 'ancestral') return [
        {
            title: '祖祠 · 慎终追远',
            body: `最多生效 ${Math.min(s.playerFamily.rank, a.buildings.ancestralHall)} 位先祖的小幅祖荫；总加成不超过 2%。`,
            actions: [
                back
            ]
        },
        ...Object.values(s.characters.archive).filter((c)=>playerMember(s, c) && (c.isWatched || REALMS.indexOf(c.realm) >= 3 || a.memorialIds.includes(c.id))).slice(-24).reverse().map((c)=>({
                title: c.name + ' · ' + realmLabel(c),
                body: `享年 ${c.deathAge} · ${a.memorialIds.includes(c.id) ? '已入祠' : '可入祠'}\n${c.biography.slice(-3).map((x)=>x.text).join('\n')}`,
                portraitId: c.id,
                actions: [
                    {
                        title: '生平',
                        id: 'select:' + c.id
                    },
                    {
                        title: '入祠',
                        id: 'memorial:' + c.id
                    }
                ]
            }))
    ];
    if (u.modal === 'market') return [
        {
            title: D.npcWorld.marketName,
            body: `灵石 ${Math.floor(s.playerFamily.spiritStones)} · 药材 ${a.herbs} · 灵材 ${a.materials}\n筑基丹 ${a.market.price} 灵石 · 现货 ${a.market.stock} · 库存丹药 ${a.inventory.foundationPill}\n每年更新库存，购买后突破消耗一枚。${a.market.special ? '\n大集特供已开放' : ''}`,
            actions: [
                {
                    title: '买筑基丹',
                    id: 'buy_pill'
                },
                {
                    title: '卖50药材',
                    id: 'sell:herbs'
                },
                {
                    title: '卖50灵材',
                    id: 'sell:materials'
                },
                back
            ]
        }
    ];
    if (u.modal === 'faction') {
        const f = w.faction(u.factionId);
        if (!f) return null;
        return [
            {
                title: f.name + ' · ' + (f.kind === 'sect' ? '宗门' : '★'.repeat(f.rank)),
                body: `关系 ${relationLabel(f.relation)}（${f.relation}） · ${f.trait}\n估算人口 ${f.population} · 声望 ${f.reputation}\n财富 ${Math.round(f.wealth)} · 灵脉 ${f.vein}阶\n练气 ${f.counts.qi || 0} · 筑基 ${f.counts.foundation || 0} · 金丹 ${f.counts.core || 0} · 元婴 ${f.counts.nascent || 0}\n邻族联姻 ${Object.values(f.intermarriages).reduce((n, x)=>n + x.count, 0)} 次 · 世交 ${Object.values(f.intermarriages).filter((x)=>x.count >= 3).length} 家`,
                actions: actions([
                    [
                        '赠礼',
                        'diplomacy:gift'
                    ],
                    [
                        '贸易',
                        'diplomacy:trade'
                    ],
                    [
                        '求援/互助',
                        'diplomacy:aid'
                    ],
                    [
                        '和解',
                        'diplomacy:reconcile'
                    ],
                    [
                        '结盟',
                        'diplomacy:alliance'
                    ],
                    [
                        '交恶',
                        'diplomacy:hostile'
                    ],
                    ...f.kind === 'family' ? [
                        [
                            '议联姻',
                            'npc_marriage'
                        ]
                    ] : [],
                    [
                        '返回',
                        'close'
                    ]
                ])
            },
            ...p.diplomacyFeedback?.targetId === f.id ? [
                {
                    title: '最近外交结果',
                    body: p.diplomacyFeedback.text
                }
            ] : [],
            ...f.notableIds.map((id)=>findCharacter(s, id)).filter(Boolean).slice(-8).map((c)=>({
                    title: c.name,
                    body: `${c.lifeStatus === 'dead' ? '已故 · 享年 ' + c.deathAge : c.age + ' 岁'} · ${realmLabel(c)}\n${rootLabel(c)}`,
                    portraitId: c.id,
                    actions: [
                        {
                            title: '生平',
                            id: 'select:' + c.id
                        }
                    ]
                })),
            {
                title: '势力记事',
                body: f.history.slice(-12).reverse().map((x)=>x.year + '年 ' + x.text).join('\n')
            }
        ];
    }
    if (u.modal === 'location') {
        const l = D.exploration.find((x)=>x.id === u.location);
        if (!l) return [
            {
                title: '地点不存在',
                actions: [
                    back
                ]
            }
        ];
        const access = w.expeditionAccess(l.id);
        return [
            {
                title: l.name,
                body: '当前状态：' + (access.ok ? '已开放' : '尚未开放') + '\n' + access.reason + '\n解锁条件：' + l.unlockRank + '星家族' + (l.periodYears ? '；每' + l.periodYears + '年开放一年，需秘境开启消息' : '') + '\n危险等级：' + l.danger + '\n队伍要求：三至五名在族成年人物，濒危者不能出发。\n' + (a.expedition ? '已有远征队在外，可查看进程。' : '当前无队伍在外。'),
                actions: [
                    ...access.ok && !a.expedition ? [
                        {
                            title: '选择远征队',
                            id: 'prepare_expedition'
                        }
                    ] : [],
                    ...a.expedition ? [
                        {
                            title: '当前远征',
                            id: 'panel:expedition'
                        }
                    ] : [],
                    ...a.lastExpeditionSettlement ? [
                        {
                            title: '上次远征结算',
                            id: 'panel:expedition'
                        }
                    ] : [],
                    back
                ]
            }
        ];
    }
    if (u.modal === 'expedition' || u.modal === 'expedition_setup') {
        const x = a.expedition;
        if (x) return [
            {
                title: D.exploration.find((v)=>v.id === x.location).name + ' · 远征',
                body: `节点 ${x.currentNode}/${x.plannedNodes + x.extraNodes}（计划${x.plannedNodes}、隐藏${x.extraNodes}） · ${x.scouted ? '已探查风险' : '尚未探查'}\n队员 ${x.members.map((id)=>findCharacter(s, id)?.name).join('、')}\n${x.log.join('\n')}`,
                actions: actions([
                    [
                        '先行探查',
                        'node:scout'
                    ],
                    [
                        '尝试破阵',
                        'node:break'
                    ],
                    [
                        '采集灵药',
                        'node:gather'
                    ],
                    [
                        '追猎妖兽',
                        'node:hunt'
                    ],
                    [
                        '避开风险',
                        'node:avoid'
                    ],
                    [
                        '撤回家族',
                        'node:retreat'
                    ],
                    [
                        '返回',
                        'close'
                    ]
                ])
            }
        ];
        const z = a.lastExpeditionSettlement;
        if (z && u.modal !== 'expedition_setup') return [
            {
                title: '远征结算 · ' + D.exploration.find((l)=>l.id === z.location)?.name,
                body: calendar(z.startedYear, z.startedMonth) + ' → ' + calendar(z.endedYear, z.endedMonth) + '\n队员 ' + z.members.map((id)=>findCharacter(s, id)?.name).join('、') + '\n完成节点 ' + z.completed + '/' + (z.planned + z.extra) + '（计划' + z.planned + '、隐藏' + z.extra + '）\n' + z.reason + '\n获得灵石' + z.rewards.stones + ' · 药材' + z.rewards.herbs + ' · 灵材' + z.rewards.materials + '\n受伤 ' + (z.injuredIds.map((id)=>findCharacter(s, id)?.name + '（轻伤，休养6个月）').join('、') || '无') + ' · 无资源损失\n发现 ' + (z.findings.join('、') || '无新增线索') + '\n后续：受伤者休养；奖励已入库；相关待决保留于大事页。\n' + z.log.join('\n'),
                actions: [
                    {
                        title: '再次查看地点',
                        id: 'explore:' + z.location
                    },
                    back
                ]
            }
        ];
        return [
            {
                title: '选远征队',
                body: `地点 ${D.exploration.find((l)=>l.id === u.location)?.name || '未选择'}\n选择三至五人，已选 ${u.team.length}。境界差距过大会失败。\n濒危者不能加入队伍。`,
                actions: [
                    {
                        title: '出发',
                        id: 'depart'
                    },
                    back
                ]
            },
            ...w.residents().filter((c)=>c.age >= 18 && c.health !== 'critical').sort((a, b)=>REALMS.indexOf(b.realm) - REALMS.indexOf(a.realm)).slice(0, 18).map((c)=>({
                    title: (u.team.includes(c.id) ? '✓ ' : '') + c.name,
                    body: realmLabel(c) + ' · ' + label(c.health),
                    portraitId: c.id,
                    actions: [
                        {
                            title: '选择/取消',
                            id: 'team:' + c.id
                        }
                    ]
                }))
        ];
    }
    if (u.modal?.startsWith('decision:')) {
        const d = s.pendingDecisions.find((x)=>x.id === u.modal.slice(9));
        if (d?.type === 'rank') return [
            {
                title: '家族晋阶',
                tone: 'rank',
                body: `已达成境界、人口、声望、资产、灵脉与核心建筑条件。\n确认晋升 ${d.payload.target} 星，山门将随之改变。`,
                actions: [
                    {
                        title: '确认晋阶',
                        id: `resolve:${d.id}:accept`
                    },
                    back
                ]
            }
        ];
        if (d?.type === 'event') {
            const t = w.events.templates.find((x)=>x.id === d.payload.eventId);
            return [
                {
                    title: t.title,
                    body: `${findCharacter(s, d.characterId)?.name || s.playerFamily.name}\n${t.description || '请决定此事的处理方式。'}`,
                    tone: 'L' + t.level,
                    portraitId: d.characterId,
                    actions: [
                        ...t.choices.map((x)=>({
                                title: x.text,
                                id: `resolve:${d.id}:${x.id}`
                            })),
                        back
                    ]
                }
            ];
        }
    }
    if (u.modal) return null;
    const pending = ()=>s.pendingDecisions.slice().sort((x, y)=>(y.payload.level || 3) - (x.payload.level || 3)).map((d)=>({
                title: d.type === 'event' ? w.events.templates.find((t)=>t.id === d.payload.eventId)?.title || '议事' : d.type === 'rank' ? '家族晋阶' : findCharacter(s, d.characterId)?.name || '议事',
                body: d.type === 'major_breakthrough' ? '突破' + label(d.payload.target) : d.type === 'marriage' ? '婚姻 / ' + (w.faction(d.payload.npcId)?.name || '族中婚配') : d.type === 'rank' ? '达成晋阶条件' : '外交 / 宗门 / 探索与世界',
                actions: [
                    {
                        title: '处理',
                        id: 'decision:' + d.id
                    }
                ]
            }));
    if (u.tab === '家族') {
        const people = w.residents(), family = allCharacters(s).filter((c)=>playerMember(s, c));
        return [
            {
                title: s.playerFamily.name + ' · ' + '★'.repeat(s.playerFamily.rank),
                image: 'family_bg_rank' + s.playerFamily.rank,
                body: `族长 ${findCharacter(s, s.playerFamily.leaderId)?.name || '空缺'} · 仙历 ${s.meta.gameYear} 年\n在族 ${people.length}/${w.capacity()} · 族谱人物 ${family.length} · 支系估算 ${a.branches.reduce((n, b)=>n + b.population, 0)}\n筑基 ${people.filter((c)=>c.realm === 'foundation').length} · 金丹 ${people.filter((c)=>c.realm === 'core').length} · 元婴 ${people.filter((c)=>c.realm === 'nascent').length}\n灵石 ${Math.floor(s.playerFamily.spiritStones)} · 声望 ${a.reputation} · ${spiritVein(s.playerFamily.spiritVeinTier)}\n药材 ${a.herbs} · 灵材 ${a.materials}${a.poor ? ' · 拮据（修炼略降）' : ''}`,
                actions: actions([
                    [
                        '建筑',
                        'panel:buildings'
                    ],
                    [
                        '家策',
                        'panel:policies'
                    ],
                    [
                        '职位',
                        'panel:positions'
                    ],
                    [
                        '祖祠',
                        'panel:ancestral'
                    ],
                    [
                        '保存',
                        'save'
                    ],
                    [
                        '消息',
                        'messages'
                    ],
                    ...p.development ? [
                        [
                            'Debug',
                            'debug'
                        ]
                    ] : []
                ])
            },
            {
                title: '年度经营',
                body: `收入 ${Math.round(a.annual.income)} · 维护 ${Math.round(a.annual.upkeep)}\n资源每年自动结算。`
            },
            {
                title: '待决 · ' + s.pendingDecisions.length,
                actions: [
                    {
                        title: '查看全部',
                        id: 'tab:大事'
                    }
                ]
            },
            ...pending().slice(0, 3),
            {
                title: '近日族闻',
                body: s.history.slice(-8).reverse().map((x)=>x.year + '年 ' + p.translate(x.text)).join('\n')
            }
        ];
    }
    if (u.tab === '族人') {
        const filters = [
            '全部',
            '在世',
            '已故',
            '关注',
            '高境界',
            '年轻',
            '未婚',
            '特殊血脉',
            '外迁/宗门'
        ];
        let list = allCharacters(s).filter((c)=>playerMember(s, c) || !!c.sectId).filter((c)=>!u.search || c.name.includes(u.search)).filter((c)=>u.filter === '全部' || (u.filter === '在世' ? c.lifeStatus === 'alive' : u.filter === '已故' ? c.lifeStatus === 'dead' : u.filter === '关注' ? c.isWatched : u.filter === '高境界' ? REALMS.indexOf(c.realm) >= 2 : u.filter === '年轻' ? c.age < 30 : u.filter === '未婚' ? e.marriage.eligible(c) : u.filter === '特殊血脉' ? c.bloodlines.length > 0 : !c.isResident));
        list.sort((a, b)=>Number(b.isWatched) - Number(a.isWatched) || a.generation - b.generation || a.id.localeCompare(b.id));
        const max = Math.max(0, Math.ceil(list.length / 12) - 1);
        u.page = Math.min(max, u.page);
        return [
            {
                title: '族人 · ' + list.length + ' 人',
                body: '搜索姓名可进一步筛选。',
                search: true,
                actions: filters.map((x)=>({
                        title: x,
                        id: 'filter:' + x
                    }))
            },
            ...list.slice(u.page * 12, u.page * 12 + 12).map((c)=>({
                    title: c.name + (c.isWatched ? ' · 关注' : ''),
                    body: `第${c.generation}代 · ${c.lifeStatus === 'dead' ? '享年 ' + c.deathAge : c.age}岁 · ${realmLabel(c)}\n${rootLabel(c)}${c.health !== 'healthy' ? ' · ' + label(c.health) : ''}${!c.isResident ? ' · ' + (c.sectId ? '宗门' : '外迁') : ''}`,
                    portraitId: c.id,
                    tone: c.lifeStatus === 'dead' ? 'muted' : '',
                    actions: [
                        {
                            title: '生平',
                            id: 'select:' + c.id
                        },
                        {
                            title: '族谱',
                            id: 'tree:' + c.id
                        }
                    ]
                })),
            {
                title: `第${u.page + 1}/${max + 1}页`,
                actions: actions([
                    [
                        '上一页',
                        'prev'
                    ],
                    [
                        '下一页',
                        'next'
                    ]
                ])
            }
        ];
    }
    if (u.tab === '族谱') {
        const c = p.c || findCharacter(s, s.playerFamily.ancestorId);
        const tree = treeLayout(s, c.id, e.gene.neighborhood(c.id));
        return [
            {
                title: c.name + ' · 局部族谱',
                body: '父母在上，道侣同层，子女在下。点人物换中心；横向、纵向拖动可阅读。虚线表示外迁；灰色表示已故。' + (tree.folded ? '另有' + tree.folded + '人折叠' : ''),
                tree: true,
                treeView: tree,
                actions: [
                    {
                        title: '中心人物生平',
                        id: 'select:' + c.id
                    }
                ]
            },
            ...a.branches.map((b)=>({
                    title: '折叠支系 · ' + b.name,
                    body: '估算人口 ' + b.population + ' · ' + relationLabel(b.relation),
                    tone: 'branch',
                    actions: [
                        {
                            title: '始祖生平',
                            id: 'select:' + b.founderId
                        }
                    ]
                }))
        ];
    }
    if (u.tab === '世界') {
        return [
            {
                title: '云州 · 山河图',
                image: 'world_map_yunzhou',
                map: true,
                body: '十家仙族、两座宗门与天河坊市。点选势力查看人物及外交；远征地点的开放条件列于下方。',
                actions: [
                    {
                        title: s.playerFamily.name,
                        id: 'tab:家族'
                    },
                    ...a.world.map((f)=>({
                            title: f.name,
                            id: 'faction:' + f.id
                        })),
                    {
                        title: D.npcWorld.marketName,
                        id: 'panel:market'
                    },
                    ...a.expedition ? [
                        {
                            title: '当前远征',
                            id: 'panel:expedition'
                        }
                    ] : a.lastExpeditionSettlement ? [
                        {
                            title: '上次远征结算',
                            id: 'panel:expedition'
                        }
                    ] : []
                ]
            },
            ...D.exploration.map((l)=>{
                const access = w.expeditionAccess(l.id);
                return {
                    title: l.name + ' · ' + (access.ok ? '开放' : '未开放'),
                    body: access.reason + '\n解锁 ' + l.unlockRank + ' 星 · 危险等级 ' + l.danger + (l.periodYears ? ' · 每' + l.periodYears + '年开放一年' : ''),
                    actions: [
                        {
                            title: '地点详情',
                            id: 'explore:' + l.id
                        }
                    ]
                };
            }),
            {
                title: '天下修行',
                body: `开局零元婴，第一元婴必须从实际修炼突破产生。\n${a.firstNascent ? `${a.firstNascent.year}年 ${a.firstNascent.name}成为第一元婴` : '尚无元婴现世'}\n化神与炼虚已开放；元婴修士可开辟玄天界。`
            }
        ];
    }
    if (u.tab === '大事') {
        const hist = u.historyTab === '世界史' ? a.worldHistory : s.history;
        return [
            {
                title: '岁月与抉择',
                actions: [
                    '待决',
                    '家族史',
                    '世界史'
                ].map((x)=>({
                        title: x,
                        id: 'history:' + x
                    }))
            },
            ...u.historyTab === '待决' ? [
                {
                    title: '待决中心 · ' + s.pendingDecisions.length,
                    body: '突破、婚姻、外交、宗门、探索/世界统一处理。'
                },
                ...pending().slice(u.page * 12, u.page * 12 + 12),
                {
                    title: '待决分页',
                    actions: actions([
                        [
                            '上一页',
                            'prev'
                        ],
                        [
                            '下一页',
                            'next'
                        ]
                    ])
                }
            ] : hist.slice(-24 - u.page * 24, hist.length - u.page * 24 || undefined).reverse().map((x)=>({
                    title: x.year + ' 年 · ' + p.translate(x.text),
                    tone: x.type === 'WORLD_FIRST_NASCENT_SOUL' ? 'L5' : x.type.includes('rank') ? 'L4' : '',
                    actions: x.characterId ? [
                        {
                            title: '人物生平',
                            id: 'select:' + x.characterId
                        }
                    ] : []
                }))
        ];
    }
    return null;
}
function relationLabel(n) {
    return relation(n);
}

exports.alphaAction=alphaAction;
exports.alphaRows=alphaRows;
exports.relationLabel=relationLabel;
},
'ui/ArtLoader':function(require,exports){
const { AssetCache }=require('./UIRefreshGate');
class ArtLoader {
    cache;
    failures = [];
    constructor(load){
        this.cache = new AssetCache(async (path)=>{
            for (const [suffix, kind] of [
                [
                    '/spriteFrame',
                    'frame'
                ],
                [
                    '',
                    'frame'
                ],
                [
                    '/texture',
                    'texture'
                ],
                [
                    '',
                    'texture'
                ],
                [
                    '',
                    'image'
                ]
            ]){
                try {
                    const asset = await load(path + suffix, kind);
                    if (asset) return asset;
                } catch  {}
            }
            if (!this.failures.includes(path)) this.failures.push(path);
            return null;
        });
    }
    get(path) {
        return this.cache.get(path);
    }
    clear() {
        this.cache.clear();
        this.failures = [];
    }
}

exports.ArtLoader=ArtLoader;
},
'ui/AudioManager':function(require,exports){
const { resourcePath }=require('./ResourceRegistry');
class AudioManager {
    port;
    bgm = false;
    sfx = false;
    volume = .5;
    status = '音乐已关闭';
    voices = [];
    desired = 'bgm_home';
    serial = 0;
    loading = '';
    failed = '';
    unlocked = false;
    suspended = false;
    constructor(port = {
        async play (path, loop, volume) {
            if (typeof Audio === 'undefined') return null;
            const audio = new Audio(path + (path.startsWith('audio/v3/') ? '.wav' : loop ? '.mp3' : '.wav'));
            audio.loop = loop;
            audio.volume = volume;
            audio.preload = 'auto';
            try {
                await audio.play();
                if (!loop) audio.onended = ()=>{
                    audio.src = '';
                };
                return {
                    stop () {
                        audio.pause();
                        audio.src = '';
                    },
                    setVolume (n) {
                        audio.volume = Math.max(0, Math.min(1, n));
                    }
                };
            } catch  {
                audio.pause();
                audio.src = '';
                return null;
            }
        }
    }){
        this.port = port;
    }
    get contextKey() {
        return this.desired;
    }
    activate() {
        this.unlocked = true;
        this.failed = '';
    }
    async playSFX(key) {
        if (!this.sfx || this.suspended) return;
        try {
            await this.port.play(resourcePath(key), false, this.volume);
        } catch  {}
    }
    async playBGM(key = this.desired) {
        if (key !== this.desired) {
            this.serial++;
            this.loading = '';
            this.failed = '';
        }
        this.desired = key;
        if (!this.bgm) {
            if (this.voices.length || this.loading) this.stop();
            this.status = '音乐已关闭';
            return;
        }
        if (this.suspended) return;
        if (!this.unlocked) {
            this.status = '点击任意操作后播放音乐';
            return;
        }
        if (this.voices.some((v)=>v.key === key && v.target === 1) || this.loading === key || this.failed === key) return;
        const serial = ++this.serial;
        this.loading = key;
        this.status = '音乐载入中';
        try {
            const handle = await this.port.play(resourcePath(key), true, 0);
            if (serial !== this.serial || !this.bgm || this.suspended) {
                handle?.stop();
                return;
            }
            this.loading = '';
            if (!handle) {
                this.failed = key;
                this.status = '音乐未能播放，点击 BGM 开关重试';
                return;
            }
            if (this.voices.length >= 2) {
                const quiet = this.voices.reduce((a, b)=>a.gain <= b.gain ? a : b);
                quiet.handle.stop();
                this.voices = this.voices.filter((v)=>v !== quiet);
            }
            this.voices.forEach((v)=>v.target = 0);
            this.voices.push({
                key,
                handle,
                gain: 0,
                target: 1
            });
            this.status = ({
                bgm_home: '山门 · 松风入弦',
                bgm_world: '山河 · 云水行舟',
                bgm_explore: '秘境 · 幽谷问道'
            })[key] || '音乐播放中';
        } catch  {
            if (serial === this.serial) {
                this.loading = '';
                this.failed = key;
                this.status = '音乐未能播放，点击 BGM 开关重试';
            }
        }
    }
    update(dt) {
        if (!this.bgm && this.voices.length) {
            this.stop();
            this.status = '音乐已关闭';
            return;
        }
        const step = Math.max(0, Math.min(dt, .25)) / .65;
        for (const v of this.voices){
            v.gain = v.target ? Math.min(1, v.gain + step) : Math.max(0, v.gain - step);
            v.handle.setVolume(this.volume * v.gain);
        }
        this.voices = this.voices.filter((v)=>{
            if (v.target === 0 && v.gain === 0) {
                v.handle.stop();
                return false;
            }
            return true;
        });
    }
    suspend() {
        this.suspended = true;
        this.stop();
        this.status = this.bgm ? '音乐已暂停' : '音乐已关闭';
    }
    resume() {
        this.suspended = false;
        void this.playBGM();
    }
    stop() {
        this.serial++;
        this.loading = '';
        this.failed = '';
        this.voices.forEach((v)=>v.handle.stop());
        this.voices = [];
    }
    setVolume(n) {
        this.volume = Number.isFinite(n) ? Math.max(0, Math.min(1, n)) : .5;
        this.voices.forEach((v)=>v.handle.setVolume(this.volume * v.gain));
    }
}

exports.AudioManager=AudioManager;
},
'ui/Labels':function(require,exports){
const { Character }=require('../core/GameState');
const LABELS = {
    mortal: '凡人',
    qi: '练气',
    foundation: '筑基',
    core: '金丹',
    nascent: '元婴', spirit: '化神', void: '炼虚',
    none: '无灵根',
    five: '五灵根',
    four: '四灵根',
    triple: '三灵根',
    dual: '双灵根',
    heavenly: '天灵根',
    mutant: '变异单灵根',
    metal: '金',
    wood: '木',
    water: '水',
    fire: '火',
    earth: '土',
    thunder: '雷',
    ice: '冰',
    wind: '风',
    healthy: '健康',
    light: '轻伤',
    severe: '重伤',
    critical: '濒危',
    calm: '平静',
    excited: '振奋',
    confused: '迷惘',
    grieving: '悲恸',
    obsessed: '执念',
    demon: '心魔',
    clear: '澄明',
    cautious: '谨慎',
    affectionate: '重情',
    diligent: '勤勉',
    bold: '果敢',
    quiet: '沉静',
    qingluan: '青鸾',
    xuantu: '玄土'
};
const label = (s)=>LABELS[s] || s;
const realmLabel = (c)=>label(c.realm) + (c.realm === 'qi' ? c.realmStage + '层' : c.realm === 'mortal' ? '' : [
        '初期',
        '中期',
        '后期',
        '圆满'
    ][c.realmStage - 1]);
const rootLabel = (c)=>c.rootTested ? label(c.rootType) + ' ' + c.rootElements.map(label).join('·') : '待六岁测灵';

exports.LABELS=LABELS;
exports.label=label;
exports.realmLabel=realmLabel;
exports.rootLabel=rootLabel;
},
'ui/PresentationQueue':function(require,exports){
class PresentationQueue {
    items = [];
    records = [];
    seen = new Set();
    get active() {
        return this.items[0];
    }
    get paused() {
        return !!this.active;
    }
    push(input) {
        if (this.seen.has(input.key)) return;
        this.seen.add(input.key);
        if (this.seen.size > 4096) this.seen.delete(this.seen.values().next().value);
        const x = {
            ...input,
            elapsed: 0,
            count: 1
        };
        this.records.push(x);
        if (this.records.length > 120) this.records.shift();
        const merged = input.kind === 'toast' && this.items.find((x)=>x.kind === 'toast' && x.title === input.title && x.year === input.year && x.month === input.month);
        if (merged) {
            merged.count++;
            merged.body = input.body + '（本月共' + merged.count + '则）';
            return;
        }
        if (input.kind === 'world' || input.kind === 'important') {
            const index = this.items.findIndex((i)=>i.kind !== 'world' && (input.kind === 'world' || i.kind !== 'important'));
            this.items.splice(index < 0 ? this.items.length : index, 0, x);
        } else this.items.push(x);
        if (this.items.length > 120) {
            const i = this.items.findIndex((i)=>i.kind === 'toast' || i.kind === 'card');
            if (i >= 0) this.items.splice(i, 1);
        }
    }
    update(dt) {
        const x = this.active;
        if (!x || this.paused) return false;
        x.elapsed += Math.max(0, dt);
        if (x.elapsed >= (x.kind === 'toast' ? 3 : Math.min(20, Math.max(8, x.body.length / 12)))) {
            this.dismiss();
            return true;
        }
        return false;
    }
    dismiss() {
        this.items.shift();
    }
    dismissAll() {
        this.items = [];
    }
    clear() {
        this.items = [];
        this.records = [];
        this.seen.clear();
    }
}

exports.PresentationQueue=PresentationQueue;
},
'ui/Presenter':function(require,exports){
const { PresentationQueue }=require('./PresentationQueue');
const { calendar, bloodline, uiText, ACTION_LABELS }=require('./UIStringMapper');
const { TreeView }=require('./TreeLayout');
const { alphaRows, alphaAction }=require('./AlphaPanels');
const { AudioManager }=require('./AudioManager');
const { Engine }=require('../core/Engine');
const { allCharacters, findCharacter, Character }=require('../core/GameState');
const { SaveSystem }=require('../systems/SaveSystem');
const { CONFIG }=require('../core/Configs');
const { label, realmLabel, rootLabel }=require('./Labels');
const { UIStateStore }=require('./UIStateStore');
const { playerMember }=require('../core/AlphaState');
class Presenter {
    saves;
    audio = new AudioManager();
    ui = new UIStateStore();
    engine = null;
    blocked = false;
    offline = null;
    seedSerial = 0;
    presentation = new PresentationQueue();
    development = true;
    detach;
    pendingSurname = '肖';
    dirtySave = false;
    actionSerial = 0;
    currentAction = '';
    diplomacyFeedback = null;
    clock;
    constructor(saves, now = Date.now()){
        this.saves = saves;
        this.clock = ()=>Date.now();
        const prefs = saves.preferences();
        this.audio.bgm = prefs.bgm ?? false;
        this.audio.sfx = prefs.sfx ?? false;
        this.audio.setVolume(prefs.volume ?? .5);
        const state = saves.load();
        this.blocked = !state && saves.hasData();
        this.ui.message = saves.lastWarning;
    }
    get isPlaying() {
        return !!this.engine?.state.meta.started;
    }
    get pausedByPresentation() {
        return this.presentation.paused;
    }
    attach() {
        this.detach?.();
        const e = this.engine;
        if (!e) return;
        this.detach = e.bus.subscribe((event)=>{
            if (!e.state.meta.started) return;
            const c = findCharacter(e.state, event.characterId), w = e.world;
            if (event.type === 'birth' && c && c.age > 0) return;
            if (c && (!c.isResident || !c.isFamily) && ['root_test','root_rare','minor_success','minor_failure'].includes(event.type)) return;
            if (c && c.factionId && c.factionId !== e.state.playerFamily.id && !playerMember(e.state, c) && event.type !== 'WORLD_FIRST_NASCENT_SOUL') return;
            if (['birth','death','marriage','major_success','root_rare','rank','exploration'].includes(event.type)) this.dirtySave = true;
            const watched = !!c && (c.isWatched || c.id === e.state.playerFamily.leaderId);
            if (['minor_success','minor_failure','root_test','arrival'].includes(event.type) && c && !watched) return;
            if (event.type === 'birth' && c && !watched && !findCharacter(e.state,c.fatherId)?.isWatched && !findCharacter(e.state,c.motherId)?.isWatched) return;
            if (event.type === 'marriage' && c && !watched && !this.currentAction.startsWith('resolve:') && !c.spouseIds.some(id=>findCharacter(e.state,id)?.isWatched)) return;
            if (event.type === 'death' && c && !watched && !['core','nascent','spirit','void'].includes(c.realm)) return;
            if (event.type === 'diplomacy' && this.currentAction.startsWith('diplomacy:')) return;
            if (event.type === 'WORLD_FIRST_NASCENT_SOUL' || event.type === 'major_success' && w.a.worldModal) {
                this.dirtySave = true;
                return;
            }
            const template = w.events.templates.find((x)=>'event:' + x.id === event.type);
            const importantDeath = event.type === 'death' && !!c && (c.isWatched || c.id === e.state.playerFamily.leaderId || ['core','nascent','spirit','void'].includes(c.realm));
            const important = importantDeath || [
                'major_success',
                'root_rare',
                'leader',
                'rank',
                'sect'
            ].includes(event.type) || (template?.level || 0) >= 4;
            const card = [
                'birth',
                'death',
                'marriage',
                'root_test',
                'diplomacy',
                'exploration',
                'exploration_node',
                'minor_success',
                'minor_failure',
                'major_failure',
                'serious_injury',
                'arrival',
                'position',
                'policy',
                'building',
                'choice',
                'deferred'
            ].includes(event.type) || (template?.level || 0) >= 2;
            if (!important && !card && !template) return;
            if ([
                'major_success',
                'root_rare',
                'birth',
                'marriage',
                'death',
                'rank',
                'exploration'
            ].includes(event.type)) this.dirtySave = true;
            let body = this.translate(event.text);
            if (importantDeath && c) body += '\n' + c.name + ' · 享年' + c.deathAge + '岁 · ' + realmLabel(c) + '\n道侣 ' + c.spouseIds.map((id)=>findCharacter(e.state, id)?.name).filter(Boolean).join('、') + '\n子女 ' + c.childrenIds.map((id)=>findCharacter(e.state, id)?.name).filter(Boolean).join('、') + '\n' + c.biography.slice(-5).map((x)=>calendar(x.year, x.month) + ' ' + this.translate(x.text)).join('\n');
            this.presentation.push({
                key: [
                    event.year,
                    event.month,
                    event.type,
                    event.characterId || '',
                    event.text
                ].join('|'),
                year: event.year,
                month: event.month,
                title: template?.title || ({
                    death: '归入家族史',
                    root_rare: '异禀测灵',
                    root_test: '五行测灵',
                    major_success: '境界突破',
                    minor_success: '修为进境',
                    minor_failure: '破境结果',
                    major_failure: '突破结果',
                    serious_injury: '伤势消息',
                    birth: '新生入谱',
                    marriage: '道侣结缘',
                    rank: '家族晋星',
                    diplomacy: '外交消息',
                    exploration: '远征归来',
                    exploration_node: '远征发现',
                    position: '职位任命',
                    building: '山门营建',
                    choice: '议事结果',
                    policy: '家策调整',
                    deferred: '突破暂缓',
                    arrival: '新客入族'
                })[event.type] || '族中消息',
                body,
                kind: event.type === 'rank' && e.state.playerFamily.rank === 4 ? 'world' : important ? 'important' : card ? 'card' : 'toast',
                effect: event.type === 'death' ? 'death' : event.type.startsWith('root_') ? 'root' : event.type === 'major_success' ? c?.realm : undefined,
                characterId: event.characterId
            });
            if (event.type === 'exploration' && w.a.lastExpeditionSettlement) this.ui.modal = 'expedition';
        });
    }
    updatePresentation(dt) {
        return this.ui.modal || this.engine?.world.a.worldModal ? false : this.presentation.update(dt);
    }
    feedback(title, body, characterId) {
        const s = this.engine?.state;
        if (!s) return;
        this.presentation.push({
            key: 'action:' + ++this.actionSerial,
            year: s.meta.gameYear,
            month: s.meta.gameMonth,
            title,
            body: this.translate(body),
            characterId,
            kind: 'card'
        });
    }
    tick() {
        if (!this.engine || !this.isPlaying || this.pausedByPresentation) return;
        this.engine.time.tick();
        if (this.dirtySave) {
            this.engine.save();
            this.dirtySave = false;
        }
    }
    continueGame(now = this.clock()) {
        const state = this.saves.load();
        if (!state) {
            this.ui.message = this.saves.lastWarning || '没有有效存档';
            return false;
        }
        this.detach?.();
        this.presentation.clear();
        this.ui = new UIStateStore();
        this.engine = new Engine(state, this.saves);
        this.attach();
        this.blocked = false;
        this.ui.selectedId = state.playerFamily.leaderId || state.playerFamily.ancestorId;
        if (state.meta.started) {
            const elapsedMs = Math.max(0, now - state.meta.lastExitAt);
            this.offline = {
                ...this.engine.time.offline(now),
                elapsedMs
            };
            this.engine.save(now);
            if (elapsedMs > 0) this.ui.modal = 'offline';
        }
        return true;
    }
    onHide(now = this.clock()) {
        this.audio.suspend();
        if (this.isPlaying) this.saveGame(now);
    }
    onShow(now = this.clock()) {
        this.audio.resume();
        if (!this.isPlaying) return;
        const elapsedMs = Math.max(0, now - this.engine.state.meta.lastExitAt);
        this.offline = {
            ...this.engine.time.offline(now),
            elapsedMs
        };
        this.engine.save(now);
        if (elapsedMs > 0) this.ui.modal = 'offline';
    }
    saveGame(now = this.clock()) {
        if (!this.engine) {
            const state = this.saves.load();
            if (!state) {
                this.ui.message = '没有有效存档';
                return false;
            }
            const ok = this.saves.save(state, now, false);
            this.ui.message = ok ? '已保存 · ' + calendar(state.meta.gameYear, state.meta.gameMonth) + ' · ' + new Date(now).toLocaleTimeString('zh-CN', {
                hour: '2-digit',
                minute: '2-digit'
            }) : this.saves.lastWarning;
            return ok;
        }
        if (!this.engine.state.meta.started) {
            this.ui.message = '请先确认开局';
            return false;
        }
        this.engine.save(now);
        if (this.saves.lastWarning) {
            this.ui.message = this.saves.lastWarning;
            return false;
        }
        const s = this.engine.state, time = new Date(now).toLocaleTimeString('zh-CN', {
            hour: '2-digit',
            minute: '2-digit'
        });
        this.ui.message = '已保存 · ' + calendar(s.meta.gameYear, s.meta.gameMonth) + ' · ' + time;
        this.presentation.push({
            key: 'saved:' + now,
            year: s.meta.gameYear,
            month: s.meta.gameMonth,
            title: '已保存',
            body: this.ui.message,
            kind: 'toast'
        });
        return true;
    }
    returnTitle(save = true) {
        if (save && this.isPlaying && !this.saveGame()) return false;
        const message = this.ui.message;
        this.detach?.();
        this.detach = undefined;
        this.presentation.clear();
        this.engine = null;
        this.offline = null;
        this.dirtySave = false;
        this.diplomacyFeedback = null;
        this.ui = new UIStateStore();
        this.ui.message = message;
        this.audio.stop();
        return true;
    }
    exportJSON() {
        const s = this.engine?.state || this.saves.readSlot('main') || this.saves.readSlot('backup');
        return s ? this.saves.export(s) : null;
    }
    summary(slot) {
        const s = this.saves.readSlot(slot);
        return s ? `${s.playerFamily.name} · ${'★'.repeat(s.playerFamily.rank)}\n${calendar(s.meta.gameYear, s.meta.gameMonth)} · 在族 ${Object.values(s.characters.alive).filter((c)=>c.isResident && (!c.factionId || c.factionId === s.playerFamily.id)).length}人\n上次保存 ${new Date(s.meta.updatedAt).toLocaleString('zh-CN')}\n存档版本 ${s.meta.saveVersion}` : '无有效存档';
    }
    flowRows() {
        const back = {
            title: '返回',
            id: 'close'
        };
        if (this.ui.modal === 'notice_detail') {
            const rows = this.presentationRows();
            return rows.length ? rows.map((r)=>({
                    ...r,
                    fullscreen: false,
                    actions: [
                        {
                            title: '已阅，继续',
                            id: 'notice_close'
                        },
                        {
                            title: '消息记录',
                            id: 'messages'
                        }
                    ]
                })) : [
                {
                    title: '无待阅消息',
                    actions: [
                        back
                    ]
                }
            ];
        }
        if (this.ui.modal === 'messages') return [
            {
                title: '即时消息记录',
                body: '当前待阅 ' + this.presentation.items.length + ' 则；保留本次游戏最近 120 则。近日族闻与人物生平仍可查阅。',
                actions: [
                    {
                        title: '全部标为已阅',
                        id: 'notice_clear'
                    },
                    back
                ]
            },
            ...this.presentation.records.slice().reverse().map((x)=>({
                    title: calendar(x.year, x.month) + ' · ' + x.title,
                    body: x.body,
                    portraitId: x.characterId,
                    actions: x.characterId ? [
                        {
                            title: '人物生平',
                            id: 'select:' + x.characterId
                        }
                    ] : []
                }))
        ];
        if (this.ui.modal === 'new_confirm') return [
            {
                title: '确认新建家族',
                body: this.summary('main') + '\n新建将覆盖当前主存档。未确认前不会删除或推进旧档。备份是滚动单档，长期保留请导出 JSON。',
                actions: [
                    {
                        title: '取消',
                        id: 'close'
                    },
                    {
                        title: '先备份再新建',
                        id: 'new_backup'
                    },
                    {
                        title: '确认覆盖并新建',
                        id: 'new_overwrite'
                    }
                ]
            }
        ];
        if (this.ui.modal === 'reset' || this.ui.modal === 'delete_second') return [
            {
                title: this.ui.modal === 'reset' ? '删除当前进度？' : '再次确认删除',
                body: '将删除主档、备份与当前世界。音量、BGM、音效设置保留。此操作不可撤销。',
                actions: [
                    {
                        title: this.ui.modal === 'reset' ? '继续删除' : '再次确认删除',
                        id: this.ui.modal === 'reset' ? 'reset_confirm' : 'delete_final'
                    },
                    back
                ]
            }
        ];
        if (this.ui.modal === 'save_management') return [
            {
                title: '主存档',
                body: this.summary('main'),
                actions: [
                    {
                        title: this.isPlaying ? '返回游戏' : '继续游戏',
                        id: this.isPlaying ? 'close' : 'continue'
                    },
                    {
                        title: '手动保存',
                        id: 'save'
                    },
                    {
                        title: '导出 JSON',
                        id: 'export_json'
                    },
                    {
                        title: '删除进度',
                        id: 'reset'
                    },
                    back
                ]
            },
            {
                title: '备份存档',
                body: this.summary('backup'),
                actions: this.saves.readSlot('backup') ? [
                    {
                        title: '从备份恢复',
                        id: 'restore_backup'
                    }
                ] : []
            }
        ];
        if (this.ui.modal === 'menu') return [
            {
                title: '全局设置',
                body: '本地保存；退出由平台负责。进入后台自动保存。\n音乐：' + this.audio.status + '\nBGM 与音效独立开关；音量控制已启用的音乐和音效。',
                actions: [
                    ...this.isPlaying ? [
                        {
                            title: '保存游戏',
                            id: 'save'
                        },
                        {
                            title: '保存并返回标题',
                            id: 'save_title'
                        },
                        {
                            title: '即时消息记录',
                            id: 'messages'
                        }
                    ] : this.engine ? [
                        {
                            title: '取消草稿并返回标题',
                            id: 'title'
                        }
                    ] : [],
                    {
                        title: '存档管理',
                        id: 'save_management'
                    },
                    {
                        title: this.audio.bgm ? 'BGM：开' : 'BGM：关',
                        id: 'audio_bgm'
                    },
                    {
                        title: this.audio.sfx ? '音效：开' : '音效：关',
                        id: 'audio_sfx'
                    },
                    {
                        title: '音量低',
                        id: 'volume:0.25'
                    },
                    {
                        title: '音量中',
                        id: 'volume:0.5'
                    },
                    {
                        title: '音量高',
                        id: 'volume:0.75'
                    },
                    ...this.isPlaying && this.development ? [
                        {
                            title: 'Debug',
                            id: 'debug'
                        }
                    ] : [],
                    {
                        title: '删除进度',
                        id: 'reset'
                    },
                    back
                ]
            }
        ];
        if (this.ui.modal === 'offline' && this.offline) {
            const o = this.offline;
            return [
                {
                    title: '岁月流转',
                    body: `离线 ${(o.elapsedMs / 3600000).toFixed(2)} 小时\n实际推进 ${o.years.toFixed(2)} 年（${o.months}个月）\n出生 ${o.births} 人 · 成婚 ${o.marriages} 对\n死亡 ${o.deaths} 人 · 境界晋升 ${o.breakthroughs} 次\n待处理大事 ${o.pending} 件`,
                    actions: [
                        {
                            title: '进入家族',
                            id: 'close'
                        },
                        {
                            title: '返回标题',
                            id: 'save_title'
                        }
                    ]
                }
            ];
        }
        if (!this.engine) {
            const valid = !!(this.saves.readSlot('main') || this.saves.readSlot('backup'));
            return [
                {
                    title: '万世仙族 · Alpha 0.1.3',
                    body: valid ? this.summary(this.saves.readSlot('main') ? 'main' : 'backup') : '一族之念，传承万世。输入姓氏后新建家族。',
                    actions: [
                        ...valid ? [
                            {
                                title: '继续游戏',
                                id: 'continue'
                            }
                        ] : [],
                        {
                            title: '新建家族',
                            id: 'create'
                        },
                        {
                            title: '存档管理',
                            id: 'save_management'
                        },
                        {
                            title: '设置',
                            id: 'menu'
                        }
                    ]
                },
                ...this.blocked ? [
                    {
                        title: '存档无法读取',
                        body: this.saves.lastWarning || '请先导出原存档，或通过存档管理删除损坏进度。'
                    }
                ] : []
            ];
        }
        return null;
    }
    presentationRows() {
        const x = this.presentation.active;
        return x ? [
            {
                title: x.title,
                body: x.body,
                portraitId: x.characterId,
                effect: x.effect,
                tone: x.kind === 'world' ? 'L5' : x.kind === 'important' ? x.effect || 'important' : 'notice',
                fullscreen: x.kind === 'world' || x.kind === 'important',
                actions: [
                    {
                        title: this.presentation.paused ? '已阅，继续' : '收起消息',
                        id: 'notice_close'
                    }
                ]
            }
        ] : [];
    }
    get c() {
        return this.engine ? findCharacter(this.engine.state, this.ui.selectedId) : undefined;
    }
    create(surname) {
        this.detach?.();
        this.presentation.clear();
        this.diplomacyFeedback = null;
        this.ui = new UIStateStore();
        this.engine = Engine.create(surname, 'world-' + Date.now() + '-' + ++this.seedSerial, 0, Date.now());
        this.ui.selectedId = this.engine.state.playerFamily.ancestorId;
        this.attach();
    }
    musicKey() {
        const modal = this.ui.modal;
        if (this.engine && [
            'menu',
            'save_management',
            'messages',
            'notice_detail'
        ].includes(modal || '')) return this.audio.contextKey;
        if ([
            'location',
            'expedition',
            'expedition_setup'
        ].includes(modal || '')) return 'bgm_explore';
        if (modal === 'faction' || modal === 'market' || this.ui.tab === '世界') return 'bgm_world';
        return 'bgm_home';
    }
    syncAudio() {
        void this.audio.playBGM(this.musicKey());
    }
    action(id, input = '肖') {
        this.audio.activate();
        const beforeSettlement = this.engine?.world.a.lastExpeditionSettlement;
        const beforeEngine = this.engine, beforeKey = this.presentation.records.slice(-1)[0]?.key;
        const before = beforeEngine ? {
            stones: beforeEngine.state.playerFamily.spiritStones,
            herbs: beforeEngine.world.a.herbs,
            materials: beforeEngine.world.a.materials,
            pills: beforeEngine.world.a.inventory.foundationPill,
            spiritPills: beforeEngine.state.frontier?.bag.spiritPill || 0,
            voidPills: beforeEngine.state.frontier?.bag.voidPill || 0
        } : null;
        this.currentAction = id;
        try {
            this.ui.message = '';
            const e = this.engine, s = e?.state, c = this.c;
            if (id === 'menu' || id === 'save_management') {
                this.ui.modal = id;
                return;
            }
            if (id === 'continue') {
                this.continueGame();
                return;
            }
            if (id === 'save_title') {
                this.returnTitle();
                return;
            }
            if (id === 'title') {
                this.returnTitle();
                return;
            }
            if (id === 'restore_backup') {
                if (this.engine) {
                    this.ui.message = '请先保存并返回标题，再恢复备份';
                    return;
                }
                if (this.saves.restoreBackup()) {
                    this.blocked = false;
                    this.ui.modal = 'save_management';
                    this.ui.message = '备份已恢复，请点击继续游戏';
                } else this.ui.message = this.saves.lastWarning || '无有效备份';
                return;
            }
            if (id === 'export_json') {
                this.ui.message = 'export_json';
                return;
            }
            if (id === 'notice_close') {
                this.presentation.dismiss();
                if (this.ui.modal === 'notice_detail') this.ui.modal = null;
                return;
            }
            if (id === 'notice_detail' || id === 'messages') {
                this.ui.modal = id;
                return;
            }
            if (id === 'notice_clear') {
                this.presentation.dismissAll();
                this.ui.message = '消息已标为已阅，记录保留';
                return;
            }
            if (id === 'create') {
                this.pendingSurname = input;
                if (this.saves.hasData()) this.ui.modal = 'new_confirm';
                else this.create(input);
                return;
            }
            if (id === 'new_backup' || id === 'new_overwrite') {
                if (this.ui.modal !== 'new_confirm') return;
                if (id === 'new_backup' && !this.saves.backupCurrent()) {
                    this.ui.message = '无法创建有效备份，原存档保留';
                    return;
                }
                this.saves.preserveNextBackup = true;
                this.create(this.pendingSurname);
                return;
            }
            if (id === 'reset') {
                this.ui.modal = 'reset';
                return;
            }
            if (id === 'reset_confirm') {
                if (this.ui.modal === 'reset') this.ui.modal = 'delete_second';
                return;
            }
            if (id === 'delete_final') {
                if (this.ui.modal !== 'delete_second') return;
                this.saves.deleteProgress();
                this.returnTitle(false);
                this.blocked = false;
                this.ui.message = '进度已删除，音频设置保留';
                return;
            }
            if (id === 'close') {
                this.ui.modal = null;
                return;
            }
            if (id === 'audio_bgm' || id === 'audio_sfx' || id.startsWith('volume:')) {
                if (id === 'audio_bgm') {
                    this.audio.bgm = !this.audio.bgm;
                }
                if (id === 'audio_sfx') this.audio.sfx = !this.audio.sfx;
                if (id.startsWith('volume:')) this.audio.setVolume(Number(id.slice(7)));
                if (!this.saves.savePreferences({
                    bgm: this.audio.bgm,
                    sfx: this.audio.sfx,
                    volume: this.audio.volume
                })) this.ui.message = '设置保存失败';
                return;
            }
            if (id === 'save') {
                this.saveGame();
                return;
            }
            if (!e || !s) return;
            if (id === 'debug' && !this.development) {
                this.ui.message = '发布模式不开放调试';
                return;
            }
            void this.audio.playSFX(id.startsWith('tab:') ? 'sfx_page' : 'sfx_click');
            if (alphaAction(this, id, input)) return;
            if (id === 'start') {
                e.notices.notices.splice(0);
                e.saves = this.saves;
                e.start();
                this.ui.selectedId = s.playerFamily.leaderId;
                return;
            }
            if (id === 'reroll') {
                this.engine = e.reroll();
                this.attach();
                this.ui.selectedId = this.engine.state.playerFamily.ancestorId;
                return;
            }
            if (id.startsWith('tab:')) {
                this.ui.tab = id.slice(4);
                this.ui.modal = null;
                e.notices.notices = [];
                this.ui.page = 0;
                return;
            }
            if (id.startsWith('select:')) {
                this.ui.selectedId = id.slice(7);
                this.ui.modal = 'detail';
                return;
            }
            if (id.startsWith('tree:')) {
                this.ui.selectedId = id.slice(5);
                this.ui.tab = '族谱';
                this.ui.page = 0;
                this.ui.modal = null;
                return;
            }
            if (id.startsWith('speed:')) {
                s.settings.timeSpeed = id.slice(6);
                return;
            }
            if (id === 'save') {
                e.save();
                this.ui.message = '已保存家族、族谱与随机状态';
                return;
            }
            if (id === 'debug') {
                this.ui.modal = 'debug';
                return;
            }
            if (id === 'watch' && c) {
                c.isWatched = !c.isWatched;
                return;
            }
            if (id === 'retreat' && c && c.lifeStatus === 'alive') {
                c.isInRetreat = !c.isInRetreat;
                return;
            }
            if (id === 'next') {
                this.ui.page++;
                return;
            }
            if (id === 'prev') {
                this.ui.page = Math.max(0, this.ui.page - 1);
                return;
            }
            if (id.startsWith('filter:')) {
                this.ui.filter = id.slice(7);
                this.ui.page = 0;
                return;
            }
            if (id.startsWith('decision:')) {
                this.ui.modal = id;
                return;
            }
            if (id.startsWith('resolve:')) {
                const [, decision, act, pill] = id.split(':');
                if (!e.resolve(decision, act, pill === 'pill')) this.ui.message = '条件已变化，当前无法执行（资源、灵脉/藏经阁、丹药、伤势或冷却限制）';
                else this.ui.message = act === 'reject' ? '已婉拒婚配提议' : act === 'defer' ? '已暂缓突破一年' : '此事已结算，详见即时消息';
                this.ui.modal = null;
                return;
            }
            if (id === 'years10' || id === 'years100') {
                e.advanceYears(id === 'years10' ? 10 : 100);
                return;
            }
            if (id === 'stones') {
                s.playerFamily.spiritStones += 1000;
                return;
            }
            if (id === 'newborn') {
                this.ui.selectedId = e.debugNewborn().id;
                this.ui.message = '已生成有真实父母关系的新生儿';
                return;
            }
            if (id === 'root6') {
                if (!c || !e.debugTestRoot(c.id)) this.ui.message = '请选择未测灵且不足六岁的在世孩子';
                else this.ui.message = '已推进整族时间并完成六岁测灵';
                return;
            }
            if (id === 'bottleneck') {
                if (!c || !e.debugBottleneck(c.id)) this.ui.message = '请选择八岁以上、已开始修炼的在世人物';
                return;
            }
            if (id.startsWith('force:')) {
                const target = id.slice(6);
                if (c && e.debugBottleneck(c.id, target)) {
                    e.cultivation.attempt(c, false);
                    this.ui.message = '已按真实成功率执行突破尝试';
                } else this.ui.message = '请选择八岁以上、已开始修炼的在世人物';
                return;
            }
            if (id.startsWith('technique:') && c && c.cultivationStarted) {
                e.chars.assignTechnique(c, id.slice(10));
                return;
            }
            if (id === 'auto') {
                s.settings.autoBreakthrough = !s.settings.autoBreakthrough;
                return;
            }
        } catch (err) {
            this.ui.message = String(err);
        } finally{
            this.syncAudio();
            this.currentAction = '';
            if (before && this.engine === beforeEngine && this.isPlaying && /^(upgrade:|policy:|assign:|buy_pill$|sell:|resolve:)/.test(id)) {
                const e = this.engine, a = e.world.a, changes = [
                    [
                        '灵石',
                        before.stones,
                        e.state.playerFamily.spiritStones
                    ],
                    [
                        '药材',
                        before.herbs,
                        a.herbs
                    ],
                    [
                        '灵材',
                        before.materials,
                        a.materials
                    ],
                    [
                        '筑基丹',
                        before.pills,
                        a.inventory.foundationPill
                    ],
                    [
                        '化神丹',
                        before.spiritPills,
                        e.state.frontier?.bag.spiritPill || 0
                    ],
                    [
                        '炼虚丹',
                        before.voidPills,
                        e.state.frontier?.bag.voidPill || 0
                    ]
                ];
                const delta = changes.filter(([, b, n])=>b !== n).map(([name, b, n])=>name + ' ' + Math.floor(b) + ' → ' + Math.floor(n) + '（' + (n - b > 0 ? '+' : '') + Math.round(n - b) + '）').join('\n');
                const latest = this.presentation.records.slice(-1)[0];
                if (latest && latest.key !== beforeKey) {
                    if (delta) latest.body += '\n' + delta;
                } else this.feedback('操作结果', (this.ui.message || ({
                    buy_pill: '已购买筑基丹',
                    sell: '出售已结算',
                    resolve: '议事已处理'
                })[id.split(':')[0]] || '操作已处理') + (delta ? '\n' + delta : ''));
            }
            if (/^(resolve:|node:)/.test(id) && this.engine?.world.a.lastExpeditionSettlement && this.engine.world.a.lastExpeditionSettlement !== beforeSettlement) this.ui.modal = 'expedition';
            if (this.engine && !/^(create$|start$|new_|continue$|save$|save_title$|title$|reset|delete_|restore_backup$|export_json$|notice_|messages$|menu$|save_management$|tab:|select:|tree:|filter:|panel:|faction:|history:|search$|next$|prev$|close$|audio_|volume:)/.test(id)) this.engine.save();
        }
    }
    rows() {
        const e = this.engine, s = e?.state, c = this.c;
        const flow = this.flowRows();
        if (flow) return flow;
        if (s?.meta.started && this.presentation.paused && !this.ui.modal && !s.alpha?.worldModal) return this.presentationRows();
        const alpha = e && s?.meta.started ? alphaRows(this) : null;
        if (alpha) return alpha;
        if (this.blocked) return [
            {
                title: '发现无法读取的存档',
                body: this.ui.message,
                actions: [
                    {
                        title: '清空损坏存档并重建',
                        id: 'reset'
                    }
                ]
            }
        ];
        if (!e || !s) return [
            {
                title: '万世仙族',
                body: '一族之念，传承万世。\n从五至八名族人起步，见证婚育、修行与世代更替。',
                actions: [
                    {
                        title: '生成初始家族',
                        id: 'create'
                    }
                ]
            },
            {
                title: 'Alpha 0.1.1 · 本地单机',
                body: '输入姓氏后生成开局，可重刷三次。所有历史人物都会留在族谱中。'
            }
        ];
        if (this.ui.modal === 'reset') return [
            {
                title: '重置家族？',
                body: '将删除此设备当前主存档、备份及设置。此操作不能撤销。',
                actions: [
                    {
                        title: '确认重置',
                        id: 'reset_confirm'
                    },
                    {
                        title: '返回',
                        id: 'close'
                    }
                ]
            }
        ];
        if (this.ui.modal === 'notices') return [
            {
                title: e.notices.notices.some((x)=>x.type === 'death') ? '归入家族史' : e.notices.notices.some((x)=>x.type === 'root_rare') ? '五行测灵' : '灵气汇聚 · 境界突破',
                tone: e.notices.notices.some((x)=>x.type === 'death') ? 'death' : e.notices.notices.some((x)=>x.type === 'root_rare') ? 'root' : 'breakthrough',
                body: e.notices.notices.slice(-12).reverse().map((x)=>`${x.year}年${x.month}月 ${this.translate(x.text)}`).join('\n'),
                actions: [
                    {
                        title: '已阅，继续',
                        id: 'close'
                    }
                ]
            }
        ];
        if (this.ui.modal === 'offline') {
            const o = this.offline;
            return [
                {
                    title: '岁月流转',
                    body: `离线推进 ${o.years.toFixed(2)} 年（${o.months}个月）\n出生 ${o.births} 人 · 成婚 ${o.marriages} 对\n死亡 ${o.deaths} 人 · 境界晋升 ${o.breakthroughs} 次\n待处理大事 ${o.pending} 件\n重要突破已留待你决定。`,
                    actions: [
                        {
                            title: '回到家族',
                            id: 'close'
                        }
                    ]
                }
            ];
        }
        if (this.ui.modal?.startsWith('decision:')) {
            const id = this.ui.modal.slice(9), d = s.pendingDecisions.find((x)=>x.id === id), p = d ? findCharacter(s, d.characterId) : null;
            if (!d || !p) return [
                {
                    title: '此事已结算',
                    actions: [
                        {
                            title: '返回',
                            id: 'close'
                        }
                    ]
                }
            ];
            if (d.type === 'marriage') {
                const partner = findCharacter(s, d.payload.partnerId);
                return [
                    {
                        title: '婚配议事',
                        body: `${p.name} · ${p.age}岁 · ${realmLabel(p)}\n拟与 ${partner.name} · ${partner.age}岁 · ${realmLabel(partner)} 结为道侣\n${rootLabel(partner)} · 悟性 ${partner.comprehension >= 70 ? '上佳' : '寻常'}\n${d.payload.npcId ? '对方 ' + (e.world.faction(d.payload.npcId)?.name || '邻族') + ' · 婚籍建议 ' + (d.payload.mode === 'out' ? '本家迁出' : d.payload.mode === 'keep' ? '双方原籍' : '对方入族') + '\n' : ''}四代亲缘已核查，无禁婚冲突。`,
                        actions: [
                            {
                                title: '同意婚配',
                                id: `resolve:${id}:accept`
                            },
                            {
                                title: '婉拒',
                                id: `resolve:${id}:reject`
                            },
                            {
                                title: '稍后决定',
                                id: 'close'
                            }
                        ]
                    }
                ];
            }
            return [
                {
                    title: '大境界突破',
                    body: `${p.name} → ${label(d.payload.target)}\n准备成本：灵石 ${e.cultivation.costs(p).stones} · 药材 ${e.cultivation.costs(p).herbs} · 灵材 ${e.cultivation.costs(p).materials}\n${e.cultivation.resourcesReady(p) ? '准备条件已满足' : '资源或灵脉/藏经阁条件未满足'}\n不服丹药：${e.cultivation.chanceLabel(p)}\n${d.payload.target === 'foundation' ? `服筑基丹：${e.cultivation.chanceLabel(p, true)}（消耗库存一枚，现有 ${e.world.a.inventory.foundationPill} 枚）` : ''}\n失败可能损失修为、受伤，极少数灾难可能致死。`,
                    actions: [
                        {
                            title: '尝试突破',
                            id: `resolve:${id}:attempt`
                        },
                        ...d.payload.target === 'foundation' ? [
                            {
                                title: '服筑基丹突破',
                                id: `resolve:${id}:attempt:pill`
                            }
                        ] : [],
                        {
                            title: '暂缓一年',
                            id: `resolve:${id}:defer`
                        },
                        {
                            title: '稍后决定',
                            id: 'close'
                        }
                    ]
                }
            ];
        }
        if (this.ui.modal === 'detail' && c) return this.details(c);
        if (this.ui.modal === 'debug') return [
            {
                title: 'Debug · 核心验收',
                body: `Seed：${s.meta.seed}\n选中：${c?.name || '无'} · RNG ${s.meta.rngState}`,
                actions: [
                    {
                        title: '+10年',
                        id: 'years10'
                    },
                    {
                        title: '+100年',
                        id: 'years100'
                    },
                    {
                        title: '+1000灵石',
                        id: 'stones'
                    }
                ]
            },
            {
                title: '人物测试',
                body: '先在族人页点击人物选中。测灵测试会推进整个家族到该孩子六岁。',
                actions: [
                    {
                        title: '生成新生儿',
                        id: 'newborn'
                    },
                    {
                        title: '推进六岁并测灵',
                        id: 'root6'
                    },
                    {
                        title: '达到瓶颈',
                        id: 'bottleneck'
                    }
                ]
            },
            {
                title: '大境界测试',
                body: '以下按钮将选中人物设置为对应前置圆满境界，随后按真实成功率尝试，并记录实际结果。',
                actions: [
                    {
                        title: '筑基尝试',
                        id: 'force:foundation'
                    },
                    {
                        title: '金丹尝试',
                        id: 'force:core'
                    },
                    {
                        title: '元婴尝试',
                        id: 'force:nascent'
                    }
                ]
            },
            {
                title: '模拟设置',
                actions: [
                    {
                        title: s.settings.autoBreakthrough ? '普通人物自动突破：开' : '普通人物自动突破：关',
                        id: 'auto'
                    },
                    {
                        title: '重置存档',
                        id: 'reset'
                    },
                    {
                        title: '关闭面板',
                        id: 'close'
                    }
                ]
            }
        ];
        if (!s.meta.started) return [
            {
                title: `${s.playerFamily.name} · 初始家族`,
                body: `人口 ${e.world.residents().length} · 灵石 1200\n一阶下品灵脉 · 重刷 ${s.playerFamily.initialRerollCount}/3`,
                actions: [
                    {
                        title: '确认开局',
                        id: 'start'
                    },
                    {
                        title: '取消，返回标题',
                        id: 'title'
                    },
                    ...s.playerFamily.initialRerollCount < 3 ? [
                        {
                            title: '重刷家族',
                            id: 'reroll'
                        }
                    ] : []
                ]
            },
            ...e.world.residents().map((p)=>({
                    title: p.name,
                    body: `${p.gender === 'male' ? '男' : '女'} · ${p.age}岁 · ${realmLabel(p)}\n${rootLabel(p)}`,
                    actions: [
                        {
                            title: '查看',
                            id: 'select:' + p.id
                        }
                    ]
                }))
        ];
        if (this.ui.tab === '族人') {
            const list = allCharacters(s).filter((p)=>this.ui.filter === '全部' || (this.ui.filter === '在世' ? p.lifeStatus === 'alive' : p.lifeStatus === 'dead')).sort((a, b)=>a.generation - b.generation || a.id.localeCompare(b.id));
            const max = Math.max(0, Math.ceil(list.length / 12) - 1);
            this.ui.page = Math.min(this.ui.page, max);
            return [
                {
                    title: `族人 · ${list.length}人`,
                    actions: [
                        '全部',
                        '在世',
                        '已故'
                    ].map((f)=>({
                            title: f,
                            id: 'filter:' + f
                        }))
                },
                ...list.slice(this.ui.page * 12, this.ui.page * 12 + 12).map((p)=>({
                        title: `${p.lifeStatus === 'dead' ? '† ' : ''}${p.name}${p.isWatched ? ' ★' : ''}`,
                        body: `第${p.generation}代 · ${p.lifeStatus === 'dead' ? '享年' + p.deathAge : p.age}岁 · ${realmLabel(p)}\n${rootLabel(p)}`,
                        tone: p.lifeStatus === 'dead' ? 'muted' : '',
                        actions: [
                            {
                                title: '生平',
                                id: 'select:' + p.id
                            },
                            {
                                title: '族谱',
                                id: 'tree:' + p.id
                            }
                        ]
                    })),
                {
                    title: `第 ${this.ui.page + 1}/${max + 1} 页`,
                    actions: [
                        {
                            title: '上一页',
                            id: 'prev'
                        },
                        {
                            title: '下一页',
                            id: 'next'
                        }
                    ]
                }
            ];
        }
        if (this.ui.tab === '族谱') {
            const focus = c || findCharacter(s, s.playerFamily.ancestorId);
            return [
                {
                    title: `${focus.name} · 真实族谱`,
                    body: '展示上三代、下三代及道侣。点击人物查看生平或以其为中心展开。'
                },
                ...e.gene.neighborhood(focus.id).sort((a, b)=>a.depth - b.depth).map((row)=>{
                    const p = findCharacter(s, row.id);
                    return {
                        title: `${row.depth < 0 ? '↑ ' : row.depth > 0 ? '↓ ' : ''}${p.lifeStatus === 'dead' ? '† ' : ''}${p.name}`,
                        body: `${row.relation} · 第${p.generation}代 · ${realmLabel(p)}\n父：${findCharacter(s, p.fatherId)?.name || '无记载'} / 母：${findCharacter(s, p.motherId)?.name || '无记载'}\n道侣：${p.spouseIds.map((x)=>findCharacter(s, x)?.name).join('、') || '无'}`,
                        tone: p.lifeStatus === 'dead' ? 'muted' : '',
                        actions: [
                            {
                                title: '生平',
                                id: 'select:' + p.id
                            },
                            {
                                title: '展开',
                                id: 'tree:' + p.id
                            }
                        ]
                    };
                })
            ];
        }
        if (this.ui.tab === '世界') return [
            {
                title: '山河未启',
                body: '第一阶段仅运行本家族。世界、宗门、外交与秘境将在后续阶段接入。'
            }
        ];
        if (this.ui.tab === '大事') return [
            {
                title: '家族议事',
                body: `${s.pendingDecisions.length}件待决 · Phase 1 基础事件壳`
            },
            ...this.decisions(),
            {
                title: '家族记事',
                body: s.history.slice(-40).reverse().map((x)=>`${x.year}年${x.month}月 ${this.translate(x.text)}`).join('\n')
            }
        ];
        const alive = Object.values(s.characters.alive), dead = Object.values(s.characters.archive), leader = findCharacter(s, s.playerFamily.leaderId);
        return [
            {
                title: `${s.playerFamily.name} · 家族传承`,
                body: `族长 ${leader?.name || '血脉已绝'}\n在世 ${alive.length} · 已故 ${dead.length} · 第 ${Math.max(...allCharacters(s).map((x)=>x.generation))} 代\n灵石 ${Math.floor(s.playerFamily.spiritStones)} · 一阶下品灵脉`,
                actions: [
                    {
                        title: '保存',
                        id: 'save'
                    },
                    {
                        title: 'Debug',
                        id: 'debug'
                    }
                ]
            },
            {
                title: '修行概况',
                body: [
                    'mortal',
                    'qi',
                    'foundation',
                    'core',
                    'nascent', 'spirit', 'void'
                ].map((r)=>`${label(r)} ${alive.filter((x)=>x.realm === r).length}`).join('  ')
            },
            {
                title: `待处理大事 · ${s.pendingDecisions.length}`,
                body: s.pendingDecisions.length ? '重要人物的突破与婚配由你决定。' : '族中诸事安定。'
            },
            ...this.decisions().slice(0, 6),
            {
                title: '近日族闻',
                body: s.history.slice(-10).reverse().map((x)=>`${x.year}年${x.month}月 ${this.translate(x.text)}`).join('\n')
            }
        ];
    }
    translate(text) {
        let mapped = uiText(text);
        for (const f of this.engine?.world.a.world || [])mapped = mapped.replace(new RegExp('\\b' + f.id + '\\b', 'g'), f.name);
        for (const t of this.engine?.world.events.templates || [])mapped = mapped.split(t.id).join(t.title);
        return mapped;
    }
    decisions() {
        return this.engine.state.pendingDecisions.map((d)=>({
                title: findCharacter(this.engine.state, d.characterId).name,
                body: d.type === 'marriage' ? '婚配待议' : `突破${label(d.payload.target)}待议`,
                actions: [
                    {
                        title: '议事',
                        id: 'decision:' + d.id
                    }
                ]
            }));
    }
    details(c) {
        const e = this.engine, s = e.state, related = (id)=>findCharacter(s, id)?.name || '无记载';
        return [
            {
                portraitId: c.id,
                title: `${c.name}${c.lifeStatus === 'dead' ? ' · 已故' : ''}`,
                body: `${c.gender === 'male' ? '男' : '女'} · 第${c.generation}代 · ${c.sectId ? '宗门弟子' : c.factionId && c.factionId !== s.playerFamily.id ? '邻族重要修士' : c.branchId && !c.isResident ? '外迁支系' : c.isFamily ? '本家' : '外来修士'}\n${calendar(c.birthYear, c.birthMonth)}生 · ${c.lifeStatus === 'dead' ? '享年' + c.deathAge : c.age}岁\n${realmLabel(c)}${c.rootTested && !c.cultivationStarted && c.rootType !== 'none' ? '（八岁开始修炼）' : ''} · ${Math.floor(c.cultivationProgress * 100)}% ${c.isBottleneck ? '瓶颈' : ''}\n理论寿元约 ${Math.round(e.life.theoretical(c))}岁 · ${label(c.health)} / ${label(c.mood)}\n${rootLabel(c)} · ${c.rootTested ? '纯度 ' + Math.round(c.rootPurity * 100) + '%' : '天资尚未揭示'}`,
                actions: [
                    {
                        title: c.isWatched ? '取消关注' : '关注',
                        id: 'watch'
                    },
                    ...c.lifeStatus === 'alive' && c.realm !== 'mortal' ? [
                        {
                            title: c.isInRetreat ? '结束闭关' : '闭关修炼',
                            id: 'retreat'
                        }
                    ] : [],
                    {
                        title: '展开族谱',
                        id: 'tree:' + c.id
                    },
                    {
                        title: '返回',
                        id: 'close'
                    }
                ]
            },
            ...c.rootTested ? [
                {
                    title: '天资与功法',
                    body: `悟性 ${c.comprehension >= 85 ? '卓绝' : c.comprehension >= 65 ? '上佳' : '寻常'} · 福缘 ${c.fortune >= 70 ? '深厚' : '平常'} · 体魄 ${c.constitution >= 70 ? '强健' : '平常'}\n性格 ${c.traits.map(label).join('、')}\n血脉 ${c.bloodlines.map((x)=>bloodline(x.id, x.strength)).join('、') || '无'}\n功法 ${CONFIG.techniques.find((t)=>t.id === c.techniqueId)?.name || '未修炼'} · 契合 ${Math.round(c.techniqueAffinity * 100)}%`,
                    actions: c.lifeStatus === 'alive' && c.cultivationStarted ? CONFIG.techniques.filter((t)=>t.grade === '凡' || e.world.a.buildings.library >= (t.grade === '黄' ? 2 : 3)).map((t)=>({
                            title: t.name + '（' + t.grade + '）',
                            id: 'technique:' + t.id
                        })) : []
                }
            ] : [],
            {
                title: '血脉关系',
                body: `父亲 ${related(c.fatherId)}\n母亲 ${related(c.motherId)}\n道侣 ${c.spouseIds.map(related).join('、') || '无'}\n子女 ${c.childrenIds.map(related).join('、') || '无'}`,
                actions: [
                    ...c.spouseIds,
                    ...c.childrenIds,
                    ...[
                        c.fatherId,
                        c.motherId
                    ].filter(Boolean)
                ].map((id)=>({
                        title: related(id),
                        id: 'select:' + id
                    }))
            },
            {
                title: '人物生平',
                body: c.biography.map((x)=>`${x.year}年${x.month}月 ${this.translate(x.text)}`).join('\n')
            }
        ];
    }
}

exports.Presenter=Presenter;
},
'ui/ResourceRegistry':function(require,exports){
const THEME = {
    paper: '#F3EBDD',
    paperDark: '#E5D8C3',
    ink: '#252924',
    inkSoft: '#5F665E',
    jade: '#416C62',
    jadeDark: '#294C46',
    jadeLight: '#87A99F',
    gold: '#B79A59',
    danger: '#8E4A43',
    muted: '#8C8A82'
};
const RESOURCES = {
    family_bg_rank1: 'art/family_bg_rank1',
    family_bg_rank2: 'art/family_bg_rank2',
    family_bg_rank3: 'art/family_bg_rank3',
    family_bg_rank4: 'art/family_bg_rank4',
    world_map_yunzhou: 'art/world_map_yunzhou',
    bgm_home: 'audio/bgm_home',
    bgm_world: 'audio/bgm_world',
    bgm_main: 'audio/bgm_home',
    bgm_event: 'audio/bgm_home',
    paper_texture: 'art/polish/paper_texture',
    bgm_explore: 'audio/bgm_explore',
    sfx_click: 'audio/sfx_click',
    sfx_page: 'audio/sfx_page',
    sfx_root_test: 'audio/sfx_root_test',
    sfx_breakthrough: 'audio/sfx_breakthrough',
    sfx_thunder: 'audio/sfx_thunder',
    sfx_bell: 'audio/sfx_bell'
};
function resourcePath(key) {
    return RESOURCES[key] || key;
}
function portraitKeys(id, gender = 'male', age = 25) {
    const years = Number.isFinite(age) ? Math.max(0, age) : 25;
    const stage = years < 18 ? 0 : years < 40 ? 1 : years < 70 ? 2 : 3;
    return [
        'portraits/face_' + (stage + (gender === 'female' ? 4 : 0))
    ];
}

exports.THEME=THEME;
exports.RESOURCES=RESOURCES;
exports.resourcePath=resourcePath;
exports.portraitKeys=portraitKeys;
},
'ui/TreeLayout':function(require,exports){
const { GameState, findCharacter }=require('../core/GameState');
const { realmLabel }=require('./Labels');
const { UI_METRICS }=require('./UILayout');
function treeLayout(s, focus, neighborhood) {
    const ordered = neighborhood.filter((x)=>findCharacter(s, x.id)).sort((a, b)=>Math.abs(a.depth) - Math.abs(b.depth) || Number(b.id === focus) - Number(a.id === focus)).slice(0, 24);
    const groups = new Map();
    for (const row of ordered){
        const list = groups.get(row.depth) || [];
        list.push(row);
        groups.set(row.depth, list);
    }
    const min = Math.min(0, ...groups.keys()), max = Math.max(0, ...groups.keys());
    const width = Math.max(620, ...[
        ...groups.values()
    ].map((x)=>(x.length + 2) * UI_METRICS.nodeGapX));
    const nodes = [];
    for (const [depth, rows] of groups){
        const remaining = rows.slice(), sorted = [];
        while(remaining.length){
            const row = remaining.shift();
            sorted.push(row);
            const c = findCharacter(s, row.id);
            for (const spouse of c.spouseIds){
                const i = remaining.findIndex((x)=>x.id === spouse);
                if (i >= 0) sorted.push(remaining.splice(i, 1)[0]);
            }
        }
        sorted.forEach((row, i)=>{
            const c = findCharacter(s, row.id), center = findCharacter(s, focus);
            const relation = c.id === focus ? '本人' : c.id === center.fatherId ? '父亲' : c.id === center.motherId ? '母亲' : center.childrenIds.includes(c.id) ? c.gender === 'female' ? '女儿' : '儿子' : row.relation;
            nodes.push({
                id: c.id,
                name: c.name,
                realm: c.realm,
                detail: realmLabel(c),
                relation,
                x: width / 2 + (depth === 0 ? i === 0 ? 0 : Math.ceil(i / 2) * (i % 2 ? 1 : -1) : i - (sorted.length - 1) / 2) * UI_METRICS.nodeGapX,
                y: 128 + (depth - min) * UI_METRICS.nodeGapY,
                dead: c.lifeStatus === 'dead',
                external: !c.isResident,
                leader: s.playerFamily.leaderId === c.id
            });
        });
    }
    const edges = [], ids = new Set(nodes.map((n)=>n.id));
    for (const n of nodes){
        const c = findCharacter(s, n.id);
        for (const parent of [
            c.fatherId,
            c.motherId
        ])if (parent && ids.has(parent)) edges.push({
            from: parent,
            to: n.id,
            spouse: false,
            external: n.external
        });
        for (const spouse of c.spouseIds)if (ids.has(spouse) && n.id < spouse) edges.push({
            from: n.id,
            to: spouse,
            spouse: true,
            external: n.external || !findCharacter(s, spouse).isResident
        });
    }
    return {
        nodes,
        edges,
        width,
        height: (max - min) * UI_METRICS.nodeGapY + UI_METRICS.nodeHeight + 64,
        folded: Math.max(0, neighborhood.length - ordered.length)
    };
}

exports.treeLayout=treeLayout;
},
'ui/UILayout':function(require,exports){
const UI_METRICS = {
    card: 644,
    inner: 596,
    padding: 24,
    gap: 16,
    title: 28,
    body: 23,
    button: 21,
    nodeWidth: 192,
    nodeHeight: 208,
    nodeGapX: 216,
    nodeGapY: 264
};
function lineHeight(size) {
    return Math.ceil(size * 1.45);
}
function wrapText(text, width, size) {
    const limit = Math.max(size, width - 8);
    return text.split('\n').map((paragraph)=>{
        const lines = [];
        let line = '', used = 0;
        for (const ch of paragraph){
            const advance = size * (ch === '\t' ? 2.4 : /^[\x20-\x7e]$/.test(ch) ? .66 : 1.06);
            if (line && used + advance > limit) {
                lines.push(line.trimEnd());
                line = '';
                used = 0;
            }
            line += ch;
            used += advance;
        }
        lines.push(line.trimEnd());
        return lines.join('\n');
    }).join('\n');
}
function textHeight(text, width, size) {
    return text ? wrapText(text, width, size).split('\n').length * lineHeight(size) + 4 : 0;
}
function buttonGrid(titles, width = UI_METRICS.inner) {
    const gap = 12;
    const longest = Math.max(0, ...titles.map((t)=>Array.from(t).reduce((n, c)=>n + (/^[\x20-\x7e]$/.test(c) ? .66 : 1.06), 0) * UI_METRICS.button));
    const columns = longest > 280 ? 1 : longest > 164 ? 2 : 3;
    const cellWidth = (width - gap * (columns - 1)) / columns;
    const heights = [];
    for(let i = 0; i < titles.length; i += columns)heights.push(Math.max(56, ...titles.slice(i, i + columns).map((t)=>textHeight(t, cellWidth - 24, UI_METRICS.button) + 20)));
    return {
        columns,
        width: cellWidth,
        heights,
        height: heights.reduce((a, b)=>a + b, 0) + Math.max(0, heights.length - 1) * gap
    };
}

exports.UI_METRICS=UI_METRICS;
exports.lineHeight=lineHeight;
exports.wrapText=wrapText;
exports.textHeight=textHeight;
exports.buttonGrid=buttonGrid;
},
'ui/UIRefreshGate':function(require,exports){
class UIRefreshGate {
    ticks = 0;
    rebuilds = 0;
    elapsed = 0;
    dirty = false;
    markDirty() {
        this.dirty = true;
    }
    markTick() {
        this.ticks++;
        this.dirty = true;
    }
    refresh(dt, urgent = false) {
        this.elapsed += Math.max(0, dt);
        if (!urgent && (!this.dirty || this.elapsed < 1 / 3)) return false;
        this.dirty = false;
        this.elapsed = 0;
        this.rebuilds++;
        return true;
    }
}
class AssetCache {
    loader;
    pending = new Map();
    constructor(loader){
        this.loader = loader;
    }
    get(key) {
        let value = this.pending.get(key);
        if (!value) {
            value = this.loader(key).catch(()=>null);
            this.pending.set(key, value);
        }
        return value;
    }
    clear() {
        this.pending.clear();
    }
}

exports.UIRefreshGate=UIRefreshGate;
exports.AssetCache=AssetCache;
},
'ui/UIStateStore':function(require,exports){
class UIStateStore {
    tab = '家族';
    historyTab = '待决';
    search = '';
    factionId = '';
    location = '';
    team = [];
    selectedId = '';
    page = 0;
    filter = '全部';
    modal = null;
    offline = null;
    message = '';
}

exports.UIStateStore=UIStateStore;
},
'ui/UIStringMapper':function(require,exports){
const { LABELS, label }=require('./Labels');
const ACTION_LABELS = {
    gift: '赠礼',
    trade: '贸易',
    aid: '互助',
    reconcile: '和解',
    alliance: '结盟',
    hostile: '交恶',
    break: '破阵',
    hunt: '追猎妖兽',
    gather: '采集灵药',
    scout: '探查风险',
    retreat: '撤回家族',
    avoid: '避开风险',
    leave: '离开',
    mark: '标记线索'
};
function calendar(year, month) {
    return (year < 0 ? '仙历前' + Math.abs(year) : '仙历' + year) + '年' + (month ? month + '月' : '');
}
function bloodline(id, strength) {
    return label(id) + '血脉 · ' + (strength < 25 ? '淡薄' : strength < 50 ? '微弱' : strength < 75 ? '浓郁' : '精纯');
}
function uiText(text) {
    return text.replace(/1-low|1-mid/g, (x)=>x === '1-low' ? '一阶下品灵脉' : '一阶中品灵脉').replace(/-([0-9]+)年/g, (_, n)=>'仙历前' + n + '年').replace(/\b[A-Za-z_]+\b/g, (x)=>ACTION_LABELS[x] || LABELS[x] || x);
}
function spiritVein(tier) {
    return ({
        '1-low': '一阶下品灵脉',
        '1-mid': '一阶中品灵脉',
        '2': '二阶灵脉',
        '3': '三阶灵脉',
        '4': '四阶灵脉',
        '5': '五阶灵脉'
    })[tier] || '灵脉待考';
}
function relation(n) {
    return n <= -60 ? '敌对' : n < -20 ? '冷淡' : n < 30 ? '普通' : n < 60 ? '友好' : n < 85 ? '亲近' : '盟友';
}

exports.ACTION_LABELS=ACTION_LABELS;
exports.calendar=calendar;
exports.bloodline=bloodline;
exports.uiText=uiText;
exports.spiritVein=spiritVein;
exports.relation=relation;
},
'ui/VisualPolish':function(require,exports){
const { Character, GameState }=require('../core/GameState');
const { UIRow }=require('./Presenter');
const ICON_ART = {
    stones: {
        label: '灵石',
        paths: [
            [
                0,
                9,
                7,
                0,
                0,
                -9,
                -7,
                0,
                0,
                9
            ],
            [
                0,
                9,
                0,
                -9
            ],
            [
                -7,
                0,
                7,
                0
            ]
        ],
        circles: [],
        color: '#62887f'
    },
    reputation: {
        label: '声望',
        paths: [
            [
                -5,
                1,
                -4,
                -9,
                0,
                -6,
                4,
                -9,
                5,
                1
            ],
            [
                -7,
                4,
                -7,
                9,
                7,
                9,
                7,
                4
            ]
        ],
        circles: [
            [
                0,
                3,
                5
            ]
        ],
        color: '#a38a51'
    },
    herbs: {
        label: '药材',
        paths: [
            [
                0,
                -9,
                0,
                5
            ],
            [
                -7,
                6,
                0,
                2,
                -6,
                0,
                -7,
                6
            ],
            [
                7,
                9,
                1,
                4,
                7,
                3,
                7,
                9
            ]
        ],
        circles: [],
        color: '#64816a'
    },
    materials: {
        label: '灵材',
        paths: [
            [
                -8,
                -5,
                0,
                -9,
                8,
                -5,
                0,
                -1,
                -8,
                -5
            ],
            [
                -8,
                1,
                0,
                -3,
                8,
                1,
                0,
                5,
                -8,
                1
            ],
            [
                -8,
                7,
                0,
                3,
                8,
                7,
                0,
                11,
                -8,
                7
            ]
        ],
        circles: [],
        color: '#808b87'
    },
    birth: {
        label: '出生',
        paths: [
            [
                0,
                -8,
                0,
                -2
            ],
            [
                -6,
                1,
                0,
                -2,
                6,
                1
            ]
        ],
        circles: [
            [
                0,
                4,
                5
            ],
            [
                -5,
                4,
                3
            ],
            [
                5,
                4,
                3
            ]
        ],
        color: '#70865e'
    },
    death: {
        label: '死亡',
        paths: [
            [
                -5,
                -9,
                -5,
                1,
                5,
                1,
                5,
                -9,
                -5,
                -9
            ],
            [
                -8,
                -9,
                8,
                -9
            ],
            [
                0,
                3,
                -2,
                7,
                0,
                10,
                2,
                7,
                0,
                3
            ]
        ],
        circles: [],
        color: '#7c8585'
    },
    marriage: {
        label: '婚姻',
        paths: [
            [
                -8,
                6,
                0,
                10,
                8,
                6
            ]
        ],
        circles: [
            [
                -4,
                -1,
                5
            ],
            [
                4,
                -1,
                5
            ]
        ],
        color: '#ac8580'
    },
    breakthrough: {
        label: '突破',
        paths: [
            [
                0,
                -9,
                0,
                10
            ],
            [
                -5,
                4,
                0,
                10,
                5,
                4
            ],
            [
                -9,
                -5,
                -6,
                0,
                -2,
                -5
            ],
            [
                2,
                -5,
                6,
                0,
                9,
                -5
            ]
        ],
        circles: [],
        color: '#b09254'
    },
    explore: {
        label: '探索',
        paths: [
            [
                0,
                10,
                8,
                0,
                0,
                -10,
                -8,
                0,
                0,
                10
            ],
            [
                -3,
                -3,
                3,
                3
            ]
        ],
        circles: [
            [
                0,
                0,
                3
            ]
        ],
        color: '#62877e'
    },
    sect: {
        label: '宗门',
        paths: [
            [
                -9,
                -8,
                9,
                -8
            ],
            [
                -6,
                -8,
                -6,
                2,
                6,
                2,
                6,
                -8
            ],
            [
                -9,
                2,
                0,
                10,
                9,
                2
            ],
            [
                -2,
                -8,
                -2,
                -1,
                2,
                -1,
                2,
                -8
            ]
        ],
        circles: [],
        color: '#687f78'
    },
    family: {
        label: '家族',
        paths: [
            [
                -9,
                2,
                0,
                9,
                9,
                2
            ],
            [
                -6,
                1,
                -6,
                -9,
                6,
                -9,
                6,
                1
            ],
            [
                -2,
                -9,
                -2,
                -1,
                2,
                -1,
                2,
                -9
            ]
        ],
        circles: [],
        color: '#567a6a'
    },
    market: {
        label: '坊市',
        paths: [
            [
                -8,
                1,
                -6,
                8,
                6,
                8,
                8,
                1,
                -8,
                1
            ],
            [
                -6,
                1,
                -6,
                -9,
                6,
                -9,
                6,
                1
            ],
            [
                -2,
                -9,
                -2,
                -3,
                3,
                -3
            ]
        ],
        circles: [],
        color: '#9d8963'
    }
};
function rowIcon(row) {
    const t = row.title;
    if (/归入|寿终|死亡|祖祠|慎终/.test(t) || row.effect === 'death') return 'death';
    if (/新生|出生/.test(t)) return 'birth';
    if (/结缘|婚姻|联姻|道侣/.test(t)) return 'marriage';
    if (/突破|进境|测灵|元婴|晋星|晋阶/.test(t) || row.effect) return 'breakthrough';
    if (/远征|秘境|落星|黑水|青霞|地点|选远征/.test(t)) return 'explore';
    if (/宗门/.test(t)) return 'sect';
    if (/坊市|天河|交易|库存/.test(t)) return 'market';
    if (/山河|云州|外交/.test(t)) return 'explore';
    if (/家族|族人|族谱|★|山门|血脉|职位/.test(t) || row.treeView) return 'family';
    return null;
}
function resourceBadges(text = '') {
    return [
        'stones',
        'reputation',
        'herbs',
        'materials'
    ].filter((k)=>text.includes(ICON_ART[k].label));
}
function selectedAction(id, u, settings, speed) {
    if (id.startsWith('tab:')) return id.slice(4) === u.tab;
    if (id.startsWith('filter:')) return id.slice(7) === u.filter;
    if (id.startsWith('history:')) return id.slice(8) === u.historyTab;
    if (id.startsWith('team:')) return u.team.includes(id.slice(5));
    if (id.startsWith('speed:')) return id.slice(6) === speed;
    if (id === 'audio_bgm') return settings.bgm;
    if (id === 'audio_sfx') return settings.sfx;
    if (id.startsWith('volume:')) return Number(id.slice(7)) === settings.volume;
    return false;
}
function portraitStyle(c, s, focus = false) {
    const dead = c?.lifeStatus === 'dead', leader = c?.id === s.playerFamily.leaderId;
    const external = !!c && (!c.isResident || !c.name.startsWith(s.playerFamily.surname));
    return {
        color: dead ? '#8d9691' : leader || c?.realm === 'core' ? '#b39a62' : focus || c?.realm === 'nascent' ? '#5b8f83' : '#b4bdae',
        badge: dead ? '故' : leader ? '印' : external ? '客' : focus ? '心' : '',
        muted: dead,
        external
    };
}
function iconSVG(kind) {
    const art = ICON_ART[kind];
    const paths = art.paths.map((points)=>'<polyline points="' + Array.from({
            length: points.length / 2
        }, (_, i)=>points[2 * i] + 12 + ',' + (12 - points[2 * i + 1])).join(' ') + '"/>').join('');
    const circles = art.circles.map(([x, y, r])=>`<circle cx="${x + 12}" cy="${12 - y}" r="${r}"/>`).join('');
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="${art.color}" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">${paths}${circles}</svg>`;
}

exports.ICON_ART=ICON_ART;
exports.rowIcon=rowIcon;
exports.resourceBadges=resourceBadges;
exports.selectedAction=selectedAction;
exports.portraitStyle=portraitStyle;
exports.iconSVG=iconSVG;
}};const cache={};function req(id){if(cache[id])return cache[id];const exports={};cache[id]=exports;modules[id]((rel)=>{const parts=id.split('/');parts.pop();for(const p of rel.split('/')){if(p==='..')parts.pop();else if(p!=='.')parts.push(p);}return req(parts.join('/'));},exports);return exports;}const api={...req('core/Engine'),...req('core/Configs'),...req('core/AlphaConfig'),...req('core/GameState'),...req('systems/SaveSystem'),...req('systems/LocalLZ'),...req('systems/HistoryCompaction'),...req('ui/UIRefreshGate'),...req('ui/Labels'),...req('ui/Presenter'),...req('ui/PresentationQueue'),...req('ui/UIStringMapper'),...req('ui/TreeLayout'),...req('ui/ArtLoader'),...req('ui/ResourceRegistry'),...req('ui/UILayout'),...req('ui/VisualPolish'),...req('ui/AudioManager')};if(typeof module!=='undefined')module.exports=api;global.WSXZ=api;})(typeof window!=='undefined'?window:globalThis);
