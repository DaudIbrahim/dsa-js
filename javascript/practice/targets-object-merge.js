const main = {
    skillAreas: [
        {
            skillArea: 'Aggression',
            targetCount: 1,
            targets: [
                {
                    name: 'Adult Aggression',
                    category: 'Aggression',
                    dataType: 'Percent Correct',
                    safetyPlan:
                        'Suggestions: Run previous target, run target at the beginning of the learning track, re-run target at current prompt level, or\nrun distractor target and represent current target.',
                    consequence:
                        'Suggestion: Reinforce with preferred tangible, social, or secondary reinforcer. (token economy)',
                    definition:
                        'Client uses PECS within 3-5 seconds without additional prompting.',
                    _id: '64bfdf3979baa9b5c37cac1e',
                },
            ],
        },
    ],
    skillAreaCount: 1,
};

const user = {
    skillAreas: [
        {
            skillArea: 'Aggression',
            targets: [
                {
                    name: 'Adult Aggression User Adm',
                    category: 'Aggression',
                    dataType: 'Percent Correct',
                    intervention: '',
                    safetyPlan:
                        'Suggestions: Run previous target, run target at the beginning of the learning track, re-run target at current prompt level, or\nrun distractor target and represent current target.',
                    consequence:
                        'Suggestion: Reinforce with preferred tangible, social, or secondary reinforcer. (token economy)',
                    definition:
                        'Client uses PECS within 3-5 seconds without additional prompting.',
                    _id: '64f1f1513b196c4633c6c582',
                },
            ],
            targetCount: 1,
        },
    ],
    skillAreaCount: 1,
};


const merger = (myArray = []) => {

    const result = { skillAreaCount: 0, skillAreas: [] }
    const skillAreasObj = Object.create(null)

    for (let i = 0; i < myArray.length; i++) {
        const targetSkillAreas = myArray[i].skillAreas;

        targetSkillAreas.forEach((element) => {
            if (skillAreasObj[element.skillArea] === undefined) {
                skillAreasObj[element.skillArea] = {
                    skillArea: element.skillArea,
                    targetCount: element.targetCount,
                    targets: element.targets,
                }
            } else {
                skillAreasObj[element.skillArea].targetCount += element.targetCount
                skillAreasObj[element.skillArea].targets.push(...element.targets)
            }
        })

    }

    for (const val of Object.values(skillAreasObj)) {
        result.skillAreaCount += val.targetCount
        result.skillAreas.push(val)
    }

    return result
}


console.log(
    merger([main, user])
)
