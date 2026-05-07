import { describe, it, expect } from 'vitest'
import { classicRules } from './classic'

describe('classicRules.whoWins', () => {
  it('returns draw when player and cpu choose the same move', () => {
    expect(classicRules.whoWins('rock', 'rock')).toBe('draw')
    expect(classicRules.whoWins('paper', 'paper')).toBe('draw')
    expect(classicRules.whoWins('scissors', 'scissors')).toBe('draw')
  })

  it('returns player when rock beats scissors', () => {
    expect(classicRules.whoWins('rock', 'scissors')).toBe('player')
  })

  it('returns player when paper beats rock', () => {
    expect(classicRules.whoWins('paper', 'rock')).toBe('player')
  })

  it('returns player when scissors beats paper', () => {
    expect(classicRules.whoWins('scissors', 'paper')).toBe('player')
  })

  it('returns cpu when rock loses to paper', () => {
    expect(classicRules.whoWins('rock', 'paper')).toBe('cpu')
  })

  it('returns cpu when paper loses to scissors', () => {
    expect(classicRules.whoWins('paper', 'scissors')).toBe('cpu')
  })

  it('returns cpu when scissors loses to rock', () => {
    expect(classicRules.whoWins('scissors', 'rock')).toBe('cpu')
  })
})

describe('classicRules.moves', () => {
  it('contains all three classic moves', () => {
    expect(classicRules.moves).toContain('rock')
    expect(classicRules.moves).toContain('paper')
    expect(classicRules.moves).toContain('scissors')
    expect(classicRules.moves).toHaveLength(3)
  })
})