function Cylinder(cyl_height, cyl_diameter) {
    this.cyl_height = cyl_height;
    this.cyl_diameter = cyl_diameter;
  }
function Sphere(shp_height, shp_diameter) {
    this.shp_height = shp_height;
    this.shp_diameter = shp_diameter;
  }
function Cone(con_height, con_diameter) {
    this.con_height = con_height;
    this.con_diameter = con_diameter;
  }
  
  Cylinder.prototype.Volume = function () {
    var radius = this.cyl_diameter / 2;
    return this.cyl_height * Math.PI * radius * radius;
};
  
  Sphere.prototype.Volume = function () {
    var radius = this.shp_diameter / 2;
    return 1.33 * Math.PI * radius * radius * radius;
  };
  Cone.prototype.Volume = function () {
    var radius = this.con_diameter / 2;
    return Math.PI * radius * radius * this.con_height / 3;
  };
  
  var cyl = new Cylinder(7, 4);
  var shp = new Sphere(7, 4);
  var con = new Cone(7, 4);

  console.log('volume =', cyl.Volume().toFixed(4));
  console.log('volume =', shp.Volume().toFixed(4));
  console.log('volume =', con.Volume().toFixed(4));
  