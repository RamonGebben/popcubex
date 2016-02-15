

/**
 * Lightens or darkens a HEX color
 * @method colorLum
 * @param  {string} hex color you want to change
 * @param  {number} lum 0.2 for 20% lighter, -0.2 for 20% darker
 * @return {string}     new color
 */
function colorLum(hex, lum) {
  // validate hex string
  hex = String(hex).replace(/[^0-9a-f]/gi, '');
  if (hex.length < 6)  hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
  lum = lum || 0;

  // convert to decimal and change luminosity
  var rgb = "#", c, i;
  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i*2,2), 16);
    c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
    rgb += ("00"+c).substr(c.length);
  }

  return rgb;
}


export {
  colorLum
}
