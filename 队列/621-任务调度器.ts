// @ts-nocheck
function leastInterval(tasks: string[], n: number): number {
  const counter: {[key: string]: number} = {}
  tasks.forEach(t => counter[t] = counter[t] ? ++counter[t] : 1)
  const max = Math.max(...Object.values(counter))
  let maxTasks = 0
  Object.values(counter).forEach(task => (task === max) && maxTasks++)
  return Math.max(tasks.length, (max - 1) * (n + 1) + maxTasks)
}
