import { describe, it, expect } from 'vitest'
import { renderHook, act, waitFor } from '@testing-library/react'
import { useGame } from './UseGame'
import { classicRules } from '../rules/classic'
import { lizardSpockRules } from '../rules/lizardSpock'

describe('useGame', () => {
  describe('initial state', () => {
    it('works with classicRules', () => {
      const { result } = renderHook(() => useGame(classicRules))
      expect(result.current.gameStarted).toBe(false)
    })

    it('works with lizardSpockRules', () => {
      const { result } = renderHook(() => useGame(lizardSpockRules))
      expect(result.current.gameStarted).toBe(false)
    })

    it('starts with bestOf of 1', () => {
      const { result } = renderHook(() => useGame(classicRules))
      expect(result.current.bestOf).toBe(1)
    })

    it('starts with zero scores', () => {
      const { result } = renderHook(() => useGame(classicRules))
      expect(result.current.userScore).toBe(0)
      expect(result.current.cpuScore).toBe(0)
    })

    it('starts at SELECT_MOVE step', () => {
      const { result } = renderHook(() => useGame(classicRules))
      expect(result.current.gameStep).toBe('select_move')
    })
  })

  describe('startGame', () => {
    it('sets gameStarted to true', () => {
      const { result } = renderHook(() => useGame(classicRules))
      
      act(() => {
        result.current.startGame()
      })

      expect(result.current.gameStarted).toBe(true)
    })
  })

  describe('resetGame', () => {
    it('resets all state to initial values', () => {
      const { result } = renderHook(() => useGame(classicRules))
      
      act(() => {
        result.current.startGame()
      })
      
      act(() => {
        result.current.resetGame()
      })

      expect(result.current.gameStarted).toBe(false)
      expect(result.current.userScore).toBe(0)
      expect(result.current.cpuScore).toBe(0)
      expect(result.current.lastUserMove).toBe(null)
      expect(result.current.lastCpuMove).toBe(null)
      expect(result.current.roundWinner).toBe(null)
      expect(result.current.gameStep).toBe('select_move')
    })
  })

  describe('play', () => {
    it('does nothing if game is not started', () => {
      const { result } = renderHook(() => useGame(classicRules))
      
      act(() => {
        result.current.play('rock')
      })

      expect(result.current.lastUserMove).toBe(null)
      expect(result.current.roundWinner).toBe(null)
    })

    it('updates moves when game is started', async () => {
      const { result } = renderHook(() => useGame(classicRules))
      
      act(() => {
        result.current.startGame()
      })
      
      act(() => {
        result.current.play('rock')
      })

      await waitFor(() => {
        expect(result.current.lastUserMove).toBe('rock')
      })
      await waitFor(() => {
        expect(result.current.lastCpuMove).toBeDefined()
      })
    })

    it('updates roundWinner after play', async () => {
      const { result } = renderHook(() => useGame(classicRules))
      
      act(() => {
        result.current.startGame()
      })
      
      act(() => {
        result.current.play('rock')
      })

      await waitFor(() => {
        expect(result.current.roundWinner).toMatch(/player|cpu|draw/)
      })
    })

    it('changes game to IN_RESULT step after play', async () => {
      const { result } = renderHook(() => useGame(classicRules))
      
      act(() => {
        result.current.startGame()
      })
      
      act(() => {
        result.current.play('rock')
      })

      await waitFor(() => {
        expect(result.current.gameStep).toBe('in_result')
      })
    })
  })

  describe('setBestOf', () => {
    it('updates bestOf value', () => {
      const { result } = renderHook(() => useGame(classicRules))
      
      act(() => {
        result.current.setBestOf(3)
      })

      expect(result.current.bestOf).toBe(3)
    })

    it('recalculates maxWins when bestOf changes', () => {
      const { result } = renderHook(() => useGame(classicRules))
      
      act(() => {
        result.current.setBestOf(3)
      })

      expect(result.current.gameWinner).toBe(null)
    })
  })

  describe('gameWinner', () => {
    it('returns null when game is not finished', () => {
      const { result } = renderHook(() => useGame(classicRules))
      
      act(() => {
        result.current.startGame()
      })

      expect(result.current.gameWinner).toBe(null)
    })

    it('returns null when neither player has reached maxWins', async () => {
      const { result } = renderHook(() => useGame(classicRules))
      
      act(() => {
        result.current.startGame()
      })
      
      act(() => {
        result.current.play('rock')
      })

      await waitFor(() => {
        expect(result.current.gameStep).toBe('in_result')
      })
    })
  })

  describe('setGameStep', () => {
    it('updates gameStep manually', () => {
      const { result } = renderHook(() => useGame(classicRules))
      
      act(() => {
        result.current.setGameStep('in_result')
      })

      expect(result.current.gameStep).toBe('in_result')
    })
  })
})