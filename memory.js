import Map2 from './map2.js'

class Memory {
  constructor() {
    this.registers = new Map2()
    this.maxSequences = {}
  }

  add([agentId, seq], path) {
    if (!this.has(agentId, seq) && !this.hasTombstone([agentId, seq])) {
      this.registers.set(agentId, seq, path)
      this.maxSequences[agentId] = Math.max(this.maxSequences[agentId] ?? seq)
    }
  }

  has([agentId, seq]) {
    return this.registers.has(agentId, seq)
  }

  hasTombstone([agentId, seq]) {
    return !this.has([agentId, seq]) && this.maxSequences[agentId] >= seq
  }

  get([agentId, seq]) {
    return this.registers.get(agentId, seq)
  }

  remove([agentId, seq]) {
    this.registers.delete(agentId, seq)
  }
}

export default Memory
