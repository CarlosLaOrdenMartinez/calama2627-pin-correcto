function esPinValido(pin) {
  if (typeof pin !== 'string') return false   // cubre null y undefined
  if (!/^\d{4,6}$/.test(pin)) return false    // solo dígitos y longitud 4 a 6 (rechaza también el vacío)
  return new Set(pin).size > 1                // false si todos los dígitos son iguales
}

export { esPinValido }