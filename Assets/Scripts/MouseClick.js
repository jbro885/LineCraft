var prefab : Transform;
var ghost  : Transform;
var first : GameObject;
var second : GameObject;

var v3RelativeUp : Vector3;
var v3RelativeLeft : Vector3;
var v3RelativeForward : Vector3;
var xQuaternion : Quaternion;
var yQuaternion : Quaternion;
var zQuaternion : Quaternion;

//#include Math;
//import Mathf;

function truncate(_value)
{
  if (_value<0) return Mathf.Ceil(_value);
  else return Mathf.Floor(_value);
}

//var speed = 2;
function Update () {
    //if (Input.GetKeyDown ("Fire1"))
 
/* 
    //character controller
 	var controller : CharacterController = GetComponent(CharacterController);
	
	//Rotate around y - axis
	//transform.Rotate(0, Input.GetAxis ("Horizontal"), 0);
    
    //var up = transform.TransformDirection(Vector3.up);
    //var uspeed = speed * Input.GetAxis ("Horizontal");
    
    var right = transform.TransformDirection(Vector3.right);
    var rspeed = speed * Input.GetAxis ("Horizontal");
    
	//Move forward / backward
	var forward = transform.TransformDirection(Vector3.forward);
	var fspeed = speed * Input.GetAxis ("Vertical");
	controller.Move(forward * fspeed + right * rspeed);
    */
    

//GetKeyDown("space"))
//GetAxis("click")

        var cam = GameObject.FindWithTag("MainCamera");
        var player = GameObject.FindWithTag("Player");
        


    
    
    if(Input.GetAxis("click"))// && (transform.localPosition % 108) = 0)
    {
        
    
    //transform.position = Vector3(0, 0, 0);
    //transform.localPosition = Vector3(0, 0, 0);
        //player.transform.localPosition = Vector3(0, 0, 0); //on right is location of interest
        //cam.transform.localPosition = Vector3(0, 0, 0); //on right is location of interest
        print ("x: "+cam.transform.eulerAngles.x+",  y: "+cam.transform.eulerAngles.y+",  z: "+cam.transform.eulerAngles.z+",  ");
        //if(!object)
        //{
        //    player = object;
        //}
        //first = player;
        
        //+Vector3(my_x,my_y,my_z)
        
        //close
        //Vector3(my_x,my_y,my_z)-player.transform.forward
        
        var x;
        var y;
        var z;
        
        //Instantiate (prefab, Vector3(my_x,my_y,my_z), Quaternion.Euler(cam.transform.eulerAngles.x, cam.transform.eulerAngles.y+90, cam.transform.eulerAngles.z));
        
        /*
        var intvalue = Math.floor( floatvalue );
        var intvalue = Math.ceil( floatvalue ); 
        var intvalue = Math.round( floatvalue );
        */
        
        //snap to angle: angle quantazation
        var metrica = 90;
        var metricb = 90;
        var metricc = 90;
        
        //snap to grid: distance quantazation
        var metricx = 1;
        var metricy = 1;
        var metricz = 1;
        
        //var anglex: int;
        var my_x = transform.position.x;
        var my_y = transform.position.y;
        var my_z = transform.position.z;//player.transform.forward.z;
        
        var anglex = (cam.transform.eulerAngles.x-180+90-10);
        var angley = (cam.transform.eulerAngles.y);
        var anglez = (cam.transform.eulerAngles.z);
        
        anglex = truncate(      (anglex)  /metrica)*metrica;
        angley = truncate(      (angley)  /metricb)*metricb;
        anglez = truncate(      (anglez)  /metricc)*metricc;
        
        my_x = truncate(      (my_x)  /metricx)*metricx;
        my_y = truncate(      (my_y)  /metricy)*metricy;
        my_z = truncate(      (my_z)  /metricz)*metricz;
        
        

    

    /*
     v3RelativeUp = transform.TransformDirection (Vector3.up);
     v3RelativeLeft = transform.TransformDirection (Vector3.left);
     v3RelativeForward = transform.TransformDirection (Vector3.forward);

     xQuaternion = Quaternion.AxisAngle (v3RelativeUp, Mathf.Deg2Rad * my_x); 
     yQuaternion = Quaternion.AxisAngle (v3RelativeLeft, Mathf.Deg2Rad * my_y); 
     zQuaternion = Quaternion.AxisAngle (v3RelativeForward, Mathf.Deg2Rad * my_z);
     */
        Instantiate (prefab, Vector3(my_x,my_y,my_z), Quaternion.Euler(anglex, angley, anglez));

    }
    else
    {
        /*print ("click"+transform.position);
        
        object = Instantiate (ghost, Vector3(my_x, my_y, my_z), Quaternion.Euler(player.transform.eulerAngles.x, player.transform.eulerAngles.y, player.transform.eulerAngles.z));
        print("off");*/
    }
    //Destroy(object);
}