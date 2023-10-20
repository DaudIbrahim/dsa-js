export default function bs_list(haystack: number[], needle: number): boolean {

    // memorize - [idx: 0, idx: 1, idx: 2] lenght: 3
    // memorize - the highPointer is Offset by One essentailly highExclusive

    let lowInclusive = 0
    let highExclusive = haystack.length

    // on a piece of paper work on the algorithm and you will eventually figure out why high is exclusive. Work ofr the meal
    // exit loop when the two pointers low and high meet.
    while (lowInclusive < highExclusive) {
        const midPoint = getMidPointWithLowInclusiveAndHighExclusive(lowInclusive, highExclusive)
        const currentValueFound = haystack[midPoint]

        if (currentValueFound === needle) {
            return true
        } else if (currentValueFound > needle) {
            highExclusive = midPoint
        } else {
            lowInclusive = midPoint + 1
        }
    }

    return false
}

// There are only two hard things in Computer Science: cache invalidation and naming things.
// https://martinfowler.com/bliki/TwoHardThings.html
const getMidPointWithLowInclusiveAndHighExclusive = (lowInclusive: number, highExclusive: number): number => {
    const response = lowInclusive + ((highExclusive - lowInclusive) / 2)
    return Math.floor(response)
}

// The audience wants to work for their meal. They just don’t want to know they’re doing that. Meaning, we want to be given the clues to understand the whole story. We want to be told, what is 2 + 2? But we don't want to be told, 2 + 2 = 4. It’s this well organized absence of information that draws us in. make the audience put things together. (Story Telling)
// https://www.youtube.com/watch?v=KxDwieKpawg&lc=UgwLgI__ZnJ7lLZC8Al4AaABAg
