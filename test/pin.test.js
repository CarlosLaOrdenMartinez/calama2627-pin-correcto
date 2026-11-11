import { describe, it, expect } from 'vitest'
import { esPinValido } from '../src/pin.js'

describe('esPinValido', () => {
  it('acepta pines válidos de 4 a 6 dígitos', () => {
    expect(esPinValido('1234')).toBe(true)
    expect(esPinValido('12345')).toBe(true)
    expect(esPinValido('123456')).toBe(true)
    expect(esPinValido('9081')).toBe(true)
  })

  it('rechaza null y undefined', () => {
    expect(esPinValido(null)).toBe(false)
    expect(esPinValido(undefined)).toBe(false)
  })

  it('rechaza un pin vacío', () => {
    expect(esPinValido('')).toBe(false)
  })

  it('rechaza longitudes menores de 4 o mayores de 6', () => {
    expect(esPinValido('123')).toBe(false)
    expect(esPinValido('1234567')).toBe(false)
  })

  it('rechaza caracteres que no son dígitos', () => {
    expect(esPinValido('12a4')).toBe(false)
    expect(esPinValido('12 34')).toBe(false)
    expect(esPinValido('12.45')).toBe(false)
  })

  it('rechaza pines con todos los dígitos iguales', () => {
    expect(esPinValido('1111')).toBe(false)
    expect(esPinValido('888888')).toBe(false)
    expect(esPinValido('33333')).toBe(false)
  })
})