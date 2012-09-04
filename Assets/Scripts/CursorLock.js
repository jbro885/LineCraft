
function Update () {
  Screen.lockCursor = true;
  Debug.DrawRay (transform.position, Vector3.forward * 10, Color.green);
  //Debug.DrawRay(ray.origin, ray.direction * 50, Color,red);
}