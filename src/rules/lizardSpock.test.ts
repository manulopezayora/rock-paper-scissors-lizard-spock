import { describe, it, expect } from 'vitest'
import { lizardSpockRules } from './lizardSpock'

describe('lizardSpockRules.whoWins', () => {
  it('returns draw when player and cpu choose the same move', () => {
    expect(lizardSpockRules.whoWins('rock', 'rock')).toBe('draw')
    expect(lizardSpockRules.whoWins('paper', 'paper')).toBe('draw')
    expect(lizardSpockRules.whoWins('scissors', 'scissors')).toBe('draw')
    expect(lizardSpockRules.whoWins('lizard', 'lizard')).toBe('draw')
    expect(lizardSpockRules.whoWins('spock', 'spock')).toBe('draw')
  })

  it('returns player when rock beats scissors and lizard', () => {
    expect(lizardSpockRules.whoWins('rock', 'scissors')).toBe('player')
    expect(lizardSpockRules.whoWins('rock', 'lizard')).toBe('player')
  })

  it('returns player when paper beats rock and spock', () => {
    expect(lizardSpockRules.whoWins('paper', 'rock')).toBe('player')
    expect(lizardSpockRules.whoWins('paper', 'spock')).toBe('player')
  })

  it('returns player when scissors beats paper and lizard', () => {
    expect(lizardSpockRules.whoWins('scissors', 'paper')).toBe('player')
    expect(lizardSpockRules.whoWins('scissors', 'lizard')).toBe('player')
  })

  it('returns player when lizard beats paper and spock', () => {
    expect(lizardSpockRules.whoWins('lizard', 'paper')).toBe('player')
    expect(lizardSpockRules.whoWins('lizard', 'spock')).toBe('player')
  })

  it('returns player when spock beats rock and scissors', () => {
    expect(lizardSpockRules.whoWins('spock', 'rock')).toBe('player')
    expect(lizardSpockRules.whoWins('spock', 'scissors')).toBe('player')
  })

  it('returns cpu when rock loses to paper and spock', () => {
    expect(lizardSpockRules.whoWins('rock', 'paper')).toBe('cpu')
    expect(lizardSpockRules.whoWins('rock', 'spock')).toBe('cpu')
  })
})

describe('lizardSpockRules.moves', () => {
  it('contains all five moves', () => {
    expect(lizardSpockRules.moves).toContain('rock')
    expect(lizardSpockRules.moves).toContain('paper')
    expect(lizardSpockRules.moves).toContain('scissors')
    expect(lizardSpockRules.moves).toContain('lizard')
    expect(lizardSpockRules.moves).toContain('spock')
    expect(lizardSpockRules.moves).toHaveLength(5)
  })
})