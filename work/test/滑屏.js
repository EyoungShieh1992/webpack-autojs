// let btn = textContains("很抱歉").findOne()
// console.log(btn)

// var name = getPackageName("百度极速版"); //返回"com.tencent.mobileqq"
// console.log(name)

function bezier_curves (cp, t) {
  var cx = 3.0 * (cp[1].x - cp[0].x);
  var bx = 3.0 * (cp[2].x - cp[1].x) - cx;
  var ax = cp[3].x - cp[0].x - cx - bx;
  var cy = 3.0 * (cp[1].y - cp[0].y);
  var by = 3.0 * (cp[2].y - cp[1].y) - cy;
  var ay = cp[3].y - cp[0].y - cy - by;

  var tSquared = t * t;
  var tCubed = tSquared * t;
  var result = {
    "x": 0,
    "y": 0
  };
  result.x = (ax * tCubed) + (bx * tSquared) + (cx * t) + cp[0].x;
  result.y = (ay * tCubed) + (by * tSquared) + (cy * t) + cp[0].y;
  return result;
}

let swipeRandom = function (qx, qy, zx, zy, time) {
  var xxy = [time];
  var point = [];
  var dx0 = {
    "x": qx,
    "y": qy
  };
  var dx1 = {
    "x": random(qx - 100, qx + 100),
    "y": random(qy, qy + 50)
  };
  var dx2 = {
    "x": random(zx - 100, zx + 100),
    "y": random(zy, zy + 50),
  };
  var dx3 = {
    "x": zx,
    "y": zy
  };
  point.push(dx0);
  point.push(dx1);
  point.push(dx2);
  point.push(dx3);
  // log(point[3].x)
  for (let i = 0; i < 1.2; i += 0.08) {
    var xxyy = [parseInt(bezier_curves(point, i).x), parseInt(bezier_curves(point, i).y)]
    xxy.push(xxyy);
  }
  //  log(xxy);
  gesture.apply(null, xxy);
};

swipeRandom(device.width / 2, device.height - 250, 100, 0, 300)
