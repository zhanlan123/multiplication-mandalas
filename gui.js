export const controls = [{
  id: 'table',
  type: 'range',
  min: 2,
  max: 1500,
  step: 1,
  value: 2
}, {
  id: 'start',
  type: 'range',
  min: 0,
  max: 100,
  step: 0.1,
  value: 0
}, {
  id: 'end',
  type: 'range',
  min: 0,
  max: 100,
  step: 0.1,
  value: 100
}, {
  id: 'modulo',
  type: 'range',
  min: 0,
  max: 1500,
  step: 1,
  value: 1000
}, {
  id: 'rotation',
  type: 'range',
  min: -360,
  max: 360,
  step: 1,
  value: 0
}, {
  id: 'minLength',
  type: 'range',
  min: 0,
  max: 1500,
  step: 0.1,
  value: 0
}, {
  id: 'keepEveryNLines',
  type: 'range',
  min: 1,
  max: 1500,
  step: 1,
  value: 1
}, {
  id: 'keepEveryNLinesShift',
  type: 'range',
  min: 0,
  max: 1500,
  step: 1,
  value: 0
}, {
  id: 'center',
  type: 'range',
  min: 0,
  max: 1,
  step: 1,
  value: 0
}];