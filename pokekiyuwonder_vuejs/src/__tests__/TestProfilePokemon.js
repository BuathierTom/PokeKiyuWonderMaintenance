import ProfilePokemon from '../components/ProfilePokemon/ProfilePokemon.js'

describe('ProfilePokemon colorJauge: ', () => {
    test('The value of the stat is lesser than 50', () => {    
        expect(ProfilePokemon.methods.colorJauge(42)).toBe('#c00')
    })
    test('The value of the stat is 50', () => {    
        expect(ProfilePokemon.methods.colorJauge(50)).toBe('#cc5200')
    })
    test('The value of the stat is between 50 and 75', () => {    
        expect(ProfilePokemon.methods.colorJauge(69)).toBe('#cc5200') //has to be done :')
    })
    test('The value of the stat is 75', () => {    
        expect(ProfilePokemon.methods.colorJauge(75)).toBe('#cc7d00')
    })
    test('The value of the stat is between 75 and 100', () => {    
        expect(ProfilePokemon.methods.colorJauge(90)).toBe('#cc7d00')
    })
    test('The value of the stat is 100', () => {    
        expect(ProfilePokemon.methods.colorJauge(100)).toBe('#ccc500')
    })
    test('The value of the stat is between 100 and 125', () => {    
        expect(ProfilePokemon.methods.colorJauge(112)).toBe('#ccc500')
    })
    test('The value of the stat is 125', () => {    
        expect(ProfilePokemon.methods.colorJauge(125)).toBe('#60cc00')
    })
    test('The value of the stat is between 125 and 150', () => {    
        expect(ProfilePokemon.methods.colorJauge(142)).toBe('#60cc00')
    })
    test('The value of the stat is 150', () => {    
        expect(ProfilePokemon.methods.colorJauge(150)).toBe('#00a8cc')
    })
    test('The value of the stat is greater than 150', () => {    
        expect(ProfilePokemon.methods.colorJauge(9001)).toBe('#00a8cc')
    })
}) 

describe('ProfilePokemon colorResistance: ', () => {
    test('The value of the resistance is 0.25', () => {    
        expect(ProfilePokemon.methods.colorResistance(0.25)).toBe('#3d3')
    })
    test('The value of the resistance is 0.5', () => {    
        expect(ProfilePokemon.methods.colorResistance(0.5)).toBe('#afa')
    })
    test('The value of the resistance is 1', () => {    
        expect(ProfilePokemon.methods.colorResistance(1)).toBe('#eec')
    })
    test('The value of the resistance is 2', () => {    
        expect(ProfilePokemon.methods.colorResistance(2)).toBe('#f92')
    })
    test('The value of the resistance is 4', () => {    
        expect(ProfilePokemon.methods.colorResistance(4)).toBe('#e66')
    })
    test('The value of the resistance is 0', () => {    
        expect(ProfilePokemon.methods.colorResistance(0)).toBe(undefined)
    })
    test('The value of the resistance is 5', () => {    
        expect(ProfilePokemon.methods.colorResistance(5)).toBe(undefined)
    })
})