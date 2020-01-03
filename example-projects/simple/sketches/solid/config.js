/** HEDRON TIP **
  The config.js defines how the sketch file is used by Hedron.
**/

module.exports = {
  // Default title when sketch is loaded in (can be changed by user)
  defaultTitle: 'Solid',
  // Collapsable category for this sketch to be grouped under
  category:'simple',
  // Params are values between 0 and 1 that can be manipulated by the user
  // these values are sent to the sketch every frame
  // e.g. Speed, scale, colour
  params: [
    {
      key: 'rotSpeedX', // needs to be unique
      title: 'Rotation Speed X', // should be human
      defaultValue: 0.5, // must be between 0 and 1
      defaultMin: -1,
      defaultMax: 1,
    },
    {
      key: 'rotSpeedY',
      title: 'Rotation Speed Y',
      defaultValue: 0.5,
      defaultMin: -1,
      defaultMax: 1,
    },
    {
      key: 'rotSpeedZ',
      title: 'Rotation Speed Z',
      defaultValue: 0.5,
      defaultMin: -1,
      defaultMax: 1,
    },
    {
      key: 'scale',
      title: 'Scale',
      defaultValue: 0.5,
      defaultMin: 0.00001,
      defaultMax: 4,
    },
    {
      key: 'isWireframe',
      title: 'Wireframe',
      defaultValue: true,
      valueType: 'boolean',
    },
    {
      key: 'geomName',
      label: 'Geometry',
      valueType: 'enum',
      defaultValue: 'icosa',
      options: [
        {
          value: 'cube',
          label: 'Cube',
        },
        {
          value: 'tetra',
          label: 'Tetra',
        },
        {
          value: 'octa',
          label: 'Octa',
        },
        {
          value: 'icosa',
          label: 'Icosa',
        },
        {
          value: 'dodeca',
          label: 'Dodeca',
        },
      ],
    },
  ],
  // Shots are single functions that can fire, as opposed to values that change
  // e.g. Explosions, Pre-defined animations
  shots: [
    {
      method: 'randomGeom', // needs to be unique
      title: 'Random Geom', // should be human
    },
  ],
}
